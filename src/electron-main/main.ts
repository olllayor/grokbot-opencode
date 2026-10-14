import { app } from 'electron';
import { join } from 'node:path';
import { resolveUserDataDirectory } from './user-data.js';
import { codeCacheDirectory, loadCachedBundle } from './code-cache.js';
import { startMain } from './startup.js';

if (process.platform === 'darwin') {
  app.setName('Grok Bot');
  const setDockIcon = () => {
    try {
      if (app.dock && typeof app.dock.setIcon === 'function') {
        const iconPath = process.env.SAND_DEV_APP_ICON || join(__dirname, '../../resources/icon.png');
        app.dock.setIcon(iconPath);
      }
    } catch {}
  };
  setDockIcon();
  if (!app.isReady()) {
    void app.whenReady().then(setDockIcon);
  }
}

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
