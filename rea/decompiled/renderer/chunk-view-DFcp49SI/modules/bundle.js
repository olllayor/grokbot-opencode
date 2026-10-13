import { c as c_1, r as r_1, u as u_1, j as j_1, p as p_1, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { I, x, Z, J, b3, P as P_1, cj, z as Rt1, ck, an, ah } from "./index-ZYxf-aBb.js";
import { x as x_1, i, aG, u as u_2 } from "./index.eager-platform-Dcfeegfw.js";
import { b7, hw, hx, hy, eY, a_, a$, c1, hz, b0 as Yt, bt, d0, bY, hA, hB, hC, hD, hE, aU, hF, hG, hH, c_, hI, cf, cR, cZ, hJ, cS, c$, cU, b9, hK, hL, ba, hM, hN, d1, hO, hP, hQ, cT, hR, cW, cY, hS, cg, hT, hU, cF, cw, hV, hW, hX, bc, hY, hZ, h_, h$, i0, i1, i2, cK, cJ, i3, i4, i5, i6, cL, i7, i8, i9, cQ, ia as ia_1, ib, ic, id, ie, d2, ig, ih, ii as ii_1, ij, ik, aZ as Fl1, il, im, io } from "./index.eager-app-Cj5f8Gby.js";
import { a as Ze, b as b_1, c as c_2, d as Fe, T as T_2, e as Kt1, f as Vt1, g as _t, h as Tt, i as i_2, j as j_2, k as Bt1, l as Ft, m as Pt, n as size, o as Sl, p as Jl1, q as Ns, r as r_2, s as s_1, t as Wl1, v as Cl } from "./chunk-team-setup-row-BCHimoZ0.js";
import { a as _l } from "./chunk-widget-BJbdljQ9.js";
import { v, b as b_2, c as c_3, d as d_1 } from "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import { a as Ls, c as c_4, p as p_2, s as s_2, d as d_2, T as T_3 } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import { e } from "./index.eager-common-CdCvBQNJ.js";
import { u as u_3, f, T as T_4, a as Bl } from "./chunk-team-setup-new-skill-dialog-sf9oPof1.js";
import { f as Zl1 } from "./chunk-team-bot-details-rows-zXlABTd_.js";
import { T as T_5 } from "./chunk-team-setup-new-secret-dialog-BMvn0nac.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
import "./chunk-card-field-BW4hZ8b8.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "98db17b5-efce-451f-9c92-8ebb7beb1660";
            e._sentryDebugIdIdentifier = "sentry-dbid-98db17b5-efce-451f-9c92-8ebb7beb1660";
        }
    } catch (e) {}
})();
const Vl = {
    status: "empty"
};
const ms = ()=>Vl;
const Fl = ()=>{};
function useKl(s) {
    const e = c_1.c(11);
    const teamContext = b7().grokBotPlugins.teamContext;
    let n;
    if (e[0] !== s || e[1] !== teamContext) {
        n = s == null || s.length === 0 ? null : teamContext.userBotMemoriesFor(s);
        e[0] = s;
        e[1] = teamContext;
        e[2] = n;
    } else {
        n = e[2];
    }
    const l = n;
    const c = r_1.useSyncExternalStore(l?.subscribe ?? hw, l?.get ?? ms, l?.get ?? ms);
    let r;
    if (e[3] !== c) {
        r = hx(c);
        e[3] = c;
        e[4] = r;
    } else {
        r = e[4];
    }
    let load;
    if (e[5] !== c) {
        load = hy(c);
        e[5] = c;
        e[6] = load;
    } else {
        load = e[6];
    }
    const reload = l?.refresh ?? Fl;
    let a;
    if (e[7] !== r || e[8] !== load || e[9] !== reload) {
        a = {
            memories: r,
            load,
            reload
        };
        e[7] = r;
        e[8] = load;
        e[9] = reload;
        e[10] = a;
    } else {
        a = e[10];
    }
    return a;
}
function Ul() {
    const s = c_1.c(2);
    const teamContext = b7().grokBotPlugins.teamContext;
    let t;
    if (s[0] !== teamContext) {
        t = (n, l)=>teamContext.promoteToTeam(n, l);
        s[0] = teamContext;
        s[1] = t;
    } else {
        t = s[1];
    }
    return t;
}
const ht = {
    intro: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    date: {
        kMwMTN: "sand-169k319",
        kcqcaj: "sand-ss6m8b",
        $$css: true
    },
    text: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kMwMTN: "sand-tyxrsu",
        khDVqt: "sand-126k92a",
        kHjlTd: "sand-j0a0fe",
        kfSwDN: "sand-1hx0egp",
        $$css: true
    },
    textClamped: {
        k1xSpc: "sand-104kibb",
        kJFfOR: "sand-najbk2",
        kgKLqz: "sand-1ua5tub",
        kXHlph: "sand-6ikm8r",
        kORKVm: "sand-10wlt62",
        $$css: true
    },
    toggle: {
        kLKAdn: "sand-exx8yu",
        kwRFfy: "sand-yri2b",
        kGO01o: "sand-18d9i69",
        kZCmMZ: "sand-1c1uobl",
        kMzoRj: "sand-c342km",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-169k319",
        kkrTdU: "sand-1ypdohk",
        kMv6JI: "sand-jb2p0i",
        $$css: true
    },
    more: {
        kVAEAm: "sand-10l6tqk",
        krVfgx: "sand-1ey2m1c",
        kt4wiu: "sand-tijo5x",
        kZCmMZ: "sand-1mfogq2",
        kKwaWg: "sand-1latgs6 sand-ht239h",
        $$css: true
    },
    capped: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    empty: {
        keoZOQ: "sand-1xmf6yo",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
function MsComponent(s) {
    MsComponent.d = 1018;
    const e = c_1.c(20);
    const { text } = s;
    const { _ } = u_1();
    const [l, setL] = r_1.useState(false);
    const [r, setR] = r_1.useState(false);
    let d;
    if (e[0] !== l) {
        d = ()=>l;
        e[0] = l;
        e[1] = d;
    } else {
        d = e[1];
    }
    const a = x_1(d);
    let m;
    if (e[2] !== a) {
        m = ()=>(j)=>{
                if (j === null) {
                    return;
                }
                const N = ()=>{
                    if (!a()) {
                        setR(j.scrollHeight > j.clientHeight + 1);
                    }
                };
                N();
                if (typeof ResizeObserver === "undefined") {
                    return;
                }
                const k = new ResizeObserver(N);
                k.observe(j);
                return ()=>k.disconnect();
            };
        e[2] = a;
        e[3] = m;
    } else {
        m = e[3];
    }
    const [f] = r_1.useState(m);
    let u;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            className: "sand-1n2onr6 sand-kh2ocl sand-euugli"
        };
        e[4] = u;
    } else {
        u = e[4];
    }
    let p;
    if (e[5] !== l) {
        p = p_1(a_.body1, a$.regular, ht.text, !l && ht.textClamped);
        e[5] = l;
        e[6] = p;
    } else {
        p = e[6];
    }
    let y;
    if (e[7] !== p || e[8] !== text) {
        y = <p ref={f} {...p}>{text}</p>;
        e[7] = p;
        e[8] = text;
        e[9] = y;
    } else {
        y = e[9];
    }
    let h;
    if (e[10] !== _ || e[11] !== l || e[12] !== r) {
        h = r && !l ? <button aria-expanded={false} onClick={()=>setL(true)} type="button" {...p_1(a_.body1, ht.toggle, ht.more)}>{_({
            id: "2vdb1P"
        })}</button> : null;
        e[10] = _;
        e[11] = l;
        e[12] = r;
        e[13] = h;
    } else {
        h = e[13];
    }
    let b;
    if (e[14] !== l) {
        b = l ? <button aria-expanded onClick={()=>setL(false)} type="button" {...p_1(a_.body1, ht.toggle)}><T_1 id="6lGV3K"/></button> : null;
        e[14] = l;
        e[15] = b;
    } else {
        b = e[15];
    }
    let E;
    if (e[16] !== y || e[17] !== h || e[18] !== b) {
        E = <div {...u}>{y}{h}{b}</div>;
        e[16] = y;
        e[17] = h;
        e[18] = b;
        e[19] = E;
    } else {
        E = e[19];
    }
    return E;
}
function SComponent(s) {
    SComponent.d = 1019;
    const e = c_1.c(19);
    const { entries, total, intro } = s;
    const { _ } = u_1();
    let r;
    if (e[0] !== entries.length) {
        r = entries.length.toLocaleString(eY());
        e[0] = entries.length;
        e[1] = r;
    } else {
        r = e[1];
    }
    const newest = r;
    let d;
    if (e[2] !== total) {
        d = total.toLocaleString(eY());
        e[2] = total;
        e[3] = d;
    } else {
        d = e[3];
    }
    const all = d;
    let m;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-euugli"
        };
        e[4] = m;
    } else {
        m = e[4];
    }
    let f;
    if (e[5] !== intro) {
        f = intro === null ? null : <p {...p_1(a_.body1, ht.intro)}>{intro ?? <T_1 id="pw1hU+"/>}</p>;
        e[5] = intro;
        e[6] = f;
    } else {
        f = e[6];
    }
    let u;
    if (e[7] !== all || e[8] !== entries.length || e[9] !== newest || e[10] !== total) {
        u = entries.length > 0 && total > entries.length ? <p {...p_1(a_.body2, ht.capped)}><T_1 id="p4C0h8" values={{
            newest,
            all
        }}/></p> : null;
        e[7] = all;
        e[8] = entries.length;
        e[9] = newest;
        e[10] = total;
        e[11] = u;
    } else {
        u = e[11];
    }
    let p;
    if (e[12] !== _ || e[13] !== entries) {
        p = entries.length === 0 ? <p {...p_1(a_.body2, ht.empty)}><T_1 id="2cRvsl"/></p> : <ul aria-label={_({
            id: "QCEzof"
        })} className="sand-78zum5 sand-dt5ytf sand-1c1vhfx sand-1gslohp sand-14z9mp sand-at24cr sand-1lziwak sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-e8uvvx">{entries.map(WlComponent)}</ul>;
        e[12] = _;
        e[13] = entries;
        e[14] = p;
    } else {
        p = e[14];
    }
    let y;
    if (e[15] !== f || e[16] !== u || e[17] !== p) {
        y = <div {...m}>{f}{u}{p}</div>;
        e[15] = f;
        e[16] = u;
        e[17] = p;
        e[18] = y;
    } else {
        y = e[18];
    }
    return y;
}
function WlComponent(s) {
    return <li key={s.factId ?? `${s.date}-${s.text}`} className="sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-1jnr06f sand-euugli"><span {...p_1(a_.body2, ht.date)}>{s.date}</span><MsComponent text={s.text}/></li>;
}
const Ut = {
    header: {
        kGNEyG: "sand-1qjc9v5",
        kjj79g: "sand-l56j7k",
        kAzted: "sand-1wiwyrm",
        kZCmMZ: "sand-1oiqv2n",
        kwRFfy: "sand-15zmtp0",
        kt9PQ7: "sand-1hkp6id",
        kfdmCh: "sand-1q0q8m5",
        kL6WhQ: "sand-19145p9",
        $$css: true
    },
    title: {
        k9WMMc: "sand-2b8uid",
        $$css: true
    },
    body: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kOIVth: "sand-ou54vl",
        kzQI83: "sand-1iyjqo2",
        kLKAdn: "sand-yamay9",
        kGO01o: "sand-x6bls6",
        kORKVm: "sand-1odjw0f",
        $$css: true
    }
};
function BsComponent(s) {
    BsComponent.d = 1050;
    const e = c_1.c(20);
    const { mark, title, onClose, children } = s;
    let style;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        style = [
            a_.body1,
            a$.medium,
            Ut.title
        ];
        e[0] = style;
    } else {
        style = e[0];
    }
    let o;
    if (e[1] !== title) {
        o = <x.Title style={style}>{title}</x.Title>;
        e[1] = title;
        e[2] = o;
    } else {
        o = e[2];
    }
    let d;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        d = <x.CloseButton/>;
        e[3] = d;
    } else {
        d = e[3];
    }
    let a;
    if (e[4] !== o) {
        a = <x.Header style={Ut.header}>{o}{d}</x.Header>;
        e[4] = o;
        e[5] = a;
    } else {
        a = e[5];
    }
    let m;
    if (e[6] !== children || e[7] !== mark) {
        m = <x.Body style={Ut.body}>{mark}{children}</x.Body>;
        e[6] = children;
        e[7] = mark;
        e[8] = m;
    } else {
        m = e[8];
    }
    let f;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        f = <T_1 id="DPfwMq"/>;
        e[9] = f;
    } else {
        f = e[9];
    }
    let u;
    if (e[10] !== onClose) {
        u = <x.Action onClick={onClose} variant="tertiary">{f}</x.Action>;
        e[10] = onClose;
        e[11] = u;
    } else {
        u = e[11];
    }
    let p;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        p = <x.ActionSpacer/>;
        e[12] = p;
    } else {
        p = e[12];
    }
    let y;
    if (e[13] !== u) {
        y = <Zl1>{u}{p}</Zl1>;
        e[13] = u;
        e[14] = y;
    } else {
        y = e[14];
    }
    let h;
    if (e[15] !== onClose || e[16] !== a || e[17] !== m || e[18] !== y) {
        h = <Ls height="hug" onClose={onClose}>{a}{m}{y}</Ls>;
        e[15] = onClose;
        e[16] = a;
        e[17] = m;
        e[18] = y;
        e[19] = h;
    } else {
        h = e[19];
    }
    return h;
}
function Zs1Component(s) {
    Zs1Component.d = 1049;
    const e = c_1.c(10);
    const { entries, title, intro, onClose } = s;
    let mark;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        mark = <span className="sand-amitd3 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-15yg21f sand-nnlda6 sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-hojbe8 sand-vvtkfd sand-1o0liin"><I aria-hidden name="library" size="xl"/></span>;
        e[0] = mark;
    } else {
        mark = e[0];
    }
    let o;
    if (e[1] !== title) {
        o = title ?? <T_1 id="QCEzof"/>;
        e[1] = title;
        e[2] = o;
    } else {
        o = e[2];
    }
    let d;
    if (e[3] !== entries || e[4] !== intro) {
        d = <SComponent entries={entries} intro={intro} total={entries.length}/>;
        e[3] = entries;
        e[4] = intro;
        e[5] = d;
    } else {
        d = e[5];
    }
    let a;
    if (e[6] !== onClose || e[7] !== o || e[8] !== d) {
        a = <BsComponent mark={mark} onClose={onClose} title={o}>{d}</BsComponent>;
        e[6] = onClose;
        e[7] = o;
        e[8] = d;
        e[9] = a;
    } else {
        a = e[9];
    }
    return a;
}
function Ds(agentId, e) {
    const t = c_1.c(37);
    let n;
    if (t[0] !== e) {
        n = hz(e, "memories");
        t[0] = e;
        t[1] = n;
    } else {
        n = t[1];
    }
    let l;
    if (t[2] !== agentId || t[3] !== n) {
        l = {
            agentId,
            entryId: n
        };
        t[2] = agentId;
        t[3] = n;
        t[4] = l;
    } else {
        l = t[4];
    }
    const c = c1("widget", l);
    let r;
    if (t[5] !== e) {
        r = hz(e, "plugins");
        t[5] = e;
        t[6] = r;
    } else {
        r = t[6];
    }
    let o;
    if (t[7] !== agentId || t[8] !== r) {
        o = {
            agentId,
            entryId: r
        };
        t[7] = agentId;
        t[8] = r;
        t[9] = o;
    } else {
        o = t[9];
    }
    const plugins = c1("widget", o);
    let a;
    if (t[10] !== e) {
        a = hz(e, "skills");
        t[10] = e;
        t[11] = a;
    } else {
        a = t[11];
    }
    let m;
    if (t[12] !== agentId || t[13] !== a) {
        m = {
            agentId,
            entryId: a
        };
        t[12] = agentId;
        t[13] = a;
        t[14] = m;
    } else {
        m = t[14];
    }
    const skills = c1("widget", m);
    let u;
    if (t[15] !== e) {
        u = hz(e, "files");
        t[15] = e;
        t[16] = u;
    } else {
        u = t[16];
    }
    let p;
    if (t[17] !== agentId || t[18] !== u) {
        p = {
            agentId,
            entryId: u
        };
        t[17] = agentId;
        t[18] = u;
        t[19] = p;
    } else {
        p = t[19];
    }
    const files = c1("widget", p);
    let h;
    if (t[20] !== e) {
        h = hz(e, "secrets");
        t[20] = e;
        t[21] = h;
    } else {
        h = t[21];
    }
    let b;
    if (t[22] !== agentId || t[23] !== h) {
        b = {
            agentId,
            entryId: h
        };
        t[22] = agentId;
        t[23] = h;
        t[24] = b;
    } else {
        b = t[24];
    }
    const secrets = c1("widget", b);
    let j;
    if (t[25] !== e) {
        j = hz(e, "automations");
        t[25] = e;
        t[26] = j;
    } else {
        j = t[26];
    }
    let N;
    if (t[27] !== agentId || t[28] !== j) {
        N = {
            agentId,
            entryId: j
        };
        t[27] = agentId;
        t[28] = j;
        t[29] = N;
    } else {
        N = t[29];
    }
    const k = c1("widget", N);
    let _;
    if (t[30] !== files || t[31] !== secrets || t[32] !== k || t[33] !== c || t[34] !== plugins || t[35] !== skills) {
        _ = {
            memories: c,
            plugins,
            skills,
            files,
            secrets,
            automations: k
        };
        t[30] = files;
        t[31] = secrets;
        t[32] = k;
        t[33] = c;
        t[34] = plugins;
        t[35] = skills;
        t[36] = _;
    } else {
        _ = t[36];
    }
    return _;
}
function Vs(s) {
    const e = c_1.c(3);
    const t = Z()?.holdEntry;
    let n;
    if (e[0] !== s || e[1] !== t) {
        n = (l)=>{
            t?.(s, "always");
            l();
        };
        e[0] = s;
        e[1] = t;
        e[2] = n;
    } else {
        n = e[2];
    }
    return n;
}
const Fs = 3;
const Gl = 3;
function ss(s, e, t, n = Fs) {
    const l = new Set;
    const c = [];
    for (const r of s){
        const o = e(r);
        if (!l.has(o) && (l.add(o), c.push(t(r, o)), c.length >= n)) {
            break;
        }
    }
    return c;
}
const ql = {
    names: {
        kzQI83: "sand-1iyjqo2",
        kCS8Yb: "sand-1r8uery",
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    }
};
function Zt(s) {
    return new Intl.ListFormat(eY(), {
        style: "long",
        type: "conjunction"
    }).format(s);
}
function Zl(names, e, countLabelOf) {
    const n = [];
    const l = (c)=>{
        const r = n.at(-1);
        if (r === undefined || c.length < r.length) {
            n.push(c);
        }
    };
    for(let c = Math.min(names.length, Gl); c >= 1; c--){
        l(c === names.length ? Zt(names) : Zt([
            ...names.slice(0, c),
            e(names.length - c)
        ]));
    }
    if (countLabelOf !== undefined && names.length > 1) {
        l(countLabelOf(names.length));
    }
    return n;
}
function Hl(s, e) {
    const t = e.length - 1;
    const s_clientWidth = s.clientWidth;
    if (t <= 0 || s_clientWidth === 0) {
        return 0;
    }
    const l = document.createElement("span");
    l.style.position = "absolute";
    l.style.width = "max-content";
    l.style.whiteSpace = "nowrap";
    l.style.visibility = "hidden";
    s.append(l);
    try {
        for(let c = 0; c < t; c++){
            l.textContent = e[c] ?? "";
            if (l.getBoundingClientRect().width <= s_clientWidth) {
                return c;
            }
        }
        return t;
    } finally{
        l.remove();
    }
}
function Ft1Component(s) {
    Ft1Component.d = 527;
    const e = c_1.c(27);
    const { icons, names, emptyLabel, countLabelOf } = s;
    const { _: __1 } = u_1();
    let o;
    if (e[0] !== emptyLabel || e[1] !== names) {
        o = names.length === 0 ? emptyLabel ?? "" : Zt(names);
        e[0] = emptyLabel;
        e[1] = names;
        e[2] = o;
    } else {
        o = e[2];
    }
    const d = o;
    let a;
    if (e[3] !== __1 || e[4] !== countLabelOf || e[5] !== d || e[6] !== names) {
        a = names.length === 0 ? [
            d
        ] : Zl(names, (P)=>__1({
                id: "f7ugFQ",
                values: {
                    count: P
                }
            }), countLabelOf);
        e[3] = __1;
        e[4] = countLabelOf;
        e[5] = d;
        e[6] = names;
        e[7] = a;
    } else {
        a = e[7];
    }
    const m = a;
    const [f, setF] = r_1.useState(0);
    let p;
    if (e[8] !== m) {
        p = ()=>m;
        e[8] = m;
        e[9] = p;
    } else {
        p = e[9];
    }
    const y = x_1(p);
    let h;
    if (e[10] !== y) {
        h = ()=>(P)=>{
                if (P === null) {
                    return;
                }
                const z = ()=>setF(Hl(P, y()));
                z();
                if (typeof ResizeObserver === "undefined") {
                    return;
                }
                const I = new ResizeObserver(z);
                I.observe(P);
                return ()=>I.disconnect();
            };
        e[10] = y;
        e[11] = h;
    } else {
        h = e[11];
    }
    const [b] = r_1.useState(h);
    const E = m[Math.min(f, m.length - 1)] ?? "";
    let j;
    let N;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        j = {
            className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli"
        };
        N = {
            className: "sand-78zum5 sand-6s0dn4 sand-2lah0s"
        };
        e[12] = j;
        e[13] = N;
    } else {
        j = e[12];
        N = e[13];
    }
    let k;
    if (e[14] !== icons) {
        k = r_1.Children.map(icons.slice(0, Fs), QlComponent);
        e[14] = icons;
        e[15] = k;
    } else {
        k = e[15];
    }
    let _;
    if (e[16] !== k) {
        _ = <span {...N}>{k}</span>;
        e[16] = k;
        e[17] = _;
    } else {
        _ = e[17];
    }
    let T;
    if (e[18] !== m) {
        T = m.join("\0");
        e[18] = m;
        e[19] = T;
    } else {
        T = e[19];
    }
    const D = E === d ? undefined : d;
    let O;
    if (e[20] !== D || e[21] !== T || e[22] !== E) {
        O = <Yt key={T} level="body1" ref={b} style={ql.names} title={D}>{E}</Yt>;
        e[20] = D;
        e[21] = T;
        e[22] = E;
        e[23] = O;
    } else {
        O = e[23];
    }
    let $;
    if (e[24] !== O || e[25] !== _) {
        $ = <span {...j}>{_}{O}</span>;
        e[24] = O;
        e[25] = _;
        e[26] = $;
    } else {
        $ = e[26];
    }
    return $;
}
function QlComponent(s) {
    return <span className="sand-3nfvp2 sand-2lah0s sand-w01apr sand-1pwwqoy">{s}</span>;
}
function useNt(s) {
    const e = c_1.c(17);
    const { agentId, entryId, kind, slotStatus, sandArea, onExpand, onCollapse } = s;
    const { localAnswers } = b7();
    const { respondToWidget } = bt();
    const [f, setF] = r_1.useState(null);
    const pRef = r_1.useRef(0);
    const y = f !== null && f.fromStatus === slotStatus ? f : null;
    let h;
    if (e[0] !== agentId || e[1] !== entryId || e[2] !== kind || e[3] !== localAnswers || e[4] !== onCollapse || e[5] !== onExpand || e[6] !== respondToWidget || e[7] !== sandArea || e[8] !== slotStatus) {
        h = (answer, onFail)=>{
            if (agentId == null) {
                return;
            }
            const T = {
                agentId,
                entryId: hz(entryId, kind)
            };
            const D = pRef.current = pRef.current + 1;
            const O = ()=>D !== pRef.current;
            setF(null);
            localAnswers.record("widget", T, answer.resolution);
            onCollapse();
            const $ = ()=>{
                if (!O()) {
                    localAnswers.clear("widget", T);
                    setF({
                        answer,
                        fromStatus: slotStatus,
                        onFail
                    });
                    onFail?.();
                    onExpand();
                }
            };
            const P = (z)=>respondToWidget({
                    agentId,
                    entryId,
                    value: z
                });
            P(answer.value).then(async (z)=>{
                if (z?.accepted !== false) {
                    return;
                }
                const { fallback } = answer;
                if (fallback === undefined) {
                    $();
                    return;
                }
                if (O()) {
                    return;
                }
                localAnswers.record("widget", T, fallback.resolution);
                if ((await P(fallback.value))?.accepted === false) {
                    $();
                }
            }).catch((z)=>{
                d0(z, {
                    tags: {
                        sand_area: sandArea
                    }
                });
                $();
            });
        };
        e[0] = agentId;
        e[1] = entryId;
        e[2] = kind;
        e[3] = localAnswers;
        e[4] = onCollapse;
        e[5] = onExpand;
        e[6] = respondToWidget;
        e[7] = sandArea;
        e[8] = slotStatus;
        e[9] = h;
    } else {
        h = e[9];
    }
    const send = h;
    const didFail = y !== null;
    let retry;
    if (e[10] !== y || e[11] !== send) {
        retry = ()=>{
            if (y === null) {
                return false;
            }
            send(y.answer, y.onFail);
            return true;
        };
        e[10] = y;
        e[11] = send;
        e[12] = retry;
    } else {
        retry = e[12];
    }
    let N;
    if (e[13] !== send || e[14] !== didFail || e[15] !== retry) {
        N = {
            didFail,
            send,
            retry
        };
        e[13] = send;
        e[14] = didFail;
        e[15] = retry;
        e[16] = N;
    } else {
        N = e[16];
    }
    return N;
}
function It1Component(s) {
    It1Component.d = 546;
    const e = c_1.c(2);
    const { tap } = s;
    let n;
    if (e[0] !== tap.didFail) {
        n = tap.didFail ? <Ze><T_1 id="by/FZp"/></Ze> : null;
        e[0] = tap.didFail;
        e[1] = n;
    } else {
        n = e[1];
    }
    return n;
}
function Ns1Component(s) {
    Ns1Component.d = 517;
    const e = c_1.c(88);
    const { entry, slot, agentId, isReadOnly, isExpanded, onExpand, onCollapse } = s;
    const { _: __1 } = u_1();
    const m = r_1.useId();
    const f = bY(agentId);
    const u = b_1();
    const p = c_2();
    let y;
    if (e[0] !== p) {
        y = ()=>(B)=>{
                p?.enter(B);
                return ()=>p?.retire(B);
            };
        e[0] = p;
        e[1] = y;
    } else {
        y = e[1];
    }
    const [h] = r_1.useState(y);
    let b;
    if (e[2] !== entry.id) {
        b = hz(entry.id, "automations");
        e[2] = entry.id;
        e[3] = b;
    } else {
        b = e[3];
    }
    let E;
    if (e[4] !== agentId || e[5] !== b) {
        E = {
            agentId,
            entryId: b
        };
        e[4] = agentId;
        e[5] = b;
        e[6] = E;
    } else {
        E = e[6];
    }
    const j = c1("widget", E);
    let N;
    if (e[7] !== agentId || e[8] !== entry.id || e[9] !== onCollapse || e[10] !== onExpand || e[11] !== slot.status) {
        N = {
            agentId,
            entryId: entry.id,
            kind: "automations",
            slotStatus: slot.status,
            sandArea: "team-automations",
            onExpand,
            onCollapse
        };
        e[7] = agentId;
        e[8] = entry.id;
        e[9] = onCollapse;
        e[10] = onExpand;
        e[11] = slot.status;
        e[12] = N;
    } else {
        N = e[12];
    }
    const k = useNt(N);
    let _;
    let T;
    let D;
    let O;
    let prompt;
    let P;
    if (e[13] !== __1 || e[14] !== f || e[15] !== agentId || e[16] !== u || e[17] !== isExpanded || e[18] !== isReadOnly || e[19] !== j || e[20] !== onExpand || e[21] !== slot || e[22] !== k || e[23] !== m) {
        P = Symbol.for("react.early_return_sentinel");
        e: {
            const B = slot.automations ?? [];
            if (B.length === 0) {
                P = null;
                break e;
            }
            const { sourceName } = slot;
            const ce = hA(slot.status, j);
            _ = !isReadOnly && agentId != null && f?.harness === "temporal" && f.viewerIsOwner !== false && f.visibility === hB.team;
            let Re;
            if (e[30] !== __1) {
                Re = __1({
                    id: "dmYV6f"
                });
                e[30] = __1;
                e[31] = Re;
            } else {
                Re = e[31];
            }
            const title = Re;
            let Ge;
            if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
                Ge = [
                    <Kt1 key="clock" name="clock"/>
                ];
                e[32] = Ge;
            } else {
                Ge = e[32];
            }
            if (ce !== "proposed") {
                let Z;
                if (e[33] !== slot.failed) {
                    Z = slot.failed ?? [];
                    e[33] = slot.failed;
                    e[34] = Z;
                } else {
                    Z = e[34];
                }
                let J;
                if (e[35] !== Z) {
                    J = new Set(Z);
                    e[35] = Z;
                    e[36] = J;
                } else {
                    J = e[36];
                }
                const xe = J;
                let Ce;
                if (e[37] !== j || e[38] !== slot) {
                    Ce = new Set(hC(slot, j));
                    e[37] = j;
                    e[38] = slot;
                    e[39] = Ce;
                } else {
                    Ce = e[39];
                }
                const ne = Ce;
                let Oe;
                if (e[40] !== xe || e[41] !== ne) {
                    Oe = (Me)=>ne.has(Me.id) && !xe.has(Me.id);
                    e[40] = xe;
                    e[41] = ne;
                    e[42] = Oe;
                } else {
                    Oe = e[42];
                }
                const le = B.filter(Oe);
                let ke;
                if (e[43] !== __1 || e[44] !== xe.size || e[45] !== sourceName) {
                    ke = xe.size === 0 ? null : <Ze>{__1({
                        id: "I3xMkO",
                        values: {
                            0: xe.size,
                            sourceName
                        }
                    })}</Ze>;
                    e[43] = __1;
                    e[44] = xe.size;
                    e[45] = sourceName;
                    e[46] = ke;
                } else {
                    ke = e[46];
                }
                let _e;
                if (e[47] !== __1) {
                    _e = (Me)=>__1({
                            id: "qHmqo4",
                            values: {
                                count: Me
                            }
                        });
                    e[47] = __1;
                    e[48] = _e;
                } else {
                    _e = e[48];
                }
                let pe;
                if (e[49] !== __1 || e[50] !== sourceName) {
                    pe = __1({
                        id: "/IB6mQ",
                        values: {
                            sourceName
                        }
                    });
                    e[49] = __1;
                    e[50] = sourceName;
                    e[51] = pe;
                } else {
                    pe = e[51];
                }
                P = <Fe details={ke} isExpanded={false} summary=<Ft1Component countLabelOf={_e} emptyLabel={pe} icons={Ge} names={le.map(Yl)}/> title={title} titleId={m}/>;
                break e;
            }
            if (!isExpanded) {
                let Z;
                if (e[52] !== k) {
                    Z = <It1Component tap={k}/>;
                    e[52] = k;
                    e[53] = Z;
                } else {
                    Z = e[53];
                }
                P = <Fe details={Z} isExpanded={false} isSummaryPending onExpand={onExpand} summary=<T_1 id="8X559d" values={{
                    0: B.length
                }}/> title={title} titleId={m}/>;
                break e;
            }
            if (e[54] !== __1 || e[55] !== u.isChained) {
                prompt = u.isChained ? __1({
                    id: "zgak9k"
                }) : __1({
                    id: "K2MY8A"
                });
                e[54] = __1;
                e[55] = u.isChained;
                e[56] = prompt;
            } else {
                prompt = e[56];
            }
            let se;
            if (e[57] !== __1) {
                se = __1({
                    id: "4l4XAo"
                });
                e[57] = __1;
                e[58] = se;
            } else {
                se = e[58];
            }
            if (e[59] !== se) {
                O = {
                    label: se,
                    value: hE
                };
                e[59] = se;
                e[60] = O;
            } else {
                O = e[60];
            }
            if (e[61] !== __1) {
                T = __1({
                    id: "0Khkjg"
                });
                e[61] = __1;
                e[62] = T;
            } else {
                T = e[62];
            }
            D = hD(B.map(Xl));
        }
        e[13] = __1;
        e[14] = f;
        e[15] = agentId;
        e[16] = u;
        e[17] = isExpanded;
        e[18] = isReadOnly;
        e[19] = j;
        e[20] = onExpand;
        e[21] = slot;
        e[22] = k;
        e[23] = m;
        e[24] = _;
        e[25] = T;
        e[26] = D;
        e[27] = O;
        e[28] = prompt;
        e[29] = P;
    } else {
        _ = e[24];
        T = e[25];
        D = e[26];
        O = e[27];
        prompt = e[28];
        P = e[29];
    }
    if (P !== Symbol.for("react.early_return_sentinel")) {
        return P;
    }
    let z;
    if (e[63] !== T || e[64] !== D) {
        z = {
            label: T,
            value: D
        };
        e[63] = T;
        e[64] = D;
        e[65] = z;
    } else {
        z = e[65];
    }
    let options;
    if (e[66] !== z || e[67] !== O) {
        options = [
            O,
            z
        ];
        e[66] = z;
        e[67] = O;
        e[68] = options;
    } else {
        options = e[68];
    }
    let A;
    if (e[69] !== options || e[70] !== prompt) {
        A = {
            prompt,
            options
        };
        e[69] = options;
        e[70] = prompt;
        e[71] = A;
    } else {
        A = e[71];
    }
    const widget = A;
    let V;
    if (e[72] === Symbol.for("react.memo_cache_sentinel")) {
        V = {
            className: "sand-78zum5 sand-dt5ytf sand-167g77z sand-h8yej3 sand-euugli"
        };
        e[72] = V;
    } else {
        V = e[72];
    }
    let headerTrailing;
    if (e[73] !== u.step) {
        headerTrailing = u.step === null ? null : <T_2 step={u.step}/>;
        e[73] = u.step;
        e[74] = headerTrailing;
    } else {
        headerTrailing = e[74];
    }
    const isReadOnly_1 = !_;
    let onChoose;
    if (e[75] !== k) {
        onChoose = (B)=>k.send({
                resolution: {
                    kind: "answered",
                    value: B
                },
                value: B
            });
        e[75] = k;
        e[76] = onChoose;
    } else {
        onChoose = e[76];
    }
    let R;
    if (e[77] !== entry.id || e[78] !== widget || e[79] !== headerTrailing || e[80] !== isReadOnly_1 || e[81] !== onChoose) {
        R = <_l entryId={entry.id} headerTrailing={headerTrailing} isReadOnly={isReadOnly_1} onChoose={onChoose} widget={widget}/>;
        e[77] = entry.id;
        e[78] = widget;
        e[79] = headerTrailing;
        e[80] = isReadOnly_1;
        e[81] = onChoose;
        e[82] = R;
    } else {
        R = e[82];
    }
    let Q;
    if (e[83] !== k) {
        Q = <It1Component tap={k}/>;
        e[83] = k;
        e[84] = Q;
    } else {
        Q = e[84];
    }
    let q;
    if (e[85] !== R || e[86] !== Q) {
        q = <div ref={h} {...V}>{R}{Q}</div>;
        e[85] = R;
        e[86] = Q;
        e[87] = q;
    } else {
        q = e[87];
    }
    return q;
}
function Xl(s) {
    return s.id;
}
function Yl(s) {
    return s.name;
}
function Ks(s) {
    if (s.type === "group") {
        return s.listeners.flatMap((e)=>Ks(e));
    }
    return [
        s.type
    ];
}
const Jl = {
    slack: "slack",
    github: "github",
    origin: "origin",
    linear: "linear",
    sentry: "sentry",
    pagerduty: "pagerduty"
};
function ei(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Us(s, e) {
    const t = e.trim();
    if (t.length === 0) {
        return false;
    }
    const n = new RegExp(`(^|[^A-Za-z0-9_])${ei(t)}([^A-Za-z0-9_]|$)`, "i");
    return s.some((l)=>n.test(l));
}
function ls(s) {
    return [
        ...new Set([
            s.displayName,
            s.name
        ].map((e)=>e.trim().toLowerCase()))
    ];
}
function Ws(s, e) {
    const t = ls(e);
    if (Ks(s.trigger).map((l)=>Jl[l]).some((l)=>l !== undefined && t.includes(l))) {
        return true;
    }
    return t.some((l)=>Us([
            s.prompt,
            s.name
        ], l));
}
function ti(s, e) {
    return e.automations.some((t)=>Ws(t, s)) || ls(s).some((t)=>Us(e.skillTexts, t));
}
function si(s, e) {
    return [
        ...e.skillTexts,
        ...e.automations.flatMap((n)=>[
                n.name,
                n.prompt
            ])
    ].some((n)=>n.includes(s));
}
function ps(s) {
    if (s.done) {
        return 2;
    }
    if (s.checked) {
        return 0;
    }
    return 1;
}
function ni(pick, ownerPlugins) {
    const t = pick.trim().toLowerCase();
    return ownerPlugins.find((n)=>n.pluginId.toLowerCase() === t) ?? ownerPlugins.find((n)=>ls(n).includes(t));
}
function li(s, e) {
    const t = [];
    const n = new Set;
    const l = s.slot.reasons ?? {};
    const c = [
        ...(s.slot.plugins ?? []).map((r)=>({
                pick: r,
                sure: true
            })),
        ...(s.slot.suggestions ?? []).map((r)=>({
                pick: r,
                sure: false
            }))
    ];
    for (const { pick, sure } of c){
        const d = ni(pick, s.ownerPlugins);
        if (d === undefined || n.has(d.pluginId)) {
            continue;
        }
        n.add(d.pluginId);
        const a = e.has(d.pluginId);
        const m = Object.hasOwn(l, pick) ? l[pick]?.trim() : undefined;
        t.push({
            pluginId: d.pluginId,
            displayName: d.displayName,
            checked: sure && !a,
            done: a,
            ...sure ? {
                picked: true
            } : {},
            ...m === undefined || m.length === 0 ? {} : {
                reason: m
            }
        });
    }
    return t;
}
function ii(s, e) {
    return [
        ...s.ownerPlugins
    ].filter((t)=>ti(t, s)).sort((t, n)=>t.displayName.localeCompare(n.displayName)).map((t)=>{
        const n = e.has(t.pluginId);
        return {
            pluginId: t.pluginId,
            displayName: t.displayName,
            checked: !n,
            done: n
        };
    });
}
function ai(linkedPlugins) {
    const e = new Map;
    for (const t of linkedPlugins.filter((n)=>!n.hasConfiguredVariables)){
        for (const n of t.variableNames){
            e.set(n, e.get(n) ?? t.displayName);
        }
    }
    return e;
}
function oi(s, e, t) {
    const n = e?.trim() ?? "";
    if (n.length > 0) {
        return n;
    }
    const l = Object.hasOwn(t, s) ? t[s]?.trim() : undefined;
    if (l === undefined || l.length === 0) {
        return undefined;
    }
    return l;
}
function ri(s) {
    const e = s.slot.fallback !== true;
    const t = new Set(s.slot.secrets ?? []);
    const n = s.slot.reasons ?? {};
    const l = new Map(s.botSecrets.map((o)=>[
            o.name,
            o.description
        ]));
    const c = new Set([
        ...s.personalSecretNames,
        ...s.boxCardSecretNames
    ]);
    const r = ai(s.linkedPlugins);
    return [
        ...new Set([
            ...c,
            ...t,
            ...l.keys()
        ])
    ].filter((o)=>v(o) === null).sort().map((o)=>{
        const d = l.has(o);
        const pluginName = r.get(o);
        const m = e ? t.has(o) : si(o, s);
        const checked = !d && (m || pluginName !== undefined);
        const u = oi(o, l.get(o), n);
        return {
            name: o,
            checked,
            done: d,
            needsValue: !d && !c.has(o),
            ...u === undefined ? {} : {
                reason: u
            },
            ...pluginName === undefined ? {} : {
                pluginName
            }
        };
    }).sort((o, d)=>ps(o) - ps(d));
}
function di(s) {
    const e = new Set(s.linkedPlugins.map((l)=>l.pluginId));
    const t = s.slot.fallback !== true ? li(s, e) : ii(s, e);
    const n = new Set(t.map((l)=>l.pluginId));
    return [
        ...t,
        ...s.linkedPlugins.filter((l)=>!n.has(l.pluginId)).map((l)=>({
                pluginId: l.pluginId,
                displayName: l.displayName,
                checked: false,
                done: true
            }))
    ];
}
function ci(s) {
    const e = new Set(s.linkedPluginIds);
    const t = [];
    for (const n of s.automations){
        for (const l of s.ownerPlugins){
            if (!(e.has(l.pluginId) || !Ws(n, l))) {
                t.push({
                    automationName: n.name,
                    pluginDisplayName: l.displayName
                });
            }
        }
    }
    return t;
}
function ui(s) {
    return {
        name: s.name,
        prompt: s.prompt,
        trigger: s.trigger
    };
}
function Gs(agentId) {
    const e = c_1.c(15);
    const listing = cf(agentId);
    const n = cR(agentId);
    const l = cZ(agentId);
    const c = hJ(agentId);
    let isListingSettled;
    if (e[0] !== n) {
        isListingSettled = hI(n);
        e[0] = n;
        e[1] = isListingSettled;
    } else {
        isListingSettled = e[1];
    }
    let skillTexts;
    if (e[2] !== listing.plugins || e[3] !== l) {
        skillTexts = [
            ...c_(l, []).flatMap(hi),
            ...listing.plugins.filter(pi).flatMap(fi)
        ];
        e[2] = listing.plugins;
        e[3] = l;
        e[4] = skillTexts;
    } else {
        skillTexts = e[4];
    }
    let d;
    if (e[5] !== c) {
        d = c_(c, []).map(ui);
        e[5] = c;
        e[6] = d;
    } else {
        d = e[6];
    }
    let areAutomationsSettled;
    if (e[7] !== c) {
        areAutomationsSettled = hI(c);
        e[7] = c;
        e[8] = areAutomationsSettled;
    } else {
        areAutomationsSettled = e[8];
    }
    let m;
    if (e[9] !== listing || e[10] !== isListingSettled || e[11] !== skillTexts || e[12] !== d || e[13] !== areAutomationsSettled) {
        m = {
            listing,
            isListingSettled,
            skillTexts,
            automations: d,
            areAutomationsSettled
        };
        e[9] = listing;
        e[10] = isListingSettled;
        e[11] = skillTexts;
        e[12] = d;
        e[13] = areAutomationsSettled;
        e[14] = m;
    } else {
        m = e[14];
    }
    return m;
}
function fi(s) {
    return s.skills.flatMap(mi);
}
function mi(s) {
    return [
        s.name,
        s.content
    ];
}
function pi(s) {
    return s.isBotSkills;
}
function hi(s) {
    return [
        s.name,
        s.description,
        s.body
    ];
}
function qs(agentId, e, t) {
    const n = c_1.c(18);
    const l = bY(agentId);
    const { grokBotSecrets } = b7();
    aU(grokBotSecrets.loadPersonalNames);
    aU(grokBotSecrets.loadBoxCardNames);
    const r = hF();
    const o = hG();
    const d = hH(l?.serverId ?? null);
    let rows;
    if (n[0] !== d || n[1] !== o || n[2] !== r || n[3] !== e || n[4] !== t.automations || n[5] !== t.listing.plugins || n[6] !== t.skillTexts) {
        rows = ri({
            slot: e,
            personalSecretNames: c_(r, []),
            boxCardSecretNames: c_(o, []),
            botSecrets: c_(d, []),
            linkedPlugins: t.listing.plugins.map(gi),
            skillTexts: t.skillTexts,
            automations: t.automations
        });
        n[0] = d;
        n[1] = o;
        n[2] = r;
        n[3] = e;
        n[4] = t.automations;
        n[5] = t.listing.plugins;
        n[6] = t.skillTexts;
        n[7] = rows;
    } else {
        rows = n[7];
    }
    const isBoxCardUnreachable = o.status === "failed";
    let isSettled;
    if (n[8] !== d || n[9] !== o || n[10] !== r || n[11] !== t.areAutomationsSettled || n[12] !== t.isListingSettled) {
        isSettled = hI(d) && hI(r) && hI(o) && t.isListingSettled && t.areAutomationsSettled;
        n[8] = d;
        n[9] = o;
        n[10] = r;
        n[11] = t.areAutomationsSettled;
        n[12] = t.isListingSettled;
        n[13] = isSettled;
    } else {
        isSettled = n[13];
    }
    let u;
    if (n[14] !== rows || n[15] !== isBoxCardUnreachable || n[16] !== isSettled) {
        u = {
            rows,
            isBoxCardUnreachable,
            isSettled
        };
        n[14] = rows;
        n[15] = isBoxCardUnreachable;
        n[16] = isSettled;
        n[17] = u;
    } else {
        u = n[17];
    }
    return u;
}
function gi(s) {
    return {
        pluginId: s.pluginId,
        displayName: s.displayName,
        variableNames: s.variableNames,
        hasConfiguredVariables: s.hasConfiguredVariables === true
    };
}
const hs = new Set;
function ki(icon) {
    if (icon?.iconUrl != null && icon.iconUrl.length > 0) {
        return `url:${icon.iconUrl}`;
    }
    if (icon?.iconId != null && icon.iconId.length > 0) {
        return `id:${icon.iconId}`;
    }
    return "plug";
}
function yi(s) {
    return ss(s, (e)=>ki(e.icon), (e, t)=><P_1 {...e.icon} fallbackChip="setup" key={t} monoFallback="plug" name={e.displayName} size={size}/>);
}
function xi() {}
function Is1Component(s) {
    Is1Component.d = 519;
    const e = c_1.c(89);
    const { entry, slot, agentId, isReadOnly, isExpanded, onExpand, onCollapse } = s;
    const { _: __1 } = u_1();
    const { isChained } = b_1();
    const f = r_1.useId();
    const u = bY(agentId);
    const { mcp, localAnswers } = b7();
    const { plugins } = cS();
    const { catalog, hasMarketplaceLoaded } = c$();
    const j = J(catalog);
    const N = (S)=>j(plugins.find((te)=>te.pluginId === S.pluginId)?.name ?? S.displayName);
    const k = Gs(agentId);
    const _ = qs(agentId, slot, k);
    const setPlugins = cU();
    const D = r_1.useContext(b3);
    const O = b9("grok_bot_multiplayer");
    const $ = hz(entry.id, "plugins");
    const P = agentId == null ? null : {
        agentId,
        entryId: $
    };
    const z = c1("widget", {
        agentId,
        entryId: $
    });
    const I = c_4(agentId);
    let A;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        A = {
            kind: "idle"
        };
        e[0] = A;
    } else {
        A = e[0];
    }
    const [C, setC] = r_1.useState(A);
    const [H, setH] = r_1.useState(hs);
    let Y;
    if (e[1] !== agentId || e[2] !== entry.id || e[3] !== onCollapse || e[4] !== onExpand || e[5] !== slot.status) {
        Y = {
            agentId,
            entryId: entry.id,
            kind: "plugins",
            slotStatus: slot.status,
            sandArea: "team-carry-over",
            onExpand,
            onCollapse
        };
        e[1] = agentId;
        e[2] = entry.id;
        e[3] = onCollapse;
        e[4] = onExpand;
        e[5] = slot.status;
        e[6] = Y;
    } else {
        Y = e[6];
    }
    const R = useNt(Y);
    const ownerPlugins = plugins.filter(Ai).map(Ei);
    let q;
    if (e[7] !== catalog) {
        q = (S)=>cj(S.pluginId, catalog);
        e[7] = catalog;
        e[8] = q;
    } else {
        q = e[8];
    }
    const B = di({
        slot,
        ownerPlugins: ownerPlugins.filter(q),
        linkedPlugins: k.listing.plugins.filter(Oi).map(Ri),
        skillTexts: k.skillTexts,
        automations: k.automations
    });
    const L = hK(slot.status, z);
    const ce = hM(L, isExpanded);
    const Re = (slot.plugins?.length ?? 0) + (slot.suggestions?.length ?? 0) > 0;
    const Ke = B.length === 0 && !Re && (slot.fallback !== true || k.areAutomationsSettled);
    const Ge = B.slice(0, j_2);
    const Le = (S)=>I.get(S.pluginId) ?? (!ce && S.checked && Ge.includes(S));
    const tickedPlugins = B.filter((S)=>!S.done && Le(S));
    const Z = isExpanded ? B.filter((S)=>S.done && H.has(S.pluginId)) : [];
    const removedPluginIds = new Set(Z.map(Ii));
    if (removedPluginIds.size !== H.size) {
        setH(removedPluginIds);
    }
    let xe;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        xe = (S, te)=>{
            setH((We)=>{
                const we = new Set(We);
                if (te) {
                    we.delete(S);
                } else {
                    we.add(S);
                }
                return we;
            });
        };
        e[9] = xe;
    } else {
        xe = e[9];
    }
    const Ce = xe;
    const ne = B.filter((S)=>S.done || Le(S)).map(Ti);
    let Oe;
    if (e[10] !== entry.event) {
        Oe = entry.event.type === "team-shared" && hL(entry.event, "secrets") === undefined;
        e[10] = entry.event;
        e[11] = Oe;
    } else {
        Oe = e[11];
    }
    const le = Oe;
    const ke = le && _.isSettled;
    const _e = !isReadOnly && agentId != null && u?.harness === "temporal" && u.viewerIsOwner !== false && u.visibility === hB.team;
    const pe = _e && hasMarketplaceLoaded && k.areAutomationsSettled && (_.isSettled || !le);
    const Me = ba(u, O);
    const qe = Pi(C.kind, L, isExpanded, Me);
    const Ue = agentId != null && _e && qe === "proposed";
    let re;
    if (e[12] !== agentId || e[13] !== Ue) {
        re = ()=>{
            if (agentId == null || !Ue) {
                return _i;
            }
            return ()=>d_2(agentId);
        };
        e[12] = agentId;
        e[13] = Ue;
        e[14] = re;
    } else {
        re = e[14];
    }
    i(re);
    i(()=>{
        if (agentId == null || !Ue) {
            return Ci;
        }
        p_2(agentId, ne);
        return wi;
    });
    aU(qe === "proposed" ? mcp.refreshEffectivePlugins : xi);
    const Je = entry.event.type === "team-shared" && entry.event.unshared === true;
    const isSetup = entry.event.type === "team-shared" && entry.event.setup === true;
    let Xe;
    if (e[15] !== __1 || e[16] !== isSetup) {
        Xe = __1(isSetup ? {
            id: "HmBCWT"
        } : {
            id: "yEypon"
        });
        e[15] = __1;
        e[16] = isSetup;
        e[17] = Xe;
    } else {
        Xe = e[17];
    }
    const He = Xe;
    const he = _e && D != null && Me ? D.openTeamBotPlugins : null;
    let Ee;
    if (e[18] !== R) {
        Ee = (S, te)=>{
            const { body, offersSecrets } = hO(S);
            const nt = bi;
            R.send(offersSecrets ? {
                ...nt(S),
                fallback: nt(body)
            } : nt(S), te);
        };
        e[18] = R;
        e[19] = Ee;
    } else {
        Ee = e[19];
    }
    const ze = Ee;
    const De = ()=>{
        if (!pe || P == null) {
            return;
        }
        d_2(P.agentId);
        const S = hN(hP, ke);
        if (slot.status === "proposed") {
            ze(S);
            return;
        }
        if (localAnswers.get("widget", P) == null) {
            localAnswers.record("widget", P, {
                kind: "answered",
                value: S
            });
        }
        onCollapse();
    };
    const Ye = async ()=>{
        if (!pe || agentId == null || C.kind === "running") {
            return;
        }
        setC({
            kind: "running"
        });
        const S = await Ni({
            agentId,
            tickedPlugins,
            removedPluginIds,
            linked: k.listing.plugins,
            automations: k.automations,
            ownerPlugins,
            setPlugins
        });
        if (S.kind === "failed") {
            setC({
                kind: "idle",
                didFail: true
            });
            return;
        }
        d_2(agentId);
        setH(hs);
        setC(S);
        ze(hN(hQ, ke), ()=>setC({
                kind: "idle"
            }));
    };
    let Qe;
    if (e[20] !== k.listing.plugins) {
        Qe = k.listing.plugins.some(vi);
        e[20] = k.listing.plugins;
        e[21] = Qe;
    } else {
        Qe = e[21];
    }
    const Ae = Qe;
    const Se = tickedPlugins.length > 0 || Z.length > 0;
    const et = async ()=>{
        if (!Se && ce) {
            onCollapse();
            return;
        }
        if (!Se && !Ae) {
            De();
            return;
        }
        await Ye();
    };
    if (qe === "empty" || qe === "proposing") {
        return null;
    }
    let Pe;
    if (e[22] !== Se || e[23] !== Ae || e[24] !== isChained) {
        Pe = isChained && !Se && !Ae ? <T_1 id="6Uau97"/> : <T_1 id="xGVfLh"/>;
        e[22] = Se;
        e[23] = Ae;
        e[24] = isChained;
        e[25] = Pe;
    } else {
        Pe = e[25];
    }
    const Ne = Pe;
    let Te;
    if (e[26] !== __1) {
        Te = __1({
            id: "ohUJJM"
        });
        e[26] = __1;
        e[27] = Te;
    } else {
        Te = e[27];
    }
    const ie = Te;
    if (!isExpanded && C.kind === "running") {
        let S;
        if (e[28] !== isSetup) {
            S = isSetup ? <T_1 id="O7rjNS"/> : <T_1 id="ufVwAS"/>;
            e[28] = isSetup;
            e[29] = S;
        } else {
            S = e[29];
        }
        let te;
        if (e[30] !== S || e[31] !== ie || e[32] !== f) {
            te = <Bt1 title={ie} titleId={f}>{S}</Bt1>;
            e[30] = S;
            e[31] = ie;
            e[32] = f;
            e[33] = te;
        } else {
            te = e[33];
        }
        return te;
    }
    let Ve;
    if (e[34] !== __1 || e[35] !== k.isListingSettled) {
        Ve = (S)=>{
            if (S.length === 0) {
                return <Ft1Component emptyLabel={k.isListingSettled ? __1({
                    id: "Vq6/r4"
                }) : ""} icons={[
                    <Kt1 key="plug" name="plug"/>
                ]} names={[]}/>;
            }
            return <Ft1Component countLabelOf={(te)=>__1({
                    id: "u+kC2l",
                    values: {
                        count: te
                    }
                })} icons={yi(S)} names={S.map(ji)}/>;
        };
        e[34] = __1;
        e[35] = k.isListingSettled;
        e[36] = Ve;
    } else {
        Ve = e[36];
    }
    const $e = Ve;
    const v = k.listing.plugins.filter(Si).map((S)=>({
            pluginId: S.pluginId,
            displayName: S.displayName,
            icon: j(plugins.find((te)=>te.pluginId === S.pluginId)?.name ?? S.displayName)
        }));
    if (qe === "dismissed") {
        const S = !isReadOnly && !Je;
        let te;
        if (e[37] !== S || e[38] !== onExpand || e[39] !== k.isListingSettled || e[40] !== ie) {
            te = S && k.isListingSettled ? <Vt1 name={ie} onClick={onExpand}/> : null;
            e[37] = S;
            e[38] = onExpand;
            e[39] = k.isListingSettled;
            e[40] = ie;
            e[41] = te;
        } else {
            te = e[41];
        }
        return <Fe isExpanded={false} onExpand={S ? onExpand : undefined} summary={$e(v)} title={ie} titleId={f} trailing={te}/>;
    }
    if (qe === "carried") {
        let S = $e(v);
        if (k.isListingSettled && v.length === 0 && slot.already === true) {
            let we;
            if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
                we = <Yt level="body2"><T_1 id="3WW0fm"/></Yt>;
                e[42] = we;
            } else {
                we = e[42];
            }
            S = we;
        }
        const te = he != null && !Je && k.isListingSettled;
        let We;
        if (e[43] !== isSetup || e[44] !== C.kind || e[45] !== C.result) {
            We = C.kind === "done" ? <ZsComponent isSetup={isSetup} result={C.result}/> : null;
            e[43] = isSetup;
            e[44] = C.kind;
            e[45] = C.result;
            e[46] = We;
        } else {
            We = e[46];
        }
        return <Fe details={We} isExpanded={false} summary={S} title={ie} titleId={f} trailing={te ? <Vt1 name={ie} onClick={v.length === 0 ? he : onExpand}/> : null}/>;
    }
    if (!isExpanded) {
        let S = null;
        if (tickedPlugins.length > 0) {
            S = isSetup ? <T_1 id="6QB8jZ" values={{
                0: tickedPlugins.length
            }}/> : <T_1 id="OlMATe" values={{
                0: tickedPlugins.length
            }}/>;
        } else if (!Ke && k.areAutomationsSettled && hasMarketplaceLoaded) {
            S = He;
        }
        if (C.kind === "idle" && C.didFail === true) {
            let we;
            if (e[47] !== __1) {
                we = __1({
                    id: "xRmr0p"
                });
                e[47] = __1;
                e[48] = we;
            } else {
                we = e[48];
            }
            S = we;
        }
        let te;
        if (e[49] !== R) {
            te = <It1Component tap={R}/>;
            e[49] = R;
            e[50] = te;
        } else {
            te = e[50];
        }
        let We;
        if (e[51] !== onExpand || e[52] !== S || e[53] !== te || e[54] !== ie || e[55] !== f) {
            We = <Fe details={te} isExpanded={false} isSummaryPending onExpand={onExpand} summary={S} title={ie} titleId={f}/>;
            e[51] = onExpand;
            e[52] = S;
            e[53] = te;
            e[54] = ie;
            e[55] = f;
            e[56] = We;
        } else {
            We = e[56];
        }
        return We;
    }
    const W = C.kind === "running";
    const Ye1 = Fe;
    let oe;
    if (e[57] !== __1) {
        oe = __1({
            id: "v6CcJp"
        });
        e[57] = __1;
        e[58] = oe;
    } else {
        oe = e[58];
    }
    const ve = Ke ? null : <_t emptyLabel={k.areAutomationsSettled && hasMarketplaceLoaded ? He : undefined} hasIcons title={isSetup ? undefined : __1({
        id: "RKcqkX"
    })}>{Ge.map((S)=><Tt key={S.pluginId} icon=<P_1 {...N(S)} fallbackChip="setup" monoFallback="plug" name={S.displayName} size={i_2}/> isChecked={S.done ? !H.has(S.pluginId) : Le(S)} isDisabled={W || !_e} title={S.displayName} onChange={(te)=>{
            if (S.done) {
                Ce(S.pluginId, te);
            } else if (agentId != null) {
                s_2(agentId, S.pluginId, te);
            }
        }}/>)}</_t>;
    let ue;
    if (e[59] !== C.didFail || e[60] !== C.kind) {
        ue = C.kind === "idle" && C.didFail === true ? <Ze><T_1 id="xRmr0p"/></Ze> : null;
        e[59] = C.didFail;
        e[60] = C.kind;
        e[61] = ue;
    } else {
        ue = e[61];
    }
    let de;
    if (e[62] !== R) {
        de = <It1Component tap={R}/>;
        e[62] = R;
        e[63] = de;
    } else {
        de = e[63];
    }
    const be = W || !pe;
    let fe;
    if (e[64] !== et) {
        fe = ()=>{
            et();
        };
        e[64] = et;
        e[65] = fe;
    } else {
        fe = e[65];
    }
    let Be;
    if (e[66] !== Ne || e[67] !== ce) {
        Be = ce ? <T_1 id="DPfwMq"/> : Ne;
        e[66] = Ne;
        e[67] = ce;
        e[68] = Be;
    } else {
        Be = e[68];
    }
    let x;
    if (e[69] !== W || e[70] !== be || e[71] !== fe || e[72] !== Be) {
        x = <Ft disabled={be} onClick={fe} pending={W}>{Be}</Ft>;
        e[69] = W;
        e[70] = be;
        e[71] = fe;
        e[72] = Be;
        e[73] = x;
    } else {
        x = e[73];
    }
    let K;
    if (e[74] !== he || e[75] !== W) {
        K = he == null ? null : <Rt1 disabled={W} onClick={he} variant="secondary"><T_1 id="vr9OIt"/></Rt1>;
        e[74] = he;
        e[75] = W;
        e[76] = K;
    } else {
        K = e[76];
    }
    let X;
    if (e[77] !== x || e[78] !== K) {
        X = <Pt>{x}{K}</Pt>;
        e[77] = x;
        e[78] = K;
        e[79] = X;
    } else {
        X = e[79];
    }
    let ee;
    if (e[80] !== Ye1 || e[81] !== onExpand || e[82] !== oe || e[83] !== ve || e[84] !== ue || e[85] !== de || e[86] !== X || e[87] !== f) {
        ee = <Ye1 onExpand={onExpand} title={oe} titleId={f}>{ve}{ue}{de}{X}</Ye1>;
        e[80] = Ye1;
        e[81] = onExpand;
        e[82] = oe;
        e[83] = ve;
        e[84] = ue;
        e[85] = de;
        e[86] = X;
        e[87] = f;
        e[88] = ee;
    } else {
        ee = e[88];
    }
    return ee;
}
function Si(s) {
    return !s.isBotSkills;
}
function ji(s) {
    return s.displayName;
}
function vi(s) {
    return !s.isBotSkills;
}
function bi(s) {
    return {
        resolution: {
            kind: "answered",
            value: s
        },
        value: s
    };
}
function wi() {}
function Ci() {}
function _i() {}
function Ti(s) {
    return s.pluginId;
}
function Ii(s) {
    return s.pluginId;
}
function Ri(s) {
    return {
        pluginId: s.pluginId,
        displayName: s.displayName,
        variableNames: s.variableNames,
        hasConfiguredVariables: s.hasConfiguredVariables === true
    };
}
function Oi(s) {
    return !s.isBotSkills;
}
function Ei(s) {
    return {
        pluginId: s.pluginId,
        name: s.name,
        displayName: s.displayName
    };
}
function Ai(s) {
    return s.isEnabled;
}
function Pi(kind, e, isExpanded, n) {
    const l = kind === "done" ? "carried" : e;
    if (l === "dismissed" && isExpanded || l === "carried" && isExpanded && n) {
        return "proposed";
    }
    return l;
}
async function Ni(s) {
    try {
        let e = s.linked;
        if (s.tickedPlugins.length > 0 || s.removedPluginIds.size > 0) {
            e = (await s.setPlugins(s.agentId, [
                ...d1(s.linked.filter((n)=>!s.removedPluginIds.has(n.pluginId))),
                ...s.tickedPlugins.map((n)=>({
                        kind: "plugin",
                        pluginId: n.pluginId
                    }))
            ])).plugins;
        }
        return {
            kind: "done",
            result: {
                plugins: e.filter((t)=>!t.isBotSkills).length,
                gaps: ci({
                    automations: s.automations,
                    ownerPlugins: s.ownerPlugins,
                    linkedPluginIds: e.map((t)=>t.pluginId)
                })
            }
        };
    } catch (error) {
        d0(error, {
            tags: {
                sand_area: "team-carry-over"
            }
        });
        return {
            kind: "failed"
        };
    }
}
function ZsComponent(s) {
    ZsComponent.d = 518;
    const e = c_1.c(11);
    const { result, isSetup } = s;
    const { _ } = u_1();
    let c;
    if (e[0] !== isSetup || e[1] !== result.plugins) {
        c = result.plugins === 0 ? <Ze>{isSetup ? <T_1 id="yHD/Ey"/> : <T_1 id="2xekCO"/>}</Ze> : null;
        e[0] = isSetup;
        e[1] = result.plugins;
        e[2] = c;
    } else {
        c = e[2];
    }
    let r;
    if (e[3] !== _ || e[4] !== result.gaps) {
        let d;
        if (e[6] !== _) {
            d = (a)=><Ze key={`${a.automationName}:${a.pluginDisplayName}`}>{_({
                    id: "ffSl//",
                    values: {
                        0: a.automationName,
                        1: a.pluginDisplayName
                    }
                })}</Ze>;
            e[6] = _;
            e[7] = d;
        } else {
            d = e[7];
        }
        r = result.gaps.map(d);
        e[3] = _;
        e[4] = result.gaps;
        e[5] = r;
    } else {
        r = e[5];
    }
    let o;
    if (e[8] !== c || e[9] !== r) {
        o = <>{c}{r}</>;
        e[8] = c;
        e[9] = r;
        e[10] = o;
    } else {
        o = e[10];
    }
    return o;
}
function As1Component(s) {
    As1Component.d = 520;
    const e = c_1.c(133);
    const { entry, slot, agentId, isReadOnly, isExpanded, onExpand, onCollapse } = s;
    const { _: __1 } = u_1();
    const { isChained } = b_1();
    const f = r_1.useId();
    const u = bY(agentId);
    const p = cR(agentId);
    const y = cf(agentId);
    const h = cT();
    const b = hR();
    const E = cW();
    const j = cY();
    const { localAnswers, workflows } = b7();
    const _ = r_1.useContext(b3);
    const T = b9("grok_bot_multiplayer");
    let D;
    if (e[0] !== entry.id) {
        D = hz(entry.id, "files");
        e[0] = entry.id;
        e[1] = D;
    } else {
        D = e[1];
    }
    const O = D;
    let $;
    if (e[2] !== agentId || e[3] !== O) {
        $ = agentId == null ? null : {
            agentId,
            entryId: O
        };
        e[2] = agentId;
        e[3] = O;
        e[4] = $;
    } else {
        $ = e[4];
    }
    const P = $;
    let z;
    if (e[5] !== agentId || e[6] !== O) {
        z = {
            agentId,
            entryId: O
        };
        e[5] = agentId;
        e[6] = O;
        e[7] = z;
    } else {
        z = e[7];
    }
    const I = c1("widget", z);
    let A;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        A = {
            kind: "idle"
        };
        e[8] = A;
    } else {
        A = e[8];
    }
    const [C, setC] = r_1.useState(A);
    let H;
    if (e[9] !== agentId || e[10] !== entry.id || e[11] !== onCollapse || e[12] !== onExpand || e[13] !== slot.status) {
        H = {
            agentId,
            entryId: entry.id,
            kind: "files",
            slotStatus: slot.status,
            sandArea: "team-files",
            onExpand,
            onCollapse
        };
        e[9] = agentId;
        e[10] = entry.id;
        e[11] = onCollapse;
        e[12] = onExpand;
        e[13] = slot.status;
        e[14] = H;
    } else {
        H = e[14];
    }
    const F = useNt(H);
    let Y;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        Y = [];
        e[15] = Y;
    } else {
        Y = e[15];
    }
    const [R, setR] = r_1.useState(Y);
    const qRef = r_1.useRef(null);
    let B;
    if (e[16] !== p) {
        B = aG(p) || p.status === "empty";
        e[16] = p;
        e[17] = B;
    } else {
        B = e[17];
    }
    const L = B;
    let ce;
    let Re;
    if (e[18] !== isExpanded || e[19] !== I || e[20] !== slot.status) {
        const x = hS(slot.status, I);
        ce = x === "dismissed" && isExpanded ? "proposed" : x;
        Re = hM(x, isExpanded);
        e[18] = isExpanded;
        e[19] = I;
        e[20] = slot.status;
        e[21] = ce;
        e[22] = Re;
    } else {
        ce = e[21];
        Re = e[22];
    }
    const Ke = Re;
    const Ge = L ? cg(y.plugins).fileSkills.map(Di) : [];
    const Le = new Set(Ge.map(zi));
    const se = [
        ...Ge,
        ...R.filter((x)=>!Le.has(x.key))
    ];
    const Z = !isReadOnly && agentId != null && u?.harness === "temporal" && u.viewerIsOwner !== false && u.visibility === hB.team;
    const J = C.kind === "running";
    const xe = !L && p.status !== "loading";
    const Ce = J || !Z || xe;
    const ne = !L && p.status === "loading";
    const Oe = entry.event.type === "team-shared" && entry.event.unshared === true;
    const le = Z && !Oe;
    let ke;
    if (e[23] !== u || e[24] !== Z || e[25] !== T) {
        ke = Z && ba(u, T);
        e[23] = u;
        e[24] = Z;
        e[25] = T;
        e[26] = ke;
    } else {
        ke = e[26];
    }
    const _e = ke;
    let readListing;
    if (e[27] !== agentId || e[28] !== b) {
        readListing = ()=>{
            if (agentId == null) {
                return Promise.resolve(null);
            }
            return b(agentId);
        };
        e[27] = agentId;
        e[28] = b;
        e[29] = readListing;
    } else {
        readListing = e[29];
    }
    let addSkills;
    if (e[30] !== E || e[31] !== agentId || e[32] !== h || e[33] !== workflows) {
        addSkills = async (x)=>{
            if (agentId == null) {
                return 0;
            }
            const K = [];
            for (const X of x){
                const ee = X.name;
                if (ee == null) {
                    continue;
                }
                if (await gs(()=>E(agentId, {
                        name: ee,
                        content: X.content
                    })) === undefined) {
                    K.push(Hs({
                        name: ee,
                        content: X.content
                    }));
                }
            }
            if (K.length > 0) {
                setR((X)=>[
                        ...X,
                        ...K
                    ]);
                h(agentId);
                workflows.refresh(agentId);
            }
            return K.length;
        };
        e[30] = E;
        e[31] = agentId;
        e[32] = h;
        e[33] = workflows;
        e[34] = addSkills;
    } else {
        addSkills = e[34];
    }
    let qe;
    if (e[35] !== readListing || e[36] !== addSkills) {
        qe = {
            readListing,
            addSkills
        };
        e[35] = readListing;
        e[36] = addSkills;
        e[37] = qe;
    } else {
        qe = e[37];
    }
    let Ue;
    if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
        Ue = {
            fileInputRef: qRef,
            folderInputRef: qRef
        };
        e[38] = Ue;
    } else {
        Ue = e[38];
    }
    const upload = u_3(qe, Ce, Ue);
    const Je = hT();
    let je;
    if (e[39] !== upload) {
        je = (x)=>upload.ingestFiles(x);
        e[39] = upload;
        e[40] = je;
    } else {
        je = e[40];
    }
    const Xe = x_1(je);
    const He = !Ce && Je != null && ce === "proposed";
    let he;
    if (e[41] !== agentId || e[42] !== Je || e[43] !== He || e[44] !== Xe) {
        he = ()=>{
            if (!He || agentId == null) {
                return Bi;
            }
            return Je.attach(agentId, Xe);
        };
        e[41] = agentId;
        e[42] = Je;
        e[43] = He;
        e[44] = Xe;
        e[45] = he;
    } else {
        he = e[45];
    }
    i(he);
    let Ee;
    if (e[46] !== Z || e[47] !== J || e[48] !== localAnswers || e[49] !== P || e[50] !== onCollapse || e[51] !== slot.status || e[52] !== F) {
        Ee = ()=>{
            if (!(P == null || J || !Z)) {
                if (slot.status === "proposed") {
                    F.send({
                        resolution: {
                            kind: "dismissed"
                        },
                        value: hV
                    });
                    return;
                }
                if (localAnswers.get("widget", P) == null) {
                    localAnswers.record("widget", P, {
                        kind: "dismissed"
                    });
                }
                onCollapse();
            }
        };
        e[46] = Z;
        e[47] = J;
        e[48] = localAnswers;
        e[49] = P;
        e[50] = onCollapse;
        e[51] = slot.status;
        e[52] = F;
        e[53] = Ee;
    } else {
        Ee = e[53];
    }
    const ze = Ee;
    const De = ()=>{
        if (!(J || !Z || upload.isReading)) {
            if (se.length > 0) {
                F.send({
                    resolution: {
                        kind: "answered",
                        value: hU
                    },
                    value: hU
                });
                return;
            }
            if (slot.status === "proposed") {
                ze();
                return;
            }
            onCollapse();
        }
    };
    let Ye;
    if (e[54] !== agentId || e[55] !== Z || e[56] !== J || e[57] !== h || e[58] !== j || e[59] !== upload) {
        Ye = async (x)=>{
            if (agentId == null || J || !Z || upload.isReading) {
                return;
            }
            setC({
                kind: "running"
            });
            const K = await gs(()=>j(agentId, x.key));
            if (K !== undefined) {
                setC({
                    kind: "idle",
                    failed: {
                        name: x.title,
                        reason: K
                    }
                });
                h(agentId);
                return;
            }
            setR((X)=>X.filter((ee)=>ee.key !== x.key));
            upload.forgetWritten(x.key);
            setC({
                kind: "idle"
            });
        };
        e[54] = agentId;
        e[55] = Z;
        e[56] = J;
        e[57] = h;
        e[58] = j;
        e[59] = upload;
        e[60] = Ye;
    } else {
        Ye = e[60];
    }
    const Qe = Ye;
    let Ae;
    if (e[61] !== __1) {
        Ae = __1({
            id: "sER+bs"
        });
        e[61] = __1;
        e[62] = Ae;
    } else {
        Ae = e[62];
    }
    const Se = Ae;
    const et = J || upload.isReading;
    if (!isExpanded && et) {
        let x;
        if (e[63] !== upload.isReading) {
            x = upload.isReading ? <T_1 id="DD/FLy"/> : <T_1 id="APfagk"/>;
            e[63] = upload.isReading;
            e[64] = x;
        } else {
            x = e[64];
        }
        let K;
        if (e[65] !== x || e[66] !== Se || e[67] !== f) {
            K = <Bt1 title={Se} titleId={f}>{x}</Bt1>;
            e[65] = x;
            e[66] = Se;
            e[67] = f;
            e[68] = K;
        } else {
            K = e[68];
        }
        return K;
    }
    const PeComponent = (x)=>{
        if (se.length === 0) {
            return <Ft1Component emptyLabel={x} icons={[
                <Kt1 key="file" name="file"/>
            ]} names={[]}/>;
        }
        return <Ft1Component countLabelOf={(K)=>__1({
                id: "eM80Pk",
                values: {
                    count: K
                }
            })} icons={ss(se, $i, MiComponent)} names={se.map(Li)}/>;
    };
    if (ce === "dismissed") {
        const x = !isReadOnly && !Oe;
        let K;
        if (e[69] !== __1 || e[70] !== ne) {
            K = ne ? "" : __1({
                id: "Vq6/r4"
            });
            e[69] = __1;
            e[70] = ne;
            e[71] = K;
        } else {
            K = e[71];
        }
        let X;
        if (e[72] !== x || e[73] !== ne || e[74] !== onExpand || e[75] !== Se) {
            X = x && !ne ? <Vt1 name={Se} onClick={onExpand}/> : null;
            e[72] = x;
            e[73] = ne;
            e[74] = onExpand;
            e[75] = Se;
            e[76] = X;
        } else {
            X = e[76];
        }
        return <Fe isExpanded={false} onExpand={x ? onExpand : undefined} summary={PeComponent(K)} title={Se} titleId={f} trailing={X}/>;
    }
    if (ce === "added" && !isExpanded) {
        let x;
        if (e[77] !== __1) {
            x = __1({
                id: "5A5ntK"
            });
            e[77] = __1;
            e[78] = x;
        } else {
            x = e[78];
        }
        let K;
        if (e[79] !== le || e[80] !== onExpand || e[81] !== Se) {
            K = le ? <Vt1 name={Se} onClick={onExpand}/> : null;
            e[79] = le;
            e[80] = onExpand;
            e[81] = Se;
            e[82] = K;
        } else {
            K = e[82];
        }
        return <Fe isExpanded={false} onExpand={le ? onExpand : undefined} summary={PeComponent(x)} title={Se} titleId={f} trailing={K}/>;
    }
    const Ne = C.kind === "idle" ? C.failed : undefined;
    let Te = null;
    if (Ne !== undefined) {
        const { name, reason } = Ne;
        let X;
        if (e[83] !== __1 || e[84] !== name || e[85] !== reason) {
            X = __1({
                id: "M+YwD0",
                values: {
                    name,
                    reason
                }
            });
            e[83] = __1;
            e[84] = name;
            e[85] = reason;
            e[86] = X;
        } else {
            X = e[86];
        }
        let ee;
        if (e[87] !== X) {
            ee = <Ze>{X}</Ze>;
            e[87] = X;
            e[88] = ee;
        } else {
            ee = e[88];
        }
        Te = ee;
    }
    if (!isExpanded) {
        let x;
        if (e[89] !== Te || e[90] !== F) {
            x = F.didFail ? <It1Component tap={F}/> : Te;
            e[89] = Te;
            e[90] = F;
            e[91] = x;
        } else {
            x = e[91];
        }
        const K = se.length === 0 ? null : PeComponent("");
        let X;
        if (e[92] !== onExpand || e[93] !== x || e[94] !== K || e[95] !== Se || e[96] !== f) {
            X = <Fe details={x} isExpanded={false} isSummaryPending onExpand={onExpand} summary={K} title={Se} titleId={f}/>;
            e[92] = onExpand;
            e[93] = x;
            e[94] = K;
            e[95] = Se;
            e[96] = f;
            e[97] = X;
        } else {
            X = e[97];
        }
        return X;
    }
    const ie = !L && p.status === "failed";
    let Ve;
    if (e[98] === Symbol.for("react.memo_cache_sentinel")) {
        Ve = <T_1 id="xGVfLh"/>;
        e[98] = Ve;
    } else {
        Ve = e[98];
    }
    let $e = Ve;
    if (Ke) {
        let x;
        if (e[99] === Symbol.for("react.memo_cache_sentinel")) {
            x = <T_1 id="DPfwMq"/>;
            e[99] = x;
        } else {
            x = e[99];
        }
        $e = x;
    } else if (isChained && se.length === 0) {
        let x;
        if (e[100] === Symbol.for("react.memo_cache_sentinel")) {
            x = <T_1 id="6Uau97"/>;
            e[100] = x;
        } else {
            x = e[100];
        }
        $e = x;
    }
    if (J) {
        let x;
        if (e[101] === Symbol.for("react.memo_cache_sentinel")) {
            x = <T_1 id="APfagk"/>;
            e[101] = x;
        } else {
            x = e[101];
        }
        $e = x;
    }
    let v;
    if (e[102] !== __1) {
        v = __1({
            id: "aM8P8N"
        });
        e[102] = __1;
        e[103] = v;
    } else {
        v = e[103];
    }
    let W;
    if (e[104] !== upload) {
        W = <T_4 compact fileInputRef={qRef} upload={upload}/>;
        e[104] = upload;
        e[105] = W;
    } else {
        W = e[105];
    }
    const ye = se.length === 0 ? null : <_t hasIcons>{se.slice(0, j_2).map((x)=><Tt key={x.key} icon=<Kt1 name="file-text" size="row"/> isDisabled={J || !Z || upload.isReading} reason={x.sizeLabel} title={x.title} onDelete={()=>{
            Qe(x);
        }}/>)}</_t>;
    let oe;
    if (e[106] !== __1 || e[107] !== agentId || e[108] !== Z || e[109] !== ie || e[110] !== h || e[111] !== workflows) {
        oe = ie && Z && agentId != null ? <span className="sand-78zum5 sand-6s0dn4 sand-17d4w8g"><Ze>{__1({
            id: "w0yPkC"
        })}</Ze><Rt1 onClick={()=>{
            h(agentId);
            workflows.refresh(agentId);
        }} size="sm" variant="tertiary"><T_1 id="6gRgw8"/></Rt1></span> : null;
        e[106] = __1;
        e[107] = agentId;
        e[108] = Z;
        e[109] = ie;
        e[110] = h;
        e[111] = workflows;
        e[112] = oe;
    } else {
        oe = e[112];
    }
    let ve;
    if (e[113] !== F) {
        ve = <It1Component tap={F}/>;
        e[113] = F;
        e[114] = ve;
    } else {
        ve = e[114];
    }
    const ue = J || !Z || upload.isReading || ne;
    let de;
    if (e[115] !== De || e[116] !== J || e[117] !== $e || e[118] !== ue) {
        de = <Ft disabled={ue} onClick={De} pending={J}>{$e}</Ft>;
        e[115] = De;
        e[116] = J;
        e[117] = $e;
        e[118] = ue;
        e[119] = de;
    } else {
        de = e[119];
    }
    const be = _e && _ != null && se.length > j_2 ? <Rt1 disabled={J} onClick={_.openTeamBotFiles} variant="secondary"><T_1 id="gfTCj6" values={{
        0: se.length
    }}/></Rt1> : null;
    let fe;
    if (e[120] !== de || e[121] !== be) {
        fe = <Pt>{de}{be}</Pt>;
        e[120] = de;
        e[121] = be;
        e[122] = fe;
    } else {
        fe = e[122];
    }
    let Be;
    if (e[123] !== Te || e[124] !== onExpand || e[125] !== v || e[126] !== W || e[127] !== ye || e[128] !== oe || e[129] !== ve || e[130] !== fe || e[131] !== f) {
        Be = <Fe onExpand={onExpand} title={v} titleId={f}>{W}{ye}{oe}{Te}{ve}{fe}</Fe>;
        e[123] = Te;
        e[124] = onExpand;
        e[125] = v;
        e[126] = W;
        e[127] = ye;
        e[128] = oe;
        e[129] = ve;
        e[130] = fe;
        e[131] = f;
        e[132] = Be;
    } else {
        Be = e[132];
    }
    return Be;
}
function Li(s) {
    return s.title;
}
function MiComponent(s, e) {
    return <Kt1 key={e} name="file"/>;
}
function $i() {
    return "file";
}
function Bi() {}
function zi(s) {
    return s.key;
}
function Di(s) {
    return Hs(s);
}
function Hs(s) {
    return {
        key: s.name,
        title: cw(s),
        body: cF(s.content).body.trim(),
        sizeLabel: f(s.content)
    };
}
async function gs(s) {
    try {
        await s();
        return;
    } catch (error) {
        d0(error, {
            tags: {
                sand_area: "team-files"
            }
        });
        return e(error);
    }
}
const ks = 100;
function QsComponent(s) {
    QsComponent.d = 521;
    const e = c_1.c(137);
    const { entry, slot, agentId, isReadOnly, isExpanded, onExpand, onCollapse } = s;
    const { _: __1, i18n } = u_1();
    const { isChained } = b_1();
    const u = r_1.useId();
    const p = bY(agentId);
    const y = Ul();
    let h;
    if (e[0] !== entry.id) {
        h = hz(entry.id, "memories");
        e[0] = entry.id;
        e[1] = h;
    } else {
        h = e[1];
    }
    let b;
    if (e[2] !== agentId || e[3] !== h) {
        b = {
            agentId,
            entryId: h
        };
        e[2] = agentId;
        e[3] = h;
        e[4] = b;
    } else {
        b = e[4];
    }
    const E = c1("widget", b);
    let j;
    if (e[5] !== E || e[6] !== slot.status) {
        j = hW(slot.status, E);
        e[5] = E;
        e[6] = slot.status;
        e[7] = j;
    } else {
        j = e[7];
    }
    const N = j;
    let k;
    if (e[8] !== agentId || e[9] !== entry.id || e[10] !== onCollapse || e[11] !== onExpand || e[12] !== slot.status) {
        k = {
            agentId,
            entryId: entry.id,
            kind: "memories",
            slotStatus: slot.status,
            sandArea: "team-memories",
            onExpand,
            onCollapse
        };
        e[8] = agentId;
        e[9] = entry.id;
        e[10] = onCollapse;
        e[11] = onExpand;
        e[12] = slot.status;
        e[13] = k;
    } else {
        k = e[13];
    }
    const _ = useNt(k);
    let T;
    if (e[14] === Symbol.for("react.memo_cache_sentinel")) {
        T = new Set;
        e[14] = T;
    } else {
        T = e[14];
    }
    const [D, setD] = r_1.useState(T);
    let $;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        $ = new Set;
        e[15] = $;
    } else {
        $ = e[15];
    }
    const [P, setP] = r_1.useState($);
    const [I, setI] = r_1.useState(null);
    let C;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        C = {
            kind: "idle"
        };
        e[16] = C;
    } else {
        C = e[16];
    }
    const [V, setV] = r_1.useState(C);
    const [F, setF] = r_1.useState(null);
    const R = N === "proposed";
    const Q = useKl(R || isExpanded ? agentId : null);
    const q = !isReadOnly && agentId != null && p?.viewerIsOwner !== false;
    const B = b9("grok_bot_multiplayer");
    let L;
    if (e[17] !== p || e[18] !== B) {
        L = ba(p, B);
        e[17] = p;
        e[18] = B;
        e[19] = L;
    } else {
        L = e[19];
    }
    const ce = L;
    const Q_memories = Q.memories;
    const Ke = hX(slot, Q_memories);
    const Ge = R && agentId != null && agentId !== "" && Q.load === "ready";
    const Le = Ge && Ke.length === 0;
    const [se, setSe] = r_1.useState(false);
    if (Ge && se !== Le) {
        setSe(Le);
    }
    const JRef = r_1.useRef(false);
    let xe;
    if (e[20] !== _) {
        xe = ()=>_.send({
                resolution: {
                    kind: "answered",
                    value: hY
                },
                value: hY
            });
        e[20] = _;
        e[21] = xe;
    } else {
        xe = e[21];
    }
    const Ce = xe;
    let ne;
    if (e[22] !== q || e[23] !== Le || e[24] !== isExpanded || e[25] !== Ce) {
        ne = ()=>{
            if (Le && isExpanded && q && !JRef.current) {
                JRef.current = true;
                Ce();
            }
            return Fi;
        };
        e[22] = q;
        e[23] = Le;
        e[24] = isExpanded;
        e[25] = Ce;
        e[26] = ne;
    } else {
        ne = e[26];
    }
    i(ne);
    let Oe;
    if (e[27] !== __1) {
        Oe = __1({
            id: "QCEzof"
        });
        e[27] = __1;
        e[28] = Oe;
    } else {
        Oe = e[28];
    }
    const le = Oe;
    if (N === "done") {
        return null;
    }
    if (Le || se) {
        let v;
        if (e[29] !== _ || e[30] !== le || e[31] !== u) {
            v = _.didFail ? <Fe details=<It1Component tap={_}/> isExpanded={false} title={le} titleId={u} trailing=<Sl onClick={()=>_.retry()}><T_1 id="xGVfLh"/></Sl>/> : null;
            e[29] = _;
            e[30] = le;
            e[31] = u;
            e[32] = v;
        } else {
            v = e[32];
        }
        return v;
    }
    if (N === "sorting") {
        let v;
        if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
            v = <T_1 id="zMVr84"/>;
            e[33] = v;
        } else {
            v = e[33];
        }
        let W;
        if (e[34] !== le || e[35] !== u) {
            W = <Bt1 title={le} titleId={u}>{v}</Bt1>;
            e[34] = le;
            e[35] = u;
            e[36] = W;
        } else {
            W = e[36];
        }
        return W;
    }
    const ke = V.kind === "saving";
    if (!isExpanded) {
        if (ke) {
            let ee;
            if (e[37] === Symbol.for("react.memo_cache_sentinel")) {
                ee = <T_1 id="CRsE4b"/>;
                e[37] = ee;
            } else {
                ee = e[37];
            }
            let S;
            if (e[38] !== le || e[39] !== u) {
                S = <Bt1 title={le} titleId={u}>{ee}</Bt1>;
                e[38] = le;
                e[39] = u;
                e[40] = S;
            } else {
                S = e[40];
            }
            return S;
        }
        const v = entry.event.type === "team-shared" && entry.event.unshared === true;
        const W = q && !v && (R || ce);
        const added = I === null ? null : I.created.length + I.alreadyInTeam.length;
        let oe;
        if (e[41] !== __1) {
            oe = __1({
                id: "Vq6/r4"
            });
            e[41] = __1;
            e[42] = oe;
        } else {
            oe = e[42];
        }
        let ve = oe;
        if (added === null && N === "shared") {
            let ee;
            if (e[43] !== __1) {
                ee = __1({
                    id: "5A5ntK"
                });
                e[43] = __1;
                e[44] = ee;
            } else {
                ee = e[44];
            }
            ve = ee;
        } else if (added !== null && added > 0) {
            let ee;
            if (e[45] !== __1 || e[46] !== added) {
                ee = __1({
                    id: "A8ekoq",
                    values: {
                        added
                    }
                });
                e[45] = __1;
                e[46] = added;
                e[47] = ee;
            } else {
                ee = e[47];
            }
            ve = ee;
        }
        const isSummaryPending = R && I === null;
        let de;
        if (e[48] !== I) {
            de = I === null ? null : <XsComponent result={I}/>;
            e[48] = I;
            e[49] = de;
        } else {
            de = e[49];
        }
        let be;
        if (e[50] !== _) {
            be = <It1Component tap={_}/>;
            e[50] = _;
            e[51] = be;
        } else {
            be = e[51];
        }
        let fe;
        if (e[52] !== de || e[53] !== be) {
            fe = <>{de}{be}</>;
            e[52] = de;
            e[53] = be;
            e[54] = fe;
        } else {
            fe = e[54];
        }
        const Be = W ? onExpand : undefined;
        let x;
        if (e[55] !== isSummaryPending || e[56] !== ve) {
            x = isSummaryPending ? null : <Ft1Component emptyLabel={ve} icons={[
                <Kt1 key="library" name="library"/>
            ]} names={[]}/>;
            e[55] = isSummaryPending;
            e[56] = ve;
            e[57] = x;
        } else {
            x = e[57];
        }
        let K;
        if (e[58] !== W || e[59] !== onExpand || e[60] !== le) {
            K = W ? <Vt1 name={le} onClick={onExpand}/> : null;
            e[58] = W;
            e[59] = onExpand;
            e[60] = le;
            e[61] = K;
        } else {
            K = e[61];
        }
        let X;
        if (e[62] !== isSummaryPending || e[63] !== fe || e[64] !== Be || e[65] !== x || e[66] !== K || e[67] !== le || e[68] !== u) {
            X = <Fe details={fe} isExpanded={false} isSummaryPending={isSummaryPending} onExpand={Be} summary={x} title={le} titleId={u} trailing={K}/>;
            e[62] = isSummaryPending;
            e[63] = fe;
            e[64] = Be;
            e[65] = x;
            e[66] = K;
            e[67] = le;
            e[68] = u;
            e[69] = X;
        } else {
            X = e[69];
        }
        return X;
    }
    let _e;
    if (e[70] !== Q_memories || e[71] !== P || e[72] !== D) {
        let v;
        if (e[74] !== P || e[75] !== D) {
            v = (W)=>D.has(W.factId) && !P.has(W.factId);
            e[74] = P;
            e[75] = D;
            e[76] = v;
        } else {
            v = e[76];
        }
        _e = Q_memories.filter(v);
        e[70] = Q_memories;
        e[71] = P;
        e[72] = D;
        e[73] = _e;
    } else {
        _e = e[73];
    }
    const pe = _e;
    let Me;
    if (e[77] !== agentId || e[78] !== q || e[79] !== R || e[80] !== ke || e[81] !== Ce || e[82] !== Q || e[83] !== onCollapse || e[84] !== pe || e[85] !== y || e[86] !== P || e[87] !== I || e[88] !== _) {
        Me = async ()=>{
            if (!q || agentId == null || ke) {
                return;
            }
            if (pe.length === 0) {
                if (_.retry()) {
                    return;
                }
                if (R) {
                    Ce();
                } else {
                    onCollapse();
                }
                return;
            }
            setV({
                kind: "saving"
            });
            const v = pe.map(Vi);
            let W = I ?? ys;
            const ye = new Set(P);
            for(let ue = 0; ue < v.length; ue = ue + ks, ue){
                const de = v.slice(ue, ue + ks);
                const be = await Wi(()=>y(agentId, de));
                if (be.kind === "failed") {
                    setI(W === ys ? I : W);
                    setP(ye);
                    setV({
                        kind: "idle",
                        failure: be.reason
                    });
                    Q.reload();
                    return;
                }
                W = Ui(W, be.result);
                for (const fe of de){
                    ye.add(fe);
                }
            }
            setI(W);
            setP(ye);
            setD(new Set);
            setV({
                kind: "idle"
            });
            if (!R) {
                onCollapse();
                return;
            }
            const oe = W.created.length + W.alreadyInTeam.length;
            const ve = oe === 0 ? hY : hZ(oe);
            _.send({
                resolution: {
                    kind: "answered",
                    value: ve
                },
                value: ve
            });
        };
        e[77] = agentId;
        e[78] = q;
        e[79] = R;
        e[80] = ke;
        e[81] = Ce;
        e[82] = Q;
        e[83] = onCollapse;
        e[84] = pe;
        e[85] = y;
        e[86] = P;
        e[87] = I;
        e[88] = _;
        e[89] = Me;
    } else {
        Me = e[89];
    }
    const qe = Me;
    let Ue;
    if (e[90] !== D) {
        Ue = (v, W)=>{
            const ye = new Set(D);
            for (const oe of v.memories){
                if (W) {
                    ye.add(oe.factId);
                } else {
                    ye.delete(oe.factId);
                }
            }
            setD(ye);
        };
        e[90] = D;
        e[91] = Ue;
    } else {
        Ue = e[91];
    }
    const re = Ue;
    let Je;
    if (e[92] !== i18n) {
        Je = (v)=>new Intl.DateTimeFormat(i18n.locale, {
                month: "short",
                day: "numeric"
            }).format(new Date(v));
        e[92] = i18n;
        e[93] = Je;
    } else {
        Je = e[93];
    }
    const je = Je;
    let Xe;
    if (e[94] !== __1) {
        Xe = (v)=>{
            if (v.name.length > 0) {
                return v.name;
            }
            return __1({
                id: "/IX/7x"
            });
        };
        e[94] = __1;
        e[95] = Xe;
    } else {
        Xe = e[95];
    }
    const He = Xe;
    let he;
    if (e[96] !== p) {
        he = p === null ? "" : bc(p);
        e[96] = p;
        e[97] = he;
    } else {
        he = e[97];
    }
    const botName = he;
    let ze;
    if (e[98] === Symbol.for("react.memo_cache_sentinel")) {
        ze = <T_1 id="DPfwMq"/>;
        e[98] = ze;
    } else {
        ze = e[98];
    }
    let De = ze;
    if (R) {
        let v;
        if (e[99] !== isChained || e[100] !== D) {
            v = isChained && D.size === 0 ? <T_1 id="6Uau97"/> : <T_1 id="xGVfLh"/>;
            e[99] = isChained;
            e[100] = D;
            e[101] = v;
        } else {
            v = e[101];
        }
        De = v;
    }
    if (ke) {
        let v;
        if (e[102] === Symbol.for("react.memo_cache_sentinel")) {
            v = <T_1 id="CRsE4b"/>;
            e[102] = v;
        } else {
            v = e[102];
        }
        De = v;
    }
    const Ye = Fe;
    let Qe;
    if (e[103] !== __1) {
        Qe = __1({
            id: "o7Nnn1"
        });
        e[103] = __1;
        e[104] = Qe;
    } else {
        Qe = e[104];
    }
    let Ae;
    if (e[105] !== Q.load || e[106] !== Q.reload) {
        Ae = Q.load === "failed" ? <><Ze><T_1 id="097oCu"/></Ze><Rt1 onClick={Q.reload} size="sm" variant="tertiary"><T_1 id="6gRgw8"/></Rt1></> : null;
        e[105] = Q.load;
        e[106] = Q.reload;
        e[107] = Ae;
    } else {
        Ae = e[107];
    }
    const Se = Q.load === "ready" ? <_t>{Ke.map((v)=><Tt key={v.name} isChecked={v.memories.some((W)=>D.has(W.factId))} isDisabled={!q || ke} isDone={v.memories.every((W)=>P.has(W.factId))} onChange={(W)=>re(v, W)} onView={()=>setF(v)} reason={v.memories.length.toLocaleString(eY())} title={He(v)}/>)}</_t> : null;
    let et;
    if (e[108] !== V.failure || e[109] !== V.kind) {
        et = V.kind === "idle" && V.failure !== undefined ? <Ze><T_1 id="L5c2id"/></Ze> : null;
        e[108] = V.failure;
        e[109] = V.kind;
        e[110] = et;
    } else {
        et = e[110];
    }
    let Pe;
    if (e[111] !== _) {
        Pe = <It1Component tap={_}/>;
        e[111] = _;
        e[112] = Pe;
    } else {
        Pe = e[112];
    }
    const Ne = !q || Q.load === "loading";
    let Te;
    if (e[113] !== qe) {
        Te = ()=>{
            qe();
        };
        e[113] = qe;
        e[114] = Te;
    } else {
        Te = e[114];
    }
    let ie;
    if (e[115] !== ke || e[116] !== De || e[117] !== Ne || e[118] !== Te) {
        ie = <Pt><Rt1 disabled={Ne} onClick={Te} pending={ke} variant="primary">{De}</Rt1></Pt>;
        e[115] = ke;
        e[116] = De;
        e[117] = Ne;
        e[118] = Te;
        e[119] = ie;
    } else {
        ie = e[119];
    }
    let Ve;
    if (e[120] !== p || e[121] !== botName || e[122] !== je || e[123] !== He || e[124] !== F) {
        Ve = F === null || p === null ? null : <Zs1Component intro=<T_1 id="EFqXda" values={{
            botName
        }}/> title={He(F)} entries={F.memories.map((v)=>({
                date: je(v.learnedAtMs),
                text: v.text,
                factId: v.factId
            }))} onClose={()=>setF(null)}/>;
        e[120] = p;
        e[121] = botName;
        e[122] = je;
        e[123] = He;
        e[124] = F;
        e[125] = Ve;
    } else {
        Ve = e[125];
    }
    let $e;
    if (e[126] !== Ye || e[127] !== onExpand || e[128] !== Qe || e[129] !== Ae || e[130] !== Se || e[131] !== et || e[132] !== Pe || e[133] !== ie || e[134] !== Ve || e[135] !== u) {
        $e = <Ye onExpand={onExpand} title={Qe} titleId={u}>{Ae}{Se}{et}{Pe}{ie}{Ve}</Ye>;
        e[126] = Ye;
        e[127] = onExpand;
        e[128] = Qe;
        e[129] = Ae;
        e[130] = Se;
        e[131] = et;
        e[132] = Pe;
        e[133] = ie;
        e[134] = Ve;
        e[135] = u;
        e[136] = $e;
    } else {
        $e = e[136];
    }
    return $e;
}
function Vi(s) {
    return s.factId;
}
function Fi() {}
function XsComponent(s) {
    XsComponent.d = 522;
    const e = c_1.c(13);
    const { result } = s;
    const { _ } = u_1();
    const length = result.alreadyInTeam.length;
    let c;
    if (e[0] !== _ || e[1] !== result.created) {
        c = result.created.length === 0 ? null : <ul aria-label={_({
            id: "uSbxfn"
        })} className="sand-78zum5 sand-dt5ytf sand-1jnr06f sand-1ghz6dp sand-wn43p0 sand-tyxrsu">{result.created.map(KiComponent)}</ul>;
        e[0] = _;
        e[1] = result.created;
        e[2] = c;
    } else {
        c = e[2];
    }
    let r;
    if (e[3] !== _ || e[4] !== length) {
        r = length === 0 ? null : <Ze>{_({
            id: "3MsLBr",
            values: {
                known: length
            }
        })}</Ze>;
        e[3] = _;
        e[4] = length;
        e[5] = r;
    } else {
        r = e[5];
    }
    let o;
    if (e[6] !== _ || e[7] !== result.keptPrivateCount) {
        o = result.keptPrivateCount === 0 ? null : <Ze>{_({
            id: "ZzwxIS",
            values: {
                0: result.keptPrivateCount
            }
        })}</Ze>;
        e[6] = _;
        e[7] = result.keptPrivateCount;
        e[8] = o;
    } else {
        o = e[8];
    }
    let d;
    if (e[9] !== c || e[10] !== r || e[11] !== o) {
        d = <>{c}{r}{o}</>;
        e[9] = c;
        e[10] = r;
        e[11] = o;
        e[12] = d;
    } else {
        d = e[12];
    }
    return d;
}
function KiComponent(s) {
    return <li key={s.factId}><Yt level="body2">{s.text}</Yt></li>;
}
const ys = {
    created: [],
    alreadyInTeam: [],
    keptPrivateCount: 0
};
function Ui(s, result) {
    return {
        created: [
            ...s.created,
            ...result.created
        ],
        alreadyInTeam: [
            ...s.alreadyInTeam,
            ...result.alreadyInTeam
        ],
        keptPrivateCount: s.keptPrivateCount + result.keptPrivateCount
    };
}
async function Wi(s) {
    try {
        return {
            kind: "saved",
            result: await s()
        };
    } catch (error) {
        d0(error, {
            tags: {
                sand_area: "team-memories"
            }
        });
        return {
            kind: "failed",
            reason: e(error)
        };
    }
}
const Ht = {
    name: {
        kMv6JI: "sand-1ey7xld",
        $$css: true
    },
    field: {
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-h8yej3",
        kZKoxP: "sand-1fgtraw",
        kLKAdn: "sand-1iorvi4",
        kGO01o: "sand-jkvuk6",
        kZCmMZ: "sand-mzvs34",
        kwRFfy: "sand-f159sx",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-q03nf1",
        kaIpWk: "sand-1qmwy7c",
        kWkggS: "sand-vvtkfd",
        kMwMTN: "sand-tyxrsu",
        kMv6JI: "sand-jb2p0i",
        $$css: true
    },
    dialogBody: {
        kLKAdn: "sand-1y1aw1k",
        kGO01o: "sand-1l90r2v",
        $$css: true
    }
};
function Gi(s) {
    return {
        name: s.name,
        checked: true,
        done: false,
        needsValue: true,
        ...s.description.length === 0 ? {} : {
            reason: s.description
        }
    };
}
function Os1Component(s) {
    Os1Component.d = 526;
    const e = c_1.c(113);
    const { entry, slot, agentId, isReadOnly, isExpanded, onExpand, onCollapse } = s;
    const { _: __1 } = u_1();
    const { isChained } = b_1();
    const f = r_1.useId();
    const u = bY(agentId);
    const serverId = u?.serverId ?? null;
    const { localAnswers } = b7();
    let h;
    if (e[0] !== entry.event) {
        h = entry.event.type === "team-shared" ? hL(entry.event, "plugins") : undefined;
        e[0] = entry.event;
        e[1] = h;
    } else {
        h = e[1];
    }
    const b = h;
    let E;
    if (e[2] !== b) {
        E = b ?? {};
        e[2] = b;
        e[3] = E;
    } else {
        E = e[3];
    }
    const j = qs(agentId, E, Gs(agentId));
    const { carryOver } = h_();
    const { put } = h$();
    let _;
    if (e[4] !== agentId || e[5] !== entry.id || e[6] !== onCollapse || e[7] !== onExpand || e[8] !== slot.status) {
        _ = {
            agentId,
            entryId: entry.id,
            kind: "secrets",
            slotStatus: slot.status,
            sandArea: "team-secrets",
            onExpand,
            onCollapse
        };
        e[4] = agentId;
        e[5] = entry.id;
        e[6] = onCollapse;
        e[7] = onExpand;
        e[8] = slot.status;
        e[9] = _;
    } else {
        _ = e[9];
    }
    const T = useNt(_);
    const D = hz(entry.id, "secrets");
    const O = agentId == null ? null : {
        agentId,
        entryId: D
    };
    const $ = c1("widget", {
        agentId,
        entryId: D
    });
    const [P, setP] = r_1.useState(null);
    let I;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        I = new Map;
        e[10] = I;
    } else {
        I = e[10];
    }
    const [A, setA] = r_1.useState(I);
    let V;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        V = [];
        e[11] = V;
    } else {
        V = e[11];
    }
    const [H, setH] = r_1.useState(V);
    const [Y, setY] = r_1.useState(false);
    const [Q, setQ] = r_1.useState(false);
    let B;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        B = {
            kind: "idle"
        };
        e[12] = B;
    } else {
        B = e[12];
    }
    const [L, setL] = r_1.useState(B);
    const Re = i0(slot.status, $);
    const Ke = hM(Re, isExpanded);
    const [Ge, setGe] = r_1.useState(Ke);
    let se;
    if (e[13] !== j.rows) {
        se = new Set(j.rows.filter(Yi).map(Xi));
        e[13] = j.rows;
        e[14] = se;
    } else {
        se = e[14];
    }
    const Z = se;
    let J;
    if (e[15] !== Z) {
        J = (M)=>!Z.has(M.name);
        e[15] = Z;
        e[16] = J;
    } else {
        J = e[16];
    }
    const xe = H.filter(J);
    const Ce = new Map(xe.map(Qi));
    const ne = [
        ...xe.map(Gi),
        ...j.rows.filter((M)=>!Ce.has(M.name))
    ];
    const Oe = ne.slice(0, j_2);
    const le = (M)=>P?.get(M.name) ?? (!Ke && M.checked && Oe.includes(M));
    const ke = (name, Ie)=>setP((g)=>new Map(g ?? ne.map((U)=>[
                    U.name,
                    le(U)
                ])).set(name, Ie));
    const _e = ne.filter((M)=>!M.done && le(M));
    const pe = (name)=>Ce.get(name)?.value ?? A.get(name)?.trim() ?? "";
    const Me = (M)=>Ce.get(M.name)?.description ?? "";
    const ticked = _e.filter((M)=>!M.needsValue || b_2(pe(M.name)) === null);
    const Ue = !isReadOnly && agentId != null && serverId != null && u?.harness === "temporal" && u.viewerIsOwner !== false && u.visibility === hB.team;
    let re;
    if (e[17] !== entry.event) {
        re = entry.event.type === "team-shared" && hL(entry.event, "secrets") !== undefined;
        e[17] = entry.event;
        e[18] = re;
    } else {
        re = e[18];
    }
    const Je = re;
    const je = Ue && Je;
    const Xe = b9("grok_bot_multiplayer");
    const He = ba(u, Xe);
    const he = Ji(L.kind, Re, isExpanded, He);
    const Ee = entry.event.type === "team-shared" && entry.event.unshared === true;
    const ze = j.isSettled && ne.length === 0;
    let De;
    if (e[19] !== j.rows) {
        De = j.rows.some(Hi);
        e[19] = j.rows;
        e[20] = De;
    } else {
        De = e[20];
    }
    const Ye = !De;
    const Qe = ()=>{
        if (!(O == null || !je)) {
            if (slot.status === "proposed") {
                T.send({
                    resolution: {
                        kind: "dismissed"
                    },
                    value: i2
                });
                return;
            }
            if (localAnswers.get("widget", O) == null) {
                localAnswers.record("widget", O, {
                    kind: "dismissed"
                });
            }
            onCollapse();
        }
    };
    const Ae = async ()=>{
        if (ticked.length > 0) {
            await et();
            return;
        }
        if (!T.retry()) {
            if (Ke) {
                onCollapse();
                return;
            }
            Qe();
        }
    };
    const Se = (M)=>{
        setH((Ie)=>[
                ...Ie,
                M
            ]);
        ke(M.name, true);
        return true;
    };
    const et = async ()=>{
        if (!je || serverId == null || L.kind === "running") {
            return;
        }
        setL({
            kind: "running"
        });
        const M = await ea({
            serverId,
            ticked,
            secretOf: (Ie)=>({
                    value: pe(Ie.name),
                    description: Me(Ie)
                }),
            carryOverSecrets: carryOver,
            putSecret: put
        });
        if (M.kind === "failed") {
            setL({
                kind: "idle",
                didFail: true
            });
            return;
        }
        if (M.result.failed.length > 0) {
            setL({
                kind: "idle",
                partial: M.result
            });
            return;
        }
        setA(new Map);
        setH([]);
        setL(M);
        T.send({
            resolution: {
                kind: "answered",
                value: i1
            },
            value: i1
        }, ()=>setL({
                kind: "idle"
            }));
    };
    let Pe;
    if (e[21] !== __1) {
        Pe = __1({
            id: "MAv87s"
        });
        e[21] = __1;
        e[22] = Pe;
    } else {
        Pe = e[22];
    }
    const Ne = Pe;
    let Te;
    if (e[23] !== Ye) {
        Te = Ye ? <T_1 id="K/F6pa"/> : <T_1 id="1XFTF/"/>;
        e[23] = Ye;
        e[24] = Te;
    } else {
        Te = e[24];
    }
    const busy = Te;
    if (!isExpanded && Y) {
        setY(false);
    }
    if (!isExpanded && Q) {
        setQ(false);
    }
    if (Ke !== Ge) {
        setGe(Ke);
        setP(null);
    }
    if (!isExpanded && L.kind === "running") {
        let M;
        if (e[25] !== busy || e[26] !== Ne || e[27] !== f) {
            M = <Bt1 title={Ne} titleId={f}>{busy}</Bt1>;
            e[25] = busy;
            e[26] = Ne;
            e[27] = f;
            e[28] = M;
        } else {
            M = e[28];
        }
        return M;
    }
    if (he === "dismissed" || he === "saved") {
        let M;
        if (e[29] !== Z || e[30] !== L.kind || e[31] !== L.result) {
            M = L.kind === "done" ? L.result.copied : [
                ...Z
            ];
            e[29] = Z;
            e[30] = L.kind;
            e[31] = L.result;
            e[32] = M;
        } else {
            M = e[32];
        }
        const names = M;
        const g = !isReadOnly && !Ee;
        const U = g ? onExpand : undefined;
        let ae;
        let me;
        if (e[33] !== __1) {
            ae = (rn)=>__1({
                    id: "ZJlZEU",
                    values: {
                        count: rn
                    }
                });
            me = __1({
                id: "Vq6/r4"
            });
            e[33] = __1;
            e[34] = ae;
            e[35] = me;
        } else {
            ae = e[34];
            me = e[35];
        }
        let tt;
        if (e[36] === Symbol.for("react.memo_cache_sentinel")) {
            tt = [
                <Kt1 key="key" name="key"/>
            ];
            e[36] = tt;
        } else {
            tt = e[36];
        }
        let ot;
        if (e[37] !== names || e[38] !== ae || e[39] !== me) {
            ot = <Ft1Component countLabelOf={ae} emptyLabel={me} icons={tt} names={names}/>;
            e[37] = names;
            e[38] = ae;
            e[39] = me;
            e[40] = ot;
        } else {
            ot = e[40];
        }
        let pt;
        if (e[41] !== g || e[42] !== onExpand || e[43] !== Ne) {
            pt = g ? <Vt1 name={Ne} onClick={onExpand}/> : null;
            e[41] = g;
            e[42] = onExpand;
            e[43] = Ne;
            e[44] = pt;
        } else {
            pt = e[44];
        }
        let $t;
        if (e[45] !== U || e[46] !== ot || e[47] !== pt || e[48] !== Ne || e[49] !== f) {
            $t = <Fe isExpanded={false} onExpand={U} summary={ot} title={Ne} titleId={f} trailing={pt}/>;
            e[45] = U;
            e[46] = ot;
            e[47] = pt;
            e[48] = Ne;
            e[49] = f;
            e[50] = $t;
        } else {
            $t = e[50];
        }
        return $t;
    }
    let Ve;
    if (e[51] !== L.kind || e[52] !== L.partial) {
        Ve = L.kind === "idle" && L.partial !== undefined ? <En1Component result={L.partial}/> : null;
        e[51] = L.kind;
        e[52] = L.partial;
        e[53] = Ve;
    } else {
        Ve = e[53];
    }
    const $e = Ve;
    if (!isExpanded) {
        const M = ne.filter(Zi);
        let Ie = null;
        if (_e.length > 0) {
            let me;
            if (e[54] !== _e) {
                me = <T_1 id="Df+sp6" values={{
                    0: _e.length
                }}/>;
                e[54] = _e;
                e[55] = me;
            } else {
                me = e[55];
            }
            Ie = me;
        } else if (j.isSettled && M.length > 0) {
            let me;
            if (e[56] !== M) {
                me = <T_1 id="RddvI3" values={{
                    0: M.length
                }}/>;
                e[56] = M;
                e[57] = me;
            } else {
                me = e[57];
            }
            Ie = me;
        }
        if (L.kind === "idle" && L.didFail === true) {
            let me;
            if (e[58] !== __1) {
                me = __1({
                    id: "CwSm8P"
                });
                e[58] = __1;
                e[59] = me;
            } else {
                me = e[59];
            }
            Ie = me;
        }
        let g;
        if (e[60] !== $e || e[61] !== T) {
            g = T.didFail ? <It1Component tap={T}/> : $e;
            e[60] = $e;
            e[61] = T;
            e[62] = g;
        } else {
            g = e[62];
        }
        const U = Je ? onExpand : undefined;
        let ae;
        if (e[63] !== Ie || e[64] !== g || e[65] !== U || e[66] !== Ne || e[67] !== f) {
            ae = <Fe details={g} isExpanded={false} isSummaryPending onExpand={U} summary={Ie} title={Ne} titleId={f}/>;
            e[63] = Ie;
            e[64] = g;
            e[65] = U;
            e[66] = Ne;
            e[67] = f;
            e[68] = ae;
        } else {
            ae = e[68];
        }
        return ae;
    }
    const v = L.kind === "running";
    const W = isChained && ticked.length === 0 ? <T_1 id="6Uau97"/> : <T_1 id="xGVfLh"/>;
    const ye = v || !je || !j.isSettled;
    const oe = v || !Ue || !j.isSettled;
    const VeComponent = (row)=><JsComponent key={row.name} isChecked={le(row)} isDisabled={ye} onChange={(Ie)=>ke(row.name, Ie)} onValueChange={(Ie)=>setA((g)=>new Map(g).set(row.name, Ie))} row={row} value={Ce.has(row.name) ? null : A.get(row.name) ?? ""}/>;
    let ue;
    if (e[69] !== ze) {
        ue = ze ? <T_1 id="/R4ABa"/> : undefined;
        e[69] = ze;
        e[70] = ue;
    } else {
        ue = e[70];
    }
    let de;
    if (e[71] !== __1) {
        de = __1({
            id: "K4s5mJ"
        });
        e[71] = __1;
        e[72] = de;
    } else {
        de = e[72];
    }
    const Be1 = YsComponent;
    let onAddNew;
    if (e[73] !== setY || e[74] !== setQ) {
        onAddNew = ()=>{
            setQ(false);
            setY(true);
        };
        e[73] = setY;
        e[74] = setQ;
        e[75] = onAddNew;
    } else {
        onAddNew = e[75];
    }
    const Be = ne.map(VeComponent);
    let x;
    if (e[76] !== Be1 || e[77] !== Q || e[78] !== setQ || e[79] !== onAddNew || e[80] !== Be) {
        x = <Be1 onAddNew={onAddNew} onOpenChange={setQ} open={Q}>{Be}</Be1>;
        e[76] = Be1;
        e[77] = Q;
        e[78] = setQ;
        e[79] = onAddNew;
        e[80] = Be;
        e[81] = x;
    } else {
        x = e[81];
    }
    let K;
    if (e[82] !== j.isBoxCardUnreachable) {
        K = j.isBoxCardUnreachable ? <Ze><T_1 id="V3z1Kr"/></Ze> : null;
        e[82] = j.isBoxCardUnreachable;
        e[83] = K;
    } else {
        K = e[83];
    }
    let X;
    if (e[84] !== L.didFail || e[85] !== L.kind) {
        X = L.kind === "idle" && L.didFail === true ? <Ze><T_1 id="CwSm8P"/></Ze> : null;
        e[84] = L.didFail;
        e[85] = L.kind;
        e[86] = X;
    } else {
        X = e[86];
    }
    let ee;
    if (e[87] !== T) {
        ee = <It1Component tap={T}/>;
        e[87] = T;
        e[88] = ee;
    } else {
        ee = e[88];
    }
    let S;
    if (e[89] !== Ae) {
        S = ()=>{
            Ae();
        };
        e[89] = Ae;
        e[90] = S;
    } else {
        S = e[90];
    }
    let idle;
    if (e[91] !== W || e[92] !== Ke) {
        idle = Ke ? <T_1 id="DPfwMq"/> : W;
        e[91] = W;
        e[92] = Ke;
        e[93] = idle;
    } else {
        idle = e[93];
    }
    let We;
    if (e[94] !== busy || e[95] !== v || e[96] !== idle) {
        We = <Jl1 busy={busy} idle={idle} isBusy={v}/>;
        e[94] = busy;
        e[95] = v;
        e[96] = idle;
        e[97] = We;
    } else {
        We = e[97];
    }
    let we;
    if (e[98] !== ye || e[99] !== v || e[100] !== S || e[101] !== We) {
        we = <Ft disabled={ye} onClick={S} pending={v}>{We}</Ft>;
        e[98] = ye;
        e[99] = v;
        e[100] = S;
        e[101] = We;
        e[102] = we;
    } else {
        we = e[102];
    }
    let nt;
    if (e[103] !== setY) {
        nt = ()=>setY(true);
        e[103] = setY;
        e[104] = nt;
    } else {
        nt = e[104];
    }
    let mt;
    if (e[105] === Symbol.for("react.memo_cache_sentinel")) {
        mt = <T_1 id="E0czcG"/>;
        e[105] = mt;
    } else {
        mt = e[105];
    }
    let ct;
    if (e[106] !== oe || e[107] !== nt) {
        ct = <Rt1 disabled={oe} onClick={nt} variant="secondary">{mt}</Rt1>;
        e[106] = oe;
        e[107] = nt;
        e[108] = ct;
    } else {
        ct = e[108];
    }
    const ut = ne.length > j_2 ? <Rt1 disabled={oe} onClick={()=>setQ(true)} variant="secondary"><T_1 id="rbhuSv"/></Rt1> : null;
    let St;
    if (e[109] !== we || e[110] !== ct || e[111] !== ut) {
        St = <Pt>{we}{ct}{ut}</Pt>;
        e[109] = we;
        e[110] = ct;
        e[111] = ut;
        e[112] = St;
    } else {
        St = e[112];
    }
    return <Fe onExpand={onExpand} subtitle={ue} title={de} titleId={f}>{ne.length === 0 ? null : <_t hasIcons>{Oe.map(VeComponent)}</_t>}<T_5 isDisabled={oe} onAdd={Se} onOpenChange={setY} open={Y} takenNames={new Set(ne.map(qi))}/>{x}{K}{X}{ee}{$e}{St}</Fe>;
}
function qi(s) {
    return s.name;
}
function Zi(s) {
    return !s.done;
}
function Hi(s) {
    return !s.done;
}
function Qi(s) {
    return [
        s.name,
        s
    ];
}
function Xi(s) {
    return s.name;
}
function Yi(s) {
    return s.done;
}
function YsComponent(s) {
    YsComponent.d = 523;
    const e = c_1.c(22);
    const { open, onOpenChange, onAddNew, children } = s;
    let onClose;
    if (e[0] !== onOpenChange) {
        onClose = ()=>onOpenChange(false);
        e[0] = onOpenChange;
        e[1] = onClose;
    } else {
        onClose = e[1];
    }
    let o;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        o = <T_3 title=<T_1 id="K4s5mJ"/>/>;
        e[2] = o;
    } else {
        o = e[2];
    }
    let d;
    if (e[3] !== children) {
        d = <x.Body style={Ht.dialogBody}><_t hasIcons shown={children.length}>{children}</_t></x.Body>;
        e[3] = children;
        e[4] = d;
    } else {
        d = e[4];
    }
    let a;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        a = <T_1 id="E0czcG"/>;
        e[5] = a;
    } else {
        a = e[5];
    }
    let m;
    if (e[6] !== onAddNew) {
        m = <x.Action onClick={onAddNew} variant="secondary">{a}</x.Action>;
        e[6] = onAddNew;
        e[7] = m;
    } else {
        m = e[7];
    }
    let f;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        f = <x.ActionSpacer/>;
        e[8] = f;
    } else {
        f = e[8];
    }
    let u;
    if (e[9] !== onOpenChange) {
        u = ()=>onOpenChange(false);
        e[9] = onOpenChange;
        e[10] = u;
    } else {
        u = e[10];
    }
    let p;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        p = <T_1 id="DPfwMq"/>;
        e[11] = p;
    } else {
        p = e[11];
    }
    let y;
    if (e[12] !== u) {
        y = <x.Action onClick={u} variant="primary">{p}</x.Action>;
        e[12] = u;
        e[13] = y;
    } else {
        y = e[13];
    }
    let h;
    if (e[14] !== m || e[15] !== y) {
        h = <x.ActionBar>{m}{f}{y}</x.ActionBar>;
        e[14] = m;
        e[15] = y;
        e[16] = h;
    } else {
        h = e[16];
    }
    let b;
    if (e[17] !== open || e[18] !== onClose || e[19] !== h || e[20] !== d) {
        b = <Ls height="hug" onClose={onClose} open={open}>{o}{d}{h}</Ls>;
        e[17] = open;
        e[18] = onClose;
        e[19] = h;
        e[20] = d;
        e[21] = b;
    } else {
        b = e[21];
    }
    return b;
}
function Ji(kind, e, isExpanded, n) {
    const l = kind === "done" ? "saved" : e;
    if (l === "dismissed" && isExpanded || l === "saved" && isExpanded && n) {
        return "proposed";
    }
    return l;
}
async function ea(s) {
    try {
        const e = [];
        const t = s.ticked.filter((n)=>!n.needsValue).map((n)=>n.name);
        if (t.length > 0) {
            e.push(...await s.carryOverSecrets(s.serverId, t));
        }
        for (const n of s.ticked.filter((l)=>l.needsValue)){
            try {
                await s.putSecret(s.serverId, {
                    name: n.name,
                    ...s.secretOf(n)
                });
                e.push({
                    name: n.name,
                    outcome: "copied"
                });
            } catch (error) {
                d0(error, {
                    tags: {
                        sand_area: "team-secrets"
                    }
                });
                e.push({
                    name: n.name,
                    outcome: "failed"
                });
            }
        }
        return {
            kind: "done",
            result: {
                copied: e.filter((n)=>n.outcome === "copied").map((n)=>n.name),
                failed: e.filter((n)=>n.outcome !== "copied")
            }
        };
    } catch (error) {
        d0(error, {
            tags: {
                sand_area: "team-secrets"
            }
        });
        return {
            kind: "failed"
        };
    }
}
function JsComponent(s) {
    JsComponent.d = 524;
    const e = c_1.c(21);
    const { row, isChecked, isDisabled, value, onChange, onValueChange } = s;
    const { _ } = u_1();
    const { pluginName } = row;
    let m;
    if (e[0] !== _ || e[1] !== pluginName || e[2] !== row.reason) {
        m = row.reason ?? (pluginName === undefined ? undefined : _({
            id: "b5hlxW",
            values: {
                pluginName
            }
        }));
        e[0] = _;
        e[1] = pluginName;
        e[2] = row.reason;
        e[3] = m;
    } else {
        m = e[3];
    }
    const f = m;
    let u;
    if (e[4] !== _ || e[5] !== isChecked || e[6] !== isDisabled || e[7] !== onValueChange || e[8] !== row.done || e[9] !== row.name || e[10] !== row.needsValue || e[11] !== value) {
        u = !row.done && row.needsValue && isChecked && value !== null ? <input aria-label={_({
            id: "WpfUxq",
            values: {
                0: row.name
            }
        })} autoComplete="off" disabled={isDisabled} onChange={(y)=>onValueChange(y.currentTarget.value)} placeholder={_({
            id: "set3Vx"
        })} spellCheck={false} type="password" value={value} {...p_1(a_.body2, Ht.field)}/> : null;
        e[4] = _;
        e[5] = isChecked;
        e[6] = isDisabled;
        e[7] = onValueChange;
        e[8] = row.done;
        e[9] = row.name;
        e[10] = row.needsValue;
        e[11] = value;
        e[12] = u;
    } else {
        u = e[12];
    }
    let p;
    if (e[13] !== isChecked || e[14] !== isDisabled || e[15] !== onChange || e[16] !== f || e[17] !== row.done || e[18] !== row.name || e[19] !== u) {
        p = <Tt isChecked={isChecked} isDisabled={isDisabled} isDone={row.done} onChange={onChange} reason={f} title={row.name} titleStyle={Ht.name}>{u}</Tt>;
        e[13] = isChecked;
        e[14] = isDisabled;
        e[15] = onChange;
        e[16] = f;
        e[17] = row.done;
        e[18] = row.name;
        e[19] = u;
        e[20] = p;
    } else {
        p = e[20];
    }
    return p;
}
function En1Component(s) {
    En1Component.d = 525;
    const e = c_1.c(12);
    const { result } = s;
    const { _ } = u_1();
    let l;
    if (e[0] !== _) {
        l = ({ name, outcome })=>{
            switch(outcome){
                case "box-unreachable":
                    return _({
                        id: "s1goKk",
                        values: {
                            name
                        }
                    });
                case "invalid-value":
                    return _({
                        id: "JwaZnP",
                        values: {
                            name,
                            GROK_BOT_SECRET_VALUE_MIN_LENGTH: d_1,
                            GROK_BOT_SECRET_VALUE_MAX_KIB: c_3
                        }
                    });
                case "failed":
                    return _({
                        id: "fySl0g",
                        values: {
                            name
                        }
                    });
                case "missing":
                case "invalid-name":
                    return _({
                        id: "CCZHoj",
                        values: {
                            name
                        }
                    });
            }
        };
        e[0] = _;
        e[1] = l;
    } else {
        l = e[1];
    }
    const c = l;
    let r;
    if (e[2] !== result.copied.length) {
        r = result.copied.length === 0 ? null : <Ze><T_1 id="cxm8D4" values={{
            0: result.copied.length
        }}/></Ze>;
        e[2] = result.copied.length;
        e[3] = r;
    } else {
        r = e[3];
    }
    let o;
    if (e[4] !== c || e[5] !== result.failed) {
        let a;
        if (e[7] !== c) {
            a = (m)=><Ze key={m.name}>{c(m)}</Ze>;
            e[7] = c;
            e[8] = a;
        } else {
            a = e[8];
        }
        o = result.failed.map(a);
        e[4] = c;
        e[5] = result.failed;
        e[6] = o;
    } else {
        o = e[6];
    }
    let d;
    if (e[9] !== r || e[10] !== o) {
        d = <>{r}{o}</>;
        e[9] = r;
        e[10] = o;
        e[11] = d;
    } else {
        d = e[11];
    }
    return d;
}
function Rs1Component(s) {
    Rs1Component.d = 554;
    const e = c_1.c(94);
    const { entry, slot, agentId, isReadOnly, isExpanded, onExpand, onCollapse } = s;
    const { _: __1 } = u_1();
    const { isChained } = b_1();
    const f = r_1.useId();
    const u = bY(agentId);
    const p = cR(agentId);
    const y = cf(agentId);
    const h = cZ(agentId);
    const b = cK(c_(h, []));
    const E = cT();
    const j = cW();
    const N = cY();
    const { localAnswers, workflows } = b7();
    const T = r_1.useContext(b3);
    const D = b9("grok_bot_multiplayer");
    const O = hz(entry.id, "skills");
    const $ = agentId == null ? null : {
        agentId,
        entryId: O
    };
    const P = c1("widget", {
        agentId,
        entryId: O
    });
    let z;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        z = new Map;
        e[0] = z;
    } else {
        z = e[0];
    }
    const [I, setI] = r_1.useState(z);
    let C;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        C = {
            kind: "idle"
        };
        e[1] = C;
    } else {
        C = e[1];
    }
    const [V, setV] = r_1.useState(C);
    let F;
    if (e[2] !== agentId || e[3] !== entry.id || e[4] !== onCollapse || e[5] !== onExpand || e[6] !== slot.status) {
        F = {
            agentId,
            entryId: entry.id,
            kind: "skills",
            slotStatus: slot.status,
            sandArea: "team-skills",
            onExpand,
            onCollapse
        };
        e[2] = agentId;
        e[3] = entry.id;
        e[4] = onCollapse;
        e[5] = onExpand;
        e[6] = slot.status;
        e[7] = F;
    } else {
        F = e[7];
    }
    const Y = useNt(F);
    const [R, setR] = r_1.useState(false);
    const [q, setQ] = r_1.useState(false);
    let L;
    if (e[8] !== p) {
        L = aG(p) || p.status === "empty";
        e[8] = p;
        e[9] = L;
    } else {
        L = e[9];
    }
    const ce = L;
    const Re = cJ(y.plugins);
    const botSkills = ce ? cg(y.plugins).librarySkills : null;
    let isTaken;
    let Le;
    let se;
    if (e[10] !== isExpanded || e[11] !== P || e[12] !== slot.status) {
        const g = i3(slot.status, P);
        isTaken = g === "added";
        Le = g === "dismissed" && isExpanded ? "proposed" : g;
        se = hM(g, isExpanded);
        e[10] = isExpanded;
        e[11] = P;
        e[12] = slot.status;
        e[13] = isTaken;
        e[14] = Le;
        e[15] = se;
    } else {
        isTaken = e[13];
        Le = e[14];
        se = e[15];
    }
    const Z = se;
    const J = i4({
        slot,
        botSkills,
        staged: [],
        isTaken,
        locale: eY()
    });
    const xe = J.slice(0, j_2);
    let Ce;
    if (e[16] !== I) {
        Ce = (g)=>I.get(g.key) ?? g.checked;
        e[16] = I;
        e[17] = Ce;
    } else {
        Ce = e[17];
    }
    const ne = Ce;
    let Oe;
    if (e[18] !== ne) {
        Oe = (g)=>!g.onBot && ne(g);
        e[18] = ne;
        e[19] = Oe;
    } else {
        Oe = e[19];
    }
    const le = xe.filter(Oe);
    let ke;
    if (e[20] !== ne) {
        ke = (g)=>g.onBot && !ne(g);
        e[20] = ne;
        e[21] = ke;
    } else {
        ke = e[21];
    }
    const _e = xe.filter(ke);
    const pe = le.length + _e.length > 0;
    const Me = (g)=>{
        if (g.draft != null) {
            if (g.draft.body.length > 0) {
                return g.draft.body;
            }
            return b.find((U)=>U.id === g.key || cL(U.name) === g.key)?.body;
        }
    };
    const qe = (g)=>{
        const body = Me(g);
        if (g.draft == null || body === undefined) {
            return undefined;
        }
        return i9({
            ...g.draft,
            body
        });
    };
    let Ue;
    if (e[22] !== h) {
        Ue = aG(h) || h.status === "empty" || h.status === "unavailable";
        e[22] = h;
        e[23] = Ue;
    } else {
        Ue = e[23];
    }
    const re = Ue;
    const je = !le.some(ca) || re;
    const Xe = !je && h.status === "failed";
    const He = !ce && p.status === "failed" || Xe;
    const he = !isReadOnly && agentId != null && u?.harness === "temporal" && u.viewerIsOwner !== false && u.visibility === hB.team;
    const Ee = V.kind === "running";
    const ze = Ee || !he || !ce || !je;
    const De = !ce && p.status === "loading";
    const Ye = De || !je && h.status === "loading";
    const Qe = entry.event.type === "team-shared" && entry.event.unshared === true;
    const Ae = he && !Qe;
    const Se = he && T != null && ba(u, D);
    const et = ce && re && i5(xe, b, Re);
    const Pe = Se && T != null && et ? T.openTeamBotSkills : null;
    const Ne = ()=>{
        if (!($ == null || Ee || !he)) {
            if (slot.status === "proposed") {
                Y.send({
                    resolution: {
                        kind: "dismissed"
                    },
                    value: i8
                });
                return;
            }
            if (localAnswers.get("widget", $) == null) {
                localAnswers.record("widget", $, {
                    kind: "dismissed"
                });
            }
            onCollapse();
        }
    };
    const Te = async ()=>{
        if (ze || agentId == null) {
            return;
        }
        setV({
            kind: "running"
        });
        const failed = [];
        const U = new Set(J.flatMap(da));
        for (const tt of le){
            const ot = qe(tt);
            const pt = ot === undefined ? "missing" : await Wt(()=>j(agentId, ot));
            if (pt === undefined) {
                U.add(tt.key);
            } else {
                failed.push({
                    name: tt.title,
                    action: "add",
                    reason: pt
                });
            }
        }
        for (const tt of _e){
            const ot = await Wt(()=>N(agentId, tt.key));
            if (ot === undefined) {
                U.delete(tt.key);
            } else {
                failed.push({
                    name: tt.title,
                    action: "remove",
                    reason: ot
                });
            }
        }
        if (failed.length > 0) {
            setV({
                kind: "idle",
                failed
            });
            return;
        }
        if (le.length > 0) {
            setR(true);
        }
        setV({
            kind: "idle"
        });
        setI(new Map);
        const ae = J.flatMap((tt)=>{
            if (tt.position != null && U.has(tt.key)) {
                return [
                    tt.position
                ];
            }
            return [];
        });
        const me = i7(ae, slot.skills?.length ?? 0);
        Y.send({
            resolution: {
                kind: "answered",
                value: me
            },
            value: me
        });
    };
    let ie;
    if (e[24] !== j || e[25] !== agentId) {
        ie = async (g)=>{
            if (agentId == null || await Wt(()=>j(agentId, {
                    name: g.name,
                    content: cQ(g)
                })) !== undefined) {
                return false;
            }
            setR(true);
            return true;
        };
        e[24] = j;
        e[25] = agentId;
        e[26] = ie;
    } else {
        ie = e[26];
    }
    const Ve = ie;
    if (!isExpanded && q) {
        setQ(false);
    }
    if (Le === "empty") {
        return null;
    }
    let $e;
    if (e[27] !== __1) {
        $e = __1({
            id: "PCSkw2"
        });
        e[27] = __1;
        e[28] = $e;
    } else {
        $e = e[28];
    }
    const v = $e;
    if (Le === "pending") {
        let g;
        if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
            g = <T_1 id="DgWLAO"/>;
            e[29] = g;
        } else {
            g = e[29];
        }
        let U;
        if (e[30] !== v || e[31] !== f) {
            U = <Bt1 title={v} titleId={f}>{g}</Bt1>;
            e[30] = v;
            e[31] = f;
            e[32] = U;
        } else {
            U = e[32];
        }
        return U;
    }
    const W = isTaken || J.some(ra);
    const ye = W || _e.length > 0;
    const oe = async ()=>{
        if (!ze && (pe || W || R)) {
            await Te();
            return;
        }
        Ne();
    };
    let ve;
    if (e[33] !== R || e[34] !== isChained || e[35] !== pe) {
        ve = isChained && !pe && !R ? <T_1 id="6Uau97"/> : <T_1 id="xGVfLh"/>;
        e[33] = R;
        e[34] = isChained;
        e[35] = pe;
        e[36] = ve;
    } else {
        ve = e[36];
    }
    let ue = ve;
    if (ye || Z) {
        let g;
        if (e[37] !== pe) {
            g = pe ? <T_1 id="tfDRzk"/> : <T_1 id="DPfwMq"/>;
            e[37] = pe;
            e[38] = g;
        } else {
            g = e[38];
        }
        ue = g;
    }
    const de = ye ? <T_1 id="K/F6pa"/> : <T_1 id="Z4OdvO"/>;
    if (!isExpanded && Ee) {
        let g;
        if (e[39] !== de || e[40] !== v || e[41] !== f) {
            g = <Bt1 title={v} titleId={f}>{de}</Bt1>;
            e[39] = de;
            e[40] = v;
            e[41] = f;
            e[42] = g;
        } else {
            g = e[42];
        }
        return g;
    }
    let be;
    if (e[43] !== __1) {
        be = (g, U)=>{
            if (g.length === 0) {
                return <Ft1Component emptyLabel={U} icons={[
                    <Kt1 key="cube" name="cube"/>
                ]} names={[]}/>;
            }
            return <Ft1Component countLabelOf={(ae)=>__1({
                    id: "m+pG3Q",
                    values: {
                        count: ae
                    }
                })} icons={ss(g, oa, AaComponent)} names={g.map(ia)}/>;
        };
        e[43] = __1;
        e[44] = be;
    } else {
        be = e[44];
    }
    const fe = be;
    if (Le === "dismissed") {
        const g = !isReadOnly && !Qe;
        const U = J.filter(la);
        let ae;
        if (e[45] !== g || e[46] !== De || e[47] !== onExpand || e[48] !== v) {
            ae = g && !De ? <Vt1 name={v} onClick={onExpand}/> : null;
            e[45] = g;
            e[46] = De;
            e[47] = onExpand;
            e[48] = v;
            e[49] = ae;
        } else {
            ae = e[49];
        }
        return <Fe isExpanded={false} onExpand={g ? onExpand : undefined} summary={fe(U, De ? "" : __1({
            id: "Vq6/r4"
        }))} title={v} titleId={f} trailing={ae}/>;
    }
    if (Le === "added" && !isExpanded) {
        const g = i6(slot, P);
        const U = botSkills == null ? J.filter((me)=>me.position != null && g.includes(me.position)) : J.filter(na);
        let ae;
        if (e[50] !== Ae || e[51] !== onExpand || e[52] !== v) {
            ae = Ae ? <Vt1 name={v} onClick={onExpand}/> : null;
            e[50] = Ae;
            e[51] = onExpand;
            e[52] = v;
            e[53] = ae;
        } else {
            ae = e[53];
        }
        return <Fe isExpanded={false} onExpand={Ae ? onExpand : undefined} summary={fe(U, __1({
            id: "5A5ntK"
        }))} title={v} titleId={f} trailing={ae}/>;
    }
    let Be;
    if (e[54] !== __1 || e[55] !== V.failed || e[56] !== V.kind) {
        Be = V.kind === "idle" ? V.failed?.map(({ name, action, reason })=><Ze key={`${action}:${name}`}>{__1(action === "add" ? {
                id: "PZYVIo",
                values: {
                    name,
                    reason
                }
            } : {
                id: "M+YwD0",
                values: {
                    name,
                    reason
                }
            })}</Ze>) : null;
        e[54] = __1;
        e[55] = V.failed;
        e[56] = V.kind;
        e[57] = Be;
    } else {
        Be = e[57];
    }
    const x = Be;
    if (!isExpanded) {
        const g = le.length;
        let U;
        if (e[58] !== x || e[59] !== Y) {
            U = Y.didFail ? <It1Component tap={Y}/> : x;
            e[58] = x;
            e[59] = Y;
            e[60] = U;
        } else {
            U = e[60];
        }
        return <Fe details={U} isExpanded={false} isSummaryPending onExpand={onExpand} summary={g === 0 ? <T_1 id="76J7mZ"/> : __1({
            id: "y0eCAK",
            values: {
                count: g
            }
        })} title={v} titleId={f}/>;
    }
    const K = xe.length === 0 && !Ye && !He;
    const X = Se && (De || !re && h.status === "loading");
    let ee = null;
    if (Pe != null) {
        let g;
        if (e[61] === Symbol.for("react.memo_cache_sentinel")) {
            g = <T_1 id="uDGDEn"/>;
            e[61] = g;
        } else {
            g = e[61];
        }
        let U;
        if (e[62] !== Pe || e[63] !== ze) {
            U = <Rt1 disabled={ze} onClick={Pe} variant="secondary">{g}</Rt1>;
            e[62] = Pe;
            e[63] = ze;
            e[64] = U;
        } else {
            U = e[64];
        }
        ee = U;
    } else if (he && !X) {
        let g;
        if (e[65] !== setQ) {
            g = ()=>setQ(true);
            e[65] = setQ;
            e[66] = g;
        } else {
            g = e[66];
        }
        let U;
        if (e[67] === Symbol.for("react.memo_cache_sentinel")) {
            U = <T_1 id="C/t3EV"/>;
            e[67] = U;
        } else {
            U = e[67];
        }
        let ae;
        if (e[68] !== ze || e[69] !== g) {
            ae = <Rt1 disabled={ze} onClick={g} variant="secondary">{U}</Rt1>;
            e[68] = ze;
            e[69] = g;
            e[70] = ae;
        } else {
            ae = e[70];
        }
        ee = ae;
    }
    const takenKeys = new Set([
        ...J.map(sa),
        ...Re.map(ta)
    ]);
    let te;
    if (K && he) {
        let g;
        if (e[71] !== Z) {
            g = Z ? <T_1 id="FC2nNz"/> : <T_1 id="k+6Lvl"/>;
            e[71] = Z;
            e[72] = g;
        } else {
            g = e[72];
        }
        te = g;
    }
    const subtitle = te;
    let we;
    if (e[73] !== __1) {
        we = __1({
            id: "StFqiS"
        });
        e[73] = __1;
        e[74] = we;
    } else {
        we = e[74];
    }
    let nt;
    if (e[75] !== __1 || e[76] !== agentId || e[77] !== he || e[78] !== He || e[79] !== E || e[80] !== workflows) {
        nt = He && he && agentId != null ? <><Ze>{__1({
            id: "YSw1zm"
        })}</Ze><Rt1 onClick={()=>{
            E(agentId);
            workflows.refresh(agentId);
        }} size="sm" variant="tertiary"><T_1 id="6gRgw8"/></Rt1></> : null;
        e[75] = __1;
        e[76] = agentId;
        e[77] = he;
        e[78] = He;
        e[79] = E;
        e[80] = workflows;
        e[81] = nt;
    } else {
        nt = e[81];
    }
    let mt;
    if (e[82] !== Y) {
        mt = <It1Component tap={Y}/>;
        e[82] = Y;
        e[83] = mt;
    } else {
        mt = e[83];
    }
    const ct = Ee || !he || Ye;
    let ut;
    if (e[84] !== oe) {
        ut = ()=>{
            oe();
        };
        e[84] = oe;
        e[85] = ut;
    } else {
        ut = e[85];
    }
    const St = Ee ? de : ue;
    let M;
    if (e[86] !== Ee || e[87] !== ct || e[88] !== ut || e[89] !== St) {
        M = <Ft disabled={ct} onClick={ut} pending={Ee}>{St}</Ft>;
        e[86] = Ee;
        e[87] = ct;
        e[88] = ut;
        e[89] = St;
        e[90] = M;
    } else {
        M = e[90];
    }
    let Ie;
    if (e[91] !== ee || e[92] !== M) {
        Ie = <Pt>{M}{ee}</Pt>;
        e[91] = ee;
        e[92] = M;
        e[93] = Ie;
    } else {
        Ie = e[93];
    }
    return <Fe onExpand={onExpand} subtitle={subtitle} title={we} titleId={f}>{xe.length === 0 ? null : <_t hasIcons>{xe.map((g)=>{
        const U = Me(g);
        return <Tt key={g.key} isChecked={ne(g)} isDisabled={Ee || !he} reasonLayout="stacked" title={g.title} onChange={(ae)=>setI((me)=>new Map(me).set(g.key, ae))} reason={g.description.trim() || U?.split(`
`, 1)[0]?.trim() || undefined}/>;
    })}</_t>}{nt}{x}{mt}{Ie}<Bl isDisabled={ze} onAdd={Ve} onOpenChange={setQ} open={q} takenKeys={takenKeys}/></Fe>;
}
function ta(s) {
    return cL(s.name);
}
function sa(s) {
    return s.key;
}
function na(s) {
    return s.onBot;
}
function la(s) {
    return s.onBot;
}
function ia(s) {
    return s.title;
}
function AaComponent(s, e) {
    return <Kt1 key={e} name="cube"/>;
}
function oa() {
    return "cube";
}
function ra(s) {
    return s.position != null && s.onBot;
}
function da(s) {
    if (s.onBot) {
        return [
            s.key
        ];
    }
    return [];
}
function ca(s) {
    return s.draft != null && s.draft.body.length === 0;
}
async function Wt(s) {
    try {
        await s();
        return;
    } catch (error) {
        d0(error, {
            tags: {
                sand_area: "team-skills"
            }
        });
        return e(error);
    }
}
function UaComponent(event) {
    if (event.unshared === true) {
        return <T_1 id="HdNInL"/>;
    }
    if (event.superseded === true) {
        return <T_1 id="SMz7df"/>;
    }
    if (ih(event) || event.setup === true) {
        return null;
    }
    return <T_1 id="F3zbZr"/>;
}
function xs(s) {
    return <span className="sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-h8yej3 sand-euugli">{s}</span>;
}
function Tn1Component(s) {
    Tn1Component.d = 552;
    const e = c_1.c(36);
    const { entry, agentId, isReadOnly } = s;
    const { event } = entry;
    const r = bY(agentId);
    const o = Ds(agentId, entry.id);
    const d = b9("grok_bot_multiplayer");
    const a = ba(r, d);
    const [m, setM] = r_1.useState(null);
    const u = ia_1(event, o);
    const p = ib(u, m, a);
    if (p !== null && p !== m?.kind) {
        setM({
            kind: p,
            byOwner: false
        });
    }
    const y = ck();
    const h = event.setup === true && event.unshared !== true && !ih(u);
    const bRef = r_1.useRef(null);
    let E;
    if (e[0] !== h || e[1] !== y) {
        E = ()=>{
            const bRef_current = bRef.current;
            bRef.current = h;
            if (bRef_current === false && h) {
                y();
            }
        };
        e[0] = h;
        e[1] = y;
        e[2] = E;
    } else {
        E = e[2];
    }
    u_2(E);
    const j = Vs(entry.id);
    let N;
    if (e[3] !== p || e[4] !== j || e[5] !== setM) {
        N = (R)=>({
                isExpanded: p === R,
                onExpand: ()=>j(()=>setM({
                            kind: R,
                            byOwner: true
                        })),
                onCollapse: ()=>j(()=>setM(null))
            });
        e[3] = p;
        e[4] = j;
        e[5] = setM;
        e[6] = N;
    } else {
        N = e[6];
    }
    const k = N;
    let _;
    if (e[7] !== agentId || e[8] !== entry || e[9] !== isReadOnly) {
        _ = {
            agentId,
            entry,
            isReadOnly
        };
        e[7] = agentId;
        e[8] = entry;
        e[9] = isReadOnly;
        e[10] = _;
    } else {
        _ = e[10];
    }
    const T = _;
    let D;
    if (e[11] !== k || e[12] !== T) {
        D = (R)=>{
            switch(R.kind){
                case "plugins":
                    return <Is1Component {...T} slot={R} {...k(R.kind)}/>;
                case "secrets":
                    return <Os1Component {...T} slot={R} {...k(R.kind)}/>;
                case "memories":
                    return <Ds1Component {...T} slot={R} {...k(R.kind)}/>;
                case "description":
                    return null;
                case "skills":
                    return <Rs1Component {...T} slot={R} {...k(R.kind)}/>;
                case "automations":
                    return <Ns1Component {...T} slot={R} {...k(R.kind)}/>;
                case "files":
                    return <As1Component {...T} slot={R} {...k(R.kind)}/>;
            }
        };
        e[11] = k;
        e[12] = T;
        e[13] = D;
    } else {
        D = e[13];
    }
    const O = D;
    let $;
    if (e[14] !== event) {
        $ = UaComponent(event);
        e[14] = event;
        e[15] = $;
    } else {
        $ = e[15];
    }
    const P = $;
    let z;
    if (e[16] !== P) {
        z = P === null ? null : <span className="sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli sand-193iq5w"><Fl1 isTruncating>{P}</Fl1></span>;
        e[16] = P;
        e[17] = z;
    } else {
        z = e[17];
    }
    const I = z;
    let A;
    let C;
    let V;
    let H;
    if (e[18] !== event || e[19] !== I || e[20] !== o.plugins || e[21] !== O) {
        A = Symbol.for("react.early_return_sentinel");
        e: {
            const R = ii_1(id(event, o.plugins)).filter(ij);
            if (event.superseded === true || event.sequential === true && event.unshared === true) {
                let q;
                if (e[26] !== I) {
                    q = I === null ? null : xs(I);
                    e[26] = I;
                    e[27] = q;
                } else {
                    q = e[27];
                }
                A = q;
                break e;
            }
            if (I === null && R.length === 0) {
                A = null;
                break e;
            }
            H = xs;
            C = I;
            let Q;
            if (e[28] !== O) {
                Q = (q)=><Ns key={q.kind}>{O(q)}</Ns>;
                e[28] = O;
                e[29] = Q;
            } else {
                Q = e[29];
            }
            V = R.map(Q);
        }
        e[18] = event;
        e[19] = I;
        e[20] = o.plugins;
        e[21] = O;
        e[22] = A;
        e[23] = C;
        e[24] = V;
        e[25] = H;
    } else {
        A = e[22];
        C = e[23];
        V = e[24];
        H = e[25];
    }
    if (A !== Symbol.for("react.early_return_sentinel")) {
        return A;
    }
    let F;
    if (e[30] !== C || e[31] !== V) {
        F = <>{C}{V}</>;
        e[30] = C;
        e[31] = V;
        e[32] = F;
    } else {
        F = e[32];
    }
    let Y;
    if (e[33] !== F || e[34] !== H) {
        Y = H(F);
        e[33] = F;
        e[34] = H;
        e[35] = Y;
    } else {
        Y = e[35];
    }
    return Y;
}
function Sn1Component(s) {
    Sn1Component.d = 551;
    const e = c_1.c(22);
    const { entry, kind, agentId, isReadOnly } = s;
    const r = Ds(agentId, entry.id);
    const o = bY(agentId);
    const [d, setD] = r_1.useState(false);
    const m = ia_1(entry.event, r);
    const f = ib(m, null);
    let u;
    if (e[0] !== entry.id || e[1] !== kind) {
        u = ic(entry.id, kind);
        e[0] = entry.id;
        e[1] = kind;
        e[2] = u;
    } else {
        u = e[2];
    }
    const p = Vs(u);
    const y = hL(id(entry.event, r.plugins), kind);
    if (y === undefined) {
        return null;
    }
    let h;
    if (e[3] !== entry.event) {
        h = ie(entry.event);
        e[3] = entry.event;
        e[4] = h;
    } else {
        h = e[4];
    }
    const isChained = h;
    const step = o?.visibility === "team" && d2(o) ? null : ig(m, kind);
    let j;
    if (e[5] !== isChained || e[6] !== kind) {
        j = isChained ? s_1(kind) : null;
        e[5] = isChained;
        e[6] = kind;
        e[7] = j;
    } else {
        j = e[7];
    }
    let N;
    if (e[8] !== isChained || e[9] !== step || e[10] !== j) {
        N = {
            isChained,
            step,
            subtitle: j
        };
        e[8] = isChained;
        e[9] = step;
        e[10] = j;
        e[11] = N;
    } else {
        N = e[11];
    }
    const k = N;
    let _;
    let onCollapse;
    if (e[12] !== p) {
        _ = ()=>p(()=>setD(true));
        onCollapse = ()=>p(()=>setD(false));
        e[12] = p;
        e[13] = _;
        e[14] = onCollapse;
    } else {
        _ = e[13];
        onCollapse = e[14];
    }
    const D = {
        agentId,
        entry,
        isReadOnly: isReadOnly || entry.event.superseded === true || entry.event.unshared === true,
        isExpanded: f === kind || d,
        onExpand: _,
        onCollapse
    };
    const O = r_2;
    const $ = Ns;
    const isFlush = true;
    const z = FaComponent(y, D);
    let I;
    if (e[15] !== $ || e[16] !== z) {
        I = <$ isFlush={isFlush}>{z}</$>;
        e[15] = $;
        e[16] = z;
        e[17] = I;
    } else {
        I = e[17];
    }
    let A;
    if (e[18] !== O || e[19] !== k || e[20] !== I) {
        A = <O value={k}>{I}</O>;
        e[18] = O;
        e[19] = k;
        e[20] = I;
        e[21] = A;
    } else {
        A = e[21];
    }
    return A;
}
function FaComponent(s, e) {
    switch(s.kind){
        case "plugins":
            return <Is1Component {...e} slot={s}/>;
        case "secrets":
            return <Os1Component {...e} slot={s}/>;
        case "skills":
            return <Rs1Component {...e} slot={s}/>;
        case "memories":
            return <Ds1Component {...e} slot={s}/>;
        case "automations":
            return <Ns1Component {...e} slot={s}/>;
        case "files":
            return <As1Component {...e} slot={s}/>;
        case "description":
            return null;
    }
}
function Ds1Component(s) {
    Ds1Component.d = 547;
    if (b9("grok_bot_multiplayer")) {
        return <QsComponent {...s}/>;
    }
    return <Nn1Component {...s}/>;
}
function Nn1Component(s) {
    Nn1Component.d = 549;
    const e = c_1.c(53);
    const { entry, slot, agentId, isReadOnly, isExpanded, onExpand, onCollapse } = s;
    const { _: __1 } = u_1();
    const { respondToWidget } = bt();
    const { localAnswers } = b7();
    let u;
    if (e[0] !== entry.id) {
        u = hz(entry.id, "memories");
        e[0] = entry.id;
        e[1] = u;
    } else {
        u = e[1];
    }
    let p;
    if (e[2] !== agentId || e[3] !== u) {
        p = {
            agentId,
            entryId: u
        };
        e[2] = agentId;
        e[3] = u;
        e[4] = p;
    } else {
        p = e[4];
    }
    const y = c1("widget", p);
    const h = r_1.useId();
    const [b, setB] = r_1.useState(null);
    let j;
    if (e[5] !== b || e[6] !== slot.borderline) {
        j = b ?? new Set(slot.borderline ?? []);
        e[5] = b;
        e[6] = slot.borderline;
        e[7] = j;
    } else {
        j = e[7];
    }
    const kept = j;
    const k = hW(slot.status, y);
    if (k === "done") {
        return null;
    }
    const _ = slot.toTeam?.length ?? 0;
    const toShare = _ - kept.size;
    let D;
    if (e[8] !== __1) {
        D = __1({
            id: "QCEzof"
        });
        e[8] = __1;
        e[9] = D;
    } else {
        D = e[9];
    }
    const O = D;
    if (k === "sorting") {
        let A;
        if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
            A = <T_1 id="zMVr84"/>;
            e[10] = A;
        } else {
            A = e[10];
        }
        let C;
        if (e[11] !== O || e[12] !== h) {
            C = <Bt1 title={O} titleId={h}>{A}</Bt1>;
            e[11] = O;
            e[12] = h;
            e[13] = C;
        } else {
            C = e[13];
        }
        return C;
    }
    if (k !== "proposed") {
        let sharedCount;
        let C;
        if (e[14] !== __1 || e[15] !== y || e[16] !== _ || e[17] !== slot) {
            sharedCount = ik(slot, y);
            C = __1({
                id: "PnJbPC",
                values: {
                    sharedCount,
                    shown: _
                }
            });
            e[14] = __1;
            e[15] = y;
            e[16] = _;
            e[17] = slot;
            e[18] = sharedCount;
            e[19] = C;
        } else {
            sharedCount = e[18];
            C = e[19];
        }
        let V = C;
        if (k === "kept") {
            let F;
            if (e[20] !== __1) {
                F = __1({
                    id: "NVBO0n"
                });
                e[20] = __1;
                e[21] = F;
            } else {
                F = e[21];
            }
            V = F;
        } else if (sharedCount === _) {
            let F;
            if (e[22] !== __1) {
                F = __1({
                    id: "2sDEW4"
                });
                e[22] = __1;
                e[23] = F;
            } else {
                F = e[23];
            }
            V = F;
        }
        let H;
        if (e[24] !== V || e[25] !== O || e[26] !== h) {
            H = <Fe isExpanded={false} summary={V} title={O} titleId={h}/>;
            e[24] = V;
            e[25] = O;
            e[26] = h;
            e[27] = H;
        } else {
            H = e[27];
        }
        return H;
    }
    if (!isExpanded) {
        let A;
        if (e[28] !== toShare) {
            A = <T_1 id="luKNcn" values={{
                toShare
            }}/>;
            e[28] = toShare;
            e[29] = A;
        } else {
            A = e[29];
        }
        let C;
        if (e[30] !== onExpand || e[31] !== A || e[32] !== O || e[33] !== h) {
            C = <Fe isExpanded={false} isSummaryPending onExpand={onExpand} summary={A} title={O} titleId={h}/>;
            e[30] = onExpand;
            e[31] = A;
            e[32] = O;
            e[33] = h;
            e[34] = C;
        } else {
            C = e[34];
        }
        return C;
    }
    let $;
    if (e[35] !== agentId || e[36] !== entry.id || e[37] !== isReadOnly || e[38] !== localAnswers || e[39] !== onCollapse || e[40] !== onExpand || e[41] !== respondToWidget) {
        $ = (A)=>{
            if (isReadOnly || agentId == null) {
                return;
            }
            const C = {
                agentId,
                entryId: entry.id
            };
            if (localAnswers.get("widget", C) != null) {
                return;
            }
            localAnswers.record("widget", C, {
                kind: "answered",
                value: A
            });
            onCollapse();
            const V = ()=>{
                localAnswers.clear("widget", C);
                onExpand();
            };
            respondToWidget({
                ...C,
                value: A
            }).then((H)=>{
                if (H?.accepted === false) {
                    V();
                }
            }, V);
        };
        e[35] = agentId;
        e[36] = entry.id;
        e[37] = isReadOnly;
        e[38] = localAnswers;
        e[39] = onCollapse;
        e[40] = onExpand;
        e[41] = respondToWidget;
        e[42] = $;
    } else {
        $ = e[42];
    }
    const onTap = $;
    let z;
    if (e[43] !== isReadOnly || e[44] !== kept || e[45] !== slot || e[46] !== onTap) {
        z = <Ln1Component isReadOnly={isReadOnly} kept={kept} onKeptChange={setB} onTap={onTap} slot={slot}/>;
        e[43] = isReadOnly;
        e[44] = kept;
        e[45] = slot;
        e[46] = onTap;
        e[47] = z;
    } else {
        z = e[47];
    }
    let I;
    if (e[48] !== onExpand || e[49] !== z || e[50] !== O || e[51] !== h) {
        I = <Fe onExpand={onExpand} title={O} titleId={h}>{z}</Fe>;
        e[48] = onExpand;
        e[49] = z;
        e[50] = O;
        e[51] = h;
        e[52] = I;
    } else {
        I = e[52];
    }
    return I;
}
function Ln1Component(s) {
    Ln1Component.d = 548;
    const e = c_1.c(63);
    const { slot, kept, isReadOnly, onKeptChange, onTap } = s;
    const { _: __1 } = u_1();
    let d;
    let justYou;
    let more;
    let f;
    let u;
    let p;
    let y;
    let children;
    let b;
    let E;
    if (e[0] !== __1 || e[1] !== isReadOnly || e[2] !== kept || e[3] !== onKeptChange || e[4] !== slot) {
        const C = slot.toTeam ?? [];
        const V = il(slot);
        f = C.length;
        justYou = slot.justYou ?? 0;
        more = slot.more ?? 0;
        b = [
            ...C.keys()
        ].filter((B)=>!kept.has(B));
        E = b.length;
        let H;
        if (e[15] !== slot.titles || e[16] !== C) {
            H = (B)=>slot.titles?.[B] ?? C[B] ?? "";
            e[15] = slot.titles;
            e[16] = C;
            e[17] = H;
        } else {
            H = e[17];
        }
        const F = H;
        let Y;
        if (e[18] !== kept || e[19] !== onKeptChange) {
            Y = (B, L)=>{
                const ce = new Set(kept);
                for (const Re of B){
                    if (L) {
                        ce.delete(Re);
                    } else {
                        ce.add(Re);
                    }
                }
                onKeptChange(ce);
            };
            e[18] = kept;
            e[19] = onKeptChange;
            e[20] = Y;
        } else {
            Y = e[20];
        }
        const R = Y;
        let Q;
        if (e[21] !== isReadOnly || e[22] !== kept || e[23] !== R || e[24] !== F || e[25] !== C) {
            Q = (B)=><On1Component key={B} fact={C[B] ?? ""} isDisabled={isReadOnly} isTeam={!kept.has(B)} onChange={(L)=>R([
                        B
                    ], L)} title={F(B)}/>;
            e[21] = isReadOnly;
            e[22] = kept;
            e[23] = R;
            e[24] = F;
            e[25] = C;
            e[26] = Q;
        } else {
            Q = e[26];
        }
        const q = Q;
        d = _t;
        if (e[27] !== __1) {
            u = __1({
                id: "CpY2ch"
            });
            e[27] = __1;
            e[28] = u;
        } else {
            u = e[28];
        }
        p = V.length > 0 ? V.length : undefined;
        if (e[29] !== __1) {
            y = __1({
                id: "QCEzof"
            });
            e[29] = __1;
            e[30] = y;
        } else {
            y = e[30];
        }
        children = V.length > 0 ? V.map((B)=><An1Component key={B.name} isDisabled={isReadOnly} name={B.name} onChange={(L)=>R(B.positions, L)} teamCount={B.positions.filter((L)=>!kept.has(L)).length} titles={B.positions.map(F)}>{B.positions.map(q)}</An1Component>) : C.map((B, L)=>q(L));
        e[0] = __1;
        e[1] = isReadOnly;
        e[2] = kept;
        e[3] = onKeptChange;
        e[4] = slot;
        e[5] = d;
        e[6] = justYou;
        e[7] = more;
        e[8] = f;
        e[9] = u;
        e[10] = p;
        e[11] = y;
        e[12] = children;
        e[13] = b;
        e[14] = E;
    } else {
        d = e[5];
        justYou = e[6];
        more = e[7];
        f = e[8];
        u = e[9];
        p = e[10];
        y = e[11];
        children = e[12];
        b = e[13];
        E = e[14];
    }
    let j;
    if (e[31] !== d || e[32] !== u || e[33] !== p || e[34] !== y || e[35] !== children) {
        j = j_1.jsx(d, {
            emptyLabel: u,
            shown: p,
            title: y,
            children
        });
        e[31] = d;
        e[32] = u;
        e[33] = p;
        e[34] = y;
        e[35] = children;
        e[36] = j;
    } else {
        j = e[36];
    }
    let N;
    if (e[37] !== more) {
        N = more > 0 ? <Ze><T_1 id="6gDCUp" values={{
            more
        }}/></Ze> : null;
        e[37] = more;
        e[38] = N;
    } else {
        N = e[38];
    }
    let k;
    if (e[39] !== justYou) {
        k = justYou > 0 ? <Ze><T_1 id="gE4H60" values={{
            justYou
        }}/></Ze> : null;
        e[39] = justYou;
        e[40] = k;
    } else {
        k = e[40];
    }
    const _ = isReadOnly || E === 0;
    let T;
    if (e[41] !== onTap || e[42] !== f || e[43] !== b) {
        T = ()=>onTap(im(b, f));
        e[41] = onTap;
        e[42] = f;
        e[43] = b;
        e[44] = T;
    } else {
        T = e[44];
    }
    let D;
    if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
        D = <T_1 id="mjWpLC"/>;
        e[45] = D;
    } else {
        D = e[45];
    }
    let O;
    if (e[46] !== _ || e[47] !== T) {
        O = <Rt1 disabled={_} onClick={T} variant="primary">{D}</Rt1>;
        e[46] = _;
        e[47] = T;
        e[48] = O;
    } else {
        O = e[48];
    }
    let $;
    if (e[49] !== onTap) {
        $ = ()=>onTap(hY);
        e[49] = onTap;
        e[50] = $;
    } else {
        $ = e[50];
    }
    let P;
    if (e[51] === Symbol.for("react.memo_cache_sentinel")) {
        P = <T_1 id="GZF9eZ"/>;
        e[51] = P;
    } else {
        P = e[51];
    }
    let z;
    if (e[52] !== isReadOnly || e[53] !== $) {
        z = <Rt1 disabled={isReadOnly} onClick={$} variant="secondary">{P}</Rt1>;
        e[52] = isReadOnly;
        e[53] = $;
        e[54] = z;
    } else {
        z = e[54];
    }
    let I;
    if (e[55] !== O || e[56] !== z) {
        I = <Pt>{O}{z}</Pt>;
        e[55] = O;
        e[56] = z;
        e[57] = I;
    } else {
        I = e[57];
    }
    let A;
    if (e[58] !== I || e[59] !== j || e[60] !== N || e[61] !== k) {
        A = <>{j}{N}{k}{I}</>;
        e[58] = I;
        e[59] = j;
        e[60] = N;
        e[61] = k;
        e[62] = A;
    } else {
        A = e[62];
    }
    return A;
}
function An1Component(s) {
    An1Component.d = 553;
    const e = c_1.c(19);
    const { name, titles, teamCount, isDisabled, onChange, children } = s;
    const { _ } = u_1();
    let a;
    if (e[0] !== _ || e[1] !== name) {
        a = name.length > 0 ? name : _({
            id: "/IX/7x"
        });
        e[0] = _;
        e[1] = name;
        e[2] = a;
    } else {
        a = e[2];
    }
    const m = a;
    const titles_length = titles.length;
    let u;
    if (e[3] !== titles) {
        u = new Intl.ListFormat(eY(), {
            style: "short",
            type: "unit"
        }).format(titles);
        e[3] = titles;
        e[4] = u;
    } else {
        u = e[4];
    }
    const list = u;
    let y;
    if (e[5] !== children) {
        y = <Wl1>{children}</Wl1>;
        e[5] = children;
        e[6] = y;
    } else {
        y = e[6];
    }
    const isChecked = teamCount > 0;
    let b;
    if (e[7] !== list || e[8] !== teamCount || e[9] !== titles.length || e[10] !== titles_length) {
        b = teamCount > 0 && teamCount < titles_length ? <T_1 id="zOpLQ+" values={{
            teamCount,
            total: titles_length,
            list
        }}/> : <T_1 id="xkIao/" values={{
            0: titles.length,
            list
        }}/>;
        e[7] = list;
        e[8] = teamCount;
        e[9] = titles.length;
        e[10] = titles_length;
        e[11] = b;
    } else {
        b = e[11];
    }
    let E;
    if (e[12] !== isDisabled || e[13] !== m || e[14] !== onChange || e[15] !== y || e[16] !== isChecked || e[17] !== b) {
        E = <Tt detail={y} isChecked={isChecked} isDisabled={isDisabled} title={m} onChange={onChange} reason={b}/>;
        e[12] = isDisabled;
        e[13] = m;
        e[14] = onChange;
        e[15] = y;
        e[16] = isChecked;
        e[17] = b;
        e[18] = E;
    } else {
        E = e[18];
    }
    return E;
}
function On1Component(s) {
    On1Component.d = 550;
    const e = c_1.c(13);
    const { fact, title, isTeam, isDisabled, onChange } = s;
    let o;
    if (e[0] !== fact) {
        let u;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            u = /\s+/g;
            e[2] = u;
        } else {
            u = e[2];
        }
        o = fact.replace(u, " ");
        e[0] = fact;
        e[1] = o;
    } else {
        o = e[1];
    }
    const d = o === title;
    let a;
    if (e[3] !== fact || e[4] !== d) {
        a = d ? undefined : <Cl>{fact}</Cl>;
        e[3] = fact;
        e[4] = d;
        e[5] = a;
    } else {
        a = e[5];
    }
    const m = d ? undefined : fact;
    let f;
    if (e[6] !== isDisabled || e[7] !== isTeam || e[8] !== onChange || e[9] !== a || e[10] !== m || e[11] !== title) {
        f = <Tt detail={a} isChecked={isTeam} isDisabled={isDisabled} onChange={onChange} reason={m} title={title}/>;
        e[6] = isDisabled;
        e[7] = isTeam;
        e[8] = onChange;
        e[9] = a;
        e[10] = m;
        e[11] = title;
        e[12] = f;
    } else {
        f = e[12];
    }
    return f;
}
function MaComponent(s) {
    MaComponent.d = 299;
    const e = c_1.c(14);
    const { entry } = s;
    const agentId = an();
    const { isReadOnly } = ah();
    let c;
    if (e[0] !== entry.id) {
        c = io(entry.id);
        e[0] = entry.id;
        e[1] = c;
    } else {
        c = e[1];
    }
    const r = c;
    if (r !== null) {
        let entry_1;
        if (e[2] !== r.chipEntryId || e[3] !== entry) {
            entry_1 = {
                ...entry,
                id: r.chipEntryId
            };
            e[2] = r.chipEntryId;
            e[3] = entry;
            e[4] = entry_1;
        } else {
            entry_1 = e[4];
        }
        let a;
        if (e[5] !== agentId || e[6] !== r.kind || e[7] !== isReadOnly || e[8] !== entry_1) {
            a = <Sn1Component agentId={agentId} entry={entry_1} isReadOnly={isReadOnly} kind={r.kind}/>;
            e[5] = agentId;
            e[6] = r.kind;
            e[7] = isReadOnly;
            e[8] = entry_1;
            e[9] = a;
        } else {
            a = e[9];
        }
        return a;
    }
    let o;
    if (e[10] !== agentId || e[11] !== entry || e[12] !== isReadOnly) {
        o = <Tn1Component agentId={agentId} entry={entry} isReadOnly={isReadOnly}/>;
        e[10] = agentId;
        e[11] = entry;
        e[12] = isReadOnly;
        e[13] = o;
    } else {
        o = e[13];
    }
    return o;
}
export { MaComponent as default };
