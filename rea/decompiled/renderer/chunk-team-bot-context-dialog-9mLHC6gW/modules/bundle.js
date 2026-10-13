import { c as c_1, r as r_1, u as u_1, p as p_1, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { a_, cw, cg, cx, cy, cz, cA, cB, cC, cD, cE, cF, cG, cH, cI, cJ, cK, cL, cM, cN, cO, cP, cQ } from "./index.eager-app-Cj5f8Gby.js";
import { W, aX as X, z as Oe1, x } from "./index-ZYxf-aBb.js";
import { aY as Je1 } from "./index.eager-platform-Dcfeegfw.js";
import { P, a as Te, A } from "./chunk-plugins-rows-2d0UrD7L.js";
import { P as P_1 } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import { u as u_2, f, T as T_2, a as Sl } from "./chunk-team-setup-new-skill-dialog-sf9oPof1.js";
import { g } from "./chunk-get-file-icon-ZAkFyGfn.js";
import { t, b as _l, a as Vl } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import { a as Wl, b as Bl } from "./chunk-team-setup-pills-7uDu4vf1.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a731aa0b-df30-43cb-adf2-52a31754a609";
            e._sentryDebugIdIdentifier = "sentry-dbid-a731aa0b-df30-43cb-adf2-52a31754a609";
        }
    } catch (e) {}
})();
const De = {
    listCount: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    size: {
        kmuXW: "sand-2lah0s",
        kMwMTN: "sand-1o0liin",
        $$css: true
    }
};
function WeComponent(p) {
    WeComponent.d = 982;
    const e = c_1.c(5);
    const { name } = p;
    let t;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-100vrsf sand-1vqgdyp sand-1t6ttyj sand-1tiofj7 sand-1o0liin"
        };
        e[0] = t;
    } else {
        t = e[0];
    }
    let s;
    if (e[1] !== name) {
        s = g(name);
        e[1] = name;
        e[2] = s;
    } else {
        s = e[2];
    }
    let a;
    if (e[3] !== s) {
        a = <span aria-hidden {...t}><W name={s} size="base"/></span>;
        e[3] = s;
        e[4] = a;
    } else {
        a = e[4];
    }
    return a;
}
function ZlComponent(p) {
    ZlComponent.d = 984;
    const e = c_1.c(5);
    const { access, disabled } = p;
    const sRef = r_1.useRef(null);
    let a;
    if (e[0] !== access) {
        a = {
            readListing: ()=>Promise.resolve(access.listing),
            addSkills: (c)=>access.addSkills(c)
        };
        e[0] = access;
        e[1] = a;
    } else {
        a = e[1];
    }
    let u;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            fileInputRef: sRef,
            folderInputRef: sRef
        };
        e[2] = u;
    } else {
        u = e[2];
    }
    const m = u_2(a, disabled, u);
    let d;
    if (e[3] !== m) {
        d = <T_2 fileInputRef={sRef} upload={m}/>;
        e[3] = m;
        e[4] = d;
    } else {
        d = e[4];
    }
    return d;
}
function HeComponent(p) {
    HeComponent.d = 983;
    const e = c_1.c(14);
    const { access, disabled, files, onOpenFile } = p;
    const { _ } = u_1();
    const m = r_1.useId();
    const dRef = r_1.useRef(null);
    let c;
    if (e[0] !== access) {
        c = {
            readListing: ()=>Promise.resolve(access.listing),
            addSkills: (z)=>access.addSkills(z)
        };
        e[0] = access;
        e[1] = c;
    } else {
        c = e[1];
    }
    let o;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            fileInputRef: dRef,
            folderInputRef: dRef
        };
        e[2] = o;
    } else {
        o = e[2];
    }
    const h = u_2(c, disabled, o);
    let r;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli"
        };
        e[3] = r;
    } else {
        r = e[3];
    }
    let S;
    if (e[4] !== h) {
        S = <T_2 fileInputRef={dRef} upload={h}/>;
        e[4] = h;
        e[5] = S;
    } else {
        S = e[5];
    }
    let x;
    if (e[6] !== _ || e[7] !== files || e[8] !== m || e[9] !== onOpenFile) {
        x = files.length === 0 ? null : <><p id={m} {...p_1(a_.body2, De.listCount)}>{_({
            id: "kRr3s3",
            values: {
                0: files.length
            }
        })}</p><P isFullWidth labelledBy={m}>{files.map((z)=>{
            const name = cw(z);
            return <Te key={z.name} icon=<WeComponent name={name}/> name={name} onOpen={()=>onOpenFile(z)} wrapsName subtitle={null} trailing=<span {...p_1(a_.body2, De.size)}>{f(z.content)}</span> trailingOpensRow/>;
        })}</P></>;
        e[6] = _;
        e[7] = files;
        e[8] = m;
        e[9] = onOpenFile;
        e[10] = x;
    } else {
        x = e[10];
    }
    let j;
    if (e[11] !== S || e[12] !== x) {
        j = <div {...r}>{S}{x}</div>;
        e[11] = S;
        e[12] = x;
        e[13] = j;
    } else {
        j = e[13];
    }
    return j;
}
const I = t;
const Ie = {
    loading: {
        kogj98: "sand-1ghz6dp",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    noMatches: {
        kogj98: "sand-1ghz6dp",
        kLKAdn: "sand-1y1aw1k",
        kZCmMZ: "sand-1g0dm76",
        kwRFfy: "sand-pdmqnj",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    textarea: {
        kAzted: "sand-1shn012",
        kHenm0: "sand-288g5",
        $$css: true
    }
};
function GeComponent(p) {
    GeComponent.d = 974;
    const e = c_1.c(2);
    const { surface } = p;
    let t;
    if (e[0] !== surface) {
        t = surface === "files" ? <T id="sER+bs"/> : <T id="PCSkw2"/>;
        e[0] = surface;
        e[1] = t;
    } else {
        t = e[1];
    }
    return t;
}
function YeComponent(p) {
    YeComponent.d = 973;
    const e = c_1.c(3);
    const { agentName, surface } = p;
    let s;
    if (e[0] !== agentName || e[1] !== surface) {
        s = surface === "files" ? <T id="uGw/Ea"/> : <T id="nYwHT5" values={{
            agentName
        }}/>;
        e[0] = agentName;
        e[1] = surface;
        e[2] = s;
    } else {
        s = e[2];
    }
    return s;
}
function ZeComponent(p) {
    ZeComponent.d = 978;
    const e = c_1.c(4);
    const { name } = p;
    let t;
    let s;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1useyqa sand-sdox4t sand-1t6ttyj sand-1tiofj7 sand-1o0liin"
        };
        s = <W name="book" size="lg"/>;
        e[0] = t;
        e[1] = s;
    } else {
        t = e[0];
        s = e[1];
    }
    let a;
    if (e[2] !== name) {
        a = <span aria-label={name} role="img" {...t}>{s}</span>;
        e[2] = name;
        e[3] = a;
    } else {
        a = e[3];
    }
    return a;
}
function De1Component(p) {
    De1Component.d = 975;
    const e = c_1.c(7);
    const { access } = p;
    if (!access.writeFailed && !access.needsRetry) {
        return null;
    }
    let t;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = <Je1 as="p" color="red" role="alert" size="sm"><T id="D2AZQg"/></Je1>;
        e[0] = t;
    } else {
        t = e[0];
    }
    let s;
    if (e[1] !== access.isPending || e[2] !== access.needsRetry || e[3] !== access.retry) {
        s = access.needsRetry ? <Oe1 disabled={access.isPending} onClick={access.retry} size="sm" type="button" variant="secondary"><T id="qJb6G2"/></Oe1> : null;
        e[1] = access.isPending;
        e[2] = access.needsRetry;
        e[3] = access.retry;
        e[4] = s;
    } else {
        s = e[4];
    }
    let a;
    if (e[5] !== s) {
        a = <>{t}{s}</>;
        e[5] = s;
        e[6] = a;
    } else {
        a = e[6];
    }
    return a;
}
function UeComponent(p) {
    UeComponent.d = 977;
    const e = c_1.c(47);
    const { title, initialName, initialContent, disabled, onSave, access } = p;
    const d = r_1.useId();
    const c = r_1.useId();
    const [o, setO] = r_1.useState(initialName);
    const [r, setR] = r_1.useState(initialContent);
    let x;
    if (e[0] !== r || e[1] !== disabled || e[2] !== o) {
        x = o.trim().length > 0 && r.trim().length > 0 && !disabled;
        e[0] = r;
        e[1] = disabled;
        e[2] = o;
        e[3] = x;
    } else {
        x = e[3];
    }
    const j = x;
    let z;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        z = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d sand-h8yej3 sand-euugli sand-kh2ocl"
        };
        e[4] = z;
    } else {
        z = e[4];
    }
    let k;
    if (e[5] !== title) {
        k = <Je1 as="h3" size="lg" weight="semibold">{title}</Je1>;
        e[5] = title;
        e[6] = k;
    } else {
        k = e[6];
    }
    let K;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        K = {
            className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-17d4w8g sand-h8yej3"
        };
        e[7] = K;
    } else {
        K = e[7];
    }
    let le;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        le = <Je1 as="span" size="sm" weight="semibold"><T id="6YtxFj"/></Je1>;
        e[8] = le;
    } else {
        le = e[8];
    }
    let ne;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        ne = (se)=>setO(se.currentTarget.value);
        e[9] = ne;
    } else {
        ne = e[9];
    }
    let D;
    if (e[10] !== o || e[11] !== d) {
        D = <X.Input id={d} onChange={ne} value={o}/>;
        e[10] = o;
        e[11] = d;
        e[12] = D;
    } else {
        D = e[12];
    }
    let P;
    if (e[13] !== disabled || e[14] !== D) {
        P = <X disabled={disabled} size="lg">{D}</X>;
        e[13] = disabled;
        e[14] = D;
        e[15] = P;
    } else {
        P = e[15];
    }
    let O;
    if (e[16] !== d || e[17] !== P) {
        O = <label htmlFor={d} {...K}>{le}{P}</label>;
        e[16] = d;
        e[17] = P;
        e[18] = O;
    } else {
        O = e[18];
    }
    let E;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
        E = {
            className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-17d4w8g sand-h8yej3"
        };
        e[19] = E;
    } else {
        E = e[19];
    }
    let $;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        $ = <Je1 as="span" size="sm" weight="semibold"><T id="4b3oEV"/></Je1>;
        e[20] = $;
    } else {
        $ = e[20];
    }
    let C;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        C = (se)=>setR(se.currentTarget.value);
        e[21] = C;
    } else {
        C = e[21];
    }
    let Q;
    if (e[22] !== r || e[23] !== c) {
        Q = <X.Textarea id={c} onChange={C} rows={8} value={r}/>;
        e[22] = r;
        e[23] = c;
        e[24] = Q;
    } else {
        Q = e[24];
    }
    let te;
    if (e[25] !== disabled || e[26] !== Q) {
        te = <X disabled={disabled} layout="textarea" rootStyle={Ie.textarea} size="lg">{Q}</X>;
        e[25] = disabled;
        e[26] = Q;
        e[27] = te;
    } else {
        te = e[27];
    }
    let U;
    if (e[28] !== c || e[29] !== te) {
        U = <label htmlFor={c} {...E}>{$}{te}</label>;
        e[28] = c;
        e[29] = te;
        e[30] = U;
    } else {
        U = e[30];
    }
    const disabled_1 = !j;
    let V;
    if (e[31] !== r || e[32] !== o || e[33] !== onSave) {
        V = ()=>onSave(o.trim(), r);
        e[31] = r;
        e[32] = o;
        e[33] = onSave;
        e[34] = V;
    } else {
        V = e[34];
    }
    let W;
    if (e[35] === Symbol.for("react.memo_cache_sentinel")) {
        W = <T id="tfDRzk"/>;
        e[35] = W;
    } else {
        W = e[35];
    }
    let H;
    if (e[36] !== disabled_1 || e[37] !== V) {
        H = <Oe1 disabled={disabled_1} onClick={V} size="sm" type="button" variant="primary">{W}</Oe1>;
        e[36] = disabled_1;
        e[37] = V;
        e[38] = H;
    } else {
        H = e[38];
    }
    let M;
    if (e[39] !== access) {
        M = <De1Component access={access}/>;
        e[39] = access;
        e[40] = M;
    } else {
        M = e[40];
    }
    let G;
    if (e[41] !== U || e[42] !== H || e[43] !== M || e[44] !== k || e[45] !== O) {
        G = <div {...z}>{k}{O}{U}{H}{M}</div>;
        e[41] = U;
        e[42] = H;
        e[43] = M;
        e[44] = k;
        e[45] = O;
        e[46] = G;
    } else {
        G = e[46];
    }
    return G;
}
function ReComponent(p) {
    ReComponent.d = 979;
    const e = c_1.c(25);
    const { title, description, content, badge, actions } = p;
    let m;
    let d;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-h8yej3 sand-euugli sand-kh2ocl"
        };
        d = {
            className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-euugli"
        };
        e[0] = m;
        e[1] = d;
    } else {
        m = e[0];
        d = e[1];
    }
    let c;
    if (e[2] !== title) {
        c = <ZeComponent name={title}/>;
        e[2] = title;
        e[3] = c;
    } else {
        c = e[3];
    }
    let o;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        o = {
            className: "sand-78zum5 sand-dt5ytf sand-1ed6fcf sand-1iyjqo2 sand-euugli"
        };
        e[4] = o;
    } else {
        o = e[4];
    }
    let h;
    if (e[5] !== title) {
        h = <Je1 as="h3" size="lg" weight="semibold">{title}</Je1>;
        e[5] = title;
        e[6] = h;
    } else {
        h = e[6];
    }
    let r;
    if (e[7] !== badge || e[8] !== h) {
        r = <div {...o}>{h}{badge}</div>;
        e[7] = badge;
        e[8] = h;
        e[9] = r;
    } else {
        r = e[9];
    }
    let S;
    if (e[10] !== actions) {
        S = actions != null ? <div className="sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1a02dak sand-13a6bvl sand-167g77z sand-vc5jky">{actions}</div> : null;
        e[10] = actions;
        e[11] = S;
    } else {
        S = e[11];
    }
    let x;
    if (e[12] !== c || e[13] !== r || e[14] !== S) {
        x = <div {...d}>{c}{r}{S}</div>;
        e[12] = c;
        e[13] = r;
        e[14] = S;
        e[15] = x;
    } else {
        x = e[15];
    }
    let j;
    if (e[16] !== description) {
        j = description.length > 0 ? <Je1 as="p" color="secondary" size="sm">{description}</Je1> : null;
        e[16] = description;
        e[17] = j;
    } else {
        j = e[17];
    }
    let z;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        z = {
            className: "sand-1ghz6dp sand-c7ga6q sand-1qmwy7c sand-1tiofj7 sand-126k92a sand-j0a0fe"
        };
        e[18] = z;
    } else {
        z = e[18];
    }
    let k;
    if (e[19] !== content) {
        k = <pre {...z}>{content}</pre>;
        e[19] = content;
        e[20] = k;
    } else {
        k = e[20];
    }
    let K;
    if (e[21] !== k || e[22] !== x || e[23] !== j) {
        K = <div {...m}>{x}{j}{k}</div>;
        e[21] = k;
        e[22] = x;
        e[23] = j;
        e[24] = K;
    } else {
        K = e[24];
    }
    return K;
}
function VeComponent(p) {
    VeComponent.d = 976;
    const e = c_1.c(22);
    const { skills, onBot, disabled, onImport, onRemove, onOpen } = p;
    const d = r_1.useId();
    let c;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        c = <T id="vD68LO"/>;
        e[0] = c;
    } else {
        c = e[0];
    }
    let o;
    if (e[1] !== d) {
        o = <span hidden id={d}>{c}</span>;
        e[1] = d;
        e[2] = o;
    } else {
        o = e[2];
    }
    let h;
    if (e[3] !== disabled || e[4] !== onBot || e[5] !== onImport || e[6] !== onOpen || e[7] !== onRemove || e[8] !== skills) {
        let x;
        if (e[10] !== disabled || e[11] !== onBot || e[12] !== onImport || e[13] !== onOpen || e[14] !== onRemove) {
            x = (j)=>{
                const z = cH(j, onBot);
                return <Te key={j.id} icon={null} name={j.name} onOpen={()=>onOpen(j)} subtitle={cM(j) || null} wrapsName trailing={z === undefined ? <Wl disabled={disabled} name={j.name} onAdd={()=>onImport(j)}/> : <Bl disabled={disabled} name={j.name} onRemove={()=>onRemove(z.name)}/>}/>;
            };
            e[10] = disabled;
            e[11] = onBot;
            e[12] = onImport;
            e[13] = onOpen;
            e[14] = onRemove;
            e[15] = x;
        } else {
            x = e[15];
        }
        h = skills.map(x);
        e[3] = disabled;
        e[4] = onBot;
        e[5] = onImport;
        e[6] = onOpen;
        e[7] = onRemove;
        e[8] = skills;
        e[9] = h;
    } else {
        h = e[9];
    }
    let r;
    if (e[16] !== d || e[17] !== h) {
        r = <P isFullWidth labelledBy={d}>{h}</P>;
        e[16] = d;
        e[17] = h;
        e[18] = r;
    } else {
        r = e[18];
    }
    let S;
    if (e[19] !== o || e[20] !== r) {
        S = <>{o}{r}</>;
        e[19] = o;
        e[20] = r;
        e[21] = S;
    } else {
        S = e[21];
    }
    return S;
}
function JeComponent(p) {
    JeComponent.d = 972;
    const e = c_1.c(16);
    const { skills, onOpen } = p;
    const { _ } = u_1();
    const a = r_1.useId();
    let u;
    if (e[0] !== _) {
        u = _({
            id: "IYyHwi"
        });
        e[0] = _;
        e[1] = u;
    } else {
        u = e[1];
    }
    let m;
    if (e[2] !== a || e[3] !== u) {
        m = <span hidden id={a}>{u}</span>;
        e[2] = a;
        e[3] = u;
        e[4] = m;
    } else {
        m = e[4];
    }
    let d;
    if (e[5] !== onOpen || e[6] !== skills) {
        let h;
        if (e[8] !== onOpen) {
            h = (r)=><Te key={r.name} byline={cO(r)} icon={null} name={cw(r)} onOpen={()=>onOpen(r)} subtitle={cN(r) || null} trailing=<A/> wrapsName/>;
            e[8] = onOpen;
            e[9] = h;
        } else {
            h = e[9];
        }
        d = skills.map(h);
        e[5] = onOpen;
        e[6] = skills;
        e[7] = d;
    } else {
        d = e[7];
    }
    let c;
    if (e[10] !== a || e[11] !== d) {
        c = <P isFullWidth labelledBy={a}>{d}</P>;
        e[10] = a;
        e[11] = d;
        e[12] = c;
    } else {
        c = e[12];
    }
    let o;
    if (e[13] !== m || e[14] !== c) {
        o = <>{m}{c}</>;
        e[13] = m;
        e[14] = c;
        e[15] = o;
    } else {
        o = e[15];
    }
    return o;
}
function ClComponent(p, setS, surface) {
    switch(p.kind){
        case "list":
            return null;
        case "added":
            return {
                onBack: ()=>setS({
                        kind: "list"
                    }),
                label: <T id="ggmjet"/>
            };
        case "skill":
            if (surface === "files") {
                return {
                    onBack: ()=>setS({
                            kind: "list"
                        }),
                    label: <T id="sER+bs"/>
                };
            }
            return {
                onBack: ()=>setS({
                        kind: "added"
                    }),
                label: <T id="IYyHwi"/>
            };
        case "candidate":
            return {
                onBack: ()=>setS({
                        kind: "list"
                    }),
                label: <T id="ggmjet"/>
            };
        case "edit":
            return {
                onBack: ()=>setS({
                        kind: "skill",
                        name: p.skill.name
                    }),
                label: cw(p.skill)
            };
    }
}
function NlComponent(p) {
    NlComponent.d = 980;
    const e = c_1.c(155);
    const { agentName, access, surface, initialPane, isCardPreview, onClose } = p;
    const d = isCardPreview === undefined ? false : isCardPreview;
    const { i18n, _ } = u_1();
    const [h] = r_1.useState(initialPane);
    let r;
    if (e[0] !== h) {
        r = h ?? {
            kind: "list"
        };
        e[0] = h;
        e[1] = r;
    } else {
        r = e[1];
    }
    const [S, setS] = r_1.useState(r);
    const [j, setJ] = r_1.useState("");
    const [k, setK] = r_1.useState("");
    const [le, setLe] = r_1.useState(false);
    let onAdd;
    let P;
    let O;
    let paneBackButton;
    let $;
    let C;
    if (e[2] !== _ || e[3] !== access || e[4] !== k || e[5] !== i18n.locale || e[6] !== d || e[7] !== h || e[8] !== S || e[9] !== j || e[10] !== surface) {
        const ye = cg(access.listing.plugins);
        const we = surface === "files" ? ye.fileSkills : ye.librarySkills;
        const Be = surface === "files" ? [] : cx(cy(access.userSkills, ye.fileSkills), j, i18n.locale);
        const ze = cz(cA(we, i18n.locale), k, i18n.locale);
        const ee = cB(S, we, Be);
        const $e = cC(S, ee);
        if ($e != null) {
            setS($e);
        }
        const Ce = ee.kind === "list";
        O = ee.kind === "added";
        $ = Ce || O;
        const Ne = h != null && h.kind !== "added" && JSON.stringify(S) === JSON.stringify(h) ? null : ClComponent(ee, setS, surface);
        C = access.isPending || access.load !== "ready";
        let be;
        if (e[17] !== access) {
            be = (i)=>{
                access.addSkill(cP(i));
                setS({
                    kind: "list"
                });
            };
            e[17] = access;
            e[18] = be;
        } else {
            be = e[18];
        }
        const Xe = be;
        let Se;
        if (e[19] !== access) {
            Se = async (i)=>await access.addSkills([
                    {
                        name: i.name,
                        content: cQ(i)
                    }
                ]) === 1;
            e[19] = access;
            e[20] = Se;
        } else {
            Se = e[20];
        }
        onAdd = Se;
        paneBackButton = Ne == null ? null : <P_1 onBack={Ne.onBack}>{Ne.label}</P_1>;
        let ke;
        if (e[21] !== j) {
            ke = j.trim();
            e[21] = j;
            e[22] = ke;
        } else {
            ke = e[22];
        }
        const trimmedQuery = ke;
        let ae = null;
        if (Be.length > 0) {
            let onImport;
            if (e[23] !== access) {
                onImport = (y)=>access.addSkill(cP(y));
                e[23] = access;
                e[24] = onImport;
            } else {
                onImport = e[24];
            }
            let onOpen;
            if (e[25] === Symbol.for("react.memo_cache_sentinel")) {
                onOpen = (y)=>setS({
                        kind: "candidate",
                        skillId: y.id
                    });
                e[25] = onOpen;
            } else {
                onOpen = e[25];
            }
            ae = <VeComponent disabled={C} onBot={ye.librarySkills} onImport={onImport} onOpen={onOpen} onRemove={access.removeBotSkill} skills={Be}/>;
        } else if (access.userSkillsLoad === "loading") {
            let i;
            if (e[26] === Symbol.for("react.memo_cache_sentinel")) {
                i = <p role="status" {...p_1(a_.label, Ie.loading)}><T id="yQE2r9"/></p>;
                e[26] = i;
            } else {
                i = e[26];
            }
            ae = i;
        } else if (access.userSkillsLoad === "ready" && trimmedQuery.length > 0) {
            let i;
            if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
                i = p_1(a_.body2, I.empty);
                e[27] = i;
            } else {
                i = e[27];
            }
            let f;
            if (e[28] !== trimmedQuery) {
                f = <p role="status" {...i}><T id="/W3n+m" values={{
                    trimmedQuery
                }}/></p>;
                e[28] = trimmedQuery;
                e[29] = f;
            } else {
                f = e[29];
            }
            ae = f;
        } else if (access.userSkillsLoad === "ready") {
            let i;
            if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
                i = <p {...p_1(a_.body2, I.empty)}><T id="jfK17s"/></p>;
                e[30] = i;
            } else {
                i = e[30];
            }
            ae = i;
        }
        if (Ce && surface === "files") {
            let i;
            if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
                i = p_1(I.scroller);
                e[31] = i;
            } else {
                i = e[31];
            }
            let onOpenFile;
            if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
                onOpenFile = (v)=>setS({
                        kind: "skill",
                        name: v.name
                    });
                e[32] = onOpenFile;
            } else {
                onOpenFile = e[32];
            }
            let y;
            if (e[33] !== access) {
                y = <De1Component access={access}/>;
                e[33] = access;
                e[34] = y;
            } else {
                y = e[34];
            }
            P = <div {...i}><HeComponent access={access} disabled={C} files={cA(we, i18n.locale)} onOpenFile={onOpenFile}/>{y}</div>;
        } else if (Ce) {
            let i;
            let f;
            let y;
            if (e[35] === Symbol.for("react.memo_cache_sentinel")) {
                i = p_1(I.chrome);
                f = p_1(I.searchRow);
                y = p_1(I.searchField);
                e[35] = i;
                e[36] = f;
                e[37] = y;
            } else {
                i = e[35];
                f = e[36];
                y = e[37];
            }
            let v;
            if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
                v = <X.Icon name="search"/>;
                e[38] = v;
            } else {
                v = e[38];
            }
            let N;
            if (e[39] !== _) {
                N = _({
                    id: "BlLxpG"
                });
                e[39] = _;
                e[40] = N;
            } else {
                N = e[40];
            }
            let L;
            if (e[41] === Symbol.for("react.memo_cache_sentinel")) {
                L = (el)=>setJ(el.currentTarget.value);
                e[41] = L;
            } else {
                L = e[41];
            }
            let B;
            if (e[42] !== _) {
                B = _({
                    id: "BlLxpG"
                });
                e[42] = _;
                e[43] = B;
            } else {
                B = e[43];
            }
            let g;
            if (e[44] !== j || e[45] !== N || e[46] !== B) {
                g = <div {...y}><X rootStyle={I.searchRoot} shape="pill" size="lg">{v}<X.Input aria-label={N} onChange={L} placeholder={B} value={j}/></X></div>;
                e[44] = j;
                e[45] = N;
                e[46] = B;
                e[47] = g;
            } else {
                g = e[47];
            }
            let w;
            if (e[48] === Symbol.for("react.memo_cache_sentinel")) {
                w = ()=>setLe(true);
                e[48] = w;
            } else {
                w = e[48];
            }
            let R;
            if (e[49] === Symbol.for("react.memo_cache_sentinel")) {
                R = <T id="sNew++"/>;
                e[49] = R;
            } else {
                R = e[49];
            }
            let b;
            if (e[50] !== C) {
                b = <Oe1 disabled={C} leadingIcon="plus" onClick={w} size="md" type="button" variant="secondary">{R}</Oe1>;
                e[50] = C;
                e[51] = b;
            } else {
                b = e[51];
            }
            let F;
            if (e[52] !== g || e[53] !== b) {
                F = <div {...i}><div {...f}>{g}{b}</div></div>;
                e[52] = g;
                e[53] = b;
                e[54] = F;
            } else {
                F = e[54];
            }
            let Y;
            if (e[55] === Symbol.for("react.memo_cache_sentinel")) {
                Y = p_1(I.scroller);
                e[55] = Y;
            } else {
                Y = e[55];
            }
            let Z;
            if (e[56] !== access) {
                Z = <De1Component access={access}/>;
                e[56] = access;
                e[57] = Z;
            } else {
                Z = e[57];
            }
            let J;
            if (e[58] !== ae || e[59] !== Z) {
                J = <div {...Y}>{ae}{Z}</div>;
                e[58] = ae;
                e[59] = Z;
                e[60] = J;
            } else {
                J = e[60];
            }
            let _e;
            if (e[61] !== F || e[62] !== J) {
                _e = <>{F}{J}</>;
                e[61] = F;
                e[62] = J;
                e[63] = _e;
            } else {
                _e = e[63];
            }
            P = _e;
        } else if (O) {
            const trimmed = k.trim();
            let f;
            let y;
            if (e[64] === Symbol.for("react.memo_cache_sentinel")) {
                f = p_1(I.subpane);
                y = p_1(I.chrome);
                e[64] = f;
                e[65] = y;
            } else {
                f = e[64];
                y = e[65];
            }
            let v;
            if (e[66] === Symbol.for("react.memo_cache_sentinel")) {
                v = <X.Icon name="search"/>;
                e[66] = v;
            } else {
                v = e[66];
            }
            let N;
            if (e[67] !== _) {
                N = _({
                    id: "gEufoy"
                });
                e[67] = _;
                e[68] = N;
            } else {
                N = e[68];
            }
            let L;
            if (e[69] === Symbol.for("react.memo_cache_sentinel")) {
                L = (J)=>setK(J.currentTarget.value);
                e[69] = L;
            } else {
                L = e[69];
            }
            let B;
            if (e[70] !== _) {
                B = _({
                    id: "gEufoy"
                });
                e[70] = _;
                e[71] = B;
            } else {
                B = e[71];
            }
            let g;
            if (e[72] !== k || e[73] !== B || e[74] !== N) {
                g = <div {...y}><X rootStyle={I.searchRoot} shape="pill" size="lg">{v}<X.Input aria-label={N} onChange={L} placeholder={B} value={k}/></X></div>;
                e[72] = k;
                e[73] = B;
                e[74] = N;
                e[75] = g;
            } else {
                g = e[75];
            }
            let w;
            if (e[76] === Symbol.for("react.memo_cache_sentinel")) {
                w = p_1(I.scroller);
                e[76] = w;
            } else {
                w = e[76];
            }
            const R = ze.length > 0 ? <JeComponent onOpen={(J)=>setS({
                    kind: "skill",
                    name: J.name
                })} skills={ze}/> : null;
            const b = ze.length === 0 && trimmed.length > 0 ? <p role="status" {...p_1(a_.label, Ie.noMatches)}>{_({
                id: "NQSKOV",
                values: {
                    trimmed
                }
            })}</p> : null;
            let F;
            if (e[77] !== access) {
                F = <De1Component access={access}/>;
                e[77] = access;
                e[78] = F;
            } else {
                F = e[78];
            }
            let Y;
            if (e[79] !== R || e[80] !== b || e[81] !== F) {
                Y = <div {...w}>{R}{b}{F}</div>;
                e[79] = R;
                e[80] = b;
                e[81] = F;
                e[82] = Y;
            } else {
                Y = e[82];
            }
            let Z;
            if (e[83] !== g || e[84] !== Y) {
                Z = <div {...f}>{g}{Y}</div>;
                e[83] = g;
                e[84] = Y;
                e[85] = Z;
            } else {
                Z = e[85];
            }
            P = Z;
        } else if (ee.kind === "edit") {
            const i = ee.skill;
            let f;
            if (e[86] === Symbol.for("react.memo_cache_sentinel")) {
                f = p_1(I.scroller);
                e[86] = f;
            } else {
                f = e[86];
            }
            let y;
            if (e[87] === Symbol.for("react.memo_cache_sentinel")) {
                y = <T id="0NuXpZ"/>;
                e[87] = y;
            } else {
                y = e[87];
            }
            P = <div {...f}><UeComponent key={i.name} access={access} disabled={C} initialContent={i.content} initialName={cD(i)} onSave={(v, N)=>{
                access.updateSkill({
                    name: i.name,
                    content: cE(v, N)
                });
                setS({
                    kind: "added"
                });
            }} title={y}/></div>;
        } else if (ee.kind === "skill") {
            const i = ee.skill;
            let f;
            if (e[88] === Symbol.for("react.memo_cache_sentinel")) {
                f = p_1(I.scroller);
                e[88] = f;
            } else {
                f = e[88];
            }
            let y;
            if (e[89] === Symbol.for("react.memo_cache_sentinel")) {
                y = <T id="ePK91l"/>;
                e[89] = y;
            } else {
                y = e[89];
            }
            let v;
            if (e[90] === Symbol.for("react.memo_cache_sentinel")) {
                v = <T id="t/YqKh"/>;
                e[90] = v;
            } else {
                v = e[90];
            }
            const actions = <><Oe1 disabled={C} onClick={()=>setS({
                    kind: "edit",
                    name: i.name
                })} size="sm" type="button" variant="secondary">{y}</Oe1><Oe1 disabled={C} onClick={()=>{
                access.removeBotSkill(i.name);
                setS({
                    kind: "added"
                });
            }} sentiment="danger" size="sm" type="button" variant="secondary">{v}</Oe1></>;
            let badge;
            if (e[91] === Symbol.for("react.memo_cache_sentinel")) {
                badge = <A/>;
                e[91] = badge;
            } else {
                badge = e[91];
            }
            const content = cF(i.content).body.trim();
            let g;
            if (e[92] !== i) {
                g = cG(i);
                e[92] = i;
                e[93] = g;
            } else {
                g = e[93];
            }
            let w;
            if (e[94] !== i) {
                w = cw(i);
                e[94] = i;
                e[95] = w;
            } else {
                w = e[95];
            }
            let R;
            if (e[96] !== content || e[97] !== g || e[98] !== w || e[99] !== actions) {
                R = <ReComponent actions={actions} badge={badge} content={content} description={g} title={w}/>;
                e[96] = content;
                e[97] = g;
                e[98] = w;
                e[99] = actions;
                e[100] = R;
            } else {
                R = e[100];
            }
            let b;
            if (e[101] !== access) {
                b = <De1Component access={access}/>;
                e[101] = access;
                e[102] = b;
            } else {
                b = e[102];
            }
            let F;
            if (e[103] !== R || e[104] !== b) {
                F = <div {...f}>{R}{b}</div>;
                e[103] = R;
                e[104] = b;
                e[105] = F;
            } else {
                F = e[105];
            }
            P = F;
        } else {
            const i = ee.skill;
            const f = cH(i, ye.librarySkills);
            let y = null;
            if (!d && f !== undefined) {
                let b;
                if (e[106] === Symbol.for("react.memo_cache_sentinel")) {
                    b = <T id="t/YqKh"/>;
                    e[106] = b;
                } else {
                    b = e[106];
                }
                y = <Oe1 disabled={C} onClick={()=>access.removeBotSkill(f.name)} sentiment="danger" size="sm" type="button" variant="secondary">{b}</Oe1>;
            } else if (!d) {
                let b;
                if (e[107] === Symbol.for("react.memo_cache_sentinel")) {
                    b = <T id="m16xKo"/>;
                    e[107] = b;
                } else {
                    b = e[107];
                }
                y = <Oe1 disabled={C} onClick={()=>Xe(i)} size="sm" type="button" variant="primary">{b}</Oe1>;
            }
            let v;
            if (e[108] === Symbol.for("react.memo_cache_sentinel")) {
                v = p_1(I.scroller);
                e[108] = v;
            } else {
                v = e[108];
            }
            const actions = y;
            const content = cF(i.body).body.trim();
            let B;
            if (e[109] !== i) {
                B = cI(i.description);
                e[109] = i;
                e[110] = B;
            } else {
                B = e[110];
            }
            const g = <ReComponent actions={actions} content={content} description={B} title={i.name}/>;
            let w;
            if (e[111] !== access) {
                w = <De1Component access={access}/>;
                e[111] = access;
                e[112] = w;
            } else {
                w = e[112];
            }
            let R;
            if (e[113] !== g || e[114] !== w) {
                R = <div {...v}>{g}{w}</div>;
                e[113] = g;
                e[114] = w;
                e[115] = R;
            } else {
                R = e[115];
            }
            P = R;
        }
        e[2] = _;
        e[3] = access;
        e[4] = k;
        e[5] = i18n.locale;
        e[6] = d;
        e[7] = h;
        e[8] = S;
        e[9] = j;
        e[10] = surface;
        e[11] = onAdd;
        e[12] = P;
        e[13] = O;
        e[14] = paneBackButton;
        e[15] = $;
        e[16] = C;
    } else {
        onAdd = e[11];
        P = e[12];
        O = e[13];
        paneBackButton = e[14];
        $ = e[15];
        C = e[16];
    }
    let Q;
    if (e[116] !== _ || e[117] !== surface) {
        Q = _(surface === "files" ? {
            id: "sER+bs"
        } : {
            id: "PCSkw2"
        });
        e[116] = _;
        e[117] = surface;
        e[118] = Q;
    } else {
        Q = e[118];
    }
    const te = Q;
    const U = surface === "skills";
    const ariaLabel = $ ? undefined : te;
    const V = $ ? I.header : I.headerCompact;
    let W;
    if (e[119] !== agentName || e[120] !== paneBackButton || e[121] !== surface || e[122] !== $) {
        W = $ ? <_l description=<YeComponent agentName={agentName} surface={surface}/> paneBackButton={paneBackButton} title=<GeComponent surface={surface}/>/> : paneBackButton;
        e[119] = agentName;
        e[120] = paneBackButton;
        e[121] = surface;
        e[122] = $;
        e[123] = W;
    } else {
        W = e[123];
    }
    let H;
    if (e[124] === Symbol.for("react.memo_cache_sentinel")) {
        H = <x.CloseButton/>;
        e[124] = H;
    } else {
        H = e[124];
    }
    let M;
    if (e[125] !== V || e[126] !== W) {
        M = <x.Header style={V}>{W}{H}</x.Header>;
        e[125] = V;
        e[126] = W;
        e[127] = M;
    } else {
        M = e[127];
    }
    let G;
    if (e[128] !== O) {
        G = O ? [
            I.dialogBody,
            I.dialogBodySubpane
        ] : I.dialogBody;
        e[128] = O;
        e[129] = G;
    } else {
        G = e[129];
    }
    let se;
    if (e[130] === Symbol.for("react.memo_cache_sentinel")) {
        se = p_1(I.body);
        e[130] = se;
    } else {
        se = e[130];
    }
    let ce;
    if (e[131] !== P) {
        ce = <div {...se}>{P}</div>;
        e[131] = P;
        e[132] = ce;
    } else {
        ce = e[132];
    }
    let re;
    if (e[133] !== ce || e[134] !== G) {
        re = <x.Body style={G}>{ce}</x.Body>;
        e[133] = ce;
        e[134] = G;
        e[135] = re;
    } else {
        re = e[135];
    }
    let me;
    if (e[136] !== onClose || e[137] !== $) {
        me = $ ? <x.ActionBar><x.ActionSpacer/><x.Action onClick={onClose} variant="primary"><T id="DPfwMq"/></x.Action></x.ActionBar> : null;
        e[136] = onClose;
        e[137] = $;
        e[138] = me;
    } else {
        me = e[138];
    }
    let fe;
    if (e[139] !== onClose || e[140] !== re || e[141] !== me || e[142] !== ariaLabel || e[143] !== M) {
        fe = <Vl ariaLabel={ariaLabel} onClose={onClose}>{M}{re}{me}</Vl>;
        e[139] = onClose;
        e[140] = re;
        e[141] = me;
        e[142] = ariaLabel;
        e[143] = M;
        e[144] = fe;
    } else {
        fe = e[144];
    }
    let ue;
    if (e[145] !== access.listing.plugins || e[146] !== access.userSkills || e[147] !== onAdd || e[148] !== U || e[149] !== le || e[150] !== C) {
        ue = U ? <Sl isDisabled={C} onAdd={onAdd} onOpenChange={setLe} open={le} takenKeys={new Set([
            ...cJ(access.listing.plugins),
            ...cK(access.userSkills)
        ].map(Il))}/> : null;
        e[145] = access.listing.plugins;
        e[146] = access.userSkills;
        e[147] = onAdd;
        e[148] = U;
        e[149] = le;
        e[150] = C;
        e[151] = ue;
    } else {
        ue = e[151];
    }
    let pe;
    if (e[152] !== fe || e[153] !== ue) {
        pe = <>{fe}{ue}</>;
        e[152] = fe;
        e[153] = ue;
        e[154] = pe;
    } else {
        pe = e[154];
    }
    return pe;
}
function Il(p) {
    return cL(p.name);
}
export { NlComponent as T, ZlComponent as a };
