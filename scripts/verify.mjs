import { readdir, readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { extractFile, getRawHeader, listPackage } from '@electron/asar';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const app = path.join(root, 'build', 'Grok Bot.app');
const archive = path.join(app, 'Contents', 'Resources', 'app.asar');
const entries = new Set(listPackage(archive).map(p => p.replace(/^\//, '')));
let checked = 0;
async function verifyTree(dir, prefix = '') {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) await verifyTree(path.join(dir, entry.name), relative);
    else if (entry.isFile()) {
      if (!entries.has(relative)) throw new Error(`Missing archive entry: ${relative}`);
      const expected = await readFile(path.join(dir, entry.name));
      const actual = extractFile(archive, relative);
      if (!expected.equals(actual)) throw new Error(`Repack changed bytes: ${relative}`);
      checked++;
    } else throw new Error(`Unsupported recovered entry: ${relative}`);
  }
}
await verifyTree(path.join(root, 'build', 'application'));
const hash = createHash('sha256').update(getRawHeader(archive).headerString).digest('hex');
const declared = execFileSync('/usr/libexec/PlistBuddy', ['-c', 'Print :ElectronAsarIntegrity:Resources/app.asar:hash', path.join(app, 'Contents', 'Info.plist')], { encoding: 'utf8' }).trim();
if (hash !== declared) throw new Error('ASAR header integrity does not match Info.plist');
execFileSync('/usr/bin/codesign', ['--verify', '--deep', '--strict', app], { stdio: 'inherit' });
console.log(`Verified ${checked} application files, ASAR header integrity, and app signature.`);
