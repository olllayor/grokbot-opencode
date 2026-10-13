import { app } from 'electron';
import { join } from 'node:path';
import { resolveUserDataDirectory } from './user-data.js';
import { codeCacheDirectory, loadCachedBundle } from './code-cache.js';
import { startMain } from './startup.js';

// Shipped build identifier ties V8 caches to this recovered application version.
const buildId = '9a3ba4dd-3f0f-4325-8fd2-21f1eaff1ba1';
const cacheDir = codeCacheDirectory(resolveUserDataDirectory(process.argv) ?? app.getPath('userData'));
void startMain({
  runBundle: name => loadCachedBundle({
    bundlePath: join(__dirname, `${name}.cjs`),
    cacheDir,
    buildId,
  }),
});
