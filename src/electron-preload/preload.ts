import { contextBridge, ipcRenderer } from "electron";
import { desktop, coordinatorPort } from "./desktop.js";
import {
  createRpc,
  electronTransport,
  coordinator,
  type CoordinatorPort,
} from "./runtime.js";
import { mountNoArgumentMethods } from "./contracts.js";

contextBridge.exposeInMainWorld("desktop", desktop);
contextBridge.exposeInMainWorld("__duneReliability", {
  report: (payload: unknown) =>
    ipcRenderer.send("dune:reliability-report", payload),
});
contextBridge.exposeInMainWorld("coordinatorPort", coordinatorPort);
let tracePort: MessagePort | null = null;
contextBridge.exposeInMainWorld("sandRenderTrace", {
  postMessage(payload: unknown) {
    if (tracePort === null) {
      const channel = new MessageChannel();
      ipcRenderer.postMessage("sand:render-trace-port", null, [channel.port2]);
      tracePort = channel.port1;
    }
    tracePort.postMessage(payload);
  },
});
const rateArgument = process.argv.find((argument) =>
  argument.startsWith("--dune-render-trace-sample-rate="),
);
if (rateArgument !== undefined) {
  const rate = Number(
    rateArgument.slice("--dune-render-trace-sample-rate=".length),
  );
  if (rate > 0 && rate <= 1)
    contextBridge.exposeInMainWorld("__duneRenderTraceSampleRate", rate);
}
contextBridge.exposeInMainWorld(
  "desktopMount",
  createRpc("desktop-mount", electronTransport, mountNoArgumentMethods),
);
ipcRenderer.on("sand:coordinator-port", (event) => {
  const port = event.ports[0];
  if (!port) return;
  const bridge: CoordinatorPort = {
    postMessage: (payload) => port.postMessage(payload),
    close: () => port.close(),
    start: () => port.start(),
    addEventListener(name, listener) {
      if (name === "message")
        port.addEventListener("message", (event) =>
          listener({ data: event.data }),
        );
      else port.addEventListener("close", () => listener({}));
    },
  };
  coordinator.deliver(bridge);
});
window.addEventListener("online", () =>
  ipcRenderer.send("sand:network-online"),
);
