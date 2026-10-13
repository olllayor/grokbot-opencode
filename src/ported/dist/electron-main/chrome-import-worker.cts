declare var Buffer: any;
declare var __dirname: any;
declare var __filename: any;
declare var global: any;
declare var key: any;
declare var process: any;
declare var require: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "af9275ed-ff4e-42e2-97a7-fb379c6ccd29", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-af9275ed-ff4e-42e2-97a7-fb379c6ccd29");
  } catch (e: any) {}
} as any)();
const __mod: any = (require as any)('node:module');
const __p: any = (require as any)('node:path');
const __depsDir: any = ((__p as any).join as any)(__dirname, '..', 'deps');
((process as any).env as any).NODE_PATH = (__depsDir as any) + ((((process as any).env as any).NODE_PATH ? ((__p as any).delimiter as any) + (((process as any).env as any).NODE_PATH as any) : '') as any);
(((__mod as any).Module as any)._initPaths as any)();
const __import_meta_url: any = ((((require as any)('node:url') as any).pathToFileURL as any)(__filename) as any).href;
"use strict";
var le: any = (require as any)("node:child_process"),
  O: any = (require as any)("node:worker_threads");
function p(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && !((Array as any).isArray as any)(e);
}
function ce(this: any, e: any): any {
  return e;
}
var G: any = ce;
function N(this: any, e: any): any {
  return (e as any) === ("darwin" as any) || (e as any) === ("linux" as any);
}
function me(this: any, e: any, o: any): any {
  let r: any = new (Set as any)(),
    t: any = e;
  for (; (t as any) != (null as any) && (typeof t as any) == ("object" as any) && !((r as any).has as any)(t);) {
    ((r as any).add as any)(t);
    let n: any = (t as any).code;
    if ((typeof n as any) == ("string" as any) && ((o as any).test as any)(n)) return n;
    t = (t as any).cause;
  }
}
function R(this: any, e: any): any {
  return (me as any)(e, /^E[A-Z_]+$/);
}
var m: any = class extends (Error as any) {
  [key: string]: any;
};
var a: any = (require as any)("node:fs"),
  M: any = (require as any)("node:os"),
  s: any = (require as any)("node:path"),
  H: any = (require as any)("node:sqlite");
function D(this: any, e: any): any {
  try {
    return {
      ok: !0,
      value: (e as any)()
    };
  } catch (o: any) {
    return {
      ok: !1,
      error: o
    };
  }
}
var V: any = (require as any)("node:child_process"),
  P: any = (require as any)("node:fs/promises"),
  y: any = (require as any)("node:path");
var de: any = new (Set as any)(["Cookies", "Cookies-wal", "Cookies-shm"]),
  pe: any = `on run argv
  set src to (POSIX file (item 1 of argv)) as alias
  set dest to (POSIX file (item 2 of argv)) as alias
  tell application "Finder"
    duplicate src to dest replacing yes
  end tell
end run
`,
  A: any = class extends (m as any) {
    [key: string]: any;
    name: any = "ChromeCookieImportPermissionError";
    constructor(o: any = "macOS Finder could not copy Chrome's cookie file") {
      super(o);
    }
  };
function ue(this: any, e: any): any {
  return (e as any) == (null as any) || (typeof e as any) != ("object" as any) || !("code" in e) ? !1 : ((e as any).code as any) === ("EPERM" as any) || ((e as any).code as any) === ("EACCES" as any);
}
function fe(this: any, e: any, o: any): any {
  return new (Promise as any)((r: any, t: any): any => {
    (((void 0, (V as any).execFile) as any)("/usr/bin/osascript", ["-", e, o], {
      timeout: 12e4,
      encoding: "utf8"
    }, (i: any): any => {
      (i as any) == (null as any) ? (r as any)() : (t as any)(i);
    }) as any).stdin?.end(pe);
  });
}
async function ye(this: any, e: any): Promise<any> {
  let o: any = await ((((void 0, (P as any).access) as any)(e) as any).then as any)((r: any): any => ({
    ok: !0,
    value: r
  }), (r: any): any => ({
    ok: !1,
    error: r
  }));
  if ((o as any).ok) return !0;
  if (((R as any)((o as any).error) as any) === ("ENOENT" as any)) return !1;
  throw (o as any).error;
}
async function L(this: any, e: any, o: any = {}): Promise<any> {
  let {
      source: r,
      dest: t
    }: any = e,
    n: any = (o as any).copyFile ?? (P as any).copyFile,
    i: any = (o as any).platform ?? (process as any).platform,
    l: any = (o as any).runFinderDuplicate ?? fe,
    c: any = (o as any).destExists ?? ye;
  try {
    await (n as any)(r, t);
    return;
  } catch (f: any) {
    if ((i as any) !== ("darwin" as any) || !(ue as any)(f) || !((de as any).has as any)(((void 0, (y as any).basename) as any)(r)) || (((void 0, (y as any).basename) as any)(t) as any) !== (((void 0, (y as any).basename) as any)(r) as any)) throw f;
  }
  try {
    await (l as any)(r, ((void 0, (y as any).dirname) as any)(t));
  } catch {
    throw new (A as any)();
  }
  if (!(await (c as any)(t))) throw new (A as any)();
}
var C: any = (require as any)("node:crypto"),
  Ce: string = "saltysalt",
  he: number = 16,
  Se: any = ((Buffer as any).alloc as any)(16, 32),
  x: any = ((Buffer as any).from as any)("v10", "latin1"),
  ge: any = ((Buffer as any).from as any)("v11", "latin1"),
  F: number = 32,
  j: number = 1003,
  K: number = 1,
  Y: string = "peanuts",
  X: string = "Chrome Safe Storage";
function v(this: any, e: any, o: any): any {
  return ((void 0, (C as any).pbkdf2Sync) as any)(e, Ce, o, he, "sha1");
}
function _e(this: any, e: any): any {
  if (((e as any).length as any) < ((x as any).length as any)) return null;
  let o: any = ((e as any).subarray as any)(0, (x as any).length);
  return ((o as any).equals as any)(x) ? "v10" : ((o as any).equals as any)(ge) ? "v11" : null;
}
function ke(this: any, e: any): any {
  if (((e as any).length as any) === (0 as any)) return null;
  let o: any = (e as any)[((e as any).length as any) - (1 as any)];
  if ((o as any) < (1 as any) || (o as any) > (16 as any) || (o as any) > ((e as any).length as any)) return null;
  for (let r: any = ((e as any).length as any) - (o as any); (r as any) < ((e as any).length as any); r++) if (((e as any)[r] as any) !== (o as any)) return null;
  return ((e as any).subarray as any)(0, ((e as any).length as any) - (o as any));
}
function Ee(this: any, e: any, o: any): any {
  if (((e as any).length as any) < (F as any)) return e;
  let r: any = ((((((void 0, (C as any).createHash) as any)("sha256") as any).update as any)(o, "utf8") as any).digest as any)();
  return ((((e as any).subarray as any)(0, F) as any).equals as any)(r) ? ((e as any).subarray as any)(F) : e;
}
function $(this: any, e: any): any {
  let {
      encryptedValue: o,
      keys: r,
      host: t
    }: any = e,
    n: any = (_e as any)(o);
  if ((n as any) == (null as any)) return null;
  let i: any = (r as any)[n];
  if ((i as any) == (null as any)) return null;
  let l: any = ((o as any).subarray as any)((x as any).length);
  if (((l as any).length as any) === (0 as any) || (((l as any).length as any) % (16 as any) as any) !== (0 as any)) return null;
  let c: any = ((void 0, (C as any).createDecipheriv) as any)("aes-128-cbc", i, Se);
  ((c as any).setAutoPadding as any)(!1);
  let f: any = ((Buffer as any).concat as any)([((c as any).update as any)(l), ((c as any).final as any)()]),
    k: any = (ke as any)(f);
  return (k as any) == (null as any) ? null : (((Ee as any)(k, t) as any).toString as any)("utf8");
}
var _: any = class extends (m as any) {
    [key: string]: any;
    name: any = "ChromeCookieImportUnknownProfileError";
  },
  S: any = class extends (m as any) {
    [key: string]: any;
    name: any = "ChromeLocalStateParseError";
  },
  u: any = class extends (m as any) {
    [key: string]: any;
    name: any = "ChromeCookieRowParseError";
  },
  z: any = (BigInt as any)("11644473600000000"),
  Ie: any = {
    0: "None",
    1: "Lax",
    2: "Strict"
  },
  Re: any = {
    0: "Low",
    1: "Medium",
    2: "High"
  };
function Ae(this: any, e: any, o: any): any {
  let r: any = ((e as any).isPersistent as any) === (0 as any),
    t: any = ((Number as any)(((e as any).expiresUtc as any) - (z as any)) as any) / (1e6 as any),
    n: any = (Ie as any)[(e as any).sameSite],
    i: any = (Re as any)[(e as any).priority];
  return {
    name: (e as any).name,
    value: (G as any)(o),
    domain: (e as any).hostKey,
    path: (e as any).path,
    expires: r ? -1 : t,
    httpOnly: ((e as any).isHttpOnly as any) !== (0 as any),
    secure: ((e as any).isSecure as any) !== (0 as any),
    ...((n as any) != (null as any) ? {
      sameSite: n
    } : {}),
    ...(r ? {
      session: !0
    } : {}),
    ...((i as any) != (null as any) ? {
      priority: i
    } : {})
  };
}
function Pe(this: any, e: any): any {
  if (!(p as any)(e)) throw new (S as any)("Local State is not a JSON object.");
  let o: any = (e as any).profile;
  if ((o as any) === (void 0 as any)) return {};
  if (!(p as any)(o)) throw new (S as any)("Local State has a non-object `profile` section.");
  let r: any = (o as any).info_cache;
  if ((r as any) === (void 0 as any)) return {
    profile: {}
  };
  if (!(p as any)(r)) throw new (S as any)("Local State has a non-object `profile.info_cache`.");
  let t: any = {};
  for (let [n, i] of ((Object as any).entries as any)(r)) (t as any)[n] = (p as any)(i) && (typeof (i as any).name as any) == ("string" as any) ? {
    name: (i as any).name
  } : {};
  return {
    profile: {
      info_cache: t
    }
  };
}
function xe(this: any, e: any): any {
  return ((e as any).length as any) > (0 as any) && (e as any) !== ("." as any) && (e as any) !== (".." as any) && !((/[\\/\0]/ as any).test as any)(e);
}
function we(this: any, e: any, o: any): any {
  let r: any = ((void 0, (s as any).relative) as any)(e, o);
  return ((r as any).length as any) > (0 as any) && (r as any) !== (".." as any) && !((r as any).startsWith as any)(`..${(s as any).sep}`) && !((void 0, (s as any).isAbsolute) as any)(r);
}
function U(this: any, e: any, o: any): any {
  if (!(xe as any)(o)) return null;
  let r: any = ((void 0, (s as any).resolve) as any)(e),
    t: any = ((void 0, (s as any).resolve) as any)(r, o);
  if ((((void 0, (s as any).dirname) as any)(t) as any) !== (r as any)) return null;
  let n: any = (D as any)((): any => ({
    realRoot: ((void 0, (a as any).realpathSync) as any)(r),
    realProfile: ((void 0, (a as any).realpathSync) as any)(t)
  }));
  return !(n as any).ok || !(we as any)(((n as any).value as any).realRoot, ((n as any).value as any).realProfile) ? null : t;
}
function w(this: any, e: any): any {
  let o: any = ((void 0, (s as any).join) as any)(e, "Local State");
  if (!((void 0, (a as any).existsSync) as any)(o)) return [];
  let r: any;
  try {
    r = ((JSON as any).parse as any)(((void 0, (a as any).readFileSync) as any)(o, "utf8"));
  } catch (i: any) {
    throw new (S as any)(`Local State is not valid JSON: ${(String as any)(i)}`, {
      cause: i
    });
  }
  let t: any = ((Pe as any)(r) as any).profile?.info_cache;
  if ((t as any) == (null as any)) return [];
  let n: any = [];
  for (let [i, l] of ((Object as any).entries as any)(t)) {
    if (((U as any)(e, i) as any) == (null as any)) continue;
    let c: any = ((l as any).name as any) != (null as any) && (((l as any).name as any).length as any) > (0 as any) ? (l as any).name : i;
    ((n as any).push as any)({
      id: i,
      displayName: c
    });
  }
  return ((n as any).sort as any)((i: any, l: any): any => ((i as any).id as any) === ("Default" as any) ? -1 : ((l as any).id as any) === ("Default" as any) ? 1 : (((i as any).displayName as any).localeCompare as any)((l as any).displayName));
}
function J(this: any, e: any): any {
  let o: any = ((void 0, (s as any).join) as any)(e, "Network", "Cookies");
  if (((void 0, (a as any).existsSync) as any)(o)) return o;
  let r: any = ((void 0, (s as any).join) as any)(e, "Cookies");
  return ((void 0, (a as any).existsSync) as any)(r) ? r : null;
}
var q: string = " WHERE is_persistent = 0 OR expires_utc > ?",
  Te: any = ("SELECT host_key, name, encrypted_value, path, expires_utc, is_secure, is_httponly, samesite, is_persistent, priority FROM cookies" as any) + (q as any),
  Oe: any = ("SELECT host_key, name, path FROM cookies" as any) + (q as any);
function Z(this: any): any {
  return (((BigInt as any)(((Date as any).now as any)()) as any) * ((BigInt as any)(1e3) as any) as any) + (z as any);
}
async function Q(this: any, e: any, o: any): Promise<any> {
  let r: any = ((void 0, (s as any).join) as any)(o, "Cookies");
  await (L as any)({
    source: e,
    dest: r
  });
  for (let t of ["-wal", "-shm"]) {
    let n: any = `${e}${t}`;
    ((void 0, (a as any).existsSync) as any)(n) && (await (L as any)({
      source: n,
      dest: `${r}${t}`
    }));
  }
  return r;
}
function E(this: any, e: any): any {
  return (e as any) === (null as any) ? "NULL" : typeof e;
}
function g(this: any, e: any, o: any): any {
  if ((typeof e as any) != ("string" as any)) throw new (u as any)(`cookie row ${o}: expected TEXT, got ${(E as any)(e)}`);
  return e;
}
function h(this: any, e: any, o: any): any {
  if ((typeof e as any) != ("bigint" as any)) throw new (u as any)(`cookie row ${o}: expected INTEGER, got ${(E as any)(e)}`);
  return e;
}
function be(this: any, e: any): any {
  if (!(p as any)(e)) throw new (u as any)(`cookie row: expected an object, got ${(E as any)(e)}`);
  let o: any = (e as any).encrypted_value;
  if ((o as any) !== (null as any) && !(o instanceof Uint8Array)) throw new (u as any)(`cookie row encrypted_value: expected a BLOB, got ${(E as any)(o)}`);
  return {
    host_key: (g as any)((e as any).host_key, "host_key"),
    name: (g as any)((e as any).name, "name"),
    encrypted_value: o,
    path: (g as any)((e as any).path, "path"),
    expires_utc: (h as any)((e as any).expires_utc, "expires_utc"),
    is_secure: (h as any)((e as any).is_secure, "is_secure"),
    is_httponly: (h as any)((e as any).is_httponly, "is_httponly"),
    samesite: (h as any)((e as any).samesite, "samesite"),
    is_persistent: (h as any)((e as any).is_persistent, "is_persistent"),
    priority: (h as any)((e as any).priority, "priority")
  };
}
function Ne(this: any, e: any): any {
  if (!(p as any)(e)) throw new (u as any)(`cookie row: expected an object, got ${(E as any)(e)}`);
  return {
    hostKey: (g as any)((e as any).host_key, "host_key"),
    name: (g as any)((e as any).name, "name"),
    path: (g as any)((e as any).path, "path")
  };
}
async function De(this: any, e: any): Promise<any> {
  let o: any = (U as any)((e as any).userDataDir, ((e as any).profile as any).id);
  if ((o as any) == (null as any)) throw new (_ as any)("Chrome cookie import refused a profile id that is not a contained child.");
  let r: any = (J as any)(o);
  if ((r as any) == (null as any)) return [];
  let t: any = ((void 0, (a as any).mkdtempSync) as any)(((void 0, (s as any).join) as any)(((void 0, (M as any).tmpdir) as any)(), "sand-chrome-cookies-"));
  try {
    let n: any = new ((H as any).DatabaseSync as any)(await (Q as any)(r, t));
    try {
      return ((((((n as any).prepare as any)(Oe) as any).all as any)((Z as any)()) as any).map as any)((l: any): any => {
        let c: any = (Ne as any)(l);
        return {
          profileId: ((e as any).profile as any).id,
          profileDisplayName: ((e as any).profile as any).displayName,
          domain: (c as any).hostKey,
          name: (c as any).name,
          path: (c as any).path
        };
      });
    } finally {
      ((n as any).close as any)();
    }
  } finally {
    ((void 0, (a as any).rmSync) as any)(t, {
      recursive: !0,
      force: !0
    });
  }
}
function ee(this: any, e: any, o: any): any {
  switch (e) {
    case "darwin":
      return ((void 0, (s as any).join) as any)(o, "Library", "Application Support", "Google", "Chrome");
    case "linux":
      return ((void 0, (s as any).join) as any)(o, ".config", "google-chrome");
    default:
      return null;
  }
}
async function oe(this: any, e: any): Promise<any> {
  let o: any = [];
  for (let r of (w as any)(e)) ((o as any).push as any)(...(await (De as any)({
    userDataDir: e,
    profile: r
  })));
  return o;
}
async function re(this: any, e: any): Promise<any> {
  let o: any = (U as any)((e as any).userDataDir, (e as any).profileId);
  if ((o as any) == (null as any)) throw new (_ as any)("Chrome cookie import refused a profile id that is not a contained child.");
  let r: any = (J as any)(o);
  if ((r as any) == (null as any)) return {
    cookies: [],
    undecryptable: 0
  };
  let t: any = (e as any).safeStoragePasswords,
    n: any = {
      v10: (v as any)((t as any).v10, (e as any).iterations),
      ...(((t as any).v11 as any) != (null as any) ? {
        v11: (v as any)((t as any).v11, (e as any).iterations)
      } : {})
    },
    i: any = ((void 0, (a as any).mkdtempSync) as any)(((void 0, (s as any).join) as any)(((void 0, (M as any).tmpdir) as any)(), "sand-chrome-cookies-"));
  try {
    let l: any = new ((H as any).DatabaseSync as any)(await (Q as any)(r, i));
    try {
      let c: any = ((l as any).prepare as any)(Te);
      ((c as any).setReadBigInts as any)(!0);
      let f: any = ((((c as any).all as any)((Z as any)()) as any).map as any)(be),
        k: any = [],
        I: any = 0;
      for (let d of f) {
        if (((d as any).encrypted_value as any) == (null as any)) {
          I++;
          continue;
        }
        let b: any;
        try {
          b = ($ as any)({
            encryptedValue: ((Buffer as any).from as any)((d as any).encrypted_value),
            keys: n,
            host: (d as any).host_key
          });
        } catch {
          I++;
          continue;
        }
        if ((b as any) == (null as any)) {
          I++;
          continue;
        }
        ((k as any).push as any)((Ae as any)({
          hostKey: (d as any).host_key,
          name: (d as any).name,
          path: (d as any).path,
          expiresUtc: (d as any).expires_utc,
          isSecure: (Number as any)((d as any).is_secure),
          isHttpOnly: (Number as any)((d as any).is_httponly),
          sameSite: (Number as any)((d as any).samesite),
          isPersistent: (Number as any)((d as any).is_persistent),
          priority: (Number as any)((d as any).priority)
        }, b));
      }
      return {
        cookies: k,
        undecryptable: I
      };
    } finally {
      ((l as any).close as any)();
    }
  } finally {
    ((void 0, (a as any).rmSync) as any)(i, {
      recursive: !0,
      force: !0
    });
  }
}
var B: any = class extends (m as any) {
  [key: string]: any;
  name: any = "ChromeCookieImportUnsupportedError";
};
function W(this: any, e: any): any {
  return (ee as any)((e as any).platform, (e as any).homeDir);
}
async function Le(this: any, e: any): Promise<any> {
  let o: any = (e as any).safeStoragePassword;
  switch ((e as any).platform) {
    case "darwin":
      return {
        passwords: {
          v10: (o as any) != (null as any) && ((o as any).length as any) > (0 as any) ? o : await ((e as any).readMacSafeStoragePassword as any)()
        },
        iterations: j
      };
    case "linux":
      {
        let r: any = (o as any) != (null as any) && ((o as any).length as any) > (0 as any) ? o : await ((e as any).readLinuxSafeStoragePassword as any)();
        return {
          passwords: {
            v10: Y,
            ...((r as any) != (null as any) && ((r as any).length as any) > (0 as any) ? {
              v11: r
            } : {})
          },
          iterations: K
        };
      }
    default:
      return null;
  }
}
function te(this: any, e: any): any {
  return {
    listProfiles: (): any => {
      if (!(N as any)((e as any).platform)) return [];
      let o: any = (W as any)(e);
      return (o as any) == (null as any) ? [] : (w as any)(o);
    },
    listCookieAllowItems: async (): Promise<any> => {
      if (!(N as any)((e as any).platform)) return [];
      let o: any = (W as any)(e);
      return (o as any) == (null as any) ? [] : (oe as any)(o);
    },
    collectProfileCookies: async (o: any): Promise<any> => {
      let r: any = (W as any)(e),
        t: any = await (Le as any)(e);
      if ((r as any) == (null as any) || (t as any) == (null as any)) throw new (B as any)("Chrome cookie import is not supported on this operating system yet.");
      if (!(((w as any)(r) as any).some as any)((i: any): any => ((i as any).id as any) === (o as any))) throw new (_ as any)(`"${o}" is not an enumerated Chrome profile.`);
      return (re as any)({
        userDataDir: r,
        profileId: o,
        safeStoragePasswords: (t as any).passwords,
        iterations: (t as any).iterations
      });
    }
  };
}
var T: any = class extends (m as any) {
  [key: string]: any;
  name: any = "ChromeImportWorkerProtocolError";
};
function ne(this: any, e: any): any {
  let o: any = (p as any)(e) && (typeof (e as any).code as any) == ("string" as any) ? (e as any).code : void 0;
  return e instanceof Error ? {
    name: (e as any).name,
    message: (e as any).message,
    ...((o as any) != (null as any) ? {
      code: o
    } : {})
  } : {
    name: "Error",
    message: (String as any)(e),
    ...((o as any) != (null as any) ? {
      code: o
    } : {})
  };
}
var ie: any = (require as any)("node:child_process"),
  se: any = (require as any)("node:util");
var Fe: any = ((void 0, (se as any).promisify) as any)((ie as any).execFile);
async function ae(this: any): Promise<any> {
  let {
    stdout: e
  }: any = await (Fe as any)("/usr/bin/security", ["find-generic-password", "-ws", X], {
    encoding: "utf-8",
    timeout: 12e4
  });
  return ((e as any).trim as any)();
}
function ve(this: any, e: any): any {
  return new (Promise as any)((o: any): any => {
    ((void 0, (le as any).execFile) as any)("secret-tool", ["lookup", "application", e], {
      encoding: "utf-8",
      timeout: 5e3
    }, (r: any, t: any): any => {
      if ((r as any) != (null as any)) {
        (o as any)(null);
        return;
      }
      let n: any = ((t as any).trim as any)();
      (o as any)(((n as any).length as any) > (0 as any) ? n : null);
    });
  });
}
function Me(this: any, e: any): any {
  return {
    ...e,
    readMacSafeStoragePassword: ae,
    readLinuxSafeStoragePassword: async (): Promise<any> => {
      for (let o of ["chrome", "chromium"]) {
        let r: any = await (ve as any)(o);
        if ((r as any) != (null as any)) return r;
      }
      return null;
    }
  };
}
async function He(this: any): Promise<any> {
  let e: any = (O as any).parentPort;
  if ((e as any) == (null as any)) throw new (T as any)("Chrome import worker requires a parent port.");
  let o: any = (O as any).workerData,
    r: any = (te as any)((Me as any)((o as any).system)),
    t: any;
  try {
    ((o as any).kind as any) === ("list-profiles" as any) ? t = {
      kind: "profiles",
      profiles: ((r as any).listProfiles as any)()
    } : ((o as any).kind as any) === ("list-cookie-allow-items" as any) ? t = {
      kind: "cookie-allow-items",
      items: await ((r as any).listCookieAllowItems as any)()
    } : t = {
      kind: "profile-cookies",
      result: await ((r as any).collectProfileCookies as any)((o as any).profileId)
    };
  } catch (n: any) {
    t = {
      kind: "error",
      error: (ne as any)(n)
    };
  }
  ((e as any).postMessage as any)(t), ((e as any).close as any)();
}
(He as any)();
//# debugId=af9275ed-ff4e-42e2-97a7-fb379c6ccd29
