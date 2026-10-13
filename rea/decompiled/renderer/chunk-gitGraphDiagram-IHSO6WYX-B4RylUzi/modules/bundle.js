import { I as I_1 } from "./chunk-chunk-2Q5K7J3B-BdCp588o.js";
import { p } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as __1, p as p_1, o as setDiagramTitle, s as setAccDescription, g as getAccDescription, a as getAccTitle, b as setAccTitle, z as z_1, l as l_1, d as d_1, c as c_1, y as y_1, A, q as q_1, k, B, D, E as E_1 } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as p_2 } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
!(()=>{
    try {
        const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            e._sentryDebugIds = e._sentryDebugIds || {};
            e._sentryDebugIds[n] = "8db49cbf-6973-4a3c-83ea-d44c240ac41e";
            e._sentryDebugIdIdentifier = "sentry-dbid-8db49cbf-6973-4a3c-83ea-d44c240ac41e";
        }
    } catch (e) {}
})();
const commitType = {
    NORMAL: 0,
    REVERSE: 1,
    HIGHLIGHT: 2,
    MERGE: 3,
    CHERRY_PICK: 4
};
const D_gitGraph = D.gitGraph;
const getConfig = __1(()=>B({
        ...D_gitGraph,
        ...z_1().gitGraph
    }), "getConfig");
const d = new I_1(()=>{
    const e = getConfig();
    const { mainBranchName, mainBranchOrder } = e;
    return {
        mainBranchName,
        commits: new Map,
        head: null,
        branchConfig: new Map([
            [
                mainBranchName,
                {
                    name: mainBranchName,
                    order: mainBranchOrder
                }
            ]
        ]),
        branches: new Map([
            [
                mainBranchName,
                null
            ]
        ]),
        currBranch: mainBranchName,
        direction: "LR",
        seq: 0,
        options: {}
    };
});
function Y() {
    return E_1({
        length: 7
    });
}
__1(Y, "getID");
function te(e, r) {
    const t = Object.create(null);
    return e.reduce((acc, item)=>{
        const i = r(item);
        if (!t[i]) {
            t[i] = true;
            acc.push(item);
        }
        return acc;
    }, []);
}
__1(te, "uniqBy");
const setDirection = __1((e)=>{
    d.records.direction = e;
}, "setDirection");
const setOptions = __1((e)=>{
    l_1.debug("options str", e);
    e = e?.trim();
    e = e || "{}";
    try {
        d.records.options = JSON.parse(e);
    } catch (error) {
        l_1.error("error while parsing gitGraph options", error.message);
    }
}, "setOptions");
const getOptions = __1(()=>d.records.options, "getOptions");
const commit = __1(({ msg, id, type, tags })=>{
    l_1.info("commit", msg, id, type, tags);
    l_1.debug("Entering commit:", msg, id, type, tags);
    const i = getConfig();
    id = k.sanitizeText(id, i);
    msg = k.sanitizeText(msg, i);
    tags = tags?.map((a)=>k.sanitizeText(a, i));
    const n = {
        id: id || `${d.records.seq}-${Y()}`,
        message: msg,
        seq: d.records.seq++,
        type: type ?? commitType.NORMAL,
        tags: tags ?? [],
        parents: d.records.head == null ? [] : [
            d.records.head.id
        ],
        branch: d.records.currBranch
    };
    d.records.head = n;
    l_1.info("main branch", i.mainBranchName);
    if (d.records.commits.has(n.id)) {
        l_1.warn(`Commit ID ${n.id} already exists`);
    }
    d.records.commits.set(n.id, n);
    d.records.branches.set(d.records.currBranch, n.id);
    l_1.debug(`in pushCommit ${n.id}`);
}, "commit");
const branch = __1(({ name, order })=>{
    name = k.sanitizeText(name, getConfig());
    if (d.records.branches.has(name)) {
        throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${name}")`);
    }
    d.records.branches.set(name, d.records.head != null ? d.records.head.id : null);
    d.records.branchConfig.set(name, {
        name,
        order
    });
    checkout(name);
    l_1.debug("in createBranch");
}, "branch");
const merge = __1((e)=>{
    let e_branch = e.branch;
    let t = e.id;
    const { type, tags } = e;
    const i = getConfig();
    e_branch = k.sanitizeText(e_branch, i);
    if (t) {
        t = k.sanitizeText(t, i);
    }
    const n = d.records.branches.get(d.records.currBranch);
    const a = d.records.branches.get(e_branch);
    const l = n ? d.records.commits.get(n) : undefined;
    const f = a ? d.records.commits.get(a) : undefined;
    if (l && f && l.branch === e_branch) {
        throw new Error(`Cannot merge branch '${e_branch}' into itself.`);
    }
    if (d.records.currBranch === e_branch) {
        const c = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
        c.hash = {
            text: `merge ${e_branch}`,
            token: `merge ${e_branch}`,
            expected: [
                "branch abc"
            ]
        };
        throw c;
    }
    if (l === undefined || !l) {
        const c = new Error(`Incorrect usage of "merge". Current branch (${d.records.currBranch})has no commits`);
        c.hash = {
            text: `merge ${e_branch}`,
            token: `merge ${e_branch}`,
            expected: [
                "commit"
            ]
        };
        throw c;
    }
    if (!d.records.branches.has(e_branch)) {
        const c = new Error(`Incorrect usage of "merge". Branch to be merged (${e_branch}) does not exist`);
        c.hash = {
            text: `merge ${e_branch}`,
            token: `merge ${e_branch}`,
            expected: [
                `branch ${e_branch}`
            ]
        };
        throw c;
    }
    if (f === undefined || !f) {
        const c = new Error(`Incorrect usage of "merge". Branch to be merged (${e_branch}) has no commits`);
        c.hash = {
            text: `merge ${e_branch}`,
            token: `merge ${e_branch}`,
            expected: [
                '"commit"'
            ]
        };
        throw c;
    }
    if (l === f) {
        const c = new Error('Incorrect usage of "merge". Both branches have same head');
        c.hash = {
            text: `merge ${e_branch}`,
            token: `merge ${e_branch}`,
            expected: [
                "branch abc"
            ]
        };
        throw c;
    }
    if (t && d.records.commits.has(t)) {
        const c = new Error(`Incorrect usage of "merge". Commit with id:${t} already exists, use different custom id`);
        c.hash = {
            text: `merge ${e_branch} ${t} ${type} ${tags?.join(" ")}`,
            token: `merge ${e_branch} ${t} ${type} ${tags?.join(" ")}`,
            expected: [
                `merge ${e_branch} ${t}_UNIQUE ${type} ${tags?.join(" ")}`
            ]
        };
        throw c;
    }
    const g = a || "";
    const $ = {
        id: t || `${d.records.seq}-${Y()}`,
        message: `merged branch ${e_branch} into ${d.records.currBranch}`,
        seq: d.records.seq++,
        parents: d.records.head == null ? [] : [
            d.records.head.id,
            g
        ],
        branch: d.records.currBranch,
        type: commitType.MERGE,
        customType: type,
        customId: !!t,
        tags: tags ?? []
    };
    d.records.head = $;
    d.records.commits.set($.id, $);
    d.records.branches.set(d.records.currBranch, $.id);
    l_1.debug(d.records.branches);
    l_1.debug("in mergeBranch");
}, "merge");
const cherryPick = __1(({ id, targetId, tags, parent })=>{
    l_1.debug("Entering cherryPick:", id, targetId, tags);
    const i = getConfig();
    id = k.sanitizeText(id, i);
    targetId = k.sanitizeText(targetId, i);
    tags = tags?.map((l)=>k.sanitizeText(l, i));
    parent = k.sanitizeText(parent, i);
    if (!id || !d.records.commits.has(id)) {
        const l = new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
        l.hash = {
            text: `cherryPick ${id} ${targetId}`,
            token: `cherryPick ${id} ${targetId}`,
            expected: [
                "cherry-pick abc"
            ]
        };
        throw l;
    }
    const n = d.records.commits.get(id);
    if (n === undefined || !n) {
        throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
    }
    if (parent && !(Array.isArray(n.parents) && n.parents.includes(parent))) {
        throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
    }
    const n_branch = n.branch;
    if (n.type === commitType.MERGE && !parent) {
        throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
    }
    if (!targetId || !d.records.commits.has(targetId)) {
        if (n_branch === d.records.currBranch) {
            const $ = new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');
            $.hash = {
                text: `cherryPick ${id} ${targetId}`,
                token: `cherryPick ${id} ${targetId}`,
                expected: [
                    "cherry-pick abc"
                ]
            };
            throw $;
        }
        const l = d.records.branches.get(d.records.currBranch);
        if (l === undefined || !l) {
            const $ = new Error(`Incorrect usage of "cherry-pick". Current branch (${d.records.currBranch})has no commits`);
            $.hash = {
                text: `cherryPick ${id} ${targetId}`,
                token: `cherryPick ${id} ${targetId}`,
                expected: [
                    "cherry-pick abc"
                ]
            };
            throw $;
        }
        const f = d.records.commits.get(l);
        if (f === undefined || !f) {
            const $ = new Error(`Incorrect usage of "cherry-pick". Current branch (${d.records.currBranch})has no commits`);
            $.hash = {
                text: `cherryPick ${id} ${targetId}`,
                token: `cherryPick ${id} ${targetId}`,
                expected: [
                    "cherry-pick abc"
                ]
            };
            throw $;
        }
        const g = {
            id: `${d.records.seq}-${Y()}`,
            message: `cherry-picked ${n?.message} into ${d.records.currBranch}`,
            seq: d.records.seq++,
            parents: d.records.head == null ? [] : [
                d.records.head.id,
                n.id
            ],
            branch: d.records.currBranch,
            type: commitType.CHERRY_PICK,
            tags: tags ? tags.filter(Boolean) : [
                `cherry-pick:${n.id}${n.type === commitType.MERGE ? `|parent:${parent}` : ""}`
            ]
        };
        d.records.head = g;
        d.records.commits.set(g.id, g);
        d.records.branches.set(d.records.currBranch, g.id);
        l_1.debug(d.records.branches);
        l_1.debug("in cherryPick");
    }
}, "cherryPick");
var checkout = __1((e)=>{
    e = k.sanitizeText(e, getConfig());
    if (d.records.branches.has(e)) {
        d.records.currBranch = e;
        const r = d.records.branches.get(d.records.currBranch);
        if (r === undefined || !r) {
            d.records.head = null;
        } else {
            d.records.head = d.records.commits.get(r) ?? null;
        }
    } else {
        const r = new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${e}")`);
        r.hash = {
            text: `checkout ${e}`,
            token: `checkout ${e}`,
            expected: [
                `branch ${e}`
            ]
        };
        throw r;
    }
}, "checkout");
function V(e, r, t) {
    const s = e.indexOf(r);
    if (s === -1) {
        e.push(t);
    } else {
        e.splice(s, 1, t);
    }
}
__1(V, "upsert");
function Q(e) {
    const r = e.reduce((acc, item)=>{
        if (acc.seq > item.seq) {
            return acc;
        }
        return item;
    }, e[0]);
    let t = "";
    e.forEach((o)=>{
        if (o === r) {
            t += "	*";
        } else {
            t += "	|";
        }
    });
    const s = [
        t,
        r.id,
        r.seq
    ];
    for(const o in d.records.branches){
        if (d.records.branches.get(o) === r.id) {
            s.push(o);
        }
    }
    l_1.debug(s.join(" "));
    if (r.parents && r.parents.length == 2 && r.parents[0] && r.parents[1]) {
        const o = d.records.commits.get(r.parents[0]);
        V(e, r, o);
        if (r.parents[1]) {
            e.push(d.records.commits.get(r.parents[1]));
        }
    } else {
        if (r.parents.length == 0) {
            return;
        }
        if (r.parents[0]) {
            const o = d.records.commits.get(r.parents[0]);
            V(e, r, o);
        }
    }
    e = te(e, (o)=>o.id);
    Q(e);
}
__1(Q, "prettyPrintCommitHistory");
const prettyPrint = __1(()=>{
    l_1.debug(d.records.commits);
    const e = getCommitsArray()[0];
    Q([
        e
    ]);
}, "prettyPrint");
const clear = __1(()=>{
    d.reset();
    q_1();
}, "clear");
const getBranchesAsObjArray = __1(()=>[
        ...d.records.branchConfig.values()
    ].map((r, t)=>{
        if (r.order !== null && r.order !== undefined) {
            return r;
        }
        return {
            ...r,
            order: parseFloat(`0.${t}`)
        };
    }).sort((r, t)=>(r.order ?? 0) - (t.order ?? 0)).map(({ name })=>({
            name
        })), "getBranchesAsObjArray");
const getBranches = __1(()=>d.records.branches, "getBranches");
const getCommits = __1(()=>d.records.commits, "getCommits");
var getCommitsArray = __1(()=>{
    const e = [
        ...d.records.commits.values()
    ];
    e.forEach((r)=>{
        l_1.debug(r.id);
    });
    e.sort((r, t)=>r.seq - t.seq);
    return e;
}, "getCommitsArray");
const getCurrentBranch = __1(()=>d.records.currBranch, "getCurrentBranch");
const getDirection = __1(()=>d.records.direction, "getDirection");
const getHead = __1(()=>d.records.head, "getHead");
const db = {
    commitType,
    getConfig,
    setDirection,
    setOptions,
    getOptions,
    commit,
    branch,
    merge,
    cherryPick,
    checkout,
    prettyPrint,
    clear,
    getBranchesAsObjArray,
    getBranches,
    getCommits,
    getCommitsArray,
    getCurrentBranch,
    getDirection,
    getHead,
    setAccTitle,
    getAccTitle,
    getAccDescription,
    setAccDescription,
    setDiagramTitle,
    getDiagramTitle: p_1
};
const Ne = __1((e, r)=>{
    p(e, r);
    if (e.dir) {
        r.setDirection(e.dir);
    }
    for (const t of e.statements){
        Fe(t, r);
    }
}, "populate");
var Fe = __1((e, r)=>{
    const s = {
        Commit: __1((o)=>r.commit(ze(o)), "Commit"),
        Branch: __1((o)=>r.branch(Ye(o)), "Branch"),
        Merge: __1((o)=>r.merge(je(o)), "Merge"),
        Checkout: __1((o)=>r.checkout(Ue(o)), "Checkout"),
        CherryPicking: __1((o)=>r.cherryPick(Ke(o)), "CherryPicking")
    }[e.$type];
    if (s) {
        s(e);
    } else {
        l_1.error(`Unknown statement type: ${e.$type}`);
    }
}, "parseStatement");
var ze = __1((e)=>({
        id: e.id,
        msg: e.message ?? "",
        type: e.type !== undefined ? commitType[e.type] : commitType.NORMAL,
        tags: e.tags ?? undefined
    }), "parseCommit");
var Ye = __1((e)=>({
        name: e.name,
        order: e.order ?? 0
    }), "parseBranch");
var je = __1((e)=>({
        branch: e.branch,
        id: e.id ?? "",
        type: e.type !== undefined ? commitType[e.type] : undefined,
        tags: e.tags ?? undefined
    }), "parseMerge");
var Ue = __1((e)=>e.branch, "parseCheckout");
var Ke = __1((e)=>({
        id: e.id,
        targetId: "",
        tags: e.tags?.length === 0 ? undefined : e.tags,
        parent: e.parent
    }), "parseCherryPicking");
const parser = {
    parse: __1(async (e)=>{
        const r = await p_2("gitGraph", e);
        l_1.debug(r);
        Ne(r, db);
    }, "parse")
};
const O = 10;
const _ = 40;
const L = 4;
const R = 2;
const G = 8;
const j = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color"
]);
const X = 12;
const Z = new Set([
    "redux-color",
    "redux-dark-color"
]);
const Xe = new Set([
    "dark",
    "redux-dark",
    "redux-dark-color",
    "neo-dark"
]);
const H = __1((e, r, t = false)=>{
    if (t && e > 0) {
        return (e - 1) % (r - 1) + 1;
    }
    return e % r;
}, "calcColorIndex");
const C = new Map;
const E = new Map;
const F = 30;
let q = new Map;
let z = [];
let I = 0;
let y = "LR";
const Je = __1(()=>{
    C.clear();
    E.clear();
    q.clear();
    I = 0;
    z = [];
    y = "LR";
}, "clear");
const oe = __1((e)=>{
    const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
    (typeof e === "string" ? e.split(/\\n|\n|<br\s*\/?>/gi) : e).forEach((s)=>{
        const o = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        o.setAttribute("dy", "1em");
        o.setAttribute("x", "0");
        o.setAttribute("class", "row");
        o.textContent = s.trim();
        r.appendChild(o);
    });
    return r;
}, "drawText");
const ce = __1((e)=>{
    let r;
    let t;
    let s;
    if (y === "BT") {
        t = __1((o, i)=>o <= i, "comparisonFunc");
        s = Infinity;
    } else {
        t = __1((o, i)=>o >= i, "comparisonFunc");
        s = 0;
    }
    e.forEach((o)=>{
        const i = y === "TB" || y == "BT" ? E.get(o)?.y : E.get(o)?.x;
        if (i !== undefined && t(i, s)) {
            r = o;
            s = i;
        }
    });
    return r;
}, "findClosestParent");
const Qe = __1((e)=>{
    let r = "";
    let t = Infinity;
    e.forEach((s)=>{
        const o = E.get(s).y;
        if (o <= t) {
            r = s;
            t = o;
        }
    });
    return r || undefined;
}, "findClosestParentBT");
const Ze = __1((e, r, t)=>{
    let s = t;
    let o = t;
    const i = [];
    e.forEach((n)=>{
        const a = r.get(n);
        if (!a) {
            throw new Error(`Commit not found for key ${n}`);
        }
        if (a.parents.length) {
            s = rr(a);
            o = Math.max(s, o);
        } else {
            i.push(a);
        }
        tr(a, s);
    });
    s = o;
    i.forEach((n)=>{
        ar(n, s, t);
    });
    e.forEach((n)=>{
        const a = r.get(n);
        if (a?.parents.length) {
            const l = Qe(a.parents);
            s = E.get(l).y - _;
            if (s <= o) {
                o = s;
            }
            const x = C.get(a.branch).pos;
            const g = s - O;
            E.set(a.id, {
                x,
                y: g
            });
        }
    });
}, "setParallelBTPos");
const er = __1((e)=>{
    const r = ce(e.parents.filter((s)=>s !== null));
    if (!r) {
        throw new Error(`Closest parent not found for commit ${e.id}`);
    }
    const t = E.get(r)?.y;
    if (t === undefined) {
        throw new Error(`Closest parent position not found for commit ${e.id}`);
    }
    return t;
}, "findClosestParentPos");
var rr = __1((e)=>er(e) + _, "calculateCommitPosition");
var tr = __1((e, r)=>{
    const t = C.get(e.branch);
    if (!t) {
        throw new Error(`Branch not found for commit ${e.id}`);
    }
    const t_pos = t.pos;
    const o = r + O;
    E.set(e.id, {
        x: t_pos,
        y: o
    });
    return {
        x: t_pos,
        y: o
    };
}, "setCommitPosition");
var ar = __1((e, r, t)=>{
    const s = C.get(e.branch);
    if (!s) {
        throw new Error(`Branch not found for commit ${e.id}`);
    }
    const o = r + t;
    const s_pos = s.pos;
    E.set(e.id, {
        x: s_pos,
        y: o
    });
}, "setRootPosition");
const nr = __1((e, r, t, s, o, i)=>{
    const { theme } = c_1();
    const a = j.has(theme ?? "");
    const l = Z.has(theme ?? "");
    const f = Xe.has(theme ?? "");
    if (i === commitType.HIGHLIGHT) {
        e.append("rect").attr("x", t.x - 10 + (a ? 3 : 0)).attr("y", t.y - 10 + (a ? 3 : 0)).attr("width", a ? 14 : 20).attr("height", a ? 14 : 20).attr("class", `commit ${r.id} commit-highlight${H(o, G, l)} ${s}-outer`);
        e.append("rect").attr("x", t.x - 6 + (a ? 2 : 0)).attr("y", t.y - 6 + (a ? 2 : 0)).attr("width", a ? 8 : 12).attr("height", a ? 8 : 12).attr("class", `commit ${r.id} commit${H(o, G, l)} ${s}-inner`);
    } else if (i === commitType.CHERRY_PICK) {
        e.append("circle").attr("cx", t.x).attr("cy", t.y).attr("r", a ? 7 : 10).attr("class", `commit ${r.id} ${s}`);
        e.append("circle").attr("cx", t.x - 3).attr("cy", t.y + 2).attr("r", a ? 2.5 : 2.75).attr("fill", f ? "#000000" : "#fff").attr("class", `commit ${r.id} ${s}`);
        e.append("circle").attr("cx", t.x + 3).attr("cy", t.y + 2).attr("r", a ? 2.5 : 2.75).attr("fill", f ? "#000000" : "#fff").attr("class", `commit ${r.id} ${s}`);
        e.append("line").attr("x1", t.x + 3).attr("y1", t.y + 1).attr("x2", t.x).attr("y2", t.y - 5).attr("stroke", f ? "#000000" : "#fff").attr("class", `commit ${r.id} ${s}`);
        e.append("line").attr("x1", t.x - 3).attr("y1", t.y + 1).attr("x2", t.x).attr("y2", t.y - 5).attr("stroke", f ? "#000000" : "#fff").attr("class", `commit ${r.id} ${s}`);
    } else {
        const g = e.append("circle");
        g.attr("cx", t.x);
        g.attr("cy", t.y);
        g.attr("r", a ? 7 : 10);
        g.attr("class", `commit ${r.id} commit${H(o, G, l)}`);
        if (i === commitType.MERGE) {
            const $ = e.append("circle");
            $.attr("cx", t.x);
            $.attr("cy", t.y);
            $.attr("r", a ? 5 : 6);
            $.attr("class", `commit ${s} ${r.id} commit${H(o, G, l)}`);
        }
        if (i === commitType.REVERSE) {
            const $ = e.append("path");
            const c = a ? 4 : 5;
            $.attr("d", `M ${t.x - c},${t.y - c}L${t.x + c},${t.y + c}M${t.x - c},${t.y + c}L${t.x + c},${t.y - c}`).attr("class", `commit ${s} ${r.id} commit${H(o, G, l)}`);
        }
    }
}, "drawCommitBullet");
const sr = __1((e, r, t, s, o)=>{
    if (r.type !== commitType.CHERRY_PICK && (r.customId && r.type === commitType.MERGE || r.type !== commitType.MERGE) && o.showCommitLabel) {
        const i = e.append("g");
        const n = i.insert("rect").attr("class", "commit-label-bkg");
        const a = i.append("text").attr("x", s).attr("y", t.y + 25).attr("class", "commit-label").text(r.id);
        const l = a.node()?.getBBox();
        if (l && (n.attr("x", t.posWithOffset - l.width / 2 - R).attr("y", t.y + 13.5).attr("width", l.width + 2 * R).attr("height", l.height + 2 * R), y === "TB" || y === "BT" ? (n.attr("x", t.x - (l.width + 4 * L + 5)).attr("y", t.y - 12), a.attr("x", t.x - (l.width + 4 * L)).attr("y", t.y + l.height - 12)) : a.attr("x", t.posWithOffset - l.width / 2), o.rotateCommitLabel)) {
            if (y === "TB" || y === "BT") {
                a.attr("transform", `rotate(-45, ${t.x}, ${t.y})`);
                n.attr("transform", `rotate(-45, ${t.x}, ${t.y})`);
            } else {
                const f = -7.5 - (l.width + 10) / 25 * 9.5;
                const g = 10 + l.width / 25 * 8.5;
                i.attr("transform", `translate(${f}, ${g}) rotate(-45, ${s}, ${t.y})`);
            }
        }
    }
}, "drawCommitLabel");
const or = __1((e, r, t, s)=>{
    if (r.tags.length > 0) {
        let yOffset_1 = 0;
        let i = 0;
        let n = 0;
        const a = [];
        for (const l of r.tags.reverse()){
            const rect_1 = e.insert("polygon");
            const hole_1 = e.append("circle");
            const tag_1 = e.append("text").attr("y", t.y - 16 - yOffset_1).attr("class", "tag-label").text(l);
            const c = tag_1.node()?.getBBox();
            if (!c) {
                throw new Error("Tag bbox not found");
            }
            i = Math.max(i, c.width);
            n = Math.max(n, c.height);
            tag_1.attr("x", t.posWithOffset - c.width / 2);
            a.push({
                tag: tag_1,
                hole: hole_1,
                rect: rect_1,
                yOffset: yOffset_1
            });
            yOffset_1 += 20;
        }
        for (const { tag, hole, rect, yOffset } of a){
            const c = n / 2;
            const x = t.y - 19.2 - yOffset;
            rect.attr("class", "tag-label-bkg").attr("points", `
      ${s - i / 2 - L / 2},${x + R}  
      ${s - i / 2 - L / 2},${x - R}
      ${t.posWithOffset - i / 2 - L},${x - c - R}
      ${t.posWithOffset + i / 2 + L},${x - c - R}
      ${t.posWithOffset + i / 2 + L},${x + c + R}
      ${t.posWithOffset - i / 2 - L},${x + c + R}`);
            hole.attr("cy", x).attr("cx", s - i / 2 + L / 2).attr("r", 1.5).attr("class", "tag-hole");
            if (y === "TB" || y === "BT") {
                const u = s + yOffset;
                rect.attr("class", "tag-label-bkg").attr("points", `
        ${t.x},${u + 2}
        ${t.x},${u - 2}
        ${t.x + O},${u - c - 2}
        ${t.x + O + i + 4},${u - c - 2}
        ${t.x + O + i + 4},${u + c + 2}
        ${t.x + O},${u + c + 2}`).attr("transform", `translate(12,12) rotate(45, ${t.x},${s})`);
                hole.attr("cx", t.x + L / 2).attr("cy", u).attr("transform", `translate(12,12) rotate(45, ${t.x},${s})`);
                tag.attr("x", t.x + 5).attr("y", u + 3).attr("transform", `translate(14,14) rotate(45, ${t.x},${s})`);
            }
        }
    }
}, "drawCommitTags");
const cr = __1((e)=>{
    switch(e.customType ?? e.type){
        case commitType.NORMAL:
            return "commit-normal";
        case commitType.REVERSE:
            return "commit-reverse";
        case commitType.HIGHLIGHT:
            return "commit-highlight";
        case commitType.MERGE:
            return "commit-merge";
        case commitType.CHERRY_PICK:
            return "commit-cherry-pick";
        default:
            return "commit-normal";
    }
}, "getCommitClassType");
const ir = __1((e, r, t, s)=>{
    const o = {
        x: 0,
        y: 0
    };
    if (e.parents.length > 0) {
        const i = ce(e.parents);
        if (i) {
            const n = s.get(i) ?? o;
            switch(r){
                case "TB":
                    return n.y + _;
                case "BT":
                    return (s.get(e.id) ?? o).y - _;
                default:
                    return n.x + _;
            }
        }
    } else {
        switch(r){
            case "TB":
                return F;
            case "BT":
                return (s.get(e.id) ?? o).y - _;
            default:
                return 0;
        }
    }
    return 0;
}, "calculatePosition");
const dr = __1((e, r, t)=>{
    const posWithOffset = y === "BT" && t ? r : r + O;
    const o = C.get(e.branch)?.pos;
    const x = y === "TB" || y === "BT" ? C.get(e.branch)?.pos : posWithOffset;
    if (x === undefined || o === undefined) {
        throw new Error(`Position were undefined for commit ${e.id}`);
    }
    const n = j.has(c_1().theme ?? "");
    const a = y === "TB" || y === "BT" ? posWithOffset : o + (n ? X / 2 + 1 : -2);
    return {
        x,
        y: a,
        posWithOffset
    };
}, "getCommitPosition");
const re = __1((e, r, t, s)=>{
    const o = e.append("g").attr("class", "commit-bullets");
    const i = e.append("g").attr("class", "commit-labels");
    let n = y === "TB" || y === "BT" ? F : 0;
    const a = [
        ...r.keys()
    ];
    const l = s.parallelCommits ?? false;
    const f = __1(($, c)=>{
        const x = r.get($)?.seq;
        const u = r.get(c)?.seq;
        if (x !== undefined && u !== undefined) {
            return x - u;
        }
        return 0;
    }, "sortKeys");
    let g = a.sort(f);
    if (y === "BT") {
        if (l) {
            Ze(g, r, n);
        }
        g = g.reverse();
    }
    g.forEach(($)=>{
        const c = r.get($);
        if (!c) {
            throw new Error(`Commit not found for key ${$}`);
        }
        if (l) {
            n = ir(c, y, n, E);
        }
        const x = dr(c, n, l);
        if (t) {
            const u = cr(c);
            const p = c.customType ?? c.type;
            const b = C.get(c.branch)?.index ?? 0;
            nr(o, c, x, u, b, p);
            sr(i, c, x, n, s);
            or(i, c, x, n);
        }
        if (y === "TB" || y === "BT") {
            E.set(c.id, {
                x: x.x,
                y: x.posWithOffset
            });
        } else {
            E.set(c.id, {
                x: x.posWithOffset,
                y: x.y
            });
        }
        n = y === "BT" && l ? n + _ : n + _ + O;
        if (n > I) {
            I = n;
        }
    });
}, "drawCommits");
const lr = __1((e, r, t, s, o)=>{
    const n = (y === "TB" || y === "BT" ? t.x < s.x : t.y < s.y) ? r.branch : e.branch;
    const a = __1((f)=>f.branch === n, "isOnBranchToGetCurve");
    const l = __1((f)=>f.seq > e.seq && f.seq < r.seq, "isBetweenCommits");
    return [
        ...o.values()
    ].some((f)=>l(f) && a(f));
}, "shouldRerouteArrow");
var P = __1((e, r, t = 0)=>{
    const s = e + Math.abs(e - r) / 2;
    if (t > 5) {
        return s;
    }
    if (z.every((n)=>Math.abs(n - s) >= 10)) {
        z.push(s);
        return s;
    }
    const i = Math.abs(e - r);
    return P(e, r - i / 5, t + 1);
}, "findLane");
const hr = __1((e, r, t, s)=>{
    const { theme } = c_1();
    const i = Z.has(theme ?? "");
    const n = E.get(r.id);
    const a = E.get(t.id);
    if (n === undefined || a === undefined) {
        throw new Error(`Commit positions not found for commits ${r.id} and ${t.id}`);
    }
    const l = lr(r, t, n, a, s);
    let f = "";
    let g = "";
    let $ = 0;
    let c = 0;
    let x = C.get(t.branch)?.index;
    if (t.type === commitType.MERGE && r.id !== t.parents[0]) {
        x = C.get(r.branch)?.index;
    }
    let u;
    if (l) {
        f = "A 10 10, 0, 0, 0,";
        g = "A 10 10, 0, 0, 1,";
        $ = 10;
        c = 10;
        const p = n.y < a.y ? P(n.y, a.y) : P(a.y, n.y);
        const b = n.x < a.x ? P(n.x, a.x) : P(a.x, n.x);
        y === "TB" ? n.x < a.x ? u = `M ${n.x} ${n.y} L ${b - $} ${n.y} ${g} ${b} ${n.y + c} L ${b} ${a.y - $} ${f} ${b + c} ${a.y} L ${a.x} ${a.y}` : (x = C.get(r.branch)?.index, u = `M ${n.x} ${n.y} L ${b + $} ${n.y} ${f} ${b} ${n.y + c} L ${b} ${a.y - $} ${g} ${b - c} ${a.y} L ${a.x} ${a.y}`) : y === "BT" ? n.x < a.x ? u = `M ${n.x} ${n.y} L ${b - $} ${n.y} ${f} ${b} ${n.y - c} L ${b} ${a.y + $} ${g} ${b + c} ${a.y} L ${a.x} ${a.y}` : (x = C.get(r.branch)?.index, u = `M ${n.x} ${n.y} L ${b + $} ${n.y} ${g} ${b} ${n.y - c} L ${b} ${a.y + $} ${f} ${b - c} ${a.y} L ${a.x} ${a.y}`) : n.y < a.y ? u = `M ${n.x} ${n.y} L ${n.x} ${p - $} ${f} ${n.x + c} ${p} L ${a.x - $} ${p} ${g} ${a.x} ${p + c} L ${a.x} ${a.y}` : (x = C.get(r.branch)?.index, u = `M ${n.x} ${n.y} L ${n.x} ${p + $} ${g} ${n.x + c} ${p} L ${a.x - $} ${p} ${f} ${a.x} ${p - c} L ${a.x} ${a.y}`);
    } else {
        f = "A 20 20, 0, 0, 0,";
        g = "A 20 20, 0, 0, 1,";
        $ = 20;
        c = 20;
        y === "TB" ? (n.x < a.x && (t.type === commitType.MERGE && r.id !== t.parents[0] ? u = `M ${n.x} ${n.y} L ${n.x} ${a.y - $} ${f} ${n.x + c} ${a.y} L ${a.x} ${a.y}` : u = `M ${n.x} ${n.y} L ${a.x - $} ${n.y} ${g} ${a.x} ${n.y + c} L ${a.x} ${a.y}`), n.x > a.x && (f = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", $ = 20, c = 20, t.type === commitType.MERGE && r.id !== t.parents[0] ? u = `M ${n.x} ${n.y} L ${n.x} ${a.y - $} ${g} ${n.x - c} ${a.y} L ${a.x} ${a.y}` : u = `M ${n.x} ${n.y} L ${a.x + $} ${n.y} ${f} ${a.x} ${n.y + c} L ${a.x} ${a.y}`), n.x === a.x && (u = `M ${n.x} ${n.y} L ${a.x} ${a.y}`)) : y === "BT" ? (n.x < a.x && (t.type === commitType.MERGE && r.id !== t.parents[0] ? u = `M ${n.x} ${n.y} L ${n.x} ${a.y + $} ${g} ${n.x + c} ${a.y} L ${a.x} ${a.y}` : u = `M ${n.x} ${n.y} L ${a.x - $} ${n.y} ${f} ${a.x} ${n.y - c} L ${a.x} ${a.y}`), n.x > a.x && (f = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", $ = 20, c = 20, t.type === commitType.MERGE && r.id !== t.parents[0] ? u = `M ${n.x} ${n.y} L ${n.x} ${a.y + $} ${f} ${n.x - c} ${a.y} L ${a.x} ${a.y}` : u = `M ${n.x} ${n.y} L ${a.x + $} ${n.y} ${g} ${a.x} ${n.y - c} L ${a.x} ${a.y}`), n.x === a.x && (u = `M ${n.x} ${n.y} L ${a.x} ${a.y}`)) : (n.y < a.y && (t.type === commitType.MERGE && r.id !== t.parents[0] ? u = `M ${n.x} ${n.y} L ${a.x - $} ${n.y} ${g} ${a.x} ${n.y + c} L ${a.x} ${a.y}` : u = `M ${n.x} ${n.y} L ${n.x} ${a.y - $} ${f} ${n.x + c} ${a.y} L ${a.x} ${a.y}`), n.y > a.y && (t.type === commitType.MERGE && r.id !== t.parents[0] ? u = `M ${n.x} ${n.y} L ${a.x - $} ${n.y} ${f} ${a.x} ${n.y - c} L ${a.x} ${a.y}` : u = `M ${n.x} ${n.y} L ${n.x} ${a.y + $} ${g} ${n.x + c} ${a.y} L ${a.x} ${a.y}`), n.y === a.y && (u = `M ${n.x} ${n.y} L ${a.x} ${a.y}`));
    }
    if (u === undefined) {
        throw new Error("Line definition not found");
    }
    e.append("path").attr("d", u).attr("class", `arrow arrow${H(x, G, i)}`);
}, "drawArrow");
const $r = __1((e, r)=>{
    const t = e.append("g").attr("class", "commit-arrows");
    [
        ...r.keys()
    ].forEach((s)=>{
        const o = r.get(s);
        if (o.parents && o.parents.length > 0) {
            o.parents.forEach((i)=>{
                hr(t, r.get(i), o, r);
            });
        }
    });
}, "drawArrows");
const fr = __1((e, r, t, s)=>{
    const { look, theme, themeVariables } = c_1();
    const { dropShadow, THEME_COLOR_LIMIT } = themeVariables;
    const f = j.has(theme ?? "");
    const g = Z.has(theme ?? "");
    const $ = e.append("g");
    r.forEach((c, x)=>{
        const u = H(x, f ? THEME_COLOR_LIMIT : G, g);
        const p = C.get(c.name)?.pos;
        if (p === undefined) {
            throw new Error(`Position not found for branch ${c.name}`);
        }
        const b = y === "TB" || y === "BT" ? p : f ? p + X / 2 + 1 : p - 2;
        const k = $.append("line");
        k.attr("x1", 0);
        k.attr("y1", b);
        k.attr("x2", I);
        k.attr("y2", b);
        k.attr("class", `branch branch${u}`);
        if (y === "TB") {
            k.attr("y1", F);
            k.attr("x1", p);
            k.attr("y2", I);
            k.attr("x2", p);
        } else if (y === "BT") {
            k.attr("y1", I);
            k.attr("x1", p);
            k.attr("y2", F);
            k.attr("x2", p);
        }
        z.push(b);
        const c_name = c.name;
        const D = oe(c_name);
        const T = $.insert("rect");
        const M = $.insert("g").attr("class", "branchLabel").insert("g").attr("class", `label branch-label${u}`);
        M.node().appendChild(D);
        const v = D.getBBox();
        const ee = f ? 0 : 4;
        const N = f ? 16 : 0;
        const A = f ? X : 0;
        if (look === "neo") {
            T.attr("data-look", "neo");
        }
        T.attr("class", `branchLabelBkg label${u}`).attr("style", look === "neo" ? `filter:${f ? `url(#${s}-drop-shadow)` : dropShadow}` : "").attr("rx", ee).attr("ry", ee).attr("x", -v.width - 4 - (t.rotateCommitLabel === true ? 30 : 0)).attr("y", -v.height / 2 + 10).attr("width", v.width + 18 + N).attr("height", v.height + 4 + A);
        M.attr("transform", `translate(${-v.width - 14 - (t.rotateCommitLabel === true ? 30 : 0) + N / 2}, ${b - v.height / 2 - 2})`);
        switch(y){
            case "TB":
                T.attr("x", p - v.width / 2 - 10).attr("y", 0);
                M.attr("transform", `translate(${p - v.width / 2 - 5}, 0)`);
                if (f) {
                    T.attr("transform", `translate(${-N / 2 - 3}, ${-A - 10})`);
                    M.attr("transform", `translate(${p - v.width / 2 - 5}, ${-A * 2 + 7})`);
                }
                break;
            case "BT":
                T.attr("x", p - v.width / 2 - 10).attr("y", I);
                M.attr("transform", `translate(${p - v.width / 2 - 5}, ${I})`);
                if (f) {
                    T.attr("transform", `translate(${-N / 2 - 3}, ${A + 10})`);
                    M.attr("transform", `translate(${p - v.width / 2 - 5}, ${I + A * 2 + 4})`);
                }
                break;
            default:
                T.attr("transform", `translate(-19, ${b - 12 - A / 2})`);
        }
    });
}, "drawBranches");
const gr = __1((e, pos, index, s, o)=>{
    C.set(e, {
        pos,
        index
    });
    pos += 50 + (o ? 40 : 0) + (y === "TB" || y === "BT" ? s.width / 2 : 0);
    return pos;
}, "setBranchPosition");
const draw = __1((e, r, t, s)=>{
    Je();
    l_1.debug("in gitgraph renderer", e + `
`, "id:", r, t);
    const o = s.db;
    if (!o.getConfig) {
        l_1.error("getConfig method is not available on db");
        return;
    }
    const i = o.getConfig();
    const n = i.rotateCommitLabel ?? false;
    q = o.getCommits();
    const a = o.getBranchesAsObjArray();
    y = o.getDirection();
    const l = d_1(`[id="${r}"]`);
    const { look, theme, themeVariables } = c_1();
    const { useGradient, gradientStart, gradientStop, filterColor } = themeVariables;
    if (useGradient) {
        const k = l.append("defs").append("linearGradient").attr("id", `${r}-gradient`).attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
        k.append("stop").attr("offset", "0%").attr("stop-color", gradientStart).attr("stop-opacity", 1);
        k.append("stop").attr("offset", "100%").attr("stop-color", gradientStop).attr("stop-opacity", 1);
    }
    if (look === "neo" && j.has(theme ?? "")) {
        l.append("defs").append("filter").attr("id", `${r}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", filterColor);
    }
    let b = 0;
    a.forEach((k, U)=>{
        const D = oe(k.name);
        const T = l.append("g");
        const K = T.insert("g").attr("class", "branchLabel");
        const M = K.insert("g").attr("class", "label branch-label");
        M.node()?.appendChild(D);
        const v = D.getBBox();
        b = gr(k.name, b, U, v, n);
        M.remove();
        K.remove();
        T.remove();
    });
    re(l, q, false, i);
    if (i.showBranches) {
        fr(l, a, i, r);
    }
    $r(l, q);
    re(l, q, true, i);
    y_1.insertTitle(l, "gitTitleText", i.titleTopMargin ?? 0, o.getDiagramTitle());
    A(undefined, l, i.diagramPadding, i.useMaxWidth);
}, "draw");
const renderer = {
    draw
};
const ie = 8;
const de = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color"
]);
const xr = new Set([
    "redux-color",
    "redux-dark-color"
]);
const mr = new Set([
    "neo",
    "neo-dark"
]);
const pr = new Set([
    "dark",
    "redux-dark",
    "redux-dark-color",
    "neo-dark"
]);
const br = new Set([
    "redux",
    "redux-dark",
    "redux-color",
    "redux-dark-color",
    "neo",
    "neo-dark"
]);
const wr = __1((e)=>{
    const { svgId } = e;
    let t = "";
    if (e.useGradient && svgId) {
        for(let s = 0; s < e.THEME_COLOR_LIMIT; s++){
            t += `
      .label${s}  { fill: ${e.mainBkg}; stroke: url(${svgId}-gradient); stroke-width: ${e.strokeWidth};}
             `;
        }
    }
    return t;
}, "genGitGraphGradient");
const kr = __1((e)=>{
    const r = z_1();
    const { theme, themeVariables } = r;
    const { borderColorArray } = themeVariables;
    const i = de.has(theme);
    if (mr.has(theme)) {
        let n = "";
        for(let a = 0; a < e.THEME_COLOR_LIMIT; a++){
            if (a === 0) {
                n += `
        .branch-label${a} { fill: ${e.nodeBorder};}
        .commit${a} { stroke: ${e.nodeBorder};   }
        .commit-highlight${a} { stroke: ${e.nodeBorder}; fill: ${e.nodeBorder}; }
        .arrow${a} { stroke: ${e.nodeBorder}; }
        .commit-bullets { fill: ${e.nodeBorder}; }
        .commit-cherry-pick${a} { stroke: ${e.nodeBorder}; }
        ${wr(e)}`;
            } else {
                const l = a % ie;
                n += `
        .branch-label${a} { fill: ${e[`gitBranchLabel${l}`]}; }
        .commit${a} { stroke: ${e[`git${l}`]}; fill: ${e[`git${l}`]}; }
        .commit-highlight${a} { stroke: ${e[`gitInv${l}`]}; fill: ${e[`gitInv${l}`]}; }
        .arrow${a} { stroke: ${e[`git${l}`]}; }
        `;
            }
        }
        return n;
    } else if (xr.has(theme)) {
        let n = "";
        for(let a = 0; a < e.THEME_COLOR_LIMIT; a++){
            if (a === 0) {
                n += `
        .branch-label${a} { fill: ${e.nodeBorder}; ${i ? `font-weight:${e.noteFontWeight}` : ""} }
        .commit${a} { stroke: ${e.nodeBorder}; }
        .commit-highlight${a} { stroke: ${e.nodeBorder}; fill: ${e.mainBkg}; }
        .label${a}  { fill: ${e.mainBkg}; stroke: ${e.nodeBorder}; stroke-width: ${e.strokeWidth}; ${i ? `font-weight:${e.noteFontWeight}` : ""} }
        .arrow${a} { stroke: ${e.nodeBorder}; }
        .commit-bullets { fill: ${e.nodeBorder}; }
        `;
            } else {
                const l = a % borderColorArray.length;
                n += `
        .branch-label${a} { fill: ${e.nodeBorder}; ${i ? `font-weight:${e.noteFontWeight}` : ""} }
        .commit${a} { stroke: ${borderColorArray[l]}; fill: ${borderColorArray[l]}; }
        .commit-highlight${a} { stroke: ${borderColorArray[l]}; fill: ${borderColorArray[l]}; }
        .label${a}  { fill: ${pr.has(theme) ? e.mainBkg : borderColorArray[l]}; stroke: ${borderColorArray[l]};  stroke-width: ${e.strokeWidth}; }
        .arrow${a} { stroke: ${borderColorArray[l]}; }
        `;
            }
        }
        return n;
    } else {
        let n = "";
        for(let a = 0; a < e.THEME_COLOR_LIMIT; a++){
            n += `
        .branch-label${a} { fill: ${e.nodeBorder}; ${i ? `font-weight:${e.noteFontWeight}` : ""} }
        .commit${a} { stroke: ${e.nodeBorder};   }
        .commit-highlight${a} { stroke: ${e.nodeBorder}; fill: ${e.nodeBorder}; }
        .label${a}  { fill: ${e.mainBkg}; stroke: ${e.nodeBorder}; stroke-width: ${e.strokeWidth}; ${i ? `font-weight:${e.noteFontWeight}` : ""}}
        .arrow${a} { stroke: ${e.nodeBorder}; }
        .commit-bullets { fill: ${e.nodeBorder}; }
        .commit-cherry-pick${a} { stroke: ${e.nodeBorder}; }
        `;
        }
        return n;
    }
}, "genColor");
const vr = __1((e)=>`${Array.from({
        length: e.THEME_COLOR_LIMIT
    }, (r, t)=>t).map((r)=>{
        const t = r % ie;
        return `
        .branch-label${r} { fill: ${e[`gitBranchLabel${t}`]}; }
        .commit${r} { stroke: ${e[`git${t}`]}; fill: ${e[`git${t}`]}; }
        .commit-highlight${r} { stroke: ${e[`gitInv${t}`]}; fill: ${e[`gitInv${t}`]}; }
        .label${r}  { fill: ${e[`git${t}`]}; }
        .arrow${r} { stroke: ${e[`git${t}`]}; }
        `;
    }).join(`
`)}`, "normalTheme");
const Cr = __1((e)=>{
    const r = z_1();
    const { theme } = r;
    const s = br.has(theme);
    return `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  
  ${s ? kr(e) : vr(e)}

  .branch {
    stroke-width: ${e.strokeWidth};
    stroke: ${e.commitLineColor ?? e.lineColor};
    stroke-dasharray:  ${s ? "4 2" : "2"};
  }
  .commit-label { font-size: ${e.commitLabelFontSize}; fill: ${s ? e.nodeBorder : e.commitLabelColor}; ${s ? `font-weight:${e.noteFontWeight};` : ""}}
  .commit-label-bkg { font-size: ${e.commitLabelFontSize}; fill: ${s ? "transparent" : e.commitLabelBackground}; opacity: ${s ? "" : 0.5};  }
  .tag-label { font-size: ${e.tagLabelFontSize}; fill: ${e.tagLabelColor};}
  .tag-label-bkg { fill: ${s ? e.mainBkg : e.tagLabelBackground}; stroke: ${s ? e.nodeBorder : e.tagLabelBorder}; ${s ? `filter:${e.dropShadow}` : ""}  }
  .tag-hole { fill: ${e.textColor}; }

  .commit-merge {
    stroke: ${s ? e.mainBkg : e.primaryColor};
    fill: ${s ? e.mainBkg : e.primaryColor};
  }
  .commit-reverse {
    stroke: ${s ? e.mainBkg : e.primaryColor};
    fill: ${s ? e.mainBkg : e.primaryColor};
    stroke-width: ${s ? e.strokeWidth : 3};
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${s ? e.mainBkg : e.primaryColor};
    fill: ${s ? e.mainBkg : e.primaryColor};
  }

  .arrow {
    /* Intentional: neo themes keep the bold 8px arrow (like classic themes); only redux-geometry themes use the thinner options.strokeWidth. */
    stroke-width: ${de.has(theme) ? e.strokeWidth : 8};
    stroke-linecap: round;
    fill: none
  }
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;
}, "getStyles");
const styles = Cr;
export const diagram = {
    parser,
    db,
    renderer,
    styles
};
