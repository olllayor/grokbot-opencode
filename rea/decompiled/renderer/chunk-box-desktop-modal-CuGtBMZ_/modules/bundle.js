import { c as c_1, u as u_1, p as p_1, T as T_1, r as r_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { c as c_2 } from "./index.eager-common-CdCvBQNJ.js";
import { r as r_2, a_, fi, fj, aH as Nn, q, fh, fk, fl, a$, U, fm, fn, d as d_1, fo, fp, fq, fr, ak, aW, fs as fs_1, a7, a6, ft } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { t as Ne1, W, by as Je, z as _s, p as Qe1, bz as Fn, bA, bB } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "1a846f32-6b5e-4e3a-b0a2-868a60b51ac8";
            e._sentryDebugIdIdentifier = "sentry-dbid-1a846f32-6b5e-4e3a-b0a2-868a60b51ac8";
        }
    } catch (e) {}
})();
const ze = 3;
const sn = {
    captionText: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-102cea3",
        $$css: true
    }
};
function En1Component(t) {
    En1Component.d = 872;
    const s = c_1.c(30);
    const { monitor, onFocus } = t;
    const { _: __1 } = u_1();
    const o = monitor.handoff != null;
    let c;
    if (s[0] !== __1 || s[1] !== o || s[2] !== monitor.title) {
        c = __1(o ? {
            id: "0lMXxL",
            values: {
                0: monitor.title
            }
        } : {
            id: "1+P9RR",
            values: {
                0: monitor.title
            }
        });
        s[0] = __1;
        s[1] = o;
        s[2] = monitor.title;
        s[3] = c;
    } else {
        c = s[3];
    }
    const r = c;
    let a;
    if (s[4] === Symbol.for("react.memo_cache_sentinel")) {
        a = r_2("sand-computer-monitor-strip__thumb", "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-ykynuu sand-s83m0k sand-euugli sand-18qnofl sand-1717udv sand-1ghz6dp sand-ng3xce sand-jbqb8w sand-jyslct sand-1lugfcp sand-jb2p0i sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1725o6r sand-1wfwxd8 sand-7s97pk");
        s[4] = a;
    } else {
        a = s[4];
    }
    let u;
    if (s[5] !== monitor.subagentId || s[6] !== onFocus) {
        u = ()=>onFocus(monitor.subagentId);
        s[5] = monitor.subagentId;
        s[6] = onFocus;
        s[7] = u;
    } else {
        u = s[7];
    }
    let i;
    if (s[8] === Symbol.for("react.memo_cache_sentinel")) {
        i = {
            className: "sand-1n2onr6 sand-h8yej3 sand-ur7f20 sand-b3r6kr sand-1ua6jya sand-78zum5 sand-6s0dn4 sand-l56j7k sand-4b2ntj sand-j04kma"
        };
        s[8] = i;
    } else {
        i = s[8];
    }
    const i_className = i.className;
    let f;
    let h;
    if (s[9] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            aspectRatio: `${fi} / ${fj}`
        };
        h = {
            className: "sand-10l6tqk sand-10a8y8t sand-47corl"
        };
        s[9] = f;
        s[10] = h;
    } else {
        f = s[9];
        h = s[10];
    }
    let p;
    if (s[11] !== monitor.vncUrl) {
        p = <span className={h.className}><Je src={monitor.vncUrl}/></span>;
        s[11] = monitor.vncUrl;
        s[12] = p;
    } else {
        p = s[12];
    }
    let j;
    if (s[13] === Symbol.for("react.memo_cache_sentinel")) {
        j = <span aria-hidden className="sand-10l6tqk sand-10a8y8t sand-htitgo"/>;
        s[13] = j;
    } else {
        j = s[13];
    }
    let v;
    if (s[14] !== p) {
        v = <span className={i_className} style={f}>{p}{j}</span>;
        s[14] = p;
        s[15] = v;
    } else {
        v = s[15];
    }
    let g;
    if (s[16] === Symbol.for("react.memo_cache_sentinel")) {
        g = {
            className: "sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1jnr06f sand-h8yej3 sand-euugli"
        };
        s[16] = g;
    } else {
        g = s[16];
    }
    const g_className = g.className;
    let w;
    if (s[17] !== o) {
        w = o ? <span aria-hidden className="sand-2lah0s sand-1v4s8kt sand-ols6we sand-149ho13 sand-1h2qwge"/> : null;
        s[17] = o;
        s[18] = w;
    } else {
        w = s[18];
    }
    let R;
    if (s[19] === Symbol.for("react.memo_cache_sentinel")) {
        R = p_1(a_.label, sn.captionText);
        s[19] = R;
    } else {
        R = s[19];
    }
    let _;
    if (s[20] !== monitor.title) {
        _ = <span className={R.className}>{monitor.title}</span>;
        s[20] = monitor.title;
        s[21] = _;
    } else {
        _ = s[21];
    }
    let M;
    if (s[22] !== w || s[23] !== _) {
        M = <span className={g_className}>{w}{_}</span>;
        s[22] = w;
        s[23] = _;
        s[24] = M;
    } else {
        M = s[24];
    }
    let q;
    if (s[25] !== r || s[26] !== v || s[27] !== M || s[28] !== u) {
        q = <button aria-label={r} className={a} onClick={u} title={r} type="button">{v}{M}</button>;
        s[25] = r;
        s[26] = v;
        s[27] = M;
        s[28] = u;
        s[29] = q;
    } else {
        q = s[29];
    }
    return q;
}
function Wn(t, count) {
    return {
        showMore: t({
            id: "f3FhKh",
            values: {
                count
            }
        }),
        more: t({
            id: "ex+gRM",
            values: {
                count
            }
        }),
        andMore: t({
            id: "hya0Ya",
            values: {
                count
            }
        })
    };
}
function Nn1Component(t) {
    Nn1Component.d = 871;
    const s = c_1.c(24);
    const { monitors, onFocusMonitor } = t;
    const { _ } = u_1();
    const { _: __1 } = u_1();
    if (monitors.length === 0) {
        return null;
    }
    const c = monitors.length > ze + 1;
    let r;
    if (s[0] !== c || s[1] !== monitors) {
        r = c ? monitors.slice(0, ze) : monitors;
        s[0] = c;
        s[1] = monitors;
        s[2] = r;
    } else {
        r = s[2];
    }
    const a = r;
    let u;
    let role;
    let y;
    let f;
    if (s[3] !== __1 || s[4] !== _ || s[5] !== c || s[6] !== monitors || s[7] !== onFocusMonitor || s[8] !== a) {
        const p = c ? monitors.slice(ze) : [];
        const j = p.some(En);
        const v = Wn(__1, p.length);
        if (s[13] === Symbol.for("react.memo_cache_sentinel")) {
            u = r_2("sand-computer-monitor-strip", "sand-78zum5 sand-1cy8zhl sand-l56j7k sand-167g77z sand-2lah0s sand-h8yej3 sand-euugli sand-ch40qd sand-14vqqas");
            s[13] = u;
        } else {
            u = s[13];
        }
        role = "group";
        if (s[14] !== onFocusMonitor || s[15] !== a) {
            let g;
            if (s[17] !== onFocusMonitor) {
                g = (monitor)=><En1Component key={monitor.subagentId} monitor={monitor} onFocus={onFocusMonitor}/>;
                s[17] = onFocusMonitor;
                s[18] = g;
            } else {
                g = s[18];
            }
            y = a.map(g);
            s[14] = onFocusMonitor;
            s[15] = a;
            s[16] = y;
        } else {
            y = s[16];
        }
        f = p.length > 0 ? <Ne1 placement="top"><Ne1.Trigger><button aria-label={v.showMore} className={r_2("sand-computer-monitor-strip__more", "sand-78zum5 sand-dt5ytf sand-17d4w8g sand-ykynuu sand-s83m0k sand-euugli sand-18qnofl sand-1717udv sand-1ghz6dp sand-ng3xce sand-jbqb8w sand-jyslct sand-1lugfcp sand-jb2p0i sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1uczgqu sand-1725o6r sand-1wfwxd8 sand-7s97pk")} title={v.more} type="button"><span className="sand-1n2onr6 sand-h8yej3 sand-ur7f20 sand-b3r6kr sand-78zum5 sand-6s0dn4 sand-l56j7k sand-j04kma sand-6r4lm7 sand-p7q3dj"><W aria-hidden name="device-desktop" size="xl"/></span><span className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1jnr06f sand-h8yej3 sand-euugli">{j ? <span aria-hidden className="sand-2lah0s sand-1v4s8kt sand-ols6we sand-149ho13 sand-1h2qwge"/> : null}<span className={p_1(a_.label, sn.captionText).className}>{v.andMore}</span></span></button></Ne1.Trigger><Ne1.Content aria-label={_({
            id: "hxL96M"
        })} maxHeight={320} minWidth={240}>{p.map((g)=><Ne1.Item key={g.subagentId} label={g.title} onSelect={()=>onFocusMonitor(g.subagentId)} trailing={g.handoff != null ? <span aria-hidden className="sand-3nfvp2 sand-6s0dn4 sand-2lah0s sand-1v4s8kt sand-ols6we sand-149ho13 sand-1h2qwge"/> : undefined}>{g.title}</Ne1.Item>)}</Ne1.Content></Ne1> : null;
        s[3] = __1;
        s[4] = _;
        s[5] = c;
        s[6] = monitors;
        s[7] = onFocusMonitor;
        s[8] = a;
        s[9] = u;
        s[10] = role;
        s[11] = y;
        s[12] = f;
    } else {
        u = s[9];
        role = s[10];
        y = s[11];
        f = s[12];
    }
    let h;
    if (s[19] !== u || s[20] !== role || s[21] !== y || s[22] !== f) {
        h = <div className={u} role={role}>{y}{f}</div>;
        s[19] = u;
        s[20] = role;
        s[21] = y;
        s[22] = f;
        s[23] = h;
    } else {
        h = s[23];
    }
    return h;
}
function En(t) {
    return t.handoff != null;
}
const Le = "--sand-computer-stage-clip-inset";
const On = 1 / 1024;
const ae = (t)=>Math.round(t * 64) / 64;
const te = (t)=>Math.floor(t + 0.5);
const Ln = (t, devicePixelRatio)=>`${Number((t / devicePixelRatio).toFixed(6))}px`;
function Hn(t, devicePixelRatio) {
    if (!(devicePixelRatio > 0)) {
        return "0px";
    }
    const e = ae(t.top * devicePixelRatio);
    const l = ae(t.right * devicePixelRatio);
    const d = ae(t.bottom * devicePixelRatio);
    const o = ae(t.left * devicePixelRatio);
    const c = {
        top: te(e) - e,
        right: l - te(l),
        bottom: d - te(d),
        left: te(o) - o
    };
    const r = Object.values(c).some((a)=>a !== 0) ? On : 0;
    return [
        c.top,
        c.right - r,
        c.bottom - r,
        c.left
    ].map((a)=>Ln(a, devicePixelRatio)).join(" ");
}
function ref(t) {
    if (t == null) {
        return;
    }
    let s = null;
    const e = ()=>{
        const o = Hn(t.getBoundingClientRect(), window.devicePixelRatio);
        if (o !== s) {
            s = o;
            t.style.setProperty(Le, o);
        }
    };
    e();
    const l = new ResizeObserver(e);
    l.observe(t, {
        box: "device-pixel-content-box"
    });
    const d = t.closest(".sand-computer-stage");
    if (d != null) {
        l.observe(d);
    }
    return ()=>{
        l.disconnect();
        t.style.removeProperty(Le);
    };
}
const He = {
    retry: {
        kfzvcC: "sand-67bb7w",
        $$css: true
    },
    retryCover: {
        kWkggS: "sand-6r4lm7 sand-y5l4bz",
        kGVxlE: "sand-j04kma",
        kMwMTN: "sand-5a26a2",
        $$css: true
    }
};
function De(t, { hostPhase, isScreenLoading, isScreenUnavailable, subjectLabel, emptyMessage, isEmptyLoading, pullPercent }) {
    if (hostPhase === "away" && emptyMessage === undefined) {
        return {
            message: t({
                id: "soS3lz"
            }),
            progressPercent: null,
            isBusy: false,
            hasRetry: false
        };
    }
    if (isScreenLoading) {
        return {
            message: t({
                id: "YyFUtq",
                values: {
                    subjectLabel
                }
            }),
            progressPercent: null,
            isBusy: true,
            hasRetry: false
        };
    }
    if (isScreenUnavailable) {
        return {
            message: t({
                id: "h5KMW0",
                values: {
                    subjectLabel
                }
            }),
            progressPercent: null,
            isBusy: false,
            hasRetry: true
        };
    }
    if (pullPercent != null) {
        return {
            message: t({
                id: "gneNq2"
            }),
            progressPercent: pullPercent,
            isBusy: true,
            hasRetry: false
        };
    }
    return {
        message: emptyMessage ?? t(isEmptyLoading ? {
            id: "CF2LbG"
        } : {
            id: "bDwcLM"
        }),
        progressPercent: null,
        isBusy: isEmptyLoading,
        hasRetry: false
    };
}
function An1Component(t) {
    An1Component.d = 875;
    const s = c_1.c(17);
    const { copy, tone, onRetry } = t;
    const o = tone === "cover";
    let c;
    if (s[0] !== o) {
        c = r_2("sand-computer-stage__placeholder", {
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-193iq5w sand-2b8uid sand-167g77z sand-c7ga6q sand-19aaqeu"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-1v2ro7d sand-193iq5w sand-ggk2y7 sand-2b8uid sand-fungia sand-ntwwlm sand-eyyvf2 sand-637eza sand-6p93vc"
            }
        }[!!o << 0].className);
        s[0] = o;
        s[1] = c;
    } else {
        c = s[1];
    }
    let r;
    if (s[2] !== copy.isBusy || s[3] !== copy.message) {
        r = copy.isBusy ? <Nn label={copy.message}/> : <span className={p_1(a_.body2).className}>{copy.message}</span>;
        s[2] = copy.isBusy;
        s[3] = copy.message;
        s[4] = r;
    } else {
        r = s[4];
    }
    let a;
    if (s[5] !== copy.isBusy || s[6] !== copy.progressPercent) {
        a = copy.isBusy && copy.progressPercent != null ? <span className="sand-78zum5 sand-6s0dn4 sand-167g77z sand-weiyed sand-193iq5w"><span aria-hidden className="sand-1n2onr6 sand-1iyjqo2 sand-s83m0k sand-euugli sand-ols6we sand-149ho13 sand-b3r6kr sand-n5dbpy"><span className="sand-10l6tqk sand-13vifvy sand-1ey2m1c sand-1o0tod sand-149ho13 sand-twfq29" style={{
            width: `${q(copy.progressPercent, 0, 100)}%`
        }}/></span><span className={p_1(a_.body2).className}>{Math.round(copy.progressPercent)}%</span></span> : null;
        s[5] = copy.isBusy;
        s[6] = copy.progressPercent;
        s[7] = a;
    } else {
        a = s[7];
    }
    let u;
    if (s[8] !== copy.hasRetry || s[9] !== o || s[10] !== onRetry) {
        u = copy.hasRetry ? <_s className="sand-computer-stage__retry" onClick={onRetry} size="sm" style={[
            He.retry,
            o && He.retryCover
        ]} variant="secondary"><T_1 id="6gRgw8"/></_s> : null;
        s[8] = copy.hasRetry;
        s[9] = o;
        s[10] = onRetry;
        s[11] = u;
    } else {
        u = s[11];
    }
    let i;
    if (s[12] !== c || s[13] !== r || s[14] !== a || s[15] !== u) {
        i = <div className={c}>{r}{a}{u}</div>;
        s[12] = c;
        s[13] = r;
        s[14] = a;
        s[15] = u;
        s[16] = i;
    } else {
        i = s[16];
    }
    return i;
}
const Ue = {
    teachButton: {
        kWkggS: "sand-2eai4v",
        kMzoRj: "sand-4hv7ue",
        ksu8eU: "sand-1y0btm7",
        kVAM5u: "sand-1flfzmt",
        kMwMTN: "sand-fungia",
        $$css: true
    },
    overlayIconButton: {
        kMwMTN: "sand-99e291 sand-1v0sr2s",
        $$css: true
    }
};
function Tn1Component(t) {
    Tn1Component.d = 876;
    const s = c_1.c(26);
    const { onStartTeach, onExitFullscreen } = t;
    const { _ } = u_1();
    const { platform } = fh();
    const { isFullscreen } = fk();
    let r;
    let a;
    if (s[0] !== isFullscreen || s[1] !== platform) {
        r = ({
            0: {
                className: "sand-1n2onr6 sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s sand-h8yej3 sand-n3w4p2 sand-mzvs34 sand-lkep63"
            },
            1: {
                className: "sand-1n2onr6 sand-9f619 sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s sand-h8yej3 sand-n3w4p2 sand-mzvs34 sand-lkep63 sand-16zh34g"
            }
        })[(platform === "darwin" && !isFullscreen) << 0];
        a = r_2("sand-computer-top-bar", r.className);
        s[0] = isFullscreen;
        s[1] = platform;
        s[2] = r;
        s[3] = a;
    } else {
        r = s[2];
        a = s[3];
    }
    let u;
    if (s[4] !== r.style) {
        u = {
            ...r.style,
            backgroundColor: fl.topBar.css
        };
        s[4] = r.style;
        s[5] = u;
    } else {
        u = s[5];
    }
    let i;
    let y;
    if (s[6] === Symbol.for("react.memo_cache_sentinel")) {
        i = <span aria-hidden className="sand-1iyjqo2 sand-s83m0k sand-kh2ocl sand-euugli sand-avu8j0 sand-1wfn6di"/>;
        y = r_2("sand-computer-top-bar__actions", "sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s sand-lvsv26 sand-482pwi");
        s[6] = i;
        s[7] = y;
    } else {
        i = s[6];
        y = s[7];
    }
    let f;
    if (s[8] !== _ || s[9] !== onStartTeach) {
        f = onStartTeach == null ? null : <_s aria-label={_({
            id: "yrMloC"
        })} onClick={onStartTeach} size="sm" style={[
            Ue.teachButton,
            a_.body2,
            a$.regular
        ]} title={_({
            id: "yrMloC"
        })} variant="secondary"><span className="sand-3nfvp2 sand-6s0dn4 sand-1jnr06f"><span className="sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-1xp8n7a sand-mix8c7"><U/></span><T_1 id="yrMloC"/></span></_s>;
        s[8] = _;
        s[9] = onStartTeach;
        s[10] = f;
    } else {
        f = s[10];
    }
    let h;
    if (s[11] !== _) {
        h = _({
            id: "sQpDn6"
        });
        s[11] = _;
        s[12] = h;
    } else {
        h = s[12];
    }
    let p;
    if (s[13] !== _) {
        p = _({
            id: "sQpDn6"
        });
        s[13] = _;
        s[14] = p;
    } else {
        p = s[14];
    }
    let j;
    if (s[15] !== onExitFullscreen || s[16] !== h || s[17] !== p) {
        j = <Qe1 aria-label={h} icon="arrows-contract-simple" onClick={onExitFullscreen} size="sm" style={Ue.overlayIconButton} title={p}/>;
        s[15] = onExitFullscreen;
        s[16] = h;
        s[17] = p;
        s[18] = j;
    } else {
        j = s[18];
    }
    let v;
    if (s[19] !== f || s[20] !== j) {
        v = <div className={y}>{f}{j}</div>;
        s[19] = f;
        s[20] = j;
        s[21] = v;
    } else {
        v = s[21];
    }
    let g;
    if (s[22] !== a || s[23] !== u || s[24] !== v) {
        g = <div className={a} style={u}>{i}{v}</div>;
        s[22] = a;
        s[23] = u;
        s[24] = v;
        s[25] = g;
    } else {
        g = s[25];
    }
    return g;
}
function ln(subjectLabel) {
    const s = c_1.c(4);
    const { _ } = u_1();
    const l = fm();
    let d;
    if (s[0] !== _ || s[1] !== l || s[2] !== subjectLabel) {
        d = (o, c)=>{
            l.start(o, c);
            d_1(_({
                id: "AdIOli",
                values: {
                    subjectLabel
                }
            }));
        };
        s[0] = _;
        s[1] = l;
        s[2] = subjectLabel;
        s[3] = d;
    } else {
        d = s[3];
    }
    return d;
}
function Un(t) {
    const s = Math.max(0, Math.floor(t / 1000));
    const e = Math.floor(s / 60);
    const l = s % 60;
    return `${e}:${String(l).padStart(2, "0")}`;
}
const as = {
    recordPill: {
        kmuXW: "sand-2lah0s",
        kaIpWk: "sand-1kogg8i",
        kLKAdn: "sand-1iorvi4",
        kGO01o: "sand-jkvuk6",
        kZCmMZ: "sand-25sj25",
        kwRFfy: "sand-1icxu4v",
        kOIVth: "sand-1jnr06f",
        kGuDYH: "sand-11wthnw",
        kLWn49: "sand-d4r4e8",
        kWkggS: "sand-ntrugh sand-19ii5eu",
        kMwMTN: "sand-fungia",
        $$css: true
    },
    stopRecording: {
        kmuXW: "sand-2lah0s",
        kaIpWk: "sand-1kogg8i",
        kLKAdn: "sand-1iorvi4",
        kGO01o: "sand-jkvuk6",
        kZCmMZ: "sand-25sj25",
        kwRFfy: "sand-1icxu4v",
        kGuDYH: "sand-11wthnw",
        kLWn49: "sand-d4r4e8",
        kWkggS: "sand-6y9aml sand-tly4hf",
        kMwMTN: "sand-6rl5ky",
        $$css: true
    },
    stopRecordingOverlay: {
        kWkggS: "sand-1hqw4a3 sand-46gfeq",
        kMwMTN: "sand-dmyetp",
        $$css: true
    },
    discardRecording: {
        kMwMTN: "sand-6rl5ky sand-n4ifyr",
        $$css: true
    },
    discardRecordingOverlay: {
        kMwMTN: "sand-dmyetp sand-10r3i2m",
        $$css: true
    },
    dismiss: {
        kmuXW: "sand-2lah0s",
        kMwMTN: "sand-102cea3 sand-10r3i2m",
        $$css: true
    }
};
function Dn1Component(t) {
    Dn1Component.d = 880;
    const s = c_1.c(78);
    const { agentId, subjectLabel, recordingAgentName, isTeachTaskAvailable, isOverlayTone, onStopAndSave } = t;
    const { _: __1 } = u_1();
    const u = fn();
    const i = fo();
    const y = fp();
    const f = fm();
    const h = ln(subjectLabel);
    if (u.state === "recording") {
        const x = u.agentId;
        if (x == null) {
            return null;
        }
        const H = x === agentId;
        let X;
        if (s[0] !== __1 || s[1] !== recordingAgentName) {
            X = recordingAgentName == null ? __1({
                id: "68rgYg"
            }) : __1({
                id: "3h2s4g",
                values: {
                    recordingAgentName
                }
            });
            s[0] = __1;
            s[1] = recordingAgentName;
            s[2] = X;
        } else {
            X = s[2];
        }
        const D = X;
        const ds = y - (u.startedAtMs ?? y);
        let es;
        if (s[3] !== ds) {
            es = Un(ds);
            s[3] = ds;
            s[4] = es;
        } else {
            es = s[4];
        }
        const I = es;
        let Q;
        if (s[5] === Symbol.for("react.memo_cache_sentinel")) {
            Q = {
                className: "sand-9f619 sand-78zum5 sand-1cy8zhl sand-h8yej3 sand-dqyycr sand-2lah0s"
            };
            s[5] = Q;
        } else {
            Q = s[5];
        }
        const C = Q.className;
        let Y;
        if (s[6] !== isOverlayTone) {
            Y = ({
                0: {
                    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-889kno sand-1a8lsjc sand-1n2onr6 sand-h8yej3 sand-193iq5w sand-2lah0s sand-ou54vl sand-p59q4u sand-1g0dm76 sand-2vl965 sand-1q4ynmn sand-1tiofj7 sand-vn2z4z sand-1gnnqk1"
                },
                1: {
                    className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-889kno sand-1a8lsjc sand-1n2onr6 sand-h8yej3 sand-193iq5w sand-2lah0s sand-ou54vl sand-p59q4u sand-1g0dm76 sand-2vl965 sand-1q4ynmn sand-vn2z4z sand-1gnnqk1 sand-1kj7bwx"
                }
            })[!!isOverlayTone << 0];
            s[6] = isOverlayTone;
            s[7] = Y;
        } else {
            Y = s[7];
        }
        const zs = Y.className;
        let U;
        if (s[8] !== isOverlayTone) {
            U = ({
                0: {
                    className: "sand-1iyjqo2 sand-s83m0k sand-euugli sand-11wthnw sand-d4r4e8 sand-tyxrsu"
                },
                1: {
                    className: "sand-1iyjqo2 sand-s83m0k sand-euugli sand-11wthnw sand-d4r4e8 sand-5a26a2"
                }
            })[!!isOverlayTone << 0];
            s[8] = isOverlayTone;
            s[9] = U;
        } else {
            U = s[9];
        }
        let ns;
        if (s[10] !== __1 || s[11] !== H || s[12] !== D || s[13] !== subjectLabel) {
            ns = H ? __1({
                id: "AdIOli",
                values: {
                    subjectLabel
                }
            }) : D;
            s[10] = __1;
            s[11] = H;
            s[12] = D;
            s[13] = subjectLabel;
            s[14] = ns;
        } else {
            ns = s[14];
        }
        let B;
        if (s[15] !== U.className || s[16] !== ns) {
            B = <span className={U.className}>{ns}</span>;
            s[15] = U.className;
            s[16] = ns;
            s[17] = B;
        } else {
            B = s[17];
        }
        let A;
        if (s[18] !== __1) {
            A = __1({
                id: "ITj4Ys"
            });
            s[18] = __1;
            s[19] = A;
        } else {
            A = s[19];
        }
        let leadingIcon;
        if (s[20] === Symbol.for("react.memo_cache_sentinel")) {
            leadingIcon = {
                name: "square",
                variant: "filled"
            };
            s[20] = leadingIcon;
        } else {
            leadingIcon = s[20];
        }
        let k;
        if (s[21] !== f || s[22] !== onStopAndSave || s[23] !== x) {
            k = ()=>{
                f.stop(x, true);
                onStopAndSave();
            };
            s[21] = f;
            s[22] = onStopAndSave;
            s[23] = x;
            s[24] = k;
        } else {
            k = s[24];
        }
        let F;
        if (s[25] !== isOverlayTone) {
            F = isOverlayTone ? [
                as.stopRecording,
                as.stopRecordingOverlay
            ] : as.stopRecording;
            s[25] = isOverlayTone;
            s[26] = F;
        } else {
            F = s[26];
        }
        let K;
        if (s[27] !== __1) {
            K = __1({
                id: "pJ/IRc"
            });
            s[27] = __1;
            s[28] = K;
        } else {
            K = s[28];
        }
        let V;
        if (s[29] !== I || s[30] !== A || s[31] !== k || s[32] !== F || s[33] !== K) {
            V = <_s aria-label={A} leadingIcon={leadingIcon} onClick={k} size="sm" style={F} title={K} variant="primary">{I}</_s>;
            s[29] = I;
            s[30] = A;
            s[31] = k;
            s[32] = F;
            s[33] = K;
            s[34] = V;
        } else {
            V = s[34];
        }
        let T;
        if (s[35] !== __1) {
            T = __1({
                id: "joVvhG"
            });
            s[35] = __1;
            s[36] = T;
        } else {
            T = s[36];
        }
        let W;
        if (s[37] !== f || s[38] !== x) {
            W = ()=>f.stop(x, false);
            s[37] = f;
            s[38] = x;
            s[39] = W;
        } else {
            W = s[39];
        }
        let N;
        if (s[40] !== isOverlayTone) {
            N = isOverlayTone ? [
                as.discardRecording,
                as.discardRecordingOverlay
            ] : as.discardRecording;
            s[40] = isOverlayTone;
            s[41] = N;
        } else {
            N = s[41];
        }
        let E;
        if (s[42] !== __1) {
            E = __1({
                id: "joVvhG"
            });
            s[42] = __1;
            s[43] = E;
        } else {
            E = s[43];
        }
        let O;
        if (s[44] !== T || s[45] !== W || s[46] !== N || s[47] !== E) {
            O = <Qe1 aria-label={T} icon="close" onClick={W} size="sm" style={N} title={E}/>;
            s[44] = T;
            s[45] = W;
            s[46] = N;
            s[47] = E;
            s[48] = O;
        } else {
            O = s[48];
        }
        let J;
        if (s[49] !== B || s[50] !== V || s[51] !== O || s[52] !== Y.className) {
            J = <div className={C}><div className={zs}>{B}{V}{O}</div></div>;
            s[49] = B;
            s[50] = V;
            s[51] = O;
            s[52] = Y.className;
            s[53] = J;
        } else {
            J = s[53];
        }
        return J;
    }
    if (agentId == null || !(i?.agentId === agentId) || !isTeachTaskAvailable) {
        return null;
    }
    let j;
    if (s[54] === Symbol.for("react.memo_cache_sentinel")) {
        j = {
            className: "sand-9f619 sand-78zum5 sand-6s0dn4 sand-1v2ro7d sand-h8yej3 sand-889kno sand-2vl965 sand-1a8lsjc sand-1g0dm76 sand-1q4ynmn sand-1yx5i47 sand-vn2z4z"
        };
        s[54] = j;
    } else {
        j = s[54];
    }
    const j_className = j.className;
    let g;
    if (s[55] === Symbol.for("react.memo_cache_sentinel")) {
        g = {
            className: "sand-1iyjqo2 sand-s83m0k sand-euugli sand-11wthnw sand-d4r4e8 sand-5a26a2"
        };
        s[55] = g;
    } else {
        g = s[55];
    }
    let z;
    if (s[56] !== subjectLabel) {
        z = <span className={g.className}><T_1 id="zTyn2M" values={{
            subjectLabel
        }}/></span>;
        s[56] = subjectLabel;
        s[57] = z;
    } else {
        z = s[57];
    }
    let w;
    if (s[58] !== agentId || s[59] !== i?.entryPoint || s[60] !== f || s[61] !== h) {
        w = ()=>{
            const x = i?.entryPoint ?? "screen_hover";
            f.arm(null);
            h(agentId, x);
        };
        s[58] = agentId;
        s[59] = i?.entryPoint;
        s[60] = f;
        s[61] = h;
        s[62] = w;
    } else {
        w = s[62];
    }
    let R;
    if (s[63] === Symbol.for("react.memo_cache_sentinel")) {
        R = {
            className: "sand-3nfvp2 sand-6s0dn4 sand-1jnr06f"
        };
        s[63] = R;
    } else {
        R = s[63];
    }
    let _;
    if (s[64] === Symbol.for("react.memo_cache_sentinel")) {
        _ = <span className={R.className}><U/><span><T_1 id="IJaotC"/></span></span>;
        s[64] = _;
    } else {
        _ = s[64];
    }
    let M;
    if (s[65] !== w) {
        M = <_s onClick={w} size="sm" style={as.recordPill} variant="primary">{_}</_s>;
        s[65] = w;
        s[66] = M;
    } else {
        M = s[66];
    }
    let q;
    if (s[67] !== __1) {
        q = __1({
            id: "1QfxQT"
        });
        s[67] = __1;
        s[68] = q;
    } else {
        q = s[68];
    }
    let L;
    if (s[69] !== f) {
        L = ()=>f.arm(null);
        s[69] = f;
        s[70] = L;
    } else {
        L = s[70];
    }
    let ss;
    if (s[71] !== L || s[72] !== q) {
        ss = <Qe1 aria-label={q} icon="close" onClick={L} size="sm" style={as.dismiss}/>;
        s[71] = L;
        s[72] = q;
        s[73] = ss;
    } else {
        ss = s[73];
    }
    let P;
    if (s[74] !== ss || s[75] !== z || s[76] !== M) {
        P = <div className={j_className}>{z}{M}{ss}</div>;
        s[74] = ss;
        s[75] = z;
        s[76] = M;
        s[77] = P;
    } else {
        P = s[77];
    }
    return P;
}
function Cn1Component(t) {
    Cn1Component.d = 881;
    const s = c_1.c(1);
    const { agentId } = t;
    const l = fn();
    if (agentId == null || l.state !== "recording" || l.agentId !== agentId) {
        return null;
    }
    let d;
    if (s[0] === Symbol.for("react.memo_cache_sentinel")) {
        d = <div aria-hidden className="sand-10l6tqk sand-10a8y8t sand-9f619 sand-2u8bby sand-dh2fpr sand-1y0btm7 sand-jz30o7 sand-47corl sand-1u8a7rm" data-recording-frame="true"/>;
        s[0] = d;
    } else {
        d = s[0];
    }
    return d;
}
const le = {
    captionText: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        k9WMMc: "sand-2b8uid",
        kMwMTN: "sand-102cea3",
        $$css: true
    },
    bannerBody: {
        kzQI83: "sand-1iyjqo2",
        kmuXW: "sand-s83m0k",
        k7Eaqz: "sand-euugli",
        k1xSpc: "sand-104kibb",
        kgKLqz: "sand-1ua5tub",
        kJFfOR: "sand-1h7i4cw",
        kHjlTd: "sand-j0a0fe",
        kORKVm: "sand-10wlt62",
        kMwMTN: "sand-n0e0ga",
        $$css: true
    },
    buttonSecondary: {
        kWkggS: "sand-6r4lm7 sand-y5l4bz",
        kGVxlE: "sand-j04kma",
        kMwMTN: "sand-5a26a2",
        $$css: true
    },
    buttonPrimary: {
        kWkggS: "sand-3wg7rn sand-1kc055u",
        kMwMTN: "sand-b78v21",
        $$css: true
    }
};
function resolveActiveHandoff(t, s) {
    return t?.handoff ?? s;
}
function resolveHandBackTarget(t) {
    if (t?.handoff != null) {
        return {
            kind: "monitor",
            subagentId: t.subagentId
        };
    }
    return {
        kind: "base"
    };
}
function un({ isStageLive, isHandoffWaiting }) {
    return isStageLive && !isHandoffWaiting;
}
function resolveFocus(t, s) {
    if (s != null && t.some((l)=>l.subagentId === s)) {
        return s;
    }
    return t.find((l)=>l.handoff != null)?.subagentId ?? t[0]?.subagentId ?? null;
}
function Ke(t) {
    switch(t){
        case "ArrowDown":
            return 1;
        case "ArrowUp":
            return -1;
        default:
            return a7(t, a6());
    }
}
const Kn = c_2({
    name: "computer-vnc-focus-probe",
    delayMs: 32
});
function Ge(OeRef, keRef, e, vncSession) {
    if (OeRef.current == null) {
        OeRef.current = Kn.wrap((d, o)=>{
            if (!keRef.current || !d.isConnected || !bB(d)) {
                return;
            }
            d.focus();
            const { host } = ft(d.getAttribute("src") ?? "");
            o({
                surface: "interactive",
                phase: "focus",
                ...host == null ? {} : {
                    vncHost: host
                },
                focusOwner: "vnc",
                focusLanded: document.activeElement === d
            });
        });
    }
    OeRef.current(e, vncSession);
}
function FnComponent(t) {
    FnComponent.d = 865;
    const s = c_1.c(139);
    const { isOpen, agentId, viewer, isScreenLoading, isScreenUnavailable, onRetryScreen, monitors, focusMonitorId, subjectLabel, recordingAgentName, setupVncUrl, emptyMessage, isEmptyLoading, pullPercent, baseHandoff, onMinimize, onHandBackHandoff, onDismissHandoff, onRequestComposerFocus, openedAtMs, openTrigger } = t;
    const q = viewer === undefined ? "owner" : viewer;
    const isEmptyLoading_1 = isEmptyLoading === undefined ? true : isEmptyLoading;
    const ss = pullPercent === undefined ? null : pullPercent;
    const { _: __1 } = u_1();
    const { _: __2 } = u_1();
    const H = fq();
    const X = fo();
    const D = fn();
    const ds = fm();
    const es = ln(subjectLabel);
    const hostPhase = fr();
    let Q;
    if (s[0] !== hostPhase) {
        Q = fs_1(hostPhase);
        s[0] = hostPhase;
        s[1] = Q;
    } else {
        Q = s[1];
    }
    const C = Q;
    const [Y, setY] = r_1.useState(null);
    const [U, setU] = r_1.useState(null);
    let B = resolveFocus(monitors, Y);
    let A = U;
    if (isOpen) {
        if (focusMonitorId != null && focusMonitorId !== U) {
            A = focusMonitorId;
            if (monitors.some((m)=>m.subagentId === focusMonitorId)) {
                B = focusMonitorId;
            }
        }
    } else {
        A = null;
    }
    if (B !== Y) {
        setY(B);
    }
    if (A !== U) {
        setU(A);
    }
    const ms = Math.max(0, monitors.findIndex((m)=>m.subagentId === B));
    const k = monitors[ms] ?? null;
    let F;
    if (s[2] !== k?.subagentId || s[3] !== monitors) {
        let m;
        if (s[5] !== k?.subagentId) {
            m = (S)=>S.subagentId !== k?.subagentId;
            s[5] = k?.subagentId;
            s[6] = m;
        } else {
            m = s[6];
        }
        F = monitors.filter(m);
        s[2] = k?.subagentId;
        s[3] = monitors;
        s[4] = F;
    } else {
        F = s[4];
    }
    const K = F;
    let V;
    if (s[7] !== monitors) {
        V = (m)=>{
            if (!(monitors.length < 2)) {
                setY((S)=>{
                    const os = monitors.findIndex((vn)=>vn.subagentId === S);
                    const jn = ((os === -1 ? 0 : os) + m + monitors.length) % monitors.length;
                    return monitors[jn]?.subagentId ?? S;
                });
            }
        };
        s[7] = monitors;
        s[8] = V;
    } else {
        V = s[8];
    }
    const T = V;
    let W;
    if (s[9] !== agentId || s[10] !== onMinimize || s[11] !== onRequestComposerFocus || s[12] !== X || s[13] !== ds || s[14] !== D.state) {
        W = ()=>{
            if (D.state !== "recording" && X?.agentId === agentId && X.entryPoint === "composer_menu") {
                ds.arm(null);
            }
            onMinimize();
            onRequestComposerFocus();
        };
        s[9] = agentId;
        s[10] = onMinimize;
        s[11] = onRequestComposerFocus;
        s[12] = X;
        s[13] = ds;
        s[14] = D.state;
        s[15] = W;
    } else {
        W = s[15];
    }
    const N = W;
    let E;
    if (s[16] !== monitors.length || s[17] !== T) {
        E = (m)=>{
            if (monitors.length < 2) {
                return;
            }
            const S = Ke(m.key);
            if (S != null) {
                m.preventDefault();
                T(S);
            }
        };
        s[16] = monitors.length;
        s[17] = T;
        s[18] = E;
    } else {
        E = s[18];
    }
    const O = E;
    let J;
    if (s[19] !== O || s[20] !== isOpen) {
        J = (m)=>{
            if (!(m == null || !isOpen)) {
                window.addEventListener("keydown", O);
                m.focus();
                return ()=>{
                    window.removeEventListener("keydown", O);
                };
            }
        };
        s[19] = O;
        s[20] = isOpen;
        s[21] = J;
    } else {
        J = s[21];
    }
    const de = J;
    let Is;
    if (s[22] !== k) {
        Is = resolveHandBackTarget(k);
        s[22] = k;
        s[23] = Is;
    } else {
        Is = s[23];
    }
    const Ce = Is;
    const fs = Ce.kind === "monitor" ? Ce.subagentId : null;
    let Ts;
    if (s[24] !== fs || s[25] !== N || s[26] !== onHandBackHandoff) {
        Ts = ()=>{
            onHandBackHandoff(fs);
            N();
        };
        s[24] = fs;
        s[25] = N;
        s[26] = onHandBackHandoff;
        s[27] = Ts;
    } else {
        Ts = s[27];
    }
    const gn = Ts;
    let Cs;
    if (s[28] !== fs || s[29] !== N || s[30] !== onDismissHandoff) {
        Cs = ()=>{
            onDismissHandoff(fs);
            N();
        };
        s[28] = fs;
        s[29] = N;
        s[30] = onDismissHandoff;
        s[31] = Cs;
    } else {
        Cs = s[31];
    }
    const hn = Cs;
    const Ms = resolveActiveHandoff(k, baseHandoff);
    const isHandoffWaiting = Ms != null;
    const Ps = monitors.length > 0;
    const $e = !Ps && setupVncUrl != null;
    const stageKey = k?.subagentId ?? ($e ? "setup" : null);
    const vncUrl = k?.vncUrl ?? ($e ? setupVncUrl : null);
    let As;
    if (s[32] !== C || s[33] !== stageKey || s[34] !== vncUrl) {
        As = C && stageKey != null && vncUrl != null ? {
            stageKey,
            vncUrl
        } : null;
        s[32] = C;
        s[33] = stageKey;
        s[34] = vncUrl;
        s[35] = As;
    } else {
        As = s[35];
    }
    const Z = As;
    const isScreenLoading_1 = isScreenLoading && !Ps;
    const isScreenUnavailable_1 = isScreenUnavailable && !Ps;
    const pullPercent_1 = Ps ? null : ss;
    let Fs;
    if (s[36] !== __1 || s[37] !== emptyMessage || s[38] !== hostPhase || s[39] !== isEmptyLoading_1 || s[40] !== subjectLabel || s[41] !== isScreenLoading_1 || s[42] !== isScreenUnavailable_1 || s[43] !== pullPercent_1) {
        Fs = De(__1, {
            hostPhase,
            isScreenLoading: isScreenLoading_1,
            isScreenUnavailable: isScreenUnavailable_1,
            subjectLabel,
            emptyMessage,
            isEmptyLoading: isEmptyLoading_1,
            pullPercent: pullPercent_1
        });
        s[36] = __1;
        s[37] = emptyMessage;
        s[38] = hostPhase;
        s[39] = isEmptyLoading_1;
        s[40] = subjectLabel;
        s[41] = isScreenLoading_1;
        s[42] = isScreenUnavailable_1;
        s[43] = pullPercent_1;
        s[44] = Fs;
    } else {
        Fs = s[44];
    }
    const copy = Fs;
    const [Pe, setPe] = r_1.useState(null);
    if ((!isOpen || !C) && Pe != null) {
        setPe(null);
    }
    const oe = stageKey != null && Pe === stageKey;
    const [Ae, setAe] = r_1.useState(null);
    if (!C && Ae != null) {
        setAe(null);
    }
    const yn = stageKey != null && Ae === stageKey;
    let Vs;
    if (s[45] !== stageKey) {
        Vs = (m)=>{
            setAe(m ? stageKey : null);
        };
        s[45] = stageKey;
        s[46] = Vs;
    } else {
        Vs = s[46];
    }
    const onConnectedChange = Vs;
    const [Ve, setVe] = r_1.useState(null);
    if (!C && Ve != null) {
        setVe(null);
    }
    const pn = stageKey != null && Ve === stageKey;
    let Ws;
    if (s[47] !== stageKey) {
        Ws = (m)=>{
            setVe(m ? stageKey : null);
        };
        s[47] = stageKey;
        s[48] = Ws;
    } else {
        Ws = s[48];
    }
    const onCrashedChange = Ws;
    const [Ee, setEe] = r_1.useState(null);
    if (!C && Ee != null) {
        setEe(null);
    }
    const rs = stageKey != null && Ee === stageKey;
    let Es;
    if (s[49] !== onRetryScreen || s[50] !== setEe) {
        Es = ()=>{
            setEe(null);
            onRetryScreen();
        };
        s[49] = onRetryScreen;
        s[50] = setEe;
        s[51] = Es;
    } else {
        Es = s[51];
    }
    const onRetry = Es;
    const qs = isOpen && !yn && !pn && !rs;
    const kn = ak("main");
    let ge = null;
    if (Z == null) {
        if (copy.isBusy) {
            ge = copy.message;
        }
    } else if (qs) {
        let m;
        if (s[52] !== __2) {
            m = __2({
                id: "9zb2WA"
            });
            s[52] = __2;
            s[53] = m;
        } else {
            m = s[53];
        }
        ge = m;
    }
    aW(isOpen && !kn ? ge : null);
    const [he] = r_1.useState(Gn);
    const yeRef = r_1.useRef(null);
    let Os;
    if (s[54] === Symbol.for("react.memo_cache_sentinel")) {
        Os = (m)=>{
            yeRef.current = m;
        };
        s[54] = Os;
    } else {
        Os = s[54];
    }
    const pe = Os;
    const keRef = r_1.useRef(isOpen);
    const OeRef = r_1.useRef(null);
    let Ls;
    if (s[55] !== isOpen || s[56] !== oe || s[57] !== stageKey || s[58] !== H) {
        Ls = (m)=>{
            if (isOpen) {
                if (m && !oe) {
                    const S = yeRef.current;
                    if (S != null) {
                        S.focus();
                        Ge(OeRef, keRef, S, H.vncSession);
                    }
                }
                setPe(m ? stageKey : null);
            }
        };
        s[55] = isOpen;
        s[56] = oe;
        s[57] = stageKey;
        s[58] = H;
        s[59] = Ls;
    } else {
        Ls = s[59];
    }
    const onReadyChange = Ls;
    let Hs;
    if (s[60] !== isOpen || s[61] !== de || s[62] !== H) {
        Hs = (m)=>{
            keRef.current = m != null && isOpen;
            const S = de(m);
            if (m == null || !isOpen) {
                return S;
            }
            const yeRef_current = yeRef.current;
            if (yeRef_current != null && bB(yeRef_current)) {
                yeRef_current.focus();
                Ge(OeRef, keRef, yeRef_current, H.vncSession);
            }
            return S;
        };
        s[60] = isOpen;
        s[61] = de;
        s[62] = H;
        s[63] = Hs;
    } else {
        Hs = s[63];
    }
    const ve = Hs;
    let Ds;
    if (s[64] !== T) {
        Ds = (m)=>{
            const S = Ke(m);
            if (S != null) {
                T(S);
            }
        };
        s[64] = T;
        s[65] = Ds;
    } else {
        Ds = s[65];
    }
    const onHostKey = Ds;
    const is = D.state === "recording" && D.agentId === agentId;
    const isStageLive = Z != null;
    let Us;
    if (s[66] !== isHandoffWaiting || s[67] !== isStageLive) {
        Us = un({
            isStageLive,
            isHandoffWaiting
        });
        s[66] = isHandoffWaiting;
        s[67] = isStageLive;
        s[68] = Us;
    } else {
        Us = s[68];
    }
    const Ks = Us;
    const xe = agentId != null && q === "owner" && D.state !== "recording" && Ks && openTrigger === "preview";
    let Gs;
    if (s[69] !== agentId || s[70] !== es) {
        Gs = ()=>{
            if (agentId != null) {
                es(agentId, "fullscreen_title_bar");
            }
        };
        s[69] = agentId;
        s[70] = es;
        s[71] = Gs;
    } else {
        Gs = s[71];
    }
    const onStartTeach = Gs;
    const Se = isHandoffWaiting ? <div className={r_2("sand-computer-banner", "sand-9f619 sand-78zum5 sand-6s0dn4 sand-ou54vl sand-2lah0s sand-h8yej3 sand-1e56ztr sand-889kno sand-2vl965 sand-1a8lsjc sand-1g0dm76 sand-1q4ynmn sand-v1id1i")}><span className={r_2("sand-computer-banner__body", p_1(a_.body2, le.bannerBody).className)} title={Ms?.instruction}>{Ms != null && Ms.instruction.trim().length > 0 ? Ms.instruction : __2({
        id: "JnE9gk",
        values: {
            subjectLabel
        }
    })}</span><span className="sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s"><_s onClick={hn} size="sm" style={le.buttonSecondary} variant="secondary"><T_1 id="+P0Cn2"/></_s><_s onClick={gn} size="sm" style={le.buttonPrimary} variant="primary"><T_1 id="6gLBI0"/></_s></span></div> : null;
    let Xs;
    if (s[72] !== __2 || s[73] !== subjectLabel) {
        Xs = __2({
            id: "hdPaX+",
            values: {
                subjectLabel
            }
        });
        s[72] = __2;
        s[73] = subjectLabel;
        s[74] = Xs;
    } else {
        Xs = s[74];
    }
    const ariaLabel = Xs;
    let Qs;
    if (s[75] !== __1 || s[76] !== emptyMessage || s[77] !== hostPhase || s[78] !== rs || s[79] !== onRetryScreen || s[80] !== copy || s[81] !== onRetry || s[82] !== subjectLabel) {
        Qs = rs ? {
            copy: De(__1, {
                hostPhase,
                isScreenLoading: false,
                isScreenUnavailable: true,
                subjectLabel,
                emptyMessage,
                isEmptyLoading: false,
                pullPercent: null
            }),
            onRetry
        } : {
            copy,
            onRetry: onRetryScreen
        };
        s[75] = __1;
        s[76] = emptyMessage;
        s[77] = hostPhase;
        s[78] = rs;
        s[79] = onRetryScreen;
        s[80] = copy;
        s[81] = onRetry;
        s[82] = subjectLabel;
        s[83] = Qs;
    } else {
        Qs = s[83];
    }
    const Ys = Qs;
    let Js;
    if (s[84] === Symbol.for("react.memo_cache_sentinel")) {
        Js = r_2("sand-computer-stage", "sand-1n2onr6 sand-h8yej3 sand-1iyjqo2 sand-s83m0k sand-2lwn1j sand-78zum5 sand-6s0dn4 sand-l56j7k sand-pqogu8");
        s[84] = Js;
    } else {
        Js = s[84];
    }
    let Zs;
    if (s[85] !== agentId || s[86] !== onConnectedChange || s[87] !== onCrashedChange || s[88] !== onHostKey || s[89] !== onReadyChange || s[90] !== isOpen || s[91] !== qs || s[92] !== is || s[93] !== rs || s[94] !== Z || s[95] !== openedAtMs || s[96] !== ariaLabel || s[97] !== pe || s[98] !== setEe || s[99] !== he || s[100] !== Ys) {
        Zs = <div className={Js}>{Z != null && !rs ? <div className={r_2("sand-computer-stage__frame", {
            0: {
                className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-t9pb60 sand-1ua6jya sand-j04kma"
            },
            1: {
                className: "sand-1n2onr6 sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1ua6jya sand-b3r6kr sand-2u8bby sand-1gnnqk1"
            }
        }[!!is << 0].className)} style={{
            width: `min(100cqw, calc(100cqh * ${fi} / ${fj}))`,
            aspectRatio: `${fi} / ${fj}`
        }}><div className={({
            0: {
                className: "sand-10l6tqk sand-10a8y8t sand-1bfcn54"
            },
            2: {
                className: "sand-10l6tqk sand-10a8y8t sand-1gj8qfm"
            },
            1: {
                className: "sand-10l6tqk sand-10a8y8t sand-1bfcn54 sand-g01cxk sand-47corl"
            },
            3: {
                className: "sand-10l6tqk sand-10a8y8t sand-1gj8qfm sand-g01cxk sand-47corl"
            }
        })[!!is << 1 | !!qs << 0].className} ref={ref}><Je key={`${Z.stageKey}:${Z.vncUrl}`} ariaLabel={ariaLabel} firstPaint={he} isInteractive isViewerVisible={isOpen} onConnectedChange={onConnectedChange} onCrashedChange={onCrashedChange} onStartFailed={()=>setEe(Z.stageKey)} onHostKey={onHostKey} onReadyChange={onReadyChange} {...openedAtMs == null ? {} : {
            openedAtMs
        }} ref={pe} src={Z.vncUrl}/></div>{qs ? <Fn/> : null}<Cn1Component agentId={agentId}/></div> : <An1Component copy={Ys.copy} onRetry={Ys.onRetry} tone="cover"/>}</div>;
        s[85] = agentId;
        s[86] = onConnectedChange;
        s[87] = onCrashedChange;
        s[88] = onHostKey;
        s[89] = onReadyChange;
        s[90] = isOpen;
        s[91] = qs;
        s[92] = is;
        s[93] = rs;
        s[94] = Z;
        s[95] = openedAtMs;
        s[96] = ariaLabel;
        s[97] = pe;
        s[98] = setEe;
        s[99] = he;
        s[100] = Ys;
        s[101] = Zs;
    } else {
        Zs = s[101];
    }
    const _e = Zs;
    let hs;
    if (s[102] !== isOpen) {
        hs = r_2("sand-computer-fullscreen", {
            0: {
                className: "sand-ixxii4 sand-10a8y8t sand-f5e64p sand-78zum5 sand-dt5ytf sand-1t137rt"
            },
            1: {
                className: "sand-ixxii4 sand-10a8y8t sand-f5e64p sand-78zum5 sand-dt5ytf sand-1t137rt sand-lshs6z sand-47corl"
            }
        }[!isOpen << 0].className);
        s[102] = isOpen;
        s[103] = hs;
    } else {
        hs = s[103];
    }
    let se;
    if (s[104] === Symbol.for("react.memo_cache_sentinel")) {
        se = {
            backgroundColor: fl.cover.css
        };
        s[104] = se;
    } else {
        se = s[104];
    }
    let ys;
    if (s[105] !== xe || s[106] !== onStartTeach) {
        ys = xe ? {
            onStartTeach
        } : {};
        s[105] = xe;
        s[106] = onStartTeach;
        s[107] = ys;
    } else {
        ys = s[107];
    }
    let ps;
    if (s[108] !== N || s[109] !== ys) {
        ps = <Tn1Component onExitFullscreen={N} {...ys}/>;
        s[108] = N;
        s[109] = ys;
        s[110] = ps;
    } else {
        ps = s[110];
    }
    let ks;
    if (s[111] !== is) {
        ks = r_2("sand-computer-body", {
            0: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-1iyjqo2 sand-s83m0k sand-2lwn1j sand-h8yej3 sand-e8ttls"
            },
            1: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-s83m0k sand-2lwn1j sand-h8yej3 sand-e8ttls sand-1qjc9v5 sand-1nhvcw1 sand-exx8yu sand-yri2b sand-1l90r2v sand-1c1uobl"
            }
        }[!!is << 0].className);
        s[111] = is;
        s[112] = ks;
    } else {
        ks = s[112];
    }
    let js;
    if (s[113] !== agentId || s[114] !== Ks || s[115] !== N || s[116] !== recordingAgentName || s[117] !== subjectLabel) {
        js = <Dn1Component agentId={agentId} isOverlayTone isTeachTaskAvailable={Ks} onStopAndSave={N} recordingAgentName={recordingAgentName} subjectLabel={subjectLabel}/>;
        s[113] = agentId;
        s[114] = Ks;
        s[115] = N;
        s[116] = recordingAgentName;
        s[117] = subjectLabel;
        s[118] = js;
    } else {
        js = s[118];
    }
    let vs;
    if (s[119] !== k) {
        vs = k != null ? <div className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-1jnr06f sand-2lah0s sand-h8yej3 sand-euugli sand-1k70j0n"><span className={p_1(a_.label, le.captionText).className}>{k.title}</span></div> : null;
        s[119] = k;
        s[120] = vs;
    } else {
        vs = s[120];
    }
    let monitors_1;
    if (s[121] !== C || s[122] !== K) {
        monitors_1 = C ? K : [];
        s[121] = C;
        s[122] = K;
        s[123] = monitors_1;
    } else {
        monitors_1 = s[123];
    }
    let Ns;
    if (s[124] !== monitors_1) {
        Ns = <Nn1Component monitors={monitors_1} onFocusMonitor={setY}/>;
        s[124] = monitors_1;
        s[125] = Ns;
    } else {
        Ns = s[125];
    }
    let xs;
    if (s[126] !== Se || s[127] !== _e || s[128] !== ks || s[129] !== js || s[130] !== vs || s[131] !== Ns) {
        xs = <div className={ks}>{Se}{js}{_e}{vs}{Ns}</div>;
        s[126] = Se;
        s[127] = _e;
        s[128] = ks;
        s[129] = js;
        s[130] = vs;
        s[131] = Ns;
        s[132] = xs;
    } else {
        xs = s[132];
    }
    let ee;
    if (s[133] !== ariaLabel || s[134] !== ve || s[135] !== hs || s[136] !== ps || s[137] !== xs) {
        ee = <div aria-label={ariaLabel} className={hs} ref={ve} role="region" style={se} tabIndex={-1}>{ps}{xs}</div>;
        s[133] = ariaLabel;
        s[134] = ve;
        s[135] = hs;
        s[136] = ps;
        s[137] = xs;
        s[138] = ee;
    } else {
        ee = s[138];
    }
    return ee;
}
function Gn() {
    return bA("computer-stage-first-paint");
}
const ea = Object.freeze(Object.defineProperty({
    __proto__: null,
    BoxDesktopModal: FnComponent,
    isTeachTaskAvailable: un,
    resolveActiveHandoff,
    resolveFocus,
    resolveHandBackTarget
}, Symbol.toStringTag, {
    value: "Module"
}));
export { An1Component as C, resolveHandBackTarget as a, De as b, ea as c, Un as f, resolveActiveHandoff as r };
