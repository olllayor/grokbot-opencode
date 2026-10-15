import { MeetingConstants } from "./meeting-constants.js";
import {
  clock as systemClock,
  interval as createInterval,
  type Clock,
  type Disposable,
} from "./reliability.js";
import {
  getIpcRenderer,
  getWebFrame,
  errorMessage,
  warn,
} from "./browser-preload.js";
import { meetingPageProgram } from "./meeting-page-program.js";
type Matrix = [number, number, number, number, number, number];
interface Stroke {
  d: string;
  matrix: Matrix;
}
type AvatarState = "idle" | "listening";
type AvatarFrameData =
  | {
      kind: "photo";
      dataUrl: string;
    }
  | {
      kind?: never;
      state: AvatarState;
      body: Stroke;
      eyes: Stroke[];
      ink: string;
    };
interface AvatarCrop {
  x: number;
  y: number;
  size: number;
}
interface PhotoMiss {
  miss: string;
}
type MediaElement = HTMLMediaElement & {
  captureStream?: () => MediaStream;
};
interface AudioSink {
  element: MediaElement;
  lane: string | null;
  mix: boolean;
  source: string | null;
  level: number | null;
  heardAtMs: number | null;
}
interface AudioPacket {
  pcm16: ArrayBuffer;
  lane: string;
  source: string | null;
  speaker: string | null;
}
type DebugPacket = Record<string, unknown>;
interface PlaybackDependencies {
  createAudioContext(): AudioContext;
  audio(packet: AudioPacket): void;
  debug(packet: DebugPacket): void;
  speakerOf(source: string | null, mixed: boolean): string | null;
}
interface MeetingDependencies {
  document: Document;
  displayName: string | null;
  clock?: Clock;
  createAudioContext(): AudioContext;
  sink: {
    audio(packet: AudioPacket): void;
    page(status: PageStatus): void;
    debug(packet: DebugPacket): void;
  };
}
type PageStatus =
  | {
      kind: "denied" | "ended";
      detail: string;
    }
  | {
      kind: "waiting" | "alone" | "in-call" | "prejoin";
    };
interface PageSignals {
  bodyText: string;
  hasLeaveCallButton: boolean;
  hasJoinButton: boolean;
  hasAudioPlayback: boolean;
  otherParticipants: number | null;
}
interface PageProbe {
  pageLanguage: string;
  leaveControl: boolean;
  joinControl: boolean;
  nameField: boolean;
  playback: boolean;
  participantEntries: number;
  otherParticipants: number | null;
}
type SpeakerSignal =
  | {
      kind: "tile";
      tile: string;
      indicator: string;
      speakingClass: string;
    }
  | {
      kind: "roster";
      speakingIcon: string;
      name: string;
      openControl: RegExp;
    };
interface MeetingSite {
  speakerSignal: SpeakerSignal;
  landmark(text: string): string | null;
  classify(signals: PageSignals): PageStatus;
  isJoinControl(text: string): boolean;
  isNameField(field: { label: string; id: string }): boolean;
  isLeaveControl(label: string): boolean;
  isPreviewOff(text: string): boolean;
  participantName(text: string): string | null;
  isBotLike(text: string): boolean;
}
("use strict");
export class SpeechText {
  static speechKey(speech: {
    source?: string | null;
    speaker?: string | null;
    lane: string;
  }) {
    return speech.source ?? speech.speaker ?? speech.lane;
  }
  static transcriptLine(speaker: string | null | undefined, text: string) {
    let r = text.trim();
    if (r.length === 0) return "";
    let i = speaker?.trim() ?? "";
    return i.length === 0 ? r : `${i}: ${r}`;
  }
  static sole(names: string[]) {
    let t = [
      ...new Set(names.map((r) => r.trim()).filter((r) => r.length > 0)),
    ];
    return t.length === 1 ? (t[0] ?? null) : null;
  }
}
const avatarDocumentPath =
  "src/electron-renderer/pitman-avatar/pitman-avatar-output.html";
function avatarCrop({
  width: n = 2560,
  height: e = 1440,
  fill: t = 0.28,
}: {
  width?: number;
  height?: number;
  fill?: number;
} = {}) {
  let r = Math.min(n, e),
    i = r - 2 * Math.round((r * (1 - t)) / 2);
  return {
    x: Math.round((n - i) / 2),
    y: Math.round((e - i) / 2),
    size: i,
  };
}
const defaultInk = "#ffffff";
export class AvatarFrames {
  static read(value: unknown): AvatarFrameData | null {
    if (typeof value != "object" || value === null) return null;
    if ("kind" in value && value.kind === "photo")
      return !("dataUrl" in value) ||
        typeof value.dataUrl != "string" ||
        value.dataUrl.length === 0
        ? null
        : {
            kind: "photo",
            dataUrl: value.dataUrl,
          };
    if (
      !("state" in value) ||
      (value.state !== "idle" && value.state !== "listening") ||
      !("body" in value)
    )
      return null;
    let t = AvatarFrames.readStroke(value.body);
    if (t === null || !("eyes" in value) || !Array.isArray(value.eyes))
      return null;
    let r = [];
    for (let a of value.eyes) {
      let o = AvatarFrames.readStroke(a);
      if (o === null) return null;
      r.push(o);
    }
    let i =
      "ink" in value && typeof value.ink == "string" && value.ink.length > 0
        ? value.ink
        : defaultInk;
    return {
      state: value.state,
      body: t,
      eyes: r,
      ink: i,
    };
  }
  static of(
    svg: Element,
    state: AvatarState,
    ink: string = defaultInk,
  ): AvatarFrameData | null {
    let i = AvatarFrames.bodyPath(svg);
    if (i === null) return null;
    let a = i.getAttribute("d");
    if (a === null || a.length === 0) return null;
    let o = [],
      l = svg.querySelectorAll("g[clip-path] > path");
    for (let d = 0; d < l.length; d++) {
      let g = l[d];
      if (g === void 0 || AvatarFrames.hidden(g)) continue;
      let m = g.getAttribute("d");
      m === null ||
        m.length === 0 ||
        o.push({
          d: m,
          matrix: AvatarFrames.matrixOf(g),
        });
    }
    return {
      state: state,
      body: {
        d: a,
        matrix: AvatarFrames.matrixOf(i),
      },
      eyes: o,
      ink: ink,
    };
  }
  static documentUrl(baseUrl: string) {
    return new URL(
      avatarDocumentPath,
      baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`,
    ).href;
  }
  static readStroke(value: unknown): Stroke | null {
    if (
      typeof value != "object" ||
      value === null ||
      !("d" in value) ||
      typeof value.d != "string" ||
      value.d.length === 0 ||
      !("matrix" in value) ||
      !Array.isArray(value.matrix) ||
      value.matrix.length !== 6
    )
      return null;
    let t = AvatarFrames.asMatrix(value.matrix);
    return t === null
      ? null
      : {
          d: value.d,
          matrix: t,
        };
  }
  static bodyPath(svg: Element) {
    let r = svg.querySelector("g[clip-path]")?.parentElement;
    if (r == null) return null;
    for (let i = 0; i < r.children.length; i++) {
      let a = r.children[i];
      if (
        a !== void 0 &&
        !(a.tagName.toLowerCase() !== "path" || AvatarFrames.hidden(a)) &&
        (a.getAttribute("d") ?? "").length !== 0
      )
        return a;
    }
    return null;
  }
  static hidden(element: Element) {
    let t = element.getAttribute("style");
    return t !== null && /\bdisplay\s*:\s*none\b/i.test(t)
      ? !0
      : (element as HTMLElement | SVGElement).style?.display === "none";
  }
  static matrixOf(element: Element): Matrix {
    let t: Matrix = [1, 0, 0, 1, 15, 15],
      r = [];
    for (
      let i: Element | null = element;
      i !== null && (r.push(i), i.tagName.toLowerCase() !== "svg");
      i = i.parentElement
    );
    for (let i of r.reverse()) {
      let a = i.getAttribute("transform");
      a !== null &&
        a.length > 0 &&
        (t = AvatarFrames.multiply(t, AvatarFrames.parseTransform(a)));
    }
    return t;
  }
  static parseTransform(transform: string): Matrix {
    let t: Matrix = [1, 0, 0, 1, 0, 0],
      r = /(translate|rotate|scale|matrix)\(([^)]*)\)/g;
    for (let i of transform.matchAll(r)) {
      let a = i[1],
        o = i[2];
      if (a === void 0 || o === void 0) continue;
      let l = o
        .split(/[\s,]+/)
        .filter((m) => m.length > 0)
        .map(Number);
      if (l.some((m) => Number.isNaN(m))) continue;
      if (a === "matrix") {
        let m = AvatarFrames.asMatrix(l);
        m !== null && (t = AvatarFrames.multiply(t, m));
        continue;
      }
      let d = l[0];
      if (d === void 0) continue;
      let g = l[1] ?? d;
      if (a === "translate")
        t = AvatarFrames.multiply(t, [1, 0, 0, 1, d, l[1] ?? 0]);
      else if (a === "rotate") {
        let m = (d * Math.PI) / 180,
          M = Math.cos(m),
          y = Math.sin(m);
        t = AvatarFrames.multiply(t, [M, y, -y, M, 0, 0]);
      } else
        t = AvatarFrames.multiply(t, [d, 0, 0, l[1] === void 0 ? d : g, 0, 0]);
    }
    return t;
  }
  static asMatrix(values: unknown[]): Matrix | null {
    if (values.length !== 6) return null;
    let t = [];
    for (let g of values) {
      if (typeof g != "number" || !Number.isFinite(g)) return null;
      t.push(g);
    }
    let r = t[0],
      i = t[1],
      a = t[2],
      o = t[3],
      l = t[4],
      d = t[5];
    return r === void 0 ||
      i === void 0 ||
      a === void 0 ||
      o === void 0 ||
      l === void 0 ||
      d === void 0
      ? null
      : [r, i, a, o, l, d];
  }
  static multiply(left: Matrix, right: Matrix): Matrix {
    return [
      left[0] * right[0] + left[2] * right[1],
      left[1] * right[0] + left[3] * right[1],
      left[0] * right[2] + left[2] * right[3],
      left[1] * right[2] + left[3] * right[3],
      left[0] * right[4] + left[2] * right[5] + left[4],
      left[1] * right[4] + left[3] * right[5] + left[5],
    ];
  }
}
export class AudioSinks {
  static id = "sand-meeting-audio-host";
  static sinks(document: Document): AudioSink[] {
    return AudioSinks.media(document).map((t) => AudioSinks.sinkOf(t));
  }
  static sinkOf(element: MediaElement): AudioSink {
    let {
      sandLane: t,
      sandMix: r,
      sandSource: i,
      sandLevel: a,
      sandHeardAt: o,
    } = element.dataset;
    return {
      element: element,
      lane: t ?? null,
      mix: r !== void 0,
      source: i ?? null,
      level: a === void 0 ? null : Number(a),
      heardAtMs: o === void 0 ? null : Number(o),
    };
  }
  static media(document: Document): MediaElement[] {
    return [
      ...(document
        .getElementById(AudioSinks.id)
        ?.shadowRoot?.querySelectorAll<MediaElement>("audio, video") ?? []),
    ];
  }
}
function causeCode(n: unknown, e: RegExp) {
  let t = new Set(),
    r = n;
  for (; r != null && typeof r == "object" && !t.has(r); ) {
    t.add(r);
    let i = (
      r as {
        code?: unknown;
      }
    ).code;
    if (typeof i == "string" && e.test(i)) return i;
    r = (
      r as {
        cause?: unknown;
      }
    ).cause;
  }
}
function systemErrorCode(n: unknown) {
  return causeCode(n, /^E[A-Z_]+$/);
}
function errorClass(n: unknown) {
  if (!(n instanceof Error)) return typeof n;
  let e = (
      n as Error & {
        code?: string;
      }
    ).code,
    t = e != null && e.length > 0 ? e : systemErrorCode(n);
  return t !== void 0 ? `${n.name} (${t})` : n.name;
}
const eyeInk = "#000000";
const backgroundInk = "#000000";
export class AvatarPainter {
  static bitmaps: Map<string, ImageBitmap> = new Map();
  static decoding: Map<string, Promise<PhotoMiss | ImageBitmap | null>> =
    new Map();
  static PHOTO_DATA_URL_MAX_CHARS = 8 * 1024 * 1024;
  static paint(
    canvas: HTMLCanvasElement,
    frame: AvatarFrameData | Element,
    crop: AvatarCrop,
    state: AvatarState = "idle",
  ) {
    let a = canvas.getContext("2d");
    if (a === null) return;
    let o =
      "kind" in frame || "body" in frame
        ? frame
        : AvatarFrames.of(frame, state);
    if (o === null) return;
    if (
      (a.setTransform(1, 0, 0, 1, 0, 0),
      (a.fillStyle = backgroundInk),
      a.fillRect(0, 0, canvas.width, canvas.height),
      o.kind === "photo")
    ) {
      AvatarPainter.paintPhoto(a, o.dataUrl, crop);
      return;
    }
    let l = crop.size / 259;
    a.translate(crop.x, crop.y);
    a.scale(l, l);
    AvatarPainter.fillStroke(a, o.body, o.ink);
    for (let d of o.eyes) AvatarPainter.fillStroke(a, d, eyeInk);
  }
  static paintPhoto(
    context: CanvasRenderingContext2D,
    dataUrl: string,
    crop: AvatarCrop,
  ) {
    if (dataUrl.length === 0) return;
    let i = AvatarPainter.bitmaps.get(dataUrl);
    if (i !== void 0) {
      AvatarPainter.drawBitmap(context, i, crop);
      return;
    }
    let a =
      AvatarPainter.decoding.get(dataUrl) ?? AvatarPainter.bitmapOf(dataUrl);
    AvatarPainter.decoding.set(dataUrl, a);
    a.then(
      (o) => {
        AvatarPainter.decoding.delete(dataUrl);
        !(o == null || AvatarPainter.isPhotoMiss(o)) &&
          (AvatarPainter.bitmaps.set(dataUrl, o),
          AvatarPainter.drawBitmap(context, o, crop));
      },
      (o) => (
        AvatarPainter.decoding.delete(dataUrl),
        AvatarPainter.photoMiss(o)
      ),
    );
  }
  static drawBitmap(
    context: CanvasRenderingContext2D,
    bitmap: ImageBitmap,
    crop: AvatarCrop,
  ) {
    let i = Math.min(bitmap.width, bitmap.height),
      a = crop.size / 2;
    context.save();
    context.beginPath();
    context.arc(crop.x + a, crop.y + a, a, 0, Math.PI * 2);
    context.clip();
    context.drawImage(
      bitmap,
      (bitmap.width - i) / 2,
      (bitmap.height - i) / 2,
      i,
      i,
      crop.x,
      crop.y,
      crop.size,
      crop.size,
    );
    context.restore();
  }
  static bitmapOf(dataUrl: string): Promise<ImageBitmap | PhotoMiss | null> {
    let t = AvatarPainter.bytesOfDataUrl(dataUrl);
    if (t == null) return Promise.resolve(null);
    if (AvatarPainter.isPhotoMiss(t)) return Promise.resolve(t);
    if (typeof createImageBitmap != "function") return Promise.resolve(null);
    let r = AvatarPainter.mimeOfDataUrl(dataUrl) ?? "image/png";
    return r === "image/svg+xml"
      ? Promise.resolve(null)
      : createImageBitmap(
          new Blob([t], {
            type: r,
          }),
        ).then(
          (i) => i,
          (i) => AvatarPainter.photoMiss(i),
        );
  }
  static bytesOfDataUrl(
    dataUrl: string,
  ): Uint8Array<ArrayBuffer> | PhotoMiss | null {
    let t = dataUrl.indexOf(",");
    if (t < 0 || t === dataUrl.length - 1) return null;
    if (dataUrl.length > AvatarPainter.PHOTO_DATA_URL_MAX_CHARS)
      return AvatarPainter.photoMiss(new Error("photo"));
    try {
      let r = atob(dataUrl.slice(t + 1)),
        i = new Uint8Array(new ArrayBuffer(r.length));
      for (let a = 0; a < r.length; a += 1) i[a] = r.charCodeAt(a);
      return i;
    } catch (r) {
      return AvatarPainter.photoMiss(r);
    }
  }
  static photoMiss(error: unknown) {
    return {
      miss: errorClass(error),
    };
  }
  static mimeOfDataUrl(dataUrl: string) {
    return /^data:([^;,]+)/.exec(dataUrl)?.[1] ?? null;
  }
  static isPhotoMiss(
    value: PhotoMiss | ImageBitmap | Uint8Array<ArrayBuffer>,
  ): value is PhotoMiss {
    return "miss" in value;
  }
  static fillStroke(
    context: CanvasRenderingContext2D,
    stroke: Stroke,
    ink: string,
  ) {
    context.save();
    context.transform(...stroke.matrix);
    context.fillStyle = ink;
    context.fill(new Path2D(stroke.d), "evenodd");
    context.restore();
  }
}
const lastAvatarFrame = new WeakMap<Document, unknown>();
export class AvatarCanvas {
  static start(document: Document) {
    let t = () => {
        let a = AvatarCanvas.canvasOf(document);
        a?.dataset.sandAvatarSource !== "photo" &&
          a?.setAttribute("data-sand-avatar", "listening");
      },
      r = () => {
        let a = AvatarCanvas.canvasOf(document);
        a?.dataset.sandAvatarSource !== "photo" &&
          a?.setAttribute("data-sand-avatar", "idle");
      },
      i = () => {
        let a = lastAvatarFrame.get(document);
        a !== void 0 && AvatarCanvas.draw(document, a);
      };
    return (
      document.addEventListener(MeetingConstants.hearEvent, t),
      document.addEventListener(MeetingConstants.idleEvent, r),
      document.addEventListener(MeetingConstants.cameraReadyEvent, i),
      {
        dispose() {
          document.removeEventListener(MeetingConstants.hearEvent, t);
          document.removeEventListener(MeetingConstants.idleEvent, r);
          document.removeEventListener(MeetingConstants.cameraReadyEvent, i);
          lastAvatarFrame.delete(document);
        },
      }
    );
  }
  static draw(document: Document, value: unknown) {
    let r = AvatarFrames.read(value);
    if (r === null) return;
    lastAvatarFrame.set(document, value);
    let i = AvatarCanvas.canvasOf(document);
    if (i === null) return;
    let a = r.kind === "photo";
    i.dataset.sandAvatarSource = a ? "photo" : "mark";
    i.dataset.sandAvatar = r.kind === "photo" ? "idle" : r.state;
    AvatarPainter.paint(i, r, avatarCrop());
  }
  static canvasOf(document: Document) {
    let t = document
        .getElementById(AudioSinks.id)
        ?.shadowRoot?.querySelectorAll("canvas"),
      r = t?.[t.length - 1];
    return r instanceof HTMLCanvasElement ? r : null;
  }
}
export class AutoJoin {
  constructor(
    displayName: string | null,
    debug: (packet: DebugPacket) => void,
  ) {
    this.displayName = displayName;
    this.debug = debug;
  }
  displayName: string | null;
  debug: (packet: DebugPacket) => void;
  static maxClicks = 5;
  previewChecked = !1;
  typed = !1;
  clicks = 0;
  step(page: MeetingPageReader) {
    if (!this.previewChecked) {
      this.previewChecked = !0;
      let a = page.previewOffButton();
      if (a !== null) {
        a.click();
        return;
      }
    }
    let t = page.nameField(),
      r = t !== null && t.value.trim().length === 0;
    if (t !== null && this.displayName !== null && !this.typed && r) {
      t.focus();
      AutoJoin.setInputValue(t, this.displayName);
      this.typed = !0;
      this.debug({
        kind: "join.typed",
      });
      return;
    }
    if (this.clicks >= AutoJoin.maxClicks) return;
    let i = page.joinButton();
    i === null ||
      (this.displayName !== null && r) ||
      (i.click(),
      (this.clicks += 1),
      this.debug({
        kind: "join.clicked",
      }));
  }
  static setInputValue(input: HTMLInputElement, value: string) {
    let r = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value",
    )?.set;
    r != null ? r.call(input, value) : (input.value = value);
    input.dispatchEvent(
      new Event("input", {
        bubbles: !0,
      }),
    );
    input.dispatchEvent(
      new Event("change", {
        bubbles: !0,
      }),
    );
  }
}
export class MeetingPageReader {
  constructor(document: Document, site: MeetingSite, selfName: string | null) {
    this.document = document;
    this.site = site;
    this.self = selfName?.trim().toLowerCase() ?? "";
  }
  document: Document;
  site: MeetingSite;
  self: string;
  probe(hasPlayback: boolean) {
    let t = this.participantEntries();
    return {
      pageLanguage: this.document.documentElement.lang,
      leaveControl:
        this.button((r) =>
          this.site.isLeaveControl(MeetingPageReader.label(r)),
        ) !== null,
      joinControl: this.joinButton() !== null,
      nameField: this.nameField() !== null,
      playback: hasPlayback,
      participantEntries: t.length,
      otherParticipants:
        this.self.length === 0 || t.length === 0
          ? null
          : t.filter((r) => this.isOtherHuman(r)).length,
    };
  }
  joinButton() {
    return this.button((e) =>
      this.site.isJoinControl(MeetingPageReader.text(e)),
    );
  }
  previewOffButton() {
    return this.button((e) =>
      this.site.isPreviewOff(MeetingPageReader.text(e)),
    );
  }
  rosterOpener() {
    let e = this.site.speakerSignal;
    return e.kind !== "roster"
      ? null
      : this.button((t) => e.openControl.test(MeetingPageReader.label(t)));
  }
  nameField(): HTMLInputElement | null {
    for (let e of this.document.querySelectorAll<HTMLInputElement>(
      "input[type='text'], input:not([type])",
    )) {
      let t = `${e.getAttribute("aria-label") ?? ""} ${e.placeholder}`;
      if (
        this.site.isNameField({
          label: t,
          id: e.id,
        }) &&
        MeetingPageReader.isVisible(e)
      )
        return e;
    }
    return null;
  }
  speakingNames(): string[] {
    let e = this.site.speakerSignal,
      t = new Set<string>(),
      r = (i: string | null | undefined) => {
        let a = this.site.participantName(i ?? "");
        a !== null && a.toLowerCase() !== this.self && t.add(a);
      };
    if (e.kind === "tile") {
      for (let i of this.document.querySelectorAll(e.tile)) {
        let a = i.querySelector(e.indicator);
        a === null ||
          !a.classList.contains(e.speakingClass) ||
          r(this.tileName(i));
      }
      return [...t];
    }
    for (let i of this.document.querySelectorAll(e.speakingIcon)) {
      let a: Element | null = i;
      for (; a !== null && a.querySelector(e.name) === null; )
        a = a.parentElement;
      r(a?.querySelector(e.name)?.textContent);
    }
    return [...t];
  }
  isOtherHuman(element: Element) {
    let t = element.textContent ?? "";
    return t.toLowerCase().includes(this.self) ? !1 : !this.site.isBotLike(t);
  }
  participantEntries() {
    let e = this.site.speakerSignal;
    return [
      ...this.document.querySelectorAll(e.kind === "tile" ? e.tile : e.name),
    ];
  }
  tileName(tile: Element) {
    for (let t of tile.querySelectorAll("*")) {
      if (t.children.length > 0 || MeetingPageReader.isIconGlyph(t)) continue;
      let r = this.site.participantName(t.textContent ?? "");
      if (r !== null) return r;
    }
    return null;
  }
  button(predicate: (element: HTMLElement) => boolean): HTMLElement | null {
    for (let t of this.document.querySelectorAll<HTMLElement>(
      "button, [role='button']",
    ))
      if (predicate(t) && MeetingPageReader.isVisible(t)) return t;
    return null;
  }
  static text(element: Element) {
    return element.textContent?.replace(/\s+/g, " ").trim() ?? "";
  }
  static label(element: Element) {
    return element.getAttribute("aria-label") ?? "";
  }
  static isVisible(element: Element) {
    let t = element.getBoundingClientRect();
    return t.width > 0 && t.height > 0;
  }
  static isIconGlyph(element: Element) {
    return (
      element.tagName === "I" ||
      /\b(?:google-symbols|material-icons)\b/.test(element.className)
    );
  }
}
export class MeetingProviders {
  static googleMeet = "meet.google.com";
  static zoom = "zoom.us";
  static names = {
    "google-meet": "Google Meet",
    zoom: "Zoom",
  };
  static providerNames = {
    GOOGLE_MEET: "Google Meet",
    ZOOM: "Zoom",
    MICROSOFT_TEAMS: "Microsoft Teams",
  };
  static siteOf(hostname: string): "google-meet" | "zoom" | null {
    let t = hostname.toLowerCase();
    return t === MeetingProviders.googleMeet
      ? "google-meet"
      : t === MeetingProviders.zoom || t.endsWith(`.${MeetingProviders.zoom}`)
        ? "zoom"
        : null;
  }
  static nameOf(url: string) {
    let t = URL.canParse(url)
      ? MeetingProviders.siteOf(new URL(url).hostname)
      : null;
    return t === null ? null : MeetingProviders.names[t];
  }
}
export class MeetingSiteRules {
  isBotLike(text: string) {
    return MeetingSiteRules.isBotName(text);
  }
  static personNameBlock =
    /^(join|leave|mute|unmute|video|chat|share|more|people|participants|host|audio|stop|start|end|meeting|invite|react|settings|microphone|camera|screen|call|waiting|admitted|guest|presenting|you|off|on|close|open)$/i;
  static roleTag = /\s*\((?:presenting|you|host|me|guest)\)\s*$/i;
  static jobTitle = /,.*$/;
  static botName = /\bbot\b|\bnotetaker\b|\bgrok\s*bot\s+agent\b|\bopencode\s+agent\b/i;
  static classifyBy(
    signals: PageSignals,
    terminalPhrases: ["denied" | "ended", string[]][],
    waitingPhrases: string[],
  ): PageStatus {
    let i = signals.bodyText.toLowerCase();
    for (let [a, o] of terminalPhrases) {
      let l = MeetingSiteRules.firstPhrase(i, o);
      if (l !== null)
        return {
          kind: a,
          detail: l,
        };
    }
    return MeetingSiteRules.firstPhrase(i, waitingPhrases) !== null
      ? {
          kind: "waiting",
        }
      : signals.hasLeaveCallButton &&
          !signals.hasJoinButton &&
          signals.otherParticipants === 0
        ? {
            kind: "alone",
          }
        : signals.hasLeaveCallButton
          ? {
              kind: "in-call",
            }
          : signals.hasAudioPlayback && !signals.hasJoinButton
            ? {
                kind: "in-call",
              }
            : {
                kind: "prejoin",
              };
  }
  static firstPhrase(text: string, phrases: string[]) {
    return phrases.find((r) => text.includes(r)) ?? null;
  }
  static personName(text: string) {
    if (
      text.length < 2 ||
      text.length > 48 ||
      /[0-9@:/_]/.test(text) ||
      MeetingSiteRules.isBotName(text)
    )
      return null;
    let t = text.split(" ").filter((r) => r.length > 0);
    return t.length === 0 ||
      t.length > 4 ||
      t.some((r) =>
        MeetingSiteRules.personNameBlock.test(r.replace(/[()]/g, "")),
      )
      ? null
      : text;
  }
  static isBotName(text: string) {
    let t = text
      .replace(/\s+/g, " ")
      .trim()
      .replace(MeetingSiteRules.roleTag, "")
      .replace(MeetingSiteRules.jobTitle, "")
      .trim();
    return t.length > 0 && MeetingSiteRules.botName.test(t);
  }
}
export class GoogleMeetSite extends MeetingSiteRules {
  speakerSignal: SpeakerSignal = {
    kind: "tile",
    tile: "[data-participant-id]",
    indicator: '[jsname="QgSmzd"]',
    speakingClass: "sxlEM",
  };
  static ended = [
    "you've left the meeting",
    "you left the meeting",
    "you were removed from the meeting",
    "the meeting has ended",
    "the call has ended",
    "return to home screen",
  ];
  static denied = [
    "denied your request",
    "you can't join this video call",
    "you can't join this call",
    "this meeting hasn't started",
    "no one responded to your request",
    "check your meeting code",
  ];
  static waiting = [
    "asking to join",
    "someone will let you in",
    "you'll join when",
    "brings you into the call",
  ];
  static landmarks = [
    ...GoogleMeetSite.denied,
    ...GoogleMeetSite.ended,
    ...GoogleMeetSite.waiting,
    "no active conference",
    "no_active_conference",
    "join now",
    "ask to join",
  ];
  landmark(text: string) {
    return MeetingSiteRules.firstPhrase(
      text.toLowerCase(),
      GoogleMeetSite.landmarks,
    );
  }
  classify(signals: PageSignals): PageStatus {
    return MeetingSiteRules.classifyBy(
      signals,
      [
        ["denied", GoogleMeetSite.denied],
        ["ended", GoogleMeetSite.ended],
      ],
      GoogleMeetSite.waiting,
    );
  }
  isJoinControl(text: string) {
    return /^(join now|ask to join|join)$/i.test(text);
  }
  isNameField(field: { label: string; id: string }) {
    return /name/i.test(field.label) && !/code/i.test(field.label);
  }
  isLeaveControl(label: string) {
    return /leave call/i.test(label);
  }
  isPreviewOff(text: string) {
    return !1;
  }
  participantName(text: string) {
    return MeetingSiteRules.personName(
      text
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\s*\((?:presenting|you)\)\s*$/i, "")
        .trim(),
    );
  }
}
export class ZoomSite extends MeetingSiteRules {
  speakerSignal: SpeakerSignal = {
    kind: "roster",
    speakingIcon: ".participants-icon__voip-speaking-icon",
    name: ".participants-item__display-name",
    openControl: /^open the participants list pane/i,
  };
  static ended = [
    "this meeting has been ended",
    "the host has ended this meeting",
    "you have left the meeting",
    "you left the meeting",
  ];
  static denied = [
    "invalid meeting id",
    "meeting id is not valid",
    "passcode is wrong",
    "the host has removed you",
    "you have been removed",
    "not allowed to join",
  ];
  static waiting = [
    "waiting for the host",
    "please wait, the meeting host will let you in",
    "the host will let you in soon",
    "host has joined. we've let them know",
  ];
  static landmarks = [
    ...ZoomSite.ended,
    ...ZoomSite.denied,
    ...ZoomSite.waiting,
    "join with computer audio",
    "your name",
  ];
  landmark(text: string) {
    return MeetingSiteRules.firstPhrase(text.toLowerCase(), ZoomSite.landmarks);
  }
  classify(signals: PageSignals): PageStatus {
    return MeetingSiteRules.classifyBy(
      signals,
      [
        ["ended", ZoomSite.ended],
        ["denied", ZoomSite.denied],
      ],
      ZoomSite.waiting,
    );
  }
  isJoinControl(text: string) {
    return /^(join|join audio|join with computer audio|computer audio)$/i.test(
      text,
    );
  }
  isNameField(field: { label: string; id: string }) {
    return (
      field.id === "input-for-name" || /your name|^name$/i.test(field.label)
    );
  }
  isLeaveControl(label: string) {
    return /^(leave|end)( meeting)?$/i.test(label);
  }
  isPreviewOff(text: string) {
    return /^stop video$/i.test(text);
  }
  participantName(text: string) {
    let t = text.replace(/\s+/g, " ").trim().split(",")[0] ?? "";
    return MeetingSiteRules.personName(
      t.replace(/\s*\((?:host|me|guest)\)\s*$/i, "").trim(),
    );
  }
}
export class MeetingSites {
  static googleMeet = new GoogleMeetSite();
  static zoom = new ZoomSite();
  static forHost(hostname: string) {
    switch (MeetingProviders.siteOf(hostname)) {
      case "google-meet":
        return MeetingSites.googleMeet;
      case "zoom":
        return MeetingSites.zoom;
      case null:
        return null;
    }
  }
}
export class PlaybackCapture {
  constructor(dependencies: PlaybackDependencies) {
    this.deps = dependencies;
  }
  deps: PlaybackDependencies;
  static framesPerChunk = 2048;
  context: AudioContext | null = null;
  seenTracks: Set<string> = new Set();
  tapped: WeakMap<
    MediaElement,
    {
      key: string;
      node: MediaStreamAudioSourceNode;
    }
  > = new WeakMap();
  tappedCount = 0;
  static createAudioContext() {
    return new AudioContext({
      sampleRate: MeetingConstants.sampleRateHz,
    });
  }
  hasPlayback() {
    return this.tappedCount > 0;
  }
  scan(document: Document) {
    for (let t of AudioSinks.media(document)) this.attach(t);
    for (let t of document.querySelectorAll<MediaElement>("audio, video"))
      this.attach(t);
  }
  attach(element: MediaElement) {
    let t = PlaybackCapture.sourceKeyOf(element),
      r = this.tapped.get(element);
    if (t === null || r?.key === t) return;
    let i = PlaybackCapture.streamOf(element);
    if (i === null) return;
    let a = i.getAudioTracks().filter((y) => y.readyState === "live");
    if (a.length === 0 || a.every((y) => this.seenTracks.has(y.id))) return;
    for (let y of a) this.seenTracks.add(y.id);
    r?.node.disconnect();
    let o = this.ensureContext(),
      l = o.createMediaStreamSource(i),
      d = o.createScriptProcessor(PlaybackCapture.framesPerChunk, 1, 1),
      g = o.createGain();
    g.gain.value = 0;
    let { lane: m, mix: M } = AudioSinks.sinkOf(element);
    d.onaudioprocess = (y) => {
      let { source: A } = AudioSinks.sinkOf(element);
      this.deps.audio({
        pcm16: PlaybackCapture.pcm16Of(y.inputBuffer.getChannelData(0)),
        lane: m ?? t,
        source: A,
        speaker: this.deps.speakerOf(A, M),
      });
    };
    l.connect(d);
    d.connect(g);
    g.connect(o.destination);
    this.tapped.set(element, {
      key: t,
      node: l,
    });
    this.tappedCount += 1;
    this.deps.debug({
      kind: r === void 0 ? "tap.attach" : "tap.retap",
      tracks: a.length,
    });
  }
  ensureContext() {
    if (this.context !== null) return this.context;
    let e = this.deps.createAudioContext();
    return (e.resume(), (this.context = e), e);
  }
  static sourceKeyOf(element: MediaElement) {
    if (element.srcObject instanceof MediaStream) {
      let t = element.srcObject
        .getAudioTracks()
        .filter((r) => r.readyState === "live")
        .map((r) => r.id);
      return t.length === 0 ? null : `stream:${t.join(",")}`;
    }
    return element.currentSrc.length > 0 ? `src:${element.currentSrc}` : null;
  }
  static streamOf(element: MediaElement) {
    return element.srcObject instanceof MediaStream
      ? element.srcObject
      : typeof element.captureStream == "function"
        ? element.captureStream()
        : null;
  }
  static pcm16Of(samples: Float32Array) {
    let t = new Int16Array(samples.length);
    for (let r = 0; r < samples.length; r += 1) {
      let i = Math.max(-1, Math.min(1, samples[r] ?? 0));
      t[r] = i < 0 ? i * 32768 : i * 32767;
    }
    return t.buffer;
  }
}
export class SpeakerWatch {
  constructor(clock: Clock) {
    this.clock = clock;
  }
  clock: Clock;
  static holdMs = 1200;
  current: string | null = null;
  lastSeenAtMs = 0;
  observe(names: string[]) {
    let t = SpeechText.sole(names);
    if (t !== null) {
      this.current = t;
      this.lastSeenAtMs = this.clock.now();
      return;
    }
    if (names.length > 1) {
      this.current = null;
      return;
    }
    this.current !== null &&
      this.clock.now() - this.lastSeenAtMs > SpeakerWatch.holdMs &&
      (this.current = null);
  }
  speaker() {
    return this.current;
  }
}
export class SourceNameLedger {
  static bindingObservations = 2;
  names: Map<string, string> = new Map();
  pending: {
    source: string;
    name: string;
    count: number;
  } | null = null;
  observe(names: string[], sources: string[]) {
    let r = new Set(sources.map((d) => this.names.get(d))),
      i = sources.filter((d) => !this.names.has(d)),
      a = names.filter((d) => !r.has(d)),
      o = i[0],
      l = a[0];
    if (i.length !== 1 || a.length !== 1 || o === void 0 || l === void 0) {
      this.pending = null;
      return;
    }
    if (
      ((this.pending?.source !== o || this.pending.name !== l) &&
        (this.pending = {
          source: o,
          name: l,
          count: 0,
        }),
      (this.pending.count += 1),
      !(this.pending.count < SourceNameLedger.bindingObservations))
    ) {
      for (let [d, g] of this.names) g === l && this.names.delete(d);
      this.names.set(o, l);
      this.pending = null;
    }
  }
  nameOf(source: string) {
    return this.names.get(source) ?? null;
  }
}
export class SpeakerTracker {
  constructor(clock: Clock, debug: (packet: DebugPacket) => void) {
    this.clock = clock;
    this.debug = debug;
    this.watch = new SpeakerWatch(clock);
  }
  clock: Clock;
  debug: (packet: DebugPacket) => void;
  static speakingLevel = 0.005;
  watch;
  ledger = new SourceNameLedger();
  announced: Map<string, string> = new Map();
  mixedLanes = !1;
  observe(page: MeetingPageReader) {
    this.mixedLanes = page.site.speakerSignal.kind === "roster";
    let t = page.speakingNames();
    this.watch.observe(t);
    let r = this.activeSources(page.document);
    this.ledger.observe(t, r);
    for (let i of r) {
      let a = this.ledger.nameOf(i);
      a !== null &&
        this.announced.get(i) !== a &&
        (this.announced.set(i, a),
        this.debug({
          kind: "source.bound",
          source: i,
        }));
    }
  }
  speakerOf(source: string | null, mixed: boolean) {
    return source !== null
      ? this.ledger.nameOf(source)
      : mixed || this.mixedLanes
        ? this.watch.speaker()
        : null;
  }
  activeSources(document: Document) {
    let t = this.clock.now(),
      r = new Set<string>();
    for (let i of AudioSinks.sinks(document))
      i.source === null ||
        i.heardAtMs === null ||
        t - i.heardAtMs > MeetingConstants.sourceRecentMs ||
        (i.level !== null && i.level < SpeakerTracker.speakingLevel) ||
        r.add(i.source);
    return [...r];
  }
}
export class MeetingController {
  constructor(dependencies: MeetingDependencies) {
    this.deps = dependencies;
    let t = dependencies.clock ?? systemClock;
    this.speakers = new SpeakerTracker(t, dependencies.sink.debug);
    this.playback = new PlaybackCapture({
      createAudioContext: dependencies.createAudioContext,
      audio: dependencies.sink.audio,
      debug: dependencies.sink.debug,
      speakerOf: (r, i) => this.speakers.speakerOf(r, i),
    });
    this.autoJoin = new AutoJoin(
      dependencies.displayName,
      dependencies.sink.debug,
    );
    this.loops = [
      createInterval({
        name: "meeting-page-tap",
        intervalMs: MeetingConstants.pagePollMs,
        clock: t,
      }).start(async () => this.pollPage()),
      createInterval({
        name: "meeting-speaker-watch",
        intervalMs: MeetingController.speakerPollMs,
        clock: t,
      }).start(async () => this.pollSpeakers()),
      createInterval({
        name: "meeting-source-stamp",
        intervalMs: MeetingConstants.sourcePollMs,
        clock: t,
      }).start(async () => this.signalPage(MeetingConstants.stampEvent)),
    ];
  }
  deps: MeetingDependencies;
  static speakerPollMs = 250;
  static isSameProbe(previous: PageProbe, next: PageProbe) {
    return (
      previous.pageLanguage === next.pageLanguage &&
      previous.leaveControl === next.leaveControl &&
      previous.joinControl === next.joinControl &&
      previous.nameField === next.nameField &&
      previous.playback === next.playback &&
      previous.participantEntries === next.participantEntries &&
      previous.otherParticipants === next.otherParticipants
    );
  }
  static isSameStatus(previous: PageStatus, next: PageStatus) {
    return previous.kind !== next.kind
      ? !1
      : "detail" in previous && "detail" in next
        ? previous.detail === next.detail
        : !0;
  }
  playback;
  speakers;
  autoJoin;
  loops;
  lastStatus: PageStatus | null = null;
  lastLandmark: string | null = null;
  lastProbe: PageProbe | null = null;
  static install(dependencies: MeetingDependencies) {
    return new MeetingController(dependencies);
  }
  dispose = () => {
    for (let e of [...this.loops].reverse()) e.dispose();
  };
  reader(): MeetingPageReader | null {
    let { document: e, displayName: t } = this.deps;
    if (e.body === null) return null;
    let r = MeetingSites.forHost(e.location?.hostname ?? "");
    return r === null ? null : new MeetingPageReader(e, r, t);
  }
  pollSpeakers() {
    let e = this.reader();
    e !== null && this.speakers.observe(e);
  }
  signalPage(eventName: string) {
    this.deps.document.dispatchEvent(new Event(eventName));
  }
  pollPage() {
    this.signalPage(MeetingConstants.wakeEvent);
    let e = this.reader();
    if (e === null) return;
    let { document: t, site: r } = e;
    this.playback.scan(t);
    let i = t.body!.innerText,
      a = r.landmark(i);
    a !== null &&
      a !== this.lastLandmark &&
      ((this.lastLandmark = a),
      this.deps.sink.debug({
        kind: "landmark",
        landmark: a,
      }));
    let o = e.probe(this.playback.hasPlayback());
    (this.lastProbe === null ||
      !MeetingController.isSameProbe(this.lastProbe, o)) &&
      ((this.lastProbe = o),
      this.deps.sink.debug({
        kind: "signals",
        probe: o,
      }));
    let l = r.classify({
      bodyText: i,
      hasLeaveCallButton: o.leaveControl,
      hasJoinButton: o.joinControl,
      hasAudioPlayback: o.playback,
      otherParticipants: o.otherParticipants,
    });
    l.kind === "prejoin" && this.autoJoin.step(e);
    (l.kind === "in-call" || l.kind === "alone") && e.rosterOpener()?.click();
    (this.lastStatus === null ||
      !MeetingController.isSameStatus(this.lastStatus, l)) &&
      ((this.lastStatus = l), this.deps.sink.page(l));
  }
}
