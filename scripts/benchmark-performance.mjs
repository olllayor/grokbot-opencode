import { OpenCodeServerManager } from '../src/opencode/server-process.ts';
import { OpenCodeAgentManager } from '../src/opencode/agent-manager.ts';
import { dispatchCoordinatorMethod } from '../src/opencode/coordinator.ts';

async function main() {
  const sm = new OpenCodeServerManager({ idleTimeoutMs: 30000 });
  const tStart0 = performance.now();
  const conn = await sm.start();
  const serverConnectMs = performance.now() - tStart0;

  const am = new OpenCodeAgentManager(conn.client, () => {});

  console.log('='.repeat(70));
  console.log('GROKBOT PERFORMANCE BENCHMARK SUITE');
  console.log('='.repeat(70));
  console.log(`Server Connection Time: ${serverConnectMs.toFixed(2)}ms`);

  // 1. Startup burst simulation (the exact sequence during app boot)
  const tBurst0 = performance.now();
  await Promise.all([
    dispatchCoordinatorMethod('setHostSettings', { hasSeenOnboarding: true }, am),
    dispatchCoordinatorMethod('getHostStatus', {}, am),
    dispatchCoordinatorMethod('getServerAgentRoster', {}, am),
    dispatchCoordinatorMethod('listAgents', {}, am),
    dispatchCoordinatorMethod('countAgents', {}, am),
    dispatchCoordinatorMethod('skillsCatalog', {}, am),
    dispatchCoordinatorMethod('listBoxMcpServers', {}, am),
    dispatchCoordinatorMethod('getMcpState', {}, am),
    dispatchCoordinatorMethod('openAgentTail', { id: 'main-opencode-agent', limit: 50 }, am),
    dispatchCoordinatorMethod('getAgentTranscriptTail', { id: 'general', limit: 50 }, am),
    dispatchCoordinatorMethod('getAgentTranscriptTail', { id: 'build', limit: 50 }, am),
  ]);
  const startupBurstMs = performance.now() - tBurst0;
  console.log(`Startup Burst (11 concurrent RPCs): ${startupBurstMs.toFixed(2)}ms`);

  // Helper for repeated measurements
  const measure = async (label, fn, iterations = 10) => {
    const latencies = [];
    for (let i = 0; i < iterations; i++) {
      const t0 = performance.now();
      await fn();
      latencies.push(performance.now() - t0);
    }
    const avg = latencies.reduce((a, b) => a + b, 0) / latencies.length;
    const min = Math.min(...latencies);
    const max = Math.max(...latencies);
    console.log(`  ${label.padEnd(42)}: avg=${avg.toFixed(2)}ms | min=${min.toFixed(2)}ms | max=${max.toFixed(2)}ms`);
    return { avg, min, max };
  };

  console.log('\n--- 2. Screen Open & Switching Latency ---');
  await measure('Open default agent screen (tail)', () =>
    dispatchCoordinatorMethod('openAgentTail', { id: 'main-opencode-agent', limit: 50 }, am)
  );
  await measure('Open general agent screen (tail)', () =>
    dispatchCoordinatorMethod('openAgentTail', { id: 'general', limit: 50 }, am)
  );
  await measure('Open build agent screen (tail)', () =>
    dispatchCoordinatorMethod('openAgentTail', { id: 'build', limit: 50 }, am)
  );
  await measure('Search agents roster (instant filter)', () =>
    dispatchCoordinatorMethod('searchAgents', { query: 'build' }, am)
  );
  await measure('Skills catalog query', () =>
    dispatchCoordinatorMethod('skillsCatalog', {}, am)
  );
  await measure('MCP servers listing', () =>
    dispatchCoordinatorMethod('listBoxMcpServers', {}, am)
  );

  console.log('\n--- 3. Scrolling & Older Content Pagination ---');
  // Seed an agent session with 120 messages to simulate long history
  const testBinding = await am.ensureAgentSession('history-bench-agent');
  const dummyEntries = [];
  const baseTime = Date.now() - 1000000;
  for (let i = 1; i <= 120; i++) {
    dummyEntries.push({
      kind: 'message',
      id: `msg-${i}`,
      role: i % 2 === 1 ? 'user' : 'assistant',
      content: `Message content line ${i} with details for benchmark.`,
      isStreaming: false,
      timestampMs: baseTime + i * 1000,
    });
  }
  testBinding.entries = dummyEntries;
  testBinding.sequenceCounter = dummyEntries.length;

  // Measure initial screen tail opening
  let tailResult;
  await measure('Initial tail load (latest 50 of 120)', async () => {
    tailResult = await dispatchCoordinatorMethod('openAgentTail', { id: 'history-bench-agent', limit: 50 }, am);
  });
  console.log(`    -> Initial tail returned ${tailResult?.value?.entries?.length ?? 0} entries, nextBeforeSeq=${tailResult?.value?.nextBeforeSeq}, hasMore=${tailResult?.value?.hasMore}`);

  // Measure scrolling up: loading older page 1
  let olderPage1;
  const beforeSeq1 = tailResult?.value?.nextBeforeSeq ?? 70;
  await measure(`Scroll Up Page 1 (beforeSeq=${beforeSeq1})`, async () => {
    olderPage1 = await dispatchCoordinatorMethod('getAgentTranscriptTail', { id: 'history-bench-agent', limit: 50, beforeSeq: beforeSeq1 }, am);
  });
  console.log(`    -> Page 1 returned ${olderPage1?.value?.entries?.length ?? 0} entries, nextBeforeSeq=${olderPage1?.value?.nextBeforeSeq}`);

  // Measure scrolling up: loading older page 2 (reaching top)
  let olderPage2;
  const beforeSeq2 = olderPage1?.value?.nextBeforeSeq ?? 20;
  await measure(`Scroll Up Page 2 (beforeSeq=${beforeSeq2})`, async () => {
    olderPage2 = await dispatchCoordinatorMethod('getAgentTranscriptTail', { id: 'history-bench-agent', limit: 50, beforeSeq: beforeSeq2 }, am);
  });
  console.log(`    -> Page 2 returned ${olderPage2?.value?.entries?.length ?? 0} entries, nextBeforeSeq=${olderPage2?.value?.nextBeforeSeq}`);

  console.log('='.repeat(70));
  await sm.stop();
}

main().catch(console.error);
