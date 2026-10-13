import { c as c_1, u as u_1, r, j as j_1, p as p_1, T } from "./index.eager-vendor-Qbf9YA6n.js";
import { cj, a_, b0 as P, bc, dp, a$, D as D_1, dq } from "./index.eager-app-Cj5f8Gby.js";
import { a_ as Te } from "./index.eager-platform-Dcfeegfw.js";
import { W as W_1, a3 as Ne, z as E, x as x_1 } from "./index-ZYxf-aBb.js";
import { o, m, b as b_1, a as a_1 } from "./chunk-team-agent-rows-BhWKSjqA.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "24cef7a6-d4bf-42e1-b021-0f6ed91467ad";
            e._sentryDebugIdIdentifier = "sentry-dbid-24cef7a6-d4bf-42e1-b021-0f6ed91467ad";
        }
    } catch (e) {}
})();
const b = {
    surface: {
        kZKoxP: "sand-16hay7m",
        $$css: true
    },
    header: {
        k8WAf4: "sand-10dr8xq",
        kwRFfy: "sand-2vl965",
        kL6WhQ: "sand-19145p9",
        $$css: true
    },
    secondary: {
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    body: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kzQI83: "sand-1iyjqo2",
        kAzted: "sand-2lwn1j",
        k8WAf4: "sand-t970qd",
        $$css: true
    },
    searchInput: {
        kzQI83: "sand-1iyjqo2",
        k7Eaqz: "sand-euugli",
        kogj98: "sand-1ghz6dp",
        kmVPX3: "sand-1717udv",
        ksu8eU: "sand-ng3xce",
        kI3sdo: "sand-1a2a7pz",
        kWkggS: "sand-jbqb8w",
        kMv6JI: "sand-jb2p0i",
        kMwMTN: "sand-tyxrsu",
        k8Qsv1: "sand-1h7ufjq",
        $$css: true
    },
    listContent: {
        k8WAf4: "sand-10dr8xq",
        khm7nJ: "sand-1dbijih",
        $$css: true
    },
    list: {
        kzQI83: "sand-1iyjqo2",
        kAzted: "sand-2lwn1j",
        $$css: true
    },
    truncate: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    },
    rowName: {
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    rowDetail: {
        kMwMTN: "sand-169k319",
        $$css: true
    }
};
function XComponent(u) {
    XComponent.d = 1348;
    const e = c_1.c(18);
    const { agent } = u;
    const { _ } = u_1();
    const h = cj();
    let i;
    let c;
    let l;
    if (e[0] !== _ || e[1] !== agent || e[2] !== h) {
        l = Symbol.for("react.early_return_sentinel");
        e: {
            const d = b_1(agent);
            let x;
            if (e[6] !== agent || e[7] !== h) {
                x = agent.description.trim() || a_1(agent, h);
                e[6] = agent;
                e[7] = h;
                e[8] = x;
            } else {
                x = e[8];
            }
            c = x;
            if (c.length === 0 && d == null) {
                l = null;
                break e;
            }
            i = null;
            if (d === "you") {
                let f;
                if (e[9] !== _) {
                    f = _({
                        id: "ZZvRDK"
                    });
                    e[9] = _;
                    e[10] = f;
                } else {
                    f = e[10];
                }
                i = f;
            } else {
                if (d != null) {
                    i = _({
                        id: "MTvQPd",
                        values: {
                            0: d.trim()
                        }
                    });
                }
            }
        }
        e[0] = _;
        e[1] = agent;
        e[2] = h;
        e[3] = i;
        e[4] = c;
        e[5] = l;
    } else {
        i = e[3];
        c = e[4];
        l = e[5];
    }
    if (l !== Symbol.for("react.early_return_sentinel")) {
        return l;
    }
    let m;
    if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
        m = [
            b.truncate,
            b.rowDetail
        ];
        e[11] = m;
    } else {
        m = e[11];
    }
    const o = c || undefined;
    let a;
    if (e[12] !== i || e[13] !== c) {
        a = [
            c,
            i
        ].filter(oe);
        e[12] = i;
        e[13] = c;
        e[14] = a;
    } else {
        a = e[14];
    }
    const n = a.join(" · ");
    let r;
    if (e[15] !== o || e[16] !== n) {
        r = <P as="span" level="caption" style={m} title={o}>{n}</P>;
        e[15] = o;
        e[16] = n;
        e[17] = r;
    } else {
        r = e[17];
    }
    return r;
}
function oe(u) {
    return u != null && u !== "";
}
function ZComponent(u) {
    ZComponent.d = 1346;
    const e = c_1.c(33);
    const { agent, isAdded, onPreviewAgent, onAdd, onRemove } = u;
    const id = `sand-team-agent-row-${agent.id}`;
    let m;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        m = {
            className: "sand-78zum5 sand-6s0dn4 sand-fex06f sand-1qmwy7c sand-jbqb8w sand-aalx5g"
        };
        e[0] = m;
    } else {
        m = e[0];
    }
    let o;
    if (e[1] !== agent.id || e[2] !== onPreviewAgent) {
        o = ()=>onPreviewAgent(agent.id);
        e[1] = agent.id;
        e[2] = onPreviewAgent;
        e[3] = o;
    } else {
        o = e[3];
    }
    let a;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        a = {
            className: "sand-jyslct sand-78zum5 sand-6s0dn4 sand-fex06f sand-1iyjqo2 sand-euugli sand-1t0vds8 sand-mzvs34 sand-1ghz6dp sand-ng3xce sand-1qmwy7c sand-jbqb8w sand-1heor9g sand-jb2p0i sand-1yc453h sand-1ypdohk"
        };
        e[4] = a;
    } else {
        a = e[4];
    }
    let n;
    if (e[5] !== agent) {
        n = <Ne agent={agent} fillPx={24} size="sm"/>;
        e[5] = agent;
        e[6] = n;
    } else {
        n = e[6];
    }
    let r;
    if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
        r = {
            className: "sand-78zum5 sand-dt5ytf sand-euugli sand-1iyjqo2"
        };
        e[7] = r;
    } else {
        r = e[7];
    }
    let d;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        d = [
            b.truncate,
            b.rowName
        ];
        e[8] = d;
    } else {
        d = e[8];
    }
    let x;
    if (e[9] !== agent) {
        x = bc(agent);
        e[9] = agent;
        e[10] = x;
    } else {
        x = e[10];
    }
    let f;
    if (e[11] !== id || e[12] !== x) {
        f = <P as="span" id={id} level="body2" style={d}>{x}</P>;
        e[11] = id;
        e[12] = x;
        e[13] = f;
    } else {
        f = e[13];
    }
    let g;
    if (e[14] !== agent) {
        g = <XComponent agent={agent}/>;
        e[14] = agent;
        e[15] = g;
    } else {
        g = e[15];
    }
    let j;
    if (e[16] !== f || e[17] !== g) {
        j = <span {...r}>{f}{g}</span>;
        e[16] = f;
        e[17] = g;
        e[18] = j;
    } else {
        j = e[18];
    }
    let p;
    if (e[19] !== j || e[20] !== o || e[21] !== n) {
        p = <button onClick={o} type="button" {...a}>{n}{j}</button>;
        e[19] = j;
        e[20] = o;
        e[21] = n;
        e[22] = p;
    } else {
        p = e[22];
    }
    let k;
    if (e[23] === Symbol.for("react.memo_cache_sentinel")) {
        k = {
            className: "sand-2lah0s sand-f159sx"
        };
        e[23] = k;
    } else {
        k = e[23];
    }
    let _;
    if (e[24] !== agent || e[25] !== isAdded || e[26] !== onAdd || e[27] !== onRemove) {
        _ = <span {...k}><FComponent agent={agent} isAdded={isAdded} onAdd={onAdd} onRemove={onRemove}/></span>;
        e[24] = agent;
        e[25] = isAdded;
        e[26] = onAdd;
        e[27] = onRemove;
        e[28] = _;
    } else {
        _ = e[28];
    }
    let w;
    if (e[29] !== id || e[30] !== p || e[31] !== _) {
        w = <div aria-labelledby={id} role="group" {...m}>{p}{_}</div>;
        e[29] = id;
        e[30] = p;
        e[31] = _;
        e[32] = w;
    } else {
        w = e[32];
    }
    return w;
}
function FComponent(u) {
    FComponent.d = 1347;
    const e = c_1.c(19);
    const { agent, isAdded, onAdd, onRemove } = u;
    const { _ } = u_1();
    if (dp(agent)) {
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                a_.body2,
                b.secondary
            ];
            e[0] = a;
        } else {
            a = e[0];
        }
        let n;
        if (e[1] !== _) {
            n = _({
                id: "HrUSV3"
            });
            e[1] = _;
            e[2] = n;
        } else {
            n = e[2];
        }
        let r;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            r = <T id="hp8OtS"/>;
            e[3] = r;
        } else {
            r = e[3];
        }
        let d;
        if (e[4] !== n) {
            d = <E aria-disabled disabled size="sm" style={a} title={n} variant="tertiary">{r}</E>;
            e[4] = n;
            e[5] = d;
        } else {
            d = e[5];
        }
        return d;
    }
    if (isAdded) {
        let a;
        if (e[6] !== agent.id || e[7] !== onRemove) {
            a = ()=>onRemove(agent.id);
            e[6] = agent.id;
            e[7] = onRemove;
            e[8] = a;
        } else {
            a = e[8];
        }
        let n;
        if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                a_.body2,
                b.secondary
            ];
            e[9] = n;
        } else {
            n = e[9];
        }
        let r;
        if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
            r = <T id="hp8OtS"/>;
            e[10] = r;
        } else {
            r = e[10];
        }
        let d;
        if (e[11] !== a) {
            d = <E onClick={a} size="sm" style={n} variant="tertiary">{r}</E>;
            e[11] = a;
            e[12] = d;
        } else {
            d = e[12];
        }
        return d;
    }
    let l;
    if (e[13] !== agent.id || e[14] !== onAdd) {
        l = ()=>onAdd(agent.id);
        e[13] = agent.id;
        e[14] = onAdd;
        e[15] = l;
    } else {
        l = e[15];
    }
    let m;
    if (e[16] === Symbol.for("react.memo_cache_sentinel")) {
        m = <T id="m16xKo"/>;
        e[16] = m;
    } else {
        m = e[16];
    }
    let o;
    if (e[17] !== l) {
        o = <E onClick={l} size="sm" style={a_.body2} variant="secondary">{m}</E>;
        e[17] = l;
        e[18] = o;
    } else {
        o = e[18];
    }
    return o;
}
function HComponent(u) {
    HComponent.d = 1349;
    const e = c_1.c(50);
    const { addedTeamAgents, availableTeamAgents, isOpen, onClose, onPreviewAgent, onAdd, onRemove } = u;
    const { _: __1 } = u_1();
    const a = cj();
    const [n, setN] = r.useState("");
    let d;
    if (e[0] !== addedTeamAgents) {
        d = new Set(addedTeamAgents.map(re));
        e[0] = addedTeamAgents;
        e[1] = d;
    } else {
        d = e[1];
    }
    const x = d;
    let f;
    let g;
    let j;
    let p;
    let k;
    let _;
    let onOpenChange;
    let open;
    let surfaceStyle;
    let variant;
    let width;
    if (e[2] !== __1 || e[3] !== x || e[4] !== addedTeamAgents || e[5] !== a || e[6] !== availableTeamAgents || e[7] !== isOpen || e[8] !== onAdd || e[9] !== onClose || e[10] !== onPreviewAgent || e[11] !== onRemove || e[12] !== n) {
        let M;
        if (e[24] !== a || e[25] !== n) {
            M = (A)=>m(A, n, bc, a);
            e[24] = a;
            e[25] = n;
            e[26] = M;
        } else {
            M = e[26];
        }
        const V = o([
            ...availableTeamAgents,
            ...addedTeamAgents
        ]).filter(M);
        const I = addedTeamAgents.length + availableTeamAgents.length > 0;
        g = x_1.Root;
        if (e[27] !== onClose) {
            onOpenChange = (A)=>{
                if (!A) {
                    onClose();
                }
            };
            e[27] = onClose;
            e[28] = onOpenChange;
        } else {
            onOpenChange = e[28];
        }
        open = isOpen;
        surfaceStyle = b.surface;
        variant = "rich";
        width = "wide";
        let Q;
        if (e[29] === Symbol.for("react.memo_cache_sentinel")) {
            Q = [
                a_.body1,
                a$.medium
            ];
            e[29] = Q;
        } else {
            Q = e[29];
        }
        let W;
        if (e[30] === Symbol.for("react.memo_cache_sentinel")) {
            W = <x_1.Title style={Q}><D_1><T id="8Ri8tN"/></D_1></x_1.Title>;
            e[30] = W;
        } else {
            W = e[30];
        }
        if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
            j = <x_1.Header style={b.header}>{W}<x_1.Description style={[
                a_.body1,
                b.secondary
            ]}><T id="XWmreC"/></x_1.Description><x_1.CloseButton/></x_1.Header>;
            e[31] = j;
        } else {
            j = e[31];
        }
        f = x_1.Body;
        p = b.body;
        if (e[32] !== __1 || e[33] !== I || e[34] !== n) {
            k = I ? <div className="sand-78zum5 sand-6s0dn4 sand-167g77z sand-2lah0s sand-14vqqas sand-1t0vds8 sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c"><W_1 name="search" size="sm"/><input aria-label={__1({
                id: "A1taO8"
            })} autoComplete="off" onChange={(A)=>setN(A.currentTarget.value)} placeholder={__1({
                id: "A1taO8"
            })} spellCheck={false} value={n} {...p_1(b.searchInput, a_.body1)}/></div> : null;
            e[32] = __1;
            e[33] = I;
            e[34] = n;
            e[35] = k;
        } else {
            k = e[35];
        }
        _ = V.length === 0 ? <div className="sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-l56j7k sand-17d4w8g sand-1iyjqo2 sand-2b8uid"><W_1 color="quaternary" name="people" size="2xl"/><P as="div" level="body1" style={b.secondary} weight="medium">{I ? <T id="12i8o8"/> : <T id="D6NKnp"/>}</P></div> : <Te contentStyle={b.listContent} rootStyle={b.list}>{V.map((agent)=><ZComponent key={agent.id} agent={agent} isAdded={x.has(agent.id)} onAdd={onAdd} onPreviewAgent={onPreviewAgent} onRemove={onRemove}/>)}</Te>;
        e[2] = __1;
        e[3] = x;
        e[4] = addedTeamAgents;
        e[5] = a;
        e[6] = availableTeamAgents;
        e[7] = isOpen;
        e[8] = onAdd;
        e[9] = onClose;
        e[10] = onPreviewAgent;
        e[11] = onRemove;
        e[12] = n;
        e[13] = f;
        e[14] = g;
        e[15] = j;
        e[16] = p;
        e[17] = k;
        e[18] = _;
        e[19] = onOpenChange;
        e[20] = open;
        e[21] = surfaceStyle;
        e[22] = variant;
        e[23] = width;
    } else {
        f = e[13];
        g = e[14];
        j = e[15];
        p = e[16];
        k = e[17];
        _ = e[18];
        onOpenChange = e[19];
        open = e[20];
        surfaceStyle = e[21];
        variant = e[22];
        width = e[23];
    }
    let z;
    if (e[36] !== f || e[37] !== p || e[38] !== k || e[39] !== _) {
        z = j_1.jsxs(f, {
            style: p,
            children: [
                k,
                _
            ]
        });
        e[36] = f;
        e[37] = p;
        e[38] = k;
        e[39] = _;
        e[40] = z;
    } else {
        z = e[40];
    }
    let D;
    if (e[41] !== g || e[42] !== j || e[43] !== z || e[44] !== onOpenChange || e[45] !== open || e[46] !== surfaceStyle || e[47] !== variant || e[48] !== width) {
        D = j_1.jsxs(g, {
            onOpenChange,
            open,
            surfaceStyle,
            variant,
            width,
            children: [
                j,
                z
            ]
        });
        e[41] = g;
        e[42] = j;
        e[43] = z;
        e[44] = onOpenChange;
        e[45] = open;
        e[46] = surfaceStyle;
        e[47] = variant;
        e[48] = width;
        e[49] = D;
    } else {
        D = e[49];
    }
    return D;
}
function re(u) {
    return u.id;
}
function CeComponent() {
    CeComponent.d = 1342;
    const u = c_1.c(2);
    const e = dq();
    let s;
    if (u[0] !== e) {
        s = <HComponent {...e} isOpen/>;
        u[0] = e;
        u[1] = s;
    } else {
        s = u[1];
    }
    return s;
}
export { CeComponent as default };
