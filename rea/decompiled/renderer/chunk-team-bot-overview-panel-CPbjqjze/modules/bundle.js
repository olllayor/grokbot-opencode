import { c as c_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { cf, bX, cg, bc } from "./index.eager-app-Cj5f8Gby.js";
import "./index.eager-platform-Dcfeegfw.js";
import { ay, aB, aC } from "./index-ZYxf-aBb.js";
import { G, T as T_1 } from "./chunk-team-bot-plugins-dialog-D6-x2Byv.js";
import { T as T_2 } from "./chunk-team-bot-context-dialog-9mLHC6gW.js";
import { T as T_3, a as W } from "./chunk-team-bot-details-dialog-CX2a_NHB.js";
import { T as T_4 } from "./chunk-team-setup-new-secret-dialog-BMvn0nac.js";
import { u } from "./chunk-use-team-bot-access-BG6AYhPN.js";
import "./index.eager-common-CdCvBQNJ.js";
import "./chunk-grok-bot-secret-problem-text-DKm2VrEb.js";
import "./chunk-plugins-rows-2d0UrD7L.js";
import "./chunk-mcp-connector-status-DhhAF8A6.js";
import "./chunk-SegmentedControl-Bj94OhnT.js";
import "./chunk-team-setup-pills-7uDu4vf1.js";
import "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
import "./chunk-team-setup-new-skill-dialog-sf9oPof1.js";
import "./chunk-get-file-icon-ZAkFyGfn.js";
import "./chunk-wipe-navigation-B3wgZxtA.js";
import "./chunk-bot-template-details-focus-BkZ83BHB.js";
import "./chunk-team-bot-setup-grid-Bn3gQfbU.js";
import "./chunk-team-bot-details-rows-zXlABTd_.js";
import "./chunk-grok-bot-slack-dialog-live-CcLC4Tfx.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "69f02411-c927-4286-ad3a-544c5ad10816";
            e._sentryDebugIdIdentifier = "sentry-dbid-69f02411-c927-4286-ad3a-544c5ad10816";
        }
    } catch (e) {}
})();
export function TeamBotOverviewPanel(T) {
    TeamBotOverviewPanel.d = 1020;
    const e = c_1.c(42);
    const { agent, panel, onClose } = T;
    const { pluginsAccess, contextAccess } = u(agent.id);
    const o = ay(panel === "plugins" || panel === "secrets" || typeof panel === "object" ? agent.serverId : null);
    const listing = cf(typeof panel === "object" ? agent.id : null);
    if (typeof panel === "object") {
        let action;
        if (e[0] !== agent) {
            action = aB(agent);
            e[0] = agent;
            e[1] = action;
        } else {
            action = e[1];
        }
        const n = panel.details;
        let template;
        if (e[2] !== agent || e[3] !== listing) {
            template = aC({
                agent,
                listing,
                shareUrl: bX(agent.id) ?? ""
            });
            e[2] = agent;
            e[3] = listing;
            e[4] = template;
        } else {
            template = e[4];
        }
        let a;
        if (e[5] !== agent || e[6] !== o || e[7] !== onClose || e[8] !== panel.details || e[9] !== action || e[10] !== template) {
            a = <T_3 action={action} agent={agent} initialPane={n} isOpen onClose={onClose} secrets={o} template={template}/>;
            e[5] = agent;
            e[6] = o;
            e[7] = onClose;
            e[8] = panel.details;
            e[9] = action;
            e[10] = template;
            e[11] = a;
        } else {
            a = e[11];
        }
        return a;
    }
    if (panel === "slack") {
        let s;
        if (e[12] !== agent || e[13] !== onClose) {
            s = <W agent={agent} onClose={onClose}/>;
            e[12] = agent;
            e[13] = onClose;
            e[14] = s;
        } else {
            s = e[14];
        }
        return s;
    }
    if (panel === "skills" || panel === "files") {
        let s;
        if (e[15] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                kind: "added"
            };
            e[15] = s;
        } else {
            s = e[15];
        }
        const n = s;
        let r;
        if (e[16] !== contextAccess || e[17] !== panel) {
            r = panel === "skills" && cg(contextAccess.listing.plugins).librarySkills.length > 0;
            e[16] = contextAccess;
            e[17] = panel;
            e[18] = r;
        } else {
            r = e[18];
        }
        const a = r;
        let f;
        if (e[19] !== agent) {
            f = bc(agent);
            e[19] = agent;
            e[20] = f;
        } else {
            f = e[20];
        }
        let d;
        if (e[21] !== a) {
            d = a ? {
                initialPane: n
            } : {};
            e[21] = a;
            e[22] = d;
        } else {
            d = e[22];
        }
        let S;
        if (e[23] !== contextAccess || e[24] !== onClose || e[25] !== panel || e[26] !== f || e[27] !== d) {
            S = <T_2 access={contextAccess} agentName={f} {...d} onClose={onClose} surface={panel}/>;
            e[23] = contextAccess;
            e[24] = onClose;
            e[25] = panel;
            e[26] = f;
            e[27] = d;
            e[28] = S;
        } else {
            S = e[28];
        }
        return S;
    }
    if (panel === "secrets") {
        let s;
        if (e[29] !== o || e[30] !== onClose) {
            s = o == null ? null : <T_4 isDisabled={o.isPending} onAdd={(n)=>o.replace(n)} onOpenChange={(n)=>{
                if (!n) {
                    onClose();
                }
            }} open takenNames={new Set(o.secrets.map(_))}/>;
            e[29] = o;
            e[30] = onClose;
            e[31] = s;
        } else {
            s = e[31];
        }
        return s;
    }
    let c;
    if (e[32] !== agent) {
        c = bc(agent);
        e[32] = agent;
        e[33] = c;
    } else {
        c = e[33];
    }
    let secretsSection;
    if (e[34] !== agent) {
        secretsSection = agent.serverId != null && agent.serverId.length > 0 ? <G key={agent.serverId} agentName={bc(agent)} serverId={agent.serverId}/> : null;
        e[34] = agent;
        e[35] = secretsSection;
    } else {
        secretsSection = e[35];
    }
    let g;
    if (e[36] !== o || e[37] !== onClose || e[38] !== pluginsAccess || e[39] !== c || e[40] !== secretsSection) {
        g = <T_1 access={pluginsAccess} agentName={c} installedSecrets={o} onClose={onClose} secretsSection={secretsSection}/>;
        e[36] = o;
        e[37] = onClose;
        e[38] = pluginsAccess;
        e[39] = c;
        e[40] = secretsSection;
        e[41] = g;
    } else {
        g = e[41];
    }
    return g;
}
function _(T) {
    return T.name;
}
