declare var AbortController: any;
declare var AudioContext: any;
declare var AudioNode: any;
declare var Blob: any;
declare var DOMException: any;
declare var Event: any;
declare var HTMLCanvasElement: any;
declare var HTMLInputElement: any;
declare var HTMLMediaElement: any;
declare var MediaStream: any;
declare var Navigator: any;
declare var Path2D: any;
declare var URL: any;
declare var atob: any;
declare var console: any;
declare var createImageBitmap: any;
declare var document: any;
declare var global: any;
declare var key: any;
declare var navigator: any;
declare var performance: any;
declare var process: any;
declare var require: any;
declare var self: any;
declare var window: any;
"use strict";

!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "d60f9d9f-e2c7-4bf3-a8e6-94e17d1aafb6", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-d60f9d9f-e2c7-4bf3-a8e6-94e17d1aafb6");
  } catch (e: any) {}
} as any)();
"use strict";
var p: any = class n {
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
    let t: any = ((e as any).find as any)((i: any): any => ((i as any).startsWith as any)((n as any).displayNameArg));
    if ((t as any) === (void 0 as any)) return null;
    let r: any = (((decodeURIComponent as any)(((t as any).slice as any)(((n as any).displayNameArg as any).length)) as any).trim as any)();
    return ((r as any).length as any) > (0 as any) ? r : null;
  }
};
var G: any = class {
  [key: string]: any;
  static speechKey(e: any): any {
    return (e as any).source ?? (e as any).speaker ?? (e as any).lane;
  }
  static transcriptLine(e: any, t: any): any {
    let r: any = ((t as any).trim as any)();
    if (((r as any).length as any) === (0 as any)) return "";
    let i: any = e?.trim() ?? "";
    return ((i as any).length as any) === (0 as any) ? r : `${i}: ${r}`;
  }
  static sole(e: any): any {
    let t: any = [...new (Set as any)(((((e as any).map as any)((r: any): any => ((r as any).trim as any)()) as any).filter as any)((r: any): any => ((r as any).length as any) > (0 as any)))];
    return ((t as any).length as any) === (1 as any) ? (t as any)[0] ?? null : null;
  }
};
var ce: string = "src/electron-renderer/pitman-avatar/pitman-avatar-output.html";
function de(this: any, {
  width: n = 2560,
  height: e = 1440,
  fill: t = .28
}: any = {}): any {
  let r: any = ((Math as any).min as any)(n, e),
    i: any = (r as any) - ((2 as any) * (((Math as any).round as any)(((r as any) * ((1 as any) - (t as any) as any) as any) / (2 as any)) as any) as any);
  return {
    x: ((Math as any).round as any)(((n as any) - (i as any) as any) / (2 as any)),
    y: ((Math as any).round as any)(((e as any) - (i as any) as any) / (2 as any)),
    size: i
  };
}
var pe: string = "#ffffff",
  C: any = class n {
    [key: string]: any;
    static read(e: any): any {
      if ((typeof e as any) != ("object" as any) || (e as any) === (null as any)) return null;
      if ("kind" in e && ((e as any).kind as any) === ("photo" as any)) return !("dataUrl" in e) || (typeof (e as any).dataUrl as any) != ("string" as any) || (((e as any).dataUrl as any).length as any) === (0 as any) ? null : {
        kind: "photo",
        dataUrl: (e as any).dataUrl
      };
      if (!("state" in e) || ((e as any).state as any) !== ("idle" as any) && ((e as any).state as any) !== ("listening" as any) || !("body" in e)) return null;
      let t: any = ((n as any).readStroke as any)((e as any).body);
      if ((t as any) === (null as any) || !("eyes" in e) || !((Array as any).isArray as any)((e as any).eyes)) return null;
      let r: any = [];
      for (let a of (e as any).eyes) {
        let o: any = ((n as any).readStroke as any)(a);
        if ((o as any) === (null as any)) return null;
        ((r as any).push as any)(o);
      }
      let i: any = "ink" in e && (typeof (e as any).ink as any) == ("string" as any) && (((e as any).ink as any).length as any) > (0 as any) ? (e as any).ink : pe;
      return {
        state: (e as any).state,
        body: t,
        eyes: r,
        ink: i
      };
    }
    static of(e: any, t: any, r: any = pe): any {
      let i: any = ((n as any).bodyPath as any)(e);
      if ((i as any) === (null as any)) return null;
      let a: any = ((i as any).getAttribute as any)("d");
      if ((a as any) === (null as any) || ((a as any).length as any) === (0 as any)) return null;
      let o: any = [],
        l: any = ((e as any).querySelectorAll as any)("g[clip-path] > path");
      for (let d: any = 0; (d as any) < ((l as any).length as any); d++) {
        let g: any = (l as any)[d];
        if ((g as any) === (void 0 as any) || ((n as any).hidden as any)(g)) continue;
        let m: any = ((g as any).getAttribute as any)("d");
        (m as any) === (null as any) || ((m as any).length as any) === (0 as any) || ((o as any).push as any)({
          d: m,
          matrix: ((n as any).matrixOf as any)(g)
        });
      }
      return {
        state: t,
        body: {
          d: a,
          matrix: ((n as any).matrixOf as any)(i)
        },
        eyes: o,
        ink: r
      };
    }
    static documentUrl(e: any): any {
      return (new (URL as any)(ce, ((e as any).endsWith as any)("/") ? e : `${e}/`) as any).href;
    }
    static readStroke(e: any): any {
      if ((typeof e as any) != ("object" as any) || (e as any) === (null as any) || !("d" in e) || (typeof (e as any).d as any) != ("string" as any) || (((e as any).d as any).length as any) === (0 as any) || !("matrix" in e) || !((Array as any).isArray as any)((e as any).matrix) || (((e as any).matrix as any).length as any) !== (6 as any)) return null;
      let t: any = ((n as any).asMatrix as any)((e as any).matrix);
      return (t as any) === (null as any) ? null : {
        d: (e as any).d,
        matrix: t
      };
    }
    static bodyPath(e: any): any {
      let r: any = ((e as any).querySelector as any)("g[clip-path]")?.parentElement;
      if ((r as any) == (null as any)) return null;
      for (let i: any = 0; (i as any) < (((r as any).children as any).length as any); i++) {
        let a: any = ((r as any).children as any)[i];
        if ((a as any) !== (void 0 as any) && !(((((a as any).tagName as any).toLowerCase as any)() as any) !== ("path" as any) || ((n as any).hidden as any)(a)) && (((((a as any).getAttribute as any)("d") ?? "") as any).length as any) !== (0 as any)) return a;
      }
      return null;
    }
    static hidden(e: any): any {
      let t: any = ((e as any).getAttribute as any)("style");
      return (t as any) !== (null as any) && ((/\bdisplay\s*:\s*none\b/i as any).test as any)(t) ? !0 : ((e as any).style?.display as any) === ("none" as any);
    }
    static matrixOf(e: any): any {
      let t: any = [1, 0, 0, 1, 15, 15],
        r: any = [];
      for (let i: any = e; (i as any) !== (null as any) && (((r as any).push as any)(i), ((((i as any).tagName as any).toLowerCase as any)() as any) !== ("svg" as any)); i = (i as any).parentElement);
      for (let i of ((r as any).reverse as any)()) {
        let a: any = ((i as any).getAttribute as any)("transform");
        (a as any) !== (null as any) && ((a as any).length as any) > (0 as any) && (t = ((n as any).multiply as any)(t, ((n as any).parseTransform as any)(a)));
      }
      return t;
    }
    static parseTransform(e: any): any {
      let t: any = [1, 0, 0, 1, 0, 0],
        r: any = /(translate|rotate|scale|matrix)\(([^)]*)\)/g;
      for (let i of ((e as any).matchAll as any)(r)) {
        let a: any = (i as any)[1],
          o: any = (i as any)[2];
        if ((a as any) === (void 0 as any) || (o as any) === (void 0 as any)) continue;
        let l: any = ((((((o as any).split as any)(/[\s,]+/) as any).filter as any)((m: any): any => ((m as any).length as any) > (0 as any)) as any).map as any)(Number);
        if (((l as any).some as any)((m: any): any => ((Number as any).isNaN as any)(m))) continue;
        if ((a as any) === ("matrix" as any)) {
          let m: any = ((n as any).asMatrix as any)(l);
          (m as any) !== (null as any) && (t = ((n as any).multiply as any)(t, m));
          continue;
        }
        let d: any = (l as any)[0];
        if ((d as any) === (void 0 as any)) continue;
        let g: any = (l as any)[1] ?? d;
        if ((a as any) === ("translate" as any)) t = ((n as any).multiply as any)(t, [1, 0, 0, 1, d, (l as any)[1] ?? 0]);else if ((a as any) === ("rotate" as any)) {
          let m: any = ((d as any) * ((Math as any).PI as any) as any) / (180 as any),
            M: any = ((Math as any).cos as any)(m),
            y: any = ((Math as any).sin as any)(m);
          t = ((n as any).multiply as any)(t, [M, y, -y, M, 0, 0]);
        } else t = ((n as any).multiply as any)(t, [d, 0, 0, ((l as any)[1] as any) === (void 0 as any) ? d : g, 0, 0]);
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
      let r: any = (t as any)[0],
        i: any = (t as any)[1],
        a: any = (t as any)[2],
        o: any = (t as any)[3],
        l: any = (t as any)[4],
        d: any = (t as any)[5];
      return (r as any) === (void 0 as any) || (i as any) === (void 0 as any) || (a as any) === (void 0 as any) || (o as any) === (void 0 as any) || (l as any) === (void 0 as any) || (d as any) === (void 0 as any) ? null : [r, i, a, o, l, d];
    }
    static multiply(e: any, t: any): any {
      return [(((e as any)[0] as any) * ((t as any)[0] as any) as any) + (((e as any)[2] as any) * ((t as any)[1] as any) as any), (((e as any)[1] as any) * ((t as any)[0] as any) as any) + (((e as any)[3] as any) * ((t as any)[1] as any) as any), (((e as any)[0] as any) * ((t as any)[2] as any) as any) + (((e as any)[2] as any) * ((t as any)[3] as any) as any), (((e as any)[1] as any) * ((t as any)[2] as any) as any) + (((e as any)[3] as any) * ((t as any)[3] as any) as any), ((((e as any)[0] as any) * ((t as any)[4] as any) as any) + (((e as any)[2] as any) * ((t as any)[5] as any) as any) as any) + ((e as any)[4] as any), ((((e as any)[1] as any) * ((t as any)[4] as any) as any) + (((e as any)[3] as any) * ((t as any)[5] as any) as any) as any) + ((e as any)[5] as any)];
    }
  };
var w: any = class n {
  [key: string]: any;
  static id: any = "sand-meeting-audio-host";
  static sinks(e: any): any {
    return ((((n as any).media as any)(e) as any).map as any)((t: any): any => ((n as any).sinkOf as any)(t));
  }
  static sinkOf(e: any): any {
    let {
      sandLane: t,
      sandMix: r,
      sandSource: i,
      sandLevel: a,
      sandHeardAt: o
    }: any = (e as any).dataset;
    return {
      element: e,
      lane: t ?? null,
      mix: (r as any) !== (void 0 as any),
      source: i ?? null,
      level: (a as any) === (void 0 as any) ? null : (Number as any)(a),
      heardAtMs: (o as any) === (void 0 as any) ? null : (Number as any)(o)
    };
  }
  static media(e: any): any {
    return [...(((e as any).getElementById as any)((n as any).id)?.shadowRoot?.querySelectorAll("audio, video") ?? [])];
  }
};
function Re(this: any, n: any, e: any): any {
  let t: any = new (Set as any)(),
    r: any = n;
  for (; (r as any) != (null as any) && (typeof r as any) == ("object" as any) && !((t as any).has as any)(r);) {
    ((t as any).add as any)(r);
    let i: any = (r as any).code;
    if ((typeof i as any) == ("string" as any) && ((e as any).test as any)(i)) return i;
    r = (r as any).cause;
  }
}
function me(this: any, n: any): any {
  return (Re as any)(n, /^E[A-Z_]+$/);
}
function fe(this: any, n: any): any {
  if (!(n instanceof Error)) return typeof n;
  let e: any = (n as any).code,
    t: any = (e as any) != (null as any) && ((e as any).length as any) > (0 as any) ? e : (me as any)(n);
  return (t as any) !== (void 0 as any) ? `${(n as any).name} (${t})` : (n as any).name;
}
var De: string = "#000000",
  Ie: string = "#000000",
  W: any = class n {
    [key: string]: any;
    static bitmaps: any = new (Map as any)();
    static decoding: any = new (Map as any)();
    static PHOTO_DATA_URL_MAX_CHARS: any = ((8 as any) * (1024 as any) as any) * (1024 as any);
    static paint(e: any, t: any, r: any, i: any = "idle"): any {
      let a: any = ((e as any).getContext as any)("2d");
      if ((a as any) === (null as any)) return;
      let o: any = "kind" in t || "body" in t ? t : ((C as any).of as any)(t, i);
      if ((o as any) === (null as any)) return;
      if (((a as any).setTransform as any)(1, 0, 0, 1, 0, 0), (a as any).fillStyle = Ie, ((a as any).fillRect as any)(0, 0, (e as any).width, (e as any).height), ((o as any).kind as any) === ("photo" as any)) {
        ((n as any).paintPhoto as any)(a, (o as any).dataUrl, r);
        return;
      }
      let l: any = ((r as any).size as any) / (259 as any);
      ((a as any).translate as any)((r as any).x, (r as any).y), ((a as any).scale as any)(l, l), ((n as any).fillStroke as any)(a, (o as any).body, (o as any).ink);
      for (let d of (o as any).eyes) ((n as any).fillStroke as any)(a, d, De);
    }
    static paintPhoto(e: any, t: any, r: any): any {
      if (((t as any).length as any) === (0 as any)) return;
      let i: any = (((n as any).bitmaps as any).get as any)(t);
      if ((i as any) !== (void 0 as any)) {
        ((n as any).drawBitmap as any)(e, i, r);
        return;
      }
      let a: any = (((n as any).decoding as any).get as any)(t) ?? ((n as any).bitmapOf as any)(t);
      (((n as any).decoding as any).set as any)(t, a), ((a as any).then as any)((o: any): any => {
        (((n as any).decoding as any).delete as any)(t), !((o as any) == (null as any) || ((n as any).isPhotoMiss as any)(o)) && ((((n as any).bitmaps as any).set as any)(t, o), ((n as any).drawBitmap as any)(e, o, r));
      }, (o: any): any => ((((n as any).decoding as any).delete as any)(t), ((n as any).photoMiss as any)(o)));
    }
    static drawBitmap(e: any, t: any, r: any): any {
      let i: any = ((Math as any).min as any)((t as any).width, (t as any).height),
        a: any = ((r as any).size as any) / (2 as any);
      ((e as any).save as any)(), ((e as any).beginPath as any)(), ((e as any).arc as any)(((r as any).x as any) + (a as any), ((r as any).y as any) + (a as any), a, 0, ((Math as any).PI as any) * (2 as any)), ((e as any).clip as any)(), ((e as any).drawImage as any)(t, (((t as any).width as any) - (i as any) as any) / (2 as any), (((t as any).height as any) - (i as any) as any) / (2 as any), i, i, (r as any).x, (r as any).y, (r as any).size, (r as any).size), ((e as any).restore as any)();
    }
    static bitmapOf(e: any): any {
      let t: any = ((n as any).bytesOfDataUrl as any)(e);
      if ((t as any) == (null as any)) return ((Promise as any).resolve as any)(null);
      if (((n as any).isPhotoMiss as any)(t)) return ((Promise as any).resolve as any)(t);
      if ((typeof createImageBitmap as any) != ("function" as any)) return ((Promise as any).resolve as any)(null);
      let r: any = ((n as any).mimeOfDataUrl as any)(e) ?? "image/png";
      return (r as any) === ("image/svg+xml" as any) ? ((Promise as any).resolve as any)(null) : (((createImageBitmap as any)(new (Blob as any)([t], {
        type: r
      })) as any).then as any)((i: any): any => i, (i: any): any => ((n as any).photoMiss as any)(i));
    }
    static bytesOfDataUrl(e: any): any {
      let t: any = ((e as any).indexOf as any)(",");
      if ((t as any) < (0 as any) || (t as any) === (((e as any).length as any) - (1 as any) as any)) return null;
      if (((e as any).length as any) > ((n as any).PHOTO_DATA_URL_MAX_CHARS as any)) return ((n as any).photoMiss as any)(new (Error as any)("photo"));
      try {
        let r: any = (atob as any)(((e as any).slice as any)((t as any) + (1 as any))),
          i: any = new (Uint8Array as any)(new (ArrayBuffer as any)((r as any).length));
        for (let a: any = 0; (a as any) < ((r as any).length as any); a += 1) (i as any)[a] = ((r as any).charCodeAt as any)(a);
        return i;
      } catch (r: any) {
        return ((n as any).photoMiss as any)(r);
      }
    }
    static photoMiss(e: any): any {
      return {
        miss: (fe as any)(e)
      };
    }
    static mimeOfDataUrl(e: any): any {
      return ((/^data:([^;,]+)/ as any).exec as any)(e)?.[1] ?? null;
    }
    static isPhotoMiss(e: any): any {
      return "miss" in e;
    }
    static fillStroke(e: any, t: any, r: any): any {
      ((e as any).save as any)(), ((e as any).transform as any)(...(t as any).matrix), (e as any).fillStyle = r, ((e as any).fill as any)(new (Path2D as any)((t as any).d), "evenodd"), ((e as any).restore as any)();
    }
  };
var Q: any = new (WeakMap as any)(),
  N: any = class n {
    [key: string]: any;
    static start(e: any): any {
      let t: any = (): any => {
          let a: any = ((n as any).canvasOf as any)(e);
          (a?.dataset.sandAvatarSource as any) !== ("photo" as any) && a?.setAttribute("data-sand-avatar", "listening");
        },
        r: any = (): any => {
          let a: any = ((n as any).canvasOf as any)(e);
          (a?.dataset.sandAvatarSource as any) !== ("photo" as any) && a?.setAttribute("data-sand-avatar", "idle");
        },
        i: any = (): any => {
          let a: any = ((Q as any).get as any)(e);
          (a as any) !== (void 0 as any) && ((n as any).draw as any)(e, a);
        };
      return ((e as any).addEventListener as any)((p as any).hearEvent, t), ((e as any).addEventListener as any)((p as any).idleEvent, r), ((e as any).addEventListener as any)((p as any).cameraReadyEvent, i), {
        dispose(): any {
          ((e as any).removeEventListener as any)((p as any).hearEvent, t), ((e as any).removeEventListener as any)((p as any).idleEvent, r), ((e as any).removeEventListener as any)((p as any).cameraReadyEvent, i), ((Q as any).delete as any)(e);
        }
      };
    }
    static draw(e: any, t: any): any {
      let r: any = ((C as any).read as any)(t);
      if ((r as any) === (null as any)) return;
      ((Q as any).set as any)(e, t);
      let i: any = ((n as any).canvasOf as any)(e);
      if ((i as any) === (null as any)) return;
      let a: any = ((r as any).kind as any) === ("photo" as any);
      ((i as any).dataset as any).sandAvatarSource = a ? "photo" : "mark", ((i as any).dataset as any).sandAvatar = a ? "idle" : (r as any).state, ((W as any).paint as any)(i, r, (de as any)());
    }
    static canvasOf(e: any): any {
      let t: any = ((e as any).getElementById as any)((w as any).id)?.shadowRoot?.querySelectorAll("canvas"),
        r: any = t?.[((t as any).length as any) - (1 as any)];
      return r instanceof HTMLCanvasElement ? r : null;
    }
  };
function Be(this: any, n: any): any {
  let e: any = ((Object as any).freeze as any)([(n as any).pageLanguage]);
  ((Object as any).defineProperty as any)((Navigator as any).prototype, "language", {
    configurable: !0,
    get: (): any => (n as any).pageLanguage
  }), ((Object as any).defineProperty as any)((Navigator as any).prototype, "languages", {
    configurable: !0,
    get: (): any => e
  });
  let t: any = !1,
    r: any = new (Set as any)(),
    i: any = (s: any): any => {
      let c: any = ((document as any).getElementById as any)((n as any).hostId);
      return (c as any) === (null as any) && s && (c = ((document as any).createElement as any)("div"), (c as any).id = (n as any).hostId, ((c as any).style as any).display = "none", (((document as any).documentElement as any).appendChild as any)(c), ((c as any).attachShadow as any)({
        mode: "open"
      })), c?.shadowRoot ?? null;
    },
    a: any = (s: any, c: any): any => {
      let v: any = (i as any)(!0);
      if ((v as any) !== (null as any)) for (let h of s) {
        if (((h as any).readyState as any) === ("ended" as any) || ((r as any).has as any)((h as any).id)) continue;
        let u: any = (([...((v as any).querySelectorAll as any)("audio")] as any).find as any)((b: any): any => (((b as any).dataset as any).sandLane as any) === ((h as any).id as any));
        (u as any) === (void 0 as any) && (u = ((document as any).createElement as any)("audio"), ((u as any).dataset as any).sandLane = (h as any).id, c && (((u as any).dataset as any).sandMix = ""), (u as any).autoplay = !0, ((v as any).appendChild as any)(u), (u as any).srcObject = new (MediaStream as any)([h])), (u as any).muted = !1, ((u as any).play as any)();
      }
    },
    o: any = (s: any, c: any = !1): any => {
      if (t || !(s instanceof MediaStream)) return;
      let v: any = ((s as any).getAudioTracks as any)();
      if (((v as any).length as any) !== (0 as any)) {
        t = !0;
        try {
          (a as any)(v, c);
        } finally {
          t = !1;
        }
      }
    },
    l: any = new (Map as any)(),
    d: any = new (Set as any)(),
    g: any = (): any => {
      let s: any = (i as any)(!1);
      if ((s as any) === (null as any)) return;
      let c: any = ((performance as any).timeOrigin as any) + (((performance as any).now as any)() as any),
        v: any = new (Map as any)(),
        h: any = new (Map as any)();
      for (let u of ((s as any).querySelectorAll as any)("audio")) {
        let b: any = ((l as any).get as any)(((u as any).dataset as any).sandLane ?? "");
        if ((b as any) === (void 0 as any)) continue;
        let x: any = ((b as any).getContributingSources as any)();
        ((v as any).set as any)(u, x);
        for (let T of x) ((h as any).set as any)((T as any).source, ((((h as any).get as any)((T as any).source) ?? 0) as any) + (1 as any));
      }
      for (let [u, b] of h) (b as any) > (1 as any) && ((d as any).add as any)(u);
      for (let [u, b] of v) {
        let x: any = null,
          T: any = null;
        for (let D of b) ((T as any) === (null as any) || (((D as any).audioLevel ?? 0) as any) > (((T as any).audioLevel ?? 0) as any)) && (T = D), !((d as any).has as any)((D as any).source) && ((x as any) === (null as any) || ((D as any).timestamp as any) > ((x as any).timestamp as any)) && (x = D);
        let Le: any = ((l as any).get as any)(((u as any).dataset as any).sandLane ?? "")?.getSynchronizationSources()[0],
          B: any = T ?? Le;
        if ((B as any) === (void 0 as any) || ((c as any) - ((B as any).timestamp as any) as any) > ((n as any).sourceRecentMs as any)) {
          delete ((u as any).dataset as any).sandHeardAt;
          continue;
        }
        (x as any) === (null as any) ? delete ((u as any).dataset as any).sandSource : ((u as any).dataset as any).sandSource = (String as any)((x as any).source), ((u as any).dataset as any).sandLevel = (String as any)((B as any).audioLevel ?? 0), ((u as any).dataset as any).sandHeardAt = (String as any)(((Math as any).round as any)((B as any).timestamp));
      }
    };
  ((document as any).addEventListener as any)((n as any).stampEvent, g);
  let m: any = (window as any).RTCPeerConnection;
  if ((m as any) !== (void 0 as any)) {
    let s: any = function (this: any, ...c: any): any {
      let v: any = new (m as any)(...c);
      return ((v as any).addEventListener as any)("track", (h: any): any => {
        (((h as any).track as any).kind as any) === ("audio" as any) && ((l as any).set as any)(((h as any).track as any).id, (h as any).receiver), (o as any)(new (MediaStream as any)([(h as any).track]));
        for (let u of (h as any).streams) (o as any)(u);
      }), v;
    };
    (s as any).prototype = (m as any).prototype, ((Object as any).setPrototypeOf as any)(s, m), ((Object as any).defineProperty as any)(window, "RTCPeerConnection", {
      configurable: !0,
      writable: !0,
      value: s
    });
  }
  let M: any = ((Object as any).getOwnPropertyDescriptor as any)((HTMLMediaElement as any).prototype, "srcObject"),
    y: any = M?.set;
  (M as any) !== (void 0 as any) && (y as any) !== (void 0 as any) && ((Object as any).defineProperty as any)((HTMLMediaElement as any).prototype, "srcObject", {
    configurable: !0,
    enumerable: (M as any).enumerable,
    get: (M as any).get,
    set(s: any): any {
      (o as any)(s), ((y as any).call as any)(this, s);
    }
  });
  let A: any = (window as any).AudioContext,
    k: any = new (WeakMap as any)(),
    O: any = [],
    X: any = (s: any): any => s instanceof A && ((s as any).state as any) !== ("closed" as any),
    K: any = (s: any): any => {
      (X as any)(s) && ((s as any).state as any) !== ("running" as any) && ((s as any).resume as any)();
    },
    ae: any = (s: any): any => {
      !(X as any)(s) || ((O as any).includes as any)(s) || (((O as any).push as any)(s), (K as any)(s), ((s as any).addEventListener as any)("statechange", (): any => (K as any)(s)));
    },
    Z: any = function (this: any, ...s: any): any {
      let c: any = new (A as any)(...s);
      return (ae as any)(c), c;
    };
  (Z as any).prototype = (A as any).prototype, ((Object as any).setPrototypeOf as any)(Z, A), ((Object as any).defineProperty as any)(window, "AudioContext", {
    configurable: !0,
    writable: !0,
    value: Z
  }), ((document as any).addEventListener as any)((n as any).wakeEvent, (): any => {
    for (let s of O) (K as any)(s);
  });
  let oe: any = ((AudioNode as any).prototype as any).connect,
    xe: any = ((AudioNode as any).prototype as any).connect;
  ((Object as any).defineProperty as any)((AudioNode as any).prototype, "connect", {
    configurable: !0,
    writable: !0,
    value: function (this: any, s: any, c: any, v: any): any {
      if (!(s instanceof AudioNode)) return ((xe as any).call as any)(this, s, c);
      let h: any = ((oe as any).call as any)(this, s, c, v),
        u: any = (this as any).context;
      if ((X as any)(u) && (s as any) === ((u as any).destination as any)) {
        (ae as any)(u);
        let b: any = ((k as any).get as any)(u);
        (b as any) === (void 0 as any) && (b = ((u as any).createMediaStreamDestination as any)(), ((k as any).set as any)(u, b)), ((oe as any).call as any)(this, b), (o as any)((b as any).stream, !0);
      }
      return h;
    }
  });
  let Te: any = (navigator as any).mediaDevices,
    F: any = null,
    S: any = null,
    Ce: any = (): any => (((F as any) === (null as any) || !(F as any).active) && (F = (((new (AudioContext as any)() as any).createMediaStreamDestination as any)() as any).stream), F),
    P: any = null,
    se: any = !1,
    Ne: any = (): any => {
      if ((S as any) !== (null as any) && (S as any).active) return S;
      let s: any = (i as any)(!0);
      if ((s as any) === (null as any)) return S = new (MediaStream as any)(), S;
      for (let c of ((s as any).querySelectorAll as any)("canvas[data-sand-avatar]")) (c as any) !== (P as any) && ((c as any).remove as any)();
      if ((P as any) === (null as any) || ((P as any).isConnected as any) === (!1 as any)) {
        let c: any = ((document as any).createElement as any)("canvas");
        (c as any).width = (n as any).frameWidth, (c as any).height = (n as any).frameHeight, ((c as any).dataset as any).sandAvatar = "idle", ((s as any).appendChild as any)(c);
        let v: any = ((c as any).getContext as any)("2d");
        (v as any) !== (null as any) && ((v as any).fillStyle = "#000000", ((v as any).fillRect as any)(0, 0, (c as any).width, (c as any).height)), P = c;
      }
      se || (se = !0, ((document as any).addEventListener as any)((n as any).hearEvent, (): any => {
        (P as any) !== (null as any) && (((P as any).dataset as any).sandAvatar = "listening");
      }), ((document as any).addEventListener as any)((n as any).idleEvent, (): any => {
        (P as any) !== (null as any) && (((P as any).dataset as any).sandAvatar = "idle");
      })), ((document as any).dispatchEvent as any)(new (Event as any)((n as any).cameraReadyEvent)), S = ((P as any).captureStream as any)((n as any).frameRate);
      for (let c of ((S as any).getVideoTracks as any)()) (c as any).contentHint = "detail";
      return S;
    },
    le: any = (s: any, c: any): any => ((((c as any) === ("audio" as any) ? ((s as any).getAudioTracks as any)() : ((s as any).getVideoTracks as any)()) as any).map as any)((h: any): any => {
      ((r as any).add as any)((h as any).id);
      let u: any = ((h as any).clone as any)();
      return ((r as any).add as any)((u as any).id), u;
    });
  ((Object as any).assign as any)(Te, {
    getUserMedia: async (s: any): Promise<any> => {
      let c: any = (s?.audio as any) !== (void 0 as any) && ((s as any).audio as any) !== (!1 as any),
        v: any = (s?.video as any) !== (void 0 as any) && ((s as any).video as any) !== (!1 as any);
      if (!c && !v) throw new (DOMException as any)("Requested device not found", "NotFoundError");
      let h: any = {
        audio: c,
        video: v
      };
      return new (MediaStream as any)([...((h as any).audio ? (le as any)((Ce as any)(), "audio") : []), ...((h as any).video ? (le as any)((Ne as any)(), "video") : [])]);
    },
    enumerateDevices: async (): Promise<any> => [{
      deviceId: "grok-bot-listener",
      groupId: "grok-bot-listener",
      kind: "audioinput",
      label: (n as any).micLabel,
      toJSON(): any {
        return {
          ...this
        };
      }
    }, {
      deviceId: "grok-bot-camera",
      groupId: "grok-bot-listener",
      kind: "videoinput",
      label: (n as any).micLabel,
      toJSON(): any {
        return {
          ...this
        };
      }
    }],
    getDisplayMedia: async (): Promise<any> => {
      throw new (DOMException as any)("Permission denied", "NotAllowedError");
    }
  });
}
var Ge: any = {
    pageLanguage: (p as any).pageLanguage,
    hostId: (w as any).id,
    micLabel: "Grok Bot",
    sourceRecentMs: (p as any).sourceRecentMs,
    stampEvent: (p as any).stampEvent,
    wakeEvent: (p as any).wakeEvent,
    hearEvent: (p as any).hearEvent,
    idleEvent: (p as any).idleEvent,
    cameraReadyEvent: (p as any).cameraReadyEvent,
    frameWidth: 2560,
    frameHeight: 1440,
    frameRate: 30
  },
  q: any = class n {
    [key: string]: any;
    static source: any = `(${((Be as any).toString as any)()})(${((JSON as any).stringify as any)(Ge)});`;
    static inject({
      document: e,
      executeJavaScript: t
    }: any): any {
      let r: any = (e as any).documentElement ?? (e as any).head;
      if ((r as any) == (null as any)) (t as any)((n as any).source);else {
        let i: any = ((e as any).createElement as any)("script");
        (i as any).textContent = (n as any).source, ((r as any).appendChild as any)(i), ((i as any).remove as any)();
      }
      ((N as any).start as any)(e);
    }
  };
var L: any = {
  now: (): any => ((Date as any).now as any)(),
  monotonicNow: (): any => ((performance as any).now as any)(),
  schedule(n: any, e: any, t: any): any {
    (qe as any)(n);
    let r: any = !0,
      i: any = ((globalThis as any).setTimeout as any)((): any => {
        r && (r = !1, (e as any)());
      }, n);
    return (t?.keepEventLoopAlive as any) !== (!0 as any) && (We as any)(i) && ((i as any).unref as any)(), {
      dispose(): any {
        r && (r = !1, ((globalThis as any).clearTimeout as any)(i));
      }
    };
  }
};
function We(this: any, n: any): any {
  return (typeof n as any) == ("object" as any) && (n as any) !== (null as any) && "unref" in n && (typeof (n as any).unref as any) == ("function" as any);
}
function qe(this: any, n: any): any {
  if (!((Number as any).isFinite as any)(n) || (n as any) < (0 as any)) throw new (RangeError as any)("delayMs must be a finite non-negative number");
}
var _e: any = (): any => {};
function $e(this: any, n: any, e: any, t: any): any {
  return {
    policyName: n,
    reason: e,
    errorClass: t instanceof Error ? (t as any).name : typeof t
  };
}
var I: any = class extends (Error as any) {
  declare policyName: any;
  declare name: any;
  declare code: any;
  [key: string]: any;
  constructor(e: any) {
    super(`Deadline exceeded for ${e}`), (this as any).code = "deadline_exceeded", (this as any).name = "DeadlineExceededError", (this as any).policyName = e;
  }
};
function ee(this: any, n: any): any {
  (ye as any)((n as any).name), (he as any)((n as any).timeoutMs, "timeoutMs");
  let e: any = (n as any).clock ?? L;
  return {
    name: (n as any).name,
    async run(t: any, r: any): Promise<any> {
      if (r?.aborted) throw (ge as any)(r, (n as any).name);
      let i: any = new (AbortController as any)(),
        a: any = (): any => {},
        o: any = new (Promise as any)((M: any, y: any): any => {
          a = y;
        }),
        l: any = (): any => {},
        d: any = new (Promise as any)((M: any, y: any): any => {
          l = y;
        }),
        g: any = (): any => {};
      if ((r as any) != (null as any)) {
        let M: any = (): any => {
          let y: any = (ge as any)(r, (n as any).name);
          (l as any)(y), ((i as any).abort as any)(y);
        };
        ((r as any).addEventListener as any)("abort", M, {
          once: !0
        }), g = (): any => ((r as any).removeEventListener as any)("abort", M);
      }
      let m: any = ((e as any).schedule as any)((n as any).timeoutMs, (): any => {
        let M: any = new (I as any)((n as any).name);
        (a as any)(M), ((i as any).abort as any)(M);
      });
      try {
        return await ((Promise as any).race as any)([(t as any)((i as any).signal), o, d]);
      } finally {
        ((m as any).dispose as any)(), (g as any)();
      }
    }
  };
}
function H(this: any, n: any): any {
  if ((ye as any)((n as any).name), (he as any)((n as any).intervalMs, "intervalMs"), ((n as any).intervalMs as any) === (0 as any)) throw new (RangeError as any)(`${(n as any).name}: intervalMs must be greater than 0`);
  let e: any = (n as any).clock ?? L,
    t: any = (n as any).report ?? _e;
  return {
    name: (n as any).name,
    start(r: any, i: any): any {
      let a: any = (Ue as any)(),
        o: any = (): any => {},
        l: any = new (Promise as any)((k: any): any => {
          o = k;
        }),
        d: any = (): any => {},
        g: any = (k: any): any => ((a as any).dispose as any)() ? ((d as any)(), (o as any)(k), !0) : !1,
        m: any = (): any => {
          (g as any)({
            policyName: (n as any).name,
            reason: "disposed"
          });
        },
        M: any = (k: any): any => {
          (g as any)({
            policyName: (n as any).name,
            reason: "tick-failed",
            cause: k
          }) && (t as any)(($e as any)((n as any).name, "tick-failed", k));
        },
        y: any = (): any => {
          if (((a as any).fired as any)(), (((a as any).current as any).state as any) === ("disposed" as any)) return;
          let k: any;
          try {
            k = (r as any)();
          } catch (O: any) {
            (M as any)(O);
            return;
          }
          ((k as any).then as any)((): any => {
            (((a as any).current as any).state as any) !== ("disposed" as any) && ((a as any).arm as any)(((e as any).schedule as any)((n as any).intervalMs, y));
          }, M);
        },
        A: any = {
          dispose: m,
          stopped: l
        };
      return i?.aborted ? ((m as any)(), A) : ((i as any) != (null as any) && (((i as any).addEventListener as any)("abort", m, {
        once: !0
      }), d = (): any => ((i as any).removeEventListener as any)("abort", m)), (n as any).leading ?? !0 ? (y as any)() : ((a as any).arm as any)(((e as any).schedule as any)((n as any).intervalMs, y)), A);
    }
  };
}
function Ue(this: any): any {
  let n: any = {
    state: "running"
  };
  return {
    get current(): any {
      return n;
    },
    arm(e: any): any {
      if (((n as any).state as any) === ("disposed" as any)) {
        ((e as any).dispose as any)();
        return;
      }
      ((n as any).state as any) === ("armed" as any) && (((n as any).handle as any).dispose as any)(), n = {
        state: "armed",
        handle: e
      };
    },
    fired(): any {
      ((n as any).state as any) === ("armed" as any) && (n = {
        state: "running"
      });
    },
    dispose(): any {
      return ((n as any).state as any) === ("disposed" as any) ? !1 : (((n as any).state as any) === ("armed" as any) && (((n as any).handle as any).dispose as any)(), n = {
        state: "disposed"
      }, !0);
    }
  };
}
var Ot: any = {
  none: 0,
  equal: (1 as any) / (2 as any),
  full: 1
};
function ge(this: any, n: any, e: any): any {
  return (n as any).reason ?? (ze as any)(e);
}
function ze(this: any, n: any): any {
  let e: any = new (Error as any)(`Operation aborted for ${n}`);
  return (e as any).name = "AbortError", e;
}
var Je: any = /^[a-z0-9]+([-.][a-z0-9]+)*$/;
function ye(this: any, n: any): any {
  if (!((Je as any).test as any)(n)) throw new (TypeError as any)(`name must be lowercase segments joined by "-" or ".", got ${((JSON as any).stringify as any)(n)}`);
}
function he(this: any, n: any, e: any): any {
  if (!((Number as any).isFinite as any)(n) || (n as any) < (0 as any)) throw new (RangeError as any)(`${e} must be a finite non-negative number`);
}
var V: any = class n {
  [key: string]: any;
  constructor(e: any, t: any) {
    (this as any).displayName = e;
    (this as any).debug = t;
  }
  displayName: any;
  debug: any;
  static maxClicks: any = 5;
  previewChecked: any = !1;
  typed: any = !1;
  clicks: any = 0;
  step(e: any): any {
    if (!(this as any).previewChecked) {
      (this as any).previewChecked = !0;
      let a: any = ((e as any).previewOffButton as any)();
      if ((a as any) !== (null as any)) {
        ((a as any).click as any)();
        return;
      }
    }
    let t: any = ((e as any).nameField as any)(),
      r: any = (t as any) !== (null as any) && (((((t as any).value as any).trim as any)() as any).length as any) === (0 as any);
    if ((t as any) !== (null as any) && ((this as any).displayName as any) !== (null as any) && !(this as any).typed && r) {
      ((t as any).focus as any)(), ((n as any).setInputValue as any)(t, (this as any).displayName), (this as any).typed = !0, ((this as any).debug as any)({
        kind: "join.typed"
      });
      return;
    }
    if (((this as any).clicks as any) >= ((n as any).maxClicks as any)) return;
    let i: any = ((e as any).joinButton as any)();
    (i as any) === (null as any) || ((this as any).displayName as any) !== (null as any) && r || (((i as any).click as any)(), (this as any).clicks += 1, ((this as any).debug as any)({
      kind: "join.clicked"
    }));
  }
  static setInputValue(e: any, t: any): any {
    let r: any = ((Object as any).getOwnPropertyDescriptor as any)((HTMLInputElement as any).prototype, "value")?.set;
    (r as any) != (null as any) ? ((r as any).call as any)(e, t) : (e as any).value = t, ((e as any).dispatchEvent as any)(new (Event as any)("input", {
      bubbles: !0
    })), ((e as any).dispatchEvent as any)(new (Event as any)("change", {
      bubbles: !0
    }));
  }
};
var _: any = class n {
  [key: string]: any;
  constructor(e: any, t: any, r: any) {
    (this as any).document = e;
    (this as any).site = t;
    (this as any).self = r?.trim().toLowerCase() ?? "";
  }
  document: any;
  site: any;
  self: any;
  probe(e: any): any {
    let t: any = ((this as any).participantEntries as any)();
    return {
      pageLanguage: (((this as any).document as any).documentElement as any).lang,
      leaveControl: (((this as any).button as any)((r: any): any => (((this as any).site as any).isLeaveControl as any)(((n as any).label as any)(r))) as any) !== (null as any),
      joinControl: (((this as any).joinButton as any)() as any) !== (null as any),
      nameField: (((this as any).nameField as any)() as any) !== (null as any),
      playback: e,
      participantEntries: (t as any).length,
      otherParticipants: (((this as any).self as any).length as any) === (0 as any) || ((t as any).length as any) === (0 as any) ? null : (((t as any).filter as any)((r: any): any => ((this as any).isOtherHuman as any)(r)) as any).length
    };
  }
  joinButton(): any {
    return ((this as any).button as any)((e: any): any => (((this as any).site as any).isJoinControl as any)(((n as any).text as any)(e)));
  }
  previewOffButton(): any {
    return ((this as any).button as any)((e: any): any => (((this as any).site as any).isPreviewOff as any)(((n as any).text as any)(e)));
  }
  rosterOpener(): any {
    let e: any = ((this as any).site as any).speakerSignal;
    return ((e as any).kind as any) !== ("roster" as any) ? null : ((this as any).button as any)((t: any): any => (((e as any).openControl as any).test as any)(((n as any).label as any)(t)));
  }
  nameField(): any {
    for (let e of (((this as any).document as any).querySelectorAll as any)("input[type='text'], input:not([type])")) {
      let t: any = `${((e as any).getAttribute as any)("aria-label") ?? ""} ${(e as any).placeholder}`;
      if ((((this as any).site as any).isNameField as any)({
        label: t,
        id: (e as any).id
      }) && ((n as any).isVisible as any)(e)) return e;
    }
    return null;
  }
  speakingNames(): any {
    let e: any = ((this as any).site as any).speakerSignal,
      t: any = new (Set as any)(),
      r: any = (i: any): any => {
        let a: any = (((this as any).site as any).participantName as any)(i ?? "");
        (a as any) !== (null as any) && (((a as any).toLowerCase as any)() as any) !== ((this as any).self as any) && ((t as any).add as any)(a);
      };
    if (((e as any).kind as any) === ("tile" as any)) {
      for (let i of (((this as any).document as any).querySelectorAll as any)((e as any).tile)) {
        let a: any = ((i as any).querySelector as any)((e as any).indicator);
        (a as any) === (null as any) || !(((a as any).classList as any).contains as any)((e as any).speakingClass) || (r as any)(((this as any).tileName as any)(i));
      }
      return [...t];
    }
    for (let i of (((this as any).document as any).querySelectorAll as any)((e as any).speakingIcon)) {
      let a: any = i;
      for (; (a as any) !== (null as any) && (((a as any).querySelector as any)((e as any).name) as any) === (null as any);) a = (a as any).parentElement;
      (r as any)(a?.querySelector((e as any).name)?.textContent);
    }
    return [...t];
  }
  isOtherHuman(e: any): any {
    let t: any = (e as any).textContent ?? "";
    return ((((t as any).toLowerCase as any)() as any).includes as any)((this as any).self) ? !1 : !(((this as any).site as any).isBotLike as any)(t);
  }
  participantEntries(): any {
    let e: any = ((this as any).site as any).speakerSignal;
    return [...(((this as any).document as any).querySelectorAll as any)(((e as any).kind as any) === ("tile" as any) ? (e as any).tile : (e as any).name)];
  }
  tileName(e: any): any {
    for (let t of ((e as any).querySelectorAll as any)("*")) {
      if ((((t as any).children as any).length as any) > (0 as any) || ((n as any).isIconGlyph as any)(t)) continue;
      let r: any = (((this as any).site as any).participantName as any)((t as any).textContent ?? "");
      if ((r as any) !== (null as any)) return r;
    }
    return null;
  }
  button(e: any): any {
    for (let t of (((this as any).document as any).querySelectorAll as any)("button, [role='button']")) if ((e as any)(t) && ((n as any).isVisible as any)(t)) return t;
    return null;
  }
  static text(e: any): any {
    return (e as any).textContent?.replace(/\s+/g, " ").trim() ?? "";
  }
  static label(e: any): any {
    return ((e as any).getAttribute as any)("aria-label") ?? "";
  }
  static isVisible(e: any): any {
    let t: any = ((e as any).getBoundingClientRect as any)();
    return ((t as any).width as any) > (0 as any) && ((t as any).height as any) > (0 as any);
  }
  static isIconGlyph(e: any): any {
    return ((e as any).tagName as any) === ("I" as any) || ((/\b(?:google-symbols|material-icons)\b/ as any).test as any)((e as any).className);
  }
};
var $: any = class n {
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
    return (t as any) === ((n as any).googleMeet as any) ? "google-meet" : (t as any) === ((n as any).zoom as any) || ((t as any).endsWith as any)(`.${(n as any).zoom}`) ? "zoom" : null;
  }
  static nameOf(e: any): any {
    let t: any = ((URL as any).canParse as any)(e) ? ((n as any).siteOf as any)((new (URL as any)(e) as any).hostname) : null;
    return (t as any) === (null as any) ? null : ((n as any).names as any)[t];
  }
};
var E: any = class n {
    [key: string]: any;
    isBotLike(e: any): any {
      return ((n as any).isBotName as any)(e);
    }
    static personNameBlock: any = /^(join|leave|mute|unmute|video|chat|share|more|people|participants|host|audio|stop|start|end|meeting|invite|react|settings|microphone|camera|screen|call|waiting|admitted|guest|presenting|you|off|on|close|open)$/i;
    static roleTag: any = /\s*\((?:presenting|you|host|me|guest)\)\s*$/i;
    static jobTitle: any = /,.*$/;
    static botName: any = /\bbot\b|\bnotetaker\b|\bcursor\s+agent\b/i;
    static classifyBy(e: any, t: any, r: any): any {
      let i: any = (((e as any).bodyText as any).toLowerCase as any)();
      for (let [a, o] of t) {
        let l: any = ((n as any).firstPhrase as any)(i, o);
        if ((l as any) !== (null as any)) return {
          kind: a,
          detail: l
        };
      }
      return (((n as any).firstPhrase as any)(i, r) as any) !== (null as any) ? {
        kind: "waiting"
      } : (e as any).hasLeaveCallButton && !(e as any).hasJoinButton && ((e as any).otherParticipants as any) === (0 as any) ? {
        kind: "alone"
      } : (e as any).hasLeaveCallButton ? {
        kind: "in-call"
      } : (e as any).hasAudioPlayback && !(e as any).hasJoinButton ? {
        kind: "in-call"
      } : {
        kind: "prejoin"
      };
    }
    static firstPhrase(e: any, t: any): any {
      return ((t as any).find as any)((r: any): any => ((e as any).includes as any)(r)) ?? null;
    }
    static personName(e: any): any {
      if (((e as any).length as any) < (2 as any) || ((e as any).length as any) > (48 as any) || ((/[0-9@:/_]/ as any).test as any)(e) || ((n as any).isBotName as any)(e)) return null;
      let t: any = ((((e as any).split as any)(" ") as any).filter as any)((r: any): any => ((r as any).length as any) > (0 as any));
      return ((t as any).length as any) === (0 as any) || ((t as any).length as any) > (4 as any) || ((t as any).some as any)((r: any): any => (((n as any).personNameBlock as any).test as any)(((r as any).replace as any)(/[()]/g, ""))) ? null : e;
    }
    static isBotName(e: any): any {
      let t: any = ((((((((((e as any).replace as any)(/\s+/g, " ") as any).trim as any)() as any).replace as any)((n as any).roleTag, "") as any).replace as any)((n as any).jobTitle, "") as any).trim as any)();
      return ((t as any).length as any) > (0 as any) && (((n as any).botName as any).test as any)(t);
    }
  },
  te: any = class n extends (E as any) {
    [key: string]: any;
    speakerSignal: any = {
      kind: "tile",
      tile: "[data-participant-id]",
      indicator: '[jsname="QgSmzd"]',
      speakingClass: "sxlEM"
    };
    static ended: any = ["you've left the meeting", "you left the meeting", "you were removed from the meeting", "the meeting has ended", "the call has ended", "return to home screen"];
    static denied: any = ["denied your request", "you can't join this video call", "you can't join this call", "this meeting hasn't started", "no one responded to your request", "check your meeting code"];
    static waiting: any = ["asking to join", "someone will let you in", "you'll join when", "brings you into the call"];
    static landmarks: any = [...(n as any).denied, ...(n as any).ended, ...(n as any).waiting, "no active conference", "no_active_conference", "join now", "ask to join"];
    landmark(e: any): any {
      return ((E as any).firstPhrase as any)(((e as any).toLowerCase as any)(), (n as any).landmarks);
    }
    classify(e: any): any {
      return ((E as any).classifyBy as any)(e, [["denied", (n as any).denied], ["ended", (n as any).ended]], (n as any).waiting);
    }
    isJoinControl(e: any): any {
      return ((/^(join now|ask to join|join)$/i as any).test as any)(e);
    }
    isNameField(e: any): any {
      return ((/name/i as any).test as any)((e as any).label) && !((/code/i as any).test as any)((e as any).label);
    }
    isLeaveControl(e: any): any {
      return ((/leave call/i as any).test as any)(e);
    }
    isPreviewOff(e: any): any {
      return !1;
    }
    participantName(e: any): any {
      return ((E as any).personName as any)(((((((((e as any).replace as any)(/\s+/g, " ") as any).trim as any)() as any).replace as any)(/\s*\((?:presenting|you)\)\s*$/i, "") as any).trim as any)());
    }
  },
  ne: any = class n extends (E as any) {
    [key: string]: any;
    speakerSignal: any = {
      kind: "roster",
      speakingIcon: ".participants-icon__voip-speaking-icon",
      name: ".participants-item__display-name",
      openControl: /^open the participants list pane/i
    };
    static ended: any = ["this meeting has been ended", "the host has ended this meeting", "you have left the meeting", "you left the meeting"];
    static denied: any = ["invalid meeting id", "meeting id is not valid", "passcode is wrong", "the host has removed you", "you have been removed", "not allowed to join"];
    static waiting: any = ["waiting for the host", "please wait, the meeting host will let you in", "the host will let you in soon", "host has joined. we've let them know"];
    static landmarks: any = [...(n as any).ended, ...(n as any).denied, ...(n as any).waiting, "join with computer audio", "your name"];
    landmark(e: any): any {
      return ((E as any).firstPhrase as any)(((e as any).toLowerCase as any)(), (n as any).landmarks);
    }
    classify(e: any): any {
      return ((E as any).classifyBy as any)(e, [["ended", (n as any).ended], ["denied", (n as any).denied]], (n as any).waiting);
    }
    isJoinControl(e: any): any {
      return ((/^(join|join audio|join with computer audio|computer audio)$/i as any).test as any)(e);
    }
    isNameField(e: any): any {
      return ((e as any).id as any) === ("input-for-name" as any) || ((/your name|^name$/i as any).test as any)((e as any).label);
    }
    isLeaveControl(e: any): any {
      return ((/^(leave|end)( meeting)?$/i as any).test as any)(e);
    }
    isPreviewOff(e: any): any {
      return ((/^stop video$/i as any).test as any)(e);
    }
    participantName(e: any): any {
      let t: any = (((((((e as any).replace as any)(/\s+/g, " ") as any).trim as any)() as any).split as any)(",") as any)[0] ?? "";
      return ((E as any).personName as any)(((((t as any).replace as any)(/\s*\((?:host|me|guest)\)\s*$/i, "") as any).trim as any)());
    }
  },
  U: any = class n {
    [key: string]: any;
    static googleMeet: any = new (te as any)();
    static zoom: any = new (ne as any)();
    static forHost(e: any): any {
      switch ((($ as any).siteOf as any)(e)) {
        case "google-meet":
          return (n as any).googleMeet;
        case "zoom":
          return (n as any).zoom;
        case null:
          return null;
      }
    }
  };
var R: any = class n {
  [key: string]: any;
  constructor(e: any) {
    (this as any).deps = e;
  }
  deps: any;
  static framesPerChunk: any = 2048;
  context: any = null;
  seenTracks: any = new (Set as any)();
  tapped: any = new (WeakMap as any)();
  tappedCount: any = 0;
  static createAudioContext(): any {
    return new (AudioContext as any)({
      sampleRate: (p as any).sampleRateHz
    });
  }
  hasPlayback(): any {
    return ((this as any).tappedCount as any) > (0 as any);
  }
  scan(e: any): any {
    for (let t of ((w as any).media as any)(e)) ((this as any).attach as any)(t);
    for (let t of ((e as any).querySelectorAll as any)("audio, video")) ((this as any).attach as any)(t);
  }
  attach(e: any): any {
    let t: any = ((n as any).sourceKeyOf as any)(e),
      r: any = (((this as any).tapped as any).get as any)(e);
    if ((t as any) === (null as any) || (r?.key as any) === (t as any)) return;
    let i: any = ((n as any).streamOf as any)(e);
    if ((i as any) === (null as any)) return;
    let a: any = ((((i as any).getAudioTracks as any)() as any).filter as any)((y: any): any => ((y as any).readyState as any) === ("live" as any));
    if (((a as any).length as any) === (0 as any) || ((a as any).every as any)((y: any): any => (((this as any).seenTracks as any).has as any)((y as any).id))) return;
    for (let y of a) (((this as any).seenTracks as any).add as any)((y as any).id);
    r?.node.disconnect();
    let o: any = ((this as any).ensureContext as any)(),
      l: any = ((o as any).createMediaStreamSource as any)(i),
      d: any = ((o as any).createScriptProcessor as any)((n as any).framesPerChunk, 1, 1),
      g: any = ((o as any).createGain as any)();
    ((g as any).gain as any).value = 0;
    let {
      lane: m,
      mix: M
    }: any = ((w as any).sinkOf as any)(e);
    (d as any).onaudioprocess = (y: any): any => {
      let {
        source: A
      }: any = ((w as any).sinkOf as any)(e);
      (((this as any).deps as any).audio as any)({
        pcm16: ((n as any).pcm16Of as any)((((y as any).inputBuffer as any).getChannelData as any)(0)),
        lane: m ?? t,
        source: A,
        speaker: (((this as any).deps as any).speakerOf as any)(A, M)
      });
    }, ((l as any).connect as any)(d), ((d as any).connect as any)(g), ((g as any).connect as any)((o as any).destination), (((this as any).tapped as any).set as any)(e, {
      key: t,
      node: l
    }), (this as any).tappedCount += 1, (((this as any).deps as any).debug as any)({
      kind: (r as any) === (void 0 as any) ? "tap.attach" : "tap.retap",
      tracks: (a as any).length
    });
  }
  ensureContext(): any {
    if (((this as any).context as any) !== (null as any)) return (this as any).context;
    let e: any = (((this as any).deps as any).createAudioContext as any)();
    return ((e as any).resume as any)(), (this as any).context = e, e;
  }
  static sourceKeyOf(e: any): any {
    if ((e as any).srcObject instanceof MediaStream) {
      let t: any = (((((((e as any).srcObject as any).getAudioTracks as any)() as any).filter as any)((r: any): any => ((r as any).readyState as any) === ("live" as any)) as any).map as any)((r: any): any => (r as any).id);
      return ((t as any).length as any) === (0 as any) ? null : `stream:${((t as any).join as any)(",")}`;
    }
    return (((e as any).currentSrc as any).length as any) > (0 as any) ? `src:${(e as any).currentSrc}` : null;
  }
  static streamOf(e: any): any {
    return (e as any).srcObject instanceof MediaStream ? (e as any).srcObject : (typeof (e as any).captureStream as any) == ("function" as any) ? ((e as any).captureStream as any)() : null;
  }
  static pcm16Of(e: any): any {
    let t: any = new (Int16Array as any)((e as any).length);
    for (let r: any = 0; (r as any) < ((e as any).length as any); r += 1) {
      let i: any = ((Math as any).max as any)(-1, ((Math as any).min as any)(1, (e as any)[r] ?? 0));
      (t as any)[r] = (i as any) < (0 as any) ? (i as any) * (32768 as any) : (i as any) * (32767 as any);
    }
    return (t as any).buffer;
  }
};
var re: any = class n {
    [key: string]: any;
    constructor(e: any) {
      (this as any).clock = e;
    }
    clock: any;
    static holdMs: any = 1200;
    current: any = null;
    lastSeenAtMs: any = 0;
    observe(e: any): any {
      let t: any = ((G as any).sole as any)(e);
      if ((t as any) !== (null as any)) {
        (this as any).current = t, (this as any).lastSeenAtMs = (((this as any).clock as any).now as any)();
        return;
      }
      if (((e as any).length as any) > (1 as any)) {
        (this as any).current = null;
        return;
      }
      ((this as any).current as any) !== (null as any) && (((((this as any).clock as any).now as any)() as any) - ((this as any).lastSeenAtMs as any) as any) > ((n as any).holdMs as any) && ((this as any).current = null);
    }
    speaker(): any {
      return (this as any).current;
    }
  },
  ie: any = class n {
    [key: string]: any;
    static bindingObservations: any = 2;
    names: any = new (Map as any)();
    pending: any = null;
    observe(e: any, t: any): any {
      let r: any = new (Set as any)(((t as any).map as any)((d: any): any => (((this as any).names as any).get as any)(d))),
        i: any = ((t as any).filter as any)((d: any): any => !(((this as any).names as any).has as any)(d)),
        a: any = ((e as any).filter as any)((d: any): any => !((r as any).has as any)(d)),
        o: any = (i as any)[0],
        l: any = (a as any)[0];
      if (((i as any).length as any) !== (1 as any) || ((a as any).length as any) !== (1 as any) || (o as any) === (void 0 as any) || (l as any) === (void 0 as any)) {
        (this as any).pending = null;
        return;
      }
      if ((((this as any).pending?.source as any) !== (o as any) || (((this as any).pending as any).name as any) !== (l as any)) && ((this as any).pending = {
        source: o,
        name: l,
        count: 0
      }), ((this as any).pending as any).count += 1, !((((this as any).pending as any).count as any) < ((n as any).bindingObservations as any))) {
        for (let [d, g] of (this as any).names) (g as any) === (l as any) && (((this as any).names as any).delete as any)(d);
        (((this as any).names as any).set as any)(o, l), (this as any).pending = null;
      }
    }
    nameOf(e: any): any {
      return (((this as any).names as any).get as any)(e) ?? null;
    }
  },
  z: any = class n {
    [key: string]: any;
    constructor(e: any, t: any) {
      (this as any).clock = e;
      (this as any).debug = t;
      (this as any).watch = new (re as any)(e);
    }
    clock: any;
    debug: any;
    static speakingLevel: any = .005;
    watch: any;
    ledger: any = new (ie as any)();
    announced: any = new (Map as any)();
    mixedLanes: any = !1;
    observe(e: any): any {
      (this as any).mixedLanes = ((((e as any).site as any).speakerSignal as any).kind as any) === ("roster" as any);
      let t: any = ((e as any).speakingNames as any)();
      (((this as any).watch as any).observe as any)(t);
      let r: any = ((this as any).activeSources as any)((e as any).document);
      (((this as any).ledger as any).observe as any)(t, r);
      for (let i of r) {
        let a: any = (((this as any).ledger as any).nameOf as any)(i);
        (a as any) !== (null as any) && ((((this as any).announced as any).get as any)(i) as any) !== (a as any) && ((((this as any).announced as any).set as any)(i, a), ((this as any).debug as any)({
          kind: "source.bound",
          source: i
        }));
      }
    }
    speakerOf(e: any, t: any): any {
      return (e as any) !== (null as any) ? (((this as any).ledger as any).nameOf as any)(e) : t || (this as any).mixedLanes ? (((this as any).watch as any).speaker as any)() : null;
    }
    activeSources(e: any): any {
      let t: any = (((this as any).clock as any).now as any)(),
        r: any = new (Set as any)();
      for (let i of ((w as any).sinks as any)(e)) ((i as any).source as any) === (null as any) || ((i as any).heardAtMs as any) === (null as any) || ((t as any) - ((i as any).heardAtMs as any) as any) > ((p as any).sourceRecentMs as any) || ((i as any).level as any) !== (null as any) && ((i as any).level as any) < ((n as any).speakingLevel as any) || ((r as any).add as any)((i as any).source);
      return [...r];
    }
  };
var J: any = class n {
  [key: string]: any;
  constructor(e: any) {
    (this as any).deps = e;
    let t: any = (e as any).clock ?? L;
    (this as any).speakers = new (z as any)(t, ((e as any).sink as any).debug), (this as any).playback = new (R as any)({
      createAudioContext: (e as any).createAudioContext,
      audio: ((e as any).sink as any).audio,
      debug: ((e as any).sink as any).debug,
      speakerOf: (r: any, i: any): any => (((this as any).speakers as any).speakerOf as any)(r, i)
    }), (this as any).autoJoin = new (V as any)((e as any).displayName, ((e as any).sink as any).debug), (this as any).loops = [(((H as any)({
      name: "meeting-page-tap",
      intervalMs: (p as any).pagePollMs,
      clock: t
    }) as any).start as any)(async (): Promise<any> => ((this as any).pollPage as any)()), (((H as any)({
      name: "meeting-speaker-watch",
      intervalMs: (n as any).speakerPollMs,
      clock: t
    }) as any).start as any)(async (): Promise<any> => ((this as any).pollSpeakers as any)()), (((H as any)({
      name: "meeting-source-stamp",
      intervalMs: (p as any).sourcePollMs,
      clock: t
    }) as any).start as any)(async (): Promise<any> => ((this as any).signalPage as any)((p as any).stampEvent))];
  }
  deps: any;
  static speakerPollMs: any = 250;
  static isSameProbe(e: any, t: any): any {
    return ((e as any).pageLanguage as any) === ((t as any).pageLanguage as any) && ((e as any).leaveControl as any) === ((t as any).leaveControl as any) && ((e as any).joinControl as any) === ((t as any).joinControl as any) && ((e as any).nameField as any) === ((t as any).nameField as any) && ((e as any).playback as any) === ((t as any).playback as any) && ((e as any).participantEntries as any) === ((t as any).participantEntries as any) && ((e as any).otherParticipants as any) === ((t as any).otherParticipants as any);
  }
  static isSameStatus(e: any, t: any): any {
    return ((e as any).kind as any) !== ((t as any).kind as any) ? !1 : "detail" in e && "detail" in t ? ((e as any).detail as any) === ((t as any).detail as any) : !0;
  }
  playback: any;
  speakers: any;
  autoJoin: any;
  loops: any;
  lastStatus: any = null;
  lastLandmark: any = null;
  lastProbe: any = null;
  static install(e: any): any {
    return new (n as any)(e);
  }
  dispose: any = (): any => {
    for (let e of (([...(this as any).loops] as any).reverse as any)()) ((e as any).dispose as any)();
  };
  reader(): any {
    let {
      document: e,
      displayName: t
    }: any = (this as any).deps;
    if (((e as any).body as any) === (null as any)) return null;
    let r: any = ((U as any).forHost as any)((e as any).location?.hostname ?? "");
    return (r as any) === (null as any) ? null : new (_ as any)(e, r, t);
  }
  pollSpeakers(): any {
    let e: any = ((this as any).reader as any)();
    (e as any) !== (null as any) && (((this as any).speakers as any).observe as any)(e);
  }
  signalPage(e: any): any {
    ((((this as any).deps as any).document as any).dispatchEvent as any)(new (Event as any)(e));
  }
  pollPage(): any {
    ((this as any).signalPage as any)((p as any).wakeEvent);
    let e: any = ((this as any).reader as any)();
    if ((e as any) === (null as any)) return;
    let {
      document: t,
      site: r
    }: any = e;
    (((this as any).playback as any).scan as any)(t);
    let i: any = ((t as any).body as any).innerText,
      a: any = ((r as any).landmark as any)(i);
    (a as any) !== (null as any) && (a as any) !== ((this as any).lastLandmark as any) && ((this as any).lastLandmark = a, ((((this as any).deps as any).sink as any).debug as any)({
      kind: "landmark",
      landmark: a
    }));
    let o: any = ((e as any).probe as any)((((this as any).playback as any).hasPlayback as any)());
    (((this as any).lastProbe as any) === (null as any) || !((n as any).isSameProbe as any)((this as any).lastProbe, o)) && ((this as any).lastProbe = o, ((((this as any).deps as any).sink as any).debug as any)({
      kind: "signals",
      probe: o
    }));
    let l: any = ((r as any).classify as any)({
      bodyText: i,
      hasLeaveCallButton: (o as any).leaveControl,
      hasJoinButton: (o as any).joinControl,
      hasAudioPlayback: (o as any).playback,
      otherParticipants: (o as any).otherParticipants
    });
    ((l as any).kind as any) === ("prejoin" as any) && (((this as any).autoJoin as any).step as any)(e), (((l as any).kind as any) === ("in-call" as any) || ((l as any).kind as any) === ("alone" as any)) && ((e as any).rosterOpener as any)()?.click(), (((this as any).lastStatus as any) === (null as any) || !((n as any).isSameStatus as any)((this as any).lastStatus, l)) && ((this as any).lastStatus = l, ((((this as any).deps as any).sink as any).page as any)(l));
  }
};
var ve: number = 6e4;
function Me(this: any, n: any): any {
  return n instanceof Error ? (n as any).message : void 0;
}
function Y(this: any, ...n: any): any {
  ((console as any).warn as any)("[sand-webview-preload]", ...n);
}
var be: any = !1,
  ke: any = null,
  we: any = null;
function Ae(this: any): any {
  if (!be) {
    be = !0;
    try {
      let n: any = (require as any)("electron");
      ke = (n as any).ipcRenderer ?? null, we = (n as any).webFrame ?? null;
    } catch (n: any) {
      (Y as any)("electron module unavailable", (Me as any)(n));
    }
  }
}
function Ee(this: any): any {
  return (Ae as any)(), ke;
}
function Pe(this: any): any {
  return (Ae as any)(), we;
}
var Wn: any = (ee as any)({
  name: "sand-webview-passkey-stall",
  timeoutMs: ve
});
var j: any = (Ee as any)(),
  Se: any = (Pe as any)();
(j as any) === (null as any) || (Se as any) === (null as any) ? (Y as any)("meetings preload: electron bridges unavailable") : (((q as any).inject as any)({
  document,
  executeJavaScript: (n: any): any => ((Se as any).executeJavaScript as any)(n)
}), ((j as any).on as any)((p as any).avatarFrameChannel, (n: any, e: any): any => {
  ((N as any).draw as any)(document, e);
}), ((J as any).install as any)({
  document,
  displayName: ((p as any).displayNameOf as any)((process as any).argv),
  createAudioContext: (): any => ((R as any).createAudioContext as any)(),
  sink: {
    audio: (n: any): any => ((j as any).send as any)((p as any).audioChannel, n),
    page: (n: any): any => ((j as any).send as any)((p as any).pageChannel, n),
    debug: (n: any): any => ((j as any).send as any)((p as any).debugChannel, n)
  }
}));
//# debugId=d60f9d9f-e2c7-4bf3-a8e6-94e17d1aafb6
