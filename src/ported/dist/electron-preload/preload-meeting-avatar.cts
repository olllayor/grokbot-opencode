declare var AbortController: any;
declare var console: any;
declare var global: any;
declare var key: any;
declare var performance: any;
declare var require: any;
declare var self: any;
declare var window: any;
"use strict";

!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "1de1ad3b-298d-4d79-a703-a8262c1c4d3f", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-1de1ad3b-298d-4d79-a703-a8262c1c4d3f");
  } catch (e: any) {}
} as any)();
"use strict";
var E: any = (require as any)("electron");
var l: any = class e {
  [key: string]: any;
  static audioChannel: any = "sand:meetings:audio";
  static pageChannel: any = "sand:meetings:page";
  static debugChannel: any = "sand:meetings:debug";
  static avatarFrameChannel: any = "sand:meetings:avatar-frame";
  static avatarSourceChannel: any = "sand:meetings:avatar-source";
  static displayNameArg: any = "--sand-meetings-display-name=";
  static pageLanguage: any = "en-US";
  static sampleRateHz: any = 16e3;
  static pagePollMs: any = 1e3;
  static sourcePollMs: any = 100;
  static sourceRecentMs: any = 400;
  static stampEvent: any = "sand-meeting-stamp";
  static wakeEvent: any = "sand-meeting-wake";
  static hearEvent: any = "sand-meeting-hear";
  static idleEvent: any = "sand-meeting-idle";
  static cameraReadyEvent: any = "sand-meeting-camera";
  static displayNameOf(r: any): any {
    let i: any = ((r as any).find as any)((o: any): any => ((o as any).startsWith as any)((e as any).displayNameArg));
    if ((i as any) === (void 0 as any)) return null;
    let t: any = (((decodeURIComponent as any)(((i as any).slice as any)(((e as any).displayNameArg as any).length)) as any).trim as any)();
    return ((t as any).length as any) > (0 as any) ? t : null;
  }
};
var d: any = {
  now: (): any => ((Date as any).now as any)(),
  monotonicNow: (): any => ((performance as any).now as any)(),
  schedule(e: any, r: any, i: any): any {
    (S as any)(e);
    let t: any = !0,
      o: any = ((globalThis as any).setTimeout as any)((): any => {
        t && (t = !1, (r as any)());
      }, e);
    return (i?.keepEventLoopAlive as any) !== (!0 as any) && (D as any)(o) && ((o as any).unref as any)(), {
      dispose(): any {
        t && (t = !1, ((globalThis as any).clearTimeout as any)(o));
      }
    };
  }
};
function D(this: any, e: any): any {
  return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && "unref" in e && (typeof (e as any).unref as any) == ("function" as any);
}
function S(this: any, e: any): any {
  if (!((Number as any).isFinite as any)(e) || (e as any) < (0 as any)) throw new (RangeError as any)("delayMs must be a finite non-negative number");
}
var c: any = class extends (Error as any) {
  declare policyName: any;
  declare name: any;
  declare code: any;
  [key: string]: any;
  constructor(r: any) {
    super(`Deadline exceeded for ${r}`), (this as any).code = "deadline_exceeded", (this as any).name = "DeadlineExceededError", (this as any).policyName = r;
  }
};
function f(this: any, e: any): any {
  (L as any)((e as any).name), (_ as any)((e as any).timeoutMs, "timeoutMs");
  let r: any = (e as any).clock ?? d;
  return {
    name: (e as any).name,
    async run(i: any, t: any): Promise<any> {
      if (t?.aborted) throw (h as any)(t, (e as any).name);
      let o: any = new (AbortController as any)(),
        y: any = (): any => {},
        P: any = new (Promise as any)((a: any, s: any): any => {
          y = s;
        }),
        p: any = (): any => {},
        A: any = new (Promise as any)((a: any, s: any): any => {
          p = s;
        }),
        g: any = (): any => {};
      if ((t as any) != (null as any)) {
        let a: any = (): any => {
          let s: any = (h as any)(t, (e as any).name);
          (p as any)(s), ((o as any).abort as any)(s);
        };
        ((t as any).addEventListener as any)("abort", a, {
          once: !0
        }), g = (): any => ((t as any).removeEventListener as any)("abort", a);
      }
      let x: any = ((r as any).schedule as any)((e as any).timeoutMs, (): any => {
        let a: any = new (c as any)((e as any).name);
        (y as any)(a), ((o as any).abort as any)(a);
      });
      try {
        return await ((Promise as any).race as any)([(i as any)((o as any).signal), P, A]);
      } finally {
        ((x as any).dispose as any)(), (g as any)();
      }
    }
  };
}
var q: any = {
  none: 0,
  equal: (1 as any) / (2 as any),
  full: 1
};
function h(this: any, e: any, r: any): any {
  return (e as any).reason ?? (T as any)(r);
}
function T(this: any, e: any): any {
  let r: any = new (Error as any)(`Operation aborted for ${e}`);
  return (r as any).name = "AbortError", r;
}
var C: any = /^[a-z0-9]+([-.][a-z0-9]+)*$/;
function L(this: any, e: any): any {
  if (!((C as any).test as any)(e)) throw new (TypeError as any)(`name must be lowercase segments joined by "-" or ".", got ${((JSON as any).stringify as any)(e)}`);
}
function _(this: any, e: any, r: any): any {
  if (!((Number as any).isFinite as any)(e) || (e as any) < (0 as any)) throw new (RangeError as any)(`${r} must be a finite non-negative number`);
}
var b: number = 6e4;
function w(this: any, e: any): any {
  return e instanceof Error ? (e as any).message : void 0;
}
function u(this: any, ...e: any): any {
  ((console as any).warn as any)("[sand-webview-preload]", ...e);
}
var k: any = !1,
  M: any = null,
  R: any = null;
function H(this: any): any {
  if (!k) {
    k = !0;
    try {
      let e: any = (require as any)("electron");
      M = (e as any).ipcRenderer ?? null, R = (e as any).webFrame ?? null;
    } catch (e: any) {
      (u as any)("electron module unavailable", (w as any)(e));
    }
  }
}
function v(this: any): any {
  return (H as any)(), M;
}
var Ee: any = (f as any)({
  name: "sand-webview-passkey-stall",
  timeoutMs: b
});
var m: any = (v as any)();
(m as any) === (null as any) ? (u as any)("meetings avatar preload: electron bridges unavailable") : (((E as any).contextBridge as any).exposeInMainWorld as any)("sandMeetingAvatar", {
  send: (e: any): any => {
    ((m as any).send as any)((l as any).avatarFrameChannel, e);
  },
  onSource: (e: any): any => {
    ((m as any).on as any)((l as any).avatarSourceChannel, (r: any, i: any): any => {
      (e as any)(i);
    });
  }
});
//# debugId=1de1ad3b-298d-4d79-a703-a8262c1c4d3f
