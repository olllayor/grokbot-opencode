import { c, u, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { W, E, br, b9, an, ah, a5 as Ze, a6 as Qe } from "./index-ZYxf-aBb.js";
import { aY as Xe, i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { bh, bt as bt_1, eG, bA, b7, c1, b9 as b9_1, eH, bT, eI, V as V_1, bB, eJ } from "./index.eager-app-Cj5f8Gby.js";
import { L as L_1 } from "./chunk-link-brand-logo-zFXjq3li.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "533e1944-fdd0-44d5-914a-1f7a3f476815";
            e._sentryDebugIdIdentifier = "sentry-dbid-533e1944-fdd0-44d5-914a-1f7a3f476815";
        }
    } catch (e) {}
})();
const fe = {
    pickerPopupHuggingRows: {
        k7Eaqz: "sand-80t9vs",
        $$css: true
    },
    pickerTrigger: {
        kZKoxP: "sand-10w6t97",
        kOIVth: "sand-167g77z",
        kLKAdn: "sand-exx8yu",
        kGO01o: "sand-18d9i69",
        kZCmMZ: "sand-1g0dm76",
        kwRFfy: "sand-2vl965",
        kaIpWk: "sand-ur7f20",
        kGuDYH: "sand-1wm8ruf",
        kLWn49: "sand-spwq11",
        $$css: true
    },
    pickerLabel: {
        kMv6JI: "sand-mpsg8l",
        kcqcaj: "sand-ss6m8b",
        $$css: true
    },
    note: {
        k7Eaqz: "sand-euugli",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    }
};
function ft(state) {
    const e = bh(state);
    if (e?.needsAuth === true) {
        return {
            kind: "needs-auth"
        };
    }
    if (e != null && e.paymentMethods.length > 0) {
        return {
            kind: "ready",
            paymentMethods: e.paymentMethods,
            unavailableCount: e.unavailableCount
        };
    }
    switch(state.status){
        case "loading":
            return {
                kind: "loading"
            };
        case "ready":
            return {
                kind: "empty",
                unavailableCount: e?.unavailableCount ?? 0
            };
        case "empty":
        case "unavailable":
        case "failed":
            return {
                kind: "failed"
            };
    }
}
function pt(s) {
    return (s.find((e)=>e.isDefault) ?? s[0])?.id;
}
function mt(s, e) {
    if (e !== undefined && s.some((c)=>c.id === e)) {
        return e;
    }
    return pt(s);
}
function kt(s, e) {
    const n = s.name.length > 0 ? s.name : e;
    if (s.last4 === undefined) {
        return n;
    }
    return `${n} ···· ${s.last4}`;
}
function ReComponent(s) {
    ReComponent.d = 578;
    const e = c.c(33);
    const { view, selectedId, onSelect, disabled, onRetry } = s;
    const { _: __1 } = u();
    if (view.kind !== "ready") {
        let i;
        if (view.kind === "loading") {
            let p;
            if (e[0] !== __1) {
                p = __1({
                    id: "QnXQSv"
                });
                e[0] = __1;
                e[1] = p;
            } else {
                p = e[1];
            }
            i = p;
        } else if (view.kind === "needs-auth") {
            let p;
            if (e[2] !== __1) {
                p = __1({
                    id: "62dBHV"
                });
                e[2] = __1;
                e[3] = p;
            } else {
                p = e[3];
            }
            i = p;
        } else if (view.kind === "empty") {
            let p;
            if (e[4] !== __1 || e[5] !== view.unavailableCount) {
                p = view.unavailableCount > 0 ? __1({
                    id: "dYQ/0d"
                }) : __1({
                    id: "4pRpF4"
                });
                e[4] = __1;
                e[5] = view.unavailableCount;
                e[6] = p;
            } else {
                p = e[6];
            }
            i = p;
        } else {
            let p;
            if (e[7] !== __1) {
                p = __1({
                    id: "QTWmrb"
                });
                e[7] = __1;
                e[8] = p;
            } else {
                p = e[8];
            }
            i = p;
        }
        let h;
        if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "sand-78zum5 sand-dt5ytf sand-1cy8zhl sand-1jnr06f sand-h8yej3 sand-euugli sand-12nagc"
            };
            e[9] = h;
        } else {
            h = e[9];
        }
        let O;
        if (e[10] !== i) {
            O = <Xe color="tertiary" rootStyle={fe.note} size="md">{i}</Xe>;
            e[10] = i;
            e[11] = O;
        } else {
            O = e[11];
        }
        let C;
        if (e[12] !== __1 || e[13] !== onRetry || e[14] !== view.kind) {
            C = view.kind === "loading" ? null : <button onClick={onRetry} type="button" className="sand-1717udv sand-c342km sand-ng3xce sand-jbqb8w sand-jb2p0i sand-1wm8ruf sand-frs9s4 sand-19aaqeu sand-7gh5u8 sand-vvdyaj sand-ujl8zx sand-1ypdohk sand-1t137rt">{__1({
                id: "KDw4GX"
            })}</button>;
            e[12] = __1;
            e[13] = onRetry;
            e[14] = view.kind;
            e[15] = C;
        } else {
            C = e[15];
        }
        let T;
        if (e[16] !== O || e[17] !== C) {
            T = <div {...h}>{O}{C}</div>;
            e[16] = O;
            e[17] = C;
            e[18] = T;
        } else {
            T = e[18];
        }
        return T;
    }
    let v;
    if (e[19] !== __1 || e[20] !== view.paymentMethods) {
        const i = __1({
            id: "kryGs+"
        });
        v = view.paymentMethods.map((h)=>({
                value: h.id,
                label: kt(h, i),
                ...h.isDefault ? {
                    labelMeta: __1({
                        id: "ovBPCi"
                    })
                } : {}
            }));
        e[19] = __1;
        e[20] = view.paymentMethods;
        e[21] = v;
    } else {
        v = e[21];
    }
    const options = v;
    let b;
    if (e[22] !== __1) {
        b = __1({
            id: "ENEPLY"
        });
        e[22] = __1;
        e[23] = b;
    } else {
        b = e[23];
    }
    let leading;
    if (e[24] === Symbol.for("react.memo_cache_sentinel")) {
        leading = <W aria-hidden name="credit-card" size="sm"/>;
        e[24] = leading;
    } else {
        leading = e[24];
    }
    let onValueChange;
    if (e[25] !== onSelect) {
        onValueChange = (i)=>{
            if (i !== null) {
                onSelect(i);
            }
        };
        e[25] = onSelect;
        e[26] = onValueChange;
    } else {
        onValueChange = e[26];
    }
    const f = selectedId ?? null;
    let N;
    if (e[27] !== disabled || e[28] !== options || e[29] !== b || e[30] !== onValueChange || e[31] !== f) {
        N = <E aria-label={b} contentStyle={fe.pickerPopupHuggingRows} disabled={disabled} labelStyle={fe.pickerLabel} leading={leading} onValueChange={onValueChange} options={options} rootStyle={fe.pickerTrigger} size="lg" value={f} variant="secondary"/>;
        e[27] = disabled;
        e[28] = options;
        e[29] = b;
        e[30] = onValueChange;
        e[31] = f;
        e[32] = N;
    } else {
        N = e[32];
    }
    return N;
}
function yt(status, e) {
    if (status !== "pending") {
        return {
            status,
            answeredHere: false,
            finishesInLink: false
        };
    }
    if (e === undefined) {
        return {
            status: "pending",
            answeredHere: false,
            finishesInLink: false
        };
    }
    if (e === "approved-in-link") {
        return {
            status: "approved",
            answeredHere: true,
            finishesInLink: true
        };
    }
    return {
        status: e,
        answeredHere: true,
        finishesInLink: false
    };
}
const vt = {
    id: "rSS2pH"
};
const bt = {
    id: "iTb4WV"
};
const Ne = {
    id: "diyr2o"
};
const Pe = {
    id: "7+ZMvO"
};
const ht = {
    id: "Py8RuH"
};
const gt = {
    id: "ncQUmz"
};
const Et = {
    id: "5RxLlA"
};
const Ct = {
    id: "UzGiVD"
};
const xt = {
    id: "cg/3Wz"
};
const je = {
    id: "WL9+S4"
};
const Te = {
    id: "hQwopa"
};
const St = {
    id: "cclgb2"
};
const Le = "grok_bot_spend_approval_passkey";
async function Nt(s, e) {
    try {
        await s.run({
            ceremonyId: e.ceremonyId,
            path: e.ceremonyPath,
            token: e.ceremonyToken,
            challengeId: e.challengeId
        });
        return {
            confirmed: true
        };
    } catch (cause) {
        return {
            confirmed: false,
            cause
        };
    }
}
function Tt(cause) {
    switch(eJ(cause)){
        case "cancelled":
        case "expired":
            return true;
        case "failed":
        case "unavailable":
        case null:
            return false;
    }
}
async function It(s) {
    if (s === null) {
        return false;
    }
    try {
        return await s();
    } catch (error) {
        bB(error);
        return false;
    }
}
const _t = [];
const Ot = /^[A-Za-z]{3}$/;
function we(amountCents, currency, locale) {
    const c = amountCents / 100;
    if (Ot.test(currency)) {
        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency.toUpperCase()
        }).format(c);
    }
    return `${c.toFixed(2)} ${currency.toUpperCase()}`;
}
function Mt(s, status) {
    switch(status){
        case "pending":
            return;
        case "approved":
            return {
                kind: "success",
                label: s({
                    id: "NxjG+h"
                })
            };
        case "denied":
            return {
                kind: "danger",
                label: s({
                    id: "ztGxi6"
                })
            };
        case "failed":
            return {
                kind: "danger",
                label: s({
                    id: "7Bj3x9"
                })
            };
        case "expired":
            return {
                kind: "muted",
                label: s({
                    id: "M1RnFv"
                })
            };
    }
}
function Pt(s, e, approval) {
    switch(e.status){
        case "pending":
            return;
        case "approved":
            if (e.answeredHere) {
                return s(e.finishesInLink ? ht : gt);
            }
            return undefined;
        case "denied":
            return s(Et);
        case "expired":
            return s(Ct);
        case "failed":
            return approval.failureReason ?? s(xt);
    }
}
function HeComponent(s) {
    HeComponent.d = 576;
    const e = c.c(127);
    const { entryId, approval, agentId } = s;
    const { i18n, _: __1 } = u();
    const { _: __2 } = u();
    const { beginSpendApproval, resolveVirtualCardApproval } = bt_1();
    const b = eG();
    const _ = br();
    const S = bA();
    const { localAnswers } = b7();
    let N;
    if (e[0] !== agentId || e[1] !== entryId) {
        N = {
            agentId,
            entryId
        };
        e[0] = agentId;
        e[1] = entryId;
        e[2] = N;
    } else {
        N = e[2];
    }
    const i = c1("virtual-card-submit", N);
    let h;
    if (e[3] !== agentId || e[4] !== entryId) {
        h = {
            agentId,
            entryId
        };
        e[3] = agentId;
        e[4] = entryId;
        e[5] = h;
    } else {
        h = e[5];
    }
    const O = c1("virtual-card", h);
    const C = yt(approval.status, O);
    const T = C.status === "pending";
    const p = i != null && i.kind !== "failed";
    const De = b9_1(Le);
    const Oe = eH();
    const pe = bT();
    const me = T && !p && Oe;
    let B;
    if (e[6] !== pe || e[7] !== me) {
        B = ()=>{
            if (me) {
                pe(Le);
            }
            return jt;
        };
        e[6] = pe;
        e[7] = me;
        e[8] = B;
    } else {
        B = e[8];
    }
    i_1(B);
    const j = T && !p && !(De && Oe) && agentId != null;
    const A = eI(T);
    const view = ft(A.state);
    let U;
    if (e[9] !== agentId || e[10] !== entryId) {
        U = {
            agentId,
            entryId
        };
        e[9] = agentId;
        e[10] = entryId;
        e[11] = U;
    } else {
        U = e[11];
    }
    const Ge = c1("virtual-card-payment-method", U);
    const x = mt(view.kind === "ready" ? view.paymentMethods : _t, Ge);
    let Y;
    if (e[12] !== entryId) {
        Y = (agentId_1)=>({
                agentId: agentId_1,
                entryId
            });
        e[12] = entryId;
        e[13] = Y;
    } else {
        Y = e[13];
    }
    const m = Y;
    let K;
    if (e[14] !== agentId || e[15] !== localAnswers || e[16] !== m) {
        K = (t)=>{
            if (agentId != null) {
                localAnswers.record("virtual-card-payment-method", m(agentId), t);
            }
        };
        e[14] = agentId;
        e[15] = localAnswers;
        e[16] = m;
        e[17] = K;
    } else {
        K = e[17];
    }
    const onSelect = K;
    let Z;
    if (e[18] !== localAnswers || e[19] !== m) {
        Z = (t, l)=>{
            localAnswers.record("virtual-card-submit", m(t), l);
        };
        e[18] = localAnswers;
        e[19] = m;
        e[20] = Z;
    } else {
        Z = e[20];
    }
    const d = Z;
    let Q;
    if (e[21] !== localAnswers || e[22] !== m) {
        Q = (t, l)=>{
            localAnswers.record("virtual-card", m(t), l);
            localAnswers.clear("virtual-card-submit", m(t));
        };
        e[21] = localAnswers;
        e[22] = m;
        e[23] = Q;
    } else {
        Q = e[23];
    }
    const I = Q;
    let X;
    if (e[24] !== approval.requestId || e[25] !== entryId || e[26] !== i18n || e[27] !== S || e[28] !== resolveVirtualCardApproval || e[29] !== x || e[30] !== d || e[31] !== I) {
        X = async (t, resolution, attestation)=>{
            const y = await resolveVirtualCardApproval({
                entryId,
                requestId: approval.requestId,
                resolution,
                agentId: t,
                ...resolution === "approved" && x !== undefined ? {
                    paymentMethodId: x
                } : {},
                ...attestation === undefined ? {} : {
                    attestation
                }
            });
            switch(y.status){
                case "unreachable":
                    d(t, {
                        kind: "failed",
                        note: i18n._(Ne)
                    });
                    return "settled";
                case "unanswered":
                    d(t, {
                        kind: "failed",
                        note: i18n._(Pe)
                    });
                    return "settled";
                case "approved":
                    if (y.approvalUrl === undefined) {
                        I(t, "approved");
                        return "settled";
                    }
                    I(t, "approved-in-link");
                    S(y.approvalUrl).catch(bB);
                    return "settled";
                case "denied":
                    I(t, y.status);
                    return "settled";
                case "needs_auth":
                    d(t, {
                        kind: "failed",
                        note: i18n._(vt)
                    });
                    return "settled";
                case "needs_enrollment":
                    return "needs_enrollment";
                case "needs_passkey":
                    d(t, {
                        kind: "failed",
                        note: i18n._(bt)
                    });
                    return "settled";
                case "failed":
                    d(t, {
                        kind: "failed",
                        note: y.message
                    });
                    return "settled";
                case "expired":
                    I(t, y.status);
                    return "settled";
            }
        };
        e[24] = approval.requestId;
        e[25] = entryId;
        e[26] = i18n;
        e[27] = S;
        e[28] = resolveVirtualCardApproval;
        e[29] = x;
        e[30] = d;
        e[31] = I;
        e[32] = X;
    } else {
        X = e[32];
    }
    const P = X;
    let J;
    if (e[33] !== approval.requestId || e[34] !== beginSpendApproval || e[35] !== entryId || e[36] !== i18n || e[37] !== localAnswers || e[38] !== b || e[39] !== P || e[40] !== x || e[41] !== d || e[42] !== I || e[43] !== m) {
        J = async (t)=>{
            d(t, {
                kind: "submitting"
            });
            const l = await beginSpendApproval({
                entryId,
                agentId: t,
                requestId: approval.requestId,
                ...x === undefined ? {} : {
                    paymentMethodId: x
                }
            });
            switch(l.status){
                case "unreachable":
                    d(t, {
                        kind: "failed",
                        note: i18n._(Ne)
                    });
                    return "settled";
                case "unanswered":
                    d(t, {
                        kind: "failed",
                        note: i18n._(Pe)
                    });
                    return "settled";
                case "expired":
                    I(t, l.status);
                    return "settled";
                case "needs_enrollment":
                    return "needs_enrollment";
                case "not_required":
                    return await P(t, "approved", undefined);
                case "challenge":
                    {
                        d(t, {
                            kind: "confirming",
                            ceremonyId: l.ceremonyId
                        });
                        const k = await Nt(b, l);
                        const y = localAnswers.get("virtual-card-submit", m(t));
                        if (y?.kind === "cancelling" && y.ceremonyId === l.ceremonyId) {
                            d(t, {
                                kind: "failed",
                                note: i18n._(je)
                            });
                            return "settled";
                        }
                        if (k.confirmed) {
                            d(t, {
                                kind: "submitting"
                            });
                            return await P(t, "approved", {
                                challengeId: l.challengeId
                            });
                        }
                        if (!Tt(k.cause)) {
                            bB(k.cause);
                        }
                        d(t, {
                            kind: "failed",
                            note: i18n._(je)
                        });
                        return "settled";
                    }
            }
        };
        e[33] = approval.requestId;
        e[34] = beginSpendApproval;
        e[35] = entryId;
        e[36] = i18n;
        e[37] = localAnswers;
        e[38] = b;
        e[39] = P;
        e[40] = x;
        e[41] = d;
        e[42] = I;
        e[43] = m;
        e[44] = J;
    } else {
        J = e[44];
    }
    const ee = J;
    let te;
    if (e[45] !== ee || e[46] !== i18n || e[47] !== _ || e[48] !== d) {
        te = async (t)=>{
            if (await ee(t) !== "settled") {
                if (!await It(_)) {
                    d(t, {
                        kind: "failed",
                        note: i18n._(Te)
                    });
                    return;
                }
                if (await ee(t) === "needs_enrollment") {
                    d(t, {
                        kind: "failed",
                        note: i18n._(Te)
                    });
                }
            }
        };
        e[45] = ee;
        e[46] = i18n;
        e[47] = _;
        e[48] = d;
        e[49] = te;
    } else {
        te = e[49];
    }
    const ye = te;
    let ne;
    if (e[50] !== i18n || e[51] !== P || e[52] !== d) {
        ne = async (t)=>{
            d(t, {
                kind: "submitting"
            });
            if (await P(t, "denied", undefined) === "needs_enrollment") {
                d(t, {
                    kind: "failed",
                    note: i18n._(Te)
                });
            }
        };
        e[50] = i18n;
        e[51] = P;
        e[52] = d;
        e[53] = ne;
    } else {
        ne = e[53];
    }
    const ve = ne;
    let se;
    if (e[54] !== agentId || e[55] !== ye || e[56] !== j || e[57] !== ve || e[58] !== i18n || e[59] !== localAnswers || e[60] !== d || e[61] !== m) {
        se = (t)=>{
            if (!j || agentId == null) {
                return;
            }
            const l = agentId;
            if (localAnswers.get("virtual-card", m(l)) != null) {
                return;
            }
            const k = localAnswers.get("virtual-card-submit", m(l));
            if (!(k != null && k.kind !== "failed")) {
                (t === "approved" ? ye(l) : ve(l)).catch((y)=>{
                    bB(y);
                    if (localAnswers.get("virtual-card", m(l)) == null) {
                        d(l, {
                            kind: "failed",
                            note: i18n._(Ne)
                        });
                    }
                });
            }
        };
        e[54] = agentId;
        e[55] = ye;
        e[56] = j;
        e[57] = ve;
        e[58] = i18n;
        e[59] = localAnswers;
        e[60] = d;
        e[61] = m;
        e[62] = se;
    } else {
        se = e[62];
    }
    const L = se;
    let ae;
    if (e[63] !== agentId || e[64] !== b || e[65] !== d || e[66] !== i) {
        ae = ()=>{
            if (!(i?.kind !== "confirming" || agentId == null)) {
                d(agentId, {
                    kind: "cancelling",
                    ceremonyId: i.ceremonyId
                });
                b.cancel(i.ceremonyId).catch(bB);
            }
        };
        e[63] = agentId;
        e[64] = b;
        e[65] = d;
        e[66] = i;
        e[67] = ae;
    } else {
        ae = e[67];
    }
    const be = ae;
    const amount = we(approval.amountCents, approval.currency, i18n.locale);
    const ie = Mt(__2, C.status);
    const approval_title = approval.title;
    const settledNote = Pt(__2, C, approval);
    const Fe = C.status === "pending" || C.status === "approved";
    let re;
    if (e[68] === Symbol.for("react.memo_cache_sentinel")) {
        re = [];
        e[68] = re;
    } else {
        re = e[68];
    }
    let z = re;
    if (i?.kind === "confirming" || i?.kind === "cancelling") {
        let t;
        if (e[69] !== __1) {
            t = __1({
                id: "dEgA5A"
            });
            e[69] = __1;
            e[70] = t;
        } else {
            t = e[70];
        }
        const l = i.kind === "cancelling";
        let k;
        if (e[71] !== be || e[72] !== t || e[73] !== l) {
            k = [
                {
                    label: t,
                    onClick: be,
                    disabled: l
                }
            ];
            e[71] = be;
            e[72] = t;
            e[73] = l;
            e[74] = k;
        } else {
            k = e[74];
        }
        z = k;
    } else if (T) {
        let t;
        if (e[75] !== __1) {
            t = __1({
                id: "Z7ZXbT"
            });
            e[75] = __1;
            e[76] = t;
        } else {
            t = e[76];
        }
        let l;
        if (e[77] !== L) {
            l = ()=>L("approved");
            e[77] = L;
            e[78] = l;
        } else {
            l = e[78];
        }
        const k = !j;
        let y;
        if (e[79] !== t || e[80] !== l || e[81] !== k) {
            y = {
                label: t,
                onClick: l,
                disabled: k,
                variant: "primary"
            };
            e[79] = t;
            e[80] = l;
            e[81] = k;
            e[82] = y;
        } else {
            y = e[82];
        }
        let F;
        if (e[83] !== __1) {
            F = __1({
                id: "cFCKYZ"
            });
            e[83] = __1;
            e[84] = F;
        } else {
            F = e[84];
        }
        let $;
        if (e[85] !== L) {
            $ = ()=>L("denied");
            e[85] = L;
            e[86] = $;
        } else {
            $ = e[86];
        }
        const xe = !j;
        let q;
        if (e[87] !== F || e[88] !== $ || e[89] !== xe) {
            q = {
                label: F,
                onClick: $,
                disabled: xe
            };
            e[87] = F;
            e[88] = $;
            e[89] = xe;
            e[90] = q;
        } else {
            q = e[90];
        }
        let ue;
        if (e[91] !== y || e[92] !== q) {
            ue = [
                y,
                q
            ];
            e[91] = y;
            e[92] = q;
            e[93] = ue;
        } else {
            ue = e[93];
        }
        z = ue;
    }
    const he = !j;
    let de;
    if (e[94] !== onSelect || e[95] !== x || e[96] !== he || e[97] !== A.refresh || e[98] !== view) {
        de = <ReComponent disabled={he} onRetry={A.refresh} onSelect={onSelect} selectedId={x} view={view}/>;
        e[94] = onSelect;
        e[95] = x;
        e[96] = he;
        e[97] = A.refresh;
        e[98] = view;
        e[99] = de;
    } else {
        de = e[99];
    }
    const oe = de;
    const Ge1 = b9;
    const actions = z;
    let ariaLabel;
    if (e[100] !== __1) {
        ariaLabel = __1({
            id: "K1m9nw"
        });
        e[100] = __1;
        e[101] = ariaLabel;
    } else {
        ariaLabel = e[101];
    }
    let R;
    if (e[102] !== oe || e[103] !== view.kind) {
        R = view.kind === "ready" ? {
            actionsTrailing: oe
        } : {
            body: oe
        };
        e[102] = oe;
        e[103] = view.kind;
        e[104] = R;
    } else {
        R = e[104];
    }
    const Ee = Fe ? {
        breakdown: {
            rows: approval.lineItems.map((t)=>({
                    label: t.label,
                    amount: we(t.amountCents, approval.currency, i18n.locale)
                })),
            total: {
                label: __1({
                    id: "72c5Qo"
                }),
                amount
            },
            note: <T_1 id="lRHAS0" components={{
                0: <L_1 heightPx={14}/>,
                1: <V_1/>
            }}/>
        }
    } : {};
    const approval_context = approval.context;
    let H;
    if (e[105] !== i) {
        H = i?.kind === "failed" ? {
            failureNote: i.note
        } : {};
        e[105] = i;
        e[106] = H;
    } else {
        H = e[106];
    }
    let D;
    if (e[107] !== __2 || e[108] !== i?.kind) {
        D = i?.kind === "confirming" || i?.kind === "cancelling" ? {
            answeredNote: __2(St)
        } : {};
        e[107] = __2;
        e[108] = i?.kind;
        e[109] = D;
    } else {
        D = e[109];
    }
    let G;
    if (e[110] !== ie) {
        G = ie === undefined ? {} : {
            status: ie
        };
        e[110] = ie;
        e[111] = G;
    } else {
        G = e[111];
    }
    let V;
    if (e[112] !== settledNote) {
        V = settledNote === undefined ? {} : {
            settledNote
        };
        e[112] = settledNote;
        e[113] = V;
    } else {
        V = e[113];
    }
    const title = __1({
        id: "HcL6sP",
        values: {
            purchase: approval_title,
            amount
        }
    });
    let ce;
    if (e[114] !== Ge1 || e[115] !== z || e[116] !== approval.context || e[117] !== entryId || e[118] !== ariaLabel || e[119] !== R || e[120] !== Ee || e[121] !== H || e[122] !== D || e[123] !== G || e[124] !== V || e[125] !== title) {
        ce = <Ge1 actions={actions} ariaLabel={ariaLabel} {...R} {...Ee} context={approval_context} entryId={entryId} {...H} {...D} {...G} {...V} title={title}/>;
        e[114] = Ge1;
        e[115] = z;
        e[116] = approval.context;
        e[117] = entryId;
        e[118] = ariaLabel;
        e[119] = R;
        e[120] = Ee;
        e[121] = H;
        e[122] = D;
        e[123] = G;
        e[124] = V;
        e[125] = title;
        e[126] = ce;
    } else {
        ce = e[126];
    }
    return ce;
}
function jt() {}
function LtComponent(s) {
    LtComponent.d = 359;
    const e = c.c(11);
    const { entry, adjacency } = s;
    const o = an();
    const { isReadOnly } = ah();
    const u = isReadOnly ? undefined : o ?? undefined;
    let a;
    if (e[0] !== entry.id || e[1] !== entry.message.approval || e[2] !== u) {
        a = <HeComponent agentId={u} approval={entry.message.approval} entryId={entry.id}/>;
        e[0] = entry.id;
        e[1] = entry.message.approval;
        e[2] = u;
        e[3] = a;
    } else {
        a = e[3];
    }
    let v;
    if (e[4] !== adjacency.isGroupStart || e[5] !== entry.timestampMs || e[6] !== a) {
        v = <Ze isGroupStart={adjacency.isGroupStart} timestampMs={entry.timestampMs} variant="widget">{a}</Ze>;
        e[4] = adjacency.isGroupStart;
        e[5] = entry.timestampMs;
        e[6] = a;
        e[7] = v;
    } else {
        v = e[7];
    }
    let E;
    if (e[8] !== entry || e[9] !== v) {
        E = <Qe entry={entry}>{v}</Qe>;
        e[8] = entry;
        e[9] = v;
        e[10] = E;
    } else {
        E = e[10];
    }
    return E;
}
export { LtComponent as default };
