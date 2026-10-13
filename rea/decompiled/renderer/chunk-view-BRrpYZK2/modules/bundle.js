import { c as c_1, u as u_1, r, p, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as u_2, r as r_2, aK, bt, b$, d0 } from "./index.eager-app-Cj5f8Gby.js";
import { aY as V1 } from "./index.eager-platform-Dcfeegfw.js";
import { W, g as Oe, an, a5 as Us, a6 as Ys } from "./index-ZYxf-aBb.js";
import { i, D } from "./chunk-composer-body-lines-BeTmrnKG.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a9f46f25-e2f4-4749-9098-c5342c4207d8";
            e._sentryDebugIdIdentifier = "sentry-dbid-a9f46f25-e2f4-4749-9098-c5342c4207d8";
        }
    } catch (e) {}
})();
const oe = {
    card: {
        kzqmXN: "sand-h8yej3",
        k7Eaqz: "sand-euugli",
        kaIpWk: "sand-gqmno8",
        kVQacm: "sand-b3r6kr",
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kOIVth: "sand-883omv",
        kmVPX3: "sand-c7ga6q",
        $$css: true
    },
    sentDot: {
        kzqmXN: "sand-1v4s8kt",
        kZKoxP: "sand-ols6we",
        kaIpWk: "sand-149ho13",
        kmuXW: "sand-2lah0s",
        kWkggS: "sand-1my5qk1",
        $$css: true
    },
    readyDot: {
        kzqmXN: "sand-1v4s8kt",
        kZKoxP: "sand-ols6we",
        kaIpWk: "sand-149ho13",
        kmuXW: "sand-2lah0s",
        kWkggS: "sand-xa9ouo",
        $$css: true
    },
    toggle: {
        kZKoxP: "sand-d7y6wv",
        keoZOQ: "sand-1gslohp",
        k71WvV: "sand-1sa5p1d",
        k1K539: "sand-yorhqc",
        keTefX: "sand-1hm9lzh",
        kwRFfy: "sand-1icxu4v",
        kZCmMZ: "sand-25sj25",
        kaIpWk: "sand-1kogg8i",
        kMwMTN: "sand-4b2ntj",
        $$css: true
    },
    sendingButton: {
        kSiTet: "sand-1hc1fzr",
        kWkggS: "sand-hge7h4",
        kMwMTN: "sand-1ybxsvs",
        $$css: true
    }
};
function as(t) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
}
function ts(t) {
    return t.split(",").flatMap((e)=>{
        const a = e.trim();
        if (a.length > 0) {
            return [
                a
            ];
        }
        return [];
    });
}
function DsComponent(t) {
    DsComponent.d = 492;
    const e = c_1.c(216);
    const { draft, replyTo, status, onSend, onDiscard, footerAccessory } = t;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    let Z;
    if (e[0] !== draft.to) {
        Z = draft.to.join(", ");
        e[0] = draft.to;
        e[1] = Z;
    } else {
        Z = e[1];
    }
    const [j, setJ] = r.useState(Z);
    let g;
    if (e[2] !== draft.cc) {
        g = draft.cc ?? [];
        e[2] = draft.cc;
        e[3] = g;
    } else {
        g = e[3];
    }
    let z;
    if (e[4] !== g) {
        z = g.join(", ");
        e[4] = g;
        e[5] = z;
    } else {
        z = e[5];
    }
    const [f, setF] = r.useState(z);
    const [u, setU] = r.useState(draft.subject);
    const [m, setM] = r.useState(draft.body);
    const [le, setLe] = r.useState(false);
    const id = r.useId();
    const ref = u_2(id);
    if (status !== "editable" && status !== "sending") {
        const ie = status === "sent" || status === "draft-created";
        let B;
        if (e[6] !== ie) {
            B = ({
                0: {
                    className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-1bjonze sand-1120s5i sand-1pixwil sand-149ho13 sand-1ciwos8 sand-4b2ntj"
                },
                1: {
                    className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-1bjonze sand-1120s5i sand-1pixwil sand-149ho13 sand-1buh4up sand-1w5rjie"
                }
            })[!!ie << 0];
            e[6] = ie;
            e[7] = B;
        } else {
            B = e[7];
        }
        const We = B;
        let R;
        let o;
        let _;
        let role;
        let te;
        let w;
        let $;
        let y;
        let b;
        if (e[8] !== __2 || e[9] !== We || e[10] !== ref || e[11] !== draft || e[12] !== replyTo || e[13] !== status || e[14] !== id) {
            const { dotStyle, label, summary } = gs(__2, status, draft);
            R = label;
            o = summary;
            b = id;
            if (e[24] === Symbol.for("react.memo_cache_sentinel")) {
                _ = r_2("sand-email-composer", p(aK.transcriptWidget, oe.card).className);
                e[24] = _;
            } else {
                _ = e[24];
            }
            role = "region";
            if (e[25] === Symbol.for("react.memo_cache_sentinel")) {
                $ = r_2("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli");
                e[25] = $;
            } else {
                $ = e[25];
            }
            let S;
            if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
                S = r_2("sand-1iyjqo2 sand-s83m0k sand-euugli sand-j0a0fe");
                e[26] = S;
            } else {
                S = e[26];
            }
            let M;
            if (e[27] !== replyTo) {
                M = replyTo == null ? <T_1 id="xqAzrN"/> : <T_1 id="ImOQa9"/>;
                e[27] = replyTo;
                e[28] = M;
            } else {
                M = e[28];
            }
            if (e[29] !== ref || e[30] !== S || e[31] !== M || e[32] !== id) {
                y = <V1 className={S} id={id} ref={ref} size="lg" weight="medium">{M}</V1>;
                e[29] = ref;
                e[30] = S;
                e[31] = M;
                e[32] = id;
                e[33] = y;
            } else {
                y = e[33];
            }
            te = We;
            w = dotStyle != null ? <span aria-hidden {...p(dotStyle)}/> : null;
            e[8] = __2;
            e[9] = We;
            e[10] = ref;
            e[11] = draft;
            e[12] = replyTo;
            e[13] = status;
            e[14] = id;
            e[15] = R;
            e[16] = o;
            e[17] = _;
            e[18] = role;
            e[19] = te;
            e[20] = w;
            e[21] = $;
            e[22] = y;
            e[23] = b;
        } else {
            R = e[15];
            o = e[16];
            _ = e[17];
            role = e[18];
            te = e[19];
            w = e[20];
            $ = e[21];
            y = e[22];
            b = e[23];
        }
        const color = ie ? "green" : "secondary";
        let N;
        if (e[34] !== R || e[35] !== color) {
            N = <V1 color={color} size="sm" weight="medium">{R}</V1>;
            e[34] = R;
            e[35] = color;
            e[36] = N;
        } else {
            N = e[36];
        }
        let k;
        if (e[37] !== N || e[38] !== te || e[39] !== w) {
            k = <span {...te}>{w}{N}</span>;
            e[37] = N;
            e[38] = te;
            e[39] = w;
            e[40] = k;
        } else {
            k = e[40];
        }
        let C;
        if (e[41] !== k || e[42] !== $ || e[43] !== y) {
            C = <div className={$}>{y}{k}</div>;
            e[41] = k;
            e[42] = $;
            e[43] = y;
            e[44] = C;
        } else {
            C = e[44];
        }
        let T;
        if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
            T = r_2("sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft");
            e[45] = T;
        } else {
            T = e[45];
        }
        let I;
        if (e[46] !== o || e[47] !== T) {
            I = <V1 className={T} color="secondary" size="lg">{o}</V1>;
            e[46] = o;
            e[47] = T;
            e[48] = I;
        } else {
            I = e[48];
        }
        let V;
        if (e[49] !== _ || e[50] !== role || e[51] !== C || e[52] !== I || e[53] !== b) {
            V = <section aria-labelledby={b} className={_} role={role}>{C}{I}</section>;
            e[49] = _;
            e[50] = role;
            e[51] = C;
            e[52] = I;
            e[53] = b;
            e[54] = V;
        } else {
            V = e[54];
        }
        return V;
    }
    let c;
    let cc;
    let to;
    let $e;
    if (e[55] !== m || e[56] !== f || e[57] !== status || e[58] !== j) {
        to = ts(j);
        cc = ts(f);
        c = status === "editable";
        $e = c && to.length > 0 && to.every(as) && cc.every(as) && m.trim().length > 0;
        e[55] = m;
        e[56] = f;
        e[57] = status;
        e[58] = j;
        e[59] = c;
        e[60] = cc;
        e[61] = to;
        e[62] = $e;
    } else {
        c = e[59];
        cc = e[60];
        to = e[61];
        $e = e[62];
    }
    const L = $e;
    let de;
    let Y;
    let J;
    let U;
    let H;
    let ce;
    let ee;
    let onKeyDown;
    let onSubmit;
    let se;
    let fe;
    let style;
    let ye;
    let he;
    let ae;
    if (e[63] !== __1 || e[64] !== m || e[65] !== c || e[66] !== L || e[67] !== ref || e[68] !== f || e[69] !== cc || e[70] !== draft.from || e[71] !== le || e[72] !== onSend || e[73] !== to || e[74] !== replyTo || e[75] !== status || e[76] !== u || e[77] !== id || e[78] !== j) {
        de = i(m);
        const ie = c && de && !le;
        let B;
        if (e[94] === Symbol.for("react.memo_cache_sentinel")) {
            B = {
                className: "sand-euugli sand-1q4ynmn sand-1ua6jya sand-b3r6kr"
            };
            e[94] = B;
        } else {
            B = e[94];
        }
        const We = B;
        const R = {
            0: {
                className: "sand-euugli sand-1edz59j"
            },
            1: {
                className: "sand-euugli sand-1edz59j sand-1n2onr6 sand-1vke2v8 sand-b3r6kr"
            }
        }[!!ie << 0];
        const o = {
            className: "sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli sand-1717udv sand-ng3xce sand-jbqb8w sand-19aaqeu sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-1t137rt sand-ompknl"
        };
        const _ = {
            className: "sand-1lliihq sand-h8yej3 sand-euugli sand-1edz59j sand-5f5z56 sand-9f619 sand-tt52l0 sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-ng3xce sand-jbqb8w sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-1t137rt sand-j0a0fe sand-126k92a sand-ompknl"
        };
        let q;
        if (e[95] !== m || e[96] !== L || e[97] !== cc || e[98] !== draft.from || e[99] !== onSend || e[100] !== to || e[101] !== u) {
            q = (D)=>{
                D.preventDefault();
                if (L) {
                    onSend({
                        from: draft.from,
                        to,
                        ...cc.length > 0 ? {
                            cc
                        } : {},
                        subject: u,
                        body: m
                    });
                }
            };
            e[95] = m;
            e[96] = L;
            e[97] = cc;
            e[98] = draft.from;
            e[99] = onSend;
            e[100] = to;
            e[101] = u;
            e[102] = q;
        } else {
            q = e[102];
        }
        const te = q;
        let w;
        if (e[103] === Symbol.for("react.memo_cache_sentinel")) {
            w = (D)=>{
                if (!(D.key !== "Enter" || D.nativeEvent.isComposing)) {
                    if (D.metaKey || D.ctrlKey) {
                        D.preventDefault();
                        D.stopPropagation();
                        D.currentTarget.requestSubmit();
                        return;
                    }
                    if (D.target instanceof HTMLInputElement) {
                        D.preventDefault();
                    }
                }
            };
            e[103] = w;
        } else {
            w = e[103];
        }
        const $ = w;
        ce = id;
        if (e[104] === Symbol.for("react.memo_cache_sentinel")) {
            ee = r_2("sand-email-composer", p(aK.transcriptWidget, oe.card).className);
            e[104] = ee;
        } else {
            ee = e[104];
        }
        onKeyDown = $;
        onSubmit = te;
        let y;
        if (e[105] === Symbol.for("react.memo_cache_sentinel")) {
            y = r_2("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli");
            e[105] = y;
        } else {
            y = e[105];
        }
        let b;
        if (e[106] === Symbol.for("react.memo_cache_sentinel")) {
            b = r_2("sand-1iyjqo2 sand-s83m0k sand-euugli sand-j0a0fe");
            e[106] = b;
        } else {
            b = e[106];
        }
        let A;
        if (e[107] !== replyTo) {
            A = replyTo == null ? <T_1 id="xqAzrN"/> : <T_1 id="ImOQa9"/>;
            e[107] = replyTo;
            e[108] = A;
        } else {
            A = e[108];
        }
        let N;
        if (e[109] !== ref || e[110] !== b || e[111] !== A || e[112] !== id) {
            N = <V1 className={b} id={id} ref={ref} size="lg" weight="medium">{A}</V1>;
            e[109] = ref;
            e[110] = b;
            e[111] = A;
            e[112] = id;
            e[113] = N;
        } else {
            N = e[113];
        }
        let k;
        if (e[114] !== status) {
            k = status === "sending" ? <span className="sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-f159sx sand-1120s5i sand-135b78x sand-149ho13 sand-1izesbo sand-s0v71k" role="status"><W aria-hidden color="yellow" modifier="spin" name="loading" size="base"/><V1 size="md" weight="medium"><T_1 id="Sad2tK"/></V1></span> : <span className="sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-2lah0s sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-19aaqeu sand-1ciwos8" role="status"><span aria-hidden className={r_2("sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-xa9ouo")}/><V1 color="secondary" size="sm" weight="medium"><T_1 id="zovxVp"/></V1></span>;
            e[114] = status;
            e[115] = k;
        } else {
            k = e[115];
        }
        if (e[116] !== y || e[117] !== N || e[118] !== k) {
            se = <div className={y}>{N}{k}</div>;
            e[116] = y;
            e[117] = N;
            e[118] = k;
            e[119] = se;
        } else {
            se = e[119];
        }
        he = We;
        let C;
        if (e[120] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"
            };
            e[120] = C;
        } else {
            C = e[120];
        }
        let T;
        if (e[121] === Symbol.for("react.memo_cache_sentinel")) {
            T = {
                className: "sand-2lah0s"
            };
            e[121] = T;
        } else {
            T = e[121];
        }
        let I;
        if (e[122] === Symbol.for("react.memo_cache_sentinel")) {
            I = <V1 {...T} color="tertiary" size="sm"><T_1 id="ejVYRQ"/></V1>;
            e[122] = I;
        } else {
            I = e[122];
        }
        let V;
        if (e[123] === Symbol.for("react.memo_cache_sentinel")) {
            V = {
                className: "sand-euugli sand-j0a0fe"
            };
            e[123] = V;
        } else {
            V = e[123];
        }
        if (e[124] !== draft.from) {
            ae = <div {...C}>{I}<V1 {...V} color="secondary" size="lg">{draft.from}</V1></div>;
            e[124] = draft.from;
            e[125] = ae;
        } else {
            ae = e[125];
        }
        if (e[126] !== replyTo) {
            Y = replyTo != null ? <div className={r_2("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba")}><V1 className={r_2("sand-2lah0s")} color="tertiary" size="sm"><T_1 id="N+hFIL"/></V1><V1 className={r_2("sand-euugli sand-j0a0fe")} color="secondary" size="lg">{replyTo}</V1></div> : null;
            e[126] = replyTo;
            e[127] = Y;
        } else {
            Y = e[127];
        }
        let X;
        if (e[128] === Symbol.for("react.memo_cache_sentinel")) {
            X = r_2("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba");
            e[128] = X;
        } else {
            X = e[128];
        }
        let ne;
        if (e[129] === Symbol.for("react.memo_cache_sentinel")) {
            ne = r_2("sand-2lah0s");
            e[129] = ne;
        } else {
            ne = e[129];
        }
        let Se;
        if (e[130] === Symbol.for("react.memo_cache_sentinel")) {
            Se = <T_1 id="/jQctM"/>;
            e[130] = Se;
        } else {
            Se = e[130];
        }
        let S;
        if (e[131] !== ne) {
            S = <V1 className={ne} color="tertiary" size="sm">{Se}</V1>;
            e[131] = ne;
            e[132] = S;
        } else {
            S = e[132];
        }
        const M = r_2("sand-email-composer__input", o.className);
        const Je = !c;
        let Re;
        if (e[133] === Symbol.for("react.memo_cache_sentinel")) {
            Re = (G)=>setJ(G.currentTarget.value);
            e[133] = Re;
        } else {
            Re = e[133];
        }
        let ve;
        if (e[134] !== __1) {
            ve = __1({
                id: "WcgzjF"
            });
            e[134] = __1;
            e[135] = ve;
        } else {
            ve = e[135];
        }
        let ze;
        if (e[136] !== o || e[137] !== M || e[138] !== Je || e[139] !== ve || e[140] !== j) {
            ze = <input autoComplete="off" className={M} disabled={Je} onChange={Re} placeholder={ve} spellCheck={false} style={o.style} type="text" value={j}/>;
            e[136] = o;
            e[137] = M;
            e[138] = Je;
            e[139] = ve;
            e[140] = j;
            e[141] = ze;
        } else {
            ze = e[141];
        }
        if (e[142] !== X || e[143] !== S || e[144] !== ze) {
            J = <label className={X}>{S}{ze}</label>;
            e[142] = X;
            e[143] = S;
            e[144] = ze;
            e[145] = J;
        } else {
            J = e[145];
        }
        let Ve;
        if (e[146] === Symbol.for("react.memo_cache_sentinel")) {
            Ve = {
                className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba"
            };
            e[146] = Ve;
        } else {
            Ve = e[146];
        }
        let Xe;
        if (e[147] === Symbol.for("react.memo_cache_sentinel")) {
            Xe = {
                className: "sand-2lah0s"
            };
            e[147] = Xe;
        } else {
            Xe = e[147];
        }
        let Ge;
        if (e[148] === Symbol.for("react.memo_cache_sentinel")) {
            Ge = <V1 {...Xe} color="tertiary" size="sm"><T_1 id="RpYfjZ"/></V1>;
            e[148] = Ge;
        } else {
            Ge = e[148];
        }
        const Ue = !c;
        let Qe;
        if (e[149] === Symbol.for("react.memo_cache_sentinel")) {
            Qe = (G)=>setF(G.currentTarget.value);
            e[149] = Qe;
        } else {
            Qe = e[149];
        }
        if (e[150] !== f || e[151] !== o || e[152] !== Ue) {
            U = <label {...Ve}>{Ge}<input {...o} autoComplete="off" disabled={Ue} onChange={Qe} placeholder="name@example.com" spellCheck={false} type="text" value={f}/></label>;
            e[150] = f;
            e[151] = o;
            e[152] = Ue;
            e[153] = U;
        } else {
            U = e[153];
        }
        let _e;
        if (e[154] === Symbol.for("react.memo_cache_sentinel")) {
            _e = r_2("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba");
            e[154] = _e;
        } else {
            _e = e[154];
        }
        let qe;
        if (e[155] === Symbol.for("react.memo_cache_sentinel")) {
            qe = r_2("sand-2lah0s");
            e[155] = qe;
        } else {
            qe = e[155];
        }
        let Ze;
        if (e[156] === Symbol.for("react.memo_cache_sentinel")) {
            Ze = <T_1 id="UJmAAK"/>;
            e[156] = Ze;
        } else {
            Ze = e[156];
        }
        let we;
        if (e[157] !== qe) {
            we = <V1 className={qe} color="tertiary" size="sm">{Ze}</V1>;
            e[157] = qe;
            e[158] = we;
        } else {
            we = e[158];
        }
        let Ce;
        if (e[159] !== o) {
            Ce = r_2("sand-email-composer__input", o.className);
            e[159] = o;
            e[160] = Ce;
        } else {
            Ce = e[160];
        }
        const He = !c;
        let Fe;
        if (e[161] === Symbol.for("react.memo_cache_sentinel")) {
            Fe = (G)=>setU(G.currentTarget.value);
            e[161] = Fe;
        } else {
            Fe = e[161];
        }
        let Te;
        if (e[162] !== __1) {
            Te = __1({
                id: "UJmAAK"
            });
            e[162] = __1;
            e[163] = Te;
        } else {
            Te = e[163];
        }
        let Ie;
        if (e[164] !== o || e[165] !== u || e[166] !== Ce || e[167] !== He || e[168] !== Te) {
            Ie = <input autoComplete="off" className={Ce} disabled={He} onChange={Fe} placeholder={Te} spellCheck style={o.style} type="text" value={u}/>;
            e[164] = o;
            e[165] = u;
            e[166] = Ce;
            e[167] = He;
            e[168] = Te;
            e[169] = Ie;
        } else {
            Ie = e[169];
        }
        if (e[170] !== _e || e[171] !== we || e[172] !== Ie) {
            H = <label className={_e}>{we}{Ie}</label>;
            e[170] = _e;
            e[171] = we;
            e[172] = Ie;
            e[173] = H;
        } else {
            H = e[173];
        }
        fe = r_2(R.className);
        style = R.style;
        ye = ie ? <><p className={r_2("sand-10im51j sand-rxpjvj sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-j0a0fe sand-126k92a")}>{m}</p><span aria-hidden className={r_2("sand-10l6tqk sand-1o0tod sand-tijo5x sand-1ey2m1c sand-1vqgdyp sand-wsnlid sand-47corl")}/></> : <textarea aria-label={__1({
            id: "xDAtGP"
        })} autoComplete="off" className={r_2("sand-email-composer__body", _.className)} disabled={!c} onChange={(G)=>setM(G.currentTarget.value)} placeholder={__1({
            id: "eWlz27"
        })} rows={4} spellCheck style={_.style} value={m}/>;
        e[63] = __1;
        e[64] = m;
        e[65] = c;
        e[66] = L;
        e[67] = ref;
        e[68] = f;
        e[69] = cc;
        e[70] = draft.from;
        e[71] = le;
        e[72] = onSend;
        e[73] = to;
        e[74] = replyTo;
        e[75] = status;
        e[76] = u;
        e[77] = id;
        e[78] = j;
        e[79] = de;
        e[80] = Y;
        e[81] = J;
        e[82] = U;
        e[83] = H;
        e[84] = ce;
        e[85] = ee;
        e[86] = onKeyDown;
        e[87] = onSubmit;
        e[88] = se;
        e[89] = fe;
        e[90] = style;
        e[91] = ye;
        e[92] = he;
        e[93] = ae;
    } else {
        de = e[79];
        Y = e[80];
        J = e[81];
        U = e[82];
        H = e[83];
        ce = e[84];
        ee = e[85];
        onKeyDown = e[86];
        onSubmit = e[87];
        se = e[88];
        fe = e[89];
        style = e[90];
        ye = e[91];
        he = e[92];
        ae = e[93];
    }
    let pe;
    if (e[174] !== fe || e[175] !== style || e[176] !== ye) {
        pe = <div className={fe} style={style}>{ye}</div>;
        e[174] = fe;
        e[175] = style;
        e[176] = ye;
        e[177] = pe;
    } else {
        pe = e[177];
    }
    let je;
    if (e[178] !== __1 || e[179] !== c || e[180] !== le || e[181] !== de) {
        je = c && de ? <Oe onClick={()=>setLe(js)} rootStyle={oe.toggle} size="xs" type="button" variant="ghost" trailingIcon={le ? "chevron-up" : "chevron-down"}>{__1(le ? {
            id: "6lGV3K"
        } : {
            id: "fMPkxb"
        })}</Oe> : null;
        e[178] = __1;
        e[179] = c;
        e[180] = le;
        e[181] = de;
        e[182] = je;
    } else {
        je = e[182];
    }
    let ge;
    if (e[183] !== Y || e[184] !== J || e[185] !== U || e[186] !== H || e[187] !== pe || e[188] !== je || e[189] !== he || e[190] !== ae) {
        ge = <div {...he}>{ae}{Y}{J}{U}{H}{pe}{je}</div>;
        e[183] = Y;
        e[184] = J;
        e[185] = U;
        e[186] = H;
        e[187] = pe;
        e[188] = je;
        e[189] = he;
        e[190] = ae;
        e[191] = ge;
    } else {
        ge = e[191];
    }
    let Ae;
    if (e[192] === Symbol.for("react.memo_cache_sentinel")) {
        Ae = {
            className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-167g77z"
        };
        e[192] = Ae;
    } else {
        Ae = e[192];
    }
    let xe;
    if (e[193] !== c || e[194] !== footerAccessory) {
        xe = c && footerAccessory != null ? <span className="sand-11t971q">{footerAccessory}</span> : null;
        e[193] = c;
        e[194] = footerAccessory;
        e[195] = xe;
    } else {
        xe = e[195];
    }
    const Ye = !c;
    let rootStyle;
    if (e[196] === Symbol.for("react.memo_cache_sentinel")) {
        rootStyle = [
            aK.askCardButton,
            aK.askCardButtonTinted
        ];
        e[196] = rootStyle;
    } else {
        rootStyle = e[196];
    }
    let Pe;
    if (e[197] === Symbol.for("react.memo_cache_sentinel")) {
        Pe = <T_1 id="bzSI52"/>;
        e[197] = Pe;
    } else {
        Pe = e[197];
    }
    let be;
    if (e[198] !== onDiscard || e[199] !== Ye) {
        be = <Oe disabled={Ye} onClick={onDiscard} rootStyle={rootStyle} size="md" type="button" variant="outline">{Pe}</Oe>;
        e[198] = onDiscard;
        e[199] = Ye;
        e[200] = be;
    } else {
        be = e[200];
    }
    let Ne;
    if (e[201] !== L || e[202] !== status) {
        Ne = status === "sending" ? <Oe disabled rootStyle={[
            aK.askCardButton,
            oe.sendingButton
        ]} size="md" type="submit" variant="secondary" leadingIcon={{
            name: "loading",
            modifier: "spin"
        }}><T_1 id="Sad2tK"/></Oe> : <Oe tone="monochrome" disabled={!L} rootStyle={aK.askCardButton} size="md" type="submit" variant="primary"><T_1 id="65dxv8"/></Oe>;
        e[201] = L;
        e[202] = status;
        e[203] = Ne;
    } else {
        Ne = e[203];
    }
    let ke;
    if (e[204] !== xe || e[205] !== be || e[206] !== Ne) {
        ke = <div {...Ae}>{xe}{be}{Ne}</div>;
        e[204] = xe;
        e[205] = be;
        e[206] = Ne;
        e[207] = ke;
    } else {
        ke = e[207];
    }
    let Be;
    if (e[208] !== ce || e[209] !== ee || e[210] !== onKeyDown || e[211] !== onSubmit || e[212] !== se || e[213] !== ge || e[214] !== ke) {
        Be = <form aria-labelledby={ce} className={ee} onKeyDown={onKeyDown} onSubmit={onSubmit}>{se}{ge}{ke}</form>;
        e[208] = ce;
        e[209] = ee;
        e[210] = onKeyDown;
        e[211] = onSubmit;
        e[212] = se;
        e[213] = ge;
        e[214] = ke;
        e[215] = Be;
    } else {
        Be = e[215];
    }
    return Be;
}
function js(t) {
    return !t;
}
function gs(t, status, draft) {
    const recipient = draft.to[0] ?? "";
    switch(status){
        case "sent":
            return {
                dotStyle: oe.sentDot,
                label: t({
                    id: "h69WC6"
                }),
                summary: t({
                    id: "1isciF",
                    values: {
                        0: draft.subject,
                        recipient
                    }
                })
            };
        case "draft-created":
            return {
                dotStyle: oe.sentDot,
                label: t({
                    id: "2EhiTa"
                }),
                summary: t({
                    id: "sovQ2K",
                    values: {
                        0: draft.subject,
                        recipient
                    }
                })
            };
        case "discarded":
            return {
                dotStyle: oe.readyDot,
                label: t({
                    id: "rTjXfq"
                }),
                summary: t({
                    id: "AvK7yG",
                    values: {
                        0: draft.subject,
                        recipient
                    }
                })
            };
        case "unconfirmed":
            return {
                dotStyle: null,
                label: t({
                    id: "s2j1h7"
                }),
                summary: t({
                    id: "fuTgCk"
                })
            };
    }
}
function XsComponent(t) {
    XsComponent.d = 318;
    const e = c_1.c(31);
    const { entry, adjacency } = t;
    const { sendDraft, discardDraft } = bt();
    const agentId = an();
    const sessionId = b$(agentId);
    const entry_draftRouteVerified = entry.draftRouteVerified;
    let Q;
    if (e[0] !== entry.message.draft || e[1] !== entry_draftRouteVerified) {
        Q = entry_draftRouteVerified?.platform === "email" ? {
            ...entry.message.draft,
            from: entry_draftRouteVerified.sendingAddress
        } : entry.message.draft;
        e[0] = entry.message.draft;
        e[1] = entry_draftRouteVerified;
        e[2] = Q;
    } else {
        Q = e[2];
    }
    const draft = Q;
    const replyTo = entry_draftRouteVerified?.platform === "email" ? entry_draftRouteVerified.replyTo : undefined;
    let F;
    if (e[3] !== replyTo) {
        F = replyTo != null ? {
            replyTo
        } : {};
        e[3] = replyTo;
        e[4] = F;
    } else {
        F = e[4];
    }
    let g;
    if (e[5] !== agentId) {
        g = agentId == null ? {} : {
            footerAccessory: <D agentId={agentId}/>
        };
        e[5] = agentId;
        e[6] = g;
    } else {
        g = e[6];
    }
    let onDiscard;
    if (e[7] !== agentId || e[8] !== discardDraft || e[9] !== entry.id || e[10] !== sessionId) {
        onDiscard = ()=>{
            if (agentId != null) {
                discardDraft({
                    entryId: entry.id,
                    agentId,
                    ...sessionId.length > 0 ? {
                        sessionId
                    } : {}
                }).then(undefined, Ns);
            }
        };
        e[7] = agentId;
        e[8] = discardDraft;
        e[9] = entry.id;
        e[10] = sessionId;
        e[11] = onDiscard;
    } else {
        onDiscard = e[11];
    }
    let onSend;
    if (e[12] !== agentId || e[13] !== entry.id || e[14] !== sendDraft || e[15] !== sessionId) {
        onSend = (draft)=>{
            if (agentId != null) {
                sendDraft({
                    entryId: entry.id,
                    draft: {
                        type: "email-draft",
                        draft
                    },
                    agentId,
                    ...sessionId.length > 0 ? {
                        sessionId
                    } : {}
                }).then(undefined, bs);
            }
        };
        e[12] = agentId;
        e[13] = entry.id;
        e[14] = sendDraft;
        e[15] = sessionId;
        e[16] = onSend;
    } else {
        onSend = e[16];
    }
    const status = entry.draftSendState ?? "editable";
    let u;
    if (e[17] !== draft || e[18] !== F || e[19] !== g || e[20] !== onDiscard || e[21] !== onSend || e[22] !== status) {
        u = <DsComponent draft={draft} {...F} {...g} onDiscard={onDiscard} onSend={onSend} status={status}/>;
        e[17] = draft;
        e[18] = F;
        e[19] = g;
        e[20] = onDiscard;
        e[21] = onSend;
        e[22] = status;
        e[23] = u;
    } else {
        u = e[23];
    }
    let O;
    if (e[24] !== adjacency.isGroupStart || e[25] !== entry.timestampMs || e[26] !== u) {
        O = <Us className="sand-email-composer-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{u}</Us>;
        e[24] = adjacency.isGroupStart;
        e[25] = entry.timestampMs;
        e[26] = u;
        e[27] = O;
    } else {
        O = e[27];
    }
    let m;
    if (e[28] !== entry || e[29] !== O) {
        m = <Ys entry={entry}>{O}</Ys>;
        e[28] = entry;
        e[29] = O;
        e[30] = m;
    } else {
        m = e[30];
    }
    return m;
}
function bs(t) {
    d0(t, {
        tags: {
            sand_area: "draft-card-email"
        }
    });
}
function Ns(t) {
    d0(t, {
        tags: {
            sand_area: "draft-card-email"
        }
    });
}
export { XsComponent as default };
