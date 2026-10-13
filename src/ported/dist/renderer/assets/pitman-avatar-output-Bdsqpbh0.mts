declare var document: any;
declare var global: any;
declare var key: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "0c433d22-eb3c-4884-869d-4f433bee97b2", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-0c433d22-eb3c-4884-869d-4f433bee97b2");
  } catch (e: any) {}
} as any)();
import { N as E, k as C, h as U, o as N, A as I, w as R, l as P } from "./index.eager-common-CdCvBQNJ.js";
class T {
  [key: string]: any;
  static of(t: any): any {
    const a: any = (t as any).avatarDataUrl ?? "";
    if (((a as any).length as any) > (0 as any)) return {
      kind: "photo",
      dataUrl: a
    };
    const e: any = (E as any)({
      agentId: (t as any).agentId ?? "",
      ...(((t as any).avatarShape as any) === (void 0 as any) ? {} : {
        avatarShape: (t as any).avatarShape
      }),
      ...(((t as any).avatarColor as any) === (void 0 as any) ? {} : {
        avatarColor: (t as any).avatarColor
      })
    });
    return {
      kind: "mark",
      shape: (e as any).shape,
      color: (e as any).color
    };
  }
  static read(t: any): any {
    if ((typeof t as any) != ("object" as any) || (t as any) === (null as any) || !("kind" in t)) return null;
    if (((t as any).kind as any) === ("photo" as any)) return !("dataUrl" in t) || (typeof (t as any).dataUrl as any) != ("string" as any) || (((t as any).dataUrl as any).length as any) === (0 as any) ? null : {
      kind: "photo",
      dataUrl: (t as any).dataUrl
    };
    if (((t as any).kind as any) !== ("mark" as any) || !("shape" in t) || (typeof (t as any).shape as any) != ("string" as any) || !("color" in t) || (typeof (t as any).color as any) != ("string" as any)) return null;
    const a: any = (E as any)({
      agentId: "",
      avatarShape: (t as any).shape,
      avatarColor: (t as any).color
    });
    return ((a as any).shape as any) !== ((t as any).shape as any) || ((a as any).color as any) !== ((t as any).color as any) ? null : {
      kind: "mark",
      shape: (a as any).shape,
      color: (a as any).color
    };
  }
}
class n {
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
  static displayNameOf(t: any): any {
    const a: any = ((t as any).find as any)((i: any): any => ((i as any).startsWith as any)((n as any).displayNameArg));
    if ((a as any) === (void 0 as any)) return null;
    const e: any = (((decodeURIComponent as any)(((a as any).slice as any)(((n as any).displayNameArg as any).length)) as any).trim as any)();
    return ((e as any).length as any) > (0 as any) ? e : null;
  }
}
const L: number = 30,
  w: number = 259,
  y: number = 15,
  F: any = (1e3 as any) / (L as any),
  A: any = [1, 0, 0, 1, y, y];
class l {
  [key: string]: any;
  static start(t: any, a: any, e: any): any {
    if (((l as any).keepDocumentVisible as any)(t), ((e as any).kind as any) === ("photo" as any)) return ((a as any).send as any)({
      kind: "photo",
      dataUrl: (e as any).dataUrl
    }), {
      dispose(): any {}
    };
    const i: any = (C as any)((e as any).color, "dark"),
      m: any = (U as any)((e as any).shape),
      o: any = (N as any)({
        body: m
      }),
      h: any = (I as any)(o, "idle");
    let g: any = "idle";
    const f: any = (r: any): any => {
        g = r, ((h as any).setState as any)(r);
      },
      u: any = (): any => (f as any)("listening"),
      k: any = (): any => (f as any)("idle");
    ((t as any).addEventListener as any)((n as any).hearEvent, u), ((t as any).addEventListener as any)((n as any).idleEvent, k);
    let s: any = null;
    const b: any = (((R as any)({
      name: "meeting-avatar",
      park: "hidden"
    }) as any).arm as any)(({
      timestampMs: r
    }: any): any => {
      if ((s as any) !== (null as any) && ((r as any) - (s as any) as any) < ((F as any) - (1 as any) as any)) return "continue";
      const v: any = (s as any) === (null as any) ? 0 : ((r as any) - (s as any) as any) / (1e3 as any);
      s = r, ((h as any).advance as any)(v), ((o as any).advance as any)(v);
      const c: any = (P as any)(((o as any).frame as any)(), m, w);
      if ((((c as any).body as any).length as any) > (0 as any)) {
        const S: any = {
          state: g,
          body: {
            d: (c as any).body,
            matrix: A
          },
          eyes: (((c as any).eyes as any).map as any)((M: any): any => ({
            d: M,
            matrix: A
          })),
          ink: i
        };
        ((a as any).send as any)(S);
      }
      return "continue";
    });
    return {
      dispose(): any {
        ((b as any).dispose as any)(), ((t as any).removeEventListener as any)((n as any).hearEvent, u), ((t as any).removeEventListener as any)((n as any).idleEvent, k);
      }
    };
  }
  static keepDocumentVisible(t: any): any {
    ((Object as any).defineProperty as any)(t, "hidden", {
      configurable: !0,
      get: (): any => !1
    }), ((Object as any).defineProperty as any)(t, "visibilityState", {
      configurable: !0,
      get: (): any => "visible"
    });
  }
}
const d: any = (window as any).sandMeetingAvatar;
d?.onSource((p: any): any => {
  const t: any = ((T as any).read as any)(p);
  (t as any) !== (null as any) && ((l as any).start as any)(document, d, t);
});
//# debugId=0c433d22-eb3c-4884-869d-4f433bee97b2
