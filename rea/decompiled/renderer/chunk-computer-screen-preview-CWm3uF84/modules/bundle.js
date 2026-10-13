import { c as c_1, r as r_1, u as u_1, T as T_1, p } from "./index.eager-vendor-Qbf9YA6n.js";
import { b7, fi, fj, r as r_2, fC, ak, fD, fE, fF, fG, fn, fp, fm, fr, aW, aK, a$, a_, fH } from "./index.eager-app-Cj5f8Gby.js";
import { aY as Ds1 } from "./index.eager-platform-Dcfeegfw.js";
import { bP as Ds, z as Rs1, W as W_1, p as Xs } from "./index-ZYxf-aBb.js";
import { r as r_3, a, b as b_1, C as C_1, f as f_1 } from "./chunk-box-desktop-modal-CuGtBMZ_.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "8abef767-0824-48c3-8335-ffd980710088";
            e._sentryDebugIdIdentifier = "sentry-dbid-8abef767-0824-48c3-8335-ffd980710088";
        }
    } catch (e) {}
})();
function se(e, agentId) {
    let t = null;
    let l = null;
    const i = new Set;
    let h = null;
    return {
        subscribe: (p)=>{
            i.add(p);
            if (h == null && agentId != null) {
                h = e.foreverBox.subscribeComputerActions((c)=>{
                    if (c.agentId !== agentId) {
                        return;
                    }
                    const k = e.clock.monotonicNow();
                    if (t != null && (c.x !== t.x || c.y !== t.y)) {
                        l = k;
                    }
                    t = {
                        x: c.x,
                        y: c.y,
                        type: c.type,
                        seq: (t?.seq ?? 0) + 1,
                        msSinceMove: l == null ? null : k - l,
                        clickSeq: (t?.clickSeq ?? 0) + (c.type === "click" ? 1 : 0)
                    };
                    for (const w of [
                        ...i
                    ]){
                        w();
                    }
                });
            }
            return ()=>{
                i.delete(p);
                if (i.size === 0) {
                    h?.();
                    h = null;
                }
            };
        },
        get: ()=>t
    };
}
function useEe(agentId) {
    const s = c_1.c(3);
    const t = b7();
    let l;
    if (s[0] !== agentId || s[1] !== t) {
        l = se(t, agentId);
        s[0] = agentId;
        s[1] = t;
        s[2] = l;
    } else {
        l = s[2];
    }
    const i = l;
    return r_1.useSyncExternalStore(i.subscribe, i.get, i.get);
}
const ne = 0.75;
const ae = 1.8;
const te = 2.85;
function le(e) {
    const s = e / fi * te;
    return Math.min(ae, Math.max(ne, s));
}
const ie = 500;
const d_1 = "M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z";
function de(msSinceMove) {
    if (msSinceMove == null) {
        return 0;
    }
    return Math.max(0, ie - msSinceMove);
}
function re({ cursor, hasFrame }) {
    const isVisible = cursor != null && hasFrame;
    return {
        isGliding: (cursor?.seq ?? 0) > 1,
        isVisible,
        press: isVisible && cursor.type === "click" ? {
            key: cursor.clickSeq,
            delayMs: de(cursor.msSinceMove)
        } : null
    };
}
function Zs1Component(e) {
    Zs1Component.d = 870;
    const s = c_1.c(32);
    const { agentId } = e;
    const cursor = useEe(agentId);
    const [i, setI] = r_1.useState(null);
    let p;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        p = (q)=>{
            if (q == null) {
                return;
            }
            const es = new ResizeObserver(()=>{
                const g = q.getBoundingClientRect();
                setI({
                    w: g.width,
                    h: g.height
                });
            });
            es.observe(q);
            return ()=>es.disconnect();
        };
        s[0] = p;
    } else {
        p = s[0];
    }
    const c = p;
    const k = cursor != null && i != null;
    const w = k ? cursor.x / fi * i.w : 0;
    const y = k ? cursor.y / fj * i.h : 0;
    let v;
    if (s[1] !== i) {
        v = i != null ? le(i.w) : 1;
        s[1] = i;
        s[2] = v;
    } else {
        v = s[2];
    }
    const transform = `translate(${w}px, ${y}px) scale(${v})`;
    let a;
    let o;
    let m;
    let r;
    let f;
    if (s[3] !== cursor || s[4] !== i) {
        a = re({
            cursor,
            hasFrame: i != null
        });
        m = true;
        if (s[10] === Symbol.for("react.memo_cache_sentinel")) {
            r = r_2("sand-computer-cursor-overlay", "sand-10l6tqk sand-10a8y8t sand-b3r6kr sand-47corl sand-1u8a7rm");
            s[10] = r;
        } else {
            r = s[10];
        }
        f = c;
        o = r_2("sand-computer-cursor", {
            0: {
                className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-g01cxk sand-1hj3fc7 sand-1q1rmc8 sand-19991ni sand-xqiezv sand-wji4o3"
            },
            2: {
                className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-g01cxk sand-1hj3fc7 sand-1q1rmc8 sand-wcsmn1 sand-1ympp8d sand-t2a83n sand-4oa4c9 sand-ne5g9v sand-7v8fk2"
            },
            1: {
                className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-1hj3fc7 sand-1q1rmc8 sand-19991ni sand-xqiezv sand-wji4o3 sand-1hc1fzr"
            },
            3: {
                className: "sand-10l6tqk sand-13vifvy sand-u96u03 sand-1hj3fc7 sand-1q1rmc8 sand-wcsmn1 sand-1ympp8d sand-t2a83n sand-4oa4c9 sand-ne5g9v sand-7v8fk2 sand-1hc1fzr"
            }
        }[!!a.isGliding << 1 | !!a.isVisible << 0].className);
        s[3] = cursor;
        s[4] = i;
        s[5] = a;
        s[6] = o;
        s[7] = m;
        s[8] = r;
        s[9] = f;
    } else {
        a = s[5];
        o = s[6];
        m = s[7];
        r = s[8];
        f = s[9];
    }
    let d;
    if (s[11] !== transform) {
        d = {
            transform
        };
        s[11] = transform;
        s[12] = d;
    } else {
        d = s[12];
    }
    const C = a.press?.key ?? "rest";
    let S;
    if (s[13] !== a.press) {
        S = r_2("sand-computer-cursor-glyph", {
            0: {
                className: "sand-10l6tqk sand-wc5g4n sand-1ct5tfr sand-1lliihq sand-vy4d1p sand-xk0z11 sand-55qf4y sand-fs3179"
            },
            1: {
                className: "sand-10l6tqk sand-wc5g4n sand-1ct5tfr sand-1lliihq sand-vy4d1p sand-xk0z11 sand-55qf4y sand-fs3179 sand-18imfhs sand-1aquc0h sand-b8lv0f sand-1u6ievf"
            }
        }[(a.press != null) << 0].className);
        s[13] = a.press;
        s[14] = S;
    } else {
        S = s[14];
    }
    let _;
    if (s[15] !== a.press) {
        _ = a.press == null ? undefined : {
            animationDelay: `${a.press.delayMs}ms`
        };
        s[15] = a.press;
        s[16] = _;
    } else {
        _ = s[16];
    }
    let P;
    let z;
    if (s[17] === Symbol.for("react.memo_cache_sentinel")) {
        P = <path d={d_1} fill="white" stroke="white" strokeLinejoin="round" strokeWidth="1.5"/>;
        z = <path d={d_1} fill="black"/>;
        s[17] = P;
        s[18] = z;
    } else {
        P = s[17];
        z = s[18];
    }
    let j;
    if (s[19] !== _ || s[20] !== C || s[21] !== S) {
        j = <svg key={C} className={S} style={_} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{P}{z}</svg>;
        s[19] = _;
        s[20] = C;
        s[21] = S;
        s[22] = j;
    } else {
        j = s[22];
    }
    let b;
    if (s[23] !== j || s[24] !== o || s[25] !== d) {
        b = <span className={o} style={d}>{j}</span>;
        s[23] = j;
        s[24] = o;
        s[25] = d;
        s[26] = b;
    } else {
        b = s[26];
    }
    let u;
    if (s[27] !== b || s[28] !== m || s[29] !== r || s[30] !== f) {
        u = <div aria-hidden={m} className={r} ref={f}>{b}</div>;
        s[27] = b;
        s[28] = m;
        s[29] = r;
        s[30] = f;
        s[31] = u;
    } else {
        u = s[31];
    }
    return u;
}
function Cs(monitors) {
    return monitors.find((s)=>s.handoff != null) ?? monitors[0] ?? null;
}
function ce(monitors, view) {
    return Cs(monitors)?.vncUrl ?? view.vncUrl;
}
const ws = "--sand-computer-preview-fit";
function oe(e) {
    if (e.width <= 0 || e.height <= 0) {
        return 0;
    }
    return Math.min(e.width / fi, e.height / fj);
}
function ue(e) {
    if (e == null) {
        return;
    }
    let s = null;
    const t = ()=>{
        const i = String(oe(e.getBoundingClientRect()));
        if (i !== s) {
            s = i;
            e.style.setProperty(ws, i);
        }
    };
    t();
    const l = new ResizeObserver(t);
    l.observe(e);
    return ()=>{
        l.disconnect();
        e.style.removeProperty(ws);
    };
}
function me(e, s) {
    if (s.frame === "mounted") {
        if (s.isPaneOpen || e === s.agentId) {
            return s.agentId;
        }
        return null;
    }
    if (s.frame === "hidden" && e === s.agentId) {
        return e;
    }
    return null;
}
const fe = {
    positionAnchor: fF,
    top: "anchor(top)",
    right: "anchor(right)",
    bottom: "anchor(bottom)",
    left: "anchor(left)"
};
const he = {
    positionAnchor: fE,
    top: "anchor(top)",
    left: "anchor(left)",
    width: "anchor-size(width)",
    height: "anchor-size(height)"
};
export function ComputerPreviewGuests(e) {
    ComputerPreviewGuests.d = 873;
    const s = c_1.c(23);
    const { agentId, view, monitors, isPaneOpen } = e;
    let p;
    if (s[0] !== agentId) {
        p = ()=>fC.stateFor(agentId);
        s[0] = agentId;
        s[1] = p;
    } else {
        p = s[1];
    }
    const frame = r_1.useSyncExternalStore(fC.subscribe, p);
    const k = ak("info-pane");
    const w = fD();
    const isViewerVisible = isPaneOpen && frame === "mounted";
    const [v, setV] = r_1.useState(null);
    let x;
    if (s[2] !== agentId || s[3] !== frame || s[4] !== v || s[5] !== isPaneOpen) {
        x = me(v, {
            agentId,
            isPaneOpen,
            frame
        });
        s[2] = agentId;
        s[3] = frame;
        s[4] = v;
        s[5] = isPaneOpen;
        s[6] = x;
    } else {
        x = s[6];
    }
    const a = x;
    if (a !== v) {
        setV(a);
    }
    let o;
    if (s[7] !== isViewerVisible) {
        o = ({
            0: {
                className: "sand-10l6tqk sand-9dt7sq sand-47corl"
            },
            1: {
                className: "sand-10l6tqk sand-9dt7sq sand-47corl sand-lshs6z"
            }
        })[!isViewerVisible << 0];
        s[7] = isViewerVisible;
        s[8] = o;
    } else {
        o = s[8];
    }
    let m;
    if (s[9] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-ixxii4 sand-9f619 sand-hojbe8 sand-b3r6kr sand-i07v4r sand-1ahgo13"
        };
        s[9] = m;
    } else {
        m = s[9];
    }
    let r;
    if (s[10] !== agentId || s[11] !== k || s[12] !== isViewerVisible || s[13] !== w || s[14] !== monitors || s[15] !== a || s[16] !== view) {
        r = w ? <Ds agentId={agentId ?? ""} announcesConnecting={isViewerVisible && !k} isViewerVisible={isViewerVisible} keepsAgentDesktops={a != null} src={isViewerVisible ? ce(monitors, view) : null}/> : null;
        s[10] = agentId;
        s[11] = k;
        s[12] = isViewerVisible;
        s[13] = w;
        s[14] = monitors;
        s[15] = a;
        s[16] = view;
        s[17] = r;
    } else {
        r = s[17];
    }
    let f;
    if (s[18] !== r) {
        f = <div {...m} ref={ue} style={he}>{r}</div>;
        s[18] = r;
        s[19] = f;
    } else {
        f = s[19];
    }
    let d;
    if (s[20] !== o || s[21] !== f) {
        d = <div {...o} ref={fG} style={fe}>{f}</div>;
        s[20] = o;
        s[21] = f;
        s[22] = d;
    } else {
        d = s[22];
    }
    return d;
}
const ys = {
    open: {
        kVAEAm: "sand-10l6tqk",
        kpwlN0: "sand-10a8y8t",
        kY2c9j: "sand-htitgo",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        keoZOQ: "sand-dj266r",
        k71WvV: "sand-14z9mp",
        k1K539: "sand-at24cr",
        keTefX: "sand-1lziwak",
        kmVPX3: "sand-1717udv",
        kMzoRj: "sand-c342km",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-hojbe8",
        kWkggS: "sand-jbqb8w",
        kysU6D: "sand-jyslct",
        k3lkva: "sand-1lugfcp",
        kkrTdU: "sand-1ypdohk",
        "--sand-computer-open-reveal": "sand-9swre5 sand-nch7ns sand-1hgj18l",
        $$css: true
    },
    openPill: {
        k1xSpc: "sand-3nfvp2",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-pkkfsy",
        kaIpWk: "sand-1i4c3av",
        k8WAf4: "sand-12ffz05",
        kg3NbH: "sand-w3enoh",
        kWkggS: "sand-1846v19",
        kMwMTN: "sand-18ti0zn",
        kfzvcC: "sand-47corl",
        kSiTet: "sand-1i4knns",
        k1ekBW: "sand-19991ni",
        kIyJzY: "sand-1firant",
        kAMwcw: "sand-9lcvmn",
        $$css: true
    },
    attentionBody: {
        kMwMTN: "sand-1wd3ewq",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    }
};
export function isScreenPreviewBusy(e) {
    if (e.isStatusUnavailable) {
        return false;
    }
    return !e.isStatusKnown || e.phase === "pulling" || e.phase === "starting";
}
export function ComputerScreenPreview(e) {
    ComputerScreenPreview.d = 874;
    const s = c_1.c(77);
    const { agentId, view, monitors, isModalOpen, isVisible, subjectLabel, recordingAgentName, baseHandoff, onOpen, onHandBackHandoff, onDismissHandoff } = e;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const o = fn();
    const m = fp();
    const r = fm();
    const f = ak("info-pane");
    const d = Cs(monitors);
    const C = r_3(d, baseHandoff);
    const S = a(d);
    const _ = S.kind === "monitor" ? S.subagentId : null;
    const P = d?.vncUrl ?? view.vncUrl;
    const hostPhase = fr();
    const j = hostPhase === "asleep";
    const b = hostPhase === "away";
    const u = P != null && !j && !b;
    const isEmptyLoading = !j && !b && isScreenPreviewBusy(view);
    const es = b && (P != null || isScreenPreviewBusy(view) || view.isStatusUnavailable);
    const g = o.state === "recording" ? o.agentId : null;
    const N = g === agentId;
    const ms = g != null && !N;
    let ns;
    if (s[0] !== __2 || s[1] !== recordingAgentName) {
        ns = recordingAgentName == null ? __2({
            id: "68rgYg"
        }) : __2({
            id: "3h2s4g",
            values: {
                recordingAgentName
            }
        });
        s[0] = __2;
        s[1] = recordingAgentName;
        s[2] = ns;
    } else {
        ns = s[2];
    }
    const fs = ns;
    const copy = b_1(__1, {
        hostPhase,
        isScreenLoading: false,
        isScreenUnavailable: view.isStatusUnavailable,
        subjectLabel,
        emptyMessage: undefined,
        isEmptyLoading,
        pullPercent: view.pullPercent
    });
    const M = copy.isBusy || copy.hasRetry || j || es;
    aW(!isModalOpen && isVisible && !f && !u && copy.isBusy ? copy.message : null);
    if (isModalOpen) {
        return null;
    }
    let view_phase = view.phase;
    if (view.isStatusUnavailable) {
        view_phase = "error";
    } else if (!view.isStatusKnown) {
        view_phase = "loading";
    }
    const hs = isEmptyLoading ? true : undefined;
    let E;
    if (s[3] !== __2) {
        E = __2({
            id: "PVszY+"
        });
        s[3] = __2;
        s[4] = E;
    } else {
        E = s[4];
    }
    let T;
    if (s[5] === Symbol.for("react.memo_cache_sentinel")) {
        T = r_2("sand-computer-preview", "sand-78zum5 sand-dt5ytf sand-pkkfsy sand-87ps6o");
        s[5] = T;
    } else {
        T = s[5];
    }
    const Ps = view_phase;
    const role = "region";
    const ps = C != null ? <div aria-label={__2({
        id: "DQruXP"
    })} className={r_2("sand-computer-preview__attention", "sand-9f619 sand-78zum5 sand-dt5ytf sand-1dbef6d sand-h8yej3 sand-a0y8cy sand-1pkpdue sand-1xvwvse sand-u624df")} role="group"><span className="sand-78zum5 sand-dt5ytf sand-137clkk sand-euugli"><Ds1 color="yellow" size="md" weight="medium"><T_1 id="DQruXP"/></Ds1><Ds1 rootStyle={ys.attentionBody} size="md">{C.instruction.trim().length > 0 ? C.instruction : __2({
        id: "JnE9gk",
        values: {
            subjectLabel
        }
    })}</Ds1></span><div className="sand-78zum5 sand-6s0dn4 sand-13a6bvl sand-1a02dak sand-11twubx"><Rs1 onClick={()=>onDismissHandoff(_)} size="sm" variant="secondary"><T_1 id="+P0Cn2"/></Rs1><Rs1 onClick={()=>onHandBackHandoff(_)} size="sm" variant="primary"><T_1 id="6gLBI0"/></Rs1></div></div> : null;
    let as;
    if (s[6] === Symbol.for("react.memo_cache_sentinel")) {
        as = {
            className: "sand-1n2onr6"
        };
        s[6] = as;
    } else {
        as = s[6];
    }
    const as_className = as.className;
    let B;
    if (s[7] === Symbol.for("react.memo_cache_sentinel")) {
        B = r_2("sand-computer-preview__frame", "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-h8yej3 sand-9f619 sand-hojbe8 sand-b3r6kr sand-4b2ntj");
        s[7] = B;
    } else {
        B = s[7];
    }
    let H;
    if (s[8] !== agentId) {
        H = (Rs)=>fH(Rs, agentId);
        s[8] = agentId;
        s[9] = H;
    } else {
        H = s[9];
    }
    let ts;
    if (s[10] === Symbol.for("react.memo_cache_sentinel")) {
        ts = {
            aspectRatio: `${fi} / ${fj}`
        };
        s[10] = ts;
    } else {
        ts = s[10];
    }
    let O;
    if (s[11] !== M || s[12] !== u) {
        O = !u && !M ? <W_1 aria-hidden name="device-desktop" size="base"/> : null;
        s[11] = M;
        s[12] = u;
        s[13] = O;
    } else {
        O = s[13];
    }
    let V;
    if (s[14] !== __2 || s[15] !== d?.title) {
        V = d?.title ?? __2({
            id: "Cfg0eW"
        });
        s[14] = __2;
        s[15] = d?.title;
        s[16] = V;
    } else {
        V = s[16];
    }
    let W;
    if (s[17] === Symbol.for("react.memo_cache_sentinel")) {
        W = r_2("sand-computer-preview__open", p(ys.open, aK.keyboardFocus).className);
        s[17] = W;
    } else {
        W = s[17];
    }
    let onClick;
    if (s[18] !== d?.subagentId || s[19] !== onOpen) {
        onClick = ()=>onOpen(d?.subagentId);
        s[18] = d?.subagentId;
        s[19] = onOpen;
        s[20] = onClick;
    } else {
        onClick = s[20];
    }
    const title = d?.title;
    let U;
    if (s[21] !== u || s[22] !== N) {
        U = u && !N ? <span className={p(ys.openPill, a_.label, a$.regular).className}><W_1 aria-hidden name="arrows-expand-simple" size="sm"/><T_1 id="1TNIig"/></span> : null;
        s[21] = u;
        s[22] = N;
        s[23] = U;
    } else {
        U = s[23];
    }
    let $;
    if (s[24] !== V || s[25] !== W || s[26] !== onClick || s[27] !== title || s[28] !== U) {
        $ = <button aria-label={V} className={W} onClick={onClick} title={title} type="button">{U}</button>;
        s[24] = V;
        s[25] = W;
        s[26] = onClick;
        s[27] = title;
        s[28] = U;
        s[29] = $;
    } else {
        $ = s[29];
    }
    let L;
    if (s[30] !== M || s[31] !== u || s[32] !== copy || s[33] !== view.retryStatus) {
        L = !u && M ? <span className="sand-10l6tqk sand-10a8y8t sand-zkaem6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-47corl"><C_1 copy={copy} onRetry={view.retryStatus} tone="pane"/></span> : null;
        s[30] = M;
        s[31] = u;
        s[32] = copy;
        s[33] = view.retryStatus;
        s[34] = L;
    } else {
        L = s[34];
    }
    let G;
    if (s[35] !== agentId || s[36] !== u || s[37] !== d?.subagentId) {
        G = u ? <Zs1Component agentId={d?.subagentId ?? agentId}/> : null;
        s[35] = agentId;
        s[36] = u;
        s[37] = d?.subagentId;
        s[38] = G;
    } else {
        G = s[38];
    }
    let D;
    if (s[39] !== B || s[40] !== H || s[41] !== O || s[42] !== $ || s[43] !== L || s[44] !== G) {
        D = <div className={B} ref={H} style={ts}>{O}{$}{L}{G}</div>;
        s[39] = B;
        s[40] = H;
        s[41] = O;
        s[42] = $;
        s[43] = L;
        s[44] = G;
        s[45] = D;
    } else {
        D = s[45];
    }
    let X;
    if (s[46] !== N || s[47] !== g || s[48] !== r || s[49] !== m || s[50] !== o.startedAtMs) {
        X = N ? <><span aria-hidden className="sand-10l6tqk sand-10a8y8t sand-9f619 sand-hojbe8 sand-dh2fpr sand-1y0btm7 sand-jz30o7 sand-47corl sand-zkaem6" data-recording-frame="true"/><span className="sand-10l6tqk sand-fr5jun sand-rotz4w sand-zkaem6 sand-3nfvp2 sand-6s0dn4 sand-17d4w8g sand-1kogg8i sand-j8oexa sand-dqyycr sand-1icupl1 sand-104s22n sand-y5h43f sand-xzm5a7 sand-ss6m8b sand-47corl"><T_1 id="Od1fMg" values={{
            0: f_1(m - (o.startedAtMs ?? m))
        }}/></span><span className="sand-10l6tqk sand-1jn9clo sand-1nrll8i sand-uuh30 sand-zkaem6"><Rs1 onClick={()=>r.stop(g, true)} size="sm" variant="primary"><T_1 id="n568PW"/></Rs1></span></> : null;
        s[46] = N;
        s[47] = g;
        s[48] = r;
        s[49] = m;
        s[50] = o.startedAtMs;
        s[51] = X;
    } else {
        X = s[51];
    }
    let Y;
    if (s[52] !== D || s[53] !== X) {
        Y = <div className={as_className}>{D}{X}</div>;
        s[52] = D;
        s[53] = X;
        s[54] = Y;
    } else {
        Y = s[54];
    }
    let K;
    if (s[55] !== __2 || s[56] !== ms || s[57] !== g || s[58] !== fs || s[59] !== r) {
        K = ms ? <div className="sand-78zum5 sand-6s0dn4 sand-pkkfsy sand-h8yej3"><span className="sand-1iyjqo2 sand-s83m0k sand-euugli"><Ds1 color="secondary" size="sm">{fs}</Ds1></span><span className="sand-78zum5 sand-6s0dn4 sand-11twubx sand-2lah0s"><Rs1 aria-label={__2({
            id: "ITj4Ys"
        })} onClick={()=>r.stop(g, true)} size="sm" variant="primary"><T_1 id="n568PW"/></Rs1><Xs aria-label={__2({
            id: "joVvhG"
        })} icon="close" onClick={()=>r.stop(g, false)} size="sm" title={__2({
            id: "joVvhG"
        })}/></span></div> : null;
        s[55] = __2;
        s[56] = ms;
        s[57] = g;
        s[58] = fs;
        s[59] = r;
        s[60] = K;
    } else {
        K = s[60];
    }
    let ls;
    if (s[61] === Symbol.for("react.memo_cache_sentinel")) {
        ls = {
            className: "sand-1lliihq sand-2b8uid"
        };
        s[61] = ls;
    } else {
        ls = s[61];
    }
    let Q;
    if (s[62] !== __2 || s[63] !== N || s[64] !== subjectLabel) {
        Q = __2(N ? {
            id: "mv98HR",
            values: {
                subjectLabel
            }
        } : {
            id: "hdPaX+",
            values: {
                subjectLabel
            }
        });
        s[62] = __2;
        s[63] = N;
        s[64] = subjectLabel;
        s[65] = Q;
    } else {
        Q = s[65];
    }
    let J;
    if (s[66] !== Q) {
        J = <span className={ls.className}><Ds1 color="tertiary" size="sm">{Q}</Ds1></span>;
        s[66] = Q;
        s[67] = J;
    } else {
        J = s[67];
    }
    let is;
    if (s[68] !== view_phase || s[69] !== hs || s[70] !== Y || s[71] !== K || s[72] !== J || s[73] !== E || s[74] !== T || s[75] !== ps) {
        is = <div aria-busy={hs} aria-label={E} className={T} data-phase={Ps} role={role}>{ps}{Y}{K}{J}</div>;
        s[68] = view_phase;
        s[69] = hs;
        s[70] = Y;
        s[71] = K;
        s[72] = J;
        s[73] = E;
        s[74] = T;
        s[75] = ps;
        s[76] = is;
    } else {
        is = s[76];
    }
    return is;
}
