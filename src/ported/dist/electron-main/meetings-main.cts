declare var AbortController: any;
declare var MeetingsService: any;
declare var URL: any;
declare var __dirname: any;
declare var __filename: any;
declare var global: any;
declare var key: any;
declare var module: any;
declare var performance: any;
declare var process: any;
declare var require: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "bca95410-d75a-484f-9179-21005af54a1a", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-bca95410-d75a-484f-9179-21005af54a1a");
  } catch (e: any) {}
} as any)();
const __mod: any = (require as any)('node:module');
const __p: any = (require as any)('node:path');
const __depsDir: any = ((__p as any).join as any)(__dirname, '..', 'deps');
((process as any).env as any).NODE_PATH = (__depsDir as any) + ((((process as any).env as any).NODE_PATH ? ((__p as any).delimiter as any) + (((process as any).env as any).NODE_PATH as any) : '') as any);
(((__mod as any).Module as any)._initPaths as any)();
const __import_meta_url: any = ((((require as any)('node:url') as any).pathToFileURL as any)(__filename) as any).href;
"use strict";
var be: any = (Object as any).create;
var x: any = (Object as any).defineProperty;
var Se: any = (Object as any).getOwnPropertyDescriptor;
var Ae: any = (Object as any).getOwnPropertyNames;
var Ee: any = (Object as any).getPrototypeOf,
  Ie: any = ((Object as any).prototype as any).hasOwnProperty;
var xe: any = (r: any, e: any): any => {
    var t: any;
    for (t in e) (x as any)(r, t, {
      get: (e as any)[t],
      enumerable: !0
    });
  },
  ae: any = (r: any, e: any, t: any, n: any): any => {
    if (e && (typeof e as any) == ("object" as any) || (typeof e as any) == ("function" as any)) for (let i of (Ae as any)(e)) !((Ie as any).call as any)(r, i) && (i as any) !== (t as any) && (x as any)(r, i, {
      get: (): any => (e as any)[i],
      enumerable: !(n = (Se as any)(e, i)) || (n as any).enumerable
    });
    return r;
  };
var Te: any = (r: any, e: any, t: any): any => (t = (r as any) != (null as any) ? (be as any)((Ee as any)(r)) : {}, (ae as any)(e || !r || !(r as any).__esModule ? (x as any)(t, "default", {
    value: r,
    enumerable: !0
  }) : t, r)),
  De: any = (r: any): any => (ae as any)((x as any)({}, "__esModule", {
    value: !0
  }), r);
var mt: any = {};
(xe as any)(mt, {
  MeetingsService: (): any => re
});
(module as any).exports = (De as any)(mt);
var m: any = {
  now: (): any => ((Date as any).now as any)(),
  monotonicNow: (): any => ((performance as any).now as any)(),
  schedule(r: any, e: any, t: any): any {
    (Le as any)(r);
    let n: any = !0,
      i: any = ((globalThis as any).setTimeout as any)((): any => {
        n && (n = !1, (e as any)());
      }, r);
    return (t?.keepEventLoopAlive as any) !== (!0 as any) && (Pe as any)(i) && ((i as any).unref as any)(), {
      dispose(): any {
        n && (n = !1, ((globalThis as any).clearTimeout as any)(i));
      }
    };
  }
};
function Pe(this: any, r: any): any {
  return (typeof r as any) == ("object" as any) && (r as any) !== (null as any) && "unref" in r && (typeof (r as any).unref as any) == ("function" as any);
}
function Le(this: any, r: any): any {
  if (!((Number as any).isFinite as any)(r) || (r as any) < (0 as any)) throw new (RangeError as any)("delayMs must be a finite non-negative number");
}
var Mt: any = {
  none: 0,
  equal: (1 as any) / (2 as any),
  full: 1
};
var oe: any = {
    meetings: 0,
    windows: 0,
    stuckWindows: 0,
    lanes: 0
  },
  se: number = 1e4;
var le: number = 2e4,
  Ne: number = 15e3,
  S: number = 6e3,
  Ut: any = (Ne as any) + (S as any),
  de: any = (10800 as any) * (1e3 as any),
  ce: any = (600 as any) * (1e3 as any),
  u: any = {
    closedWithApp: "Grok Bot closed on the user's computer",
    botLeft: "the bot left the meeting",
    everyoneLeft: "everyone else left the meeting",
    maxDuration: "left after the maximum meeting length",
    notAdmitted: "not admitted to the meeting in time",
    windowClosed: "the meeting window was closed",
    openFailed: "the meeting window could not open",
    avatarClosed: "the meeting camera was closed",
    avatarFailed: (r: any): any => `the meeting camera failed to load (${r})`,
    avatarCrashed: (r: any): any => `the meeting camera crashed (${r})`,
    pageFailed: (r: any): any => `the meeting page failed to load (${r})`,
    pageCrashed: (r: any): any => `the meeting page crashed (${r})`,
    preloadFailed: (r: any): any => `the meeting page could not start audio capture (${r})`
  },
  f: any = {
    cancelled: "the join was cancelled",
    joinFailed: "couldn't join the meeting",
    notAdmitted: "wasn't let into the meeting",
    disconnected: "lost the connection to the meeting"
  };
function M(this: any, r: any, e: any, t: any): any {
  return new (Promise as any)((n: any): any => {
    if ((t?.aborted as any) === (!0 as any)) {
      (n as any)();
      return;
    }
    let i: any = (): any => {
        ((a as any).dispose as any)(), (n as any)();
      },
      a: any = ((r as any).schedule as any)(((Number as any).isFinite as any)(e) && (e as any) > (0 as any) ? e : 0, (): any => {
        t?.removeEventListener("abort", i), (n as any)();
      });
    t?.addEventListener("abort", i, {
      once: !0
    });
  });
}
var _e: any = (300 as any) * (1e3 as any),
  Ce: number = 1500,
  Oe: any = ((16e3 as any) * (2 as any) as any) * (10 as any),
  q: any = class {
    [key: string]: any;
    queue: any = [];
    waiting: any = null;
    ended: any = !1;
    push(e: any): any {
      (this as any).ended || ((((this as any).queue as any).push as any)(e), (this as any).waiting?.());
    }
    end(): any {
      (this as any).ended = !0, (this as any).waiting?.();
    }
    async *[Symbol.asyncIterator](): AsyncGenerator<any, any, any> {
      for (;;) {
        let e: any = (((this as any).queue as any).shift as any)();
        if ((e as any) !== (void 0 as any)) {
          yield e;
          continue;
        }
        if ((this as any).ended) return;
        await new (Promise as any)((t: any): any => {
          (this as any).waiting = t;
        }), (this as any).waiting = null;
      }
    }
  };
function Fe(this: any, r: any, e: any): any {
  if (((e as any).startsWith as any)(r)) return ((((e as any).slice as any)((r as any).length) as any).trim as any)();
  let t: any = 0,
    n: any = ((Math as any).min as any)((r as any).length, (e as any).length);
  for (; (t as any) < (n as any) && ((r as any)[t] as any) === ((e as any)[t] as any);) t += 1;
  let i: any = ((e as any).lastIndexOf as any)(" ", t);
  return ((((e as any).slice as any)((i as any) === (-1 as any) ? 0 : i) as any).trim as any)();
}
var T: any = class {
  [key: string]: any;
  constructor(e: any) {
    (this as any).deps = e;
    (this as any).clock = (e as any).clock ?? m, (this as any).rotateMs = (e as any).sessionRotateMs ?? _e, (this as any).loop = ((this as any).run as any)();
  }
  deps: any;
  clock: any;
  rotateMs: any;
  session: any = null;
  pendingAudio: any = [];
  pendingAudioBytes: any = 0;
  audioWaiter: any = null;
  stopped: any = !1;
  loop: any;
  pushAudio(e: any): any {
    if ((this as any).stopped) return;
    let t: any = (this as any).session;
    if ((t as any) !== (null as any) && !(((t as any).controller as any).signal as any).aborted) {
      (((t as any).messages as any).push as any)({
        kind: "audio",
        pcm16: new (Uint8Array as any)(e)
      });
      return;
    }
    for ((((this as any).pendingAudio as any).push as any)(e), (this as any).pendingAudioBytes += (e as any).byteLength; ((this as any).pendingAudioBytes as any) > (Oe as any) && (((this as any).pendingAudio as any).length as any) > (0 as any);) (this as any).pendingAudioBytes -= (((this as any).pendingAudio as any).shift as any)()?.byteLength ?? 0;
    ((this as any).wakeAudioWaiter as any)();
  }
  async stop(): Promise<any> {
    if ((this as any).stopped) return (this as any).loop;
    (this as any).stopped = !0, ((this as any).wakeAudioWaiter as any)();
    let e: any = (this as any).session;
    return (e as any) !== (null as any) && (await ((this as any).finishSession as any)(e)), (this as any).loop;
  }
  async run(): Promise<any> {
    for (;;) {
      if (await ((this as any).audioQueued as any)(), (((this as any).pendingAudio as any).length as any) === (0 as any)) return;
      let e: any = ((this as any).openSession as any)();
      (this as any).session = e;
      for (let n of (((this as any).pendingAudio as any).splice as any)(0)) (((e as any).messages as any).push as any)({
        kind: "audio",
        pcm16: new (Uint8Array as any)(n)
      });
      if ((this as any).pendingAudioBytes = 0, (this as any).stopped) {
        (this as any).session = null, await ((this as any).finishSession as any)(e);
        return;
      }
      let t: any = (M as any)((this as any).clock, (this as any).rotateMs, ((e as any).controller as any).signal);
      await ((Promise as any).race as any)([(e as any).done, t]), ((this as any).session as any) === (e as any) && ((this as any).session = null, (this as any).stopped || (await ((this as any).finishSession as any)(e)), (this as any).stopped || (await (M as any)((this as any).clock, Ce)));
    }
  }
  audioQueued(): any {
    return (((this as any).pendingAudio as any).length as any) > (0 as any) || (this as any).stopped ? ((Promise as any).resolve as any)() : new (Promise as any)((e: any): any => {
      (this as any).audioWaiter = e;
    });
  }
  wakeAudioWaiter(): any {
    let e: any = (this as any).audioWaiter;
    (this as any).audioWaiter = null, e?.();
  }
  openSession(): any {
    let e: any = new (q as any)(),
      t: any = new (AbortController as any)();
    ((e as any).push as any)({
      kind: "config",
      ...((((this as any).deps as any).language as any) === (void 0 as any) ? {} : {
        language: ((this as any).deps as any).language
      })
    });
    let n: any = {
      messages: e,
      controller: t,
      committed: "",
      done: ((Promise as any).resolve as any)()
    };
    return ((this as any).deps as any).onLifecycle?.("open"), (n as any).done = ((this as any).consume as any)(n), n;
  }
  async consume(e: any): Promise<any> {
    let {
      messages: t,
      controller: n
    }: any = e;
    try {
      for await (let i of (((this as any).deps as any).streamStt as any)(t, (n as any).signal)) ((this as any).apply as any)(e, i);
    } catch (i: any) {
      ((n as any).signal as any).aborted || (((this as any).deps as any).onFailure as any)(i);
    }
  }
  apply(e: any, t: any): any {
    let n: any = (Fe as any)((e as any).committed, t);
    (e as any).committed = t, ((n as any).length as any) > (0 as any) && (((this as any).deps as any).onSegment as any)(n);
  }
  async finishSession(e: any): Promise<any> {
    (((e as any).messages as any).push as any)({
      kind: "stop"
    }), (((e as any).messages as any).end as any)();
    let t: any = (M as any)((this as any).clock, S);
    await ((Promise as any).race as any)([(e as any).done, t]), (((e as any).controller as any).abort as any)(), ((this as any).deps as any).onLifecycle?.("close");
  }
};
var C: any = (require as any)("electron");
var c: any = class r {
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
    static displayNameOf(e: any): any {
      let t: any = ((e as any).find as any)((i: any): any => ((i as any).startsWith as any)((r as any).displayNameArg));
      if ((t as any) === (void 0 as any)) return null;
      let n: any = (((decodeURIComponent as any)(((t as any).slice as any)(((r as any).displayNameArg as any).length)) as any).trim as any)();
      return ((n as any).length as any) > (0 as any) ? n : null;
    }
  },
  v: any = class r {
    [key: string]: any;
    static readAudioFrame(e: any): any {
      if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || !("pcm16" in e)) return null;
      let t: any = ((r as any).readPcm16 as any)((e as any).pcm16);
      if ((t as any) === (null as any)) return null;
      let n: any = "lane" in e && (typeof (e as any).lane as any) == ("string" as any) ? (e as any).lane : "",
        i: any = "source" in e && (typeof (e as any).source as any) == ("string" as any) ? (e as any).source : "",
        a: any = "speaker" in e && (typeof (e as any).speaker as any) == ("string" as any) ? (((e as any).speaker as any).trim as any)() : "";
      return {
        pcm16: t,
        lane: n,
        source: ((i as any).length as any) === (0 as any) ? null : i,
        speaker: ((a as any).length as any) === (0 as any) ? null : a
      };
    }
    static isDebugEvent(e: any): any {
      if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || !("kind" in e) || (typeof (e as any).kind as any) != ("string" as any)) return !1;
      switch ((e as any).kind) {
        case "join.typed":
        case "join.clicked":
          return !0;
        case "tap.attach":
        case "tap.retap":
          return "tracks" in e && (typeof (e as any).tracks as any) == ("number" as any);
        case "landmark":
          return "landmark" in e && (typeof (e as any).landmark as any) == ("string" as any);
        case "source.bound":
          return "source" in e && (typeof (e as any).source as any) == ("string" as any);
        case "signals":
          return "probe" in e && ((r as any).isProbe as any)((e as any).probe);
        default:
          return !1;
      }
    }
    static isProbe(e: any): any {
      return (typeof e as any) == ("object" as any) && (e as any) !== (null as any) && "pageLanguage" in e && (typeof (e as any).pageLanguage as any) == ("string" as any) && "leaveControl" in e && (typeof (e as any).leaveControl as any) == ("boolean" as any) && "joinControl" in e && (typeof (e as any).joinControl as any) == ("boolean" as any) && "nameField" in e && (typeof (e as any).nameField as any) == ("boolean" as any) && "playback" in e && (typeof (e as any).playback as any) == ("boolean" as any) && "participantEntries" in e && (typeof (e as any).participantEntries as any) == ("number" as any) && "otherParticipants" in e && (((e as any).otherParticipants as any) === (null as any) || (typeof (e as any).otherParticipants as any) == ("number" as any));
    }
    static isStatus(e: any): any {
      if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || !("kind" in e)) return !1;
      switch ((e as any).kind) {
        case "prejoin":
        case "waiting":
        case "in-call":
        case "alone":
          return !0;
        case "ended":
        case "denied":
          return "detail" in e && (typeof (e as any).detail as any) == ("string" as any);
        default:
          return !1;
      }
    }
    static readPcm16(e: any): any {
      return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new (Uint8Array as any)(e) : null;
    }
  },
  A: any = class {
    [key: string]: any;
    static speechKey(e: any): any {
      return (e as any).source ?? (e as any).speaker ?? (e as any).lane;
    }
    static transcriptLine(e: any, t: any): any {
      let n: any = ((t as any).trim as any)();
      if (((n as any).length as any) === (0 as any)) return "";
      let i: any = e?.trim() ?? "";
      return ((i as any).length as any) === (0 as any) ? n : `${i}: ${n}`;
    }
    static sole(e: any): any {
      let t: any = [...new (Set as any)(((((e as any).map as any)((n: any): any => ((n as any).trim as any)()) as any).filter as any)((n: any): any => ((n as any).length as any) > (0 as any)))];
      return ((t as any).length as any) === (1 as any) ? (t as any)[0] ?? null : null;
    }
  };
function ue(this: any, r: any, e: any): any {
  return (r as any) === ("storage-access" as any) ? !0 : (r as any) !== ("media" as any) ? !1 : !("mediaTypes" in e) || !((Array as any).isArray as any)((e as any).mediaTypes) ? !0 : (((e as any).mediaTypes as any).every as any)((t: any): any => (t as any) === ("audio" as any) || (t as any) === ("video" as any));
}
var D: any = class {
  [key: string]: any;
  last: any = null;
  publish(e: any, t: any): any {
    (this as any).last = e, (t as any)(e);
  }
  replay(e: any, t: any, n: any): any {
    ((this as any).last as any) == (null as any) || (e as any) === (t as any) || (n as any)((this as any).last);
  }
};
var K: any = (Te as any)((require as any)("node:path"), 1),
  me: any = (require as any)("electron");
var P: string = "src/electron-renderer/pitman-avatar/pitman-avatar-output.html";
var pe: string = "#ffffff",
  L: any = class r {
    [key: string]: any;
    static read(e: any): any {
      if ((typeof e as any) != ("object" as any) || (e as any) === (null as any)) return null;
      if ("kind" in e && ((e as any).kind as any) === ("photo" as any)) return !("dataUrl" in e) || (typeof (e as any).dataUrl as any) != ("string" as any) || (((e as any).dataUrl as any).length as any) === (0 as any) ? null : {
        kind: "photo",
        dataUrl: (e as any).dataUrl
      };
      if (!("state" in e) || ((e as any).state as any) !== ("idle" as any) && ((e as any).state as any) !== ("listening" as any) || !("body" in e)) return null;
      let t: any = ((r as any).readStroke as any)((e as any).body);
      if ((t as any) === (null as any) || !("eyes" in e) || !((Array as any).isArray as any)((e as any).eyes)) return null;
      let n: any = [];
      for (let a of (e as any).eyes) {
        let o: any = ((r as any).readStroke as any)(a);
        if ((o as any) === (null as any)) return null;
        ((n as any).push as any)(o);
      }
      let i: any = "ink" in e && (typeof (e as any).ink as any) == ("string" as any) && (((e as any).ink as any).length as any) > (0 as any) ? (e as any).ink : pe;
      return {
        state: (e as any).state,
        body: t,
        eyes: n,
        ink: i
      };
    }
    static of(e: any, t: any, n: any = pe): any {
      let i: any = ((r as any).bodyPath as any)(e);
      if ((i as any) === (null as any)) return null;
      let a: any = ((i as any).getAttribute as any)("d");
      if ((a as any) === (null as any) || ((a as any).length as any) === (0 as any)) return null;
      let o: any = [],
        s: any = ((e as any).querySelectorAll as any)("g[clip-path] > path");
      for (let l: any = 0; (l as any) < ((s as any).length as any); l++) {
        let g: any = (s as any)[l];
        if ((g as any) === (void 0 as any) || ((r as any).hidden as any)(g)) continue;
        let d: any = ((g as any).getAttribute as any)("d");
        (d as any) === (null as any) || ((d as any).length as any) === (0 as any) || ((o as any).push as any)({
          d,
          matrix: ((r as any).matrixOf as any)(g)
        });
      }
      return {
        state: t,
        body: {
          d: a,
          matrix: ((r as any).matrixOf as any)(i)
        },
        eyes: o,
        ink: n
      };
    }
    static documentUrl(e: any): any {
      return (new (URL as any)(P, ((e as any).endsWith as any)("/") ? e : `${e}/`) as any).href;
    }
    static readStroke(e: any): any {
      if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || !("d" in e) || (typeof (e as any).d as any) != ("string" as any) || (((e as any).d as any).length as any) === (0 as any) || !("matrix" in e) || !((Array as any).isArray as any)((e as any).matrix) || (((e as any).matrix as any).length as any) !== (6 as any)) return null;
      let t: any = ((r as any).asMatrix as any)((e as any).matrix);
      return (t as any) === (null as any) ? null : {
        d: (e as any).d,
        matrix: t
      };
    }
    static bodyPath(e: any): any {
      let n: any = ((e as any).querySelector as any)("g[clip-path]")?.parentElement;
      if ((n as any) == (null as any)) return null;
      for (let i: any = 0; (i as any) < (((n as any).children as any).length as any); i++) {
        let a: any = ((n as any).children as any)[i];
        if ((a as any) !== (void 0 as any) && !(((((a as any).tagName as any).toLowerCase as any)() as any) !== ("path" as any) || ((r as any).hidden as any)(a)) && (((((a as any).getAttribute as any)("d") ?? "") as any).length as any) !== (0 as any)) return a;
      }
      return null;
    }
    static hidden(e: any): any {
      let t: any = ((e as any).getAttribute as any)("style");
      return (t as any) !== (null as any) && ((/\bdisplay\s*:\s*none\b/i as any).test as any)(t) ? !0 : ((e as any).style?.display as any) === ("none" as any);
    }
    static matrixOf(e: any): any {
      let t: any = [1, 0, 0, 1, 15, 15],
        n: any = [];
      for (let i: any = e; (i as any) !== (null as any) && (((n as any).push as any)(i), ((((i as any).tagName as any).toLowerCase as any)() as any) !== ("svg" as any)); i = (i as any).parentElement);
      for (let i of ((n as any).reverse as any)()) {
        let a: any = ((i as any).getAttribute as any)("transform");
        (a as any) !== (null as any) && ((a as any).length as any) > (0 as any) && (t = ((r as any).multiply as any)(t, ((r as any).parseTransform as any)(a)));
      }
      return t;
    }
    static parseTransform(e: any): any {
      let t: any = [1, 0, 0, 1, 0, 0],
        n: any = /(translate|rotate|scale|matrix)\(([^)]*)\)/g;
      for (let i of ((e as any).matchAll as any)(n)) {
        let a: any = (i as any)[1],
          o: any = (i as any)[2];
        if ((a as any) === (void 0 as any) || (o as any) === (void 0 as any)) continue;
        let s: any = ((((((o as any).split as any)(/[\s,]+/) as any).filter as any)((d: any): any => ((d as any).length as any) > (0 as any)) as any).map as any)(Number);
        if (((s as any).some as any)((d: any): any => ((Number as any).isNaN as any)(d))) continue;
        if ((a as any) === ("matrix" as any)) {
          let d: any = ((r as any).asMatrix as any)(s);
          (d as any) !== (null as any) && (t = ((r as any).multiply as any)(t, d));
          continue;
        }
        let l: any = (s as any)[0];
        if ((l as any) === (void 0 as any)) continue;
        let g: any = (s as any)[1] ?? l;
        if ((a as any) === ("translate" as any)) t = ((r as any).multiply as any)(t, [1, 0, 0, 1, l, (s as any)[1] ?? 0]);else if ((a as any) === ("rotate" as any)) {
          let d: any = ((l as any) * ((Math as any).PI as any) as any) / (180 as any),
            b: any = ((Math as any).cos as any)(d),
            ie: any = ((Math as any).sin as any)(d);
          t = ((r as any).multiply as any)(t, [b, ie, -ie, b, 0, 0]);
        } else t = ((r as any).multiply as any)(t, [l, 0, 0, ((s as any)[1] as any) === (void 0 as any) ? l : g, 0, 0]);
      }
      return t;
    }
    static asMatrix(e: any): any {
      if (((e as any).length as any) !== (6 as any)) return null;
      let t: any = [];
      for (let g of e) {
        if ((typeof g as any) != ("number" as any) || !((Number as any).isFinite as any)(g)) return null;
        ((t as any).push as any)(g);
      }
      let n: any = (t as any)[0],
        i: any = (t as any)[1],
        a: any = (t as any)[2],
        o: any = (t as any)[3],
        s: any = (t as any)[4],
        l: any = (t as any)[5];
      return (n as any) === (void 0 as any) || (i as any) === (void 0 as any) || (a as any) === (void 0 as any) || (o as any) === (void 0 as any) || (s as any) === (void 0 as any) || (l as any) === (void 0 as any) ? null : [n, i, a, o, s, l];
    }
    static multiply(e: any, t: any): any {
      return [(((e as any)[0] as any) * ((t as any)[0] as any) as any) + (((e as any)[2] as any) * ((t as any)[1] as any) as any), (((e as any)[1] as any) * ((t as any)[0] as any) as any) + (((e as any)[3] as any) * ((t as any)[1] as any) as any), (((e as any)[0] as any) * ((t as any)[2] as any) as any) + (((e as any)[2] as any) * ((t as any)[3] as any) as any), (((e as any)[1] as any) * ((t as any)[2] as any) as any) + (((e as any)[3] as any) * ((t as any)[3] as any) as any), ((((e as any)[0] as any) * ((t as any)[4] as any) as any) + (((e as any)[2] as any) * ((t as any)[5] as any) as any) as any) + ((e as any)[4] as any), ((((e as any)[1] as any) * ((t as any)[4] as any) as any) + (((e as any)[3] as any) * ((t as any)[5] as any) as any) as any) + ((e as any)[5] as any)];
    }
  };
var Ue: any = (((K as any).default as any).join as any)(__dirname, "..", "electron-preload", "preload-meeting-avatar.cjs"),
  We: any = (((K as any).default as any).join as any)(__dirname, "..", "renderer", ...((P as any).split as any)("/")),
  R: any = class r {
    [key: string]: any;
    window: any;
    source: any;
    onFailed: any;
    closed: any = !1;
    constructor(e: any) {
      (this as any).source = (e as any).source, (this as any).onFailed = (e as any).onFailed, (this as any).window = new ((me as any).BrowserWindow as any)({
        show: !1,
        width: 320,
        height: 180,
        webPreferences: {
          preload: Ue,
          sandbox: !0,
          contextIsolation: !0,
          nodeIntegration: !1
        }
      });
      let t: any = ((this as any).window as any).webContents;
      (t as any).backgroundThrottling = !1, ((t as any).setAudioMuted as any)(!0), ((t as any).setWindowOpenHandler as any)((): any => ({
        action: "deny"
      })), (((t as any).ipc as any).on as any)((c as any).avatarFrameChannel, (i: any, a: any): any => {
        (((L as any).read as any)(a) as any) !== (null as any) && ((e as any).onFrame as any)(a);
      }), ((t as any).on as any)("did-finish-load", (): any => {
        (this as any).closed || (((this as any).window as any).isDestroyed as any)() || ((t as any).send as any)((c as any).avatarSourceChannel, (e as any).source);
      }), ((t as any).on as any)("did-fail-load", (i: any, a: any, o: any, s: any, l: any): any => {
        l && ((this as any).fail as any)(((u as any).avatarFailed as any)(o || (String as any)(a)));
      }), ((t as any).on as any)("render-process-gone", (i: any, a: any): any => {
        ((this as any).fail as any)(((u as any).avatarCrashed as any)((a as any).reason));
      }), ((t as any).on as any)("preload-error", (i: any, a: any, o: any): any => {
        ((this as any).fail as any)(((u as any).avatarFailed as any)((o as any).name));
      }), (((this as any).window as any).on as any)("closed", (): any => {
        (this as any).closed || ((this as any).onFailed as any)((u as any).avatarClosed), ((this as any).close as any)();
      }), (((((e as any).documentUrl as any) === (void 0 as any) ? (((this as any).window as any).loadFile as any)(We) : (((this as any).window as any).loadURL as any)((e as any).documentUrl)) as any).catch as any)((i: any): any => {
        ((this as any).fail as any)(((u as any).avatarFailed as any)(i instanceof Error ? (i as any).name : typeof i));
      });
    }
    static open(e: any): any {
      return new (r as any)(e);
    }
    close(): any {
      (this as any).closed || ((this as any).closed = !0, (((this as any).window as any).isDestroyed as any)() || (((this as any).window as any).destroy as any)());
    }
    fail(e: any): any {
      (this as any).closed || (((this as any).onFailed as any)(e), ((this as any).close as any)());
    }
    hear(): any {
      (((this as any).source as any).kind as any) !== ("photo" as any) && ((this as any).signal as any)((c as any).hearEvent);
    }
    idle(): any {
      (((this as any).source as any).kind as any) !== ("photo" as any) && ((this as any).signal as any)((c as any).idleEvent);
    }
    signal(e: any): any {
      (this as any).closed || (((this as any).window as any).isDestroyed as any)() || ((((this as any).window as any).webContents as any).executeJavaScript as any)(`document.dispatchEvent(new Event(${((JSON as any).stringify as any)(e)}))`);
    }
  };
var N: any = class r {
  [key: string]: any;
  static grease: any = {
    brand: "Not=A?Brand",
    major: "99",
    full: "99.0.0.0"
  };
  static of(e: any): any {
    let t: any = ((/^\d+\.\d+\.\d+\.\d+$/ as any).test as any)((e as any).chromeVersion) ? (e as any).chromeVersion : "0.0.0.0",
      n: any = (((t as any).split as any)(".") as any)[0] ?? "0",
      i: any = ((r as any).osOf as any)(e),
      {
        grease: a
      }: any = r;
    return {
      userAgent: `Mozilla/5.0 (${(i as any).uaPlatformToken}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${n}.0.0.0 Safari/537.36`,
      acceptLanguage: (c as any).pageLanguage,
      platform: (i as any).navigatorPlatform,
      userAgentMetadata: {
        brands: [{
          brand: (a as any).brand,
          version: (a as any).major
        }, {
          brand: "Google Chrome",
          version: n
        }, {
          brand: "Chromium",
          version: n
        }],
        fullVersionList: [{
          brand: (a as any).brand,
          version: (a as any).full
        }, {
          brand: "Google Chrome",
          version: t
        }, {
          brand: "Chromium",
          version: t
        }],
        fullVersion: t,
        platform: (i as any).metadataPlatform,
        platformVersion: (i as any).platformVersion,
        architecture: ((e as any).arch as any) === ("arm64" as any) ? "arm" : "x86",
        model: "",
        mobile: !1,
        bitness: "64",
        wow64: !1
      }
    };
  }
  static osOf({
    platform: e,
    systemVersion: t
  }: any): any {
    switch (e) {
      case "darwin":
        return {
          uaPlatformToken: "Macintosh; Intel Mac OS X 10_15_7",
          navigatorPlatform: "MacIntel",
          metadataPlatform: "macOS",
          platformVersion: ((r as any).threePart as any)(t)
        };
      case "win32":
        return {
          uaPlatformToken: "Windows NT 10.0; Win64; x64",
          navigatorPlatform: "Win32",
          metadataPlatform: "Windows",
          platformVersion: "10.0.0"
        };
      default:
        return {
          uaPlatformToken: "X11; Linux x86_64",
          navigatorPlatform: "Linux x86_64",
          metadataPlatform: "Linux",
          platformVersion: ""
        };
    }
  }
  static threePart(e: any): any {
    let [t = "0", n = "0", i = "0"]: any = ((e as any).split as any)(".");
    return `${t}.${n}.${i}`;
  }
};
var J: any = class r {
    [key: string]: any;
    constructor(e: any) {
      (this as any).session = e;
      ((e as any).setPermissionRequestHandler as any)((t: any, n: any, i: any, a: any): any => {
        let o: any = ((r as any).allows as any)(n, a);
        (((this as any).permissionSinks as any).get as any)(t)?.({
          granted: o,
          permission: n
        }), (i as any)(o);
      }), ((e as any).setPermissionCheckHandler as any)((t: any, n: any, i: any, a: any): any => ((r as any).allows as any)(n, a));
    }
    session: any;
    static partition: any = "persist:meetings";
    static instance: any = null;
    permissionSinks: any = new (WeakMap as any)();
    static shared(): any {
      return (r as any).instance ??= new (r as any)((((C as any).session as any).fromPartition as any)((r as any).partition)), (r as any).instance;
    }
    get partition(): any {
      return (r as any).partition;
    }
    identity: any = ((N as any).of as any)({
      chromeVersion: ((process as any).versions as any).chrome,
      platform: (process as any).platform,
      arch: (process as any).arch,
      systemVersion: ((process as any).getSystemVersion as any)()
    });
    prepare(): any {
      (((this as any).session as any).setUserAgent as any)(((this as any).identity as any).userAgent, ((this as any).identity as any).acceptLanguage);
    }
    track(e: any, t: any): any {
      (((this as any).permissionSinks as any).set as any)(e, t);
    }
    untrack(e: any): any {
      (((this as any).permissionSinks as any).delete as any)(e);
    }
    static allows(e: any, t: any): any {
      return (ue as any)(e, t);
    }
  },
  _: any = class r {
    [key: string]: any;
    constructor(e: any, t: any) {
      (this as any).args = e;
      (this as any).session = t;
      ((t as any).prepare as any)(), (this as any).window = new ((C as any).BrowserWindow as any)({
        show: !1,
        width: 1280,
        height: 800,
        webPreferences: {
          partition: (t as any).partition,
          preload: (e as any).preloadPath,
          sandbox: !0,
          contextIsolation: !0,
          nodeIntegration: !1,
          autoplayPolicy: "no-user-gesture-required",
          additionalArguments: [`${(c as any).displayNameArg}${(encodeURIComponent as any)((e as any).displayName)}`]
        }
      }), (this as any).contents = ((this as any).window as any).webContents, ((this as any).contents as any).backgroundThrottling = !1, (this as any).avatar = ((R as any).open as any)({
        source: (e as any).avatar,
        ...(((e as any).avatarDocumentUrl as any) === (void 0 as any) ? {} : {
          documentUrl: (e as any).avatarDocumentUrl
        }),
        onFailed: (n: any): any => {
          (this as any).closed || ((e as any).onFailed as any)(n);
        },
        onFrame: (n: any): any => {
          ((this as any).forwardAvatarFrame as any)(n);
        }
      }), ((t as any).track as any)((this as any).contents, (e as any).onPermission), (((this as any).contents as any).setAudioMuted as any)(!0), (((this as any).contents as any).setWindowOpenHandler as any)((): any => ({
        action: "deny"
      })), ((this as any).listenToPage as any)(), ((this as any).listenToLifecycle as any)();
    }
    args: any;
    session: any;
    static blankPage: any = "about:blank";
    window: any;
    contents: any;
    avatar: any;
    avatarFrames: any = new (D as any)();
    closed: any = !1;
    static open(e: any): any {
      let t: any = new (r as any)(e, ((J as any).shared as any)());
      return ((t as any).load as any)(), t;
    }
    close(): any {
      (this as any).closed || ((this as any).closed = !0, (((this as any).session as any).untrack as any)((this as any).contents), (((this as any).avatar as any).close as any)(), !(((this as any).window as any).isDestroyed as any)() && (((((this as any).contents as any).debugger as any).isAttached as any)() && ((((this as any).contents as any).debugger as any).detach as any)(), (((this as any).window as any).destroy as any)()));
    }
    isOpen(): any {
      return !(((this as any).window as any).isDestroyed as any)();
    }
    hear(): any {
      (((this as any).avatar as any).hear as any)(), ((this as any).signal as any)((c as any).hearEvent);
    }
    idle(): any {
      (((this as any).avatar as any).idle as any)(), ((this as any).signal as any)((c as any).idleEvent);
    }
    signal(e: any): any {
      (this as any).closed || (((this as any).window as any).isDestroyed as any)() || (((this as any).contents as any).executeJavaScript as any)(`document.dispatchEvent(new Event(${((JSON as any).stringify as any)(e)}))`);
    }
    pageTitle(): any {
      return (this as any).closed || (((this as any).window as any).isDestroyed as any)() ? "" : (((this as any).contents as any).getTitle as any)();
    }
    async capturePage(): Promise<any> {
      if ((this as any).closed || (((this as any).window as any).isDestroyed as any)()) return null;
      let e: any = await (((this as any).contents as any).capturePage as any)();
      return ((e as any).isEmpty as any)() ? null : ((e as any).toDataURL as any)();
    }
    listenToPage(): any {
      let {
        args: e
      }: any = this;
      ((((this as any).contents as any).ipc as any).on as any)((c as any).audioChannel, (t: any, n: any): any => {
        let i: any = ((v as any).readAudioFrame as any)(n);
        (i as any) !== (null as any) && ((e as any).onAudio as any)(i);
      }), ((((this as any).contents as any).ipc as any).on as any)((c as any).pageChannel, (t: any, n: any): any => {
        ((v as any).isStatus as any)(n) && ((e as any).onPage as any)(n);
      }), ((((this as any).contents as any).ipc as any).on as any)((c as any).debugChannel, (t: any, n: any): any => {
        ((v as any).isDebugEvent as any)(n) && ((e as any).onDebug as any)(n);
      });
    }
    listenToLifecycle(): any {
      let {
        args: e
      }: any = this;
      (((this as any).contents as any).on as any)("did-finish-load", (): any => {
        (this as any).closed || ((((this as any).avatarFrames as any).replay as any)((((this as any).contents as any).getURL as any)(), (r as any).blankPage, (t: any): any => {
          ((this as any).sendAvatarFrame as any)(t);
        }), ((((this as any).contents as any).getURL as any)() as any) !== ((r as any).blankPage as any) && ((e as any).onLoaded as any)());
      }), (((this as any).contents as any).on as any)("did-fail-load", (t: any, n: any, i: any, a: any, o: any): any => {
        o && ((e as any).onFailed as any)(((u as any).pageFailed as any)(i || (String as any)(n)));
      }), (((this as any).contents as any).on as any)("render-process-gone", (t: any, n: any): any => {
        ((e as any).onFailed as any)(((u as any).pageCrashed as any)((n as any).reason));
      }), (((this as any).contents as any).on as any)("preload-error", (t: any, n: any, i: any): any => {
        ((e as any).onFailed as any)(((u as any).preloadFailed as any)((i as any).name));
      }), (((this as any).window as any).on as any)("closed", (): any => {
        (this as any).closed || ((e as any).onFailed as any)((u as any).windowClosed), ((this as any).close as any)();
      });
    }
    forwardAvatarFrame(e: any): any {
      (((this as any).avatarFrames as any).publish as any)(e, (t: any): any => {
        ((this as any).sendAvatarFrame as any)(t);
      });
    }
    sendAvatarFrame(e: any): any {
      !(this as any).closed && !(((this as any).window as any).isDestroyed as any)() && (((this as any).contents as any).send as any)((c as any).avatarFrameChannel, e);
    }
    load(): any {
      ((((((this as any).presentAsChrome as any)() as any).then as any)((): any => (((this as any).window as any).loadURL as any)(((this as any).args as any).url)) as any).catch as any)((e: any): any => {
        (((this as any).args as any).onFailed as any)(((u as any).pageFailed as any)(e instanceof Error ? (e as any).name : typeof e));
      });
    }
    async presentAsChrome(): Promise<any> {
      await (((this as any).window as any).loadURL as any)((r as any).blankPage), ((((this as any).contents as any).debugger as any).attach as any)("1.3"), await ((((this as any).contents as any).debugger as any).sendCommand as any)("Emulation.setUserAgentOverride", ((this as any).session as any).identity);
    }
  };
function z(this: any, r: any): any {
  return (typeof r as any) == ("object" as any) && (r as any) !== (null as any) && !((Array as any).isArray as any)(r);
}
function he(this: any, r: any): any {
  let e: any;
  try {
    e = ((JSON as any).parse as any)(r);
  } catch {
    e = void 0;
  }
  return e;
}
var O: any = class r {
  [key: string]: any;
  constructor(e: any) {
    (this as any).backend = e;
  }
  backend: any;
  static pullTimeoutSlackMs: any = 1e4;
  static reportTimeoutMs: any = 15e3;
  async pull(e: any): Promise<any> {
    let t: any = await ((((this as any).backend as any).meetings as any).pullGrokBotMeetings as any)({
      machineId: await (((this as any).backend as any).getMachineId as any)(),
      waitMs: (e as any).waitMs
    }, {
      timeoutMs: ((e as any).waitMs as any) + ((r as any).pullTimeoutSlackMs as any)
    });
    return ((r as any).replyOf as any)((t as any).replyJson);
  }
  async report(e: any): Promise<any> {
    await ((((this as any).backend as any).meetings as any).reportGrokBotMeetings as any)({
      machineId: await (((this as any).backend as any).getMachineId as any)(),
      reportJson: ((JSON as any).stringify as any)(e)
    }, {
      timeoutMs: (r as any).reportTimeoutMs
    });
  }
  static replyOf(e: any): any {
    let t: any = (he as any)(e);
    return !(z as any)(t) || !((Array as any).isArray as any)((t as any).requests) ? {
      requests: []
    } : {
      requests: (((t as any).requests as any).flatMap as any)((n: any): any => {
        let i: any = ((r as any).requestOf as any)(n);
        return (i as any) === (void 0 as any) ? [] : [i];
      })
    };
  }
  static requestOf(e: any): any {
    if (!(z as any)(e) || (typeof (e as any).meetingId as any) != ("string" as any)) return;
    let t: any = (typeof (e as any).machineId as any) == ("string" as any) ? (e as any).machineId : void 0,
      n: any = (t as any) === (void 0 as any) ? {} : {
        machineId: t
      };
    if (((e as any).kind as any) === ("leave" as any)) return {
      kind: "leave",
      meetingId: (e as any).meetingId,
      ...n
    };
    if (((e as any).kind as any) !== ("join" as any) || (typeof (e as any).url as any) != ("string" as any) || (typeof (e as any).displayName as any) != ("string" as any)) return;
    let i: any = (typeof (e as any).agentId as any) == ("string" as any) ? (e as any).agentId : void 0;
    return {
      kind: "join",
      meetingId: (e as any).meetingId,
      url: (e as any).url,
      displayName: (e as any).displayName,
      ...((i as any) === (void 0 as any) ? {} : {
        agentId: i
      }),
      ...n
    };
  }
};
var k: any = class r {
  [key: string]: any;
  constructor(e: any) {
    (this as any).deps = e;
  }
  deps: any;
  static sweepMs: any = 1e4;
  timer: any = null;
  last: any = oe;
  static of({
    nowMs: e,
    meetings: t,
    lanes: n,
    liveWindows: i,
    released: a
  }: any): any {
    let o: any = 0,
      s: any = 0;
    for (let l of a) (l as any).open && (o += 1, ((e as any) - ((l as any).atMs as any) as any) >= (se as any) && (s += 1));
    return {
      meetings: t,
      windows: (i as any) + (o as any),
      stuckWindows: s,
      lanes: n
    };
  }
  start(): any {
    ((this as any).sweep as any)(), ((this as any).arm as any)();
  }
  stop(): any {
    (this as any).timer?.dispose(), (this as any).timer = null, ((this as any).sweep as any)();
  }
  sweep(): any {
    let e: any = (((this as any).deps as any).read as any)(),
      t: any = (this as any).last;
    if ((this as any).last = e, ((e as any).stuckWindows as any) > ((t as any).stuckWindows as any)) {
      ((this as any).publish as any)("stuck", e);
      return;
    }
    ((e as any).meetings as any) === ((t as any).meetings as any) && ((e as any).windows as any) === ((t as any).windows as any) && ((e as any).stuckWindows as any) === ((t as any).stuckWindows as any) || ((this as any).publish as any)(((r as any).phaseOf as any)((t as any).meetings, (e as any).meetings), e);
  }
  static phaseOf(e: any, t: any): any {
    return (t as any) > (e as any) ? "join" : (t as any) < (e as any) ? "end" : "census";
  }
  arm(): any {
    (this as any).timer = ((m as any).schedule as any)((r as any).sweepMs, (): any => {
      (this as any).timer = null, ((this as any).sweep as any)(), ((this as any).arm as any)();
    });
  }
  publish(e: any, t: any): any {
    ((this as any).deps as any).report?.((e as any) === ("stuck" as any) ? "warn" : "info", {
      phase: e,
      meetings: (String as any)((t as any).meetings),
      windows: (String as any)((t as any).windows),
      stuck_windows: (String as any)((t as any).stuckWindows),
      lanes: (String as any)((t as any).lanes)
    }), (((this as any).deps as any).onChanged as any)();
  }
};
var we: any = (require as any)("node:crypto");
var X: any = [{
  id: "black",
  label: "Black",
  value: "#000"
}, {
  id: "brown",
  label: "Brown",
  value: "#936439"
}, {
  id: "red",
  label: "Red",
  value: "#FF263C"
}, {
  id: "orange",
  label: "Orange",
  value: "#FF6700"
}, {
  id: "yellow",
  label: "Yellow",
  value: "#FF9800"
}, {
  id: "green",
  label: "Green",
  value: "#00C972"
}, {
  id: "cyan",
  label: "Cyan",
  value: "#00BCA6"
}, {
  id: "blue",
  label: "Blue",
  value: "#1084FE"
}, {
  id: "violet",
  label: "Violet",
  value: "#9159FE"
}, {
  id: "magenta",
  label: "Magenta",
  value: "#FF309B"
}, {
  id: "gray",
  label: "Gray",
  value: "#777777"
}];
var ye: any = ((X as any).filter as any)((r: any): any => ((r as any).id as any) !== ("black" as any));
var Y: any = ["blob", "pebble", "bean", "egg", "squircle", "tablet", "capsule", "cylinder", "hex", "gem", "crystal", "wedge", "shield", "dome", "arch", "cloud", "teardrop", "leaf", "square", "sparkle", "clover", "flower", "heart", "house", "star"],
  wn: any = [...Y],
  Q: any = ["blob", "pebble", "squircle", "tablet", "wedge", "hex", "cloud", "teardrop"];
var fe: any = ((X as any).map as any)(({
    id: r
  }: any): any => r),
  Z: any = ((ye as any).map as any)(({
    id: r
  }: any): any => r),
  je: number = 1,
  Ge: number = 1;
function Me(this: any, r: any): any {
  let e: any = 2166136261;
  for (let t: any = 0; (t as any) < ((r as any).length as any); t++) e ^= ((r as any).charCodeAt as any)(t), e = ((Math as any).imul as any)(e, 16777619);
  return (e as any) >>> (0 as any);
}
function Be(this: any, r: any): any {
  return ((((Me as any)(r) as any) ^ (((Math as any).imul as any)(je, 2654435769) as any)) as any) >>> (0 as any);
}
function $e(this: any, r: any): any {
  let e: any = (r as any) >>> (0 as any);
  return (): any => {
    e = ((e as any) + (1831565813 as any) as any) | (0 as any);
    let t: any = ((Math as any).imul as any)((e as any) ^ ((e as any) >>> (15 as any) as any), (1 as any) | (e as any));
    return t = ((t as any) + (((Math as any).imul as any)((t as any) ^ ((t as any) >>> (7 as any) as any), (61 as any) | (t as any)) as any) as any) ^ (t as any), ((((t as any) ^ ((t as any) >>> (14 as any) as any)) as any) >>> (0 as any) as any) / (4294967296 as any);
  };
}
function He(this: any, r: any): any {
  let e: any = ($e as any)((((r as any) ^ (((Math as any).imul as any)(Ge, 2654435769) as any)) as any) >>> (0 as any));
  return ((Math as any).floor as any)(((e as any)() as any) * ((Z as any).length as any));
}
function Ve(this: any, r: any): any {
  return (He as any)((Be as any)(r));
}
function qe(this: any, r: any): any {
  return (Z as any)[(Ve as any)(r)] ?? "black";
}
function Ke(this: any, r: any): any {
  let e: any = ((Me as any)(r) as any) | (0 as any);
  return e = ((Math as any).imul as any)((e as any) ^ ((e as any) >>> (16 as any) as any), 73244475), e = ((Math as any).imul as any)((e as any) ^ ((e as any) >>> (13 as any) as any), 3266489909), (((e as any) ^ ((e as any) >>> (16 as any) as any)) as any) >>> (0 as any);
}
function Je(this: any, r: any): any {
  return (Q as any)[((Ke as any)(r) as any) % ((Q as any).length as any)] ?? "blob";
}
function ze(this: any, r: any): any {
  return (r as any) == (null as any) ? void 0 : ((Y as any).find as any)((e: any): any => (e as any) === (r as any));
}
function Xe(this: any, r: any): any {
  return (r as any) == (null as any) ? void 0 : ((fe as any).find as any)((e: any): any => (e as any) === (r as any));
}
function F(this: any, r: any): any {
  return {
    shape: (ze as any)((r as any).avatarShape) ?? (Je as any)((r as any).agentId),
    color: (Xe as any)((r as any).avatarColor) ?? (qe as any)((r as any).agentId)
  };
}
var E: any = class {
  [key: string]: any;
  static of(e: any): any {
    let t: any = (e as any).avatarDataUrl ?? "";
    if (((t as any).length as any) > (0 as any)) return {
      kind: "photo",
      dataUrl: t
    };
    let n: any = (F as any)({
      agentId: (e as any).agentId ?? "",
      ...(((e as any).avatarShape as any) === (void 0 as any) ? {} : {
        avatarShape: (e as any).avatarShape
      }),
      ...(((e as any).avatarColor as any) === (void 0 as any) ? {} : {
        avatarColor: (e as any).avatarColor
      })
    });
    return {
      kind: "mark",
      shape: (n as any).shape,
      color: (n as any).color
    };
  }
  static read(e: any): any {
    if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || !("kind" in e)) return null;
    if (((e as any).kind as any) === ("photo" as any)) return !("dataUrl" in e) || (typeof (e as any).dataUrl as any) != ("string" as any) || (((e as any).dataUrl as any).length as any) === (0 as any) ? null : {
      kind: "photo",
      dataUrl: (e as any).dataUrl
    };
    if (((e as any).kind as any) !== ("mark" as any) || !("shape" in e) || (typeof (e as any).shape as any) != ("string" as any) || !("color" in e) || (typeof (e as any).color as any) != ("string" as any)) return null;
    let t: any = (F as any)({
      agentId: "",
      avatarShape: (e as any).shape,
      avatarColor: (e as any).color
    });
    return ((t as any).shape as any) !== ((e as any).shape as any) || ((t as any).color as any) !== ((e as any).color as any) ? null : {
      kind: "mark",
      shape: (t as any).shape,
      color: (t as any).color
    };
  }
};
var ve: string = " (Grok Bot)",
  ee: number = 60,
  Qe: any = (ee as any) / (2 as any),
  U: any = class r {
    [key: string]: any;
    static of(e: any, {
      ownerFirstName: t
    }: any = {}): any {
      let n: any = ((e as any).trim as any)(),
        i: any = ((n as any).length as any) === (0 as any) ? "Grok Bot" : n,
        a: any = ((r as any).suffixOf as any)(t);
      if ((i as any) === ("Grok Bot" as any) || ((i as any).startsWith as any)("Grok Bot ") || ((i as any).endsWith as any)(ve) || ((i as any).endsWith as any)(a)) return ((i as any).slice as any)(0, ee);
      let o: any = (ee as any) - ((a as any).length as any);
      return `${((i as any).length as any) <= (o as any) ? i : ((((i as any).slice as any)(0, o) as any).trimEnd as any)()}${a}`;
    }
    static suffixOf(e: any): any {
      let t: any = e?.trim() ?? "",
        n: any = ` (${t}'s Bot)`;
      return ((t as any).length as any) === (0 as any) || ((n as any).length as any) > (Qe as any) ? ve : n;
    }
  };
var p: any = class r {
    [key: string]: any;
    static max: any = 200;
    static errorDetailMax: any = 400;
    static append(e: any, t: any, n: any = (r as any).max): any {
      let i: any = [...e, t];
      return ((i as any).length as any) <= (n as any) ? i : ((i as any).slice as any)(((i as any).length as any) - (n as any));
    }
    static format(e: any): any {
      let t: any = ((e as any).meetingId as any) === (null as any) ? "" : ` meeting=${(e as any).meetingId}`,
        n: any = (((e as any).detail as any).length as any) === (0 as any) ? "" : ` ${(e as any).detail}`;
      return `[sand][meetings] ${(e as any).event}${t}${n}`;
    }
    static probeDetail(e: any): any {
      let t: any = (n: any): any => n ? "1" : "0";
      return (([`lang=${(e as any).pageLanguage || "-"}`, `leave=${(t as any)((e as any).leaveControl)}`, `join=${(t as any)((e as any).joinControl)}`, `name=${(t as any)((e as any).nameField)}`, `playback=${(t as any)((e as any).playback)}`, `entries=${(e as any).participantEntries}`, `others=${(e as any).otherParticipants ?? "-"}`] as any).join as any)(" ");
    }
    static eventOfPage(e: any): any {
      return `page.${(e as any).kind}`;
    }
    static errorDetail(e: any): any {
      if (!(e instanceof Error)) return typeof e;
      let t: any = (((((e as any).message as any).replace as any)(/\s+/g, " ") as any).trim as any)(),
        n: any = ((t as any).length as any) === (0 as any) ? (e as any).name : `${(e as any).name}: ${t}`,
        i: any = "failureCode" in e && (typeof (e as any).failureCode as any) == ("string" as any) && (((e as any).failureCode as any).length as any) > (0 as any) ? (e as any).failureCode : void 0,
        a: any = (i as any) !== (void 0 as any) && !((n as any).includes as any)(i) ? `${n} (${i})` : n,
        o: any = (r as any).errorDetailMax;
      return ((a as any).length as any) <= (o as any) ? a : `${((a as any).slice as any)(0, (o as any) - (1 as any))}\u2026`;
    }
  },
  h: any = class r {
    [key: string]: any;
    static transcriptMax: any = 100;
    static pageStatus: any = {
      "in-call": "LIVE",
      ended: "ENDED",
      error: "FAILED"
    };
    static empty(e: any, t: any, n: any, i: any = null): any {
      return {
        meetingId: e,
        agentId: i,
        url: t,
        status: "JOINING",
        page: "prejoin",
        requestedAtMs: n,
        liveAtMs: null,
        endedAtMs: null,
        lastError: null,
        lastLandmark: null,
        lastPcmAtMs: null,
        lastSttAtMs: null,
        pcmFrames: 0,
        sttSegments: 0,
        transcript: [],
        destroyReason: null,
        helperAlive: !0
      };
    }
    static apply(e: any, t: any): any {
      switch ((t as any).kind) {
        case "created":
          return ((r as any).empty as any)((t as any).meetingId, (t as any).url, (t as any).atMs, (t as any).agentId ?? null);
        case "page":
          return {
            ...e,
            page: (t as any).page,
            lastLandmark: (t as any).landmark ?? (e as any).lastLandmark,
            status: ((r as any).pageStatus as any)[(t as any).page] ?? (e as any).status
          };
        case "live":
          return {
            ...e,
            status: "LIVE",
            page: "in-call",
            liveAtMs: (e as any).liveAtMs ?? (t as any).atMs
          };
        case "pcm":
          return {
            ...e,
            pcmFrames: ((e as any).pcmFrames as any) + (1 as any),
            lastPcmAtMs: (t as any).atMs
          };
        case "stt":
          return {
            ...e,
            sttSegments: ((e as any).sttSegments as any) + (1 as any),
            lastSttAtMs: (t as any).atMs,
            transcript: ((r as any).appendTranscript as any)((e as any).transcript, {
              atMs: (t as any).atMs,
              text: (t as any).text
            })
          };
        case "stop":
          return {
            ...e,
            status: (t as any).status,
            page: ((t as any).status as any) === ("FAILED" as any) ? "error" : "ended",
            endedAtMs: (t as any).atMs,
            destroyReason: (t as any).reason,
            helperAlive: !1,
            lastError: ((t as any).status as any) === ("FAILED" as any) ? (t as any).reason : (e as any).lastError
          };
      }
    }
    static phaseOf(e: any): any {
      switch ((e as any).kind) {
        case "prejoin":
          return "prejoin";
        case "waiting":
          return "waiting";
        case "in-call":
        case "alone":
          return "in-call";
        case "ended":
          return "ended";
        case "denied":
          return "error";
      }
    }
    static isOngoing(e: any): any {
      return ((e as any).status as any) === ("JOINING" as any) || ((e as any).status as any) === ("LIVE" as any);
    }
    static health(e: any): any {
      return ((e as any).some as any)((t: any): any => ((r as any).isOngoing as any)(t)) ? "live" : ((e as any).some as any)((t: any): any => ((t as any).status as any) === ("FAILED" as any) || ((t as any).lastError as any) !== (null as any)) ? "error" : "idle";
    }
    static appendTranscript(e: any, t: any): any {
      let n: any = [...e, t],
        i: any = (r as any).transcriptMax;
      return ((n as any).length as any) <= (i as any) ? n : ((n as any).slice as any)(((n as any).length as any) - (i as any));
    }
  },
  W: any = class {
    [key: string]: any;
    static empty(e: any): any {
      return {
        gateEnabled: e,
        health: e ? "idle" : "off",
        lastPullAtMs: null,
        meetings: [],
        logs: [],
        serverMeetings: []
      };
    }
  };
var y: any = class r {
  [key: string]: any;
  static googleMeet: any = "meet.google.com";
  static zoom: any = "zoom.us";
  static names: any = {
    "google-meet": "Google Meet",
    zoom: "Zoom"
  };
  static providerNames: any = {
    GOOGLE_MEET: "Google Meet",
    ZOOM: "Zoom",
    MICROSOFT_TEAMS: "Microsoft Teams"
  };
  static siteOf(e: any): any {
    let t: any = ((e as any).toLowerCase as any)();
    return (t as any) === ((r as any).googleMeet as any) ? "google-meet" : (t as any) === ((r as any).zoom as any) || ((t as any).endsWith as any)(`.${(r as any).zoom}`) ? "zoom" : null;
  }
  static nameOf(e: any): any {
    let t: any = ((URL as any).canParse as any)(e) ? ((r as any).siteOf as any)((new (URL as any)(e) as any).hostname) : null;
    return (t as any) === (null as any) ? null : ((r as any).names as any)[t];
  }
};
var w: any = class r {
    [key: string]: any;
    static hasScheme: any = /^[a-z][a-z0-9+.-]*:\/\//i;
    static httpsUrl(e: any): any {
      if (((e as any).length as any) === (0 as any)) return null;
      let t: any = (((r as any).hasScheme as any).test as any)(e) ? e : `https://${e}`;
      if (!((URL as any).canParse as any)(t)) return null;
      let n: any = new (URL as any)(t);
      return ((n as any).protocol as any) === ("https:" as any) ? n : null;
    }
  },
  te: any = class r extends (w as any) {
    [key: string]: any;
    id: any = "google-meet";
    provider: any = "GOOGLE_MEET";
    displayName: any = ((y as any).names as any)["google-meet"];
    exampleUrl: any = "https://meet.google.com/abc-defg-hij";
    static meetingCode: any = /^[a-z]{3}-[a-z]{4}-[a-z]{3}$/i;
    static lookupCode: any = /^[a-z0-9][a-z0-9-]{0,63}$/i;
    parse(e: any): any {
      let t: any = ((e as any).trim as any)();
      if ((((r as any).meetingCode as any).test as any)(t)) return ((r as any).urlOf as any)(t);
      let n: any = ((w as any).httpsUrl as any)(t);
      if ((n as any) === (null as any) || (((y as any).siteOf as any)((n as any).hostname) as any) !== ((this as any).id as any)) return null;
      let i: any = ((r as any).codeOfPath as any)((n as any).pathname);
      return (i as any) === (null as any) ? null : ((r as any).urlOf as any)(i);
    }
    static codeOfPath(e: any): any {
      let [t, n, ...i]: any = ((((e as any).split as any)("/") as any).filter as any)((a: any): any => ((a as any).length as any) > (0 as any));
      return (t as any) === (void 0 as any) || ((i as any).length as any) > (0 as any) ? null : (n as any) === (void 0 as any) ? (((r as any).meetingCode as any).test as any)(t) ? t : null : (((t as any).toLowerCase as any)() as any) === ("lookup" as any) && (((r as any).lookupCode as any).test as any)(n) ? `lookup/${n}` : null;
    }
    static urlOf(e: any): any {
      let t: any = ((e as any).toLowerCase as any)();
      return {
        url: `https://${(y as any).googleMeet}/${t}`,
        meetingId: t
      };
    }
  },
  ne: any = class r extends (w as any) {
    [key: string]: any;
    id: any = "zoom";
    provider: any = "ZOOM";
    displayName: any = ((y as any).names as any).zoom;
    exampleUrl: any = "https://zoom.us/j/12345678901?pwd=abc";
    static meetingIdPattern: any = /^\d{9,12}$/;
    parse(e: any): any {
      let t: any = ((e as any).trim as any)(),
        n: any = ((w as any).httpsUrl as any)(t);
      if ((n as any) === (null as any) || (((y as any).siteOf as any)((n as any).hostname) as any) !== ((this as any).id as any)) return null;
      let i: any = (((((n as any).pathname as any).split as any)("/") as any).filter as any)((l: any): any => ((l as any).length as any) > (0 as any)),
        a: any = ((r as any).meetingId as any)(i);
      if ((a as any) === (null as any)) return null;
      let o: any = ((r as any).password as any)(t),
        s: any = (o as any) === (null as any) || ((o as any).length as any) === (0 as any) ? "" : `?pwd=${(encodeURIComponent as any)(o)}`;
      return {
        url: `https://${(y as any).zoom}/wc/join/${a}${s}`,
        meetingId: a
      };
    }
    static meetingId(e: any): any {
      let [t, n, i]: any = e,
        a: any = (o: any): any => (o as any) !== (void 0 as any) && (((r as any).meetingIdPattern as any).test as any)(o);
      return (t as any) === ("j" as any) && (a as any)(n) ? n : (t as any) === ("wc" as any) && (n as any) === ("join" as any) && (a as any)(i) ? i : (t as any) === ("wc" as any) && (a as any)(n) && (i as any) === ("join" as any) ? n : null;
    }
    static password(e: any): any {
      let t: any = (((e as any).split as any)("#") as any)[0]?.split("?")[1];
      if ((t as any) === (void 0 as any)) return null;
      for (let n of ((t as any).split as any)("&")) if (((n as any).startsWith as any)("pwd=")) try {
        let i: any = (decodeURIComponent as any)(((((n as any).slice as any)(4) as any).replace as any)(/\+/g, "%2B"));
        return ((i as any).length as any) === (0 as any) ? null : i;
      } catch (i: any) {
        if (i instanceof URIError) return null;
        throw i;
      }
      return null;
    }
  },
  j: any = class r {
    [key: string]: any;
    static googleMeet: any = new (te as any)();
    static zoom: any = new (ne as any)();
    static all: any = [(r as any).googleMeet, (r as any).zoom];
    static names: any = ((r as any).orList as any)((((r as any).all as any).map as any)((e: any): any => (e as any).displayName));
    static examples: any = ((r as any).orList as any)((((r as any).all as any).map as any)((e: any): any => (e as any).exampleUrl));
    static parse(e: any): any {
      for (let t of (r as any).all) {
        let n: any = ((t as any).parse as any)(e);
        if ((n as any) !== (null as any)) return {
          site: t,
          url: (n as any).url,
          meetingId: (n as any).meetingId
        };
      }
      return null;
    }
    static orList(e: any): any {
      return ((new ((Intl as any).ListFormat as any)("en", {
        type: "disjunction"
      }) as any).format as any)(e);
    }
  };
var G: any = class r {
  [key: string]: any;
  static policy: any = {
    windowMs: (2 as any) * (6e4 as any),
    overlapMs: 2e4
  };
  static span(e: any, t: any = (r as any).policy): any {
    let n: any = (e as any) * (((t as any).windowMs as any) - ((t as any).overlapMs as any) as any);
    return {
      index: e,
      startMs: n,
      endMs: (n as any) + ((t as any).windowMs as any)
    };
  }
  static segments(e: any, t: any, n: any): any {
    return ((e as any).filter as any)((i: any): any => {
      let a: any = ((i as any).atMs as any) - (n as any);
      return (a as any) >= ((t as any).startMs as any) && (a as any) < ((t as any).endMs as any);
    });
  }
  static closed({
    liveAtMs: e,
    lastAtMs: t,
    ended: n,
    policy: i = (r as any).policy
  }: any): any {
    let a: any = (t as any) - (e as any),
      o: any = 0;
    for (;;) {
      let s: any = ((r as any).span as any)(o, i);
      if ((a as any) < ((s as any).startMs as any) || !n && ((s as any).endMs as any) > (a as any)) return o;
      o += 1;
    }
  }
  static section(e: any, t: any): any {
    return `[${((r as any).clock as any)((e as any).startMs)} to ${((r as any).clock as any)((e as any).endMs)}]
${t}`;
  }
  static clock(e: any): any {
    let t: any = ((Math as any).max as any)(0, ((Math as any).floor as any)((e as any) / (1e3 as any))),
      n: any = ((Math as any).floor as any)((t as any) / (60 as any)),
      i: any = (t as any) % (60 as any);
    return `${n}:${(((String as any)(i) as any).padStart as any)(2, "0")}`;
  }
};
var B: any = class r {
  [key: string]: any;
  constructor(e: any) {
    (this as any).deps = e;
  }
  deps: any;
  logs: any = [];
  meetings: any = new (Map as any)();
  lastPullAtMs: any = null;
  markPulled(e: any): any {
    (this as any).lastPullAtMs = e;
  }
  ensureMeeting(e: any, t: any, n: any): any {
    (((this as any).meetings as any).has as any)(e) || (((this as any).meetings as any).set as any)(e, ((h as any).empty as any)(e, t, n));
  }
  mutate(e: any, t: any): any {
    let n: any = (((this as any).meetings as any).get as any)(e) ?? (((t as any).kind as any) === ("created" as any) ? ((h as any).empty as any)((t as any).meetingId, (t as any).url, (t as any).atMs) : void 0);
    if ((n as any) === (void 0 as any)) return;
    let i: any = ((h as any).apply as any)(n, t);
    (((this as any).meetings as any).set as any)(e, i), (((t as any).kind as any) === ("created" as any) || ((i as any).status as any) !== ((n as any).status as any)) && (((this as any).deps as any).onMeetingsChanged as any)(((this as any).desktopMeetings as any)());
  }
  desktopMeetings(): any {
    return (([...(((this as any).meetings as any).values as any)()] as any).map as any)((e: any): any => ((r as any).desktopMeetingOf as any)(e));
  }
  record({
    event: e,
    level: t,
    meetingId: n,
    detail: i
  }: any): any {
    let a: any = {
      atMs: ((((this as any).deps as any).clock as any).now as any)(),
      level: t ?? (((e as any).endsWith as any)(".fail") || ((e as any).endsWith as any)(".error") ? "error" : "info"),
      event: e,
      meetingId: n ?? null,
      detail: i ?? ""
    };
    return (this as any).logs = ((p as any).append as any)((this as any).logs, a), (((this as any).deps as any).emitDesktopLog as any)((a as any).level, ((p as any).format as any)(a)), a;
  }
  status(): any {
    let e: any = [...(((this as any).meetings as any).values as any)()];
    return {
      ...((W as any).empty as any)(!0),
      lastPullAtMs: (this as any).lastPullAtMs,
      health: ((h as any).health as any)(e),
      meetings: e,
      logs: (this as any).logs
    };
  }
  meeting(e: any): any {
    return (((this as any).meetings as any).get as any)(e);
  }
  static desktopMeetingOf(e: any): any {
    return {
      meetingId: (e as any).meetingId,
      agentId: (e as any).agentId,
      url: (e as any).url,
      status: (e as any).status
    };
  }
};
var Ye: number = 300,
  Ze: number = 3400,
  I: number = 256,
  et: number = 3,
  tt: any = -50,
  nt: number = 10,
  rt: number = .2,
  it: any = -60,
  at: any = -90,
  ot: number = .1,
  st: number = .03,
  $: any = class r {
    [key: string]: any;
    constructor(e: any, t: any, n: any, i: any, a: any) {
      (this as any).b0 = e;
      (this as any).b1 = t;
      (this as any).b2 = n;
      (this as any).a1 = i;
      (this as any).a2 = a;
    }
    b0: any;
    b1: any;
    b2: any;
    a1: any;
    a2: any;
    x1: any = 0;
    x2: any = 0;
    y1: any = 0;
    y2: any = 0;
    static highPass(e: any, t: any): any {
      let {
          cos: n,
          alpha: i
        }: any = ((r as any).shape as any)(e, t),
        a: any = (1 as any) + (i as any);
      return new (r as any)((((1 as any) + (n as any) as any) / (2 as any) as any) / (a as any), (-((1 as any) + (n as any)) as any) / (a as any), (((1 as any) + (n as any) as any) / (2 as any) as any) / (a as any), ((-2 as any) * (n as any) as any) / (a as any), ((1 as any) - (i as any) as any) / (a as any));
    }
    static lowPass(e: any, t: any): any {
      let {
          cos: n,
          alpha: i
        }: any = ((r as any).shape as any)(e, t),
        a: any = (1 as any) + (i as any);
      return new (r as any)((((1 as any) - (n as any) as any) / (2 as any) as any) / (a as any), ((1 as any) - (n as any) as any) / (a as any), (((1 as any) - (n as any) as any) / (2 as any) as any) / (a as any), ((-2 as any) * (n as any) as any) / (a as any), ((1 as any) - (i as any) as any) / (a as any));
    }
    static shape(e: any, t: any): any {
      let n: any = (((2 as any) * ((Math as any).PI as any) as any) * (e as any) as any) / (t as any);
      return {
        cos: ((Math as any).cos as any)(n),
        alpha: (((Math as any).sin as any)(n) as any) / ((Math as any).SQRT2 as any)
      };
    }
    step(e: any): any {
      let t: any = ((((((this as any).b0 as any) * (e as any) as any) + (((this as any).b1 as any) * ((this as any).x1 as any) as any) as any) + (((this as any).b2 as any) * ((this as any).x2 as any) as any) as any) - (((this as any).a1 as any) * ((this as any).y1 as any) as any) as any) - (((this as any).a2 as any) * ((this as any).y2 as any) as any);
      return (this as any).x2 = (this as any).x1, (this as any).x1 = e, (this as any).y2 = (this as any).y1, (this as any).y1 = t, t;
    }
  },
  H: any = class r {
    [key: string]: any;
    highPass: any = (($ as any).highPass as any)(Ye, (c as any).sampleRateHz);
    lowPass: any = (($ as any).lowPass as any)(Ze, (c as any).sampleRateHz);
    noiseFloorDb: any = it;
    hears(e: any): any {
      let t: any = new (DataView as any)((e as any).buffer, (e as any).byteOffset, (e as any).byteLength),
        n: any = ((Math as any).floor as any)(((e as any).byteLength as any) / (2 as any)),
        i: any = 0;
      for (let a: any = 0; ((a as any) + (I as any) as any) <= (n as any); a += I) {
        let o: any = 0,
          s: any = 0;
        for (let l: any = a; (l as any) < ((a as any) + (I as any) as any); l += 1) {
          let g: any = (((t as any).getInt16 as any)((l as any) * (2 as any), !0) as any) / (32768 as any),
            d: any = (((this as any).lowPass as any).step as any)((((this as any).highPass as any).step as any)(g));
          o += (g as any) * (g as any), s += (d as any) * (d as any);
        }
        ((this as any).subframeVoiced as any)((s as any) / (I as any), (o as any) / (I as any)) && (i += 1);
      }
      return (i as any) >= (et as any);
    }
    static decibels(e: any): any {
      return (10 as any) * (((Math as any).log10 as any)((e as any) + (1e-12 as any)) as any);
    }
    subframeVoiced(e: any, t: any): any {
      let n: any = ((r as any).decibels as any)(e),
        i: any = (n as any) > (tt as any) && (n as any) > (((this as any).noiseFloorDb as any) + (nt as any) as any) && (e as any) >= ((t as any) * (rt as any) as any);
      if ((n as any) < ((this as any).noiseFloorDb as any)) (this as any).noiseFloorDb = ((Math as any).max as any)(n, at);else {
        let a: any = i ? st : ot;
        (this as any).noiseFloorDb += ((Math as any).min as any)(a, (n as any) - ((this as any).noiseFloorDb as any));
      }
      return i;
    }
  };
var ke: number = 5e3,
  dt: number = 15e3,
  ct: any = (5 as any) * (6e4 as any),
  ut: number = 5e3,
  gt: number = 15e3,
  pt: number = 500,
  V: any = class r {
    [key: string]: any;
    constructor(e: any) {
      (this as any).deps = e;
      (this as any).clock = (e as any).clock ?? m, (this as any).diagnostics = new (B as any)({
        clock: (this as any).clock,
        emitDesktopLog: (e as any).emitDesktopLog,
        onMeetingsChanged: (e as any).onMeetingsChanged
      });
    }
    deps: any;
    clock: any;
    diagnostics: any;
    sessions: any = new (Map as any)();
    releasedWindows: any = [];
    queued: any = [];
    droppedTranscripts: any = 0;
    loggedDroppedTranscripts: any = 0;
    lastRoster: any = null;
    flushTimer: any = null;
    flushing: any = ((Promise as any).resolve as any)();
    loopAbort: any = new (AbortController as any)();
    loop: any = null;
    start(): any {
      (this as any).loop ??= ((this as any).run as any)();
    }
    async stop(): Promise<any> {
      (((this as any).loopAbort as any).abort as any)(), await ((Promise as any).all as any)((([...(((this as any).sessions as any).values as any)()] as any).map as any)((e: any): any => ((this as any).end as any)(e, {
        status: "ENDED",
        detail: (u as any).closedWithApp
      }))), await ((this as any).flushNow as any)();
    }
    observability(): any {
      return (((this as any).diagnostics as any).status as any)();
    }
    meetings(): any {
      return (((this as any).diagnostics as any).desktopMeetings as any)();
    }
    census(): any {
      let e: any = (((this as any).clock as any).now as any)(),
        t: any = (((this as any).releasedWindows as any).filter as any)((a: any): any => (((a as any).window as any).isOpen as any)());
      ((this as any).releasedWindows as any).length = 0, (((this as any).releasedWindows as any).push as any)(...t);
      let n: any = 0,
        i: any = 0;
      for (let a of (((this as any).sessions as any).values as any)()) n += (1 as any) + (((a as any).lanes as any).size as any), ((a as any).window?.isOpen() as any) === (!0 as any) && (i += 1);
      return ((k as any).of as any)({
        nowMs: e,
        meetings: ((this as any).sessions as any).size,
        lanes: n,
        liveWindows: i,
        released: ((t as any).map as any)((a: any): any => ({
          atMs: (a as any).atMs,
          open: !0
        }))
      });
    }
    async captureWindow(e: any): Promise<any> {
      let t: any = (((this as any).sessions as any).get as any)(e);
      return {
        meetingId: e,
        dataUrl: (await t?.window?.capturePage()) ?? null
      };
    }
    joinForTesting(e: any): any {
      ((this as any).applyRequest as any)(e);
    }
    leave(e: any): any {
      let t: any = (((this as any).sessions as any).get as any)(e);
      if ((t as any) === (void 0 as any)) {
        ((this as any).queue as any)({
          kind: "status",
          meetingId: e,
          status: "ENDED",
          atMs: (((this as any).clock as any).now as any)()
        });
        return;
      }
      ((this as any).end as any)(t, {
        status: "ENDED",
        detail: (u as any).botLeft
      });
    }
    joinUrl(e: any, t: any): any {
      let n: any = ((j as any).parse as any)(e);
      if ((n as any) == (null as any)) return null;
      let i: any = `meeting-${((void 0, (we as any).randomUUID) as any)()}`;
      return ((this as any).join as any)({
        kind: "join",
        meetingId: i,
        url: (n as any).url,
        displayName: t?.displayName ?? ((U as any).of as any)("Grok Bot"),
        ...((t?.agentId as any) === (void 0 as any) ? {} : {
          agentId: (t as any).agentId
        })
      }), {
        meetingId: i,
        url: (n as any).url
      };
    }
    async run(): Promise<any> {
      let {
        signal: e
      }: any = (this as any).loopAbort;
      for (; !(e as any).aborted;) {
        let t: any = await (((((this as any).deps as any).pull as any)({
          waitMs: le
        }) as any).catch as any)((n: any): any => ((e as any).aborted || ((((this as any).deps as any).onFailure as any)("meeting-pull", n), (((this as any).diagnostics as any).record as any)({
          event: "pull.fail",
          detail: ((p as any).errorDetail as any)(n)
        })), null));
        if ((e as any).aborted) break;
        if ((t as any) === (null as any)) {
          await (M as any)((this as any).clock, ke, e);
          continue;
        }
        (((this as any).diagnostics as any).markPulled as any)((((this as any).clock as any).now as any)());
        for (let n of (t as any).requests) ((this as any).applyRequest as any)(n);
        ((this as any).queueRosterIfDue as any)();
      }
    }
    queueRosterIfDue(): any {
      let e: any = [...(((this as any).sessions as any).keys as any)()],
        t: any = ((((e as any).toSorted as any)() as any).join as any)(`
`),
        n: any = (((this as any).clock as any).now as any)(),
        i: any = (this as any).lastRoster;
      (i as any) !== (null as any) && ((i as any).key as any) === (t as any) && ((n as any) - ((i as any).atMs as any) as any) < (ct as any) || ((this as any).lastRoster = {
        key: t,
        atMs: n
      }, ((this as any).queue as any)({
        kind: "roster",
        meetingIds: e,
        atMs: n
      }));
    }
    applyRequest(e: any): any {
      let {
        meetingId: t
      }: any = e;
      try {
        ((e as any).kind as any) === ("leave" as any) ? ((this as any).leave as any)(t) : ((this as any).join as any)(e);
      } catch (n: any) {
        ((this as any).failRequest as any)(e, n);
      }
    }
    failRequest(e: any, t: any): any {
      let {
        meetingId: n
      }: any = e;
      (((this as any).deps as any).onFailure as any)("meeting-window", t), (((this as any).diagnostics as any).record as any)({
        event: "window.fail",
        meetingId: n,
        detail: ((p as any).errorDetail as any)(t)
      });
      let i: any = (((this as any).sessions as any).get as any)(n);
      if ((i as any) !== (void 0 as any)) {
        ((this as any).end as any)(i, {
          status: "FAILED",
          detail: (u as any).openFailed,
          failure: ((r as any).failureOf as any)(i)
        });
        return;
      }
      ((e as any).kind as any) === ("join" as any) && ((this as any).queue as any)({
        kind: "status",
        meetingId: n,
        status: "FAILED",
        atMs: (((this as any).clock as any).now as any)(),
        detail: (f as any).joinFailed
      });
    }
    join(e: any): any {
      if ((((this as any).sessions as any).has as any)((e as any).meetingId)) return;
      let {
          meetingId: t
        }: any = e,
        n: any = (((this as any).clock as any).now as any)();
      (((this as any).diagnostics as any).ensureMeeting as any)(t, (e as any).url, n), (((this as any).diagnostics as any).mutate as any)(t, {
        kind: "created",
        meetingId: t,
        url: (e as any).url,
        atMs: n,
        ...(((e as any).agentId as any) === (void 0 as any) ? {} : {
          agentId: (e as any).agentId
        })
      }), (((this as any).diagnostics as any).record as any)({
        event: "join.start",
        meetingId: t
      });
      let i: any = ((this as any).openStt as any)(t, (): any => null),
        a: any = {
          meetingId: t,
          url: (e as any).url,
          stt: i,
          window: null,
          lanes: new (Map as any)(),
          speakers: new (Map as any)(),
          voices: new (Map as any)(),
          admissionTimeout: null,
          aloneTimeout: null,
          summaryWindowTimer: null,
          openSummaryWindow: 0,
          avatarIdle: null,
          avatarLookup: null,
          live: !1,
          ending: !1,
          heardPcm: !1,
          lastLandmark: null,
          maxDuration: (((this as any).clock as any).schedule as any)(((this as any).deps as any).maxMeetingMs ?? de, (): any => {
            ((this as any).end as any)(a, {
              status: "ENDED",
              detail: (u as any).maxDuration
            });
          })
        };
      (a as any).admissionTimeout = (((this as any).clock as any).schedule as any)(((this as any).deps as any).admissionTimeoutMs ?? ce, (): any => {
        ((this as any).end as any)(a, {
          status: "FAILED",
          detail: (u as any).notAdmitted,
          failure: (f as any).notAdmitted
        });
      }), (((this as any).sessions as any).set as any)(t, a), ((this as any).queue as any)({
        kind: "status",
        meetingId: t,
        status: "JOINING",
        atMs: n
      }), (((this as any).diagnostics as any).record as any)({
        event: "join.ack",
        meetingId: t
      });
      let o: any = ((this as any).deps as any).lookupAvatar?.((e as any).agentId),
        s: any = ((E as any).of as any)({
          agentId: (e as any).agentId
        });
      if ((o as any) === (void 0 as any)) {
        ((this as any).openMeetingWindow as any)(a, e, s);
        return;
      }
      let l: any = !1,
        g: any = (d: any, b: any): any => {
          l || (l = !0, (a as any).avatarLookup?.dispose(), (a as any).avatarLookup = null, (b as any) !== (void 0 as any) && (((this as any).diagnostics as any).record as any)({
            event: "join.ack",
            meetingId: t,
            detail: ((p as any).errorDetail as any)(b)
          }), ((this as any).openWindowUnlessEnding as any)(a, e, (d as any) === (void 0 as any) ? s : ((E as any).of as any)({
            ...d,
            agentId: (d as any).agentId ?? (e as any).agentId
          })));
        };
      (a as any).avatarLookup = (((this as any).clock as any).schedule as any)(gt, (): any => {
        (g as any)(void 0, new (Error as any)("avatar lookup timed out"));
      }), ((((Promise as any).resolve as any)(o) as any).then as any)((d: any): any => (g as any)(d), (d: any): any => (g as any)(void 0, d));
    }
    openWindowUnlessEnding(e: any, t: any, n: any): any {
      if (!(e as any).ending) try {
        ((this as any).openMeetingWindow as any)(e, t, n);
      } catch (i: any) {
        ((this as any).failRequest as any)(t, i);
      }
    }
    openMeetingWindow(e: any, t: any, n: any): any {
      let {
          meetingId: i
        }: any = t,
        a: any = (((this as any).deps as any).openWindow as any)({
          url: (t as any).url,
          displayName: (t as any).displayName,
          preloadPath: ((this as any).deps as any).preloadPath,
          avatar: n,
          ...((((this as any).deps as any).avatarDocumentUrl as any) === (void 0 as any) ? {} : {
            avatarDocumentUrl: ((this as any).deps as any).avatarDocumentUrl
          }),
          onAudio: (o: any): any => {
            (e as any).ending || (((((this as any).sttForSpeaker as any)(e, o) as any).pushAudio as any)((o as any).pcm16), ((((this as any).voiceOf as any)(e, (o as any).lane) as any).hears as any)((o as any).pcm16) && ((this as any).showAvatarHearing as any)(e), (((this as any).diagnostics as any).mutate as any)(i, {
              kind: "pcm",
              atMs: (((this as any).clock as any).now as any)()
            }), (e as any).heardPcm || ((e as any).heardPcm = !0, (((this as any).diagnostics as any).record as any)({
              event: "pcm.first",
              meetingId: i,
              detail: `bytes=${((o as any).pcm16 as any).byteLength}`
            })));
          },
          onPage: (o: any): any => ((this as any).onPage as any)(e, o),
          onDebug: (o: any): any => ((this as any).onDebug as any)(e, o),
          onPermission: (o: any): any => {
            (((this as any).diagnostics as any).record as any)({
              event: (o as any).granted ? "mic.granted" : "mic.denied",
              meetingId: i,
              detail: (o as any).permission,
              level: (o as any).granted ? "info" : "error"
            });
          },
          onLoaded: (): any => {
            (((this as any).diagnostics as any).record as any)({
              event: "window.load",
              meetingId: i
            });
          },
          onFailed: (o: any): any => {
            (((this as any).diagnostics as any).record as any)({
              event: ((o as any).includes as any)("crashed") ? "window.crash" : "window.fail",
              meetingId: i,
              detail: o
            }), ((this as any).end as any)(e, {
              status: "FAILED",
              detail: o,
              failure: ((r as any).failureOf as any)(e)
            });
          }
        });
      (e as any).window = a, (e as any).ending && ((a as any).close as any)();
    }
    onDebug(e: any, t: any): any {
      if (!(e as any).ending) switch ((t as any).kind) {
        case "join.typed":
        case "join.clicked":
          (((this as any).diagnostics as any).record as any)({
            event: (t as any).kind,
            meetingId: (e as any).meetingId
          });
          return;
        case "tap.attach":
        case "tap.retap":
          (((this as any).diagnostics as any).record as any)({
            event: (t as any).kind,
            meetingId: (e as any).meetingId,
            detail: `tracks=${(t as any).tracks}`
          });
          return;
        case "source.bound":
          (((this as any).diagnostics as any).record as any)({
            event: (t as any).kind,
            meetingId: (e as any).meetingId,
            detail: `source=${(t as any).source}`
          });
          return;
        case "signals":
          (((this as any).diagnostics as any).record as any)({
            event: "page.signals",
            meetingId: (e as any).meetingId,
            detail: ((p as any).probeDetail as any)((t as any).probe)
          });
          return;
        case "landmark":
          (e as any).lastLandmark = (t as any).landmark, (((this as any).diagnostics as any).mutate as any)((e as any).meetingId, {
            kind: "page",
            page: (((this as any).diagnostics as any).meeting as any)((e as any).meetingId)?.page ?? "prejoin",
            landmark: (t as any).landmark,
            atMs: (((this as any).clock as any).now as any)()
          }), ((((t as any).landmark as any).includes as any)("no active conference") || (((t as any).landmark as any).includes as any)("no_active_conference")) && (((this as any).diagnostics as any).record as any)({
            event: "stall.no-active-conference",
            meetingId: (e as any).meetingId,
            level: "warn",
            detail: (t as any).landmark
          });
          return;
      }
    }
    onPage(e: any, t: any): any {
      if ((e as any).ending) return;
      let n: any = "detail" in t ? (t as any).detail : (e as any).lastLandmark;
      switch ((((this as any).diagnostics as any).mutate as any)((e as any).meetingId, {
        kind: "page",
        page: ((h as any).phaseOf as any)(t),
        landmark: n,
        atMs: (((this as any).clock as any).now as any)()
      }), (((this as any).diagnostics as any).record as any)({
        event: ((p as any).eventOfPage as any)(t),
        meetingId: (e as any).meetingId,
        detail: n ?? ""
      }), (t as any).kind) {
        case "alone":
          if (((this as any).markLive as any)(e), ((e as any).aloneTimeout as any) !== (null as any)) return;
          (e as any).aloneTimeout = (((this as any).clock as any).schedule as any)(ut, (): any => {
            ((this as any).end as any)(e, {
              status: "ENDED",
              detail: (u as any).everyoneLeft
            });
          });
          return;
        case "in-call":
          (e as any).aloneTimeout?.dispose(), (e as any).aloneTimeout = null, ((this as any).markLive as any)(e);
          return;
        case "ended":
          ((this as any).end as any)(e, {
            status: "ENDED",
            detail: (t as any).detail
          });
          return;
        case "denied":
          ((this as any).end as any)(e, {
            status: "FAILED",
            detail: (t as any).detail,
            failure: (f as any).notAdmitted
          });
          return;
        case "prejoin":
        case "waiting":
          return;
      }
    }
    markLive(e: any): any {
      if ((e as any).live) return;
      (e as any).live = !0, (e as any).admissionTimeout?.dispose(), (e as any).admissionTimeout = null;
      let t: any = (((this as any).clock as any).now as any)();
      (((this as any).diagnostics as any).mutate as any)((e as any).meetingId, {
        kind: "live",
        atMs: t
      }), ((this as any).queue as any)({
        kind: "status",
        meetingId: (e as any).meetingId,
        status: "LIVE",
        atMs: t
      }), ((this as any).scheduleSummaryWindowClose as any)(e, t, 0);
    }
    scheduleSummaryWindowClose(e: any, t: any, n: any): any {
      (e as any).openSummaryWindow = n;
      let i: any = (t as any) + ((((G as any).span as any)(n) as any).endMs as any);
      (e as any).summaryWindowTimer = (((this as any).clock as any).schedule as any)(((Math as any).max as any)(0, (i as any) - ((((this as any).clock as any).now as any)() as any)), (): any => {
        if ((e as any).ending) return;
        let {
          meetingId: a
        }: any = e;
        (((this as any).diagnostics as any).record as any)({
          event: "summary.due",
          meetingId: a,
          detail: `window=${n}`
        }), ((this as any).queue as any)({
          kind: "summary-due",
          meetingId: a,
          window: n
        }), ((this as any).scheduleSummaryWindowClose as any)(e, t, (n as any) + (1 as any));
      });
    }
    reportOpenSummaryWindowClosed(e: any): any {
      if (!(e as any).live) return;
      let {
        meetingId: t,
        openSummaryWindow: n
      }: any = e;
      (((this as any).diagnostics as any).record as any)({
        event: "summary.due",
        meetingId: t,
        detail: `window=${n}`
      }), ((this as any).queue as any)({
        kind: "summary-due",
        meetingId: t,
        window: n
      });
    }
    static failureOf(e: any): any {
      return (e as any).live ? (f as any).disconnected : (f as any).joinFailed;
    }
    async end(e: any, t: any): Promise<any> {
      let {
        status: n,
        detail: i
      }: any = t;
      if ((e as any).ending) return;
      (e as any).ending = !0, (((e as any).maxDuration as any).dispose as any)(), (e as any).admissionTimeout?.dispose(), (e as any).aloneTimeout?.dispose(), (e as any).summaryWindowTimer?.dispose(), (e as any).avatarIdle?.dispose(), (e as any).avatarLookup?.dispose();
      let a: any = (((this as any).diagnostics as any).meeting as any)((e as any).meetingId);
      if ((((this as any).diagnostics as any).mutate as any)((e as any).meetingId, {
        kind: "stop",
        status: n,
        reason: i,
        atMs: (((this as any).clock as any).now as any)()
      }), (((this as any).diagnostics as any).record as any)({
        event: "helper.stop",
        meetingId: (e as any).meetingId,
        level: (n as any) === ("FAILED" as any) ? "error" : "info",
        detail: (([`status=${n}`, `reason=${i}`, `page=${a?.page ?? "prejoin"}`, `landmark=${a?.lastLandmark ?? (e as any).lastLandmark ?? "-"}`, `pcm=${a?.pcmFrames ?? 0}`, `stt=${a?.sttSegments ?? 0}`, `lastPcm=${a?.lastPcmAtMs ?? "-"}`, `lastStt=${a?.lastSttAtMs ?? "-"}`] as any).join as any)(" ")
      }), (((this as any).diagnostics as any).record as any)({
        event: "window.close",
        meetingId: (e as any).meetingId,
        detail: i
      }), ((e as any).window as any) !== (null as any)) {
        (((this as any).releasedWindows as any).push as any)({
          atMs: (((this as any).clock as any).now as any)(),
          window: (e as any).window
        });
        try {
          (((e as any).window as any).close as any)();
        } catch (s: any) {
          (((this as any).deps as any).onFailure as any)("meeting-window", s);
        }
      }
      let o: any = ((((Promise as any).all as any)((([(e as any).stt, ...(((e as any).lanes as any).values as any)()] as any).map as any)((s: any): any => ((s as any).stop as any)())) as any).catch as any)((s: any): any => {
        (((this as any).diagnostics as any).record as any)({
          event: "stt.error",
          meetingId: (e as any).meetingId,
          detail: "stt-stop"
        }), (((this as any).deps as any).onFailure as any)("stt-stop", s);
      });
      await new (Promise as any)((s: any): any => {
        let l: any = (((this as any).clock as any).schedule as any)(S, s);
        ((o as any).finally as any)((): any => {
          ((l as any).dispose as any)(), (s as any)();
        });
      }), (n as any) === ("ENDED" as any) && ((this as any).reportOpenSummaryWindowClosed as any)(e), (((this as any).sessions as any).delete as any)((e as any).meetingId), ((this as any).queue as any)({
        kind: "status",
        meetingId: (e as any).meetingId,
        status: n,
        atMs: (((this as any).clock as any).now as any)(),
        ...(((t as any).status as any) === ("FAILED" as any) ? {
          detail: (t as any).failure
        } : {})
      }), await ((this as any).flushNow as any)();
    }
    queueTranscriptLine(e: any, t: any, n: any): any {
      let i: any = ((A as any).transcriptLine as any)(t, n);
      if (((i as any).length as any) === (0 as any)) return;
      let a: any = (((this as any).clock as any).now as any)();
      (((this as any).diagnostics as any).mutate as any)(e, {
        kind: "stt",
        atMs: a,
        text: i
      }), (((this as any).diagnostics as any).record as any)({
        event: "stt.segment",
        meetingId: e,
        detail: `chars=${(i as any).length}`
      }), ((this as any).queue as any)({
        kind: "transcript",
        meetingId: e,
        segments: [{
          text: i,
          atMs: a
        }]
      });
    }
    voiceOf(e: any, t: any): any {
      let n: any = (((e as any).voices as any).get as any)(t);
      if ((n as any) !== (void 0 as any)) return n;
      let i: any = new (H as any)();
      return (((e as any).voices as any).set as any)(t, i), i;
    }
    showAvatarHearing(e: any): any {
      ((e as any).avatarIdle as any) === (null as any) && (e as any).window?.hear(), (e as any).avatarIdle?.dispose(), (e as any).avatarIdle = (((this as any).clock as any).schedule as any)(2e3, (): any => {
        (e as any).avatarIdle = null, (e as any).window?.idle();
      });
    }
    sttForSpeaker(e: any, t: any): any {
      let n: any = ((A as any).speechKey as any)(t);
      if (((n as any).length as any) === (0 as any)) return (e as any).stt;
      ((t as any).speaker as any) !== (null as any) && (((e as any).speakers as any).set as any)(n, (t as any).speaker);
      let i: any = (((e as any).lanes as any).get as any)(n);
      if ((i as any) !== (void 0 as any)) return i;
      let a: any = ((this as any).openStt as any)((e as any).meetingId, (): any => (((e as any).speakers as any).get as any)(n) ?? null);
      return (((e as any).lanes as any).set as any)(n, a), a;
    }
    openStt(e: any, t: any): any {
      return (((this as any).deps as any).createStt as any)({
        onSegment: (n: any): any => ((this as any).queueTranscriptLine as any)(e, (t as any)(), n),
        onFailure: (n: any): any => {
          (((this as any).diagnostics as any).record as any)({
            event: "stt.error",
            meetingId: e,
            detail: ((p as any).errorDetail as any)(n)
          }), (((this as any).deps as any).onFailure as any)("stt-stream", n);
        },
        onLifecycle: (n: any): any => {
          (((this as any).diagnostics as any).record as any)({
            event: (n as any) === ("open" as any) ? "stt.open" : "stt.close",
            meetingId: e
          });
        }
      });
    }
    queue(e: any): any {
      if ((((this as any).queued as any).push as any)(e), ((this as any).trimQueue as any)(), ((e as any).kind as any) === ("status" as any)) {
        ((this as any).flushNow as any)();
        return;
      }
      (this as any).flushTimer ??= (((this as any).clock as any).schedule as any)(dt, (): any => {
        (this as any).flushTimer = null, ((this as any).flushNow as any)();
      });
    }
    trimQueue(): any {
      let e: any = (((this as any).queued as any).findLast as any)((n: any): any => ((n as any).kind as any) === ("roster" as any));
      (this as any).queued = (((this as any).queued as any).filter as any)((n: any): any => ((n as any).kind as any) !== ("roster" as any) || (n as any) === (e as any));
      let t: any = (((this as any).queued as any).length as any) - (pt as any);
      (t as any) <= (0 as any) || ((this as any).queued = (((this as any).queued as any).filter as any)((n: any): any => (t as any) <= (0 as any) || ((n as any).kind as any) !== ("transcript" as any) ? !0 : (t -= 1, (this as any).droppedTranscripts += 1, !1)));
    }
    flushNow(): any {
      return (this as any).flushTimer?.dispose(), (this as any).flushTimer = null, (this as any).flushing = (((this as any).flushing as any).then as any)(async (): Promise<any> => {
        ((this as any).droppedTranscripts as any) > ((this as any).loggedDroppedTranscripts as any) && ((((this as any).diagnostics as any).record as any)({
          event: "report.drop",
          level: "warn",
          detail: `transcripts=${(this as any).droppedTranscripts}`
        }), (this as any).loggedDroppedTranscripts = (this as any).droppedTranscripts);
        let e: any = (((this as any).queued as any).splice as any)(0);
        ((e as any).length as any) === (0 as any) || (await (((((this as any).deps as any).report as any)({
          events: e
        }) as any).then as any)((): any => !0, (n: any): any => ((((this as any).deps as any).onFailure as any)("meeting-report", n), (((this as any).diagnostics as any).record as any)({
          event: "report.fail",
          detail: ((p as any).errorDetail as any)(n)
        }), !1))) || ((((this as any).queued as any).unshift as any)(...e), ((this as any).trimQueue as any)(), (this as any).flushTimer ??= (((this as any).clock as any).schedule as any)(ke, (): any => {
          (this as any).flushTimer = null, ((this as any).flushNow as any)();
        }));
      }), (this as any).flushing;
    }
  };
var re: any = class r {
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).runtime = e;
    (this as any).censusMonitor = t;
  }
  runtime: any;
  censusMonitor: any;
  static start(e: any): any {
    let t: any = new (O as any)((e as any).backend),
      n: any = new (V as any)({
        pull: (a: any): any => ((t as any).pull as any)(a),
        report: (a: any): any => ((t as any).report as any)(a),
        openWindow: (a: any): any => ((_ as any).open as any)(a),
        createStt: (a: any): any => new (T as any)({
          ...a,
          streamStt: ((e as any).backend as any).streamStt
        }),
        preloadPath: (e as any).preloadPath,
        ...(((e as any).avatarDocumentUrl as any) === (void 0 as any) ? {} : {
          avatarDocumentUrl: (e as any).avatarDocumentUrl
        }),
        ...(((e as any).lookupAvatar as any) === (void 0 as any) ? {} : {
          lookupAvatar: (e as any).lookupAvatar
        }),
        onFailure: (e as any).onFailure,
        emitDesktopLog: (e as any).emitDesktopLog,
        onMeetingsChanged: (e as any).emitMeetingsChanged
      }),
      i: any = new (k as any)({
        read: (): any => ((n as any).census as any)(),
        report: (e as any).report,
        onChanged: (): any => ((e as any).emitMeetingsChanged as any)(((n as any).meetings as any)())
      });
    return ((n as any).start as any)(), ((i as any).start as any)(), new (r as any)(n, i);
  }
  async stop(): Promise<any> {
    await (((this as any).runtime as any).stop as any)(), (((this as any).censusMonitor as any).stop as any)();
  }
  meetings(): any {
    return (((this as any).runtime as any).meetings as any)();
  }
  census(): any {
    return (((this as any).runtime as any).census as any)();
  }
  leave(e: any): any {
    (((this as any).runtime as any).leave as any)(e), (((this as any).censusMonitor as any).sweep as any)();
  }
  joinUrl(...e: any): any {
    let t: any = (((this as any).runtime as any).joinUrl as any)(...e);
    return (((this as any).censusMonitor as any).sweep as any)(), t;
  }
  observability(): any {
    return (((this as any).runtime as any).observability as any)();
  }
  captureWindow(e: any): any {
    return (((this as any).runtime as any).captureWindow as any)(e);
  }
};
0 && ((module as any).exports = {
  MeetingsService
});
//# debugId=bca95410-d75a-484f-9179-21005af54a1a
