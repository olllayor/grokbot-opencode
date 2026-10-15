import { app } from 'electron';
import { join } from 'node:path';
import { resolveUserDataDirectory } from './user-data.js';
import { codeCacheDirectory, loadCachedBundle } from './code-cache.js';
import { startMain } from './startup.js';

if (process.platform === 'darwin') {
  app.setName('Grok Bot');
  // A packaged build takes its dock icon from the bundle's .icns. Only the unpackaged
  // runtime shows the Electron binary's icon, which needs an explicit setIcon. Setting it
  // once after ready costs ~20ms; calling it before ready too costs ~85ms for no icon gain.
  if (!app.isPackaged) {
    const setDockIcon = () => {
      try {
        if (app.dock && typeof app.dock.setIcon === 'function') {
          const iconPath = process.env.SAND_DEV_APP_ICON || join(__dirname, '../../resources/icon.png');
          app.dock.setIcon(iconPath);
        }
      } catch {}
    };
    if (app.isReady()) setDockIcon();
    else void app.whenReady().then(setDockIcon);
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
