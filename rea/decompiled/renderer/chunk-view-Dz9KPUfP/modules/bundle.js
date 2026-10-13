import { c as c_1, u, r as r_1, T as T_1, i, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { bW, x as x_1, bX as Ht1, E as E_1, H as H_1, z as Be, bY, ba, W, bZ as Vt1 } from "./index-ZYxf-aBb.js";
import { f$, g0, b7, aU, g1, g2, r as r_2, g3, g4, g5, g6, g7, a_, g8, bA, fd, D as D_1, g9, bl, ga, gb, gc, cq, gd, dc, dl, dn } from "./index.eager-app-Cj5f8Gby.js";
import { aY as De1, u as u_1 } from "./index.eager-platform-Dcfeegfw.js";
import { S } from "./chunk-scroll-pane-CoxKzaOs.js";
import { c as c_2 } from "./index.eager-common-CdCvBQNJ.js";
import { s, a as Oe, G as G_1, S as S_1, b as Jt } from "./chunk-settings-row-I8ggwIzt.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "cd0964d1-11ac-4a40-a773-e357dbfe8d5e";
            e._sentryDebugIdIdentifier = "sentry-dbid-cd0964d1-11ac-4a40-a773-e357dbfe8d5e";
        }
    } catch (e) {}
})();
function Xt({ canUpdateBaseline, canUpdateBox, isBoxUpToDate }) {
    if (canUpdateBaseline) {
        if (isBoxUpToDate) {
            return "up-to-date";
        }
        if (canUpdateBox) {
            return "ready";
        }
        return "busy";
    }
    return "unavailable";
}
const Ke = {
    id: "oca6v8"
};
async function it(t) {
    return await t.then(()=>true, ()=>false);
}
function Yt(t) {
    switch(t.status){
        case "loading":
            if (t.previous != null) {
                return {
                    description: {
                        id: "iI4mRA",
                        values: {
                            0: t.timeZone
                        }
                    },
                    canSchedule: true
                };
            }
            return {
                description: {
                    id: "XAWK/3"
                },
                canSchedule: false
            };
        case "ready":
            return {
                description: {
                    id: "iI4mRA",
                    values: {
                        0: t.timeZone
                    }
                },
                canSchedule: true
            };
        case "empty":
            return {
                description: {
                    id: "N1CX2f"
                },
                canSchedule: false
            };
        case "unavailable":
            return {
                description: {
                    id: "xtykbP"
                },
                canSchedule: false
            };
        case "failed":
            if (t.previous != null) {
                return {
                    description: {
                        id: "hNAE/B",
                        values: {
                            0: t.timeZone
                        }
                    },
                    canSchedule: true
                };
            }
            return {
                description: {
                    id: "zmO5cN"
                },
                canSchedule: false
            };
    }
}
const ke = {
    message: {
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        $$css: true
    }
};
function Lt1Component(t) {
    Lt1Component.d = 860;
    const e = c_1.c(17);
    const { onClose, onSchedule, onUpdateNow, updateNowEnabled } = t;
    const mRef = r_1.useRef(null);
    let c;
    if (e[0] !== onClose) {
        c = (N)=>{
            if (!N) {
                onClose();
            }
        };
        e[0] = onClose;
        e[1] = c;
    } else {
        c = e[1];
    }
    let p;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        p = <x_1.Title><T_1 id="5EQ+DK"/></x_1.Title>;
        e[2] = p;
    } else {
        p = e[2];
    }
    let g;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        g = <x_1.Header>{p}<x_1.Description><T_1 id="rH1I8B"/></x_1.Description></x_1.Header>;
        e[3] = g;
    } else {
        g = e[3];
    }
    let x;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        x = <T_1 id="HW+8vB"/>;
        e[4] = x;
    } else {
        x = e[4];
    }
    let b;
    if (e[5] !== onSchedule) {
        b = <x_1.Action onClick={onSchedule}>{x}</x_1.Action>;
        e[5] = onSchedule;
        e[6] = b;
    } else {
        b = e[6];
    }
    const _ = !updateNowEnabled;
    let T;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        T = <T_1 id="Q15keH"/>;
        e[7] = T;
    } else {
        T = e[7];
    }
    let S;
    if (e[8] !== onUpdateNow || e[9] !== _) {
        S = <x_1.Action disabled={_} onClick={onUpdateNow} ref={mRef} variant="primary">{T}</x_1.Action>;
        e[8] = onUpdateNow;
        e[9] = _;
        e[10] = S;
    } else {
        S = e[10];
    }
    let f;
    if (e[11] !== b || e[12] !== S) {
        f = <x_1.ActionBar>{b}{S}</x_1.ActionBar>;
        e[11] = b;
        e[12] = S;
        e[13] = f;
    } else {
        f = e[13];
    }
    let d;
    if (e[14] !== c || e[15] !== f) {
        d = <x_1.Root className="sand-computer-upgrade-choice-dialog" initialFocus={mRef} onOpenChange={c} open width={440}>{g}{f}</x_1.Root>;
        e[14] = c;
        e[15] = f;
        e[16] = d;
    } else {
        d = e[16];
    }
    return d;
}
function FeComponent(t) {
    FeComponent.d = 862;
    const e = c_1.c(96);
    const { initial, isReschedule, onClose, recurringLocked } = t;
    const m = recurringLocked === undefined ? false : recurringLocked;
    const { i18n, _: __1 } = u();
    const g = b7();
    aU(g.timeZone.load);
    const x = g1();
    const b = g2();
    const x_timeZone = x.timeZone;
    const T = Yt(x);
    const S = x.status === "empty" || x.status === "unavailable" || x.status === "failed";
    const f = f$();
    const [d, setD] = r_1.useState(initial.localTime);
    const [P, setP] = r_1.useState(initial.recurring);
    const hRef = r_1.useRef(null);
    const j = {
        className: "sand-9f619 sand-h8yej3 sand-90ne7k sand-exx8yu sand-2vl965 sand-18d9i69 sand-e2zdcy sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1t6ttyj sand-vvtkfd sand-tyxrsu sand-ln7xf2 sand-4sht9k"
    };
    const B = ()=>{
        if (!T.canSchedule || f.isPending || d.length === 0) {
            return;
        }
        const ie = {
            localTime: d,
            timeZone: x_timeZone,
            recurring: P
        };
        const Ue = isReschedule ? f.reschedule(ie) : f.schedule(ie);
        it(Ue).then((Ce)=>{
            if (Ce) {
                onClose();
            }
        });
    };
    const L = x_1;
    const className = "sand-computer-upgrade-schedule-dialog";
    const w = !f.isPending;
    const F = !f.isPending;
    const J = !f.isPending;
    let E;
    if (e[0] !== f.isPending || e[1] !== onClose) {
        E = (ie)=>{
            if (!ie && !f.isPending) {
                onClose();
            }
        };
        e[0] = f.isPending;
        e[1] = onClose;
        e[2] = E;
    } else {
        E = e[2];
    }
    const open = true;
    const width = 440;
    let A;
    if (e[3] !== __1 || e[4] !== isReschedule) {
        A = __1(isReschedule ? {
            id: "qMuJlf"
        } : {
            id: "FGceLl"
        });
        e[3] = __1;
        e[4] = isReschedule;
        e[5] = A;
    } else {
        A = e[5];
    }
    let U;
    if (e[6] !== A) {
        U = <x_1.Title>{A}</x_1.Title>;
        e[6] = A;
        e[7] = U;
    } else {
        U = e[7];
    }
    const D = i18n._(T.description);
    let I;
    if (e[8] !== D) {
        I = <x_1.Description>{D}</x_1.Description>;
        e[8] = D;
        e[9] = I;
    } else {
        I = e[9];
    }
    let n;
    if (e[10] !== U || e[11] !== I) {
        n = <x_1.Header>{U}{I}</x_1.Header>;
        e[10] = U;
        e[11] = I;
        e[12] = n;
    } else {
        n = e[12];
    }
    let r;
    if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-jp7ctv"
        };
        e[13] = r;
    } else {
        r = e[13];
    }
    let onSubmit;
    if (e[14] !== B) {
        onSubmit = (ie)=>{
            ie.preventDefault();
            B();
        };
        e[14] = B;
        e[15] = onSubmit;
    } else {
        onSubmit = e[15];
    }
    const se = x_1;
    let W;
    let X;
    let Y;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        W = {
            className: "sand-78zum5 sand-dt5ytf sand-1af02g3"
        };
        X = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-1o0liin sand-11wthnw"
        };
        Y = <span><T_1 id="yIaZUV"/></span>;
        e[16] = W;
        e[17] = X;
        e[18] = Y;
    } else {
        W = e[16];
        X = e[17];
        Y = e[18];
    }
    const fe = r_2("sand-computer-upgrade-schedule-dialog__time", j.className);
    let onChange;
    if (e[19] !== setD) {
        onChange = (ie)=>setD(ie.currentTarget.value);
        e[19] = setD;
        e[20] = onChange;
    } else {
        onChange = e[20];
    }
    let K;
    if (e[21] !== f.isPending || e[22] !== d || e[23] !== fe || e[24] !== onChange || e[25] !== j.style) {
        K = <input className={fe} disabled={f.isPending} onChange={onChange} ref={hRef} required style={j.style} type="time" value={d}/>;
        e[21] = f.isPending;
        e[22] = d;
        e[23] = fe;
        e[24] = onChange;
        e[25] = j.style;
        e[26] = K;
    } else {
        K = e[26];
    }
    let H;
    if (e[27] !== X || e[28] !== Y || e[29] !== K) {
        H = <label {...X}>{Y}{K}</label>;
        e[27] = X;
        e[28] = Y;
        e[29] = K;
        e[30] = H;
    } else {
        H = e[30];
    }
    let oe;
    if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
        oe = {
            className: "sand-78zum5 sand-6s0dn4 sand-mmi0ta sand-1o0liin sand-11wthnw sand-1ypdohk"
        };
        e[31] = oe;
    } else {
        oe = e[31];
    }
    let y;
    if (e[32] !== i18n) {
        y = i18n._(Ke);
        e[32] = i18n;
        e[33] = y;
    } else {
        y = e[33];
    }
    const ne = f.isPending || m;
    let le;
    if (e[34] !== P || e[35] !== setP || e[36] !== y || e[37] !== ne) {
        le = <Ht1 aria-label={y} checked={P} disabled={ne} onCheckedChange={setP} variant="neutral"/>;
        e[34] = P;
        e[35] = setP;
        e[36] = y;
        e[37] = ne;
        e[38] = le;
    } else {
        le = e[38];
    }
    let z;
    if (e[39] !== i18n) {
        z = i18n._(Ke);
        e[39] = i18n;
        e[40] = z;
    } else {
        z = e[40];
    }
    let Q;
    if (e[41] !== z) {
        Q = <span>{z}</span>;
        e[41] = z;
        e[42] = Q;
    } else {
        Q = e[42];
    }
    let V;
    if (e[43] !== le || e[44] !== Q) {
        V = <label {...oe}>{le}{Q}</label>;
        e[43] = le;
        e[44] = Q;
        e[45] = V;
    } else {
        V = e[45];
    }
    let Z;
    if (e[46] !== m) {
        Z = m ? <De1 as="p" color="secondary" rootStyle={ke.message} size="sm"><T_1 id="LgiFYi"/></De1> : null;
        e[46] = m;
        e[47] = Z;
    } else {
        Z = e[47];
    }
    let ee;
    if (e[48] !== __1 || e[49] !== f.failure || e[50] !== isReschedule) {
        ee = f.failure == null ? null : <De1 as="p" color="red" role="alert" rootStyle={ke.message} size="sm">{__1(isReschedule ? {
            id: "7K9h7G"
        } : {
            id: "c3LQC5"
        })}</De1>;
        e[48] = __1;
        e[49] = f.failure;
        e[50] = isReschedule;
        e[51] = ee;
    } else {
        ee = e[51];
    }
    let me;
    if (e[52] !== W || e[53] !== H || e[54] !== V || e[55] !== Z || e[56] !== ee) {
        me = <div {...W}>{H}{V}{Z}{ee}</div>;
        e[52] = W;
        e[53] = H;
        e[54] = V;
        e[55] = Z;
        e[56] = ee;
        e[57] = me;
    } else {
        me = e[57];
    }
    let xe;
    if (e[58] !== se.Body || e[59] !== me) {
        xe = <se.Body>{me}</se.Body>;
        e[58] = se.Body;
        e[59] = me;
        e[60] = xe;
    } else {
        xe = e[60];
    }
    let ve;
    if (e[61] !== __1 || e[62] !== m) {
        ve = __1(m ? {
            id: "yz7wBu"
        } : {
            id: "dEgA5A"
        });
        e[61] = __1;
        e[62] = m;
        e[63] = ve;
    } else {
        ve = e[63];
    }
    let ae;
    if (e[64] !== f.isPending || e[65] !== onClose || e[66] !== ve) {
        ae = <x_1.Action disabled={f.isPending} onClick={onClose} type="button">{ve}</x_1.Action>;
        e[64] = f.isPending;
        e[65] = onClose;
        e[66] = ve;
        e[67] = ae;
    } else {
        ae = e[67];
    }
    let ge;
    if (e[68] !== S || e[69] !== f.isPending || e[70] !== b) {
        ge = S ? <x_1.Action disabled={f.isPending} onClick={b} type="button"><T_1 id="6gRgw8"/></x_1.Action> : null;
        e[68] = S;
        e[69] = f.isPending;
        e[70] = b;
        e[71] = ge;
    } else {
        ge = e[71];
    }
    const Se = !T.canSchedule || d.length === 0;
    let ce;
    if (e[72] !== __1 || e[73] !== isReschedule) {
        ce = __1(isReschedule ? {
            id: "FzTsgz"
        } : {
            id: "HW+8vB"
        });
        e[72] = __1;
        e[73] = isReschedule;
        e[74] = ce;
    } else {
        ce = e[74];
    }
    let re;
    if (e[75] !== f.isPending || e[76] !== Se || e[77] !== ce) {
        re = <x_1.Action disabled={Se} pending={f.isPending} type="submit" variant="primary">{ce}</x_1.Action>;
        e[75] = f.isPending;
        e[76] = Se;
        e[77] = ce;
        e[78] = re;
    } else {
        re = e[78];
    }
    let Pe;
    if (e[79] !== ae || e[80] !== ge || e[81] !== re) {
        Pe = <x_1.ActionBar>{ae}{ge}{re}</x_1.ActionBar>;
        e[79] = ae;
        e[80] = ge;
        e[81] = re;
        e[82] = Pe;
    } else {
        Pe = e[82];
    }
    let ue;
    if (e[83] !== r || e[84] !== onSubmit || e[85] !== xe || e[86] !== Pe) {
        ue = <form {...r} onSubmit={onSubmit}>{xe}{Pe}</form>;
        e[83] = r;
        e[84] = onSubmit;
        e[85] = xe;
        e[86] = Pe;
        e[87] = ue;
    } else {
        ue = e[87];
    }
    let Re;
    if (e[88] !== n || e[89] !== L.Root || e[90] !== w || e[91] !== ue || e[92] !== F || e[93] !== J || e[94] !== E) {
        Re = <L.Root className={className} closeOnBackdropClick={w} closeOnEscape={F} closeOnOutsidePress={J} initialFocus={hRef} onOpenChange={E} open={open} width={width}>{n}{ue}</L.Root>;
        e[88] = n;
        e[89] = L.Root;
        e[90] = w;
        e[91] = ue;
        e[92] = F;
        e[93] = J;
        e[94] = E;
        e[95] = Re;
    } else {
        Re = e[95];
    }
    return Re;
}
function JeComponent(t) {
    JeComponent.d = 863;
    const e = c_1.c(104);
    const { schedule, onClose, onReschedule } = t;
    const { _: __1 } = u();
    const m = f$();
    const c = bW();
    const p = schedule?.state === "claimed" || schedule?.state === "running";
    const g = schedule?.state === "failed" || schedule?.state === "missed";
    const x = schedule != null && g0(schedule, c);
    const b = schedule != null && !p;
    const _ = schedule?.state === "scheduled" || schedule?.state === "waiting-for-image";
    const TRef = r_1.useRef(null);
    let S;
    if (e[0] !== onClose) {
        S = (n)=>{
            it(n).then((r)=>{
                if (r) {
                    onClose();
                }
            });
        };
        e[0] = onClose;
        e[1] = S;
    } else {
        S = e[1];
    }
    const f = S;
    let d;
    if (e[2] !== f || e[3] !== m) {
        d = ()=>f(m.cancel());
        e[2] = f;
        e[3] = m;
        e[4] = d;
    } else {
        d = e[4];
    }
    const N = d;
    let P;
    if (e[5] !== f || e[6] !== m) {
        P = ()=>f(m.dismissTerminal());
        e[5] = f;
        e[6] = m;
        e[7] = P;
    } else {
        P = e[7];
    }
    const R = P;
    let h;
    if (schedule == null) {
        let n;
        if (e[8] !== __1) {
            n = __1({
                id: "DJ8vO7"
            });
            e[8] = __1;
            e[9] = n;
        } else {
            n = e[9];
        }
        let r;
        if (e[10] !== n) {
            r = <De1 as="p" color="secondary" role="status" rootStyle={ke.message} size="sm">{n}</De1>;
            e[10] = n;
            e[11] = r;
        } else {
            r = e[11];
        }
        h = r;
    } else if (p) {
        let n;
        if (e[12] !== __1) {
            n = __1({
                id: "mOYKJB"
            });
            e[12] = __1;
            e[13] = n;
        } else {
            n = e[13];
        }
        let r;
        if (e[14] !== n) {
            r = <De1 as="p" color="secondary" role="status" rootStyle={ke.message} size="sm">{n}</De1>;
            e[14] = n;
            e[15] = r;
        } else {
            r = e[15];
        }
        h = r;
    } else if (m.failure != null) {
        let n;
        if (e[16] !== __1 || e[17] !== g) {
            n = __1(g ? {
                id: "xl3sRN"
            } : {
                id: "8l1dw6"
            });
            e[16] = __1;
            e[17] = g;
            e[18] = n;
        } else {
            n = e[18];
        }
        let r;
        if (e[19] !== n) {
            r = <De1 as="p" color="red" role="alert" rootStyle={ke.message} size="sm">{n}</De1>;
            e[19] = n;
            e[20] = r;
        } else {
            r = e[20];
        }
        h = r;
    } else if (schedule.state === "waiting-for-image") {
        let n;
        if (e[21] !== __1) {
            n = __1({
                id: "9B+F4E"
            });
            e[21] = __1;
            e[22] = n;
        } else {
            n = e[22];
        }
        let r;
        if (e[23] !== n) {
            r = <De1 as="p" color="secondary" role="status" rootStyle={ke.message} size="sm">{n}</De1>;
            e[23] = n;
            e[24] = r;
        } else {
            r = e[24];
        }
        h = r;
    } else if (schedule.state === "failed") {
        let n;
        if (e[25] !== __1) {
            n = __1({
                id: "dvcSkb"
            });
            e[25] = __1;
            e[26] = n;
        } else {
            n = e[26];
        }
        let r;
        if (e[27] !== n) {
            r = <De1 as="p" color="red" role="alert" rootStyle={ke.message} size="sm">{n}</De1>;
            e[27] = n;
            e[28] = r;
        } else {
            r = e[28];
        }
        h = r;
    } else if (schedule.state === "missed") {
        let n;
        if (e[29] !== __1) {
            n = __1({
                id: "SSawzU"
            });
            e[29] = __1;
            e[30] = n;
        } else {
            n = e[30];
        }
        let r;
        if (e[31] !== n) {
            r = <De1 as="p" color="secondary" role="status" rootStyle={ke.message} size="sm">{n}</De1>;
            e[31] = n;
            e[32] = r;
        } else {
            r = e[32];
        }
        h = r;
    } else if (x) {
        let n;
        if (e[33] !== __1) {
            n = __1({
                id: "zs7L+v"
            });
            e[33] = __1;
            e[34] = n;
        } else {
            n = e[34];
        }
        let r;
        if (e[35] !== n) {
            r = <De1 as="p" color="secondary" role="status" rootStyle={ke.message} size="sm">{n}</De1>;
            e[35] = n;
            e[36] = r;
        } else {
            r = e[36];
        }
        h = r;
    } else if (schedule.failureReason != null) {
        let n;
        if (e[37] !== __1) {
            n = __1({
                id: "DxG2Me"
            });
            e[37] = __1;
            e[38] = n;
        } else {
            n = e[38];
        }
        let r;
        if (e[39] !== n) {
            r = <De1 as="p" color="secondary" role="status" rootStyle={ke.message} size="sm">{n}</De1>;
            e[39] = n;
            e[40] = r;
        } else {
            r = e[40];
        }
        h = r;
    } else {
        let n;
        if (e[41] !== __1) {
            n = __1({
                id: "sVM9X6"
            });
            e[41] = __1;
            e[42] = n;
        } else {
            n = e[42];
        }
        let r;
        if (e[43] !== n) {
            r = <De1 as="p" color="secondary" role="status" rootStyle={ke.message} size="sm">{n}</De1>;
            e[43] = n;
            e[44] = r;
        } else {
            r = e[44];
        }
        h = r;
    }
    let j;
    if (schedule == null) {
        let n;
        if (e[45] !== __1) {
            n = __1({
                id: "O98MC0"
            });
            e[45] = __1;
            e[46] = n;
        } else {
            n = e[46];
        }
        j = n;
    } else if (p) {
        let n;
        if (e[47] !== __1) {
            n = __1({
                id: "EhmeFn"
            });
            e[47] = __1;
            e[48] = n;
        } else {
            n = e[48];
        }
        j = n;
    } else if (schedule.state === "waiting-for-image") {
        let n;
        if (e[49] !== __1) {
            n = __1({
                id: "/VHWSR"
            });
            e[49] = __1;
            e[50] = n;
        } else {
            n = e[50];
        }
        j = n;
    } else if (schedule.state === "failed") {
        let n;
        if (e[51] !== __1) {
            n = __1({
                id: "cpVY7s"
            });
            e[51] = __1;
            e[52] = n;
        } else {
            n = e[52];
        }
        j = n;
    } else if (schedule.state === "missed") {
        let n;
        if (e[53] !== __1) {
            n = __1({
                id: "1LEY+X"
            });
            e[53] = __1;
            e[54] = n;
        } else {
            n = e[54];
        }
        j = n;
    } else if (x) {
        let n;
        if (e[55] !== __1) {
            n = __1({
                id: "Rh+qJi"
            });
            e[55] = __1;
            e[56] = n;
        } else {
            n = e[56];
        }
        j = n;
    } else {
        let n;
        if (e[57] !== __1) {
            n = __1({
                id: "PWHLaG"
            });
            e[57] = __1;
            e[58] = n;
        } else {
            n = e[58];
        }
        j = n;
    }
    let B;
    if (schedule == null) {
        let n;
        if (e[59] !== __1) {
            n = __1({
                id: "fs7tRr"
            });
            e[59] = __1;
            e[60] = n;
        } else {
            n = e[60];
        }
        B = n;
    } else if (schedule.recurring) {
        let n;
        if (e[61] !== __1 || e[62] !== schedule.localTime || e[63] !== schedule.timeZone) {
            n = __1({
                id: "YZbHiz",
                values: {
                    0: schedule.localTime,
                    1: schedule.timeZone
                }
            });
            e[61] = __1;
            e[62] = schedule.localTime;
            e[63] = schedule.timeZone;
            e[64] = n;
        } else {
            n = e[64];
        }
        B = n;
    } else {
        let n;
        if (e[65] !== __1 || e[66] !== schedule.localTime || e[67] !== schedule.timeZone) {
            n = __1({
                id: "OnNsFO",
                values: {
                    0: schedule.localTime,
                    1: schedule.timeZone
                }
            });
            e[65] = __1;
            e[66] = schedule.localTime;
            e[67] = schedule.timeZone;
            e[68] = n;
        } else {
            n = e[68];
        }
        B = n;
    }
    const L = !m.isPending;
    const te = !m.isPending;
    const w = !m.isPending;
    let F;
    if (e[69] !== m.isPending || e[70] !== onClose) {
        F = (n)=>{
            if (!n && !m.isPending) {
                onClose();
            }
        };
        e[69] = m.isPending;
        e[70] = onClose;
        e[71] = F;
    } else {
        F = e[71];
    }
    let J;
    if (e[72] !== j) {
        J = <x_1.Title>{j}</x_1.Title>;
        e[72] = j;
        e[73] = J;
    } else {
        J = e[73];
    }
    let E;
    if (e[74] !== B) {
        E = <x_1.Description>{B}</x_1.Description>;
        e[74] = B;
        e[75] = E;
    } else {
        E = e[75];
    }
    let O;
    if (e[76] !== J || e[77] !== E) {
        O = <x_1.Header>{J}{E}</x_1.Header>;
        e[76] = J;
        e[77] = E;
        e[78] = O;
    } else {
        O = e[78];
    }
    let k;
    if (e[79] !== h) {
        k = <x_1.Body>{h}</x_1.Body>;
        e[79] = h;
        e[80] = k;
    } else {
        k = e[80];
    }
    let A;
    if (e[81] !== __1 || e[82] !== _ || e[83] !== N || e[84] !== m.isPending || e[85] !== R || e[86] !== g) {
        A = _ || g ? <x_1.Action disabled={m.isPending} onClick={g ? R : N}>{__1(g ? {
            id: "1QfxQT"
        } : {
            id: "EsyXEM"
        })}</x_1.Action> : null;
        e[81] = __1;
        e[82] = _;
        e[83] = N;
        e[84] = m.isPending;
        e[85] = R;
        e[86] = g;
        e[87] = A;
    } else {
        A = e[87];
    }
    let U;
    if (e[88] !== b || e[89] !== m.isPending || e[90] !== onClose || e[91] !== onReschedule) {
        U = b ? <x_1.Action disabled={m.isPending} onClick={onReschedule} ref={TRef} variant="primary"><T_1 id="QqW27M"/></x_1.Action> : <x_1.Action onClick={onClose} ref={TRef} variant="primary"><T_1 id="yz7wBu"/></x_1.Action>;
        e[88] = b;
        e[89] = m.isPending;
        e[90] = onClose;
        e[91] = onReschedule;
        e[92] = U;
    } else {
        U = e[92];
    }
    let D;
    if (e[93] !== A || e[94] !== U) {
        D = <x_1.ActionBar>{A}{U}</x_1.ActionBar>;
        e[93] = A;
        e[94] = U;
        e[95] = D;
    } else {
        D = e[95];
    }
    let I;
    if (e[96] !== O || e[97] !== k || e[98] !== D || e[99] !== L || e[100] !== te || e[101] !== w || e[102] !== F) {
        I = <x_1.Root className="sand-computer-upgrade-scheduled-dialog" closeOnBackdropClick={L} closeOnEscape={te} closeOnOutsidePress={w} initialFocus={TRef} onOpenChange={F} open width={440}>{O}{k}{D}</x_1.Root>;
        e[96] = O;
        e[97] = k;
        e[98] = D;
        e[99] = L;
        e[100] = te;
        e[101] = w;
        e[102] = F;
        e[103] = I;
    } else {
        I = e[103];
    }
    return I;
}
function Qe(schedule) {
    if (schedule == null) {
        return "";
    }
    return JSON.stringify(schedule);
}
function At1Component(t) {
    At1Component.d = 861;
    const e = c_1.c(27);
    const { state, onClose, onSchedule, onUpdateNow, onReschedule, schedule, updateNowEnabled } = t;
    switch(state.kind){
        case "choice":
            {
                let g;
                if (e[0] !== onClose || e[1] !== onSchedule || e[2] !== onUpdateNow || e[3] !== updateNowEnabled) {
                    g = <Lt1Component onClose={onClose} onSchedule={onSchedule} onUpdateNow={onUpdateNow} updateNowEnabled={updateNowEnabled}/>;
                    e[0] = onClose;
                    e[1] = onSchedule;
                    e[2] = onUpdateNow;
                    e[3] = updateNowEnabled;
                    e[4] = g;
                } else {
                    g = e[4];
                }
                return g;
            }
        case "schedule":
            {
                let initial;
                if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
                    initial = {
                        localTime: "00:00",
                        recurring: false
                    };
                    e[5] = initial;
                } else {
                    initial = e[5];
                }
                let x;
                if (e[6] !== onClose) {
                    x = <FeComponent initial={initial} isReschedule={false} onClose={onClose}/>;
                    e[6] = onClose;
                    e[7] = x;
                } else {
                    x = e[7];
                }
                return x;
            }
        case "reschedule":
            {
                if (schedule == null || schedule.state === "claimed" || schedule.state === "running") {
                    let _;
                    if (e[8] !== schedule) {
                        _ = Qe(schedule);
                        e[8] = schedule;
                        e[9] = _;
                    } else {
                        _ = e[9];
                    }
                    let T;
                    if (e[10] !== onClose || e[11] !== onReschedule || e[12] !== schedule || e[13] !== _) {
                        T = <JeComponent key={_} onClose={onClose} onReschedule={onReschedule} schedule={schedule}/>;
                        e[10] = onClose;
                        e[11] = onReschedule;
                        e[12] = schedule;
                        e[13] = _;
                        e[14] = T;
                    } else {
                        T = e[14];
                    }
                    return T;
                }
                const g = `${schedule.localTime}:${schedule.timeZone}:${schedule.recurring}`;
                const recurringLocked = schedule.state === "waiting-for-image";
                let b;
                if (e[15] !== onClose || e[16] !== schedule || e[17] !== g || e[18] !== recurringLocked) {
                    b = <FeComponent key={g} initial={schedule} isReschedule onClose={onClose} recurringLocked={recurringLocked}/>;
                    e[15] = onClose;
                    e[16] = schedule;
                    e[17] = g;
                    e[18] = recurringLocked;
                    e[19] = b;
                } else {
                    b = e[19];
                }
                return b;
            }
        case "scheduled":
            {
                let g;
                if (e[20] !== schedule) {
                    g = Qe(schedule);
                    e[20] = schedule;
                    e[21] = g;
                } else {
                    g = e[21];
                }
                let x;
                if (e[22] !== onClose || e[23] !== onReschedule || e[24] !== schedule || e[25] !== g) {
                    x = <JeComponent key={g} onClose={onClose} onReschedule={onReschedule} schedule={schedule}/>;
                    e[22] = onClose;
                    e[23] = onReschedule;
                    e[24] = schedule;
                    e[25] = g;
                    e[26] = x;
                } else {
                    x = e[26];
                }
                return x;
            }
    }
}
function Kt({ workingAgentNames }) {
    const working = workingAgentNames.length === 0 ? i._({
        id: "1DiJOA"
    }) : i._({
        id: "wICGd6",
        values: {
            0: workingAgentNames.length
        }
    });
    return {
        title: i._({
            id: "XysFzd"
        }),
        description: i._({
            id: "5W53nw",
            values: {
                working
            }
        }),
        warning: i._({
            id: "T9ijna"
        }),
        confirmLabel: i._({
            id: "FB/gHq"
        }),
        pendingLabel: i._({
            id: "xRPBky"
        }),
        cancelLabel: i._({
            id: "dEgA5A"
        }),
        destructive: true,
        width: "wide"
    };
}
function Qt({ action, snapshot }) {
    if (snapshot.isBlocked) {
        return i._({
            id: "OY2DWP"
        });
    }
    if (snapshot.pendingKind != null) {
        return i._({
            id: "NCxqyE"
        });
    }
    if (snapshot.canReset) {
        return null;
    }
    return i._({
        id: "J8tdjR"
    });
}
function es({ request, action, readSnapshot, run }) {
    return {
        ...request,
        perform: async ()=>{
            const o = Qt({
                action,
                snapshot: readSnapshot()
            });
            return o ?? (run(), null);
        }
    };
}
const ts = {
    feed_fetch_failed: {
        id: "q/OE3r"
    },
    feed_malformed: {
        id: "gMUjc2"
    },
    update_apply_unsupported: {
        id: "6THE5M"
    },
    installer_backend_unavailable: {
        id: "alTz3O"
    },
    installer_signature_invalid: {
        id: "VZlSAx"
    },
    update_failed: {
        id: "eoHLiG"
    },
    staging_declined: {
        id: "QP0mYu"
    },
    staging_failed: {
        id: "QP0mYu"
    }
};
function et(t, { failure }) {
    if (failure == null) {
        return t({
            id: "aFBZJb"
        });
    }
    if (failure.kind === "feed_http_status") {
        return t({
            id: "r5CpW6",
            values: {
                0: failure.httpStatus
            }
        });
    }
    if (failure.kind === "staging_timeout") {
        return t({
            id: "SUHrgt",
            values: {
                0: failure.version
            }
        });
    }
    return t(ts[failure.kind]);
}
const We = {
    statusError: {
        kMwMTN: "sand-1jh5svw",
        $$css: true
    },
    statusReady: {
        kMwMTN: "sand-kbann2",
        $$css: true
    },
    statusVisuallyHidden: {
        kVAEAm: "sand-10l6tqk",
        kzqmXN: "sand-1i1rx1s",
        kZKoxP: "sand-jm9jq1",
        kogj98: "sand-kdpibf",
        kmVPX3: "sand-1717udv",
        kVQacm: "sand-b3r6kr",
        kMcinP: "sand-zpqnlu",
        khDVqt: "sand-uxw1ft",
        kMzoRj: "sand-c342km",
        $$css: true
    },
    checkWeakBorder: {
        kGVxlE: "sand-lkpa4b",
        $$css: true
    }
};
const ss = {
    stable: {
        id: "B6aXGH"
    },
    nightly: {
        id: "cVY2Vt"
    },
    dogfood: {
        id: "C/wLBW"
    }
};
const href = "https://console.statsig.com/5oWaLs1Xr8U2ei9Hq2R45w/dynamic_configs/sand_internal_release_track_override";
function Dt1Component(t) {
    Dt1Component.d = 1319;
    const e = c_1.c(9);
    const { children } = t;
    const a = bA();
    const { externalLinkHandlers } = fd();
    let l;
    if (e[0] !== externalLinkHandlers || e[1] !== a) {
        l = externalLinkHandlers(href, a);
        e[0] = externalLinkHandlers;
        e[1] = a;
        e[2] = l;
    } else {
        l = e[2];
    }
    let m;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-kbann2 sand-1ypdohk sand-ujl8zx"
        };
        e[3] = m;
    } else {
        m = e[3];
    }
    let c;
    if (e[4] !== children) {
        c = <D_1>{children}</D_1>;
        e[4] = children;
        e[5] = c;
    } else {
        c = e[5];
    }
    let p;
    if (e[6] !== l || e[7] !== c) {
        p = <a {...l} {...m} href={href} rel="noopener noreferrer" target="_blank">{c}</a>;
        e[6] = l;
        e[7] = c;
        e[8] = p;
    } else {
        p = e[8];
    }
    return p;
}
function ot(t, status) {
    if (status.state.type !== "disabled") {
        return "";
    }
    switch(status.state.reason){
        case "not-packaged":
            return t({
                id: "mHJfw8"
            });
        case "lab-build":
            return t({
                id: "LQb5zQ"
            });
        case "unsupported-platform":
            return t({
                id: "eWT6UF"
            });
        case "disabled-by-env":
            return t({
                id: "zQjC4P"
            });
    }
}
function ns(t, status) {
    if (status.state.type === "disabled") {
        return ot(t, status);
    }
    if (status.delivery === "package-manager") {
        return t({
            id: "UEIfad"
        });
    }
    return t({
        id: "t4oXCX",
        values: {
            0: status.currentTrack
        }
    });
}
function is(t, status) {
    const { state } = status;
    switch(state.type){
        case "disabled":
            return {
                text: ot(t, status),
                tone: "default"
            };
        case "checking":
            return {
                text: t({
                    id: "YHOIrR"
                }),
                tone: "default"
            };
        case "available":
            return {
                text: t({
                    id: "c82kGR",
                    values: {
                        0: state.version
                    }
                }),
                tone: "default"
            };
        case "downloading":
            if (state.progress == null) {
                return {
                    text: t({
                        id: "KnfaGy",
                        values: {
                            0: state.version
                        }
                    }),
                    tone: "default"
                };
            }
            return {
                text: t({
                    id: "Z2WNfg",
                    values: {
                        0: state.version,
                        1: g8(state.progress)
                    }
                }),
                tone: "default"
            };
        case "staging":
            return {
                text: t({
                    id: "W+HMod",
                    values: {
                        0: state.version
                    }
                }),
                tone: "default"
            };
        case "ready":
            {
                if (state.lastCheck?.result === "error") {
                    const failureMessage = et(t, state.lastCheck);
                    return {
                        text: t({
                            id: "ZEccfE",
                            values: {
                                0: state.version,
                                failureMessage
                            }
                        }),
                        tone: "error"
                    };
                }
                return {
                    text: t({
                        id: "jlzJCP",
                        values: {
                            0: state.version
                        }
                    }),
                    tone: "ready"
                };
            }
        case "move-required":
            return {
                text: t({
                    id: "E2rHU1"
                }),
                tone: "error"
            };
        case "idle":
            {
                const { lastCheck } = state;
                if (lastCheck == null) {
                    return {
                        text: "",
                        tone: "default"
                    };
                }
                switch(lastCheck.result){
                    case "up-to-date":
                        return {
                            text: t({
                                id: "Ekblrc"
                            }),
                            tone: "default"
                        };
                    case "available-from-package-manager":
                        return {
                            text: t({
                                id: "vj7UIZ",
                                values: {
                                    0: lastCheck.version
                                }
                            }),
                            tone: "default"
                        };
                    case "error":
                        return {
                            text: et(t, lastCheck),
                            tone: "error"
                        };
                }
            }
    }
}
function Ct1Component() {
    Ct1Component.d = 1320;
    const t = c_1.c(110);
    const { _: __1 } = u();
    const { _: __2 } = u();
    const { updatePrompt } = b7();
    const { status, isLoading } = g3();
    const { check, isPending } = g4();
    const { setTrack, isPending: isPending_1, failure } = g5();
    const { setAutoUpdateWhenIdle, isPending: isPending_2, failure: failure_1 } = g6();
    const { quitAndInstall } = g7();
    let f;
    if (t[0] !== setTrack) {
        f = (y)=>{
            if (y === "stable" || y === "nightly" || y === "dogfood") {
                setTrack(y);
            }
        };
        t[0] = setTrack;
        t[1] = f;
    } else {
        f = t[1];
    }
    const d = f;
    let N;
    if (t[2] !== __2) {
        N = __2({
            id: "ETzTLS"
        });
        t[2] = __2;
        t[3] = N;
    } else {
        N = t[3];
    }
    let P = N;
    if (isLoading) {
        let y;
        if (t[4] !== __2) {
            y = __2({
                id: "Pwqkdw"
            });
            t[4] = __2;
            t[5] = y;
        } else {
            y = t[5];
        }
        P = y;
    } else if (isPending) {
        let y;
        if (t[6] !== __2) {
            y = __2({
                id: "RLe7Vk"
            });
            t[6] = __2;
            t[7] = y;
        } else {
            y = t[7];
        }
        P = y;
    }
    if (status == null) {
        let y;
        if (t[8] !== __2) {
            y = __2({
                id: "U+dVHJ"
            });
            t[8] = __2;
            t[9] = y;
        } else {
            y = t[9];
        }
        let ne;
        if (t[10] !== __2 || t[11] !== isLoading) {
            ne = __2(isLoading ? {
                id: "+Vy0cC"
            } : {
                id: "wS2ikm"
            });
            t[10] = __2;
            t[11] = isLoading;
            t[12] = ne;
        } else {
            ne = t[12];
        }
        const le = isLoading || isPending;
        let z;
        if (t[13] !== check || t[14] !== updatePrompt) {
            z = ()=>{
                updatePrompt.reportAction({
                    surface: "settings",
                    action: "clicked",
                    kind: "check"
                });
                check();
            };
            t[13] = check;
            t[14] = updatePrompt;
            t[15] = z;
        } else {
            z = t[15];
        }
        let Q;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            Q = [
                a_.body2,
                We.checkWeakBorder
            ];
            t[16] = Q;
        } else {
            Q = t[16];
        }
        let V;
        if (t[17] !== P || t[18] !== le || t[19] !== z) {
            V = <Be disabled={le} onClick={z} size="md" style={Q} variant="secondary">{P}</Be>;
            t[17] = P;
            t[18] = le;
            t[19] = z;
            t[20] = V;
        } else {
            V = t[20];
        }
        let Z;
        if (t[21] !== ne || t[22] !== V) {
            Z = <Oe anchorId="update-status" description={ne} variant="card">{V}</Oe>;
            t[21] = ne;
            t[22] = V;
            t[23] = Z;
        } else {
            Z = t[23];
        }
        let ee;
        if (t[24] !== y || t[25] !== Z) {
            ee = <G_1 title={y}>{Z}</G_1>;
            t[24] = y;
            t[25] = Z;
            t[26] = ee;
        } else {
            ee = t[26];
        }
        return ee;
    }
    const status_currentVersion = status.currentVersion;
    const { state } = status;
    const j = state.type === "disabled";
    const B = status.delivery === "package-manager";
    const L = state.type === "checking" || state.type === "available" || state.type === "downloading" || state.type === "staging";
    let te;
    if (t[27] !== __1 || t[28] !== status) {
        te = is(__1, status);
        t[27] = __1;
        t[28] = status;
        t[29] = te;
    } else {
        te = t[29];
    }
    const w = te;
    const F = !j && w.text.length > 0;
    let J;
    if (t[30] !== __2 || t[31] !== failure) {
        J = failure != null ? __2({
            id: "QqKsGg"
        }) : __2({
            id: "9X6nZD"
        });
        t[30] = __2;
        t[31] = failure;
        t[32] = J;
    } else {
        J = t[32];
    }
    const E = J;
    let O;
    if (t[33] !== F || t[34] !== w.tone) {
        O = r_2("sand-settings-updates__status", p(s.hint, w.tone === "error" && We.statusError, w.tone === "ready" && We.statusReady, !F && We.statusVisuallyHidden).className);
        t[33] = F;
        t[34] = w.tone;
        t[35] = O;
    } else {
        O = t[35];
    }
    const k = F ? w.text : "";
    let A;
    if (t[36] !== O || t[37] !== k) {
        A = <De1 aria-live="polite" as="span" className={O} color="secondary" role="status" size="md">{k}</De1>;
        t[36] = O;
        t[37] = k;
        t[38] = A;
    } else {
        A = t[38];
    }
    const U = A;
    let D;
    if (t[39] !== __2) {
        D = __2({
            id: "U+dVHJ"
        });
        t[39] = __2;
        t[40] = D;
    } else {
        D = t[40];
    }
    let I;
    if (t[41] !== __1 || t[42] !== __2 || t[43] !== d || t[44] !== B || t[45] !== isPending_1 || t[46] !== j || t[47] !== status.availableTracks || t[48] !== status.currentTrack || t[49] !== status.isTrackManagedByPolicy || t[50] !== E) {
        I = B ? null : <Oe description={status.isTrackManagedByPolicy ? <T_1 id="D6WGx5" components={{
            0: <Dt1Component/>
        }}/> : E} anchorId="update-channel" variant="card"><E_1 aria-label={__2({
            id: "/IUA77"
        })} disabled={j || isPending_1 || status.isTrackManagedByPolicy} onValueChange={(y)=>{
            if (y !== null) {
                d(y);
            }
        }} options={status.availableTracks.map((y)=>({
                value: y,
                label: __1(ss[y])
            }))} placement="bottom-end" size="lg" value={status.currentTrack} variant="ghost"/></Oe>;
        t[41] = __1;
        t[42] = __2;
        t[43] = d;
        t[44] = B;
        t[45] = isPending_1;
        t[46] = j;
        t[47] = status.availableTracks;
        t[48] = status.currentTrack;
        t[49] = status.isTrackManagedByPolicy;
        t[50] = E;
        t[51] = I;
    } else {
        I = t[51];
    }
    let n;
    if (t[52] !== __2 || t[53] !== failure_1 || t[54] !== isPending_2 || t[55] !== B || t[56] !== j || t[57] !== setAutoUpdateWhenIdle || t[58] !== status.autoUpdateWhenIdle) {
        n = B ? null : <Oe anchorId="automatic-updates" description={failure_1 != null ? __2({
            id: "QqKsGg"
        }) : __2({
            id: "4vprnG"
        })} variant="card"><H_1 isChecked={status.autoUpdateWhenIdle} isDisabled={j || isPending_2} label={__2({
            id: "VmXinp"
        })} onToggle={()=>setAutoUpdateWhenIdle(!status.autoUpdateWhenIdle)} size="md"/></Oe>;
        t[52] = __2;
        t[53] = failure_1;
        t[54] = isPending_2;
        t[55] = B;
        t[56] = j;
        t[57] = setAutoUpdateWhenIdle;
        t[58] = status.autoUpdateWhenIdle;
        t[59] = n;
    } else {
        n = t[59];
    }
    let r;
    if (t[60] !== __2) {
        r = __2({
            id: "tMuUgT"
        });
        t[60] = __2;
        t[61] = r;
    } else {
        r = t[61];
    }
    let copyText;
    if (t[62] !== r || t[63] !== status_currentVersion) {
        copyText = {
            value: status_currentVersion,
            label: r
        };
        t[62] = r;
        t[63] = status_currentVersion;
        t[64] = copyText;
    } else {
        copyText = t[64];
    }
    let se;
    if (t[65] !== __1 || t[66] !== status) {
        se = ns(__1, status);
        t[65] = __1;
        t[66] = status;
        t[67] = se;
    } else {
        se = t[67];
    }
    let W;
    if (t[68] !== __2 || t[69] !== status_currentVersion) {
        W = __2({
            id: "LcLBP8",
            values: {
                version: status_currentVersion
            }
        });
        t[68] = __2;
        t[69] = status_currentVersion;
        t[70] = W;
    } else {
        W = t[70];
    }
    let labelToken;
    if (t[71] !== status_currentVersion) {
        labelToken = {
            text: status_currentVersion,
            dir: "ltr"
        };
        t[71] = status_currentVersion;
        t[72] = labelToken;
    } else {
        labelToken = t[72];
    }
    let settingName;
    if (t[73] !== __2) {
        settingName = __2({
            id: "eE0JZ4"
        });
        t[73] = __2;
        t[74] = settingName;
    } else {
        settingName = t[74];
    }
    let fe;
    if (t[75] !== quitAndInstall || t[76] !== state.canMove || t[77] !== state.type || t[78] !== state.version || t[79] !== updatePrompt) {
        fe = state.type === "move-required" && state.canMove ? <Be onClick={()=>{
            updatePrompt.reportAction({
                surface: "settings",
                action: "clicked",
                kind: "error",
                targetVersion: state.version
            });
            quitAndInstall(state.version);
        }} sentiment="accent" size="md" style={a_.body2} type="button" variant="primary"><T_1 id="WfbkKQ"/></Be> : null;
        t[75] = quitAndInstall;
        t[76] = state.canMove;
        t[77] = state.type;
        t[78] = state.version;
        t[79] = updatePrompt;
        t[80] = fe;
    } else {
        fe = t[80];
    }
    let G;
    if (t[81] !== quitAndInstall || t[82] !== state.type || t[83] !== state.version || t[84] !== updatePrompt) {
        G = state.type === "ready" ? <Be onClick={()=>{
            updatePrompt.reportAction({
                surface: "settings",
                action: "clicked",
                kind: "ready",
                targetVersion: state.version
            });
            quitAndInstall(state.version);
        }} sentiment="accent" size="md" style={a_.body2} type="button" variant="primary"><T_1 id="Cy8PUD"/></Be> : null;
        t[81] = quitAndInstall;
        t[82] = state.type;
        t[83] = state.version;
        t[84] = updatePrompt;
        t[85] = G;
    } else {
        G = t[85];
    }
    let K;
    if (t[86] !== __2 || t[87] !== check || t[88] !== L || t[89] !== isPending || t[90] !== j || t[91] !== state.type || t[92] !== w.tone || t[93] !== updatePrompt) {
        K = state.type === "ready" || state.type === "move-required" ? null : <Be disabled={j || L} onClick={()=>{
            updatePrompt.reportAction({
                surface: "settings",
                action: "clicked",
                kind: w.tone === "error" ? "error" : "check"
            });
            check();
        }} size="md" style={[
            a_.body2,
            We.checkWeakBorder
        ]} variant="secondary">{__2(L || isPending ? {
            id: "RLe7Vk"
        } : {
            id: "ETzTLS"
        })}</Be>;
        t[86] = __2;
        t[87] = check;
        t[88] = L;
        t[89] = isPending;
        t[90] = j;
        t[91] = state.type;
        t[92] = w.tone;
        t[93] = updatePrompt;
        t[94] = K;
    } else {
        K = t[94];
    }
    let H;
    if (t[95] !== copyText || t[96] !== se || t[97] !== W || t[98] !== labelToken || t[99] !== settingName || t[100] !== fe || t[101] !== G || t[102] !== K || t[103] !== U) {
        H = <Oe anchorId="update-status" copyText={copyText} description={se} extraCopy={U} label={W} labelToken={labelToken} settingName={settingName} variant="card">{fe}{G}{K}</Oe>;
        t[95] = copyText;
        t[96] = se;
        t[97] = W;
        t[98] = labelToken;
        t[99] = settingName;
        t[100] = fe;
        t[101] = G;
        t[102] = K;
        t[103] = U;
        t[104] = H;
    } else {
        H = t[104];
    }
    let oe;
    if (t[105] !== H || t[106] !== D || t[107] !== I || t[108] !== n) {
        oe = <G_1 title={D}>{I}{n}{H}</G_1>;
        t[105] = H;
        t[106] = D;
        t[107] = I;
        t[108] = n;
        t[109] = oe;
    } else {
        oe = t[109];
    }
    return oe;
}
const Ie = {
    confirmArmed: {
        kB7OPa: "sand-9f619",
        kMwMTN: "sand-1jh5svw",
        kWkggS: "sand-1mrk0n1",
        $$css: true
    },
    settingsConfirmAction: {
        kB7OPa: "sand-9f619",
        kjj79g: "sand-l56j7k",
        $$css: true
    },
    updateWeakBorder: {
        kGVxlE: "sand-lkpa4b",
        $$css: true
    }
};
function ls(t) {
    const e = t.closest('[role="dialog"]') ?? document.documentElement;
    const s = (a)=>{
        if (a.target !== t) {
            t.removeAttribute("tabindex");
            e.removeEventListener("focusin", s);
        }
    };
    t.tabIndex = -1;
    e.addEventListener("focusin", s);
    t.focus({
        preventScroll: true
    });
}
function XeComponent(t) {
    XeComponent.d = 1268;
    const e = c_1.c(18);
    const { isPending, idleLabel, pendingLabel, disabled, onConfirm } = t;
    const c = disabled === undefined ? false : disabled;
    const { _: __1 } = u();
    const [g, setG] = r_1.useState(false);
    const bRef = r_1.useRef(null);
    let _;
    if (e[0] !== c || e[1] !== g || e[2] !== isPending || e[3] !== onConfirm) {
        _ = ()=>{
            if (!(isPending || c)) {
                if (!g) {
                    bRef.current?.dispose();
                    const B = c_2({
                        name: "settings-confirm-arm",
                        delayMs: 3000
                    }).wrap(()=>{
                        bRef.current = null;
                        setG(false);
                    });
                    bRef.current = B;
                    B();
                    setG(true);
                    return;
                }
                bRef.current?.dispose();
                bRef.current = null;
                setG(false);
                onConfirm();
            }
        };
        e[0] = c;
        e[1] = g;
        e[2] = isPending;
        e[3] = onConfirm;
        e[4] = _;
    } else {
        _ = e[4];
    }
    const T = _;
    const S = g && !isPending && !c;
    let f = idleLabel;
    let t_ariaLabel = t.ariaLabel;
    if (isPending && pendingLabel != null) {
        f = pendingLabel;
    } else if (S) {
        let B;
        if (e[5] !== __1 || e[6] !== t.ariaLabel) {
            const L = __1({
                id: "Wi5nD5"
            });
            f = L;
            B = __1({
                id: "5OJby0",
                values: {
                    0: t.ariaLabel,
                    title: L
                }
            });
            e[5] = __1;
            e[6] = t.ariaLabel;
            e[7] = B;
            e[8] = f;
        } else {
            B = e[7];
            f = e[8];
        }
        t_ariaLabel = B;
    }
    const N = S || undefined;
    const P = isPending || c;
    const R = S && Ie.confirmArmed;
    let h;
    if (e[9] !== R) {
        h = [
            a_.body2,
            Ie.settingsConfirmAction,
            Ie.updateWeakBorder,
            R
        ];
        e[9] = R;
        e[10] = h;
    } else {
        h = e[10];
    }
    let j;
    if (e[11] !== t_ariaLabel || e[12] !== T || e[13] !== f || e[14] !== N || e[15] !== P || e[16] !== h) {
        j = <Be aria-label={t_ariaLabel} className="sand-settings-reset" data-confirming={N} disabled={P} onClick={T} size="md" style={h} variant="secondary">{f}</Be>;
        e[11] = t_ariaLabel;
        e[12] = T;
        e[13] = f;
        e[14] = N;
        e[15] = P;
        e[16] = h;
        e[17] = j;
    } else {
        j = e[17];
    }
    return j;
}
const as = {
    id: "oxmHsP"
};
const ds = {
    id: "GUemL5"
};
const os = {
    id: "cugI1r"
};
const cs = {
    id: "nlDFDE"
};
const rs = {
    id: "xW0Otx"
};
function Rt1Component(t) {
    Rt1Component.d = 1271;
    const e = c_1.c(12);
    const { action } = t;
    const { i18n } = u();
    let o;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = r_2("sand-settings-uptodate-banner", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1qughib sand-1oot3zn sand-13ly8rp sand-196pc8s sand-1xlntvz sand-8fiw5y sand-1m7fhj7 sand-1ww4gz9 sand-1lel89o");
        e[0] = o;
    } else {
        o = e[0];
    }
    let l;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-pkkfsy sand-euugli sand-n3e42v"
        };
        e[1] = l;
    } else {
        l = e[1];
    }
    const l_className = l.className;
    let c;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        c = <W aria-hidden name="check-circle" size={14}/>;
        e[2] = c;
    } else {
        c = e[2];
    }
    let p;
    if (e[3] !== i18n) {
        p = i18n._(as);
        e[3] = i18n;
        e[4] = p;
    } else {
        p = e[4];
    }
    let g;
    if (e[5] !== p) {
        g = <div className={l_className}>{c}<De1 as="span" size="md">{p}</De1></div>;
        e[5] = p;
        e[6] = g;
    } else {
        g = e[6];
    }
    let x;
    if (e[7] !== action) {
        x = action != null ? <div className="sand-9f619 sand-78zum5 sand-2lah0s sand-6s0dn4">{action}</div> : null;
        e[7] = action;
        e[8] = x;
    } else {
        x = e[8];
    }
    let b;
    if (e[9] !== g || e[10] !== x) {
        b = <div className={o} role="status">{g}{x}</div>;
        e[9] = g;
        e[10] = x;
        e[11] = b;
    } else {
        b = e[11];
    }
    return b;
}
function Ut1Component(t) {
    Ut1Component.d = 1269;
    const e = c_1.c(4);
    const isSchedulingEnabled = g9();
    const a = isSchedulingEnabled ? "scheduled-updates-on" : "scheduled-updates-off";
    let o;
    if (e[0] !== isSchedulingEnabled || e[1] !== t || e[2] !== a) {
        o = <Ft1Component {...t} isSchedulingEnabled={isSchedulingEnabled} key={a}/>;
        e[0] = isSchedulingEnabled;
        e[1] = t;
        e[2] = a;
        e[3] = o;
    } else {
        o = e[3];
    }
    return o;
}
function Ft1Component(t) {
    Ft1Component.d = 1270;
    const e = c_1.c(139);
    const { isUpdateBoxPending, isResetBoxPending, canUpdateBaseline, canUpdateBox, canResetBox, isRebuildBlocked, isBoxUpToDate, isDevBuild, busyOneClickEnabled, workingAgentNames, onUpdateBox, onResetBox, isSchedulingEnabled } = t;
    const { i18n, _: __1 } = u();
    let N;
    if (e[0] !== canUpdateBaseline || e[1] !== canUpdateBox || e[2] !== isBoxUpToDate) {
        N = Xt({
            canUpdateBaseline,
            canUpdateBox,
            isBoxUpToDate
        });
        e[0] = canUpdateBaseline;
        e[1] = canUpdateBox;
        e[2] = isBoxUpToDate;
        e[3] = N;
    } else {
        N = e[3];
    }
    const P = N;
    const R = bl();
    const status_1 = bY(R == null || R.isGroup ? null : R.id).status;
    let j;
    if (e[4] !== status_1) {
        j = ga(status_1);
        e[4] = status_1;
        e[5] = j;
    } else {
        j = e[5];
    }
    const B = j === "host";
    let L;
    if (e[6] !== i18n || e[7] !== B) {
        L = i18n._(B ? rs : cs);
        e[6] = i18n;
        e[7] = B;
        e[8] = L;
    } else {
        L = e[8];
    }
    const te = L;
    const w = P === "up-to-date" && !isRebuildBlocked;
    ba(w ? "update-computer" : null);
    const { status, isLoading } = gb();
    const E = status?.schedule ?? null;
    let O;
    if (e[9] !== isSchedulingEnabled || e[10] !== E) {
        O = isSchedulingEnabled && gc(E) ? E : null;
        e[9] = isSchedulingEnabled;
        e[10] = E;
        e[11] = O;
    } else {
        O = e[11];
    }
    const schedule = O;
    const [A, setA] = r_1.useState(null);
    const [D, setD] = r_1.useState(0);
    const nRef = r_1.useRef(0);
    const rRef = r_1.useRef(null);
    let $;
    if (e[12] !== D || e[13] !== isUpdateBoxPending) {
        $ = ()=>{
            if (nRef.current === D) {
                return;
            }
            nRef.current = D;
            const u = document.querySelector(":focus:enabled") == null;
            const q = isUpdateBoxPending && u ? rRef.current : null;
            if (q != null) {
                ls(q);
            }
        };
        e[12] = D;
        e[13] = isUpdateBoxPending;
        e[14] = $;
    } else {
        $ = e[14];
    }
    u_1($);
    let se;
    if (e[15] !== onUpdateBox) {
        se = ()=>{
            setD(us);
            onUpdateBox();
        };
        e[15] = onUpdateBox;
        e[16] = se;
    } else {
        se = e[16];
    }
    const W = se;
    const X = cq();
    const { computerRebuild, roster } = b7();
    let G;
    if (e[17] !== computerRebuild) {
        G = ()=>computerRebuild.actionsSnapshots.get();
        e[17] = computerRebuild;
        e[18] = G;
    } else {
        G = e[18];
    }
    const readSnapshot = G;
    const H = gd(dc());
    const oe = P === "ready" || P === "busy" && busyOneClickEnabled;
    const updateNowEnabled = isSchedulingEnabled && oe && !isLoading && !isRebuildBlocked && !isUpdateBoxPending && !isResetBoxPending;
    let ne;
    if (e[19] !== X || e[20] !== onResetBox || e[21] !== readSnapshot || e[22] !== workingAgentNames) {
        ne = async ()=>{
            await X(es({
                request: Kt({
                    workingAgentNames
                }),
                action: "reset",
                readSnapshot,
                run: onResetBox
            }));
        };
        e[19] = X;
        e[20] = onResetBox;
        e[21] = readSnapshot;
        e[22] = workingAgentNames;
        e[23] = ne;
    } else {
        ne = e[23];
    }
    const le = ne;
    let z = null;
    if (schedule != null) {
        let u;
        e: switch(schedule.state){
            case "claimed":
            case "running":
                {
                    let v;
                    if (e[24] !== __1) {
                        v = __1({
                            id: "WpIfiI"
                        });
                        e[24] = __1;
                        e[25] = v;
                    } else {
                        v = e[25];
                    }
                    u = v;
                    break e;
                }
            case "waiting-for-image":
                {
                    let v;
                    if (e[26] !== __1 || e[27] !== schedule.localTime || e[28] !== schedule.timeZone) {
                        v = __1({
                            id: "GeqnJ+",
                            values: {
                                0: schedule.localTime,
                                1: schedule.timeZone
                            }
                        });
                        e[26] = __1;
                        e[27] = schedule.localTime;
                        e[28] = schedule.timeZone;
                        e[29] = v;
                    } else {
                        v = e[29];
                    }
                    u = v;
                    break e;
                }
            case "failed":
                {
                    let v;
                    if (e[30] !== __1) {
                        v = __1({
                            id: "nXINc7"
                        });
                        e[30] = __1;
                        e[31] = v;
                    } else {
                        v = e[31];
                    }
                    u = v;
                    break e;
                }
            case "missed":
                {
                    let v;
                    if (e[32] !== __1) {
                        v = __1({
                            id: "lH1YVA"
                        });
                        e[32] = __1;
                        e[33] = v;
                    } else {
                        v = e[33];
                    }
                    u = v;
                    break e;
                }
            default:
                {
                    let v;
                    if (e[34] !== __1 || e[35] !== schedule.localTime || e[36] !== schedule.timeZone) {
                        v = __1({
                            id: "PcoPji",
                            values: {
                                0: schedule.localTime,
                                1: schedule.timeZone
                            }
                        });
                        e[34] = __1;
                        e[35] = schedule.localTime;
                        e[36] = schedule.timeZone;
                        e[37] = v;
                    } else {
                        v = e[37];
                    }
                    u = v;
                }
        }
        let q;
        if (e[38] !== u) {
            q = <S_1>{u}</S_1>;
            e[38] = u;
            e[39] = q;
        } else {
            q = e[39];
        }
        z = q;
    }
    let Q = z;
    if (z == null && isRebuildBlocked) {
        let u;
        if (e[40] === Symbol.for("react.memo_cache_sentinel")) {
            u = <S_1><T_1 id="OY2DWP"/></S_1>;
            e[40] = u;
        } else {
            u = e[40];
        }
        Q = u;
    } else if (z == null && P === "busy") {
        let u;
        if (e[41] !== busyOneClickEnabled || e[42] !== i18n) {
            u = i18n._(busyOneClickEnabled ? ds : os);
            e[41] = busyOneClickEnabled;
            e[42] = i18n;
            e[43] = u;
        } else {
            u = e[43];
        }
        let q;
        if (e[44] !== u) {
            q = <S_1>{u}</S_1>;
            e[44] = u;
            e[45] = q;
        } else {
            q = e[45];
        }
        Q = q;
    }
    let V;
    if (e[46] !== __1) {
        V = __1({
            id: "4ba0NE"
        });
        e[46] = __1;
        e[47] = V;
    } else {
        V = e[47];
    }
    let Z = V;
    if (schedule?.state === "waiting-for-image") {
        let u;
        if (e[48] !== __1) {
            u = __1({
                id: "WohNLi"
            });
            e[48] = __1;
            e[49] = u;
        } else {
            u = e[49];
        }
        Z = u;
    } else if (schedule?.state === "claimed" || schedule?.state === "running") {
        let u;
        if (e[50] !== __1) {
            u = __1({
                id: "Jqe+Dc"
            });
            e[50] = __1;
            e[51] = u;
        } else {
            u = e[51];
        }
        Z = u;
    } else if (schedule?.state === "failed" || schedule?.state === "missed") {
        let u;
        if (e[52] !== __1) {
            u = __1({
                id: "JheHpd"
            });
            e[52] = __1;
            e[53] = u;
        } else {
            u = e[53];
        }
        Z = u;
    }
    let ee;
    if (e[54] !== schedule || e[55] !== Z) {
        ee = schedule == null ? null : <Be className="sand-settings-manage-computer-update-schedule" onClick={()=>setA({
                kind: "scheduled"
            })} size="md" style={a_.body2} type="button" variant="secondary">{Z}</Be>;
        e[54] = schedule;
        e[55] = Z;
        e[56] = ee;
    } else {
        ee = e[56];
    }
    const me = ee;
    let xe;
    if (e[57] !== __1 || e[58] !== isDevBuild || e[59] !== isRebuildBlocked || e[60] !== isResetBoxPending || e[61] !== isUpdateBoxPending || e[62] !== me || e[63] !== onUpdateBox) {
        xe = me ?? (isDevBuild ? <Be className="sand-settings-force-refresh" disabled={isRebuildBlocked || isUpdateBoxPending || isResetBoxPending} onClick={()=>onUpdateBox()} size="md" style={a_.body2} title={__1({
            id: "yT3Jyn"
        })} type="button" variant="secondary"><D_1><T_1 id="FXpklv"/></D_1></Be> : null);
        e[57] = __1;
        e[58] = isDevBuild;
        e[59] = isRebuildBlocked;
        e[60] = isResetBoxPending;
        e[61] = isUpdateBoxPending;
        e[62] = me;
        e[63] = onUpdateBox;
        e[64] = xe;
    } else {
        xe = e[64];
    }
    const action = xe;
    let ae;
    if (me != null && !B) {
        ae = me;
    } else if (isSchedulingEnabled && oe && !B) {
        let u;
        if (e[65] !== __1) {
            u = __1({
                id: "nnJerG"
            });
            e[65] = __1;
            e[66] = u;
        } else {
            u = e[66];
        }
        const q = !updateNowEnabled;
        let v;
        if (e[67] === Symbol.for("react.memo_cache_sentinel")) {
            v = ()=>setA({
                    kind: "choice"
                });
            e[67] = v;
        } else {
            v = e[67];
        }
        let ye;
        if (e[68] === Symbol.for("react.memo_cache_sentinel")) {
            ye = [
                a_.body2,
                Ie.settingsConfirmAction,
                Ie.updateWeakBorder
            ];
            e[68] = ye;
        } else {
            ye = e[68];
        }
        let be;
        if (e[69] !== isUpdateBoxPending) {
            be = isUpdateBoxPending ? <T_1 id="Jqe+Dc"/> : <T_1 id="EkH9pt"/>;
            e[69] = isUpdateBoxPending;
            e[70] = be;
        } else {
            be = e[70];
        }
        let _e;
        if (e[71] !== u || e[72] !== q || e[73] !== be) {
            _e = <Be aria-label={u} className="sand-settings-reset" disabled={q} onClick={v} size="md" style={ye} variant="secondary">{be}</Be>;
            e[71] = u;
            e[72] = q;
            e[73] = be;
            e[74] = _e;
        } else {
            _e = e[74];
        }
        ae = _e;
    } else {
        let ariaLabel;
        if (e[75] !== __1) {
            ariaLabel = __1({
                id: "nnJerG"
            });
            e[75] = __1;
            e[76] = ariaLabel;
        } else {
            ariaLabel = e[76];
        }
        const q = isRebuildBlocked || !oe || isResetBoxPending;
        let idleLabel;
        if (e[77] !== __1) {
            idleLabel = __1({
                id: "EkH9pt"
            });
            e[77] = __1;
            e[78] = idleLabel;
        } else {
            idleLabel = e[78];
        }
        let pendingLabel;
        if (e[79] !== __1) {
            pendingLabel = __1({
                id: "Jqe+Dc"
            });
            e[79] = __1;
            e[80] = pendingLabel;
        } else {
            pendingLabel = e[80];
        }
        let be;
        if (e[81] !== isUpdateBoxPending || e[82] !== W || e[83] !== ariaLabel || e[84] !== q || e[85] !== idleLabel || e[86] !== pendingLabel) {
            be = <XeComponent ariaLabel={ariaLabel} disabled={q} idleLabel={idleLabel} isPending={isUpdateBoxPending} onConfirm={W} pendingLabel={pendingLabel}/>;
            e[81] = isUpdateBoxPending;
            e[82] = W;
            e[83] = ariaLabel;
            e[84] = q;
            e[85] = idleLabel;
            e[86] = pendingLabel;
            e[87] = be;
        } else {
            be = e[87];
        }
        const _e = be;
        if (P === "busy" && !busyOneClickEnabled && !isRebuildBlocked && H != null) {
            const Ze = __1({
                id: "8AXB2Z",
                values: {
                    0: H.name
                }
            });
            let qe;
            if (e[88] === Symbol.for("react.memo_cache_sentinel")) {
                qe = {
                    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-ehausa"
                };
                e[88] = qe;
            } else {
                qe = e[88];
            }
            const Ge = ()=>{
                roster.interruptAgentRun({
                    agentId: H.id
                });
            };
            let ze;
            if (e[89] !== H || e[90] !== Ze || e[91] !== Ge) {
                ze = <XeComponent key={H.id} ariaLabel={Ze} idleLabel={Ze} isPending={false} onConfirm={Ge}/>;
                e[89] = H;
                e[90] = Ze;
                e[91] = Ge;
                e[92] = ze;
            } else {
                ze = e[92];
            }
            let Me;
            if (e[93] !== ze || e[94] !== _e) {
                Me = <div {...qe}>{ze}{_e}</div>;
                e[93] = ze;
                e[94] = _e;
                e[95] = Me;
            } else {
                Me = e[95];
            }
            ae = Me;
        } else {
            ae = _e;
        }
    }
    let ge = null;
    if (isRebuildBlocked) {
        let u;
        if (e[96] === Symbol.for("react.memo_cache_sentinel")) {
            u = <S_1><T_1 id="OY2DWP"/></S_1>;
            e[96] = u;
        } else {
            u = e[96];
        }
        ge = u;
    } else if (!canResetBox) {
        let u;
        if (e[97] === Symbol.for("react.memo_cache_sentinel")) {
            u = <S_1><T_1 id="J8tdjR"/></S_1>;
            e[97] = u;
        } else {
            u = e[97];
        }
        ge = u;
    }
    let Se;
    if (e[98] !== __1) {
        Se = __1({
            id: "iXLVub"
        });
        e[98] = __1;
        e[99] = Se;
    } else {
        Se = e[99];
    }
    let ce;
    if (e[100] !== w || e[101] !== z || e[102] !== action || e[103] !== ae || e[104] !== Q || e[105] !== te) {
        ce = w ? <div className="sand-9f619 sand-78zum5 sand-dt5ytf sand-1oot3zn sand-1t8xvyj sand-1n9uuka sand-usxwy5 sand-cssynl sand-1xr8qbc sand-jodmca" id={dl("update-computer")}><div className="sand-9f619 sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli"><div className="sand-9f619 sand-78zum5 sand-6s0dn4 sand-1jnr06f sand-euugli"><De1 as="span" color="primary" size="md"><T_1 id="nnJerG"/></De1><Jt anchor="update-computer"/></div><S_1>{te}</S_1></div><Rt1Component action={action}/>{z}</div> : <Oe anchorId="update-computer" description={te} extraCopy={Q} labelFocusRef={rRef} variant="card">{ae}</Oe>;
        e[100] = w;
        e[101] = z;
        e[102] = action;
        e[103] = ae;
        e[104] = Q;
        e[105] = te;
        e[106] = ce;
    } else {
        ce = e[106];
    }
    let re;
    if (e[107] !== __1) {
        re = __1({
            id: "xJKvbI"
        });
        e[107] = __1;
        e[108] = re;
    } else {
        re = e[108];
    }
    const extraCopy = ge;
    let ue;
    if (e[109] !== __1) {
        ue = __1({
            id: "FB/gHq"
        });
        e[109] = __1;
        e[110] = ue;
    } else {
        ue = e[110];
    }
    const Re = !canResetBox || isRebuildBlocked || isUpdateBoxPending || isResetBoxPending;
    let ie;
    if (e[111] !== le) {
        ie = ()=>{
            le();
        };
        e[111] = le;
        e[112] = ie;
    } else {
        ie = e[112];
    }
    let Ue;
    if (e[113] === Symbol.for("react.memo_cache_sentinel")) {
        Ue = [
            a_.body2,
            Ie.settingsConfirmAction
        ];
        e[113] = Ue;
    } else {
        Ue = e[113];
    }
    let Ce;
    if (e[114] !== __1 || e[115] !== isResetBoxPending) {
        Ce = __1(isResetBoxPending ? {
            id: "xRPBky"
        } : {
            id: "OfhWJH"
        });
        e[114] = __1;
        e[115] = isResetBoxPending;
        e[116] = Ce;
    } else {
        Ce = e[116];
    }
    let Ne;
    if (e[117] !== ue || e[118] !== Re || e[119] !== ie || e[120] !== Ce) {
        Ne = <Be aria-label={ue} className="sand-settings-reset" disabled={Re} onClick={ie} sentiment="danger" size="md" style={Ue} type="button" variant="primary">{Ce}</Be>;
        e[117] = ue;
        e[118] = Re;
        e[119] = ie;
        e[120] = Ce;
        e[121] = Ne;
    } else {
        Ne = e[121];
    }
    let we;
    if (e[122] !== ge || e[123] !== re || e[124] !== Ne) {
        we = <Oe anchorId="reset-computer" description={re} extraCopy={extraCopy} variant="card">{Ne}</Oe>;
        e[122] = ge;
        e[123] = re;
        e[124] = Ne;
        e[125] = we;
    } else {
        we = e[125];
    }
    let Ee;
    if (e[126] !== Se || e[127] !== ce || e[128] !== we) {
        Ee = <G_1 title={Se}>{ce}{we}</G_1>;
        e[126] = Se;
        e[127] = ce;
        e[128] = we;
        e[129] = Ee;
    } else {
        Ee = e[129];
    }
    let De;
    if (e[130] !== updateNowEnabled || e[131] !== isSchedulingEnabled || e[132] !== schedule || e[133] !== W || e[134] !== A) {
        De = isSchedulingEnabled && A != null ? <At1Component onClose={()=>setA(null)} onReschedule={()=>setA({
                kind: "reschedule"
            })} onSchedule={()=>setA({
                kind: "schedule"
            })} onUpdateNow={()=>{
            if (!(A.kind !== "choice" || !updateNowEnabled)) {
                setA(null);
                W();
            }
        }} schedule={schedule} state={A} updateNowEnabled={updateNowEnabled}/> : null;
        e[130] = updateNowEnabled;
        e[131] = isSchedulingEnabled;
        e[132] = schedule;
        e[133] = W;
        e[134] = A;
        e[135] = De;
    } else {
        De = e[135];
    }
    let He;
    if (e[136] !== Ee || e[137] !== De) {
        He = <>{Ee}{De}</>;
        e[136] = Ee;
        e[137] = De;
        e[138] = He;
    } else {
        He = e[138];
    }
    return He;
}
function us(t) {
    return t + 1;
}
function Mt1Component() {
    Mt1Component.d = 1225;
    const t = c_1.c(15);
    const e = dn();
    let s;
    let a;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        s = r_2("sand-settings-updates-stack", "sand-9f619 sand-78zum5 sand-dt5ytf sand-3qzy4x");
        a = <Ct1Component/>;
        t[0] = s;
        t[1] = a;
    } else {
        s = t[0];
        a = t[1];
    }
    let o;
    if (t[2] !== e.busyOneClickEnabled || t[3] !== e.canResetBox || t[4] !== e.canUpdateBaseline || t[5] !== e.canUpdateBox || t[6] !== e.isBoxUpToDate || t[7] !== e.isDevBuild || t[8] !== e.isRebuildBlocked || t[9] !== e.isResetBoxPending || t[10] !== e.isUpdateBoxPending || t[11] !== e.onResetBox || t[12] !== e.onUpdateBox || t[13] !== e.workingAgentNames) {
        o = <S><div className={s}>{a}<Ut1Component busyOneClickEnabled={e.busyOneClickEnabled} canResetBox={e.canResetBox} canUpdateBaseline={e.canUpdateBaseline} canUpdateBox={e.canUpdateBox} isBoxUpToDate={e.isBoxUpToDate} isDevBuild={e.isDevBuild} isRebuildBlocked={e.isRebuildBlocked} isResetBoxPending={e.isResetBoxPending} isUpdateBoxPending={e.isUpdateBoxPending} onResetBox={e.onResetBox} onUpdateBox={e.onUpdateBox} workingAgentNames={e.workingAgentNames}/></div></S>;
        t[2] = e.busyOneClickEnabled;
        t[3] = e.canResetBox;
        t[4] = e.canUpdateBaseline;
        t[5] = e.canUpdateBox;
        t[6] = e.isBoxUpToDate;
        t[7] = e.isDevBuild;
        t[8] = e.isRebuildBlocked;
        t[9] = e.isResetBoxPending;
        t[10] = e.isUpdateBoxPending;
        t[11] = e.onResetBox;
        t[12] = e.onUpdateBox;
        t[13] = e.workingAgentNames;
        t[14] = o;
    } else {
        o = t[14];
    }
    return o;
}
function FsComponent(t) {
    FsComponent.d = 1226;
    const e = c_1.c(3);
    const { params } = t;
    const focus = params.focusSetting ?? null;
    let o;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        o = <Mt1Component/>;
        e[0] = o;
    } else {
        o = e[0];
    }
    let l;
    if (e[1] !== focus) {
        l = <Vt1 focus={focus}>{o}</Vt1>;
        e[1] = focus;
        e[2] = l;
    } else {
        l = e[2];
    }
    return l;
}
export { FsComponent as default };
