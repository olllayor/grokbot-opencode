import { cp, mkdir, access, writeFile, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { createPackageWithOptions, getRawHeader } from '@electron/asar';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const template = process.env.GROKBOT_TEMPLATE || '/Applications/Grok Bot.app';
const output = path.join(root, 'build', 'Grok Bot.app');
const staging = path.join(root, 'build', `Grok Bot-${Date.now()}.app`);
await access(path.join(template, 'Contents', 'MacOS', 'Grok Bot'));
await mkdir(path.dirname(output), { recursive: true });
await cp(template, staging, {
  recursive: true,
  verbatimSymlinks: true,
  filter: source => !['app.asar', 'app.asar.unpacked', '_CodeSignature', 'CodeResources'].includes(path.basename(source)),
});
const archive = path.join(staging, 'Contents', 'Resources', 'app.asar');
await createPackageWithOptions(path.join(root, 'build', 'application'), archive, {
  unpack: '**/*.{node,dylib}',
  unpackDir: 'dist/native',
});
const hash = createHash('sha256').update(getRawHeader(archive).headerString).digest('hex');
execFileSync('/usr/libexec/PlistBuddy', [
  '-c', `Set :ElectronAsarIntegrity:Resources/app.asar:hash ${hash}`,
  path.join(staging, 'Contents', 'Info.plist'),
]);
const entitlements = path.join(root, 'scripts', 'entitlements.plist');
execFileSync('/usr/bin/codesign', ['--force', '--deep', '--sign', '-', '--entitlements', entitlements, staging], { stdio: 'inherit' });
try {
  await access(output);
  const backup = `${output}.previous-${Date.now()}`;
  await rename(output, backup);
  console.log(`Previous build retained: ${backup}`);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
await rename(staging, output);
await writeFile(path.join(root, 'build', 'build-info.json'), JSON.stringify({
  builtAt: new Date().toISOString(), template, output,
  asarHeaderSha256: hash, signing: 'ad-hoc',
  source: 'Compiled TypeScript source port and authored modules; native runtime reused',
}, null, 2) + '\n');
console.log(`Built ${output}`);
