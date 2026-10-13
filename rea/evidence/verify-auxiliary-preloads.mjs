import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import { build } from "esbuild";
async function compiled(file) {
  return (
    await build({
      entryPoints: [file],
      bundle: true,
      platform: "node",
      format: "cjs",
      external: ["electron"],
      write: false,
    })
  ).outputFiles[0].text;
}
function run(source) {
  const exposed = {};
  const invocations = [];
  const listeners = [];
  const context = {
    require(id) {
      assert.equal(id, "electron");
      return {
        contextBridge: {
          exposeInMainWorld(name, value) {
            exposed[name] = value;
          },
        },
        ipcRenderer: {
          invoke(channel, args) {
            invocations.push([channel, args]);
            return Promise.resolve({ ok: true, value: "returned" });
          },
          send(channel, args) {
            invocations.push([channel, args]);
          },
          on(channel, callback) {
            listeners.push([channel, callback]);
          },
          off(channel, callback) {
            const index = listeners.findIndex(
              (x) => x[0] === channel && x[1] === callback,
            );
            if (index >= 0) listeners.splice(index, 1);
          },
        },
      };
    },
    module: { exports: {} },
    console,
    Date,
    performance,
    setTimeout,
    clearTimeout,
    AbortController,
    TextEncoder,
    globalThis: null,
  };
  context.globalThis = context;
  vm.runInNewContext(source, context);
  return { exposed, invocations, listeners, exports: context.module.exports };
}
for (const [artifact, entry, key] of [
  [
    "preload-desktop-mount-panel.cjs",
    "preload-desktop-mount-panel.ts",
    "desktopMount",
  ],
  [
    "preload-meeting-avatar.cjs",
    "preload-meeting-avatar.ts",
    "sandMeetingAvatar",
  ],
]) {
  const old = run(
    fs.readFileSync(`rea/recovered/dist/electron-preload/${artifact}`, "utf8"),
  );
  const fresh = run(await compiled(`src/auxiliary-preloads/${entry}`));
  assert.deepEqual(
    Object.keys(fresh.exposed[key]),
    Object.keys(old.exposed[key]),
  );
  if (key === "desktopMount") {
    for (const target of [old, fresh]) {
      const api = target.exposed[key];
      await api.mount({
        agentId: "a",
        name: "A",
        markSvgDataUrl: "data:image/svg+xml,x",
      });
      await api.unmount();
      await api.offerChoices({ choices: [] });
      await api.read();
      await api.readChoices();
      await api.submitPrompt({ prompt: " hello " });
      await api.switchTo({ agentId: "b" });
      await api.reachForMenu({ heightPx: 20 });
      await api.movePanel({ dx: -1, dy: 2 });
      await api.endPanelMove();
      const dispose = api.subscribe({ changed: () => {} });
      assert.equal(target.listeners.length, 1);
      dispose();
      assert.equal(target.listeners.length, 0);
    }
    assert.equal(
      JSON.stringify(fresh.invocations),
      JSON.stringify(old.invocations),
    );
  } else {
    for (const target of [old, fresh]) {
      target.exposed[key].send({ kind: "photo", dataUrl: "x" });
      let got;
      target.exposed[key].onSource((value) => (got = value));
      target.listeners[0][1]({}, "source");
      assert.equal(got, "source");
    }
    assert.equal(
      JSON.stringify(fresh.invocations),
      JSON.stringify(old.invocations),
    );
  }
  console.log(`${artifact}: exposed API and IPC equivalence passed`);
}
const liv = run(
  await compiled("src/auxiliary-preloads/vnc-liveness.ts"),
).exports;
const { parse } = await import("@babel/parser");
const generator = (await import("@babel/generator")).default.default;
const original = fs.readFileSync(
  "rea/recovered/dist/electron-preload/preload-vnc.cjs",
  "utf8",
);
const sampler = generator(
  parse(original).program.body.find(
    (node) => node.type === "FunctionDeclaration" && node.id.name === "pn",
  ),
).code;
const oldSampler = vm.runInNewContext(`const ce=10000,tn=3;${sampler};pn()`);
const newSampler = liv.createLivenessSampler();
let counters = { keys: 0, clicks: 0, moves: 0, drawOps: 0, inBytes: 0 };
for (let step = 0; step < 30; step++) {
  if (step === 3) counters = { ...counters, keys: 3 };
  if (step === 17) counters = { ...counters, drawOps: 1 };
  if (step === 20) counters = { ...counters, clicks: 4 };
  const before = oldSampler.sample(step * 1000, counters),
    after = newSampler.sample(step * 1000, counters);
  assert.equal(JSON.stringify(after), JSON.stringify(before));
}
console.log("VNC liveness rolling window and rearming equivalence passed");
const meeting = run(
  await compiled("src/auxiliary-preloads/meeting-runtime.ts"),
).exports;
assert.equal(meeting.MeetingProviders.siteOf("us.zoom.us"), "zoom");
assert.equal(meeting.MeetingProviders.siteOf("teams.microsoft.com"), null);
assert.equal(meeting.GoogleMeetSite.isSameStatus, undefined);
assert.equal(
  new meeting.GoogleMeetSite().classify({
    bodyText: "you left the meeting",
    hasLeaveCallButton: false,
    hasJoinButton: false,
    hasAudioPlayback: false,
    otherParticipants: null,
  }).kind,
  "ended",
);
assert.equal(
  new meeting.ZoomSite().classify({
    bodyText: "waiting for the host",
    hasLeaveCallButton: false,
    hasJoinButton: false,
    hasAudioPlayback: false,
    otherParticipants: null,
  }).kind,
  "waiting",
);
assert.deepEqual(
  Array.from(
    meeting.PlaybackCapture.pcm16Of(new Float32Array([-2, -1, 0, 1, 2]))
      ? new Int16Array(
          meeting.PlaybackCapture.pcm16Of(new Float32Array([-2, -1, 0, 1, 2])),
        )
      : [],
  ),
  [-32768, -32768, 0, 32767, 32767],
);
console.log("Meeting provider/status and PCM conversion checks passed");
