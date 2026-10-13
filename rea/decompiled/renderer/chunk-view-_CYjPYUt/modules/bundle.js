import { c as c_1, u as u_1, p as p_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { bl, bm, aK } from "./index.eager-app-Cj5f8Gby.js";
import { aY as J } from "./index.eager-platform-Dcfeegfw.js";
import { W } from "./index-ZYxf-aBb.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "35b097d9-fda2-4a09-8f43-c7f164edac02";
            e._sentryDebugIdIdentifier = "sentry-dbid-35b097d9-fda2-4a09-8f43-c7f164edac02";
        }
    } catch (e) {}
})();
const g = {
    card: {
        kysU6D: "sand-jyslct",
        k1xSpc: "sand-78zum5",
        kGNEyG: "sand-6s0dn4",
        kOIVth: "sand-1v2ro7d",
        kzqmXN: "sand-h8yej3",
        k7Eaqz: "sand-euugli",
        kmVPX3: "sand-c7ga6q",
        kMzoRj: "sand-c342km",
        kaIpWk: "sand-gqmno8",
        kMwMTN: "sand-1heor9g",
        kMv6JI: "sand-jb2p0i",
        k9WMMc: "sand-1yc453h",
        kkrTdU: "sand-1ypdohk",
        $$css: true
    },
    line: {
        k7Eaqz: "sand-euugli",
        kVQacm: "sand-b3r6kr",
        kg5iWk: "sand-lyipyv",
        khDVqt: "sand-uxw1ft",
        $$css: true
    }
};
function SComponent(x) {
    SComponent.d = 76;
    const s = c_1.c(25);
    const { entry } = x;
    const { _ } = u_1();
    const agentId = bl()?.id ?? null;
    const h = bm();
    const { taskId, taskName, taskDescription } = entry.event;
    let d;
    if (s[0] !== _ || s[1] !== taskName) {
        d = _({
            id: "wnXRn7",
            values: {
                name: taskName
            }
        });
        s[0] = _;
        s[1] = taskName;
        s[2] = d;
    } else {
        d = s[2];
    }
    let onClick;
    if (s[3] !== agentId || s[4] !== h || s[5] !== taskId) {
        onClick = (q)=>{
            q.stopPropagation();
            if (agentId != null) {
                h.openThread({
                    agentId,
                    taskId
                });
            }
        };
        s[3] = agentId;
        s[4] = h;
        s[5] = taskId;
        s[6] = onClick;
    } else {
        onClick = s[6];
    }
    let u;
    let k;
    let p;
    if (s[7] === Symbol.for("react.memo_cache_sentinel")) {
        u = p_1(aK.transcriptWidget, g.card);
        k = <span className="sand-78zum5 sand-6s0dn4 sand-l56j7k sand-2lah0s sand-100vrsf sand-1vqgdyp sand-1q4ynmn sand-59yu97 sand-19aaqeu"><W aria-hidden name="list-todo" size="lg"/></span>;
        p = {
            className: "sand-78zum5 sand-dt5ytf sand-1iyjqo2 sand-1r8uery sand-euugli"
        };
        s[7] = u;
        s[8] = k;
        s[9] = p;
    } else {
        u = s[7];
        k = s[8];
        p = s[9];
    }
    let l;
    if (s[10] !== taskName) {
        l = <J rootStyle={g.line} size="md" weight="medium"><bdi>{taskName}</bdi></J>;
        s[10] = taskName;
        s[11] = l;
    } else {
        l = s[11];
    }
    let r;
    if (s[12] !== taskDescription) {
        r = <bdi>{taskDescription}</bdi>;
        s[12] = taskDescription;
        s[13] = r;
    } else {
        r = s[13];
    }
    let o;
    if (s[14] !== r || s[15] !== taskDescription) {
        o = <J rootStyle={g.line} color="secondary" size="md" title={taskDescription}>{r}</J>;
        s[14] = r;
        s[15] = taskDescription;
        s[16] = o;
    } else {
        o = s[16];
    }
    let c;
    if (s[17] !== l || s[18] !== o) {
        c = <span {...p}>{l}{o}</span>;
        s[17] = l;
        s[18] = o;
        s[19] = c;
    } else {
        c = s[19];
    }
    let y;
    if (s[20] !== d || s[21] !== onClick || s[22] !== c || s[23] !== taskId) {
        y = <button aria-label={d} data-task-card={taskId} onClick={onClick} type="button" {...u}>{k}{c}</button>;
        s[20] = d;
        s[21] = onClick;
        s[22] = c;
        s[23] = taskId;
        s[24] = y;
    } else {
        y = s[24];
    }
    return y;
}
export { SComponent as default };
