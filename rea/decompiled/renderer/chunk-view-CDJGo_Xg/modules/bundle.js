import { c as c_1, u as u_1, r as r_1, j, T as T_1, p as p_1, i } from "./index.eager-vendor-Qbf9YA6n.js";
import { z as Q, x as x_1, I as I_1, C as C_1, b_, H, aX as We1, p as Rs1, bZ as Os1 } from "./index-ZYxf-aBb.js";
import { b9, ge, fh, gf, a_, gg, gh, gi, fB, eY, aK, a$, gj, gk, dk, gl, gm, gn, aU, b7, go, em, gp, cc, gq, gr, bh, gs, gt, cb, dn } from "./index.eager-app-Cj5f8Gby.js";
import { a_ as Rs, aY as Ce1, aZ } from "./index.eager-platform-Dcfeegfw.js";
import { S } from "./chunk-scroll-pane-CoxKzaOs.js";
import { a as W, G, S as S_1 } from "./chunk-settings-row-I8ggwIzt.js";
import { b, u as u_2, a } from "./chunk-provider-team-policy-CBjUAi-4.js";
import { L } from "./chunk-local-tools-row-BLtLBTlf.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "4cf3aec3-13b1-4aa8-ba9c-0a5d6d49720c";
            e._sentryDebugIdIdentifier = "sentry-dbid-4cf3aec3-13b1-4aa8-ba9c-0a5d6d49720c";
        }
    } catch (e) {}
})();
function Ns(s) {
    if (s.length !== 1) {
        return null;
    }
    return s[0]?.profileId ?? null;
}
function Ce(s, e) {
    if (s.kind === "auto") {
        return Ns(e);
    }
    return s.profileId;
}
function Ds(s, e, n) {
    if (s?.kind !== "pick" || s.generation !== n) {
        return s;
    }
    if (e.kind === "cookies") {
        return {
            kind: "pick",
            cookies: e.cookies,
            generation: n
        };
    }
    return {
        kind: "failed",
        reason: "list-cookies",
        failure: e.failure
    };
}
function qs(profileId) {
    const e = profileId.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
    return `chrome-cookie-sites-${e === "" ? "0" : e}`;
}
const A = {
    pickSurface: {
        kZKoxP: "sand-sl4cvy",
        $$css: true
    },
    header: {
        kLKAdn: "sand-z9dl7a",
        kwRFfy: "sand-2vl965",
        kGO01o: "sand-sag5q8",
        kL6WhQ: "sand-19145p9",
        $$css: true
    },
    description: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    pickBody: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kzQI83: "sand-1iyjqo2",
        kAzted: "sand-2lwn1j",
        kOIVth: "sand-883omv",
        kXHlph: "sand-6ikm8r",
        kORKVm: "sand-1odjw0f",
        kLKAdn: "sand-1t8xvyj",
        kGO01o: "sand-usxwy5",
        $$css: true
    },
    pickActions: {
        kLZC3w: "sand-t8lcch",
        $$css: true
    },
    message: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        $$css: true
    },
    searchIcon: {
        kMwMTN: "sand-169k319",
        $$css: true
    },
    searchInput: {
        kB7OPa: "sand-9f619",
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-dl72j9",
        k7Eaqz: "sand-euugli",
        kMzoRj: "sand-c342km",
        k3XXqK: "sand-1t137rt",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-tyxrsu",
        kMv6JI: "sand-jb2p0i",
        k8Qsv1: "sand-1h7ufjq",
        $$css: true
    },
    profileName: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    profileMeta: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    deselect: {
        kBCFzs: "sand-1npkx4u",
        kVAEAm: "sand-1n2onr6",
        kY2c9j: "sand-1vjfegm",
        $$css: true
    },
    chevron: {
        kBCFzs: "sand-1k3v4rp",
        kMwMTN: "sand-169k319",
        kfzvcC: "sand-47corl",
        $$css: true
    },
    siteList: {
        k71WvV: "sand-6xdu4z",
        k1K539: "sand-14q74kp",
        keTefX: "sand-1m7rdgf",
        kLKAdn: "sand-1t8xvyj",
        kwRFfy: "sand-t1q3vd",
        kGO01o: "sand-usxwy5",
        kZCmMZ: "sand-8fiw5y",
        kMzoRj: "sand-4hv7ue",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-fnq37j",
        kaIpWk: "sand-1qmwy7c",
        $$css: true
    },
    siteListContent: {
        kOIVth: "sand-883omv",
        $$css: true
    },
    empty: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kAzted: "sand-1ba4aug",
        kLKAdn: "sand-oyc9vk",
        kGO01o: "sand-2lprc",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    helper: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kmuXW: "sand-2lah0s",
        kLKAdn: "sand-uve7l6",
        kwRFfy: "sand-196pc8s",
        kGO01o: "sand-1xlntvz",
        kZCmMZ: "sand-22095l",
        kMwMTN: "sand-1o0liin",
        $$css: true
    }
};
function Te1Component(s) {
    Te1Component.d = 1249;
    const e = c_1.c(3);
    const { children, role } = s;
    let a;
    if (e[0] !== children || e[1] !== role) {
        a = <Ce1 as="p" color="secondary" role={role} rootStyle={A.message} size="sm">{children}</Ce1>;
        e[0] = children;
        e[1] = role;
        e[2] = a;
    } else {
        a = e[2];
    }
    return a;
}
function Ls(s, e) {
    return gk(gh(s), e);
}
function Os(hosts, e) {
    let n = 0;
    for (const i of hosts){
        if (e.has(i.key)) {
            n += i.cookies.length;
        }
    }
    return n;
}
function Ws(s, e) {
    if (e === "") {
        return true;
    }
    return s.host.toLowerCase().includes(e) || fB(s.profileDisplayName, eY()).includes(e);
}
function TeComponent(s) {
    TeComponent.d = 1255;
    const e = c_1.c(9);
    const { query, placeholder, onQueryChange } = s;
    let l;
    let r;
    let o;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-2lah0s sand-1jnr06f sand-tsj531 sand-11lfxj5 sand-mzvs34 sand-mkeg23 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-vvtkfd"
        };
        r = <I_1 name="search" size="md" style={A.searchIcon}/>;
        o = p_1(a_.body1, A.searchInput);
        e[0] = l;
        e[1] = r;
        e[2] = o;
    } else {
        l = e[0];
        r = e[1];
        o = e[2];
    }
    let u;
    if (e[3] !== onQueryChange) {
        u = (d)=>onQueryChange(d.currentTarget.value);
        e[3] = onQueryChange;
        e[4] = u;
    } else {
        u = e[4];
    }
    let c;
    if (e[5] !== placeholder || e[6] !== query || e[7] !== u) {
        c = <div {...l}>{r}<input {...o} aria-label={placeholder} autoComplete="off" onChange={u} placeholder={placeholder} spellCheck={false} type="text" value={query}/></div>;
        e[5] = placeholder;
        e[6] = query;
        e[7] = u;
        e[8] = c;
    } else {
        c = e[8];
    }
    return c;
}
function PeComponent(s) {
    PeComponent.d = 1252;
    const e = c_1.c(66);
    const { cookies, onImport, onClose } = s;
    const { _: __1 } = u_1();
    const r = fh().platform === "darwin";
    const [o, setO] = r_1.useState(null);
    const [c, setC] = r_1.useState("");
    let h;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            kind: "auto"
        };
        e[0] = h;
    } else {
        h = e[0];
    }
    const [g, setG] = r_1.useState(h);
    const mRef = r_1.useRef(false);
    let y;
    let p;
    let j;
    let x;
    if (e[1] !== __1 || e[2] !== cookies || e[3] !== g || e[4] !== r || e[5] !== onImport || e[6] !== c || e[7] !== o) {
        const re = cookies ?? [];
        const K = gh(re);
        const pe = gi(K);
        const ee = o ?? new Set(K.map(Ks));
        j = ee.size;
        const Se = fB(c.trim(), eY());
        const ke = Se !== "";
        const ve = pe.flatMap((profile)=>{
            const shownHosts = profile.hosts.filter((N)=>Ws(N, Se));
            if (shownHosts.length === 0) {
                return [];
            }
            return [
                {
                    profile,
                    shownHosts
                }
            ];
        });
        const Ue = Ce(g, pe);
        const Ye = (key, R)=>{
            setO((N)=>{
                const B = N ?? new Set(K.map(Bs));
                const D = new Set(B);
                if (R) {
                    D.add(key);
                } else {
                    D.delete(key);
                }
                return D;
            });
        };
        const Je = (shownHosts, R)=>{
            setO((N)=>{
                const B = N ?? new Set(K.map(Fs));
                const D = new Set(B);
                for (const O of shownHosts){
                    if (R) {
                        D.add(O.key);
                    } else {
                        D.delete(O.key);
                    }
                }
                return D;
            });
        };
        const es = (profileId)=>{
            if (!ke) {
                setG((R)=>({
                        kind: "chosen",
                        profileId: Ce(R, pe) === profileId ? null : profileId
                    }));
            }
        };
        y = ()=>{
            if (!(mRef.current || j === 0)) {
                mRef.current = true;
                onImport(Ls(re, ee));
            }
        };
        if (cookies == null) {
            let b;
            if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
                b = <T_1 id="1O0Zig"/>;
                e[12] = b;
            } else {
                b = e[12];
            }
            x = b;
        } else if (K.length === 0) {
            let b;
            if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
                b = <T_1 id="t5RKFj"/>;
                e[13] = b;
            } else {
                b = e[13];
            }
            x = b;
        } else {
            x = __1({
                id: "gD6YFu",
                values: {
                    0: K.length
                }
            });
        }
        if (cookies == null) {
            let b;
            if (e[14] !== __1) {
                b = __1({
                    id: "i2NxmJ"
                });
                e[14] = __1;
                e[15] = b;
            } else {
                b = e[15];
            }
            let R;
            if (e[16] !== b) {
                R = <Te1Component role="status">{b}</Te1Component>;
                e[16] = b;
                e[17] = R;
            } else {
                R = e[17];
            }
            p = R;
        } else if (K.length === 0) {
            let b;
            if (e[18] !== __1) {
                b = __1({
                    id: "DxrY/W"
                });
                e[18] = __1;
                e[19] = b;
            } else {
                b = e[19];
            }
            let R;
            if (e[20] !== b) {
                R = <Te1Component role="status">{b}</Te1Component>;
                e[20] = b;
                e[21] = R;
            } else {
                R = e[21];
            }
            p = R;
        } else {
            let placeholder;
            if (e[22] !== __1) {
                placeholder = __1({
                    id: "2R65Ge"
                });
                e[22] = __1;
                e[23] = placeholder;
            } else {
                placeholder = e[23];
            }
            let R;
            if (e[24] !== c || e[25] !== placeholder) {
                R = <TeComponent onQueryChange={setC} placeholder={placeholder} query={c}/>;
                e[24] = c;
                e[25] = placeholder;
                e[26] = R;
            } else {
                R = e[26];
            }
            let N;
            let B;
            if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
                N = {
                    className: "sand-78zum5 sand-dt5ytf sand-2lah0s"
                };
                B = {
                    className: "sand-78zum5 sand-dt5ytf sand-2lah0s sand-13ly8rp sand-1xlntvz sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-hojbe8"
                };
                e[27] = N;
                e[28] = B;
            } else {
                N = e[27];
                B = e[28];
            }
            const D = ve.length === 0 ? <div {...p_1(a_.body1, A.empty)} role="status"><T_1 id="Ev2r9A"/></div> : ve.map(({ profile, shownHosts })=>{
                const profile_profileDisplayName = profile.profileDisplayName;
                const _e = qs(profile.profileId);
                const se = ke || Ue === profile.profileId;
                const ye = shownHosts.every((Y)=>ee.has(Y.key));
                const cookieCount = Os(profile.hosts, ee);
                return <div key={profile.profileId}><div className="sand-1n2onr6 sand-rvj5dj sand-8sxmsg sand-6s0dn4 sand-fex06f sand-oyc9vk sand-1fg0g13 sand-2lprc sand-1tajz9i">{ke ? null : <button className="sand-jyslct sand-1lugfcp sand-10l6tqk sand-13vifvy sand-tijo5x sand-1ey2m1c sand-1o0tod sand-h8yej3 sand-5yr21d sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-c342km sand-1qmwy7c sand-t08umf sand-1t137rt sand-9v5kkp sand-4sht9k sand-1g40iwv sand-jbqb8w sand-1ypdohk" aria-controls={se ? _e : undefined} aria-expanded={se} aria-label={__1(se ? {
                    id: "WfH+Jc",
                    values: {
                        name: profile_profileDisplayName
                    }
                } : {
                    id: "MTKAIK",
                    values: {
                        name: profile_profileDisplayName
                    }
                })} onClick={()=>es(profile.profileId)} type="button"/>}<div className="sand-78zum5 sand-dt5ytf sand-gkxs2y sand-xhr3t sand-euugli sand-47corl"><p {...p_1(a_.body2, A.profileName)}>{profile_profileDisplayName}</p><p {...p_1(a_.body2, A.profileMeta)}>{i._({
                    id: "O2Py6m",
                    values: {
                        cookieCount
                    }
                })}</p></div><Q aria-label={__1(ye ? {
                    id: "8/Aml1",
                    values: {
                        name: profile_profileDisplayName
                    }
                } : {
                    id: "1gbiYF",
                    values: {
                        name: profile_profileDisplayName
                    }
                })} onClick={()=>Je(shownHosts, !ye)} size="sm" style={[
                    A.deselect,
                    a_.body2,
                    aK.controlEdge
                ]} type="button" variant="secondary">{__1(ye ? {
                    id: "U+R4tW"
                } : {
                    id: "wgNoIs"
                })}</Q><I_1 name={se ? "chevron-down" : "chevron-right"} size="sm" style={A.chevron}/></div>{se ? <Rs aria-label={profile_profileDisplayName} contentStyle={A.siteListContent} id={_e} maxHeight={182} role="group" rootStyle={A.siteList} scrollbarVisibility="hover">{shownHosts.map((Y)=><label key={Y.key} className="sand-78zum5 sand-6s0dn4 sand-17d4w8g sand-euugli sand-1ypdohk"><C_1 isChecked={ee.has(Y.key)} onChange={(ns)=>Ye(Y.key, ns)}/><span {...p_1(a_.body2, A.profileName)}>{Y.host}</span></label>)}</Rs> : null}</div>;
            });
            let O;
            if (e[29] !== D) {
                O = <div {...B}>{D}</div>;
                e[29] = D;
                e[30] = O;
            } else {
                O = e[30];
            }
            let oe;
            if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
                oe = p_1(a_.label, A.helper);
                e[31] = oe;
            } else {
                oe = e[31];
            }
            let G;
            if (e[32] !== r) {
                G = <p {...oe}>{r ? <T_1 id="N8GWP2"/> : <T_1 id="SrIXTu"/>}</p>;
                e[32] = r;
                e[33] = G;
            } else {
                G = e[33];
            }
            let Z;
            if (e[34] !== G || e[35] !== O) {
                Z = <div {...N}>{O}{G}</div>;
                e[34] = G;
                e[35] = O;
                e[36] = Z;
            } else {
                Z = e[36];
            }
            let de;
            if (e[37] !== Z || e[38] !== R) {
                de = <>{R}{Z}</>;
                e[37] = Z;
                e[38] = R;
                e[39] = de;
            } else {
                de = e[39];
            }
            p = de;
        }
        e[1] = __1;
        e[2] = cookies;
        e[3] = g;
        e[4] = r;
        e[5] = onImport;
        e[6] = c;
        e[7] = o;
        e[8] = y;
        e[9] = p;
        e[10] = j;
        e[11] = x;
    } else {
        y = e[8];
        p = e[9];
        j = e[10];
        x = e[11];
    }
    let k;
    if (e[40] !== onClose) {
        k = (re)=>{
            if (!re) {
                onClose();
            }
        };
        e[40] = onClose;
        e[41] = k;
    } else {
        k = e[41];
    }
    let w;
    if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
        w = [
            a_.body1,
            a$.medium
        ];
        e[42] = w;
    } else {
        w = e[42];
    }
    let C;
    if (e[43] !== x) {
        C = <x_1.Title style={w}>{x}</x_1.Title>;
        e[43] = x;
        e[44] = C;
    } else {
        C = e[44];
    }
    let I;
    let _;
    if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
        I = <x_1.Description style={[
            a_.body1,
            A.description
        ]}><T_1 id="rT1HKu"/></x_1.Description>;
        _ = <x_1.CloseButton/>;
        e[45] = I;
        e[46] = _;
    } else {
        I = e[45];
        _ = e[46];
    }
    let S;
    if (e[47] !== C) {
        S = <x_1.Header style={A.header}>{C}{I}{_}</x_1.Header>;
        e[47] = C;
        e[48] = S;
    } else {
        S = e[48];
    }
    let T;
    if (e[49] !== p) {
        T = <x_1.Body style={A.pickBody}>{p}</x_1.Body>;
        e[49] = p;
        e[50] = T;
    } else {
        T = e[50];
    }
    let P;
    if (e[51] === Symbol.for("react.memo_cache_sentinel")) {
        P = <T_1 id="dEgA5A"/>;
        e[51] = P;
    } else {
        P = e[51];
    }
    let E;
    if (e[52] !== onClose) {
        E = <x_1.Action onClick={onClose}>{P}</x_1.Action>;
        e[52] = onClose;
        e[53] = E;
    } else {
        E = e[53];
    }
    const F = j === 0;
    let ie;
    if (e[54] === Symbol.for("react.memo_cache_sentinel")) {
        ie = <T_1 id="r7Ey/Z"/>;
        e[54] = ie;
    } else {
        ie = e[54];
    }
    let X;
    if (e[55] !== y || e[56] !== F) {
        X = <x_1.Action disabled={F} onClick={y} variant="primary">{ie}</x_1.Action>;
        e[55] = y;
        e[56] = F;
        e[57] = X;
    } else {
        X = e[57];
    }
    let H;
    if (e[58] !== E || e[59] !== X) {
        H = <x_1.ActionBar style={A.pickActions}>{E}{X}</x_1.ActionBar>;
        e[58] = E;
        e[59] = X;
        e[60] = H;
    } else {
        H = e[60];
    }
    let ae;
    if (e[61] !== H || e[62] !== k || e[63] !== S || e[64] !== T) {
        ae = <x_1.Root onOpenChange={k} open surfaceStyle={A.pickSurface} variant="rich" width={520}>{S}{T}{H}</x_1.Root>;
        e[61] = H;
        e[62] = k;
        e[63] = S;
        e[64] = T;
        e[65] = ae;
    } else {
        ae = e[65];
    }
    return ae;
}
function Fs(s) {
    return s.key;
}
function Bs(s) {
    return s.key;
}
function Ks(s) {
    return s.key;
}
function NeComponent() {
    NeComponent.d = 1253;
    const s = c_1.c(6);
    const { _ } = u_1();
    let n;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = <x_1.Title style={[
            a_.body1,
            a$.medium
        ]}><T_1 id="y0nv6p"/></x_1.Title>;
        s[0] = n;
    } else {
        n = s[0];
    }
    let i;
    if (s[1] === Symbol.for("react.memo_cache_sentinel")) {
        i = <x_1.Header style={A.header}>{n}<x_1.Description style={[
            a_.body1,
            A.description
        ]}><T_1 id="loJtyj"/></x_1.Description></x_1.Header>;
        s[1] = i;
    } else {
        i = s[1];
    }
    let a;
    if (s[2] !== _) {
        a = _({
            id: "skj9zM"
        });
        s[2] = _;
        s[3] = a;
    } else {
        a = s[3];
    }
    let l;
    if (s[4] !== a) {
        l = <x_1.Root closeOnBackdropClick={false} closeOnEscape={false} closeOnOutsidePress={false} open variant="rich" width={520}>{i}<x_1.ActionBar><x_1.Action disabled pending variant="primary">{a}</x_1.Action></x_1.ActionBar></x_1.Root>;
        s[4] = a;
        s[5] = l;
    } else {
        l = s[5];
    }
    return l;
}
function QsComponent(s) {
    switch(s){
        case "empty-selection":
            return {
                title: <T_1 id="IDhw1X"/>,
                description: <T_1 id="eJgdna"/>
            };
        case "allow-id-mismatch":
            return {
                title: <T_1 id="IDhw1X"/>,
                description: <T_1 id="CIrATl"/>
            };
        case "host-chrome-locked":
            return {
                title: <T_1 id="IDhw1X"/>,
                description: <T_1 id="xgJuol"/>
            };
        case "read-empty":
            return {
                title: <T_1 id="IDhw1X"/>,
                description: <T_1 id="0D4tUx"/>
            };
        case "chrome-open-cdp-missing":
            return {
                title: <T_1 id="Wrr903"/>,
                description: <T_1 id="tFOc7D"/>
            };
        case "inject-rejected":
            return {
                title: <T_1 id="IDhw1X"/>,
                description: <T_1 id="MUQf5o"/>
            };
    }
}
function DeComponent(s) {
    DeComponent.d = 1254;
    const e = c_1.c(35);
    const { imported, sites, undecryptable, dbscWarning, skipReason, onClose } = s;
    const { _: __1 } = u_1();
    const c = imported === 0;
    const d = skipReason === "none" || skipReason === "chrome-closed" ? "read-empty" : skipReason;
    let h;
    if (e[0] !== d) {
        h = QsComponent(d);
        e[0] = d;
        e[1] = h;
    } else {
        h = e[1];
    }
    const g = h;
    let f;
    if (e[2] !== onClose) {
        f = (P)=>{
            if (!P) {
                onClose();
            }
        };
        e[2] = onClose;
        e[3] = f;
    } else {
        f = e[3];
    }
    let m;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        m = [
            a_.body1,
            a$.medium
        ];
        e[4] = m;
    } else {
        m = e[4];
    }
    let y;
    if (e[5] !== g || e[6] !== c) {
        y = c ? g.title : <T_1 id="6DuwlP"/>;
        e[5] = g;
        e[6] = c;
        e[7] = y;
    } else {
        y = e[7];
    }
    let p;
    if (e[8] !== y) {
        p = <x_1.Title style={m}>{y}</x_1.Title>;
        e[8] = y;
        e[9] = p;
    } else {
        p = e[9];
    }
    let j;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        j = [
            a_.body1,
            A.description
        ];
        e[10] = j;
    } else {
        j = e[10];
    }
    let x;
    if (e[11] !== __1 || e[12] !== g || e[13] !== imported || e[14] !== c || e[15] !== sites) {
        x = c ? g.description : __1({
            id: "9jczxJ",
            values: {
                imported,
                sites
            }
        });
        e[11] = __1;
        e[12] = g;
        e[13] = imported;
        e[14] = c;
        e[15] = sites;
        e[16] = x;
    } else {
        x = e[16];
    }
    let k;
    if (e[17] !== x) {
        k = <x_1.Description style={j}>{x}</x_1.Description>;
        e[17] = x;
        e[18] = k;
    } else {
        k = e[18];
    }
    let w;
    if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
        w = <x_1.CloseButton/>;
        e[19] = w;
    } else {
        w = e[19];
    }
    let C;
    if (e[20] !== p || e[21] !== k) {
        C = <x_1.Header style={A.header}>{p}{k}{w}</x_1.Header>;
        e[20] = p;
        e[21] = k;
        e[22] = C;
    } else {
        C = e[22];
    }
    let I;
    if (e[23] !== __1 || e[24] !== dbscWarning || e[25] !== undecryptable) {
        I = undecryptable > 0 || dbscWarning ? <x_1.Body><div className="sand-78zum5 sand-dt5ytf sand-883omv">{undecryptable > 0 ? <Te1Component>{__1({
            id: "CNQb0t",
            values: {
                undecryptable
            }
        })}</Te1Component> : null}{dbscWarning ? <Te1Component role="alert"><T_1 id="uEtCpR"/></Te1Component> : null}</div></x_1.Body> : null;
        e[23] = __1;
        e[24] = dbscWarning;
        e[25] = undecryptable;
        e[26] = I;
    } else {
        I = e[26];
    }
    let _;
    if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
        _ = <T_1 id="DPfwMq"/>;
        e[27] = _;
    } else {
        _ = e[27];
    }
    let S;
    if (e[28] !== onClose) {
        S = <x_1.ActionBar><x_1.Action onClick={onClose} variant="primary">{_}</x_1.Action></x_1.ActionBar>;
        e[28] = onClose;
        e[29] = S;
    } else {
        S = e[29];
    }
    let T;
    if (e[30] !== C || e[31] !== I || e[32] !== S || e[33] !== f) {
        T = <x_1.Root onOpenChange={f} open variant="rich" width={520}>{C}{I}{S}</x_1.Root>;
        e[30] = C;
        e[31] = I;
        e[32] = S;
        e[33] = f;
        e[34] = T;
    } else {
        T = e[34];
    }
    return T;
}
function Qe1Component(s) {
    Qe1Component.d = 1250;
    const e = c_1.c(28);
    const { reason, failure, onRetry, onClose } = s;
    const r = fh().platform === "darwin";
    const o = reason === "list-cookies";
    const u = r && gg(failure);
    let c;
    if (u) {
        let _;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = <T_1 id="xibDFX"/>;
            e[0] = _;
        } else {
            _ = e[0];
        }
        c = _;
    } else if (o) {
        let _;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            _ = <T_1 id="bRLZyA"/>;
            e[1] = _;
        } else {
            _ = e[1];
        }
        c = _;
    } else {
        let _;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = <T_1 id="4nmIIy"/>;
            e[2] = _;
        } else {
            _ = e[2];
        }
        c = _;
    }
    let d;
    if (e[3] !== onClose) {
        d = (_)=>{
            if (!_) {
                onClose();
            }
        };
        e[3] = onClose;
        e[4] = d;
    } else {
        d = e[4];
    }
    let h;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        h = [
            a_.body1,
            a$.medium
        ];
        e[5] = h;
    } else {
        h = e[5];
    }
    let g;
    if (e[6] !== o) {
        g = <x_1.Title style={h}>{o ? <T_1 id="YQhH4p"/> : <T_1 id="Wrr903"/>}</x_1.Title>;
        e[6] = o;
        e[7] = g;
    } else {
        g = e[7];
    }
    let f;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        f = [
            a_.body1,
            A.description
        ];
        e[8] = f;
    } else {
        f = e[8];
    }
    let m;
    if (e[9] !== c) {
        m = <x_1.Description style={f}>{c}</x_1.Description>;
        e[9] = c;
        e[10] = m;
    } else {
        m = e[10];
    }
    let y;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        y = <x_1.CloseButton/>;
        e[11] = y;
    } else {
        y = e[11];
    }
    let p;
    if (e[12] !== g || e[13] !== m) {
        p = <x_1.Header style={A.header}>{g}{m}{y}</x_1.Header>;
        e[12] = g;
        e[13] = m;
        e[14] = p;
    } else {
        p = e[14];
    }
    let j;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        j = <T_1 id="yz7wBu"/>;
        e[15] = j;
    } else {
        j = e[15];
    }
    let x;
    if (e[16] !== onClose) {
        x = <x_1.Action onClick={onClose}>{j}</x_1.Action>;
        e[16] = onClose;
        e[17] = x;
    } else {
        x = e[17];
    }
    let k;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        k = <T_1 id="6gRgw8"/>;
        e[18] = k;
    } else {
        k = e[18];
    }
    let w;
    if (e[19] !== onRetry) {
        w = <x_1.Action onClick={onRetry} variant="primary">{k}</x_1.Action>;
        e[19] = onRetry;
        e[20] = w;
    } else {
        w = e[20];
    }
    let C;
    if (e[21] !== w || e[22] !== x) {
        C = <x_1.ActionBar>{x}{w}</x_1.ActionBar>;
        e[21] = w;
        e[22] = x;
        e[23] = C;
    } else {
        C = e[23];
    }
    let I;
    if (e[24] !== d || e[25] !== C || e[26] !== p) {
        I = <x_1.Root onOpenChange={d} open variant="rich" width={520}>{p}{C}</x_1.Root>;
        e[24] = d;
        e[25] = C;
        e[26] = p;
        e[27] = I;
    } else {
        I = e[27];
    }
    return I;
}
function LeComponent(s) {
    LeComponent.d = 1251;
    const e = c_1.c(22);
    const { step, store, setStep, onRetry } = s;
    let r;
    if (e[0] !== setStep) {
        r = ()=>setStep(null);
        e[0] = setStep;
        e[1] = r;
    } else {
        r = e[1];
    }
    const onClose = r;
    let u;
    if (e[2] !== setStep || e[3] !== store) {
        u = (d)=>{
            setStep({
                kind: "progress"
            });
            store.importFrom(d).then((h)=>{
                setStep((g)=>{
                    if (g?.kind !== "progress") {
                        return g;
                    }
                    if (h.kind === "imported") {
                        return {
                            kind: "result",
                            ...gj(h.result),
                            undecryptable: h.result.undecryptable,
                            dbscWarning: h.result.dbscWarning,
                            skipReason: h.result.skipReason
                        };
                    }
                    return {
                        kind: "failed",
                        reason: "import-cookies",
                        failure: h.failure
                    };
                });
            });
        };
        e[2] = setStep;
        e[3] = store;
        e[4] = u;
    } else {
        u = e[4];
    }
    const onImport = u;
    switch(step.kind){
        case "pick":
            {
                let d;
                if (e[5] !== onClose || e[6] !== onImport || e[7] !== step.cookies) {
                    d = <PeComponent cookies={step.cookies} onClose={onClose} onImport={onImport}/>;
                    e[5] = onClose;
                    e[6] = onImport;
                    e[7] = step.cookies;
                    e[8] = d;
                } else {
                    d = e[8];
                }
                return d;
            }
        case "progress":
            {
                let d;
                if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
                    d = <NeComponent/>;
                    e[9] = d;
                } else {
                    d = e[9];
                }
                return d;
            }
        case "result":
            {
                let d;
                if (e[10] !== onClose || e[11] !== step.dbscWarning || e[12] !== step.imported || e[13] !== step.sites || e[14] !== step.skipReason || e[15] !== step.undecryptable) {
                    d = <DeComponent dbscWarning={step.dbscWarning} imported={step.imported} onClose={onClose} sites={step.sites} skipReason={step.skipReason} undecryptable={step.undecryptable}/>;
                    e[10] = onClose;
                    e[11] = step.dbscWarning;
                    e[12] = step.imported;
                    e[13] = step.sites;
                    e[14] = step.skipReason;
                    e[15] = step.undecryptable;
                    e[16] = d;
                } else {
                    d = e[16];
                }
                return d;
            }
        case "failed":
            {
                let d;
                if (e[17] !== onClose || e[18] !== onRetry || e[19] !== step.failure || e[20] !== step.reason) {
                    d = <Qe1Component failure={step.failure} onClose={onClose} onRetry={onRetry} reason={step.reason}/>;
                    e[17] = onClose;
                    e[18] = onRetry;
                    e[19] = step.failure;
                    e[20] = step.reason;
                    e[21] = d;
                } else {
                    d = e[21];
                }
                return d;
            }
    }
}
function OeComponent() {
    OeComponent.d = 1248;
    const s = c_1.c(23);
    const { _ } = u_1();
    const n = b9("sand_import_chrome_cookies");
    const store = ge();
    const platform = fh().platform;
    const [l, setL] = r_1.useState(null);
    const oRef = r_1.useRef(0);
    if (!n || !store.available || !gf(platform)) {
        return null;
    }
    let u;
    if (s[0] !== store) {
        u = ()=>{
            const x = oRef.current + 1;
            oRef.current = x;
            setL({
                kind: "pick",
                cookies: null,
                generation: x
            });
            store.listCookieAllowItems().then((k)=>{
                setL((w)=>Ds(w, k, x));
            });
        };
        s[0] = store;
        s[1] = u;
    } else {
        u = s[1];
    }
    const c = u;
    let d;
    if (s[2] !== _) {
        d = _({
            id: "30XQ+/"
        });
        s[2] = _;
        s[3] = d;
    } else {
        d = s[3];
    }
    let h;
    if (s[4] !== _) {
        h = _({
            id: "3EQoxv"
        });
        s[4] = _;
        s[5] = h;
    } else {
        h = s[5];
    }
    let g;
    if (s[6] !== _) {
        g = _({
            id: "1O0Zig"
        });
        s[6] = _;
        s[7] = g;
    } else {
        g = s[7];
    }
    let f;
    if (s[8] === Symbol.for("react.memo_cache_sentinel")) {
        f = <T_1 id="l3s5ri"/>;
        s[8] = f;
    } else {
        f = s[8];
    }
    let m;
    if (s[9] !== c) {
        m = <Q onClick={c} size="md" style={a_.body2} type="button" variant="secondary">{f}</Q>;
        s[9] = c;
        s[10] = m;
    } else {
        m = s[10];
    }
    let y;
    if (s[11] !== h || s[12] !== g || s[13] !== m) {
        y = <W anchorId="chrome-cookie-import" description={h} label={g} variant="card">{m}</W>;
        s[11] = h;
        s[12] = g;
        s[13] = m;
        s[14] = y;
    } else {
        y = s[14];
    }
    let p;
    if (s[15] !== c || s[16] !== l || s[17] !== store) {
        p = l == null ? null : <LeComponent onRetry={c} setStep={setL} step={l} store={store}/>;
        s[15] = c;
        s[16] = l;
        s[17] = store;
        s[18] = p;
    } else {
        p = s[18];
    }
    let j;
    if (s[19] !== d || s[20] !== y || s[21] !== p) {
        j = <G title={d}>{y}{p}</G>;
        s[19] = d;
        s[20] = y;
        s[21] = p;
        s[22] = j;
    } else {
        j = s[22];
    }
    return j;
}
function WeComponent(s) {
    WeComponent.d = 1318;
    const e = c_1.c(10);
    const { children } = s;
    const i = aZ();
    let a;
    if (e[0] !== i) {
        a = (d)=>{
            d.preventDefault();
            i.open(b_("updates", {
                focusSetting: {
                    anchor: "update-computer",
                    arrival: Date.now()
                }
            }));
        };
        e[0] = i;
        e[1] = a;
    } else {
        a = e[1];
    }
    const l = a;
    let r;
    let href;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-kbann2 sand-1ypdohk sand-ujl8zx"
        };
        href = dk("update-computer");
        e[2] = r;
        e[3] = href;
    } else {
        r = e[2];
        href = e[3];
    }
    let onAuxClick;
    if (e[4] !== l) {
        onAuxClick = (d)=>{
            if (d.button === 1) {
                l(d);
            }
        };
        e[4] = l;
        e[5] = onAuxClick;
    } else {
        onAuxClick = e[5];
    }
    let c;
    if (e[6] !== children || e[7] !== l || e[8] !== onAuxClick) {
        c = <a {...r} href={href} onAuxClick={onAuxClick} onClick={l}>{children}</a>;
        e[6] = children;
        e[7] = l;
        e[8] = onAuxClick;
        e[9] = c;
    } else {
        c = e[9];
    }
    return c;
}
function Xs(s, e) {
    switch(e.state){
        case "connected":
            return s({
                id: "4s4XZC",
                values: {
                    0: e.relayedStreams
                }
            });
        case "connecting":
            return s({
                id: "bRhqyb"
            });
        case "off":
            return s({
                id: "kxkRej"
            });
        case "standby":
            return s({
                id: "1Pw5TN"
            });
    }
}
function FeComponent() {
    FeComponent.d = 1272;
    const s = c_1.c(30);
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const i = b9("sand_box_egress_tunnel");
    const a = gl();
    const l = gm();
    const r = gn();
    aU(b7().teamPolicy.load);
    const o = b();
    const u = o !== "held";
    const { setEnabled, isPending, failure } = go();
    const g = i && a;
    let f;
    if (failure != null) {
        let S;
        if (s[0] !== __2) {
            S = __2({
                id: "QqKsGg"
            });
            s[0] = __2;
            s[1] = S;
        } else {
            S = s[1];
        }
        f = S;
    } else if (u && l) {
        let S;
        if (s[2] !== __1 || s[3] !== r) {
            S = Xs(__1, r);
            s[2] = __1;
            s[3] = r;
            s[4] = S;
        } else {
            S = s[4];
        }
        f = S;
    } else if (g) {
        let S;
        if (s[5] !== __2) {
            S = __2({
                id: "n25eM1"
            });
            s[5] = __2;
            s[6] = S;
        } else {
            S = s[6];
        }
        f = S;
    } else {
        let S;
        if (s[7] === Symbol.for("react.memo_cache_sentinel")) {
            S = <T_1 id="esB4Ci" components={{
                0: <WeComponent/>
            }}/>;
            s[7] = S;
        } else {
            S = s[7];
        }
        f = S;
    }
    if (!(i || l)) {
        return null;
    }
    let m;
    if (s[8] !== __2) {
        m = __2({
            id: "OR475H"
        });
        s[8] = __2;
        s[9] = m;
    } else {
        m = s[9];
    }
    const description = f;
    let p;
    if (s[10] !== __2 || s[11] !== o) {
        p = o === "held" ? {
            heldReason: __2({
                id: "/Mb+jM"
            })
        } : {};
        s[10] = __2;
        s[11] = o;
        s[12] = p;
    } else {
        p = s[12];
    }
    const j = u && l;
    const x = isPending || o === "unknown" || !g && !l;
    let k;
    if (s[13] !== __2) {
        k = __2({
            id: "OarWo6"
        });
        s[13] = __2;
        s[14] = k;
    } else {
        k = s[14];
    }
    let onToggle;
    if (s[15] !== l || s[16] !== setEnabled) {
        onToggle = ()=>setEnabled(!l);
        s[15] = l;
        s[16] = setEnabled;
        s[17] = onToggle;
    } else {
        onToggle = s[17];
    }
    let C;
    if (s[18] !== p || s[19] !== j || s[20] !== x || s[21] !== k || s[22] !== onToggle) {
        C = <H {...p} isChecked={j} isDisabled={x} label={k} onToggle={onToggle} size="md"/>;
        s[18] = p;
        s[19] = j;
        s[20] = x;
        s[21] = k;
        s[22] = onToggle;
        s[23] = C;
    } else {
        C = s[23];
    }
    let I;
    if (s[24] !== f || s[25] !== C) {
        I = <W anchorId="egress" description={description} variant="card">{C}</W>;
        s[24] = f;
        s[25] = C;
        s[26] = I;
    } else {
        I = s[26];
    }
    let _;
    if (s[27] !== m || s[28] !== I) {
        _ = <G title={m}>{I}</G>;
        s[27] = m;
        s[28] = I;
        s[29] = _;
    } else {
        _ = s[29];
    }
    return _;
}
const SAND_MACHINE_LABEL_MAX_LENGTH = 100;
const Hs = {
    inputSurface: {
        kWkggS: "sand-13l7odt",
        $$css: true
    }
};
function BeComponent(s) {
    BeComponent.d = 1287;
    const e = c_1.c(43);
    const { machine, name, anchorId } = s;
    const { _: __1 } = u_1();
    const r = gq();
    const [o, setO] = r_1.useState(machine.label);
    const [c, setC] = r_1.useState(null);
    let h;
    if (e[0] !== __1 || e[1] !== o || e[2] !== machine.label || e[3] !== machine.machineId || e[4] !== r) {
        h = (E)=>{
            E.preventDefault();
            const F = o.trim();
            if (F.length === 0 || [
                ...F
            ].length > SAND_MACHINE_LABEL_MAX_LENGTH) {
                setC(__1({
                    id: "x0xLUo",
                    values: {
                        SAND_MACHINE_LABEL_MAX_LENGTH
                    }
                }));
                return;
            }
            if (F !== machine.label) {
                setC(null);
                r.updateLabel({
                    machineId: machine.machineId,
                    label: F
                });
            }
        };
        e[0] = __1;
        e[1] = o;
        e[2] = machine.label;
        e[3] = machine.machineId;
        e[4] = r;
        e[5] = h;
    } else {
        h = e[5];
    }
    const onSubmit = h;
    let f = c;
    if (f == null && r.failure != null) {
        let E;
        if (e[6] !== __1) {
            E = __1({
                id: "QqKsGg"
            });
            e[6] = __1;
            e[7] = E;
        } else {
            E = e[7];
        }
        f = E;
    } else if (f == null && machine.isCurrent) {
        let E;
        if (e[8] !== __1) {
            E = __1({
                id: "XS+vEF"
            });
            e[8] = __1;
            e[9] = E;
        } else {
            E = e[9];
        }
        f = E;
    }
    const m = f ?? undefined;
    let y;
    if (e[10] !== __1 || e[11] !== machine.isCurrent) {
        y = machine.isCurrent ? __1({
            id: "0umRmi"
        }) : __1({
            id: "9lzViG"
        });
        e[10] = __1;
        e[11] = machine.isCurrent;
        e[12] = y;
    } else {
        y = e[12];
    }
    let p;
    let j;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        p = {
            className: "sand-78zum5 sand-6s0dn4 sand-ehausa"
        };
        j = {
            className: "sand-16grhtn"
        };
        e[13] = p;
        e[14] = j;
    } else {
        p = e[13];
        j = e[14];
    }
    let x;
    if (e[15] !== __1 || e[16] !== name) {
        x = __1({
            id: "lNfw6n",
            values: {
                name
            }
        });
        e[15] = __1;
        e[16] = name;
        e[17] = x;
    } else {
        x = e[17];
    }
    let k;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        k = (E)=>setO(E.currentTarget.value);
        e[18] = k;
    } else {
        k = e[18];
    }
    let w;
    if (e[19] !== o || e[20] !== x || e[21] !== r.isPending) {
        w = <div {...j}><We1 rootStyle={Hs.inputSurface} size="lg"><We1.Input aria-label={x} disabled={r.isPending} onChange={k} value={o}/></We1></div>;
        e[19] = o;
        e[20] = x;
        e[21] = r.isPending;
        e[22] = w;
    } else {
        w = e[22];
    }
    let C;
    if (e[23] !== __1 || e[24] !== name) {
        C = __1({
            id: "FUYkYT",
            values: {
                name
            }
        });
        e[23] = __1;
        e[24] = name;
        e[25] = C;
    } else {
        C = e[25];
    }
    let I;
    if (e[26] !== o || e[27] !== machine.label || e[28] !== r.isPending) {
        I = r.isPending || o.trim() === machine.label;
        e[26] = o;
        e[27] = machine.label;
        e[28] = r.isPending;
        e[29] = I;
    } else {
        I = e[29];
    }
    let _;
    if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
        _ = <T_1 id="tfDRzk"/>;
        e[30] = _;
    } else {
        _ = e[30];
    }
    let S;
    if (e[31] !== I || e[32] !== C) {
        S = <Q aria-label={C} disabled={I} size="md" style={a_.body2} type="submit" variant="primary">{_}</Q>;
        e[31] = I;
        e[32] = C;
        e[33] = S;
    } else {
        S = e[33];
    }
    let T;
    if (e[34] !== onSubmit || e[35] !== S || e[36] !== w) {
        T = <form onSubmit={onSubmit} {...p}>{w}{S}</form>;
        e[34] = onSubmit;
        e[35] = S;
        e[36] = w;
        e[37] = T;
    } else {
        T = e[37];
    }
    let P;
    if (e[38] !== anchorId || e[39] !== T || e[40] !== m || e[41] !== y) {
        P = <W anchorId={anchorId} description={m} label={y} variant="card">{T}</W>;
        e[38] = anchorId;
        e[39] = T;
        e[40] = m;
        e[41] = y;
        e[42] = P;
    } else {
        P = e[42];
    }
    return P;
}
function Gs(i18n, e) {
    const n = new Set;
    return e.map((machine)=>{
        let i_label = machine.label;
        for(let r = 2; n.has(i_label) && r <= n.size + 1; r += 1){
            const number = i18n.number(r);
            i_label = i18n._({
                id: "vN4XyY",
                values: {
                    0: machine.label,
                    number
                }
            });
        }
        n.add(i_label);
        const executionLabel = machine.isCurrent ? i18n._({
            id: "kvhz1P"
        }) : i18n._({
            id: "8bwi7d",
            values: {
                name: i_label
            }
        });
        return {
            machine,
            name: i_label,
            executionLabel
        };
    });
}
function KeComponent() {
    KeComponent.d = 1288;
    const s = c_1.c(31);
    const { i18n, _ } = u_1();
    const i = em();
    const a = gp();
    let l;
    let r;
    let o;
    let u;
    if (s[0] !== _ || s[1] !== i18n || s[2] !== a || s[3] !== i.previous || s[4] !== i.status || s[5] !== i.value) {
        let d = [];
        let h = null;
        let g = null;
        if (i.status === "loading") {
            d = i.previous ?? [];
            let m;
            if (s[10] !== _) {
                m = _({
                    id: "Pwqkdw"
                });
                s[10] = _;
                s[11] = m;
            } else {
                m = s[11];
            }
            h = <W anchorId="computers" description={m} variant="card"/>;
        } else if (i.status === "ready" && i.value.length > 0) {
            d = i.value;
            if (!d.some(Zs)) {
                let m;
                if (s[12] !== _) {
                    m = _({
                        id: "mmzR7e"
                    });
                    s[12] = _;
                    s[13] = m;
                } else {
                    m = s[13];
                }
                g = m;
            }
        } else if (i.status === "unavailable") {
            let m;
            if (s[14] !== _) {
                m = _({
                    id: "0BvlbM"
                });
                s[14] = _;
                s[15] = m;
            } else {
                m = s[15];
            }
            h = <W anchorId="computers" description={m} variant="card"/>;
        } else {
            if (i.status === "failed") {
                d = i.previous ?? [];
            }
            let m;
            if (s[16] !== _) {
                m = _({
                    id: "mmzR7e"
                });
                s[16] = _;
                s[17] = m;
            } else {
                m = s[17];
            }
            g = m;
        }
        if (g != null) {
            let m;
            if (s[18] === Symbol.for("react.memo_cache_sentinel")) {
                m = <T_1 id="6gRgw8"/>;
                s[18] = m;
            } else {
                m = s[18];
            }
            let y;
            if (s[19] !== a.isPending || s[20] !== a.refresh) {
                y = <Q disabled={a.isPending} onClick={a.refresh} size="md" style={a_.body2} type="button" variant="secondary">{m}</Q>;
                s[19] = a.isPending;
                s[20] = a.refresh;
                s[21] = y;
            } else {
                y = s[21];
            }
            h = <W anchorId="computers" description={g} variant="card">{y}</W>;
        }
        l = G;
        if (s[22] !== _) {
            r = _({
                id: "d57qnR"
            });
            s[22] = _;
            s[23] = r;
        } else {
            r = s[23];
        }
        o = h;
        let f;
        if (s[24] !== h) {
            f = ({ machine, name, executionLabel }, y)=><r_1.Fragment key={machine.machineId}><BeComponent anchorId={h == null && y === 0 ? "computers" : cc} machine={machine} name={name}/><L executionLabel={executionLabel} machine={machine}/></r_1.Fragment>;
            s[24] = h;
            s[25] = f;
        } else {
            f = s[25];
        }
        u = Gs(i18n, d).map(f);
        s[0] = _;
        s[1] = i18n;
        s[2] = a;
        s[3] = i.previous;
        s[4] = i.status;
        s[5] = i.value;
        s[6] = l;
        s[7] = r;
        s[8] = o;
        s[9] = u;
    } else {
        l = s[6];
        r = s[7];
        o = s[8];
        u = s[9];
    }
    let c;
    if (s[26] !== l || s[27] !== r || s[28] !== o || s[29] !== u) {
        c = j.jsxs(l, {
            title: r,
            children: [
                o,
                u
            ]
        });
        s[26] = l;
        s[27] = r;
        s[28] = o;
        s[29] = u;
        s[30] = c;
    } else {
        c = s[30];
    }
    return c;
}
function Zs(s) {
    return s.isCurrent;
}
const xe = {
    recipientText: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    }
};
function QeComponent() {
    QeComponent.d = 1289;
    const s = c_1.c(19);
    const { _ } = u_1();
    const { recipients, revoke, retry, isRevokePending, revokeFailure } = gr();
    aU(b7().messagesAccess.loadAllowedRecipients);
    const o = r_1.useId();
    const [u, setU] = r_1.useState(false);
    let d;
    let h;
    if (s[0] !== _ || s[1] !== u || s[2] !== isRevokePending || s[3] !== o || s[4] !== retry || s[5] !== revoke || s[6] !== revokeFailure || s[7] !== recipients) {
        h = Symbol.for("react.early_return_sentinel");
        e: {
            const g = bh(recipients) ?? [];
            const f = recipients.status === "failed";
            if (g.length === 0 && !f) {
                h = null;
                break e;
            }
            const m = u && (g.length > 0 || revokeFailure != null);
            let y;
            if (s[10] !== _ || s[11] !== f) {
                y = _(f ? {
                    id: "mmzR7e"
                } : {
                    id: "tgdJj5"
                });
                s[10] = _;
                s[11] = f;
                s[12] = y;
            } else {
                y = s[12];
            }
            let p;
            if (s[13] !== _) {
                p = _({
                    id: "S+1Zzr"
                });
                s[13] = _;
                s[14] = p;
            } else {
                p = s[14];
            }
            const j = f ? <Q onClick={retry} size="md" style={a_.body2} type="button" variant="secondary"><T_1 id="6gRgw8"/></Q> : <Q aria-controls={m ? o : undefined} aria-expanded={u} onClick={()=>setU(Vs)} size="md" style={a_.body2} trailingIcon={u ? "chevron-up" : "chevron-down"} type="button" variant="secondary">{_({
                id: "71pZse",
                values: {
                    0: g.length
                }
            })}</Q>;
            let x;
            if (s[15] !== y || s[16] !== p || s[17] !== j) {
                x = <W anchorId="messages-allowed-recipients" description={y} label={p} variant="card">{j}</W>;
                s[15] = y;
                s[16] = p;
                s[17] = j;
                s[18] = x;
            } else {
                x = s[18];
            }
            d = <>{x}{m ? <div id={o} className="sand-9f619 sand-78zum5 sand-dt5ytf sand-h8yej3 sand-1n9uuka sand-usxwy5 sand-cssynl">{g.length > 0 ? <ul aria-label={_({
                id: "S+1Zzr"
            })} className="sand-78zum5 sand-dt5ytf sand-h8yej3 sand-3ct3a4 sand-9f619 sand-1ghz6dp sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1043rbw sand-1lqmthn sand-13e3tqs">{g.map((k)=>{
                const target = k.name ?? k.recipient;
                return <li key={k.recipient} className="sand-78zum5 sand-6s0dn4 sand-e0p6wg sand-1v2ro7d sand-1t0vds8 sand-4q8mmk"><span className="sand-78zum5 sand-1pha0wt sand-1iyjqo2 sand-s83m0k sand-euugli sand-167g77z">{k.name === null ? <Ce1 rootStyle={xe.recipientText} size="sm" weight="medium"><bdi dir="ltr">{k.recipient}</bdi></Ce1> : <><Ce1 rootStyle={xe.recipientText} size="sm" weight="medium"><bdi>{k.name}</bdi></Ce1><Ce1 color="secondary" rootStyle={xe.recipientText} size="sm"><bdi dir="ltr">{k.recipient}</bdi></Ce1></>}</span><span className="sand-78zum5 sand-2lah0s sand-17d4w8g"><Rs1 aria-label={_({
                    id: "6f5U0u",
                    values: {
                        target
                    }
                })} disabled={isRevokePending} icon="trash" onClick={()=>revoke(k.recipient)} shape="square" size="xs" variant="ghost"/></span></li>;
            })}</ul> : null}{revokeFailure != null && <div role="alert" className="sand-12ffz05"><S_1><T_1 id="XWKrq0"/></S_1></div>}</div> : null}</>;
        }
        s[0] = _;
        s[1] = u;
        s[2] = isRevokePending;
        s[3] = o;
        s[4] = retry;
        s[5] = revoke;
        s[6] = revokeFailure;
        s[7] = recipients;
        s[8] = d;
        s[9] = h;
    } else {
        d = s[8];
        h = s[9];
    }
    if (h !== Symbol.for("react.early_return_sentinel")) {
        return h;
    }
    return d;
}
function Vs(s) {
    return !s;
}
function XeComponent() {
    XeComponent.d = 1290;
    const s = c_1.c(1);
    const e = b9("sand_messages_tools");
    const n = fh().platform === "darwin";
    if (!e || !n) {
        return null;
    }
    let i;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = <HeComponent/>;
        s[0] = i;
    } else {
        i = s[0];
    }
    return i;
}
function HeComponent() {
    HeComponent.d = 1291;
    const s = c_1.c(31);
    const { _ } = u_1();
    const n = gs();
    aU(b7().messagesAccess.loadEnablement);
    let i;
    if (s[0] !== n.enablement) {
        i = bh(n.enablement);
        s[0] = n.enablement;
        s[1] = i;
    } else {
        i = s[1];
    }
    const a = i;
    let l;
    if (s[2] !== _) {
        l = _({
            id: "jusBAO"
        });
        s[2] = _;
        s[3] = l;
    } else {
        l = s[3];
    }
    let r = l;
    if (n.setFailure != null) {
        let f;
        if (s[4] !== _) {
            f = _({
                id: "QqKsGg"
            });
            s[4] = _;
            s[5] = f;
        } else {
            f = s[5];
        }
        r = f;
    } else if (n.enablement.status === "failed") {
        let f;
        if (s[6] !== _) {
            f = _({
                id: "mmzR7e"
            });
            s[6] = _;
            s[7] = f;
        } else {
            f = s[7];
        }
        r = f;
    } else if (n.enablement.status === "unavailable" || n.enablement.status === "empty") {
        let f;
        if (s[8] !== _) {
            f = _({
                id: "0BvlbM"
            });
            s[8] = _;
            s[9] = f;
        } else {
            f = s[9];
        }
        r = f;
    } else if (a == null) {
        let f;
        if (s[10] !== _) {
            f = _({
                id: "Pwqkdw"
            });
            s[10] = _;
            s[11] = f;
        } else {
            f = s[11];
        }
        r = f;
    }
    const o = n.enablement.status === "failed";
    let u;
    if (s[12] !== _) {
        u = _({
            id: "t7TeQU"
        });
        s[12] = _;
        s[13] = u;
    } else {
        u = s[13];
    }
    let c;
    if (s[14] !== _ || s[15] !== n.isSetPending || s[16] !== n.retryEnablement || s[17] !== n.setEnabled || s[18] !== o || s[19] !== a) {
        c = o ? <Q onClick={n.retryEnablement} size="md" style={a_.body2} type="button" variant="secondary"><T_1 id="6gRgw8"/></Q> : <H isChecked={a === true} isDisabled={a == null || n.isSetPending} label={_({
            id: "ISQkak"
        })} onToggle={n.setEnabled} size="md"/>;
        s[14] = _;
        s[15] = n.isSetPending;
        s[16] = n.retryEnablement;
        s[17] = n.setEnabled;
        s[18] = o;
        s[19] = a;
        s[20] = c;
    } else {
        c = s[20];
    }
    let d;
    if (s[21] !== r || s[22] !== c) {
        d = <W anchorId="messages" description={r} variant="card">{c}</W>;
        s[21] = r;
        s[22] = c;
        s[23] = d;
    } else {
        d = s[23];
    }
    let h;
    if (s[24] !== n.isSetPending || s[25] !== a) {
        h = a === true && !n.isSetPending ? <GeComponent/> : null;
        s[24] = n.isSetPending;
        s[25] = a;
        s[26] = h;
    } else {
        h = s[26];
    }
    let g;
    if (s[27] !== u || s[28] !== d || s[29] !== h) {
        g = <G title={u}>{d}{h}</G>;
        s[27] = u;
        s[28] = d;
        s[29] = h;
        s[30] = g;
    } else {
        g = s[30];
    }
    return g;
}
function GeComponent() {
    GeComponent.d = 1292;
    const s = c_1.c(9);
    const e = b7();
    aU(e.messagesAccess.loadSendStanding);
    const standing = gt();
    let i;
    if (s[0] !== standing.sendStanding) {
        i = bh(standing.sendStanding);
        s[0] = standing.sendStanding;
        s[1] = i;
    } else {
        i = s[1];
    }
    const a = i;
    let l;
    if (s[2] !== standing) {
        l = <ZeComponent standing={standing}/>;
        s[2] = standing;
        s[3] = l;
    } else {
        l = s[3];
    }
    let r;
    if (s[4] !== a) {
        r = a === false ? <QeComponent/> : null;
        s[4] = a;
        s[5] = r;
    } else {
        r = s[5];
    }
    let o;
    if (s[6] !== l || s[7] !== r) {
        o = <>{l}{r}</>;
        s[6] = l;
        s[7] = r;
        s[8] = o;
    } else {
        o = s[8];
    }
    return o;
}
function ZeComponent(s) {
    ZeComponent.d = 1293;
    const e = c_1.c(27);
    const { standing } = s;
    const { _ } = u_1();
    aU(b7().teamPolicy.load);
    const ceiling = u_2();
    const l = a();
    let r;
    if (e[0] !== ceiling) {
        r = cb("always", ceiling);
        e[0] = ceiling;
        e[1] = r;
    } else {
        r = e[1];
    }
    const o = r;
    let u;
    if (e[2] !== standing.sendStanding) {
        u = bh(standing.sendStanding);
        e[2] = standing.sendStanding;
        e[3] = u;
    } else {
        u = e[3];
    }
    const c = u;
    let d;
    if (e[4] !== _) {
        d = _({
            id: "3qTGok"
        });
        e[4] = _;
        e[5] = d;
    } else {
        d = e[5];
    }
    let h = d;
    if (standing.setFailure != null) {
        let k;
        if (e[6] !== _) {
            k = _({
                id: "QqKsGg"
            });
            e[6] = _;
            e[7] = k;
        } else {
            k = e[7];
        }
        h = k;
    } else if (standing.sendStanding.status === "failed") {
        let k;
        if (e[8] !== _) {
            k = _({
                id: "mmzR7e"
            });
            e[8] = _;
            e[9] = k;
        } else {
            k = e[9];
        }
        h = k;
    } else if (c == null) {
        let k;
        if (e[10] !== _) {
            k = _({
                id: "Pwqkdw"
            });
            e[10] = _;
            e[11] = k;
        } else {
            k = e[11];
        }
        h = k;
    }
    let g;
    if (e[12] !== _) {
        g = _({
            id: "jO0zrH"
        });
        e[12] = _;
        e[13] = g;
    } else {
        g = e[13];
    }
    const f = g;
    let extraCopy;
    if (e[14] !== _ || e[15] !== ceiling) {
        extraCopy = ceiling === undefined ? null : <S_1>{_({
            id: "68SHzZ",
            values: {
                ceiling
            }
        })}</S_1>;
        e[14] = _;
        e[15] = ceiling;
        e[16] = extraCopy;
    } else {
        extraCopy = e[16];
    }
    const y = c === true;
    const p = c == null || !l || o && c !== true;
    let j;
    if (e[17] !== f || e[18] !== standing.setSendStanding || e[19] !== y || e[20] !== p) {
        j = <H isChecked={y} isDisabled={p} label={f} onToggle={standing.setSendStanding} size="md"/>;
        e[17] = f;
        e[18] = standing.setSendStanding;
        e[19] = y;
        e[20] = p;
        e[21] = j;
    } else {
        j = e[21];
    }
    let x;
    if (e[22] !== h || e[23] !== f || e[24] !== extraCopy || e[25] !== j) {
        x = <W anchorId="messages-send-without-asking" description={h} extraCopy={extraCopy} label={f} variant="card">{j}</W>;
        e[22] = h;
        e[23] = f;
        e[24] = extraCopy;
        e[25] = j;
        e[26] = x;
    } else {
        x = e[26];
    }
    return x;
}
function VeComponent() {
    VeComponent.d = 1220;
    const s = c_1.c(9);
    const e = dn();
    const n = em();
    const i = n.status !== "unavailable" && !(n.status === "loading" && n.previous == null);
    let a;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-3qzy4x"
        };
        s[0] = a;
    } else {
        a = s[0];
    }
    let l;
    if (s[1] !== i || s[2] !== e.cursorAuth.status.kind) {
        l = e.cursorAuth.status.kind === "logged-in" && i ? <KeComponent/> : null;
        s[1] = i;
        s[2] = e.cursorAuth.status.kind;
        s[3] = l;
    } else {
        l = s[3];
    }
    let r;
    let o;
    let u;
    if (s[4] === Symbol.for("react.memo_cache_sentinel")) {
        r = <OeComponent/>;
        o = <XeComponent/>;
        u = <FeComponent/>;
        s[4] = r;
        s[5] = o;
        s[6] = u;
    } else {
        r = s[4];
        o = s[5];
        u = s[6];
    }
    let c;
    if (s[7] !== l) {
        c = <S><div {...a}>{l}{r}{o}{u}</div></S>;
        s[7] = l;
        s[8] = c;
    } else {
        c = s[8];
    }
    return c;
}
function UsComponent(s) {
    UsComponent.d = 1221;
    const e = c_1.c(3);
    const { params } = s;
    const focus = params.focusSetting ?? null;
    let a;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = <VeComponent/>;
        e[0] = a;
    } else {
        a = e[0];
    }
    let l;
    if (e[1] !== focus) {
        l = <Os1 focus={focus}>{a}</Os1>;
        e[1] = focus;
        e[2] = l;
    } else {
        l = e[2];
    }
    return l;
}
export { UsComponent as default };
