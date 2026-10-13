import { c as c_1, r } from "./index.eager-vendor-Qbf9YA6n.js";
import { x } from "./index-ZYxf-aBb.js";
import { c as c_2 } from "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a1d355d8-9c15-4ca2-8998-303cff2ea586";
            e._sentryDebugIdIdentifier = "sentry-dbid-a1d355d8-9c15-4ca2-8998-303cff2ea586";
        }
    } catch (e) {}
})();
export const e = 8;
export const t = {
    surface: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kZKoxP: "sand-nftpf4",
        kskxy: "sand-159tps6",
        $$css: true
    },
    surfaceHug: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kskxy: "sand-1pe3ozn",
        $$css: true
    },
    header: {
        kVAEAm: "sand-1n2onr6",
        kGNEyG: "sand-1qjc9v5",
        kLKAdn: "sand-exx8yu",
        kGO01o: "sand-sag5q8",
        kt9PQ7: "sand-1qhh985",
        $$css: true
    },
    headerCompact: {
        kVAEAm: "sand-1n2onr6",
        kGNEyG: "sand-1qjc9v5",
        kAzted: "sand-1rz828m",
        kLKAdn: "sand-z9dl7a",
        kGO01o: "sand-18d9i69",
        kt9PQ7: "sand-1qhh985",
        $$css: true
    },
    intro: {
        kzqmXN: "sand-h8yej3",
        k9WMMc: "sand-2b8uid",
        kGuDYH: "sand-fc7y3v",
        kLWn49: "sand-1fc57z9",
        kb6lSQ: "sand-1mvmbdv",
        $$css: true
    },
    pageTitle: {
        kzqmXN: "sand-h8yej3",
        k9WMMc: "sand-2b8uid",
        kGuDYH: "sand-1i1m3gp",
        kLWn49: "sand-gif2c7",
        kb6lSQ: "sand-1hi0czg",
        $$css: true
    },
    searchRoot: {
        kZKoxP: "sand-t8t6p",
        $$css: true
    },
    dialogBody: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kzQI83: "sand-1iyjqo2",
        kAzted: "sand-2lwn1j",
        kLKAdn: "sand-1y1aw1k",
        kGO01o: "sand-wib8y2",
        kVQacm: "sand-b3r6kr",
        $$css: true
    },
    dialogBodySubpane: {
        kLKAdn: "sand-z9dl7a",
        kGO01o: "sand-wib8y2",
        $$css: true
    },
    body: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kzQI83: "sand-1iyjqo2",
        kAzted: "sand-2lwn1j",
        kOIVth: "sand-1v2ro7d",
        kVQacm: "sand-b3r6kr",
        $$css: true
    },
    chrome: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kmuXW: "sand-2lah0s",
        kOIVth: "sand-1v2ro7d",
        $$css: true
    },
    searchRow: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-167g77z",
        k7Eaqz: "sand-euugli",
        $$css: true
    },
    searchField: {
        kzQI83: "sand-1iyjqo2",
        k7Eaqz: "sand-euugli",
        $$css: true
    },
    actionsHost: {
        k1xSpc: "sand-jp7ctv",
        $$css: true
    },
    scroller: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kzQI83: "sand-1iyjqo2",
        kOIVth: "sand-167g77z",
        k7Eaqz: "sand-euugli",
        kAzted: "sand-2lwn1j",
        kORKVm: "sand-1odjw0f",
        k5wCbM: "sand-1rohswg",
        $$css: true
    },
    subpane: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kzQI83: "sand-1iyjqo2",
        kAzted: "sand-2lwn1j",
        kOIVth: "sand-ou54vl",
        $$css: true
    },
    empty: {
        kogj98: "sand-1ghz6dp",
        k8WAf4: "sand-r9q8rw",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
const $ = t;
function B1Component(n) {
    B1Component.d = 1043;
    const e = c_1.c(14);
    const { title, description, paneBackButton } = n;
    const a = paneBackButton === undefined ? null : paneBackButton;
    let r;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-1n2onr6 sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-h8yej3 sand-euugli"
        };
        e[0] = r;
    } else {
        r = e[0];
    }
    let i;
    if (e[1] !== a) {
        i = a == null ? null : <div className="sand-10l6tqk sand-omnu4r sand-1o0tod sand-1vjfegm">{a}</div>;
        e[1] = a;
        e[2] = i;
    } else {
        i = e[2];
    }
    let k;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        k = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1jnr06f sand-h8yej3 sand-euugli sand-13zrc24 sand-tssl2i sand-p48ta0 sand-9f619 sand-2b8uid"
        };
        e[3] = k;
    } else {
        k = e[3];
    }
    let l;
    if (e[4] !== title) {
        l = <x.Title size="md" style={$.pageTitle} weight="medium">{title}</x.Title>;
        e[4] = title;
        e[5] = l;
    } else {
        l = e[5];
    }
    let f;
    if (e[6] !== description) {
        f = description == null ? null : <x.Description color="secondary" size="sm" style={$.intro}>{description}</x.Description>;
        e[6] = description;
        e[7] = f;
    } else {
        f = e[7];
    }
    let o;
    if (e[8] !== l || e[9] !== f) {
        o = <div {...k}>{l}{f}</div>;
        e[8] = l;
        e[9] = f;
        e[10] = o;
    } else {
        o = e[10];
    }
    let c;
    if (e[11] !== i || e[12] !== o) {
        c = <div {...r}>{i}{o}</div>;
        e[11] = i;
        e[12] = o;
        e[13] = c;
    } else {
        c = e[13];
    }
    return c;
}
function PComponent(n) {
    PComponent.d = 1044;
    const e = c_1.c(6);
    const { title, description } = n;
    let d;
    if (e[0] !== description || e[1] !== title) {
        d = <B1Component description={description} title={title}/>;
        e[0] = description;
        e[1] = title;
        e[2] = d;
    } else {
        d = e[2];
    }
    let a;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        a = <x.CloseButton/>;
        e[3] = a;
    } else {
        a = e[3];
    }
    let r;
    if (e[4] !== d) {
        r = <x.Header style={$.header}>{d}{a}</x.Header>;
        e[4] = d;
        e[5] = r;
    } else {
        r = e[5];
    }
    return r;
}
function QComponent(n) {
    QComponent.d = 1045;
    const e = c_1.c(16);
    const { ariaLabel, open, height, initialFocus, ref, onClose, children } = n;
    const open_1 = open === undefined ? true : open;
    const f = height === undefined ? "fixed" : height;
    let o;
    if (e[0] !== ariaLabel) {
        o = ariaLabel == null ? {} : {
            "aria-label": ariaLabel
        };
        e[0] = ariaLabel;
        e[1] = o;
    } else {
        o = e[1];
    }
    let c;
    if (e[2] !== initialFocus) {
        c = initialFocus == null ? {} : {
            initialFocus
        };
        e[2] = initialFocus;
        e[3] = c;
    } else {
        c = e[3];
    }
    let m;
    if (e[4] !== ref) {
        m = ref == null ? {} : {
            ref
        };
        e[4] = ref;
        e[5] = m;
    } else {
        m = e[5];
    }
    let onOpenChange;
    if (e[6] !== onClose) {
        onOpenChange = (O)=>{
            if (!O) {
                onClose();
            }
        };
        e[6] = onClose;
        e[7] = onOpenChange;
    } else {
        onOpenChange = e[7];
    }
    const surfaceStyle = f === "fixed" ? $.surface : $.surfaceHug;
    let g;
    if (e[8] !== children || e[9] !== open_1 || e[10] !== o || e[11] !== c || e[12] !== m || e[13] !== onOpenChange || e[14] !== surfaceStyle) {
        g = <x.Root {...o} {...c} {...m} onOpenChange={onOpenChange} open={open_1} surfaceStyle={surfaceStyle} variant="rich" width="wide">{children}</x.Root>;
        e[8] = children;
        e[9] = open_1;
        e[10] = o;
        e[11] = c;
        e[12] = m;
        e[13] = onOpenChange;
        e[14] = surfaceStyle;
        e[15] = g;
    } else {
        g = e[15];
    }
    return g;
}
const j = [];
const overrides = new Map;
const B = {
    overrides,
    selection: j
};
const y = c_2(new Map);
function A(selection, e) {
    return selection.length === e.length && selection.every((s, t)=>s === e[t]);
}
function S(n) {
    return y.get().get(n) ?? B;
}
function E(n, e) {
    y.update((s)=>new Map(s).set(n, e));
}
export function p(n, e) {
    const s = S(n);
    if (!A(s.selection, e)) {
        E(n, {
            overrides: s.overrides,
            selection: e
        });
    }
}
export function s(n, e, s) {
    const t = S(n);
    const overrides = new Map(t.overrides).set(e, s);
    const selection = s ? t.selection : t.selection.filter((r)=>r !== e);
    E(n, {
        overrides,
        selection
    });
}
export function d(n) {
    if (y.get().has(n)) {
        y.update((e)=>{
            const s = new Map(e);
            s.delete(n);
            return s;
        });
    }
}
function useK(n) {
    const e = c_1.c(2);
    let s;
    if (e[0] !== n) {
        s = ()=>{
            if (n == null) {
                return j;
            }
            return S(n).selection;
        };
        e[0] = n;
        e[1] = s;
    } else {
        s = e[1];
    }
    return r.useSyncExternalStore(y.subscribe, s, _);
}
function _() {
    return j;
}
export function c(n) {
    const e = c_1.c(2);
    let s;
    if (e[0] !== n) {
        s = ()=>{
            if (n == null) {
                return overrides;
            }
            return S(n).overrides;
        };
        e[0] = n;
        e[1] = s;
    } else {
        s = e[1];
    }
    return r.useSyncExternalStore(y.subscribe, s, C);
}
function C() {
    return overrides;
}
export { PComponent as T, QComponent as a, B1Component as b, useK as u };
