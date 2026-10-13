import { MeetingConstants } from "./meeting-constants.js";
import {
  AvatarCanvas,
  MeetingController,
  PlaybackCapture,
  AudioSinks,
} from "./meeting-runtime.js";
import { getIpcRenderer, getWebFrame, warn } from "./browser-preload.js";
import { meetingPageProgram } from "./meeting-page-program.js";
const pageConfiguration = {
  pageLanguage: MeetingConstants.pageLanguage,
  hostId: AudioSinks.id,
  micLabel: "Grok Bot",
  sourceRecentMs: MeetingConstants.sourceRecentMs,
  stampEvent: MeetingConstants.stampEvent,
  wakeEvent: MeetingConstants.wakeEvent,
  hearEvent: MeetingConstants.hearEvent,
  idleEvent: MeetingConstants.idleEvent,
  cameraReadyEvent: MeetingConstants.cameraReadyEvent,
  frameWidth: 2560,
  frameHeight: 1440,
  frameRate: 30,
};
export const meetingInjectionSource = `(${meetingPageProgram})(${JSON.stringify(pageConfiguration)});`;
export function injectMeetingPage(
  target: Document,
  executeJavaScript: (source: string) => Promise<unknown>,
): void {
  const parent = target.documentElement ?? target.head;
  if (parent === null) void executeJavaScript(meetingInjectionSource);
  else {
    const script = target.createElement("script");
    script.textContent = meetingInjectionSource;
    parent.appendChild(script);
    script.remove();
  }
  AvatarCanvas.start(target);
}
const bridge = getIpcRenderer();
const frame = getWebFrame();
if (bridge === null || frame === null)
  warn("meetings preload: electron bridges unavailable");
else {
  injectMeetingPage(document, (source) => frame.executeJavaScript(source));
  bridge.on(MeetingConstants.avatarFrameChannel, (_event, value: unknown) =>
    AvatarCanvas.draw(document, value),
  );
  MeetingController.install({
    document,
    displayName: MeetingConstants.displayNameOf(process.argv),
    createAudioContext: () => PlaybackCapture.createAudioContext(),
    sink: {
      audio: (packet) => bridge.send(MeetingConstants.audioChannel, packet),
      page: (status) => bridge.send(MeetingConstants.pageChannel, status),
      debug: (packet) => bridge.send(MeetingConstants.debugChannel, packet),
    },
  });
}
