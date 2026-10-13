import { c as c_1, T, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { g as Se1, W, aY, aZ, a_, a$, b0, b1 } from "./index-ZYxf-aBb.js";
import { aY as Ae1 } from "./index.eager-platform-Dcfeegfw.js";
import { b7, cR, cf, cS, cT, cU, cV, cW, cX, cY, cZ, c_, c$, d0, d1 } from "./index.eager-app-Cj5f8Gby.js";
import { u as u_1, s as s_1 } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "58ed0f5b-228e-4b00-8349-6b7289ce8952";
            e._sentryDebugIdIdentifier = "sentry-dbid-58ed0f5b-228e-4b00-8349-6b7289ce8952";
        }
    } catch (e) {}
})();
function FeComponent(f) {
    FeComponent.d = 954;
    const e = c_1.c(8);
    const { onBack, icon, autoFocus, children } = f;
    const c = icon === undefined ? "arrow-left" : icon;
    const autoFocus_1 = autoFocus === undefined ? false : autoFocus;
    let i;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-qcrz7y sand-17d4w8g sand-1717udv sand-ng3xce sand-jbqb8w sand-1o0liin sand-jb2p0i sand-1ypdohk"
        };
        e[0] = i;
    } else {
        i = e[0];
    }
    let d;
    if (e[1] !== c) {
        d = <W name={c} size="sm"/>;
        e[1] = c;
        e[2] = d;
    } else {
        d = e[2];
    }
    let m;
    if (e[3] !== autoFocus_1 || e[4] !== children || e[5] !== onBack || e[6] !== d) {
        m = <button autoFocus={autoFocus_1} {...i} onClick={onBack} type="button">{d}{children}</button>;
        e[3] = autoFocus_1;
        e[4] = children;
        e[5] = onBack;
        e[6] = d;
        e[7] = m;
    } else {
        m = e[7];
    }
    return m;
}
function ReComponent(f) {
    ReComponent.d = 955;
    const e = c_1.c(12);
    const { access, writeFailure } = f;
    const t = writeFailure === undefined ? null : writeFailure;
    if (!access.writeFailed && !access.needsRetry) {
        return null;
    }
    let o;
    if (e[0] !== access.writeFailed || e[1] !== t) {
        o = access.writeFailed && t != null ? t : <T id="D2AZQg"/>;
        e[0] = access.writeFailed;
        e[1] = t;
        e[2] = o;
    } else {
        o = e[2];
    }
    let c;
    if (e[3] !== o) {
        c = <Ae1 as="p" color="red" role="alert" size="sm">{o}</Ae1>;
        e[3] = o;
        e[4] = c;
    } else {
        c = e[4];
    }
    let a;
    if (e[5] !== access.isPending || e[6] !== access.needsRetry || e[7] !== access.retry) {
        a = access.needsRetry ? <Se1 disabled={access.isPending} onClick={access.retry} size="sm" type="button" variant="secondary"><T id="qJb6G2"/></Se1> : null;
        e[5] = access.isPending;
        e[6] = access.needsRetry;
        e[7] = access.retry;
        e[8] = a;
    } else {
        a = e[8];
    }
    let i;
    if (e[9] !== c || e[10] !== a) {
        i = <>{c}{a}</>;
        e[9] = c;
        e[10] = a;
        e[11] = i;
    } else {
        i = e[11];
    }
    return i;
}
function useTe(f) {
    const e = c_1.c(84);
    const r = b7();
    const g = cR(f);
    const t = cf(f);
    const o = u_1(f);
    const { plugins } = cS();
    const a = cT();
    const i = cU();
    const d = cV();
    const m = cW();
    const U = cX();
    const Y = cY();
    const y = cZ(f);
    let T;
    if (e[0] !== y) {
        T = c_(y, []);
        e[0] = y;
        e[1] = T;
    } else {
        T = e[1];
    }
    const userSkills = T;
    const { catalog } = c$();
    let W;
    if (e[2] !== o || e[3] !== catalog || e[4] !== plugins || e[5] !== t) {
        W = aY(t, o, plugins, catalog);
        e[2] = o;
        e[3] = catalog;
        e[4] = plugins;
        e[5] = t;
        e[6] = W;
    } else {
        W = e[6];
    }
    const listing = W;
    const [p, setP] = r_1.useState(false);
    const [w, setW] = r_1.useState(false);
    let E;
    if (e[7] !== p) {
        E = (l)=>{
            if (p) {
                return Promise.resolve(false);
            }
            setP(true);
            setW(false);
            return l().then(()=>{
                setP(false);
                return true;
            }, (u)=>{
                d0(u, {
                    tags: {
                        sand_area: "grok-bot-team"
                    }
                });
                setW(true);
                setP(false);
                return false;
            });
        };
        e[7] = p;
        e[8] = E;
    } else {
        E = e[8];
    }
    const n = E;
    const s = f ?? "";
    let $;
    if (e[9] !== g) {
        $ = aZ(g);
        e[9] = g;
        e[10] = $;
    } else {
        $ = e[10];
    }
    const S = $;
    let z;
    if (e[11] !== y) {
        z = aZ(y);
        e[11] = y;
        e[12] = z;
    } else {
        z = e[12];
    }
    const V = z;
    let B;
    if (e[13] !== s || e[14] !== a) {
        B = ()=>a(s);
        e[13] = s;
        e[14] = a;
        e[15] = B;
    } else {
        B = e[15];
    }
    let add;
    if (e[16] !== s || e[17] !== t || e[18] !== n || e[19] !== i) {
        add = (l)=>{
            n(()=>i(s, a_(t.plugins, l)));
        };
        e[16] = s;
        e[17] = t;
        e[18] = n;
        e[19] = i;
        e[20] = add;
    } else {
        add = e[20];
    }
    let remove;
    if (e[21] !== o || e[22] !== s || e[23] !== t || e[24] !== n || e[25] !== i) {
        remove = (l)=>{
            if (o.includes(l)) {
                s_1(s, l, false);
            }
            if (t.plugins.some((u)=>u.pluginId === l)) {
                n(()=>i(s, a$(t.plugins, l)));
            }
        };
        e[21] = o;
        e[22] = s;
        e[23] = t;
        e[24] = n;
        e[25] = i;
        e[26] = remove;
    } else {
        remove = e[26];
    }
    let addCustom;
    let updateCustom;
    if (e[27] !== s || e[28] !== t || e[29] !== n || e[30] !== i) {
        addCustom = (l)=>n(()=>i(s, b0(t.plugins, l)));
        updateCustom = (l, u)=>n(()=>i(s, b1(t.plugins, l, u)));
        e[27] = s;
        e[28] = t;
        e[29] = n;
        e[30] = i;
        e[31] = addCustom;
        e[32] = updateCustom;
    } else {
        addCustom = e[31];
        updateCustom = e[32];
    }
    let configure;
    if (e[33] !== s || e[34] !== t || e[35] !== n || e[36] !== d || e[37] !== i) {
        configure = (pluginId, u)=>n(async ()=>{
                if (!t.plugins.some((X)=>X.pluginId === pluginId)) {
                    await i(s, [
                        ...d1(t.plugins),
                        {
                            kind: "plugin",
                            pluginId
                        }
                    ]);
                }
                await d(s, pluginId, u);
            });
        e[33] = s;
        e[34] = t;
        e[35] = n;
        e[36] = d;
        e[37] = i;
        e[38] = configure;
    } else {
        configure = e[38];
    }
    let _;
    if (e[39] !== catalog || e[40] !== p || e[41] !== listing || e[42] !== S || e[43] !== configure || e[44] !== B || e[45] !== add || e[46] !== remove || e[47] !== addCustom || e[48] !== updateCustom || e[49] !== w) {
        _ = {
            listing,
            catalog,
            isPending: p,
            ...S,
            writeFailed: w,
            retry: B,
            add,
            remove,
            addCustom,
            updateCustom,
            configure
        };
        e[39] = catalog;
        e[40] = p;
        e[41] = listing;
        e[42] = S;
        e[43] = configure;
        e[44] = B;
        e[45] = add;
        e[46] = remove;
        e[47] = addCustom;
        e[48] = updateCustom;
        e[49] = w;
        e[50] = _;
    } else {
        _ = e[50];
    }
    const pluginsAccess = _;
    const needsRetry = S.needsRetry || V.needsRetry;
    let h;
    if (e[51] !== r || e[52] !== s || e[53] !== a) {
        h = ()=>{
            a(s);
            r.workflows.refresh(s);
        };
        e[51] = r;
        e[52] = s;
        e[53] = a;
        e[54] = h;
    } else {
        h = e[54];
    }
    let addSkill;
    let addSkills;
    if (e[55] !== m || e[56] !== s || e[57] !== n) {
        addSkill = (l)=>n(()=>m(s, l));
        addSkills = async (l)=>{
            let u = 0;
            for (const X of l){
                if (await n(()=>m(s, X))) {
                    u = u + 1;
                }
            }
            if (u < l.length) {
                setW(true);
            }
            return u;
        };
        e[55] = m;
        e[56] = s;
        e[57] = n;
        e[58] = addSkill;
        e[59] = addSkills;
    } else {
        addSkill = e[58];
        addSkills = e[59];
    }
    let updateSkill;
    if (e[60] !== s || e[61] !== n || e[62] !== U) {
        updateSkill = (l)=>n(()=>U(s, l));
        e[60] = s;
        e[61] = n;
        e[62] = U;
        e[63] = updateSkill;
    } else {
        updateSkill = e[63];
    }
    let removeBotSkill;
    if (e[64] !== s || e[65] !== Y || e[66] !== n) {
        removeBotSkill = (l)=>n(()=>Y(s, l));
        e[64] = s;
        e[65] = Y;
        e[66] = n;
        e[67] = removeBotSkill;
    } else {
        removeBotSkill = e[67];
    }
    let q;
    if (e[68] !== p || e[69] !== listing || e[70] !== S.load || e[71] !== needsRetry || e[72] !== h || e[73] !== addSkill || e[74] !== addSkills || e[75] !== updateSkill || e[76] !== removeBotSkill || e[77] !== userSkills || e[78] !== V.load || e[79] !== w) {
        q = {
            listing,
            userSkills,
            userSkillsLoad: V.load,
            isPending: p,
            load: S.load,
            writeFailed: w,
            needsRetry,
            retry: h,
            addSkill,
            addSkills,
            updateSkill,
            removeBotSkill
        };
        e[68] = p;
        e[69] = listing;
        e[70] = S.load;
        e[71] = needsRetry;
        e[72] = h;
        e[73] = addSkill;
        e[74] = addSkills;
        e[75] = updateSkill;
        e[76] = removeBotSkill;
        e[77] = userSkills;
        e[78] = V.load;
        e[79] = w;
        e[80] = q;
    } else {
        q = e[80];
    }
    const contextAccess = q;
    let L;
    if (e[81] !== contextAccess || e[82] !== pluginsAccess) {
        L = {
            pluginsAccess,
            contextAccess
        };
        e[81] = contextAccess;
        e[82] = pluginsAccess;
        e[83] = L;
    } else {
        L = e[83];
    }
    return L;
}
export { FeComponent as P, ReComponent as a, useTe as u };
