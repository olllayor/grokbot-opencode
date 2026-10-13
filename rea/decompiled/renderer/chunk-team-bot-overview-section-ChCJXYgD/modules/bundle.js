import { c as c_1, i, u as u_1, r as r_1, T as T_1, p, _ } from "./index.eager-vendor-Qbf9YA6n.js";
import { e as e_1, i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { b7, bP, bT, b9, cq, fu, bh, aK, fv, fw, af, a$, a_, cR, cf, d2, dD, fx, dC, fy, ba, fz, ay, az, cg, cw, fA, eY, h as Je } from "./index.eager-app-Cj5f8Gby.js";
import { bC as Y, bD as Re1, aS, bE as Ce1, bx as Ze, p as Xe, aL as Et1, t as Se1, z as J, bF as Tt1, bG as Ue1, bw, bH, b2, bI, bJ, I, ay as ay_1, bK, bL, bM as Ct1, aZ, aV, bN } from "./index-ZYxf-aBb.js";
import { O as O_1, T as T_2, a as Pt1, b as Le1 } from "./chunk-team-bot-setup-grid-Bn3gQfbU.js";
import { t, a as a_1, b, T as T_3, i as i_2, c as St } from "./chunk-team-bot-details-rows-zXlABTd_.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "9c90859c-0289-4eb4-967c-d5a0390c149d";
            e._sentryDebugIdIdentifier = "sentry-dbid-9c90859c-0289-4eb4-967c-d5a0390c149d";
        }
    } catch (e) {}
})();
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "./chunk-team-bot-overview-panel-CPbjqjze.js",
    "./index.eager-vendor-Qbf9YA6n.js",
    "./index.eager-app-Cj5f8Gby.js",
    "./index.eager-platform-Dcfeegfw.js",
    "./index.eager-common-CdCvBQNJ.js",
    "./index-ZYxf-aBb.js",
    "./index-B9V4agTc.css",
    "./chunk-team-bot-plugins-dialog-D6-x2Byv.js",
    "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js",
    "./chunk-use-team-bot-access-BG6AYhPN.js",
    "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js",
    "./chunk-plugins-rows-2d0UrD7L.js",
    "./chunk-mcp-connector-status-DhhAF8A6.js",
    "./chunk-SegmentedControl-Bj94OhnT.js",
    "./chunk-team-setup-pills-7uDu4vf1.js",
    "./chunk-team-bot-context-dialog-9mLHC6gW.js",
    "./chunk-team-setup-new-skill-dialog-sf9oPof1.js",
    "./chunk-get-file-icon-ZAkFyGfn.js",
    "./chunk-team-bot-details-dialog-CX2a_NHB.js",
    "./chunk-wipe-navigation-B3wgZxtA.js",
    "./chunk-bot-template-details-focus-BkZ83BHB.js",
    "./chunk-team-bot-setup-grid-Bn3gQfbU.js",
    "./chunk-team-bot-details-rows-zXlABTd_.js",
    "./chunk-grok-bot-slack-dialog-live-CcLC4Tfx.js",
    "./chunk-team-setup-new-secret-dialog-BMvn0nac.js"
]))=>i.map((i)=>d[i]);
const ae = new WeakMap;
function kt(a, serverId) {
    let t = ae.get(a);
    if (t == null) {
        t = new Map;
        ae.set(a, t);
    }
    let l = t.get(serverId);
    if (l == null) {
        l = e_1({
            read: ()=>a.desktop.listGrokBotAgentManagers({
                    serverId
                })
        });
        t.set(serverId, l);
    }
    return l;
}
function xt(serverId) {
    const e = c_1.c(20);
    const t = b7();
    let l;
    if (e[0] !== t || e[1] !== serverId) {
        l = kt(t, serverId);
        e[0] = t;
        e[1] = serverId;
        e[2] = l;
    } else {
        l = e[2];
    }
    const s = l;
    let i;
    if (e[3] !== s) {
        i = (d)=>d.finally(()=>s.refresh());
        e[3] = s;
        e[4] = i;
    } else {
        i = e[4];
    }
    const n = i;
    const state = bP(s.snapshots);
    let load;
    if (e[5] !== s) {
        load = ()=>{
            s.load();
        };
        e[5] = s;
        e[6] = load;
    } else {
        load = e[6];
    }
    let add;
    let remove;
    if (e[7] !== t || e[8] !== n || e[9] !== serverId) {
        add = (d)=>n(t.desktop.addGrokBotAgentManager({
                serverId,
                userId: d
            }));
        remove = (d)=>n(t.desktop.removeGrokBotAgentManager({
                serverId,
                userId: d
            }));
        e[7] = t;
        e[8] = n;
        e[9] = serverId;
        e[10] = add;
        e[11] = remove;
    } else {
        add = e[10];
        remove = e[11];
    }
    let retry;
    if (e[12] !== s) {
        retry = ()=>{
            s.refresh();
        };
        e[12] = s;
        e[13] = retry;
    } else {
        retry = e[13];
    }
    let p;
    if (e[14] !== state || e[15] !== load || e[16] !== add || e[17] !== remove || e[18] !== retry) {
        p = {
            state,
            load,
            add,
            remove,
            retry
        };
        e[14] = state;
        e[15] = load;
        e[16] = add;
        e[17] = remove;
        e[18] = retry;
        e[19] = p;
    } else {
        p = e[19];
    }
    return p;
}
async function pe(a) {
    try {
        await a();
        return null;
    } catch  {
        return i._({
            id: "D2AZQg"
        });
    }
}
function jt({ name, addManager }) {
    return {
        title: i._({
            id: "ZQvSYg",
            values: {
                name
            }
        }),
        description: i._({
            id: "UGVwbH"
        }),
        confirmLabel: i._({
            id: "ErwyLe"
        }),
        cancelLabel: i._({
            id: "dEgA5A"
        }),
        perform: ()=>pe(addManager)
    };
}
function _t({ name, removeManager }) {
    return {
        title: i._({
            id: "oj3qs7",
            values: {
                name
            }
        }),
        description: i._({
            id: "dzP3fS"
        }),
        confirmLabel: i._({
            id: "t/YqKh"
        }),
        pendingLabel: i._({
            id: "M5RhXF"
        }),
        cancelLabel: i._({
            id: "dEgA5A"
        }),
        destructive: true,
        perform: ()=>pe(removeManager)
    };
}
function yt(a, e) {
    const t = new Set(e);
    return a.members.filter((l)=>l.userId !== a.selfUserId && !t.has(l.userId));
}
const wt = {
    list: {
        kskxy: "sand-o0cisl",
        kORKVm: "sand-1odjw0f",
        $$css: true
    }
};
function Ge1Component(a) {
    Ge1Component.d = 1017;
    const e = c_1.c(7);
    const { agent } = a;
    const { serverId, teamId } = agent;
    const isCreator = agent.viewerIsOwner !== false;
    const n = agent.published === true && serverId != null && teamId != null && (isCreator || agent.viewerCanManage === true);
    const r = bT();
    let u;
    if (e[0] !== r || e[1] !== n) {
        u = ()=>{
            if (n) {
                r("grok_bot_team_bot_managers");
            }
            return vt;
        };
        e[0] = r;
        e[1] = n;
        e[2] = u;
    } else {
        u = e[2];
    }
    i_1(u);
    if (!b9("grok_bot_team_bot_managers") || !n) {
        return null;
    }
    let f;
    if (e[3] !== isCreator || e[4] !== serverId || e[5] !== teamId) {
        f = <Be1Component isCreator={isCreator} serverId={serverId} teamId={teamId}/>;
        e[3] = isCreator;
        e[4] = serverId;
        e[5] = teamId;
        e[6] = f;
    } else {
        f = e[6];
    }
    return f;
}
function vt() {}
function Be1Component(a) {
    Be1Component.d = 1016;
    const e = c_1.c(35);
    const { isCreator, serverId, teamId } = a;
    const { _: __1 } = u_1();
    const n = r_1.useId();
    const r = b7();
    const u = cq();
    const c = xt(serverId);
    const f = fu(teamId);
    let m;
    if (e[0] !== r || e[1] !== c || e[2] !== teamId) {
        m = ()=>{
            c.load();
            fv(r, teamId);
            return Tt;
        };
        e[0] = r;
        e[1] = c;
        e[2] = teamId;
        e[3] = m;
    } else {
        m = e[3];
    }
    i_1(m);
    let p;
    let d;
    let onClick;
    let w;
    if (e[4] !== __1 || e[5] !== u || e[6] !== r || e[7] !== n || e[8] !== isCreator || e[9] !== c || e[10] !== f || e[11] !== teamId) {
        const x = bh(c.state) ?? null;
        const v = bh(f) ?? null;
        d = c.state.status === "failed" || f.status === "failed";
        let j;
        if (e[16] !== r || e[17] !== c || e[18] !== teamId) {
            j = ()=>{
                c.retry();
                fw(r, teamId);
            };
            e[16] = r;
            e[17] = c;
            e[18] = teamId;
            e[19] = j;
        } else {
            j = e[19];
        }
        onClick = j;
        p = null;
        if (x != null && v != null) {
            const B = new Map(v.members.map(Bt));
            const O = x.map((y)=>B.get(y) ?? {
                    userId: y,
                    name: __1({
                        id: "j/bht1"
                    }),
                    email: ""
                });
            p = O.length === 0 ? <Y><T_1 id="EdQY6l"/></Y> : <Re1 labelledBy={n} style={[
                wt.list,
                aK.thinScrollbar
            ]}>{O.map((person)=>{
                const T = aS(person);
                return <Ce1 key={person.userId} lead=<Et1 person={person} sizePx={24}/> title={T} {...person.email.length > 0 ? {
                    meta: person.email
                } : {}} {...isCreator ? {
                    trailing: <Ze content={__1({
                        id: "+4tG0u"
                    })}><Xe aria-label={__1({
                        id: "HLazKQ",
                        values: {
                            name: T
                        }
                    })} icon="trash" onClick={()=>{
                        u(_t({
                            name: T,
                            removeManager: ()=>c.remove(person.userId)
                        }));
                    }} size="sm"/></Ze>
                } : {}}/>;
            })}</Re1>;
        } else if (!d) {
            let B;
            if (e[20] === Symbol.for("react.memo_cache_sentinel")) {
                B = <Y><T_1 id="yQE2r9"/></Y>;
                e[20] = B;
            } else {
                B = e[20];
            }
            p = B;
        }
        w = isCreator && x != null && v != null ? yt(v, x) : [];
        e[4] = __1;
        e[5] = u;
        e[6] = r;
        e[7] = n;
        e[8] = isCreator;
        e[9] = c;
        e[10] = f;
        e[11] = teamId;
        e[12] = p;
        e[13] = d;
        e[14] = onClick;
        e[15] = w;
    } else {
        p = e[12];
        d = e[13];
        onClick = e[14];
        w = e[15];
    }
    const candidates = w;
    let _;
    if (e[21] === Symbol.for("react.memo_cache_sentinel")) {
        _ = <T_1 id="AH9j3K"/>;
        e[21] = _;
    } else {
        _ = e[21];
    }
    let g;
    if (e[22] !== __1 || e[23] !== u || e[24] !== candidates || e[25] !== c) {
        g = candidates.length > 0 ? {
            headingTrailing: <span className="sand-1rdy4ex sand-4vbgl9 sand-vc5jky"><Se1 placement="bottom-end"><Se1.Trigger><J aria-label={__1({
                id: "ErwyLe"
            })} size="sm" variant="secondary"><T_1 id="m16xKo"/></J></Se1.Trigger><Tt1 candidates={candidates} label={__1({
                id: "ErwyLe"
            })} onAdd={(x)=>{
                const v = candidates.find((j)=>j.userId === x);
                if (v != null) {
                    u(jt({
                        name: aS(v),
                        addManager: ()=>c.add(x)
                    }));
                }
            }}/></Se1></span>
        } : {};
        e[22] = __1;
        e[23] = u;
        e[24] = candidates;
        e[25] = c;
        e[26] = g;
    } else {
        g = e[26];
    }
    let S;
    if (e[27] !== d || e[28] !== onClick) {
        S = d ? <Y><T_1 id="Ke/QF9"/> <J onClick={onClick} size="sm" variant="secondary"><T_1 id="6gRgw8"/></J></Y> : null;
        e[27] = d;
        e[28] = onClick;
        e[29] = S;
    } else {
        S = e[29];
    }
    let k;
    if (e[30] !== p || e[31] !== n || e[32] !== g || e[33] !== S) {
        k = <Ue1 heading={_} headingId={n} {...g}>{p}{S}</Ue1>;
        e[30] = p;
        e[31] = n;
        e[32] = g;
        e[33] = S;
        e[34] = k;
    } else {
        k = e[34];
    }
    return k;
}
function Bt(a) {
    return [
        a.userId,
        a
    ];
}
function Tt() {}
const Ot = {
    draftCopy: {
        kzQI83: "sand-1iyjqo2",
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-1o0liin",
        $$css: true
    }
};
function He1Component(a) {
    He1Component.d = 1051;
    const e = c_1.c(13);
    const { agentId } = a;
    const { _ } = u_1();
    const s = bw();
    const i = bH();
    let onFailure;
    if (e[0] !== _ || e[1] !== s) {
        onFailure = ()=>s({
                kind: "error",
                text: _({
                    id: "HfEDmM"
                })
            });
        e[0] = _;
        e[1] = s;
        e[2] = onFailure;
    } else {
        onFailure = e[2];
    }
    let onPublished;
    if (e[3] !== agentId || e[4] !== i) {
        onPublished = ()=>{
            if (!af()) {
                i?.holdMarkState(agentId, "happy");
                bI(agentId, ()=>{
                    i?.releaseMarkState(agentId);
                });
            }
        };
        e[3] = agentId;
        e[4] = i;
        e[5] = onPublished;
    } else {
        onPublished = e[5];
    }
    let u;
    if (e[6] !== onFailure || e[7] !== onPublished) {
        u = {
            onFailure,
            onPublished
        };
        e[6] = onFailure;
        e[7] = onPublished;
        e[8] = u;
    } else {
        u = e[8];
    }
    const { status, publish } = b2(agentId, u);
    const pending = status === "publishing";
    let p;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        p = <T_1 id="EEYbdt"/>;
        e[9] = p;
    } else {
        p = e[9];
    }
    let d;
    if (e[10] !== publish || e[11] !== pending) {
        d = <J onClick={publish} pending={pending} size="lg" style={bJ.root} type="button" variant="secondary">{p}</J>;
        e[10] = publish;
        e[11] = pending;
        e[12] = d;
    } else {
        d = e[12];
    }
    return d;
}
function SeComponent() {
    SeComponent.d = 1052;
    const a = c_1.c(1);
    let e;
    if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = <section className="sand-1n2onr6 sand-78zum5 sand-4hv7ue sand-1y0btm7 sand-fnq37j sand-hojbe8 sand-b3r6kr sand-1q0g3np sand-1cy8zhl sand-17d4w8g sand-1o4c39c sand-du1ouj sand-1p9h3wb sand-18v3q8p"><span className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-vy4d1p sand-xk0z11 sand-1kgmq87 sand-mgb6t1 sand-1o0liin"><I name="hammer" size="lg"/></span><p {...p(a_.body2, a$.regular, Ot.draftCopy)}><T_1 id="rHDc6J"/></p></section>;
        a[0] = e;
    } else {
        e = a[0];
    }
    return e;
}
const ke = ay(()=>_(()=>import("./chunk-team-bot-overview-panel-CPbjqjze.js"), __vite__mapDeps([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24
    ]), import.meta.url));
const Xe1 = ke.component((a)=>a.TeamBotOverviewPanel);
function Je1Component(a) {
    Je1Component.d = 1025;
    const e = c_1.c(7);
    const { status, names } = a;
    switch(status.kind){
        case "loading":
            {
                let s;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T_1 id="yQE2r9"/>;
                    e[0] = s;
                } else {
                    s = e[0];
                }
                return s;
            }
        case "failed":
            {
                let s;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    s = <T_1 id="Ke/QF9"/>;
                    e[1] = s;
                } else {
                    s = e[1];
                }
                return s;
            }
        case "empty":
            {
                let s;
                if (e[2] !== names) {
                    s = <Le1 count={0} names={names}/>;
                    e[2] = names;
                    e[3] = s;
                } else {
                    s = e[3];
                }
                return s;
            }
        case "count":
            {
                let s;
                if (e[4] !== names || e[5] !== status.count) {
                    s = <Le1 count={status.count} names={names}/>;
                    e[4] = names;
                    e[5] = status.count;
                    e[6] = s;
                } else {
                    s = e[6];
                }
                return s;
            }
    }
}
function GComponent(a) {
    GComponent.d = 1024;
    const e = c_1.c(9);
    const { icon, label, rowId, status, names, onOpen } = a;
    let subtitle;
    if (e[0] !== names || e[1] !== status) {
        subtitle = <Je1Component names={names} status={status}/>;
        e[0] = names;
        e[1] = status;
        e[2] = subtitle;
    } else {
        subtitle = e[2];
    }
    let c;
    if (e[3] !== icon || e[4] !== label || e[5] !== onOpen || e[6] !== rowId || e[7] !== subtitle) {
        c = <T_2 icon={icon} onOpen={onOpen} paneKey={rowId} subtitle={subtitle} title={label}/>;
        e[3] = icon;
        e[4] = label;
        e[5] = onOpen;
        e[6] = rowId;
        e[7] = subtitle;
        e[8] = c;
    } else {
        c = e[8];
    }
    return c;
}
export function TeamBotOverviewSection(a) {
    TeamBotOverviewSection.d = 1028;
    const e = c_1.c(48);
    const { pluginStatus, secretsStatus, skillsStatus, filesStatus, pluginNames, secretNames, skillNames, fileNames, header, onOpenPlugins, onOpenSecrets, onOpenSkills, onOpenFiles } = a;
    let w;
    if (e[0] !== pluginNames) {
        w = pluginNames === undefined ? [] : pluginNames;
        e[0] = pluginNames;
        e[1] = w;
    } else {
        w = e[1];
    }
    const b = w;
    let _;
    if (e[2] !== secretNames) {
        _ = secretNames === undefined ? [] : secretNames;
        e[2] = secretNames;
        e[3] = _;
    } else {
        _ = e[3];
    }
    const g = _;
    let S;
    if (e[4] !== skillNames) {
        S = skillNames === undefined ? [] : skillNames;
        e[4] = skillNames;
        e[5] = S;
    } else {
        S = e[5];
    }
    const k = S;
    let x;
    if (e[6] !== fileNames) {
        x = fileNames === undefined ? [] : fileNames;
        e[6] = fileNames;
        e[7] = x;
    } else {
        x = e[7];
    }
    const v = x;
    const { _: __1 } = u_1();
    const B = r_1.useId();
    let O;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        O = {
            className: "sand-78zum5 sand-dt5ytf sand-mt3bw4"
        };
        e[8] = O;
    } else {
        O = e[8];
    }
    let y;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        y = <T_1 id="RDjuBN"/>;
        e[9] = y;
    } else {
        y = e[9];
    }
    let T;
    if (e[10] !== __1) {
        T = __1({
            id: "ohUJJM"
        });
        e[10] = __1;
        e[11] = T;
    } else {
        T = e[11];
    }
    let A;
    if (e[12] !== onOpenPlugins || e[13] !== b || e[14] !== pluginStatus || e[15] !== T) {
        A = <GComponent icon="plug" label={T} names={b} onOpen={onOpenPlugins} rowId="team-plugins" status={pluginStatus}/>;
        e[12] = onOpenPlugins;
        e[13] = b;
        e[14] = pluginStatus;
        e[15] = T;
        e[16] = A;
    } else {
        A = e[16];
    }
    let M;
    if (e[17] !== __1 || e[18] !== onOpenSecrets || e[19] !== g || e[20] !== secretsStatus) {
        M = secretsStatus == null ? null : <GComponent icon={O_1.secrets} label={__1({
            id: "MAv87s"
        })} names={g} onOpen={onOpenSecrets} rowId="team-secrets" status={secretsStatus}/>;
        e[17] = __1;
        e[18] = onOpenSecrets;
        e[19] = g;
        e[20] = secretsStatus;
        e[21] = M;
    } else {
        M = e[21];
    }
    let C;
    if (e[22] !== __1) {
        C = __1({
            id: "PCSkw2"
        });
        e[22] = __1;
        e[23] = C;
    } else {
        C = e[23];
    }
    let E;
    if (e[24] !== onOpenSkills || e[25] !== k || e[26] !== skillsStatus || e[27] !== C) {
        E = <GComponent icon="cube" label={C} names={k} onOpen={onOpenSkills} rowId="team-skills" status={skillsStatus}/>;
        e[24] = onOpenSkills;
        e[25] = k;
        e[26] = skillsStatus;
        e[27] = C;
        e[28] = E;
    } else {
        E = e[28];
    }
    let L;
    if (e[29] !== __1) {
        L = __1({
            id: "sER+bs"
        });
        e[29] = __1;
        e[30] = L;
    } else {
        L = e[30];
    }
    let N;
    if (e[31] !== v || e[32] !== filesStatus || e[33] !== onOpenFiles || e[34] !== L) {
        N = <GComponent icon={O_1.files} label={L} names={v} onOpen={onOpenFiles} rowId="team-files" status={filesStatus}/>;
        e[31] = v;
        e[32] = filesStatus;
        e[33] = onOpenFiles;
        e[34] = L;
        e[35] = N;
    } else {
        N = e[35];
    }
    let z;
    if (e[36] !== B || e[37] !== A || e[38] !== M || e[39] !== E || e[40] !== N) {
        z = <Pt1 labelledBy={B}>{A}{M}{E}{N}</Pt1>;
        e[36] = B;
        e[37] = A;
        e[38] = M;
        e[39] = E;
        e[40] = N;
        e[41] = z;
    } else {
        z = e[41];
    }
    let P;
    if (e[42] !== B || e[43] !== z) {
        P = <Ue1 heading={y} headingId={B}>{z}</Ue1>;
        e[42] = B;
        e[43] = z;
        e[44] = P;
    } else {
        P = e[44];
    }
    let R;
    if (e[45] !== header || e[46] !== P) {
        R = <div {...O}>{header}{P}</div>;
        e[45] = header;
        e[46] = P;
        e[47] = R;
    } else {
        R = e[47];
    }
    return R;
}
function Ye1Component(a) {
    Ye1Component.d = 1031;
    const e = c_1.c(15);
    const { status, isPublished, onOpen } = a;
    const { _ } = u_1();
    const isMetaWrapped = isPublished && status === "none";
    let isDisabled;
    if (e[0] !== status) {
        isDisabled = status === "not_published" || i_2(status);
        e[0] = status;
        e[1] = isDisabled;
    } else {
        isDisabled = e[1];
    }
    let lead;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        lead = <Je sizePx={16}/>;
        e[2] = lead;
    } else {
        lead = e[2];
    }
    let meta;
    if (e[3] !== isMetaWrapped || e[4] !== status) {
        meta = isMetaWrapped ? <T_1 id="qNfVdp"/> : <St status={status}/>;
        e[3] = isMetaWrapped;
        e[4] = status;
        e[5] = meta;
    } else {
        meta = e[5];
    }
    let title;
    if (e[6] !== _ || e[7] !== isMetaWrapped) {
        title = _(isMetaWrapped ? {
            id: "CVtI2N"
        } : {
            id: "lyjq5X"
        });
        e[6] = _;
        e[7] = isMetaWrapped;
        e[8] = title;
    } else {
        title = e[8];
    }
    let m;
    if (e[9] !== isMetaWrapped || e[10] !== onOpen || e[11] !== isDisabled || e[12] !== meta || e[13] !== title) {
        m = <Re1><Ce1 isDisabled={isDisabled} isMetaWrapped={isMetaWrapped} lead={lead} meta={meta} onOpen={onOpen} paneKey="team-slack" title={title}/></Re1>;
        e[9] = isMetaWrapped;
        e[10] = onOpen;
        e[11] = isDisabled;
        e[12] = meta;
        e[13] = title;
        e[14] = m;
    } else {
        m = e[14];
    }
    return m;
}
export function TeamBotDetailsFooter(a) {
    TeamBotDetailsFooter.d = 1026;
    const e = c_1.c(9);
    const { slackStatus, isPublished, unpublish, onOpenSlack } = a;
    let n;
    if (e[0] !== isPublished || e[1] !== onOpenSlack || e[2] !== slackStatus) {
        n = <Ye1Component isPublished={isPublished} onOpen={onOpenSlack} status={slackStatus}/>;
        e[0] = isPublished;
        e[1] = onOpenSlack;
        e[2] = slackStatus;
        e[3] = n;
    } else {
        n = e[3];
    }
    let r;
    if (e[4] !== unpublish) {
        r = unpublish == null ? null : <T_3 unpublish={unpublish}/>;
        e[4] = unpublish;
        e[5] = r;
    } else {
        r = e[5];
    }
    let u;
    if (e[6] !== n || e[7] !== r) {
        u = <>{n}{r}</>;
        e[6] = n;
        e[7] = r;
        e[8] = u;
    } else {
        u = e[8];
    }
    return u;
}
export function TeamBotSidebarPublishActionLive(a) {
    TeamBotSidebarPublishActionLive.d = 1030;
    const e = c_1.c(10);
    const { agent } = a;
    const l = b9("grok_bot_multiplayer");
    let s;
    if (e[0] !== agent || e[1] !== l) {
        s = ba(agent, l);
        e[0] = agent;
        e[1] = l;
        e[2] = s;
    } else {
        s = e[2];
    }
    const i = s;
    let n;
    if (e[3] !== agent || e[4] !== i) {
        n = i && !d2(agent);
        e[3] = agent;
        e[4] = i;
        e[5] = n;
    } else {
        n = e[5];
    }
    const isPublishable = bK(agent, n);
    if (!i) {
        return null;
    }
    const u = t({
        isPublished: d2(agent),
        isPublishable
    });
    if (u === "ready") {
        let c;
        if (e[6] !== agent.id) {
            c = <He1Component agentId={agent.id}/>;
            e[6] = agent.id;
            e[7] = c;
        } else {
            c = e[7];
        }
        return c;
    }
    if (u === "published") {
        let c;
        if (e[8] !== agent.id) {
            c = <Ct1 agentId={agent.id}/>;
            e[8] = agent.id;
            e[9] = c;
        } else {
            c = e[9];
        }
        return c;
    }
    return null;
}
function ve(agent) {
    const e = c_1.c(8);
    const t = b9("grok_bot_multiplayer");
    const l = bT();
    let s;
    if (e[0] !== agent || e[1] !== l) {
        s = ()=>{
            if (fz(agent, true)) {
                l("grok_bot_multiplayer");
            }
            return At;
        };
        e[0] = agent;
        e[1] = l;
        e[2] = s;
    } else {
        s = e[2];
    }
    i_1(s);
    let i;
    if (e[3] !== agent || e[4] !== t) {
        i = fz(agent, t);
        e[3] = agent;
        e[4] = t;
        e[5] = i;
    } else {
        i = e[5];
    }
    const n = i;
    let r;
    if (e[6] !== n) {
        r = ()=>{
            if (n) {
                az(ke.preload(), "team-bot-overview-panel-import");
            }
            return It;
        };
        e[6] = n;
        e[7] = r;
    } else {
        r = e[7];
    }
    i_1(r);
    return n;
}
function It() {}
function At() {}
export function TeamBotOverviewSectionLive(a) {
    TeamBotOverviewSectionLive.d = 1029;
    const e = c_1.c(64);
    const { agent } = a;
    const l = ve(agent);
    const s = cR(l ? agent.id : null);
    const i = cf(l ? agent.id : null);
    const n = ay_1(l ? agent.serverId : null);
    let r;
    if (e[0] !== agent || e[1] !== l) {
        r = l && agent.viewerIsOwner !== false && !d2(agent);
        e[0] = agent;
        e[1] = l;
        e[2] = r;
    } else {
        r = e[2];
    }
    const isPublishable = bK(agent, r);
    const [c, setC] = r_1.useState(null);
    if (!l) {
        return null;
    }
    const panel = c?.agentId === agent.id ? c.kind : null;
    let p;
    if (e[3] !== agent.id) {
        p = (P)=>{
            setC({
                agentId: agent.id,
                kind: P.status.kind === "empty" ? P.addKind : {
                    details: P.section
                }
            });
        };
        e[3] = agent.id;
        e[4] = p;
    } else {
        p = e[4];
    }
    const d = p;
    let h;
    let pluginNames;
    let b;
    let _;
    let g;
    let skillNames;
    let k;
    let x;
    if (e[5] !== n || e[6] !== i.plugins || e[7] !== s) {
        const P = aZ(s).load;
        const R = aV(i.plugins);
        let q;
        if (e[16] !== n?.secrets) {
            q = n?.secrets ?? [];
            e[16] = n?.secrets;
            e[17] = q;
        } else {
            q = e[17];
        }
        _ = q;
        const Q = cg(i.plugins);
        b = a_1(P, R.length);
        let V;
        if (e[18] !== n || e[19] !== _.length) {
            V = n == null ? null : a_1(n.load, _.length);
            e[18] = n;
            e[19] = _.length;
            e[20] = V;
        } else {
            V = e[20];
        }
        g = V;
        k = a_1(P, Q.librarySkills.length);
        h = a_1(P, Q.fileSkills.length);
        pluginNames = R.map(Lt);
        skillNames = Q.librarySkills.map(Et);
        x = Q.fileSkills.map(cw);
        e[5] = n;
        e[6] = i.plugins;
        e[7] = s;
        e[8] = h;
        e[9] = pluginNames;
        e[10] = b;
        e[11] = _;
        e[12] = g;
        e[13] = skillNames;
        e[14] = k;
        e[15] = x;
    } else {
        h = e[8];
        pluginNames = e[9];
        b = e[10];
        _ = e[11];
        g = e[12];
        skillNames = e[13];
        k = e[14];
        x = e[15];
    }
    const fileNames = x;
    let j;
    if (e[21] !== agent || e[22] !== isPublishable) {
        j = t({
            isPublished: d2(agent),
            isPublishable
        });
        e[21] = agent;
        e[22] = isPublishable;
        e[23] = j;
    } else {
        j = e[23];
    }
    const B = j;
    let header;
    if (e[24] !== agent.viewerIsOwner || e[25] !== B) {
        header = agent.viewerIsOwner !== false && B === "not_ready" ? <SeComponent/> : null;
        e[24] = agent.viewerIsOwner;
        e[25] = B;
        e[26] = header;
    } else {
        header = e[26];
    }
    let secretNames;
    if (e[27] !== _) {
        secretNames = _.map(Ct);
        e[27] = _;
        e[28] = secretNames;
    } else {
        secretNames = e[28];
    }
    let onOpenFiles;
    if (e[29] !== h || e[30] !== d) {
        onOpenFiles = ()=>d({
                addKind: "files",
                section: "files",
                status: h
            });
        e[29] = h;
        e[30] = d;
        e[31] = onOpenFiles;
    } else {
        onOpenFiles = e[31];
    }
    let onOpenPlugins;
    if (e[32] !== d || e[33] !== b) {
        onOpenPlugins = ()=>d({
                addKind: "plugins",
                section: "integrations",
                status: b
            });
        e[32] = d;
        e[33] = b;
        e[34] = onOpenPlugins;
    } else {
        onOpenPlugins = e[34];
    }
    let onOpenSecrets;
    if (e[35] !== d || e[36] !== g) {
        onOpenSecrets = ()=>{
            if (g != null) {
                d({
                    addKind: "secrets",
                    section: "secrets",
                    status: g
                });
            }
        };
        e[35] = d;
        e[36] = g;
        e[37] = onOpenSecrets;
    } else {
        onOpenSecrets = e[37];
    }
    let onOpenSkills;
    if (e[38] !== d || e[39] !== k) {
        onOpenSkills = ()=>d({
                addKind: "skills",
                section: "skills",
                status: k
            });
        e[38] = d;
        e[39] = k;
        e[40] = onOpenSkills;
    } else {
        onOpenSkills = e[40];
    }
    let E;
    if (e[41] !== fileNames || e[42] !== h || e[43] !== pluginNames || e[44] !== b || e[45] !== g || e[46] !== skillNames || e[47] !== k || e[48] !== onOpenSkills || e[49] !== header || e[50] !== secretNames || e[51] !== onOpenFiles || e[52] !== onOpenPlugins || e[53] !== onOpenSecrets) {
        E = <TeamBotOverviewSection fileNames={fileNames} header={header} filesStatus={h} pluginNames={pluginNames} secretNames={secretNames} skillNames={skillNames} onOpenFiles={onOpenFiles} onOpenPlugins={onOpenPlugins} onOpenSecrets={onOpenSecrets} onOpenSkills={onOpenSkills} pluginStatus={b} secretsStatus={g} skillsStatus={k}/>;
        e[41] = fileNames;
        e[42] = h;
        e[43] = pluginNames;
        e[44] = b;
        e[45] = g;
        e[46] = skillNames;
        e[47] = k;
        e[48] = onOpenSkills;
        e[49] = header;
        e[50] = secretNames;
        e[51] = onOpenFiles;
        e[52] = onOpenPlugins;
        e[53] = onOpenSecrets;
        e[54] = E;
    } else {
        E = e[54];
    }
    let L;
    if (e[55] !== agent) {
        L = <Ge1Component agent={agent}/>;
        e[55] = agent;
        e[56] = L;
    } else {
        L = e[56];
    }
    let N;
    if (e[57] !== agent || e[58] !== panel) {
        N = panel != null ? <Xe1 agent={agent} onClose={()=>setC(null)} panel={panel}/> : null;
        e[57] = agent;
        e[58] = panel;
        e[59] = N;
    } else {
        N = e[59];
    }
    let z;
    if (e[60] !== E || e[61] !== L || e[62] !== N) {
        z = <>{E}{L}{N}</>;
        e[60] = E;
        e[61] = L;
        e[62] = N;
        e[63] = z;
    } else {
        z = e[63];
    }
    return z;
}
function Ct(a) {
    return a.name;
}
function Et(a) {
    return fA(a, eY());
}
function Lt(a) {
    return bN(a);
}
export function TeamBotDetailsFooterLive(a) {
    TeamBotDetailsFooterLive.d = 1027;
    const e = c_1.c(26);
    const { agent } = a;
    const { _: __1 } = u_1();
    const s = ve(agent);
    const isPublished = d2(agent);
    const n = bw();
    let r;
    if (e[0] !== __1 || e[1] !== n) {
        r = {
            onFailure: ()=>n({
                    kind: "error",
                    text: __1({
                        id: "D2AZQg"
                    })
                })
        };
        e[0] = __1;
        e[1] = n;
        e[2] = r;
    } else {
        r = e[2];
    }
    const { status, unpublish } = bL(agent.id, r);
    const { autoUpdate } = dD();
    const m = fx();
    const p = dC();
    const d = fy(agent);
    let h;
    if (e[3] !== autoUpdate || e[4] !== d) {
        h = ()=>{
            if (d != null) {
                autoUpdate(d);
            }
            return $t;
        };
        e[3] = autoUpdate;
        e[4] = d;
        e[5] = h;
    } else {
        h = e[5];
    }
    i_1(h);
    const [w, setW] = r_1.useState(null);
    if (!s) {
        return null;
    }
    const slackStatus = b({
        serverStatus: agent.slackStatus ?? "none",
        isPublished,
        isAutoUpdating: m === agent.id,
        step: p?.agentId === agent.id ? p.step : null
    });
    let onOpenSlack;
    if (e[6] !== agent.id || e[7] !== setW) {
        onOpenSlack = ()=>setW(agent.id);
        e[6] = agent.id;
        e[7] = setW;
        e[8] = onOpenSlack;
    } else {
        onOpenSlack = e[8];
    }
    let S;
    if (e[9] !== agent.viewerIsOwner || e[10] !== isPublished || e[11] !== unpublish || e[12] !== status) {
        S = isPublished && agent.viewerIsOwner !== false ? {
            unpublish: {
                isPending: status === "unpublishing",
                onUnpublish: unpublish
            }
        } : {};
        e[9] = agent.viewerIsOwner;
        e[10] = isPublished;
        e[11] = unpublish;
        e[12] = status;
        e[13] = S;
    } else {
        S = e[13];
    }
    let k;
    if (e[14] !== isPublished || e[15] !== slackStatus || e[16] !== onOpenSlack || e[17] !== S) {
        k = <TeamBotDetailsFooter isPublished={isPublished} onOpenSlack={onOpenSlack} slackStatus={slackStatus} {...S}/>;
        e[14] = isPublished;
        e[15] = slackStatus;
        e[16] = onOpenSlack;
        e[17] = S;
        e[18] = k;
    } else {
        k = e[18];
    }
    let x;
    if (e[19] !== agent || e[20] !== setW || e[21] !== w) {
        x = w === agent.id ? <Xe1 agent={agent} onClose={()=>setW(null)} panel="slack"/> : null;
        e[19] = agent;
        e[20] = setW;
        e[21] = w;
        e[22] = x;
    } else {
        x = e[22];
    }
    let v;
    if (e[23] !== k || e[24] !== x) {
        v = <>{k}{x}</>;
        e[23] = k;
        e[24] = x;
        e[25] = v;
    } else {
        v = e[25];
    }
    return v;
}
function $t() {}
