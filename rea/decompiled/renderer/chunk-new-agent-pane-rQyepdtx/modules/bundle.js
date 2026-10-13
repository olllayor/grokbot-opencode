import { c as c_1, u, j, r as r_1, T as T_1, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { r as r_2, ds as ds_1, du as min, dt as max, dv, dw, dx, dy, dz, a_, a$, b7, e_, b0 as Me, e$, N as N_1, f0 } from "./index.eager-app-Cj5f8Gby.js";
import { B, W as W_1, x as x_1, z as Ee } from "./index-ZYxf-aBb.js";
import { aY as Ls } from "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "96da91c9-97b1-406a-b8b2-39530ba9717a";
            e._sentryDebugIdIdentifier = "sentry-dbid-96da91c9-97b1-406a-b8b2-39530ba9717a";
        }
    } catch (e) {}
})();
function LeComponent(k) {
    LeComponent.d = 68;
    const e = c_1.c(22);
    const { dataUrl, sizePx, isPending, pickLabel, removeLabel, onPick, onRemove } = k;
    const d = sizePx === undefined ? 72 : sizePx;
    const o = isPending === undefined ? false : isPending;
    const { _ } = u();
    const p = dataUrl != null && dataUrl.length > 0;
    let y;
    if (e[0] !== _ || e[1] !== dataUrl || e[2] !== p || e[3] !== o || e[4] !== onPick || e[5] !== onRemove || e[6] !== pickLabel || e[7] !== removeLabel || e[8] !== d) {
        const g = {
            className: "sand--default-marker sand-1n2onr6 sand-3nfvp2 sand-1c4vz4f sand-2lah0s sand-1gvjw7"
        };
        const j = {
            className: "sand--default-marker sand-1n2onr6 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-h8yej3 sand-5yr21d sand-1717udv sand-ng3xce sand-149ho13 sand-jbqb8w sand-1ypdohk sand-1ar62m4 sand-1hc1fzr sand-fqoyci sand-b3r6kr"
        };
        const N = {
            className: "sand-10l6tqk sand-10a8y8t sand-78zum5 sand-uk3077 sand-l56j7k sand-1a8lsjc sand-k9dyuk sand-fungia sand-g01cxk sand-yn4j07 sand-11iuvcu sand-19991ni sand-1uacuc8 sand-wji4o3 sand-47corl"
        };
        const M = {
            className: "sand-10l6tqk sand-1ib5ffp sand-1t8mmr6 sand-6cvaw9 sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-vy4d1p sand-xk0z11 sand-1717udv sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-149ho13 sand-1ua6jya sand-1iuyybk sand-19aaqeu sand-7gh5u8 sand-1ypdohk sand-1ar62m4 sand-g01cxk sand-25t5g8 sand-1k8kjig sand-1lzqukj sand-1dbdvug sand-1kqntcj"
        };
        const $ = r_2("sand-editable-avatar", g.className);
        let z;
        if (e[10] !== d) {
            z = {
                ...g.style,
                width: d,
                height: d
            };
            e[10] = d;
            e[11] = z;
        } else {
            z = e[11];
        }
        const ee = r_2("sand-editable-avatar__button", j.className);
        const style = j.style;
        let w;
        if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
            w = r_2("sand-editable-avatar__fill", "sand-3nfvp2 sand-h8yej3 sand-5yr21d");
            e[12] = w;
        } else {
            w = e[12];
        }
        let x;
        if (e[13] !== dataUrl || e[14] !== d) {
            x = <span className={w}>{dataUrl != null && dataUrl.length > 0 ? <B aria-hidden sizePx={d} src={dataUrl}/> : <B aria-hidden icon="plus" sizePx={d}/>}</span>;
            e[13] = dataUrl;
            e[14] = d;
            e[15] = x;
        } else {
            x = e[15];
        }
        let v;
        if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
            v = <span aria-hidden className={r_2("sand-editable-avatar__overlay", N.className)} style={N.style}><W_1 name="pencil" size="sm"/></span>;
            e[16] = v;
        } else {
            v = e[16];
        }
        let q;
        if (e[17] !== o || e[18] !== onPick || e[19] !== pickLabel || e[20] !== x) {
            q = <button aria-label={pickLabel} className={ee} disabled={o} onClick={onPick} style={style} type="button">{x}{v}</button>;
            e[17] = o;
            e[18] = onPick;
            e[19] = pickLabel;
            e[20] = x;
            e[21] = q;
        } else {
            q = e[21];
        }
        y = <div className={$} style={z}>{q}{p ? <button aria-label={removeLabel} className={r_2("sand-editable-avatar__remove", M.className)} disabled={o} onClick={onRemove} style={M.style} title={_({
            id: "k8od7T"
        })} type="button"><W_1 name="close" size="xs"/></button> : null}</div>;
        e[0] = _;
        e[1] = dataUrl;
        e[2] = p;
        e[3] = o;
        e[4] = onPick;
        e[5] = onRemove;
        e[6] = pickLabel;
        e[7] = removeLabel;
        e[8] = d;
        e[9] = y;
    } else {
        y = e[9];
    }
    return y;
}
const qe = 260;
function KeComponent(k) {
    KeComponent.d = 66;
    const e = c_1.c(102);
    const { sourceDataUrl, isSaving, onCancel, onConfirm } = k;
    const n = isSaving === undefined ? false : isSaving;
    const { _: __1 } = u();
    const [t, setT] = r_1.useState(null);
    const [o, setO] = r_1.useState(null);
    const [p, setP] = r_1.useState(false);
    const gRef = r_1.useRef(null);
    const jRef = r_1.useRef(null);
    const NRef = r_1.useRef(null);
    let M;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        M = (i)=>{
            const { naturalWidth, naturalHeight } = i.currentTarget;
            if (naturalWidth <= 0 || naturalHeight <= 0) {
                setP(true);
                return;
            }
            setT({
                width: naturalWidth,
                height: naturalHeight
            });
            setO(dv(naturalWidth, naturalHeight));
        };
        e[0] = M;
    } else {
        M = e[0];
    }
    const onLoad = M;
    let z;
    if (e[1] !== t) {
        z = (i, l)=>{
            setO((h)=>{
                if (h == null) {
                    return h;
                }
                const b = t;
                if (b == null) {
                    return h;
                }
                const _ = Math.min(b.width, b.height);
                const E = qe / _ * h.zoom;
                const se = {
                    zoom: h.zoom,
                    centerX: h.centerX - i / E,
                    centerY: h.centerY - l / E
                };
                return {
                    zoom: h.zoom,
                    ...dw(se, b.width, b.height)
                };
            });
        };
        e[1] = t;
        e[2] = z;
    } else {
        z = e[2];
    }
    const ee = z;
    let S;
    if (e[3] !== t) {
        S = (i)=>{
            setO((l)=>{
                if (l == null) {
                    return l;
                }
                const h = t;
                if (h == null) {
                    return l;
                }
                const b = dx(i);
                const _ = {
                    zoom: b,
                    centerX: l.centerX,
                    centerY: l.centerY
                };
                return {
                    zoom: b,
                    ...dw(_, h.width, h.height)
                };
            });
        };
        e[3] = t;
        e[4] = S;
    } else {
        S = e[4];
    }
    const w = S;
    let x;
    if (e[5] !== t) {
        x = (i)=>{
            jRef.current = i;
            if (i == null || t == null) {
                return;
            }
            const l = (h)=>{
                h.preventDefault();
                const b = Math.exp(-h.deltaY * 0.0015);
                setO((_)=>{
                    if (_ == null) {
                        return _;
                    }
                    const E = dx(_.zoom * b);
                    const se = {
                        zoom: E,
                        centerX: _.centerX,
                        centerY: _.centerY
                    };
                    return {
                        zoom: E,
                        ...dw(se, t.width, t.height)
                    };
                });
            };
            i.addEventListener("wheel", l, {
                passive: false
            });
            return ()=>{
                i.removeEventListener("wheel", l);
                jRef.current = null;
            };
        };
        e[5] = t;
        e[6] = x;
    } else {
        x = e[6];
    }
    const ref = x;
    let q;
    if (e[7] !== t) {
        q = (i)=>{
            if (t != null) {
                i.currentTarget.setPointerCapture(i.pointerId);
                NRef.current = {
                    pointerId: i.pointerId,
                    lastX: i.clientX,
                    lastY: i.clientY
                };
            }
        };
        e[7] = t;
        e[8] = q;
    } else {
        q = e[8];
    }
    const onPointerDown = q;
    let P;
    if (e[9] !== ee) {
        P = (i)=>{
            const NRef_current = NRef.current;
            if (NRef_current == null || NRef_current.pointerId !== i.pointerId) {
                return;
            }
            const h = i.clientX - NRef_current.lastX;
            const b = i.clientY - NRef_current.lastY;
            NRef_current.lastX = i.clientX;
            NRef_current.lastY = i.clientY;
            ee(h, b);
        };
        e[9] = ee;
        e[10] = P;
    } else {
        P = e[10];
    }
    const onPointerMove = P;
    let D;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        D = (i)=>{
            const NRef_current = NRef.current;
            if (!(NRef_current == null || NRef_current.pointerId !== i.pointerId)) {
                NRef.current = null;
                if (i.currentTarget.hasPointerCapture(i.pointerId)) {
                    i.currentTarget.releasePointerCapture(i.pointerId);
                }
            }
        };
        e[11] = D;
    } else {
        D = e[11];
    }
    const onPointerUp = D;
    let T;
    if (e[12] !== t) {
        T = ()=>{
            if (t != null) {
                setO(dv(t.width, t.height));
            }
        };
        e[12] = t;
        e[13] = T;
    } else {
        T = e[13];
    }
    const ae = T;
    let Y;
    if (e[14] !== o || e[15] !== t || e[16] !== onConfirm) {
        Y = ()=>{
            const gRef_current = gRef.current;
            if (gRef_current == null || t == null || o == null) {
                return;
            }
            const l = document.createElement("canvas");
            l.width = dy;
            l.height = dy;
            const h = l.getContext("2d");
            if (h == null) {
                return;
            }
            h.imageSmoothingEnabled = true;
            h.imageSmoothingQuality = "high";
            const b = dz(t.width, t.height, o);
            h.drawImage(gRef_current, b.x, b.y, b.width, b.height, 0, 0, dy, dy);
            const _ = l.toDataURL("image/png");
            const E = _.slice(_.indexOf(",") + 1);
            if (E.length !== 0) {
                onConfirm(E);
            }
        };
        e[14] = o;
        e[15] = t;
        e[16] = onConfirm;
        e[17] = Y;
    } else {
        Y = e[17];
    }
    const ge = Y;
    const be = t != null && o != null && !p;
    let ze;
    e: {
        if (t == null || o == null) {
            ze = null;
            break e;
        }
        const i = Math.min(t.width, t.height);
        const l = qe / i * o.zoom;
        const h = qe / 2 - o.centerX * l;
        const b = qe / 2 - o.centerY * l;
        const _ = t.width * l;
        const height = t.height * l;
        const transform = `translate(${h}px, ${b}px)`;
        let pe;
        if (e[18] !== _ || e[19] !== height || e[20] !== transform) {
            pe = {
                width: _,
                height,
                transform
            };
            e[18] = _;
            e[19] = height;
            e[20] = transform;
            e[21] = pe;
        } else {
            pe = e[21];
        }
        ze = pe;
    }
    const me = ze;
    let ue;
    let ke;
    let ne;
    let W;
    let R;
    let U;
    let X;
    let le;
    let onOpenChange;
    let open;
    let variant;
    let H;
    let I;
    if (e[22] !== __1 || e[23] !== ref || e[24] !== o?.zoom || e[25] !== onPointerDown || e[26] !== onPointerMove || e[27] !== p || e[28] !== me || e[29] !== be || e[30] !== onCancel || e[31] !== w || e[32] !== sourceDataUrl) {
        const i = {
            className: "sand-78zum5 sand-dt5ytf sand-1qjc9v5 sand-1c1vhfx"
        };
        const l = {
            className: "sand-1n2onr6 sand-amitd3 sand-1hfn5x7 sand-dwzuf7 sand-16rqkct sand-b3r6kr sand-i07v4r sand-1jm3nie sand-ch2mbi sand-5ve5x3 sand-87ps6o sand-1t137rt"
        };
        const h = {
            className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-1x1rfll sand-47corl sand-87ps6o sand-1so62im"
        };
        const b = {
            className: "sand-10l6tqk sand-10a8y8t sand-16rqkct sand-8vn8i5 sand-47corl"
        };
        const _ = {
            className: "sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-fn1xvj sand-4b2ntj"
        };
        const E = {
            className: "sand-1iyjqo2 sand-s83m0k sand-1ghz6dp sand-1ypdohk sand-jyslct sand-1lugfcp sand-jbqb8w sand-1t137rt sand-13m05e8 sand-1ysdatd sand-tk3z5d sand-ibs45w sand-1hzk0bc sand-3cp4ko sand-e55cdc sand-jfutqj sand-fiu4hc sand-13y9dww sand-5pni9w"
        };
        ke = x_1.Root;
        if (e[46] !== __1) {
            X = __1({
                id: "gY2AXq"
            });
            e[46] = __1;
            e[47] = X;
        } else {
            X = e[47];
        }
        le = "sand-avatar-crop";
        if (e[48] !== onCancel) {
            onOpenChange = (Xe)=>{
                if (!Xe) {
                    onCancel();
                }
            };
            e[48] = onCancel;
            e[49] = onOpenChange;
        } else {
            onOpenChange = e[49];
        }
        open = true;
        variant = "rich";
        H = 360;
        let se;
        if (e[50] === Symbol.for("react.memo_cache_sentinel")) {
            se = <x_1.Title><T_1 id="gY2AXq"/></x_1.Title>;
            e[50] = se;
        } else {
            se = e[50];
        }
        if (e[51] === Symbol.for("react.memo_cache_sentinel")) {
            I = <x_1.Header>{se}<x_1.Description><T_1 id="5QBuJy"/></x_1.Description><x_1.CloseButton/></x_1.Header>;
            e[51] = I;
        } else {
            I = e[51];
        }
        ue = x_1.Body;
        ne = r_2("sand-avatar-crop__body", i.className);
        W = i.style;
        let onError;
        if (e[52] === Symbol.for("react.memo_cache_sentinel")) {
            onError = ()=>setP(true);
            e[52] = onError;
        } else {
            onError = e[52];
        }
        let ve;
        if (e[53] !== me) {
            ve = me != null ? {
                ...h.style,
                ...me
            } : {
                ...h.style,
                visibility: "hidden"
            };
            e[53] = me;
            e[54] = ve;
        } else {
            ve = e[54];
        }
        let _e;
        if (e[55] !== sourceDataUrl || e[56] !== ve) {
            _e = <img alt="" className={r_2("sand-avatar-crop__image", h.className)} draggable={false} onError={onError} onLoad={onLoad} ref={gRef} src={sourceDataUrl} style={ve}/>;
            e[55] = sourceDataUrl;
            e[56] = ve;
            e[57] = _e;
        } else {
            _e = e[57];
        }
        let we;
        if (e[58] === Symbol.for("react.memo_cache_sentinel")) {
            we = <span aria-hidden className={r_2("sand-avatar-crop__ring", b.className)} style={b.style}/>;
            e[58] = we;
        } else {
            we = e[58];
        }
        if (e[59] !== ref || e[60] !== onPointerDown || e[61] !== onPointerMove || e[62] !== _e) {
            R = <div className={r_2("sand-avatar-crop__stage", l.className)} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} ref={ref} style={l.style}>{_e}{we}</div>;
            e[59] = ref;
            e[60] = onPointerDown;
            e[61] = onPointerMove;
            e[62] = _e;
            e[63] = R;
        } else {
            R = e[63];
        }
        U = p ? <Ls color="red" size="sm"><T_1 id="vFA1Ka"/></Ls> : <div className={r_2("sand-avatar-crop__controls", _.className)} style={_.style}><W_1 aria-hidden name="image" size={13}/><input aria-label={__1({
            id: "Qwg3u4"
        })} className={r_2("sand-avatar-crop__zoom", E.className)} disabled={!be} max={max} min={min} onChange={(Xe)=>w(Number.parseFloat(Xe.currentTarget.value))} step={0.01} style={E.style} type="range" value={o?.zoom ?? min}/><W_1 aria-hidden name="image" size={19}/></div>;
        e[22] = __1;
        e[23] = ref;
        e[24] = o?.zoom;
        e[25] = onPointerDown;
        e[26] = onPointerMove;
        e[27] = p;
        e[28] = me;
        e[29] = be;
        e[30] = onCancel;
        e[31] = w;
        e[32] = sourceDataUrl;
        e[33] = ue;
        e[34] = ke;
        e[35] = ne;
        e[36] = W;
        e[37] = R;
        e[38] = U;
        e[39] = X;
        e[40] = le;
        e[41] = onOpenChange;
        e[42] = open;
        e[43] = variant;
        e[44] = H;
        e[45] = I;
    } else {
        ue = e[33];
        ke = e[34];
        ne = e[35];
        W = e[36];
        R = e[37];
        U = e[38];
        X = e[39];
        le = e[40];
        onOpenChange = e[41];
        open = e[42];
        variant = e[43];
        H = e[44];
        I = e[45];
    }
    let children;
    if (e[64] !== ne || e[65] !== W || e[66] !== R || e[67] !== U) {
        children = <div className={ne} style={W}>{R}{U}</div>;
        e[64] = ne;
        e[65] = W;
        e[66] = R;
        e[67] = U;
        e[68] = children;
    } else {
        children = e[68];
    }
    let de;
    if (e[69] !== ue || e[70] !== children) {
        de = j.jsx(ue, {
            children
        });
        e[69] = ue;
        e[70] = children;
        e[71] = de;
    } else {
        de = e[71];
    }
    const Se = !be || n;
    let ce;
    if (e[72] === Symbol.for("react.memo_cache_sentinel")) {
        ce = <T_1 id="OfhWJH"/>;
        e[72] = ce;
    } else {
        ce = e[72];
    }
    let Z;
    if (e[73] !== ae || e[74] !== Se) {
        Z = <x_1.Action disabled={Se} onClick={ae} variant="tertiary">{ce}</x_1.Action>;
        e[73] = ae;
        e[74] = Se;
        e[75] = Z;
    } else {
        Z = e[75];
    }
    let oe;
    if (e[76] === Symbol.for("react.memo_cache_sentinel")) {
        oe = <x_1.ActionSpacer/>;
        e[76] = oe;
    } else {
        oe = e[76];
    }
    let he;
    if (e[77] === Symbol.for("react.memo_cache_sentinel")) {
        he = <T_1 id="dEgA5A"/>;
        e[77] = he;
    } else {
        he = e[77];
    }
    let F;
    if (e[78] !== onCancel) {
        F = <x_1.Action onClick={onCancel}>{he}</x_1.Action>;
        e[78] = onCancel;
        e[79] = F;
    } else {
        F = e[79];
    }
    const je = !be || n;
    let Q;
    if (e[80] !== __1 || e[81] !== n) {
        Q = __1(n ? {
            id: "K/F6pa"
        } : {
            id: "tfDRzk"
        });
        e[80] = __1;
        e[81] = n;
        e[82] = Q;
    } else {
        Q = e[82];
    }
    let G;
    if (e[83] !== ge || e[84] !== je || e[85] !== Q) {
        G = <x_1.Action disabled={je} onClick={ge} variant="primary">{Q}</x_1.Action>;
        e[83] = ge;
        e[84] = je;
        e[85] = Q;
        e[86] = G;
    } else {
        G = e[86];
    }
    let J;
    if (e[87] !== Z || e[88] !== F || e[89] !== G) {
        J = <x_1.ActionBar>{Z}{oe}{F}{G}</x_1.ActionBar>;
        e[87] = Z;
        e[88] = F;
        e[89] = G;
        e[90] = J;
    } else {
        J = e[90];
    }
    let ie;
    if (e[91] !== ke || e[92] !== X || e[93] !== le || e[94] !== onOpenChange || e[95] !== open || e[96] !== variant || e[97] !== H || e[98] !== I || e[99] !== de || e[100] !== J) {
        ie = j.jsxs(ke, {
            "aria-label": X,
            className: le,
            onOpenChange,
            open,
            variant,
            width: H,
            children: [
                I,
                de,
                J
            ]
        });
        e[91] = ke;
        e[92] = X;
        e[93] = le;
        e[94] = onOpenChange;
        e[95] = open;
        e[96] = variant;
        e[97] = H;
        e[98] = I;
        e[99] = de;
        e[100] = J;
        e[101] = ie;
    } else {
        ie = e[101];
    }
    return ie;
}
async function ds(pickSource, setR, setF) {
    try {
        const r = await pickSource();
        if (r != null) {
            setR(r);
        }
    } finally{
        setF(false);
    }
}
async function cs(k, e, setR, setC) {
    try {
        await k(e);
        setR(null);
    } finally{
        setC(false);
    }
}
function OsComponent(k) {
    const e = c_1.c(14);
    const a = ds_1();
    const [r, setR] = r_1.useState(null);
    const [f, setF] = r_1.useState(false);
    const [c, setC] = r_1.useState(false);
    let d;
    if (e[0] !== a || e[1] !== f) {
        d = ()=>{
            if (!f) {
                setF(true);
                ds(a.pickSource, setR, setF);
            }
        };
        e[0] = a;
        e[1] = f;
        e[2] = d;
    } else {
        d = e[2];
    }
    const beginPick = d;
    let m;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        m = ()=>{
            setR(null);
        };
        e[3] = m;
    } else {
        m = e[3];
    }
    const onCancel = m;
    let y;
    if (e[4] !== k) {
        y = (z)=>{
            setC(true);
            cs(k, z, setR, setC);
        };
        e[4] = k;
        e[5] = y;
    } else {
        y = e[5];
    }
    const onConfirm = y;
    let j;
    if (e[6] !== onConfirm || e[7] !== c || e[8] !== r) {
        j = r != null ? <KeComponent isSaving={c} onCancel={onCancel} onConfirm={onConfirm} sourceDataUrl={r}/> : null;
        e[6] = onConfirm;
        e[7] = c;
        e[8] = r;
        e[9] = j;
    } else {
        j = e[9];
    }
    const cropModal = j;
    const isBusy = f || c;
    let $;
    if (e[10] !== beginPick || e[11] !== cropModal || e[12] !== isBusy) {
        $ = {
            beginPick,
            isBusy,
            cropModal
        };
        e[10] = beginPick;
        e[11] = cropModal;
        e[12] = isBusy;
        e[13] = $;
    } else {
        $ = e[13];
    }
    return $;
}
const is = 64;
const Ne = {
    label: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-1jnr06f",
        kogj98: "sand-1ghz6dp",
        k8WAf4: "sand-1t0vds8",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    input: {
        kB7OPa: "sand-9f619",
        kzqmXN: "sand-h8yej3",
        kysU6D: "sand-jyslct",
        k3lkva: "sand-1lugfcp",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kMeerF: "sand-1k57tk5",
        k3XXqK: "sand-1t137rt",
        kaIpWk: "sand-ur7f20",
        kWkggS: "sand-1tiofj7",
        kMwMTN: "sand-tyxrsu",
        kMv6JI: "sand-jb2p0i",
        k8WAf4: "sand-1t0vds8",
        kg3NbH: "sand-1awh872",
        k8Qsv1: "sand-1h7ufjq",
        $$css: true
    },
    textArea: {
        kZKoxP: "sand-pyat2d",
        kHenm0: "sand-tt52l0",
        $$css: true
    },
    action: {
        kzqmXN: "sand-1f1nzxn",
        $$css: true
    },
    error: {
        kogj98: "sand-1ghz6dp",
        keoZOQ: "sand-1xmf6yo",
        kMwMTN: "sand-6rl5ky",
        k9WMMc: "sand-2b8uid",
        $$css: true
    }
};
function HeComponent(k) {
    HeComponent.d = 1063;
    const e = c_1.c(78);
    const { isPending, error, onCancel, onCreate } = k;
    const { _ } = u();
    const [c, setC] = r_1.useState("");
    const [d, setD] = r_1.useState("");
    const [m, setM] = r_1.useState(null);
    let y;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        y = (l)=>setM(l);
        e[0] = y;
    } else {
        y = e[0];
    }
    const g = OsComponent(y);
    let j;
    if (e[1] !== c) {
        j = c.trim();
        e[1] = c;
        e[2] = j;
    } else {
        j = e[2];
    }
    const N = j;
    const M = N.length > 0 && !isPending;
    const $ = g.cropModal != null;
    const z = M && !$;
    const ee = m != null;
    let S;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        S = (l)=>{
            setC(l.currentTarget.value);
        };
        e[3] = S;
    } else {
        S = e[3];
    }
    const w = S;
    let x;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        x = (l)=>{
            setD(l.currentTarget.value);
        };
        e[4] = x;
    } else {
        x = e[4];
    }
    const v = x;
    const ref = rs;
    let C;
    if (e[5] !== m || e[6] !== d || e[7] !== z || e[8] !== onCreate || e[9] !== N) {
        C = ()=>{
            if (z) {
                onCreate({
                    name: N,
                    description: d.trim(),
                    avatarPngBase64: m
                });
            }
        };
        e[5] = m;
        e[6] = d;
        e[7] = z;
        e[8] = onCreate;
        e[9] = N;
        e[10] = C;
    } else {
        C = e[10];
    }
    const P = C;
    let A;
    let D;
    let ye;
    let T;
    let ae;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        T = {
            className: "sand-78zum5 sand-dt5ytf sand-1cvmir6"
        };
        D = {
            className: "sand-1n2onr6 sand-amitd3 sand-1fu8urw sand-1peatla sand-1e56ztr"
        };
        A = {
            className: "sand-78zum5 sand-167g77z sand-qui205"
        };
        ye = p_1(a_.body2, Ne.error);
        ae = r_2("sand-create-agent-form", T.className);
        e[11] = A;
        e[12] = D;
        e[13] = ye;
        e[14] = T;
        e[15] = ae;
    } else {
        A = e[11];
        D = e[12];
        ye = e[13];
        T = e[14];
        ae = e[15];
    }
    let onKeyDown;
    if (e[16] !== P) {
        onKeyDown = (l)=>{
            if (l.key === "Enter" && (l.metaKey || l.ctrlKey)) {
                l.preventDefault();
                l.stopPropagation();
                P();
            }
        };
        e[16] = P;
        e[17] = onKeyDown;
    } else {
        onKeyDown = e[17];
    }
    const T_style = T.style;
    const { className, style } = D;
    const dataUrl = ee ? `data:image/png;base64,${m}` : null;
    const isPending_1 = g.isBusy || isPending;
    const g_beginPick = g.beginPick;
    let onRemove;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        onRemove = ()=>setM(null);
        e[18] = onRemove;
    } else {
        onRemove = e[18];
    }
    let pickLabel;
    if (e[19] !== _ || e[20] !== ee) {
        pickLabel = _(ee ? {
            id: "DTEshW"
        } : {
            id: "yz8q3c"
        });
        e[19] = _;
        e[20] = ee;
        e[21] = pickLabel;
    } else {
        pickLabel = e[21];
    }
    let removeLabel;
    if (e[22] !== _) {
        removeLabel = _({
            id: "L6WKkV"
        });
        e[22] = _;
        e[23] = removeLabel;
    } else {
        removeLabel = e[23];
    }
    let U;
    if (e[24] !== g.beginPick || e[25] !== dataUrl || e[26] !== isPending_1 || e[27] !== pickLabel || e[28] !== removeLabel) {
        U = <span className={className} style={style}><LeComponent dataUrl={dataUrl} isPending={isPending_1} onPick={g_beginPick} onRemove={onRemove} pickLabel={pickLabel} removeLabel={removeLabel} sizePx={is}/></span>;
        e[24] = g.beginPick;
        e[25] = dataUrl;
        e[26] = isPending_1;
        e[27] = pickLabel;
        e[28] = removeLabel;
        e[29] = U;
    } else {
        U = e[29];
    }
    let X;
    if (e[30] !== _) {
        X = _({
            id: "6YtxFj"
        });
        e[30] = _;
        e[31] = X;
    } else {
        X = e[31];
    }
    let le;
    if (e[32] === Symbol.for("react.memo_cache_sentinel")) {
        le = p_1(a_.body1, Ne.input);
        e[32] = le;
    } else {
        le = e[32];
    }
    const le_className = le.className;
    let L;
    if (e[33] !== _) {
        L = _({
            id: "2DQ7aH"
        });
        e[33] = _;
        e[34] = L;
    } else {
        L = e[34];
    }
    let K;
    if (e[35] !== c || e[36] !== L) {
        K = <input ref={ref} className={le_className} onChange={w} placeholder={L} type="text" value={c}/>;
        e[35] = c;
        e[36] = L;
        e[37] = K;
    } else {
        K = e[37];
    }
    let H;
    if (e[38] !== X || e[39] !== K) {
        H = <YeComponent label={X}>{K}</YeComponent>;
        e[38] = X;
        e[39] = K;
        e[40] = H;
    } else {
        H = e[40];
    }
    let hint;
    if (e[41] !== _) {
        hint = _({
            id: "WyGyYp"
        });
        e[41] = _;
        e[42] = hint;
    } else {
        hint = e[42];
    }
    let V;
    if (e[43] !== _) {
        V = _({
            id: "Nu4oKW"
        });
        e[43] = _;
        e[44] = V;
    } else {
        V = e[44];
    }
    let de;
    if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
        de = p_1(a_.body1, Ne.input, Ne.textArea);
        e[45] = de;
    } else {
        de = e[45];
    }
    const de_className = de.className;
    let ce;
    if (e[46] !== _) {
        ce = _({
            id: "VZSV/i"
        });
        e[46] = _;
        e[47] = ce;
    } else {
        ce = e[47];
    }
    let Z;
    if (e[48] !== d || e[49] !== ce) {
        Z = <textarea className={de_className} onChange={v} placeholder={ce} value={d}/>;
        e[48] = d;
        e[49] = ce;
        e[50] = Z;
    } else {
        Z = e[50];
    }
    let oe;
    if (e[51] !== hint || e[52] !== V || e[53] !== Z) {
        oe = <YeComponent hint={hint} label={V}>{Z}</YeComponent>;
        e[51] = hint;
        e[52] = V;
        e[53] = Z;
        e[54] = oe;
    } else {
        oe = e[54];
    }
    let he;
    if (e[55] === Symbol.for("react.memo_cache_sentinel")) {
        he = <T_1 id="dEgA5A"/>;
        e[55] = he;
    } else {
        he = e[55];
    }
    let F;
    if (e[56] !== isPending || e[57] !== onCancel) {
        F = <Ee disabled={isPending} onClick={onCancel} style={Ne.action} variant="secondary">{he}</Ee>;
        e[56] = isPending;
        e[57] = onCancel;
        e[58] = F;
    } else {
        F = e[58];
    }
    const je = !z;
    let Q;
    if (e[59] !== isPending) {
        Q = isPending ? <T_1 id="/DwR+n"/> : <T_1 id="hYgDIe"/>;
        e[59] = isPending;
        e[60] = Q;
    } else {
        Q = e[60];
    }
    let G;
    if (e[61] !== P || e[62] !== je || e[63] !== Q) {
        G = <Ee disabled={je} onClick={P} style={Ne.action} variant="primary">{Q}</Ee>;
        e[61] = P;
        e[62] = je;
        e[63] = Q;
        e[64] = G;
    } else {
        G = e[64];
    }
    let J;
    if (e[65] !== F || e[66] !== G) {
        J = <div className={A.className} style={A.style}>{F}{G}</div>;
        e[65] = F;
        e[66] = G;
        e[67] = J;
    } else {
        J = e[67];
    }
    let ie;
    if (e[68] !== error) {
        ie = error != null ? <p className={ye.className} style={ye.style}>{error}</p> : null;
        e[68] = error;
        e[69] = ie;
    } else {
        ie = e[69];
    }
    let i;
    if (e[70] !== g.cropModal || e[71] !== U || e[72] !== H || e[73] !== oe || e[74] !== J || e[75] !== ie || e[76] !== onKeyDown) {
        i = <div className={ae} onKeyDown={onKeyDown} style={T_style}>{U}{H}{oe}{J}{ie}{g.cropModal}</div>;
        e[70] = g.cropModal;
        e[71] = U;
        e[72] = H;
        e[73] = oe;
        e[74] = J;
        e[75] = ie;
        e[76] = onKeyDown;
        e[77] = i;
    } else {
        i = e[77];
    }
    return i;
}
function rs(k) {
    k?.focus();
}
function YeComponent(k) {
    YeComponent.d = 1064;
    const e = c_1.c(11);
    const { label: label_1, hint, children } = k;
    let f;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            className: "sand-78zum5 sand-dt5ytf sand-1xmf6yo"
        };
        e[0] = f;
    } else {
        f = e[0];
    }
    const n = f;
    let c;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        c = p_1(a_.body2, a$.medium, Ne.label);
        e[1] = c;
    } else {
        c = e[1];
    }
    const t = c;
    let d;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            className: "sand-169k319 sand-1k6tqyu"
        };
        e[2] = d;
    } else {
        d = e[2];
    }
    const o = d;
    let m;
    if (e[3] !== hint) {
        m = hint != null ? <span className={o.className} style={o.style}>{hint}</span> : null;
        e[3] = hint;
        e[4] = m;
    } else {
        m = e[4];
    }
    let p;
    if (e[5] !== label_1 || e[6] !== m) {
        p = <span className={t.className} style={t.style}>{label_1}{m}</span>;
        e[5] = label_1;
        e[6] = m;
        e[7] = p;
    } else {
        p = e[7];
    }
    let y;
    if (e[8] !== children || e[9] !== p) {
        y = <label className={n.className} style={n.style}>{p}{children}</label>;
        e[8] = children;
        e[9] = p;
        e[10] = y;
    } else {
        y = e[10];
    }
    return y;
}
const Ve = 40;
const Pe = {
    title: {
        kogj98: "sand-1ghz6dp",
        k1K539: "sand-1iymm2a",
        kMwMTN: "sand-tyxrsu",
        k9WMMc: "sand-2b8uid",
        $$css: true
    },
    cardDescription: {
        k1xSpc: "sand-104kibb",
        kgKLqz: "sand-1ua5tub",
        kJFfOR: "sand-1gzmk7r",
        kVQacm: "sand-b3r6kr",
        kogj98: "sand-1ghz6dp",
        kzqmXN: "sand-1g6vzv9",
        kZKoxP: "sand-1dnml7z",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    action: {
        kzqmXN: "sand-1f1nzxn",
        $$css: true
    },
    error: {
        kogj98: "sand-1ghz6dp",
        keoZOQ: "sand-14vqqas",
        ks0D6T: "sand-fp77mx",
        kMwMTN: "sand-6rl5ky",
        k9WMMc: "sand-2b8uid",
        $$css: true
    }
};
function ZeComponent(k) {
    ZeComponent.d = 1080;
    const e = c_1.c(37);
    const { isPending, error, onPickTemplate, onCreateOwn } = k;
    const { _ } = u();
    const { launcher } = b7();
    let t;
    if (e[0] !== launcher) {
        t = launcher.teammateContext()?.dailyTools ?? [];
        e[0] = launcher;
        e[1] = t;
    } else {
        t = e[1];
    }
    const d = t;
    let o;
    if (e[2] !== d) {
        o = ()=>e_(null, d);
        e[2] = d;
        e[3] = o;
    } else {
        o = e[3];
    }
    const [m, setM] = r_1.useState(o);
    let y;
    let g;
    let j;
    let N;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        j = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4"
        };
        g = {
            className: "sand-rvj5dj sand-vrmp6t sand-tqikln sand-gpatz3 sand-1hq5gj4"
        };
        y = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
        };
        N = r_2("sand-teammate-picker", j.className);
        e[4] = y;
        e[5] = g;
        e[6] = j;
        e[7] = N;
    } else {
        y = e[4];
        g = e[5];
        j = e[6];
        N = e[7];
    }
    const j_style = j.style;
    let $;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        $ = <Me as="h2" level="heading3" style={Pe.title} weight="medium"><T_1 id="XRN0th"/></Me>;
        e[8] = $;
    } else {
        $ = e[8];
    }
    const { className, style } = g;
    let S;
    if (e[9] !== _ || e[10] !== m || e[11] !== isPending || e[12] !== onPickTemplate) {
        let D;
        if (e[14] !== _ || e[15] !== isPending || e[16] !== onPickTemplate) {
            D = (ye)=>{
                const T = e$(_, ye);
                const ae = {
                    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ou54vl sand-9f619 sand-c5o50y sand-1qhigcl sand-4pepcl sand-mkeg23 sand-1y0btm7 sand-1atdlfd sand-1pyiiq6 sand-z0cqqs sand-8c2ked sand-1b80kgn sand-sk93b4 sand-1ypdohk sand-1ar62m4 sand-1hc1fzr sand-fqoyci sand-jyslct sand-2b8uid sand-q90yva sand-1firant"
                };
                const Y = {
                    className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-195vfkc sand-h8yej3"
                };
                const ge = {
                    className: "sand-1ghz6dp sand-1j61zf2 sand-dod15v sand-4ryatg sand-tyxrsu sand-uxw1ft sand-b3r6kr sand-lyipyv sand-193iq5w"
                };
                return <button key={T.templateId} className={ae.className} disabled={isPending} onClick={()=>onPickTemplate(T)} style={ae.style} type="button"><B aria-hidden sizePx={Ve} src={N_1(T.name)}/><span className={Y.className} style={Y.style}><span className={ge.className} style={ge.style}>{T.name}</span><Me level="body2" style={Pe.cardDescription}>{f0(_, T.description)}</Me></span></button>;
            };
            e[14] = _;
            e[15] = isPending;
            e[16] = onPickTemplate;
            e[17] = D;
        } else {
            D = e[17];
        }
        S = m.map(D);
        e[9] = _;
        e[10] = m;
        e[11] = isPending;
        e[12] = onPickTemplate;
        e[13] = S;
    } else {
        S = e[13];
    }
    let w;
    if (e[18] !== isPending || e[19] !== onCreateOwn) {
        w = <FeComponent isPending={isPending} onCreateOwn={onCreateOwn}/>;
        e[18] = isPending;
        e[19] = onCreateOwn;
        e[20] = w;
    } else {
        w = e[20];
    }
    let x;
    if (e[21] !== S || e[22] !== w) {
        x = <div className={className} style={style}>{S}{w}</div>;
        e[21] = S;
        e[22] = w;
        e[23] = x;
    } else {
        x = e[23];
    }
    let v;
    if (e[24] !== d || e[25] !== m) {
        v = ()=>setM(e_(m, d));
        e[24] = d;
        e[25] = m;
        e[26] = v;
    } else {
        v = e[26];
    }
    let q;
    if (e[27] === Symbol.for("react.memo_cache_sentinel")) {
        q = <T_1 id="gH5Gbn"/>;
        e[27] = q;
    } else {
        q = e[27];
    }
    let C;
    if (e[28] !== isPending || e[29] !== v) {
        C = <div className={y.className} style={y.style}><Ee disabled={isPending} leadingIcon="arrows-ccw" onClick={v} style={Pe.action} variant="secondary">{q}</Ee></div>;
        e[28] = isPending;
        e[29] = v;
        e[30] = C;
    } else {
        C = e[30];
    }
    let P;
    if (e[31] !== error) {
        P = error != null ? <Me as="p" level="body2" style={Pe.error}>{error}</Me> : null;
        e[31] = error;
        e[32] = P;
    } else {
        P = e[32];
    }
    let A;
    if (e[33] !== x || e[34] !== C || e[35] !== P) {
        A = <div className={N} style={j_style}>{$}{x}{C}{P}</div>;
        e[33] = x;
        e[34] = C;
        e[35] = P;
        e[36] = A;
    } else {
        A = e[36];
    }
    return A;
}
function FeComponent(k) {
    FeComponent.d = 1079;
    const e = c_1.c(9);
    const { isPending, onCreateOwn } = k;
    let u;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        u = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-ou54vl sand-9f619 sand-c5o50y sand-1qhigcl sand-4pepcl sand-mkeg23 sand-1y0btm7 sand-1atdlfd sand-1pyiiq6 sand-z0cqqs sand-8c2ked sand-1b80kgn sand-sk93b4 sand-1ypdohk sand-1ar62m4 sand-1hc1fzr sand-fqoyci sand-jyslct sand-2b8uid sand-q90yva sand-1firant"
        };
        e[0] = u;
    } else {
        u = e[0];
    }
    const f = u;
    let n;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-195vfkc sand-h8yej3"
        };
        e[1] = n;
    } else {
        n = e[1];
    }
    const c = n;
    let t;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        t = {
            className: "sand-1ghz6dp sand-1j61zf2 sand-dod15v sand-4ryatg sand-tyxrsu sand-uxw1ft sand-b3r6kr sand-lyipyv sand-193iq5w"
        };
        e[2] = t;
    } else {
        t = e[2];
    }
    const d = t;
    let o;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        o = <B aria-hidden icon="plus" sizePx={Ve}/>;
        e[3] = o;
    } else {
        o = e[3];
    }
    let m;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        m = <span className={d.className} style={d.style}><T_1 id="THuTB2"/></span>;
        e[4] = m;
    } else {
        m = e[4];
    }
    let p;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        p = <span className={c.className} style={c.style}>{m}<Me level="body2" style={Pe.cardDescription}><T_1 id="8R04P/"/></Me></span>;
        e[5] = p;
    } else {
        p = e[5];
    }
    let y;
    if (e[6] !== isPending || e[7] !== onCreateOwn) {
        y = <button className={f.className} disabled={isPending} onClick={onCreateOwn} style={f.style} type="button">{o}{p}</button>;
        e[6] = isPending;
        e[7] = onCreateOwn;
        e[8] = y;
    } else {
        y = e[8];
    }
    return y;
}
export function NewAgentPane(k) {
    NewAgentPane.d = 1069;
    const e = c_1.c(8);
    const { isCreatePending, createError, onPickTemplate, onCreateCustom } = k;
    const [n, setN] = r_1.useState("picker");
    let t;
    let d;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        t = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-2lwn1j sand-1odjw0f sand-1axd487 sand-17qtykl"
        };
        d = r_2("sand-new-agent-pane", t.className);
        e[0] = t;
        e[1] = d;
    } else {
        t = e[0];
        d = e[1];
    }
    let o;
    if (e[2] !== createError || e[3] !== isCreatePending || e[4] !== onCreateCustom || e[5] !== onPickTemplate || e[6] !== n) {
        o = <div className={d} style={t.style}>{n === "picker" ? <ZeComponent error={createError} isPending={isCreatePending} onCreateOwn={()=>setN("form")} onPickTemplate={onPickTemplate}/> : <HeComponent error={createError} isPending={isCreatePending} onCancel={()=>setN("picker")} onCreate={onCreateCustom}/>}</div>;
        e[2] = createError;
        e[3] = isCreatePending;
        e[4] = onCreateCustom;
        e[5] = onPickTemplate;
        e[6] = n;
        e[7] = o;
    } else {
        o = e[7];
    }
    return o;
}
