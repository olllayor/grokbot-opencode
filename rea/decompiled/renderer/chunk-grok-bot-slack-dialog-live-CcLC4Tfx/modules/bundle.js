import { c as c_1, p as p_1, T as T_1, r, u as u_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { i as i_1 } from "./index.eager-platform-Dcfeegfw.js";
import { bA, a_, t, f as Ye, a$, aP as Be1, dC, dD, cq, dE, bc, dF, cr } from "./index.eager-app-Cj5f8Gby.js";
import { W, z as $e, x as x_1 } from "./index-ZYxf-aBb.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "a8b3142e-2d49-4025-9a7b-4c0d1858b107";
            e._sentryDebugIdIdentifier = "sentry-dbid-a8b3142e-2d49-4025-9a7b-4c0d1858b107";
        }
    } catch (e) {}
})();
const K = "https://cursor.com/bot/slack-auto-approve";
const Fe = {
    tip: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-1cy8zhl",
        kOIVth: "sand-883omv",
        kogj98: "sand-1ghz6dp",
        k8WAf4: "sand-p59q4u",
        kg3NbH: "sand-aope02",
        kaIpWk: "sand-hojbe8",
        kWkggS: "sand-8c2ked",
        kMwMTN: "sand-1o0liin",
        $$css: true
    }
};
function JComponent(i) {
    JComponent.d = 939;
    const e = c_1.c(7);
    const { step } = i;
    const n = bA();
    if (!((step.kind === "pending_admin_approval" || step.kind === "pending_reinstall_approval") && step.approvalRequestFiled) && step.kind !== "cursor_approval_required") {
        return null;
    }
    let l;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        l = p_1(a_.body2, Fe.tip);
        e[0] = l;
    } else {
        l = e[0];
    }
    let r;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        r = <span aria-hidden className="sand-78zum5 sand-6s0dn4 sand-2lah0s sand-g2ss61"><W color="tertiary" name="info" size="sm"/></span>;
        e[1] = r;
    } else {
        r = e[1];
    }
    let c;
    if (e[2] !== n) {
        c = t(K, n);
        e[2] = n;
        e[3] = c;
    } else {
        c = e[3];
    }
    let p;
    if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
        p = {
            className: "sand-tyxrsu sand-ujl8zx"
        };
        e[4] = p;
    } else {
        p = e[4];
    }
    let h;
    if (e[5] !== c) {
        h = <p {...l}>{r}<span><T_1 id="ygYnVo" components={{
            0: <a {...c} {...p} href={K} rel="noopener noreferrer" target="_blank"/>
        }}/></span></p>;
        e[5] = c;
        e[6] = h;
    } else {
        h = e[6];
    }
    return h;
}
const X = "https://docs.slack.dev/admins/managing-app-approvals";
const sizePx = 54;
const $ = {
    heroTitle: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    heroDescription: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    connectWorkspace: {
        kzqmXN: "sand-h8yej3",
        kjj79g: "sand-l56j7k",
        $$css: true
    },
    workspaceOption: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-883omv",
        kzqmXN: "sand-h8yej3",
        kB7OPa: "sand-9f619",
        kZKoxP: "sand-1vqgdyp",
        k8WAf4: "sand-t970qd",
        kg3NbH: "sand-aope02",
        kMzoRj: "sand-c342km",
        kaIpWk: "sand-hojbe8",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-tyxrsu",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    workspaceOptionSelected: {
        kWkggS: "sand-1b8i4yy",
        $$css: true
    },
    connectAnother: {
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-167g77z",
        kzqmXN: "sand-h8yej3",
        kB7OPa: "sand-9f619",
        kZKoxP: "sand-1vqgdyp",
        k8WAf4: "sand-t970qd",
        kg3NbH: "sand-aope02",
        kMzoRj: "sand-c342km",
        kaIpWk: "sand-hojbe8",
        kWkggS: "sand-jbqb8w sand-aalx5g",
        kMwMTN: "sand-1o0liin",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    heroLead: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-tyxrsu",
        $$css: true
    },
    ghostDanger: {
        kGVxlE: "sand-1gnnqk1",
        $$css: true
    },
    ghostDismiss: {
        kGVxlE: "sand-1gnnqk1",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    bodyContain: {
        ktR8K2: "sand-41o525",
        $$css: true
    },
    actionBar: {
        kwnvtZ: "sand-1a02dak",
        $$css: true
    },
    workspaceAction: {
        ks0D6T: "sand-193iq5w",
        $$css: true
    },
    detail: {
        kogj98: "sand-1ghz6dp",
        kMv6JI: "sand-1mb2qyg",
        kMwMTN: "sand-169k319",
        $$css: true
    },
    note: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-1o0liin",
        $$css: true
    },
    problem: {
        kogj98: "sand-1ghz6dp",
        kMwMTN: "sand-6rl5ky",
        $$css: true
    }
};
function ze(workspaces, e) {
    const s = new Map;
    return workspaces.map((workspace)=>{
        const label = workspace.slackTeamName ?? e;
        if (workspaces.filter((c)=>(c.slackTeamName ?? e) === label).length === 1) {
            return {
                workspace,
                label
            };
        }
        const r = (s.get(label) ?? 0) + 1;
        s.set(label, r);
        return {
            workspace,
            label: `${label} (${r})`
        };
    });
}
function IComponent(i) {
    IComponent.d = 918;
    const e = c_1.c(5);
    const { children } = i;
    let n;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-78zum5 sand-6s0dn4 sand-883omv sand-21xpn4"
        };
        e[0] = n;
    } else {
        n = e[0];
    }
    let a;
    let l;
    if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        a = <Be1 size={18}/>;
        l = p_1(a_.body1, $.note);
        e[1] = a;
        e[2] = l;
    } else {
        a = e[1];
        l = e[2];
    }
    let r;
    if (e[3] !== children) {
        r = <div {...n} role="status">{a}<span {...l}>{children}</span></div>;
        e[3] = children;
        e[4] = r;
    } else {
        r = e[4];
    }
    return r;
}
function ZComponent(i) {
    ZComponent.d = 930;
    const e = c_1.c(3);
    const { children } = i;
    let n;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        n = p_1(a_.body1, $.problem);
        e[0] = n;
    } else {
        n = e[0];
    }
    let a;
    if (e[1] !== children) {
        a = <p role="alert" {...n}>{children}</p>;
        e[1] = children;
        e[2] = a;
    } else {
        a = e[2];
    }
    return a;
}
function BComponent() {
    BComponent.d = 926;
    const i = c_1.c(1);
    let e;
    if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = <T_1 id="f6VKmJ"/>;
        i[0] = e;
    } else {
        e = i[0];
    }
    return e;
}
function Ee1Component() {
    Ee1Component.d = 921;
    const i = c_1.c(8);
    const e = bA();
    let s;
    if (i[0] !== e) {
        s = t(X, e);
        i[0] = e;
        i[1] = s;
    } else {
        s = i[1];
    }
    let n;
    if (i[2] === Symbol.for("react.memo_cache_sentinel")) {
        n = {
            className: "sand-1heor9g sand-ujl8zx sand-1ypdohk"
        };
        i[2] = n;
    } else {
        n = i[2];
    }
    let a;
    if (i[3] !== s) {
        a = {
            ...s,
            ...n,
            href: X
        };
        i[3] = s;
        i[4] = a;
    } else {
        a = i[4];
    }
    const l = a;
    let r;
    if (i[5] === Symbol.for("react.memo_cache_sentinel")) {
        r = <T_1 id="1+68GC"/>;
        i[5] = r;
    } else {
        r = i[5];
    }
    let c;
    if (i[6] !== l) {
        c = <>{r} <T_1 id="QYPG6T" components={{
            0: <a {...l} rel="noopener noreferrer" target="_blank"/>
        }}/></>;
        i[6] = l;
        i[7] = c;
    } else {
        c = i[7];
    }
    return c;
}
function Ne1Component(i) {
    Ne1Component.d = 931;
    const e = c_1.c(2);
    const { reason } = i;
    let n;
    if (e[0] !== reason) {
        n = reason === "insufficient_scopes" ? <BComponent/> : <T_1 id="8RofV4"/>;
        e[0] = reason;
        e[1] = n;
    } else {
        n = e[1];
    }
    return n;
}
function Se1Component(i) {
    Se1Component.d = 917;
    const e = c_1.c(16);
    const { agentName, step } = i;
    if (step.reason === "install_conflict") {
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = <T_1 id="JJGun8"/>;
            e[0] = a;
        } else {
            a = e[0];
        }
        return a;
    }
    if (step.reason === "rate_limited") {
        let a;
        if (e[1] !== agentName || e[2] !== step.retrying) {
            a = step.retrying === true ? <T_1 id="o5SuUd" values={{
                agentName
            }}/> : <T_1 id="C2GIhH"/>;
            e[1] = agentName;
            e[2] = step.retrying;
            e[3] = a;
        } else {
            a = e[3];
        }
        return a;
    }
    switch(step.slackError){
        case "collaborator_required":
            {
                let a;
                if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <T_1 id="w8pUaS"/>;
                    e[4] = a;
                } else {
                    a = e[4];
                }
                return a;
            }
        case "creator_account_required":
            {
                let a;
                if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <T_1 id="+aoj6r"/>;
                    e[5] = a;
                } else {
                    a = e[5];
                }
                return a;
            }
        case "insufficient_scopes":
            {
                let a;
                if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <BComponent/>;
                    e[6] = a;
                } else {
                    a = e[6];
                }
                return a;
            }
        case "app_limit_reached":
            {
                let a;
                if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <T_1 id="Tqyvtn"/>;
                    e[7] = a;
                } else {
                    a = e[7];
                }
                return a;
            }
        case "install_denied":
            {
                let a;
                if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <T_1 id="gMlRzy"/>;
                    e[8] = a;
                } else {
                    a = e[8];
                }
                return a;
            }
        case "approval_denied":
            {
                let a;
                if (e[9] !== step.appRemoved) {
                    a = step.appRemoved ? <T_1 id="dYfmuh"/> : <T_1 id="52CRRT"/>;
                    e[9] = step.appRemoved;
                    e[10] = a;
                } else {
                    a = e[10];
                }
                return a;
            }
        case "app_missing":
            {
                let a;
                if (e[11] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <T_1 id="vgnkb6"/>;
                    e[11] = a;
                } else {
                    a = e[11];
                }
                return a;
            }
        case "foreign_manager":
            {
                let a;
                if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <T_1 id="MKN2+r"/>;
                    e[12] = a;
                } else {
                    a = e[12];
                }
                return a;
            }
        case "install_unsupported":
            {
                let a;
                if (e[13] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <T_1 id="o6yXCq"/>;
                    e[13] = a;
                } else {
                    a = e[13];
                }
                return a;
            }
        case "network_blocked":
            {
                let a;
                if (e[14] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <T_1 id="O7UFCq"/>;
                    e[14] = a;
                } else {
                    a = e[14];
                }
                return a;
            }
        case "unknown":
        case null:
            {
                let a;
                if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <T_1 id="tb19Dh"/>;
                    e[15] = a;
                } else {
                    a = e[15];
                }
                return a;
            }
    }
}
function Te1Component(i) {
    Te1Component.d = 936;
    const e = c_1.c(20);
    const { workspaces, selectedId, onSelect, onConnectAnother } = i;
    const { _: __1 } = u_1();
    let c;
    let p;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        c = {
            className: "sand-78zum5 sand-dt5ytf sand-1jnr06f"
        };
        p = {
            className: "sand-78zum5 sand-dt5ytf sand-1jnr06f sand-1ghz6dp sand-1717udv sand-e8uvvx"
        };
        e[0] = c;
        e[1] = p;
    } else {
        c = e[0];
        p = e[1];
    }
    let h;
    if (e[2] !== __1) {
        h = __1({
            id: "+yDAfB"
        });
        e[2] = __1;
        e[3] = h;
    } else {
        h = e[3];
    }
    let w;
    if (e[4] !== __1 || e[5] !== onSelect || e[6] !== selectedId || e[7] !== workspaces) {
        let v;
        if (e[9] !== onSelect || e[10] !== selectedId) {
            v = ({ workspace, label })=>{
                const b = workspace.slackTeamId === selectedId;
                return <li key={workspace.slackTeamId}><button aria-pressed={b} onClick={()=>onSelect(workspace.slackTeamId)} type="button" {...p_1(a_.body1, $.workspaceOption, b && $.workspaceOptionSelected)}><span aria-hidden {...{
                    0: {
                        className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-1kky2od sand-lup9mm sand-1i6gnc1 sand-vndefy sand-1y0btm7 sand-1b7rqjq sand-jbqb8w sand-xcaa6e"
                    },
                    1: {
                        className: "sand-3nfvp2 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-9f619 sand-1kky2od sand-lup9mm sand-1i6gnc1 sand-vndefy sand-1y0btm7 sand-xcaa6e sand-1newj2f sand-1wclgxm"
                    }
                }[!!b << 0]}>{b ? <W name="check" size="xs"/> : null}</span><span className="sand-1iyjqo2 sand-s83m0k sand-dl72j9 sand-euugli sand-b3r6kr sand-lyipyv sand-uxw1ft">{label}</span></button></li>;
            };
            e[9] = onSelect;
            e[10] = selectedId;
            e[11] = v;
        } else {
            v = e[11];
        }
        w = ze(workspaces, __1({
            id: "1z1n9n"
        })).map(v);
        e[4] = __1;
        e[5] = onSelect;
        e[6] = selectedId;
        e[7] = workspaces;
        e[8] = w;
    } else {
        w = e[8];
    }
    let g;
    if (e[12] !== h || e[13] !== w) {
        g = <ul {...p} aria-label={h}>{w}</ul>;
        e[12] = h;
        e[13] = w;
        e[14] = g;
    } else {
        g = e[14];
    }
    let _;
    if (e[15] !== onConnectAnother) {
        _ = onConnectAnother == null ? null : <button onClick={onConnectAnother} type="button" {...p_1(a_.body1, $.connectAnother)}><W aria-hidden name="plus" size="sm"/><T_1 id="cahLyK"/></button>;
        e[15] = onConnectAnother;
        e[16] = _;
    } else {
        _ = e[16];
    }
    let x;
    if (e[17] !== g || e[18] !== _) {
        x = <div {...c}>{g}{_}</div>;
        e[17] = g;
        e[18] = _;
        e[19] = x;
    } else {
        x = e[19];
    }
    return x;
}
function Me(session_step) {
    if (session_step.kind === "ready") {
        return [
            session_step.workspace
        ];
    }
    if (session_step.kind === "choose_workspace" || session_step.kind === "connection_lost" && session_step.workspaces.length > 1) {
        return session_step.workspaces;
    }
    return [];
}
function Ae1Component(i) {
    Ae1Component.d = 920;
    const e = c_1.c(3);
    const { agentName, workspaceName } = i;
    let a;
    if (e[0] !== agentName || e[1] !== workspaceName) {
        a = workspaceName == null ? <T_1 id="8Q6hjd" values={{
            agentName
        }}/> : <T_1 id="e4UeSX" values={{
            agentName,
            workspaceName
        }}/>;
        e[0] = agentName;
        e[1] = workspaceName;
        e[2] = a;
    } else {
        a = e[2];
    }
    return a;
}
function Le1Component(i) {
    Le1Component.d = 937;
    const e = c_1.c(3);
    const { agentName, workspaceName } = i;
    let a;
    if (e[0] !== agentName || e[1] !== workspaceName) {
        a = workspaceName == null ? <T_1 id="RKGFEO" values={{
            agentName
        }}/> : <T_1 id="1ts7u/" values={{
            agentName,
            workspaceName
        }}/>;
        e[0] = agentName;
        e[1] = workspaceName;
        e[2] = a;
    } else {
        a = e[2];
    }
    return a;
}
function Ie1Component(i) {
    Ie1Component.d = 919;
    const e = c_1.c(4);
    const { step } = i;
    switch(step.failure){
        case "cancelled":
            {
                let n;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T_1 id="ahxtFe"/>;
                    e[0] = n;
                } else {
                    n = e[0];
                }
                return n;
            }
        case "org_install":
            {
                let n;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T_1 id="70Zmvh"/>;
                    e[1] = n;
                } else {
                    n = e[1];
                }
                return n;
            }
        case "wrong_cursor_account":
            {
                let n;
                if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T_1 id="+7hmw5"/>;
                    e[2] = n;
                } else {
                    n = e[2];
                }
                return n;
            }
        case "incomplete":
            {
                let n;
                if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
                    n = <T_1 id="EhI7uU"/>;
                    e[3] = n;
                } else {
                    n = e[3];
                }
                return n;
            }
    }
}
function Re1Component(i) {
    Re1Component.d = 928;
    const e = c_1.c(9);
    const { notice, agentName } = i;
    if (notice.kind === "forgotten") {
        let c;
        if (e[0] !== notice) {
            c = <GComponent notice={notice}/>;
            e[0] = notice;
            e[1] = c;
        } else {
            c = e[1];
        }
        return c;
    }
    let a;
    if (e[2] !== notice) {
        a = <GComponent notice={notice}/>;
        e[2] = notice;
        e[3] = a;
    } else {
        a = e[3];
    }
    let l;
    if (e[4] !== agentName) {
        l = <T_1 id="6fyYbn" values={{
            agentName
        }}/>;
        e[4] = agentName;
        e[5] = l;
    } else {
        l = e[5];
    }
    let r;
    if (e[6] !== a || e[7] !== l) {
        r = <>{a} {l}</>;
        e[6] = a;
        e[7] = l;
        e[8] = r;
    } else {
        r = e[8];
    }
    return r;
}
function GComponent(i) {
    GComponent.d = 929;
    const e = c_1.c(7);
    const { notice } = i;
    const previousName = notice.kind === "moved" ? notice.previousApp.workspaceName : notice.workspaceName;
    const a = notice.kind === "forgotten" || notice.previousApp.forgotten;
    if (previousName == null) {
        let r;
        if (e[0] !== a) {
            r = a ? <T_1 id="pAfcqM"/> : null;
            e[0] = a;
            e[1] = r;
        } else {
            r = e[1];
        }
        return r;
    }
    if (notice.kind === "forgotten") {
        let r;
        if (e[2] !== previousName) {
            r = <T_1 id="qwRuhE" values={{
                previousName
            }}/>;
            e[2] = previousName;
            e[3] = r;
        } else {
            r = e[3];
        }
        return r;
    }
    let l;
    if (e[4] !== a || e[5] !== previousName) {
        l = a ? <T_1 id="NehSeb" values={{
            previousName
        }}/> : <T_1 id="5S8XbC" values={{
            previousName
        }}/>;
        e[4] = a;
        e[5] = previousName;
        e[6] = l;
    } else {
        l = e[6];
    }
    return l;
}
function Te(workspaces) {
    return workspaces.reduce((acc, workspace)=>{
        if (acc == null || workspace.managerAuthUpdatedAtMs > acc.managerAuthUpdatedAtMs) {
            return workspace;
        }
        return acc;
    }, undefined);
}
function Ce1Component(i) {
    Ce1Component.d = 935;
    const e = c_1.c(13);
    const { agentName, step } = i;
    switch(step.kind){
        case "loading":
            {
                let a;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <IComponent><T_1 id="yQE2r9"/></IComponent>;
                    e[0] = a;
                } else {
                    a = e[0];
                }
                return a;
            }
        case "installing":
            {
                let a;
                if (e[1] !== agentName) {
                    a = <IComponent><T_1 id="rqHPhc" values={{
                        agentName
                    }}/></IComponent>;
                    e[1] = agentName;
                    e[2] = a;
                } else {
                    a = e[2];
                }
                return a;
            }
        case "updating":
            {
                let a;
                if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <IComponent><T_1 id="2tmo8N"/></IComponent>;
                    e[3] = a;
                } else {
                    a = e[3];
                }
                return a;
            }
        case "disconnecting":
            {
                let a;
                if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
                    a = <IComponent><T_1 id="xRrDaI"/></IComponent>;
                    e[4] = a;
                } else {
                    a = e[4];
                }
                return a;
            }
        case "unavailable":
            {
                let a;
                if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
                    a = p_1(a_.body1, $.note);
                    e[5] = a;
                } else {
                    a = e[5];
                }
                let l;
                if (e[6] !== step.reason) {
                    l = <p {...a}>{step.reason === "not_published" ? <T_1 id="TEn4Cw"/> : <T_1 id="qwT/SC"/>}</p>;
                    e[6] = step.reason;
                    e[7] = l;
                } else {
                    l = e[7];
                }
                return l;
            }
        case "not_connected":
            {
                let a;
                if (e[8] !== step.timedOut) {
                    a = step.timedOut ? <ZComponent><T_1 id="7OAgLY"/></ZComponent> : null;
                    e[8] = step.timedOut;
                    e[9] = a;
                } else {
                    a = e[9];
                }
                return a;
            }
        case "blocked":
            {
                let a;
                if (e[10] !== step.slackError || e[11] !== step.slackErrorCode) {
                    a = step.slackError === "unknown" && step.slackErrorCode != null ? <p {...p_1(a_.body2, $.detail)}>{step.slackErrorCode}</p> : null;
                    e[10] = step.slackError;
                    e[11] = step.slackErrorCode;
                    e[12] = a;
                } else {
                    a = e[12];
                }
                return a;
            }
        default:
            return null;
    }
}
function We(step) {
    return step.kind === "not_connected" || step.kind === "ready" || step.kind === "choose_workspace" || step.kind === "installing";
}
function oe(step) {
    return (step.kind === "blocked" || step.kind === "failed") && step.retry.kind === "load_state";
}
function D(step) {
    if (step.kind === "recreate_required") {
        return true;
    }
    return step.kind === "blocked" && (step.slackError === "app_missing" || step.slackError === "foreign_manager");
}
function de(step) {
    if (step.kind !== "blocked" && step.kind !== "failed") {
        return false;
    }
    return step.retry.kind === "reinstall_app";
}
function ue(step) {
    return (step.kind === "blocked" || step.kind === "failed") && (step.retry.kind === "uninstall_app" || step.retry.kind === "forget_app");
}
function V(step) {
    return de(step) && !D(step);
}
function UComponent() {
    UComponent.d = 932;
    const i = c_1.c(1);
    let e;
    if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
        e = <> <T_1 id="eeR2Nw"/></>;
        i[0] = e;
    } else {
        e = i[0];
    }
    return e;
}
function Ie(step, agentName) {
    const { _ } = u_1();
    switch(step.kind){
        case "loading":
        case "unavailable":
            return _({
                id: "hpFCeH",
                values: {
                    agentName
                }
            });
        case "not_connected":
        case "ready":
        case "choose_workspace":
        case "installing":
            return _({
                id: "vQNUMS",
                values: {
                    agentName
                }
            });
        case "awaiting_workspace":
            return _({
                id: "injdPp"
            });
        case "cursor_approval_required":
            return _({
                id: "Q9Iep3"
            });
        case "pending_admin_approval":
        case "pending_reinstall_approval":
            if (step.approvalRequestFiled) {
                return _({
                    id: "a+Esqm"
                });
            }
            return _({
                id: "0itG/G"
            });
        case "approval_denied":
            return _({
                id: "tQNelN",
                values: {
                    agentName
                }
            });
        case "connected":
            {
                const n = step.workspaceName;
                if (n == null) {
                    return _({
                        id: "XN3SEb"
                    });
                }
                return _({
                    id: "t/sk7a",
                    values: {
                        workspaceName: n
                    }
                });
            }
        case "removed_in_slack":
            {
                const n = step.workspaceName;
                if (n == null) {
                    return _({
                        id: "lOnMJD"
                    });
                }
                return _({
                    id: "qbzZQD",
                    values: {
                        workspaceName: n
                    }
                });
            }
        case "updating":
            return _({
                id: "2tmo8N"
            });
        case "disconnecting":
            return _({
                id: "ko5Sq5"
            });
        case "reconnect_required":
            return _({
                id: "ez+trO"
            });
        case "connection_lost":
            {
                const n = step.workspaceName;
                if (n == null) {
                    return _({
                        id: "ez+trO"
                    });
                }
                return _({
                    id: "sSFnb4",
                    values: {
                        workspaceName: n
                    }
                });
            }
        case "workspace_mismatch":
            {
                const arrivedName = step.arrived.slackTeamName ?? _({
                    id: "1z1n9n"
                });
                return _({
                    id: "m+HA7R",
                    values: {
                        arrivedName
                    }
                });
            }
        case "connect_failed":
            if (step.failure === "cancelled") {
                return _({
                    id: "hpFCeH",
                    values: {
                        agentName
                    }
                });
            }
            return _({
                id: "FGWsd4"
            });
        case "recreate_required":
        case "blocked":
        case "failed":
            if (oe(step)) {
                return _({
                    id: "hpFCeH",
                    values: {
                        agentName
                    }
                });
            }
            if (ue(step)) {
                return _({
                    id: "iqzc0p"
                });
            }
            if (step.kind === "blocked" && step.reason === "rate_limited") {
                return _({
                    id: "hpFCeH",
                    values: {
                        agentName
                    }
                });
            }
            return _({
                id: "FGWsd4"
            });
    }
}
function Me1Component(i) {
    Me1Component.d = 933;
    const e = c_1.c(7);
    const { agentName, workspaceName, isOnceConnected } = i;
    if (isOnceConnected) {
        let r;
        if (e[0] !== agentName) {
            r = <T_1 id="uXWoUp" values={{
                agentName
            }}/>;
            e[0] = agentName;
            e[1] = r;
        } else {
            r = e[1];
        }
        return r;
    }
    if (workspaceName != null) {
        let r;
        if (e[2] !== agentName || e[3] !== workspaceName) {
            r = <T_1 id="+B04qv" values={{
                agentName,
                workspaceName
            }}/>;
            e[2] = agentName;
            e[3] = workspaceName;
            e[4] = r;
        } else {
            r = e[4];
        }
        return r;
    }
    let l;
    if (e[5] !== agentName) {
        l = <T_1 id="r1WIyd" values={{
            agentName
        }}/>;
        e[5] = agentName;
        e[6] = l;
    } else {
        l = e[6];
    }
    return l;
}
function PComponent(i) {
    PComponent.d = 916;
    const e = c_1.c(1);
    const { step } = i;
    if (step.approvalRequestFiled) {
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = <> <T_1 id="SknRxp"/></>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    return null;
}
function Fe1Component(i) {
    Fe1Component.d = 925;
    const e = c_1.c(50);
    const { step, agentName, creatorName } = i;
    switch(step.kind){
        case "awaiting_workspace":
            {
                let l;
                if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                    l = <T_1 id="xUlqiy"/>;
                    e[0] = l;
                } else {
                    l = e[0];
                }
                return l;
            }
        case "cursor_approval_required":
            {
                let l;
                if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
                    l = <Ee1Component/>;
                    e[1] = l;
                } else {
                    l = e[1];
                }
                return l;
            }
        case "pending_admin_approval":
            {
                let l;
                if (e[2] !== agentName || e[3] !== step) {
                    l = step.approvalRequestFiled ? <><T_1 id="XEgBUH" values={{
                        agentName
                    }}/><PComponent step={step}/></> : <T_1 id="LRssh1" values={{
                        agentName
                    }}/>;
                    e[2] = agentName;
                    e[3] = step;
                    e[4] = l;
                } else {
                    l = e[4];
                }
                return l;
            }
        case "pending_reinstall_approval":
            {
                let l;
                if (e[5] !== agentName) {
                    l = <T_1 id="RiAew1" values={{
                        agentName
                    }}/>;
                    e[5] = agentName;
                    e[6] = l;
                } else {
                    l = e[6];
                }
                let r;
                if (e[7] !== step) {
                    r = <PComponent step={step}/>;
                    e[7] = step;
                    e[8] = r;
                } else {
                    r = e[8];
                }
                let c;
                if (e[9] !== l || e[10] !== r) {
                    c = <>{l}{r}</>;
                    e[9] = l;
                    e[10] = r;
                    e[11] = c;
                } else {
                    c = e[11];
                }
                return c;
            }
        case "approval_denied":
            {
                let l;
                if (e[12] === Symbol.for("react.memo_cache_sentinel")) {
                    l = <T_1 id="jNmwyr"/>;
                    e[12] = l;
                } else {
                    l = e[12];
                }
                return l;
            }
        case "connected":
            {
                let l;
                if (e[13] !== agentName || e[14] !== step.needsManifestUpdate) {
                    l = step.needsManifestUpdate ? <T_1 id="45Q60H" values={{
                        agentName
                    }}/> : null;
                    e[13] = agentName;
                    e[14] = step.needsManifestUpdate;
                    e[15] = l;
                } else {
                    l = e[15];
                }
                return l;
            }
        case "removed_in_slack":
            {
                let l;
                if (e[16] !== agentName) {
                    l = <T_1 id="nGKPkj" values={{
                        agentName
                    }}/>;
                    e[16] = agentName;
                    e[17] = l;
                } else {
                    l = e[17];
                }
                return l;
            }
        case "reconnect_required":
            {
                let l;
                if (e[18] !== creatorName || e[19] !== step.reason) {
                    l = creatorName == null ? <Ne1Component reason={step.reason}/> : <T_1 id="+buBKe" values={{
                        creatorName
                    }}/>;
                    e[18] = creatorName;
                    e[19] = step.reason;
                    e[20] = l;
                } else {
                    l = e[20];
                }
                return l;
            }
        case "connection_lost":
            {
                let l;
                if (e[21] !== agentName || e[22] !== step.workspaceName) {
                    l = <Ae1Component agentName={agentName} workspaceName={step.workspaceName}/>;
                    e[21] = agentName;
                    e[22] = step.workspaceName;
                    e[23] = l;
                } else {
                    l = e[23];
                }
                let r;
                if (e[24] !== creatorName) {
                    r = creatorName == null ? null : <> <T_1 id="+buBKe" values={{
                        creatorName
                    }}/></>;
                    e[24] = creatorName;
                    e[25] = r;
                } else {
                    r = e[25];
                }
                let c;
                if (e[26] !== l || e[27] !== r) {
                    c = <>{l}{r}</>;
                    e[26] = l;
                    e[27] = r;
                    e[28] = c;
                } else {
                    c = e[28];
                }
                return c;
            }
        case "workspace_mismatch":
            {
                let l;
                if (e[29] !== agentName || e[30] !== step.workspaceName) {
                    l = <Le1Component agentName={agentName} workspaceName={step.workspaceName}/>;
                    e[29] = agentName;
                    e[30] = step.workspaceName;
                    e[31] = l;
                } else {
                    l = e[31];
                }
                return l;
            }
        case "connect_failed":
            {
                let l;
                if (e[32] !== step) {
                    l = <Ie1Component step={step}/>;
                    e[32] = step;
                    e[33] = l;
                } else {
                    l = e[33];
                }
                return l;
            }
        case "recreate_required":
            {
                let l;
                if (e[34] === Symbol.for("react.memo_cache_sentinel")) {
                    l = <T_1 id="cazSHh"/>;
                    e[34] = l;
                } else {
                    l = e[34];
                }
                return l;
            }
        case "blocked":
            {
                let l;
                if (e[35] !== agentName || e[36] !== step) {
                    l = <Se1Component agentName={agentName} step={step}/>;
                    e[35] = agentName;
                    e[36] = step;
                    e[37] = l;
                } else {
                    l = e[37];
                }
                let r;
                if (e[38] !== step) {
                    r = V(step) ? <UComponent/> : null;
                    e[38] = step;
                    e[39] = r;
                } else {
                    r = e[39];
                }
                let c;
                if (e[40] !== l || e[41] !== r) {
                    c = <>{l}{r}</>;
                    e[40] = l;
                    e[41] = r;
                    e[42] = c;
                } else {
                    c = e[42];
                }
                return c;
            }
        case "failed":
            {
                let l;
                if (e[43] !== step.failure.display?.detail) {
                    l = step.failure.display?.detail ?? <T_1 id="kf83Ld"/>;
                    e[43] = step.failure.display?.detail;
                    e[44] = l;
                } else {
                    l = e[44];
                }
                let r;
                if (e[45] !== step) {
                    r = V(step) ? <UComponent/> : null;
                    e[45] = step;
                    e[46] = r;
                } else {
                    r = e[46];
                }
                let c;
                if (e[47] !== l || e[48] !== r) {
                    c = <>{l}{r}</>;
                    e[47] = l;
                    e[48] = r;
                    e[49] = c;
                } else {
                    c = e[49];
                }
                return c;
            }
        default:
            return null;
    }
}
function Oe(step) {
    return step.kind === "blocked" || step.kind === "failed" || step.kind === "recreate_required" || step.kind === "reconnect_required" || step.kind === "removed_in_slack" || step.kind === "cursor_approval_required" || step.kind === "connection_lost" || step.kind === "workspace_mismatch" || step.kind === "connect_failed" || step.kind === "approval_denied";
}
function Ee(step) {
    if (step.kind === "connect_failed" && step.failure === "cancelled") {
        return "status";
    }
    if (Oe(step)) {
        return "alert";
    }
}
function Le(step) {
    switch(step.kind){
        case "awaiting_workspace":
        case "cursor_approval_required":
        case "pending_admin_approval":
        case "pending_reinstall_approval":
        case "approval_denied":
        case "reconnect_required":
        case "recreate_required":
        case "blocked":
        case "failed":
        case "connection_lost":
        case "workspace_mismatch":
        case "connect_failed":
        case "removed_in_slack":
            return true;
        case "connected":
            return step.needsManifestUpdate === true;
        default:
            return false;
    }
}
function Ge(step) {
    if (We(step)) {
        return {
            isOnceConnected: false,
            workspaceName: null
        };
    }
    switch(step.kind){
        case "connected":
            return {
                isOnceConnected: false,
                workspaceName: step.workspaceName
            };
        case "pending_admin_approval":
            if (step.approvalRequestFiled) {
                return {
                    isOnceConnected: true,
                    workspaceName: null
                };
            }
            return null;
        case "awaiting_workspace":
        case "cursor_approval_required":
        case "blocked":
        case "failed":
            if (oe(step) || ue(step)) {
                return null;
            }
            return {
                isOnceConnected: true,
                workspaceName: null
            };
        default:
            return null;
    }
}
function Pe1Component(i) {
    Pe1Component.d = 924;
    const e = c_1.c(29);
    const { step, agentName, creatorName, notice } = i;
    const r = Ie(step, agentName);
    let c;
    if (e[0] !== step) {
        c = Ge(step);
        e[0] = step;
        e[1] = c;
    } else {
        c = e[1];
    }
    const p = c;
    let h;
    if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        h = {
            className: "sand-78zum5 sand-dt5ytf sand-6s0dn4 sand-1v2ro7d sand-2b8uid"
        };
        e[2] = h;
    } else {
        h = e[2];
    }
    let w;
    let g;
    if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        w = <span aria-hidden className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-15yg21f sand-nnlda6 sand-hojbe8 sand-10e981r sand-755cs3"><Ye name="slack" sizePx={sizePx}/></span>;
        g = {
            className: "sand-78zum5 sand-dt5ytf sand-1jnr06f"
        };
        e[3] = w;
        e[4] = g;
    } else {
        w = e[3];
        g = e[4];
    }
    let style;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        style = [
            a_.heading3,
            a$.medium,
            $.heroTitle
        ];
        e[5] = style;
    } else {
        style = e[5];
    }
    let x;
    if (e[6] !== r) {
        x = <x_1.Title style={style}>{r}</x_1.Title>;
        e[6] = r;
        e[7] = x;
    } else {
        x = e[7];
    }
    let v;
    if (e[8] !== agentName || e[9] !== creatorName || e[10] !== step) {
        v = Le(step) ? <p {...p_1(a_.body1, $.heroLead)} role={Ee(step)}><Fe1Component agentName={agentName} creatorName={creatorName} step={step}/></p> : null;
        e[8] = agentName;
        e[9] = creatorName;
        e[10] = step;
        e[11] = v;
    } else {
        v = e[11];
    }
    let S;
    if (e[12] !== creatorName || e[13] !== step) {
        S = creatorName == null || step.kind === "loading" ? null : <p {...p_1(a_.body2, $.note)}><T_1 id="2/EXp7" values={{
            creatorName
        }}/></p>;
        e[12] = creatorName;
        e[13] = step;
        e[14] = S;
    } else {
        S = e[14];
    }
    let k;
    if (e[15] !== agentName || e[16] !== notice) {
        k = notice == null ? null : <p {...p_1(a_.body1, $.note)} role="status"><Re1Component agentName={agentName} notice={notice}/></p>;
        e[15] = agentName;
        e[16] = notice;
        e[17] = k;
    } else {
        k = e[17];
    }
    let N;
    if (e[18] !== x || e[19] !== v || e[20] !== S || e[21] !== k) {
        N = <div {...g}>{x}{v}{S}{k}</div>;
        e[18] = x;
        e[19] = v;
        e[20] = S;
        e[21] = k;
        e[22] = N;
    } else {
        N = e[22];
    }
    let b;
    if (e[23] !== agentName || e[24] !== p) {
        b = p == null ? null : <p {...p_1(a_.body1, $.heroDescription)}><Me1Component agentName={agentName} isOnceConnected={p.isOnceConnected} workspaceName={p.workspaceName}/></p>;
        e[23] = agentName;
        e[24] = p;
        e[25] = b;
    } else {
        b = e[25];
    }
    let C;
    if (e[26] !== N || e[27] !== b) {
        C = <div {...h}>{w}{N}{b}</div>;
        e[26] = N;
        e[27] = b;
        e[28] = C;
    } else {
        C = e[28];
    }
    return C;
}
function Ke1Component(i) {
    Ke1Component.d = 934;
    const e = c_1.c(126);
    const { step, commands, selectedWorkspaceId, canConnect } = i;
    const { _: __1 } = u_1();
    const c = UeComponent;
    const p = DeComponent;
    let h;
    if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        h = <T_1 id="jLmqPD"/>;
        e[0] = h;
    } else {
        h = e[0];
    }
    let w;
    if (e[1] !== commands) {
        w = p(h, ()=>{
            commands.disconnect();
        });
        e[1] = commands;
        e[2] = w;
    } else {
        w = e[2];
    }
    const g = w;
    let _;
    if (e[3] !== commands) {
        _ = ()=>{
            commands.retry();
        };
        e[3] = commands;
        e[4] = _;
    } else {
        _ = e[4];
    }
    let x;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        x = <T_1 id="KDw4GX"/>;
        e[5] = x;
    } else {
        x = e[5];
    }
    let v;
    if (e[6] !== _) {
        v = <x_1.Action onClick={_} variant="primary">{x}</x_1.Action>;
        e[6] = _;
        e[7] = v;
    } else {
        v = e[7];
    }
    const S = v;
    let k;
    if (e[8] !== commands) {
        k = ()=>{
            commands.openApprovalUrl();
        };
        e[8] = commands;
        e[9] = k;
    } else {
        k = e[9];
    }
    let N;
    if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
        N = <T_1 id="yKrR+U"/>;
        e[10] = N;
    } else {
        N = e[10];
    }
    let b;
    if (e[11] !== k) {
        b = <x_1.Action onClick={k} variant="primary">{N}</x_1.Action>;
        e[11] = k;
        e[12] = b;
    } else {
        b = e[12];
    }
    const C = b;
    switch(step.kind){
        case "not_connected":
        case "loading":
        case "unavailable":
        case "installing":
        case "updating":
        case "disconnecting":
            return null;
        case "ready":
        case "choose_workspace":
            {
                let d;
                if (e[13] !== commands.close) {
                    d = c(commands.close);
                    e[13] = commands.close;
                    e[14] = d;
                } else {
                    d = e[14];
                }
                let u;
                if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
                    u = <x_1.ActionSpacer/>;
                    e[15] = u;
                } else {
                    u = e[15];
                }
                const m = selectedWorkspaceId == null;
                let f;
                if (e[16] !== commands || e[17] !== selectedWorkspaceId) {
                    f = ()=>{
                        if (selectedWorkspaceId != null) {
                            commands.install(selectedWorkspaceId);
                        }
                    };
                    e[16] = commands;
                    e[17] = selectedWorkspaceId;
                    e[18] = f;
                } else {
                    f = e[18];
                }
                let j;
                if (e[19] === Symbol.for("react.memo_cache_sentinel")) {
                    j = <T_1 id="iSLIjg"/>;
                    e[19] = j;
                } else {
                    j = e[19];
                }
                let A;
                if (e[20] !== m || e[21] !== f) {
                    A = <x_1.Action disabled={m} onClick={f} variant="primary">{j}</x_1.Action>;
                    e[20] = m;
                    e[21] = f;
                    e[22] = A;
                } else {
                    A = e[22];
                }
                let F;
                if (e[23] !== A || e[24] !== d) {
                    F = <>{d}{u}{A}</>;
                    e[23] = A;
                    e[24] = d;
                    e[25] = F;
                } else {
                    F = e[25];
                }
                return F;
            }
        case "awaiting_workspace":
            {
                let d;
                if (e[26] !== commands.cancelWaiting) {
                    d = c(commands.cancelWaiting);
                    e[26] = commands.cancelWaiting;
                    e[27] = d;
                } else {
                    d = e[27];
                }
                let u;
                if (e[28] === Symbol.for("react.memo_cache_sentinel")) {
                    u = <x_1.ActionSpacer/>;
                    e[28] = u;
                } else {
                    u = e[28];
                }
                let m;
                if (e[29] !== commands) {
                    m = ()=>{
                        commands.openConsentUrl();
                    };
                    e[29] = commands;
                    e[30] = m;
                } else {
                    m = e[30];
                }
                let f;
                if (e[31] === Symbol.for("react.memo_cache_sentinel")) {
                    f = <T_1 id="Edth28"/>;
                    e[31] = f;
                } else {
                    f = e[31];
                }
                let j;
                if (e[32] !== m) {
                    j = <x_1.Action onClick={m} variant="secondary">{f}</x_1.Action>;
                    e[32] = m;
                    e[33] = j;
                } else {
                    j = e[33];
                }
                let A;
                if (e[34] !== j || e[35] !== d) {
                    A = <>{d}{u}{j}</>;
                    e[34] = j;
                    e[35] = d;
                    e[36] = A;
                } else {
                    A = e[36];
                }
                return A;
            }
        case "cursor_approval_required":
        case "connect_failed":
            {
                let d;
                if (e[37] !== canConnect || e[38] !== commands) {
                    d = canConnect ? <x_1.Action onClick={()=>{
                        commands.connectWorkspace();
                    }} variant="primary"><T_1 id="i6h2zt"/></x_1.Action> : null;
                    e[37] = canConnect;
                    e[38] = commands;
                    e[39] = d;
                } else {
                    d = e[39];
                }
                return d;
            }
        case "pending_admin_approval":
            {
                let d;
                if (e[40] !== commands || e[41] !== C || e[42] !== step.approvalRequestFiled) {
                    d = step.approvalRequestFiled ? <>{p(<T_1 id="HoYkSd"/>, ()=>{
                        commands.disconnect();
                    })}<x_1.Action onClick={()=>{
                        commands.install(null);
                    }} variant="primary"><T_1 id="2WWIfe"/></x_1.Action></> : <>{p(<T_1 id="MMkabv"/>, ()=>{
                        commands.disconnect();
                    })}{C}</>;
                    e[40] = commands;
                    e[41] = C;
                    e[42] = step.approvalRequestFiled;
                    e[43] = d;
                } else {
                    d = e[43];
                }
                return d;
            }
        case "pending_reinstall_approval":
            {
                let d;
                if (e[44] !== commands || e[45] !== C || e[46] !== step.approvalRequestFiled) {
                    d = step.approvalRequestFiled ? <>{p(<T_1 id="+IS0oS"/>, ()=>{
                        commands.disconnect();
                    })}<x_1.Action onClick={()=>{
                        commands.reinstall();
                    }} variant="primary"><T_1 id="2WWIfe"/></x_1.Action></> : <>{p(<T_1 id="+IS0oS"/>, ()=>{
                        commands.disconnect();
                    })}<x_1.ActionSpacer/><x_1.Action onClick={()=>{
                        commands.reinstall();
                    }} variant="secondary"><T_1 id="2WWIfe"/></x_1.Action>{C}</>;
                    e[44] = commands;
                    e[45] = C;
                    e[46] = step.approvalRequestFiled;
                    e[47] = d;
                } else {
                    d = e[47];
                }
                return d;
            }
        case "approval_denied":
            {
                let d;
                if (e[48] !== commands) {
                    d = ()=>{
                        commands.askAgain();
                    };
                    e[48] = commands;
                    e[49] = d;
                } else {
                    d = e[49];
                }
                let u;
                if (e[50] === Symbol.for("react.memo_cache_sentinel")) {
                    u = <T_1 id="v8oKVq"/>;
                    e[50] = u;
                } else {
                    u = e[50];
                }
                let m;
                if (e[51] !== d) {
                    m = <x_1.Action onClick={d} variant="primary">{u}</x_1.Action>;
                    e[51] = d;
                    e[52] = m;
                } else {
                    m = e[52];
                }
                let f;
                if (e[53] !== g || e[54] !== m) {
                    f = <>{g}{m}</>;
                    e[53] = g;
                    e[54] = m;
                    e[55] = f;
                } else {
                    f = e[55];
                }
                return f;
            }
        case "connected":
            {
                let d;
                if (e[56] === Symbol.for("react.memo_cache_sentinel")) {
                    d = <T_1 id="+IS0oS"/>;
                    e[56] = d;
                } else {
                    d = e[56];
                }
                let u;
                if (e[57] !== commands) {
                    u = p(d, ()=>{
                        commands.disconnect();
                    });
                    e[57] = commands;
                    e[58] = u;
                } else {
                    u = e[58];
                }
                let m;
                if (e[59] !== commands || e[60] !== step.needsManifestUpdate) {
                    m = step.needsManifestUpdate ? <x_1.Action onClick={()=>{
                        commands.reinstall();
                    }} variant="primary"><T_1 id="nCl23t"/></x_1.Action> : <x_1.Action onClick={commands.close} variant="primary"><T_1 id="DPfwMq"/></x_1.Action>;
                    e[59] = commands;
                    e[60] = step.needsManifestUpdate;
                    e[61] = m;
                } else {
                    m = e[61];
                }
                let f;
                if (e[62] !== u || e[63] !== m) {
                    f = <>{u}{m}</>;
                    e[62] = u;
                    e[63] = m;
                    e[64] = f;
                } else {
                    f = e[64];
                }
                return f;
            }
        case "removed_in_slack":
            {
                let d;
                if (e[65] !== commands) {
                    d = ()=>{
                        commands.install(null);
                    };
                    e[65] = commands;
                    e[66] = d;
                } else {
                    d = e[66];
                }
                let u;
                if (e[67] === Symbol.for("react.memo_cache_sentinel")) {
                    u = <T_1 id="0imJDH"/>;
                    e[67] = u;
                } else {
                    u = e[67];
                }
                let m;
                if (e[68] !== d) {
                    m = <x_1.Action onClick={d} variant="primary">{u}</x_1.Action>;
                    e[68] = d;
                    e[69] = m;
                } else {
                    m = e[69];
                }
                let f;
                if (e[70] !== g || e[71] !== m) {
                    f = <>{g}{m}</>;
                    e[70] = g;
                    e[71] = m;
                    e[72] = f;
                } else {
                    f = e[72];
                }
                return f;
            }
        case "reconnect_required":
            {
                let d;
                if (e[73] !== canConnect || e[74] !== commands) {
                    d = canConnect ? <x_1.Action onClick={()=>{
                        commands.connectWorkspace();
                    }} variant="primary"><T_1 id="gcoiFh"/></x_1.Action> : null;
                    e[73] = canConnect;
                    e[74] = commands;
                    e[75] = d;
                } else {
                    d = e[75];
                }
                return d;
            }
        case "connection_lost":
            {
                let d;
                if (e[76] === Symbol.for("react.memo_cache_sentinel")) {
                    d = <T_1 id="3+3Gw/"/>;
                    e[76] = d;
                } else {
                    d = e[76];
                }
                let u;
                if (e[77] !== commands) {
                    u = p(d, ()=>{
                        commands.forget();
                    });
                    e[77] = commands;
                    e[78] = u;
                } else {
                    u = e[78];
                }
                let m;
                if (e[79] === Symbol.for("react.memo_cache_sentinel")) {
                    m = <x_1.ActionSpacer/>;
                    e[79] = m;
                } else {
                    m = e[79];
                }
                let f;
                if (e[80] !== canConnect || e[81] !== commands) {
                    f = canConnect ? <x_1.Action onClick={()=>{
                        commands.connectWorkspace();
                    }} variant="secondary"><T_1 id="gcoiFh"/></x_1.Action> : null;
                    e[80] = canConnect;
                    e[81] = commands;
                    e[82] = f;
                } else {
                    f = e[82];
                }
                let j;
                if (e[83] !== canConnect || e[84] !== commands || e[85] !== selectedWorkspaceId || e[86] !== step) {
                    j = <EComponent canConnect={canConnect} commands={commands} selectedWorkspaceId={selectedWorkspaceId} step={step}/>;
                    e[83] = canConnect;
                    e[84] = commands;
                    e[85] = selectedWorkspaceId;
                    e[86] = step;
                    e[87] = j;
                } else {
                    j = e[87];
                }
                let A;
                if (e[88] !== u || e[89] !== f || e[90] !== j) {
                    A = <>{u}{m}{f}{j}</>;
                    e[88] = u;
                    e[89] = f;
                    e[90] = j;
                    e[91] = A;
                } else {
                    A = e[91];
                }
                return A;
            }
        case "workspace_mismatch":
            {
                let d;
                if (e[92] !== __1 || e[93] !== step.arrived.slackTeamName) {
                    d = step.arrived.slackTeamName ?? __1({
                        id: "1z1n9n"
                    });
                    e[92] = __1;
                    e[93] = step.arrived.slackTeamName;
                    e[94] = d;
                } else {
                    d = e[94];
                }
                const u = d;
                const m = step.arrived.slackTeamId;
                let f;
                if (e[95] === Symbol.for("react.memo_cache_sentinel")) {
                    f = <T_1 id="3+3Gw/"/>;
                    e[95] = f;
                } else {
                    f = e[95];
                }
                let j;
                if (e[96] !== commands) {
                    j = p(f, ()=>{
                        commands.forget();
                    });
                    e[96] = commands;
                    e[97] = j;
                } else {
                    j = e[97];
                }
                let A;
                if (e[98] === Symbol.for("react.memo_cache_sentinel")) {
                    A = <x_1.ActionSpacer/>;
                    e[98] = A;
                } else {
                    A = e[98];
                }
                let F;
                if (e[99] !== canConnect || e[100] !== commands) {
                    F = canConnect ? <x_1.Action onClick={()=>{
                        commands.connectWorkspace();
                    }} variant="secondary"><T_1 id="KDw4GX"/></x_1.Action> : null;
                    e[99] = canConnect;
                    e[100] = commands;
                    e[101] = F;
                } else {
                    F = e[101];
                }
                let M;
                if (e[102] !== m || e[103] !== commands) {
                    M = ()=>{
                        commands.move(m);
                    };
                    e[102] = m;
                    e[103] = commands;
                    e[104] = M;
                } else {
                    M = e[104];
                }
                let T;
                if (e[105] !== u) {
                    T = <T_1 id="e850CL" values={{
                        workspaceName: u
                    }}/>;
                    e[105] = u;
                    e[106] = T;
                } else {
                    T = e[106];
                }
                let W;
                if (e[107] !== M || e[108] !== T) {
                    W = <x_1.Action onClick={M} style={$.workspaceAction} variant="primary">{T}</x_1.Action>;
                    e[107] = M;
                    e[108] = T;
                    e[109] = W;
                } else {
                    W = e[109];
                }
                let E;
                if (e[110] !== j || e[111] !== F || e[112] !== W) {
                    E = <>{j}{A}{F}{W}</>;
                    e[110] = j;
                    e[111] = F;
                    e[112] = W;
                    e[113] = E;
                } else {
                    E = e[113];
                }
                return E;
            }
        case "recreate_required":
        case "blocked":
        case "failed":
            {
                if (step.kind === "blocked" && step.retrying === true) {
                    let f;
                    if (e[114] === Symbol.for("react.memo_cache_sentinel")) {
                        f = <T_1 id="yz7wBu"/>;
                        e[114] = f;
                    } else {
                        f = e[114];
                    }
                    let j;
                    if (e[115] !== commands.close) {
                        j = <x_1.Action onClick={commands.close} variant="primary">{f}</x_1.Action>;
                        e[115] = commands.close;
                        e[116] = j;
                    } else {
                        j = e[116];
                    }
                    return j;
                }
                let d;
                if (e[117] !== g || e[118] !== step) {
                    d = D(step) || de(step) ? g : null;
                    e[117] = g;
                    e[118] = step;
                    e[119] = d;
                } else {
                    d = e[119];
                }
                let u;
                if (e[120] !== step || e[121] !== S) {
                    u = D(step) ? null : S;
                    e[120] = step;
                    e[121] = S;
                    e[122] = u;
                } else {
                    u = e[122];
                }
                let m;
                if (e[123] !== u || e[124] !== d) {
                    m = <>{d}{u}</>;
                    e[123] = u;
                    e[124] = d;
                    e[125] = m;
                } else {
                    m = e[125];
                }
                return m;
            }
    }
}
function DeComponent(i, e) {
    return <x_1.Action destructive onClick={e} style={$.ghostDanger} variant="tertiary">{i}</x_1.Action>;
}
function UeComponent(i) {
    return <x_1.Action onClick={i} style={$.ghostDismiss} variant="tertiary"><T_1 id="dEgA5A"/></x_1.Action>;
}
function EComponent(i) {
    EComponent.d = 927;
    const e = c_1.c(21);
    const { step, commands, selectedWorkspaceId, canConnect } = i;
    const { _: __1 } = u_1();
    const c = step.workspaces.length === 1 ? step.workspaces[0] : undefined;
    if (step.workspaces.length === 0) {
        let _;
        if (e[0] !== canConnect || e[1] !== commands) {
            _ = canConnect ? <x_1.Action onClick={()=>{
                commands.connectWorkspaceForMove();
            }} variant="primary"><T_1 id="l6bXmL"/></x_1.Action> : null;
            e[0] = canConnect;
            e[1] = commands;
            e[2] = _;
        } else {
            _ = e[2];
        }
        return _;
    }
    if (c != null) {
        let _;
        if (e[3] !== __1 || e[4] !== c.slackTeamName) {
            _ = c.slackTeamName ?? __1({
                id: "1z1n9n"
            });
            e[3] = __1;
            e[4] = c.slackTeamName;
            e[5] = _;
        } else {
            _ = e[5];
        }
        const x = _;
        let v;
        if (e[6] !== commands || e[7] !== c.slackTeamId) {
            v = ()=>{
                commands.move(c.slackTeamId);
            };
            e[6] = commands;
            e[7] = c.slackTeamId;
            e[8] = v;
        } else {
            v = e[8];
        }
        let S;
        if (e[9] !== x) {
            S = <T_1 id="e850CL" values={{
                workspaceName: x
            }}/>;
            e[9] = x;
            e[10] = S;
        } else {
            S = e[10];
        }
        let k;
        if (e[11] !== v || e[12] !== S) {
            k = <x_1.Action onClick={v} style={$.workspaceAction} variant="primary">{S}</x_1.Action>;
            e[11] = v;
            e[12] = S;
            e[13] = k;
        } else {
            k = e[13];
        }
        return k;
    }
    const p = selectedWorkspaceId == null;
    let h;
    if (e[14] !== commands || e[15] !== selectedWorkspaceId) {
        h = ()=>{
            if (selectedWorkspaceId != null) {
                commands.move(selectedWorkspaceId);
            }
        };
        e[14] = commands;
        e[15] = selectedWorkspaceId;
        e[16] = h;
    } else {
        h = e[16];
    }
    let w;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        w = <T_1 id="QWdKwH"/>;
        e[17] = w;
    } else {
        w = e[17];
    }
    let g;
    if (e[18] !== p || e[19] !== h) {
        g = <x_1.Action disabled={p} onClick={h} variant="primary">{w}</x_1.Action>;
        e[18] = p;
        e[19] = h;
        e[20] = g;
    } else {
        g = e[20];
    }
    return g;
}
function Pe(session_step, canConnect) {
    switch(session_step.kind){
        case "not_connected":
        case "loading":
        case "unavailable":
        case "installing":
        case "updating":
        case "disconnecting":
            return false;
        case "ready":
        case "choose_workspace":
        case "awaiting_workspace":
        case "pending_admin_approval":
        case "pending_reinstall_approval":
        case "approval_denied":
        case "connected":
        case "removed_in_slack":
        case "connection_lost":
        case "workspace_mismatch":
        case "recreate_required":
        case "blocked":
        case "failed":
            return true;
        case "reconnect_required":
        case "cursor_approval_required":
        case "connect_failed":
            return canConnect;
    }
}
function He1Component(i) {
    He1Component.d = 923;
    const e = c_1.c(47);
    const { agentName, creatorName, session, commands } = i;
    const canConnect = creatorName == null;
    const session_step = session.step;
    const workspaces = Me(session_step);
    const [h, setH] = r.useState(null);
    const g = h?.step === session_step ? h.slackTeamId : null;
    const _ = workspaces.find((F)=>F.slackTeamId === g)?.slackTeamId ?? Te(workspaces)?.slackTeamId ?? null;
    let x;
    if (e[0] !== canConnect || e[1] !== commands || e[2] !== _ || e[3] !== session_step) {
        x = <Ke1Component canConnect={canConnect} commands={commands} selectedWorkspaceId={_} step={session_step}/>;
        e[0] = canConnect;
        e[1] = commands;
        e[2] = _;
        e[3] = session_step;
        e[4] = x;
    } else {
        x = e[4];
    }
    const v = x;
    let S;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        S = <x_1.CloseButton/>;
        e[5] = S;
    } else {
        S = e[5];
    }
    let k;
    if (e[6] !== session_step.kind) {
        k = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-1miatn0 sand-x6bls6"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-ou54vl sand-1miatn0 sand-x6bls6 sand-1lpwdgh sand-1nhvcw1"
            }
        })[(session_step.kind === "loading") << 0];
        e[6] = session_step.kind;
        e[7] = k;
    } else {
        k = e[7];
    }
    let N;
    if (e[8] !== agentName || e[9] !== creatorName || e[10] !== session.notice || e[11] !== session_step) {
        N = <Pe1Component agentName={agentName} creatorName={creatorName} notice={session.notice} step={session_step}/>;
        e[8] = agentName;
        e[9] = creatorName;
        e[10] = session.notice;
        e[11] = session_step;
        e[12] = N;
    } else {
        N = e[12];
    }
    let b;
    if (e[13] !== canConnect || e[14] !== commands || e[15] !== _ || e[16] !== setH || e[17] !== session_step || e[18] !== workspaces) {
        b = workspaces.length > 0 ? <Te1Component onConnectAnother={canConnect ? ()=>{
            if (session_step.kind === "connection_lost") {
                commands.connectWorkspaceForMove();
            } else {
                commands.connectWorkspace();
            }
        } : null} onSelect={(slackTeamId)=>setH({
                step: session_step,
                slackTeamId
            })} selectedId={_} workspaces={workspaces}/> : null;
        e[13] = canConnect;
        e[14] = commands;
        e[15] = _;
        e[16] = setH;
        e[17] = session_step;
        e[18] = workspaces;
        e[19] = b;
    } else {
        b = e[19];
    }
    let C;
    if (e[20] !== agentName || e[21] !== session_step) {
        C = <Ce1Component agentName={agentName} step={session_step}/>;
        e[20] = agentName;
        e[21] = session_step;
        e[22] = C;
    } else {
        C = e[22];
    }
    let d;
    if (e[23] !== session_step) {
        d = <JComponent step={session_step}/>;
        e[23] = session_step;
        e[24] = d;
    } else {
        d = e[24];
    }
    let u;
    if (e[25] !== canConnect || e[26] !== commands || e[27] !== session_step.kind) {
        u = session_step.kind === "not_connected" && canConnect ? <$e onClick={()=>{
            commands.connectWorkspace();
        }} size="lg" style={$.connectWorkspace} type="button" variant="primary"><T_1 id="l6bXmL"/></$e> : null;
        e[25] = canConnect;
        e[26] = commands;
        e[27] = session_step.kind;
        e[28] = u;
    } else {
        u = e[28];
    }
    let m;
    if (e[29] !== creatorName || e[30] !== session_step.kind) {
        m = session_step.kind === "not_connected" && creatorName != null ? <p {...p_1(a_.body1, $.note)} role="status"><T_1 id="ReVTwW" values={{
            creatorName
        }}/></p> : null;
        e[29] = creatorName;
        e[30] = session_step.kind;
        e[31] = m;
    } else {
        m = e[31];
    }
    let f;
    if (e[32] !== k || e[33] !== N || e[34] !== b || e[35] !== C || e[36] !== d || e[37] !== u || e[38] !== m) {
        f = <x_1.Body style={$.bodyContain}><div {...k}>{N}{b}{C}{d}{u}{m}</div></x_1.Body>;
        e[32] = k;
        e[33] = N;
        e[34] = b;
        e[35] = C;
        e[36] = d;
        e[37] = u;
        e[38] = m;
        e[39] = f;
    } else {
        f = e[39];
    }
    let j;
    if (e[40] !== v || e[41] !== canConnect || e[42] !== session_step) {
        j = Pe(session_step, canConnect) ? <x_1.ActionBar style={$.actionBar}>{v}</x_1.ActionBar> : null;
        e[40] = v;
        e[41] = canConnect;
        e[42] = session_step;
        e[43] = j;
    } else {
        j = e[43];
    }
    let A;
    if (e[44] !== f || e[45] !== j) {
        A = <>{S}{f}{j}</>;
        e[44] = f;
        e[45] = j;
        e[46] = A;
    } else {
        A = e[46];
    }
    return A;
}
function JeComponent(i) {
    JeComponent.d = 922;
    const e = c_1.c(10);
    const { agentName, creatorName, session, commands } = i;
    let onOpenChange;
    if (e[0] !== commands) {
        onOpenChange = (h)=>{
            if (!h) {
                commands.close();
            }
        };
        e[0] = commands;
        e[1] = onOpenChange;
    } else {
        onOpenChange = e[1];
    }
    let c;
    if (e[2] !== agentName || e[3] !== commands || e[4] !== creatorName || e[5] !== session) {
        c = <He1Component agentName={agentName} commands={commands} creatorName={creatorName} session={session}/>;
        e[2] = agentName;
        e[3] = commands;
        e[4] = creatorName;
        e[5] = session;
        e[6] = c;
    } else {
        c = e[6];
    }
    let p;
    if (e[7] !== onOpenChange || e[8] !== c) {
        p = <x_1.Root onOpenChange={onOpenChange} open variant="rich" width="wide">{c}</x_1.Root>;
        e[7] = onOpenChange;
        e[8] = c;
        e[9] = p;
    } else {
        p = e[9];
    }
    return p;
}
const Be = {
    step: {
        kind: "loading"
    }
};
function He(i, close_1) {
    const s = c_1.c(34);
    const { _: __1 } = u_1();
    const a = dC();
    const l = dD();
    const r = cq();
    const { close, open, disconnect, forget } = l;
    const g = dE(i);
    const agentId = g ? i.id : null;
    const usesCreatorConnection = i.viewerIsOwner === false;
    let v;
    if (s[0] !== agentId || s[1] !== close || s[2] !== open || s[3] !== usesCreatorConnection) {
        v = ()=>{
            if (agentId == null) {
                return Ke;
            }
            open({
                agentId,
                harness: dF.temporal,
                usesCreatorConnection
            });
            return close;
        };
        s[0] = agentId;
        s[1] = close;
        s[2] = open;
        s[3] = usesCreatorConnection;
        s[4] = v;
    } else {
        v = s[4];
    }
    i_1(v);
    if (!g) {
        return null;
    }
    let S;
    if (s[5] !== i) {
        S = bc(i);
        s[5] = i;
        s[6] = S;
    } else {
        S = s[6];
    }
    const agentName = S;
    let N;
    if (s[7] !== __1 || s[8] !== i.ownerDisplayName || s[9] !== usesCreatorConnection) {
        N = usesCreatorConnection ? {
            creatorName: i.ownerDisplayName ?? __1({
                id: "zA9YJC"
            })
        } : {};
        s[7] = __1;
        s[8] = i.ownerDisplayName;
        s[9] = usesCreatorConnection;
        s[10] = N;
    } else {
        N = s[10];
    }
    let session;
    if (s[11] !== i.id || s[12] !== a) {
        session = a ?? {
            agentId: i.id,
            ...Be
        };
        s[11] = i.id;
        s[12] = a;
        s[13] = session;
    } else {
        session = s[13];
    }
    let disconnect_1;
    if (s[14] !== __1 || s[15] !== agentName || s[16] !== r || s[17] !== disconnect) {
        disconnect_1 = async ()=>{
            if (await r(cr({
                title: __1({
                    id: "WyB12j",
                    values: {
                        agentName
                    }
                }),
                description: __1({
                    id: "ojmp9z",
                    values: {
                        agentName
                    }
                }),
                confirmLabel: __1({
                    id: "t/YqKh"
                }),
                cancelLabel: __1({
                    id: "dEgA5A"
                })
            }))) {
                await disconnect();
            }
        };
        s[14] = __1;
        s[15] = agentName;
        s[16] = r;
        s[17] = disconnect;
        s[18] = disconnect_1;
    } else {
        disconnect_1 = s[18];
    }
    let forget_1;
    if (s[19] !== __1 || s[20] !== agentName || s[21] !== r || s[22] !== forget) {
        forget_1 = async ()=>{
            if (await r(cr({
                title: __1({
                    id: "v/3uCP",
                    values: {
                        agentName
                    }
                }),
                description: __1({
                    id: "DIHxUE",
                    values: {
                        agentName
                    }
                }),
                confirmLabel: __1({
                    id: "8ayiy8"
                }),
                cancelLabel: __1({
                    id: "dEgA5A"
                })
            }))) {
                await forget();
            }
        };
        s[19] = __1;
        s[20] = agentName;
        s[21] = r;
        s[22] = forget;
        s[23] = forget_1;
    } else {
        forget_1 = s[23];
    }
    let commands;
    if (s[24] !== l || s[25] !== close_1 || s[26] !== disconnect_1 || s[27] !== forget_1) {
        commands = {
            ...l,
            close: close_1,
            disconnect: disconnect_1,
            forget: forget_1
        };
        s[24] = l;
        s[25] = close_1;
        s[26] = disconnect_1;
        s[27] = forget_1;
        s[28] = commands;
    } else {
        commands = s[28];
    }
    let m;
    if (s[29] !== agentName || s[30] !== N || s[31] !== session || s[32] !== commands) {
        m = {
            agentName,
            ...N,
            session,
            commands
        };
        s[29] = agentName;
        s[30] = N;
        s[31] = session;
        s[32] = commands;
        s[33] = m;
    } else {
        m = s[33];
    }
    return m;
}
function Ke() {}
function XeComponent(i) {
    XeComponent.d = 915;
    const e = c_1.c(5);
    const { agent, onClose } = i;
    const a = He(agent, onClose);
    if (a == null) {
        return null;
    }
    let l;
    if (e[0] !== a.agentName || e[1] !== a.commands || e[2] !== a.creatorName || e[3] !== a.session) {
        l = <JeComponent agentName={a.agentName} commands={a.commands} creatorName={a.creatorName} session={a.session}/>;
        e[0] = a.agentName;
        e[1] = a.commands;
        e[2] = a.creatorName;
        e[3] = a.session;
        e[4] = l;
    } else {
        l = e[4];
    }
    return l;
}
export { XeComponent as G, He1Component as a, He as u };
