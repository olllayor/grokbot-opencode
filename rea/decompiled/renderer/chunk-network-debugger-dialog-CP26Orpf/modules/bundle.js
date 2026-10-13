import { c as c_1, r as r_1, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { i, aY as C } from "./index.eager-platform-Dcfeegfw.js";
import { e } from "./index.eager-common-CdCvBQNJ.js";
import { dA, aT, dB, bT } from "./index.eager-app-Cj5f8Gby.js";
import { z as He, x as x_1, W } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "780fe180-b557-4f77-ac1c-62e1dedc6aca";
            e._sentryDebugIdIdentifier = "sentry-dbid-780fe180-b557-4f77-ac1c-62e1dedc6aca";
        }
    } catch (e) {}
})();
const re = [
    {
        id: "cursor-services",
        domain: "*.cursor.sh"
    },
    {
        id: "cursor-cdn",
        domain: "*.cursor-cdn.com"
    },
    {
        id: "cursor-api",
        domain: "*.cursorapi.com"
    },
    {
        id: "cursorvm",
        domain: "*.cursorvm.com"
    },
    {
        id: "cursorvm-nested",
        domain: "*.*.cursorvm.com"
    },
    {
        id: "cursor-website",
        domain: "cursor.com"
    },
    {
        id: "downloads",
        domain: "downloads.cursor.com"
    }
];
const ge = "voice-realtime";
function xe(results, e) {
    if (e) {
        return results;
    }
    return results.filter((n)=>n.id !== ge);
}
function ye(a, e) {
    return `${JSON.stringify({
        kind: "grok-bot-network-debugger",
        startedAtMs: a.startedAtMs,
        durationMs: a.durationMs,
        allowlist: re.map(({ domain })=>domain),
        checks: e.map((n)=>({
                id: n.id,
                protocol: n.protocol,
                status: n.status,
                target: n.target,
                durationMs: n.durationMs,
                ...n.detail == null ? {} : {
                    detail: n.detail
                }
            }))
    }, null, 2)}
`;
}
function je(a) {
    return `grok-bot-network-debugger-${a.startedAtMs}.json`;
}
function we(result) {
    const e = [
        [
            "id",
            result.id
        ],
        [
            "status",
            result.status
        ],
        [
            "protocol",
            result.protocol
        ],
        [
            "target",
            result.target
        ],
        [
            "durationMs",
            String(result.durationMs)
        ]
    ];
    if (result.detail != null) {
        e.push([
            "detail",
            result.detail
        ]);
    }
    return e.map(([n, s])=>`${n}: ${s}`).join(`
`);
}
const ke = {
    passed: "check-circle",
    warning: "warning",
    failed: "x-circle",
    skipped: "minus-circle"
};
const be = "ms";
const ie = re.map(({ domain })=>domain).join(`
`);
const Se = [
    "*.cursorvm.com",
    "*.*.cursorvm.com"
].join(`
`);
const _e = new Set([
    "computer-dns",
    "computer-tls",
    "computer-health",
    "computer-events",
    "computer-screen-websocket"
]);
const ve = new Set([
    "api",
    "dns",
    "http",
    "https",
    "sse",
    "tls",
    "websocket"
]);
function te(a) {
    return a.split("-").map((e, n)=>{
        if (ve.has(e)) {
            return e.toUpperCase();
        }
        if (n === 0) {
            return `${e.slice(0, 1).toUpperCase()}${e.slice(1)}`;
        }
        return e;
    }).join(" ");
}
function Ne(detail) {
    const [e, ...n] = detail.split(":");
    return [
        te(e ?? detail),
        ...n
    ].join(": ");
}
const d = {
    header: {
        kt9PQ7: "sand-so031l",
        kfdmCh: "sand-1q0q8m5",
        kL6WhQ: "sand-13u5rpf",
        $$css: true
    },
    guidanceParagraph: {
        kogj98: "sand-1ghz6dp",
        $$css: true
    },
    chevron: {
        kMwMTN: "sand-4b2ntj",
        $$css: true
    },
    remediationCopy: {
        kogj98: "sand-1ghz6dp",
        $$css: true
    },
    resultDetail: {
        kMwMTN: "sand-4b2ntj",
        kHjlTd: "sand-j0a0fe",
        $$css: true
    },
    resultMeta: {
        kMwMTN: "sand-1e4uaio",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    passed: {
        kMwMTN: "sand-1le6hhr",
        $$css: true
    },
    warning: {
        kMwMTN: "sand-vak8d5",
        $$css: true
    },
    failed: {
        kMwMTN: "sand-6rl5ky",
        $$css: true
    },
    skipped: {
        kMwMTN: "sand-1e4uaio",
        $$css: true
    }
};
function ze(status) {
    switch(status){
        case "passed":
            return d.passed;
        case "warning":
            return d.warning;
        case "failed":
            return d.failed;
        case "skipped":
            return d.skipped;
    }
}
function Ce(status) {
    return status === "failed" || status === "warning";
}
function LeComponent(a) {
    LeComponent.d = 1087;
    const e = c_1.c(48);
    const { isLast, result } = a;
    let f;
    if (e[0] !== result.status) {
        f = Ce(result.status);
        e[0] = result.status;
        e[1] = f;
    } else {
        f = e[1];
    }
    const [w, setW] = r_1.useState(f);
    let o;
    if (e[2] !== result.id) {
        o = te(result.id);
        e[2] = result.id;
        e[3] = o;
    } else {
        o = e[3];
    }
    const D = o;
    let M;
    if (e[4] !== result.status) {
        M = te(result.status);
        e[4] = result.status;
        e[5] = M;
    } else {
        M = e[5];
    }
    const k = M;
    const id_1 = `network-check-details-${result.id}`;
    let h;
    if (e[6] !== result.id || e[7] !== result.status) {
        h = result.status === "failed" && _e.has(result.id);
        e[6] = result.id;
        e[7] = result.status;
        e[8] = h;
    } else {
        h = e[8];
    }
    const b = h;
    const v = `${D}: ${k}`;
    const T = w ? "true" : "false";
    const { id, status } = result;
    let S;
    if (e[9] !== isLast) {
        S = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-3dhcaw sand-so031l sand-1q0q8m5 sand-13u5rpf"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-3dhcaw sand-1q0q8m5 sand-13u5rpf sand-1qhh985"
            }
        })[!!isLast << 0];
        e[9] = isLast;
        e[10] = S;
    } else {
        S = e[10];
    }
    let E;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        E = ()=>setW(Me);
        e[11] = E;
    } else {
        E = e[11];
    }
    let O;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        O = {
            className: "sand-jyslct sand-1lugfcp sand-rvj5dj sand-1rizz8m sand-6s0dn4 sand-vptqrk sand-h8yej3 sand-1ghz6dp sand-17ak5pl sand-c342km sand-ng3xce sand-jbqb8w sand-aalx5g sand-1heor9g sand-jb2p0i sand-1qlqyl8 sand-1t35e8 sand-1pd3egz sand-15bjb6t sand-1yc453h sand-1ypdohk sand-1t137rt sand-9v5kkp sand-1k57tk5 sand-784prv sand-1wfwxd8 sand-1bqaal sand-1uczgqu sand-1iolv91"
        };
        e[12] = O;
    } else {
        O = e[12];
    }
    const z = w ? "chevron-down-small" : "chevron-right-small";
    let r;
    if (e[13] !== z) {
        r = <W aria-hidden name={z} rootStyle={d.chevron} size="xs"/>;
        e[13] = z;
        e[14] = r;
    } else {
        r = e[14];
    }
    const $ = ke[result.status];
    let rootStyle;
    if (e[15] !== result.status) {
        rootStyle = ze(result.status);
        e[15] = result.status;
        e[16] = rootStyle;
    } else {
        rootStyle = e[16];
    }
    let l;
    if (e[17] !== k || e[18] !== $ || e[19] !== rootStyle) {
        l = <W aria-label={k} name={$} rootStyle={rootStyle} size="sm"/>;
        e[17] = k;
        e[18] = $;
        e[19] = rootStyle;
        e[20] = l;
    } else {
        l = e[20];
    }
    let g;
    if (e[21] !== D) {
        g = <C as="span" size="sm" weight="medium">{D}</C>;
        e[21] = D;
        e[22] = g;
    } else {
        g = e[22];
    }
    let x;
    if (e[23] !== result.protocol) {
        x = result.protocol.toUpperCase();
        e[23] = result.protocol;
        e[24] = x;
    } else {
        x = e[24];
    }
    let c;
    if (e[25] !== result.durationMs || e[26] !== x) {
        c = <C as="span" rootStyle={d.resultMeta} size="xs">{x} · {result.durationMs}{be}</C>;
        e[25] = result.durationMs;
        e[26] = x;
        e[27] = c;
    } else {
        c = e[27];
    }
    let y;
    if (e[28] !== id_1 || e[29] !== w || e[30] !== r || e[31] !== l || e[32] !== g || e[33] !== c) {
        y = <button aria-controls={id_1} aria-expanded={w} onClick={E} type="button" {...O}>{r}{l}{g}{c}</button>;
        e[28] = id_1;
        e[29] = w;
        e[30] = r;
        e[31] = l;
        e[32] = g;
        e[33] = c;
        e[34] = y;
    } else {
        y = e[34];
    }
    let u;
    if (e[35] !== id_1 || e[36] !== w || e[37] !== b || e[38] !== result) {
        u = w ? <div id={id_1} className="sand-rvj5dj sand-1uuqd9p sand-vptqrk sand-196pc8s sand-1xlntvz sand-22095l"><div className="sand-78zum5 sand-dt5ytf sand-11twubx sand-1k3v4rp sand-euugli">{b ? <div data-network-remediation className="sand-78zum5 sand-dt5ytf sand-11twubx sand-1om1abp sand-1e1y6u3 sand-6y9aml sand-17ak5pl"><C as="p" color="red" rootStyle={d.remediationCopy} size="xs" weight="medium"><T_1 id="Jq6deq"/></C><pre className="sand-1ghz6dp sand-s338yg sand-y5h43f sand-1evy7pa sand-126k92a">{Se}</pre><C as="p" color="secondary" rootStyle={d.remediationCopy} size="xs"><T_1 id="M9OOz1"/></C></div> : null}<C as="span" data-network-tested-endpoint={b ? "" : undefined} rootStyle={d.resultDetail} size="xs">{b ? <T_1 id="zwZaZg" values={{
            0: result.target
        }}/> : result.target}{result.detail == null ? "" : ` · ${Ne(result.detail)}`}</C><pre className="sand-1ghz6dp sand-19aaqeu sand-s338yg sand-y5h43f sand-1evy7pa sand-126k92a sand-j0a0fe">{we(result)}</pre></div></div> : null;
        e[35] = id_1;
        e[36] = w;
        e[37] = b;
        e[38] = result;
        e[39] = u;
    } else {
        u = e[39];
    }
    let j;
    if (e[40] !== result.id || e[41] !== result.status || e[42] !== y || e[43] !== u || e[44] !== v || e[45] !== T || e[46] !== S) {
        j = <div aria-label={v} data-expanded={T} data-network-check={id} data-status={status} role="listitem" {...S}>{y}{u}</div>;
        e[40] = result.id;
        e[41] = result.status;
        e[42] = y;
        e[43] = u;
        e[44] = v;
        e[45] = T;
        e[46] = S;
        e[47] = j;
    } else {
        j = e[47];
    }
    return j;
}
function Me(a) {
    return !a;
}
function Te(error) {
    return error instanceof DOMException && error.name === "AbortError";
}
async function $e(a, e) {
    let n;
    try {
        n = await showSaveFilePicker({
            suggestedName: je(a),
            startIn: "downloads"
        });
    } catch (error) {
        if (Te(error)) {
            return;
        }
        throw error;
    }
    const s = await n.createWritable();
    try {
        await s.write(ye(a, e));
    } finally{
        await s.close();
    }
}
export function NetworkDebuggerDialog(a) {
    NetworkDebuggerDialog.d = 1086;
    const e = c_1.c(60);
    const { onClose } = a;
    const s = dA();
    const f = aT();
    const w = dB();
    const F = bT();
    const [o, setO] = r_1.useState(null);
    const MRef = r_1.useRef(false);
    const k = o == null ? [] : xe(o.results, w);
    let p;
    if (e[0] !== s) {
        p = ()=>{
            s.run().then(setO, qe);
        };
        e[0] = s;
        e[1] = p;
    } else {
        p = e[1];
    }
    const h = p;
    let b;
    if (e[2] !== h) {
        b = ()=>{
            if (!MRef.current) {
                MRef.current = true;
                h();
            }
            return Re;
        };
        e[2] = h;
        e[3] = b;
    } else {
        b = e[3];
    }
    i(b);
    let v;
    if (e[4] !== F) {
        v = ()=>{
            F("sand_voice_call");
            return Oe;
        };
        e[4] = F;
        e[5] = v;
    } else {
        v = e[5];
    }
    i(v);
    const T = x_1;
    let onOpenChange;
    if (e[6] !== onClose) {
        onOpenChange = (Y)=>{
            if (!Y) {
                onClose();
            }
        };
        e[6] = onClose;
        e[7] = onOpenChange;
    } else {
        onOpenChange = e[7];
    }
    const open = true;
    const S = d;
    const variant = "rich";
    const width = 608;
    let z;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        z = <x_1.Title><T_1 id="QVjG8n"/></x_1.Title>;
        e[8] = z;
    } else {
        z = e[8];
    }
    let r;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        r = <x_1.Header style={d.header}>{z}<x_1.Description><T_1 id="vhgAB7"/></x_1.Description><x_1.CloseButton/></x_1.Header>;
        e[9] = r;
    } else {
        r = e[9];
    }
    const $ = x_1;
    const _ = d;
    let l;
    let g;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        l = {
            className: "sand-78zum5 sand-dt5ytf sand-ehausa"
        };
        g = {
            className: "sand-78zum5 sand-6s0dn4 sand-1qughib sand-1oot3zn"
        };
        e[10] = l;
        e[11] = g;
    } else {
        l = e[10];
        g = e[11];
    }
    let x;
    if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
        x = <C as="h3" size="sm" weight="semibold"><T_1 id="URmyfc"/></C>;
        e[12] = x;
    } else {
        x = e[12];
    }
    let c;
    if (e[13] !== f) {
        c = ()=>f.copy(ie);
        e[13] = f;
        e[14] = c;
    } else {
        c = e[14];
    }
    let y;
    if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
        y = <T_1 id="QwmSiq"/>;
        e[15] = y;
    } else {
        y = e[15];
    }
    let u;
    if (e[16] !== c) {
        u = <div {...g}>{x}<He onClick={c} size="sm" variant="secondary">{y}</He></div>;
        e[16] = c;
        e[17] = u;
    } else {
        u = e[17];
    }
    let j;
    let K;
    if (e[18] === Symbol.for("react.memo_cache_sentinel")) {
        j = <pre className="sand-1ghz6dp sand-1wd3ewq sand-s338yg sand-1wm8ruf sand-11m8ghp sand-126k92a">{ie}</pre>;
        K = {
            className: "sand-78zum5 sand-dt5ytf sand-11twubx"
        };
        e[18] = j;
        e[19] = K;
    } else {
        j = e[18];
        K = e[19];
    }
    let V;
    if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
        V = <C as="p" color="secondary" rootStyle={d.guidanceParagraph} size="xs"><T_1 id="5s5wDd"/></C>;
        e[20] = V;
    } else {
        V = e[20];
    }
    let R;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        R = <div {...K}>{V}<C as="p" color="secondary" rootStyle={d.guidanceParagraph} size="xs"><T_1 id="M9OOz1"/></C></div>;
        e[21] = R;
    } else {
        R = e[21];
    }
    let q;
    if (e[22] !== s.failure) {
        q = s.failure == null ? null : <div role="alert" className="sand-1043rbw sand-6y9aml sand-6rl5ky sand-17ak5pl"><T_1 id="iwuQtT"/></div>;
        e[22] = s.failure;
        e[23] = q;
    } else {
        q = e[23];
    }
    const X = o == null ? null : <div aria-live="polite" role="list" className="sand-78zum5 sand-dt5ytf sand-12mrbbr sand-mkeg23 sand-1y0btm7 sand-1atdlfd sand-1043rbw sand-b3r6kr">{k.map((result, ce)=><LeComponent key={result.id} isLast={ce === k.length - 1} result={result}/>)}</div>;
    let A;
    if (e[24] !== l || e[25] !== u || e[26] !== j || e[27] !== R || e[28] !== q || e[29] !== X) {
        A = <section {...l}>{u}{j}{R}{q}{X}</section>;
        e[24] = l;
        e[25] = u;
        e[26] = j;
        e[27] = R;
        e[28] = q;
        e[29] = X;
        e[30] = A;
    } else {
        A = e[30];
    }
    let I;
    if (e[31] !== $.Body || e[32] !== _.body || e[33] !== A) {
        I = <$.Body style={_.body}>{A}</$.Body>;
        e[31] = $.Body;
        e[32] = _.body;
        e[33] = A;
        e[34] = I;
    } else {
        I = e[34];
    }
    const disabled = o == null;
    let L;
    if (e[35] !== o || e[36] !== k) {
        L = ()=>{
            if (o != null) {
                $e(o, k).catch(Ee);
            }
        };
        e[35] = o;
        e[36] = k;
        e[37] = L;
    } else {
        L = e[37];
    }
    let Q;
    if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
        Q = <T_1 id="/T7kQE"/>;
        e[38] = Q;
    } else {
        Q = e[38];
    }
    let P;
    if (e[39] !== disabled || e[40] !== L) {
        P = <x_1.Action disabled={disabled} onClick={L}>{Q}</x_1.Action>;
        e[39] = disabled;
        e[40] = L;
        e[41] = P;
    } else {
        P = e[41];
    }
    let G;
    if (e[42] === Symbol.for("react.memo_cache_sentinel")) {
        G = <x_1.ActionSpacer/>;
        e[42] = G;
    } else {
        G = e[42];
    }
    let H;
    if (e[43] === Symbol.for("react.memo_cache_sentinel")) {
        H = <T_1 id="yz7wBu"/>;
        e[43] = H;
    } else {
        H = e[43];
    }
    let U;
    if (e[44] !== onClose) {
        U = <x_1.Action onClick={onClose}>{H}</x_1.Action>;
        e[44] = onClose;
        e[45] = U;
    } else {
        U = e[45];
    }
    let B;
    if (e[46] !== s.isPending || e[47] !== h) {
        B = s.isPending ? <x_1.Action disabled leadingIcon={{
            name: "loading",
            modifier: "spin"
        }} pending variant="primary"><T_1 id="WU6xzS"/></x_1.Action> : <x_1.Action onClick={h} variant="primary"><T_1 id="gTcK5g"/></x_1.Action>;
        e[46] = s.isPending;
        e[47] = h;
        e[48] = B;
    } else {
        B = e[48];
    }
    let W;
    if (e[49] !== P || e[50] !== U || e[51] !== B) {
        W = <x_1.ActionBar>{P}{G}{U}{B}</x_1.ActionBar>;
        e[49] = P;
        e[50] = U;
        e[51] = B;
        e[52] = W;
    } else {
        W = e[52];
    }
    let J;
    if (e[53] !== r || e[54] !== I || e[55] !== W || e[56] !== T.Root || e[57] !== onOpenChange || e[58] !== S.surface) {
        J = <T.Root onOpenChange={onOpenChange} open={open} surfaceStyle={S.surface} variant={variant} width={width}>{r}{I}{W}</T.Root>;
        e[53] = r;
        e[54] = I;
        e[55] = W;
        e[56] = T.Root;
        e[57] = onOpenChange;
        e[58] = S.surface;
        e[59] = J;
    } else {
        J = e[59];
    }
    return J;
}
function Ee(a) {
    e(a);
}
function Oe() {}
function Re() {}
function qe(a) {
    e(a);
}
