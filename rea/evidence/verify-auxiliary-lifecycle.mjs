import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import { build } from "esbuild";
async function compiled(name) {
  return (
    await build({
      entryPoints: [`src/auxiliary-preloads/preload-${name}.ts`],
      bundle: true,
      platform: "node",
      format: "cjs",
      external: ["electron"],
      write: false,
    })
  ).outputFiles[0].text;
}
const flush = async () => {
  for (let index = 0; index < 12; index++) await Promise.resolve();
};
function eventTarget() {
  const listeners = new Map();
  return {
    listeners,
    addEventListener(name, callback, options) {
      const entries = listeners.get(name) ?? [];
      entries.push({
        callback,
        once: typeof options === "object" && options.once === true,
      });
      listeners.set(name, entries);
    },
    removeEventListener(name, callback) {
      listeners.set(
        name,
        (listeners.get(name) ?? []).filter(
          (item) => item.callback !== callback,
        ),
      );
    },
    emit(name, event = {}) {
      for (const entry of [...(listeners.get(name) ?? [])]) {
        entry.callback(event);
        if (entry.once) this.removeEventListener(name, entry.callback);
      }
    },
    dispatchEvent(event) {
      this.emit(event.type, event);
      return true;
    },
  };
}
function harness(source, kind, credentialMode = "resolved") {
  const messages = [];
  const ipcListeners = new Map();
  const scripts = [];
  const styles = [];
  const timers = new Map();
  let now = 1000;
  let nextTimer = 0;
  let disconnects = 0;
  const observers = [];
  const classNames = new Set(
    kind === "vnc" ? ["noVNC_connected", "noVNC_open"] : [],
  );
  class Input {
    constructor() {
      this._value = "";
      this.id = "name";
      this.placeholder = "Name";
      this.clicked = 0;
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
    }
    getAttribute(name) {
      return name === "aria-label" ? "Name" : null;
    }
    getBoundingClientRect() {
      return { width: 100, height: 20 };
    }
    focus() {
      messages.push(["focus-name"]);
    }
    dispatchEvent(event) {
      messages.push(["input-event", event.type]);
    }
  }
  class Textarea {
    value = "vm-text";
  }
  class Canvas {}
  const input = new Input();
  const clipboard = new Textarea();
  const button = {
    textContent: "Join now",
    getAttribute: () => "",
    getBoundingClientRect: () => ({ width: 100, height: 20 }),
    click() {
      messages.push(["join-click"]);
    },
  };
  const classList = {
    contains: (name) => classNames.has(name),
    remove: (name) => classNames.delete(name),
  };
  const root = {
    lang: "en",
    classList,
    appendChild(script) {
      scripts.push(["meeting-injection", script.textContent]);
    },
  };
  const document = Object.assign(eventTarget(), {
    visibilityState: "visible",
    documentElement: root,
    body: { innerText: "Join now" },
    head: root,
    getElementById(id) {
      if (id === "noVNC_clipboard_text") return clipboard;
      if (id === "noVNC_control_bar") return { classList };
      return null;
    },
    querySelectorAll(selector) {
      if (
        kind === "meeting" &&
        selector === "input[type='text'], input:not([type])"
      )
        return [input];
      if (kind === "meeting" && selector === "button, [role='button']")
        return [button];
      return [];
    },
    createElement() {
      return { textContent: "", remove() {} };
    },
  });
  const location =
    kind === "vnc"
      ? {
          hostname: "vm.local",
          pathname: "/vnc.html",
          search: "?sandInteractive=1",
          origin: "https://vm.local",
          href: "https://vm.local/vnc.html?sandInteractive=1",
        }
      : kind === "meeting"
        ? {
            hostname: "meet.google.com",
            pathname: "/abc",
            search: "",
            origin: "https://meet.google.com",
            href: "https://meet.google.com/abc",
          }
        : {
            hostname: "identity.okta.com",
            pathname: "/",
            search: "",
            origin: "https://identity.okta.com",
            href: "https://identity.okta.com/",
          };
  document.location = location;
  const window = eventTarget();
  const navigator = {
    credentials: {
      get(...args) {
        messages.push(["credentials-get", args]);
        return credentialMode === "resolved"
          ? Promise.resolve({ id: "credential" })
          : new Promise(() => {});
      },
      create(...args) {
        messages.push(["credentials-create", args]);
        return Promise.resolve({ id: "created" });
      },
    },
  };
  const ipcRenderer = {
    send(channel, payload) {
      messages.push(["send", channel, payload]);
    },
    sendToHost(channel, payload) {
      messages.push(["host", channel, payload]);
    },
    on(channel, callback) {
      const entries = ipcListeners.get(channel) ?? [];
      entries.push(callback);
      ipcListeners.set(channel, entries);
    },
    invoke(channel, payload) {
      messages.push(["invoke", channel, payload]);
      return Promise.resolve({
        ok: true,
        value: channel.endsWith(":readClipboard") ? "host-text" : undefined,
      });
    },
  };
  const webFrame = {
    insertCSS(css) {
      styles.push(css);
    },
    executeJavaScript(script) {
      scripts.push(["execute", script]);
      if (script.includes("JSON.stringify(window.__sandVncLivenessBeacon"))
        return Promise.resolve(
          JSON.stringify({
            keys: 0,
            clicks: 0,
            moves: 0,
            drawOps: 0,
            inBytes: 0,
          }),
        );
      return Promise.resolve(
        script.includes("clipboardPasteFrom") ? true : undefined,
      );
    },
  };
  class MockDate extends Date {
    static now() {
      return now;
    }
  }
  const context = {
    require(name) {
      assert.equal(name, "electron");
      return {
        ipcRenderer,
        webFrame,
        contextBridge: { exposeInMainWorld() {} },
      };
    },
    module: { exports: {} },
    exports: {},
    console,
    TextEncoder,
    Date: MockDate,
    performance: { now: () => now },
    setTimeout(callback, delay) {
      const handle = { id: ++nextTimer, unref() {} };
      timers.set(handle, { callback, due: now + delay, delay });
      return handle;
    },
    clearTimeout(handle) {
      timers.delete(handle);
    },
    AbortController,
    Event,
    DOMException,
    URL,
    URLSearchParams,
    window,
    document,
    location,
    navigator,
    process: { argv: ["electron", "--sand-meetings-display-name=Grok%20Bot"] },
    HTMLInputElement: Input,
    HTMLTextAreaElement: Textarea,
    HTMLCanvasElement: Canvas,
    MutationObserver: class {
      constructor(callback) {
        this.callback = callback;
        observers.push(this);
      }
      observe() {}
      disconnect() {
        disconnects += 1;
      }
    },
    globalThis: null,
  };
  context.globalThis = context;
  vm.runInNewContext(source, context);
  return {
    messages,
    scripts,
    styles,
    timers,
    window,
    document,
    location,
    navigator,
    clipboard,
    input,
    classNames,
    get disconnects() {
      return disconnects;
    },
    notifyClassChange() {
      for (const observer of observers) observer.callback([]);
    },
    emitIpc(channel, value) {
      for (const callback of ipcListeners.get(channel) ?? [])
        callback({}, value);
    },
    async advance(ms) {
      now += ms;
      const ready = [...timers].filter(([, timer]) => timer.due <= now);
      for (const [handle, timer] of ready) {
        timers.delete(handle);
        timer.callback();
      }
      await flush();
    },
    summary() {
      const programKinds = scripts.map(([, script]) =>
        script.includes("function Be(")
          ? "meeting-media"
          : script.includes("__sandVncImeFieldInstalled")
            ? "vnc-ime"
            : script.includes("__sandVncMacKeysInstalled")
              ? "vnc-mac"
              : script.includes("JSON.stringify(window.__sandVncLivenessBeacon")
                ? "vnc-liveness-sample"
                : script.includes("__sandVncLivenessBeacon")
                  ? "vnc-liveness-install"
                  : script.includes("hold =")
                    ? "vnc-frame-pacing"
                    : script.includes(".set(") &&
                        script.includes("__sandVncFrameHold")
                      ? "vnc-hold"
                      : script.includes("clipboardPasteFrom")
                        ? "vnc-paste"
                        : script.includes("__sandLocalNetworkPolyfill")
                          ? "network-polyfill"
                          : "unknown",
      );
      return {
        messages,
        programKinds,
        styleCount: styles.length,
        timers: [...timers.values()]
          .map((value) => value.delay)
          .sort((a, b) => a - b),
        disconnects,
        clipboard: clipboard.value,
        input: input.value,
      };
    },
  };
}
function same(before, after, label) {
  assert.equal(
    JSON.stringify(after.summary()),
    JSON.stringify(before.summary()),
    label,
  );
}
for (const kind of ["webview", "vnc", "meeting"]) {
  const original = fs.readFileSync(
    `rea/recovered/dist/electron-preload/preload-${kind}.cjs`,
    "utf8",
  );
  const replacement = await compiled(kind);
  const before = harness(original, kind);
  const after = harness(replacement, kind);
  await flush();
  same(before, after, `${kind} installation`);
  if (kind === "webview") {
    for (const h of [before, after]) {
      let suppressed = 0;
      for (const name of ["mousedown", "mouseup", "auxclick"])
        h.window.emit(name, {
          button: 3,
          isTrusted: true,
          preventDefault() {
            suppressed++;
          },
          stopPropagation() {},
          stopImmediatePropagation() {},
        });
      assert.equal(suppressed, 3);
      h.window.emit("mousedown", { button: 4, isTrusted: false });
      assert.equal(h.window.confirm(), true);
      assert.equal(h.window.prompt(), null);
      h.window.alert("hello");
      await h.navigator.credentials.get({ publicKey: { challenge: "mock" } });
      await h.navigator.credentials.create({
        publicKey: { challenge: "mock" },
      });
      h.window.emit("beforeunload");
      h.window.emit("pagehide");
      h.window.emit("pageshow", { persisted: false });
      h.window.emit("pageshow", { persisted: true });
      h.location.origin = "https://other.invalid";
      h.window.emit("pageshow", { persisted: true });
    }
    await flush();
    same(
      before,
      after,
      "webview lifecycle, dialogs, trusted navigation and credentials",
    );
    const stalledBefore = harness(original, kind, "pending");
    const stalledAfter = harness(replacement, kind, "pending");
    for (const h of [stalledBefore, stalledAfter]) {
      const rejected = h.navigator.credentials
        .get({ publicKey: {} })
        .catch((error) => ({ name: error.name, message: error.message }));
      await h.advance(60000);
      assert.equal(
        JSON.stringify(await rejected),
        JSON.stringify({
          name: "NotAllowedError",
          message: "Passkey request stalled",
        }),
      );
    }
    same(stalledBefore, stalledAfter, "webview passkey stall");
  }
  if (kind === "vnc") {
    for (const h of [before, after]) {
      h.emitIpc("sand:vnc-viewer-visible", true);
      await flush();
      h.document.emit("keydown", { key: "ArrowDown" });
      h.classNames.delete("noVNC_connected");
      h.classNames.add("noVNC_disconnecting");
      h.notifyClassChange();
      h.classNames.delete("noVNC_disconnecting");
      h.classNames.add("noVNC_connected");
      h.notifyClassChange();
      h.emitIpc("sand:vnc-viewer-visible", false);
      h.document.visibilityState = "hidden";
      h.document.emit("visibilitychange");
      await h.advance(1000);
      h.window.emit("pagehide");
      await flush();
      assert.equal(h.timers.size, 0);
      assert.equal(h.disconnects, 1);
    }
    same(
      before,
      after,
      "VNC clipboard, keys, connect/disconnect/reconnect, frame hold and teardown",
    );
  }
  if (kind === "meeting") {
    for (const h of [before, after]) {
      assert.equal(h.input.value, "Grok Bot");
      await h.advance(1000);
      await h.advance(1000);
      h.document.body.innerText = "you left the meeting";
      await h.advance(1000);
      h.emitIpc("sand:meetings:avatar-frame", { state: "broken" });
    }
    same(
      before,
      after,
      "meeting injection, leading polls, name entry, join and page status",
    );
  }
  console.log(
    `${kind}: shipped-entrypoint mocked lifecycle equivalence passed`,
  );
}
