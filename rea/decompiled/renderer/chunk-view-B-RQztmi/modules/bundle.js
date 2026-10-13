import { c as c_1, j } from "./index.eager-vendor-Qbf9YA6n.js";
import { c5, c6, r } from "./index.eager-app-Cj5f8Gby.js";
import { a7, ae as G, ax as J, a6 } from "./index-ZYxf-aBb.js";
import "./index.eager-platform-Dcfeegfw.js";
import "./index.eager-common-CdCvBQNJ.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "df2c4107-1171-4cf5-b2c8-faea07bab373";
            e._sentryDebugIdIdentifier = "sentry-dbid-df2c4107-1171-4cf5-b2c8-faea07bab373";
        }
    } catch (e) {}
})();
function QComponent(z) {
    QComponent.d = 361;
    const t = c_1.c(28);
    const { entry, adjacency } = z;
    const u = a7();
    let c;
    if (t[0] !== u || t[1] !== entry) {
        c = c5(entry, u);
        t[0] = u;
        t[1] = entry;
        t[2] = c;
    } else {
        c = t[2];
    }
    const m = c;
    if (c6(entry.file_path)) {
        const align = m ? "end" : "start";
        let y;
        if (t[3] !== adjacency || t[4] !== entry || t[5] !== align) {
            y = <G adjacency={adjacency} align={align} entry={entry} filePath={entry.file_path} height={entry.height} maxWidth={320} timestampMs={entry.timestampMs} width={entry.width}/>;
            t[3] = adjacency;
            t[4] = entry;
            t[5] = align;
            t[6] = y;
        } else {
            y = t[6];
        }
        return y;
    }
    let n;
    let e;
    let className;
    let entry_1;
    if (t[7] !== adjacency.isGroupStart || t[8] !== entry || t[9] !== m) {
        e = ({
            0: {
                className: "sand-78zum5 sand-dt5ytf sand-uk3077 sand-11twubx sand-eq5yr9 sand-1vyvmim sand-pvyfi4"
            },
            2: {
                className: "sand-78zum5 sand-dt5ytf sand-11twubx sand-eq5yr9 sand-1vyvmim sand-1cy8zhl sand-qcrz7y"
            },
            1: {
                className: "sand-78zum5 sand-dt5ytf sand-uk3077 sand-11twubx sand-eq5yr9 sand-1vyvmim sand-pvyfi4 sand-19snzy6 sand-1sl1sun"
            },
            3: {
                className: "sand-78zum5 sand-dt5ytf sand-11twubx sand-eq5yr9 sand-1vyvmim sand-1cy8zhl sand-qcrz7y sand-19snzy6 sand-1sl1sun"
            }
        })[!m << 1 | !!adjacency.isGroupStart << 0];
        n = a6;
        entry_1 = entry;
        className = r("sand-file-card-wrap", e.className);
        t[7] = adjacency.isGroupStart;
        t[8] = entry;
        t[9] = m;
        t[10] = n;
        t[11] = e;
        t[12] = className;
        t[13] = entry_1;
    } else {
        n = t[10];
        e = t[11];
        className = t[12];
        entry_1 = t[13];
    }
    const p = adjacency.isGroupStart || undefined;
    const h = m ? "user" : undefined;
    let l;
    if (t[14] !== entry.byteSize || t[15] !== entry.file_name || t[16] !== entry.file_path) {
        l = <J byteSize={entry.byteSize} filePath={entry.file_path} name={entry.file_name}/>;
        t[14] = entry.byteSize;
        t[15] = entry.file_name;
        t[16] = entry.file_path;
        t[17] = l;
    } else {
        l = t[17];
    }
    let children;
    if (t[18] !== e.style || t[19] !== className || t[20] !== p || t[21] !== h || t[22] !== l) {
        children = <div className={className} data-group-start={p} data-role={h} style={e.style}>{l}</div>;
        t[18] = e.style;
        t[19] = className;
        t[20] = p;
        t[21] = h;
        t[22] = l;
        t[23] = children;
    } else {
        children = t[23];
    }
    let o;
    if (t[24] !== n || t[25] !== entry_1 || t[26] !== children) {
        o = j.jsx(n, {
            entry: entry_1,
            children
        });
        t[24] = n;
        t[25] = entry_1;
        t[26] = children;
        t[27] = o;
    } else {
        o = t[27];
    }
    return o;
}
export { QComponent as default };
