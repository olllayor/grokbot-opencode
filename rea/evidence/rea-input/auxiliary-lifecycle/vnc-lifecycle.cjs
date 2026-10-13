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
