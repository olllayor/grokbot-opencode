import { c as c_1, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { a_, r as r_1 } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "4b5db8f9-eecc-4d67-ae67-5f503cc19dd5";
            e._sentryDebugIdIdentifier = "sentry-dbid-4b5db8f9-eecc-4d67-ae67-5f503cc19dd5";
        }
    } catch (e) {}
})();
const v = {
    popup: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kzqmXN: "sand-1cvmir6",
        ks0D6T: "sand-1usz39j",
        kWkggS: "sand-vvtkfd",
        kMzoRj: "sand-4hv7ue",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-fnq37j",
        kaIpWk: "sand-hojbe8",
        kGVxlE: "sand-1z0g938",
        kVQacm: "sand-b3r6kr",
        $$css: true
    },
    list: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kOIVth: "sand-195vfkc",
        kogj98: "sand-1ghz6dp",
        kLKAdn: "sand-1yrsyyn",
        kwRFfy: "sand-1icxu4v",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-25sj25",
        kH6xsr: "sand-3ct3a4",
        $$css: true
    },
    item: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kLKAdn: "sand-exx8yu",
        kwRFfy: "sand-yri2b",
        kGO01o: "sand-18d9i69",
        kZCmMZ: "sand-1c1uobl",
        $$css: true
    },
    row: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-17d4w8g",
        kzqmXN: "sand-h8yej3",
        kZKoxP: "sand-1fgtraw",
        kLKAdn: "sand-1yrsyyn",
        kwRFfy: "sand-f159sx",
        kGO01o: "sand-10b6aqq",
        kZCmMZ: "sand-mzvs34",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-1kogg8i",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-tyxrsu",
        kMv6JI: "sand-jb2p0i",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        k7Eaqz: "sand-euugli",
        k3XXqK: "sand-1t137rt",
        $$css: true
    },
    rowActive: {
        kWkggS: "sand-luhinc",
        $$css: true
    }
};
export function R(o) {
    R.d = 1476;
    const s = c_1.c(18);
    let a;
    let e;
    let t;
    let d;
    let l;
    if (s[0] !== o) {
        ({ children: a, className: e, style: l, ref: t, ...d } = o);
        s[0] = o;
        s[1] = a;
        s[2] = e;
        s[3] = t;
        s[4] = d;
        s[5] = l;
    } else {
        a = s[1];
        e = s[2];
        t = s[3];
        d = s[4];
        l = s[5];
    }
    let n;
    let k;
    let r;
    if (s[6] !== e || s[7] !== d || s[8] !== l) {
        n = p_1(v.popup, a_.body2, l);
        k = d;
        r = r_1("sand-reference-menu", n.className, e);
        s[6] = e;
        s[7] = d;
        s[8] = l;
        s[9] = n;
        s[10] = k;
        s[11] = r;
    } else {
        n = s[9];
        k = s[10];
        r = s[11];
    }
    let i;
    if (s[12] !== n.style || s[13] !== a || s[14] !== t || s[15] !== k || s[16] !== r) {
        i = <div {...k} className={r} ref={t} style={n.style}>{a}</div>;
        s[12] = n.style;
        s[13] = a;
        s[14] = t;
        s[15] = k;
        s[16] = r;
        s[17] = i;
    } else {
        i = s[17];
    }
    return i;
}
export const r = {
    list: v.list,
    item: v.item
};
function WComponent(o) {
    WComponent.d = 1475;
    const s = c_1.c(41);
    let a;
    let e;
    let t;
    let d;
    let l;
    let n;
    let k;
    let r;
    let i;
    let c;
    if (s[0] !== o) {
        ({ icon: t, name: d, detail: e, trailing: c, isActive: r, className: a, style: k, ref: l, type: i, ...n } = o);
        s[0] = o;
        s[1] = a;
        s[2] = e;
        s[3] = t;
        s[4] = d;
        s[5] = l;
        s[6] = n;
        s[7] = k;
        s[8] = r;
        s[9] = i;
        s[10] = c;
    } else {
        a = s[1];
        e = s[2];
        t = s[3];
        d = s[4];
        l = s[5];
        n = s[6];
        k = s[7];
        r = s[8];
        i = s[9];
        c = s[10];
    }
    const N = r === undefined ? false : r;
    const q = i === undefined ? "button" : i;
    let u;
    let y;
    let f;
    if (s[11] !== a || s[12] !== N || s[13] !== n || s[14] !== k) {
        u = p_1(v.row, a_.body2, N && v.rowActive, k);
        y = n;
        f = r_1("sand-mention-menu-item", u.className, a);
        s[11] = a;
        s[12] = N;
        s[13] = n;
        s[14] = k;
        s[15] = u;
        s[16] = y;
        s[17] = f;
    } else {
        u = s[15];
        y = s[16];
        f = s[17];
    }
    const u_style = u.style;
    let b;
    if (s[18] === Symbol.for("react.memo_cache_sentinel")) {
        b = {
            className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-1kky2od sand-lup9mm sand-2lah0s"
        };
        s[18] = b;
    } else {
        b = s[18];
    }
    let p;
    if (s[19] !== t) {
        p = <span aria-hidden {...b}>{t}</span>;
        s[19] = t;
        s[20] = p;
    } else {
        p = s[20];
    }
    let w;
    let z;
    if (s[21] === Symbol.for("react.memo_cache_sentinel")) {
        w = {
            className: "sand-78zum5 sand-6s0dn4 sand-167g77z sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli"
        };
        z = {
            className: "sand-tyxrsu sand-193iq5w sand-b3r6kr sand-lyipyv sand-uxw1ft"
        };
        s[21] = w;
        s[22] = z;
    } else {
        w = s[21];
        z = s[22];
    }
    let x;
    if (s[23] !== d) {
        x = <span {...z}>{d}</span>;
        s[23] = d;
        s[24] = x;
    } else {
        x = s[24];
    }
    let g;
    if (s[25] !== e) {
        g = e != null && e.length > 0 ? <span className="sand-169k319 sand-1iyjqo2 sand-s83m0k sand-1r8uery sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft">{e}</span> : null;
        s[25] = e;
        s[26] = g;
    } else {
        g = s[26];
    }
    let h;
    if (s[27] !== x || s[28] !== g) {
        h = <span {...w}>{x}{g}</span>;
        s[27] = x;
        s[28] = g;
        s[29] = h;
    } else {
        h = s[29];
    }
    let j;
    if (s[30] !== c) {
        j = c != null && c.length > 0 ? <span className="sand-169k319 sand-2lah0s sand-uxw1ft">{c}</span> : null;
        s[30] = c;
        s[31] = j;
    } else {
        j = s[31];
    }
    let M;
    if (s[32] !== u.style || s[33] !== l || s[34] !== h || s[35] !== j || s[36] !== y || s[37] !== f || s[38] !== p || s[39] !== q) {
        M = <button {...y} className={f} ref={l} style={u_style} type={q}>{p}{h}{j}</button>;
        s[32] = u.style;
        s[33] = l;
        s[34] = h;
        s[35] = j;
        s[36] = y;
        s[37] = f;
        s[38] = p;
        s[39] = q;
        s[40] = M;
    } else {
        M = s[40];
    }
    return M;
}
export { WComponent as M };
