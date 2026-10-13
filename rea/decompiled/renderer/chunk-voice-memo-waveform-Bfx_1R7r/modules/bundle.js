import { c as c_1, r } from "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "43e97578-fe33-498c-9acf-94da937592a9";
            e._sentryDebugIdIdentifier = "sentry-dbid-43e97578-fe33-498c-9acf-94da937592a9";
        }
    } catch (e) {}
})();
export const b = 2;
export const a = 2;
const K = 3;
const Q = 20;
const F = 6;
export const V = 400;
function ee(t, e) {
    return t * t + e * e >= F * F;
}
function te(t) {
    return !t.scrubbed && t.elapsedMs <= V;
}
const D = b + a;
function ne(t, e) {
    if (!Number.isFinite(e.width) || e.width <= 0) {
        return 0;
    }
    return Math.min(1, Math.max(0, (t - e.left) / e.width));
}
function N(t) {
    if (t <= 0) {
        return 0;
    }
    return t * D - a;
}
function ae(t, e) {
    if (t <= 0 || !Number.isFinite(e) || e <= 0) {
        return 0;
    }
    if (e >= 1) {
        return t;
    }
    return Math.floor(e * t);
}
function se(t) {
    return N(t.barCount) - N(t.playedBarCount);
}
function re(t, e) {
    const n = Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0;
    return Math.max(K, Math.round(n * e));
}
function oe(peaks, height) {
    const n = b / 2;
    let l = "";
    for (const [c, r] of peaks.entries()){
        const o = re(r, height);
        const i = c * D + n;
        const d = (height - o) / 2 + n;
        l += `M${i} ${d}V${d + o - b}`;
    }
    return l;
}
const W = new Map;
function ie(t) {
    const e = W.get(t);
    if (e !== undefined) {
        return e;
    }
    const n = {
        clipPath: `inset(0 ${t}px 0 0) view-box`
    };
    W.set(t, n);
    return n;
}
const H = new WeakMap;
function le(peaks, height) {
    let n = H.get(peaks);
    if (n === undefined) {
        n = new Map;
        H.set(peaks, n);
    }
    const l = n.get(height);
    if (l !== undefined) {
        return l;
    }
    const c = oe(peaks, height);
    n.set(height, c);
    return c;
}
function CeComponent(t) {
    CeComponent.d = 1493;
    const e = c_1.c(37);
    const { peaks, progress, height, seek, onTap } = t;
    const height_1 = height === undefined ? Q : height;
    let d;
    if (e[0] !== peaks.length) {
        d = N(peaks.length);
        e[0] = peaks.length;
        e[1] = d;
    } else {
        d = e[1];
    }
    const width = d;
    const playedBarCount = ae(peaks.length, progress);
    let _;
    if (e[2] !== height_1 || e[3] !== peaks) {
        _ = le(peaks, height_1);
        e[2] = height_1;
        e[3] = peaks;
        e[4] = _;
    } else {
        _ = e[4];
    }
    const d_1 = _;
    const [I, setI] = r.useState(false);
    const uRef = r.useRef(null);
    const G = de;
    let v;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        v = (a)=>{
            const uRef_current = uRef.current;
            if (!(uRef_current == null || uRef_current.pointerId !== a)) {
                uRef.current = null;
                setI(false);
            }
        };
        e[5] = v;
    } else {
        v = e[5];
    }
    const z = v;
    let w;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        w = (a, s)=>{
            const uRef_current = uRef.current;
            if (!(uRef_current == null || uRef_current.pointerId !== a.pointerId)) {
                a.currentTarget.releasePointerCapture?.(a.pointerId);
                uRef.current = null;
                setI(false);
                s && te({
                    scrubbed: uRef_current.scrubbed,
                    elapsedMs: Date.now() - uRef_current.at
                }) && uRef_current.onTap?.();
            }
        };
        e[6] = w;
    } else {
        w = e[6];
    }
    const T = w;
    let x;
    if (e[7] !== seek) {
        x = seek == null ? null : {
            role: "slider",
            tabIndex: 0,
            "aria-label": seek.label,
            "aria-valuemin": 0,
            "aria-valuemax": Math.max(0, Math.round(seek.durationMs)),
            "aria-valuenow": Math.max(0, Math.min(Math.round(seek.durationMs), Math.round(seek.positionMs)))
        };
        e[7] = seek;
        e[8] = x;
    } else {
        x = e[8];
    }
    const k = x;
    let E;
    if (e[9] !== onTap || e[10] !== seek || e[11] !== k) {
        E = seek == null && onTap == null ? {} : {
            ...k,
            onPointerDown: (a)=>{
                if (a.button !== 0 || uRef.current != null) {
                    return;
                }
                a.preventDefault();
                a.stopPropagation();
                const s = a.currentTarget.getBoundingClientRect();
                a.currentTarget.setPointerCapture?.(a.pointerId);
                uRef.current = {
                    pointerId: a.pointerId,
                    x: a.clientX,
                    y: a.clientY,
                    at: Date.now(),
                    left: s.left,
                    width: s.width,
                    seek,
                    onTap,
                    scrubbed: false
                };
            },
            onPointerMove: (a)=>{
                const uRef_current = uRef.current;
                if (!(uRef_current == null || uRef_current.pointerId !== a.pointerId)) {
                    if (!uRef_current.scrubbed) {
                        if (!ee(a.clientX - uRef_current.x, a.clientY - uRef_current.y)) {
                            return;
                        }
                        uRef_current.scrubbed = true;
                        if (uRef_current.seek != null) {
                            setI(true);
                        }
                    }
                    if (uRef_current.seek != null) {
                        a.preventDefault();
                        G(a, uRef_current.seek, {
                            left: uRef_current.left,
                            width: uRef_current.width
                        });
                    }
                }
            },
            onPointerUp: (a)=>{
                T(a, true);
            },
            onPointerCancel: (a)=>{
                T(a, false);
            },
            onLostPointerCapture: (a)=>{
                z(a.pointerId);
            }
        };
        e[9] = onTap;
        e[10] = seek;
        e[11] = k;
        e[12] = E;
    } else {
        E = e[12];
    }
    const B = E;
    let h;
    if (e[13] !== onTap || e[14] !== seek) {
        h = ({
            0: {
                className: "sand-1lliihq sand-2lah0s sand-1heor9g"
            },
            2: {
                className: "sand-1lliihq sand-2lah0s sand-1heor9g sand-7eptgl sand-5ve5x3"
            },
            1: {
                className: "sand-1lliihq sand-2lah0s sand-1heor9g sand-1ypdohk sand-5ve5x3"
            },
            3: {
                className: "sand-1lliihq sand-2lah0s sand-1heor9g sand-1ypdohk sand-5ve5x3"
            }
        })[(seek != null) << 1 | (seek == null && onTap != null) << 0];
        e[13] = onTap;
        e[14] = seek;
        e[15] = h;
    } else {
        h = e[15];
    }
    const R = seek == null || undefined;
    const peaks_length = peaks.length;
    const V = I || undefined;
    const Y = true;
    const viewBox = `0 0 ${width} ${height_1}`;
    let y;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-bh8q5q sand-73je2i sand-vlca1e sand-1owpc8m sand-3onkmb"
        };
        e[16] = y;
    } else {
        y = e[16];
    }
    let m;
    if (e[17] !== d_1) {
        m = <path {...y} d={d_1}/>;
        e[17] = d_1;
        e[18] = m;
    } else {
        m = e[18];
    }
    let M;
    if (e[19] !== I) {
        M = ({
            0: {
                className: "sand-bh8q5q sand-73je2i sand-vlca1e sand-1owpc8m sand-1hc1fzr sand-7ayfe5 sand-4wkmsb sand-1firant sand-cj1dhv"
            },
            1: {
                className: "sand-bh8q5q sand-73je2i sand-vlca1e sand-1owpc8m sand-1hc1fzr sand-7ayfe5 sand-4wkmsb sand-cj1dhv sand-1mq3mr6"
            }
        })[!!I << 0];
        e[19] = I;
        e[20] = M;
    } else {
        M = e[20];
    }
    const L = true;
    const style = ie(se({
        barCount: peaks.length,
        playedBarCount
    }));
    let p;
    if (e[21] !== d_1 || e[22] !== M || e[23] !== style) {
        p = <path {...M} d={d_1} data-voice-memo-waveform-played={L} style={style}/>;
        e[21] = d_1;
        e[22] = M;
        e[23] = style;
        e[24] = p;
    } else {
        p = e[24];
    }
    let O;
    if (e[25] !== height_1 || e[26] !== peaks.length || e[27] !== playedBarCount || e[28] !== B || e[29] !== V || e[30] !== viewBox || e[31] !== m || e[32] !== p || e[33] !== h || e[34] !== R || e[35] !== width) {
        O = <svg {...h} aria-hidden={R} data-bars={peaks_length} data-played={playedBarCount} data-seeking={V} data-voice-memo-waveform={Y} height={height_1} viewBox={viewBox} width={width} {...B}>{m}{p}</svg>;
        e[25] = height_1;
        e[26] = peaks.length;
        e[27] = playedBarCount;
        e[28] = B;
        e[29] = V;
        e[30] = viewBox;
        e[31] = m;
        e[32] = p;
        e[33] = h;
        e[34] = R;
        e[35] = width;
        e[36] = O;
    } else {
        O = e[36];
    }
    return O;
}
function de(t, e, n) {
    if (!(e.durationMs <= 0)) {
        e.onSeek(Math.round(ne(t.clientX, n) * e.durationMs));
    }
}
export { CeComponent as c, se as d, te as e, ee as f, ne as g, N as h, ae as v };
