function rl(e, t, n = {}) {
  let r = (0, lr.relative)((0, lr.resolve)(e), (0, lr.resolve)(t));
  return r === "" ? n.isInclusive ?? !1 : !r.startsWith("..") && !(0, lr.isAbsolute)(r);
}
function Cf(e) {
  try {
    let t = new URL(e);
    return t.protocol !== "file:" ? null : decodeURIComponent(t.pathname);
  } catch {
    return null;
  }
}
function cy(e, t) {
  return e ? t ? "sand-lab" : "sand" : "sand-dev";
}
function ol(e = process.env) {
  let t = e[ro]?.trim();
  return t != null && t.length > 0 && (0, Tt.isAbsolute)(t) ? t : null;
}
function Z9(e, t) {
  let n = /(?:[/\\]\.cursor[/\\]sand(?:-[^/\\]+)?|[/\\]\.grokbot)[/\\](.+)$/.exec(e);
  if (n?.[1] != null) return n[1];
  if (t.acceptBoxModelVisibleAlias !== !0 || !rl(Nf, e)) return null;
  let r = (0, Tt.relative)(Nf, e);
  return r.length === 0 ? null : r;
}
function jy(e) {
  let t = URL.parse(e);
  return t?.protocol === `${qs}:` && t.host === Ok;
}
function Nk(e, t) {
  return t != null && URL.parse(t)?.protocol === `${qs}:` && !jy(e);
}
function rD() {
  nD.protocol.registerSchemesAsPrivileged([{
    scheme: po,
    privileges: {
      standard: !0,
      secure: !0,
      supportFetchAPI: !0,
      stream: !0
    }
  }, {
    scheme: Tl,
    privileges: {
      standard: !0,
      secure: !0
    }
  }, {
    scheme: Ks,
    privileges: {
      standard: !0,
      secure: !0
    }
  }, {
    scheme: sl,
    privileges: {
      standard: !0,
      secure: !0
    }
  }, {
    scheme: qs,
    privileges: {
      standard: !0,
      secure: !0
    }
  }, {
    scheme: "file",
    privileges: {
      standard: !0,
      codeCache: !0
    }
  }]);
}
function oT(e) {
  return URL.parse(e)?.protocol === `${Ks}:`;
}
function _Z(e) {
  return URL.parse(e)?.protocol === `${Tl}:`;
}
function oD(e, t) {
  return _Z(e) && (t == null || t === "" || t === "about:blank");
}
function aD(e, t) {
  return t != null && oT(t) && gl(e);
}
function Km(e) {
  let t = ne(() => (0, ln.lstatSync)(e));
  return t.ok ? t.value.isDirectory() && !t.value.isSymbolicLink() ? "directory" : "unsafe" : ke(t.error) === "ENOENT" ? "absent" : "unsafe";
}
function jT(e) {
  let t = ne(() => (0, ln.lstatSync)((0, Sa.join)(e, ZL)));
  return t.ok && t.value.isFile();
}
function tM(e) {
  let t = ne(() => {
    (0, ln.mkdirSync)(e, {
      recursive: !0,
      mode: 448
    }), (0, ln.writeFileSync)((0, Sa.join)(e, ZL), `{"version":1}
`, {
      flag: "wx",
      mode: 384
    });
  });
  return t.ok || ke(t.error) === "EEXIST" && jT(e);
}
function dne(e) {
  let t = ne(() => (0, ln.readdirSync)(e).length !== 0 ? !1 : ((0, ln.rmdirSync)(e), !0));
  return t.ok && t.value;
}
function lne(e) {
  let t = ne(() => (0, ln.readdirSync)(e));
  return t.ok ? t.value.length === 0 : null;
}
function une(e, t) {
  return (0, Sa.resolve)(e).toLowerCase() === (0, Sa.resolve)(t).toLowerCase();
}
function pne(e) {
  return tM(e.legacy) ? ne(() => e.rename(e.legacy, e.canonical)).ok ? {
    route: "canonical",
    reason: "migrated",
    root: e.canonical
  } : Km(e.legacy) === "absent" && Km(e.canonical) === "directory" && jT(e.canonical) ? {
    route: "canonical",
    reason: "migrated-by-peer",
    root: e.canonical
  } : {
    route: "legacy",
    reason: "migration-failed",
    root: e.legacy
  } : {
    route: "legacy",
    reason: "migration-failed",
    root: e.legacy
  };
}
function fne(e) {
  if (e.platform !== "win32") return {
    route: "unchanged",
    reason: "nonwindows"
  };
  if (!e.isPackaged) return {
    route: "unchanged",
    reason: "unpackaged"
  };
  if (e.isLabBuild) return {
    route: "unchanged",
    reason: "lab"
  };
  if (e.hasIsolatedUserData) return {
    route: "unchanged",
    reason: "isolated-user-data"
  };
  let t = eM(e.appDataDir);
  if (!une(t.canonical, e.canonicalUserDataDir)) return {
    route: "unchanged",
    reason: "nondefault-user-data"
  };
  let n = Km(t.legacy),
    r = Km(t.canonical);
  if (n === "absent") return r === "absent" && tM(t.canonical) ? {
    route: "canonical",
    reason: "canonical-fresh",
    root: t.canonical
  } : {
    route: "canonical",
    reason: "canonical-existing",
    root: t.canonical
  };
  if (n === "unsafe") return {
    route: "legacy",
    reason: "legacy-unsafe",
    root: t.legacy
  };
  if (r === "directory" && jT(t.canonical)) return {
    route: "canonical",
    reason: "canonical-marked",
    root: t.canonical
  };
  if (r === "unsafe") return {
    route: "legacy",
    reason: "canonical-unsafe",
    root: t.legacy
  };
  if (r === "directory") {
    let o = lne(t.canonical);
    if (o == null) return {
      route: "legacy",
      reason: "canonical-unsafe",
      root: t.legacy
    };
    if (!o) return {
      route: "canonical",
      reason: "conflict-preserved",
      root: t.canonical
    };
    if (!e.isUpdatedLaunch) return {
      route: "legacy",
      reason: "awaiting-update",
      root: t.legacy
    };
    if (!(e.removeEmpty ?? dne)(t.canonical)) return {
      route: "legacy",
      reason: "canonical-unsafe",
      root: t.legacy
    };
  }
  return e.isUpdatedLaunch ? pne({
    legacy: t.legacy,
    canonical: t.canonical,
    rename: e.rename ?? ln.renameSync
  }) : {
    route: "legacy",
    reason: "awaiting-update",
    root: t.legacy
  };
}
function nM(e) {
  let t = fne(e);
  return t.route !== "unchanged" && (e.setPath("userData", t.root), e.setPath("sessionData", t.root)), t;
}