import { c as c_1, r as r_1, T, u } from "./index.eager-vendor-Qbf9YA6n.js";
import { aY as S, aZ, i } from "./index.eager-platform-Dcfeegfw.js";
import { df as SAND_PASSKEY_ENROLLMENT_CODE_LENGTH, aP as Q1, dg, dh, di, b7 } from "./index.eager-app-Cj5f8Gby.js";
import { x as x_1, aX as A } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "3f06adea-801f-48d7-a080-2cc098878a77";
            e._sentryDebugIdIdentifier = "sentry-dbid-3f06adea-801f-48d7-a080-2cc098878a77";
        }
    } catch (e) {}
})();
const z = {
    codeInputSurface: {
        kWkggS: "sand-13l7odt",
        $$css: true
    },
    codeText: {
        kcqcaj: "sand-ss6m8b",
        kb6lSQ: "sand-xteldw",
        $$css: true
    }
};
const F = "passkey-enrollment-code";
function CComponent(o) {
    CComponent.d = 1123;
    const e = c_1.c(4);
    const { children } = o;
    let s;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        s = {
            className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-21xpn4"
        };
        e[0] = s;
    } else {
        s = e[0];
    }
    let a;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        a = <Q1 size={18}/>;
        e[1] = a;
    } else {
        a = e[1];
    }
    let u;
    if (e[2] !== children) {
        u = <div {...s} role="status">{a}<S as="span" color="secondary" size="sm">{children}</S></div>;
        e[2] = children;
        e[3] = u;
    } else {
        u = e[3];
    }
    return u;
}
function KComponent(o) {
    KComponent.d = 1129;
    const e = c_1.c(2);
    const { children } = o;
    let s;
    if (e[0] !== children) {
        s = <S as="p" color="red" role="alert" size="sm">{children}</S>;
        e[0] = children;
        e[1] = s;
    } else {
        s = e[1];
    }
    return s;
}
function PComponent(o) {
    PComponent.d = 1126;
    const e = c_1.c(4);
    const { problem } = o;
    switch(problem){
        case "rejected":
            {
                let s;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="ug/tVL"/>;
                    e[0] = s;
                } else {
                    s = e[0];
                }
                return s;
            }
        case "expired":
            {
                let s;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="vfQ7wz"/>;
                    e[1] = s;
                } else {
                    s = e[1];
                }
                return s;
            }
        case "locked":
            {
                let s;
                if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="I/UfWP"/>;
                    e[2] = s;
                } else {
                    s = e[2];
                }
                return s;
            }
        case "cooldown":
            {
                let s;
                if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="5M3gzq"/>;
                    e[3] = s;
                } else {
                    s = e[3];
                }
                return s;
            }
    }
}
function Component(o) {
    Component.d = 1124;
    const e = c_1.c(4);
    const { reason } = o;
    switch(reason){
        case "cancelled":
            {
                let s;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="IF7AGW"/>;
                    e[0] = s;
                } else {
                    s = e[0];
                }
                return s;
            }
        case "expired":
            {
                let s;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="tMIwgc"/>;
                    e[1] = s;
                } else {
                    s = e[1];
                }
                return s;
            }
        case "failed":
            {
                let s;
                if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="UqfpBk"/>;
                    e[2] = s;
                } else {
                    s = e[2];
                }
                return s;
            }
        case "unavailable":
            {
                let s;
                if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="eiLp6/"/>;
                    e[3] = s;
                } else {
                    s = e[3];
                }
                return s;
            }
    }
}
function DComponent(o) {
    DComponent.d = 1130;
    const e = c_1.c(2);
    const { reason } = o;
    switch(reason){
        case "no_email":
            {
                let s;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="Fm3hDv"/>;
                    e[0] = s;
                } else {
                    s = e[0];
                }
                return s;
            }
        case "limit":
            {
                let s;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="1XFMZt"/>;
                    e[1] = s;
                } else {
                    s = e[1];
                }
                return s;
            }
    }
}
function IComponent(o) {
    IComponent.d = 1125;
    const e = c_1.c(24);
    const { step, commands, code, onCodeChange } = o;
    const { _: __1 } = u();
    const f = step.problem === "locked";
    let _;
    if (e[0] !== code || e[1] !== commands || e[2] !== f) {
        _ = (E)=>{
            E.preventDefault();
            if (!(f || !dg(code))) {
                commands.verifyCode(code);
            }
        };
        e[0] = code;
        e[1] = commands;
        e[2] = f;
        e[3] = _;
    } else {
        _ = e[3];
    }
    const onSubmit = _;
    let c;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        c = {
            className: "sand-78zum5 sand-dt5ytf sand-167g77z"
        };
        e[4] = c;
    } else {
        c = e[4];
    }
    let i;
    if (e[5] !== step.resent) {
        i = <S as="p" color="secondary" size="sm">{step.resent ? <T id="okJQvm" values={{
            SAND_PASSKEY_ENROLLMENT_CODE_LENGTH
        }}/> : <T id="UvYyCZ" values={{
            SAND_PASSKEY_ENROLLMENT_CODE_LENGTH
        }}/>}</S>;
        e[5] = step.resent;
        e[6] = i;
    } else {
        i = e[6];
    }
    let m;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-zjbwwf"
        };
        e[7] = m;
    } else {
        m = e[7];
    }
    let y;
    if (e[8] !== __1) {
        y = __1({
            id: "RqkLb0",
            values: {
                SAND_PASSKEY_ENROLLMENT_CODE_LENGTH
            }
        });
        e[8] = __1;
        e[9] = y;
    } else {
        y = e[9];
    }
    let onChange;
    if (e[10] !== onCodeChange) {
        onChange = (E)=>onCodeChange(E.currentTarget.value.replace(/\D/g, "").slice(0, SAND_PASSKEY_ENROLLMENT_CODE_LENGTH));
        e[10] = onCodeChange;
        e[11] = onChange;
    } else {
        onChange = e[11];
    }
    let x;
    if (e[12] !== code || e[13] !== f || e[14] !== y || e[15] !== onChange) {
        x = <div {...m}><A rootStyle={z.codeInputSurface} size="lg"><A.Input aria-label={y} autoComplete="one-time-code" autoFocus disabled={f} inputMode="numeric" onChange={onChange} rootStyle={z.codeText} value={code}/></A></div>;
        e[12] = code;
        e[13] = f;
        e[14] = y;
        e[15] = onChange;
        e[16] = x;
    } else {
        x = e[16];
    }
    let p;
    if (e[17] !== step.problem) {
        p = step.problem == null ? null : <KComponent><PComponent problem={step.problem}/></KComponent>;
        e[17] = step.problem;
        e[18] = p;
    } else {
        p = e[18];
    }
    let g;
    if (e[19] !== onSubmit || e[20] !== i || e[21] !== x || e[22] !== p) {
        g = <form id={F} onSubmit={onSubmit} {...c}>{i}{x}{p}</form>;
        e[19] = onSubmit;
        e[20] = i;
        e[21] = x;
        e[22] = p;
        e[23] = g;
    } else {
        g = e[23];
    }
    return g;
}
function LComponent(o) {
    LComponent.d = 1132;
    const e = c_1.c(19);
    const { step, commands, code, onCodeChange } = o;
    switch(step.kind){
        case "intro":
            {
                let n;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <S as="p" color="secondary" size="sm"><T id="wkpm4d"/></S>;
                    e[0] = n;
                } else {
                    n = e[0];
                }
                return n;
            }
        case "sending_code":
            {
                let n;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <CComponent><T id="0UebIq"/></CComponent>;
                    e[1] = n;
                } else {
                    n = e[1];
                }
                return n;
            }
        case "enter_code":
            {
                let n;
                if (e[2] !== code || e[3] !== commands || e[4] !== onCodeChange || e[5] !== step) {
                    n = <IComponent code={code} commands={commands} onCodeChange={onCodeChange} step={step}/>;
                    e[2] = code;
                    e[3] = commands;
                    e[4] = onCodeChange;
                    e[5] = step;
                    e[6] = n;
                } else {
                    n = e[6];
                }
                return n;
            }
        case "verifying_code":
            {
                let n;
                if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <CComponent><T id="bWJm0L"/></CComponent>;
                    e[7] = n;
                } else {
                    n = e[7];
                }
                return n;
            }
        case "ready_to_register":
            {
                let n;
                if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <S as="p" color="secondary" size="sm"><T id="IoxmQr"/></S>;
                    e[8] = n;
                } else {
                    n = e[8];
                }
                return n;
            }
        case "registering":
            {
                let n;
                if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <CComponent><T id="DAl02L"/></CComponent>;
                    e[9] = n;
                } else {
                    n = e[9];
                }
                let f;
                if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
                    f = <>{n}<S as="p" color="tertiary" size="sm"><T id="R2H8d2"/></S></>;
                    e[10] = f;
                } else {
                    f = e[10];
                }
                return f;
            }
        case "done":
            {
                let n;
                if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <S as="p" color="secondary" size="sm"><T id="+CYUlV"/></S>;
                    e[11] = n;
                } else {
                    n = e[11];
                }
                return n;
            }
        case "refused":
            {
                let n;
                if (e[12] !== step.reason) {
                    n = <KComponent><DComponent reason={step.reason}/></KComponent>;
                    e[12] = step.reason;
                    e[13] = n;
                } else {
                    n = e[13];
                }
                return n;
            }
        case "failed":
            {
                let n;
                if (e[14] !== step.ceremony || e[15] !== step.failure) {
                    n = step.ceremony != null ? <Component reason={step.ceremony}/> : step.failure.display?.detail ?? <T id="nwtY4N"/>;
                    e[14] = step.ceremony;
                    e[15] = step.failure;
                    e[16] = n;
                } else {
                    n = e[16];
                }
                let f;
                if (e[17] !== n) {
                    f = <KComponent>{n}</KComponent>;
                    e[17] = n;
                    e[18] = f;
                } else {
                    f = e[18];
                }
                return f;
            }
    }
}
function NComponent(o) {
    NComponent.d = 1131;
    const e = c_1.c(45);
    const { step, commands, onClose, onFinish } = o;
    let n;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = <T id="dEgA5A"/>;
        e[0] = n;
    } else {
        n = e[0];
    }
    let f;
    if (e[1] !== onClose) {
        f = <x_1.Action onClick={onClose}>{n}</x_1.Action>;
        e[1] = onClose;
        e[2] = f;
    } else {
        f = e[2];
    }
    const _ = f;
    switch(step.kind){
        case "intro":
            {
                let r;
                if (e[3] !== commands) {
                    r = ()=>{
                        commands.sendCode();
                    };
                    e[3] = commands;
                    e[4] = r;
                } else {
                    r = e[4];
                }
                let c;
                if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
                    c = <T id="pfwAG5"/>;
                    e[5] = c;
                } else {
                    c = e[5];
                }
                let i;
                if (e[6] !== r) {
                    i = <x_1.Action onClick={r} variant="primary">{c}</x_1.Action>;
                    e[6] = r;
                    e[7] = i;
                } else {
                    i = e[7];
                }
                let m;
                if (e[8] !== _ || e[9] !== i) {
                    m = <>{_}{i}</>;
                    e[8] = _;
                    e[9] = i;
                    e[10] = m;
                } else {
                    m = e[10];
                }
                return m;
            }
        case "sending_code":
        case "verifying_code":
        case "registering":
            return _;
        case "enter_code":
            {
                let r;
                if (e[11] !== commands) {
                    r = ()=>{
                        commands.sendCode();
                    };
                    e[11] = commands;
                    e[12] = r;
                } else {
                    r = e[12];
                }
                let c;
                if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
                    c = <T id="mdeIOH"/>;
                    e[13] = c;
                } else {
                    c = e[13];
                }
                let i;
                if (e[14] !== r) {
                    i = <x_1.Action onClick={r}>{c}</x_1.Action>;
                    e[14] = r;
                    e[15] = i;
                } else {
                    i = e[15];
                }
                const m = step.problem === "locked";
                let y;
                if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
                    y = <T id="xGVfLh"/>;
                    e[16] = y;
                } else {
                    y = e[16];
                }
                let h;
                if (e[17] !== m) {
                    h = <x_1.Action disabled={m} form={F} type="submit" variant="primary">{y}</x_1.Action>;
                    e[17] = m;
                    e[18] = h;
                } else {
                    h = e[18];
                }
                let x;
                if (e[19] !== _ || e[20] !== i || e[21] !== h) {
                    x = <>{_}{i}{h}</>;
                    e[19] = _;
                    e[20] = i;
                    e[21] = h;
                    e[22] = x;
                } else {
                    x = e[22];
                }
                return x;
            }
        case "ready_to_register":
            {
                let r;
                if (e[23] !== commands) {
                    r = ()=>{
                        commands.register();
                    };
                    e[23] = commands;
                    e[24] = r;
                } else {
                    r = e[24];
                }
                let c;
                if (e[25] === Symbol.for("react.memo_cache_sentinel")) {
                    c = <T id="injdPp"/>;
                    e[25] = c;
                } else {
                    c = e[25];
                }
                let i;
                if (e[26] !== r) {
                    i = <x_1.Action onClick={r} variant="primary">{c}</x_1.Action>;
                    e[26] = r;
                    e[27] = i;
                } else {
                    i = e[27];
                }
                let m;
                if (e[28] !== _ || e[29] !== i) {
                    m = <>{_}{i}</>;
                    e[28] = _;
                    e[29] = i;
                    e[30] = m;
                } else {
                    m = e[30];
                }
                return m;
            }
        case "done":
            {
                let r;
                if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
                    r = <T id="DPfwMq"/>;
                    e[31] = r;
                } else {
                    r = e[31];
                }
                let c;
                if (e[32] !== onFinish) {
                    c = <x_1.Action onClick={onFinish} variant="primary">{r}</x_1.Action>;
                    e[32] = onFinish;
                    e[33] = c;
                } else {
                    c = e[33];
                }
                return c;
            }
        case "refused":
            {
                let r;
                if (e[34] === Symbol.for("react.memo_cache_sentinel")) {
                    r = <T id="yz7wBu"/>;
                    e[34] = r;
                } else {
                    r = e[34];
                }
                let c;
                if (e[35] !== onClose) {
                    c = <x_1.Action onClick={onClose} variant="primary">{r}</x_1.Action>;
                    e[35] = onClose;
                    e[36] = c;
                } else {
                    c = e[36];
                }
                return c;
            }
        case "failed":
            {
                let r;
                if (e[37] !== commands) {
                    r = ()=>{
                        commands.retryEnrollment();
                    };
                    e[37] = commands;
                    e[38] = r;
                } else {
                    r = e[38];
                }
                let c;
                if (e[39] === Symbol.for("react.memo_cache_sentinel")) {
                    c = <T id="KDw4GX"/>;
                    e[39] = c;
                } else {
                    c = e[39];
                }
                let i;
                if (e[40] !== r) {
                    i = <x_1.Action onClick={r} variant="primary">{c}</x_1.Action>;
                    e[40] = r;
                    e[41] = i;
                } else {
                    i = e[41];
                }
                let m;
                if (e[42] !== _ || e[43] !== i) {
                    m = <>{_}{i}</>;
                    e[42] = _;
                    e[43] = i;
                    e[44] = m;
                } else {
                    m = e[44];
                }
                return m;
            }
    }
}
function RComponent(o) {
    RComponent.d = 1127;
    const e = c_1.c(3);
    const { step } = o;
    switch(step.kind){
        case "intro":
        case "sending_code":
        case "enter_code":
        case "verifying_code":
        case "refused":
        case "failed":
            {
                let s;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="6uNoaV"/>;
                    e[0] = s;
                } else {
                    s = e[0];
                }
                return s;
            }
        case "ready_to_register":
        case "registering":
            {
                let s;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="+CFZFv"/>;
                    e[1] = s;
                } else {
                    s = e[1];
                }
                return s;
            }
        case "done":
            {
                let s;
                if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T id="/R28hh"/>;
                    e[2] = s;
                } else {
                    s = e[2];
                }
                return s;
            }
    }
}
function H({ previous, next }) {
    return previous.kind === "sending_code" && next.kind === "enter_code" && next.problem === null;
}
function TComponent(o) {
    TComponent.d = 1128;
    const e = c_1.c(21);
    const { session, commands, onClose, onFinish } = o;
    const { step } = session;
    const [f, setF] = r_1.useState("");
    const [r, setR] = r_1.useState(step);
    if (r !== step) {
        setR(step);
        if (H({
            previous: r,
            next: step
        })) {
            setF("");
        }
    }
    let onOpenChange;
    if (e[0] !== onClose || e[1] !== onFinish || e[2] !== step) {
        onOpenChange = (g)=>{
            g || (step.kind === "done" ? onFinish() : onClose());
        };
        e[0] = onClose;
        e[1] = onFinish;
        e[2] = step;
        e[3] = onOpenChange;
    } else {
        onOpenChange = e[3];
    }
    let m;
    if (e[4] !== step) {
        m = <x_1.Header><x_1.Title><RComponent step={step}/></x_1.Title></x_1.Header>;
        e[4] = step;
        e[5] = m;
    } else {
        m = e[5];
    }
    let y;
    if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
        y = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
        };
        e[6] = y;
    } else {
        y = e[6];
    }
    let h;
    if (e[7] !== f || e[8] !== commands || e[9] !== step) {
        h = <x_1.Body><div {...y}><LComponent code={f} commands={commands} onCodeChange={setF} step={step}/></div></x_1.Body>;
        e[7] = f;
        e[8] = commands;
        e[9] = step;
        e[10] = h;
    } else {
        h = e[10];
    }
    let x;
    if (e[11] !== commands || e[12] !== onClose || e[13] !== onFinish || e[14] !== step) {
        x = <x_1.ActionBar><NComponent commands={commands} onClose={onClose} onFinish={onFinish} step={step}/></x_1.ActionBar>;
        e[11] = commands;
        e[12] = onClose;
        e[13] = onFinish;
        e[14] = step;
        e[15] = x;
    } else {
        x = e[15];
    }
    let p;
    if (e[16] !== onOpenChange || e[17] !== m || e[18] !== h || e[19] !== x) {
        p = <x_1.Root onOpenChange={onOpenChange} open variant="rich" width={440}>{m}{h}{x}</x_1.Root>;
        e[16] = onOpenChange;
        e[17] = m;
        e[18] = h;
        e[19] = x;
        e[20] = p;
    } else {
        p = e[20];
    }
    return p;
}
function QComponent() {
    QComponent.d = 1122;
    const o = c_1.c(8);
    const { enrollment } = dh();
    const commands = di();
    const s = aZ();
    const passkey = b7().passkey;
    const uRef = r_1.useRef(false);
    const n = enrollment == null;
    const f = !!s.pending.overlay;
    let _;
    if (o[0] !== s || o[1] !== f || o[2] !== n || o[3] !== passkey) {
        _ = ()=>{
            if (n) {
                if (!uRef.current && !f && passkey.enrollment.get() == null) {
                    uRef.current = true;
                    Z(s);
                }
            } else {
                uRef.current = false;
            }
            return W;
        };
        o[0] = s;
        o[1] = f;
        o[2] = n;
        o[3] = passkey;
        o[4] = _;
    } else {
        _ = o[4];
    }
    i(_);
    if (enrollment == null) {
        return null;
    }
    let r;
    if (o[5] !== commands || o[6] !== enrollment) {
        r = <TComponent commands={commands} onClose={commands.cancelEnrollment} onFinish={commands.finishEnrollment} session={enrollment}/>;
        o[5] = commands;
        o[6] = enrollment;
        o[7] = r;
    } else {
        r = o[7];
    }
    return r;
}
function W() {}
function Z(o) {
    const e = o.history.entries[o.history.index - 1];
    if (e != null && e.overlay?.entrypointId !== o.overlay?.entrypointId) {
        o.back();
        return;
    }
    o.close("overlay");
}
export { QComponent as default };
