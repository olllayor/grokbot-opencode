declare var document: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "8db49cbf-6973-4a3c-83ea-d44c240ac41e", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-8db49cbf-6973-4a3c-83ea-d44c240ac41e");
  } catch (e: any) {}
} as any)();
import { I as le } from "./chunk-chunk-2Q5K7J3B-BdCp588o.js";
import { p as he } from "./chunk-chunk-JWPE2WC7-firmgLgH.js";
import { _ as h, p as $e, o as fe, s as ge, g as ue, a as ye, b as xe, z as J, l as w, d as me, c as W, y as pe, A as be, q as we, k as B, B as ke, D as ve, E as Ce } from "./chunk-mermaid.core-B9Iu5CoE.js";
import { p as Ee } from "./chunk-cynefin-VYW2F7L2-ChVxrOa1.js";
import "./index.eager-vendor-Qbf9YA6n.js";
var m: any = {
    NORMAL: 0,
    REVERSE: 1,
    HIGHLIGHT: 2,
    MERGE: 3,
    CHERRY_PICK: 4
  },
  Be: any = (ve as any).gitGraph,
  S: any = (h as any)((): any => (ke as any)({
    ...Be,
    ...((J as any)() as any).gitGraph
  }), "getConfig"),
  d: any = new (le as any)((): any => {
    const e: any = (S as any)(),
      r: any = (e as any).mainBranchName,
      t: any = (e as any).mainBranchOrder;
    return {
      mainBranchName: r,
      commits: new (Map as any)(),
      head: null,
      branchConfig: new (Map as any)([[r, {
        name: r,
        order: t
      }]]),
      branches: new (Map as any)([[r, null]]),
      currBranch: r,
      direction: "LR",
      seq: 0,
      options: {}
    };
  });
function Y(this: any): any {
  return (Ce as any)({
    length: 7
  });
}
(h as any)(Y, "getID");
function te(this: any, e: any, r: any): any {
  const t: any = ((Object as any).create as any)(null);
  return ((e as any).reduce as any)((s: any, o: any): any => {
    const i: any = (r as any)(o);
    return (t as any)[i] || ((t as any)[i] = !0, ((s as any).push as any)(o)), s;
  }, []);
}
(h as any)(te, "uniqBy");
var Te: any = (h as any)(function (this: any, e: any): any {
    ((d as any).records as any).direction = e;
  }, "setDirection"),
  Le: any = (h as any)(function (this: any, e: any): any {
    ((w as any).debug as any)("options str", e), e = e?.trim(), e = e || "{}";
    try {
      ((d as any).records as any).options = ((JSON as any).parse as any)(e);
    } catch (r: any) {
      ((w as any).error as any)("error while parsing gitGraph options", (r as any).message);
    }
  }, "setOptions"),
  Me: any = (h as any)(function (this: any): any {
    return ((d as any).records as any).options;
  }, "getOptions"),
  Re: any = (h as any)(function (this: any, e: any): any {
    let r: any = (e as any).msg,
      t: any = (e as any).id;
    const s: any = (e as any).type;
    let o: any = (e as any).tags;
    ((w as any).info as any)("commit", r, t, s, o), ((w as any).debug as any)("Entering commit:", r, t, s, o);
    const i: any = (S as any)();
    t = ((B as any).sanitizeText as any)(t, i), r = ((B as any).sanitizeText as any)(r, i), o = o?.map((a: any): any => ((B as any).sanitizeText as any)(a, i));
    const n: any = {
      id: t || ((((d as any).records as any).seq as any) + ("-" as any) as any) + ((Y as any)() as any),
      message: r,
      seq: ((d as any).records as any).seq++,
      type: s ?? (m as any).NORMAL,
      tags: o ?? [],
      parents: (((d as any).records as any).head as any) == (null as any) ? [] : [(((d as any).records as any).head as any).id],
      branch: ((d as any).records as any).currBranch
    };
    ((d as any).records as any).head = n, ((w as any).info as any)("main branch", (i as any).mainBranchName), ((((d as any).records as any).commits as any).has as any)((n as any).id) && ((w as any).warn as any)(`Commit ID ${(n as any).id} already exists`), ((((d as any).records as any).commits as any).set as any)((n as any).id, n), ((((d as any).records as any).branches as any).set as any)(((d as any).records as any).currBranch, (n as any).id), ((w as any).debug as any)(("in pushCommit " as any) + ((n as any).id as any));
  }, "commit"),
  Ie: any = (h as any)(function (this: any, e: any): any {
    let r: any = (e as any).name;
    const t: any = (e as any).order;
    if (r = ((B as any).sanitizeText as any)(r, (S as any)()), ((((d as any).records as any).branches as any).has as any)(r)) throw new (Error as any)(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`);
    ((((d as any).records as any).branches as any).set as any)(r, (((d as any).records as any).head as any) != (null as any) ? (((d as any).records as any).head as any).id : null), ((((d as any).records as any).branchConfig as any).set as any)(r, {
      name: r,
      order: t
    }), (ae as any)(r), ((w as any).debug as any)("in createBranch");
  }, "branch"),
  Oe: any = (h as any)((e: any): any => {
    let r: any = (e as any).branch,
      t: any = (e as any).id;
    const s: any = (e as any).type,
      o: any = (e as any).tags,
      i: any = (S as any)();
    r = ((B as any).sanitizeText as any)(r, i), t && (t = ((B as any).sanitizeText as any)(t, i));
    const n: any = ((((d as any).records as any).branches as any).get as any)(((d as any).records as any).currBranch),
      a: any = ((((d as any).records as any).branches as any).get as any)(r),
      l: any = n ? ((((d as any).records as any).commits as any).get as any)(n) : void 0,
      f: any = a ? ((((d as any).records as any).commits as any).get as any)(a) : void 0;
    if (l && f && ((l as any).branch as any) === (r as any)) throw new (Error as any)(`Cannot merge branch '${r}' into itself.`);
    if ((((d as any).records as any).currBranch as any) === (r as any)) {
      const c: any = new (Error as any)('Incorrect usage of "merge". Cannot merge a branch to itself');
      throw (c as any).hash = {
        text: `merge ${r}`,
        token: `merge ${r}`,
        expected: ["branch abc"]
      }, c;
    }
    if ((l as any) === (void 0 as any) || !l) {
      const c: any = new (Error as any)(`Incorrect usage of "merge". Current branch (${((d as any).records as any).currBranch})has no commits`);
      throw (c as any).hash = {
        text: `merge ${r}`,
        token: `merge ${r}`,
        expected: ["commit"]
      }, c;
    }
    if (!((((d as any).records as any).branches as any).has as any)(r)) {
      const c: any = new (Error as any)((('Incorrect usage of "merge". Branch to be merged (' as any) + (r as any) as any) + (") does not exist" as any));
      throw (c as any).hash = {
        text: `merge ${r}`,
        token: `merge ${r}`,
        expected: [`branch ${r}`]
      }, c;
    }
    if ((f as any) === (void 0 as any) || !f) {
      const c: any = new (Error as any)((('Incorrect usage of "merge". Branch to be merged (' as any) + (r as any) as any) + (") has no commits" as any));
      throw (c as any).hash = {
        text: `merge ${r}`,
        token: `merge ${r}`,
        expected: ['"commit"']
      }, c;
    }
    if ((l as any) === (f as any)) {
      const c: any = new (Error as any)('Incorrect usage of "merge". Both branches have same head');
      throw (c as any).hash = {
        text: `merge ${r}`,
        token: `merge ${r}`,
        expected: ["branch abc"]
      }, c;
    }
    if (t && ((((d as any).records as any).commits as any).has as any)(t)) {
      const c: any = new (Error as any)((('Incorrect usage of "merge". Commit with id:' as any) + (t as any) as any) + (" already exists, use different custom id" as any));
      throw (c as any).hash = {
        text: `merge ${r} ${t} ${s} ${o?.join(" ")}`,
        token: `merge ${r} ${t} ${s} ${o?.join(" ")}`,
        expected: [`merge ${r} ${t}_UNIQUE ${s} ${o?.join(" ")}`]
      }, c;
    }
    const g: any = a || "",
      $: any = {
        id: t || `${((d as any).records as any).seq}-${(Y as any)()}`,
        message: `merged branch ${r} into ${((d as any).records as any).currBranch}`,
        seq: ((d as any).records as any).seq++,
        parents: (((d as any).records as any).head as any) == (null as any) ? [] : [(((d as any).records as any).head as any).id, g],
        branch: ((d as any).records as any).currBranch,
        type: (m as any).MERGE,
        customType: s,
        customId: !!t,
        tags: o ?? []
      };
    ((d as any).records as any).head = $, ((((d as any).records as any).commits as any).set as any)(($ as any).id, $), ((((d as any).records as any).branches as any).set as any)(((d as any).records as any).currBranch, ($ as any).id), ((w as any).debug as any)(((d as any).records as any).branches), ((w as any).debug as any)("in mergeBranch");
  }, "merge"),
  _e: any = (h as any)(function (this: any, e: any): any {
    let r: any = (e as any).id,
      t: any = (e as any).targetId,
      s: any = (e as any).tags,
      o: any = (e as any).parent;
    ((w as any).debug as any)("Entering cherryPick:", r, t, s);
    const i: any = (S as any)();
    if (r = ((B as any).sanitizeText as any)(r, i), t = ((B as any).sanitizeText as any)(t, i), s = s?.map((l: any): any => ((B as any).sanitizeText as any)(l, i)), o = ((B as any).sanitizeText as any)(o, i), !r || !((((d as any).records as any).commits as any).has as any)(r)) {
      const l: any = new (Error as any)('Incorrect usage of "cherryPick". Source commit id should exist and provided');
      throw (l as any).hash = {
        text: `cherryPick ${r} ${t}`,
        token: `cherryPick ${r} ${t}`,
        expected: ["cherry-pick abc"]
      }, l;
    }
    const n: any = ((((d as any).records as any).commits as any).get as any)(r);
    if ((n as any) === (void 0 as any) || !n) throw new (Error as any)('Incorrect usage of "cherryPick". Source commit id should exist and provided');
    if (o && !(((Array as any).isArray as any)((n as any).parents) && (((n as any).parents as any).includes as any)(o))) throw new (Error as any)("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
    const a: any = (n as any).branch;
    if (((n as any).type as any) === ((m as any).MERGE as any) && !o) throw new (Error as any)("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
    if (!t || !((((d as any).records as any).commits as any).has as any)(t)) {
      if ((a as any) === (((d as any).records as any).currBranch as any)) {
        const $: any = new (Error as any)('Incorrect usage of "cherryPick". Source commit is already on current branch');
        throw ($ as any).hash = {
          text: `cherryPick ${r} ${t}`,
          token: `cherryPick ${r} ${t}`,
          expected: ["cherry-pick abc"]
        }, $;
      }
      const l: any = ((((d as any).records as any).branches as any).get as any)(((d as any).records as any).currBranch);
      if ((l as any) === (void 0 as any) || !l) {
        const $: any = new (Error as any)(`Incorrect usage of "cherry-pick". Current branch (${((d as any).records as any).currBranch})has no commits`);
        throw ($ as any).hash = {
          text: `cherryPick ${r} ${t}`,
          token: `cherryPick ${r} ${t}`,
          expected: ["cherry-pick abc"]
        }, $;
      }
      const f: any = ((((d as any).records as any).commits as any).get as any)(l);
      if ((f as any) === (void 0 as any) || !f) {
        const $: any = new (Error as any)(`Incorrect usage of "cherry-pick". Current branch (${((d as any).records as any).currBranch})has no commits`);
        throw ($ as any).hash = {
          text: `cherryPick ${r} ${t}`,
          token: `cherryPick ${r} ${t}`,
          expected: ["cherry-pick abc"]
        }, $;
      }
      const g: any = {
        id: ((((d as any).records as any).seq as any) + ("-" as any) as any) + ((Y as any)() as any),
        message: `cherry-picked ${n?.message} into ${((d as any).records as any).currBranch}`,
        seq: ((d as any).records as any).seq++,
        parents: (((d as any).records as any).head as any) == (null as any) ? [] : [(((d as any).records as any).head as any).id, (n as any).id],
        branch: ((d as any).records as any).currBranch,
        type: (m as any).CHERRY_PICK,
        tags: s ? ((s as any).filter as any)(Boolean) : [`cherry-pick:${(n as any).id}${((n as any).type as any) === ((m as any).MERGE as any) ? `|parent:${o}` : ""}`]
      };
      ((d as any).records as any).head = g, ((((d as any).records as any).commits as any).set as any)((g as any).id, g), ((((d as any).records as any).branches as any).set as any)(((d as any).records as any).currBranch, (g as any).id), ((w as any).debug as any)(((d as any).records as any).branches), ((w as any).debug as any)("in cherryPick");
    }
  }, "cherryPick"),
  ae: any = (h as any)(function (this: any, e: any): any {
    if (e = ((B as any).sanitizeText as any)(e, (S as any)()), ((((d as any).records as any).branches as any).has as any)(e)) {
      ((d as any).records as any).currBranch = e;
      const r: any = ((((d as any).records as any).branches as any).get as any)(((d as any).records as any).currBranch);
      (r as any) === (void 0 as any) || !r ? ((d as any).records as any).head = null : ((d as any).records as any).head = ((((d as any).records as any).commits as any).get as any)(r) ?? null;
    } else {
      const r: any = new (Error as any)(`Trying to checkout branch which is not yet created. (Help try using "branch ${e}")`);
      throw (r as any).hash = {
        text: `checkout ${e}`,
        token: `checkout ${e}`,
        expected: [`branch ${e}`]
      }, r;
    }
  }, "checkout");
function V(this: any, e: any, r: any, t: any): any {
  const s: any = ((e as any).indexOf as any)(r);
  (s as any) === (-1 as any) ? ((e as any).push as any)(t) : ((e as any).splice as any)(s, 1, t);
}
(h as any)(V, "upsert");
function Q(this: any, e: any): any {
  const r: any = ((e as any).reduce as any)((o: any, i: any): any => ((o as any).seq as any) > ((i as any).seq as any) ? o : i, (e as any)[0]);
  let t: any = "";
  ((e as any).forEach as any)(function (this: any, o: any): any {
    (o as any) === (r as any) ? t += "	*" : t += "	|";
  });
  const s: any = [t, (r as any).id, (r as any).seq];
  for (const o in ((d as any).records as any).branches) (((((d as any).records as any).branches as any).get as any)(o) as any) === ((r as any).id as any) && ((s as any).push as any)(o);
  if (((w as any).debug as any)(((s as any).join as any)(" ")), (r as any).parents && (((r as any).parents as any).length as any) == (2 as any) && ((r as any).parents as any)[0] && ((r as any).parents as any)[1]) {
    const o: any = ((((d as any).records as any).commits as any).get as any)(((r as any).parents as any)[0]);
    (V as any)(e, r, o), ((r as any).parents as any)[1] && ((e as any).push as any)(((((d as any).records as any).commits as any).get as any)(((r as any).parents as any)[1]));
  } else {
    if ((((r as any).parents as any).length as any) == (0 as any)) return;
    if (((r as any).parents as any)[0]) {
      const o: any = ((((d as any).records as any).commits as any).get as any)(((r as any).parents as any)[0]);
      (V as any)(e, r, o);
    }
  }
  e = (te as any)(e, (o: any): any => (o as any).id), (Q as any)(e);
}
(h as any)(Q, "prettyPrintCommitHistory");
var Ge: any = (h as any)(function (this: any): any {
    ((w as any).debug as any)(((d as any).records as any).commits);
    const e: any = ((ne as any)() as any)[0];
    (Q as any)([e]);
  }, "prettyPrint"),
  He: any = (h as any)(function (this: any): any {
    ((d as any).reset as any)(), (we as any)();
  }, "clear"),
  Se: any = (h as any)(function (this: any): any {
    return (((((([...((((d as any).records as any).branchConfig as any).values as any)()] as any).map as any)((r: any, t: any): any => ((r as any).order as any) !== (null as any) && ((r as any).order as any) !== (void 0 as any) ? r : {
      ...r,
      order: (parseFloat as any)(`0.${t}`)
    }) as any).sort as any)((r: any, t: any): any => (((r as any).order ?? 0) as any) - (((t as any).order ?? 0) as any)) as any).map as any)(({
      name: r
    }: any): any => ({
      name: r
    }));
  }, "getBranchesAsObjArray"),
  Ae: any = (h as any)(function (this: any): any {
    return ((d as any).records as any).branches;
  }, "getBranches"),
  De: any = (h as any)(function (this: any): any {
    return ((d as any).records as any).commits;
  }, "getCommits"),
  ne: any = (h as any)(function (this: any): any {
    const e: any = [...((((d as any).records as any).commits as any).values as any)()];
    return ((e as any).forEach as any)(function (this: any, r: any): any {
      ((w as any).debug as any)((r as any).id);
    }), ((e as any).sort as any)((r: any, t: any): any => ((r as any).seq as any) - ((t as any).seq as any)), e;
  }, "getCommitsArray"),
  qe: any = (h as any)(function (this: any): any {
    return ((d as any).records as any).currBranch;
  }, "getCurrentBranch"),
  Pe: any = (h as any)(function (this: any): any {
    return ((d as any).records as any).direction;
  }, "getDirection"),
  We: any = (h as any)(function (this: any): any {
    return ((d as any).records as any).head;
  }, "getHead"),
  se: any = {
    commitType: m,
    getConfig: S,
    setDirection: Te,
    setOptions: Le,
    getOptions: Me,
    commit: Re,
    branch: Ie,
    merge: Oe,
    cherryPick: _e,
    checkout: ae,
    prettyPrint: Ge,
    clear: He,
    getBranchesAsObjArray: Se,
    getBranches: Ae,
    getCommits: De,
    getCommitsArray: ne,
    getCurrentBranch: qe,
    getDirection: Pe,
    getHead: We,
    setAccTitle: xe,
    getAccTitle: ye,
    getAccDescription: ue,
    setAccDescription: ge,
    setDiagramTitle: fe,
    getDiagramTitle: $e
  },
  Ne: any = (h as any)((e: any, r: any): any => {
    (he as any)(e, r), (e as any).dir && ((r as any).setDirection as any)((e as any).dir);
    for (const t of (e as any).statements) (Fe as any)(t, r);
  }, "populate"),
  Fe: any = (h as any)((e: any, r: any): any => {
    const s: any = ({
      Commit: (h as any)((o: any): any => ((r as any).commit as any)((ze as any)(o)), "Commit"),
      Branch: (h as any)((o: any): any => ((r as any).branch as any)((Ye as any)(o)), "Branch"),
      Merge: (h as any)((o: any): any => ((r as any).merge as any)((je as any)(o)), "Merge"),
      Checkout: (h as any)((o: any): any => ((r as any).checkout as any)((Ue as any)(o)), "Checkout"),
      CherryPicking: (h as any)((o: any): any => ((r as any).cherryPick as any)((Ke as any)(o)), "CherryPicking")
    } as any)[(e as any).$type];
    s ? (s as any)(e) : ((w as any).error as any)(`Unknown statement type: ${(e as any).$type}`);
  }, "parseStatement"),
  ze: any = (h as any)((e: any): any => ({
    id: (e as any).id,
    msg: (e as any).message ?? "",
    type: ((e as any).type as any) !== (void 0 as any) ? (m as any)[(e as any).type] : (m as any).NORMAL,
    tags: (e as any).tags ?? void 0
  }), "parseCommit"),
  Ye: any = (h as any)((e: any): any => ({
    name: (e as any).name,
    order: (e as any).order ?? 0
  }), "parseBranch"),
  je: any = (h as any)((e: any): any => ({
    branch: (e as any).branch,
    id: (e as any).id ?? "",
    type: ((e as any).type as any) !== (void 0 as any) ? (m as any)[(e as any).type] : void 0,
    tags: (e as any).tags ?? void 0
  }), "parseMerge"),
  Ue: any = (h as any)((e: any): any => (e as any).branch, "parseCheckout"),
  Ke: any = (h as any)((e: any): any => ({
    id: (e as any).id,
    targetId: "",
    tags: ((e as any).tags?.length as any) === (0 as any) ? void 0 : (e as any).tags,
    parent: (e as any).parent
  }), "parseCherryPicking"),
  Ve: any = {
    parse: (h as any)(async (e: any): Promise<any> => {
      const r: any = await (Ee as any)("gitGraph", e);
      ((w as any).debug as any)(r), (Ne as any)(r, se);
    }, "parse")
  },
  O: number = 10,
  _: number = 40,
  L: number = 4,
  R: number = 2,
  G: number = 8,
  j: any = new (Set as any)(["redux", "redux-dark", "redux-color", "redux-dark-color"]),
  X: number = 12,
  Z: any = new (Set as any)(["redux-color", "redux-dark-color"]),
  Xe: any = new (Set as any)(["dark", "redux-dark", "redux-dark-color", "neo-dark"]),
  H: any = (h as any)((e: any, r: any, t: any = !1): any => t && (e as any) > (0 as any) ? (((e as any) - (1 as any) as any) % ((r as any) - (1 as any) as any) as any) + (1 as any) : (e as any) % (r as any), "calcColorIndex"),
  C: any = new (Map as any)(),
  E: any = new (Map as any)(),
  F: number = 30,
  q: any = new (Map as any)(),
  z: any = [],
  I: any = 0,
  y: any = "LR",
  Je: any = (h as any)((): any => {
    ((C as any).clear as any)(), ((E as any).clear as any)(), ((q as any).clear as any)(), I = 0, z = [], y = "LR";
  }, "clear"),
  oe: any = (h as any)((e: any): any => {
    const r: any = ((document as any).createElementNS as any)("http://www.w3.org/2000/svg", "text");
    return ((((typeof e as any) == ("string" as any) ? ((e as any).split as any)(/\\n|\n|<br\s*\/?>/gi) : e) as any).forEach as any)((s: any): any => {
      const o: any = ((document as any).createElementNS as any)("http://www.w3.org/2000/svg", "tspan");
      ((o as any).setAttributeNS as any)("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), ((o as any).setAttribute as any)("dy", "1em"), ((o as any).setAttribute as any)("x", "0"), ((o as any).setAttribute as any)("class", "row"), (o as any).textContent = ((s as any).trim as any)(), ((r as any).appendChild as any)(o);
    }), r;
  }, "drawText"),
  ce: any = (h as any)((e: any): any => {
    let r: any, t: any, s: any;
    return (y as any) === ("BT" as any) ? (t = (h as any)((o: any, i: any): any => (o as any) <= (i as any), "comparisonFunc"), s = (1 as any) / (0 as any)) : (t = (h as any)((o: any, i: any): any => (o as any) >= (i as any), "comparisonFunc"), s = 0), ((e as any).forEach as any)((o: any): any => {
      const i: any = (y as any) === ("TB" as any) || (y as any) == ("BT" as any) ? ((E as any).get as any)(o)?.y : ((E as any).get as any)(o)?.x;
      (i as any) !== (void 0 as any) && (t as any)(i, s) && (r = o, s = i);
    }), r;
  }, "findClosestParent"),
  Qe: any = (h as any)((e: any): any => {
    let r: any = "",
      t: any = (1 as any) / (0 as any);
    return ((e as any).forEach as any)((s: any): any => {
      const o: any = (((E as any).get as any)(s) as any).y;
      (o as any) <= (t as any) && (r = s, t = o);
    }), r || void 0;
  }, "findClosestParentBT"),
  Ze: any = (h as any)((e: any, r: any, t: any): any => {
    let s: any = t,
      o: any = t;
    const i: any = [];
    ((e as any).forEach as any)((n: any): any => {
      const a: any = ((r as any).get as any)(n);
      if (!a) throw new (Error as any)(`Commit not found for key ${n}`);
      ((a as any).parents as any).length ? (s = (rr as any)(a), o = ((Math as any).max as any)(s, o)) : ((i as any).push as any)(a), (tr as any)(a, s);
    }), s = o, ((i as any).forEach as any)((n: any): any => {
      (ar as any)(n, s, t);
    }), ((e as any).forEach as any)((n: any): any => {
      const a: any = ((r as any).get as any)(n);
      if (a?.parents.length) {
        const l: any = (Qe as any)((a as any).parents);
        s = ((((E as any).get as any)(l) as any).y as any) - (_ as any), (s as any) <= (o as any) && (o = s);
        const f: any = (((C as any).get as any)((a as any).branch) as any).pos,
          g: any = (s as any) - (O as any);
        ((E as any).set as any)((a as any).id, {
          x: f,
          y: g
        });
      }
    });
  }, "setParallelBTPos"),
  er: any = (h as any)((e: any): any => {
    const r: any = (ce as any)((((e as any).parents as any).filter as any)((s: any): any => (s as any) !== (null as any)));
    if (!r) throw new (Error as any)(`Closest parent not found for commit ${(e as any).id}`);
    const t: any = ((E as any).get as any)(r)?.y;
    if ((t as any) === (void 0 as any)) throw new (Error as any)(`Closest parent position not found for commit ${(e as any).id}`);
    return t;
  }, "findClosestParentPos"),
  rr: any = (h as any)((e: any): any => ((er as any)(e) as any) + (_ as any), "calculateCommitPosition"),
  tr: any = (h as any)((e: any, r: any): any => {
    const t: any = ((C as any).get as any)((e as any).branch);
    if (!t) throw new (Error as any)(`Branch not found for commit ${(e as any).id}`);
    const s: any = (t as any).pos,
      o: any = (r as any) + (O as any);
    return ((E as any).set as any)((e as any).id, {
      x: s,
      y: o
    }), {
      x: s,
      y: o
    };
  }, "setCommitPosition"),
  ar: any = (h as any)((e: any, r: any, t: any): any => {
    const s: any = ((C as any).get as any)((e as any).branch);
    if (!s) throw new (Error as any)(`Branch not found for commit ${(e as any).id}`);
    const o: any = (r as any) + (t as any),
      i: any = (s as any).pos;
    ((E as any).set as any)((e as any).id, {
      x: i,
      y: o
    });
  }, "setRootPosition"),
  nr: any = (h as any)((e: any, r: any, t: any, s: any, o: any, i: any): any => {
    const {
        theme: n
      }: any = (W as any)(),
      a: any = ((j as any).has as any)(n ?? ""),
      l: any = ((Z as any).has as any)(n ?? ""),
      f: any = ((Xe as any).has as any)(n ?? "");
    if ((i as any) === ((m as any).HIGHLIGHT as any)) ((((((((((((e as any).append as any)("rect") as any).attr as any)("x", (((t as any).x as any) - (10 as any) as any) + ((a ? 3 : 0) as any)) as any).attr as any)("y", (((t as any).y as any) - (10 as any) as any) + ((a ? 3 : 0) as any)) as any).attr as any)("width", a ? 14 : 20) as any).attr as any)("height", a ? 14 : 20) as any).attr as any)("class", `commit ${(r as any).id} commit-highlight${(H as any)(o, G, l)} ${s}-outer`), ((((((((((((e as any).append as any)("rect") as any).attr as any)("x", (((t as any).x as any) - (6 as any) as any) + ((a ? 2 : 0) as any)) as any).attr as any)("y", (((t as any).y as any) - (6 as any) as any) + ((a ? 2 : 0) as any)) as any).attr as any)("width", a ? 8 : 12) as any).attr as any)("height", a ? 8 : 12) as any).attr as any)("class", `commit ${(r as any).id} commit${(H as any)(o, G, l)} ${s}-inner`);else if ((i as any) === ((m as any).CHERRY_PICK as any)) ((((((((((e as any).append as any)("circle") as any).attr as any)("cx", (t as any).x) as any).attr as any)("cy", (t as any).y) as any).attr as any)("r", a ? 7 : 10) as any).attr as any)("class", `commit ${(r as any).id} ${s}`), ((((((((((((e as any).append as any)("circle") as any).attr as any)("cx", ((t as any).x as any) - (3 as any)) as any).attr as any)("cy", ((t as any).y as any) + (2 as any)) as any).attr as any)("r", a ? 2.5 : 2.75) as any).attr as any)("fill", f ? "#000000" : "#fff") as any).attr as any)("class", `commit ${(r as any).id} ${s}`), ((((((((((((e as any).append as any)("circle") as any).attr as any)("cx", ((t as any).x as any) + (3 as any)) as any).attr as any)("cy", ((t as any).y as any) + (2 as any)) as any).attr as any)("r", a ? 2.5 : 2.75) as any).attr as any)("fill", f ? "#000000" : "#fff") as any).attr as any)("class", `commit ${(r as any).id} ${s}`), ((((((((((((((e as any).append as any)("line") as any).attr as any)("x1", ((t as any).x as any) + (3 as any)) as any).attr as any)("y1", ((t as any).y as any) + (1 as any)) as any).attr as any)("x2", (t as any).x) as any).attr as any)("y2", ((t as any).y as any) - (5 as any)) as any).attr as any)("stroke", f ? "#000000" : "#fff") as any).attr as any)("class", `commit ${(r as any).id} ${s}`), ((((((((((((((e as any).append as any)("line") as any).attr as any)("x1", ((t as any).x as any) - (3 as any)) as any).attr as any)("y1", ((t as any).y as any) + (1 as any)) as any).attr as any)("x2", (t as any).x) as any).attr as any)("y2", ((t as any).y as any) - (5 as any)) as any).attr as any)("stroke", f ? "#000000" : "#fff") as any).attr as any)("class", `commit ${(r as any).id} ${s}`);else {
      const g: any = ((e as any).append as any)("circle");
      if (((g as any).attr as any)("cx", (t as any).x), ((g as any).attr as any)("cy", (t as any).y), ((g as any).attr as any)("r", a ? 7 : 10), ((g as any).attr as any)("class", `commit ${(r as any).id} commit${(H as any)(o, G, l)}`), (i as any) === ((m as any).MERGE as any)) {
        const $: any = ((e as any).append as any)("circle");
        (($ as any).attr as any)("cx", (t as any).x), (($ as any).attr as any)("cy", (t as any).y), (($ as any).attr as any)("r", a ? 5 : 6), (($ as any).attr as any)("class", `commit ${s} ${(r as any).id} commit${(H as any)(o, G, l)}`);
      }
      if ((i as any) === ((m as any).REVERSE as any)) {
        const $: any = ((e as any).append as any)("path"),
          c: any = a ? 4 : 5;
        (((($ as any).attr as any)("d", `M ${((t as any).x as any) - (c as any)},${((t as any).y as any) - (c as any)}L${((t as any).x as any) + (c as any)},${((t as any).y as any) + (c as any)}M${((t as any).x as any) - (c as any)},${((t as any).y as any) + (c as any)}L${((t as any).x as any) + (c as any)},${((t as any).y as any) - (c as any)}`) as any).attr as any)("class", `commit ${s} ${(r as any).id} commit${(H as any)(o, G, l)}`);
      }
    }
  }, "drawCommitBullet"),
  sr: any = (h as any)((e: any, r: any, t: any, s: any, o: any): any => {
    if (((r as any).type as any) !== ((m as any).CHERRY_PICK as any) && ((r as any).customId && ((r as any).type as any) === ((m as any).MERGE as any) || ((r as any).type as any) !== ((m as any).MERGE as any)) && (o as any).showCommitLabel) {
      const i: any = ((e as any).append as any)("g"),
        n: any = ((((i as any).insert as any)("rect") as any).attr as any)("class", "commit-label-bkg"),
        a: any = ((((((((((i as any).append as any)("text") as any).attr as any)("x", s) as any).attr as any)("y", ((t as any).y as any) + (25 as any)) as any).attr as any)("class", "commit-label") as any).text as any)((r as any).id),
        l: any = ((a as any).node as any)()?.getBBox();
      if (l && (((((((((n as any).attr as any)("x", (((t as any).posWithOffset as any) - (((l as any).width as any) / (2 as any) as any) as any) - (R as any)) as any).attr as any)("y", ((t as any).y as any) + (13.5 as any)) as any).attr as any)("width", ((l as any).width as any) + ((2 as any) * (R as any) as any)) as any).attr as any)("height", ((l as any).height as any) + ((2 as any) * (R as any) as any)), (y as any) === ("TB" as any) || (y as any) === ("BT" as any) ? (((((n as any).attr as any)("x", ((t as any).x as any) - ((((l as any).width as any) + ((4 as any) * (L as any) as any) as any) + (5 as any) as any)) as any).attr as any)("y", ((t as any).y as any) - (12 as any)), ((((a as any).attr as any)("x", ((t as any).x as any) - (((l as any).width as any) + ((4 as any) * (L as any) as any) as any)) as any).attr as any)("y", (((t as any).y as any) + ((l as any).height as any) as any) - (12 as any))) : ((a as any).attr as any)("x", ((t as any).posWithOffset as any) - (((l as any).width as any) / (2 as any) as any)), (o as any).rotateCommitLabel)) if ((y as any) === ("TB" as any) || (y as any) === ("BT" as any)) ((a as any).attr as any)("transform", (((("rotate(-45, " as any) + ((t as any).x as any) as any) + (", " as any) as any) + ((t as any).y as any) as any) + (")" as any)), ((n as any).attr as any)("transform", (((("rotate(-45, " as any) + ((t as any).x as any) as any) + (", " as any) as any) + ((t as any).y as any) as any) + (")" as any));else {
        const f: any = (-7.5 as any) - (((((l as any).width as any) + (10 as any) as any) / (25 as any) as any) * (9.5 as any) as any),
          g: any = (10 as any) + ((((l as any).width as any) / (25 as any) as any) * (8.5 as any) as any);
        ((i as any).attr as any)("transform", (((((((("translate(" as any) + (f as any) as any) + (", " as any) as any) + (g as any) as any) + (") rotate(-45, " as any) as any) + (s as any) as any) + (", " as any) as any) + ((t as any).y as any) as any) + (")" as any));
      }
    }
  }, "drawCommitLabel"),
  or: any = (h as any)((e: any, r: any, t: any, s: any): any => {
    if ((((r as any).tags as any).length as any) > (0 as any)) {
      let o: any = 0,
        i: any = 0,
        n: any = 0;
      const a: any = [];
      for (const l of (((r as any).tags as any).reverse as any)()) {
        const f: any = ((e as any).insert as any)("polygon"),
          g: any = ((e as any).append as any)("circle"),
          $: any = ((((((((e as any).append as any)("text") as any).attr as any)("y", (((t as any).y as any) - (16 as any) as any) - (o as any)) as any).attr as any)("class", "tag-label") as any).text as any)(l),
          c: any = (($ as any).node as any)()?.getBBox();
        if (!c) throw new (Error as any)("Tag bbox not found");
        i = ((Math as any).max as any)(i, (c as any).width), n = ((Math as any).max as any)(n, (c as any).height), (($ as any).attr as any)("x", ((t as any).posWithOffset as any) - (((c as any).width as any) / (2 as any) as any)), ((a as any).push as any)({
          tag: $,
          hole: g,
          rect: f,
          yOffset: o
        }), o += 20;
      }
      for (const {
        tag: l,
        hole: f,
        rect: g,
        yOffset: $
      } of a) {
        const c: any = (n as any) / (2 as any),
          x: any = (((t as any).y as any) - (19.2 as any) as any) - ($ as any);
        if (((((g as any).attr as any)("class", "tag-label-bkg") as any).attr as any)("points", `
      ${((s as any) - ((i as any) / (2 as any) as any) as any) - ((L as any) / (2 as any) as any)},${(x as any) + (R as any)}  
      ${((s as any) - ((i as any) / (2 as any) as any) as any) - ((L as any) / (2 as any) as any)},${(x as any) - (R as any)}
      ${(((t as any).posWithOffset as any) - ((i as any) / (2 as any) as any) as any) - (L as any)},${((x as any) - (c as any) as any) - (R as any)}
      ${(((t as any).posWithOffset as any) + ((i as any) / (2 as any) as any) as any) + (L as any)},${((x as any) - (c as any) as any) - (R as any)}
      ${(((t as any).posWithOffset as any) + ((i as any) / (2 as any) as any) as any) + (L as any)},${((x as any) + (c as any) as any) + (R as any)}
      ${(((t as any).posWithOffset as any) - ((i as any) / (2 as any) as any) as any) - (L as any)},${((x as any) + (c as any) as any) + (R as any)}`), ((((((((f as any).attr as any)("cy", x) as any).attr as any)("cx", ((s as any) - ((i as any) / (2 as any) as any) as any) + ((L as any) / (2 as any) as any)) as any).attr as any)("r", 1.5) as any).attr as any)("class", "tag-hole"), (y as any) === ("TB" as any) || (y as any) === ("BT" as any)) {
          const u: any = (s as any) + ($ as any);
          ((((((g as any).attr as any)("class", "tag-label-bkg") as any).attr as any)("points", `
        ${(t as any).x},${(u as any) + (2 as any)}
        ${(t as any).x},${(u as any) - (2 as any)}
        ${((t as any).x as any) + (O as any)},${((u as any) - (c as any) as any) - (2 as any)}
        ${((((t as any).x as any) + (O as any) as any) + (i as any) as any) + (4 as any)},${((u as any) - (c as any) as any) - (2 as any)}
        ${((((t as any).x as any) + (O as any) as any) + (i as any) as any) + (4 as any)},${((u as any) + (c as any) as any) + (2 as any)}
        ${((t as any).x as any) + (O as any)},${((u as any) + (c as any) as any) + (2 as any)}`) as any).attr as any)("transform", (((("translate(12,12) rotate(45, " as any) + ((t as any).x as any) as any) + ("," as any) as any) + (s as any) as any) + (")" as any)), ((((((f as any).attr as any)("cx", ((t as any).x as any) + ((L as any) / (2 as any) as any)) as any).attr as any)("cy", u) as any).attr as any)("transform", (((("translate(12,12) rotate(45, " as any) + ((t as any).x as any) as any) + ("," as any) as any) + (s as any) as any) + (")" as any)), ((((((l as any).attr as any)("x", ((t as any).x as any) + (5 as any)) as any).attr as any)("y", (u as any) + (3 as any)) as any).attr as any)("transform", (((("translate(14,14) rotate(45, " as any) + ((t as any).x as any) as any) + ("," as any) as any) + (s as any) as any) + (")" as any));
        }
      }
    }
  }, "drawCommitTags"),
  cr: any = (h as any)((e: any): any => {
    switch ((e as any).customType ?? (e as any).type) {
      case (m as any).NORMAL:
        return "commit-normal";
      case (m as any).REVERSE:
        return "commit-reverse";
      case (m as any).HIGHLIGHT:
        return "commit-highlight";
      case (m as any).MERGE:
        return "commit-merge";
      case (m as any).CHERRY_PICK:
        return "commit-cherry-pick";
      default:
        return "commit-normal";
    }
  }, "getCommitClassType"),
  ir: any = (h as any)((e: any, r: any, t: any, s: any): any => {
    const o: any = {
      x: 0,
      y: 0
    };
    if ((((e as any).parents as any).length as any) > (0 as any)) {
      const i: any = (ce as any)((e as any).parents);
      if (i) {
        const n: any = ((s as any).get as any)(i) ?? o;
        return (r as any) === ("TB" as any) ? ((n as any).y as any) + (_ as any) : (r as any) === ("BT" as any) ? (((((s as any).get as any)((e as any).id) ?? o) as any).y as any) - (_ as any) : ((n as any).x as any) + (_ as any);
      }
    } else return (r as any) === ("TB" as any) ? F : (r as any) === ("BT" as any) ? (((((s as any).get as any)((e as any).id) ?? o) as any).y as any) - (_ as any) : 0;
    return 0;
  }, "calculatePosition"),
  dr: any = (h as any)((e: any, r: any, t: any): any => {
    const s: any = (y as any) === ("BT" as any) && t ? r : (r as any) + (O as any),
      o: any = ((C as any).get as any)((e as any).branch)?.pos,
      i: any = (y as any) === ("TB" as any) || (y as any) === ("BT" as any) ? ((C as any).get as any)((e as any).branch)?.pos : s;
    if ((i as any) === (void 0 as any) || (o as any) === (void 0 as any)) throw new (Error as any)(`Position were undefined for commit ${(e as any).id}`);
    const n: any = ((j as any).has as any)(((W as any)() as any).theme ?? ""),
      a: any = (y as any) === ("TB" as any) || (y as any) === ("BT" as any) ? s : (o as any) + ((n ? ((X as any) / (2 as any) as any) + (1 as any) : -2) as any);
    return {
      x: i,
      y: a,
      posWithOffset: s
    };
  }, "getCommitPosition"),
  re: any = (h as any)((e: any, r: any, t: any, s: any): any => {
    const o: any = ((((e as any).append as any)("g") as any).attr as any)("class", "commit-bullets"),
      i: any = ((((e as any).append as any)("g") as any).attr as any)("class", "commit-labels");
    let n: any = (y as any) === ("TB" as any) || (y as any) === ("BT" as any) ? F : 0;
    const a: any = [...((r as any).keys as any)()],
      l: any = (s as any).parallelCommits ?? !1,
      f: any = (h as any)(($: any, c: any): any => {
        const x: any = ((r as any).get as any)($)?.seq,
          u: any = ((r as any).get as any)(c)?.seq;
        return (x as any) !== (void 0 as any) && (u as any) !== (void 0 as any) ? (x as any) - (u as any) : 0;
      }, "sortKeys");
    let g: any = ((a as any).sort as any)(f);
    (y as any) === ("BT" as any) && (l && (Ze as any)(g, r, n), g = ((g as any).reverse as any)()), ((g as any).forEach as any)(($: any): any => {
      const c: any = ((r as any).get as any)($);
      if (!c) throw new (Error as any)(`Commit not found for key ${$}`);
      l && (n = (ir as any)(c, y, n, E));
      const x: any = (dr as any)(c, n, l);
      if (t) {
        const u: any = (cr as any)(c),
          p: any = (c as any).customType ?? (c as any).type,
          b: any = ((C as any).get as any)((c as any).branch)?.index ?? 0;
        (nr as any)(o, c, x, u, b, p), (sr as any)(i, c, x, n, s), (or as any)(i, c, x, n);
      }
      (y as any) === ("TB" as any) || (y as any) === ("BT" as any) ? ((E as any).set as any)((c as any).id, {
        x: (x as any).x,
        y: (x as any).posWithOffset
      }) : ((E as any).set as any)((c as any).id, {
        x: (x as any).posWithOffset,
        y: (x as any).y
      }), n = (y as any) === ("BT" as any) && l ? (n as any) + (_ as any) : ((n as any) + (_ as any) as any) + (O as any), (n as any) > (I as any) && (I = n);
    });
  }, "drawCommits"),
  lr: any = (h as any)((e: any, r: any, t: any, s: any, o: any): any => {
    const n: any = ((y as any) === ("TB" as any) || (y as any) === ("BT" as any) ? ((t as any).x as any) < ((s as any).x as any) : ((t as any).y as any) < ((s as any).y as any)) ? (r as any).branch : (e as any).branch,
      a: any = (h as any)((f: any): any => ((f as any).branch as any) === (n as any), "isOnBranchToGetCurve"),
      l: any = (h as any)((f: any): any => ((f as any).seq as any) > ((e as any).seq as any) && ((f as any).seq as any) < ((r as any).seq as any), "isBetweenCommits");
    return (([...((o as any).values as any)()] as any).some as any)((f: any): any => (l as any)(f) && (a as any)(f));
  }, "shouldRerouteArrow"),
  P: any = (h as any)((e: any, r: any, t: any = 0): any => {
    const s: any = (e as any) + ((((Math as any).abs as any)((e as any) - (r as any)) as any) / (2 as any) as any);
    if ((t as any) > (5 as any)) return s;
    if (((z as any).every as any)((n: any): any => (((Math as any).abs as any)((n as any) - (s as any)) as any) >= (10 as any))) return ((z as any).push as any)(s), s;
    const i: any = ((Math as any).abs as any)((e as any) - (r as any));
    return (P as any)(e, (r as any) - ((i as any) / (5 as any) as any), (t as any) + (1 as any));
  }, "findLane"),
  hr: any = (h as any)((e: any, r: any, t: any, s: any): any => {
    const {
        theme: o
      }: any = (W as any)(),
      i: any = ((Z as any).has as any)(o ?? ""),
      n: any = ((E as any).get as any)((r as any).id),
      a: any = ((E as any).get as any)((t as any).id);
    if ((n as any) === (void 0 as any) || (a as any) === (void 0 as any)) throw new (Error as any)(`Commit positions not found for commits ${(r as any).id} and ${(t as any).id}`);
    const l: any = (lr as any)(r, t, n, a, s);
    let f: any = "",
      g: any = "",
      $: any = 0,
      c: any = 0,
      x: any = ((C as any).get as any)((t as any).branch)?.index;
    ((t as any).type as any) === ((m as any).MERGE as any) && ((r as any).id as any) !== (((t as any).parents as any)[0] as any) && (x = ((C as any).get as any)((r as any).branch)?.index);
    let u: any;
    if (l) {
      f = "A 10 10, 0, 0, 0,", g = "A 10 10, 0, 0, 1,", $ = 10, c = 10;
      const p: any = ((n as any).y as any) < ((a as any).y as any) ? (P as any)((n as any).y, (a as any).y) : (P as any)((a as any).y, (n as any).y),
        b: any = ((n as any).x as any) < ((a as any).x as any) ? (P as any)((n as any).x, (a as any).x) : (P as any)((a as any).x, (n as any).x);
      (y as any) === ("TB" as any) ? ((n as any).x as any) < ((a as any).x as any) ? u = `M ${(n as any).x} ${(n as any).y} L ${(b as any) - ($ as any)} ${(n as any).y} ${g} ${b} ${((n as any).y as any) + (c as any)} L ${b} ${((a as any).y as any) - ($ as any)} ${f} ${(b as any) + (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}` : (x = ((C as any).get as any)((r as any).branch)?.index, u = `M ${(n as any).x} ${(n as any).y} L ${(b as any) + ($ as any)} ${(n as any).y} ${f} ${b} ${((n as any).y as any) + (c as any)} L ${b} ${((a as any).y as any) - ($ as any)} ${g} ${(b as any) - (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}`) : (y as any) === ("BT" as any) ? ((n as any).x as any) < ((a as any).x as any) ? u = `M ${(n as any).x} ${(n as any).y} L ${(b as any) - ($ as any)} ${(n as any).y} ${f} ${b} ${((n as any).y as any) - (c as any)} L ${b} ${((a as any).y as any) + ($ as any)} ${g} ${(b as any) + (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}` : (x = ((C as any).get as any)((r as any).branch)?.index, u = `M ${(n as any).x} ${(n as any).y} L ${(b as any) + ($ as any)} ${(n as any).y} ${g} ${b} ${((n as any).y as any) - (c as any)} L ${b} ${((a as any).y as any) + ($ as any)} ${f} ${(b as any) - (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}`) : ((n as any).y as any) < ((a as any).y as any) ? u = `M ${(n as any).x} ${(n as any).y} L ${(n as any).x} ${(p as any) - ($ as any)} ${f} ${((n as any).x as any) + (c as any)} ${p} L ${((a as any).x as any) - ($ as any)} ${p} ${g} ${(a as any).x} ${(p as any) + (c as any)} L ${(a as any).x} ${(a as any).y}` : (x = ((C as any).get as any)((r as any).branch)?.index, u = `M ${(n as any).x} ${(n as any).y} L ${(n as any).x} ${(p as any) + ($ as any)} ${g} ${((n as any).x as any) + (c as any)} ${p} L ${((a as any).x as any) - ($ as any)} ${p} ${f} ${(a as any).x} ${(p as any) - (c as any)} L ${(a as any).x} ${(a as any).y}`);
    } else f = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", $ = 20, c = 20, (y as any) === ("TB" as any) ? (((n as any).x as any) < ((a as any).x as any) && (((t as any).type as any) === ((m as any).MERGE as any) && ((r as any).id as any) !== (((t as any).parents as any)[0] as any) ? u = `M ${(n as any).x} ${(n as any).y} L ${(n as any).x} ${((a as any).y as any) - ($ as any)} ${f} ${((n as any).x as any) + (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}` : u = `M ${(n as any).x} ${(n as any).y} L ${((a as any).x as any) - ($ as any)} ${(n as any).y} ${g} ${(a as any).x} ${((n as any).y as any) + (c as any)} L ${(a as any).x} ${(a as any).y}`), ((n as any).x as any) > ((a as any).x as any) && (f = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", $ = 20, c = 20, ((t as any).type as any) === ((m as any).MERGE as any) && ((r as any).id as any) !== (((t as any).parents as any)[0] as any) ? u = `M ${(n as any).x} ${(n as any).y} L ${(n as any).x} ${((a as any).y as any) - ($ as any)} ${g} ${((n as any).x as any) - (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}` : u = `M ${(n as any).x} ${(n as any).y} L ${((a as any).x as any) + ($ as any)} ${(n as any).y} ${f} ${(a as any).x} ${((n as any).y as any) + (c as any)} L ${(a as any).x} ${(a as any).y}`), ((n as any).x as any) === ((a as any).x as any) && (u = `M ${(n as any).x} ${(n as any).y} L ${(a as any).x} ${(a as any).y}`)) : (y as any) === ("BT" as any) ? (((n as any).x as any) < ((a as any).x as any) && (((t as any).type as any) === ((m as any).MERGE as any) && ((r as any).id as any) !== (((t as any).parents as any)[0] as any) ? u = `M ${(n as any).x} ${(n as any).y} L ${(n as any).x} ${((a as any).y as any) + ($ as any)} ${g} ${((n as any).x as any) + (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}` : u = `M ${(n as any).x} ${(n as any).y} L ${((a as any).x as any) - ($ as any)} ${(n as any).y} ${f} ${(a as any).x} ${((n as any).y as any) - (c as any)} L ${(a as any).x} ${(a as any).y}`), ((n as any).x as any) > ((a as any).x as any) && (f = "A 20 20, 0, 0, 0,", g = "A 20 20, 0, 0, 1,", $ = 20, c = 20, ((t as any).type as any) === ((m as any).MERGE as any) && ((r as any).id as any) !== (((t as any).parents as any)[0] as any) ? u = `M ${(n as any).x} ${(n as any).y} L ${(n as any).x} ${((a as any).y as any) + ($ as any)} ${f} ${((n as any).x as any) - (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}` : u = `M ${(n as any).x} ${(n as any).y} L ${((a as any).x as any) + ($ as any)} ${(n as any).y} ${g} ${(a as any).x} ${((n as any).y as any) - (c as any)} L ${(a as any).x} ${(a as any).y}`), ((n as any).x as any) === ((a as any).x as any) && (u = `M ${(n as any).x} ${(n as any).y} L ${(a as any).x} ${(a as any).y}`)) : (((n as any).y as any) < ((a as any).y as any) && (((t as any).type as any) === ((m as any).MERGE as any) && ((r as any).id as any) !== (((t as any).parents as any)[0] as any) ? u = `M ${(n as any).x} ${(n as any).y} L ${((a as any).x as any) - ($ as any)} ${(n as any).y} ${g} ${(a as any).x} ${((n as any).y as any) + (c as any)} L ${(a as any).x} ${(a as any).y}` : u = `M ${(n as any).x} ${(n as any).y} L ${(n as any).x} ${((a as any).y as any) - ($ as any)} ${f} ${((n as any).x as any) + (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}`), ((n as any).y as any) > ((a as any).y as any) && (((t as any).type as any) === ((m as any).MERGE as any) && ((r as any).id as any) !== (((t as any).parents as any)[0] as any) ? u = `M ${(n as any).x} ${(n as any).y} L ${((a as any).x as any) - ($ as any)} ${(n as any).y} ${f} ${(a as any).x} ${((n as any).y as any) - (c as any)} L ${(a as any).x} ${(a as any).y}` : u = `M ${(n as any).x} ${(n as any).y} L ${(n as any).x} ${((a as any).y as any) + ($ as any)} ${g} ${((n as any).x as any) + (c as any)} ${(a as any).y} L ${(a as any).x} ${(a as any).y}`), ((n as any).y as any) === ((a as any).y as any) && (u = `M ${(n as any).x} ${(n as any).y} L ${(a as any).x} ${(a as any).y}`));
    if ((u as any) === (void 0 as any)) throw new (Error as any)("Line definition not found");
    ((((((e as any).append as any)("path") as any).attr as any)("d", u) as any).attr as any)("class", ("arrow arrow" as any) + ((H as any)(x, G, i) as any));
  }, "drawArrow"),
  $r: any = (h as any)((e: any, r: any): any => {
    const t: any = ((((e as any).append as any)("g") as any).attr as any)("class", "commit-arrows");
    (([...((r as any).keys as any)()] as any).forEach as any)((s: any): any => {
      const o: any = ((r as any).get as any)(s);
      (o as any).parents && (((o as any).parents as any).length as any) > (0 as any) && (((o as any).parents as any).forEach as any)((i: any): any => {
        (hr as any)(t, ((r as any).get as any)(i), o, r);
      });
    });
  }, "drawArrows"),
  fr: any = (h as any)((e: any, r: any, t: any, s: any): any => {
    const {
        look: o,
        theme: i,
        themeVariables: n
      }: any = (W as any)(),
      {
        dropShadow: a,
        THEME_COLOR_LIMIT: l
      }: any = n,
      f: any = ((j as any).has as any)(i ?? ""),
      g: any = ((Z as any).has as any)(i ?? ""),
      $: any = ((e as any).append as any)("g");
    ((r as any).forEach as any)((c: any, x: any): any => {
      const u: any = (H as any)(x, f ? l : G, g),
        p: any = ((C as any).get as any)((c as any).name)?.pos;
      if ((p as any) === (void 0 as any)) throw new (Error as any)(`Position not found for branch ${(c as any).name}`);
      const b: any = (y as any) === ("TB" as any) || (y as any) === ("BT" as any) ? p : f ? ((p as any) + ((X as any) / (2 as any) as any) as any) + (1 as any) : (p as any) - (2 as any),
        k: any = (($ as any).append as any)("line");
      ((k as any).attr as any)("x1", 0), ((k as any).attr as any)("y1", b), ((k as any).attr as any)("x2", I), ((k as any).attr as any)("y2", b), ((k as any).attr as any)("class", ("branch branch" as any) + (u as any)), (y as any) === ("TB" as any) ? (((k as any).attr as any)("y1", F), ((k as any).attr as any)("x1", p), ((k as any).attr as any)("y2", I), ((k as any).attr as any)("x2", p)) : (y as any) === ("BT" as any) && (((k as any).attr as any)("y1", I), ((k as any).attr as any)("x1", p), ((k as any).attr as any)("y2", F), ((k as any).attr as any)("x2", p)), ((z as any).push as any)(b);
      const U: any = (c as any).name,
        D: any = (oe as any)(U),
        T: any = (($ as any).insert as any)("rect"),
        M: any = (((((((($ as any).insert as any)("g") as any).attr as any)("class", "branchLabel") as any).insert as any)("g") as any).attr as any)("class", ("label branch-label" as any) + (u as any));
      ((((M as any).node as any)() as any).appendChild as any)(D);
      const v: any = ((D as any).getBBox as any)(),
        ee: any = f ? 0 : 4,
        N: any = f ? 16 : 0,
        A: any = f ? X : 0;
      (o as any) === ("neo" as any) && ((T as any).attr as any)("data-look", "neo"), ((((((((((((((((T as any).attr as any)("class", ("branchLabelBkg label" as any) + (u as any)) as any).attr as any)("style", (o as any) === ("neo" as any) ? `filter:${f ? `url(#${s}-drop-shadow)` : a}` : "") as any).attr as any)("rx", ee) as any).attr as any)("ry", ee) as any).attr as any)("x", ((-(v as any).width as any) - (4 as any) as any) - ((((t as any).rotateCommitLabel as any) === (!0 as any) ? 30 : 0) as any)) as any).attr as any)("y", ((-(v as any).height as any) / (2 as any) as any) + (10 as any)) as any).attr as any)("width", (((v as any).width as any) + (18 as any) as any) + (N as any)) as any).attr as any)("height", (((v as any).height as any) + (4 as any) as any) + (A as any)), ((M as any).attr as any)("transform", (((("translate(" as any) + ((((-(v as any).width as any) - (14 as any) as any) - ((((t as any).rotateCommitLabel as any) === (!0 as any) ? 30 : 0) as any) as any) + ((N as any) / (2 as any) as any) as any) as any) + (", " as any) as any) + (((b as any) - (((v as any).height as any) / (2 as any) as any) as any) - (2 as any) as any) as any) + (")" as any)), (y as any) === ("TB" as any) ? (((((T as any).attr as any)("x", ((p as any) - (((v as any).width as any) / (2 as any) as any) as any) - (10 as any)) as any).attr as any)("y", 0), ((M as any).attr as any)("transform", (("translate(" as any) + (((p as any) - (((v as any).width as any) / (2 as any) as any) as any) - (5 as any) as any) as any) + (", 0)" as any)), f && (((T as any).attr as any)("transform", `translate(${((-N as any) / (2 as any) as any) - (3 as any)}, ${(-A as any) - (10 as any)})`), ((M as any).attr as any)("transform", (((("translate(" as any) + (((p as any) - (((v as any).width as any) / (2 as any) as any) as any) - (5 as any) as any) as any) + (", " as any) as any) + (((-A as any) * (2 as any) as any) + (7 as any) as any) as any) + (")" as any)))) : (y as any) === ("BT" as any) ? (((((T as any).attr as any)("x", ((p as any) - (((v as any).width as any) / (2 as any) as any) as any) - (10 as any)) as any).attr as any)("y", I), ((M as any).attr as any)("transform", (((("translate(" as any) + (((p as any) - (((v as any).width as any) / (2 as any) as any) as any) - (5 as any) as any) as any) + (", " as any) as any) + (I as any) as any) + (")" as any)), f && (((T as any).attr as any)("transform", `translate(${((-N as any) / (2 as any) as any) - (3 as any)}, ${(A as any) + (10 as any)})`), ((M as any).attr as any)("transform", (((("translate(" as any) + (((p as any) - (((v as any).width as any) / (2 as any) as any) as any) - (5 as any) as any) as any) + (", " as any) as any) + (((I as any) + ((A as any) * (2 as any) as any) as any) + (4 as any) as any) as any) + (")" as any)))) : ((T as any).attr as any)("transform", (("translate(-19, " as any) + (((b as any) - (12 as any) as any) - ((A as any) / (2 as any) as any) as any) as any) + (")" as any));
    });
  }, "drawBranches"),
  gr: any = (h as any)(function (this: any, e: any, r: any, t: any, s: any, o: any): any {
    return ((C as any).set as any)(e, {
      pos: r,
      index: t
    }), r += ((50 as any) + ((o ? 40 : 0) as any) as any) + (((y as any) === ("TB" as any) || (y as any) === ("BT" as any) ? ((s as any).width as any) / (2 as any) : 0) as any), r;
  }, "setBranchPosition"),
  ur: any = (h as any)(function (this: any, e: any, r: any, t: any, s: any): any {
    (Je as any)(), ((w as any).debug as any)("in gitgraph renderer", (e as any) + (`
` as any), "id:", r, t);
    const o: any = (s as any).db;
    if (!(o as any).getConfig) {
      ((w as any).error as any)("getConfig method is not available on db");
      return;
    }
    const i: any = ((o as any).getConfig as any)(),
      n: any = (i as any).rotateCommitLabel ?? !1;
    q = ((o as any).getCommits as any)();
    const a: any = ((o as any).getBranchesAsObjArray as any)();
    y = ((o as any).getDirection as any)();
    const l: any = (me as any)(`[id="${r}"]`),
      {
        look: f,
        theme: g,
        themeVariables: $
      }: any = (W as any)(),
      {
        useGradient: c,
        gradientStart: x,
        gradientStop: u,
        filterColor: p
      }: any = $;
    if (c) {
      const k: any = ((((((((((((((((l as any).append as any)("defs") as any).append as any)("linearGradient") as any).attr as any)("id", (r as any) + ("-gradient" as any)) as any).attr as any)("gradientUnits", "objectBoundingBox") as any).attr as any)("x1", "0%") as any).attr as any)("y1", "0%") as any).attr as any)("x2", "100%") as any).attr as any)("y2", "0%");
      ((((((((k as any).append as any)("stop") as any).attr as any)("offset", "0%") as any).attr as any)("stop-color", x) as any).attr as any)("stop-opacity", 1), ((((((((k as any).append as any)("stop") as any).attr as any)("offset", "100%") as any).attr as any)("stop-color", u) as any).attr as any)("stop-opacity", 1);
    }
    (f as any) === ("neo" as any) && ((j as any).has as any)(g ?? "") && ((((((((((((((((((((((l as any).append as any)("defs") as any).append as any)("filter") as any).attr as any)("id", (r as any) + ("-drop-shadow" as any)) as any).attr as any)("height", "130%") as any).attr as any)("width", "130%") as any).append as any)("feDropShadow") as any).attr as any)("dx", "4") as any).attr as any)("dy", "4") as any).attr as any)("stdDeviation", 0) as any).attr as any)("flood-opacity", "0.06") as any).attr as any)("flood-color", p);
    let b: any = 0;
    ((a as any).forEach as any)((k: any, U: any): any => {
      const D: any = (oe as any)((k as any).name),
        T: any = ((l as any).append as any)("g"),
        K: any = ((((T as any).insert as any)("g") as any).attr as any)("class", "branchLabel"),
        M: any = ((((K as any).insert as any)("g") as any).attr as any)("class", "label branch-label");
      ((M as any).node as any)()?.appendChild(D);
      const v: any = ((D as any).getBBox as any)();
      b = (gr as any)((k as any).name, b, U, v, n), ((M as any).remove as any)(), ((K as any).remove as any)(), ((T as any).remove as any)();
    }), (re as any)(l, q, !1, i), (i as any).showBranches && (fr as any)(l, a, i, r), ($r as any)(l, q), (re as any)(l, q, !0, i), ((pe as any).insertTitle as any)(l, "gitTitleText", (i as any).titleTopMargin ?? 0, ((o as any).getDiagramTitle as any)()), (be as any)(void 0, l, (i as any).diagramPadding, (i as any).useMaxWidth);
  }, "draw"),
  yr: any = {
    draw: ur
  },
  ie: number = 8,
  de: any = new (Set as any)(["redux", "redux-dark", "redux-color", "redux-dark-color"]),
  xr: any = new (Set as any)(["redux-color", "redux-dark-color"]),
  mr: any = new (Set as any)(["neo", "neo-dark"]),
  pr: any = new (Set as any)(["dark", "redux-dark", "redux-dark-color", "neo-dark"]),
  br: any = new (Set as any)(["redux", "redux-dark", "redux-color", "redux-dark-color", "neo", "neo-dark"]),
  wr: any = (h as any)((e: any): any => {
    const {
      svgId: r
    }: any = e;
    let t: any = "";
    if ((e as any).useGradient && r) for (let s: any = 0; (s as any) < ((e as any).THEME_COLOR_LIMIT as any); s++) t += `
      .label${s}  { fill: ${(e as any).mainBkg}; stroke: url(${r}-gradient); stroke-width: ${(e as any).strokeWidth};}
             `;
    return t;
  }, "genGitGraphGradient"),
  kr: any = (h as any)((e: any): any => {
    const r: any = (J as any)(),
      {
        theme: t,
        themeVariables: s
      }: any = r,
      {
        borderColorArray: o
      }: any = s,
      i: any = ((de as any).has as any)(t);
    if (((mr as any).has as any)(t)) {
      let n: any = "";
      for (let a: any = 0; (a as any) < ((e as any).THEME_COLOR_LIMIT as any); a++) if ((a as any) === (0 as any)) n += `
        .branch-label${a} { fill: ${(e as any).nodeBorder};}
        .commit${a} { stroke: ${(e as any).nodeBorder};   }
        .commit-highlight${a} { stroke: ${(e as any).nodeBorder}; fill: ${(e as any).nodeBorder}; }
        .arrow${a} { stroke: ${(e as any).nodeBorder}; }
        .commit-bullets { fill: ${(e as any).nodeBorder}; }
        .commit-cherry-pick${a} { stroke: ${(e as any).nodeBorder}; }
        ${(wr as any)(e)}`;else {
        const l: any = (a as any) % (ie as any);
        n += `
        .branch-label${a} { fill: ${(e as any)[("gitBranchLabel" as any) + (l as any)]}; }
        .commit${a} { stroke: ${(e as any)[("git" as any) + (l as any)]}; fill: ${(e as any)[("git" as any) + (l as any)]}; }
        .commit-highlight${a} { stroke: ${(e as any)[("gitInv" as any) + (l as any)]}; fill: ${(e as any)[("gitInv" as any) + (l as any)]}; }
        .arrow${a} { stroke: ${(e as any)[("git" as any) + (l as any)]}; }
        `;
      }
      return n;
    } else if (((xr as any).has as any)(t)) {
      let n: any = "";
      for (let a: any = 0; (a as any) < ((e as any).THEME_COLOR_LIMIT as any); a++) if ((a as any) === (0 as any)) n += `
        .branch-label${a} { fill: ${(e as any).nodeBorder}; ${i ? `font-weight:${(e as any).noteFontWeight}` : ""} }
        .commit${a} { stroke: ${(e as any).nodeBorder}; }
        .commit-highlight${a} { stroke: ${(e as any).nodeBorder}; fill: ${(e as any).mainBkg}; }
        .label${a}  { fill: ${(e as any).mainBkg}; stroke: ${(e as any).nodeBorder}; stroke-width: ${(e as any).strokeWidth}; ${i ? `font-weight:${(e as any).noteFontWeight}` : ""} }
        .arrow${a} { stroke: ${(e as any).nodeBorder}; }
        .commit-bullets { fill: ${(e as any).nodeBorder}; }
        `;else {
        const l: any = (a as any) % ((o as any).length as any);
        n += `
        .branch-label${a} { fill: ${(e as any).nodeBorder}; ${i ? `font-weight:${(e as any).noteFontWeight}` : ""} }
        .commit${a} { stroke: ${(o as any)[l]}; fill: ${(o as any)[l]}; }
        .commit-highlight${a} { stroke: ${(o as any)[l]}; fill: ${(o as any)[l]}; }
        .label${a}  { fill: ${((pr as any).has as any)(t) ? (e as any).mainBkg : (o as any)[l]}; stroke: ${(o as any)[l]};  stroke-width: ${(e as any).strokeWidth}; }
        .arrow${a} { stroke: ${(o as any)[l]}; }
        `;
      }
      return n;
    } else {
      let n: any = "";
      for (let a: any = 0; (a as any) < ((e as any).THEME_COLOR_LIMIT as any); a++) n += `
        .branch-label${a} { fill: ${(e as any).nodeBorder}; ${i ? `font-weight:${(e as any).noteFontWeight}` : ""} }
        .commit${a} { stroke: ${(e as any).nodeBorder};   }
        .commit-highlight${a} { stroke: ${(e as any).nodeBorder}; fill: ${(e as any).nodeBorder}; }
        .label${a}  { fill: ${(e as any).mainBkg}; stroke: ${(e as any).nodeBorder}; stroke-width: ${(e as any).strokeWidth}; ${i ? `font-weight:${(e as any).noteFontWeight}` : ""}}
        .arrow${a} { stroke: ${(e as any).nodeBorder}; }
        .commit-bullets { fill: ${(e as any).nodeBorder}; }
        .commit-cherry-pick${a} { stroke: ${(e as any).nodeBorder}; }
        `;
      return n;
    }
  }, "genColor"),
  vr: any = (h as any)((e: any): any => `${((((((Array as any).from as any)({
    length: (e as any).THEME_COLOR_LIMIT
  }, (r: any, t: any): any => t) as any).map as any)((r: any): any => {
    const t: any = (r as any) % (ie as any);
    return `
        .branch-label${r} { fill: ${(e as any)[("gitBranchLabel" as any) + (t as any)]}; }
        .commit${r} { stroke: ${(e as any)[("git" as any) + (t as any)]}; fill: ${(e as any)[("git" as any) + (t as any)]}; }
        .commit-highlight${r} { stroke: ${(e as any)[("gitInv" as any) + (t as any)]}; fill: ${(e as any)[("gitInv" as any) + (t as any)]}; }
        .label${r}  { fill: ${(e as any)[("git" as any) + (t as any)]}; }
        .arrow${r} { stroke: ${(e as any)[("git" as any) + (t as any)]}; }
        `;
  }) as any).join as any)(`
`)}`, "normalTheme"),
  Cr: any = (h as any)((e: any): any => {
    const r: any = (J as any)(),
      {
        theme: t
      }: any = r,
      s: any = ((br as any).has as any)(t);
    return `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  
  ${s ? (kr as any)(e) : (vr as any)(e)}

  .branch {
    stroke-width: ${(e as any).strokeWidth};
    stroke: ${(e as any).commitLineColor ?? (e as any).lineColor};
    stroke-dasharray:  ${s ? "4 2" : "2"};
  }
  .commit-label { font-size: ${(e as any).commitLabelFontSize}; fill: ${s ? (e as any).nodeBorder : (e as any).commitLabelColor}; ${s ? `font-weight:${(e as any).noteFontWeight};` : ""}}
  .commit-label-bkg { font-size: ${(e as any).commitLabelFontSize}; fill: ${s ? "transparent" : (e as any).commitLabelBackground}; opacity: ${s ? "" : .5};  }
  .tag-label { font-size: ${(e as any).tagLabelFontSize}; fill: ${(e as any).tagLabelColor};}
  .tag-label-bkg { fill: ${s ? (e as any).mainBkg : (e as any).tagLabelBackground}; stroke: ${s ? (e as any).nodeBorder : (e as any).tagLabelBorder}; ${s ? `filter:${(e as any).dropShadow}` : ""}  }
  .tag-hole { fill: ${(e as any).textColor}; }

  .commit-merge {
    stroke: ${s ? (e as any).mainBkg : (e as any).primaryColor};
    fill: ${s ? (e as any).mainBkg : (e as any).primaryColor};
  }
  .commit-reverse {
    stroke: ${s ? (e as any).mainBkg : (e as any).primaryColor};
    fill: ${s ? (e as any).mainBkg : (e as any).primaryColor};
    stroke-width: ${s ? (e as any).strokeWidth : 3};
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${s ? (e as any).mainBkg : (e as any).primaryColor};
    fill: ${s ? (e as any).mainBkg : (e as any).primaryColor};
  }

  .arrow {
    /* Intentional: neo themes keep the bold 8px arrow (like classic themes); only redux-geometry themes use the thinner options.strokeWidth. */
    stroke-width: ${((de as any).has as any)(t) ? (e as any).strokeWidth : 8};
    stroke-linecap: round;
    fill: none
  }
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${(e as any).textColor};
  }
`;
  }, "getStyles"),
  Er: any = Cr,
  Ir: any = {
    parser: Ve,
    db: se,
    renderer: yr,
    styles: Er
  };
export { Ir as diagram };
//# debugId=8db49cbf-6973-4a3c-83ea-d44c240ac41e
