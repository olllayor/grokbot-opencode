import { c as c_1, u, r as r_1, j, p as p_1, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bo, bp, bq, Z, b0 as Me, br, bs, bt, b7, b9, n as Ke, m as Fe, k as Oe, bu, j as Ve, p as Pe } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { k as Pe1, j as j_2, Z as Z_2, h as Ye, z as Te, a4 as Ee, p as Et, I, i as St } from "./index-ZYxf-aBb.js";
import { C as C_1, c as c_2 } from "./chunk-card-field-BW4hZ8b8.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "5df76e07-823a-4dad-a7a5-87706b19349a";
            e._sentryDebugIdIdentifier = "sentry-dbid-5df76e07-823a-4dad-a7a5-87706b19349a";
        }
    } catch (e) {}
})();
function qe(i) {
    return !!(i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement || i instanceof HTMLElement && i.isContentEditable);
}
function de(i) {
    return String.fromCharCode(65 + i);
}
function F(i) {
    return i.value ?? i.label;
}
function We(i, e) {
    const n = new Set(i);
    if (n.has(e)) {
        n.delete(e);
    } else {
        n.add(e);
    }
    return n;
}
const p = {
    widget: {
        kKVMdj: "sand-jocqv1 sand-n4un0z",
        k44tkh: "sand-zsfktn sand-4csvff",
        kyAemX: "sand-1lfcbla sand-w5ffez",
        kWV6AL: "sand-skzprw",
        k3aq6I: "sand-uupxpy",
        $$css: true
    },
    dismiss: {
        kzqmXN: "sand-w4jnvo",
        kZKoxP: "sand-1qx5ct2",
        $$css: true
    },
    dismissedInk: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    optionKey: {
        kWkggS: "sand-luhinc",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    settledKey: {
        kSiTet: "sand-ti2d7y",
        $$css: true
    },
    settledText: {
        kMwMTN: "sand-1ybxsvs",
        $$css: true
    },
    settledTextFlat: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    skippedInk: {
        kMwMTN: "sand-1e4uaio",
        $$css: true
    },
    multiSettledRawText: {
        khDVqt: "sand-126k92a",
        $$css: true
    },
    customSubmit: {
        kmuXW: "sand-2lah0s",
        kKVMdj: "sand-1l2fjsv",
        k44tkh: "sand-1au7bnr sand-1u6grsq",
        kyAemX: "sand-1lfcbla",
        kWV6AL: "sand-skzprw",
        $$css: true
    },
    customField: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        kCS8Yb: "sand-1r8uery",
        $$css: true
    },
    customInput: {
        kOwNse: "sand-5f5z56",
        khDVqt: "sand-126k92a",
        kHjlTd: "sand-j0a0fe",
        kHenm0: "sand-tt52l0",
        kORKVm: "sand-10wlt62",
        $$css: true
    }
};
function EComponent() {
    EComponent.d = 582;
    const i = c_1.c(6);
    const { _ } = u();
    let n;
    if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1o0liin"
        };
        i[0] = n;
    } else {
        n = i[0];
    }
    let l;
    if (i[1] !== _) {
        l = _({
            id: "ylXj1N"
        });
        i[1] = _;
        i[2] = l;
    } else {
        l = i[2];
    }
    let K;
    if (i[3] === Symbol.for("react.memo_cache_sentinel")) {
        K = <I aria-hidden name="check" size="md"/>;
        i[3] = K;
    } else {
        K = i[3];
    }
    let f;
    if (i[4] !== l) {
        f = <span {...n} title={l}>{K}</span>;
        i[4] = l;
        i[5] = f;
    } else {
        f = i[5];
    }
    return f;
}
function LtComponent(i) {
    LtComponent.d = 581;
    const e = c_1.c(110);
    const { entryId, widget, isKeyboardTarget, agentId, isReadOnly, surface, onChoose, headerTrailing } = i;
    const S = isKeyboardTarget === undefined ? false : isKeyboardTarget;
    const disabled = isReadOnly === undefined ? false : isReadOnly;
    const I = surface === undefined ? "bubble" : surface;
    const C = headerTrailing === undefined ? null : headerTrailing;
    const { i18n, _: __1 } = u();
    const { respondToWidget, dismissWidget } = bt();
    const { localAnswers } = b7();
    const T = b9("sand_grok_main_agent");
    const $ = Z_2()?.replaceMainAgent;
    let L;
    if (e[0] !== agentId || e[1] !== entryId) {
        L = agentId == null ? null : {
            agentId,
            entryId
        };
        e[0] = agentId;
        e[1] = entryId;
        e[2] = L;
    } else {
        L = e[2];
    }
    const r = L;
    let _;
    if (e[3] !== r || e[4] !== localAnswers) {
        _ = ()=>{
            if (r == null) {
                return "";
            }
            return localAnswers.get("widget-draft", r) ?? "";
        };
        e[3] = r;
        e[4] = localAnswers;
        e[5] = _;
    } else {
        _ = e[5];
    }
    const [E, setE] = r_1.useState(_);
    let c;
    if (e[6] !== r || e[7] !== localAnswers) {
        c = ()=>new Set(r == null ? [] : localAnswers.get("widget-selection", r) ?? []);
        e[6] = r;
        e[7] = localAnswers;
        e[8] = c;
    } else {
        c = e[8];
    }
    const [b, setB] = r_1.useState(c);
    const k = r_1.useId();
    const ZRef = r_1.useRef(null);
    let V;
    let ref;
    let onClick;
    let onChange;
    let onKeyDown;
    let onSubmit;
    let G;
    let Q;
    let P;
    let U;
    let X;
    if (e[9] !== __1 || e[10] !== r || e[11] !== E || e[12] !== dismissWidget || e[13] !== i18n || e[14] !== S || e[15] !== T || e[16] !== disabled || e[17] !== localAnswers || e[18] !== onChoose || e[19] !== $ || e[20] !== respondToWidget || e[21] !== b || e[22] !== I || e[23] !== widget) {
        X = Symbol.for("react.early_return_sentinel");
        e: {
            const J = Array.isArray(widget.options) ? widget.options : [];
            let he;
            if (e[35] !== i18n || e[36] !== widget) {
                he = bs(i18n, widget);
                e[35] = i18n;
                e[36] = widget;
                e[37] = he;
            } else {
                he = e[37];
            }
            Q = he;
            const q = I === "elevated";
            V = widget.allowCustom === true;
            const w = widget.multiSelect === true;
            const He = q && w && V;
            const ye = E.trim();
            let ge;
            if (e[38] !== b) {
                ge = (x)=>{
                    if (b.has(F(x))) {
                        return [
                            F(x)
                        ];
                    }
                    return [];
                };
                e[38] = b;
                e[39] = ge;
            } else {
                ge = e[39];
            }
            const ke = bq([
                ...J.flatMap(ge),
                V ? ye : ""
            ]);
            P = !w && V && ye.length > 0;
            U = w && ke.length > 0;
            let xe;
            if (e[40] !== r || e[41] !== disabled || e[42] !== localAnswers) {
                xe = (a, u)=>{
                    if (disabled || r == null || localAnswers.get("widget", r) != null) {
                        return;
                    }
                    localAnswers.record("widget", r, a);
                    const M = ()=>localAnswers.clear("widget", r);
                    u(r).then((oe)=>{
                        if (oe?.accepted === false) {
                            M();
                        }
                    }, M);
                };
                e[40] = r;
                e[41] = disabled;
                e[42] = localAnswers;
                e[43] = xe;
            } else {
                xe = e[43];
            }
            const ae = xe;
            let be;
            if (e[44] !== ae || e[45] !== respondToWidget) {
                be = (a)=>{
                    if (a.length !== 0) {
                        ae({
                            kind: "answered",
                            value: a
                        }, ({ agentId, entryId })=>respondToWidget({
                                entryId,
                                value: a,
                                agentId
                            }));
                    }
                };
                e[44] = ae;
                e[45] = respondToWidget;
                e[46] = be;
            } else {
                be = e[46];
            }
            const ce = be;
            let we;
            if (e[47] !== ae || e[48] !== dismissWidget) {
                we = ()=>{
                    ae({
                        kind: "dismissed"
                    }, ({ agentId, entryId })=>dismissWidget({
                            entryId,
                            agentId
                        }));
                };
                e[47] = ae;
                e[48] = dismissWidget;
                e[49] = we;
            } else {
                we = e[49];
            }
            onClick = we;
            let je;
            if (e[50] !== r || e[51] !== T || e[52] !== w || e[53] !== disabled || e[54] !== localAnswers || e[55] !== onChoose || e[56] !== $ || e[57] !== ce) {
                je = (a)=>{
                    if (!disabled) {
                        if (onChoose !== undefined) {
                            onChoose(a);
                            return;
                        }
                        if (T && a === bu) {
                            $?.();
                            return;
                        }
                        if (!w) {
                            ce(a);
                            return;
                        }
                        setB((u)=>We(u, a));
                        if (r != null) {
                            localAnswers.record("widget-selection", r, [
                                ...We(new Set(localAnswers.get("widget-selection", r) ?? []), a)
                            ]);
                        }
                    }
                };
                e[50] = r;
                e[51] = T;
                e[52] = w;
                e[53] = disabled;
                e[54] = localAnswers;
                e[55] = onChoose;
                e[56] = $;
                e[57] = ce;
                e[58] = je;
            } else {
                je = e[58];
            }
            const Se = je;
            const ue = S && J.length > 0;
            ref = (x)=>{
                if (x == null || !ue) {
                    return;
                }
                const a = (u)=>{
                    if (u.defaultPrevented || u.metaKey || u.ctrlKey || u.altKey || u.shiftKey || u.key.length !== 1 || qe(u.target) || qe(document.activeElement) || document.querySelector('[role="dialog"], [aria-modal="true"]') != null) {
                        return;
                    }
                    const M = u.key.toUpperCase().charCodeAt(0) - 65;
                    const oe = J[M];
                    if (oe == null) {
                        const De = ZRef.current;
                        if (M !== J.length || De == null) {
                            return;
                        }
                        u.preventDefault();
                        De.focus();
                        return;
                    }
                    u.preventDefault();
                    Se(F(oe));
                };
                document.addEventListener("keydown", a, true);
                return ()=>document.removeEventListener("keydown", a, true);
            };
            let Ie;
            if (e[59] !== r || e[60] !== localAnswers) {
                Ie = (a)=>{
                    const { value } = a.currentTarget;
                    setE(value);
                    if (r != null) {
                        localAnswers.record("widget-draft", r, value);
                    }
                };
                e[59] = r;
                e[60] = localAnswers;
                e[61] = Ie;
            } else {
                Ie = e[61];
            }
            onChange = Ie;
            onKeyDown = (a)=>{
                if (!(a.key !== "Enter" || a.shiftKey)) {
                    a.preventDefault();
                    ce(w ? ke : ye);
                }
            };
            onSubmit = (a)=>{
                a.preventDefault();
                ce(w ? ke : ye);
            };
            if (J.length === 0 || typeof widget.prompt !== "string") {
                X = null;
                break e;
            }
            let Ce;
            if (e[62] !== Se || e[63] !== i18n || e[64] !== q || e[65] !== ue || e[66] !== w || e[67] !== disabled || e[68] !== b || e[69] !== widget) {
                Ce = (x, a)=>{
                    const u = F(x);
                    const M = w && b.has(u);
                    return <St key={`${u}-${a}`} disabled={disabled} label={br(i18n, widget, x)} leading=<Z aria-hidden isSelected={q && M} size={q ? "lg" : "sm"} style={!q && p.optionKey}>{de(a)}</Z> onClick={()=>Se(u)} selected={M} {...x.description != null ? {
                        description: x.description
                    } : {}} {...ue ? {
                        keyShortcut: de(a).toLowerCase()
                    } : {}} {...w ? {
                        pressed: M
                    } : {}} {...M && !q ? {
                        trailing: <EComponent/>
                    } : {}}/>;
                };
                e[62] = Se;
                e[63] = i18n;
                e[64] = q;
                e[65] = ue;
                e[66] = w;
                e[67] = disabled;
                e[68] = b;
                e[69] = widget;
                e[70] = Ce;
            } else {
                Ce = e[70];
            }
            G = J.map(Ce);
            if (q) {
                const keyLabel = de(J.length);
                let a;
                if (e[71] !== __1 || e[72] !== w) {
                    a = w ? <Ke title={__1({
                        id: "08KMGH"
                    })}/> : null;
                    e[71] = __1;
                    e[72] = w;
                    e[73] = a;
                } else {
                    a = e[73];
                }
                X = <Fe aria-label={Q} onSubmit={onSubmit} ref={ref} style={p.widget} surface="elevated">{a}<Pe1>{...G}{He ? <Ye key="custom" aria-label={__1({
                    id: "dN9Fia"
                })} disabled={disabled} keyLabel={keyLabel} onChange={onChange} onKeyDown={onKeyDown} placeholder={__1({
                    id: "aQyGJc"
                })} ref={ZRef} value={E} {...ue ? {
                    keyShortcut: keyLabel.toLowerCase()
                } : {}}/> : null}</Pe1>{w ? <Oe trailing=<><Te disabled={disabled} onClick={onClick} size="lg" variant="secondary"><T_1 id="6Uau97"/></Te><Te disabled={disabled || ke.length === 0} size="lg" type="submit" variant="primary"><T_1 id="hQRttt"/></Te></>/> : null}</Fe>;
                break e;
            }
        }
        e[9] = __1;
        e[10] = r;
        e[11] = E;
        e[12] = dismissWidget;
        e[13] = i18n;
        e[14] = S;
        e[15] = T;
        e[16] = disabled;
        e[17] = localAnswers;
        e[18] = onChoose;
        e[19] = $;
        e[20] = respondToWidget;
        e[21] = b;
        e[22] = I;
        e[23] = widget;
        e[24] = V;
        e[25] = ref;
        e[26] = onClick;
        e[27] = onChange;
        e[28] = onKeyDown;
        e[29] = onSubmit;
        e[30] = G;
        e[31] = Q;
        e[32] = P;
        e[33] = U;
        e[34] = X;
    } else {
        V = e[24];
        ref = e[25];
        onClick = e[26];
        onChange = e[27];
        onKeyDown = e[28];
        onSubmit = e[29];
        G = e[30];
        Q = e[31];
        P = e[32];
        U = e[33];
        X = e[34];
    }
    if (X !== Symbol.for("react.early_return_sentinel")) {
        return X;
    }
    let subtitle;
    if (e[74] !== widget.helpText) {
        subtitle = widget.helpText == null ? undefined : <Ee content={widget.helpText}/>;
        e[74] = widget.helpText;
        e[75] = subtitle;
    } else {
        subtitle = e[75];
    }
    let ee;
    if (e[76] !== Q) {
        ee = <Ee content={Q}/>;
        e[76] = Q;
        e[77] = ee;
    } else {
        ee = e[77];
    }
    let te;
    if (e[78] !== __1 || e[79] !== onClick || e[80] !== C || e[81] !== disabled || e[82] !== onChoose) {
        te = onChoose === undefined ? <Et aria-label={__1({
            id: "i+D6RG"
        })} icon="x" iconSize="sm" disabled={disabled} onClick={onClick} size="sm" style={p.dismiss} title={__1({
            id: "ZNqNak"
        })} type="button"/> : C;
        e[78] = __1;
        e[79] = onClick;
        e[80] = C;
        e[81] = disabled;
        e[82] = onChoose;
        e[83] = te;
    } else {
        te = e[83];
    }
    let se;
    if (e[84] !== ee || e[85] !== te || e[86] !== subtitle || e[87] !== k) {
        se = <Ke subtitle={subtitle} title={ee} titleId={k} trailing={te}/>;
        e[84] = ee;
        e[85] = te;
        e[86] = subtitle;
        e[87] = k;
        e[88] = se;
    } else {
        se = e[88];
    }
    let ne;
    if (e[89] !== G) {
        ne = <Pe1>{G}</Pe1>;
        e[89] = G;
        e[90] = ne;
    } else {
        ne = e[90];
    }
    let ie;
    if (e[91] !== __1 || e[92] !== V || e[93] !== E || e[94] !== onChange || e[95] !== onKeyDown || e[96] !== disabled || e[97] !== P) {
        ie = V ? <div className="sand-78zum5 sand-1cy8zhl sand-167g77z sand-h8yej3 sand-euugli"><C_1 style={p.customField}><textarea aria-label={__1({
            id: "dN9Fia"
        })} autoComplete="off" disabled={disabled} onChange={onChange} onKeyDown={onKeyDown} placeholder={__1({
            id: "ovrcCJ"
        })} rows={1} spellCheck={false} value={E} {...p_1(c_2.control, p.customInput)}/></C_1>{P ? <Te disabled={disabled} size="md" style={p.customSubmit} type="submit"><T_1 id="hQRttt"/></Te> : null}</div> : null;
        e[91] = __1;
        e[92] = V;
        e[93] = E;
        e[94] = onChange;
        e[95] = onKeyDown;
        e[96] = disabled;
        e[97] = P;
        e[98] = ie;
    } else {
        ie = e[98];
    }
    let le;
    if (e[99] !== disabled || e[100] !== U) {
        le = U ? <Oe trailing=<Te disabled={disabled} size="md" style={p.customSubmit} type="submit"><T_1 id="hQRttt"/></Te>/> : null;
        e[99] = disabled;
        e[100] = U;
        e[101] = le;
    } else {
        le = e[101];
    }
    let me;
    if (e[102] !== ref || e[103] !== onSubmit || e[104] !== se || e[105] !== ne || e[106] !== ie || e[107] !== le || e[108] !== k) {
        me = <Fe aria-labelledby={k} onSubmit={onSubmit} ref={ref} style={p.widget}>{se}{ne}{ie}{le}</Fe>;
        e[102] = ref;
        e[103] = onSubmit;
        e[104] = se;
        e[105] = ne;
        e[106] = ie;
        e[107] = le;
        e[108] = k;
        e[109] = me;
    } else {
        me = e[109];
    }
    return me;
}
function AtComponent(i) {
    AtComponent.d = 580;
    const e = c_1.c(40);
    const { widget, answer, surface } = i;
    const f = surface === undefined ? "bubble" : surface;
    const { i18n, _: __1 } = u();
    const h = r_1.useId();
    if (typeof widget.prompt !== "string") {
        return null;
    }
    let z;
    let S;
    let s;
    let I;
    let children;
    let y;
    let d;
    let m;
    let g;
    if (e[0] !== __1 || e[1] !== answer || e[2] !== i18n || e[3] !== f || e[4] !== h || e[5] !== widget) {
        g = Symbol.for("react.early_return_sentinel");
        e: {
            const $ = Array.isArray(widget.options) ? widget.options : [];
            const L = widget.multiSelect === true;
            const r = [];
            if (L) {
                const c = bo(answer);
                const b = new Set(c);
                const R = new Set;
                for (const [optionIndex, V] of $.entries()){
                    const N = bp(F(V));
                    R.add(N);
                    if (b.has(N)) {
                        r.push({
                            kind: "option",
                            option: V,
                            optionIndex
                        });
                    }
                }
                const answer_1 = bq(c.filter((Z)=>!R.has(Z)));
                if (answer_1.length > 0) {
                    r.push({
                        kind: "raw",
                        answer: answer_1
                    });
                }
            } else {
                const optionIndex = $.findIndex((R)=>F(R) === answer);
                const option = $[optionIndex];
                r.push(option == null ? {
                    kind: "raw",
                    answer
                } : {
                    kind: "option",
                    option,
                    optionIndex
                });
            }
            if (f === "elevated") {
                let c;
                if (e[15] !== __1) {
                    c = __1({
                        id: "Vtq6ex"
                    });
                    e[15] = __1;
                    e[16] = c;
                } else {
                    c = e[16];
                }
                const b = <Pe1 label={c} role="group">{r.map((k)=><div key={k.kind === "option" ? `${F(k.option)}-${k.optionIndex}` : "raw"} className="sand-78zum5 sand-1cy8zhl sand-1jnr06f sand-9f619 sand-h8yej3 sand-euugli sand-e8ttls"><Z aria-hidden isSelected size="lg">{de(k.kind === "option" ? k.optionIndex : $.length)}</Z><span {...p_1(j_2.rowBody, j_2.rowBodyFlat)}><Me style={[
                        j_2.rowLabel,
                        p.settledTextFlat,
                        k.kind === "raw" && p.multiSettledRawText
                    ]}>{k.kind === "option" ? br(i18n, widget, k.option) : k.answer}</Me></span></div>)}</Pe1>;
                let R;
                if (e[17] !== b) {
                    R = <Ve role="group" style={p.widget} surface="elevated">{b}</Ve>;
                    e[17] = b;
                    e[18] = R;
                } else {
                    R = e[18];
                }
                g = R;
                break e;
            }
            let _;
            if (e[19] !== i18n || e[20] !== widget) {
                _ = bs(i18n, widget);
                e[19] = i18n;
                e[20] = widget;
                e[21] = _;
            } else {
                _ = e[21];
            }
            const E = _;
            S = Ve;
            y = "group";
            d = p.widget;
            let O;
            if (e[22] !== E) {
                O = <Ee content={E}/>;
                e[22] = E;
                e[23] = O;
            } else {
                O = e[23];
            }
            if (e[24] !== O || e[25] !== h) {
                m = <Ke title={O} titleId={h}/>;
                e[24] = O;
                e[25] = h;
                e[26] = m;
            } else {
                m = e[26];
            }
            z = Pe1;
            if (e[27] !== __1) {
                s = __1({
                    id: "Vtq6ex"
                });
                e[27] = __1;
                e[28] = s;
            } else {
                s = e[28];
            }
            I = "group";
            children = r.map((c)=><div key={c.kind === "option" ? `${F(c.option)}-${c.optionIndex}` : "raw"} className="sand-78zum5 sand-6s0dn4 sand-167g77z sand-h8yej3 sand-euugli sand-e8ttls">{c.kind === "option" ? <Z aria-hidden style={[
                    p.optionKey,
                    p.settledKey
                ]}>{de(c.optionIndex)}</Z> : null}<span {...p_1(j_2.rowBody)}><Me style={[
                    j_2.rowLabel,
                    p.settledText,
                    L && c.kind === "raw" && p.multiSettledRawText
                ]}>{c.kind === "option" ? br(i18n, widget, c.option) : c.answer}</Me></span><EComponent/></div>);
        }
        e[0] = __1;
        e[1] = answer;
        e[2] = i18n;
        e[3] = f;
        e[4] = h;
        e[5] = widget;
        e[6] = z;
        e[7] = S;
        e[8] = s;
        e[9] = I;
        e[10] = children;
        e[11] = y;
        e[12] = d;
        e[13] = m;
        e[14] = g;
    } else {
        z = e[6];
        S = e[7];
        s = e[8];
        I = e[9];
        children = e[10];
        y = e[11];
        d = e[12];
        m = e[13];
        g = e[14];
    }
    if (g !== Symbol.for("react.early_return_sentinel")) {
        return g;
    }
    let o;
    if (e[29] !== z || e[30] !== s || e[31] !== I || e[32] !== children) {
        o = j.jsx(z, {
            label: s,
            role: I,
            children
        });
        e[29] = z;
        e[30] = s;
        e[31] = I;
        e[32] = children;
        e[33] = o;
    } else {
        o = e[33];
    }
    let T;
    if (e[34] !== S || e[35] !== y || e[36] !== d || e[37] !== m || e[38] !== o) {
        T = <S role={y} style={d}>{m}{o}</S>;
        e[34] = S;
        e[35] = y;
        e[36] = d;
        e[37] = m;
        e[38] = o;
        e[39] = T;
    } else {
        T = e[39];
    }
    return T;
}
function OtComponent(i) {
    OtComponent.d = 579;
    const e = c_1.c(24);
    const { widget, surface } = i;
    const K = surface === undefined ? "bubble" : surface;
    const { i18n, _ } = u();
    const j = r_1.useId();
    if (typeof widget.prompt !== "string") {
        return null;
    }
    if (K === "elevated") {
        let y;
        if (e[0] !== widget.options) {
            y = Array.isArray(widget.options) ? widget.options : [];
            e[0] = widget.options;
            e[1] = y;
        } else {
            y = e[1];
        }
        const d = y;
        let m;
        if (e[2] !== _) {
            m = _({
                id: "J6hrEy"
            });
            e[2] = _;
            e[3] = m;
        } else {
            m = e[3];
        }
        let g;
        if (e[4] !== i18n || e[5] !== d || e[6] !== widget) {
            let T;
            if (e[8] !== i18n || e[9] !== widget) {
                T = ($, L)=><div key={`${F($)}-${L}`} className="sand-78zum5 sand-1cy8zhl sand-1jnr06f sand-9f619 sand-h8yej3 sand-euugli sand-e8ttls"><Z aria-hidden size="lg" style={p.skippedInk}>{de(L)}</Z><span {...p_1(j_2.rowBody, j_2.rowBodyFlat)}><Me style={[
                        j_2.rowLabel,
                        p.skippedInk
                    ]}>{br(i18n, widget, $)}</Me>{$.description == null ? null : <Me style={[
                        j_2.rowDescription,
                        p.skippedInk
                    ]}>{$.description}</Me>}</span></div>;
                e[8] = i18n;
                e[9] = widget;
                e[10] = T;
            } else {
                T = e[10];
            }
            g = d.map(T);
            e[4] = i18n;
            e[5] = d;
            e[6] = widget;
            e[7] = g;
        } else {
            g = e[7];
        }
        let o;
        if (e[11] !== m || e[12] !== g) {
            o = <Ve role="group" style={p.widget} surface="elevated"><Pe1 label={m} role="group">{g}</Pe1></Ve>;
            e[11] = m;
            e[12] = g;
            e[13] = o;
        } else {
            o = e[13];
        }
        return o;
    }
    let h;
    if (e[14] !== i18n || e[15] !== widget) {
        h = bs(i18n, widget);
        e[14] = i18n;
        e[15] = widget;
        e[16] = h;
    } else {
        h = e[16];
    }
    const z = h;
    let S;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        S = [
            p.widget,
            p.dismissedInk
        ];
        e[17] = S;
    } else {
        S = e[17];
    }
    let s;
    if (e[18] !== z) {
        s = <Ee content={z}/>;
        e[18] = z;
        e[19] = s;
    } else {
        s = e[19];
    }
    let I;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        I = <Pe isDotted kind="muted"><T_1 id="J6hrEy"/></Pe>;
        e[20] = I;
    } else {
        I = e[20];
    }
    let C;
    if (e[21] !== s || e[22] !== j) {
        C = <Ve role="group" style={S}><Ke title={s} titleId={j} trailing={I}/></Ve>;
        e[21] = s;
        e[22] = j;
        e[23] = C;
    } else {
        C = e[23];
    }
    return C;
}
export { AtComponent as S, LtComponent as a, OtComponent as b };
