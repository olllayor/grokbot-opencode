import assert from 'node:assert/strict';
import { test } from 'node:test';
import path from 'node:path';
import { build } from 'esbuild';

async function importAuth() {
  const result = await build({
    entryPoints: [path.resolve('src/auth/local-auth.ts')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
  });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
}

const { LocalAuthService, DEFAULT_LOCAL_USER } = await importAuth();

test('LocalAuthService provides immediate logged-in status with local developer identity', async () => {
  const auth = new LocalAuthService();
  const status = await auth.getStatus();
  assert.equal(status.kind, 'logged-in');
  assert.equal(status.authId, DEFAULT_LOCAL_USER.authId);
  assert.equal(status.email, DEFAULT_LOCAL_USER.email);
  assert.equal(status.displayName, DEFAULT_LOCAL_USER.displayName);
  assert.equal(status.isAnysphereUser, true);
  assert.equal(status.profileReady, true);
});

test('tokens are available synchronously and asynchronously without remote OAuth network calls', async () => {
  const auth = new LocalAuthService();
  const peeked = auth.peekAccessToken();
  assert.ok(typeof peeked === 'string' && peeked.length > 0);
  const valid = await auth.getValidAccessToken();
  assert.equal(valid, peeked);
  const exported = await auth.exportTokens();
  assert.equal(exported.accessToken, peeked);
  assert.ok(typeof exported.refreshToken === 'string');
});

test('login and logout operations maintain authorized developer state', async () => {
  const auth = new LocalAuthService();
  const loginResult = await auth.login();
  assert.equal(loginResult.kind, 'logged-in');
  const logoutResult = await auth.logout();
  assert.equal(logoutResult.kind, 'logged-in');
  assert.equal(auth.publishedStatusKind, 'logged-in');
});

test('subscribe delivers current status and reacts to profile mutations', async () => {
  const auth = new LocalAuthService();
  const received = [];
  const unsubscribe = auth.subscribe((s) => received.push(s));

  // Allow the microtask to deliver initial status
  await new Promise((r) => setTimeout(r, 10));
  assert.equal(received.length, 1);
  assert.equal(received[0].displayName, 'Local Developer');

  await auth.updateDisplayName('Test Engineer');
  assert.equal(received.length, 2);
  assert.equal(received[1].displayName, 'Test Engineer');

  unsubscribe();
  await auth.updateDisplayName('Another Name');
  assert.equal(received.length, 2);
});

test('backendAuth and team snapshots provide required structures for internal services', async () => {
  const auth = new LocalAuthService();
  const backend = auth.backendAuth();
  assert.ok(typeof backend.getAccessToken === 'function');
  assert.ok(typeof backend.getTeamId === 'function');
  assert.equal(await backend.getAccessToken(), 'local-dev-access-token');
  assert.equal(await backend.getTeamId(), 1);

  const snapshot = await auth.getSelectedTeamSnapshot();
  assert.equal(snapshot.kind, 'replace');
  assert.equal(snapshot.teamId, 1);
  assert.equal(snapshot.accountScope, 'local-dev');
});
