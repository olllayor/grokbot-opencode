declare var __dirname: any;
declare var global: any;
declare var key: any;
declare var process: any;
declare var require: any;
declare var self: any;
declare var window: any;
"use strict";

!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "edb1de3a-02f0-4e0d-b820-119c2033a964", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-edb1de3a-02f0-4e0d-b820-119c2033a964");
  } catch (e: any) {}
} as any)();
"use strict";
var ie: any = (Object as any).create;
var L: any = (Object as any).defineProperty;
var ae: any = (Object as any).getOwnPropertyDescriptor;
var se: any = (Object as any).getOwnPropertyNames;
var ce: any = (Object as any).getPrototypeOf,
  le: any = ((Object as any).prototype as any).hasOwnProperty;
var ue: any = (e: any, t: any, r: any, n: any): any => {
  if (t && (typeof t as any) == ("object" as any) || (typeof t as any) == ("function" as any)) for (let o of (se as any)(t)) !((le as any).call as any)(e, o) && (o as any) !== (r as any) && (L as any)(e, o, {
    get: (): any => (t as any)[o],
    enumerable: !(n = (ae as any)(t, o)) || (n as any).enumerable
  });
  return e;
};
var m: any = (e: any, t: any, r: any): any => (r = (e as any) != (null as any) ? (ie as any)((ce as any)(e)) : {}, (ue as any)(t || !e || !(e as any).__esModule ? (L as any)(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));
var re: any = (m as any)((require as any)("node:path"));
var S: any = (require as any)("node:path");
function de(this: any, e: any, t: any): any {
  let r: any = new (Set as any)(),
    n: any = e;
  for (; (n as any) != (null as any) && (typeof n as any) == ("object" as any) && !((r as any).has as any)(n);) {
    ((r as any).add as any)(n);
    let o: any = (n as any).code;
    if ((typeof o as any) == ("string" as any) && ((t as any).test as any)(o)) return o;
    n = (n as any).cause;
  }
}
function y(this: any, e: any): any {
  return (de as any)(e, /^E[A-Z_]+$/);
}
var fe: string = "SAND_USER_DATA_DIR",
  pe: string = "sand-data",
  M: string = "--user-data-dir",
  b: string = "/home/box",
  ut: any = `${b}/${pe}`,
  dt: any = `${b}/agent-data`;
function me(this: any, e: any): any {
  for (let t: any = 0; (t as any) < ((e as any).length as any); t++) {
    let r: any = (e as any)[t];
    if ((r as any) === (M as any)) {
      let o: any = (e as any)[(t as any) + (1 as any)];
      return (o as any) != (null as any) && !((o as any).startsWith as any)("--") ? o : null;
    }
    let n: any = `${M}=`;
    if (((r as any).startsWith as any)(n)) return ((r as any).slice as any)((n as any).length);
  }
  return null;
}
function F(this: any, e: any = [], t: any = (process as any).env, r: any = ((process as any).cwd as any)()): any {
  let o: any = ((me as any)(e) ?? (t as any)[fe])?.trim();
  return (o as any) == (null as any) || ((o as any).length as any) === (0 as any) ? null : ((void 0, (S as any).isAbsolute) as any)(o) ? o : ((void 0, (S as any).resolve) as any)(r, o);
}
var ne: any = (require as any)("electron");
var I: any = class extends (Error as any) {
    declare name: any;
    [key: string]: any;
    constructor(t: any) {
      super(t), (this as any).name = "SandInvariantViolation";
    }
  },
  k: any = null;
var Se: string = "Invariant violation (message stripped in packaged builds; the stack identifies the site)";
function _e(this: any): any {
  return !0;
}
var Ee: any = /^at /;
function he(this: any, e: any): any {
  let t: any = (e as any).stack;
  if ((typeof t as any) != ("string" as any) || !((t as any).startsWith as any)((v as any)(e))) return null;
  for (let r of ((((t as any).slice as any)(((v as any)(e) as any).length) as any).split as any)(`
`)) {
    let n: any = ((r as any).trim as any)();
    if (((Ee as any).test as any)(n)) return n;
  }
  return null;
}
function v(this: any, e: any): any {
  return ((e as any).message as any) === ("" as any) ? (e as any).name : `${(e as any).name}: ${(e as any).message}`;
}
function _(this: any, e: any, t: any): any {
  e || (ge as any)(t, _);
}
function ge(this: any, e: any, t: any): any {
  let r: any;
  (_e as any)() ? r = Se : (typeof e as any) == ("function" as any) ? r = (e as any)() : r = e;
  let n: any = new (I as any)(r),
    o: any = null;
  throw "captureStackTrace" in Error && (typeof (Error as any).captureStackTrace as any) == ("function" as any) && (((Error as any).captureStackTrace as any)(n, t), (k as any) !== (null as any) && (o = (he as any)(n))), k?.({
    name: (n as any).name,
    frame: o
  }), n;
}
var w: any = (require as any)("node:fs"),
  h: any = (require as any)("node:fs/promises"),
  T: any = (m as any)((require as any)("node:module"), 1),
  f: any = (m as any)((require as any)("node:path"), 1),
  D: any = (m as any)((require as any)("node:vm"), 1);
var B: any = (require as any)("node:crypto"),
  W: any = (m as any)((require as any)("node:fs"), 1),
  c: any = (require as any)("node:path"),
  d: any = (require as any)("node:util"),
  ye: any = {
    "target-link": "a symbolic link at the target path",
    "parent-link": "a symbolic link at the parent path",
    "not-a-file": "a non-regular file at the target path"
  },
  E: any = class extends (Error as any) {
    declare path: any;
    declare reason: any;
    declare name: any;
    [key: string]: any;
    constructor(t: any, r: any) {
      super(`refused ${(ye as any)[t]} ${r}`), (this as any).name = "NoFollowRefusedError", (this as any).reason = t, (this as any).path = r;
    }
  },
  s: any = (typeof (process as any).getBuiltinModule as any) == ("function" as any) ? ((process as any).getBuiltinModule as any)("node:fs") : (W as any).default,
  {
    O_RDONLY: x,
    O_WRONLY: Ae,
    O_CREAT: Re,
    O_EXCL: Te,
    O_DIRECTORY: G = 0,
    O_NOFOLLOW: P = 0,
    O_NONBLOCK: Ce = 0
  }: any = (s as any).constants,
  Ie: any = (((((Ae as any) | (Re as any)) as any) | (Te as any)) as any) | (P as any),
  St: any = (((x as any) | (P as any)) as any) | (Ce as any),
  Oe: any = (((x as any) | (G as any)) as any) | (P as any),
  xe: number = 438,
  Pe: number = 384;
var Ne: any = (2 as any) ** (32 as any),
  O: any = new (Map as any)();
async function V(this: any, e: any, t: any, r: any = {}): Promise<any> {
  let {
    noFollow: n
  }: any = r;
  (n as any) === (void 0 as any) && (We as any)(e);
  let o: any = (Be as any)(((void 0, (c as any).resolve) as any)(e));
  await (o as any).ready;
  try {
    (n as any) === (void 0 as any) ? await ($ as any)(await (Le as any)(e, (r as any).mode), t) : await (De as any)((be as any)(e, (n as any).root, !0), t, (r as any).mode);
  } finally {
    ((o as any).leave as any)();
  }
}
var we: any = /^(.+)\.\d{1,10}$/;
function j(this: any, e: any): any {
  return ((we as any).exec as any)(e)?.[1];
}
async function $(this: any, {
  temp: e,
  target: t,
  mode: r,
  checkTarget: n
}: any, o: any): Promise<any> {
  let i: any = await (((void 0, (d as any).promisify) as any)((s as any).open) as any)(e, Ie, r ?? xe);
  try {
    try {
      await (((void 0, (d as any).promisify) as any)((s as any).writeFile) as any)(i, o), (r as any) !== (void 0 as any) && (await (((((void 0, (d as any).promisify) as any)((s as any).fchmod) as any)(i, r) as any).catch as any)(je)), await (((void 0, (d as any).promisify) as any)((s as any).fsync) as any)(i);
    } finally {
      await (((void 0, (d as any).promisify) as any)((s as any).close) as any)(i);
    }
    n?.(), await (((void 0, (d as any).promisify) as any)((s as any).rename) as any)(e, t);
  } catch (a: any) {
    throw await (((void 0, (d as any).promisify) as any)((s as any).rm) as any)(e, {
      force: !0
    }), a;
  }
}
async function De(this: any, e: any, t: any, r: any): Promise<any> {
  try {
    await ($ as any)((Me as any)(e, r), t);
  } finally {
    ((e as any).close as any)();
  }
}
async function Le(this: any, e: any, t: any): Promise<any> {
  let r: any = await (Ge as any)(e),
    n: any = t ?? (await (Ve as any)(r));
  return {
    temp: (X as any)(r),
    target: r,
    mode: n
  };
}
function Me(this: any, e: any, t: any): any {
  let r: any = ((e as any).entry as any)((e as any).name);
  return (U as any)(e), {
    temp: (X as any)(r),
    target: r,
    mode: t ?? Pe,
    checkTarget: (): any => (U as any)(e)
  };
}
function U(this: any, e: any): any {
  if ((((s as any).lstatSync as any)(((e as any).entry as any)((e as any).name), {
    throwIfNoEntry: !1
  })?.isSymbolicLink() as any) === (!0 as any)) throw new (E as any)("target-link", (e as any).shown);
}
function be(this: any, e: any, t: any, r: any): any {
  let n: any = ((void 0, (c as any).resolve) as any)(t),
    o: any = ((void 0, (c as any).resolve) as any)(e),
    i: any = ((void 0, (c as any).relative) as any)(n, o);
  if ((i as any) === ("" as any) || (i as any) === (".." as any) || ((i as any).startsWith as any)(`..${(c as any).sep}`) || ((void 0, (c as any).isAbsolute) as any)(i)) throw new (RangeError as any)(`${o} is not below the no-follow root ${n}`);
  r && ((s as any).mkdirSync as any)(n, {
    recursive: !0
  });
  let a: any = (((void 0, (c as any).dirname) as any)(i) as any) === ("." as any) ? [] : ((((void 0, (c as any).dirname) as any)(i) as any).split as any)((c as any).sep);
  return {
    ...((((process as any).platform as any) === ("linux" as any) ? Fe : ve) as any)(n, a, r),
    name: ((void 0, (c as any).basename) as any)(i),
    shown: o
  };
}
function Fe(this: any, e: any, t: any, r: any): any {
  let n: any = ((s as any).openSync as any)(e, (x as any) | (G as any)),
    o: any = e;
  try {
    for (let a of t) {
      o = ((void 0, (c as any).join) as any)(o, a);
      let u: any = (ke as any)((H as any)(n, a), o, r);
      ((s as any).closeSync as any)(n), n = u;
    }
  } catch (a: any) {
    throw ((s as any).closeSync as any)(n), a;
  }
  let i: any = n;
  return {
    entry: (a: any): any => (H as any)(i, a),
    close: (): any => ((s as any).closeSync as any)(i)
  };
}
function H(this: any, e: any, t: any): any {
  return `/proc/self/fd/${e}/${t}`;
}
function ke(this: any, e: any, t: any, r: any): any {
  r && (K as any)(e);
  try {
    return ((s as any).openSync as any)(e, Oe);
  } catch (n: any) {
    throw (Ue as any)(n, e, t);
  }
}
function ve(this: any, e: any, t: any, r: any): any {
  let n: any = ((t as any).reduce as any)((o: any, i: any): any => {
    let a: any = ((void 0, (c as any).join) as any)(o, i);
    if (r && (K as any)(a), (((s as any).lstatSync as any)(a, {
      throwIfNoEntry: !1
    })?.isSymbolicLink() as any) === (!0 as any)) throw new (E as any)("parent-link", a);
    return a;
  }, e);
  return {
    entry: (o: any): any => ((void 0, (c as any).join) as any)(n, o),
    close: (): any => {}
  };
}
function K(this: any, e: any): any {
  try {
    ((s as any).mkdirSync as any)(e);
  } catch (t: any) {
    if (((R as any)(t) as any) !== ("EEXIST" as any)) throw t;
  }
}
function Ue(this: any, e: any, t: any, r: any): any {
  let n: any = (R as any)(e);
  return (n as any) === ("ELOOP" as any) || (n as any) === ("ENOTDIR" as any) && !(He as any)(t) ? new (E as any)("parent-link", r) : e;
}
function He(this: any, e: any): any {
  let t: any = ((s as any).lstatSync as any)(e, {
    throwIfNoEntry: !1
  });
  return (t as any) !== (void 0 as any) && !((t as any).isSymbolicLink as any)() && !((t as any).isDirectory as any)();
}
function Be(this: any, e: any): any {
  let t: any = ((O as any).get as any)(e) ?? [];
  ((O as any).set as any)(e, t);
  let r: any = new (Promise as any)((n: any): any => {
    ((t as any).push as any)(n);
  });
  return ((t as any).length as any) === (1 as any) && (t as any)[0]?.(), {
    ready: r,
    leave: (): any => {
      ((t as any).shift as any)(), ((t as any).length as any) === (0 as any) ? ((O as any).delete as any)(e) : (t as any)[0]?.();
    }
  };
}
function We(this: any, e: any): any {
  ((s as any).mkdirSync as any)(((void 0, (c as any).dirname) as any)(e), {
    recursive: !0
  });
}
function X(this: any, e: any): any {
  return `${e}.${((void 0, (B as any).randomInt) as any)(Ne)}`;
}
async function Ge(this: any, e: any): Promise<any> {
  try {
    return await (((void 0, (d as any).promisify) as any)((s as any).realpath) as any)(e);
  } catch (t: any) {
    if ((Y as any)(t)) return e;
    throw t;
  }
}
async function Ve(this: any, e: any): Promise<any> {
  try {
    return ((await (((void 0, (d as any).promisify) as any)((s as any).stat) as any)(e)) as any).mode;
  } catch (t: any) {
    if ((Y as any)(t)) return;
    throw t;
  }
}
function R(this: any, e: any): any {
  return e instanceof Error && "code" in e && (typeof (e as any).code as any) == ("string" as any) ? (e as any).code : void 0;
}
function Y(this: any, e: any): any {
  return ((R as any)(e) as any) === ("ENOENT" as any);
}
function je(this: any, e: any): any {
  let t: any = (R as any)(e);
  if (!((t as any) === ("ENOSYS" as any) || (((process as any).getuid as any) === (void 0 as any) || (((process as any).getuid as any)() as any) !== (0 as any)) && ((t as any) === ("EINVAL" as any) || (t as any) === ("EPERM" as any)))) throw e;
}
var z: any = (m as any)((require as any)("node:fs"), 1);
var At: any = (typeof (process as any).getBuiltinModule as any) == ("function" as any) ? ((process as any).getBuiltinModule as any)("node:fs") : (z as any).default;
function N(this: any, e: any): any {
  try {
    return {
      ok: !0,
      value: (e as any)()
    };
  } catch (t: any) {
    return {
      ok: !1,
      error: t
    };
  }
}
function J(this: any, e: any): any {
  return e instanceof Error ? (((e as any).name as any).length as any) > (0 as any) ? (e as any).name : "Error" : typeof e;
}
var $e: number = 2,
  Ke: any = (3600 as any) * (1e3 as any),
  Xe: any = /\.v8$/;
function Z(this: any, e: any): any {
  return (((f as any).default as any).join as any)(e, "v8-code-cache");
}
function q(this: any, {
  cacheDir: e,
  bundleName: t,
  buildId: r
}: any): any {
  return (((f as any).default as any).format as any)({
    dir: e,
    name: `${t}-${r}`,
    ext: ".v8"
  });
}
function Ye(this: any, e: any): any {
  return (((f as any).default as any).basename as any)(e, (((f as any).default as any).extname as any)(e));
}
function Q(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && "reportMainCodeCache" in e && (typeof (e as any).reportMainCodeCache as any) == ("function" as any);
}
function ee(this: any, e: any): any {
  let {
      bundlePath: t,
      cacheDir: r,
      buildId: n
    }: any = e,
    o: any = (Ye as any)(t),
    i: any = (N as any)((): any => ((void 0, (w as any).readFileSync) as any)((q as any)({
      cacheDir: r,
      bundleName: o,
      buildId: n
    }))),
    a: any = new (((D as any).default as any).Script as any)((ze as any)(((void 0, (w as any).readFileSync) as any)(t, "utf8")), {
      filename: t,
      cachedData: (i as any).ok ? (i as any).value : void 0,
      importModuleDynamically: (((D as any).default as any).constants as any).USE_MAIN_CONTEXT_DEFAULT_LOADER
    }),
    u: any = new ((T as any).default as any)(t);
  (u as any).filename = t;
  let A: any = ((a as any).runInThisContext as any)();
  return (_ as any)((typeof A as any) == ("function" as any), "The CommonJS wrapper did not evaluate to a function."), ((A as any).call as any)((u as any).exports, (u as any).exports, ((void 0, (T as any).createRequire) as any)(t), u, t, (((f as any).default as any).dirname as any)(t)), (u as any).loaded = !0, {
    exports: (u as any).exports,
    codeCache: {
      read: (Je as any)(i, (a as any).cachedDataRejected),
      persist: (C: any): any => (qe as any)(a, o, (q as any)({
        cacheDir: C,
        bundleName: o,
        buildId: n
      }))
    }
  };
}
function ze(this: any, e: any): any {
  return `(function (exports, require, module, __filename, __dirname) { ${e}
});`;
}
function Je(this: any, e: any, t: any): any {
  if ((e as any).ok) return (t as any) === (!0 as any) ? {
    kind: "rejected"
  } : {
    kind: "hit"
  };
  let r: any = (y as any)((e as any).error);
  return (r as any) === ("ENOENT" as any) ? {
    kind: "absent"
  } : {
    kind: "unreadable",
    errorClass: r ?? (J as any)((e as any).error)
  };
}
async function qe(this: any, e: any, t: any, r: any): Promise<any> {
  let n: any = ((e as any).createCachedData as any)();
  return await (V as any)(r, n), await (Ze as any)((((f as any).default as any).dirname as any)(r), t, (((f as any).default as any).basename as any)(r)), (n as any).byteLength;
}
async function Ze(this: any, e: any, t: any, r: any): Promise<any> {
  let n: any = ((Date as any).now as any)(),
    o: any = await ((void 0, (h as any).readdir) as any)(e),
    i: any = (l: any, p: any): any => ((Promise as any).all as any)(((((o as any).filter as any)((g: any): any => (g as any) !== (r as any) && (l as any)(g)) as any).map as any)(async (g: any): Promise<any> => ({
      name: g,
      mtimeMs: await ((((void 0, (h as any).stat) as any)((((f as any).default as any).join as any)(e, g)) as any).then as any)((oe: any): any => (oe as any).mtimeMs, (): any => p)
    }))),
    a: any = (l: any): any => ((l as any).startsWith as any)(`${t}-`) && ((Xe as any).test as any)(l),
    u: any = (l: any): any => {
      let p: any = (j as any)(l);
      return (p as any) !== (void 0 as any) && (a as any)(p);
    },
    A: any = (((((((await (i as any)(a, 0)) as any).sort as any)((l: any, p: any): any => ((p as any).mtimeMs as any) - ((l as any).mtimeMs as any)) as any).slice as any)($e) as any).map as any)((l: any): any => (l as any).name),
    C: any = (((((await (i as any)(u, n)) as any).filter as any)((l: any): any => ((n as any) - ((l as any).mtimeMs as any) as any) > (Ke as any)) as any).map as any)((l: any): any => (l as any).name);
  await ((Promise as any).all as any)((([...A, ...C] as any).map as any)((l: any): any => ((void 0, (h as any).rm) as any)((((f as any).default as any).join as any)(e, l), {
    force: !0
  })));
}
function Qe(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && "remainderDue" in e && (e as any).remainderDue instanceof Promise && "noteStartupFailed" in e && (typeof (e as any).noteStartupFailed as any) == ("function" as any);
}
function te(this: any, {
  runBundle: e
}: any): any {
  let t: any = (e as any)("main-core");
  (_ as any)((Qe as any)((t as any).exports), "main-core.cjs does not export remainderDue and noteStartupFailed.");
  let {
    remainderDue: r,
    noteStartupFailed: n
  }: any = (t as any).exports;
  return ((((r as any).then as any)((): any => {
    let o: any = (e as any)("main-app");
    (_ as any)((Q as any)((o as any).exports), "main-app.cjs does not export reportMainCodeCache."), (((o as any).exports as any).reportMainCodeCache as any)((t as any).codeCache), (((o as any).exports as any).reportMainCodeCache as any)((o as any).codeCache);
  }) as any).catch as any)((o: any): any => (n as any)(o));
}
var et: any = (Z as any)((F as any)((process as any).argv) ?? (((ne as any).app as any).getPath as any)("userData"));
(te as any)({
  runBundle: (e: any): any => (ee as any)({
    bundlePath: (((re as any).default as any).join as any)(__dirname, `${e}.cjs`),
    cacheDir: et,
    buildId: "9a3ba4dd-3f0f-4325-8fd2-21f1eaff1ba1"
  })
});
//# debugId=edb1de3a-02f0-4e0d-b820-119c2033a964
