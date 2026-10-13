import { c, u as u_1, r as r_1, p, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { u as u_2, r as r_2, aK, f as Zs, bt, b$, d0 } from "./index.eager-app-Cj5f8Gby.js";
import { aY as B1 } from "./index.eager-platform-Dcfeegfw.js";
import { W as W_1, g as Xs1, an, a5 as Ps, a6 as $s } from "./index-ZYxf-aBb.js";
import { i, D } from "./chunk-composer-body-lines-BeTmrnKG.js";
import { b, S } from "./chunk-settled-message-card-BSNKlGh6.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "0f64db26-2293-401a-9dda-a5fbae41fc09";
            e._sentryDebugIdIdentifier = "sentry-dbid-0f64db26-2293-401a-9dda-a5fbae41fc09";
        }
    } catch (e) {}
})();
const Ns = {
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
function QsComponent(r) {
    QsComponent.d = 516;
    const s = c.c(133);
    const { draft, status, onSend, onDiscard, footerAccessory } = r;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const [l, setL] = r_1.useState(draft.body);
    const [u, setU] = r_1.useState(false);
    const id = r_1.useId();
    const ref = u_2(id);
    if (status !== "editable" && status !== "sending") {
        let I;
        if (s[0] !== __2 || s[1] !== draft || s[2] !== status) {
            I = Fs(__2, status, draft);
            s[0] = __2;
            s[1] = draft;
            s[2] = status;
            s[3] = I;
        } else {
            I = s[3];
        }
        const { label, showStatusDot, summary, tone } = I;
        let leading;
        if (s[4] === Symbol.for("react.memo_cache_sentinel")) {
            leading = <Zs name="slack" sizePx={20}/>;
            s[4] = leading;
        } else {
            leading = s[4];
        }
        let title;
        if (s[5] === Symbol.for("react.memo_cache_sentinel")) {
            title = <T id="bCu1pq"/>;
            s[5] = title;
        } else {
            title = s[5];
        }
        let k;
        if (s[6] !== label || s[7] !== showStatusDot || s[8] !== summary || s[9] !== tone) {
            k = <S leading={leading} showStatusDot={showStatusDot} status={label} summary={summary} title={title} tone={tone}/>;
            s[6] = label;
            s[7] = showStatusDot;
            s[8] = summary;
            s[9] = tone;
            s[10] = k;
        } else {
            k = s[10];
        }
        return k;
    }
    const d = status === "editable";
    let x;
    if (s[11] !== l || s[12] !== d) {
        x = d && l.trim().length > 0;
        s[11] = l;
        s[12] = d;
        s[13] = x;
    } else {
        x = s[13];
    }
    const m = x;
    let h;
    let M;
    let v;
    let onSubmit;
    let z;
    let B;
    let E;
    let P;
    let $;
    let L;
    let w;
    let _;
    let q;
    if (s[14] !== __1 || s[15] !== l || s[16] !== d || s[17] !== m || s[18] !== ref || s[19] !== draft.target || s[20] !== draft.thread || s[21] !== draft.workspace || s[22] !== u || s[23] !== onSend || s[24] !== status || s[25] !== id) {
        h = i(l);
        const I = d && h && !u;
        const X = {
            className: "sand-euugli sand-1q4ynmn sand-1ua6jya sand-b3r6kr"
        };
        const Z = {
            0: {
                className: "sand-euugli sand-1edz59j"
            },
            1: {
                className: "sand-euugli sand-1edz59j sand-1n2onr6 sand-1vke2v8 sand-b3r6kr"
            }
        }[!!I << 0];
        const O = {
            className: "sand-1lliihq sand-h8yej3 sand-euugli sand-1edz59j sand-5f5z56 sand-9f619 sand-tt52l0 sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-ng3xce sand-jbqb8w sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-1t137rt sand-j0a0fe sand-126k92a sand-ompknl"
        };
        let C;
        if (s[39] !== l || s[40] !== m || s[41] !== draft.target || s[42] !== draft.thread || s[43] !== draft.workspace || s[44] !== onSend) {
            C = (Cs)=>{
                Cs.preventDefault();
                if (m) {
                    onSend({
                        ...draft.workspace == null ? {} : {
                            workspace: draft.workspace
                        },
                        target: draft.target,
                        ...draft.thread == null ? {} : {
                            thread: draft.thread
                        },
                        body: l
                    });
                }
            };
            s[39] = l;
            s[40] = m;
            s[41] = draft.target;
            s[42] = draft.thread;
            s[43] = draft.workspace;
            s[44] = onSend;
            s[45] = C;
        } else {
            C = s[45];
        }
        const Q = C;
        M = id;
        if (s[46] === Symbol.for("react.memo_cache_sentinel")) {
            v = r_2("sand-slack-composer", p(aK.transcriptWidget, Ns.card).className);
            s[46] = v;
        } else {
            v = s[46];
        }
        onSubmit = Q;
        let y;
        let k;
        let ps;
        if (s[47] === Symbol.for("react.memo_cache_sentinel")) {
            y = r_2("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli");
            k = {
                className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-1iyjqo2 sand-s83m0k sand-euugli"
            };
            ps = <Zs name="slack" sizePx={20}/>;
            s[47] = y;
            s[48] = k;
            s[49] = ps;
        } else {
            y = s[47];
            k = s[48];
            ps = s[49];
        }
        let Y;
        if (s[50] === Symbol.for("react.memo_cache_sentinel")) {
            Y = r_2("sand-1iyjqo2 sand-s83m0k sand-euugli sand-j0a0fe");
            s[50] = Y;
        } else {
            Y = s[50];
        }
        let ys;
        if (s[51] === Symbol.for("react.memo_cache_sentinel")) {
            ys = <T id="bCu1pq"/>;
            s[51] = ys;
        } else {
            ys = s[51];
        }
        let H;
        if (s[52] !== ref || s[53] !== Y || s[54] !== id) {
            H = <span {...k}>{ps}<B1 className={Y} id={id} ref={ref} size="lg" weight="medium">{ys}</B1></span>;
            s[52] = ref;
            s[53] = Y;
            s[54] = id;
            s[55] = H;
        } else {
            H = s[55];
        }
        let U;
        if (s[56] !== status) {
            U = status === "sending" ? <span className="sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-1nn3v0j sand-f159sx sand-1120s5i sand-135b78x sand-149ho13 sand-1izesbo sand-s0v71k" role="status"><W_1 aria-hidden color="yellow" modifier="spin" name="loading" size="base"/><B1 size="md" weight="medium"><T id="Sad2tK"/></B1></span> : <span className="sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-2lah0s sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-19aaqeu sand-1ciwos8" role="status"><span aria-hidden className={r_2("sand-1v4s8kt sand-ols6we sand-149ho13 sand-2lah0s sand-xa9ouo")}/><B1 color="secondary" size="sm" weight="medium"><T id="zovxVp"/></B1></span>;
            s[56] = status;
            s[57] = U;
        } else {
            U = s[57];
        }
        if (s[58] !== y || s[59] !== H || s[60] !== U) {
            z = <div className={y}>{H}{U}</div>;
            s[58] = y;
            s[59] = H;
            s[60] = U;
            s[61] = z;
        } else {
            z = s[61];
        }
        $ = r_2(X.className);
        L = X.style;
        if (s[62] !== draft.workspace) {
            w = draft.workspace != null ? <div className={r_2("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba")}><B1 className={r_2("sand-2lah0s")} color="tertiary" size="sm"><T id="pmUArF"/></B1><B1 className={r_2("sand-euugli sand-j0a0fe")} color="secondary" size="lg">{draft.workspace}</B1></div> : null;
            s[62] = draft.workspace;
            s[63] = w;
        } else {
            w = s[63];
        }
        let J;
        if (s[64] === Symbol.for("react.memo_cache_sentinel")) {
            J = r_2("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba");
            s[64] = J;
        } else {
            J = s[64];
        }
        let ss;
        if (s[65] === Symbol.for("react.memo_cache_sentinel")) {
            ss = r_2("sand-2lah0s");
            s[65] = ss;
        } else {
            ss = s[65];
        }
        let gs;
        if (s[66] === Symbol.for("react.memo_cache_sentinel")) {
            gs = <T id="/jQctM"/>;
            s[66] = gs;
        } else {
            gs = s[66];
        }
        let es;
        if (s[67] !== ss) {
            es = <B1 className={ss} color="tertiary" size="sm">{gs}</B1>;
            s[67] = ss;
            s[68] = es;
        } else {
            es = s[68];
        }
        let as;
        if (s[69] === Symbol.for("react.memo_cache_sentinel")) {
            as = r_2("sand-euugli sand-j0a0fe");
            s[69] = as;
        } else {
            as = s[69];
        }
        let ts;
        if (s[70] !== draft.target || s[71] !== as) {
            ts = <B1 className={as} color="secondary" size="lg">{draft.target}</B1>;
            s[70] = draft.target;
            s[71] = as;
            s[72] = ts;
        } else {
            ts = s[72];
        }
        if (s[73] !== J || s[74] !== es || s[75] !== ts) {
            _ = <div className={J}>{es}{ts}</div>;
            s[73] = J;
            s[74] = es;
            s[75] = ts;
            s[76] = _;
        } else {
            _ = s[76];
        }
        let ns;
        if (s[77] === Symbol.for("react.memo_cache_sentinel")) {
            ns = r_2("sand-78zum5 sand-6s0dn4 sand-167g77z sand-euugli sand-m7lytj sand-2vl965 sand-1ykpatu sand-e2zdcy sand-so031l sand-1q0q8m5 sand-17fyfba");
            s[77] = ns;
        } else {
            ns = s[77];
        }
        let ds;
        if (s[78] === Symbol.for("react.memo_cache_sentinel")) {
            ds = r_2("sand-2lah0s");
            s[78] = ds;
        } else {
            ds = s[78];
        }
        let js;
        if (s[79] === Symbol.for("react.memo_cache_sentinel")) {
            js = <T id="e66y2Z"/>;
            s[79] = js;
        } else {
            js = s[79];
        }
        let ls;
        if (s[80] !== ds) {
            ls = <B1 className={ds} color="tertiary" size="sm">{js}</B1>;
            s[80] = ds;
            s[81] = ls;
        } else {
            ls = s[81];
        }
        let rs;
        if (s[82] === Symbol.for("react.memo_cache_sentinel")) {
            rs = r_2("sand-euugli sand-j0a0fe");
            s[82] = rs;
        } else {
            rs = s[82];
        }
        let is;
        if (s[83] !== __1 || s[84] !== draft.thread) {
            is = draft.thread == null ? __1({
                id: "mTBAsF"
            }) : __1({
                id: "qVdt3Y",
                values: {
                    0: draft.thread
                }
            });
            s[83] = __1;
            s[84] = draft.thread;
            s[85] = is;
        } else {
            is = s[85];
        }
        let cs;
        if (s[86] !== rs || s[87] !== is) {
            cs = <B1 className={rs} color="secondary" size="lg">{is}</B1>;
            s[86] = rs;
            s[87] = is;
            s[88] = cs;
        } else {
            cs = s[88];
        }
        if (s[89] !== ns || s[90] !== ls || s[91] !== cs) {
            q = <div className={ns}>{ls}{cs}</div>;
            s[89] = ns;
            s[90] = ls;
            s[91] = cs;
            s[92] = q;
        } else {
            q = s[92];
        }
        B = r_2(Z.className);
        E = Z.style;
        P = I ? <><p className={r_2("sand-10im51j sand-rxpjvj sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy sand-1wd3ewq sand-jb2p0i sand-fc7y3v sand-1yxxptd sand-j0a0fe sand-126k92a")}>{l}</p><span aria-hidden className={r_2("sand-10l6tqk sand-1o0tod sand-tijo5x sand-1ey2m1c sand-1vqgdyp sand-wsnlid sand-47corl")}/></> : <textarea aria-label={__1({
            id: "xDAtGP"
        })} autoComplete="off" className={r_2("sand-slack-composer__body", O.className)} disabled={!d} onChange={(Ss)=>setL(Ss.currentTarget.value)} placeholder={__1({
            id: "eWlz27"
        })} rows={4} spellCheck style={O.style} value={l}/>;
        s[14] = __1;
        s[15] = l;
        s[16] = d;
        s[17] = m;
        s[18] = ref;
        s[19] = draft.target;
        s[20] = draft.thread;
        s[21] = draft.workspace;
        s[22] = u;
        s[23] = onSend;
        s[24] = status;
        s[25] = id;
        s[26] = h;
        s[27] = M;
        s[28] = v;
        s[29] = onSubmit;
        s[30] = z;
        s[31] = B;
        s[32] = E;
        s[33] = P;
        s[34] = $;
        s[35] = L;
        s[36] = w;
        s[37] = _;
        s[38] = q;
    } else {
        h = s[26];
        M = s[27];
        v = s[28];
        onSubmit = s[29];
        z = s[30];
        B = s[31];
        E = s[32];
        P = s[33];
        $ = s[34];
        L = s[35];
        w = s[36];
        _ = s[37];
        q = s[38];
    }
    let V;
    if (s[93] !== B || s[94] !== E || s[95] !== P) {
        V = <div className={B} style={E}>{P}</div>;
        s[93] = B;
        s[94] = E;
        s[95] = P;
        s[96] = V;
    } else {
        V = s[96];
    }
    let W;
    if (s[97] !== __1 || s[98] !== d || s[99] !== u || s[100] !== h) {
        W = d && h ? <Xs1 onClick={()=>setU(Rs)} rootStyle={Ns.toggle} size="xs" type="button" variant="ghost" trailingIcon={u ? "chevron-up" : "chevron-down"}>{__1(u ? {
            id: "6lGV3K"
        } : {
            id: "fMPkxb"
        })}</Xs1> : null;
        s[97] = __1;
        s[98] = d;
        s[99] = u;
        s[100] = h;
        s[101] = W;
    } else {
        W = s[101];
    }
    let A;
    if (s[102] !== V || s[103] !== W || s[104] !== $ || s[105] !== L || s[106] !== w || s[107] !== _ || s[108] !== q) {
        A = <div className={$} style={L}>{w}{_}{q}{V}{W}</div>;
        s[102] = V;
        s[103] = W;
        s[104] = $;
        s[105] = L;
        s[106] = w;
        s[107] = _;
        s[108] = q;
        s[109] = A;
    } else {
        A = s[109];
    }
    let ms;
    if (s[110] === Symbol.for("react.memo_cache_sentinel")) {
        ms = {
            className: "sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-167g77z"
        };
        s[110] = ms;
    } else {
        ms = s[110];
    }
    let R;
    if (s[111] !== d || s[112] !== footerAccessory) {
        R = d && footerAccessory != null ? <span className="sand-11t971q">{footerAccessory}</span> : null;
        s[111] = d;
        s[112] = footerAccessory;
        s[113] = R;
    } else {
        R = s[113];
    }
    const disabled = !d;
    let rootStyle;
    if (s[114] === Symbol.for("react.memo_cache_sentinel")) {
        rootStyle = [
            aK.askCardButton,
            aK.askCardButtonTinted
        ];
        s[114] = rootStyle;
    } else {
        rootStyle = s[114];
    }
    let fs;
    if (s[115] === Symbol.for("react.memo_cache_sentinel")) {
        fs = <T id="bzSI52"/>;
        s[115] = fs;
    } else {
        fs = s[115];
    }
    let F;
    if (s[116] !== onDiscard || s[117] !== disabled) {
        F = <Xs1 disabled={disabled} onClick={onDiscard} rootStyle={rootStyle} size="md" type="button" variant="outline">{fs}</Xs1>;
        s[116] = onDiscard;
        s[117] = disabled;
        s[118] = F;
    } else {
        F = s[118];
    }
    let G;
    if (s[119] !== m || s[120] !== status) {
        G = status === "sending" ? <Xs1 disabled rootStyle={[
            aK.askCardButton,
            Ns.sendingButton
        ]} size="md" type="submit" variant="secondary" leadingIcon={{
            name: "loading",
            modifier: "spin"
        }}><T id="Sad2tK"/></Xs1> : <Xs1 tone="monochrome" disabled={!m} rootStyle={aK.askCardButton} size="md" type="submit" variant="primary"><T id="pi1oME"/></Xs1>;
        s[119] = m;
        s[120] = status;
        s[121] = G;
    } else {
        G = s[121];
    }
    let K;
    if (s[122] !== R || s[123] !== F || s[124] !== G) {
        K = <div {...ms}>{R}{F}{G}</div>;
        s[122] = R;
        s[123] = F;
        s[124] = G;
        s[125] = K;
    } else {
        K = s[125];
    }
    let hs;
    if (s[126] !== M || s[127] !== v || s[128] !== onSubmit || s[129] !== z || s[130] !== A || s[131] !== K) {
        hs = <form aria-labelledby={M} className={v} onSubmit={onSubmit}>{z}{A}{K}</form>;
        s[126] = M;
        s[127] = v;
        s[128] = onSubmit;
        s[129] = z;
        s[130] = A;
        s[131] = K;
        s[132] = hs;
    } else {
        hs = s[132];
    }
    return hs;
}
function Rs(r) {
    return !r;
}
function Fs(r, status, draft) {
    const firstLine = b(draft.body);
    switch(status){
        case "sent":
            return {
                label: r({
                    id: "h69WC6"
                }),
                showStatusDot: true,
                summary: r({
                    id: "p0Rg3/",
                    values: {
                        0: draft.target,
                        firstLine
                    }
                }),
                tone: "success"
            };
        case "draft-created":
            return {
                label: r({
                    id: "2EhiTa"
                }),
                showStatusDot: true,
                summary: r({
                    id: "MXL9r5",
                    values: {
                        0: draft.target,
                        firstLine
                    }
                }),
                tone: "success"
            };
        case "discarded":
            return {
                label: r({
                    id: "rTjXfq"
                }),
                showStatusDot: true,
                summary: r({
                    id: "sdHT+L",
                    values: {
                        0: draft.target,
                        firstLine
                    }
                }),
                tone: "neutral"
            };
        case "unconfirmed":
            return {
                label: r({
                    id: "s2j1h7"
                }),
                showStatusDot: false,
                summary: r({
                    id: "gt5MpL"
                }),
                tone: "neutral"
            };
    }
}
function GsComponent(r) {
    GsComponent.d = 326;
    const s = c.c(32);
    const { entry, adjacency } = r;
    const { sendDraft, discardDraft } = bt();
    const agentId = an();
    const sessionId = b$(agentId);
    const entry_draftRouteVerified = entry.draftRouteVerified;
    let draft = entry.message.draft;
    if (entry_draftRouteVerified?.platform === "slack") {
        let m;
        if (s[0] !== entry.message.draft.body || s[1] !== entry_draftRouteVerified.channelName || s[2] !== entry_draftRouteVerified.workspace) {
            m = {
                workspace: entry_draftRouteVerified.workspace,
                target: entry_draftRouteVerified.channelName,
                body: entry.message.draft.body
            };
            s[0] = entry.message.draft.body;
            s[1] = entry_draftRouteVerified.channelName;
            s[2] = entry_draftRouteVerified.workspace;
            s[3] = m;
        } else {
            m = s[3];
        }
        draft = m;
        if (entry_draftRouteVerified.thread != null) {
            let h;
            if (s[4] !== draft || s[5] !== entry_draftRouteVerified.thread) {
                h = {
                    ...draft,
                    thread: entry_draftRouteVerified.thread
                };
                s[4] = draft;
                s[5] = entry_draftRouteVerified.thread;
                s[6] = h;
            } else {
                h = s[6];
            }
            draft = h;
        }
    }
    let N;
    if (s[7] !== agentId) {
        N = agentId == null ? {} : {
            footerAccessory: <D agentId={agentId}/>
        };
        s[7] = agentId;
        s[8] = N;
    } else {
        N = s[8];
    }
    let onDiscard;
    if (s[9] !== agentId || s[10] !== discardDraft || s[11] !== entry.id || s[12] !== sessionId) {
        onDiscard = ()=>{
            if (agentId != null) {
                discardDraft({
                    entryId: entry.id,
                    agentId,
                    ...sessionId.length > 0 ? {
                        sessionId
                    } : {}
                }).then(undefined, Xs);
            }
        };
        s[9] = agentId;
        s[10] = discardDraft;
        s[11] = entry.id;
        s[12] = sessionId;
        s[13] = onDiscard;
    } else {
        onDiscard = s[13];
    }
    let onSend;
    if (s[14] !== agentId || s[15] !== entry.id || s[16] !== sendDraft || s[17] !== sessionId) {
        onSend = (draft_1)=>{
            if (agentId != null) {
                sendDraft({
                    entryId: entry.id,
                    draft: {
                        type: "slack-draft",
                        draft: draft_1
                    },
                    agentId,
                    ...sessionId.length > 0 ? {
                        sessionId
                    } : {}
                }).then(undefined, Ks);
            }
        };
        s[14] = agentId;
        s[15] = entry.id;
        s[16] = sendDraft;
        s[17] = sessionId;
        s[18] = onSend;
    } else {
        onSend = s[18];
    }
    const status = entry.draftSendState ?? "editable";
    let f;
    if (s[19] !== draft || s[20] !== N || s[21] !== onDiscard || s[22] !== onSend || s[23] !== status) {
        f = <QsComponent draft={draft} {...N} onDiscard={onDiscard} onSend={onSend} status={status}/>;
        s[19] = draft;
        s[20] = N;
        s[21] = onDiscard;
        s[22] = onSend;
        s[23] = status;
        s[24] = f;
    } else {
        f = s[24];
    }
    let d;
    if (s[25] !== adjacency.isGroupStart || s[26] !== entry.timestampMs || s[27] !== f) {
        d = <Ps className="sand-slack-composer-wrap" isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="question">{f}</Ps>;
        s[25] = adjacency.isGroupStart;
        s[26] = entry.timestampMs;
        s[27] = f;
        s[28] = d;
    } else {
        d = s[28];
    }
    let x;
    if (s[29] !== entry || s[30] !== d) {
        x = <$s entry={entry}>{d}</$s>;
        s[29] = entry;
        s[30] = d;
        s[31] = x;
    } else {
        x = s[31];
    }
    return x;
}
function Ks(r) {
    d0(r, {
        tags: {
            sand_area: "draft-card-slack"
        }
    });
}
function Xs(r) {
    d0(r, {
        tags: {
            sand_area: "draft-card-slack"
        }
    });
}
export { GsComponent as default };
