import { c as c_1, u, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { I, p as T } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import { aK } from "./index.eager-app-Cj5f8Gby.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "854662a7-319e-4d94-9fe0-88651cf21635";
            e._sentryDebugIdIdentifier = "sentry-dbid-854662a7-319e-4d94-9fe0-88651cf21635";
        }
    } catch (e) {}
})();
const x = {
    addedToggleButton: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kmuXW: "sand-2lah0s",
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-vy4d1p",
        kZKoxP: "sand-xk0z11",
        kmVPX3: "sand-1717udv",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-16rqkct",
        kWkggS: "sand-yjcdl2 sand-1vkw5ej",
        kMwMTN: "sand-1le6hhr",
        kkrTdU: "sand-1ypdohk",
        k1ekBW: "sand-15406qy",
        kIyJzY: "sand-1firant",
        kAMwcw: "sand-9lcvmn",
        $$css: true
    },
    addButton: {
        kMwMTN: "sand-169k319",
        $$css: true
    },
    deleteResting: {
        kWkggS: "sand-yjcdl2",
        kMwMTN: "sand-1le6hhr",
        $$css: true
    }
};
export function b(h) {
    b.d = 1061;
    const s = c_1.c(15);
    const { name, readOnly, disabled, autoFocus, onRemove } = h;
    const i = readOnly === undefined ? false : readOnly;
    const e = disabled === undefined ? false : disabled;
    const n = autoFocus === undefined ? false : autoFocus;
    const { _ } = u();
    if (i || e || onRemove == null) {
        let f;
        if (s[0] !== _) {
            f = _({
                id: "hp8OtS"
            });
            s[0] = _;
            s[1] = f;
        } else {
            f = s[1];
        }
        let v;
        let y;
        if (s[2] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-vy4d1p sand-xk0z11 sand-16rqkct sand-yjcdl2 sand-1le6hhr"
            };
            y = <I aria-hidden name="check" size="sm"/>;
            s[2] = v;
            s[3] = y;
        } else {
            v = s[2];
            y = s[3];
        }
        let b;
        if (s[4] !== f) {
            b = <span aria-label={f} aria-live="off" role="status" {...v}>{y}</span>;
            s[4] = f;
            s[5] = b;
        } else {
            b = s[5];
        }
        return b;
    }
    let o;
    if (s[6] !== _ || s[7] !== name) {
        o = _({
            id: "HLazKQ",
            values: {
                name
            }
        });
        s[6] = _;
        s[7] = name;
        s[8] = o;
    } else {
        o = s[8];
    }
    let m;
    let d;
    if (s[9] === Symbol.for("react.memo_cache_sentinel")) {
        m = p(aK.controlRing, x.addedToggleButton);
        d = <I aria-hidden name="check" size="sm"/>;
        s[9] = m;
        s[10] = d;
    } else {
        m = s[9];
        d = s[10];
    }
    let c;
    if (s[11] !== n || s[12] !== onRemove || s[13] !== o) {
        c = <button aria-label={o} autoFocus={n} onClick={onRemove} type="button" {...m}>{d}</button>;
        s[11] = n;
        s[12] = onRemove;
        s[13] = o;
        s[14] = c;
    } else {
        c = s[14];
    }
    return c;
}
function WComponent(h) {
    WComponent.d = 1062;
    const s = c_1.c(11);
    const { name, showsTrash, disabled, onDelete } = h;
    const a = disabled === undefined ? false : disabled;
    const { _ } = u();
    const e = showsTrash && !a;
    const n = a || undefined;
    let t;
    if (s[0] !== _ || s[1] !== name) {
        t = _({
            id: "HLazKQ",
            values: {
                name
            }
        });
        s[0] = _;
        s[1] = name;
        s[2] = t;
    } else {
        t = s[2];
    }
    const icon = e ? "trash" : "check";
    const onClick = a ? undefined : onDelete;
    let d;
    if (s[3] !== e) {
        d = e ? {} : {
            style: x.deleteResting
        };
        s[3] = e;
        s[4] = d;
    } else {
        d = s[4];
    }
    let c;
    if (s[5] !== n || s[6] !== t || s[7] !== icon || s[8] !== onClick || s[9] !== d) {
        c = <T aria-disabled={n} aria-label={t} icon={icon} iconSize="sm" onClick={onClick} shape="circle" size="sm" variant="ghost" {...d}/>;
        s[5] = n;
        s[6] = t;
        s[7] = icon;
        s[8] = onClick;
        s[9] = d;
        s[10] = c;
    } else {
        c = s[10];
    }
    return c;
}
function BComponent(h) {
    BComponent.d = 1060;
    const s = c_1.c(8);
    const { disabled, name, autoFocus, onAdd } = h;
    const a = autoFocus === undefined ? false : autoFocus;
    const { _ } = u();
    let e;
    if (s[0] !== _ || s[1] !== name) {
        e = _({
            id: "IehYpl",
            values: {
                name
            }
        });
        s[0] = _;
        s[1] = name;
        s[2] = e;
    } else {
        e = s[2];
    }
    let n;
    if (s[3] !== a || s[4] !== disabled || s[5] !== onAdd || s[6] !== e) {
        n = <T aria-label={e} autoFocus={a} disabled={disabled} icon="plus" iconSize="sm" onClick={onAdd} shape="circle" size="sm" style={x.addButton} type="button" variant="ghost"/>;
        s[3] = a;
        s[4] = disabled;
        s[5] = onAdd;
        s[6] = e;
        s[7] = n;
    } else {
        n = s[7];
    }
    return n;
}
export { WComponent as T, BComponent as a };
