import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import ts from "typescript";
import path from "node:path";
const root = process.cwd();
function load(reconstructed) {
  const declarations = {},
    exposed = {},
    calls = [],
    events = [];
  const electron = {
    contextBridge: {
      exposeInMainWorld(name, value) {
        exposed[name] = value;
      },
    },
    ipcRenderer: {
      sendSync() {
        return { mainEdge: "served", experiments: {}, theme: {}, language: {} };
      },
      async invoke(channel, payload) {
        calls.push({ channel, payload });
        return { ok: true, value: true };
      },
      send(channel, payload) {
        calls.push({ channel, payload });
      },
      on(channel, listener) {
        events.push({ channel, listener });
      },
      once() {},
      off() {},
      postMessage() {},
    },
    webUtils: {
      getPathForFile() {
        return "";
      },
    },
    webFrame: {
      getZoomFactor() {
        return 1;
      },
    },
  };
  const context = vm.createContext({
    __DUNE_DEVTOOLS_HOOK__: {
      version: 1,
      register(entry) {
        declarations[entry.declaration.edge] = entry.declaration;
      },
    },
    console,
    URL,
    TextEncoder,
    Uint8Array,
    ArrayBuffer,
    MessageChannel,
    File,
    window: { addEventListener() {} },
    process: { argv: [], platform: "darwin", env: {} },
  });
  const cache = new Map();
  function requireModule(filename) {
    if (filename === "electron") return electron;
    filename = filename.replace(/\.js$/, ".ts");
    if (cache.has(filename)) return cache.get(filename).exports;
    const module = { exports: {} };
    cache.set(filename, module);
    const source = fs.readFileSync(filename, "utf8");
    const code = reconstructed
      ? ts.transpileModule(source, {
          compilerOptions: {
            target: ts.ScriptTarget.ES2023,
            module: ts.ModuleKind.CommonJS,
            esModuleInterop: true,
          },
        }).outputText
      : source;
    const wrapper = vm.runInContext(
      "(function(require,module,exports){" + code + "\n})",
      context,
    );
    wrapper(
      (name) =>
        requireModule(
          name === "electron"
            ? name
            : path.resolve(path.dirname(filename), name),
        ),
      module,
      module.exports,
    );
    return module.exports;
  }
  requireModule(
    path.resolve(
      root,
      reconstructed
        ? "src/electron-preload/preload.ts"
        : "rea/recovered/dist/electron-preload/preload.cjs",
    ),
  );
  return { exposed, calls, events, declarations };
}
function methods(value, prefix = "") {
  return Object.entries(value)
    .flatMap(([key, item]) =>
      typeof item === "function"
        ? [prefix + key]
        : item && typeof item === "object"
          ? methods(item, prefix + key + ".")
          : [],
    )
    .sort();
}
const original = load(false),
  rebuilt = load(true);
assert.deepEqual(
  Object.keys(rebuilt.exposed).sort(),
  Object.keys(original.exposed).sort(),
);
for (const key of Object.keys(original.exposed))
  assert.deepEqual(
    methods(rebuilt.exposed[key]),
    methods(original.exposed[key]),
    key,
  );
let validationChecks = 0;
const validationSamples = [
  undefined,
  null,
  false,
  42,
  NaN,
  "",
  "  ",
  "sample",
  [],
  {},
  {
    agentId: "agent",
    name: "Bot",
    markSvgDataUrl: "data:image/svg+xml,<svg/>",
  },
  { url: "https://example.com" },
  { enabled: true },
  { filename: "a", bytes: new Uint8Array([1, 2]) },
  { code: "123456" },
  { timeZone: "Europe/London" },
  { usedBytes: 123, limitBytes: 1000 },
  { audio: new Uint8Array([1]), mimeType: "audio/webm", language: "en" },
];
for (const [edge, declaration] of Object.entries(original.declarations)) {
  const rebuiltDeclaration = rebuilt.declarations[edge];
  assert.deepEqual(
    Object.keys(rebuiltDeclaration.methods),
    Object.keys(declaration.methods),
  );
  for (const [method, { schema }] of Object.entries(declaration.methods)) {
    const other = rebuiltDeclaration.methods[method].schema;
    assert.equal(other === null, schema === null);
    if (schema === null) continue;
    assert.equal(other["~standard"].vendor, schema["~standard"].vendor, method);
    for (const sample of validationSamples) {
      async function outcome(validator) {
        try {
          return { result: await validator["~standard"].validate(sample) };
        } catch (error) {
          return { error: error.message };
        }
      }
      assert.equal(
        JSON.stringify(await outcome(other)),
        JSON.stringify(await outcome(schema)),
        `${edge}.${method} schema`,
      );
      validationChecks++;
    }
  }
}
const adapters = [
  ["readAttachmentBytes", ["/a", 4096, "agent"]],
  ["stageMcpAppDocument", [{ html: "<main/>", csp: { connectDomains: [] } }]],
  [
    "agent.setGrokBotAgentVoice",
    ["agent", { voiceSpeed: 1.2, voiceLanguage: "en" }],
  ],
  ["mcp.authenticate", ["server", "account", "connector_card", true, "agent"]],
  ["agent.clientPersistence.write", ["key", "value"]],
  ["cursorAccount.prepareScmConnect", ["github", { forceOauth: true }]],
  [
    "localToolPermission.recordApproval",
    ["approval", "send", "recipient", "machine"],
  ],
  ["update.quitAndInstall", ["0.66.0"]],
  ["windowControls.setComposingAgent", ["agent", true]],
];
for (const [name, args] of adapters) {
  for (const app of [original, rebuilt]) {
    let owner = app.exposed.desktop;
    const parts = name.split(".");
    for (const part of parts.slice(0, -1)) owner = owner[part];
    await owner[parts.at(-1)](...args);
  }
}
assert.equal(JSON.stringify(rebuilt.calls), JSON.stringify(original.calls));
for (const app of [original, rebuilt]) {
  const dispose = app.exposed.desktop.update.onStatusEvent(() => {});
  assert.equal(typeof dispose, "function");
  dispose();
}
assert.deepEqual(
  rebuilt.events.map((x) => x.channel),
  original.events.map((x) => x.channel),
);
console.log(
  `Validated ${validationChecks} shipped-vs-reconstructed request schemas through executable developer-hook declarations.`,
);
console.log(
  `Verified ${methods(rebuilt.exposed.desktop).length} desktop functions, all exposed bridge function shapes, ${adapters.length} IPC argument traces, and subscription channels.`,
);
