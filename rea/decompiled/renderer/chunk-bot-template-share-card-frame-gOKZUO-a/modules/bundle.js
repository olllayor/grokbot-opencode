import { c, r as r_1, p as p_1, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as u_1, aK, a$, a_, O, Q } from "./index.eager-app-Cj5f8Gby.js";
import { X, Q as Q_2, Y, U } from "./index-ZYxf-aBb.js";
import { aY as R } from "./index.eager-platform-Dcfeegfw.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "0b9dbf66-35b5-4d9f-b668-ecad697b1f5b";
            e._sentryDebugIdIdentifier = "sentry-dbid-0b9dbf66-35b5-4d9f-b668-ecad697b1f5b";
        }
    } catch (e) {}
})();
const A = 80;
const q = {
    card: {
        kVAEAm: "sand-1n2onr6",
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kOIVth: "sand-1v2ro7d",
        kzqmXN: "sand-1cvmir6",
        ks0D6T: "sand-193iq5w",
        k7Eaqz: "sand-euugli",
        kmVPX3: "sand-c7ga6q",
        kaIpWk: "sand-gqmno8",
        k9WMMc: "sand-1yc453h",
        $$css: true
    },
    title: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        kMwMTN: "sand-1wd3ewq",
        $$css: true
    },
    body: {
        kqGvvJ: "sand-10im51j",
        k7Eaqz: "sand-euugli",
        kMwMTN: "sand-1o0liin",
        k1xSpc: "sand-104kibb",
        kJFfOR: "sand-1h7i4cw",
        kgKLqz: "sand-1ua5tub",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        kTgw9: "sand-13faqbe",
        $$css: true
    },
    actionSecondary: {
        kMzoRj: "sand-qjedn3",
        kVAM5u: "sand-q03nf1",
        kWkggS: "sand-1tiofj7 sand-ex9vrg",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    }
};
const J = {
    state: "idle",
    isPaused: true,
    isFollowingPointer: false,
    spinSignal: 0
};
function YComponent(E) {
    YComponent.d = 271;
    const s = c.c(30);
    const { template, isPublished, photoUrl, mark, meta, footer } = E;
    const m = mark === undefined ? J : mark;
    const M = {
        id: template.shareId,
        avatarShape: template.avatarShape ?? null,
        avatarColor: template.avatarColor ?? null
    };
    const T = photoUrl != null && photoUrl.length > 0;
    const color = T ? X.color : Q_2(M);
    const id = r_1.useId();
    const ref = u_1(id);
    let k;
    if (s[0] !== template.description) {
        k = template.description.replace(/\s+/g, " ").trim();
        s[0] = template.description;
        s[1] = k;
    } else {
        k = s[1];
    }
    const u = k;
    const template_name = template.name;
    let g;
    let f;
    if (s[2] === Symbol.for("react.memo_cache_sentinel")) {
        g = p_1(q.card, aK.transcriptWidget);
        f = {
            className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-17d4w8g"
        };
        s[2] = g;
        s[3] = f;
    } else {
        g = s[2];
        f = s[3];
    }
    let d;
    if (s[4] !== ref || s[5] !== template.name || s[6] !== id) {
        d = <R dir="auto" id={id} ref={ref} rootStyle={q.title} size="lg" weight="semibold">{template.name}</R>;
        s[4] = ref;
        s[5] = template.name;
        s[6] = id;
        s[7] = d;
    } else {
        d = s[7];
    }
    let p;
    if (s[8] === Symbol.for("react.memo_cache_sentinel")) {
        p = {
            className: "sand-78zum5 sand-6s0dn4 sand-2lah0s sand-17d4w8g"
        };
        s[8] = p;
    } else {
        p = s[8];
    }
    let t;
    if (s[9] !== isPublished) {
        t = ({
            0: {
                className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-2lah0s sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-1b8i4yy sand-4on0b6"
            },
            1: {
                className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-2lah0s sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-yjcdl2 sand-1le6hhr"
            }
        })[!!isPublished << 0];
        s[9] = isPublished;
        s[10] = t;
    } else {
        t = s[10];
    }
    let l;
    if (s[11] !== isPublished) {
        l = ({
            0: {
                className: "sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-3zn3jg"
            },
            1: {
                className: "sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-1rm5x0x"
            }
        })[!!isPublished << 0];
        s[11] = isPublished;
        s[12] = l;
    } else {
        l = s[12];
    }
    let i;
    if (s[13] !== l) {
        i = <span aria-hidden {...l}/>;
        s[13] = l;
        s[14] = i;
    } else {
        i = s[14];
    }
    let x;
    if (s[15] === Symbol.for("react.memo_cache_sentinel")) {
        x = p_1(a_.body2, a$.medium);
        s[15] = x;
    } else {
        x = s[15];
    }
    let r;
    if (s[16] !== isPublished) {
        r = <span {...x}>{isPublished ? <T_1 id="u3wRF+"/> : <T_1 id="ejZKhw"/>}</span>;
        s[16] = isPublished;
        s[17] = r;
    } else {
        r = s[17];
    }
    let o;
    if (s[18] !== i || s[19] !== r || s[20] !== t) {
        o = <div {...p}><div {...t}>{i}{r}</div></div>;
        s[18] = i;
        s[19] = r;
        s[20] = t;
        s[21] = o;
    } else {
        o = s[21];
    }
    let j;
    if (s[22] !== o || s[23] !== d) {
        j = <div {...f}>{d}{o}</div>;
        s[22] = o;
        s[23] = d;
        s[24] = j;
    } else {
        j = s[24];
    }
    let y;
    if (s[25] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-h8yej3 sand-euugli sand-q48mlj sand-9f619 sand-1qmwy7c sand-qjedn3 sand-1y0btm7 sand-q03nf1 sand-10e981r sand-b3r6kr"
        };
        s[25] = y;
    } else {
        y = s[25];
    }
    let v;
    if (s[26] !== u) {
        v = u.length > 0 ? <R as="p" dir="auto" rootStyle={q.body} size="lg">{u}</R> : null;
        s[26] = u;
        s[27] = v;
    } else {
        v = s[27];
    }
    let w;
    if (s[28] !== footer) {
        w = footer === undefined ? null : <div className="sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3">{footer}</div>;
        s[28] = footer;
        s[29] = w;
    } else {
        w = s[29];
    }
    return <article aria-label={template_name} {...g}>{j}<div {...y} style={{
        backgroundImage: O(color)
    }}>{T ? <Y avatarKey={template.shareId} dataUrl={photoUrl} fillPx={A}/> : <Q color={color} isFollowingPointer={m.isFollowingPointer} isPaused={m.isPaused} shape={U(M)} sizePx={A} spinSignal={m.spinSignal} state={m.state}/>}</div>{v}{meta}{w}</article>;
}
export { YComponent as B, q as s };
