function de() {
  let e = "",
    n = "";
  return {
    shouldSendHostText(r) {
      return r.length > 0 && r !== e && r !== n;
    },
    commitHostText(r) {
      e = r;
    },
    resolveVmText(r) {
      return r.length === 0 || r === e || r === n ? null : (n = r, r);
    }
  };
}
function rn(e) {
  return `
    import("./app/ui.js")
      .then(function (m) {
        var rfb = m && m.default && m.default.rfb;
        var text = ${JSON.stringify(e)};
        if (rfb && typeof rfb.clipboardPasteFrom === "function" && text) {
          rfb.clipboardPasteFrom(text);
          return true;
        }
        return false;
      })
      .catch(function () {
        return false;
      });
  `;
}
function on(e, n) {
  return n && e.length > 0 ? e : null;
}
function pn() {
  let e = null,
    n = [],
    r = null,
    o = !1;
  function i() {
    e = null, n = [], r = null, o = !1;
  }
  function s(u, c) {
    i(), e = c, r = u;
  }
  function f(u, c) {
    if (e == null) return s(u, c), null;
    let m = {
      atMs: u,
      keys: c.keys - e.keys,
      clicks: c.clicks - e.clicks,
      moves: c.moves - e.moves,
      drawOps: c.drawOps - e.drawOps,
      inBytes: c.inBytes - e.inBytes
    };
    if (m.keys < 0 || m.clicks < 0 || m.moves < 0 || m.drawOps < 0 || m.inBytes < 0) return s(u, c), null;
    e = c, n.push(m);
    let p = u - ce;
    if (n = n.filter(y => y.atMs > p), m.drawOps > 0 && (o = !1), o || r == null || u - r < ce) return null;
    let d = 0,
      l = 0,
      R = 0,
      E = 0,
      C = 0;
    for (let y of n) d += y.keys, l += y.clicks, R += y.moves, E += y.drawOps, C += y.inBytes;
    if (d + l < tn || E > 0 || C > 0) return null;
    o = !0;
    let x = n.find(y => y.keys + y.clicks > 0);
    return {
      phase: "post_connect",
      stallMs: u - (x?.atMs ?? u),
      keys: d,
      clicks: l,
      moves: R,
      inBytes: C
    };
  }
  return {
    sample: f,
    reset: i
  };
}
function fn() {
  let e = !1;
  return {
    isVisible: () => e,
    update(n) {
      let r = n === !0,
        o = r && !e;
      return e = r, o;
    }
  };
}
function M() {
  if (typeof location > "u" || !location.pathname.endsWith("/vnc.html")) return !1;
  try {
    return new URLSearchParams(location.search).get("sandInteractive") === "1";
  } catch {
    return !1;
  }
}
function Tn() {
  if (typeof document > "u") return null;
  let e = document.getElementById("noVNC_clipboard_text");
  return e instanceof HTMLTextAreaElement ? e : null;
}
function Tt({
  getErrorMessage: e,
  getWebFrame: n,
  logWarn: r
}) {
  if (typeof location > "u" || !location.pathname.endsWith("/vnc.html")) return;
  let o = `
    #noVNC_control_bar,
    #noVNC_control_bar_handle,
    #noVNC_control_bar_anchor,
    #noVNC_status,
    .noVNC_logo {
      display: none !important;
      pointer-events: none !important;
      visibility: hidden !important;
    }
    :root:not(.noVNC_loading):not(.noVNC_connecting):not(.noVNC_disconnecting):not(.noVNC_reconnecting) #noVNC_transition{display:none!important}
  `;
  try {
    n()?.insertCSS(o);
  } catch (s) {
    r("noVNC CSS injection failed", e(s));
  }
  function i() {
    document.getElementById("noVNC_control_bar")?.classList.remove("noVNC_open");
  }
  typeof document > "u" || (i(), document.addEventListener("DOMContentLoaded", i, {
    once: !0
  }), window.addEventListener("load", i, {
    once: !0
  }));
}
function xt(e) {
  let {
      getErrorMessage: n,
      getIpcRenderer: r,
      getWebFrame: o,
      logWarn: i
    } = e,
    s = r(),
    f = _t(e);
  if (s == null || f == null) return;
  let u = f;
  if (typeof window > "u" || typeof document > "u" || !M()) return;
  let c = 500,
    m = 200,
    p = de(),
    d = 0,
    l = fn();
  s.on(ue, (x, y) => {
    l.update(y) && E();
  });
  function R() {
    if (!l.isVisible()) return;
    let x = Tn();
    if (x == null) return;
    let y = p.resolveVmText(x.value);
    y != null && u.writeClipboard({
      text: y
    }).catch(V => {
      i("vnc clipboard write failed", n(V));
    });
  }
  function E() {
    if (!l.isVisible()) return;
    let x = Date.now();
    x - d < m || (d = x, u.readClipboard().then(y => {
      if (!p.shouldSendHostText(y)) return;
      let V = o();
      V?.executeJavaScript(rn(y)).then(q => {
        let z = on(y, q === !0);
        if (z == null) return;
        p.commitHostText(z);
        let Ee = Tn();
        Ee != null && (Ee.value = z);
      }).catch(q => {
        i("vnc clipboard paste failed", n(q));
      });
    }).catch(y => {
      i("vnc clipboard read failed", n(y));
    }));
  }
  let C = O({
    name: "vnc-clipboard-mirror",
    intervalMs: c
  }).start(async () => {
    R();
  });
  window.addEventListener("focus", E), document.addEventListener("mousedown", E, !0), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && E();
  }), window.addEventListener("pagehide", () => C.dispose(), {
    once: !0
  });
}
function wt({
  getErrorMessage: e,
  getIpcRenderer: n,
  logWarn: r
}) {
  let o = n();
  if (o == null || typeof document > "u" || !M()) return;
  let i = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
  document.addEventListener("keydown", s => {
    if (i.has(s.key)) try {
      o.sendToHost(en, s.key);
    } catch (f) {
      r("vnc host key forward failed", e(f));
    }
  }, !0);
}
function Ct({
  getErrorMessage: e,
  getIpcRenderer: n,
  logWarn: r
}) {
  let o = n();
  if (o == null) return;
  let i = o;
  if (typeof window > "u" || typeof document > "u" || typeof location > "u" || !location.pathname.endsWith("/vnc.html")) return;
  function s(l, R) {
    try {
      i.sendToHost("sand:vnc-session", JSON.stringify({
        phase: l,
        clean: R
      }));
    } catch (E) {
      r("vnc session report failed", e(E));
    }
  }
  let f = 0,
    u = !1,
    c = null;
  function m() {
    let l = document.documentElement.classList;
    return l.contains("noVNC_connected") ? "connected" : l.contains("noVNC_reconnecting") ? "reconnecting" : l.contains("noVNC_connecting") ? "connecting" : l.contains("noVNC_disconnecting") ? "disconnecting" : "disconnected";
  }
  function p() {
    let l = m();
    l !== c && (c = l, l === "connected" ? (f += 1, s(f > 1 ? "reconnect" : "rfb_connect", !0), u = !0) : u && l !== "connecting" && (s("rfb_disconnect", l === "disconnecting"), u = !1));
  }
  function d() {
    let l = new MutationObserver(p);
    l.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), p(), window.addEventListener("pagehide", () => l.disconnect(), {
      once: !0
    });
  }
  document.documentElement == null ? document.addEventListener("DOMContentLoaded", () => d(), {
    once: !0
  }) : d();
}
function It({
  getErrorMessage: e,
  getIpcRenderer: n,
  getWebFrame: r,
  logWarn: o
}) {
  let i = r();
  if (i == null) return;
  let s = i;
  if (typeof document > "u" || !location.pathname.endsWith("/vnc.html")) return;
  function f(p) {
    s.executeJavaScript(p).catch(d => {
      o("vnc frame hold failed", e(d));
    });
  }
  let u = !0,
    c = !1;
  function m() {
    let p = document.visibilityState === "hidden" || !u;
    p !== c && (c = p, f(sn(c)));
  }
  f(an(M() ? vt : xn)), n()?.on(ue, (p, d) => {
    typeof d == "boolean" && (u = d, m());
  }), document.addEventListener("visibilitychange", m), m();
}
function Mt({
  getErrorMessage: e,
  getIpcRenderer: n,
  getWebFrame: r,
  logWarn: o
}) {
  let i = n(),
    s = r();
  if (i == null || s == null) return;
  let f = i,
    u = s;
  if (typeof window > "u" || typeof document > "u" || !M()) return;
  u.executeJavaScript(ln()).catch(d => {
    o("vnc liveness beacon install failed", e(d));
  });
  let c = pn(),
    m = cn(),
    p = O({
      name: "vnc-liveness-sampler",
      intervalMs: 1e3
    }).start(async () => {
      if (document.documentElement?.classList.contains("noVNC_connected") !== !0) {
        c.reset();
        return;
      }
      try {
        let d = await u.executeJavaScript(m),
          l = un(d);
        if (l == null) return;
        let R = c.sample(performance.now(), l);
        if (R == null) return;
        f.sendToHost(nn, R);
      } catch (d) {
        o("vnc liveness sample failed", e(d));
      }
    });
  window.addEventListener("pagehide", () => p.dispose(), {
    once: !0
  });
}
function At({
  getErrorMessage: e,
  getWebFrame: n,
  logWarn: r
}) {
  let o = n();
  if (o == null || !M()) return;
  let i = `
    (function () {
      if (window.__sandVncMacKeysInstalled) return;
      if (!/Mac/i.test((navigator && navigator.platform) || "")) return;
      window.__sandVncMacKeysInstalled = true;

      var CHORDS = ${JSON.stringify(ae)};
      var HELD_MODIFIERS = ${JSON.stringify(se)};

      var ui = null;
      import("./app/ui.js")
        .then(function (m) { ui = m && m.default; })
        .catch(function () {});

      document.addEventListener("keydown", function (e) {
        if (!e.metaKey) return;
        var chord = CHORDS.find(function (entry) { return entry.code === e.code; });
        if (!chord) return;
        var rfb = ui && ui.rfb;
        if (!rfb || typeof rfb.sendKey !== "function") return;
        e.preventDefault();
        e.stopImmediatePropagation();
        // noVNC presses Meta/Alt down for Cmd, so release them first to avoid
        // sending Alt+Ctrl+key instead of a clean Ctrl+key.
        for (var i = 0; i < HELD_MODIFIERS.length; i++) {
          try { rfb.sendKey(HELD_MODIFIERS[i][0], HELD_MODIFIERS[i][1], false); } catch (_e) {}
        }
        var withShift = e.shiftKey || chord.forceShift;
        var chordKeysym = withShift ? chord.keysym - 0x20 : chord.keysym;
        rfb.sendKey(${W}, "ControlLeft", true);
        if (withShift) rfb.sendKey(${G}, "ShiftLeft", true);
        rfb.sendKey(chordKeysym, e.code, true);
        rfb.sendKey(chordKeysym, e.code, false);
        if (withShift) rfb.sendKey(${G}, "ShiftLeft", false);
        rfb.sendKey(${W}, "ControlLeft", false);
      }, true);
    })();
  `;
  o.executeJavaScript(i).catch(s => {
    r("vnc mac key mapping injection failed", e(s));
  });
}
function Ot({
  getErrorMessage: e,
  getWebFrame: n,
  logWarn: r
}) {
  let o = n();
  o != null && M() && o.executeJavaScript(dn()).catch(i => {
    r("vnc ime field injection failed", e(i));
  });
}
function wn(e = ge) {
  let {
    getErrorMessage: n,
    installSandBrowserPreload: r,
    logWarn: o
  } = e;
  r();
  try {
    Tt(e);
  } catch (i) {
    o("noVNC chrome hider install failed", n(i));
  }
  try {
    xt(e);
  } catch (i) {
    o("vnc clipboard bridge install failed", n(i));
  }
  try {
    wt(e);
  } catch (i) {
    o("vnc host key forwarder install failed", n(i));
  }
  try {
    Ct(e);
  } catch (i) {
    o("vnc rfb session reporter install failed", n(i));
  }
  try {
    It(e);
  } catch (i) {
    o("vnc frame hold install failed", n(i));
  }
  try {
    At(e);
  } catch (i) {
    o("vnc mac key mapping install failed", n(i));
  }
  try {
    Ot(e);
  } catch (i) {
    o("vnc ime field install failed", n(i));
  }
  try {
    Mt(e);
  } catch (i) {
    o("vnc liveness tripwire install failed", n(i));
  }
}
