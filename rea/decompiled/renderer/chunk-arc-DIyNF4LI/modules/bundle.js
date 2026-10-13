import { G, H as H_1, I, J, K as K_1, L as L_1, M as M_1, N, O as O_1, P as P_1, Q as Q_1, R as R_1, S, T as T_1, V as V_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "df6d331e-6091-4a0f-887a-46133862ad65";
            e._sentryDebugIdIdentifier = "sentry-dbid-df6d331e-6091-4a0f-887a-46133862ad65";
        }
    } catch (e) {}
})();
function cn(l) {
    return l.innerRadius;
}
function yn(l) {
    return l.outerRadius;
}
function gn(l) {
    return l.startAngle;
}
function dn(l) {
    return l.endAngle;
}
function mn(l) {
    return l && l.padAngle;
}
function pn(l, h, q, O, v, R, K, u) {
    const D = q - l;
    const i = O - h;
    const n = K - v;
    const d = u - R;
    let a = d * D - n * i;
    if (!(a * a < M_1)) {
        a = (n * (h - R) - d * (l - v)) / a;
        return [
            l + a * D,
            h + a * i
        ];
    }
}
function W(l, h, q, O, v, R, K) {
    const u = l - q;
    const D = h - O;
    const i = (K ? R : -R) / O_1(u * u + D * D);
    const n = i * D;
    const d = -i * u;
    const a = l + n;
    const s = h + d;
    const f = q + n;
    const c = O + d;
    const L = (a + f) / 2;
    const t = (s + c) / 2;
    const m = f - a;
    const g = c - s;
    const A = m * m + g * g;
    const T = v - R;
    const P = a * c - f * s;
    const E = (g < 0 ? -1 : 1) * O_1(T_1(0, T * T * A - P * P));
    let cx = (P * g - m * E) / A;
    let cy = (-P * m - g * E) / A;
    const w = (P * g + m * E) / A;
    const p = (-P * m + g * E) / A;
    const x = cx - L;
    const e = cy - t;
    const r = w - L;
    const M = p - t;
    if (x * x + e * e > r * r + M * M) {
        cx = w;
        cy = p;
    }
    return {
        cx,
        cy,
        x01: -n,
        y01: -d,
        x11: cx * (v / T - 1),
        y11: cy * (v / T - 1)
    };
}
function hn() {
    let l = cn;
    let h = yn;
    let q = K_1(0);
    let O = null;
    let v = gn;
    let R = dn;
    let K = mn;
    let u = null;
    var D = G(i);
    function i() {
        let n;
        let d;
        let a = +l.apply(this, arguments);
        let s = +h.apply(this, arguments);
        const f = v.apply(this, arguments) - L_1;
        const c = R.apply(this, arguments) - L_1;
        const L = Q_1(c - f);
        const t = c > f;
        if (!u) {
            u = n = D();
        }
        if (s < a) {
            d = s;
            s = a;
            a = d;
        }
        if (!(s > M_1)) {
            u.moveTo(0, 0);
        } else if (L > N - M_1) {
            u.moveTo(s * I(f), s * J(f));
            u.arc(0, 0, s, f, c, !t);
            if (a > M_1) {
                u.moveTo(a * I(c), a * J(c));
                u.arc(0, 0, a, c, f, t);
            }
        } else {
            let m = f;
            let g = c;
            let A = f;
            let T = c;
            let P = L;
            let E = L;
            const G = K.apply(this, arguments) / 2;
            const H = G > M_1 && (O ? +O.apply(this, arguments) : O_1(a * a + s * s));
            const w = P_1(Q_1(s - a) / 2, +q.apply(this, arguments));
            let p = w;
            let x = w;
            let e;
            let r;
            if (H > M_1) {
                let M = S(H / a * J(G));
                let z = S(H / s * J(G));
                if ((P -= M * 2) > M_1) {
                    M *= t ? 1 : -1;
                    A += M;
                    T -= M;
                } else {
                    P = 0;
                    A = T = (f + c) / 2;
                }
                if ((E -= z * 2) > M_1) {
                    z *= t ? 1 : -1;
                    m += z;
                    g -= z;
                } else {
                    E = 0;
                    m = g = (f + c) / 2;
                }
            }
            const Q = s * I(m);
            const V = s * J(m);
            const B = a * I(T);
            const C = a * J(T);
            if (w > M_1) {
                var F = s * I(g);
                var U = s * J(g);
                var X = a * I(A);
                var Y = a * J(A);
                let S;
                if (L < H_1) {
                    if (S = pn(Q, V, X, Y, F, U, B, C)) {
                        const Z = Q - S[0];
                        const $ = V - S[1];
                        const k = F - S[0];
                        const b = U - S[1];
                        const nn = 1 / J(V_1((Z * k + $ * b) / (O_1(Z * Z + $ * $) * O_1(k * k + b * b))) / 2);
                        const en = O_1(S[0] * S[0] + S[1] * S[1]);
                        p = P_1(w, (a - en) / (nn - 1));
                        x = P_1(w, (s - en) / (nn + 1));
                    } else {
                        x = 0;
                        p = 0;
                    }
                }
            }
            if (E > M_1) {
                if (x > M_1) {
                    e = W(X, Y, Q, V, s, x, t);
                    r = W(F, U, B, C, s, x, t);
                    u.moveTo(e.cx + e.x01, e.cy + e.y01);
                    if (x < w) {
                        u.arc(e.cx, e.cy, x, R_1(e.y01, e.x01), R_1(r.y01, r.x01), !t);
                    } else {
                        u.arc(e.cx, e.cy, x, R_1(e.y01, e.x01), R_1(e.y11, e.x11), !t);
                        u.arc(0, 0, s, R_1(e.cy + e.y11, e.cx + e.x11), R_1(r.cy + r.y11, r.cx + r.x11), !t);
                        u.arc(r.cx, r.cy, x, R_1(r.y11, r.x11), R_1(r.y01, r.x01), !t);
                    }
                } else {
                    u.moveTo(Q, V);
                    u.arc(0, 0, s, m, g, !t);
                }
            } else {
                u.moveTo(Q, V);
            }
            if (!(a > M_1) || !(P > M_1)) {
                u.lineTo(B, C);
            } else if (p > M_1) {
                e = W(B, C, F, U, a, -p, t);
                r = W(Q, V, X, Y, a, -p, t);
                u.lineTo(e.cx + e.x01, e.cy + e.y01);
                if (p < w) {
                    u.arc(e.cx, e.cy, p, R_1(e.y01, e.x01), R_1(r.y01, r.x01), !t);
                } else {
                    u.arc(e.cx, e.cy, p, R_1(e.y01, e.x01), R_1(e.y11, e.x11), !t);
                    u.arc(0, 0, a, R_1(e.cy + e.y11, e.cx + e.x11), R_1(r.cy + r.y11, r.cx + r.x11), t);
                    u.arc(r.cx, r.cy, p, R_1(r.y11, r.x11), R_1(r.y01, r.x01), !t);
                }
            } else {
                u.arc(0, 0, a, T, A, t);
            }
        }
        u.closePath();
        if (n) {
            u = null;
            return `${n}` || null;
        }
    }
    i.centroid = function() {
        const n = (+l.apply(this, arguments) + +h.apply(this, arguments)) / 2;
        const d = (+v.apply(this, arguments) + +R.apply(this, arguments)) / 2 - H_1 / 2;
        return [
            I(d) * n,
            J(d) * n
        ];
    };
    i.innerRadius = function(n) {
        if (arguments.length) {
            l = typeof n === "function" ? n : K_1(+n);
            return i;
        }
        return l;
    };
    i.outerRadius = function(n) {
        if (arguments.length) {
            h = typeof n === "function" ? n : K_1(+n);
            return i;
        }
        return h;
    };
    i.cornerRadius = function(n) {
        if (arguments.length) {
            q = typeof n === "function" ? n : K_1(+n);
            return i;
        }
        return q;
    };
    i.padRadius = function(n) {
        if (arguments.length) {
            O = n == null ? null : typeof n === "function" ? n : K_1(+n);
            return i;
        }
        return O;
    };
    i.startAngle = function(n) {
        if (arguments.length) {
            v = typeof n === "function" ? n : K_1(+n);
            return i;
        }
        return v;
    };
    i.endAngle = function(n) {
        if (arguments.length) {
            R = typeof n === "function" ? n : K_1(+n);
            return i;
        }
        return R;
    };
    i.padAngle = function(n) {
        if (arguments.length) {
            K = typeof n === "function" ? n : K_1(+n);
            return i;
        }
        return K;
    };
    i.context = function(n) {
        if (arguments.length) {
            u = n ?? null;
            return i;
        }
        return u;
    };
    return i;
}
export { hn as d };
