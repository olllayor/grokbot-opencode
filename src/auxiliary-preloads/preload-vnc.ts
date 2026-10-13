import type { IpcRenderer, WebFrame } from "electron";
import {
  getIpcRenderer,
  getWebFrame,
  errorMessage,
  warn,
  installSandBrowserPreload,
} from "./browser-preload.js";
import { interval } from "./reliability.js";
import {
  clipboardPasteSource,
  framePacingSource,
  frameHoldSource,
  imeFieldSource,
  livenessBeaconSource,
  livenessSampleSource,
} from "./vnc-page-programs.js";
import { createLivenessSampler, parseLivenessSample } from "./vnc-liveness.js";
export interface VncDependencies {
  getIpcRenderer(): IpcRenderer | null;
  getWebFrame(): WebFrame | null;
  getErrorMessage(error: unknown): string | undefined;
  logWarn(...values: unknown[]): void;
  installSandBrowserPreload(): void;
}
const defaultDependencies: VncDependencies = {
  getIpcRenderer,
  getWebFrame,
  getErrorMessage: errorMessage,
  logWarn: warn,
  installSandBrowserPreload,
};
export const vncChannels = {
  hostKey: "sand:vnc-host-key",
  liveness: "sand:vnc-liveness",
  visible: "sand:vnc-viewer-visible",
  session: "sand:vnc-session",
} as const;
export function isInteractiveVnc(): boolean {
  if (
    typeof location === "undefined" ||
    !location.pathname.endsWith("/vnc.html")
  )
    return false;
  try {
    return new URLSearchParams(location.search).get("sandInteractive") === "1";
  } catch {
    return false;
  }
}
export function createClipboardMirror() {
  let hostText = "";
  let vmText = "";
  return {
    shouldSendHostText(text: string) {
      return text.length > 0 && text !== hostText && text !== vmText;
    },
    commitHostText(text: string) {
      hostText = text;
    },
    resolveVmText(text: string) {
      if (text.length === 0 || text === hostText || text === vmText)
        return null;
      vmText = text;
      return text;
    },
  };
}
function clipboardField(): HTMLTextAreaElement | null {
  if (typeof document === "undefined") return null;
  const field = document.getElementById("noVNC_clipboard_text");
  return field instanceof HTMLTextAreaElement ? field : null;
}
class VncEdgeCallFailure extends Error {
  readonly code: string;
  readonly detail: string;
  constructor(failure: { code: string; detail: string }) {
    super(`${failure.code}: ${failure.detail}`);
    this.name = "EdgeCallFailure";
    this.code = failure.code;
    this.detail = failure.detail;
  }
}
function isEnvelope(value: unknown): value is {
  ok: boolean;
  value?: unknown;
  failure: { code: string; detail: string };
} {
  return (
    typeof value === "object" &&
    value !== null &&
    "ok" in value &&
    typeof value.ok === "boolean"
  );
}
type VncValidation =
  | { ok: true; value: { text: string } }
  | { ok: false; path: string[]; expected: string; received: string };
const shapeName = (value: unknown) =>
  value === null ? "null" : Array.isArray(value) ? "array" : typeof value;
function checkClipboardArgs(value: unknown, path: string[]): VncValidation {
  if (typeof value !== "object" || value === null || Array.isArray(value))
    return { ok: false, path, expected: "object", received: shapeName(value) };
  const text = Object.hasOwn(value, "text")
    ? (value as Record<string, unknown>).text
    : undefined;
  return typeof text === "string"
    ? { ok: true, value: { text } }
    : {
        ok: false,
        path: [...path, "text"],
        expected: "string",
        received: shapeName(text),
      };
}
const clipboardArgsSchema = {
  expects: "object",
  check: checkClipboardArgs,
  "~standard": {
    version: 1,
    vendor: "dune",
    validate(value: unknown) {
      const checked = checkClipboardArgs(value, []);
      return checked.ok
        ? { value: checked.value }
        : {
            issues: [
              {
                message: `must be ${checked.expected}, got ${checked.received}`,
                path: checked.path,
              },
            ],
          };
    },
  },
};
export const boxVncDeclaration = Object.freeze({
  kind: "rpc-edge",
  edge: "box-vnc",
  methods: {
    readClipboard: { schema: null },
    writeClipboard: { schema: clipboardArgsSchema },
  },
  hasEvents: false,
});
function clipboardBridge(bridge: IpcRenderer) {
  const hook = (globalThis as unknown as Record<string, unknown>)
    .__DUNE_DEVTOOLS_HOOK__;
  if (
    typeof hook === "object" &&
    hook !== null &&
    !Array.isArray(hook) &&
    "version" in hook &&
    hook.version === 1 &&
    "register" in hook &&
    typeof hook.register === "function"
  )
    hook.register({
      kind: "rpc-edge",
      role: "bridge",
      declaration: boxVncDeclaration,
      trust: [],
    });
  async function call(method: string, args: unknown): Promise<unknown> {
    let reply: unknown;
    try {
      reply = await bridge.invoke(`dune-rpc:box-vnc:m:${method}`, args);
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      let probe: unknown;
      try {
        probe = await bridge.invoke("dune-rpc:box-vnc:probe", method);
      } catch {
        throw new VncEdgeCallFailure({ code: "edge/transport-failed", detail });
      }
      if (
        isEnvelope(probe) &&
        !probe.ok &&
        probe.failure.code === "edge/unknown-method"
      )
        throw new VncEdgeCallFailure(probe.failure);
      throw new VncEdgeCallFailure({ code: "edge/transport-failed", detail });
    }
    if (!isEnvelope(reply))
      throw new VncEdgeCallFailure({
        code: "edge/handler-failed",
        detail: "The edge replied outside its envelope.",
      });
    if (reply.ok) return reply.value;
    throw new VncEdgeCallFailure(reply.failure);
  }
  return {
    readClipboard: () => call("readClipboard", {}) as Promise<string>,
    writeClipboard: (args: { text: string }) => call("writeClipboard", args),
  };
}
function hideChrome(deps: VncDependencies): void {
  if (
    typeof location === "undefined" ||
    !location.pathname.endsWith("/vnc.html")
  )
    return;
  try {
    deps
      .getWebFrame()
      ?.insertCSS(
        `#noVNC_control_bar,#noVNC_control_bar_handle,#noVNC_control_bar_anchor,#noVNC_status,.noVNC_logo{display:none!important;pointer-events:none!important;visibility:hidden!important}:root:not(.noVNC_loading):not(.noVNC_connecting):not(.noVNC_disconnecting):not(.noVNC_reconnecting) #noVNC_transition{display:none!important}`,
      );
  } catch (error) {
    deps.logWarn("noVNC CSS injection failed", deps.getErrorMessage(error));
  }
  if (typeof document === "undefined") return;
  const close = () =>
    document
      .getElementById("noVNC_control_bar")
      ?.classList.remove("noVNC_open");
  close();
  document.addEventListener("DOMContentLoaded", close, { once: true });
  window.addEventListener("load", close, { once: true });
}
function installClipboard(deps: VncDependencies): void {
  const bridge = deps.getIpcRenderer();
  if (bridge === null) return;
  const client = clipboardBridge(bridge);
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    !isInteractiveVnc()
  )
    return;
  const mirror = createClipboardMirror();
  let lastReadAt = 0;
  let visible = false;
  const pasteHost = () => {
    if (!visible) return;
    const now = Date.now();
    if (now - lastReadAt < 200) return;
    lastReadAt = now;
    void client
      .readClipboard()
      .then((text) => {
        if (!mirror.shouldSendHostText(text)) return;
        const frame = deps.getWebFrame();
        void frame
          ?.executeJavaScript(clipboardPasteSource(text))
          .then((success) => {
            if (success !== true || text.length === 0) return;
            mirror.commitHostText(text);
            const field = clipboardField();
            if (field !== null) field.value = text;
          })
          .catch((error) =>
            deps.logWarn(
              "vnc clipboard paste failed",
              deps.getErrorMessage(error),
            ),
          );
      })
      .catch((error) =>
        deps.logWarn("vnc clipboard read failed", deps.getErrorMessage(error)),
      );
  };
  bridge.on(vncChannels.visible, (_event, value: unknown) => {
    const next = value === true;
    const becameVisible = next && !visible;
    visible = next;
    if (becameVisible) pasteHost();
  });
  const loop = interval({
    name: "vnc-clipboard-mirror",
    intervalMs: 500,
  }).start(async () => {
    if (!visible) return;
    const field = clipboardField();
    if (field === null) return;
    const text = mirror.resolveVmText(field.value);
    if (text !== null)
      void client
        .writeClipboard({ text })
        .catch((error) =>
          deps.logWarn(
            "vnc clipboard write failed",
            deps.getErrorMessage(error),
          ),
        );
  });
  window.addEventListener("focus", pasteHost);
  document.addEventListener("mousedown", pasteHost, true);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") pasteHost();
  });
  window.addEventListener("pagehide", () => loop.dispose(), { once: true });
}
function forwardHostKeys(deps: VncDependencies): void {
  const bridge = deps.getIpcRenderer();
  if (bridge === null || typeof document === "undefined" || !isInteractiveVnc())
    return;
  const keys = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
  document.addEventListener(
    "keydown",
    (event) => {
      if (keys.has(event.key)) {
        try {
          bridge.sendToHost(vncChannels.hostKey, event.key);
        } catch (error) {
          deps.logWarn(
            "vnc host key forward failed",
            deps.getErrorMessage(error),
          );
        }
      }
    },
    true,
  );
}
function reportSession(deps: VncDependencies): void {
  const bridge = deps.getIpcRenderer();
  if (
    bridge === null ||
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    typeof location === "undefined" ||
    !location.pathname.endsWith("/vnc.html")
  )
    return;
  let connections = 0;
  let wasConnected = false;
  let lastState: string | null = null;
  const report = (phase: string, clean: boolean) => {
    try {
      bridge.sendToHost(vncChannels.session, JSON.stringify({ phase, clean }));
    } catch (error) {
      deps.logWarn("vnc session report failed", deps.getErrorMessage(error));
    }
  };
  const update = () => {
    const classes = document.documentElement.classList;
    const state = classes.contains("noVNC_connected")
      ? "connected"
      : classes.contains("noVNC_reconnecting")
        ? "reconnecting"
        : classes.contains("noVNC_connecting")
          ? "connecting"
          : classes.contains("noVNC_disconnecting")
            ? "disconnecting"
            : "disconnected";
    if (state === lastState) return;
    lastState = state;
    if (state === "connected") {
      connections += 1;
      report(connections > 1 ? "reconnect" : "rfb_connect", true);
      wasConnected = true;
    } else if (wasConnected && state !== "connecting") {
      report("rfb_disconnect", state === "disconnecting");
      wasConnected = false;
    }
  };
  const observe = () => {
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    update();
    window.addEventListener("pagehide", () => observer.disconnect(), {
      once: true,
    });
  };
  if (document.documentElement === null)
    document.addEventListener("DOMContentLoaded", observe, { once: true });
  else observe();
}
function installFrameHold(deps: VncDependencies): void {
  const frame = deps.getWebFrame();
  if (
    frame === null ||
    typeof document === "undefined" ||
    !location.pathname.endsWith("/vnc.html")
  )
    return;
  const execute = (source: string) => {
    void frame
      .executeJavaScript(source)
      .catch((error) =>
        deps.logWarn("vnc frame hold failed", deps.getErrorMessage(error)),
      );
  };
  let viewerVisible = true;
  let held = false;
  const update = () => {
    const next = document.visibilityState === "hidden" || !viewerVisible;
    if (next !== held) {
      held = next;
      execute(frameHoldSource(held));
    }
  };
  execute(
    framePacingSource({
      minIntervalMs: isInteractiveVnc() ? 0 : 500,
      largeUpdateBytes: 8192,
      smallUpdateBytes: 1024,
      smallUpdatesAfterLarge: 4,
    }),
  );
  deps.getIpcRenderer()?.on(vncChannels.visible, (_event, value: unknown) => {
    if (typeof value === "boolean") {
      viewerVisible = value;
      update();
    }
  });
  document.addEventListener("visibilitychange", update);
  update();
}
function installLiveness(deps: VncDependencies): void {
  const bridge = deps.getIpcRenderer();
  const frame = deps.getWebFrame();
  if (
    bridge === null ||
    frame === null ||
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    !isInteractiveVnc()
  )
    return;
  void frame
    .executeJavaScript(livenessBeaconSource())
    .catch((error) =>
      deps.logWarn(
        "vnc liveness beacon install failed",
        deps.getErrorMessage(error),
      ),
    );
  const sampler = createLivenessSampler();
  const source = livenessSampleSource();
  const loop = interval({
    name: "vnc-liveness-sampler",
    intervalMs: 1000,
  }).start(async () => {
    if (
      document.documentElement?.classList.contains("noVNC_connected") !== true
    ) {
      sampler.reset();
      return;
    }
    try {
      const counters = parseLivenessSample(
        await frame.executeJavaScript(source),
      );
      if (counters === null) return;
      const report = sampler.sample(performance.now(), counters);
      if (report !== null) bridge.sendToHost(vncChannels.liveness, report);
    } catch (error) {
      deps.logWarn("vnc liveness sample failed", deps.getErrorMessage(error));
    }
  });
  window.addEventListener("pagehide", () => loop.dispose(), { once: true });
}
function installMacKeys(deps: VncDependencies): void {
  const frame = deps.getWebFrame();
  if (frame === null || !isInteractiveVnc()) return;
  const chords = [
    { code: "KeyA", keysym: 97, forceShift: false },
    { code: "KeyC", keysym: 99, forceShift: false },
    { code: "KeyV", keysym: 118, forceShift: true },
    { code: "KeyX", keysym: 120, forceShift: false },
    { code: "KeyZ", keysym: 122, forceShift: false },
  ];
  const held = [
    [65511, "MetaLeft"],
    [65512, "MetaRight"],
    [65513, "AltLeft"],
    [65514, "AltRight"],
    [65515, "SuperLeft"],
    [65516, "SuperRight"],
  ];
  const source = `(function(){if(window.__sandVncMacKeysInstalled)return;if(!/Mac/i.test((navigator&&navigator.platform)||''))return;window.__sandVncMacKeysInstalled=true;var CHORDS=${JSON.stringify(chords)};var HELD_MODIFIERS=${JSON.stringify(held)};var ui=null;import('./app/ui.js').then(function(m){ui=m&&m.default}).catch(function(){});document.addEventListener('keydown',function(e){if(!e.metaKey)return;var chord=CHORDS.find(function(entry){return entry.code===e.code});if(!chord)return;var rfb=ui&&ui.rfb;if(!rfb||typeof rfb.sendKey!=='function')return;e.preventDefault();e.stopImmediatePropagation();for(var i=0;i<HELD_MODIFIERS.length;i++){try{rfb.sendKey(HELD_MODIFIERS[i][0],HELD_MODIFIERS[i][1],false)}catch(_e){}}var withShift=e.shiftKey||chord.forceShift;var chordKeysym=withShift?chord.keysym-0x20:chord.keysym;rfb.sendKey(65507,'ControlLeft',true);if(withShift)rfb.sendKey(65505,'ShiftLeft',true);rfb.sendKey(chordKeysym,e.code,true);rfb.sendKey(chordKeysym,e.code,false);if(withShift)rfb.sendKey(65505,'ShiftLeft',false);rfb.sendKey(65507,'ControlLeft',false)},true)})();`;
  void frame
    .executeJavaScript(source)
    .catch((error) =>
      deps.logWarn(
        "vnc mac key mapping injection failed",
        deps.getErrorMessage(error),
      ),
    );
}
function installIme(deps: VncDependencies): void {
  const frame = deps.getWebFrame();
  if (frame !== null && isInteractiveVnc())
    void frame
      .executeJavaScript(imeFieldSource())
      .catch((error) =>
        deps.logWarn(
          "vnc ime field injection failed",
          deps.getErrorMessage(error),
        ),
      );
}
export function installVncPreload(
  deps: VncDependencies = defaultDependencies,
): void {
  deps.installSandBrowserPreload();
  const installations: [string, (deps: VncDependencies) => void][] = [
    ["noVNC chrome hider", hideChrome],
    ["vnc clipboard bridge", installClipboard],
    ["vnc host key forwarder", forwardHostKeys],
    ["vnc rfb session reporter", reportSession],
    ["vnc frame hold", installFrameHold],
    ["vnc mac key mapping", installMacKeys],
    ["vnc ime field", installIme],
    ["vnc liveness tripwire", installLiveness],
  ];
  for (const [name, install] of installations) {
    try {
      install(deps);
    } catch (error) {
      deps.logWarn(`${name} install failed`, deps.getErrorMessage(error));
    }
  }
}
installVncPreload();
