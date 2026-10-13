export class MeetingConstants {
  static readonly audioChannel = "sand:meetings:audio";
  static readonly pageChannel = "sand:meetings:page";
  static readonly debugChannel = "sand:meetings:debug";
  static readonly avatarFrameChannel = "sand:meetings:avatar-frame";
  static readonly avatarSourceChannel = "sand:meetings:avatar-source";
  static readonly displayNameArg = "--sand-meetings-display-name=";
  static readonly pageLanguage = "en-US";
  static readonly sampleRateHz = 16000;
  static readonly pagePollMs = 1000;
  static readonly sourcePollMs = 100;
  static readonly sourceRecentMs = 400;
  static readonly stampEvent = "sand-meeting-stamp";
  static readonly wakeEvent = "sand-meeting-wake";
  static readonly hearEvent = "sand-meeting-hear";
  static readonly idleEvent = "sand-meeting-idle";
  static readonly cameraReadyEvent = "sand-meeting-camera";
  static displayNameOf(args: readonly string[]): string | null {
    const arg = args.find((value) => value.startsWith(this.displayNameArg));
    if (arg === undefined) return null;
    const name = decodeURIComponent(
      arg.slice(this.displayNameArg.length),
    ).trim();
    return name.length > 0 ? name : null;
  }
}
