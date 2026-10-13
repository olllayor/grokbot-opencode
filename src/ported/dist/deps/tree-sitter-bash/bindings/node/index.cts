declare var __dirname: any;
declare var module: any;
declare var require: any;
const root: any = (((require as any)("path") as any).join as any)(__dirname, "..", "..");
(module as any).exports = ((require as any)("node-gyp-build") as any)(root);
try {
  ((module as any).exports as any).nodeTypeInfo = (require as any)("../../src/node-types.json");
} catch (_: any) {}
