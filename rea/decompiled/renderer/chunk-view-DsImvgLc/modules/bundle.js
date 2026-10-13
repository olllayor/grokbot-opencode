import { c as c_1, u, r as r_1, p as p_1, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { a_ as Fs1, u as u_2, x, i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { aZ as Ss1, a$, a_, eL, aY as Ks, aX as Vs1, aV, aR, eM as maxLength, d0, dB, bv, eN, bP, eO } from "./index.eager-app-Cj5f8Gby.js";
import { p as Qe, bs as Ms, I, t as He1, bt, g as Ns1, bu } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "7d2a5790-fc84-43ea-8a8f-7a00f1a07d46";
            e._sentryDebugIdIdentifier = "sentry-dbid-7d2a5790-fc84-43ea-8a8f-7a00f1a07d46";
        }
    } catch (e) {}
})();
const ts = 96;
function As(o, e = ts) {
    const s = Math.max(1, Math.min(e, ts));
    const t = o.trim();
    const d = t.split(/[?\uFF1F]/u)[0]?.replace(/[.!\u3002\uFF01]+$/u, "").trim() ?? "";
    return zs(d.length > 0 ? d : t, s);
}
function zs(o, e) {
    const s = o.trim();
    if (e <= 1) {
        return "…";
    }
    if (s.length <= e) {
        return s;
    }
    const t = s.slice(0, e);
    const d = Math.max(t.lastIndexOf(" "), t.lastIndexOf(`
`), t.lastIndexOf("	"));
    const a = d >= Math.floor(e * 0.55) ? d : e;
    return `${t.slice(0, a).trimEnd()}\u2026`;
}
const maxHeight = 210;
const Rs = 4;
const Es = "--voice-call-pill-inset";
const Is = {
    iconSize: "sm",
    shape: "circle",
    size: "xs"
};
function Os(o, duration) {
    if (duration === null) {
        return o;
    }
    return `${o} · ${duration}`;
}
const O = {
    head: {
        kVAEAm: "sand-1n2onr6",
        kzqmXN: "sand-h8yej3",
        ks0D6T: "sand-193iq5w",
        k7Eaqz: "sand-euugli",
        kB7OPa: "sand-9f619",
        $$css: true
    },
    headOpen: {
        kZCmMZ: "sand-ciflc3",
        kwRFfy: "sand-194u5oj",
        $$css: true
    },
    headControl: {
        kVAEAm: "sand-10l6tqk",
        k87sOh: "sand-wa60dl",
        k3aq6I: "sand-1cb1t30",
        kKVMdj: "sand-i8jd85 sand-1aquc0h",
        k44tkh: "sand-1g18oiy",
        kKxzle: "sand-1yq23n6",
        kyAemX: "sand-14tmpi7",
        kWV6AL: "sand-skzprw",
        $$css: true
    },
    close: {
        kt4wiu: "sand-o2ifbc",
        $$css: true
    },
    summaryChip: {
        ks0D6T: "sand-193iq5w",
        k7Eaqz: "sand-euugli",
        kWkggS: "sand-jbqb8w",
        $$css: true
    },
    summary: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        khDVqt: "sand-uxw1ft",
        kg5iWk: "sand-lyipyv",
        kHjlTd: "sand-1h4wwuj",
        $$css: true
    },
    duration: {
        kmuXW: "sand-2lah0s",
        kcqcaj: "sand-ss6m8b",
        khDVqt: "sand-1sdyfia",
        $$css: true
    },
    fullSummary: {
        keoZOQ: "sand-14vqqas",
        k1K539: "sand-jpr12u",
        kzqmXN: "sand-h8yej3",
        kB7OPa: "sand-9f619",
        kwRFfy: "sand-v54qhq",
        kZCmMZ: "sand-f7dkkf",
        kLWn49: "sand-a7kkou",
        kMwMTN: "sand-yktyii",
        kN2L0X: "sand-1fzhlzt",
        kHjlTd: "sand-j0a0fe",
        k9WMMc: "sand-1yc453h",
        $$css: true
    },
    transcript: {
        kzqmXN: "sand-h8yej3",
        ks0D6T: "sand-193iq5w",
        $$css: true
    },
    transcriptBody: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kGNEyG: "sand-1cy8zhl",
        kzqmXN: "sand-h8yej3",
        k7Eaqz: "sand-euugli",
        ks0D6T: "sand-193iq5w",
        kOIVth: "sand-883omv",
        $$css: true
    },
    relayAt: {
        kmuXW: "sand-2lah0s",
        k7Eaqz: "sand-1aasl1c",
        k9WMMc: "sand-p4054r",
        kMwMTN: "sand-1e4uaio",
        kcqcaj: "sand-ss6m8b",
        $$css: true
    },
    relayGlyph: {
        keoZOQ: "sand-7r5mf7",
        $$css: true
    },
    relayAnswer: {
        kMwMTN: "sand-19aaqeu",
        $$css: true
    },
    relayCut: {
        kMwMTN: "sand-1e4uaio",
        $$css: true
    }
};
function Ts({ turns, nudges, showsNudges }) {
    const t = turns.map((turn)=>({
            kind: "turn",
            atMs: turn.atMs,
            turn
        }));
    const d = showsNudges ? nudges.map((nudge)=>({
            kind: "relay",
            atMs: nudge.atMs,
            nudge
        })) : [];
    return [
        ...t,
        ...d
    ].sort((a, u)=>a.atMs - u.atMs);
}
function Ds1Component(o) {
    Ds1Component.d = 1355;
    const e = c_1.c(24);
    const { conversationId, requestId, isAnysphereUser, showsNudges, onChangeShowsNudges } = o;
    const { _, i18n } = u();
    const [, i] = aV();
    const w = conversationId !== null || requestId !== null;
    if (!w && !isAnysphereUser) {
        return null;
    }
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-195vfkc sand-10l6tqk sand-wa60dl sand-1cb1t30 sand-i8jd85 sand-1aquc0h sand-1g18oiy sand-1yq23n6 sand-14tmpi7 sand-skzprw sand-i5uv41"
        };
        e[0] = l;
    } else {
        l = e[0];
    }
    let h;
    if (e[1] !== _) {
        h = _({
            id: "JcD7qf"
        });
        e[1] = _;
        e[2] = h;
    } else {
        h = e[2];
    }
    let S;
    if (e[3] !== h) {
        S = <He1.Trigger><Qe aria-label={h} data-voice-call-menu icon="dots-3-horizontal" {...Is}/></He1.Trigger>;
        e[3] = h;
        e[4] = S;
    } else {
        S = e[4];
    }
    let y;
    if (e[5] !== _) {
        y = _({
            id: "3Siwmw"
        });
        e[5] = _;
        e[6] = y;
    } else {
        y = e[6];
    }
    let b;
    if (e[7] !== conversationId || e[8] !== i || e[9] !== w || e[10] !== i18n || e[11] !== requestId) {
        b = w ? <He1.Section>{conversationId === null ? null : <He1.Item onSelect={()=>i(conversationId)}><T id="la8mWk"/></He1.Item>}{requestId === null ? null : <He1.Item onSelect={()=>i(requestId)}>{i18n._(aR)}</He1.Item>}</He1.Section> : null;
        e[7] = conversationId;
        e[8] = i;
        e[9] = w;
        e[10] = i18n;
        e[11] = requestId;
        e[12] = b;
    } else {
        b = e[12];
    }
    let x;
    if (e[13] !== isAnysphereUser || e[14] !== onChangeShowsNudges || e[15] !== showsNudges) {
        x = isAnysphereUser ? <He1.Section><He1.CheckboxItem checked={showsNudges} onChange={onChangeShowsNudges}><T id="Osn70z"/></He1.CheckboxItem></He1.Section> : null;
        e[13] = isAnysphereUser;
        e[14] = onChangeShowsNudges;
        e[15] = showsNudges;
        e[16] = x;
    } else {
        x = e[16];
    }
    let q;
    if (e[17] !== y || e[18] !== b || e[19] !== x) {
        q = <He1.Content aria-label={y} minWidth={200} size="md">{b}{x}</He1.Content>;
        e[17] = y;
        e[18] = b;
        e[19] = x;
        e[20] = q;
    } else {
        q = e[20];
    }
    let v;
    if (e[21] !== S || e[22] !== q) {
        v = <div data-voice-call-tools="" {...l}><He1 placement="bottom-start">{S}{q}</He1></div>;
        e[21] = S;
        e[22] = q;
        e[23] = v;
    } else {
        v = e[23];
    }
    return v;
}
function UeComponent(o) {
    UeComponent.d = 1356;
    const e = c_1.c(13);
    const { at, tone, isMeta, children } = o;
    const u = isMeta === undefined ? false : isMeta;
    let r;
    let c;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-78zum5 sand-1pha0wt sand-17d4w8g sand-euugli"
        };
        c = p_1(a_.label, O.relayAt);
        e[0] = r;
        e[1] = c;
    } else {
        r = e[0];
        c = e[1];
    }
    let i;
    if (e[2] !== at) {
        i = <span {...c}>{at}</span>;
        e[2] = at;
        e[3] = i;
    } else {
        i = e[3];
    }
    let w;
    if (e[4] !== u || e[5] !== tone) {
        w = p_1(u ? a_.label : a_.body2, tone);
        e[4] = u;
        e[5] = tone;
        e[6] = w;
    } else {
        w = e[6];
    }
    let l;
    if (e[7] !== children || e[8] !== w) {
        l = <span {...w}>{children}</span>;
        e[7] = children;
        e[8] = w;
        e[9] = l;
    } else {
        l = e[9];
    }
    let h;
    if (e[10] !== i || e[11] !== l) {
        h = <div {...r}>{i}{l}</div>;
        e[10] = i;
        e[11] = l;
        e[12] = h;
    } else {
        h = e[12];
    }
    return h;
}
function Is1Component(o) {
    Is1Component.d = 1354;
    const e = c_1.c(36);
    const { nudge, startedAtMs } = o;
    const d = eL.directionOf(nudge) === "to-voice";
    const a = d ? nudge.answer ?? nudge.request : nudge.request;
    const u = d ? null : nudge.answer;
    let r;
    if (e[0] !== startedAtMs) {
        r = (P)=>eL.formatDuration(P - startedAtMs);
        e[0] = startedAtMs;
        e[1] = r;
    } else {
        r = e[1];
    }
    const c = r;
    const i = nudge.cut ?? null;
    let w;
    if (e[2] !== i) {
        w = i === null ? "" : (i.heardMs / 1000).toFixed(1);
        e[2] = i;
        e[3] = w;
    } else {
        w = e[3];
    }
    const heard = w;
    let h;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-kh2ocl sand-78zum5 sand-1cy8zhl sand-17d4w8g sand-euugli sand-4b2ntj"
        };
        e[4] = h;
    } else {
        h = e[4];
    }
    let S;
    if (e[5] !== nudge) {
        S = eL.directionOf(nudge);
        e[5] = nudge;
        e[6] = S;
    } else {
        S = e[6];
    }
    let y;
    if (e[7] !== i || e[8] !== heard) {
        y = i === null ? {} : {
            "data-nudge-cut": heard
        };
        e[7] = i;
        e[8] = heard;
        e[9] = y;
    } else {
        y = e[9];
    }
    const b = d ? "arrow-left-down" : "arrow-right-up";
    let x;
    if (e[10] !== b) {
        x = <I aria-hidden name={b} size="xs" style={O.relayGlyph}/>;
        e[10] = b;
        e[11] = x;
    } else {
        x = e[11];
    }
    let q;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        q = {
            className: "sand-78zum5 sand-dt5ytf sand-12mrbbr sand-euugli"
        };
        e[12] = q;
    } else {
        q = e[12];
    }
    let at;
    if (e[13] !== c || e[14] !== nudge.atMs) {
        at = c(nudge.atMs);
        e[13] = c;
        e[14] = nudge.atMs;
        e[15] = at;
    } else {
        at = e[15];
    }
    let g;
    if (e[16] !== a || e[17] !== at) {
        g = <UeComponent at={at}>{a}</UeComponent>;
        e[16] = a;
        e[17] = at;
        e[18] = g;
    } else {
        g = e[18];
    }
    let f;
    if (e[19] !== c || e[20] !== nudge.answeredAtMs || e[21] !== u) {
        f = u === null ? null : <UeComponent at={nudge.answeredAtMs == null ? null : c(nudge.answeredAtMs)} tone={O.relayAnswer}>{u}</UeComponent>;
        e[19] = c;
        e[20] = nudge.answeredAtMs;
        e[21] = u;
        e[22] = f;
    } else {
        f = e[22];
    }
    let p;
    if (e[23] !== i || e[24] !== heard || e[25] !== c) {
        p = i === null ? null : <UeComponent at={c(i.atMs)} isMeta tone={O.relayCut}><T id="SGu12N" values={{
            heard
        }}/></UeComponent>;
        e[23] = i;
        e[24] = heard;
        e[25] = c;
        e[26] = p;
    } else {
        p = e[26];
    }
    let k;
    if (e[27] !== g || e[28] !== f || e[29] !== p) {
        k = <div {...q}>{g}{f}{p}</div>;
        e[27] = g;
        e[28] = f;
        e[29] = p;
        e[30] = k;
    } else {
        k = e[30];
    }
    let N;
    if (e[31] !== k || e[32] !== S || e[33] !== y || e[34] !== x) {
        N = <div {...h} data-nudge={S} data-relayed-request {...y}>{x}{k}</div>;
        e[31] = k;
        e[32] = S;
        e[33] = y;
        e[34] = x;
        e[35] = N;
    } else {
        N = e[35];
    }
    return N;
}
function Cs1Component(o) {
    Cs1Component.d = 1357;
    const e = c_1.c(104);
    const { title, duration, description, turns, nudges, startedAtMs, conversationId, requestId, isAnysphereUser, expanded, thumbs, tray, commentOpen, onToggle } = o;
    const turns_1 = turns === undefined ? [] : turns;
    const nudges_1 = nudges === undefined ? [] : nudges;
    const startedAtMs_1 = startedAtMs === undefined ? 0 : startedAtMs;
    const g = conversationId === undefined ? null : conversationId;
    const f = requestId === undefined ? null : requestId;
    const isAnysphereUser_1 = isAnysphereUser === undefined ? false : isAnysphereUser;
    const k = thumbs === undefined ? null : thumbs;
    const N = tray === undefined ? null : tray;
    const P = commentOpen === undefined ? false : commentOpen;
    const { _: __1 } = u();
    const [C, setC] = r_1.useState(false);
    const [A, setA] = r_1.useState(false);
    const M = expanded || P;
    const [E, setE] = r_1.useState(false);
    const IRef = r_1.useRef(null);
    const QRef = r_1.useRef(null);
    const seRef = r_1.useRef(null);
    let B;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        B = (j)=>{
            if (j == null) {
                return;
            }
            const me = ()=>setE(j.scrollWidth > j.clientWidth + 1);
            me();
            if (typeof ResizeObserver === "undefined") {
                return;
            }
            const ke = new ResizeObserver(me);
            ke.observe(j);
            return ()=>ke.disconnect();
        };
        e[0] = B;
    } else {
        B = e[0];
    }
    const ref = B;
    let ie;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        ie = (j)=>{
            const seRef_current = seRef.current;
            if (j == null || seRef_current == null) {
                return;
            }
            const ke = ()=>{
                const He = Math.max(0, (j.offsetWidth - seRef_current.offsetWidth) / 2 - Rs);
                j.style.setProperty(Es, `${He}px`);
            };
            ke();
            if (typeof ResizeObserver === "undefined") {
                return;
            }
            const De = new ResizeObserver(ke);
            De.observe(seRef_current);
            De.observe(j);
            return ()=>De.disconnect();
        };
        e[1] = ie;
    } else {
        ie = e[1];
    }
    const ref_1 = ie;
    let ce;
    if (e[2] !== description) {
        ce = ()=>description === undefined || description.length === 0;
        e[2] = description;
        e[3] = ce;
    } else {
        ce = e[3];
    }
    const [Y] = r_1.useState(ce);
    const R = description !== undefined && description.length > 0;
    const _ = R && description !== undefined ? description : title;
    let ne;
    if (e[4] !== _) {
        ne = As(_);
        e[4] = _;
        e[5] = ne;
    } else {
        ne = e[5];
    }
    const te = ne;
    let W;
    if (e[6] !== _) {
        let j;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            j = /[.!\u3002\uFF01]+$/u;
            e[8] = j;
        } else {
            j = e[8];
        }
        W = _.trim().replace(j, "");
        e[6] = _;
        e[7] = W;
    } else {
        W = e[7];
    }
    const re = te !== W;
    let X;
    if (e[9] !== duration || e[10] !== _) {
        X = Os(_, duration);
        e[9] = duration;
        e[10] = _;
        e[11] = X;
    } else {
        X = e[11];
    }
    const oe = X;
    const ae = Ts({
        turns: turns_1,
        nudges: nudges_1,
        showsNudges: C
    });
    const G = ae.length > 0;
    const ve = "";
    const ue = "message";
    const be = "bubble";
    const J = expanded ? "" : undefined;
    let V;
    if (e[12] !== M) {
        V = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-h8yej3 sand-193iq5w sand-euugli sand-1n2onr6 sand-1717udv sand-ng3xce sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-m6vylc sand-7ayfe5 sand-4wkmsb sand-1vgdfw2 sand-1e6nqfh"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-h8yej3 sand-193iq5w sand-euugli sand-1n2onr6 sand-1717udv sand-ng3xce sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-7ayfe5 sand-4wkmsb sand-1vgdfw2 sand-1e6nqfh sand-1vald79 sand-sag5q8"
            }
        })[!!M << 0];
        e[12] = M;
        e[13] = V;
    } else {
        V = e[13];
    }
    let K;
    if (e[14] !== M || e[15] !== A) {
        K = ({
            0: {
                className: "sand-47corl sand-10l6tqk sand-13vifvy sand-1ey2m1c sand-13fihh6 sand-4pepcl sand-s6r99b sand-g01cxk sand-1vhny7y sand-4wkmsb sand-pwgtru sand-1e6nqfh"
            },
            2: {
                className: "sand-47corl sand-10l6tqk sand-13vifvy sand-1ey2m1c sand-13fihh6 sand-4pepcl sand-s6r99b sand-1vhny7y sand-4wkmsb sand-pwgtru sand-1e6nqfh sand-1hc1fzr"
            },
            1: {
                className: "sand-47corl sand-10l6tqk sand-1ey2m1c sand-4pepcl sand-s6r99b sand-1vhny7y sand-4wkmsb sand-pwgtru sand-1e6nqfh sand-tu2xtp sand-17y0mx6 sand-1hc1fzr"
            },
            3: {
                className: "sand-47corl sand-10l6tqk sand-1ey2m1c sand-4pepcl sand-s6r99b sand-1vhny7y sand-4wkmsb sand-pwgtru sand-1e6nqfh sand-tu2xtp sand-17y0mx6 sand-1hc1fzr"
            }
        })[!!A << 1 | !!M << 0];
        e[14] = M;
        e[15] = A;
        e[16] = K;
    } else {
        K = e[16];
    }
    let F;
    if (e[17] !== K) {
        F = <div aria-hidden data-voice-call-fill="" {...K}/>;
        e[17] = K;
        e[18] = F;
    } else {
        F = e[18];
    }
    const ee = expanded && O.headOpen;
    let style;
    if (e[19] !== ee) {
        style = [
            O.head,
            ee
        ];
        e[19] = ee;
        e[20] = style;
    } else {
        style = e[20];
    }
    let H;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        H = {
            className: "sand-78zum5 sand-1q0g3np sand-6s0dn4 sand-l56j7k sand-193iq5w sand-euugli sand-195vfkc"
        };
        e[21] = H;
    } else {
        H = e[21];
    }
    let leading;
    if (e[22] === Symbol.for("react.memo_cache_sentinel")) {
        leading = <I name="waveform" size="sm"/>;
        e[22] = leading;
    } else {
        leading = e[22];
    }
    let onBlur;
    if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
        onBlur = ()=>setA(false);
        e[23] = onBlur;
    } else {
        onBlur = e[23];
    }
    let onFocus;
    let onPointerEnter;
    let onPointerLeave;
    if (e[24] === Symbol.for("react.memo_cache_sentinel")) {
        onFocus = (j)=>setA(j.currentTarget.matches(":focus-visible"));
        onPointerEnter = ()=>setA(true);
        onPointerLeave = ()=>setA(false);
        e[24] = onFocus;
        e[25] = onPointerEnter;
        e[26] = onPointerLeave;
    } else {
        onFocus = e[24];
        onPointerEnter = e[25];
        onPointerLeave = e[26];
    }
    let Ge;
    if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
        Ge = {
            className: "sand-3nfvp2 sand-1pha0wt sand-193iq5w sand-euugli"
        };
        e[27] = Ge;
    } else {
        Ge = e[27];
    }
    let xe;
    if (e[28] !== R) {
        xe = R ? {
            "data-voice-call-description": ""
        } : {};
        e[28] = R;
        e[29] = xe;
    } else {
        xe = e[29];
    }
    let je;
    if (e[30] !== R || e[31] !== Y) {
        je = R && Y ? {
            "data-voice-call-description-load-in": ""
        } : {};
        e[30] = R;
        e[31] = Y;
        e[32] = je;
    } else {
        je = e[32];
    }
    let we;
    if (e[33] !== te || e[34] !== _ || e[35] !== xe || e[36] !== je) {
        we = <Ss1 data-voice-call-summary="" isTruncating ref={ref} title={_} {...xe} {...je} style={O.summary}>{te}</Ss1>;
        e[33] = te;
        e[34] = _;
        e[35] = xe;
        e[36] = je;
        e[37] = we;
    } else {
        we = e[37];
    }
    let qe;
    if (e[38] !== duration) {
        qe = duration === null ? null : <Ss1 data-voice-call-duration="" tone="tertiary" style={O.duration}>{` · ${duration}`}</Ss1>;
        e[38] = duration;
        e[39] = qe;
    } else {
        qe = e[39];
    }
    let Se;
    if (e[40] !== we || e[41] !== qe) {
        Se = <span data-voice-call-line="" {...Ge}>{we}{qe}</span>;
        e[40] = we;
        e[41] = qe;
        e[42] = Se;
    } else {
        Se = e[42];
    }
    let _e;
    if (e[43] !== oe || e[44] !== expanded || e[45] !== onToggle || e[46] !== Se) {
        _e = <Ks aria-expanded={expanded} aria-label={oe} data-voice-call-toggle="" leading={leading} leadingGap={4} onBlur={onBlur} onClick={onToggle} onFocus={onFocus} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} style={O.summaryChip} title={oe}>{Se}</Ks>;
        e[43] = oe;
        e[44] = expanded;
        e[45] = onToggle;
        e[46] = Se;
        e[47] = _e;
    } else {
        _e = e[47];
    }
    let Ne;
    if (e[48] !== _e || e[49] !== k) {
        Ne = <div data-voice-call-rating-row="" ref={seRef} {...H}>{_e}{k}</div>;
        e[48] = _e;
        e[49] = k;
        e[50] = Ne;
    } else {
        Ne = e[50];
    }
    let Me;
    if (e[51] !== __1 || e[52] !== expanded || e[53] !== onToggle) {
        Me = expanded ? <Qe aria-label={__1({
            id: "H86f9p"
        })} data-voice-call-close="" icon="x" onClick={onToggle} shape="circle" size="sm" style={[
            O.headControl,
            O.close
        ]} variant="ghost"/> : null;
        e[51] = __1;
        e[52] = expanded;
        e[53] = onToggle;
        e[54] = Me;
    } else {
        Me = e[54];
    }
    let Ce;
    if (e[55] !== g || e[56] !== expanded || e[57] !== isAnysphereUser_1 || e[58] !== f || e[59] !== C) {
        Ce = expanded ? <Ds1Component conversationId={g} isAnysphereUser={isAnysphereUser_1} onChangeShowsNudges={setC} requestId={f} showsNudges={C}/> : null;
        e[55] = g;
        e[56] = expanded;
        e[57] = isAnysphereUser_1;
        e[58] = f;
        e[59] = C;
        e[60] = Ce;
    } else {
        Ce = e[60];
    }
    let Ae;
    if (e[61] !== expanded) {
        Ae = ({
            0: {
                className: "sand-47corl sand-10l6tqk sand-lqly2c sand-13fihh6 sand-437nxk sand-qjr0ry sand-g01cxk sand-uw3kh7 sand-4wkmsb sand-h86m8e sand-1e6nqfh"
            },
            1: {
                className: "sand-47corl sand-10l6tqk sand-lqly2c sand-437nxk sand-qjr0ry sand-uw3kh7 sand-4wkmsb sand-h86m8e sand-1e6nqfh sand-17y0mx6 sand-1hc1fzr"
            }
        })[!!expanded << 0];
        e[61] = expanded;
        e[62] = Ae;
    } else {
        Ae = e[62];
    }
    let ze;
    if (e[63] !== Ae) {
        ze = <div aria-hidden data-voice-call-rule="" {...Ae}/>;
        e[63] = Ae;
        e[64] = ze;
    } else {
        ze = e[64];
    }
    let $e;
    if (e[65] !== style || e[66] !== Ne || e[67] !== Me || e[68] !== Ce || e[69] !== ze) {
        $e = <Vs1 data-voice-call-head="" style={style}>{Ne}{Me}{Ce}{ze}</Vs1>;
        e[65] = style;
        e[66] = Ne;
        e[67] = Me;
        e[68] = Ce;
        e[69] = ze;
        e[70] = $e;
    } else {
        $e = e[70];
    }
    let Re;
    if (e[71] !== N) {
        Re = N == null ? null : <div data-voice-call-inset="receipt" className="sand-h8yej3 sand-9f619 sand-v54qhq sand-f7dkkf">{N}</div>;
        e[71] = N;
        e[72] = Re;
    } else {
        Re = e[72];
    }
    const Ye = expanded ? undefined : true;
    const us = "";
    const Je = expanded ? undefined : true;
    let Ee;
    if (e[73] !== expanded) {
        Ee = ({
            0: {
                className: "sand-1n2onr6 sand-rvj5dj sand-ihq33y sand-h8yej3 sand-193iq5w sand-euugli sand-b3r6kr sand-47corl sand-1qn9uv2 sand-4wkmsb sand-1vgdfw2 sand-1e6nqfh"
            },
            1: {
                className: "sand-1n2onr6 sand-rvj5dj sand-h8yej3 sand-193iq5w sand-euugli sand-b3r6kr sand-1qn9uv2 sand-4wkmsb sand-1vgdfw2 sand-1e6nqfh sand-1tu4anv sand-67bb7w"
            }
        })[!!expanded << 0];
        e[73] = expanded;
        e[74] = Ee;
    } else {
        Ee = e[74];
    }
    let Ie;
    if (e[75] === Symbol.for("react.memo_cache_sentinel")) {
        Ie = {
            className: "sand-2lwn1j sand-b3r6kr"
        };
        e[75] = Ie;
    } else {
        Ie = e[75];
    }
    let Oe;
    if (e[76] !== expanded || e[77] !== G) {
        Oe = ({
            0: {
                className: "sand-96k8nx"
            },
            2: {
                className: "sand-96k8nx"
            },
            1: {
                className: "sand-1i80of2"
            },
            3: {
                className: "sand-1i80of2"
            }
        })[!!expanded << 1 | !!(expanded && !G) << 0];
        e[76] = expanded;
        e[77] = G;
        e[78] = Oe;
    } else {
        Oe = e[78];
    }
    let Te;
    if (e[79] !== description || e[80] !== R || e[81] !== re || e[82] !== E) {
        Te = R && description !== undefined && (re || E) ? <div data-voice-call-full-summary="" {...p_1(a_.body2, a$.regular, O.fullSummary)}>{description}</div> : null;
        e[79] = description;
        e[80] = R;
        e[81] = re;
        e[82] = E;
        e[83] = Te;
    } else {
        Te = e[83];
    }
    const es = G ? <div data-voice-call-inset="receipt" data-voice-call-transcript-frame="" className="sand-1n2onr6 sand-1anpbxc sand-h8yej3 sand-193iq5w sand-v54qhq sand-f7dkkf sand-9f619"><Fs1 contentStyle={O.transcriptBody} data-voice-call-transcript-scroll="" maxHeight={maxHeight} onScrollStateChange={({ isAtBottom, isAtTop })=>{
        const IRef_current = IRef.current;
        if (IRef_current != null) {
            IRef_current.style.opacity = isAtBottom ? "0" : "1";
        }
        const QRef_current = QRef.current;
        if (QRef_current != null) {
            QRef_current.style.opacity = isAtTop ? "0" : "1";
        }
    }} overlay=<><div aria-hidden data-voice-call-transcript-fade="top" ref={QRef} className="sand-47corl sand-10l6tqk sand-1o0tod sand-tijo5x sand-1fgtraw sand-g01cxk sand-19991ni sand-4wkmsb sand-osayit sand-13vifvy sand-1xns1g9"/><div aria-hidden data-voice-call-transcript-fade="" ref={IRef} className="sand-47corl sand-10l6tqk sand-1o0tod sand-tijo5x sand-1fgtraw sand-g01cxk sand-19991ni sand-4wkmsb sand-osayit sand-1ey2m1c sand-1nutzt5"/></> rootStyle={O.transcript} scrollbarVisibility="hover" width="100%">{ae.map((j)=>{
        if (j.kind === "turn") {
            return <Ms key={j.turn.id} nest="card" turn={j.turn}/>;
        }
        return <Is1Component key={j.nudge.id} nudge={j.nudge} startedAtMs={startedAtMs_1}/>;
    })}</Fs1></div> : null;
    let Le;
    if (e[84] !== Oe || e[85] !== Te || e[86] !== es) {
        Le = <div {...Oe}>{Te}{es}</div>;
        e[84] = Oe;
        e[85] = Te;
        e[86] = es;
        e[87] = Le;
    } else {
        Le = e[87];
    }
    let Ve;
    if (e[88] !== Ie || e[89] !== Le) {
        Ve = <div {...Ie}>{Le}</div>;
        e[88] = Ie;
        e[89] = Le;
        e[90] = Ve;
    } else {
        Ve = e[90];
    }
    let Fe;
    if (e[91] !== Ye || e[92] !== Je || e[93] !== Ee || e[94] !== Ve) {
        Fe = <div aria-hidden={Ye} data-voice-call-transcript={us} inert={Je} {...Ee}>{Ve}</div>;
        e[91] = Ye;
        e[92] = Je;
        e[93] = Ee;
        e[94] = Ve;
        e[95] = Fe;
    } else {
        Fe = e[95];
    }
    let Ke;
    if (e[96] !== ref_1 || e[97] !== J || e[98] !== V || e[99] !== F || e[100] !== $e || e[101] !== Re || e[102] !== Fe) {
        Ke = <div data-voice-call-receipt={ve} data-voice-call-column={ue} data-voice-call-sizing={be} data-expanded={J} ref={ref_1} {...V}>{F}{$e}{Re}{Fe}</div>;
        e[96] = ref_1;
        e[97] = J;
        e[98] = V;
        e[99] = F;
        e[100] = $e;
        e[101] = Re;
        e[102] = Fe;
        e[103] = Ke;
    } else {
        Ke = e[103];
    }
    return Ke;
}
const Ls = {
    id: "KXd+dq"
};
const Vs = {
    error: {
        kMwMTN: "sand-6rl5ky",
        $$css: true
    }
};
const Fs = {
    thumbs: null,
    tray: null,
    commentOpen: false
};
function Rs1Component(o) {
    Rs1Component.d = 1362;
    const e = c_1.c(97);
    const { onSubmit, children } = o;
    const { _: __1 } = u();
    const { _: __2 } = u();
    const uRef = r_1.useRef(null);
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            kind: "rating"
        };
        e[0] = r;
    } else {
        r = e[0];
    }
    const [c, setC] = r_1.useState(r);
    const [w, setW] = r_1.useState(null);
    const [h, setH] = r_1.useState("");
    const [y, setY] = r_1.useState(null);
    let x;
    if (e[1] !== __1) {
        x = (m)=>{
            setC({
                kind: "detail",
                rating: m
            });
            setY(__1(Ls));
        };
        e[1] = __1;
        e[2] = x;
    } else {
        x = e[2];
    }
    const q = x;
    let v;
    if (e[3] !== onSubmit || e[4] !== q) {
        v = (m, ge)=>{
            if (onSubmit != null) {
                setC({
                    kind: "sending",
                    rating: m
                });
                setY(null);
                onSubmit(m, ge).then((fe)=>{
                    if (fe.ok) {
                        setW(m);
                        setC({
                            kind: "rating"
                        });
                        return;
                    }
                    q(m);
                }, (fe)=>{
                    d0(fe, {
                        tags: {
                            sand_area: "voice-call-feedback"
                        }
                    });
                    q(m);
                });
            }
        };
        e[3] = onSubmit;
        e[4] = q;
        e[5] = v;
    } else {
        v = e[5];
    }
    const g = v;
    const disabled = c.kind === "sending";
    const p = c.kind === "rating" ? w : c.rating;
    const commentOpen = c.kind !== "rating";
    const NRef = r_1.useRef(false);
    let P;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        P = ()=>{
            if (NRef.current) {
                NRef.current = false;
                uRef.current?.focus();
            }
        };
        e[6] = P;
    } else {
        P = e[6];
    }
    u_2(P);
    let L;
    if (e[7] !== c.kind || e[8] !== c.rating) {
        L = (m)=>{
            setY(null);
            if (c.kind !== "rating" && c.rating === m) {
                setC({
                    kind: "rating"
                });
                return;
            }
            NRef.current = true;
            setC({
                kind: "detail",
                rating: m
            });
        };
        e[7] = c.kind;
        e[8] = c.rating;
        e[9] = L;
    } else {
        L = e[9];
    }
    const C = L;
    if (onSubmit == null) {
        let m;
        if (e[10] !== children) {
            m = children(Fs);
            e[10] = children;
            e[11] = m;
        } else {
            m = e[11];
        }
        return m;
    }
    let Z;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        Z = {
            className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-195vfkc"
        };
        e[12] = Z;
    } else {
        Z = e[12];
    }
    let A;
    if (e[13] !== __2) {
        A = __2({
            id: "KacE/L"
        });
        e[13] = __2;
        e[14] = A;
    } else {
        A = e[14];
    }
    let z;
    if (e[15] !== __2) {
        z = __2({
            id: "OEEQKT"
        });
        e[15] = __2;
        e[16] = z;
    } else {
        z = e[16];
    }
    const M = p === "up";
    let E;
    if (e[17] !== C) {
        E = (m)=>{
            m.stopPropagation();
            C("up");
        };
        e[17] = C;
        e[18] = E;
    } else {
        E = e[18];
    }
    let $;
    if (e[19] !== disabled || e[20] !== E || e[21] !== z || e[22] !== M) {
        $ = <Qe aria-label={z} disabled={disabled} icon="thumbs-up" isSelected={M} onClick={E} shape="circle" size="xs" variant="ghost"/>;
        e[19] = disabled;
        e[20] = E;
        e[21] = z;
        e[22] = M;
        e[23] = $;
    } else {
        $ = e[23];
    }
    let I;
    if (e[24] !== __2) {
        I = __2({
            id: "+f5Tkb"
        });
        e[24] = __2;
        e[25] = I;
    } else {
        I = e[25];
    }
    const Q = p === "down";
    let se;
    if (e[26] !== C) {
        se = (m)=>{
            m.stopPropagation();
            C("down");
        };
        e[26] = C;
        e[27] = se;
    } else {
        se = e[27];
    }
    let B;
    if (e[28] !== disabled || e[29] !== I || e[30] !== Q || e[31] !== se) {
        B = <Qe aria-label={I} disabled={disabled} icon="thumbs-down" isSelected={Q} onClick={se} shape="circle" size="xs" variant="ghost"/>;
        e[28] = disabled;
        e[29] = I;
        e[30] = Q;
        e[31] = se;
        e[32] = B;
    } else {
        B = e[32];
    }
    let thumbs;
    if (e[33] !== $ || e[34] !== B || e[35] !== A) {
        thumbs = <span {...Z} aria-label={A} role="group">{$}{B}</span>;
        e[33] = $;
        e[34] = B;
        e[35] = A;
        e[36] = thumbs;
    } else {
        thumbs = e[36];
    }
    const ie = commentOpen ? undefined : true;
    const pe = commentOpen ? "" : undefined;
    const ce = commentOpen ? undefined : true;
    let Y;
    if (e[37] !== commentOpen) {
        Y = ({
            0: {
                className: "sand-rvj5dj sand-ihq33y sand-h8yej3 sand-euugli sand-2lwn1j sand-b3r6kr sand-47corl sand-1qn9uv2 sand-4wkmsb sand-1da2sx9 sand-1e6nqfh"
            },
            1: {
                className: "sand-rvj5dj sand-h8yej3 sand-euugli sand-2lwn1j sand-b3r6kr sand-1qn9uv2 sand-4wkmsb sand-1da2sx9 sand-1e6nqfh sand-1tu4anv sand-67bb7w"
            }
        })[!!commentOpen << 0];
        e[37] = commentOpen;
        e[38] = Y;
    } else {
        Y = e[38];
    }
    let R;
    if (e[39] === Symbol.for("react.memo_cache_sentinel")) {
        R = {
            className: "sand-2lwn1j sand-b3r6kr"
        };
        e[39] = R;
    } else {
        R = e[39];
    }
    let _;
    if (e[40] !== commentOpen) {
        _ = ({
            0: {
                className: "sand-1y1aw1k sand-1v49fql sand-11xpdln sand-4wkmsb sand-1da2sx9 sand-1e6nqfh"
            },
            1: {
                className: "sand-1y1aw1k sand-11xpdln sand-4wkmsb sand-1da2sx9 sand-1e6nqfh sand-nn1q72"
            }
        })[!!commentOpen << 0];
        e[40] = commentOpen;
        e[41] = _;
    } else {
        _ = e[41];
    }
    let ne;
    let te;
    if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
        ne = {
            className: "sand-78zum5 sand-dt5ytf sand-167g77z"
        };
        te = {
            className: "sand-h8yej3 sand-bktkl8 sand-tt52l0 sand-9f619 sand-1y1aw1k sand-2vl965 sand-wib8y2 sand-e2zdcy sand-ur7f20 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-jbqb8w sand-tyxrsu sand-jb2p0i sand-11wthnw sand-37zpob sand-1t137rt"
        };
        e[42] = ne;
        e[43] = te;
    } else {
        ne = e[42];
        te = e[43];
    }
    let W;
    if (e[44] !== __2) {
        W = __2({
            id: "vYOUOk"
        });
        e[44] = __2;
        e[45] = W;
    } else {
        W = e[45];
    }
    let onChange;
    if (e[46] === Symbol.for("react.memo_cache_sentinel")) {
        onChange = (m)=>setH(m.currentTarget.value);
        e[46] = onChange;
    } else {
        onChange = e[46];
    }
    let onKeyDown;
    if (e[47] !== h || e[48] !== disabled || e[49] !== p || e[50] !== g) {
        onKeyDown = (m)=>{
            if (!(m.key !== "Enter" || !(m.metaKey || m.ctrlKey))) {
                m.preventDefault();
                m.stopPropagation();
                if (!(p === null || disabled)) {
                    g(p, h);
                }
            }
        };
        e[47] = h;
        e[48] = disabled;
        e[49] = p;
        e[50] = g;
        e[51] = onKeyDown;
    } else {
        onKeyDown = e[51];
    }
    const tabIndex = commentOpen ? 0 : -1;
    let ae;
    if (e[52] !== h || e[53] !== disabled || e[54] !== W || e[55] !== onKeyDown || e[56] !== tabIndex) {
        ae = <textarea {...te} aria-label={W} disabled={disabled} maxLength={maxLength} onChange={onChange} onKeyDown={onKeyDown} ref={uRef} tabIndex={tabIndex} value={h}/>;
        e[52] = h;
        e[53] = disabled;
        e[54] = W;
        e[55] = onKeyDown;
        e[56] = tabIndex;
        e[57] = ae;
    } else {
        ae = e[57];
    }
    let G;
    if (e[58] !== y) {
        G = y === null ? null : <span {...p_1(a_.label, Vs.error)} role="alert">{y}</span>;
        e[58] = y;
        e[59] = G;
    } else {
        G = e[59];
    }
    let ve;
    if (e[60] === Symbol.for("react.memo_cache_sentinel")) {
        ve = {
            className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-17d4w8g"
        };
        e[60] = ve;
    } else {
        ve = e[60];
    }
    let ue;
    if (e[61] !== p || e[62] !== g) {
        ue = ()=>{
            if (p !== null) {
                g(p, "");
            }
        };
        e[61] = p;
        e[62] = g;
        e[63] = ue;
    } else {
        ue = e[63];
    }
    let be;
    if (e[64] === Symbol.for("react.memo_cache_sentinel")) {
        be = <T id="RBX7l+"/>;
        e[64] = be;
    } else {
        be = e[64];
    }
    let J;
    if (e[65] !== disabled || e[66] !== ue) {
        J = <Ns1 disabled={disabled} onClick={ue} size="sm" variant="ghost">{be}</Ns1>;
        e[65] = disabled;
        e[66] = ue;
        e[67] = J;
    } else {
        J = e[67];
    }
    let V;
    if (e[68] !== h || e[69] !== p || e[70] !== g) {
        V = ()=>{
            if (p !== null) {
                g(p, h);
            }
        };
        e[68] = h;
        e[69] = p;
        e[70] = g;
        e[71] = V;
    } else {
        V = e[71];
    }
    let K;
    if (e[72] === Symbol.for("react.memo_cache_sentinel")) {
        K = <T id="JlFcis"/>;
        e[72] = K;
    } else {
        K = e[72];
    }
    let F;
    if (e[73] !== disabled || e[74] !== V) {
        F = <Ns1 disabled={disabled} onClick={V} size="sm" variant="primary">{K}</Ns1>;
        e[73] = disabled;
        e[74] = V;
        e[75] = F;
    } else {
        F = e[75];
    }
    let ee;
    if (e[76] !== J || e[77] !== F) {
        ee = <div {...ve}>{J}{F}</div>;
        e[76] = J;
        e[77] = F;
        e[78] = ee;
    } else {
        ee = e[78];
    }
    let D;
    if (e[79] !== ae || e[80] !== G || e[81] !== ee) {
        D = <div {...ne}>{ae}{G}{ee}</div>;
        e[79] = ae;
        e[80] = G;
        e[81] = ee;
        e[82] = D;
    } else {
        D = e[82];
    }
    let H;
    if (e[83] !== _ || e[84] !== D) {
        H = <div {...R}><div {..._}>{D}</div></div>;
        e[83] = _;
        e[84] = D;
        e[85] = H;
    } else {
        H = e[85];
    }
    let tray;
    if (e[86] !== ie || e[87] !== pe || e[88] !== ce || e[89] !== Y || e[90] !== H) {
        tray = <div aria-hidden={ie} data-open={pe} data-voice-call-feedback="" data-voice-call-feedback-detail="" inert={ce} {...Y}>{H}</div>;
        e[86] = ie;
        e[87] = pe;
        e[88] = ce;
        e[89] = Y;
        e[90] = H;
        e[91] = tray;
    } else {
        tray = e[91];
    }
    let le;
    if (e[92] !== children || e[93] !== commentOpen || e[94] !== thumbs || e[95] !== tray) {
        le = children({
            commentOpen,
            thumbs,
            tray
        });
        e[92] = children;
        e[93] = commentOpen;
        e[94] = thumbs;
        e[95] = tray;
        e[96] = le;
    } else {
        le = e[96];
    }
    return le;
}
function Os1Component(o) {
    Os1Component.d = 1361;
    const e = c_1.c(7);
    const { agentId, callId, children } = o;
    const a = bt();
    let onSubmit;
    if (e[0] !== agentId || e[1] !== callId || e[2] !== a) {
        onSubmit = agentId == null ? null : (c, comment)=>a.submitFeedback({
                agentId,
                callId,
                rating: c,
                ...comment.trim().length === 0 ? {} : {
                    comment
                }
            });
        e[0] = agentId;
        e[1] = callId;
        e[2] = a;
        e[3] = onSubmit;
    } else {
        onSubmit = e[3];
    }
    let r;
    if (e[4] !== children || e[5] !== onSubmit) {
        r = <Rs1Component onSubmit={onSubmit}>{children}</Rs1Component>;
        e[4] = children;
        e[5] = onSubmit;
        e[6] = r;
    } else {
        r = e[6];
    }
    return r;
}
function Ds(o, callId) {
    const s = c_1.c(10);
    const t = bt();
    const d = bP(t.records);
    let a;
    if (s[0] !== o || s[1] !== d || s[2] !== callId) {
        a = o == null ? null : eO(d, {
            agentId: o,
            callId
        });
        s[0] = o;
        s[1] = d;
        s[2] = callId;
        s[3] = a;
    } else {
        a = s[3];
    }
    const u = a;
    let r;
    if (s[4] !== o || s[5] !== callId || s[6] !== t) {
        r = ()=>{
            if (!(o == null || o.length === 0)) {
                t.loadRecord({
                    agentId: o,
                    callId
                });
            }
        };
        s[4] = o;
        s[5] = callId;
        s[6] = t;
        s[7] = r;
    } else {
        r = s[7];
    }
    const c = x(r);
    let i;
    if (s[8] !== c) {
        i = ()=>{
            c();
            return Ps;
        };
        s[8] = c;
        s[9] = i;
    } else {
        i = s[9];
    }
    i_1(i);
    return u;
}
function Ps() {}
function BsComponent(o) {
    BsComponent.d = 1358;
    const e = c_1.c(37);
    const { entry, adjacency, agentId, onHold } = o;
    const { _ } = u();
    const r = dB();
    const c = bv();
    const i = eN();
    const w = bu(entry.call.callId);
    const [l, setL] = r_1.useState(false);
    const S = agentId ?? c;
    const y = Ds(S, entry.call.callId);
    const b = y?.realtimeConversationId ?? entry.call.realtimeConversationId ?? null;
    const x = y?.agentRequestId ?? entry.call.agentRequestId ?? null;
    let q;
    if (e[0] !== entry.call) {
        q = eL.hasNoDuration(entry.call);
        e[0] = entry.call;
        e[1] = q;
    } else {
        q = e[1];
    }
    const v = q;
    let g;
    if (e[2] !== _ || e[3] !== v) {
        g = _(v ? {
            id: "LBLqth"
        } : {
            id: "MAnFFY"
        });
        e[2] = _;
        e[3] = v;
        e[4] = g;
    } else {
        g = e[4];
    }
    const f = g;
    let p;
    if (e[5] !== entry.call.durationMs || e[6] !== v) {
        p = v ? null : eL.formatCardDuration(entry.call.durationMs);
        e[5] = entry.call.durationMs;
        e[6] = v;
        e[7] = p;
    } else {
        p = e[7];
    }
    const duration = p;
    let N;
    if (e[8] !== entry.conversation?.turns || e[9] !== y?.turns) {
        N = entry.conversation?.turns ?? y?.turns ?? [];
        e[8] = entry.conversation?.turns;
        e[9] = y?.turns;
        e[10] = N;
    } else {
        N = e[10];
    }
    const turns = N;
    let L;
    if (e[11] !== entry.conversation?.nudges || e[12] !== y?.nudges) {
        L = entry.conversation?.nudges ?? y?.nudges ?? [];
        e[11] = entry.conversation?.nudges;
        e[12] = y?.nudges;
        e[13] = L;
    } else {
        L = e[13];
    }
    const nudges = L;
    if (!r) {
        return null;
    }
    const Z = v || w ? null : S;
    let A;
    if (e[14] !== i.isAnysphereUser || e[15] !== b || e[16] !== duration || e[17] !== entry.call.description || e[18] !== entry.call.durationMs || e[19] !== entry.call.endedAtMs || e[20] !== l || e[21] !== nudges || e[22] !== onHold || e[23] !== x || e[24] !== f || e[25] !== turns) {
        A = (Q)=><Cs1Component commentOpen={Q.commentOpen} conversationId={b} description={entry.call.description} duration={duration} expanded={l} isAnysphereUser={i.isAnysphereUser} nudges={nudges} onToggle={()=>{
                l || onHold?.();
                setL(Ws);
            }} requestId={x} startedAtMs={entry.call.endedAtMs - entry.call.durationMs} thumbs={Q.thumbs} title={f} tray={Q.tray} turns={turns}/>;
        e[14] = i.isAnysphereUser;
        e[15] = b;
        e[16] = duration;
        e[17] = entry.call.description;
        e[18] = entry.call.durationMs;
        e[19] = entry.call.endedAtMs;
        e[20] = l;
        e[21] = nudges;
        e[22] = onHold;
        e[23] = x;
        e[24] = f;
        e[25] = turns;
        e[26] = A;
    } else {
        A = e[26];
    }
    const z = A;
    let M;
    if (e[27] !== adjacency.isGroupStart) {
        M = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-amitd3 sand-h8yej3 sand-1xl41tn sand-euugli sand-167g77z"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-amitd3 sand-h8yej3 sand-1xl41tn sand-euugli sand-167g77z sand-19snzy6 sand-1sl1sun"
            }
        })[!!adjacency.isGroupStart << 0];
        e[27] = adjacency.isGroupStart;
        e[28] = M;
    } else {
        M = e[28];
    }
    const E = adjacency.isGroupStart || undefined;
    let $;
    if (e[29] !== entry.call.callId || e[30] !== Z || e[31] !== z) {
        $ = <Os1Component agentId={Z} callId={entry.call.callId}>{z}</Os1Component>;
        e[29] = entry.call.callId;
        e[30] = Z;
        e[31] = z;
        e[32] = $;
    } else {
        $ = e[32];
    }
    let I;
    if (e[33] !== M || e[34] !== E || e[35] !== $) {
        I = <div {...M} data-group-start={E} data-voice-call-stack="row">{$}</div>;
        e[33] = M;
        e[34] = E;
        e[35] = $;
        e[36] = I;
    } else {
        I = e[36];
    }
    return I;
}
function Ws(o) {
    return !o;
}
export { BsComponent as default };
