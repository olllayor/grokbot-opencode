import type { IpcRenderer, WebFrame } from "electron";
import { deadline, DeadlineExceededError } from "./reliability.js";
export const mouseHistoryChannel = "sand:mouse-history-navigation";
export function installMouseHistoryNavigation(
  target: Window,
  navigate: (direction: -1 | 1) => void,
): () => void {
  let handling = false;
  const direction = (button: number) =>
    button === 3 ? -1 : button === 4 ? 1 : null;
  const suppress = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  };
  const down = (event: MouseEvent) => {
    const delta = direction(event.button);
    if (delta === null || event.isTrusted === false) return;
    handling = true;
    suppress(event);
    navigate(delta);
  };
  const up = (event: MouseEvent) => {
    if (handling && direction(event.button) !== null) suppress(event);
  };
  const click = (event: MouseEvent) => {
    if (handling && direction(event.button) !== null) {
      suppress(event);
      handling = false;
    }
  };
  target.addEventListener("mousedown", down, true);
  target.addEventListener("mouseup", up, true);
  target.addEventListener("auxclick", click, true);
  return () => {
    target.removeEventListener("mousedown", down, true);
    target.removeEventListener("mouseup", up, true);
    target.removeEventListener("auxclick", click, true);
  };
}
export function errorMessage(error: unknown): string | undefined {
  return error instanceof Error ? error.message : undefined;
}
export function warn(...values: unknown[]): void {
  console.warn("[sand-webview-preload]", ...values);
}
let loaded = false;
let ipc: IpcRenderer | null = null;
let frame: WebFrame | null = null;
export function getIpcRenderer(): IpcRenderer | null {
  loadElectron();
  return ipc;
}
export function getWebFrame(): WebFrame | null {
  loadElectron();
  return frame;
}
function loadElectron(): void {
  if (loaded) return;
  loaded = true;
  try {
    const electron = require("electron") as typeof import("electron");
    ipc = electron.ipcRenderer ?? null;
    frame = electron.webFrame ?? null;
  } catch (error) {
    warn("electron module unavailable", errorMessage(error));
  }
}
const identityHostSuffixes = [
  ".okta.com",
  ".okta-emea.com",
  ".oktapreview.com",
  ".duosecurity.com",
  ".login.microsoftonline.com",
  ".onelogin.com",
  ".auth0.com",
  ".pingidentity.com",
  ".rippling.com",
];
export function supportsLocalNetworkPolyfill(host: unknown): boolean {
  return (
    typeof host === "string" &&
    host.length > 0 &&
    identityHostSuffixes.some((suffix) => host.endsWith(suffix))
  );
}
export const localNetworkPolyfillSource = `
(function () {
 var permissions = navigator && navigator.permissions;
 if (!permissions || typeof permissions.query !== "function") return;
 if (permissions.__sandLocalNetworkPolyfill) return;
 permissions.__sandLocalNetworkPolyfill = true;
 var originalQuery = permissions.query.bind(permissions);
 permissions.query = function (descriptor) {
  var name = descriptor && descriptor.name;
  if (name === "local-network-access" || name === "local-network") {
   var status = new EventTarget();
   Object.defineProperties(status, { name: { value: name }, state: { value: "granted" }, onchange: { value: null, writable: true } });
   return Promise.resolve(status);
  }
  return originalQuery(descriptor);
 };
})();`;
function installLocalNetworkPolyfill(): void {
  const webFrame = getWebFrame();
  if (
    webFrame === null ||
    typeof location === "undefined" ||
    !supportsLocalNetworkPolyfill(location.hostname)
  )
    return;
  void webFrame
    .executeJavaScript(localNetworkPolyfillSource)
    .catch((error) =>
      warn("local network polyfill injection failed", errorMessage(error)),
    );
}
const passkeyPolicy = deadline({
  name: "sand-webview-passkey-stall",
  timeoutMs: 60000,
});
function stallError(): Error {
  try {
    return new DOMException("Passkey request stalled", "NotAllowedError");
  } catch {
    const error = new Error("Passkey request stalled");
    error.name = "NotAllowedError";
    return error;
  }
}
function wrapCredentialMethod<A extends unknown[], T>(
  bridge: IpcRenderer,
  method: "create" | "get",
  original: (...args: A) => PromiseLike<T>,
): (...args: A) => Promise<T> {
  return (...args) => {
    const since = Date.now();
    let call: Promise<T>;
    try {
      call = Promise.resolve(original.apply(navigator.credentials, args));
    } catch (error) {
      return Promise.reject(error);
    }
    return passkeyPolicy
      .run(() => call)
      .catch((error: unknown) => {
        if (error instanceof DeadlineExceededError) {
          try {
            bridge.sendToHost("sand:browser-passkey-stalled", {
              method,
              since,
            });
          } catch (sendError) {
            warn("passkey stall send failed", errorMessage(sendError));
          }
          throw stallError();
        }
        throw error;
      });
  };
}
function installWebAuthnPolyfill(): void {
  if (typeof navigator === "undefined") return;
  const bridge = getIpcRenderer();
  if (bridge === null || !navigator.credentials) return;
  if (typeof navigator.credentials.create === "function")
    navigator.credentials.create = wrapCredentialMethod(
      bridge,
      "create",
      navigator.credentials.create.bind(navigator.credentials),
    );
  if (typeof navigator.credentials.get === "function")
    navigator.credentials.get = wrapCredentialMethod(
      bridge,
      "get",
      navigator.credentials.get.bind(navigator.credentials),
    );
}
type DialogWindow = Window & { __sandDialogOverridesApplied?: boolean };
function installDialogStubs(): void {
  if (typeof window === "undefined") return;
  const target = window as DialogWindow;
  if (target.__sandDialogOverridesApplied === true) return;
  target.alert = () => {};
  target.confirm = () => true;
  target.prompt = () => null;
  target.__sandDialogOverridesApplied = true;
}
function installPopupLifecycle(): void {
  const bridge = getIpcRenderer();
  if (
    bridge === null ||
    typeof window === "undefined" ||
    typeof location === "undefined"
  )
    return;
  const origin = location.origin;
  const closed = () => {
    try {
      bridge.sendToHost("sand:browser-popup-closed", { url: location.href });
    } catch (error) {
      warn("popup-closed send failed", errorMessage(error));
    }
  };
  window.addEventListener("beforeunload", closed);
  window.addEventListener("pagehide", closed);
  window.addEventListener("pageshow", (event) => {
    if (event.persisted !== true || location.origin !== origin) return;
    try {
      bridge.sendToHost("sand:browser-origin-return", {
        origin,
        currentUrl: location.href,
      });
    } catch (error) {
      warn("origin-return send failed", errorMessage(error));
    }
  });
}
export function installSandBrowserPreload(): void {
  const installations: [string, () => void][] = [
    [
      "mouse history",
      () => {
        const bridge = getIpcRenderer();
        if (bridge !== null && typeof window !== "undefined")
          installMouseHistoryNavigation(window, (delta) =>
            bridge.send(mouseHistoryChannel, delta),
          );
      },
    ],
    ["local network polyfill", installLocalNetworkPolyfill],
    ["webauthn polyfill", installWebAuthnPolyfill],
    ["dialog stubs", installDialogStubs],
    ["ipc wiring", installPopupLifecycle],
  ];
  for (const [label, install] of installations) {
    try {
      install();
    } catch (error) {
      warn(`${label} install failed`, errorMessage(error));
    }
  }
}
