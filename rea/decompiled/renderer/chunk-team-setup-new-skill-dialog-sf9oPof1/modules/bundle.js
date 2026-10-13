import { c as c_1, u as u_1, r as r_1, p, T as T_1 } from "./index.eager-vendor-Qbf9YA6n.js";
import { x } from "./index.eager-platform-Dcfeegfw.js";
import { cF, f1, f2, cw, f3, cE, d0, cJ, f4, aK, b0 as _e, cL } from "./index.eager-app-Cj5f8Gby.js";
import { bw, I, x as x_1 } from "./index-ZYxf-aBb.js";
import { T as T_2, a as Ge } from "./chunk-team-bot-carry-over-plugin-selection-Df2qNGBt.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "eb9c4ac1-5b29-46e8-9215-026281307f6f";
            e._sentryDebugIdIdentifier = "sentry-dbid-eb9c4ac1-5b29-46e8-9215-026281307f6f";
        }
    } catch (e) {}
})();
const Ae = 256000;
const MAX_BOT_SKILLS = 250;
const Se = "SKILL.md";
const Fe = [
    "txt",
    "md",
    "markdown",
    "csv",
    "json",
    "yaml",
    "yml"
];
const Ee = ".txt, .md, .csv, .json, .yaml";
const accept = Fe.map((n)=>`.${n}`).join(",");
function Ve(path) {
    const e = ue(path);
    const s = e.lastIndexOf(".");
    return s > 0 && Fe.includes(e.slice(s + 1).toLowerCase());
}
function Ze(n) {
    if (n < 128) {
        return 1;
    }
    if (n >= 194 && n <= 223) {
        return 2;
    }
    if (n >= 224 && n <= 239) {
        return 3;
    }
    if (n >= 240 && n <= 244) {
        return 4;
    }
    return 0;
}
function Qe(n) {
    return n !== undefined && (n & 192) === 128;
}
function et(n) {
    let e = 0;
    while(e < n.length){
        const s = n[e] ?? 0;
        const t = Ze(s);
        if (t === 0) {
            return false;
        }
        for(let r = 1; r < t; r += 1){
            if (!Qe(n[e + r])) {
                return false;
            }
        }
        const a = n[e + 1] ?? 0;
        if (s === 224 && a < 160 || s === 237 && a > 159 || s === 240 && a < 144 || s === 244 && a > 143) {
            return false;
        }
        e += t;
    }
    return true;
}
function tt(n) {
    if (n.subarray(0, Math.min(n.length, 8192)).includes(0)) {
        return false;
    }
    return et(n);
}
function nt(path) {
    return path.replace(/\\/g, "/").split("/").filter((e)=>e.length > 0 && e !== ".").join("/");
}
function ue(n) {
    return n.slice(n.lastIndexOf("/") + 1);
}
function st(path) {
    const e = path.lastIndexOf("/");
    if (e <= 0) {
        return "";
    }
    const s = path.slice(0, e);
    return ue(s);
}
function be(n) {
    const e = n.lastIndexOf(".");
    if (e > 0) {
        return n.slice(0, e);
    }
    return n;
}
function at(path) {
    const e = ue(path);
    return e.slice(be(e).length);
}
function rt(slug, taken) {
    let s = slug;
    let t = 2;
    while(taken.has(s)){
        s = `${slug}-${t.toString()}`;
        t += 1;
    }
    return s;
}
function Le(path) {
    const e = ue(path);
    const s = st(path);
    if (e === Se && s.length > 0) {
        return s;
    }
    return be(e);
}
function it(n, frontmatterName) {
    const slug = f1(frontmatterName);
    if (slug.length > 0) {
        return {
            kind: "frontmatter",
            slug,
            frontmatterName
        };
    }
    return {
        kind: "path",
        slug: f1(Le(n.path)) || "skill"
    };
}
function lt(body) {
    const e = body.split(/\r?\n/).find((t)=>t.trim().length > 0) ?? "";
    const s = /^#[ \t]+(.+?)(?:[ \t]+#+)?[ \t]*$/.exec(e)?.[1] ?? "";
    if (s.length > 0) {
        return s;
    }
}
function ot(n) {
    const onBot = new Map(n.map((a)=>[
            a.name,
            cF(a.content).name.trim()
        ]));
    const titles = new Set([
        ...onBot
    ].map(([a, r])=>f1(r.length > 0 ? r : a)));
    const fileNames = new Set(n.filter((a)=>f2(a.content)).map((a)=>cw(a).toLowerCase()));
    return {
        onBot,
        taken: new Set(onBot.keys()),
        plannedInDrop: new Set,
        titles,
        fileNames
    };
}
function dt(n, e) {
    const s = be(e);
    const t = e.slice(s.length);
    let a = e;
    let r = 2;
    while(n.fileNames.has(a.toLowerCase())){
        a = `${s} (${r.toString()})${t}`;
        r += 1;
    }
    n.fileNames.add(a.toLowerCase());
    return a;
}
function ct(n, e) {
    const s = f1(e) === e;
    let t = e;
    let a = 2;
    while(n.titles.has(f1(t))){
        t = s ? `${e}-${a.toString()}` : `${e} ${a.toString()}`;
        a += 1;
    }
    n.titles.add(f1(t));
    return t;
}
function ft(n, e) {
    const t = e.kind === "frontmatter" && n.onBot.get(e.slug) === e.frontmatterName && !n.plannedInDrop.has(e.slug) ? e.slug : rt(e.slug, n.taken);
    n.taken.add(t);
    n.plannedInDrop.add(t);
    return t;
}
function ut(n, e) {
    const s = cF(n.content);
    const t = it(n, s.name.trim());
    const a = ft(e, t);
    const extension = at(n.path);
    if (t.kind === "frontmatter") {
        return {
            name: a,
            content: f3(n.content, {
                extension
            })
        };
    }
    const d = lt(s.body) ?? Le(n.path);
    const i = d === t.slug ? a : ct(e, d);
    if (i === a) {
        e.titles.add(a);
    }
    const p = ue(n.path);
    return {
        name: a,
        content: f3(cE(i, n.content), {
            extension,
            fileName: p === Se ? "" : dt(e, p)
        })
    };
}
function mt(text, e) {
    const s = [];
    const t = [];
    for (const i of text){
        const p = nt(i.path);
        if (p.length !== 0) {
            if (i.content.trim().length === 0) {
                s.push({
                    path: p,
                    reason: "empty"
                });
                continue;
            }
            if (i.content.length > Ae) {
                s.push({
                    path: p,
                    reason: "too-large"
                });
                continue;
            }
            t.push({
                path: p,
                content: i.content
            });
        }
    }
    const a = ot(e);
    const r = Math.max(0, MAX_BOT_SKILLS - a.onBot.size);
    const skills = t.map((i)=>ut(i, a));
    if (skills.length <= r) {
        return {
            skills,
            skipped: s
        };
    }
    for (const i of skills.slice(r)){
        s.push({
            path: `${i.name}/${Se}`,
            reason: "too-many-skills"
        });
    }
    return {
        skills: skills.slice(0, r),
        skipped: s
    };
}
function pt(n) {
    return n.isDirectory;
}
function ht(n) {
    return n.isFile;
}
function gt(n) {
    const e = n.createReader();
    const s = [];
    return new Promise((resolve, reject)=>{
        const r = ()=>{
            e.readEntries((d)=>{
                if (d.length === 0) {
                    resolve(s);
                    return;
                }
                s.push(...d);
                r();
            }, reject);
        };
        r();
    });
}
function yt(n) {
    return new Promise((resolve, reject)=>{
        n.file(resolve, reject);
    });
}
async function Oe(n, e, s) {
    const t = e.length === 0 ? n.name : `${e}/${n.name}`;
    if (ht(n)) {
        s.push({
            path: t,
            file: await yt(n)
        });
        return;
    }
    if (pt(n)) {
        for (const a of (await gt(n))){
            await Oe(a, t, s);
        }
    }
}
async function kt(dataTransfer) {
    const e = [];
    const s = [];
    for (const t of Array.from(dataTransfer.items)){
        if (t.kind !== "file") {
            continue;
        }
        const a = t.webkitGetAsEntry();
        if (a != null) {
            s.push(a);
        }
    }
    if (s.length === 0) {
        return Array.from(dataTransfer.files).map((t)=>({
                path: t.name,
                file: t
            }));
    }
    for (const t of s){
        await Oe(t, "", e);
    }
    return e;
}
function jt(n) {
    const n_webkitRelativePath = n.webkitRelativePath;
    if (typeof n_webkitRelativePath === "string" && n_webkitRelativePath.length > 0) {
        return n_webkitRelativePath;
    }
    return n.name;
}
function ve(n) {
    return Array.from(n).map((e)=>({
            path: jt(e),
            file: e
        }));
}
function wt(file) {
    return new Promise((resolve, reject)=>{
        const t = new FileReader;
        t.onerror = ()=>reject(t.error ?? new Error("File read failed"));
        t.onload = ()=>{
            const t_result = t.result;
            resolve(t_result instanceof ArrayBuffer ? new Uint8Array(t_result) : new Uint8Array);
        };
        t.readAsArrayBuffer(file);
    });
}
function St(file) {
    if (typeof file.arrayBuffer === "function") {
        return file.arrayBuffer().then((e)=>new Uint8Array(e));
    }
    return wt(file);
}
async function bt(n) {
    const text = [];
    const s = [];
    for (const { path, file } of n){
        if (!Ve(path)) {
            s.push({
                path,
                reason: "unsupported"
            });
            continue;
        }
        const r = await St(file);
        if (!tt(r)) {
            s.push({
                path,
                reason: "unsupported"
            });
            continue;
        }
        text.push({
            path,
            content: new TextDecoder("utf-8").decode(r)
        });
    }
    return {
        text,
        skipped: s
    };
}
const xt = `${String(Ae / 1000)}k`;
function _t(n) {
    if (n.staged === undefined) {
        return "added";
    }
    return "staged";
}
function ge(n) {
    const e = n.dataTransfer?.types;
    if (e == null) {
        return false;
    }
    for (const s of e){
        if (s === "Files") {
            return true;
        }
    }
    return false;
}
function fe(skipped, e) {
    let s = 0;
    for (const t of skipped){
        if (t.reason === e) {
            s += 1;
        }
    }
    return s;
}
function qe(n, skipped) {
    const s = [];
    const unsupported = fe(skipped, "unsupported");
    if (unsupported > 0) {
        const i = Ee;
        s.push(n({
            id: "CM+50r",
            values: {
                unsupported,
                formats: i
            }
        }));
    }
    const tooLarge = fe(skipped, "too-large");
    if (tooLarge > 0) {
        const limit = xt;
        s.push(n({
            id: "S4vwjA",
            values: {
                tooLarge,
                limit
            }
        }));
    }
    const empty = fe(skipped, "empty");
    if (empty > 0) {
        s.push(n({
            id: "nwR8sE",
            values: {
                empty
            }
        }));
    }
    const tooManySkills = fe(skipped, "too-many-skills");
    if (tooManySkills > 0) {
        s.push(n({
            id: "WnW32b",
            values: {
                tooManySkills,
                MAX_BOT_SKILLS
            }
        }));
    }
    return s;
}
function De(n) {
    if (n.length > 1) {
        return `${n.join(". ")}.`;
    }
    return n.join("");
}
function vt(n, e, s = "added") {
    switch(n.kind){
        case "idle":
        case "reading":
            return null;
        case "done":
            return {
                kind: "success",
                text: De([
                    e(s === "staged" ? {
                        id: "s/Dq9b",
                        values: {
                            0: n.added
                        }
                    } : {
                        id: "qcOuMY",
                        values: {
                            0: n.added
                        }
                    }),
                    ...qe(e, n.skipped)
                ])
            };
        case "nothing":
            {
                const t = Ee;
                const a = fe(n.skipped, "unsupported") > 0 ? e({
                    id: "0He7gk"
                }) : e({
                    id: "L+XXFF",
                    values: {
                        formats: t
                    }
                });
                return {
                    kind: "error",
                    text: De([
                        a,
                        ...qe(e, n.skipped)
                    ])
                };
            }
        case "failed":
            return {
                kind: "error",
                text: e({
                    id: "D2AZQg"
                })
            };
    }
}
function ke(n) {
    d0(n, {
        tags: {
            sand_area: "grok-bot-team"
        }
    });
    return {
        kind: "failed"
    };
}
async function qt(n, e, s = []) {
    if (n.length === 0) {
        return {
            status: null,
            written: []
        };
    }
    try {
        const [t, a] = await Promise.all([
            bt(n),
            e.readListing()
        ]);
        if (a == null) {
            return {
                status: {
                    kind: "failed"
                },
                written: []
            };
        }
        const r = mt(t.text, [
            ...cJ(a.plugins),
            ...s
        ]);
        const skipped = [
            ...t.skipped,
            ...r.skipped
        ];
        if (r.skills.length === 0) {
            return {
                status: {
                    kind: "nothing",
                    skipped
                },
                written: []
            };
        }
        const added = await e.addSkills(r.skills);
        const written = added === r.skills.length ? r.skills.flatMap((u)=>{
            if (u.name == null) {
                return [];
            }
            return [
                {
                    name: u.name,
                    content: u.content
                }
            ];
        }) : [];
        return {
            status: added > 0 ? {
                kind: "done",
                added,
                skipped
            } : {
                kind: "failed"
            },
            written
        };
    } catch (error) {
        return {
            status: ke(error),
            written: []
        };
    }
}
function useOt(n, e, s) {
    const t = c_1.c(44);
    const { _: __1 } = u_1();
    const r = bw();
    let d;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        d = {
            kind: "idle"
        };
        t[0] = d;
    } else {
        d = t[0];
    }
    const [i, setI] = r_1.useState(d);
    const [L, setL] = r_1.useState(false);
    const NRef = r_1.useRef(0);
    const jRef = r_1.useRef(false);
    let _;
    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
        _ = [];
        t[1] = _;
    } else {
        _ = t[1];
    }
    const vRef = r_1.useRef(_);
    let S;
    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
        S = [];
        t[2] = S;
    } else {
        S = t[2];
    }
    const cRef = r_1.useRef(S);
    let q;
    if (t[3] !== n) {
        q = ()=>n;
        t[3] = n;
        t[4] = q;
    } else {
        q = t[4];
    }
    const k = x(q);
    const { fileInputRef, folderInputRef } = s;
    const isBusy = e || i.kind === "reading";
    let g;
    if (t[5] !== __1 || t[6] !== k || t[7] !== r) {
        g = (l)=>{
            const f = vt(l, __1, _t(k()));
            if (f != null) {
                r(f);
            }
        };
        t[5] = __1;
        t[6] = k;
        t[7] = r;
        t[8] = g;
    } else {
        g = t[8];
    }
    const m = g;
    let y;
    let P;
    if (t[9] !== k || t[10] !== m) {
        const l = (f)=>{
            jRef.current = true;
            setI({
                kind: "reading"
            });
            const x = k();
            const J = [
                ...x.staged?.() ?? [],
                ...cRef.current
            ];
            qt(f, x, J).then(({ status, written })=>{
                cRef.current = [
                    ...cRef.current,
                    ...written
                ];
                y(status ?? {
                    kind: "idle"
                });
            }, (V)=>y(ke(V)));
        };
        y = (f)=>{
            setI(f);
            m(f);
            jRef.current = false;
            const vRef_current = vRef.current;
            vRef.current = [];
            if (vRef_current.length > 0) {
                l(vRef_current);
            } else if (k().staged !== undefined) {
                cRef.current = [];
            }
        };
        P = (f)=>{
            f.length !== 0 && (jRef.current ? vRef.current.push(...f) : l(f));
        };
        t[9] = k;
        t[10] = m;
        t[11] = y;
        t[12] = P;
    } else {
        y = t[11];
        P = t[12];
    }
    const B = P;
    let R;
    if (t[13] !== B) {
        R = (l)=>{
            const f = ve(l.target.files ?? []);
            l.target.value = "";
            B(f);
        };
        t[13] = B;
        t[14] = R;
    } else {
        R = t[14];
    }
    const handleInputChange = R;
    let $;
    if (t[15] !== B || t[16] !== e) {
        $ = (l)=>{
            if (e) {
                return false;
            }
            B(ve(l));
            return true;
        };
        t[15] = B;
        t[16] = e;
        t[17] = $;
    } else {
        $ = t[17];
    }
    const ingestFiles = $;
    let A;
    if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
        A = (l)=>{
            if (ge(l)) {
                l.preventDefault();
                l.stopPropagation();
                NRef.current = NRef.current + 1;
                setL(true);
            }
        };
        t[18] = A;
    } else {
        A = t[18];
    }
    const onDragEnter = A;
    let z;
    if (t[19] !== e) {
        z = (l)=>{
            if (ge(l)) {
                l.preventDefault();
                l.stopPropagation();
                if (l.dataTransfer != null) {
                    l.dataTransfer.dropEffect = e ? "none" : "copy";
                }
            }
        };
        t[19] = e;
        t[20] = z;
    } else {
        z = t[20];
    }
    const onDragOver = z;
    let M;
    if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
        M = (l)=>{
            if (ge(l)) {
                l.stopPropagation();
                NRef.current = Math.max(0, NRef.current - 1);
                if (NRef.current === 0) {
                    setL(false);
                }
            }
        };
        t[21] = M;
    } else {
        M = t[21];
    }
    const onDragLeave = M;
    let U;
    if (t[22] !== y || t[23] !== B || t[24] !== e || t[25] !== m) {
        U = (l)=>{
            if (ge(l)) {
                l.preventDefault();
                l.stopPropagation();
                NRef.current = 0;
                setL(false);
                if (!(e || l.dataTransfer == null)) {
                    kt(l.dataTransfer).then(B, (f)=>{
                        const x = ke(f);
                        if (jRef.current) {
                            m(x);
                        } else {
                            y(x);
                        }
                    });
                }
            }
        };
        t[22] = y;
        t[23] = B;
        t[24] = e;
        t[25] = m;
        t[26] = U;
    } else {
        U = t[26];
    }
    const onDrop = U;
    const isReading = i.kind === "reading";
    let dragBindings;
    if (t[27] !== onDragOver || t[28] !== onDrop) {
        dragBindings = {
            onDragEnter,
            onDragLeave,
            onDragOver,
            onDrop
        };
        t[27] = onDragOver;
        t[28] = onDrop;
        t[29] = dragBindings;
    } else {
        dragBindings = t[29];
    }
    let openFiles;
    if (t[30] !== fileInputRef) {
        openFiles = ()=>fileInputRef.current?.click();
        t[30] = fileInputRef;
        t[31] = openFiles;
    } else {
        openFiles = t[31];
    }
    let openFolder;
    if (t[32] !== folderInputRef) {
        openFolder = ()=>folderInputRef.current?.click();
        t[32] = folderInputRef;
        t[33] = openFolder;
    } else {
        openFolder = t[33];
    }
    let forgetWritten;
    if (t[34] === Symbol.for("react.memo_cache_sentinel")) {
        forgetWritten = (l)=>{
            cRef.current = cRef.current.filter((f)=>f.name !== l);
        };
        t[34] = forgetWritten;
    } else {
        forgetWritten = t[34];
    }
    let X;
    if (t[35] !== handleInputChange || t[36] !== ingestFiles || t[37] !== isBusy || t[38] !== L || t[39] !== isReading || t[40] !== dragBindings || t[41] !== openFiles || t[42] !== openFolder) {
        X = {
            isDragOver: L,
            isBusy,
            isReading,
            handleInputChange,
            ingestFiles,
            dragBindings,
            openFiles,
            openFolder,
            forgetWritten
        };
        t[35] = handleInputChange;
        t[36] = ingestFiles;
        t[37] = isBusy;
        t[38] = L;
        t[39] = isReading;
        t[40] = dragBindings;
        t[41] = openFiles;
        t[42] = openFolder;
        t[43] = X;
    } else {
        X = t[43];
    }
    return X;
}
const Ne = {
    dropButton: {
        kB7OPa: "sand-9f619",
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kGNEyG: "sand-6s0dn4",
        kjj79g: "sand-l56j7k",
        kOIVth: "sand-17d4w8g",
        kzqmXN: "sand-h8yej3",
        kZKoxP: "sand-5yr21d",
        kAzted: "sand-1t2pt76",
        kzQI83: "sand-1iyjqo2",
        kogj98: "sand-1ghz6dp",
        k8WAf4: "sand-1xn8qrt",
        kg3NbH: "sand-aope02",
        ksu8eU: "sand-ng3xce",
        kaIpWk: "sand-1qmwy7c",
        kWkggS: "sand-jbqb8w",
        kMwMTN: "sand-1o0liin sand-7n8uir",
        kMv6JI: "sand-jb2p0i",
        k9WMMc: "sand-2b8uid",
        kkrTdU: "sand-1ypdohk sand-tgyt42",
        $$css: true
    },
    hint: {
        kMwMTN: "sand-1ybxsvs",
        $$css: true
    }
};
function Tt(n) {
    const length = new TextEncoder().encode(f4(n)).length;
    if (length < 1024) {
        return `${length} B`;
    }
    if (length < 1024 * 1024) {
        const s = length / 1024;
        if (s < 10) {
            return `${s.toFixed(1)} KB`;
        }
        return `${Math.round(s)} KB`;
    }
    return `${(length / (1024 * 1024)).toFixed(1)} MB`;
}
function DtComponent(n) {
    DtComponent.d = 1015;
    const e = c_1.c(27);
    const { upload, fileInputRef, compact } = n;
    const r = compact === undefined ? false : compact;
    const { _: __1 } = u_1();
    let i;
    if (e[0] !== r || e[1] !== upload.isDragOver) {
        i = ({
            0: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1qjc9v5 sand-l56j7k sand-h8yej3 sand-1ymw6g sand-1db3i3o sand-2lah0s sand-mkeg23 sand-bsl7fq sand-fnq37j sand-1qmwy7c sand-10e981r sand-1axqdqs sand-ts7igz sand-1firant sand-1132tj4 sand-9lcvmn"
            },
            2: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1qjc9v5 sand-l56j7k sand-h8yej3 sand-2lah0s sand-mkeg23 sand-bsl7fq sand-fnq37j sand-1qmwy7c sand-10e981r sand-1axqdqs sand-ts7igz sand-1firant sand-1132tj4 sand-9lcvmn sand-t7dq6l sand-1edz59j"
            },
            1: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1qjc9v5 sand-l56j7k sand-h8yej3 sand-1ymw6g sand-1db3i3o sand-2lah0s sand-mkeg23 sand-bsl7fq sand-1qmwy7c sand-ts7igz sand-1firant sand-1132tj4 sand-9lcvmn sand-ctg3rd sand-1b7rqjq"
            },
            3: {
                className: "sand-9f619 sand-78zum5 sand-dt5ytf sand-1qjc9v5 sand-l56j7k sand-h8yej3 sand-2lah0s sand-mkeg23 sand-bsl7fq sand-1qmwy7c sand-ts7igz sand-1firant sand-1132tj4 sand-9lcvmn sand-t7dq6l sand-1edz59j sand-ctg3rd sand-1b7rqjq"
            }
        })[!!r << 1 | !!upload.isDragOver << 0];
        e[0] = r;
        e[1] = upload.isDragOver;
        e[2] = i;
    } else {
        i = e[2];
    }
    const { dragBindings, isReading } = upload;
    let u;
    if (e[3] !== __1) {
        u = __1({
            id: "2IXDgU"
        });
        e[3] = __1;
        e[4] = u;
    } else {
        u = e[4];
    }
    const { isBusy, openFiles } = upload;
    let _;
    let v;
    let S;
    if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
        v = p(aK.controlRing, Ne.dropButton);
        S = {
            className: "sand-78zum5 sand-6s0dn4 sand-1jnr06f"
        };
        _ = <I aria-hidden name="arrow-bracket-from-up" size="md"/>;
        e[5] = _;
        e[6] = v;
        e[7] = S;
    } else {
        _ = e[5];
        v = e[6];
        S = e[7];
    }
    let c;
    if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
        c = <span {...S}>{_}<_e level="body1"><T_1 id="2IXDgU"/></_e></span>;
        e[8] = c;
    } else {
        c = e[8];
    }
    let q;
    if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
        q = <_e level="body2" style={Ne.hint}><T_1 id="JwdYqs"/></_e>;
        e[9] = q;
    } else {
        q = e[9];
    }
    let k;
    if (e[10] !== u || e[11] !== upload.isBusy || e[12] !== upload.isReading || e[13] !== upload.openFiles) {
        k = <button aria-busy={isReading} aria-label={u} disabled={isBusy} onClick={openFiles} type="button" {...v}>{c}{q}</button>;
        e[10] = u;
        e[11] = upload.isBusy;
        e[12] = upload.isReading;
        e[13] = upload.openFiles;
        e[14] = k;
    } else {
        k = e[14];
    }
    let h;
    if (e[15] !== __1) {
        h = __1({
            id: "aM8P8N"
        });
        e[15] = __1;
        e[16] = h;
    } else {
        h = e[16];
    }
    const upload_handleInputChange = upload.handleInputChange;
    let D;
    if (e[17] === Symbol.for("react.memo_cache_sentinel")) {
        D = {
            className: "sand-1s85apg"
        };
        e[17] = D;
    } else {
        D = e[17];
    }
    let g;
    if (e[18] !== fileInputRef || e[19] !== h || e[20] !== upload.handleInputChange) {
        g = <input accept={accept} aria-label={h} multiple onChange={upload_handleInputChange} ref={fileInputRef} type="file" {...D}/>;
        e[18] = fileInputRef;
        e[19] = h;
        e[20] = upload.handleInputChange;
        e[21] = g;
    } else {
        g = e[21];
    }
    let m;
    if (e[22] !== k || e[23] !== g || e[24] !== i || e[25] !== upload.dragBindings) {
        m = <div {...i} {...dragBindings}>{k}{g}</div>;
        e[22] = k;
        e[23] = g;
        e[24] = i;
        e[25] = upload.dragBindings;
        e[26] = m;
    } else {
        m = e[26];
    }
    return m;
}
const Nt = {
    body: {
        k1xSpc: "sand-78zum5",
        kXwgrk: "sand-dt5ytf",
        kOIVth: "sand-1v2ro7d",
        kLKAdn: "sand-1y1aw1k",
        kGO01o: "sand-1l90r2v",
        $$css: true
    }
};
function BtComponent(n) {
    BtComponent.d = 1059;
    const e = c_1.c(93);
    const { open, onOpenChange, takenKeys, isDisabled, onAdd } = n;
    const { _ } = u_1();
    const [p, setP] = r_1.useState("");
    const [u, setU] = r_1.useState("");
    const [j, setJ] = r_1.useState("");
    const [v, setV] = r_1.useState(false);
    const [c, setC] = r_1.useState(false);
    let k;
    if (e[0] !== onOpenChange) {
        k = ()=>{
            setP("");
            setU("");
            setJ("");
            setV(false);
            onOpenChange(false);
        };
        e[0] = onOpenChange;
        e[1] = k;
    } else {
        k = e[1];
    }
    const h = k;
    let O;
    if (e[2] !== h || e[3] !== c || e[4] !== onOpenChange) {
        O = (w)=>{
            if (w) {
                onOpenChange(true);
            } else if (!c) {
                h();
            }
        };
        e[2] = h;
        e[3] = c;
        e[4] = onOpenChange;
        e[5] = O;
    } else {
        O = e[5];
    }
    const D = O;
    let g;
    let m;
    let y;
    if (e[6] !== _ || e[7] !== c || e[8] !== p || e[9] !== takenKeys) {
        m = p.trim();
        g = cL(m);
        y = null;
        if (m.length > 0 && g.length === 0) {
            let w;
            if (e[13] !== _) {
                w = _({
                    id: "MEJR0H"
                });
                e[13] = _;
                e[14] = w;
            } else {
                w = e[14];
            }
            y = w;
        } else {
            if (!c && takenKeys.has(g)) {
                y = _({
                    id: "YNjRIY",
                    values: {
                        name: m
                    }
                });
            }
        }
        e[6] = _;
        e[7] = c;
        e[8] = p;
        e[9] = takenKeys;
        e[10] = g;
        e[11] = m;
        e[12] = y;
    } else {
        g = e[10];
        m = e[11];
        y = e[12];
    }
    let P;
    if (e[15] !== j || e[16] !== isDisabled || e[17] !== c || e[18] !== g || e[19] !== y) {
        P = !isDisabled && !c && y === null && g.length > 0 && j.trim().length > 0;
        e[15] = j;
        e[16] = isDisabled;
        e[17] = c;
        e[18] = g;
        e[19] = y;
        e[20] = P;
    } else {
        P = e[20];
    }
    const B = P;
    let R;
    if (e[21] !== j || e[22] !== h || e[23] !== u || e[24] !== m || e[25] !== onAdd) {
        R = async ()=>{
            setV(false);
            setC(true);
            const w = await onAdd({
                name: m,
                description: u.trim(),
                body: j.trim()
            });
            setC(false);
            if (w) {
                h();
            } else {
                setV(true);
            }
        };
        e[21] = j;
        e[22] = h;
        e[23] = u;
        e[24] = m;
        e[25] = onAdd;
        e[26] = R;
    } else {
        R = e[26];
    }
    const Q = R;
    let $;
    if (e[27] !== _ || e[28] !== v || e[29] !== y) {
        $ = y ?? (v ? _({
            id: "EIMlCi"
        }) : null);
        e[27] = _;
        e[28] = v;
        e[29] = y;
        e[30] = $;
    } else {
        $ = e[30];
    }
    const W = $;
    let onClose;
    if (e[31] !== D) {
        onClose = ()=>D(false);
        e[31] = D;
        e[32] = onClose;
    } else {
        onClose = e[32];
    }
    let ee;
    if (e[33] === Symbol.for("react.memo_cache_sentinel")) {
        ee = <T_2 description=<T_1 id="4tgccm"/> title=<T_1 id="C/t3EV"/>/>;
        e[33] = ee;
    } else {
        ee = e[33];
    }
    let z;
    let H;
    let M;
    if (e[34] === Symbol.for("react.memo_cache_sentinel")) {
        H = {
            className: "sand-78zum5 sand-dt5ytf sand-1v2ro7d"
        };
        M = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g"
        };
        z = <span className="sand-11wthnw sand-d4r4e8 sand-tyxrsu"><T_1 id="6YtxFj"/></span>;
        e[34] = z;
        e[35] = H;
        e[36] = M;
    } else {
        z = e[34];
        H = e[35];
        M = e[36];
    }
    let Y;
    if (e[37] !== _) {
        Y = _({
            id: "6YtxFj"
        });
        e[37] = _;
        e[38] = Y;
    } else {
        Y = e[38];
    }
    let U;
    if (e[39] === Symbol.for("react.memo_cache_sentinel")) {
        U = (w)=>setP(w.currentTarget.value);
        e[39] = U;
    } else {
        U = e[39];
    }
    let G;
    if (e[40] === Symbol.for("react.memo_cache_sentinel")) {
        G = {
            className: "sand-9f619 sand-h8yej3 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw"
        };
        e[40] = G;
    } else {
        G = e[40];
    }
    let T;
    if (e[41] !== isDisabled || e[42] !== p || e[43] !== Y) {
        T = <label {...M}>{z}<input aria-label={Y} autoComplete="off" autoFocus disabled={isDisabled} onChange={U} value={p} {...G}/></label>;
        e[41] = isDisabled;
        e[42] = p;
        e[43] = Y;
        e[44] = T;
    } else {
        T = e[44];
    }
    let I;
    let F;
    if (e[45] === Symbol.for("react.memo_cache_sentinel")) {
        I = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g"
        };
        F = <span className="sand-11wthnw sand-d4r4e8 sand-tyxrsu"><T_1 id="Nu4oKW"/></span>;
        e[45] = I;
        e[46] = F;
    } else {
        I = e[45];
        F = e[46];
    }
    let b;
    if (e[47] !== _) {
        b = _({
            id: "Nu4oKW"
        });
        e[47] = _;
        e[48] = b;
    } else {
        b = e[48];
    }
    let K;
    if (e[49] === Symbol.for("react.memo_cache_sentinel")) {
        K = (w)=>setU(w.currentTarget.value);
        e[49] = K;
    } else {
        K = e[49];
    }
    let X;
    if (e[50] === Symbol.for("react.memo_cache_sentinel")) {
        X = {
            className: "sand-9f619 sand-h8yej3 sand-10w6t97 sand-t970qd sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw"
        };
        e[50] = X;
    } else {
        X = e[50];
    }
    let l;
    if (e[51] !== u || e[52] !== isDisabled || e[53] !== b) {
        l = <label {...I}>{F}<input aria-label={b} autoComplete="off" disabled={isDisabled} onChange={K} value={u} {...X}/></label>;
        e[51] = u;
        e[52] = isDisabled;
        e[53] = b;
        e[54] = l;
    } else {
        l = e[54];
    }
    let f;
    let x;
    if (e[55] === Symbol.for("react.memo_cache_sentinel")) {
        f = {
            className: "sand-78zum5 sand-dt5ytf sand-17d4w8g"
        };
        x = <span className="sand-11wthnw sand-d4r4e8 sand-tyxrsu"><T_1 id="NxHkkp"/></span>;
        e[55] = f;
        e[56] = x;
    } else {
        f = e[55];
        x = e[56];
    }
    let J;
    if (e[57] !== _) {
        J = _({
            id: "NxHkkp"
        });
        e[57] = _;
        e[58] = J;
    } else {
        J = e[58];
    }
    let V;
    if (e[59] === Symbol.for("react.memo_cache_sentinel")) {
        V = (w)=>setJ(w.currentTarget.value);
        e[59] = V;
    } else {
        V = e[59];
    }
    let te;
    if (e[60] === Symbol.for("react.memo_cache_sentinel")) {
        te = {
            className: "sand-9f619 sand-h8yej3 sand-1awh872 sand-qjedn3 sand-1y0btm7 sand-fnq37j sand-1qmwy7c sand-1a2a7pz sand-1tiofj7 sand-tyxrsu sand-jb2p0i sand-11wthnw sand-hjk10j sand-1vvogim sand-288g5"
        };
        e[60] = te;
    } else {
        te = e[60];
    }
    let Z;
    if (e[61] !== j || e[62] !== isDisabled || e[63] !== J) {
        Z = <label {...f}>{x}<textarea aria-label={J} disabled={isDisabled} onChange={V} value={j} {...te}/></label>;
        e[61] = j;
        e[62] = isDisabled;
        e[63] = J;
        e[64] = Z;
    } else {
        Z = e[64];
    }
    let ne;
    if (e[65] !== W) {
        ne = W === null ? null : <p role="alert" className="sand-1ghz6dp sand-1wm8ruf sand-1d3mw78 sand-6rl5ky">{W}</p>;
        e[65] = W;
        e[66] = ne;
    } else {
        ne = e[66];
    }
    let se;
    if (e[67] !== T || e[68] !== l || e[69] !== Z || e[70] !== ne) {
        se = <x_1.Body style={Nt.body}><div {...H}>{T}{l}{Z}{ne}</div></x_1.Body>;
        e[67] = T;
        e[68] = l;
        e[69] = Z;
        e[70] = ne;
        e[71] = se;
    } else {
        se = e[71];
    }
    let me;
    if (e[72] === Symbol.for("react.memo_cache_sentinel")) {
        me = <T_1 id="dEgA5A"/>;
        e[72] = me;
    } else {
        me = e[72];
    }
    let ae;
    if (e[73] !== h || e[74] !== c) {
        ae = <x_1.Action disabled={c} onClick={h} variant="secondary">{me}</x_1.Action>;
        e[73] = h;
        e[74] = c;
        e[75] = ae;
    } else {
        ae = e[75];
    }
    let pe;
    if (e[76] === Symbol.for("react.memo_cache_sentinel")) {
        pe = <x_1.ActionSpacer/>;
        e[76] = pe;
    } else {
        pe = e[76];
    }
    const disabled = !B;
    let re;
    if (e[77] !== Q) {
        re = ()=>{
            Q();
        };
        e[77] = Q;
        e[78] = re;
    } else {
        re = e[78];
    }
    let ie;
    if (e[79] !== c) {
        ie = c ? <T_1 id="K/F6pa"/> : <T_1 id="BukAXU"/>;
        e[79] = c;
        e[80] = ie;
    } else {
        ie = e[80];
    }
    let le;
    if (e[81] !== disabled || e[82] !== re || e[83] !== ie) {
        le = <x_1.Action disabled={disabled} onClick={re} variant="primary">{ie}</x_1.Action>;
        e[81] = disabled;
        e[82] = re;
        e[83] = ie;
        e[84] = le;
    } else {
        le = e[84];
    }
    let oe;
    if (e[85] !== ae || e[86] !== le) {
        oe = <x_1.ActionBar>{ae}{pe}{le}</x_1.ActionBar>;
        e[85] = ae;
        e[86] = le;
        e[87] = oe;
    } else {
        oe = e[87];
    }
    let he;
    if (e[88] !== open || e[89] !== se || e[90] !== oe || e[91] !== onClose) {
        he = <Ge height="hug" onClose={onClose} open={open}>{ee}{se}{oe}</Ge>;
        e[88] = open;
        e[89] = se;
        e[90] = oe;
        e[91] = onClose;
        e[92] = he;
    } else {
        he = e[92];
    }
    return he;
}
export { DtComponent as T, BtComponent as a, Tt as f, useOt as u };
