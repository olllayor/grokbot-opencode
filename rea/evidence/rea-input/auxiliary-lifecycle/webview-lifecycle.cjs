function U() {
  if (typeof navigator > "u") return;
  let e = b();
  if (e != null && navigator.credentials) {
    if (typeof navigator.credentials.create == "function") {
      let r = navigator.credentials.create.bind(navigator.credentials);
      navigator.credentials.create = T(e, "create", r);
    }
    if (typeof navigator.credentials.get == "function") {
      let r = navigator.credentials.get.bind(navigator.credentials);
      navigator.credentials.get = T(e, "get", r);
    }
  }
}
function V() {
  typeof window > "u" || window.__sandDialogOverridesApplied !== !0 && (window.alert = function () {}, window.confirm = function () {
    return !0;
  }, window.prompt = function () {
    return null;
  }, window.__sandDialogOverridesApplied = !0);
}
function X() {
  let e = b();
  if (e == null) return;
  let r = e;
  if (typeof window > "u" || typeof location > "u") return;
  let o = location.origin;
  function t() {
    try {
      r.sendToHost("sand:browser-popup-closed", {
        url: location.href
      });
    } catch (i) {
      l("popup-closed send failed", s(i));
    }
  }
  window.addEventListener("beforeunload", t), window.addEventListener("pagehide", t), window.addEventListener("pageshow", function (c) {
    if (!(!c || c.persisted !== !0) && location.origin === o) try {
      r.sendToHost("sand:browser-origin-return", {
        origin: o,
        currentUrl: location.href
      });
    } catch (n) {
      l("origin-return send failed", s(n));
    }
  });
}
function z() {
  let e = b();
  e == null || typeof window > "u" || k(window, r => {
    e.send(E, r);
  });
}
function L() {
  try {
    z();
  } catch (e) {
    l("mouse history install failed", s(e));
  }
  try {
    G();
  } catch (e) {
    l("local network polyfill install failed", s(e));
  }
  try {
    U();
  } catch (e) {
    l("webauthn polyfill install failed", s(e));
  }
  try {
    V();
  } catch (e) {
    l("dialog stubs install failed", s(e));
  }
  try {
    X();
  } catch (e) {
    l("ipc wiring install failed", s(e));
  }
}
