import { c as c_1, j, u as u_1, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7, b8, r, aK, Q, M } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { I, q as q_1, H } from "./index.eager-common-CdCvBQNJ.js";
import { Q as Q_2, U } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "5e1ac3ab-91a6-4e0f-9b2c-0b8866d33b61";
            e._sentryDebugIdIdentifier = "sentry-dbid-5e1ac3ab-91a6-4e0f-9b2c-0b8866d33b61";
        }
    } catch (e) {}
})();
const A = 5;
const sizePx = 36;
const gapPx = 3;
const inflatePx = 1;
const as = {
    blob: {
        id: "DnzcfX"
    },
    pebble: {
        id: "6fpvq3"
    },
    bean: {
        id: "3eKZzU"
    },
    egg: {
        id: "b7bZwx"
    },
    squircle: {
        id: "itJYgC"
    },
    tablet: {
        id: "qwHPn1"
    },
    capsule: {
        id: "PTZIMT"
    },
    cylinder: {
        id: "6Xa1Po"
    },
    hex: {
        id: "gWfI35"
    },
    gem: {
        id: "drrHCz"
    },
    crystal: {
        id: "Y65Raz"
    },
    wedge: {
        id: "8rPpPV"
    },
    shield: {
        id: "XVlJ9M"
    },
    dome: {
        id: "dfGYZa"
    },
    arch: {
        id: "ldKEXn"
    },
    cloud: {
        id: "R7zx6E"
    },
    teardrop: {
        id: "Q+z+5Y"
    },
    leaf: {
        id: "lUUf1D"
    },
    square: {
        id: "cKUcOk"
    },
    sparkle: {
        id: "ioMfZD"
    },
    clover: {
        id: "Gnanbk"
    },
    flower: {
        id: "XMnYIb"
    },
    heart: {
        id: "ovEbfI"
    },
    house: {
        id: "fCE3Dg"
    },
    star: {
        id: "sZ/7cr"
    }
};
const es = {
    black: {
        id: "THokF3"
    },
    brown: {
        id: "JLxwQS"
    },
    red: {
        id: "wRTiSD"
    },
    orange: {
        id: "4OE5Sf"
    },
    yellow: {
        id: "QyCqHT"
    },
    green: {
        id: "VmkjGB"
    },
    cyan: {
        id: "fFwMZv"
    },
    blue: {
        id: "Zn5crm"
    },
    violet: {
        id: "eedtPL"
    },
    magenta: {
        id: "vz5zAR"
    },
    gray: {
        id: "qS5//Q"
    }
};
const G = new Map;
function ns(e) {
    let s = G.get(e);
    if (s === undefined) {
        s = M({
            shape: e,
            sizePx,
            inflatePx,
            gapPx
        });
        G.set(e, s);
    }
    return s;
}
function ts(shape) {
    if (H.includes(shape)) {
        return H;
    }
    return [
        ...H,
        shape
    ];
}
function ds(e) {
    return Array.from({
        length: Math.ceil(e.length / A)
    }, (s, t)=>e.slice(t * A, (t + 1) * A));
}
const q = {
    cell: {
        kysU6D: "sand-jyslct",
        k3lkva: "sand-1lugfcp",
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kB7OPa: "sand-9f619",
        kmVPX3: "sand-1717udv",
        kMzoRj: "sand-mkeg23",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-9r1u3d sand-1g5a2ak",
        kWkggS: "sand-jbqb8w",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    colorCell: {
        kzqmXN: "sand-1td3qas",
        kZKoxP: "sand-10w6t97",
        kaIpWk: "sand-16rqkct",
        $$css: true
    },
    colorCellSelected: {
        kVAM5u: "sand-9r1u3d sand-1xfd4ba",
        $$css: true
    }
};
function us(e) {
    const s = c_1.c(6);
    const roster = b7().roster;
    const { run, isPending } = b8(roster.updateAgent);
    let commitCharacter;
    if (s[0] !== e || s[1] !== run) {
        commitCharacter = async (f)=>{
            await run(e.id, {
                name: e.name,
                description: e.description,
                ...f
            });
        };
        s[0] = e;
        s[1] = run;
        s[2] = commitCharacter;
    } else {
        commitCharacter = s[2];
    }
    let d;
    if (s[3] !== isPending || s[4] !== commitCharacter) {
        d = {
            commitCharacter,
            isCommitting: isPending
        };
        s[3] = isPending;
        s[4] = commitCharacter;
        s[5] = d;
    } else {
        d = s[5];
    }
    return d;
}
function LComponent(e) {
    LComponent.d = 51;
    const s = c_1.c(45);
    const { shape, color, showSelection, layout, onSelectShape, onSelectColor } = e;
    const i = showSelection === undefined ? true : showSelection;
    const g = layout === undefined ? "grid" : layout;
    const { i18n, _: __1 } = u_1();
    const n = g === "row";
    let c;
    let u;
    let h;
    let m;
    if (s[0] !== __1 || s[1] !== color || s[2] !== i18n || s[3] !== n || s[4] !== onSelectShape || s[5] !== shape || s[6] !== i) {
        const b = ts(shape);
        let v;
        if (s[11] !== __1 || s[12] !== color || s[13] !== i18n || s[14] !== onSelectShape || s[15] !== shape || s[16] !== i) {
            v = (y)=>{
                const w = i18n._(as[y]);
                const M = i && shape === y;
                const I = {
                    className: "sand--default-marker sand-jyslct sand-1lugfcp sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-9f619 sand-1717udv sand-9r1u3d sand-1g5a2ak sand-jbqb8w sand-1ypdohk sand-1n2onr6 sand-1useyqa sand-sdox4t sand-c342km sand-ng3xce sand-1t137rt"
                };
                const H = {
                    0: {
                        className: "sand-10l6tqk sand-3ds4eh sand-47corl sand-1qmjd7y sand-g01cxk sand-1x4ln44 sand-15stfbk"
                    },
                    1: {
                        className: "sand-10l6tqk sand-3ds4eh sand-47corl sand-145sy1 sand-1hc1fzr"
                    }
                }[!!M << 0];
                return <button key={y} aria-label={__1({
                    id: "UyDncJ",
                    values: {
                        candidateLabel: w
                    }
                })} aria-pressed={M} className={r("sand-agent-character__shape", I.className)} onClick={()=>onSelectShape(y)} style={I.style} title={w} type="button"><Q color={color} isPaused shape={y} sizePx={sizePx}/><span aria-hidden className={H.className} style={{
                    ...H.style,
                    maskImage: ns(y)
                }}/></button>;
            };
            s[11] = __1;
            s[12] = color;
            s[13] = i18n;
            s[14] = onSelectShape;
            s[15] = shape;
            s[16] = i;
            s[17] = v;
        } else {
            v = s[17];
        }
        const R = v;
        if (s[18] === Symbol.for("react.memo_cache_sentinel")) {
            m = r("sand-agent-character", "sand-78zum5 sand-dt5ytf sand-1oot3zn");
            s[18] = m;
        } else {
            m = s[18];
        }
        if (s[19] !== __1) {
            c = __1({
                id: "dcNGHT"
            });
            s[19] = __1;
            s[20] = c;
        } else {
            c = s[20];
        }
        let j;
        if (s[21] !== n) {
            j = ({
                0: {
                    className: "sand-78zum5 sand-dt5ytf sand-ehausa sand-uve7l6 sand-1rgtt3y"
                },
                1: {
                    className: "sand-78zum5 sand-1a02dak sand-1nhvcw1 sand-11twubx sand-uve7l6 sand-1rgtt3y"
                }
            })[!!n << 0];
            s[21] = n;
            s[22] = j;
        } else {
            j = s[22];
        }
        u = j.className;
        h = n ? b.map(R) : ds(b).map((y, key)=><div key={key} className="sand-78zum5 sand-l56j7k sand-ss61px">{y.map(R)}</div>);
        s[0] = __1;
        s[1] = color;
        s[2] = i18n;
        s[3] = n;
        s[4] = onSelectShape;
        s[5] = shape;
        s[6] = i;
        s[7] = c;
        s[8] = u;
        s[9] = h;
        s[10] = m;
    } else {
        c = s[7];
        u = s[8];
        h = s[9];
        m = s[10];
    }
    let x;
    if (s[23] !== c || s[24] !== u || s[25] !== h) {
        x = <div aria-label={c} className={u}>{h}</div>;
        s[23] = c;
        s[24] = u;
        s[25] = h;
        s[26] = x;
    } else {
        x = s[26];
    }
    let S;
    if (s[27] !== __1) {
        S = __1({
            id: "QVyyXb"
        });
        s[27] = __1;
        s[28] = S;
    } else {
        S = s[28];
    }
    let C;
    if (s[29] !== n) {
        C = ({
            0: {
                className: "sand-78zum5 sand-1a02dak sand-6s0dn4 sand-amitd3 sand-l56j7k sand-ehausa sand-rp6dbx sand-13ly8rp sand-1xlntvz"
            },
            1: {
                className: "sand-78zum5 sand-ozqiw3 sand-6s0dn4 sand-1nhvcw1 sand-11twubx sand-13ly8rp sand-1xlntvz"
            }
        })[!!n << 0];
        s[29] = n;
        s[30] = C;
    } else {
        C = s[30];
    }
    const C_className = C.className;
    let N;
    if (s[31] !== __1 || s[32] !== color || s[33] !== i18n || s[34] !== onSelectColor || s[35] !== i) {
        N = I.map((b)=>{
            const v = i18n._(es[b.id]);
            const R = i && color === b.id;
            return <button key={b.id} aria-label={__1({
                id: "R+jA6x",
                values: {
                    candidateLabel: v
                }
            })} aria-pressed={R} className={p(q.cell, q.colorCell, aK.keyboardFocus, R && q.colorCellSelected).className} onClick={()=>onSelectColor(b.id)} title={v} type="button"><span className={({
                0: {
                    className: "sand-1lliihq sand-vy4d1p sand-xk0z11 sand-16rqkct"
                },
                1: {
                    className: "sand-1lliihq sand-vy4d1p sand-xk0z11 sand-16rqkct sand-1ogx5uk"
                }
            })[!!R << 0].className} style={{
                backgroundColor: q_1(b.id)
            }}/></button>;
        });
        s[31] = __1;
        s[32] = color;
        s[33] = i18n;
        s[34] = onSelectColor;
        s[35] = i;
        s[36] = N;
    } else {
        N = s[36];
    }
    let P;
    if (s[37] !== N || s[38] !== S || s[39] !== C.className) {
        P = <div aria-label={S} className={C_className}>{N}</div>;
        s[37] = N;
        s[38] = S;
        s[39] = C.className;
        s[40] = P;
    } else {
        P = s[40];
    }
    let _;
    if (s[41] !== P || s[42] !== m || s[43] !== x) {
        _ = <div className={m}>{x}{P}</div>;
        s[41] = P;
        s[42] = m;
        s[43] = x;
        s[44] = _;
    } else {
        _ = s[44];
    }
    return _;
}
function ls(e) {
    ls.d = 50;
    const s = c_1.c(19);
    const { agent, character, staged, isCharacterActive } = e;
    const { commitCharacter } = character;
    const avatarShape = staged?.avatarShape ?? agent.avatarShape ?? null;
    const avatarColor = staged?.avatarColor ?? agent.avatarColor ?? null;
    let g;
    let color;
    let onSelectColor;
    let onSelectShape;
    let c;
    if (s[0] !== agent.id || s[1] !== commitCharacter || s[2] !== avatarShape || s[3] !== avatarColor) {
        const h = {
            id: agent.id,
            avatarShape,
            avatarColor
        };
        g = LComponent;
        color = Q_2(h);
        if (s[9] !== commitCharacter) {
            onSelectColor = (avatarColor)=>{
                commitCharacter({
                    avatarColor
                });
            };
            onSelectShape = (avatarShape)=>{
                commitCharacter({
                    avatarShape
                });
            };
            s[9] = commitCharacter;
            s[10] = onSelectColor;
            s[11] = onSelectShape;
        } else {
            onSelectColor = s[10];
            onSelectShape = s[11];
        }
        c = U(h);
        s[0] = agent.id;
        s[1] = commitCharacter;
        s[2] = avatarShape;
        s[3] = avatarColor;
        s[4] = g;
        s[5] = color;
        s[6] = onSelectColor;
        s[7] = onSelectShape;
        s[8] = c;
    } else {
        g = s[4];
        color = s[5];
        onSelectColor = s[6];
        onSelectShape = s[7];
        c = s[8];
    }
    let u;
    if (s[12] !== g || s[13] !== isCharacterActive || s[14] !== color || s[15] !== onSelectColor || s[16] !== onSelectShape || s[17] !== c) {
        u = j.jsx(g, {
            color,
            onSelectColor,
            onSelectShape,
            shape: c,
            showSelection: isCharacterActive
        });
        s[12] = g;
        s[13] = isCharacterActive;
        s[14] = color;
        s[15] = onSelectColor;
        s[16] = onSelectShape;
        s[17] = c;
        s[18] = u;
    } else {
        u = s[18];
    }
    return u;
}
export { ls as A, LComponent as C, us as u };
