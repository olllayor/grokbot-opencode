import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import { rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const iconsDir = path.join(root, 'src', 'assets', 'icons');
await mkdir(iconsDir, { recursive: true });

// ── 1. Vector SVG brand assets (kept for renderer UI use) ──────────────

const grokEmblemPath = `M213.235 306.019l178.976-180.002v.169l51.695-51.763c-.924 1.32-1.86 2.605-2.785 3.89-39.281 54.164-58.46 80.649-43.07 146.922l-.09-.101c10.61 45.11-.744 95.137-37.398 131.836-46.216 46.306-120.167 56.611-181.063 14.928l42.462-19.675c38.863 15.278 81.392 8.57 111.947-22.03 30.566-30.6 37.432-75.159 22.065-112.252-2.92-7.025-11.67-8.795-17.792-4.263l-124.947 92.341zm-25.786 22.437l-.033.034L68.094 435.217c7.565-10.429 16.957-20.294 26.327-30.149 26.428-27.803 52.653-55.359 36.654-94.302-21.422-52.112-8.952-113.177 30.724-152.898 41.243-41.254 101.98-51.661 152.706-30.758 11.23 4.172 21.016 10.114 28.638 15.639l-42.359 19.584c-39.44-16.563-84.629-5.299-112.207 22.313-37.298 37.308-44.84 102.003-1.128 143.81z`;

// Pure Emblem / Glyph (Transparent) — used as inline SVG in renderer
const glyphSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" fill="none">
  <path fill="currentColor" d="${grokEmblemPath}"/>
</svg>`;

// Official 2025 Grok Wordmark Logo
const wordmarkSvg = `<svg viewBox="0 0 88 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M76.4462 24.7077V8.41584H79.0216V19.1679L84.4685 12.9109H87.5908L82.6908 18.2731L87.6364 24.7077H84.5596L80.5539 19.1788L79.0216 19.1679V24.7077H76.4462Z" fill="currentColor"></path>
  <path d="M68.6362 24.9815C64.8074 24.9815 62.7335 22.2662 62.7335 18.7979C62.7335 15.3068 64.8074 12.6143 68.6362 12.6143C72.4878 12.6143 74.5389 15.3068 74.5389 18.7979C74.5389 22.2662 72.4878 24.9815 68.6362 24.9815ZM65.4228 18.7979C65.4228 21.4904 66.8813 22.8366 68.6362 22.8366C70.4139 22.8366 71.8497 21.4904 71.8497 18.7979C71.8497 16.1054 70.4139 14.7363 68.6362 14.7363C66.8813 14.7363 65.4228 16.1054 65.4228 18.7979Z" fill="currentColor"></path>
  <path d="M55.5659 24.7077V14.782L57.731 12.9109H62.3347V15.1014H58.1413V24.7077H55.5659Z" fill="currentColor"></path>
  <path d="M45.7187 25.009C40.8101 25.009 37.8834 21.4448 37.8834 16.5846C37.8834 11.6788 40.9146 8.02795 45.8145 8.02795C49.6433 8.02795 52.4466 9.99027 53.1075 13.6411H50.1675C49.7345 11.5647 48.0024 10.401 45.8145 10.401C42.282 10.401 40.7322 13.4586 40.7322 16.5846C40.7322 19.7106 42.282 22.7454 45.8145 22.7454C49.1875 22.7454 50.6689 20.3039 50.7828 18.2731H45.7006V15.9105H53.381L53.3684 17.1457C53.3684 21.7359 51.4978 25.009 45.7187 25.009Z" fill="currentColor"></path>
  <path d="M13.2371 21.0407L24.3186 12.8506C24.8619 12.4491 25.6384 12.6057 25.8973 13.2294C27.2597 16.5185 26.651 20.4712 23.9403 23.1851C21.2297 25.8989 17.4581 26.4941 14.0108 25.1386L10.2449 26.8843C15.6463 30.5806 22.2053 29.6665 26.304 25.5601C29.5551 22.3051 30.562 17.8683 29.6205 13.8673L29.629 13.8758C28.2637 7.99809 29.9647 5.64871 33.449 0.844576C33.5314 0.730667 33.6139 0.616757 33.6964 0.5L29.1113 5.09055V5.07631L13.2343 21.0436" fill="currentColor"></path>
  <path d="M10.9503 23.0313C7.07343 19.3235 7.74185 13.5853 11.0498 10.2763C13.4959 7.82722 17.5036 6.82767 21.0021 8.2971L24.7595 6.55998C24.0826 6.07017 23.215 5.54334 22.2195 5.17313C17.7198 3.31926 12.3326 4.24192 8.67479 7.90126C5.15635 11.4239 4.0499 16.8403 5.94992 21.4622C7.36924 24.9165 5.04257 27.3598 2.69884 29.826C1.86829 30.7002 1.0349 31.5745 0.36364 32.5L10.9474 23.0341" fill="currentColor"></path>
</svg>`;

// Brand Header Link Logo
const headerLogoSvg = `<svg width="41" height="14" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 0.5) scale(0.025)">
    <path fill="#ffffff" d="${grokEmblemPath}"/>
  </g>
  <g transform="translate(14, 2.5) scale(0.38)" fill="#ffffff">
    <path d="M10.5 12C6.8 12 4.5 9.2 4.5 5.8C4.5 2.4 6.8 -0.4 10.5 -0.4C13.2 -0.4 15.1 0.9 15.7 3.2H13.6C13.2 1.8 12.0 1.0 10.5 1.0C8.0 1.0 6.6 3.0 6.6 5.8C6.6 8.6 8.0 10.6 10.5 10.6C12.8 10.6 13.9 9.1 14.0 7.3H10.5V5.8H15.9V6.6C15.9 9.8 14.3 12 10.5 12Z"/>
    <path d="M17.5 11.8V4.8H19.2V6.2H19.3C19.7 5.2 20.8 4.7 21.8 4.7C22.1 4.7 22.4 4.8 22.6 4.9V6.8C22.3 6.6 21.9 6.5 21.5 6.5C20.3 6.5 19.4 7.5 19.4 9.0V11.8H17.5Z"/>
    <path d="M28.0 12C25.4 12 23.7 10.2 23.7 7.7C23.7 5.2 25.4 3.4 28.0 3.4C30.6 3.4 32.3 5.2 32.3 7.7C32.3 10.2 30.6 12 28.0 12ZM28.0 10.4C29.4 10.4 30.4 9.3 30.4 7.7C30.4 6.1 29.4 5.0 28.0 5.0C26.6 5.0 25.6 6.1 25.6 7.7C25.6 9.3 26.6 10.4 28.0 10.4Z"/>
    <path d="M33.8 11.8V0.2H35.7V7.1L38.9 3.6H41.3L37.7 7.5L41.5 11.8H39.0L36.0 8.2L35.7 8.5V11.8H33.8Z"/>
  </g>
</svg>`;

await writeFile(path.join(iconsDir, 'grok-bot-glyph.svg'), glyphSvg);
await writeFile(path.join(iconsDir, 'grok-bot-wordmark.svg'), wordmarkSvg);
await writeFile(path.join(iconsDir, 'grok-bot-header-logo.svg'), headerLogoSvg);
console.log('Saved vector SVG brand assets to src/assets/icons/');

// ── 2. Render authentic macOS HIG compliant squircle icon ─────────────

const masterSource = path.join(iconsDir, 'grok-mascot-source.png');
const icon1024 = path.join(iconsDir, 'icon-1024.png');
const icon512 = path.join(iconsDir, 'icon-512.png');
const icon256 = path.join(iconsDir, 'icon-256.png');
const renderScript = path.join(root, 'scripts', 'render-macos-icon.py');

execFileSync('python3', [renderScript, masterSource, icon1024]);

// Downsample multi-resolution PNGs
execFileSync('/usr/bin/sips', ['-z', '512', '512', icon1024, '--out', icon512]);
execFileSync('/usr/bin/sips', ['-z', '256', '256', icon1024, '--out', icon256]);
console.log('Rendered high-resolution PNGs (1024x1024, 512x512, 256x256)');

// ── 3. Apple native ICNS via iconutil ──────────────────────────────────

const iconsetDir = path.join(iconsDir, 'grok-bot.iconset');
await mkdir(iconsetDir, { recursive: true });

const scales = [
  { name: 'icon_16x16.png', size: 16 },
  { name: 'icon_16x16@2x.png', size: 32 },
  { name: 'icon_32x32.png', size: 32 },
  { name: 'icon_32x32@2x.png', size: 64 },
  { name: 'icon_128x128.png', size: 128 },
  { name: 'icon_128x128@2x.png', size: 256 },
  { name: 'icon_256x256.png', size: 256 },
  { name: 'icon_256x256@2x.png', size: 512 },
  { name: 'icon_512x512.png', size: 512 },
  { name: 'icon_512x512@2x.png', size: 1024 },
];

for (const { name, size } of scales) {
  execFileSync('/usr/bin/sips', ['-z', String(size), String(size), icon1024, '--out', path.join(iconsetDir, name)]);
}

const icnsPath = path.join(iconsDir, 'icon.icns');
execFileSync('/usr/bin/iconutil', ['-c', 'icns', iconsetDir, '-o', icnsPath]);
rmSync(iconsetDir, { recursive: true, force: true });
console.log('Compiled Apple ICNS at src/assets/icons/icon.icns');

// ── 4. Deploy assets to all project target locations ───────────────────

const targets = [
  // Master icon
  { src: icon512, dst: path.join(iconsDir, 'icon.png') },
  // Application resources
  { src: icon512, dst: path.join(root, 'build', 'application', 'resources', 'icon.png') },
  { src: icnsPath, dst: path.join(root, 'build', 'application', 'resources', 'icon.icns') },
  { src: icnsPath, dst: path.join(root, 'build', 'application', 'resources', 'electron.icns') },
  // Local Electron runtime for dev & smoke
  { src: icnsPath, dst: path.join(root, 'node_modules', 'electron', 'dist', 'Electron.app', 'Contents', 'Resources', 'electron.icns') },
  // Renderer app icons (top bar, dock, avatar)
  { src: icon512, dst: path.join(root, 'build', 'application', 'dist', 'renderer', 'assets', 'app-icon-C7NKj2u7.png') },
  { src: icon512, dst: path.join(root, 'rea', 'recovered', 'dist', 'renderer', 'assets', 'app-icon-C7NKj2u7.png') },
  // Brand header logo
  { src: path.join(iconsDir, 'grok-bot-header-logo.svg'), dst: path.join(root, 'build', 'application', 'dist', 'renderer', 'assets', 'link-dE5q15v1.svg') },
  { src: path.join(iconsDir, 'grok-bot-header-logo.svg'), dst: path.join(root, 'rea', 'recovered', 'dist', 'renderer', 'assets', 'link-dE5q15v1.svg') },
  // Public icons in renderer assets
  { src: path.join(iconsDir, 'grok-bot-glyph.svg'), dst: path.join(root, 'build', 'application', 'dist', 'renderer', 'assets', 'grok-bot-icon.svg') },
  { src: path.join(iconsDir, 'grok-bot-wordmark.svg'), dst: path.join(root, 'build', 'application', 'dist', 'renderer', 'assets', 'grok-bot-logo.svg') },
];

for (const { src, dst } of targets) {
  await mkdir(path.dirname(dst), { recursive: true });
  await copyFile(src, dst);
  console.log(`Deployed asset -> ${path.relative(root, dst)}`);
}

// ── 5. Update local dev Electron app bundle metadata for macOS Dock ────

const electronAppDir = path.join(root, 'node_modules', 'electron', 'dist', 'Electron.app');
const electronPlist = path.join(electronAppDir, 'Contents', 'Info.plist');
try {
  execFileSync('/usr/libexec/PlistBuddy', ['-c', 'Set :CFBundleName "Grok Bot"', electronPlist]);
  execFileSync('/usr/libexec/PlistBuddy', ['-c', 'Set :CFBundleDisplayName "Grok Bot"', electronPlist]);
  execFileSync('/usr/bin/touch', [electronAppDir]);
  console.log('Updated local dev Electron.app Info.plist brand metadata and touched bundle');
} catch {
  // Gracefully continue on platforms without PlistBuddy
}

console.log('All official Grok Bot logo and icon assets deployed successfully!');
