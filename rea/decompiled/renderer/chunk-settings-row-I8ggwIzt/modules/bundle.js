import { c, p as p_1, u } from "./index.eager-vendor-Qbf9YA6n.js";
import { a$, a_, a4 as P, r, aK, cc, dj, dk, dl } from "./index.eager-app-Cj5f8Gby.js";
import { ba, n as X, m as Y } from "./index-ZYxf-aBb.js";
import { aY as Z } from "./index.eager-platform-Dcfeegfw.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "e466098c-858b-4339-bbf1-f4044e7a6f72";
            e._sentryDebugIdIdentifier = "sentry-dbid-e466098c-858b-4339-bbf1-f4044e7a6f72";
        }
    } catch (e) {}
})();
const ss = {
    title: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kwRFfy: "sand-1tlft3r",
        kZCmMZ: "sand-22095l",
        kMwMTN: "sand-1o0liin",
        $$css: true
    }
};
function AsComponent(m) {
    AsComponent.d = 1284;
    const s = c.c(12);
    const { title, children, surface } = m;
    const r = surface === undefined ? "card" : surface;
    let i;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-78zum5 sand-dt5ytf sand-1qjc9v5 sand-ehausa"
        };
        s[0] = i;
    } else {
        i = s[0];
    }
    const i_className = i.className;
    let n;
    if (s[1] !== title) {
        n = title == null ? null : <h3 className={p_1(ss.title, a_.label, a$.regular).className}>{title}</h3>;
        s[1] = title;
        s[2] = n;
    } else {
        n = s[2];
    }
    let e;
    if (s[3] !== r || s[4] !== title) {
        e = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-ehausa sand-1tlft3r sand-22095l"
            },
            2: {
                className: "sand-78zum5 sand-dt5ytf sand-7giv3 sand-13ly8rp sand-1xlntvz sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1pkpdue"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-ehausa sand-yri2b sand-1c1uobl"
            },
            3: {
                className: "sand-78zum5 sand-dt5ytf sand-7giv3 sand-13ly8rp sand-1xlntvz sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-1pkpdue sand-yri2b sand-1c1uobl"
            }
        })[(r === "card") << 1 | (r === "plain" && title == null) << 0];
        s[3] = r;
        s[4] = title;
        s[5] = e;
    } else {
        e = s[5];
    }
    let u;
    if (s[6] !== children || s[7] !== e.className) {
        u = <div className={e.className}>{children}</div>;
        s[6] = children;
        s[7] = e.className;
        s[8] = u;
    } else {
        u = s[8];
    }
    let f;
    if (s[9] !== n || s[10] !== u) {
        f = <section className={i_className}>{n}{u}</section>;
        s[9] = n;
        s[10] = u;
        s[11] = f;
    } else {
        f = s[11];
    }
    return f;
}
const ns = {
    hint: {
        kB7OPa: "sand-9f619",
        keoZOQ: "sand-1kgmq87",
        $$css: true
    },
    label: {
        k7Eaqz: "sand-euugli",
        $$css: true
    }
};
function DComponent(m) {
    DComponent.d = 1309;
    const s = c.c(3);
    const { children } = m;
    let l;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = r("sand-settings-field__hint", "sand-9f619 sand-1kgmq87");
        s[0] = l;
    } else {
        l = s[0];
    }
    let d;
    if (s[1] !== children) {
        d = <Z as="span" className={l} color="secondary" size="md">{children}</Z>;
        s[1] = children;
        s[2] = d;
    } else {
        d = s[2];
    }
    return d;
}
function F(m) {
    F.d = 1307;
    const { anchor } = m;
    return dj(anchor);
}
function GComponent(m) {
    GComponent.d = 1308;
    const s = c.c(8);
    const { anchor, label } = m;
    const { _ } = u();
    const r = dj(anchor);
    const setting = label ?? r;
    let label_1;
    if (s[0] !== _ || s[1] !== setting) {
        label_1 = _({
            id: "Jeg176",
            values: {
                setting
            }
        });
        s[0] = _;
        s[1] = setting;
        s[2] = label_1;
    } else {
        label_1 = s[2];
    }
    let url;
    if (s[3] !== anchor) {
        url = dk(anchor);
        s[3] = anchor;
        s[4] = url;
    } else {
        url = s[4];
    }
    let e;
    if (s[5] !== label_1 || s[6] !== url) {
        e = <Y label={label_1} url={url}/>;
        s[5] = label_1;
        s[6] = url;
        s[7] = e;
    } else {
        e = s[7];
    }
    return e;
}
function EsComponent(m) {
    EsComponent.d = 1310;
    const s = c.c(45);
    const { label, description, extraCopy, children, variant, anchorId, copyText, labelToken, settingName, labelFocusRef } = m;
    const h = (variant === undefined ? "default" : variant) === "card";
    const anchor = anchorId === cc ? null : anchorId;
    let _;
    if (s[0] !== label || s[1] !== labelToken) {
        _ = label == null || labelToken == null ? label : <P dir={labelToken.dir} text={label} token={labelToken.text}/>;
        s[0] = label;
        s[1] = labelToken;
        s[2] = _;
    } else {
        _ = s[2];
    }
    const L = _;
    let q;
    if (s[3] !== anchor || s[4] !== L) {
        q = L ?? (anchor == null ? null : <F anchor={anchor}/>);
        s[3] = anchor;
        s[4] = L;
        s[5] = q;
    } else {
        q = s[5];
    }
    const T = q;
    ba(anchor);
    let b;
    if (s[6] !== h) {
        b = r("sand-settings-row", {
            0: {
                className: "sand-9f619 sand-78zum5 sand-1a02dak sand-1cy8zhl sand-1qughib sand-1qgv0r9 sand-3pnbk8 sand-1xr8qbc sand-jodmca"
            },
            1: {
                className: "sand-9f619 sand-78zum5 sand-1a02dak sand-1qughib sand-3pnbk8 sand-1xr8qbc sand-jodmca sand-1n2onr6 sand-6s0dn4 sand-1pzdu40 sand-oyc9vk sand-1n9uuka sand-2lprc sand-cssynl"
            }
        }[!!h << 0].className);
        s[6] = h;
        s[7] = b;
    } else {
        b = s[7];
    }
    let id;
    if (s[8] !== anchor) {
        id = anchor == null ? undefined : dl(anchor);
        s[8] = anchor;
        s[9] = id;
    } else {
        id = s[9];
    }
    let k;
    if (s[10] !== h) {
        k = r("sand-settings-copy", {
            0: {
                className: "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-1rnznto sand-dt5ytf sand-17d4w8g sand-euugli sand-1t8xbu sand-1mzt3pk"
            },
            1: {
                className: "sand-9f619 sand-78zum5 sand-1iyjqo2 sand-s83m0k sand-1rnznto sand-dt5ytf sand-euugli sand-1t8xbu sand-1mzt3pk sand-137clkk"
            }
        }[!!h << 0].className);
        s[10] = h;
        s[11] = k;
    } else {
        k = s[11];
    }
    let $;
    if (s[12] === Symbol.for("react.memo_cache_sentinel")) {
        $ = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli"
        };
        s[12] = $;
    } else {
        $ = s[12];
    }
    const color = h ? "primary" : "secondary";
    const size = h ? "md" : "sm";
    let p;
    if (s[13] !== T || s[14] !== labelFocusRef) {
        p = labelFocusRef == null ? T : <span ref={labelFocusRef} {...p_1(aK.controlRing)}>{T}</span>;
        s[13] = T;
        s[14] = labelFocusRef;
        s[15] = p;
    } else {
        p = s[15];
    }
    let x;
    if (s[16] !== p || s[17] !== color || s[18] !== size) {
        x = <Z as="span" color={color} rootStyle={ns.label} size={size}>{p}</Z>;
        s[16] = p;
        s[17] = color;
        s[18] = size;
        s[19] = x;
    } else {
        x = s[19];
    }
    let g;
    if (s[20] !== copyText) {
        g = copyText == null ? null : <X label={copyText.label} text={copyText.value}/>;
        s[20] = copyText;
        s[21] = g;
    } else {
        g = s[21];
    }
    let N;
    if (s[22] !== label || s[23] !== anchor || s[24] !== settingName) {
        N = anchor == null ? null : <GComponent anchor={anchor} label={settingName ?? label}/>;
        s[22] = label;
        s[23] = anchor;
        s[24] = settingName;
        s[25] = N;
    } else {
        N = s[25];
    }
    let j;
    if (s[26] !== x || s[27] !== g || s[28] !== N) {
        j = <div className={$.className}>{x}{g}{N}</div>;
        s[26] = x;
        s[27] = g;
        s[28] = N;
        s[29] = j;
    } else {
        j = s[29];
    }
    let v;
    if (s[30] !== description) {
        v = description != null ? <DComponent>{description}</DComponent> : null;
        s[30] = description;
        s[31] = v;
    } else {
        v = s[31];
    }
    let z;
    if (s[32] !== extraCopy || s[33] !== j || s[34] !== v || s[35] !== k) {
        z = <div className={k}>{j}{v}{extraCopy}</div>;
        s[32] = extraCopy;
        s[33] = j;
        s[34] = v;
        s[35] = k;
        s[36] = z;
    } else {
        z = s[36];
    }
    let R;
    if (s[37] === Symbol.for("react.memo_cache_sentinel")) {
        R = r("sand-settings-control", "sand-9f619 sand-78zum5 sand-dt5ytf sand-uk3077 sand-1iyjqo2 sand-1fig6rf sand-1t8xbu sand-vc5jky sand-xhr3t");
        s[37] = R;
    } else {
        R = s[37];
    }
    let S;
    if (s[38] !== children) {
        S = <div className={R}>{children}</div>;
        s[38] = children;
        s[39] = S;
    } else {
        S = s[39];
    }
    let w;
    if (s[40] !== z || s[41] !== S || s[42] !== b || s[43] !== id) {
        w = <div className={b} id={id}>{z}{S}</div>;
        s[40] = z;
        s[41] = S;
        s[42] = b;
        s[43] = id;
        s[44] = w;
    } else {
        w = s[44];
    }
    return w;
}
export { AsComponent as G, DComponent as S, EsComponent as a, GComponent as b, ns as s };
