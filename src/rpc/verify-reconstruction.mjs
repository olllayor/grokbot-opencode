import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import assert from "node:assert/strict";
import path from "node:path";
const bundle = fs.readFileSync("rea/evidence/main-app-readable.cjs", "utf8");
const sf = ts.createSourceFile(
  "main-app.cjs",
  bundle,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.JS,
);
const names = new Set([
  "w0t",
  "NRe",
  "T0t",
  "g4",
  "R0t",
  "x0t",
  "xh",
  "M0t",
  "P0t",
  "B0t",
  "D0t",
  "_l",
]);
const functions = [];
function walk(n) {
  if (ts.isFunctionDeclaration(n) && names.has(n.name?.text))
    functions.push(n.getText(sf));
  ts.forEachChild(n, walk);
}
walk(sf);
const original = vm.runInNewContext(
  `(()=>{const MRe=120,LRe=200,DRe='edge/validator-failed',p4='edge/invalid-args',BRe='edge/unknown-method',ORe='edge/untrusted-sender',ZN='edge/handler-failed';class ar extends Error {constructor(v){super(v.code+': '+v.detail);this.code=v.code;this.detail=v.detail;this.name='EdgeCallFailure';}}class xC extends Error{constructor(v){super('serveEdge('+v.edge+'): "'+v.method+'" names undeclared trust policy "'+v.trust+'".');this.name='EdgeTrustPolicyMissingError';}}${functions.join("\n")}return {validateArguments:M0t,probeMethod:P0t,serveMethods:B0t,Failure:ar};})()`,
  { Error, Promise, Set, Map },
);
const cache = new Map();
function load(file) {
  file = path.resolve(file.replace(/\.js$/, ".ts"));
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: {
      target: ts.ScriptTarget.ES2023,
      module: ts.ModuleKind.CommonJS, esModuleInterop: true,
    },
  }).outputText;
  vm.runInThisContext("(function(require,module,exports){" + code + "\n})")(
    (name) => load(path.resolve(path.dirname(file), name)),
    module,
    module.exports,
  );
  return module.exports;
}
const rebuilt = load("src/rpc/server.ts"),
  schemas = load("src/rpc/schema.ts");
const normalize = (value) => JSON.parse(JSON.stringify(value));
let checks = 0;
async function equal(a, b) {
  assert.deepEqual(normalize(await a), normalize(await b));
  checks++;
}
for (const result of [
  null,
  undefined,
  {},
  { value: undefined },
  { value: { changed: true } },
  { issues: [] },
  { issues: [{}] },
  { issues: [{ message: "bad", path: ["a", { key: 2 }] }] },
  {
    issues: [
      { message: "x".repeat(230), path: ["a".repeat(130)] },
      { message: "second" },
    ],
  },
]) {
  const validator = () => result;
  await equal(
    original.validateArguments("method", validator, {}),
    rebuilt.validateArguments("method", validator, {}),
  );
}
await equal(
  original.validateArguments(
    "method",
    () => {
      throw Error("hidden");
    },
    {},
  ),
  rebuilt.validateArguments(
    "method",
    () => {
      throw Error("hidden");
    },
    {},
  ),
);
for (const payload of [
  undefined,
  null,
  42,
  "known",
  "missing",
  "x".repeat(300),
])
  await equal(
    original.probeMethod("main", new Set(["known"]), payload),
    rebuilt.probeMethod("main", new Set(["known"]), payload),
  );
function transport() {
  const handlers = new Map(),
    removed = [],
    broadcasts = [];
  return {
    handlers,
    removed,
    broadcasts,
    handle(c, h) {
      handlers.set(c, h);
    },
    removeHandler(c) {
      removed.push(c);
    },
    broadcast(c, p) {
      broadcasts.push({ c, p });
    },
  };
}
for (const trusted of [true, false]) {
  const a = transport(),
    b = transport();
  let runsA = 0,
    runsB = 0;
  const methods = [
    {
      method: "operation",
      validate: (value) => ({ value: { stripped: value.keep } }),
    },
  ];
  const opts = (tr, run) => ({
    transport: tr,
    trust: {
      renderer: { kind: "require", test: () => trusted, denial: "denied" },
    },
    handlers: { operation: { trust: "renderer", run } },
  });
  const aa = original.serveMethods(
      "main",
      methods,
      opts(a, () => {
        runsA++;
        return "result";
      }),
    ),
    bb = rebuilt.serveMethods(
      "main",
      methods,
      opts(b, () => {
        runsB++;
        return "result";
      }),
    );
  await equal(
    a.handlers.get("dune-rpc:main:m:operation")({}, { keep: 1, drop: 2 }),
    b.handlers.get("dune-rpc:main:m:operation")({}, { keep: 1, drop: 2 }),
  );
  assert.equal(runsA, runsB);
  await equal(
    a.handlers.get("dune-rpc:main:probe")({}, "operation"),
    b.handlers.get("dune-rpc:main:probe")({}, "operation"),
  );
  aa.emit("changed", { state: 1 });
  bb.emit("changed", { state: 1 });
  assert.deepEqual(a.broadcasts, b.broadcasts);
  aa.dispose();
  aa.dispose();
  bb.dispose();
  bb.dispose();
  assert.deepEqual(a.removed, b.removed);
}
for (const declared of [false, true]) {
  const a = transport(),
    b = transport();
  const opts = (tr) => ({
    transport: tr,
    handlers: declared ? { operation: { trust: "missing", run() {} } } : {},
    trust: {},
  });
  let left, right;
  try {
    original.serveMethods(
      "main",
      [{ method: "operation", validate: null }],
      opts(a),
    );
  } catch (e) {
    left = { name: e.name, message: e.message };
  }
  try {
    rebuilt.serveMethods(
      "main",
      [{ method: "operation", validate: null }],
      opts(b),
    );
  } catch (e) {
    right = { name: e.name, message: e.message };
  }
  assert.deepEqual(left, right);
  checks++;
}
const validator = schemas.rpcObject({
  name: schemas.rpcString(),
  count: schemas.rpcOptional(schemas.rpcNumber()),
});
assert.deepEqual(validator.check({ name: "ok", extra: 1 }, []), {
  ok: true,
  value: { name: "ok" },
});
assert.equal(validator.check({ name: "ok", count: NaN }, []).ok, false);
console.log(
  `RPC differential checks passed: ${checks} envelopes/probes/registration outcomes, trust gating, payload transform, broadcasts and idempotent teardown.`,
);
