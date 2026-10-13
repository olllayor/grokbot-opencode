import { c as c_1, u, r, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { aZ } from "./index.eager-platform-Dcfeegfw.js";
import { r as r_2, aK, dm as Ls, dn, b7, aU } from "./index.eager-app-Cj5f8Gby.js";
import { W as W_1, bb as Cs, bc as Rs, D as D_1, bd, be } from "./index-ZYxf-aBb.js";
import { S as S_1 } from "./chunk-pane-header-DzXd4Vgr.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "31000fa5-4eb5-4def-8ee6-3c564a5925df";
            e._sentryDebugIdIdentifier = "sentry-dbid-31000fa5-4eb5-4def-8ee6-3c564a5925df";
        }
    } catch (e) {}
})();
const V = {
    dialog: {
        kzqmXN: "sand-qzs4y3",
        ks0D6T: "sand-1gy1zxj",
        kmVPX3: "sand-1717udv",
        kWkggS: "sand-vvtkfd",
        $$css: true
    },
    navItem: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-mmi0ta",
        kzqmXN: "sand-h8yej3",
        kLKAdn: "sand-m7lytj",
        kwRFfy: "sand-rw5ot4",
        kGO01o: "sand-1ykpatu",
        kZCmMZ: "sand-7coems",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-ur7f20",
        kMwMTN: "sand-1wd3ewq",
        kMv6JI: "sand-jb2p0i",
        kGuDYH: "sand-11wthnw",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        k1ekBW: "sand-s2xxs2",
        kIyJzY: "sand-3m1ukm",
        kAMwcw: "sand-11udeeo",
        k3XXqK: "sand-1t137rt sand-9v5kkp",
        kMeerF: "sand-1k57tk5 sand-784prv",
        kjBf7l: "sand-1uczgqu sand-1725o6r",
        kInvED: "sand-1wfwxd8 sand-1bqaal",
        $$css: true
    },
    navItemActive: {
        kWkggS: "sand-luhinc",
        kMwMTN: "sand-1wd3ewq",
        $$css: true
    }
};
function EsComponent(H) {
    EsComponent.d = 1334;
    const s = c_1.c(59);
    const { sections, activeSection, presentation, boxActionError, onSelectSection, onClose, children } = H;
    const { i18n, _: __1 } = u();
    const kRef = r.useRef(null);
    const [c, setC] = r.useState(null);
    const [p, setP] = r.useState(boxActionError);
    if (boxActionError !== p) {
        setP(boxActionError);
        if (boxActionError != null) {
            setC({
                kind: "error",
                text: boxActionError
            });
        }
    }
    let $;
    if (s[0] !== onClose) {
        $ = (m)=>{
            if (!m) {
                onClose();
            }
        };
        s[0] = onClose;
        s[1] = $;
    } else {
        $ = s[1];
    }
    const onOpenChange = $;
    let T;
    if (s[2] !== onSelectSection) {
        T = (m)=>{
            setC(null);
            onSelectSection(m);
        };
        s[2] = onSelectSection;
        s[3] = T;
    } else {
        T = s[3];
    }
    const M = T;
    let O;
    if (s[4] !== activeSection.label || s[5] !== i18n) {
        O = i18n._(activeSection.label);
        s[4] = activeSection.label;
        s[5] = i18n;
        s[6] = O;
    } else {
        O = s[6];
    }
    const title = O;
    const id = `sand-settings-panel-${activeSection.id}`;
    const headingId = `${id}-heading`;
    let y;
    if (s[7] !== __1) {
        y = __1({
            id: "0+WgJu"
        });
        s[7] = __1;
        s[8] = y;
    } else {
        y = s[8];
    }
    let R;
    if (s[9] === Symbol.for("react.memo_cache_sentinel")) {
        R = r_2("sand-settings-layout", "sand-9f619 sand-78zum5 sand-z03ioa sand-2lwn1j");
        s[9] = R;
    } else {
        R = s[9];
    }
    let g;
    if (s[10] !== __1) {
        g = __1({
            id: "y1t8bQ"
        });
        s[10] = __1;
        s[11] = g;
    } else {
        g = s[11];
    }
    let W;
    if (s[12] === Symbol.for("react.memo_cache_sentinel")) {
        W = r_2("sand-settings-nav", "sand-9f619 sand-78zum5 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-dt5ytf sand-195vfkc sand-tqaf1t sand-yamay9 sand-pdmqnj sand-1l90r2v sand-1g0dm76 sand-128c8uf sand-18b5jzi sand-5q6521 sand-s6r99b");
        s[12] = W;
    } else {
        W = s[12];
    }
    let h;
    if (s[13] !== activeSection.id || s[14] !== i18n || s[15] !== sections || s[16] !== M) {
        let m;
        if (s[18] !== activeSection.id || s[19] !== i18n || s[20] !== M) {
            m = (A)=>{
                const C = A.id === activeSection.id;
                return <button key={A.id} aria-controls={C ? `sand-settings-panel-${A.id}` : undefined} aria-current={C ? "page" : undefined} className={r_2("sand-settings-nav__item", p_1(V.navItem, aK.interactive, C && V.navItemActive).className)} data-active={C || undefined} onClick={()=>M(A)} type="button"><W_1 className={({
                    0: {
                        className: "sand-9f619 sand-1wd3ewq"
                    },
                    1: {
                        className: "sand-9f619 sand-1wd3ewq"
                    }
                })[!!C << 0].className ?? ""} name={A.icon} size={15}/><span>{i18n._(A.label)}</span></button>;
            };
            s[18] = activeSection.id;
            s[19] = i18n;
            s[20] = M;
            s[21] = m;
        } else {
            m = s[21];
        }
        h = sections.map(m);
        s[13] = activeSection.id;
        s[14] = i18n;
        s[15] = sections;
        s[16] = M;
        s[17] = h;
    } else {
        h = s[17];
    }
    let j;
    if (s[22] !== g || s[23] !== h) {
        j = <nav aria-label={g} className={W}>{h}</nav>;
        s[22] = g;
        s[23] = h;
        s[24] = j;
    } else {
        j = s[24];
    }
    let B;
    if (s[25] === Symbol.for("react.memo_cache_sentinel")) {
        B = r_2("sand-settings-panel", "sand-9f619 sand-1n2onr6 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-euugli");
        s[25] = B;
    } else {
        B = s[25];
    }
    let v;
    if (s[26] !== __1) {
        v = __1({
            id: "yz7wBu"
        });
        s[26] = __1;
        s[27] = v;
    } else {
        v = s[27];
    }
    let D;
    if (s[28] === Symbol.for("react.memo_cache_sentinel")) {
        D = r_2("sand-settings-panel__close", "sand-jyslct sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-mjrt60 sand-t8t6p sand-ma39wp sand-phwom3 sand-exx8yu sand-yri2b sand-18d9i69 sand-1c1uobl sand-dj266r sand-14z9mp sand-at24cr sand-1lziwak sand-972fbf sand-1ejq31n sand-1b4hy2t sand-10w94by sand-18oe1m7 sand-1273586 sand-1qhh985 sand-1sy0etr sand-1tnzt7h sand-14e42zd sand-stzfhl sand-1mi4oqr sand-1i4c3av sand-jb2p0i sand-1qlqyl8 sand-1pd3egz sand-15bjb6t sand-jbqb8w sand-maxl8c sand-4b2ntj sand-1abnqxm sand-1ypdohk sand-clmvi0 sand-m9ww9a sand-1t137rt sand-9v5kkp sand-1uczgqu sand-4dbuwk sand-1jioewy sand-14yj86l sand-ggy1nq sand-1oy24xj sand-g3p6pi sand-6ekqhr sand-1c071of sand-10l6tqk sand-1eu8d0j sand-o2ifbc sand-zkaem6");
        s[28] = D;
    } else {
        D = s[28];
    }
    let G;
    if (s[29] === Symbol.for("react.memo_cache_sentinel")) {
        G = <W_1 aria-hidden="true" name="close" size="base" variant="outline"/>;
        s[29] = G;
    } else {
        G = s[29];
    }
    let x;
    if (s[30] !== onClose || s[31] !== v) {
        x = <button aria-label={v} className={D} onClick={onClose} type="button">{G}</button>;
        s[30] = onClose;
        s[31] = v;
        s[32] = x;
    } else {
        x = s[32];
    }
    let S;
    if (s[33] !== headingId || s[34] !== title) {
        S = <S_1 headingId={headingId} insetTitle title={title}/>;
        s[33] = headingId;
        s[34] = title;
        s[35] = S;
    } else {
        S = s[35];
    }
    let L;
    if (s[36] === Symbol.for("react.memo_cache_sentinel")) {
        L = r_2("sand-settings-panel__body", "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-dt5ytf sand-2lwn1j sand-b3r6kr");
        s[36] = L;
    } else {
        L = s[36];
    }
    let N;
    if (s[37] !== children) {
        N = <div className={L}><Cs value={setC}>{children}</Cs></div>;
        s[37] = children;
        s[38] = N;
    } else {
        N = s[38];
    }
    let onDismiss;
    if (s[39] === Symbol.for("react.memo_cache_sentinel")) {
        onDismiss = ()=>setC(null);
        s[39] = onDismiss;
    } else {
        onDismiss = s[39];
    }
    let w;
    if (s[40] !== c) {
        w = <Rs notice={c} onDismiss={onDismiss}/>;
        s[40] = c;
        s[41] = w;
    } else {
        w = s[41];
    }
    let z;
    if (s[42] !== headingId || s[43] !== id || s[44] !== x || s[45] !== S || s[46] !== N || s[47] !== w) {
        z = <section aria-labelledby={headingId} className={B} id={id}>{x}{S}{N}{w}</section>;
        s[42] = headingId;
        s[43] = id;
        s[44] = x;
        s[45] = S;
        s[46] = N;
        s[47] = w;
        s[48] = z;
    } else {
        z = s[48];
    }
    let q;
    if (s[49] !== z || s[50] !== j) {
        q = <div className={R}>{j}{z}</div>;
        s[49] = z;
        s[50] = j;
        s[51] = q;
    } else {
        q = s[51];
    }
    let _;
    if (s[52] !== onOpenChange || s[53] !== q || s[54] !== y) {
        _ = <D_1 aria-label={y} className="sand-settings-dialog" rootStylexStyles={V.dialog} initialFocus={kRef} onOpenChange={onOpenChange} open ref={kRef} size="xxl">{q}</D_1>;
        s[52] = onOpenChange;
        s[53] = q;
        s[54] = y;
        s[55] = _;
    } else {
        _ = s[55];
    }
    let F;
    if (s[56] !== presentation || s[57] !== _) {
        F = <Ls presentation={presentation}>{_}</Ls>;
        s[56] = presentation;
        s[57] = _;
        s[58] = F;
    } else {
        F = s[58];
    }
    return F;
}
function KsComponent(H) {
    KsComponent.d = 1223;
    const s = c_1.c(14);
    const { children, activeChild } = H;
    const e = dn();
    const i = aZ();
    const u = b7();
    aU(u.usageSummary.load);
    aU(u.teamPolicy.refresh);
    const sections = bd();
    let o;
    if (s[0] !== activeChild) {
        o = be.find((I)=>I.entrypoint === activeChild) ?? be[0];
        s[0] = activeChild;
        s[1] = o;
    } else {
        o = s[1];
    }
    const activeSection = o;
    let a;
    if (s[2] !== i) {
        a = (I)=>{
            i.open(I.entrypoint.link({}));
        };
        s[2] = i;
        s[3] = a;
    } else {
        a = s[3];
    }
    const onSelectSection = a;
    let c;
    if (s[4] !== e) {
        c = ()=>{
            if (e.cursorAuth.status.kind === "logged-in") {
                e.cursorAuth.clearError();
            }
            e.onClose();
        };
        s[4] = e;
        s[5] = c;
    } else {
        c = s[5];
    }
    const onClose = c;
    let p;
    if (s[6] !== activeSection || s[7] !== children || s[8] !== onClose || s[9] !== onSelectSection || s[10] !== e.boxActionError || s[11] !== e.presentation || s[12] !== sections) {
        p = <EsComponent activeSection={activeSection} boxActionError={e.boxActionError} onClose={onClose} onSelectSection={onSelectSection} presentation={e.presentation} sections={sections}>{children}</EsComponent>;
        s[6] = activeSection;
        s[7] = children;
        s[8] = onClose;
        s[9] = onSelectSection;
        s[10] = e.boxActionError;
        s[11] = e.presentation;
        s[12] = sections;
        s[13] = p;
    } else {
        p = s[13];
    }
    return p;
}
export { KsComponent as default };
