import { c as c_1, p as p_1, u as u_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { r, a_ } from "./index.eager-app-Cj5f8Gby.js";
import { p as T, I } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "33c5a903-9877-457f-b55b-89aa240b524a";
            e._sentryDebugIdIdentifier = "sentry-dbid-33c5a903-9877-457f-b55b-89aa240b524a";
        }
    } catch (e) {}
})();
const u = {
    title: {
        kB7OPa: "sand-9f619",
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        k63SB2: "sand-1rhlpx6",
        kMwMTN: "sand-1wd3ewq",
        $$css: true
    },
    titleInset: {
        kZCmMZ: "sand-22095l",
        $$css: true
    },
    backLabelButton: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-195vfkc",
        ks0D6T: "sand-193iq5w",
        kZKoxP: "sand-1fgtraw",
        kLKAdn: "sand-exx8yu",
        kwRFfy: "sand-2vl965",
        kGO01o: "sand-18d9i69",
        kZCmMZ: "sand-25sj25",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-149ho13",
        kWkggS: "sand-jbqb8w sand-aalx5g",
        kMwMTN: "sand-19aaqeu",
        kMv6JI: "sand-jb2p0i",
        kkrTdU: "sand-1ypdohk",
        k3XXqK: "sand-1t137rt sand-9v5kkp",
        kMeerF: "sand-1k57tk5 sand-784prv",
        kjBf7l: "sand-1uczgqu sand-1iolv91",
        $$css: true
    },
    detailTitle: {
        kB7OPa: "sand-9f619",
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-dl72j9",
        k7Eaqz: "sand-euugli",
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kVQacm: "sand-b3r6kr",
        k63SB2: "sand-1rhlpx6",
        kMwMTN: "sand-1wd3ewq",
        k9WMMc: "sand-2b8uid",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    detailTitleFading: {
        k1ekBW: "sand-19991ni",
        kIyJzY: "sand-h5t8r0 sand-12w9bfk",
        kAMwcw: "sand-9lcvmn",
        $$css: true
    },
    detailTitleHidden: {
        kSiTet: "sand-g01cxk",
        $$css: true
    }
};
export function S(g) {
    S.d = 1231;
    const s = c_1.c(10);
    const { title, headingId, insetTitle, trailing } = g;
    const i = insetTitle === undefined ? false : insetTitle;
    let t;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = r("sand-settings-pane-header", "sand-9f619 sand-78zum5 sand-1c4vz4f sand-2lah0s sand-dl72j9 sand-6s0dn4 sand-1qughib sand-195vfkc sand-1miatn0 sand-sfy40s sand-10b6aqq sand-1mfogq2");
        s[0] = t;
    } else {
        t = s[0];
    }
    let e;
    if (s[1] !== i) {
        e = r(p_1(a_.heading3, u.title, i && u.titleInset).className);
        s[1] = i;
        s[2] = e;
    } else {
        e = s[2];
    }
    let a;
    if (s[3] !== headingId || s[4] !== e || s[5] !== title) {
        a = <h2 className={e} id={headingId}>{title}</h2>;
        s[3] = headingId;
        s[4] = e;
        s[5] = title;
        s[6] = a;
    } else {
        a = s[6];
    }
    const c = trailing ?? null;
    let n;
    if (s[7] !== a || s[8] !== c) {
        n = <header className={t}>{a}{c}</header>;
        s[7] = a;
        s[8] = c;
        s[9] = n;
    } else {
        n = s[9];
    }
    return n;
}
function ZComponent(g) {
    ZComponent.d = 1230;
    const s = c_1.c(17);
    const { title, headingId, trailing, isTitleVisible, backLabel, onBack } = g;
    const { _ } = u_1();
    let a;
    let c;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        a = r("sand-settings-detail-bar", "sand-9f619 sand-rvj5dj sand-37c5m6 sand-6s0dn4 sand-sdox4t sand-889kno sand-2vl965 sand-1a8lsjc sand-e2zdcy");
        c = {
            className: "sand-1lqcxt8 sand-euugli"
        };
        s[0] = a;
        s[1] = c;
    } else {
        a = s[0];
        c = s[1];
    }
    let n;
    if (s[2] !== _ || s[3] !== backLabel || s[4] !== onBack) {
        n = <div {...c}>{backLabel == null ? <T aria-label={_({
            id: "iH8pgl"
        })} icon="chevron-left" onClick={onBack} shape="circle" size="md" variant="ghost"/> : <button onClick={onBack} type="button" {...p_1(a_.body2, u.backLabelButton)}><I aria-hidden name="chevron-left" size="lg"/><span className="sand-b3r6kr sand-lyipyv sand-uxw1ft">{backLabel}</span></button>}</div>;
        s[2] = _;
        s[3] = backLabel;
        s[4] = onBack;
        s[5] = n;
    } else {
        n = s[5];
    }
    let o;
    if (s[6] !== headingId || s[7] !== isTitleVisible || s[8] !== title) {
        o = title == null ? null : <h3 aria-hidden={isTitleVisible === false || undefined} className={r(p_1(a_.body1, u.detailTitle, isTitleVisible != null && u.detailTitleFading, isTitleVisible === false && u.detailTitleHidden).className)} id={headingId}>{title}</h3>;
        s[6] = headingId;
        s[7] = isTitleVisible;
        s[8] = title;
        s[9] = o;
    } else {
        o = s[9];
    }
    let h;
    if (s[10] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-78zum5 sand-6s0dn4 sand-1qab1bc sand-euugli"
        };
        s[10] = h;
    } else {
        h = s[10];
    }
    const x = trailing ?? null;
    let m;
    if (s[11] !== x) {
        m = <div {...h}>{x}</div>;
        s[11] = x;
        s[12] = m;
    } else {
        m = s[12];
    }
    let p;
    if (s[13] !== n || s[14] !== o || s[15] !== m) {
        p = <div className={a}>{n}{o}{m}</div>;
        s[13] = n;
        s[14] = o;
        s[15] = m;
        s[16] = p;
    } else {
        p = s[16];
    }
    return p;
}
export { ZComponent as a };
