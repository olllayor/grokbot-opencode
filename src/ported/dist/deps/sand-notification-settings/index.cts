declare var module: any;
declare var require: any;
// Copyright Anysphere Inc.

const binding: any = (require as any)("./build/Release/sand_notification_settings.node");
(module as any).exports = {
  // () => Promise<{ platform, setting, alertSetting? } | null>
  // The calling app's OS notification permission (macOS, Windows); null
  // elsewhere or when unreadable.
  notification_settings_async: (binding as any).notification_settings_async
};
