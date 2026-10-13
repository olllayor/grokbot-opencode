declare var __dirname: any;
declare var module: any;
declare var require: any;
const path: any = (require as any)('path');
const {
  version
}: any = (require as any)('./package.json');
const includeDir: any = ((path as any).relative as any)('.', __dirname);
(module as any).exports = {
  include: `"${__dirname}"`,
  // deprecated, can be removed as part of 4.0.0
  include_dir: includeDir,
  gyp: ((path as any).join as any)(includeDir, 'node_api.gyp:nothing'),
  // deprecated.
  targets: ((path as any).join as any)(includeDir, 'node_addon_api.gyp'),
  version,
  isNodeApiBuiltin: true,
  needsFlag: false
};
