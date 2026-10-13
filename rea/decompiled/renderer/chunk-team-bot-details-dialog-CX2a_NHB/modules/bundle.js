import { c as c_1, u as u_1, r as r_1, p as p_1, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { eY, fI as maxLength, a_, a$, cw, c$, cq, cr, fJ, d0, aP as Cs1, f as Is, bc, b7, dC, fx, cg, fK, d2 } from "./index.eager-app-Cj5f8Gby.js";
import { a_ as Vs } from "./index.eager-platform-Dcfeegfw.js";
import { x as x_1, J, p as Us, bQ as Hs, W, bw, bL, bR } from "./index-ZYxf-aBb.js";
import { T as T_2, G } from "./chunk-team-bot-plugins-dialog-D6-x2Byv.js";
import { a as St1, T as T_3 } from "./chunk-team-bot-context-dialog-9mLHC6gW.js";
import { e as e_1 } from "./index.eager-common-CdCvBQNJ.js";
import { u as u_2, W as W_2 } from "./chunk-wipe-navigation-B3wgZxtA.js";
import { r as r_2 } from "./chunk-bot-template-details-focus-BkZ83BHB.js";
import { c as c_2, T as T_4, O, b as Ct1, a as Mt1 } from "./chunk-team-bot-setup-grid-Bn3gQfbU.js";
import { d as Ft, T as T_5, P, M, e as Kt, A, D, f as Ue, b as b_1 } from "./chunk-team-bot-details-rows-zXlABTd_.js";
import { g } from "./chunk-get-file-icon-ZAkFyGfn.js";
import { a as Hs1 } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import { u as u_3, a as Xt } from "./chunk-grok-bot-slack-dialog-live-CcLC4Tfx.js";
import { T as T_6 } from "./chunk-team-setup-new-secret-dialog-BMvn0nac.js";
import { u as u_4 } from "./chunk-use-team-bot-access-BG6AYhPN.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "058bba05-724c-4f8c-a44a-13ccbf8f6c27";
            e._sentryDebugIdIdentifier = "sentry-dbid-058bba05-724c-4f8c-a44a-13ccbf8f6c27";
        }
    } catch (e) {}
})();
const rs = {
    error: {
        kMwMTN: "sand-6rl5ky",
        $$css: true
    },
    fieldFooter: {
        k1xSpc: "sand-78zum5",
        kjj79g: "sand-1qughib",
        kOIVth: "sand-167g77z",
        $$css: true
    }
};
const gs = 140;
function vt(r, description) {
    const n = r.description.trim();
    return {
        isNameEmpty: r.name.trim().length === 0,
        isDescriptionTooLong: n !== description.trim() && n.length > gs
    };
}
function Js1Component(r) {
    Js1Component.d = 987;
    const e = c_1.c(60);
    const { draft, problems, onChange, failure } = r;
    const { _: __1 } = u_1();
    const d = r_1.useId();
    const c = r_1.useId();
    let o;
    let j;
    if (e[0] !== draft.description) {
        const R = eY();
        o = draft.description.trim().length.toLocaleString(R);
        j = gs.toLocaleString(R);
        e[0] = draft.description;
        e[1] = o;
        e[2] = j;
    } else {
        o = e[1];
        j = e[2];
    }
    const S = j;
    let f;
    let k;
    let g;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            className: "sand-78zum5 sand-dt5ytf sand-1af02g3"
        };
        k = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-1wm8ruf"
        };
        g = <T_1 id="6YtxFj"/>;
        e[3] = f;
        e[4] = k;
        e[5] = g;
    } else {
        f = e[3];
        k = e[4];
        g = e[5];
    }
    const x = problems.isNameEmpty ? d : undefined;
    const problems_isNameEmpty = problems.isNameEmpty;
    let u;
    if (e[6] !== __1) {
        u = __1({
            id: "RFtRvq"
        });
        e[6] = __1;
        e[7] = u;
    } else {
        u = e[7];
    }
    let w;
    if (e[8] !== draft || e[9] !== onChange) {
        w = (R)=>onChange({
                ...draft,
                name: R.currentTarget.value
            });
        e[8] = draft;
        e[9] = onChange;
        e[10] = w;
    } else {
        w = e[10];
    }
    const draft_name = draft.name;
    let A;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        A = {
            className: "sand-9f619 sand-h8yej3 sand-1wxaq2x sand-889kno sand-pdmqnj sand-1a8lsjc sand-1g0dm76 sand-c342km sand-hojbe8 sand-1b8i4yy sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k"
        };
        e[11] = A;
    } else {
        A = e[11];
    }
    let T;
    if (e[12] !== draft.name || e[13] !== problems.isNameEmpty || e[14] !== x || e[15] !== u || e[16] !== w) {
        T = <input aria-describedby={x} aria-invalid={problems_isNameEmpty} aria-label={u} maxLength={maxLength} onChange={w} value={draft_name} {...A}/>;
        e[12] = draft.name;
        e[13] = problems.isNameEmpty;
        e[14] = x;
        e[15] = u;
        e[16] = w;
        e[17] = T;
    } else {
        T = e[17];
    }
    let E;
    if (e[18] !== d || e[19] !== problems.isNameEmpty) {
        E = problems.isNameEmpty ? <span id={d} {...p_1(a_.body2, rs.error)}><T_1 id="Lf9rlW"/></span> : null;
        e[18] = d;
        e[19] = problems.isNameEmpty;
        e[20] = E;
    } else {
        E = e[20];
    }
    let z;
    if (e[21] !== T || e[22] !== E) {
        z = <label {...k}>{g}{T}{E}</label>;
        e[21] = T;
        e[22] = E;
        e[23] = z;
    } else {
        z = e[23];
    }
    let b;
    let y;
    if (e[24] === Symbol.for("react.memo_cache_sentinel")) {
        b = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-1wm8ruf"
        };
        y = <T_1 id="Nu4oKW"/>;
        e[24] = b;
        e[25] = y;
    } else {
        b = e[24];
        y = e[25];
    }
    const problems_isDescriptionTooLong = problems.isDescriptionTooLong;
    let N;
    if (e[26] !== __1) {
        N = __1({
            id: "NDq8h1"
        });
        e[26] = __1;
        e[27] = N;
    } else {
        N = e[27];
    }
    let C;
    if (e[28] !== draft || e[29] !== onChange) {
        C = (R)=>onChange({
                ...draft,
                description: R.currentTarget.value
            });
        e[28] = draft;
        e[29] = onChange;
        e[30] = C;
    } else {
        C = e[30];
    }
    const draft_description = draft.description;
    let _;
    if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
        _ = {
            className: "sand-9f619 sand-h8yej3 sand-889kno sand-pdmqnj sand-1a8lsjc sand-1g0dm76 sand-c342km sand-hojbe8 sand-1b8i4yy sand-tyxrsu sand-jb2p0i sand-11wthnw sand-1k57tk5 sand-784prv sand-1t137rt sand-9v5kkp sand-4sht9k sand-6lgdlw sand-tt52l0"
        };
        e[31] = _;
    } else {
        _ = e[31];
    }
    let V;
    if (e[32] !== c || e[33] !== draft.description || e[34] !== problems.isDescriptionTooLong || e[35] !== N || e[36] !== C) {
        V = <textarea aria-describedby={c} aria-invalid={problems_isDescriptionTooLong} aria-label={N} onChange={C} value={draft_description} {..._}/>;
        e[32] = c;
        e[33] = draft.description;
        e[34] = problems.isDescriptionTooLong;
        e[35] = N;
        e[36] = C;
        e[37] = V;
    } else {
        V = e[37];
    }
    let P;
    if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
        P = p_1(a_.body2, rs.fieldFooter);
        e[38] = P;
    } else {
        P = e[38];
    }
    let G;
    if (e[39] !== problems.isDescriptionTooLong) {
        G = problems.isDescriptionTooLong ? <span className="sand-6rl5ky"><T_1 id="k5X50P"/></span> : null;
        e[39] = problems.isDescriptionTooLong;
        e[40] = G;
    } else {
        G = e[40];
    }
    let O;
    if (e[41] !== problems.isDescriptionTooLong) {
        O = ({
            0: {
                className: "sand-vc5jky sand-169k319 sand-ss6m8b"
            },
            1: {
                className: "sand-vc5jky sand-ss6m8b sand-6rl5ky"
            }
        })[!!problems.isDescriptionTooLong << 0];
        e[41] = problems.isDescriptionTooLong;
        e[42] = O;
    } else {
        O = e[42];
    }
    let X;
    if (e[43] !== o || e[44] !== S || e[45] !== O) {
        X = <span {...O}>{o}/{S}</span>;
        e[43] = o;
        e[44] = S;
        e[45] = O;
        e[46] = X;
    } else {
        X = e[46];
    }
    let U;
    if (e[47] !== c || e[48] !== G || e[49] !== X) {
        U = <span id={c} {...P}>{G}{X}</span>;
        e[47] = c;
        e[48] = G;
        e[49] = X;
        e[50] = U;
    } else {
        U = e[50];
    }
    let q;
    if (e[51] !== V || e[52] !== U) {
        q = <label {...b}>{y}{V}{U}</label>;
        e[51] = V;
        e[52] = U;
        e[53] = q;
    } else {
        q = e[53];
    }
    let F;
    if (e[54] !== failure) {
        F = failure ? <div role="alert" {...p_1(a_.body2, rs.error)}><T_1 id="uSuoHw"/></div> : null;
        e[54] = failure;
        e[55] = F;
    } else {
        F = e[55];
    }
    let v;
    if (e[56] !== z || e[57] !== q || e[58] !== F) {
        v = <div {...f}>{z}{q}{F}</div>;
        e[56] = z;
        e[57] = q;
        e[58] = F;
        e[59] = v;
    } else {
        v = e[59];
    }
    return v;
}
const ms = {
    title: {
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-tyxrsu",
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
    }
};
function Xs1Component(r) {
    Xs1Component.d = 995;
    const e = c_1.c(12);
    const { template, description, detailsStatus } = r;
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-195vfkc sand-1y1aw1k sand-wib8y2"
        };
        e[0] = l;
    } else {
        l = e[0];
    }
    let a;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        a = [
            a_.heading3,
            a$.medium,
            ms.title
        ];
        e[1] = a;
    } else {
        a = e[1];
    }
    let d;
    if (e[2] !== template.name) {
        d = <x_1.Title style={a}>{template.name}</x_1.Title>;
        e[2] = template.name;
        e[3] = d;
    } else {
        d = e[3];
    }
    let c;
    if (e[4] !== description) {
        c = description.length > 0 ? <div className="sand-2lah0s sand-1iorvi4"><x_1.Description style={[
            a_.body1,
            ms.description
        ]}>{description}</x_1.Description></div> : null;
        e[4] = description;
        e[5] = c;
    } else {
        c = e[5];
    }
    let o;
    if (e[6] !== detailsStatus) {
        o = detailsStatus == null ? null : <div className="sand-889kno"><div {...{
            0: {
                className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-1b8i4yy sand-4on0b6"
            },
            1: {
                className: "sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-1nn3v0j sand-f159sx sand-1120s5i sand-mzvs34 sand-149ho13 sand-yjcdl2 sand-1le6hhr"
            }
        }[(detailsStatus === "published") << 0]}><span aria-hidden {...{
            0: {
                className: "sand-1v4s8kt sand-ols6we sand-2lah0s sand-149ho13 sand-3zn3jg"
            },
            1: {
                className: "sand-1v4s8kt sand-ols6we sand-2lah0s sand-149ho13 sand-1rm5x0x"
            }
        }[(detailsStatus === "published") << 0]}/><span {...p_1(a_.body2, a$.medium)}>{detailsStatus === "published" ? <T_1 id="u3wRF+"/> : <T_1 id="eneWvv"/>}</span></div></div>;
        e[6] = detailsStatus;
        e[7] = o;
    } else {
        o = e[7];
    }
    let j;
    if (e[8] !== d || e[9] !== c || e[10] !== o) {
        j = <div {...l}>{d}{c}{o}</div>;
        e[8] = d;
        e[9] = c;
        e[10] = o;
        e[11] = j;
    } else {
        j = e[11];
    }
    return j;
}
function Bs1Component(r) {
    Bs1Component.d = 994;
    const e = c_1.c(46);
    const { onOpen, secrets, slack, unpublish, template, skills, fileSkills } = r;
    const { _: __1 } = u_1();
    let j;
    if (e[0] !== __1) {
        j = __1({
            id: "ohUJJM"
        });
        e[0] = __1;
        e[1] = j;
    } else {
        j = e[1];
    }
    let S;
    if (e[2] !== __1) {
        S = __1({
            id: "MAv87s"
        });
        e[2] = __1;
        e[3] = S;
    } else {
        S = e[3];
    }
    let f;
    if (e[4] !== __1) {
        f = __1({
            id: "PCSkw2"
        });
        e[4] = __1;
        e[5] = f;
    } else {
        f = e[5];
    }
    let k;
    if (e[6] !== __1) {
        k = __1({
            id: "sER+bs"
        });
        e[6] = __1;
        e[7] = k;
    } else {
        k = e[7];
    }
    let g;
    if (e[8] !== j || e[9] !== S || e[10] !== f || e[11] !== k) {
        g = {
            integrations: j,
            secrets: S,
            skills: f,
            files: k
        };
        e[8] = j;
        e[9] = S;
        e[10] = f;
        e[11] = k;
        e[12] = g;
    } else {
        g = e[12];
    }
    const x = g;
    let M;
    if (e[13] !== template.plugins) {
        M = template.plugins ?? [];
        e[13] = template.plugins;
        e[14] = M;
    } else {
        M = e[14];
    }
    let u;
    if (e[15] !== M) {
        u = M.map(wt);
        e[15] = M;
        e[16] = u;
    } else {
        u = e[16];
    }
    let w;
    if (e[17] !== secrets) {
        w = secrets.map(_t);
        e[17] = secrets;
        e[18] = w;
    } else {
        w = e[18];
    }
    let p;
    if (e[19] !== skills) {
        p = skills.map(St);
        e[19] = skills;
        e[20] = p;
    } else {
        p = e[20];
    }
    let A;
    if (e[21] !== fileSkills) {
        A = fileSkills.map(cw);
        e[21] = fileSkills;
        e[22] = A;
    } else {
        A = e[22];
    }
    let T;
    if (e[23] !== A || e[24] !== u || e[25] !== w || e[26] !== p) {
        T = {
            integrations: u,
            secrets: w,
            skills: p,
            files: A
        };
        e[23] = A;
        e[24] = u;
        e[25] = w;
        e[26] = p;
        e[27] = T;
    } else {
        T = e[27];
    }
    const E = T;
    let z;
    if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
        z = {
            className: "sand-78zum5 sand-dt5ytf sand-883omv sand-yamay9"
        };
        e[28] = z;
    } else {
        z = e[28];
    }
    let b;
    if (e[29] !== x || e[30] !== E || e[31] !== onOpen) {
        b = c_2.map((_)=><T_4 key={_} icon={O[_]} onOpen={()=>onOpen(_)} paneKey={_} subtitle=<Ct1 count={E[_].length} names={E[_]}/> title={x[_]}/>);
        e[29] = x;
        e[30] = E;
        e[31] = onOpen;
        e[32] = b;
    } else {
        b = e[32];
    }
    let y;
    if (e[33] !== b) {
        y = <Mt1>{b}</Mt1>;
        e[33] = b;
        e[34] = y;
    } else {
        y = e[34];
    }
    let $;
    if (e[35] !== slack.onOpen) {
        $ = slack.onOpen == null ? {} : {
            onOpen: slack.onOpen
        };
        e[35] = slack.onOpen;
        e[36] = $;
    } else {
        $ = e[36];
    }
    let N;
    if (e[37] !== slack.status || e[38] !== $) {
        N = <Ft paneKey="slack" status={slack.status} {...$}/>;
        e[37] = slack.status;
        e[38] = $;
        e[39] = N;
    } else {
        N = e[39];
    }
    let C;
    if (e[40] !== unpublish) {
        C = unpublish == null ? null : <T_5 unpublish={unpublish}/>;
        e[40] = unpublish;
        e[41] = C;
    } else {
        C = e[41];
    }
    let B;
    if (e[42] !== y || e[43] !== N || e[44] !== C) {
        B = <div {...z}>{y}{N}{C}</div>;
        e[42] = y;
        e[43] = N;
        e[44] = C;
        e[45] = B;
    } else {
        B = e[45];
    }
    return B;
}
function St(r) {
    return r.title;
}
function _t(r) {
    return r.name;
}
function wt(r) {
    return r.name;
}
function Ys1Component(r) {
    Ys1Component.d = 992;
    const e = c_1.c(9);
    const { plugins, actions, resolve } = r;
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = <T_1 id="fen5O4"/>;
        e[0] = l;
    } else {
        l = e[0];
    }
    let a;
    if (e[1] !== plugins) {
        a = plugins.map(At);
        e[1] = plugins;
        e[2] = a;
    } else {
        a = e[2];
    }
    let leadingOf;
    if (e[3] !== resolve) {
        leadingOf = (o)=><P name={o.title} pluginId={o.key} resolve={resolve}/>;
        e[3] = resolve;
        e[4] = leadingOf;
    } else {
        leadingOf = e[4];
    }
    let c;
    if (e[5] !== actions || e[6] !== a || e[7] !== leadingOf) {
        c = <M actions={actions} intro={l} items={a} leadingOf={leadingOf}/>;
        e[5] = actions;
        e[6] = a;
        e[7] = leadingOf;
        e[8] = c;
    } else {
        c = e[8];
    }
    return c;
}
function At(r) {
    return {
        key: r.pluginId,
        title: r.name
    };
}
function Vs1Component(r) {
    Vs1Component.d = 993;
    const e = c_1.c(4);
    const { skills, actions } = r;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = <T_1 id="3X44Vi"/>;
        e[0] = i;
    } else {
        i = e[0];
    }
    let l;
    if (e[1] !== actions || e[2] !== skills) {
        l = <M actions={actions} intro={i} items={skills}/>;
        e[1] = actions;
        e[2] = skills;
        e[3] = l;
    } else {
        l = e[3];
    }
    return l;
}
function SsComponent(r) {
    SsComponent.d = 991;
    const e = c_1.c(6);
    const { fileSkills, actions } = r;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = <T_1 id="uGw/Ea"/>;
        e[0] = i;
    } else {
        i = e[0];
    }
    let l;
    if (e[1] !== fileSkills) {
        l = fileSkills.map(Nt);
        e[1] = fileSkills;
        e[2] = l;
    } else {
        l = e[2];
    }
    let a;
    if (e[3] !== actions || e[4] !== l) {
        a = <M actions={actions} intro={i} items={l} leadingOf={TtComponent} removesWithTrash/>;
        e[3] = actions;
        e[4] = l;
        e[5] = a;
    } else {
        a = e[5];
    }
    return a;
}
function TtComponent(r) {
    return <Kt name={g(r.title)}/>;
}
function Nt(r) {
    return {
        key: r.name,
        title: cw(r)
    };
}
const sizePx = 80;
const Ae = {
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
    mainViewScroll: {
        k7Eaqz: "sand-euugli",
        kAzted: "sand-2lwn1j",
        kzQI83: "sand-1iyjqo2",
        $$css: true
    },
    editAction: {
        kLKAdn: "sand-1yrsyyn",
        kwRFfy: "sand-f159sx",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
        kMzoRj: "sand-c342km",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-1o0liin",
        kkrTdU: "sand-1ypdohk",
        kMv6JI: "sand-jb2p0i",
        $$css: true
    },
    subviewTitleLabel: {
        kg5iWk: "sand-lyipyv",
        k9WMMc: "sand-2b8uid",
        khDVqt: "sand-uxw1ft",
        $$css: true
    }
};
async function zt(edit, e) {
    try {
        await edit.onSave(e);
        return {
            ok: true
        };
    } catch (error) {
        if (fJ(error)) {
            return {
                ok: false,
                noLongerManager: true
            };
        }
        const t = e_1(error);
        d0(error, {
            tags: {
                sand_area: "team-bot-details",
                error_tag: t
            }
        });
        return {
            ok: false,
            reason: t
        };
    }
}
function SComponent(r) {
    SComponent.d = 1012;
    const e = c_1.c(18);
    const { pane, template, secrets, plugins, secretsActions, skillsActions, filesActions, fileSkills, skills, resolve } = r;
    switch(pane.kind){
        case "skills":
            {
                let f;
                if (e[0] !== skills || e[1] !== skillsActions) {
                    f = <Vs1Component actions={skillsActions} skills={skills}/>;
                    e[0] = skills;
                    e[1] = skillsActions;
                    e[2] = f;
                } else {
                    f = e[2];
                }
                return f;
            }
        case "files":
            {
                let f;
                if (e[3] !== fileSkills || e[4] !== filesActions) {
                    f = <SsComponent actions={filesActions} fileSkills={fileSkills}/>;
                    e[3] = fileSkills;
                    e[4] = filesActions;
                    e[5] = f;
                } else {
                    f = e[5];
                }
                return f;
            }
        case "secrets":
            {
                let f;
                if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
                    f = <T_1 id="PzFJDF"/>;
                    e[6] = f;
                } else {
                    f = e[6];
                }
                let k;
                if (e[7] !== secrets) {
                    k = secrets.map(Dt);
                    e[7] = secrets;
                    e[8] = k;
                } else {
                    k = e[8];
                }
                let g;
                if (e[9] !== secretsActions || e[10] !== k) {
                    g = <M actions={secretsActions} intro={f} items={k}/>;
                    e[9] = secretsActions;
                    e[10] = k;
                    e[11] = g;
                } else {
                    g = e[11];
                }
                return g;
            }
        case "integrations":
            {
                let plugins_1;
                if (e[12] !== template.plugins) {
                    plugins_1 = template.plugins ?? [];
                    e[12] = template.plugins;
                    e[13] = plugins_1;
                } else {
                    plugins_1 = e[13];
                }
                let k;
                if (e[14] !== plugins || e[15] !== resolve || e[16] !== plugins_1) {
                    k = <Ys1Component actions={plugins} plugins={plugins_1} resolve={resolve}/>;
                    e[14] = plugins;
                    e[15] = resolve;
                    e[16] = plugins_1;
                    e[17] = k;
                } else {
                    k = e[17];
                }
                return k;
            }
    }
}
function Dt(r) {
    return {
        key: r.name,
        title: r.name,
        description: r.description ?? ""
    };
}
function Ws1Component(r) {
    Ws1Component.d = 1010;
    const e = c_1.c(6);
    const { agent, compact } = r;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-h8yej3 sand-euugli"
        };
        e[0] = i;
    } else {
        i = e[0];
    }
    const l = compact && Ae.markCompact;
    let a;
    if (e[1] !== l) {
        a = [
            Ae.mark,
            l
        ];
        e[1] = l;
        e[2] = a;
    } else {
        a = e[2];
    }
    let d;
    if (e[3] !== agent || e[4] !== a) {
        d = <div {...i}><Hs agent={agent} sizePx={sizePx} style={a}/></div>;
        e[3] = agent;
        e[4] = a;
        e[5] = d;
    } else {
        d = e[5];
    }
    return d;
}
function paneKey(r) {
    return r.kind;
}
function AsComponent(r) {
    AsComponent.d = 1011;
    const e = c_1.c(40);
    const { pane, secrets, slack, plugins, secretsActions, skillsActions, filesActions, fileSkills, skills, detailsStatus, unpublish, editDraft, editProblems, onEditDraftChange, editFailure, template, isLoading, description, resolve, onPush } = r;
    if (pane.kind === "root") {
        let b;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-1y1aw1k sand-1bk0ktj sand-x6bls6 sand-92arao"
            };
            e[0] = b;
        } else {
            b = e[0];
        }
        let y;
        if (e[1] !== description || e[2] !== detailsStatus || e[3] !== template) {
            y = <Xs1Component description={description} detailsStatus={detailsStatus} template={template}/>;
            e[1] = description;
            e[2] = detailsStatus;
            e[3] = template;
            e[4] = y;
        } else {
            y = e[4];
        }
        let $;
        if (e[5] !== fileSkills || e[6] !== filesActions || e[7] !== isLoading || e[8] !== onPush || e[9] !== plugins || e[10] !== secrets || e[11] !== secretsActions || e[12] !== skills || e[13] !== skillsActions || e[14] !== slack || e[15] !== template || e[16] !== unpublish) {
            $ = isLoading ? <div className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-1db3i3o"><Cs1 borderWidth={1.5} size={20}/></div> : <Bs1Component fileSkills={fileSkills} onOpen={(kind)=>{
                const _ = {
                    integrations: (template.plugins ?? []).length === 0 ? plugins.onAddMore : undefined,
                    secrets: secrets.length === 0 ? secretsActions.onAddMore : undefined,
                    skills: skills.length === 0 ? skillsActions.onAddMore : undefined,
                    files: fileSkills.length === 0 ? filesActions.onAddMore : undefined
                }[kind];
                if (_ != null) {
                    _();
                } else {
                    onPush({
                        kind
                    });
                }
            }} secrets={secrets} skills={skills} slack={slack} template={template} unpublish={unpublish}/>;
            e[5] = fileSkills;
            e[6] = filesActions;
            e[7] = isLoading;
            e[8] = onPush;
            e[9] = plugins;
            e[10] = secrets;
            e[11] = secretsActions;
            e[12] = skills;
            e[13] = skillsActions;
            e[14] = slack;
            e[15] = template;
            e[16] = unpublish;
            e[17] = $;
        } else {
            $ = e[17];
        }
        let N;
        if (e[18] !== y || e[19] !== $) {
            N = <div {...b}>{y}{$}</div>;
            e[18] = y;
            e[19] = $;
            e[20] = N;
        } else {
            N = e[20];
        }
        return N;
    }
    if (pane.kind === "edit") {
        let b;
        if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1bk0ktj sand-x6bls6 sand-92arao sand-7sb2j6"
            };
            e[21] = b;
        } else {
            b = e[21];
        }
        let y;
        if (e[22] !== editDraft || e[23] !== editFailure || e[24] !== editProblems || e[25] !== onEditDraftChange) {
            y = <div {...b}><Js1Component draft={editDraft} failure={editFailure} onChange={onEditDraftChange} problems={editProblems}/></div>;
            e[22] = editDraft;
            e[23] = editFailure;
            e[24] = editProblems;
            e[25] = onEditDraftChange;
            e[26] = y;
        } else {
            y = e[26];
        }
        return y;
    }
    if (isLoading) {
        let b;
        if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
            b = <div className="sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1bk0ktj sand-x6bls6 sand-92arao sand-7sb2j6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-1db3i3o"><Cs1 borderWidth={1.5} size={20}/></div>;
            e[27] = b;
        } else {
            b = e[27];
        }
        return b;
    }
    let E;
    if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
        E = {
            className: "sand-78zum5 sand-dt5ytf sand-9f619 sand-euugli sand-ou54vl sand-1bk0ktj sand-x6bls6 sand-92arao sand-7sb2j6"
        };
        e[28] = E;
    } else {
        E = e[28];
    }
    let z;
    if (e[29] !== fileSkills || e[30] !== filesActions || e[31] !== pane || e[32] !== plugins || e[33] !== resolve || e[34] !== secrets || e[35] !== secretsActions || e[36] !== skills || e[37] !== skillsActions || e[38] !== template) {
        z = <div {...E}><SComponent fileSkills={fileSkills} filesActions={filesActions} pane={pane} plugins={plugins} resolve={resolve} secrets={secrets} secretsActions={secretsActions} skills={skills} skillsActions={skillsActions} template={template}/></div>;
        e[29] = fileSkills;
        e[30] = filesActions;
        e[31] = pane;
        e[32] = plugins;
        e[33] = resolve;
        e[34] = secrets;
        e[35] = secretsActions;
        e[36] = skills;
        e[37] = skillsActions;
        e[38] = template;
        e[39] = z;
    } else {
        z = e[39];
    }
    return z;
}
function TsComponent(r) {
    TsComponent.d = 1013;
    const e = c_1.c(174);
    const { agent, template, secrets, slack, plugins, secretsActions, skillsActions, filesActions, fileSkills, skills, status, unpublish, edit, initialPane, isLoading, onClose, action } = r;
    const { _ } = u_1();
    const ARef = r_1.useRef(null);
    const TRef = r_1.useRef(null);
    const ERef = r_1.useRef(null);
    const zRef = r_1.useRef(null);
    const bRef = r_1.useRef(null);
    const { catalog } = c$();
    let $;
    if (e[0] !== catalog) {
        $ = J(catalog);
        e[0] = catalog;
        e[1] = $;
    } else {
        $ = e[1];
    }
    const resolve = $;
    let C;
    if (e[2] !== initialPane) {
        C = initialPane == null ? [
            {
                kind: "root"
            }
        ] : [
            {
                kind: initialPane
            }
        ];
        e[2] = initialPane;
        e[3] = C;
    } else {
        C = e[3];
    }
    const [B, setB] = r_1.useState(C);
    let V;
    if (e[4] !== template.description || e[5] !== template.name) {
        V = {
            name: template.name,
            description: template.description
        };
        e[4] = template.description;
        e[5] = template.name;
        e[6] = V;
    } else {
        V = e[6];
    }
    const [P, setP] = r_1.useState(V);
    const [O, setO] = r_1.useState(false);
    const [U, setU] = r_1.useState(false);
    let F;
    if (e[7] !== B) {
        F = B[B.length - 1] ?? {
            kind: "root"
        };
        e[7] = B;
        e[8] = F;
    } else {
        F = e[8];
    }
    const current = F;
    let resolveFocus;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        resolveFocus = (m, incoming)=>r_2(m, {
                back: ERef.current,
                incoming,
                title: zRef.current,
                fallback: TRef.current
            });
        e[9] = resolveFocus;
    } else {
        resolveFocus = e[9];
    }
    let ee;
    if (e[10] !== current) {
        ee = {
            current,
            paneKey,
            resolveFocus
        };
        e[10] = current;
        e[11] = ee;
    } else {
        ee = e[11];
    }
    const navigation = u_2(ee);
    let ae;
    if (e[12] !== template.description) {
        ae = template.description.replace(/\s+/g, " ").trim();
        e[12] = template.description;
        e[13] = ae;
    } else {
        ae = e[13];
    }
    const Ye = ae;
    const compact = current.kind !== "root";
    let edit_1;
    if (e[14] !== _) {
        edit_1 = _({
            id: "VFvVc6"
        });
        e[14] = _;
        e[15] = edit_1;
    } else {
        edit_1 = e[15];
    }
    let oe;
    if (e[16] !== _) {
        oe = _({
            id: "MAv87s"
        });
        e[16] = _;
        e[17] = oe;
    } else {
        oe = e[17];
    }
    let de;
    if (e[18] !== _) {
        de = _({
            id: "ohUJJM"
        });
        e[18] = _;
        e[19] = de;
    } else {
        de = e[19];
    }
    let re;
    if (e[20] !== _) {
        re = _({
            id: "PCSkw2"
        });
        e[20] = _;
        e[21] = re;
    } else {
        re = e[21];
    }
    let ce;
    if (e[22] !== _) {
        ce = _({
            id: "sER+bs"
        });
        e[22] = _;
        e[23] = ce;
    } else {
        ce = e[23];
    }
    let Ne;
    if (e[24] !== de || e[25] !== re || e[26] !== ce || e[27] !== edit_1 || e[28] !== oe) {
        Ne = {
            edit: edit_1,
            secrets: oe,
            integrations: de,
            skills: re,
            files: ce
        };
        e[24] = de;
        e[25] = re;
        e[26] = ce;
        e[27] = edit_1;
        e[28] = oe;
        e[29] = Ne;
    } else {
        Ne = e[29];
    }
    const es = current.kind === "root" ? template.name : Ne[current.kind];
    let Me;
    if (e[30] !== navigation) {
        Me = (m)=>{
            const h = bRef.current?.viewportElement;
            if (h != null) {
                h.scrollTop = 0;
            }
            navigation.navigate({
                direction: "push",
                landing: {
                    kind: "back"
                }
            });
            setB((I)=>[
                    ...I,
                    m
                ]);
        };
        e[30] = navigation;
        e[31] = Me;
    } else {
        Me = e[31];
    }
    const onPush = Me;
    let ze;
    if (e[32] !== navigation || e[33] !== current || e[34] !== B.length) {
        ze = ()=>{
            if (B.length <= 1) {
                return;
            }
            const m = bRef.current?.viewportElement;
            if (m != null) {
                m.scrollTop = 0;
            }
            navigation.navigate({
                direction: "pop",
                landing: {
                    kind: "row",
                    paneKey: paneKey(current)
                }
            });
            setB(Et);
        };
        e[32] = navigation;
        e[33] = current;
        e[34] = B.length;
        e[35] = ze;
    } else {
        ze = e[35];
    }
    const se = ze;
    let De;
    if (e[36] !== onPush || e[37] !== template.description || e[38] !== template.name) {
        De = ()=>{
            setP({
                name: template.name,
                description: template.description
            });
            setU(false);
            onPush({
                kind: "edit"
            });
        };
        e[36] = onPush;
        e[37] = template.description;
        e[38] = template.name;
        e[39] = De;
    } else {
        De = e[39];
    }
    const ss = De;
    let fe;
    if (e[40] !== P.name) {
        fe = P.name.trim();
        e[40] = P.name;
        e[41] = fe;
    } else {
        fe = e[41];
    }
    let ue;
    if (e[42] !== P.description) {
        ue = P.description.trim();
        e[42] = P.description;
        e[43] = ue;
    } else {
        ue = e[43];
    }
    let Ee;
    if (e[44] !== fe || e[45] !== ue) {
        Ee = {
            name: fe,
            description: ue
        };
        e[44] = fe;
        e[45] = ue;
        e[46] = Ee;
    } else {
        Ee = e[46];
    }
    const te = Ee;
    let $e;
    if (e[47] !== te.description || e[48] !== te.name || e[49] !== template.description || e[50] !== template.name) {
        $e = te.name !== template.name.trim() || te.description !== template.description.trim();
        e[47] = te.description;
        e[48] = te.name;
        e[49] = template.description;
        e[50] = template.name;
        e[51] = $e;
    } else {
        $e = e[51];
    }
    const Ce = $e;
    let Be;
    if (e[52] !== P || e[53] !== template.description) {
        Be = vt(P, template.description);
        e[52] = P;
        e[53] = template.description;
        e[54] = Be;
    } else {
        Be = e[54];
    }
    const editProblems = Be;
    const Pe = !O && Ce && !editProblems.isNameEmpty && !editProblems.isDescriptionTooLong;
    const ts = cq();
    let Le;
    if (e[55] !== _ || e[56] !== Ce || e[57] !== onClose || e[58] !== current.kind || e[59] !== ts) {
        Le = async ()=>{
            if (!(current.kind === "edit" && Ce && !await ts(cr({
                title: _({
                    id: "0EcUWz"
                }),
                description: _({
                    id: "yHRxo+"
                }),
                confirmLabel: _({
                    id: "bzSI52"
                }),
                cancelLabel: _({
                    id: "4OjqAQ"
                }),
                initialFocus: "cancel"
            })))) {
                onClose();
            }
        };
        e[55] = _;
        e[56] = Ce;
        e[57] = onClose;
        e[58] = current.kind;
        e[59] = ts;
        e[60] = Le;
    } else {
        Le = e[60];
    }
    const ns = Le;
    let Ie;
    if (e[61] !== Pe || e[62] !== edit || e[63] !== se || e[64] !== te) {
        Ie = async ()=>{
            if (edit == null || !Pe) {
                return;
            }
            setO(true);
            setU(false);
            const m = await zt(edit, te);
            setO(false);
            if (m.ok || "noLongerManager" in m && m.noLongerManager) {
                setU(false);
                se();
                return;
            }
            setU(true);
        };
        e[61] = Pe;
        e[62] = edit;
        e[63] = se;
        e[64] = te;
        e[65] = Ie;
    } else {
        Ie = e[65];
    }
    const is = Ie;
    let Oe;
    if (e[66] !== onClose) {
        Oe = {
            onCancel: onClose
        };
        e[66] = onClose;
        e[67] = Oe;
    } else {
        Oe = e[67];
    }
    const ne = Oe;
    let Z;
    if (current.kind === "edit") {
        let m;
        if (e[68] !== O || e[69] !== se) {
            m = <D disabled={O} onClick={se}/>;
            e[68] = O;
            e[69] = se;
            e[70] = m;
        } else {
            m = e[70];
        }
        let h;
        if (e[71] === Symbol.for("react.memo_cache_sentinel")) {
            h = <x_1.ActionSpacer/>;
            e[71] = h;
        } else {
            h = e[71];
        }
        const disabled = !Pe;
        let Q;
        if (e[72] !== is) {
            Q = ()=>{
                is();
            };
            e[72] = is;
            e[73] = Q;
        } else {
            Q = e[73];
        }
        let _e;
        if (e[74] !== O) {
            _e = O ? <T_1 id="K/F6pa"/> : <T_1 id="tfDRzk"/>;
            e[74] = O;
            e[75] = _e;
        } else {
            _e = e[75];
        }
        let we;
        if (e[76] !== disabled || e[77] !== Q || e[78] !== _e) {
            we = <x_1.Action disabled={disabled} onClick={Q} variant="primary">{_e}</x_1.Action>;
            e[76] = disabled;
            e[77] = Q;
            e[78] = _e;
            e[79] = we;
        } else {
            we = e[79];
        }
        let Ke;
        if (e[80] !== m || e[81] !== we) {
            Ke = <Ue>{m}{h}{we}</Ue>;
            e[80] = m;
            e[81] = we;
            e[82] = Ke;
        } else {
            Ke = e[82];
        }
        Z = Ke;
    } else if (isLoading && current.kind !== "root") {
        Z = null;
    } else if (current.kind === "integrations" && plugins.onAddMore != null) {
        let m;
        if (e[83] !== template.plugins) {
            m = (template.plugins ?? []).length === 0 ? <T_1 id="vc8og5"/> : <T_1 id="vr9OIt"/>;
            e[83] = template.plugins;
            e[84] = m;
        } else {
            m = e[84];
        }
        let h;
        if (e[85] !== ne || e[86] !== plugins.onAddMore || e[87] !== m) {
            h = <A {...ne} label={m} onAddMore={plugins.onAddMore}/>;
            e[85] = ne;
            e[86] = plugins.onAddMore;
            e[87] = m;
            e[88] = h;
        } else {
            h = e[88];
        }
        Z = h;
    } else if (current.kind === "secrets" && secretsActions.onAddMore != null) {
        let m;
        if (e[89] === Symbol.for("react.memo_cache_sentinel")) {
            m = <T_1 id="oBU93f"/>;
            e[89] = m;
        } else {
            m = e[89];
        }
        let h;
        if (e[90] !== ne || e[91] !== secretsActions.onAddMore) {
            h = <A {...ne} label={m} onAddMore={secretsActions.onAddMore} variant="primary"/>;
            e[90] = ne;
            e[91] = secretsActions.onAddMore;
            e[92] = h;
        } else {
            h = e[92];
        }
        Z = h;
    } else if (current.kind === "skills" && skillsActions.onAddMore != null) {
        let m;
        if (e[93] === Symbol.for("react.memo_cache_sentinel")) {
            m = <T_1 id="uDGDEn"/>;
            e[93] = m;
        } else {
            m = e[93];
        }
        let h;
        if (e[94] !== ne || e[95] !== skillsActions.onAddMore) {
            h = <A {...ne} label={m} onAddMore={skillsActions.onAddMore}/>;
            e[94] = ne;
            e[95] = skillsActions.onAddMore;
            e[96] = h;
        } else {
            h = e[96];
        }
        Z = h;
    } else if (current.kind === "files") {
        let m;
        if (e[97] === Symbol.for("react.memo_cache_sentinel")) {
            m = <x_1.ActionSpacer/>;
            e[97] = m;
        } else {
            m = e[97];
        }
        let h;
        if (e[98] === Symbol.for("react.memo_cache_sentinel")) {
            h = <T_1 id="DPfwMq"/>;
            e[98] = h;
        } else {
            h = e[98];
        }
        let I;
        if (e[99] !== onClose) {
            I = <Ue>{m}<x_1.Action onClick={onClose} variant="primary">{h}</x_1.Action></Ue>;
            e[99] = onClose;
            e[100] = I;
        } else {
            I = e[100];
        }
        Z = I;
    } else if (compact) {
        let m;
        if (e[101] === Symbol.for("react.memo_cache_sentinel")) {
            m = <T_1 id="DPfwMq"/>;
            e[101] = m;
        } else {
            m = e[101];
        }
        let h;
        if (e[102] !== onClose) {
            h = <D label={m} onClick={onClose}/>;
            e[102] = onClose;
            e[103] = h;
        } else {
            h = e[103];
        }
        let I;
        if (e[104] === Symbol.for("react.memo_cache_sentinel")) {
            I = <x_1.ActionSpacer/>;
            e[104] = I;
        } else {
            I = e[104];
        }
        let Q;
        if (e[105] !== h) {
            Q = <Ue>{h}{I}</Ue>;
            e[105] = h;
            e[106] = Q;
        } else {
            Q = e[106];
        }
        Z = Q;
    } else {
        let m;
        if (e[107] !== onClose) {
            m = <D onClick={onClose}/>;
            e[107] = onClose;
            e[108] = m;
        } else {
            m = e[108];
        }
        let h;
        if (e[109] === Symbol.for("react.memo_cache_sentinel")) {
            h = <x_1.ActionSpacer/>;
            e[109] = h;
        } else {
            h = e[109];
        }
        let I;
        if (e[110] !== action || e[111] !== m) {
            I = <Ue>{m}{h}{action}</Ue>;
            e[110] = action;
            e[111] = m;
            e[112] = I;
        } else {
            I = e[112];
        }
        Z = I;
    }
    let qe;
    if (e[113] !== edit || e[114] !== compact || e[115] !== ss) {
        qe = edit != null && !compact ? <div className="sand-10l6tqk sand-1tk7jg1 sand-1ysvxap sand-zkaem6"><button data-details-pane="edit" onClick={ss} type="button" {...p_1(a_.body1, Ae.editAction)}><T_1 id="ePK91l"/></button></div> : null;
        e[113] = edit;
        e[114] = compact;
        e[115] = ss;
        e[116] = qe;
    } else {
        qe = e[116];
    }
    const as = qe;
    let Fe;
    if (e[117] === Symbol.for("react.memo_cache_sentinel")) {
        Fe = {
            className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-euugli sand-2lwn1j sand-1iyjqo2 sand-6ikm8r"
        };
        e[117] = Fe;
    } else {
        Fe = e[117];
    }
    let pe;
    if (e[118] !== compact) {
        pe = ({
            0: {
                className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-92arao sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-105ttfm sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d"
            },
            1: {
                className: "sand-10l6tqk sand-13vifvy sand-1o0tod sand-tijo5x sand-htitgo sand-78zum5 sand-6s0dn4 sand-9f619 sand-euugli sand-dd8jsf sand-ou54vl sand-z9dl7a sand-2vl965 sand-sag5q8 sand-92arao sand-10e981r sand-1hkp6id sand-1q0q8m5 sand-19145p9 sand-11xpdln sand-4wkmsb sand-q8ykup sand-12w9bfk sand-1554a8d sand-nn1q72"
            }
        })[!!compact << 0];
        e[118] = compact;
        e[119] = pe;
    } else {
        pe = e[119];
    }
    let ke;
    if (e[120] !== _ || e[121] !== es || e[122] !== compact || e[123] !== current.kind || e[124] !== se || e[125] !== B.length) {
        ke = compact ? <>{B.length > 1 && current.kind !== "files" ? <Us aria-label={_({
            id: "iH8pgl"
        })} icon="chevron-left" onClick={se} ref={ERef}/> : <div className="sand-gd8bvy sand-1fgtraw sand-2lah0s"/>}<div ref={zRef} tabIndex={-1} className="sand-1iyjqo2 sand-euugli sand-b3r6kr"><x_1.Title style={[
            a_.body1,
            a$.medium,
            Ae.subviewTitleLabel
        ]}>{es}</x_1.Title></div><div className="sand-gd8bvy sand-1fgtraw sand-2lah0s"/></> : null;
        e[120] = _;
        e[121] = es;
        e[122] = compact;
        e[123] = current.kind;
        e[124] = se;
        e[125] = B.length;
        e[126] = ke;
    } else {
        ke = e[126];
    }
    let he;
    if (e[127] !== pe || e[128] !== ke) {
        he = <div {...pe}>{ke}</div>;
        e[127] = pe;
        e[128] = ke;
        e[129] = he;
    } else {
        he = e[129];
    }
    let Re;
    if (e[130] === Symbol.for("react.memo_cache_sentinel")) {
        Re = <div className="sand-10l6tqk sand-13vifvy sand-tijo5x sand-zkaem6"><x_1.CloseButton/></div>;
        e[130] = Re;
    } else {
        Re = e[130];
    }
    let We;
    if (e[131] === Symbol.for("react.memo_cache_sentinel")) {
        We = {
            className: "sand-1n2onr6 sand-1vjfegm sand-78zum5 sand-dt5ytf sand-2lah0s sand-9f619 sand-euugli sand-1miatn0 sand-1bk0ktj sand-18d9i69 sand-92arao"
        };
        e[131] = We;
    } else {
        We = e[131];
    }
    let ge;
    if (e[132] !== agent || e[133] !== compact) {
        ge = <Ws1Component agent={agent} compact={compact}/>;
        e[132] = agent;
        e[133] = compact;
        e[134] = ge;
    } else {
        ge = e[134];
    }
    let je;
    if (e[135] !== as || e[136] !== ge) {
        je = <div {...We}>{as}{ge}</div>;
        e[135] = as;
        e[136] = ge;
        e[137] = je;
    } else {
        je = e[137];
    }
    let renderPane;
    if (e[138] !== Ye || e[139] !== status || e[140] !== P || e[141] !== U || e[142] !== editProblems || e[143] !== fileSkills || e[144] !== filesActions || e[145] !== isLoading || e[146] !== plugins || e[147] !== onPush || e[148] !== resolve || e[149] !== secrets || e[150] !== secretsActions || e[151] !== skills || e[152] !== skillsActions || e[153] !== slack || e[154] !== unpublish || e[155] !== template) {
        renderPane = (pane)=><AsComponent description={Ye} detailsStatus={status} editDraft={P} editFailure={U} editProblems={editProblems} fileSkills={fileSkills} filesActions={filesActions} isLoading={isLoading} onEditDraftChange={setP} onPush={onPush} pane={pane} plugins={plugins} resolve={resolve} secrets={secrets} secretsActions={secretsActions} skills={skills} skillsActions={skillsActions} slack={slack} template={template} unpublish={unpublish}/>;
        e[138] = Ye;
        e[139] = status;
        e[140] = P;
        e[141] = U;
        e[142] = editProblems;
        e[143] = fileSkills;
        e[144] = filesActions;
        e[145] = isLoading;
        e[146] = plugins;
        e[147] = onPush;
        e[148] = resolve;
        e[149] = secrets;
        e[150] = secretsActions;
        e[151] = skills;
        e[152] = skillsActions;
        e[153] = slack;
        e[154] = unpublish;
        e[155] = template;
        e[156] = renderPane;
    } else {
        renderPane = e[156];
    }
    let be;
    if (e[157] !== navigation || e[158] !== renderPane) {
        be = <W_2 navigation={navigation} renderPane={renderPane}/>;
        e[157] = navigation;
        e[158] = renderPane;
        e[159] = be;
    } else {
        be = e[159];
    }
    let ye;
    if (e[160] !== je || e[161] !== be) {
        ye = <Vs ref={bRef} rootStyle={Ae.mainViewScroll} scrollbarVisibility="hover">{je}{be}</Vs>;
        e[160] = je;
        e[161] = be;
        e[162] = ye;
    } else {
        ye = e[162];
    }
    let ve;
    if (e[163] !== he || e[164] !== ye) {
        ve = <x_1.Body style={Ae.body}><div ref={TRef} tabIndex={-1} {...Fe}>{he}{Re}{ye}</div></x_1.Body>;
        e[163] = he;
        e[164] = ye;
        e[165] = ve;
    } else {
        ve = e[165];
    }
    let Ge;
    if (e[166] !== Z || e[167] !== ve) {
        Ge = <>{ve}{Z}</>;
        e[166] = Z;
        e[167] = ve;
        e[168] = Ge;
    } else {
        Ge = e[168];
    }
    const ls = Ge;
    let onClose_1;
    if (e[169] !== ns) {
        onClose_1 = ()=>{
            ns();
        };
        e[169] = ns;
        e[170] = onClose_1;
    } else {
        onClose_1 = e[170];
    }
    let Ve;
    if (e[171] !== ls || e[172] !== onClose_1) {
        Ve = <Hs1 initialFocus={ARef} onClose={onClose_1} ref={ARef}>{ls}</Hs1>;
        e[171] = ls;
        e[172] = onClose_1;
        e[173] = Ve;
    } else {
        Ve = e[173];
    }
    return Ve;
}
function Et(r) {
    return r.slice(0, -1);
}
const He = {
    header: {
        kGNEyG: "sand-6s0dn4",
        kLKAdn: "sand-1miatn0",
        kGO01o: "sand-1l90r2v",
        kt9PQ7: "sand-1qhh985",
        $$css: true
    },
    headline: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    description: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    stepText: {
        kMwMTN: "sand-tyxrsu",
        $$css: true
    }
};
function JeComponent(r) {
    JeComponent.d = 1054;
    const e = c_1.c(10);
    const { icon, children } = r;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-1vvogim sand-aope02 sand-hojbe8 sand-8c2ked"
        };
        e[0] = i;
    } else {
        i = e[0];
    }
    let l;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-gd8bvy sand-1fgtraw sand-149ho13 sand-10e981r sand-1o0liin"
        };
        e[1] = l;
    } else {
        l = e[1];
    }
    let a;
    if (e[2] !== icon) {
        a = <span aria-hidden {...l}><W name={icon} size="sm"/></span>;
        e[2] = icon;
        e[3] = a;
    } else {
        a = e[3];
    }
    let d;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        d = p_1(a_.body2, He.stepText);
        e[4] = d;
    } else {
        d = e[4];
    }
    let c;
    if (e[5] !== children) {
        c = <span {...d}>{children}</span>;
        e[5] = children;
        e[6] = c;
    } else {
        c = e[6];
    }
    let o;
    if (e[7] !== a || e[8] !== c) {
        o = <li {...i}>{a}{c}</li>;
        e[7] = a;
        e[8] = c;
        e[9] = o;
    } else {
        o = e[9];
    }
    return o;
}
function NsComponent(r) {
    NsComponent.d = 1055;
    const e = c_1.c(26);
    const { agentName, onClose } = r;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = <x_1.Header style={He.header}><x_1.Title size="3xl" weight="medium"><T_1 id="cOlI3u"/></x_1.Title><x_1.CloseButton/></x_1.Header>;
        e[0] = i;
    } else {
        i = e[0];
    }
    let l;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1c1vhfx sand-1y1aw1k sand-wib8y2"
        };
        e[1] = l;
    } else {
        l = e[1];
    }
    let a;
    let d;
    let c;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        a = <span aria-hidden className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-29ncy0 sand-14nwjz3 sand-1khhgft sand-10e981r sand-755cs3"><Is name="slack" sizePx={44}/></span>;
        d = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-167g77z sand-2b8uid"
        };
        c = p_1(a_.heading3, a$.medium, He.headline);
        e[2] = a;
        e[3] = d;
        e[4] = c;
    } else {
        a = e[2];
        d = e[3];
        c = e[4];
    }
    let o;
    if (e[5] !== agentName) {
        o = <h3 {...c}><T_1 id="C71RRG" values={{
            agentName
        }}/></h3>;
        e[5] = agentName;
        e[6] = o;
    } else {
        o = e[6];
    }
    let j;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        j = p_1(a_.body2, He.description);
        e[7] = j;
    } else {
        j = e[7];
    }
    let S;
    if (e[8] !== agentName) {
        S = <p {...j}><T_1 id="oAC5eF" values={{
            agentName
        }}/></p>;
        e[8] = agentName;
        e[9] = S;
    } else {
        S = e[9];
    }
    let f;
    if (e[10] !== o || e[11] !== S) {
        f = <div {...d}>{o}{S}</div>;
        e[10] = o;
        e[11] = S;
        e[12] = f;
    } else {
        f = e[12];
    }
    let k;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        k = {
            className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-h8yej3 sand-1ghz6dp sand-1717udv sand-3ct3a4"
        };
        e[13] = k;
    } else {
        k = e[13];
    }
    let g;
    if (e[14] === Symbol.for("react.memo_cache_sentinel")) {
        g = <JeComponent icon="link"><T_1 id="2s0Kxl"/></JeComponent>;
        e[14] = g;
    } else {
        g = e[14];
    }
    let x;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        x = <JeComponent icon="robot"><T_1 id="s9kpQR"/></JeComponent>;
        e[15] = x;
    } else {
        x = e[15];
    }
    let M;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        M = <ul {...k}>{g}{x}<JeComponent icon="people"><T_1 id="5E/52t"/></JeComponent></ul>;
        e[16] = M;
    } else {
        M = e[16];
    }
    let u;
    if (e[17] !== f) {
        u = <x_1.Body><div {...l}>{a}{f}{M}</div></x_1.Body>;
        e[17] = f;
        e[18] = u;
    } else {
        u = e[18];
    }
    let w;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
        w = <x_1.ActionSpacer/>;
        e[19] = w;
    } else {
        w = e[19];
    }
    let p;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        p = <T_1 id="yz7wBu"/>;
        e[20] = p;
    } else {
        p = e[20];
    }
    let A;
    if (e[21] !== onClose) {
        A = <x_1.ActionBar>{w}<x_1.Action onClick={onClose} variant="primary">{p}</x_1.Action></x_1.ActionBar>;
        e[21] = onClose;
        e[22] = A;
    } else {
        A = e[22];
    }
    let T;
    if (e[23] !== u || e[24] !== A) {
        T = <>{i}{u}{A}</>;
        e[23] = u;
        e[24] = A;
        e[25] = T;
    } else {
        T = e[25];
    }
    return T;
}
function MsComponent(r) {
    MsComponent.d = 1053;
    const e = c_1.c(7);
    const { agent, onClose } = r;
    const i = u_3(agent, onClose);
    let l;
    if (e[0] !== agent || e[1] !== i || e[2] !== onClose) {
        l = i == null ? <NsComponent agentName={bc(agent)} onClose={onClose}/> : <Xt agentName={i.agentName} commands={i.commands} creatorName={i.creatorName} session={i.session}/>;
        e[0] = agent;
        e[1] = i;
        e[2] = onClose;
        e[3] = l;
    } else {
        l = e[3];
    }
    let a;
    if (e[4] !== onClose || e[5] !== l) {
        a = <Hs1 height="hug" onClose={onClose}>{l}</Hs1>;
        e[4] = onClose;
        e[5] = l;
        e[6] = a;
    } else {
        a = e[6];
    }
    return a;
}
async function $t(updateAgent, e, n, t) {
    try {
        await updateAgent(e, n);
    } catch (error) {
        if (fJ(error)) {
            t();
        }
        throw error;
    }
}
function ZsComponent(r) {
    ZsComponent.d = 986;
    const e = c_1.c(40);
    const { agent, template, secrets, action, isOpen, initialPane, onClose } = r;
    const { _: __1 } = u_1();
    const j = b7();
    const S = dC();
    const f = fx();
    const k = bw();
    const { pluginsAccess, contextAccess } = u_4(agent.id);
    let M;
    if (e[0] !== __1 || e[1] !== k) {
        M = {
            onFailure: ()=>k({
                    kind: "error",
                    text: __1({
                        id: "D2AZQg"
                    })
                })
        };
        e[0] = __1;
        e[1] = k;
        e[2] = M;
    } else {
        M = e[2];
    }
    const { status, unpublish } = bL(agent.id, M);
    const p = cg(pluginsAccess.listing.plugins);
    const [A, setA] = r_1.useState(false);
    const [E, setE] = r_1.useState(null);
    const [b, setB] = r_1.useState(null);
    const [$, set$] = r_1.useState(false);
    if (!isOpen && E != null) {
        setE(null);
    }
    if (!isOpen && b != null) {
        setB(null);
    }
    if (!isOpen && $) {
        set$(false);
    }
    const C = agent.viewerIsOwner !== false;
    let B;
    if (e[3] !== agent) {
        B = fK(agent);
        e[3] = agent;
        e[4] = B;
    } else {
        B = e[4];
    }
    const _ = B;
    const isPublished = d2(agent);
    let P;
    if (e[5] !== agent) {
        P = bc(agent);
        e[5] = agent;
        e[6] = P;
    } else {
        P = e[6];
    }
    const agentName = P;
    let O;
    if (e[7] !== _ || e[8] !== contextAccess.isPending || e[9] !== contextAccess.removeBotSkill || e[10] !== contextAccess.writeFailed || e[11] !== setB) {
        O = (surface)=>({
                isPending: contextAccess.isPending,
                writeFailed: contextAccess.writeFailed,
                ..._ ? {
                    onAddMore: ()=>setB({
                            surface
                        }),
                    onOpen: (ae)=>setB({
                            surface,
                            initialPane: {
                                kind: "skill",
                                name: ae
                            }
                        }),
                    onRemove: contextAccess.removeBotSkill
                } : {}
            });
        e[7] = _;
        e[8] = contextAccess.isPending;
        e[9] = contextAccess.removeBotSkill;
        e[10] = contextAccess.writeFailed;
        e[11] = setB;
        e[12] = O;
    } else {
        O = e[12];
    }
    const X = O;
    const U = isOpen ? <TsComponent key={initialPane ?? "root"} {...action == null ? {} : {
        action
    }} {...initialPane == null ? {} : {
        initialPane
    }} agent={agent} fileSkills={p.fileSkills} filesActions={{
        ...X("files"),
        ..._ ? {
            dropZone: <St1 access={contextAccess} disabled={contextAccess.isPending}/>
        } : {}
    }} {..._ ? {
        edit: {
            onSave: (L)=>$t(j.roster.updateAgent, agent.id, L, ()=>{
                    k({
                        kind: "error",
                        text: __1({
                            id: "DPbGGo"
                        })
                    });
                })
        }
    } : {}} isLoading={pluginsAccess.load === "loading" || secrets?.load === "loading"} onClose={onClose} plugins={{
        isPending: pluginsAccess.isPending,
        writeFailed: pluginsAccess.writeFailed,
        ..._ ? {
            onAddMore: ()=>setE({
                    kind: "list"
                }),
            onOpen: (pluginId)=>setE({
                    kind: "plugin",
                    pluginId,
                    from: "connected"
                }),
            onRemove: pluginsAccess.remove
        } : {}
    }} secrets={secrets?.secrets ?? []} secretsActions={{
        isPending: secrets?.isPending === true,
        writeFailed: secrets?.removeFailure != null,
        ..._ && secrets != null ? {
            onAddMore: ()=>set$(true),
            onOpen: (L)=>setE({
                    kind: "secret",
                    name: L
                }),
            onRemove: secrets.remove
        } : {}
    }} skills={bR(p.librarySkills)} skillsActions={X("skills")} slack={{
        status: b_1({
            serverStatus: agent.slackStatus ?? "none",
            isPublished,
            isAutoUpdating: f === agent.id,
            step: S?.agentId === agent.id ? S.step : null
        }),
        ..._ && isPublished ? {
            onOpen: ()=>{
                onClose();
                setA(true);
            }
        } : {}
    }} status={isPublished ? "published" : "draft"} template={template} {...C && isPublished ? {
        unpublish: {
            isPending: status === "unpublishing",
            onUnpublish: unpublish
        }
    } : {}}/> : null;
    let q;
    if (e[13] !== agentName || e[14] !== contextAccess || e[15] !== b || e[16] !== setB) {
        q = b != null ? <T_3 access={contextAccess} agentName={agentName} onClose={()=>setB(null)} {...b}/> : null;
        e[13] = agentName;
        e[14] = contextAccess;
        e[15] = b;
        e[16] = setB;
        e[17] = q;
    } else {
        q = e[17];
    }
    let F;
    if (e[18] !== agent.serverId || e[19] !== agentName || e[20] !== pluginsAccess || e[21] !== E || e[22] !== secrets || e[23] !== setE) {
        F = E != null ? <T_2 access={pluginsAccess} agentName={agentName} initialPane={E} installedSecrets={secrets} onClose={()=>setE(null)} secretsSection={secrets != null && agent.serverId != null ? <G key={agent.serverId} agentName={agentName} serverId={agent.serverId}/> : null}/> : null;
        e[18] = agent.serverId;
        e[19] = agentName;
        e[20] = pluginsAccess;
        e[21] = E;
        e[22] = secrets;
        e[23] = setE;
        e[24] = F;
    } else {
        F = e[24];
    }
    let v;
    if (e[25] !== agent || e[26] !== A || e[27] !== setA) {
        v = A ? <MsComponent agent={agent} onClose={()=>setA(false)}/> : null;
        e[25] = agent;
        e[26] = A;
        e[27] = setA;
        e[28] = v;
    } else {
        v = e[28];
    }
    let R;
    if (e[29] !== _ || e[30] !== $ || e[31] !== secrets || e[32] !== set$) {
        R = secrets != null ? <T_6 isDisabled={!_ || secrets.isPending} onAdd={(L)=>secrets.replace(L)} onOpenChange={set$} open={$} takenNames={new Set(secrets.secrets.map(Ct))}/> : null;
        e[29] = _;
        e[30] = $;
        e[31] = secrets;
        e[32] = set$;
        e[33] = R;
    } else {
        R = e[33];
    }
    let ee;
    if (e[34] !== U || e[35] !== q || e[36] !== F || e[37] !== v || e[38] !== R) {
        ee = <>{U}{q}{F}{v}{R}</>;
        e[34] = U;
        e[35] = q;
        e[36] = F;
        e[37] = v;
        e[38] = R;
        e[39] = ee;
    } else {
        ee = e[39];
    }
    return ee;
}
function Ct(r) {
    return r.name;
}
const Zt = Object.freeze(Object.defineProperty({
    __proto__: null,
    TeamBotDetailsDialog: ZsComponent
}, Symbol.toStringTag, {
    value: "Module"
}));
export { ZsComponent as T, MsComponent as a, Zt as t };
