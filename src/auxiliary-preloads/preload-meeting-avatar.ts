import { contextBridge, ipcRenderer } from "electron";
import { MeetingConstants } from "./meeting-constants.js";
/** The shipped bridge forwards these payloads without validation. */
export interface MeetingAvatarBridge {
  send(frame: unknown): void;
  onSource(listener: (source: unknown) => void): void;
}
export const meetingAvatarBridge: MeetingAvatarBridge = {
  send: (frame) => ipcRenderer.send(MeetingConstants.avatarFrameChannel, frame),
  onSource: (listener) => {
    ipcRenderer.on(
      MeetingConstants.avatarSourceChannel,
      (_event, source: unknown) => listener(source),
    );
  },
};
contextBridge.exposeInMainWorld("sandMeetingAvatar", meetingAvatarBridge);
