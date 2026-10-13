!(() => {
  try {
    const e = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
    const n = new e.Error().stack;
    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "8dd44938-254e-45c0-9b88-c594254b7e4b";
      e._sentryDebugIdIdentifier = "sentry-dbid-8dd44938-254e-45c0-9b88-c594254b7e4b";
    }
  } catch (e) {}
})();
const $s = d => {
  throw TypeError(d);
};
const ss = (d, t, e) => t.has(d) || $s(`Cannot ${e}`);
const W = (d, t, e) => {
  ss(d, t, "read from private field");
  if (e) {
    return e.call(d);
  }
  return t.get(d);
};
const St = (d, t, e) => {
  if (t.has(d)) {
    return $s("Cannot add the same private member more than once");
  }
  if (t instanceof WeakSet) {
    return t.add(d);
  }
  return t.set(d, e);
};
const ft = (d, t, e, s) => {
  ss(d, t, "write to private field");
  if (s) {
    s.call(d, e);
  } else {
    t.set(d, e);
  }
  return e;
};
const Et = (d, t, e) => {
  ss(d, t, "access private method");
  return e;
};
const zs = (PDFWorker, t, e, s) => ({
  set _(i) {
    ft(PDFWorker, t, i, e);
  },
  get _() {
    return W(PDFWorker, t, s);
  }
});
const ct = typeof process === "object" && `${process}` == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
const ds = [0.001, 0, 0, 0.001, 0, 0];
const is = 1.35;
const mt = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
};
export const AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
};
const ye = "pdfjs_internal_editor_";
export const AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
};
export const AnnotationEditorParamsType = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
};
export const PermissionFlag = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
};
const nt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
export const ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
export const AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
const Qt = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
export const VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
export const OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
};
const Me = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3
};
export const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let VerbosityLevel_WARNINGS = VerbosityLevel.WARNINGS;
function Ji(d) {
  if (Number.isInteger(d)) {
    VerbosityLevel_WARNINGS = d;
  }
}
function Zi() {
  return VerbosityLevel_WARNINGS;
}
function Ye(d) {
  if (VerbosityLevel_WARNINGS >= VerbosityLevel.INFOS) {
    console.info(`Info: ${d}`);
  }
}
function I(d) {
  if (VerbosityLevel_WARNINGS >= VerbosityLevel.WARNINGS) {
    console.warn(`Warning: ${d}`);
  }
}
function G(d) {
  throw new Error(d);
}
function B(d, t) {
  if (!d) {
    G(t);
  }
}
function tn(d) {
  switch (d?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
export function createValidAbsoluteUrl(d, t = null, e = null) {
  if (!d) {
    return null;
  }
  if (e && typeof d === "string" && (e.addDefaultProtocol && d.startsWith("www.") && d.match(/\./g)?.length >= 2 && (d = `http://${d}`), e.tryConvertEncoding)) {
    try {
      d = an(d);
    } catch {}
  }
  const s = t ? URL.parse(d, t) : URL.parse(d);
  if (tn(s)) {
    return s;
  }
  return null;
}
export function updateUrlHash(d, t, e = false) {
  const s = URL.parse(d);
  if (s) {
    s.hash = t;
    return s.href;
  }
  if (e && createValidAbsoluteUrl(d, "http://example.com")) {
    return d.split("#", 1)[0] + `${t ? `#${t}` : ""}`;
  }
  return "";
}
export function shadow(d, t, e, s = false) {
  Object.defineProperty(d, t, {
    value: e,
    enumerable: !s,
    configurable: true,
    writable: false
  });
  return e;
}
const qt = (() => {
  function t(e, s) {
    this.message = e;
    this.name = s;
  }
  t.prototype = new Error();
  t.constructor = t;
  return t;
})();
class js extends qt {
  constructor(t, e) {
    super(t, "PasswordException");
    this.code = e;
  }
}
class ns extends qt {
  constructor(t, e) {
    super(t, "UnknownErrorException");
    this.details = e;
  }
}
export class InvalidPDFException extends qt {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
export class ResponseException extends qt {
  constructor(t, e, s) {
    super(t, "ResponseException");
    this.status = e;
    this.missing = s;
  }
}
class en extends qt {
  constructor(t) {
    super(t, "FormatError");
  }
}
export class AbortException extends qt {
  constructor(t) {
    super(t, "AbortException");
  }
}
function yi(d) {
  if (typeof d !== "object" || d?.length === undefined) {
    G("Invalid argument for bytesToString");
  }
  const d_length = d.length;
  const e = 8192;
  if (d_length < e) {
    return String.fromCharCode.apply(null, d);
  }
  const s = [];
  for (let i = 0; i < d_length; i += e) {
    const n = Math.min(i + e, d_length);
    const r = d.subarray(i, n);
    s.push(String.fromCharCode.apply(null, r));
  }
  return s.join("");
}
function Se(d) {
  if (typeof d !== "string") {
    G("Invalid argument for stringToBytes");
  }
  const d_length = d.length;
  const e = new Uint8Array(d_length);
  for (let s = 0; s < d_length; ++s) {
    e[s] = d.charCodeAt(s) & 255;
  }
  return e;
}
function sn(d) {
  return String.fromCharCode(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, d & 255);
}
function nn() {
  const d = new Uint8Array(4);
  d[0] = 1;
  return new Uint32Array(d.buffer, 0, 1)[0] === 1;
}
function rn() {
  try {
    new Function("");
    return true;
  } catch {
    return false;
  }
}
export class FeatureTest {
  static get isLittleEndian() {
    return shadow(this, "isLittleEndian", nn());
  }
  static get isEvalSupported() {
    return shadow(this, "isEvalSupported", rn());
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  static get isImageDecoderSupported() {
    return shadow(this, "isImageDecoderSupported", typeof ImageDecoder !== "undefined");
  }
  static get platform() {
    const {
      platform,
      userAgent
    } = navigator;
    return shadow(this, "platform", {
      isAndroid: userAgent.includes("Android"),
      isLinux: platform.includes("Linux"),
      isMac: platform.includes("Mac"),
      isWindows: platform.includes("Win"),
      isFirefox: userAgent.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
}
const rs = Array.from(Array(256).keys(), d => d.toString(16).padStart(2, "0"));
export class Util {
  static makeHexColor(t, e, s) {
    return `#${rs[t]}${rs[e]}${rs[s]}`;
  }
  static domMatrixToTransform(t) {
    return [t.a, t.b, t.c, t.d, t.e, t.f];
  }
  static scaleMinMax(t, e) {
    let s;
    if (t[0]) {
      if (t[0] < 0) {
        s = e[0];
        e[0] = e[2];
        e[2] = s;
      }
      e[0] *= t[0];
      e[2] *= t[0];
      if (t[3] < 0) {
        s = e[1];
        e[1] = e[3];
        e[3] = s;
      }
      e[1] *= t[3];
      e[3] *= t[3];
    } else {
      s = e[0];
      e[0] = e[1];
      e[1] = s;
      s = e[2];
      e[2] = e[3];
      e[3] = s;
      if (t[1] < 0) {
        s = e[1];
        e[1] = e[3];
        e[3] = s;
      }
      e[1] *= t[1];
      e[3] *= t[1];
      if (t[2] < 0) {
        s = e[0];
        e[0] = e[2];
        e[2] = s;
      }
      e[0] *= t[2];
      e[2] *= t[2];
    }
    e[0] += t[4];
    e[1] += t[5];
    e[2] += t[4];
    e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static multiplyByDOMMatrix(t, e) {
    return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]];
  }
  static applyTransform(t, e, s = 0) {
    const i = t[s];
    const n = t[s + 1];
    t[s] = i * e[0] + n * e[2] + e[4];
    t[s + 1] = i * e[1] + n * e[3] + e[5];
  }
  static applyTransformToBezier(t, [i, n, r, a, o, l], s = 0) {
    for (let h = 0; h < 6; h += 2) {
      const c = t[s + h];
      const u = t[s + h + 1];
      t[s + h] = c * i + u * r + o;
      t[s + h + 1] = c * n + u * a + l;
    }
  }
  static applyInverseTransform(t, e) {
    const s = t[0];
    const i = t[1];
    const n = e[0] * e[3] - e[1] * e[2];
    t[0] = (s * e[3] - i * e[2] + e[2] * e[5] - e[4] * e[3]) / n;
    t[1] = (-s * e[1] + i * e[0] + e[4] * e[1] - e[5] * e[0]) / n;
  }
  static axialAlignedBoundingBox([h, c, u, f], [i, n, r, a, o, l], s) {
    let g = i * h + o;
    let p = g;
    let b = i * u + o;
    let m = b;
    let y = a * c + l;
    let A = y;
    let w = a * f + l;
    let v = w;
    if (n !== 0 || r !== 0) {
      const _ = n * h;
      const S = n * u;
      const E = r * c;
      const C = r * f;
      g += E;
      m += E;
      b += C;
      p += C;
      y += _;
      v += _;
      w += S;
      A += S;
    }
    s[0] = Math.min(s[0], g, b, p, m);
    s[1] = Math.min(s[1], y, w, A, v);
    s[2] = Math.max(s[2], g, b, p, m);
    s[3] = Math.max(s[3], y, w, A, v);
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale([s, i, n, r], e) {
    const a = s ** 2 + i ** 2;
    const o = s * n + i * r;
    const l = n ** 2 + r ** 2;
    const h = (a + l) / 2;
    const c = Math.sqrt(h ** 2 - (a * l - o ** 2));
    e[0] = Math.sqrt(h + c || 1);
    e[1] = Math.sqrt(h - c || 1);
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    if (t[0] > t[2]) {
      e[0] = t[2];
      e[2] = t[0];
    }
    if (t[1] > t[3]) {
      e[1] = t[3];
      e[3] = t[1];
    }
    return e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2]));
    const i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i) {
      return null;
    }
    const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3]));
    const r = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    if (n > r) {
      return null;
    }
    return [s, n, i, r];
  }
  static pointBoundingBox(t, e, s) {
    s[0] = Math.min(s[0], t);
    s[1] = Math.min(s[1], e);
    s[2] = Math.max(s[2], t);
    s[3] = Math.max(s[3], e);
  }
  static rectBoundingBox(t, e, s, i, n) {
    n[0] = Math.min(n[0], t, s);
    n[1] = Math.min(n[1], e, i);
    n[2] = Math.max(n[2], t, s);
    n[3] = Math.max(n[3], e, i);
  }
  static #t(t, e, s, i, n, r, a, o, l, h) {
    if (l <= 0 || l >= 1) {
      return;
    }
    const c = 1 - l;
    const u = l * l;
    const f = u * l;
    const g = c * (c * (c * t + 3 * l * e) + 3 * u * s) + f * i;
    const p = c * (c * (c * n + 3 * l * r) + 3 * u * a) + f * o;
    h[0] = Math.min(h[0], g);
    h[1] = Math.min(h[1], p);
    h[2] = Math.max(h[2], g);
    h[3] = Math.max(h[3], p);
  }
  static #e(t, e, s, i, n, r, a, o, l, h, c, u) {
    if (Math.abs(l) < 1e-12) {
      if (Math.abs(h) >= 1e-12) {
        this.#t(t, e, s, i, n, r, a, o, -c / h, u);
      }
      return;
    }
    const f = h ** 2 - 4 * c * l;
    if (f < 0) {
      return;
    }
    const g = Math.sqrt(f);
    const p = 2 * l;
    this.#t(t, e, s, i, n, r, a, o, (-h + g) / p, u);
    this.#t(t, e, s, i, n, r, a, o, (-h - g) / p, u);
  }
  static bezierBoundingBox(t, e, s, i, n, r, a, o, l) {
    l[0] = Math.min(l[0], t, a);
    l[1] = Math.min(l[1], e, o);
    l[2] = Math.max(l[2], t, a);
    l[3] = Math.max(l[3], e, o);
    this.#e(t, s, n, a, e, i, r, o, 3 * (-t + 3 * (s - n) + a), 6 * (t - 2 * s + n), 3 * (s - t), l);
    this.#e(t, s, n, a, e, i, r, o, 3 * (-e + 3 * (i - r) + o), 6 * (e - 2 * i + r), 3 * (i - e), l);
  }
}
function an(d) {
  return decodeURIComponent(escape(d));
}
let as = null;
let Gs = null;
export function normalizeUnicode(d) {
  if (!as) {
    as = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    Gs = new Map([["ﬅ", "ſt"]]);
  }
  return d.replaceAll(as, (t, e, s) => {
    if (e) {
      return e.normalize("NFKC");
    }
    return Gs.get(s);
  });
}
export function getUuid() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const d = new Uint8Array(32);
  crypto.getRandomValues(d);
  return yi(d);
}
const Es = "pdfjs_internal_id_";
function ln(d, t, e) {
  if (!Array.isArray(e) || e.length < 2) {
    return false;
  }
  const [s, i, ...n] = e;
  if (!d(s) && !Number.isInteger(s) || !t(i)) {
    return false;
  }
  const n_length = n.length;
  let a = true;
  switch (i.name) {
    case "XYZ":
      if (n_length < 2 || n_length > 3) {
        return false;
      }
      break;
    case "Fit":
    case "FitB":
      return n_length === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (n_length > 1) {
        return false;
      }
      break;
    case "FitR":
      if (n_length !== 4) {
        return false;
      }
      a = false;
      break;
    default:
      return false;
  }
  for (const o of n) {
    if (!(typeof o === "number" || a && o === null)) {
      return false;
    }
  }
  return true;
}
export function MathClamp(d, t, e) {
  return Math.min(Math.max(d, t), e);
}
function wi(d) {
  if (Uint8Array.prototype.toBase64) {
    return d.toBase64();
  }
  return btoa(yi(d));
}
function hn(d) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(d);
  }
  return Se(atob(d));
}
if (typeof Promise.try !== "function") {
  Promise.try = (d, ...t) => new Promise(resolve => {
    resolve(d(...t));
  });
}
if (typeof Math.sumPrecise !== "function") {
  Math.sumPrecise = d => d.reduce((acc, item) => acc + item, 0);
}
class we {
  static textContent(t) {
    const items = [];
    const s = {
      items,
      styles: Object.create(null)
    };
    function i(n) {
      if (!n) {
        return;
      }
      let r = null;
      const n_name = n.name;
      if (n_name === "#text") {
        r = n.value;
      } else if (we.shouldBuildText(n_name)) {
        if (n?.attributes?.textContent) {
          r = n.attributes.textContent;
        } else if (n.value) {
          r = n.value;
        }
      } else {
        return;
      }
      if (r !== null) {
        items.push({
          str: r
        });
      }
      if (n.children) {
        for (const o of n.children) {
          i(o);
        }
      }
    }
    i(t);
    return s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
export class XfaLayer {
  static setupStorage(t, e, s, i, n) {
    const r = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (r.value !== null) {
          t.textContent = r.value;
        }
        if (n === "print") {
          break;
        }
        t.addEventListener("input", a => {
          i.setValue(e, {
            value: a.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (r.value === s.attributes.xfaOn) {
            t.setAttribute("checked", true);
          } else if (r.value === s.attributes.xfaOff) {
            t.removeAttribute("checked");
          }
          if (n === "print") {
            break;
          }
          t.addEventListener("change", a => {
            i.setValue(e, {
              value: a.target.checked ? a.target.getAttribute("xfaOn") : a.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (r.value !== null) {
            t.setAttribute("value", r.value);
          }
          if (n === "print") {
            break;
          }
          t.addEventListener("input", a => {
            i.setValue(e, {
              value: a.target.value
            });
          });
        }
        break;
      case "select":
        if (r.value !== null) {
          t.setAttribute("value", r.value);
          for (const a of s.children) {
            if (a.attributes.value === r.value) {
              a.attributes.selected = true;
            } else {
              a.attributes.hasOwnProperty("selected") && delete a.attributes.selected;
            }
          }
        }
        t.addEventListener("input", a => {
          const options = a.target.options;
          const l = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
          i.setValue(e, {
            value: l
          });
        });
        break;
    }
  }
  static setAttributes({
    html,
    element,
    storage = null,
    intent,
    linkService
  }) {
    const {
      attributes
    } = element;
    const a = html instanceof HTMLAnchorElement;
    if (attributes.type === "radio") {
      attributes.name = `${attributes.name}-${intent}`;
    }
    for (const [o, l] of Object.entries(attributes)) {
      if (l != null) {
        switch (o) {
          case "class":
            if (l.length) {
              html.setAttribute(o, l.join(" "));
            }
            break;
          case "dataId":
            break;
          case "id":
            html.setAttribute("data-element-id", l);
            break;
          case "style":
            Object.assign(html.style, l);
            break;
          case "textContent":
            html.textContent = l;
            break;
          default:
            if (!a || o !== "href" && o !== "newWindow") {
              html.setAttribute(o, l);
            }
        }
      }
    }
    if (a) {
      linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
    }
    if (storage && attributes.dataId) {
      this.setupStorage(html, attributes.dataId, element, storage);
    }
  }
  static render(t) {
    const {
      annotationStorage,
      linkService,
      xfaHtml
    } = t;
    const intent = t.intent || "display";
    const r = document.createElement(xfaHtml.name);
    if (xfaHtml.attributes) {
      this.setAttributes({
        html: r,
        element: xfaHtml,
        intent,
        linkService
      });
    }
    const a = intent !== "richText";
    const t_div = t.div;
    t_div.append(r);
    if (t.viewport) {
      const c = `matrix(${t.viewport.transform.join(",")})`;
      t_div.style.transform = c;
    }
    if (a) {
      t_div.setAttribute("class", "xfaLayer xfaFont");
    }
    const textDivs = [];
    if (xfaHtml.children.length === 0) {
      if (xfaHtml.value) {
        const c = document.createTextNode(xfaHtml.value);
        r.append(c);
        if (a && we.shouldBuildText(xfaHtml.name)) {
          textDivs.push(c);
        }
      }
      return {
        textDivs
      };
    }
    const h = [[xfaHtml, -1, r]];
    while (h.length > 0) {
      const [c, u, f] = h.at(-1);
      if (u + 1 === c.children.length) {
        h.pop();
        continue;
      }
      const element = c.children[++h.at(-1)[1]];
      if (element === null) {
        continue;
      }
      const {
        name
      } = element;
      if (name === "#text") {
        const m = document.createTextNode(element.value);
        textDivs.push(m);
        f.append(m);
        continue;
      }
      const b = element?.attributes?.xmlns ? document.createElementNS(element.attributes.xmlns, name) : document.createElement(name);
      f.append(b);
      if (element.attributes) {
        this.setAttributes({
          html: b,
          element,
          storage: annotationStorage,
          intent,
          linkService
        });
      }
      if (element.children?.length > 0) {
        h.push([element, -1, b]);
      } else if (element.value) {
        const m = document.createTextNode(element.value);
        if (a && we.shouldBuildText(name)) {
          textDivs.push(m);
        }
        b.append(m);
      }
    }
    for (const c of t_div.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
      c.setAttribute("readOnly", true);
    }
    return {
      textDivs
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e;
    t.div.hidden = false;
  }
}
const Rt = "http://www.w3.org/2000/svg";
export class PixelsPerInch {
  static CSS = 96;
  static PDF = 72;
  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
}
export async function fetchData(d, t = "text") {
  if (fe(d, document.baseURI)) {
    const e = await fetch(d);
    if (!e.ok) {
      throw new Error(e.statusText);
    }
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((resolve, reject) => {
    const i = new XMLHttpRequest();
    i.open("GET", d, true);
    i.responseType = t;
    i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              resolve(i.response);
              return;
          }
          resolve(i.responseText);
          return;
        }
        reject(new Error(i.statusText));
      }
    };
    i.send(null);
  });
}
class Ce {
  constructor({
    viewBox,
    userUnit,
    scale,
    rotation,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  }) {
    this.viewBox = viewBox;
    this.userUnit = userUnit;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    scale *= userUnit;
    const o = (viewBox[2] + viewBox[0]) / 2;
    const l = (viewBox[3] + viewBox[1]) / 2;
    let h;
    let c;
    let u;
    let f;
    rotation %= 360;
    if (rotation < 0) {
      rotation += 360;
    }
    switch (rotation) {
      case 180:
        h = -1;
        c = 0;
        u = 0;
        f = 1;
        break;
      case 90:
        h = 0;
        c = 1;
        u = 1;
        f = 0;
        break;
      case 270:
        h = 0;
        c = -1;
        u = -1;
        f = 0;
        break;
      case 0:
        h = 1;
        c = 0;
        u = 0;
        f = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    if (dontFlip) {
      u = -u;
      f = -f;
    }
    let g;
    let p;
    let b;
    let m;
    if (h === 0) {
      g = Math.abs(l - viewBox[1]) * scale + offsetX;
      p = Math.abs(o - viewBox[0]) * scale + offsetY;
      b = (viewBox[3] - viewBox[1]) * scale;
      m = (viewBox[2] - viewBox[0]) * scale;
    } else {
      g = Math.abs(o - viewBox[0]) * scale + offsetX;
      p = Math.abs(l - viewBox[1]) * scale + offsetY;
      b = (viewBox[2] - viewBox[0]) * scale;
      m = (viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [h * scale, c * scale, u * scale, f * scale, g - h * scale * o - u * scale * l, p - c * scale * o - f * scale * l];
    this.width = b;
    this.height = m;
  }
  get rawDims() {
    const viewBox = this.viewBox;
    return shadow(this, "rawDims", {
      pageWidth: viewBox[2] - viewBox[0],
      pageHeight: viewBox[3] - viewBox[1],
      pageX: viewBox[0],
      pageY: viewBox[1]
    });
  }
  clone({
    scale = this.scale,
    rotation = this.rotation,
    offsetX = this.offsetX,
    offsetY = this.offsetY,
    dontFlip = false
  } = {}) {
    return new Ce({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  convertToViewportPoint(t, e) {
    const s = [t, e];
    Util.applyTransform(s, this.transform);
    return s;
  }
  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    Util.applyTransform(e, this.transform);
    const s = [t[2], t[3]];
    Util.applyTransform(s, this.transform);
    return [e[0], e[1], s[0], s[1]];
  }
  convertToPdfPoint(t, e) {
    const s = [t, e];
    Util.applyInverseTransform(s, this.transform);
    return s;
  }
}
export class RenderingCancelledException extends qt {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException");
    this.extraDelay = e;
  }
}
export function isDataScheme(d) {
  const d_length = d.length;
  let e = 0;
  while (e < d_length && d[e].trim() === "") {
    e++;
  }
  return d.substring(e, e + 5).toLowerCase() === "data:";
}
export function isPdfFile(d) {
  return typeof d === "string" && /\.pdf$/i.test(d);
}
export function getFilenameFromUrl(d) {
  [d] = d.split(/[#?]/, 1);
  return d.substring(d.lastIndexOf("/") + 1);
}
export function getPdfFilenameFromUrl(d, t = "document.pdf") {
  if (typeof d !== "string") {
    return t;
  }
  if (isDataScheme(d)) {
    I('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
    return t;
  }
  const s = (a => {
    try {
      return new URL(a);
    } catch {
      try {
        return new URL(decodeURIComponent(a));
      } catch {
        try {
          return new URL(a, "https://foo.bar");
        } catch {
          try {
            return new URL(decodeURIComponent(a), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  })(d);
  if (!s) {
    return t;
  }
  const i = a => {
    try {
      let o = decodeURIComponent(a);
      if (o.includes("/")) {
        o = o.split("/").at(-1);
        if (o.test(/^\.pdf$/i)) {
          return o;
        }
        return a;
      }
      return o;
    } catch {
      return a;
    }
  };
  const n = /\.pdf$/i;
  const r = s.pathname.split("/").at(-1);
  if (n.test(r)) {
    return i(r);
  }
  if (s.searchParams.size > 0) {
    const a = Array.from(s.searchParams.values()).reverse();
    for (const l of a) {
      if (n.test(l)) {
        return i(l);
      }
    }
    const o = Array.from(s.searchParams.keys()).reverse();
    for (const l of o) {
      if (n.test(l)) {
        return i(l);
      }
    }
  }
  if (s.hash) {
    const o = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(s.hash);
    if (o) {
      return i(o[0]);
    }
  }
  return t;
}
class Vs {
  started = Object.create(null);
  times = [];
  time(t) {
    if (t in this.started) {
      I(`Timer is already running for ${t}`);
    }
    this.started[t] = Date.now();
  }
  timeEnd(t) {
    if (!(t in this.started)) {
      I(`Timer has not been started for ${t}`);
    }
    this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    });
    delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name
    } of this.times) {
      e = Math.max(name.length, e);
    }
    for (const {
      name,
      start,
      end
    } of this.times) {
      t.push(`${name.padEnd(e)} ${end - start}ms
`);
    }
    return t.join("");
  }
}
function fe(d, t) {
  const e = t ? URL.parse(d, t) : URL.parse(d);
  return e?.protocol === "http:" || e?.protocol === "https:";
}
export function noContextMenu(d) {
  d.preventDefault();
}
export function stopEvent(d) {
  d.preventDefault();
  d.stopPropagation();
}
function un(d) {
  console.log(`Deprecated API usage: ${d}`);
}
export class PDFDateString {
  static #t;
  static toDateObject(t) {
    if (t instanceof Date) {
      return t;
    }
    if (!t || typeof t !== "string") {
      return null;
    }
    this.#t ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
    const e = this.#t.exec(t);
    if (!e) {
      return null;
    }
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let n = parseInt(e[3], 10);
    n = n >= 1 && n <= 31 ? n : 1;
    let r = parseInt(e[4], 10);
    r = r >= 0 && r <= 23 ? r : 0;
    let a = parseInt(e[5], 10);
    a = a >= 0 && a <= 59 ? a : 0;
    let o = parseInt(e[6], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    const l = e[7] || "Z";
    let h = parseInt(e[8], 10);
    h = h >= 0 && h <= 23 ? h : 0;
    let c = parseInt(e[9], 10) || 0;
    c = c >= 0 && c <= 59 ? c : 0;
    if (l === "-") {
      r += h;
      a += c;
    } else if (l === "+") {
      r -= h;
      a -= c;
    }
    return new Date(Date.UTC(s, i, n, r, a, o));
  }
}
export function getXfaPageViewport(d, {
  scale = 1,
  rotation = 0
}) {
  const {
    width,
    height
  } = d.attributes.style;
  const viewBox = [0, 0, parseInt(width), parseInt(height)];
  return new Ce({
    viewBox,
    userUnit: 1,
    scale,
    rotation
  });
}
export function getRGB(d) {
  if (d.startsWith("#")) {
    const t = parseInt(d.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  if (d.startsWith("rgb(")) {
    return d.slice(4, -1).split(",").map(t => parseInt(t));
  }
  if (d.startsWith("rgba(")) {
    return d.slice(5, -1).split(",").map(t => parseInt(t)).slice(0, 3);
  }
  I(`Not a valid color format: "${d}"`);
  return [0, 0, 0];
}
function pn(d) {
  const t = document.createElement("span");
  t.style.visibility = "hidden";
  t.style.colorScheme = "only light";
  document.body.append(t);
  for (const e of d.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    d.set(e, getRGB(s));
  }
  t.remove();
}
function Y(d) {
  const {
    a,
    b,
    c,
    d: d_1,
    e: e_1,
    f
  } = d.getTransform();
  return [a, b, c, d_1, e_1, f];
}
function Ct(d) {
  const {
    a,
    b,
    c,
    d: d_1,
    e: e_1,
    f
  } = d.getTransform().invertSelf();
  return [a, b, c, d_1, e_1, f];
}
export function setLayerDimensions(d, t, e = false, s = true) {
  if (t instanceof Ce) {
    const {
      pageWidth,
      pageHeight
    } = t.rawDims;
    const {
      style
    } = d;
    const a = FeatureTest.isCSSRoundSupported;
    const o = `var(--total-scale-factor) * ${pageWidth}px`;
    const l = `var(--total-scale-factor) * ${pageHeight}px`;
    const h = a ? `round(down, ${o}, var(--scale-round-x))` : `calc(${o})`;
    const c = a ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
    if (!e || t.rotation % 180 === 0) {
      style.width = h;
      style.height = c;
    } else {
      style.width = c;
      style.height = h;
    }
  }
  if (s) {
    d.setAttribute("data-main-rotation", t.rotation);
  }
}
export class OutputScale {
  constructor() {
    const {
      pixelRatio
    } = OutputScale;
    this.sx = pixelRatio;
    this.sy = pixelRatio;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t, e, s, i, n = -1) {
    let r = Infinity;
    let a = Infinity;
    let o = Infinity;
    s = OutputScale.capPixels(s, n);
    if (s > 0) {
      r = Math.sqrt(s / (t * e));
    }
    if (i !== -1) {
      a = i / t;
      o = i / e;
    }
    const l = Math.min(r, a, o);
    if (this.sx > l || this.sy > l) {
      this.sx = l;
      this.sy = l;
      return true;
    }
    return false;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t, e) {
    if (e >= 0) {
      const s = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
      if (t > 0) {
        return Math.min(t, s);
      }
      return s;
    }
    return t;
  }
}
export const SupportedImageMimeTypes = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class gn {
  static get isDarkMode() {
    return shadow(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
  }
}
export class CSSConstants {
  static get commentForegroundColor() {
    const t = document.createElement("span");
    t.classList.add("comment", "sidebar");
    const {
      style
    } = t;
    style.width = style.height = "0";
    style.display = "none";
    style.color = "var(--comment-fg-color)";
    document.body.append(t);
    const {
      color
    } = window.getComputedStyle(t);
    t.remove();
    return shadow(this, "commentForegroundColor", getRGB(color));
  }
}
export function applyOpacity(d, t, e, s) {
  s = Math.min(Math.max(s ?? 1, 0), 1);
  const i = 255 * (1 - s);
  d = Math.round(d * s + i);
  t = Math.round(t * s + i);
  e = Math.round(e * s + i);
  return [d, t, e];
}
function Ws(d, t) {
  const e = d[0] / 255;
  const s = d[1] / 255;
  const i = d[2] / 255;
  const n = Math.max(e, s, i);
  const r = Math.min(e, s, i);
  const a = (n + r) / 2;
  if (n === r) {
    t[0] = t[1] = 0;
  } else {
    const o = n - r;
    t[1] = a < 0.5 ? o / (n + r) : o / (2 - n - r);
    switch (n) {
      case e:
        t[0] = ((s - i) / o + (s < i ? 6 : 0)) * 60;
        break;
      case s:
        t[0] = ((i - e) / o + 2) * 60;
        break;
      case i:
        t[0] = ((e - s) / o + 4) * 60;
        break;
    }
  }
  t[2] = a;
}
function gs([e, s, i], t) {
  const n = (1 - Math.abs(2 * i - 1)) * s;
  const r = n * (1 - Math.abs(e / 60 % 2 - 1));
  const a = i - n / 2;
  switch (Math.floor(e / 60)) {
    case 0:
      t[0] = n + a;
      t[1] = r + a;
      t[2] = a;
      break;
    case 1:
      t[0] = r + a;
      t[1] = n + a;
      t[2] = a;
      break;
    case 2:
      t[0] = a;
      t[1] = n + a;
      t[2] = r + a;
      break;
    case 3:
      t[0] = a;
      t[1] = r + a;
      t[2] = n + a;
      break;
    case 4:
      t[0] = r + a;
      t[1] = a;
      t[2] = n + a;
      break;
    case 5:
    case 6:
      t[0] = n + a;
      t[1] = a;
      t[2] = r + a;
      break;
  }
}
function Xs(d) {
  if (d <= 0.03928) {
    return d / 12.92;
  }
  return ((d + 0.055) / 1.055) ** 2.4;
}
function qs(d, t, e) {
  gs(d, e);
  e.map(Xs);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  gs(t, e);
  e.map(Xs);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  if (s > i) {
    return (s + 0.05) / (i + 0.05);
  }
  return (i + 0.05) / (s + 0.05);
}
const Ys = new Map();
export function findContrastColor(d, t) {
  const e = d[0] + d[1] * 256 + d[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let s = Ys.get(e);
  if (s) {
    return s;
  }
  const i = new Float32Array(9);
  const n = i.subarray(0, 3);
  const r = i.subarray(3, 6);
  Ws(d, r);
  const a = i.subarray(6, 9);
  Ws(t, a);
  const o = a[2] < 0.5;
  const l = o ? 12 : 4.5;
  r[2] = o ? Math.sqrt(r[2]) : 1 - Math.sqrt(1 - r[2]);
  if (qs(r, a, n) < l) {
    let h;
    let c;
    if (o) {
      h = r[2];
      c = 1;
    } else {
      h = 0;
      c = r[2];
    }
    const u = 0.005;
    while (c - h > u) {
      const f = r[2] = (h + c) / 2;
      if (o === qs(r, a, n) < l) {
        h = f;
      } else {
        c = f;
      }
    }
    r[2] = o ? c : h;
  }
  gs(r, n);
  s = Util.makeHexColor(Math.round(n[0] * 255), Math.round(n[1] * 255), Math.round(n[2] * 255));
  Ys.set(e, s);
  return s;
}
export function renderRichText({
  html,
  dir,
  className
}, s) {
  const div = document.createDocumentFragment();
  if (typeof html === "string") {
    const n = document.createElement("p");
    n.dir = dir || "auto";
    const r = html.split(/(?:\r\n?|\n)/);
    for (let a = 0, o = r.length; a < o; ++a) {
      const l = r[a];
      n.append(document.createTextNode(l));
      if (a < o - 1) {
        n.append(document.createElement("br"));
      }
    }
    div.append(n);
  } else {
    XfaLayer.render({
      xfaHtml: html,
      div,
      intent: "richText"
    });
  }
  div.firstChild.classList.add("richText", className);
  s.append(div);
}
class me {
  #t = null;
  #e = null;
  #i;
  #s = null;
  #a = null;
  #n = null;
  #r = null;
  #o = null;
  static #h = null;
  constructor(t) {
    this.#i = t;
    me.#h ||= Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    });
  }
  render() {
    const t = this.#t = document.createElement("div");
    t.classList.add("editToolbar", "hidden");
    t.setAttribute("role", "toolbar");
    const _signal = this.#i._uiManager._signal;
    if (_signal instanceof AbortSignal && !_signal.aborted) {
      t.addEventListener("contextmenu", noContextMenu, {
        signal: _signal
      });
      t.addEventListener("pointerdown", me.#l, {
        signal: _signal
      });
    }
    const s = this.#s = document.createElement("div");
    s.className = "buttons";
    t.append(s);
    const toolbarPosition = this.#i.toolbarPosition;
    if (toolbarPosition) {
      const {
        style
      } = t;
      const r = this.#i._uiManager.direction === "ltr" ? 1 - toolbarPosition[0] : toolbarPosition[0];
      style.insetInlineEnd = `${100 * r}%`;
      style.top = `calc(${100 * toolbarPosition[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return this.#t;
  }
  static #l(t) {
    t.stopPropagation();
  }
  #u(t) {
    this.#i._focusEventsAllowed = false;
    stopEvent(t);
  }
  #d(t) {
    this.#i._focusEventsAllowed = true;
    stopEvent(t);
  }
  #f(t) {
    const _signal = this.#i._uiManager._signal;
    if (!(_signal instanceof AbortSignal) || _signal.aborted) {
      return false;
    }
    t.addEventListener("focusin", this.#u.bind(this), {
      capture: true,
      signal: _signal
    });
    t.addEventListener("focusout", this.#d.bind(this), {
      capture: true,
      signal: _signal
    });
    t.addEventListener("contextmenu", noContextMenu, {
      signal: _signal
    });
    return true;
  }
  hide() {
    this.#t.classList.add("hidden");
    this.#e?.hideDropdown();
  }
  show() {
    this.#t.classList.remove("hidden");
    this.#a?.shown();
    this.#n?.shown();
  }
  addDeleteButton() {
    const {
      editorType,
      _uiManager
    } = this.#i;
    const s = document.createElement("button");
    s.classList.add("basic", "deleteButton");
    s.tabIndex = 0;
    s.setAttribute("data-l10n-id", me.#h[editorType]);
    if (this.#f(s)) {
      s.addEventListener("click", i => {
        _uiManager.delete();
      }, {
        signal: _uiManager._signal
      });
    }
    this.#s.append(s);
  }
  get #m() {
    const t = document.createElement("div");
    t.className = "divider";
    return t;
  }
  async addAltText(t) {
    const e = await t.render();
    this.#f(e);
    this.#s.append(e, this.#m);
    this.#a = t;
  }
  addComment(t, e = null) {
    if (this.#n) {
      return;
    }
    const s = t.renderForToolbar();
    if (!s) {
      return;
    }
    this.#f(s);
    const i = this.#r = this.#m;
    if (e) {
      this.#s.insertBefore(s, e);
      this.#s.insertBefore(i, e);
    } else {
      this.#s.append(s, i);
    }
    this.#n = t;
    t.toolbar = this;
  }
  addColorPicker(t) {
    if (this.#e) {
      return;
    }
    this.#e = t;
    const e = t.renderButton();
    this.#f(e);
    this.#s.append(e, this.#m);
  }
  async addEditSignatureButton(t) {
    const e = this.#o = await t.renderEditButton(this.#i);
    this.#f(e);
    this.#s.append(e, this.#m);
  }
  removeButton(t) {
    if (t === "comment") {
      this.#n?.removeToolbarCommentButton();
      this.#n = null;
      this.#r?.remove();
      this.#r = null;
    }
  }
  async addButton(t, e) {
    switch (t) {
      case "colorPicker":
        this.addColorPicker(e);
        break;
      case "altText":
        await this.addAltText(e);
        break;
      case "editSignature":
        await this.addEditSignatureButton(e);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        this.addComment(e);
        break;
    }
  }
  async addButtonBefore(t, e, s) {
    const i = this.#s.querySelector(s);
    if (i && t === "comment") {
      this.addComment(e, i);
    }
  }
  updateEditSignatureButton(t) {
    if (this.#o) {
      this.#o.title = t;
    }
  }
  remove() {
    this.#t.remove();
    this.#e?.destroy();
    this.#e = null;
  }
}
class An {
  #t = null;
  #e = null;
  #i;
  constructor(t) {
    this.#i = t;
  }
  #s() {
    const t = this.#e = document.createElement("div");
    t.className = "editToolbar";
    t.setAttribute("role", "toolbar");
    const _signal = this.#i._signal;
    if (_signal instanceof AbortSignal && !_signal.aborted) {
      t.addEventListener("contextmenu", noContextMenu, {
        signal: _signal
      });
    }
    const s = this.#t = document.createElement("div");
    s.className = "buttons";
    t.append(s);
    if (this.#i.hasCommentManager()) {
      this.#n("commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
        this.#i.commentSelection("floating_button");
      });
    }
    this.#n("highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
      this.#i.highlightSelection("floating_button");
    });
    return t;
  }
  #a(t, e) {
    let s = 0;
    let i = 0;
    for (const n of t) {
      const r = n.y + n.height;
      if (r < s) {
        continue;
      }
      const a = n.x + (e ? n.width : 0);
      if (r > s) {
        i = a;
        s = r;
        continue;
      }
      e ? a > i && (i = a) : a < i && (i = a);
    }
    return [e ? 1 - i : i, s];
  }
  show(t, e, s) {
    const [i, n] = this.#a(e, s);
    const {
      style
    } = this.#e ||= this.#s();
    t.append(this.#e);
    style.insetInlineEnd = `${100 * i}%`;
    style.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    this.#e.remove();
  }
  #n(t, e, s, i) {
    const n = document.createElement("button");
    n.classList.add("basic", t);
    n.tabIndex = 0;
    n.setAttribute("data-l10n-id", e);
    const r = document.createElement("span");
    n.append(r);
    r.className = "visuallyHidden";
    r.setAttribute("data-l10n-id", s);
    const _signal = this.#i._signal;
    if (_signal instanceof AbortSignal && !_signal.aborted) {
      n.addEventListener("contextmenu", noContextMenu, {
        signal: _signal
      });
      n.addEventListener("click", i, {
        signal: _signal
      });
    }
    this.#t.append(n);
  }
}
function Si(d, t, e) {
  for (const s of e) {
    t.addEventListener(s, d[s].bind(d));
  }
}
class wn {
  #t = 0;
  get id() {
    return `${ye}${this.#t++}`;
  }
}
class Ts {
  #t = getUuid();
  #e = 0;
  #i = null;
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
    const s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: true
    });
    const i = new Image();
    i.src = t;
    const n = i.decode().then(() => {
      s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3);
      return new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
    });
    return shadow(this, "_isSVGFittingCanvas", n);
  }
  async #s(t, e) {
    this.#i ||= new Map();
    let s = this.#i.get(t);
    if (s === null) {
      return null;
    }
    if (s?.bitmap) {
      s.refCounter += 1;
      return s;
    }
    try {
      s ||= {
        bitmap: null,
        id: `image_${this.#t}_${this.#e++}`,
        refCounter: 0,
        isSvg: false
      };
      let i;
      if (typeof e === "string") {
        s.url = e;
        i = await fetchData(e, "blob");
      } else if (e instanceof File) {
        i = s.file = e;
      } else if (e instanceof Blob) {
        i = e;
      }
      if (i.type === "image/svg+xml") {
        const n = Ts._isSVGFittingCanvas;
        const r = new FileReader();
        const a = new Image();
        const o = new Promise((resolve, reject) => {
          a.onload = () => {
            s.bitmap = a;
            s.isSvg = true;
            resolve();
          };
          r.onload = async () => {
            const c = s.svgUrl = r.result;
            a.src = (await n) ? `${c}#svgView(preserveAspectRatio(none))` : c;
          };
          a.onerror = r.onerror = reject;
        });
        r.readAsDataURL(i);
        await o;
      } else {
        s.bitmap = await createImageBitmap(i);
      }
      s.refCounter = 1;
    } catch (error) {
      I(error);
      s = null;
    }
    this.#i.set(t, s);
    if (s) {
      this.#i.set(s.id, s);
    }
    return s;
  }
  async getFromFile(t) {
    const {
      lastModified,
      name,
      size,
      type
    } = t;
    return this.#s(`${lastModified}_${name}_${size}_${type}`, t);
  }
  async getFromUrl(t) {
    return this.#s(t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return this.#s(t, s);
  }
  async getFromId(t) {
    this.#i ||= new Map();
    const e = this.#i.get(t);
    if (!e) {
      return null;
    }
    if (e.bitmap) {
      e.refCounter += 1;
      return e;
    }
    if (e.file) {
      return this.getFromFile(e.file);
    }
    if (e.blobPromise) {
      const {
        blobPromise
      } = e;
      delete e.blobPromise;
      return this.getFromBlob(e.id, blobPromise);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    this.#i ||= new Map();
    let s = this.#i.get(t);
    if (s?.bitmap) {
      s.refCounter += 1;
      return s;
    }
    const i = new OffscreenCanvas(e.width, e.height);
    i.getContext("2d").drawImage(e, 0, 0);
    s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${this.#t}_${this.#e++}`,
      refCounter: 1,
      isSvg: false
    };
    this.#i.set(t, s);
    this.#i.set(s.id, s);
    return s;
  }
  getSvgUrl(t) {
    const e = this.#i.get(t);
    if (e?.isSvg) {
      return e.svgUrl;
    }
    return null;
  }
  deleteId(t) {
    this.#i ||= new Map();
    const e = this.#i.get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0)) {
      return;
    }
    const {
      bitmap
    } = e;
    if (!e.url && !e.file) {
      const i = new OffscreenCanvas(bitmap.width, bitmap.height);
      i.getContext("bitmaprenderer").transferFromImageBitmap(bitmap);
      e.blobPromise = i.convertToBlob();
    }
    bitmap.close?.();
    e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${this.#t}_`);
  }
}
class vn {
  #t = [];
  #e = false;
  #i;
  #s = -1;
  constructor(t = 128) {
    this.#i = t;
  }
  add({
    cmd,
    undo,
    post,
    mustExec,
    type = NaN,
    overwriteIfSameType = false,
    keepUndo = false
  }) {
    if (mustExec) {
      cmd();
    }
    if (this.#e) {
      return;
    }
    const o = {
      cmd,
      undo,
      post,
      type
    };
    if (this.#s === -1) {
      if (this.#t.length > 0) {
        this.#t.length = 0;
      }
      this.#s = 0;
      this.#t.push(o);
      return;
    }
    if (overwriteIfSameType && this.#t[this.#s].type === type) {
      if (keepUndo) {
        o.undo = this.#t[this.#s].undo;
      }
      this.#t[this.#s] = o;
      return;
    }
    const l = this.#s + 1;
    if (l === this.#i) {
      this.#t.splice(0, 1);
    } else {
      this.#s = l;
      if (l < this.#t.length) {
        this.#t.splice(l);
      }
    }
    this.#t.push(o);
  }
  undo() {
    if (this.#s === -1) {
      return;
    }
    this.#e = true;
    const {
      undo,
      post
    } = this.#t[this.#s];
    undo();
    post?.();
    this.#e = false;
    this.#s -= 1;
  }
  redo() {
    if (this.#s < this.#t.length - 1) {
      this.#s += 1;
      this.#e = true;
      const {
        cmd,
        post
      } = this.#t[this.#s];
      cmd();
      post?.();
      this.#e = false;
    }
  }
  hasSomethingToUndo() {
    return this.#s !== -1;
  }
  hasSomethingToRedo() {
    return this.#s < this.#t.length - 1;
  }
  cleanType(t) {
    if (this.#s !== -1) {
      for (let e = this.#s; e >= 0; e--) {
        if (this.#t[e].type !== t) {
          this.#t.splice(e + 1, this.#s - e);
          this.#s = e;
          return;
        }
      }
      this.#t.length = 0;
      this.#s = -1;
    }
  }
  destroy() {
    this.#t = null;
  }
}
class Te {
  constructor(t) {
    this.buffer = [];
    this.callbacks = new Map();
    this.allKeys = new Set();
    const {
      isMac
    } = FeatureTest.platform;
    for (const [s, i, options = {}] of t) {
      for (const r of s) {
        const a = r.startsWith("mac+");
        if (isMac && a) {
          this.callbacks.set(r.slice(4), {
            callback: i,
            options
          });
          this.allKeys.add(r.split("+").at(-1));
        } else if (!isMac && !a) {
          this.callbacks.set(r, {
            callback: i,
            options
          });
          this.allKeys.add(r.split("+").at(-1));
        }
      }
    }
  }
  #t(t) {
    if (t.altKey) {
      this.buffer.push("alt");
    }
    if (t.ctrlKey) {
      this.buffer.push("ctrl");
    }
    if (t.metaKey) {
      this.buffer.push("meta");
    }
    if (t.shiftKey) {
      this.buffer.push("shift");
    }
    this.buffer.push(t.key);
    const e = this.buffer.join("+");
    this.buffer.length = 0;
    return e;
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key)) {
      return;
    }
    const s = this.callbacks.get(this.#t(e));
    if (!s) {
      return;
    }
    const {
      callback,
      options: {
        bubbles = false,
        args = [],
        checker = null
      }
    } = s;
    if (!(checker && !checker(t, e))) {
      callback.bind(t, ...args, e)();
      if (!bubbles) {
        stopEvent(e);
      }
    }
  }
}
class Ps {
  static _colorsMapping = new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
  get _colors() {
    const t = new Map([["CanvasText", null], ["Canvas", null]]);
    pn(t);
    return shadow(this, "_colors", t);
  }
  convert(t) {
    const e = getRGB(t);
    if (!window.matchMedia("(forced-colors: active)").matches) {
      return e;
    }
    for (const [s, i] of this._colors) {
      if (i.every((n, r) => n === e[r])) {
        return Ps._colorsMapping.get(s);
      }
    }
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    if (e) {
      return Util.makeHexColor(...e);
    }
    return t;
  }
}
export class AnnotationEditorUIManager {
  #t = new AbortController();
  #e = null;
  #i = null;
  #s = new Map();
  #a = new Map();
  #n = null;
  #r = null;
  #o = null;
  #h = new vn();
  #l = null;
  #u = null;
  #d = null;
  #f = 0;
  #m = new Set();
  #p = null;
  #c = null;
  #g = new Set();
  _editorUndoBar = null;
  #b = false;
  #A = false;
  #y = false;
  #C = null;
  #S = null;
  #w = null;
  #T = null;
  #_ = false;
  #E = null;
  #M = new wn();
  #P = false;
  #k = false;
  #O = false;
  #D = null;
  #I = null;
  #B = null;
  #F = null;
  #G = null;
  #x = AnnotationEditorType.NONE;
  #v = new Set();
  #L = null;
  #H = null;
  #$ = null;
  #X = null;
  #W = null;
  #q = {
    isEditing: false,
    isEmpty: true,
    hasSomethingToUndo: false,
    hasSomethingToRedo: false,
    hasSelectedEditor: false,
    hasSelectedText: false
  };
  #z = [0, 0];
  #N = null;
  #V = null;
  #J = null;
  #Z = null;
  #U = null;
  static TRANSLATE_SMALL = 1;
  static TRANSLATE_BIG = 10;
  static get _keyboardManager() {
    const AnnotationEditorUIManager_prototype = AnnotationEditorUIManager.prototype;
    const e = r => r.#V.contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && r.hasSomethingToControl();
    const s = (r, {
      target
    }) => {
      if (target instanceof HTMLInputElement) {
        const {
          type
        } = target;
        return type !== "text" && type !== "number";
      }
      return true;
    };
    const TRANSLATE_SMALL = this.TRANSLATE_SMALL;
    const TRANSLATE_BIG = this.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new Te([[["ctrl+a", "mac+meta+a"], AnnotationEditorUIManager_prototype.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], AnnotationEditorUIManager_prototype.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], AnnotationEditorUIManager_prototype.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], AnnotationEditorUIManager_prototype.delete, {
      checker: s
    }], [["Enter", "mac+Enter"], AnnotationEditorUIManager_prototype.addNewEditorFromKeyboard, {
      checker: (r, {
        target
      }) => !(target instanceof HTMLButtonElement) && r.#V.contains(target) && !r.isEnterHandled
    }], [[" ", "mac+ "], AnnotationEditorUIManager_prototype.addNewEditorFromKeyboard, {
      checker: (r, {
        target
      }) => !(target instanceof HTMLButtonElement) && r.#V.contains(document.activeElement)
    }], [["Escape", "mac+Escape"], AnnotationEditorUIManager_prototype.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], AnnotationEditorUIManager_prototype.translateSelectedEditors, {
      args: [-TRANSLATE_SMALL, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], AnnotationEditorUIManager_prototype.translateSelectedEditors, {
      args: [-TRANSLATE_BIG, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], AnnotationEditorUIManager_prototype.translateSelectedEditors, {
      args: [TRANSLATE_SMALL, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], AnnotationEditorUIManager_prototype.translateSelectedEditors, {
      args: [TRANSLATE_BIG, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], AnnotationEditorUIManager_prototype.translateSelectedEditors, {
      args: [0, -TRANSLATE_SMALL],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], AnnotationEditorUIManager_prototype.translateSelectedEditors, {
      args: [0, -TRANSLATE_BIG],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], AnnotationEditorUIManager_prototype.translateSelectedEditors, {
      args: [0, TRANSLATE_SMALL],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], AnnotationEditorUIManager_prototype.translateSelectedEditors, {
      args: [0, TRANSLATE_BIG],
      checker: e
    }]]));
  }
  constructor(t, e, s, i, n, r, a, o, l, h, c, u, f, g, p, b) {
    const m = this._signal = this.#t.signal;
    this.#V = t;
    this.#J = e;
    this.#Z = s;
    this.#n = i;
    this.#l = n;
    this.#H = r;
    this.#W = o;
    this._eventBus = a;
    a._on("editingaction", this.onEditingAction.bind(this), {
      signal: m
    });
    a._on("pagechanging", this.onPageChanging.bind(this), {
      signal: m
    });
    a._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: m
    });
    a._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: m
    });
    a._on("setpreference", this.onSetPreference.bind(this), {
      signal: m
    });
    a._on("switchannotationeditorparams", y => this.updateParams(y.type, y.value), {
      signal: m
    });
    window.addEventListener("pointerdown", () => {
      this.#k = true;
    }, {
      capture: true,
      signal: m
    });
    window.addEventListener("pointerup", () => {
      this.#k = false;
    }, {
      capture: true,
      signal: m
    });
    this.#lt();
    this.#ut();
    this.#et();
    this.#r = o.annotationStorage;
    this.#C = o.filterFactory;
    this.#$ = l;
    this.#T = h || null;
    this.#b = c;
    this.#A = u;
    this.#y = f;
    this.#G = g || null;
    this.viewParameters = {
      realScale: PixelsPerInch.PDF_TO_CSS_UNITS,
      rotation: 0
    };
    this.isShiftKeyDown = false;
    this._editorUndoBar = p || null;
    this._supportsPinchToZoom = b !== false;
    n?.setSidebarUiManager(this);
  }
  destroy() {
    this.#U?.resolve();
    this.#U = null;
    this.#t?.abort();
    this.#t = null;
    this._signal = null;
    for (const t of this.#a.values()) {
      t.destroy();
    }
    this.#a.clear();
    this.#s.clear();
    this.#g.clear();
    this.#F?.clear();
    this.#e = null;
    this.#v.clear();
    this.#h.destroy();
    this.#n?.destroy();
    this.#l?.destroy();
    this.#H?.destroy();
    this.#E?.hide();
    this.#E = null;
    this.#B?.destroy();
    this.#B = null;
    this.#i = null;
    if (this.#S) {
      clearTimeout(this.#S);
      this.#S = null;
    }
    if (this.#N) {
      clearTimeout(this.#N);
      this.#N = null;
    }
    this._editorUndoBar?.destroy();
    this.#W = null;
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return this.#G;
  }
  get useNewAltTextFlow() {
    return this.#A;
  }
  get useNewAltTextWhenAddingImage() {
    return this.#y;
  }
  get hcmFilter() {
    return shadow(this, "hcmFilter", this.#$ ? this.#C.addHCMFilter(this.#$.foreground, this.#$.background) : "none");
  }
  get direction() {
    return shadow(this, "direction", getComputedStyle(this.#V).direction);
  }
  get _highlightColors() {
    return shadow(this, "_highlightColors", this.#T ? new Map(this.#T.split(",").map(t => {
      t = t.split("=").map(e => e.trim());
      t[1] = t[1].toUpperCase();
      return t;
    })) : null);
  }
  get highlightColors() {
    const {
      _highlightColors
    } = this;
    if (!_highlightColors) {
      return shadow(this, "highlightColors", null);
    }
    const e = new Map();
    const s = !!this.#$;
    for (const [i, n] of _highlightColors) {
      const r = i.endsWith("_HCM");
      if (s && r) {
        e.set(i.replace("_HCM", ""), n);
        continue;
      }
      if (!s && !r) {
        e.set(i, n);
      }
    }
    return shadow(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, t => t.reverse())) : null);
  }
  getNonHCMColor(t) {
    if (!this._highlightColors) {
      return t;
    }
    const e = this.highlightColorNames.get(t);
    return this._highlightColors.get(e) || t;
  }
  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }
  setCurrentDrawingSession(t) {
    if (t) {
      this.unselectAll();
      this.disableUserSelect(true);
    } else {
      this.disableUserSelect(false);
    }
    this.#d = t;
  }
  setMainHighlightColorPicker(t) {
    this.#B = t;
  }
  editAltText(t, e = false) {
    this.#n?.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!this.#l;
  }
  editComment(t, e, s, i) {
    this.#l?.showDialog(this, t, e, s, i);
  }
  selectComment(t, e) {
    this.#a.get(t)?.getEditorByUID(e)?.toggleComment(true, true);
  }
  updateComment(t) {
    this.#l?.updateComment(t.getData());
  }
  updatePopupColor(t) {
    this.#l?.updatePopupColor(t);
  }
  removeComment(t) {
    this.#l?.removeComments([t.uid]);
  }
  toggleComment(t, e, s = undefined) {
    this.#l?.toggleCommentPopup(t, e, s);
  }
  makeCommentColor(t, e) {
    return t && this.#l?.makeCommentColor(t, e) || null;
  }
  getCommentDialogElement() {
    return this.#l?.dialogElement || null;
  }
  async waitForEditorsRendered(t) {
    if (this.#a.has(t - 1)) {
      return;
    }
    const {
      resolve,
      promise
    } = Promise.withResolvers();
    const i = n => {
      if (n.pageNumber === t) {
        this._eventBus._off("editorsrendered", i);
        resolve();
      }
    };
    this._eventBus.on("editorsrendered", i);
    await promise;
  }
  getSignature(editor) {
    this.#H?.getSignature({
      uiManager: this,
      editor
    });
  }
  get signatureManager() {
    return this.#H;
  }
  switchToMode(mode, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: true,
      signal: this._signal
    });
    this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name,
    value
  }) {
    if (name === "enableNewAltTextWhenAddingImage") {
      this.#y = value;
    }
  }
  onPageChanging({
    pageNumber
  }) {
    this.#f = pageNumber - 1;
  }
  focusMainContainer() {
    this.#V.focus();
  }
  findParent(t, e) {
    for (const s of this.#a.values()) {
      const {
        x,
        y,
        width,
        height
      } = s.div.getBoundingClientRect();
      if (t >= x && t <= x + width && e >= y && e <= y + height) {
        return s;
      }
    }
    return null;
  }
  disableUserSelect(t = false) {
    this.#J.classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    this.#g.add(t);
  }
  removeShouldRescale(t) {
    this.#g.delete(t);
  }
  onScaleChanging({
    scale
  }) {
    this.commitOrRemove();
    this.viewParameters.realScale = scale * PixelsPerInch.PDF_TO_CSS_UNITS;
    for (const e of this.#g) {
      e.onScaleChanging();
    }
    this.#d?.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation
  }) {
    this.commitOrRemove();
    this.viewParameters.rotation = pagesRotation;
  }
  #Q({
    anchorNode
  }) {
    if (anchorNode.nodeType === Node.TEXT_NODE) {
      return anchorNode.parentElement;
    }
    return anchorNode;
  }
  #tt(t) {
    const {
      currentLayer
    } = this;
    if (currentLayer.hasTextLayer(t)) {
      return currentLayer;
    }
    for (const s of this.#a.values()) {
      if (s.hasTextLayer(t)) {
        return s;
      }
    }
    return null;
  }
  highlightSelection(methodOfCreation = "", e = false) {
    const s = document.getSelection();
    if (!s || s.isCollapsed) {
      return;
    }
    const {
      anchorNode,
      anchorOffset,
      focusNode,
      focusOffset
    } = s;
    const text = s.toString();
    const h = this.#Q(s).closest(".textLayer");
    const boxes = this.getSelectionBoxes(h);
    if (!boxes) {
      return;
    }
    s.empty();
    const u = this.#tt(h);
    const f = this.#x === AnnotationEditorType.NONE;
    const g = () => {
      const p = u?.createAndAddNewEditor({
        x: 0,
        y: 0
      }, false, {
        methodOfCreation,
        boxes,
        anchorNode,
        anchorOffset,
        focusNode,
        focusOffset,
        text
      });
      if (f) {
        this.showAllEditors("highlight", true, true);
      }
      e && p?.editComment();
    };
    if (f) {
      this.switchToMode(AnnotationEditorType.HIGHLIGHT, g);
      return;
    }
    g();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, true);
  }
  #at() {
    const t = document.getSelection();
    if (!t || t.isCollapsed) {
      return;
    }
    const s = this.#Q(t).closest(".textLayer");
    const i = this.getSelectionBoxes(s);
    if (i) {
      this.#E ||= new An(this);
      this.#E.show(s, i, this.direction === "ltr");
    }
  }
  getAndRemoveDataFromAnnotationStorage(t) {
    if (!this.#r) {
      return null;
    }
    const e = `${ye}${t}`;
    const s = this.#r.getRawValue(e);
    if (s) {
      this.#r.remove(e);
    }
    return s;
  }
  addToAnnotationStorage(t) {
    if (!t.isEmpty() && this.#r && !this.#r.has(t.id)) {
      this.#r.setValue(t.id, t);
    }
  }
  a11yAlert(t, e = null) {
    const s = this.#Z;
    if (s) {
      s.setAttribute("data-l10n-id", t);
      if (e) {
        s.setAttribute("data-l10n-args", JSON.stringify(e));
      } else {
        s.removeAttribute("data-l10n-args");
      }
    }
  }
  #ot() {
    const t = document.getSelection();
    if (!t || t.isCollapsed) {
      if (this.#L) {
        this.#E?.hide();
        this.#L = null;
        this.#R({
          hasSelectedText: false
        });
      }
      return;
    }
    const {
      anchorNode
    } = t;
    if (anchorNode === this.#L) {
      return;
    }
    const i = this.#Q(t).closest(".textLayer");
    if (!i) {
      if (this.#L) {
        this.#E?.hide();
        this.#L = null;
        this.#R({
          hasSelectedText: false
        });
      }
      return;
    }
    this.#E?.hide();
    this.#L = anchorNode;
    this.#R({
      hasSelectedText: true
    });
    if (!(this.#x !== AnnotationEditorType.HIGHLIGHT && this.#x !== AnnotationEditorType.NONE) && (this.#x === AnnotationEditorType.HIGHLIGHT && this.showAllEditors("highlight", true, true), this.#_ = this.isShiftKeyDown, !this.isShiftKeyDown)) {
      const n = this.#x === AnnotationEditorType.HIGHLIGHT ? this.#tt(i) : null;
      n?.toggleDrawing();
      if (this.#k) {
        const r = new AbortController();
        const a = this.combinedSignal(r);
        const o = l => {
          if (!(l.type === "pointerup" && l.button !== 0)) {
            r.abort();
            n?.toggleDrawing(true);
            if (l.type === "pointerup") {
              this.#Y("main_toolbar");
            }
          }
        };
        window.addEventListener("pointerup", o, {
          signal: a
        });
        window.addEventListener("blur", o, {
          signal: a
        });
      } else {
        n?.toggleDrawing(true);
        this.#Y("main_toolbar");
      }
    }
  }
  #Y(t = "") {
    if (this.#x === AnnotationEditorType.HIGHLIGHT) {
      this.highlightSelection(t);
    } else if (this.#b) {
      this.#at();
    }
  }
  #lt() {
    document.addEventListener("selectionchange", this.#ot.bind(this), {
      signal: this._signal
    });
  }
  #ht() {
    if (this.#w) {
      return;
    }
    this.#w = new AbortController();
    const t = this.combinedSignal(this.#w);
    window.addEventListener("focus", this.focus.bind(this), {
      signal: t
    });
    window.addEventListener("blur", this.blur.bind(this), {
      signal: t
    });
  }
  #ct() {
    this.#w?.abort();
    this.#w = null;
  }
  blur() {
    this.isShiftKeyDown = false;
    if (this.#_) {
      this.#_ = false;
      this.#Y("main_toolbar");
    }
    if (!this.hasSelection) {
      return;
    }
    const {
      activeElement
    } = document;
    for (const e of this.#v) {
      if (e.div.contains(activeElement)) {
        this.#I = [e, activeElement];
        e._focusEventsAllowed = false;
        break;
      }
    }
  }
  focus() {
    if (!this.#I) {
      return;
    }
    const [t, e] = this.#I;
    this.#I = null;
    e.addEventListener("focusin", () => {
      t._focusEventsAllowed = true;
    }, {
      once: true,
      signal: this._signal
    });
    e.focus();
  }
  #et() {
    if (this.#D) {
      return;
    }
    this.#D = new AbortController();
    const t = this.combinedSignal(this.#D);
    window.addEventListener("keydown", this.keydown.bind(this), {
      signal: t
    });
    window.addEventListener("keyup", this.keyup.bind(this), {
      signal: t
    });
  }
  #dt() {
    this.#D?.abort();
    this.#D = null;
  }
  #st() {
    if (this.#u) {
      return;
    }
    this.#u = new AbortController();
    const t = this.combinedSignal(this.#u);
    document.addEventListener("copy", this.copy.bind(this), {
      signal: t
    });
    document.addEventListener("cut", this.cut.bind(this), {
      signal: t
    });
    document.addEventListener("paste", this.paste.bind(this), {
      signal: t
    });
  }
  #it() {
    this.#u?.abort();
    this.#u = null;
  }
  #ut() {
    const _signal = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal: _signal
    });
    document.addEventListener("drop", this.drop.bind(this), {
      signal: _signal
    });
  }
  addEditListeners() {
    this.#et();
    this.#st();
  }
  removeEditListeners() {
    this.#dt();
    this.#it();
  }
  dragOver(t) {
    for (const {
      type
    } of t.dataTransfer.items) {
      for (const s of this.#c) {
        if (s.isHandlingMimeForPasting(type)) {
          t.dataTransfer.dropEffect = "copy";
          t.preventDefault();
          return;
        }
      }
    }
  }
  drop(t) {
    for (const e of t.dataTransfer.items) {
      for (const s of this.#c) {
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer);
          t.preventDefault();
          return;
        }
      }
    }
  }
  copy(t) {
    t.preventDefault();
    this.#e?.commitOrRemove();
    if (!this.hasSelection) {
      return;
    }
    const e = [];
    for (const s of this.#v) {
      const i = s.serialize(true);
      if (i) {
        e.push(i);
      }
    }
    if (e.length !== 0) {
      t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
    }
  }
  cut(t) {
    this.copy(t);
    this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData
    } = t;
    for (const n of clipboardData.items) {
      for (const r of this.#c) {
        if (r.isHandlingMimeForPasting(n.type)) {
          r.paste(n, this.currentLayer);
          return;
        }
      }
    }
    let s = clipboardData.getData("application/pdfjs");
    if (!s) {
      return;
    }
    try {
      s = JSON.parse(s);
    } catch (error) {
      I(`paste: "${error.message}".`);
      return;
    }
    if (!Array.isArray(s)) {
      return;
    }
    this.unselectAll();
    const currentLayer = this.currentLayer;
    try {
      const n = [];
      for (const o of s) {
        const l = await currentLayer.deserialize(o);
        if (!l) {
          return;
        }
        n.push(l);
      }
      const r = () => {
        for (const o of n) {
          this.#nt(o);
        }
        this.#rt(n);
      };
      const a = () => {
        for (const o of n) {
          o.remove();
        }
      };
      this.addCommands({
        cmd: r,
        undo: a,
        mustExec: true
      });
    } catch (error) {
      I(`paste: "${error.message}".`);
    }
  }
  keydown(t) {
    if (!this.isShiftKeyDown && t.key === "Shift") {
      this.isShiftKeyDown = true;
    }
    if (this.#x !== AnnotationEditorType.NONE && !this.isEditorHandlingKeyboard) {
      AnnotationEditorUIManager._keyboardManager.exec(this, t);
    }
  }
  keyup(t) {
    if (this.isShiftKeyDown && t.key === "Shift") {
      this.isShiftKeyDown = false;
      if (this.#_) {
        this.#_ = false;
        this.#Y("main_toolbar");
      }
    }
  }
  onEditingAction({
    name
  }) {
    switch (name) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[name]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  #R(t) {
    if (Object.entries(t).some(([s, i]) => this.#q[s] !== i)) {
      this._eventBus.dispatch("annotationeditorstateschanged", {
        source: this,
        details: Object.assign(this.#q, t)
      });
      if (this.#x === AnnotationEditorType.HIGHLIGHT && t.hasSelectedEditor === false) {
        this.#j([[AnnotationEditorParamsType.HIGHLIGHT_FREE, true]]);
      }
    }
  }
  #j(details) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details
    });
  }
  setEditingState(t) {
    if (t) {
      this.#ht();
      this.#st();
      this.#R({
        isEditing: this.#x !== AnnotationEditorType.NONE,
        isEmpty: this.#K(),
        hasSomethingToUndo: this.#h.hasSomethingToUndo(),
        hasSomethingToRedo: this.#h.hasSomethingToRedo(),
        hasSelectedEditor: false
      });
    } else {
      this.#ct();
      this.#it();
      this.#R({
        isEditing: false
      });
      this.disableUserSelect(false);
    }
  }
  registerEditorTypes(t) {
    if (!this.#c) {
      this.#c = t;
      for (const e of this.#c) {
        this.#j(e.defaultPropertiesToUpdate);
      }
    }
  }
  getId() {
    return this.#M.id;
  }
  get currentLayer() {
    return this.#a.get(this.#f);
  }
  getLayer(t) {
    return this.#a.get(t);
  }
  get currentPageIndex() {
    return this.#f;
  }
  addLayer(t) {
    this.#a.set(t.pageIndex, t);
    if (this.#P) {
      t.enable();
    } else {
      t.disable();
    }
  }
  removeLayer(t) {
    this.#a.delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = false, i = false, n = false) {
    if (this.#x !== t && !(this.#U && (await this.#U.promise, !this.#U))) {
      this.#U = Promise.withResolvers();
      this.#d?.commitOrRemove();
      this.#x === AnnotationEditorType.POPUP && this.#l?.hideSidebar();
      this.#l?.destroyPopup();
      this.#x = t;
      if (t === AnnotationEditorType.NONE) {
        this.setEditingState(false);
        this.#pt();
        for (const r of this.#s.values()) {
          r.hideStandaloneCommentButton();
        }
        this._editorUndoBar?.hide();
        this.toggleComment(null);
        this.#U.resolve();
        return;
      }
      for (const r of this.#s.values()) {
        r.addStandaloneCommentButton();
      }
      if (t === AnnotationEditorType.SIGNATURE) {
        await this.#H?.loadSignatures();
      }
      this.setEditingState(true);
      await this.#ft();
      this.unselectAll();
      for (const r of this.#a.values()) {
        r.updateMode(t);
      }
      if (t === AnnotationEditorType.POPUP) {
        this.#i ||= await this.#W.getAnnotationsByType(new Set(this.#c.map(o => o._editorType)));
        const r = new Set();
        const a = [];
        for (const o of this.#s.values()) {
          const {
            annotationElementId,
            hasComment,
            deleted
          } = o;
          if (annotationElementId) {
            r.add(annotationElementId);
          }
          if (hasComment && !deleted) {
            a.push(o.getData());
          }
        }
        for (const o of this.#i) {
          const {
            id,
            popupRef,
            contentsObj
          } = o;
          if (popupRef && contentsObj?.str && !r.has(id) && !this.#m.has(id)) {
            a.push(o);
          }
        }
        this.#l?.showSidebar(a);
      }
      if (!e) {
        if (s) {
          this.addNewEditorFromKeyboard();
        }
        this.#U.resolve();
        return;
      }
      for (const r of this.#s.values()) {
        if (r.uid === e) {
          this.setSelected(r);
          if (n) {
            r.editComment();
          } else if (i) {
            r.enterInEditMode();
          } else {
            r.focus();
          }
        } else {
          r.unselect();
        }
      }
      this.#U.resolve();
    }
  }
  addNewEditorFromKeyboard() {
    if (this.currentLayer.canCreateNewEmptyEditor()) {
      this.currentLayer.addNewEditor();
    }
  }
  updateToolbar(t) {
    if (t.mode !== this.#x) {
      this._eventBus.dispatch("switchannotationeditormode", {
        source: this,
        ...t
      });
    }
  }
  updateParams(t, e) {
    if (this.#c) {
      switch (t) {
        case AnnotationEditorParamsType.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          });
          (this.#X ||= new Map()).set(t, e);
          this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection) {
        for (const s of this.#v) {
          s.updateParams(t, e);
        }
      } else {
        for (const s of this.#c) {
          s.updateDefaultParams(t, e);
        }
      }
    }
  }
  showAllEditors(t, e, s = false) {
    for (const n of this.#s.values()) {
      if (n.editorType === t) {
        n.show(e);
      }
    }
    if ((this.#X?.get(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL) ?? true) !== e) {
      this.#j([[AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, e]]);
    }
  }
  enableWaiting(t = false) {
    if (this.#O !== t) {
      this.#O = t;
      for (const e of this.#a.values()) {
        if (t) {
          e.disableClick();
        } else {
          e.enableClick();
        }
        e.div.classList.toggle("waiting", t);
      }
    }
  }
  async #ft() {
    if (!this.#P) {
      this.#P = true;
      const t = [];
      for (const e of this.#a.values()) {
        t.push(e.enable());
      }
      await Promise.all(t);
      for (const e of this.#s.values()) {
        e.enable();
      }
    }
  }
  #pt() {
    this.unselectAll();
    if (this.#P) {
      this.#P = false;
      for (const t of this.#a.values()) {
        t.disable();
      }
      for (const t of this.#s.values()) {
        t.disable();
      }
    }
  }
  *getEditors(t) {
    for (const e of this.#s.values()) {
      if (e.pageIndex === t) {
        yield e;
      }
    }
  }
  getEditor(t) {
    return this.#s.get(t);
  }
  addEditor(t) {
    this.#s.set(t.id, t);
  }
  removeEditor(t) {
    if (t.div.contains(document.activeElement)) {
      if (this.#S) {
        clearTimeout(this.#S);
      }
      this.#S = setTimeout(() => {
        this.focusMainContainer();
        this.#S = null;
      }, 0);
    }
    this.#s.delete(t.id);
    t.annotationElementId && this.#F?.delete(t.annotationElementId);
    this.unselect(t);
    (!t.annotationElementId || !this.#m.has(t.annotationElementId)) && this.#r?.remove(t.id);
  }
  addDeletedAnnotationElement(t) {
    this.#m.add(t.annotationElementId);
    this.addChangedExistingAnnotation(t);
    t.deleted = true;
  }
  isDeletedAnnotationElement(t) {
    return this.#m.has(t);
  }
  removeDeletedAnnotationElement(t) {
    this.#m.delete(t.annotationElementId);
    this.removeChangedExistingAnnotation(t);
    t.deleted = false;
  }
  #nt(t) {
    const e = this.#a.get(t.pageIndex);
    if (e) {
      e.addOrRebuild(t);
    } else {
      this.addEditor(t);
      this.addToAnnotationStorage(t);
    }
  }
  setActiveEditor(t) {
    if (this.#e !== t) {
      this.#e = t;
      if (t) {
        this.#j(t.propertiesToUpdate);
      }
    }
  }
  get #gt() {
    let t = null;
    for (t of this.#v);
    return t;
  }
  updateUI(t) {
    if (this.#gt === t) {
      this.#j(t.propertiesToUpdate);
    }
  }
  updateUIForDefaultProperties(t) {
    this.#j(t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (this.#v.has(t)) {
      this.#v.delete(t);
      t.unselect();
      this.#R({
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    this.#v.add(t);
    t.select();
    this.#j(t.propertiesToUpdate);
    this.#R({
      hasSelectedEditor: true
    });
  }
  setSelected(t) {
    this.updateToolbar({
      mode: t.mode,
      editId: t.id
    });
    this.#d?.commitOrRemove();
    for (const e of this.#v) {
      if (e !== t) {
        e.unselect();
      }
    }
    this.#v.clear();
    this.#v.add(t);
    t.select();
    this.#j(t.propertiesToUpdate);
    this.#R({
      hasSelectedEditor: true
    });
  }
  isSelected(t) {
    return this.#v.has(t);
  }
  get firstSelectedEditor() {
    return this.#v.values().next().value;
  }
  unselect(t) {
    t.unselect();
    this.#v.delete(t);
    this.#R({
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return this.#v.size !== 0;
  }
  get isEnterHandled() {
    return this.#v.size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    this.#h.undo();
    this.#R({
      hasSomethingToUndo: this.#h.hasSomethingToUndo(),
      hasSomethingToRedo: true,
      isEmpty: this.#K()
    });
    this._editorUndoBar?.hide();
  }
  redo() {
    this.#h.redo();
    this.#R({
      hasSomethingToUndo: true,
      hasSomethingToRedo: this.#h.hasSomethingToRedo(),
      isEmpty: this.#K()
    });
  }
  addCommands(t) {
    this.#h.add(t);
    this.#R({
      hasSomethingToUndo: true,
      hasSomethingToRedo: false,
      isEmpty: this.#K()
    });
  }
  cleanUndoStack(t) {
    this.#h.cleanType(t);
  }
  #K() {
    if (this.#s.size === 0) {
      return true;
    }
    if (this.#s.size === 1) {
      for (const t of this.#s.values()) {
        return t.isEmpty();
      }
    }
    return false;
  }
  delete() {
    this.commitOrRemove();
    const t = this.currentLayer?.endDrawingSession(true);
    if (!this.hasSelection && !t) {
      return;
    }
    const e = t ? [t] : [...this.#v];
    const s = () => {
      this._editorUndoBar?.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const n of e) {
        n.remove();
      }
    };
    const i = () => {
      for (const n of e) {
        this.#nt(n);
      }
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: true
    });
  }
  commitOrRemove() {
    this.#e?.commitOrRemove();
  }
  hasSomethingToControl() {
    return this.#e || this.hasSelection;
  }
  #rt(t) {
    for (const e of this.#v) {
      e.unselect();
    }
    this.#v.clear();
    for (const e of t) {
      if (!e.isEmpty()) {
        this.#v.add(e);
        e.select();
      }
    }
    this.#R({
      hasSelectedEditor: this.hasSelection
    });
  }
  selectAll() {
    for (const t of this.#v) {
      t.commit();
    }
    this.#rt(this.#s.values());
  }
  unselectAll() {
    if (!(this.#e && (this.#e.commitOrRemove(), this.#x !== AnnotationEditorType.NONE)) && !this.#d?.commitOrRemove() && this.hasSelection) {
      for (const t of this.#v) {
        t.unselect();
      }
      this.#v.clear();
      this.#R({
        hasSelectedEditor: false
      });
    }
  }
  translateSelectedEditors(t, e, s = false) {
    if (!s) {
      this.commitOrRemove();
    }
    if (!this.hasSelection) {
      return;
    }
    this.#z[0] += t;
    this.#z[1] += e;
    const [i, n] = this.#z;
    const r = [...this.#v];
    const a = 1000;
    if (this.#N) {
      clearTimeout(this.#N);
    }
    this.#N = setTimeout(() => {
      this.#N = null;
      this.#z[0] = this.#z[1] = 0;
      this.addCommands({
        cmd: () => {
          for (const o of r) {
            if (this.#s.has(o.id)) {
              o.translateInPage(i, n);
              o.translationDone();
            }
          }
        },
        undo: () => {
          for (const o of r) {
            if (this.#s.has(o.id)) {
              o.translateInPage(-i, -n);
              o.translationDone();
            }
          }
        },
        mustExec: false
      });
    }, a);
    for (const o of r) {
      o.translateInPage(t, e);
      o.translationDone();
    }
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(true);
      this.#p = new Map();
      for (const t of this.#v) {
        this.#p.set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
      }
    }
  }
  endDragSession() {
    if (!this.#p) {
      return false;
    }
    this.disableUserSelect(false);
    const t = this.#p;
    this.#p = null;
    let e = false;
    for (const [{
      x,
      y,
      pageIndex
    }, a] of t) {
      a.newX = x;
      a.newY = y;
      a.newPageIndex = pageIndex;
      e ||= x !== a.savedX || y !== a.savedY || pageIndex !== a.savedPageIndex;
    }
    if (!e) {
      return false;
    }
    const s = (i, n, r, a) => {
      if (this.#s.has(i.id)) {
        const o = this.#a.get(a);
        if (o) {
          i._setParentAndPosition(o, n, r);
        } else {
          i.pageIndex = a;
          i.x = n;
          i.y = r;
        }
      }
    };
    this.addCommands({
      cmd: () => {
        for (const [i, {
          newX,
          newY,
          newPageIndex
        }] of t) {
          s(i, newX, newY, newPageIndex);
        }
      },
      undo: () => {
        for (const [i, {
          savedX,
          savedY,
          savedPageIndex
        }] of t) {
          s(i, savedX, savedY, savedPageIndex);
        }
      },
      mustExec: true
    });
    return true;
  }
  dragSelectedEditors(t, e) {
    if (this.#p) {
      for (const s of this.#p.keys()) {
        s.drag(t, e);
      }
    }
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      if (e) {
        e.changeParent(t);
        e.addOrRebuild(t);
      } else {
        this.addEditor(t);
        this.addToAnnotationStorage(t);
        t.rebuild();
      }
    } else {
      t.parent.addOrRebuild(t);
    }
  }
  get isEditorHandlingKeyboard() {
    return this.getActive()?.shouldGetKeyboardEvents() || this.#v.size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return this.#e === t;
  }
  getActive() {
    return this.#e;
  }
  getMode() {
    return this.#x;
  }
  isEditingMode() {
    return this.#x !== AnnotationEditorType.NONE;
  }
  get imageManager() {
    return shadow(this, "imageManager", new Ts());
  }
  getSelectionBoxes(t) {
    if (!t) {
      return null;
    }
    const e = document.getSelection();
    for (let l = 0, h = e.rangeCount; l < h; l++) {
      if (!t.contains(e.getRangeAt(l).commonAncestorContainer)) {
        return null;
      }
    }
    const {
      x,
      y,
      width,
      height
    } = t.getBoundingClientRect();
    let a;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        a = (l, h, c, u) => ({
          x: (h - y) / height,
          y: 1 - (l + c - x) / width,
          width: u / height,
          height: c / width
        });
        break;
      case "180":
        a = (l, h, c, u) => ({
          x: 1 - (l + c - x) / width,
          y: 1 - (h + u - y) / height,
          width: c / width,
          height: u / height
        });
        break;
      case "270":
        a = (l, h, c, u) => ({
          x: 1 - (h + u - y) / height,
          y: (l - x) / width,
          width: u / height,
          height: c / width
        });
        break;
      default:
        a = (l, h, c, u) => ({
          x: (l - x) / width,
          y: (h - y) / height,
          width: c / width,
          height: u / height
        });
        break;
    }
    const o = [];
    for (let l = 0, h = e.rangeCount; l < h; l++) {
      const c = e.getRangeAt(l);
      if (!c.collapsed) {
        for (const {
          x: x_1,
          y: y_1,
          width: width_1,
          height: height_1
        } of c.getClientRects()) {
          if (!(width_1 === 0 || height_1 === 0)) {
            o.push(a(x_1, y_1, width_1, height_1));
          }
        }
      }
    }
    if (o.length === 0) {
      return null;
    }
    return o;
  }
  addChangedExistingAnnotation({
    annotationElementId,
    id
  }) {
    (this.#o ||= new Map()).set(annotationElementId, id);
  }
  removeChangedExistingAnnotation({
    annotationElementId
  }) {
    this.#o?.delete(annotationElementId);
  }
  renderAnnotationElement(t) {
    const e = this.#o?.get(t.data.id);
    if (!e) {
      return;
    }
    const s = this.#r.getRawValue(e);
    s && (this.#x === AnnotationEditorType.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, s) {
    const i = this.#F?.get(t);
    if (i) {
      i.setCanvas(e, s);
      this.#F.delete(t);
    }
  }
  addMissingCanvas(t, e) {
    (this.#F ||= new Map()).set(t, e);
  }
}
class Pt {
  #t = null;
  #e = false;
  #i = null;
  #s = null;
  #a = null;
  #n = null;
  #r = false;
  #o = null;
  #h = null;
  #l = null;
  #u = null;
  #d = false;
  static #f = null;
  static _l10n = null;
  constructor(t) {
    this.#h = t;
    this.#d = t._uiManager.useNewAltTextFlow;
    Pt.#f ||= Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    });
  }
  static initialize(t) {
    Pt._l10n ??= t;
  }
  async render() {
    const t = this.#i = document.createElement("button");
    t.className = "altText";
    t.tabIndex = "0";
    const e = this.#s = document.createElement("span");
    t.append(e);
    if (this.#d) {
      t.classList.add("new");
      t.setAttribute("data-l10n-id", Pt.#f.missing);
      e.setAttribute("data-l10n-id", Pt.#f["missing-label"]);
    } else {
      t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
      e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
    }
    const _signal = this.#h._uiManager._signal;
    t.addEventListener("contextmenu", noContextMenu, {
      signal: _signal
    });
    t.addEventListener("pointerdown", n => n.stopPropagation(), {
      signal: _signal
    });
    const i = n => {
      n.preventDefault();
      this.#h._uiManager.editAltText(this.#h);
      if (this.#d) {
        this.#h._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: this.#m
          }
        });
      }
    };
    t.addEventListener("click", i, {
      capture: true,
      signal: _signal
    });
    t.addEventListener("keydown", n => {
      if (n.target === t && n.key === "Enter") {
        this.#r = true;
        i(n);
      }
    }, {
      signal: _signal
    });
    await this.#p();
    return t;
  }
  get #m() {
    return this.#t && "added" || this.#t === null && this.guessedText && "review" || "missing";
  }
  finish() {
    if (this.#i) {
      this.#i.focus({
        focusVisible: this.#r
      });
      this.#r = false;
    }
  }
  isEmpty() {
    if (this.#d) {
      return this.#t === null;
    }
    return !this.#t && !this.#e;
  }
  hasData() {
    if (this.#d) {
      return this.#t !== null || !!this.#l;
    }
    return this.isEmpty();
  }
  get guessedText() {
    return this.#l;
  }
  async setGuessedText(generatedAltText) {
    if (this.#t === null) {
      this.#l = generatedAltText;
      this.#u = await Pt._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
        generatedAltText
      });
      this.#p();
    }
  }
  toggleAltTextBadge(t = false) {
    if (!this.#d || this.#t) {
      this.#o?.remove();
      this.#o = null;
      return;
    }
    if (!this.#o) {
      const e = this.#o = document.createElement("div");
      e.className = "noAltTextBadge";
      this.#h.div.append(e);
    }
    this.#o.classList.toggle("hidden", !t);
  }
  serialize(t) {
    let altText = this.#t;
    if (!t && this.#l === altText) {
      altText = this.#u;
    }
    return {
      altText,
      decorative: this.#e,
      guessedText: this.#l,
      textWithDisclaimer: this.#u
    };
  }
  get data() {
    return {
      altText: this.#t,
      decorative: this.#e
    };
  }
  set data({
    altText,
    decorative,
    guessedText,
    textWithDisclaimer,
    cancel = false
  }) {
    if (guessedText) {
      this.#l = guessedText;
      this.#u = textWithDisclaimer;
    }
    if (!(this.#t === altText && this.#e === decorative)) {
      if (!cancel) {
        this.#t = altText;
        this.#e = decorative;
      }
      this.#p();
    }
  }
  toggle(t = false) {
    if (this.#i) {
      if (!t && this.#n) {
        clearTimeout(this.#n);
        this.#n = null;
      }
      this.#i.disabled = !t;
    }
  }
  shown() {
    this.#h._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: this.#m
      }
    });
  }
  destroy() {
    this.#i?.remove();
    this.#i = null;
    this.#s = null;
    this.#a = null;
    this.#o?.remove();
    this.#o = null;
  }
  async #p() {
    const t = this.#i;
    if (!t) {
      return;
    }
    if (this.#d) {
      t.classList.toggle("done", !!this.#t);
      t.setAttribute("data-l10n-id", Pt.#f[this.#m]);
      this.#s?.setAttribute("data-l10n-id", Pt.#f[`${this.#m}-label`]);
      if (!this.#t) {
        this.#a?.remove();
        return;
      }
    } else {
      if (!this.#t && !this.#e) {
        t.classList.remove("done");
        this.#a?.remove();
        return;
      }
      t.classList.add("done");
      t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let e = this.#a;
    if (!e) {
      this.#a = e = document.createElement("span");
      e.className = "tooltip";
      e.setAttribute("role", "tooltip");
      e.id = `alt-text-tooltip-${this.#h.id}`;
      const i = 100;
      const n = this.#h._uiManager._signal;
      n.addEventListener("abort", () => {
        clearTimeout(this.#n);
        this.#n = null;
      }, {
        once: true
      });
      t.addEventListener("mouseenter", () => {
        this.#n = setTimeout(() => {
          this.#n = null;
          this.#a.classList.add("show");
          this.#h._reportTelemetry({
            action: "alt_text_tooltip"
          });
        }, i);
      }, {
        signal: n
      });
      t.addEventListener("mouseleave", () => {
        if (this.#n) {
          clearTimeout(this.#n);
          this.#n = null;
        }
        this.#a?.classList.remove("show");
      }, {
        signal: n
      });
    }
    if (this.#e) {
      e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
    } else {
      e.removeAttribute("data-l10n-id");
      e.textContent = this.#t;
    }
    if (!e.parentNode) {
      t.append(e);
    }
    this.#h.getElementForAltText()?.setAttribute("aria-describedby", e.id);
  }
}
class Re {
  #t = null;
  #e = null;
  #i = false;
  #s = null;
  #a = null;
  #n = null;
  #r = null;
  #o = null;
  #h = false;
  #l = null;
  constructor(t) {
    this.#s = t;
  }
  renderForToolbar() {
    const t = this.#e = document.createElement("button");
    t.className = "comment";
    return this.#u(t, false);
  }
  renderForStandalone() {
    const t = this.#t = document.createElement("button");
    t.className = "annotationCommentButton";
    const commentButtonPosition = this.#s.commentButtonPosition;
    if (commentButtonPosition) {
      const {
        style
      } = t;
      style.insetInlineEnd = `calc(${100 * (this.#s._uiManager.direction === "ltr" ? 1 - commentButtonPosition[0] : commentButtonPosition[0])}% - var(--comment-button-dim))`;
      style.top = `calc(${100 * commentButtonPosition[1]}% - var(--comment-button-dim))`;
      const i = this.#s.commentButtonColor;
      if (i) {
        style.backgroundColor = i;
      }
    }
    return this.#u(t, true);
  }
  focusButton() {
    setTimeout(() => {
      (this.#t ?? this.#e)?.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!this.#t) {
      return;
    }
    const commentButtonColor = this.#s.commentButtonColor;
    if (commentButtonColor) {
      this.#t.style.backgroundColor = commentButtonColor;
    }
    this.#s._uiManager.updatePopupColor(this.#s);
  }
  get commentButtonWidth() {
    return (this.#t?.getBoundingClientRect().width ?? 0) / this.#s.parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (this.#l) {
      return this.#l;
    }
    if (!this.#t) {
      return null;
    }
    const {
      x,
      y,
      height
    } = this.#t.getBoundingClientRect();
    const {
      x: x_1,
      y: y_1,
      width,
      height: height_1
    } = this.#s.parent.boundingClientRect;
    return [(x - x_1) / width, (y + height - y_1) / height_1];
  }
  set commentPopupPositionInLayer(t) {
    this.#l = t;
  }
  hasDefaultPopupPosition() {
    return this.#l === null;
  }
  removeStandaloneCommentButton() {
    this.#t?.remove();
    this.#t = null;
  }
  removeToolbarCommentButton() {
    this.#e?.remove();
    this.#e = null;
  }
  setCommentButtonStates({
    selected,
    hasPopup
  }) {
    if (this.#t) {
      this.#t.classList.toggle("selected", selected);
      this.#t.ariaExpanded = hasPopup;
    }
  }
  #u(t, e) {
    if (!this.#s._uiManager.hasCommentManager()) {
      return null;
    }
    t.tabIndex = "0";
    t.ariaHasPopup = "dialog";
    if (e) {
      t.ariaControls = "commentPopup";
      t.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
    } else {
      t.ariaControlsElements = [this.#s._uiManager.getCommentDialogElement()];
      t.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button");
    }
    const _signal = this.#s._uiManager._signal;
    if (!(_signal instanceof AbortSignal) || _signal.aborted) {
      return t;
    }
    t.addEventListener("contextmenu", noContextMenu, {
      signal: _signal
    });
    if (e) {
      t.addEventListener("focusin", n => {
        this.#s._focusEventsAllowed = false;
        stopEvent(n);
      }, {
        capture: true,
        signal: _signal
      });
      t.addEventListener("focusout", n => {
        this.#s._focusEventsAllowed = true;
        stopEvent(n);
      }, {
        capture: true,
        signal: _signal
      });
    }
    t.addEventListener("pointerdown", n => n.stopPropagation(), {
      signal: _signal
    });
    const i = n => {
      n.preventDefault();
      if (t === this.#e) {
        this.edit();
      } else {
        this.#s.toggleComment(true);
      }
    };
    t.addEventListener("click", i, {
      capture: true,
      signal: _signal
    });
    t.addEventListener("keydown", n => {
      if (n.target === t && n.key === "Enter") {
        this.#i = true;
        i(n);
      }
    }, {
      signal: _signal
    });
    t.addEventListener("pointerenter", () => {
      this.#s.toggleComment(false, true);
    }, {
      signal: _signal
    });
    t.addEventListener("pointerleave", () => {
      this.#s.toggleComment(false, false);
    }, {
      signal: _signal
    });
    return t;
  }
  edit(t) {
    const commentPopupPositionInLayer = this.commentPopupPositionInLayer;
    let s;
    let i;
    if (commentPopupPositionInLayer) {
      [s, i] = commentPopupPositionInLayer;
    } else {
      [s, i] = this.#s.commentButtonPosition;
      const {
        width: width_1,
        height: height_1,
        x: x_1,
        y: y_1
      } = this.#s;
      s = x_1 + s * width_1;
      i = y_1 + i * height_1;
    }
    const boundingClientRect = this.#s.parent.boundingClientRect;
    const {
      x,
      y,
      width,
      height
    } = boundingClientRect;
    this.#s._uiManager.editComment(this.#s, x + s * width, y + i * height, {
      ...t,
      parentDimensions: boundingClientRect
    });
  }
  finish() {
    if (this.#e) {
      this.#e.focus({
        focusVisible: this.#i
      });
      this.#i = false;
    }
  }
  isDeleted() {
    return this.#h || this.#r === "";
  }
  isEmpty() {
    return this.#r === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || this.#r !== this.#a;
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: this.#r,
      richText: this.#n,
      date: this.#o,
      deleted: this.isDeleted()
    };
  }
  set data(t) {
    if (t !== this.#r) {
      this.#n = null;
    }
    if (t === null) {
      this.#r = "";
      this.#h = true;
      return;
    }
    this.#r = t;
    this.#o = new Date();
    this.#h = false;
  }
  setInitialText(t, e = null) {
    this.#a = t;
    this.data = t;
    this.#o = null;
    this.#n = e;
  }
  shown() {}
  destroy() {
    this.#e?.remove();
    this.#e = null;
    this.#t?.remove();
    this.#t = null;
    this.#r = "";
    this.#n = null;
    this.#o = null;
    this.#s = null;
    this.#i = false;
    this.#h = false;
  }
}
export class TouchManager {
  #t;
  #e = false;
  #i = null;
  #s;
  #a;
  #n;
  #r;
  #o = null;
  #h;
  #l = null;
  #u;
  #d = null;
  constructor({
    container,
    isPinchingDisabled = null,
    isPinchingStopped = null,
    onPinchStart = null,
    onPinching = null,
    onPinchEnd = null,
    signal
  }) {
    this.#t = container;
    this.#i = isPinchingStopped;
    this.#s = isPinchingDisabled;
    this.#a = onPinchStart;
    this.#n = onPinching;
    this.#r = onPinchEnd;
    this.#u = new AbortController();
    this.#h = AbortSignal.any([signal, this.#u.signal]);
    container.addEventListener("touchstart", this.#f.bind(this), {
      passive: false,
      signal: this.#h
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / OutputScale.pixelRatio;
  }
  #f(t) {
    if (this.#s?.()) {
      return;
    }
    if (t.touches.length === 1) {
      if (this.#o) {
        return;
      }
      const i = this.#o = new AbortController();
      const n = AbortSignal.any([this.#h, i.signal]);
      const r = this.#t;
      const a = {
        capture: true,
        signal: n,
        passive: false
      };
      const o = l => {
        if (l.pointerType === "touch") {
          this.#o?.abort();
          this.#o = null;
        }
      };
      r.addEventListener("pointerdown", l => {
        if (l.pointerType === "touch") {
          stopEvent(l);
          o(l);
        }
      }, a);
      r.addEventListener("pointerup", o, a);
      r.addEventListener("pointercancel", o, a);
      return;
    }
    if (!this.#d) {
      this.#d = new AbortController();
      const i = AbortSignal.any([this.#h, this.#d.signal]);
      const n = this.#t;
      const r = {
        signal: i,
        capture: false,
        passive: false
      };
      n.addEventListener("touchmove", this.#m.bind(this), r);
      const a = this.#p.bind(this);
      n.addEventListener("touchend", a, r);
      n.addEventListener("touchcancel", a, r);
      r.capture = true;
      n.addEventListener("pointerdown", stopEvent, r);
      n.addEventListener("pointermove", stopEvent, r);
      n.addEventListener("pointercancel", stopEvent, r);
      n.addEventListener("pointerup", stopEvent, r);
      this.#a?.();
    }
    stopEvent(t);
    if (t.touches.length !== 2 || this.#i?.()) {
      this.#l = null;
      return;
    }
    let [e, s] = t.touches;
    if (e.identifier > s.identifier) {
      [e, s] = [s, e];
    }
    this.#l = {
      touch0X: e.screenX,
      touch0Y: e.screenY,
      touch1X: s.screenX,
      touch1Y: s.screenY
    };
  }
  #m(t) {
    if (!this.#l || t.touches.length !== 2) {
      return;
    }
    stopEvent(t);
    let [e, s] = t.touches;
    if (e.identifier > s.identifier) {
      [e, s] = [s, e];
    }
    const {
      screenX,
      screenY
    } = e;
    const {
      screenX: screenX_1,
      screenY: screenY_1
    } = s;
    const o = this.#l;
    const {
      touch0X,
      touch0Y,
      touch1X,
      touch1Y
    } = o;
    const f = touch1X - touch0X;
    const g = touch1Y - touch0Y;
    const p = screenX_1 - screenX;
    const b = screenY_1 - screenY;
    const m = Math.hypot(p, b) || 1;
    const y = Math.hypot(f, g) || 1;
    if (!this.#e && Math.abs(y - m) <= TouchManager.MIN_TOUCH_DISTANCE_TO_PINCH) {
      return;
    }
    o.touch0X = screenX;
    o.touch0Y = screenY;
    o.touch1X = screenX_1;
    o.touch1Y = screenY_1;
    if (!this.#e) {
      this.#e = true;
      return;
    }
    const A = [(screenX + screenX_1) / 2, (screenY + screenY_1) / 2];
    this.#n?.(A, y, m);
  }
  #p(t) {
    t.touches.length >= 2 || (this.#d && (this.#d.abort(), this.#d = null, this.#r?.()), this.#l && (stopEvent(t), this.#l = null, this.#e = false));
  }
  destroy() {
    this.#u?.abort();
    this.#u = null;
    this.#o?.abort();
    this.#o = null;
  }
}
class M {
  #t = null;
  #e = null;
  #i = null;
  #s = null;
  #a = null;
  #n = false;
  #r = null;
  #o = "";
  #h = null;
  #l = null;
  #u = null;
  #d = null;
  #f = null;
  #m = "";
  #p = false;
  #c = null;
  #g = false;
  #b = false;
  #A = false;
  #y = null;
  #C = 0;
  #S = 0;
  #w = null;
  #T = null;
  isSelected = false;
  _isCopy = false;
  _editToolbar = null;
  _initialOptions = Object.create(null);
  _initialData = null;
  _isVisible = true;
  _uiManager = null;
  _focusEventsAllowed = true;
  static _l10n = null;
  static _l10nResizer = null;
  #_ = false;
  #E = M._zIndex++;
  static _borderLineWidth = -1;
  static _colorManager = new Ps();
  static _zIndex = 1;
  static _telemetryTimeout = 1000;
  static get _resizerKeyboardManager() {
    const _resizeWithKeyboard = M.prototype._resizeWithKeyboard;
    const {
      TRANSLATE_SMALL,
      TRANSLATE_BIG
    } = AnnotationEditorUIManager;
    return shadow(this, "_resizerKeyboardManager", new Te([[["ArrowLeft", "mac+ArrowLeft"], _resizeWithKeyboard, {
      args: [-TRANSLATE_SMALL, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], _resizeWithKeyboard, {
      args: [-TRANSLATE_BIG, 0]
    }], [["ArrowRight", "mac+ArrowRight"], _resizeWithKeyboard, {
      args: [TRANSLATE_SMALL, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], _resizeWithKeyboard, {
      args: [TRANSLATE_BIG, 0]
    }], [["ArrowUp", "mac+ArrowUp"], _resizeWithKeyboard, {
      args: [0, -TRANSLATE_SMALL]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], _resizeWithKeyboard, {
      args: [0, -TRANSLATE_BIG]
    }], [["ArrowDown", "mac+ArrowDown"], _resizeWithKeyboard, {
      args: [0, TRANSLATE_SMALL]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], _resizeWithKeyboard, {
      args: [0, TRANSLATE_BIG]
    }], [["Escape", "mac+Escape"], M.prototype._stopResizingWithKeyboard]]));
  }
  constructor(t) {
    this.parent = t.parent;
    this.id = t.id;
    this.width = this.height = null;
    this.pageIndex = t.parent.pageIndex;
    this.name = t.name;
    this.div = null;
    this._uiManager = t.uiManager;
    this.annotationElementId = null;
    this._willKeepAspectRatio = false;
    this._initialOptions.isCentered = t.isCentered;
    this._structTreeParentId = null;
    this.annotationElementId = t.annotationElementId || null;
    this.creationDate = t.creationDate || new Date();
    this.modificationDate = t.modificationDate || null;
    const {
      rotation,
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = this.parent.viewport;
    this.rotation = rotation;
    this.pageRotation = (360 + rotation - this._uiManager.viewParameters.rotation) % 360;
    this.pageDimensions = [pageWidth, pageHeight];
    this.pageTranslation = [pageX, pageY];
    const [a, o] = this.parentDimensions;
    this.x = t.x / a;
    this.y = t.y / o;
    this.isAttachedToDOM = false;
    this.deleted = false;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return false;
  }
  static get _defaultLineColor() {
    return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new _n({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId;
    e.deleted = true;
    e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    M._l10n ??= t;
    M._l10nResizer ||= Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    });
    if (M._borderLineWidth !== -1) {
      return;
    }
    const s = getComputedStyle(document.documentElement);
    M._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {}
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return false;
  }
  static paste(t, e) {
    G("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return this.#_;
  }
  set _isDraggable(t) {
    this.#_ = t;
    this.div?.classList.toggle("draggable", t);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return true;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2);
        this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2;
        this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2);
        this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2;
        this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = this.#E;
  }
  setParent(t) {
    if (t !== null) {
      this.pageIndex = t.pageIndex;
      this.pageDimensions = t.pageDimensions;
    } else {
      this.#N();
      this.#d?.remove();
      this.#d = null;
    }
    this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (this.#p ? this.#p = false : this.parent.setSelected(this));
  }
  focusout(t) {
    if (!(!this._focusEventsAllowed || !this.isAttachedToDOM || t.relatedTarget?.closest(`#${this.id}`))) {
      t.preventDefault();
      if (!this.parent?.isMultipleSelection) {
        this.commitOrRemove();
      }
    }
  }
  commitOrRemove() {
    if (this.isEmpty()) {
      this.remove();
    } else {
      this.commit();
    }
  }
  commit() {
    if (this.isInEditMode()) {
      this.addToAnnotationStorage();
    }
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [n, r] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i);
    this.x = (t + s) / n;
    this.y = (e + i) / r;
    this.fixAndSetPosition();
  }
  _moveAfterPaste(t, e) {
    const [s, i] = this.parentDimensions;
    this.setAt(t * s, e * i, this.width * s, this.height * i);
    this._onTranslated();
  }
  #M([t, e], s, i) {
    [s, i] = this.screenToPageTranslation(s, i);
    this.x += s / t;
    this.y += i / e;
    this._onTranslating(this.x, this.y);
    this.fixAndSetPosition();
  }
  translate(t, e) {
    this.#M(this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    this.#c ||= [this.x, this.y, this.width, this.height];
    this.#M(this.pageDimensions, t, e);
    this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    this.#c ||= [this.x, this.y, this.width, this.height];
    const {
      div,
      parentDimensions: [i, n]
    } = this;
    this.x += t / i;
    this.y += e / n;
    if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: x_1,
        y: y_1
      } = this.div.getBoundingClientRect();
      if (this.parent.findNewParent(this, x_1, y_1)) {
        this.x -= Math.floor(this.x);
        this.y -= Math.floor(this.y);
      }
    }
    let {
      x,
      y
    } = this;
    const [o, l] = this.getBaseTranslation();
    x += o;
    y += l;
    const {
      style
    } = div;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this._onTranslating(x, y);
    div.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(t, e) {}
  _onTranslated(t, e) {}
  get _hasBeenMoved() {
    return !!this.#c && (this.#c[0] !== this.x || this.#c[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!this.#c && (this.#c[2] !== this.width || this.#c[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions;
    const {
      _borderLineWidth
    } = M;
    const i = _borderLineWidth / t;
    const n = _borderLineWidth / e;
    switch (this.rotation) {
      case 90:
        return [-i, n];
      case 180:
        return [i, n];
      case 270:
        return [i, -n];
      default:
        return [-i, -n];
    }
  }
  get _mustFixPosition() {
    return true;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style
      },
      pageDimensions: [s, i]
    } = this;
    let {
      x,
      y,
      width,
      height
    } = this;
    width *= s;
    height *= i;
    x *= s;
    y *= i;
    if (this._mustFixPosition) {
      switch (t) {
        case 0:
          x = MathClamp(x, 0, s - width);
          y = MathClamp(y, 0, i - height);
          break;
        case 90:
          x = MathClamp(x, 0, s - height);
          y = MathClamp(y, width, i);
          break;
        case 180:
          x = MathClamp(x, width, s);
          y = MathClamp(y, height, i);
          break;
        case 270:
          x = MathClamp(x, height, s);
          y = MathClamp(y, 0, i - width);
          break;
      }
    }
    this.x = x /= s;
    this.y = y /= i;
    const [l, h] = this.getBaseTranslation();
    x += l;
    y += h;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this.moveInDOM();
  }
  static #P(t, e, s) {
    switch (s) {
      case 90:
        return [e, -t];
      case 180:
        return [-t, -e];
      case 270:
        return [-e, t];
      default:
        return [t, e];
    }
  }
  screenToPageTranslation(t, e) {
    return M.#P(t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    return M.#P(t, e, 360 - this.parentRotation);
  }
  #k(t) {
    switch (t) {
      case 90:
        {
          const [e, s] = this.pageDimensions;
          return [0, -e / s, s / e, 0];
        }
      case 180:
        return [-1, 0, 0, -1];
      case 270:
        {
          const [e, s] = this.pageDimensions;
          return [0, e / s, -s / e, 0];
        }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale,
      pageDimensions: [e, s]
    } = this;
    return [e * parentScale, s * parentScale];
  }
  setDims() {
    const {
      div: {
        style
      },
      width,
      height
    } = this;
    style.width = `${(100 * width).toFixed(2)}%`;
    style.height = `${(100 * height).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  #O() {
    if (this.#h) {
      return;
    }
    this.#h = document.createElement("div");
    this.#h.classList.add("resizers");
    const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
    const _signal = this._uiManager._signal;
    for (const s of t) {
      const i = document.createElement("div");
      this.#h.append(i);
      i.classList.add("resizer", s);
      i.setAttribute("data-resizer-name", s);
      i.addEventListener("pointerdown", this.#D.bind(this, s), {
        signal: _signal
      });
      i.addEventListener("contextmenu", noContextMenu, {
        signal: _signal
      });
      i.tabIndex = -1;
    }
    this.div.prepend(this.#h);
  }
  #D(t, e) {
    e.preventDefault();
    const {
      isMac
    } = FeatureTest.platform;
    if (e.button !== 0 || e.ctrlKey && isMac) {
      return;
    }
    this.#i?.toggle(false);
    const _isDraggable = this._isDraggable;
    this._isDraggable = false;
    this.#l = [e.screenX, e.screenY];
    const n = new AbortController();
    const r = this._uiManager.combinedSignal(n);
    this.parent.togglePointerEvents(false);
    window.addEventListener("pointermove", this.#F.bind(this, t), {
      passive: true,
      capture: true,
      signal: r
    });
    window.addEventListener("touchmove", stopEvent, {
      passive: false,
      signal: r
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal: r
    });
    this.#u = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const cursor = this.parent.div.style.cursor;
    const cursor_1 = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
    const l = () => {
      n.abort();
      this.parent.togglePointerEvents(true);
      this.#i?.toggle(true);
      this._isDraggable = _isDraggable;
      this.parent.div.style.cursor = cursor;
      this.div.style.cursor = cursor_1;
      this.#B();
    };
    window.addEventListener("pointerup", l, {
      signal: r
    });
    window.addEventListener("blur", l, {
      signal: r
    });
  }
  #I(t, e, s, i) {
    this.width = s;
    this.height = i;
    this.x = t;
    this.y = e;
    this.setDims();
    this.fixAndSetPosition();
    this._onResized();
  }
  _onResized() {}
  #B() {
    if (!this.#u) {
      return;
    }
    const {
      savedX,
      savedY,
      savedWidth,
      savedHeight
    } = this.#u;
    this.#u = null;
    const n = this.x;
    const r = this.y;
    const width = this.width;
    const height = this.height;
    if (!(n === savedX && r === savedY && width === savedWidth && height === savedHeight)) {
      this.addCommands({
        cmd: this.#I.bind(this, n, r, width, height),
        undo: this.#I.bind(this, savedX, savedY, savedWidth, savedHeight),
        mustExec: true
      });
    }
  }
  static _round(t) {
    return Math.round(t * 10000) / 10000;
  }
  #F(t, e) {
    const [s, i] = this.parentDimensions;
    const n = this.x;
    const r = this.y;
    const width = this.width;
    const height = this.height;
    const l = M.MIN_SIZE / s;
    const h = M.MIN_SIZE / i;
    const c = this.#k(this.rotation);
    const u = (R, L) => [c[0] * R + c[2] * L, c[1] * R + c[3] * L];
    const f = this.#k(360 - this.rotation);
    const g = (R, L) => [f[0] * R + f[2] * L, f[1] * R + f[3] * L];
    let p;
    let b;
    let m = false;
    let y = false;
    switch (t) {
      case "topLeft":
        m = true;
        p = (R, L) => [0, 0];
        b = (R, L) => [R, L];
        break;
      case "topMiddle":
        p = (R, L) => [R / 2, 0];
        b = (R, L) => [R / 2, L];
        break;
      case "topRight":
        m = true;
        p = (R, L) => [R, 0];
        b = (R, L) => [0, L];
        break;
      case "middleRight":
        y = true;
        p = (R, L) => [R, L / 2];
        b = (R, L) => [0, L / 2];
        break;
      case "bottomRight":
        m = true;
        p = (R, L) => [R, L];
        b = (R, L) => [0, 0];
        break;
      case "bottomMiddle":
        p = (R, L) => [R / 2, L];
        b = (R, L) => [R / 2, 0];
        break;
      case "bottomLeft":
        m = true;
        p = (R, L) => [0, L];
        b = (R, L) => [R, 0];
        break;
      case "middleLeft":
        y = true;
        p = (R, L) => [0, L / 2];
        b = (R, L) => [R, L / 2];
        break;
    }
    const A = p(width, height);
    const w = b(width, height);
    let v = u(...w);
    const _ = M._round(n + v[0]);
    const S = M._round(r + v[1]);
    let E = 1;
    let C = 1;
    let k;
    let T;
    if (e.fromKeyboard) {
      ({
        deltaX: k,
        deltaY: T
      } = e);
    } else {
      const {
        screenX,
        screenY
      } = e;
      const [H, lt] = this.#l;
      [k, T] = this.screenToPageTranslation(screenX - H, screenY - lt);
      this.#l[0] = screenX;
      this.#l[1] = screenY;
    }
    [k, T] = g(k / s, T / i);
    if (m) {
      const R = Math.hypot(width, height);
      E = C = Math.max(Math.min(Math.hypot(w[0] - A[0] - k, w[1] - A[1] - T) / R, 1 / width, 1 / height), l / width, h / height);
    } else {
      if (y) {
        E = MathClamp(Math.abs(w[0] - A[0] - k), l, 1) / width;
      } else {
        C = MathClamp(Math.abs(w[1] - A[1] - T), h, 1) / height;
      }
    }
    const U = M._round(width * E);
    const $ = M._round(height * C);
    v = u(...b(U, $));
    const z = _ - v[0];
    const V = S - v[1];
    this.#c ||= [this.x, this.y, this.width, this.height];
    this.width = U;
    this.height = $;
    this.x = z;
    this.y = V;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  }
  _onResizing() {}
  altTextFinish() {
    this.#i?.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || this.#b) {
      return this._editToolbar;
    }
    this._editToolbar = new me(this);
    this.div.append(this._editToolbar.render());
    const {
      toolbarButtons
    } = this;
    if (toolbarButtons) {
      for (const [e, s] of toolbarButtons) {
        await this._editToolbar.addButton(e, s);
      }
    }
    if (!this.hasComment) {
      this._editToolbar.addButton("comment", this.addCommentButton());
    }
    this._editToolbar.addButton("delete");
    return this._editToolbar;
  }
  addCommentButtonInToolbar() {
    this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    this._editToolbar?.removeButton("comment");
  }
  removeEditToolbar() {
    this._editToolbar?.remove();
    this._editToolbar = null;
    this.#i?.destroy();
  }
  addContainer(t) {
    const e = this._editToolbar?.div;
    if (e) {
      e.before(t);
    } else {
      this.div.append(t);
    }
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    if (!this.#i) {
      Pt.initialize(M._l10n);
      this.#i = new Pt(this);
      if (this.#t) {
        this.#i.data = this.#t;
        this.#t = null;
      }
    }
    return this.#i;
  }
  get altTextData() {
    return this.#i?.data;
  }
  set altTextData(t) {
    if (this.#i) {
      this.#i.data = t;
    }
  }
  get guessedAltText() {
    return this.#i?.guessedText;
  }
  async setGuessedAltText(t) {
    await this.#i?.setGuessedText(t);
  }
  serializeAltText(t) {
    return this.#i?.serialize(t);
  }
  hasAltText() {
    return !!this.#i && !this.#i.isEmpty();
  }
  hasAltTextData() {
    return this.#i?.hasData() ?? false;
  }
  focusCommentButton() {
    this.#s?.focusButton();
  }
  addCommentButton() {
    return this.#s ||= new Re(this);
  }
  addStandaloneCommentButton() {
    if (this.#a) {
      if (this._uiManager.isEditingMode()) {
        this.#a.classList.remove("hidden");
      }
      return;
    }
    if (this.hasComment) {
      this.#a = this.#s.renderForStandalone();
      this.div.append(this.#a);
    }
  }
  removeStandaloneCommentButton() {
    this.#s.removeStandaloneCommentButton();
    this.#a = null;
  }
  hideStandaloneCommentButton() {
    this.#a?.classList.add("hidden");
  }
  get comment() {
    const {
      data: {
        richText,
        text,
        date,
        deleted
      }
    } = this.#s;
    return {
      text,
      richText,
      date,
      deleted,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1
    };
  }
  set comment(t) {
    this.#s ||= new Re(this);
    this.#s.data = t;
    if (this.hasComment) {
      this.removeCommentButtonFromToolbar();
      this.addStandaloneCommentButton();
      this._uiManager.updateComment(this);
    } else {
      this.addCommentButtonInToolbar();
      this.removeStandaloneCommentButton();
      this._uiManager.removeComment(this);
    }
  }
  setCommentData({
    comment,
    popupRef,
    richText
  }) {
    if (!popupRef || (this.#s ||= new Re(this), this.#s.setInitialText(comment, richText), !this.annotationElementId)) {
      return;
    }
    const i = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    if (i) {
      this.updateFromAnnotationLayer(i);
    }
  }
  get hasEditedComment() {
    return this.#s?.hasBeenEdited();
  }
  get hasDeletedComment() {
    return this.#s?.isDeleted();
  }
  get hasComment() {
    return !!this.#s && !this.#s.isEmpty() && !this.#s.isDeleted();
  }
  async editComment(t) {
    this.#s ||= new Re(this);
    this.#s.edit(t);
  }
  toggleComment(t, e = undefined) {
    if (this.hasComment) {
      this._uiManager.toggleComment(this, t, e);
    }
  }
  setSelectedCommentButton(t) {
    this.#s.setSelectedButton(t);
  }
  addComment(t) {
    if (this.hasEditedComment) {
      const [,,, i] = t.rect;
      const [n] = this.pageDimensions;
      const [r] = this.pageTranslation;
      const a = r + n + 1;
      const o = i - 100;
      const l = a + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [a, o, l, i]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents,
      deleted
    }
  }) {
    this.#s.data = deleted ? null : contents;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    const container = this.div = document.createElement("div");
    container.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
    container.className = this.name;
    container.setAttribute("id", this.id);
    container.tabIndex = this.#n ? -1 : 0;
    container.setAttribute("role", "application");
    if (this.defaultL10nId) {
      container.setAttribute("data-l10n-id", this.defaultL10nId);
    }
    if (!this._isVisible) {
      container.classList.add("hidden");
    }
    this.setInForeground();
    this.#$();
    const [e, s] = this.parentDimensions;
    if (this.parentRotation % 180 !== 0) {
      container.style.maxWidth = `${(100 * s / e).toFixed(2)}%`;
      container.style.maxHeight = `${(100 * e / s).toFixed(2)}%`;
    }
    const [i, n] = this.getInitialTranslation();
    this.translate(i, n);
    Si(this, container, ["keydown", "pointerdown", "dblclick"]);
    if (this.isResizable && this._uiManager._supportsPinchToZoom) {
      this.#T ||= new TouchManager({
        container,
        isPinchingDisabled: () => !this.isSelected,
        onPinchStart: this.#G.bind(this),
        onPinching: this.#x.bind(this),
        onPinchEnd: this.#v.bind(this),
        signal: this._uiManager._signal
      });
    }
    this.addStandaloneCommentButton();
    this._uiManager._editorUndoBar?.hide();
    return container;
  }
  #G() {
    this.#u = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    this.#i?.toggle(false);
    this.parent.togglePointerEvents(false);
  }
  #x(t, e, s) {
    let n = 0.7 * (s / e) + 1 - 0.7;
    if (n === 1) {
      return;
    }
    const r = this.#k(this.rotation);
    const a = (_, S) => [r[0] * _ + r[2] * S, r[1] * _ + r[3] * S];
    const [o, l] = this.parentDimensions;
    const h = this.x;
    const c = this.y;
    const width = this.width;
    const height = this.height;
    const g = M.MIN_SIZE / o;
    const p = M.MIN_SIZE / l;
    n = Math.max(Math.min(n, 1 / width, 1 / height), g / width, p / height);
    const b = M._round(width * n);
    const m = M._round(height * n);
    if (b === width && m === height) {
      return;
    }
    this.#c ||= [h, c, width, height];
    const y = a(width / 2, height / 2);
    const A = M._round(h + y[0]);
    const w = M._round(c + y[1]);
    const v = a(b / 2, m / 2);
    this.x = A - v[0];
    this.y = w - v[1];
    this.width = b;
    this.height = m;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  }
  #v() {
    this.#i?.toggle(true);
    this.parent.togglePointerEvents(true);
    this.#B();
  }
  pointerdown(t) {
    const {
      isMac
    } = FeatureTest.platform;
    if (t.button !== 0 || t.ctrlKey && isMac) {
      t.preventDefault();
      return;
    }
    this.#p = true;
    if (this._isDraggable) {
      this.#H(t);
      return;
    }
    this.#L(t);
  }
  #L(t) {
    const {
      isMac
    } = FeatureTest.platform;
    if (t.ctrlKey && !isMac || t.shiftKey || t.metaKey && isMac) {
      this.parent.toggleSelected(this);
    } else {
      this.parent.setSelected(this);
    }
  }
  #H(t) {
    const {
      isSelected
    } = this;
    this._uiManager.setUpDragSession();
    let s = false;
    const i = new AbortController();
    const n = this._uiManager.combinedSignal(i);
    const r = {
      capture: true,
      passive: false,
      signal: n
    };
    const a = l => {
      i.abort();
      this.#r = null;
      this.#p = false;
      if (!this._uiManager.endDragSession()) {
        this.#L(l);
      }
      if (s) {
        this._onStopDragging();
      }
    };
    if (isSelected) {
      this.#C = t.clientX;
      this.#S = t.clientY;
      this.#r = t.pointerId;
      this.#o = t.pointerType;
      window.addEventListener("pointermove", l => {
        if (!s) {
          s = true;
          this._uiManager.toggleComment(this, true, false);
          this._onStartDragging();
        }
        const {
          clientX,
          clientY,
          pointerId
        } = l;
        if (pointerId !== this.#r) {
          stopEvent(l);
          return;
        }
        const [f, g] = this.screenToPageTranslation(clientX - this.#C, clientY - this.#S);
        this.#C = clientX;
        this.#S = clientY;
        this._uiManager.dragSelectedEditors(f, g);
      }, r);
      window.addEventListener("touchmove", stopEvent, r);
      window.addEventListener("pointerdown", l => {
        if (l.pointerType === this.#o && (this.#T || l.isPrimary)) {
          a(l);
        }
        stopEvent(l);
      }, r);
    }
    const o = l => {
      if (!this.#r || this.#r === l.pointerId) {
        a(l);
        return;
      }
      stopEvent(l);
    };
    window.addEventListener("pointerup", o, {
      signal: n
    });
    window.addEventListener("blur", o, {
      signal: n
    });
  }
  _onStartDragging() {}
  _onStopDragging() {}
  moveInDOM() {
    if (this.#y) {
      clearTimeout(this.#y);
    }
    this.#y = setTimeout(() => {
      this.#y = null;
      this.parent?.moveEditorInDOM(this);
    }, 0);
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this);
    this.x = e;
    this.y = s;
    this.fixAndSetPosition();
    this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const parentScale = this.parentScale;
    const [n, r] = this.pageDimensions;
    const [a, o] = this.pageTranslation;
    const l = t / parentScale;
    const h = e / parentScale;
    const c = this.x * n;
    const u = this.y * r;
    const f = this.width * n;
    const g = this.height * r;
    switch (s) {
      case 0:
        return [c + l + a, r - u - h - g + o, c + l + f + a, r - u - h + o];
      case 90:
        return [c + h + a, r - u + l + o, c + h + g + a, r - u + l + f + o];
      case 180:
        return [c - l - f + a, r - u + h + o, c - l + a, r - u + h + g + o];
      case 270:
        return [c - h - g + a, r - u - l - f + o, c - h + a, r - u - l + o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords([s, i, n, r], e) {
    const a = n - s;
    const o = r - i;
    switch (this.rotation) {
      case 0:
        return [s, e - r, a, o];
      case 90:
        return [s, e - i, o, a];
      case 180:
        return [n, e - i, a, o];
      case 270:
        return [n, e - r, o, a];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && M._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    this.#s?.onUpdatedColor();
  }
  getData() {
    const {
      comment: {
        text,
        color,
        date,
        opacity,
        deleted,
        richText
      },
      uid,
      pageIndex,
      creationDate,
      modificationDate
    } = this;
    return {
      id: uid,
      pageIndex,
      rect: this.getPDFRect(),
      richText,
      contentsObj: {
        str: text
      },
      creationDate,
      modificationDate: date || modificationDate,
      popupRef: !deleted,
      color,
      opacity
    };
  }
  onceAdded(t) {}
  isEmpty() {
    return false;
  }
  enableEditMode() {
    if (this.isInEditMode()) {
      return false;
    }
    this.parent.setEditingState(false);
    this.#b = true;
    return true;
  }
  disableEditMode() {
    if (this.isInEditMode()) {
      this.parent.setEditingState(true);
      this.#b = false;
      return true;
    }
    return false;
  }
  isInEditMode() {
    return this.#b;
  }
  shouldGetKeyboardEvents() {
    return this.#A;
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top,
      left,
      bottom,
      right
    } = this.getClientDimensions();
    const {
      innerHeight,
      innerWidth
    } = window;
    return left < innerWidth && right > 0 && top < innerHeight && bottom > 0;
  }
  #$() {
    if (this.#f || !this.div) {
      return;
    }
    this.#f = new AbortController();
    const t = this._uiManager.combinedSignal(this.#f);
    this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal: t
    });
    this.div.addEventListener("focusout", this.focusout.bind(this), {
      signal: t
    });
  }
  rebuild() {
    this.#$();
  }
  rotate(t) {}
  resize() {}
  serializeDeleted() {
    return {
      id: this.annotationElementId,
      deleted: true,
      pageIndex: this.pageIndex,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  serialize(t = false, e = null) {
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  static async deserialize(t, parent, uiManager) {
    const i = new this.prototype.constructor({
      parent,
      id: parent.getNextId(),
      uiManager,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate
    });
    i.rotation = t.rotation;
    i.#t = t.accessibilityData;
    i._isCopy = t.isCopy || false;
    const [n, r] = i.pageDimensions;
    const [a, o, l, h] = i.getRectInCurrentCoords(t.rect, r);
    i.x = a / n;
    i.y = o / r;
    i.width = l / n;
    i.height = h / r;
    return i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    this.#f?.abort();
    this.#f = null;
    if (!this.isEmpty()) {
      this.commit();
    }
    if (this.parent) {
      this.parent.remove(this);
    } else {
      this._uiManager.removeEditor(this);
    }
    if (this.#y) {
      clearTimeout(this.#y);
      this.#y = null;
    }
    this.#N();
    this.removeEditToolbar();
    if (this.#w) {
      for (const t of this.#w.values()) {
        clearTimeout(t);
      }
      this.#w = null;
    }
    this.parent = null;
    this.#T?.destroy();
    this.#T = null;
  }
  get isResizable() {
    return false;
  }
  makeResizable() {
    if (this.isResizable) {
      this.#O();
      this.#h.classList.remove("hidden");
    }
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    if (this._uiManager.direction === "ltr") {
      return [1, 0];
    }
    return [0, 0];
  }
  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [t, e]
    } = this;
    const [s, i, n, r] = this.getPDFRect();
    return [M._round(s + (n - s) * t), M._round(i + (r - i) * (1 - e))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return this.#s.commentPopupPositionInLayer;
  }
  set commentPopupPosition(t) {
    this.#s.commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition() {
    return this.#s.hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return this.#s.commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t) {
    this.#s.setCommentButtonStates(t);
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter") {
      return;
    }
    this._uiManager.setSelected(this);
    this.#u = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const children = this.#h.children;
    if (!this.#e) {
      this.#e = Array.from(children);
      const r = this.#X.bind(this);
      const a = this.#W.bind(this);
      const o = this._uiManager._signal;
      for (const l of this.#e) {
        const h = l.getAttribute("data-resizer-name");
        l.setAttribute("role", "spinbutton");
        l.addEventListener("keydown", r, {
          signal: o
        });
        l.addEventListener("blur", a, {
          signal: o
        });
        l.addEventListener("focus", this.#q.bind(this, h), {
          signal: o
        });
        l.setAttribute("data-l10n-id", M._l10nResizer[h]);
      }
    }
    const s = this.#e[0];
    let i = 0;
    for (const r of children) {
      if (r === s) {
        break;
      }
      i++;
    }
    const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#e.length / 4);
    if (n !== i) {
      if (n < i) {
        for (let a = 0; a < i - n; a++) {
          this.#h.append(this.#h.firstChild);
        }
      } else if (n > i) {
        for (let a = 0; a < n - i; a++) {
          this.#h.firstChild.before(this.#h.lastChild);
        }
      }
      let r = 0;
      for (const a of children) {
        const l = this.#e[r++].getAttribute("data-resizer-name");
        a.setAttribute("data-l10n-id", M._l10nResizer[l]);
      }
    }
    this.#z(0);
    this.#A = true;
    this.#h.firstChild.focus({
      focusVisible: true
    });
    t.preventDefault();
    t.stopImmediatePropagation();
  }
  #X(t) {
    M._resizerKeyboardManager.exec(this, t);
  }
  #W(t) {
    if (this.#A && t.relatedTarget?.parentNode !== this.#h) {
      this.#N();
    }
  }
  #q(t) {
    this.#m = this.#A ? t : "";
  }
  #z(t) {
    if (this.#e) {
      for (const e of this.#e) {
        e.tabIndex = t;
      }
    }
  }
  _resizeWithKeyboard(deltaX, deltaY) {
    if (this.#A) {
      this.#F(this.#m, {
        deltaX,
        deltaY,
        fromKeyboard: true
      });
    }
  }
  #N() {
    this.#A = false;
    this.#z(-1);
    this.#B();
  }
  _stopResizingWithKeyboard() {
    this.#N();
    this.div.focus();
  }
  select() {
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    this.isSelected = true;
    this.makeResizable();
    this.div?.classList.add("selectedEditor");
    if (!this._editToolbar) {
      this.addEditToolbar().then(() => {
        this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
      });
      return;
    }
    this._editToolbar?.show();
    this.#i?.toggleAltTextBadge(false);
  }
  focus() {
    if (this.div && !this.div.contains(document.activeElement)) {
      setTimeout(() => this.div?.focus({
        preventScroll: true
      }), 0);
    }
  }
  unselect() {
    if (this.isSelected) {
      this.isSelected = false;
      this.#h?.classList.add("hidden");
      this.div?.classList.remove("selectedEditor");
      if (this.div?.contains(document.activeElement)) {
        this._uiManager.currentLayer.div.focus({
          preventScroll: true
        });
      }
      this._editToolbar?.hide();
      this.#i?.toggleAltTextBadge(true);
      if (this.hasComment) {
        this._uiManager.toggleComment(this, false, false);
      }
    }
  }
  updateParams(t, e) {}
  disableEditing() {}
  enableEditing() {}
  get canChangeContent() {
    return false;
  }
  enterInEditMode() {
    if (this.canChangeContent) {
      this.enableEditMode();
      this.div.focus();
    }
  }
  dblclick(t) {
    if (t.target.nodeName !== "BUTTON") {
      this.enterInEditMode();
      this.parent.updateToolbar({
        mode: this.constructor._editorType,
        editId: this.id
      });
    }
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return this.#g;
  }
  set isEditing(t) {
    this.#g = t;
    this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return true;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = false) {
    if (e) {
      this.#w ||= new Map();
      const {
        action
      } = t;
      let i = this.#w.get(action);
      if (i) {
        clearTimeout(i);
      }
      i = setTimeout(() => {
        this._reportTelemetry(t);
        this.#w.delete(action);
        if (this.#w.size === 0) {
          this.#w = null;
        }
      }, M._telemetryTimeout);
      this.#w.set(action, i);
      return;
    }
    t.type ||= this.editorType;
    this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t);
    this._isVisible = t;
  }
  enable() {
    if (this.div) {
      this.div.tabIndex = 0;
    }
    this.#n = false;
  }
  disable() {
    if (this.div) {
      this.div.tabIndex = -1;
    }
    this.#n = true;
  }
  updateFakeAnnotationElement(t) {
    if (!this.#d && !this.deleted) {
      this.#d = t.addFakeAnnotation(this);
      return;
    }
    if (this.deleted) {
      this.#d.remove();
      this.#d = null;
      return;
    }
    if (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) {
      this.#d.updateEdited({
        rect: this.getPDFRect(),
        popup: this.comment
      });
    }
  }
  renderAnnotationElement(t) {
    if (this.deleted) {
      t.hide();
      return null;
    }
    let e = t.container.querySelector(".annotationContent");
    if (!e) {
      e = document.createElement("div");
      e.classList.add("annotationContent", this.editorType);
      t.container.prepend(e);
    } else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div");
      e.classList.add("annotationContent", this.editorType);
      s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild
    } = t.container;
    if (firstChild?.nodeName === "DIV" && firstChild.classList.contains("annotationContent")) {
      firstChild.remove();
    }
  }
}
class _n extends M {
  constructor(t) {
    super(t);
    this.annotationElementId = t.annotationElementId;
    this.deleted = true;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const Ks = 3285377520;
const yt = 4294901760;
const xt = 65535;
class Ei {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Ks;
    this.h2 = t ? t & 4294967295 : Ks;
  }
  update(t) {
    let e;
    let s;
    if (typeof t === "string") {
      e = new Uint8Array(t.length * 2);
      s = 0;
      for (let p = 0, b = t.length; p < b; p++) {
        const m = t.charCodeAt(p);
        if (m <= 255) {
          e[s++] = m;
        } else {
          e[s++] = m >>> 8;
          e[s++] = m & 255;
        }
      }
    } else if (ArrayBuffer.isView(t)) {
      e = t.slice();
      s = e.byteLength;
    } else {
      throw new Error("Invalid data format, must be a string or TypedArray.");
    }
    const i = s >> 2;
    const n = s - i * 4;
    const r = new Uint32Array(e.buffer, 0, i);
    let a = 0;
    let o = 0;
    let l = this.h1;
    let h = this.h2;
    const c = 3432918353;
    const u = 461845907;
    const f = c & xt;
    const g = u & xt;
    for (let p = 0; p < i; p++) {
      if (p & 1) {
        a = r[p];
        a = a * c & yt | a * f & xt;
        a = a << 15 | a >>> 17;
        a = a * u & yt | a * g & xt;
        l ^= a;
        l = l << 13 | l >>> 19;
        l = l * 5 + 3864292196;
      } else {
        o = r[p];
        o = o * c & yt | o * f & xt;
        o = o << 15 | o >>> 17;
        o = o * u & yt | o * g & xt;
        h ^= o;
        h = h << 13 | h >>> 19;
        h = h * 5 + 3864292196;
      }
    }
    a = 0;
    switch (n) {
      case 3:
        a ^= e[i * 4 + 2] << 16;
      case 2:
        a ^= e[i * 4 + 1] << 8;
      case 1:
        a ^= e[i * 4];
        a = a * c & yt | a * f & xt;
        a = a << 15 | a >>> 17;
        a = a * u & yt | a * g & xt;
        if (i & 1) {
          l ^= a;
        } else {
          h ^= a;
        }
    }
    this.h1 = l;
    this.h2 = h;
  }
  hexdigest() {
    let t = this.h1;
    let e = this.h2;
    t ^= e >>> 1;
    t = t * 3981806797 & yt | t * 36045 & xt;
    e = e * 4283543511 & yt | ((e << 16 | t >>> 16) * 2950163797 & yt) >>> 16;
    t ^= e >>> 1;
    t = t * 444984403 & yt | t * 60499 & xt;
    e = e * 3301882366 & yt | ((e << 16 | t >>> 16) * 3120437893 & yt) >>> 16;
    t ^= e >>> 1;
    return (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const ms = Object.freeze({
  map: null,
  hash: "",
  transfer: undefined
});
class ks {
  #t = false;
  #e = null;
  #i = null;
  #s = new Map();
  constructor() {
    this.onSetModified = null;
    this.onResetModified = null;
    this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const s = this.#s.get(t);
    if (s === undefined) {
      return e;
    }
    return Object.assign(e, s);
  }
  getRawValue(t) {
    return this.#s.get(t);
  }
  remove(t) {
    const e = this.#s.get(t);
    if (e !== undefined && (e instanceof M && this.#i.delete(e.annotationElementId), this.#s.delete(t), this.#s.size === 0 && this.resetModified(), typeof this.onAnnotationEditor === "function")) {
      for (const s of this.#s.values()) {
        if (s instanceof M) {
          return;
        }
      }
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const s = this.#s.get(t);
    let i = false;
    if (s !== undefined) {
      for (const [n, r] of Object.entries(e)) {
        if (s[n] !== r) {
          i = true;
          s[n] = r;
        }
      }
    } else {
      i = true;
      this.#s.set(t, e);
    }
    if (i) {
      this.#a();
    }
    if (e instanceof M) {
      (this.#i ||= new Map()).set(e.annotationElementId, e);
      if (typeof this.onAnnotationEditor === "function") {
        this.onAnnotationEditor(e.constructor._type);
      }
    }
  }
  has(t) {
    return this.#s.has(t);
  }
  get size() {
    return this.#s.size;
  }
  #a() {
    if (!this.#t) {
      this.#t = true;
      if (typeof this.onSetModified === "function") {
        this.onSetModified();
      }
    }
  }
  resetModified() {
    if (this.#t) {
      this.#t = false;
      if (typeof this.onResetModified === "function") {
        this.onResetModified();
      }
    }
  }
  get print() {
    return new Ci(this);
  }
  get serializable() {
    if (this.#s.size === 0) {
      return ms;
    }
    const map = new Map();
    const e = new Ei();
    const s = [];
    const i = Object.create(null);
    let n = false;
    for (const [r, a] of this.#s) {
      const o = a instanceof M ? a.serialize(false, i) : a;
      if (o) {
        map.set(r, o);
        e.update(`${r}:${JSON.stringify(o)}`);
        n ||= !!o.bitmap;
      }
    }
    if (n) {
      for (const r of map.values()) {
        if (r.bitmap) {
          s.push(r.bitmap);
        }
      }
    }
    if (map.size > 0) {
      return {
        map,
        hash: e.hexdigest(),
        transfer: s
      };
    }
    return ms;
  }
  get editorStats() {
    let t = null;
    const e = new Map();
    let edited = 0;
    let deleted = 0;
    for (const n of this.#s.values()) {
      if (!(n instanceof M)) {
        n.popup && (n.popup.deleted ? deleted += 1 : edited += 1);
        continue;
      }
      if (n.isCommentDeleted) {
        deleted += 1;
      } else if (n.hasEditedComment) {
        edited += 1;
      }
      const r = n.telemetryFinalData;
      if (!r) {
        continue;
      }
      const {
        type
      } = r;
      if (!e.has(type)) {
        e.set(type, Object.getPrototypeOf(n).constructor);
      }
      t ||= Object.create(null);
      const o = t[type] ||= new Map();
      for (const [l, h] of Object.entries(r)) {
        if (l === "type") {
          continue;
        }
        let c = o.get(l);
        if (!c) {
          c = new Map();
          o.set(l, c);
        }
        const u = c.get(h) ?? 0;
        c.set(h, u + 1);
      }
    }
    if (deleted > 0 || edited > 0) {
      t ||= Object.create(null);
      t.comments = {
        deleted,
        edited
      };
    }
    if (!t) {
      return null;
    }
    for (const [n, r] of e) {
      t[n] = r.computeTelemetryFinalData(t[n]);
    }
    return t;
  }
  resetModifiedIds() {
    this.#e = null;
  }
  updateEditor(t, e) {
    const s = this.#i?.get(t);
    if (s) {
      s.updateFromAnnotationLayer(e);
      return true;
    }
    return false;
  }
  getEditor(t) {
    return this.#i?.get(t) || null;
  }
  get modifiedIds() {
    if (this.#e) {
      return this.#e;
    }
    const t = [];
    if (this.#i) {
      for (const e of this.#i.values()) {
        if (e.serialize()) {
          t.push(e.annotationElementId);
        }
      }
    }
    return this.#e = {
      ids: new Set(t),
      hash: t.join(",")
    };
  }
  [Symbol.iterator]() {
    return this.#s.entries();
  }
}
class Ci extends ks {
  #t;
  constructor(t) {
    super();
    const {
        map: e,
        hash: s,
        transfer: i
      } = t.serializable,
      n = structuredClone(e, i ? {
        transfer: i
      } : null);
    this.#t = {
      map: n,
      hash: s,
      transfer: i
    };
  }
  get print() {
    G("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return this.#t;
  }
  get modifiedIds() {
    return shadow(this, "modifiedIds", {
      ids: new Set(),
      hash: ""
    });
  }
}
class Sn {
  #t = new Set();
  constructor({
    ownerDocument = globalThis.document,
    styleElement = null
  }) {
    this._document = ownerDocument;
    this.nativeFontFaces = new Set();
    this.styleElement = null;
    this.loadingRequests = [];
    this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t);
    this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t);
    this._document.fonts.delete(t);
  }
  insertRule(t) {
    if (!this.styleElement) {
      this.styleElement = this._document.createElement("style");
      this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
    }
    const sheet = this.styleElement.sheet;
    sheet.insertRule(t, sheet.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces) {
      this._document.fonts.delete(t);
    }
    this.nativeFontFaces.clear();
    this.#t.clear();
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }
  }
  async loadSystemFont({
    systemFontInfo,
    disableFontFace,
    _inspectFont
  }) {
    if (!(!systemFontInfo || this.#t.has(systemFontInfo.loadedName))) {
      B(!disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
      if (this.isFontLoadingAPISupported) {
        const {
          loadedName,
          src,
          style
        } = systemFontInfo;
        const a = new FontFace(loadedName, src, style);
        this.addNativeFontFace(a);
        try {
          await a.load();
          this.#t.add(loadedName);
          _inspectFont?.(systemFontInfo);
        } catch {
          I(`Cannot load system font: ${systemFontInfo.baseFontName}, installing it could help to improve PDF rendering.`);
          this.removeNativeFontFace(a);
        }
        return;
      }
      G("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo) {
      return;
    }
    t.attached = true;
    if (t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (error) {
          I(`Failed to load font '${s.family}': '${error}'.`);
          t.disableFontFace = true;
          throw error;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      this.insertRule(e);
      if (this.isSyncFontLoadingSupported) {
        return;
      }
      await new Promise(resolve => {
        const i = this._queueLoadingCallback(resolve);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    const t = !!this._document?.fonts;
    return shadow(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return shadow(this, "isSyncFontLoadingSupported", ct || FeatureTest.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function complete() {
      B(!i.done, "completeRequest() cannot be called twice.");
      for (i.done = true; loadingRequests.length > 0 && loadingRequests[0].done;) {
        const n = loadingRequests.shift();
        setTimeout(n.callback, 0);
      }
    }
    const {
      loadingRequests
    } = this;
    const i = {
      done: false,
      complete,
      callback: t
    };
    loadingRequests.push(i);
    return i;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return shadow(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function s(w, v) {
      return w.charCodeAt(v) << 24 | w.charCodeAt(v + 1) << 16 | w.charCodeAt(v + 2) << 8 | w.charCodeAt(v + 3) & 255;
    }
    function i(_loadTestFont, v, _, S) {
      const E = _loadTestFont.substring(0, v);
      const C = _loadTestFont.substring(v + _);
      return E + S + C;
    }
    let n;
    let r;
    const a = this._document.createElement("canvas");
    a.width = 1;
    a.height = 1;
    const o = a.getContext("2d");
    let l = 0;
    function h(w, v) {
      if (++l > 30) {
        I("Load test font never loaded.");
        v();
        return;
      }
      o.font = `30px ${w}`;
      o.fillText(".", 0, 20);
      if (o.getImageData(0, 0, 1, 1).data[3] > 0) {
        v();
        return;
      }
      setTimeout(h.bind(null, w, v));
    }
    const c = `lt${Date.now()}${this.loadTestFontId++}`;
    let _loadTestFont = this._loadTestFont;
    _loadTestFont = i(_loadTestFont, 976, c.length, c);
    const g = 16;
    const p = 1482184792;
    let b = s(_loadTestFont, g);
    n = 0;
    for (r = c.length - 3; n < r; n += 4) {
      b = b - p + s(c, n) | 0;
    }
    if (n < c.length) {
      b = b - p + s(`${c}XXX`, n) | 0;
    }
    _loadTestFont = i(_loadTestFont, g, 4, sn(b));
    const m = `url(data:font/opentype;base64,${btoa(_loadTestFont)});`;
    const y = `@font-face {font-family:"${c}";src:${m}}`;
    this.insertRule(y);
    const A = this._document.createElement("div");
    A.style.visibility = "hidden";
    A.style.width = A.style.height = "10px";
    A.style.position = "absolute";
    A.style.top = A.style.left = "0px";
    for (const w of [t.loadedName, c]) {
      const v = this._document.createElement("span");
      v.textContent = "Hi";
      v.style.fontFamily = w;
      A.append(v);
    }
    this._document.body.append(A);
    h(c, () => {
      A.remove();
      e.complete();
    });
  }
}
class En {
  #t;
  constructor(t, e = null, s, i) {
    this.compiledGlyphs = Object.create(null);
    this.#t = t;
    this._inspectFont = e;
    if (s) {
      Object.assign(this, s);
    }
    if (i) {
      this.charProcOperatorList = i;
    }
  }
  createNativeFontFace() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    let t;
    if (!this.cssFontInfo) {
      t = new FontFace(this.loadedName, this.data, {});
    } else {
      const e = {
        weight: this.cssFontInfo.fontWeight
      };
      if (this.cssFontInfo.italicAngle) {
        e.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
      }
      t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
    }
    this._inspectFont?.(this);
    return t;
  }
  createFontFaceRule() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    const t = `url(data:${this.mimetype};base64,${wi(this.data)});`;
    let e;
    if (!this.cssFontInfo) {
      e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    } else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      if (this.cssFontInfo.italicAngle) {
        s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
      }
      e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${t}}`;
    }
    this._inspectFont?.(this, t);
    return e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== undefined) {
      return this.compiledGlyphs[e];
    }
    const s = `${this.loadedName}_path_${e}`;
    let i;
    try {
      i = t.get(s);
    } catch (error) {
      I(`getPathGenerator - ignoring character: "${error}".`);
    }
    const n = new Path2D(i || "");
    if (!this.fontExtraProperties) {
      t.delete(s);
    }
    return this.compiledGlyphs[e] = n;
  }
  get black() {
    return this.#t.black;
  }
  get bold() {
    return this.#t.bold;
  }
  get disableFontFace() {
    return this.#t.disableFontFace ?? false;
  }
  get fontExtraProperties() {
    return this.#t.fontExtraProperties ?? false;
  }
  get isInvalidPDFjsFont() {
    return this.#t.isInvalidPDFjsFont;
  }
  get isType3Font() {
    return this.#t.isType3Font;
  }
  get italic() {
    return this.#t.italic;
  }
  get missingFile() {
    return this.#t.missingFile;
  }
  get remeasure() {
    return this.#t.remeasure;
  }
  get vertical() {
    return this.#t.vertical;
  }
  get ascent() {
    return this.#t.ascent;
  }
  get defaultWidth() {
    return this.#t.defaultWidth;
  }
  get descent() {
    return this.#t.descent;
  }
  get bbox() {
    return this.#t.bbox;
  }
  get fontMatrix() {
    return this.#t.fontMatrix;
  }
  get fallbackName() {
    return this.#t.fallbackName;
  }
  get loadedName() {
    return this.#t.loadedName;
  }
  get mimetype() {
    return this.#t.mimetype;
  }
  get name() {
    return this.#t.name;
  }
  get data() {
    return this.#t.data;
  }
  clearData() {
    this.#t.clearData();
  }
  get cssFontInfo() {
    return this.#t.cssFontInfo;
  }
  get systemFontInfo() {
    return this.#t.systemFontInfo;
  }
  get defaultVMetrics() {
    return this.#t.defaultVMetrics;
  }
}
function Cn(url) {
  if (url instanceof URL) {
    return url.href;
  }
  if (typeof url === "string") {
    if (ct) {
      return url;
    }
    const t = URL.parse(url, window.location);
    if (t) {
      return t.href;
    }
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function xn(data) {
  if (ct && typeof Buffer !== "undefined" && data instanceof Buffer) {
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  }
  if (data instanceof Uint8Array && data.byteLength === data.buffer.byteLength) {
    return data;
  }
  if (typeof data === "string") {
    return Se(data);
  }
  if (data instanceof ArrayBuffer || ArrayBuffer.isView(data) || typeof data === "object" && !isNaN(data?.length)) {
    return new Uint8Array(data);
  }
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function De(d) {
  if (typeof d !== "string") {
    return null;
  }
  if (d.endsWith("/")) {
    return d;
  }
  throw new Error(`Invalid factory url: "${d}" must include trailing slash.`);
}
const bs = d => typeof d === "object" && Number.isInteger(d?.num) && d.num >= 0 && Number.isInteger(d?.gen) && d.gen >= 0;
const Tn = d => typeof d === "object" && typeof d?.name === "string";
export const isValidExplicitDest = ln.bind(null, bs, Tn);
class kn {
  #t = new Map();
  #e = Promise.resolve();
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    this.#e.then(() => {
      for (const [i] of this.#t) {
        i.call(this, s);
      }
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if (s?.signal instanceof AbortSignal) {
      const {
        signal
      } = s;
      if (signal.aborted) {
        I("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const r = () => this.removeEventListener(t, e);
      i = () => signal.removeEventListener("abort", r);
      signal.addEventListener("abort", r);
    }
    this.#t.set(e, i);
  }
  removeEventListener(t, e) {
    this.#t.get(e)?.();
    this.#t.delete(e);
  }
  terminate() {
    for (const [, t] of this.#t) {
      t?.();
    }
    this.#t.clear();
  }
}
const Le = {
  DATA: 1,
  ERROR: 2
};
const tt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Qs() {}
function pt(d) {
  if (d instanceof AbortException || d instanceof InvalidPDFException || d instanceof js || d instanceof ResponseException || d instanceof ns) {
    return d;
  }
  if (!(d instanceof Error || typeof d === "object" && d !== null)) {
    G('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
  }
  switch (d.name) {
    case "AbortException":
      return new AbortException(d.message);
    case "InvalidPDFException":
      return new InvalidPDFException(d.message);
    case "PasswordException":
      return new js(d.message, d.code);
    case "ResponseException":
      return new ResponseException(d.message, d.status, d.missing);
    case "UnknownErrorException":
      return new ns(d.message, d.details);
  }
  return new ns(d.message, d.toString());
}
class pe {
  #t = new AbortController();
  constructor(t, e, s) {
    this.sourceName = t;
    this.targetName = e;
    this.comObj = s;
    this.callbackId = 1;
    this.streamId = 1;
    this.streamSinks = Object.create(null);
    this.streamControllers = Object.create(null);
    this.callbackCapabilities = Object.create(null);
    this.actionHandler = Object.create(null);
    s.addEventListener("message", this.#e.bind(this), {
      signal: this.#t.signal
    });
  }
  #e({
    data
  }) {
    if (data.targetName !== this.sourceName) {
      return;
    }
    if (data.stream) {
      this.#s(data);
      return;
    }
    if (data.callback) {
      const s = data.callbackId;
      const i = this.callbackCapabilities[s];
      if (!i) {
        throw new Error(`Cannot resolve callback ${s}`);
      }
      delete this.callbackCapabilities[s];
      if (data.callback === Le.DATA) {
        i.resolve(data.data);
      } else if (data.callback === Le.ERROR) {
        i.reject(pt(data.reason));
      } else {
        throw new Error("Unexpected callback case");
      }
      return;
    }
    const e = this.actionHandler[data.action];
    if (!e) {
      throw new Error(`Unknown action from worker: ${data.action}`);
    }
    if (data.callbackId) {
      const sourceName = this.sourceName;
      const targetName = data.sourceName;
      const n = this.comObj;
      Promise.try(e, data.data).then(r => {
        n.postMessage({
          sourceName,
          targetName,
          callback: Le.DATA,
          callbackId: data.callbackId,
          data: r
        });
      }, r => {
        n.postMessage({
          sourceName,
          targetName,
          callback: Le.ERROR,
          callbackId: data.callbackId,
          reason: pt(r)
        });
      });
      return;
    }
    if (data.streamId) {
      this.#i(data);
      return;
    }
    e(data.data);
  }
  on(t, e) {
    const actionHandler = this.actionHandler;
    if (actionHandler[t]) {
      throw new Error(`There is already an actionName called "${t}"`);
    }
    actionHandler[t] = e;
  }
  send(t, e, s) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t, e, s) {
    const callbackId = this.callbackId++;
    const n = Promise.withResolvers();
    this.callbackCapabilities[callbackId] = n;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId,
        data: e
      }, s);
    } catch (error) {
      n.reject(error);
    }
    return n.promise;
  }
  sendWithStream(t, e, s, i) {
    const streamId = this.streamId++;
    const sourceName = this.sourceName;
    const targetName = this.targetName;
    const comObj = this.comObj;
    return new ReadableStream({
      start: controller => {
        const startCall = Promise.withResolvers();
        this.streamControllers[streamId] = {
          controller,
          startCall,
          pullCall: null,
          cancelCall: null,
          isClosed: false
        };
        comObj.postMessage({
          sourceName,
          targetName,
          action: t,
          streamId,
          data: e,
          desiredSize: controller.desiredSize
        }, i);
        return startCall.promise;
      },
      pull: l => {
        const h = Promise.withResolvers();
        this.streamControllers[streamId].pullCall = h;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: tt.PULL,
          streamId,
          desiredSize: l.desiredSize
        });
        return h.promise;
      },
      cancel: l => {
        B(l instanceof Error, "cancel must have a valid reason");
        const h = Promise.withResolvers();
        this.streamControllers[streamId].cancelCall = h;
        this.streamControllers[streamId].isClosed = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: tt.CANCEL,
          streamId,
          reason: pt(l)
        });
        return h.promise;
      }
    }, s);
  }
  #i(t) {
    const t_streamId = t.streamId;
    const sourceName = this.sourceName;
    const t_sourceName = t.sourceName;
    const comObj = this.comObj;
    const r = this;
    const a = this.actionHandler[t.action];
    const o = {
      enqueue(l, h = 1, c) {
        if (this.isCancelled) {
          return;
        }
        const desiredSize = this.desiredSize;
        this.desiredSize -= h;
        if (desiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = Promise.withResolvers();
          this.ready = this.sinkCapability.promise;
        }
        comObj.postMessage({
          sourceName,
          targetName: t_sourceName,
          stream: tt.ENQUEUE,
          streamId: t_streamId,
          chunk: l
        }, c);
      },
      close() {
        if (!this.isCancelled) {
          this.isCancelled = true;
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: tt.CLOSE,
            streamId: t_streamId
          });
          delete r.streamSinks[t_streamId];
        }
      },
      error(l) {
        B(l instanceof Error, "error must have a valid reason");
        if (!this.isCancelled) {
          this.isCancelled = true;
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: tt.ERROR,
            streamId: t_streamId,
            reason: pt(l)
          });
        }
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: t.desiredSize,
      ready: null
    };
    o.sinkCapability.resolve();
    o.ready = o.sinkCapability.promise;
    this.streamSinks[t_streamId] = o;
    Promise.try(a, t.data, o).then(() => {
      comObj.postMessage({
        sourceName,
        targetName: t_sourceName,
        stream: tt.START_COMPLETE,
        streamId: t_streamId,
        success: true
      });
    }, l => {
      comObj.postMessage({
        sourceName,
        targetName: t_sourceName,
        stream: tt.START_COMPLETE,
        streamId: t_streamId,
        reason: pt(l)
      });
    });
  }
  #s(t) {
    const t_streamId = t.streamId;
    const sourceName = this.sourceName;
    const t_sourceName = t.sourceName;
    const comObj = this.comObj;
    const r = this.streamControllers[t_streamId];
    const a = this.streamSinks[t_streamId];
    switch (t.stream) {
      case tt.START_COMPLETE:
        if (t.success) {
          r.startCall.resolve();
        } else {
          r.startCall.reject(pt(t.reason));
        }
        break;
      case tt.PULL_COMPLETE:
        if (t.success) {
          r.pullCall.resolve();
        } else {
          r.pullCall.reject(pt(t.reason));
        }
        break;
      case tt.PULL:
        if (!a) {
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: tt.PULL_COMPLETE,
            streamId: t_streamId,
            success: true
          });
          break;
        }
        if (a.desiredSize <= 0 && t.desiredSize > 0) {
          a.sinkCapability.resolve();
        }
        a.desiredSize = t.desiredSize;
        Promise.try(a.onPull || Qs).then(() => {
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: tt.PULL_COMPLETE,
            streamId: t_streamId,
            success: true
          });
        }, l => {
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: tt.PULL_COMPLETE,
            streamId: t_streamId,
            reason: pt(l)
          });
        });
        break;
      case tt.ENQUEUE:
        B(r, "enqueue should have stream controller");
        if (r.isClosed) {
          break;
        }
        r.controller.enqueue(t.chunk);
        break;
      case tt.CLOSE:
        B(r, "close should have stream controller");
        if (r.isClosed) {
          break;
        }
        r.isClosed = true;
        r.controller.close();
        this.#a(r, t_streamId);
        break;
      case tt.ERROR:
        B(r, "error should have stream controller");
        r.controller.error(pt(t.reason));
        this.#a(r, t_streamId);
        break;
      case tt.CANCEL_COMPLETE:
        if (t.success) {
          r.cancelCall.resolve();
        } else {
          r.cancelCall.reject(pt(t.reason));
        }
        this.#a(r, t_streamId);
        break;
      case tt.CANCEL:
        if (!a) {
          break;
        }
        const o = pt(t.reason);
        Promise.try(a.onCancel || Qs, o).then(() => {
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: tt.CANCEL_COMPLETE,
            streamId: t_streamId,
            success: true
          });
        }, l => {
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: tt.CANCEL_COMPLETE,
            streamId: t_streamId,
            reason: pt(l)
          });
        });
        a.sinkCapability.reject(o);
        a.isCancelled = true;
        delete this.streamSinks[t_streamId];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  }
  async #a(t, e) {
    await Promise.allSettled([t.startCall?.promise, t.pullCall?.promise, t.cancelCall?.promise]);
    delete this.streamControllers[e];
  }
  destroy() {
    this.#t?.abort();
    this.#t = null;
  }
}
class xi {
  #t = false;
  constructor({
    enableHWA = false
  }) {
    this.#t = enableHWA;
  }
  create(t, e) {
    if (t <= 0 || e <= 0) {
      throw new Error("Invalid canvas size");
    }
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !this.#t
      })
    };
  }
  reset(t, e, s) {
    if (!t.canvas) {
      throw new Error("Canvas is not specified");
    }
    if (e <= 0 || s <= 0) {
      throw new Error("Invalid canvas size");
    }
    t.canvas.width = e;
    t.canvas.height = s;
  }
  destroy(t) {
    if (!t.canvas) {
      throw new Error("Canvas is not specified");
    }
    t.canvas.width = 0;
    t.canvas.height = 0;
    t.canvas = null;
    t.context = null;
  }
  _createCanvas(t, e) {
    G("Abstract method `_createCanvas` called.");
  }
}
class Mn extends xi {
  constructor({
    ownerDocument = globalThis.document,
    enableHWA = false
  }) {
    super({
      enableHWA
    });
    this._document = ownerDocument;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    s.width = t;
    s.height = e;
    return s;
  }
}
class Ti {
  constructor({
    baseUrl = null,
    isCompressed = true
  }) {
    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }
  async fetch({
    name
  }) {
    if (!this.baseUrl) {
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    }
    if (!name) {
      throw new Error("CMap name must be specified.");
    }
    const e = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then(cMapData => ({
      cMapData,
      isCompressed: this.isCompressed
    })).catch(s => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    G("Abstract method `_fetch` called.");
  }
}
class Js extends Ti {
  async _fetch(t) {
    const e = await fetchData(t, this.isCompressed ? "arraybuffer" : "text");
    if (e instanceof ArrayBuffer) {
      return new Uint8Array(e);
    }
    return Se(e);
  }
}
class Pi {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, i, n) {
    return "none";
  }
  destroy(t = false) {}
}
class Rn extends Pi {
  #t;
  #e;
  #i;
  #s;
  #a;
  #n;
  #r = 0;
  constructor({
    docId,
    ownerDocument = globalThis.document
  }) {
    super();
    this.#s = docId;
    this.#a = ownerDocument;
  }
  get #o() {
    return this.#e ||= new Map();
  }
  get #h() {
    return this.#n ||= new Map();
  }
  get #l() {
    if (!this.#i) {
      const t = this.#a.createElement("div");
      const {
        style
      } = t;
      style.visibility = "hidden";
      style.contain = "strict";
      style.width = style.height = 0;
      style.position = "absolute";
      style.top = style.left = 0;
      style.zIndex = -1;
      const s = this.#a.createElementNS(Rt, "svg");
      s.setAttribute("width", 0);
      s.setAttribute("height", 0);
      this.#i = this.#a.createElementNS(Rt, "defs");
      t.append(s);
      s.append(this.#i);
      this.#a.body.append(t);
    }
    return this.#i;
  }
  #u(t) {
    if (t.length === 1) {
      const o = t[0];
      const l = new Array(256);
      for (let c = 0; c < 256; c++) {
        l[c] = o[c] / 255;
      }
      const h = l.join(",");
      return [h, h, h];
    }
    const [e, s, i] = t;
    const n = new Array(256);
    const r = new Array(256);
    const a = new Array(256);
    for (let o = 0; o < 256; o++) {
      n[o] = e[o] / 255;
      r[o] = s[o] / 255;
      a[o] = i[o] / 255;
    }
    return [n.join(","), r.join(","), a.join(",")];
  }
  #d(t) {
    if (this.#t === undefined) {
      this.#t = "";
      const e = this.#a.URL;
      e !== this.#a.baseURI && (isDataScheme(e) ? I('#createUrl: ignore "data:"-URL for performance reasons.') : this.#t = updateUrlHash(e, ""));
    }
    return `url(${this.#t}#${t})`;
  }
  addFilter(t) {
    if (!t) {
      return "none";
    }
    let e = this.#o.get(t);
    if (e) {
      return e;
    }
    const [s, i, n] = this.#u(t);
    const r = t.length === 1 ? s : `${s}${i}${n}`;
    e = this.#o.get(r);
    if (e) {
      this.#o.set(t, e);
      return e;
    }
    const a = `g_${this.#s}_transfer_map_${this.#r++}`;
    const o = this.#d(a);
    this.#o.set(t, o);
    this.#o.set(r, o);
    const l = this.#p(a);
    this.#g(s, i, n, l);
    return o;
  }
  addHCMFilter(t, e) {
    const s = `${t}-${e}`;
    const i = "base";
    let n = this.#h.get(i);
    if (n?.key === s || (n ? (n.filter?.remove(), n.key = s, n.url = "none", n.filter = null) : (n = {
      key: s,
      url: "none",
      filter: null
    }, this.#h.set(i, n)), !t || !e)) {
      return n.url;
    }
    const r = this.#A(t);
    t = Util.makeHexColor(...r);
    const a = this.#A(e);
    e = Util.makeHexColor(...a);
    this.#l.style.color = "";
    if (t === "#000000" && e === "#ffffff" || t === e) {
      return n.url;
    }
    const o = new Array(256);
    for (let f = 0; f <= 255; f++) {
      const g = f / 255;
      o[f] = g <= 0.03928 ? g / 12.92 : ((g + 0.055) / 1.055) ** 2.4;
    }
    const l = o.join(",");
    const h = `g_${this.#s}_hcm_filter`;
    const c = n.filter = this.#p(h);
    this.#g(l, l, l, c);
    this.#m(c);
    const u = (f, g) => {
      const p = r[f] / 255;
      const b = a[f] / 255;
      const m = new Array(g + 1);
      for (let y = 0; y <= g; y++) {
        m[y] = p + y / g * (b - p);
      }
      return m.join(",");
    };
    this.#g(u(0, 5), u(1, 5), u(2, 5), c);
    n.url = this.#d(h);
    return n.url;
  }
  addAlphaFilter(t) {
    let e = this.#o.get(t);
    if (e) {
      return e;
    }
    const [s] = this.#u([t]);
    const i = `alpha_${s}`;
    e = this.#o.get(i);
    if (e) {
      this.#o.set(t, e);
      return e;
    }
    const n = `g_${this.#s}_alpha_map_${this.#r++}`;
    const r = this.#d(n);
    this.#o.set(t, r);
    this.#o.set(i, r);
    const a = this.#p(n);
    this.#b(s, a);
    return r;
  }
  addLuminosityFilter(t) {
    let e = this.#o.get(t || "luminosity");
    if (e) {
      return e;
    }
    let s;
    let i;
    if (t) {
      [s] = this.#u([t]);
      i = `luminosity_${s}`;
    } else {
      i = "luminosity";
    }
    e = this.#o.get(i);
    if (e) {
      this.#o.set(t, e);
      return e;
    }
    const n = `g_${this.#s}_luminosity_map_${this.#r++}`;
    const r = this.#d(n);
    this.#o.set(t, r);
    this.#o.set(i, r);
    const a = this.#p(n);
    this.#f(a);
    if (t) {
      this.#b(s, a);
    }
    return r;
  }
  addHighlightHCMFilter(t, e, s, i, n) {
    const r = `${e}-${s}-${i}-${n}`;
    let a = this.#h.get(t);
    if (a?.key === r || (a ? (a.filter?.remove(), a.key = r, a.url = "none", a.filter = null) : (a = {
      key: r,
      url: "none",
      filter: null
    }, this.#h.set(t, a)), !e || !s)) {
      return a.url;
    }
    const [o, l] = [e, s].map(this.#A.bind(this));
    let h = Math.round(0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]);
    let c = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]);
    let [u, f] = [i, n].map(this.#A.bind(this));
    if (c < h) {
      [h, c, u, f] = [c, h, f, u];
    }
    this.#l.style.color = "";
    const g = (m, y, A) => {
      const w = new Array(256);
      const v = (c - h) / A;
      const _ = m / 255;
      const S = (y - m) / (255 * A);
      let E = 0;
      for (let C = 0; C <= A; C++) {
        const k = Math.round(h + C * v);
        const T = _ + C * S;
        for (let U = E; U <= k; U++) {
          w[U] = T;
        }
        E = k + 1;
      }
      for (let C = E; C < 256; C++) {
        w[C] = w[E - 1];
      }
      return w.join(",");
    };
    const p = `g_${this.#s}_hcm_${t}_filter`;
    const b = a.filter = this.#p(p);
    this.#m(b);
    this.#g(g(u[0], f[0], 5), g(u[1], f[1], 5), g(u[2], f[2], 5), b);
    a.url = this.#d(p);
    return a.url;
  }
  destroy(t = false) {
    if (!(t && this.#n?.size)) {
      this.#i?.parentNode.parentNode.remove();
      this.#i = null;
      this.#e?.clear();
      this.#e = null;
      this.#n?.clear();
      this.#n = null;
      this.#r = 0;
    }
  }
  #f(t) {
    const e = this.#a.createElementNS(Rt, "feColorMatrix");
    e.setAttribute("type", "matrix");
    e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0");
    t.append(e);
  }
  #m(t) {
    const e = this.#a.createElementNS(Rt, "feColorMatrix");
    e.setAttribute("type", "matrix");
    e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
    t.append(e);
  }
  #p(t) {
    const e = this.#a.createElementNS(Rt, "filter");
    e.setAttribute("color-interpolation-filters", "sRGB");
    e.setAttribute("id", t);
    this.#l.append(e);
    return e;
  }
  #c(t, e, s) {
    const i = this.#a.createElementNS(Rt, e);
    i.setAttribute("type", "discrete");
    i.setAttribute("tableValues", s);
    t.append(i);
  }
  #g(t, e, s, i) {
    const n = this.#a.createElementNS(Rt, "feComponentTransfer");
    i.append(n);
    this.#c(n, "feFuncR", t);
    this.#c(n, "feFuncG", e);
    this.#c(n, "feFuncB", s);
  }
  #b(t, e) {
    const s = this.#a.createElementNS(Rt, "feComponentTransfer");
    e.append(s);
    this.#c(s, "feFuncA", t);
  }
  #A(t) {
    this.#l.style.color = t;
    return getRGB(getComputedStyle(this.#l).getPropertyValue("color"));
  }
}
class ki {
  constructor({
    baseUrl = null
  }) {
    this.baseUrl = baseUrl;
  }
  async fetch({
    filename
  }) {
    if (!this.baseUrl) {
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    }
    if (!filename) {
      throw new Error("Font filename must be specified.");
    }
    const e = `${this.baseUrl}${filename}`;
    return this._fetch(e).catch(s => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    G("Abstract method `_fetch` called.");
  }
}
class Zs extends ki {
  async _fetch(t) {
    const e = await fetchData(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
class Mi {
  constructor({
    baseUrl = null
  }) {
    this.baseUrl = baseUrl;
  }
  async fetch({
    filename
  }) {
    if (!this.baseUrl) {
      throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
    }
    if (!filename) {
      throw new Error("Wasm filename must be specified.");
    }
    const e = `${this.baseUrl}${filename}`;
    return this._fetch(e).catch(s => {
      throw new Error(`Unable to load wasm data at: ${e}`);
    });
  }
  async _fetch(t) {
    G("Abstract method `_fetch` called.");
  }
}
class ti extends Mi {
  async _fetch(t) {
    const e = await fetchData(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
if (ct) {
  I("Please use the `legacy` build in Node.js environments.");
}
async function Ms(d) {
  const e = await process.getBuiltinModule("fs").promises.readFile(d);
  return new Uint8Array(e);
}
class Dn extends Pi {}
class Ln extends xi {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class In extends Ti {
  async _fetch(t) {
    return Ms(t);
  }
}
class Fn extends ki {
  async _fetch(t) {
    return Ms(t);
  }
}
class Nn extends Mi {
  async _fetch(t) {
    return Ms(t);
  }
}
const Kt = "__forcedDependency";
const {
  floor,
  ceil
} = Math;
function Ie(d, t, e, s, i, n) {
  d[t * 4 + 0] = Math.min(d[t * 4 + 0], e);
  d[t * 4 + 1] = Math.min(d[t * 4 + 1], s);
  d[t * 4 + 2] = Math.max(d[t * 4 + 2], i);
  d[t * 4 + 3] = Math.max(d[t * 4 + 3], n);
}
const ys = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
class On {
  #t;
  #e;
  constructor(t, e) {
    this.#t = t;
    this.#e = e;
  }
  get length() {
    return this.#t.length;
  }
  isEmpty(t) {
    return this.#t[t] === ys;
  }
  minX(t) {
    return this.#e[t * 4 + 0] / 256;
  }
  minY(t) {
    return this.#e[t * 4 + 1] / 256;
  }
  maxX(t) {
    return (this.#e[t * 4 + 2] + 1) / 256;
  }
  maxY(t) {
    return (this.#e[t * 4 + 3] + 1) / 256;
  }
}
const Fe = (d, t) => {
  if (!d) {
    return;
  }
  let e = d.get(t);
  if (!e) {
    e = {
      dependencies: new Set(),
      isRenderingOperation: false
    };
    d.set(t, e);
  }
  return e;
};
class Bn {
  #t = {
    __proto__: null
  };
  #e = {
    __proto__: null,
    transform: [],
    moveText: [],
    sameLineText: [],
    [Kt]: []
  };
  #i = new Map();
  #s = [];
  #a = [];
  #n = [[1, 0, 0, 1, 0, 0]];
  #r = [-Infinity, -Infinity, Infinity, Infinity];
  #o = new Float64Array([Infinity, Infinity, -Infinity, -Infinity]);
  #h = -1;
  #l = new Set();
  #u = new Map();
  #d = new Map();
  #f;
  #m;
  #p;
  #c;
  #g;
  constructor(t, e, s = false) {
    this.#f = t.width;
    this.#m = t.height;
    this.#b(e);
    if (s) {
      this.#g = new Map();
    }
  }
  growOperationsCount(t) {
    if (t >= this.#c.length) {
      this.#b(t, this.#c);
    }
  }
  #b(t, e) {
    const s = new ArrayBuffer(t * 4);
    this.#p = new Uint8ClampedArray(s);
    this.#c = new Uint32Array(s);
    if (e && e.length > 0) {
      this.#c.set(e);
      this.#c.fill(ys, e.length);
    } else {
      this.#c.fill(ys);
    }
  }
  save(t) {
    this.#t = {
      __proto__: this.#t
    };
    this.#e = {
      __proto__: this.#e,
      transform: {
        __proto__: this.#e.transform
      },
      moveText: {
        __proto__: this.#e.moveText
      },
      sameLineText: {
        __proto__: this.#e.sameLineText
      },
      [Kt]: {
        __proto__: this.#e[Kt]
      }
    };
    this.#r = {
      __proto__: this.#r
    };
    this.#s.push(t);
    return this;
  }
  restore(t) {
    const e = Object.getPrototypeOf(this.#t);
    if (e === null) {
      return this;
    }
    this.#t = e;
    this.#e = Object.getPrototypeOf(this.#e);
    this.#r = Object.getPrototypeOf(this.#r);
    const s = this.#s.pop();
    if (s !== undefined) {
      Fe(this.#g, t)?.dependencies.add(s);
      this.#c[t] = this.#c[s];
    }
    return this;
  }
  recordOpenMarker(t) {
    this.#s.push(t);
    return this;
  }
  getOpenMarker() {
    if (this.#s.length === 0) {
      return null;
    }
    return this.#s.at(-1);
  }
  recordCloseMarker(t) {
    const e = this.#s.pop();
    if (e !== undefined) {
      Fe(this.#g, t)?.dependencies.add(e);
      this.#c[t] = this.#c[e];
    }
    return this;
  }
  beginMarkedContent(t) {
    this.#a.push(t);
    return this;
  }
  endMarkedContent(t) {
    const e = this.#a.pop();
    if (e !== undefined) {
      Fe(this.#g, t)?.dependencies.add(e);
      this.#c[t] = this.#c[e];
    }
    return this;
  }
  pushBaseTransform(t) {
    this.#n.push(Util.multiplyByDOMMatrix(this.#n.at(-1), t.getTransform()));
    return this;
  }
  popBaseTransform() {
    if (this.#n.length > 1) {
      this.#n.pop();
    }
    return this;
  }
  recordSimpleData(t, e) {
    this.#t[t] = e;
    return this;
  }
  recordIncrementalData(t, e) {
    this.#e[t].push(e);
    return this;
  }
  resetIncrementalData(t, e) {
    this.#e[t].length = 0;
    return this;
  }
  recordNamedData(t, e) {
    this.#i.set(t, e);
    return this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    this.#t[t] = this.#i.get(e) ?? s;
  }
  recordFutureForcedDependency(t, e) {
    this.recordIncrementalData(Kt, e);
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t) {
      if (e in this.#t) {
        this.recordFutureForcedDependency(e, this.#t[e]);
      }
    }
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of this.#l) {
      this.recordFutureForcedDependency(Kt, t);
    }
    return this;
  }
  resetBBox(t) {
    if (this.#h !== t) {
      this.#h = t;
      this.#o[0] = Infinity;
      this.#o[1] = Infinity;
      this.#o[2] = -Infinity;
      this.#o[3] = -Infinity;
    }
    return this;
  }
  recordClipBox(t, e, s, i, n, r) {
    const a = Util.multiplyByDOMMatrix(this.#n.at(-1), e.getTransform());
    const o = [Infinity, Infinity, -Infinity, -Infinity];
    Util.axialAlignedBoundingBox([s, n, i, r], a, o);
    const l = Util.intersect(this.#r, o);
    if (l) {
      this.#r[0] = l[0];
      this.#r[1] = l[1];
      this.#r[2] = l[2];
      this.#r[3] = l[3];
    } else {
      this.#r[0] = this.#r[1] = Infinity;
      this.#r[2] = this.#r[3] = -Infinity;
    }
    return this;
  }
  recordBBox(t, e, s, i, n, r) {
    const a = this.#r;
    if (a[0] === Infinity) {
      return this;
    }
    const o = Util.multiplyByDOMMatrix(this.#n.at(-1), e.getTransform());
    if (a[0] === -Infinity) {
      Util.axialAlignedBoundingBox([s, n, i, r], o, this.#o);
      return this;
    }
    const l = [Infinity, Infinity, -Infinity, -Infinity];
    Util.axialAlignedBoundingBox([s, n, i, r], o, l);
    this.#o[0] = Math.min(this.#o[0], Math.max(l[0], a[0]));
    this.#o[1] = Math.min(this.#o[1], Math.max(l[1], a[1]));
    this.#o[2] = Math.max(this.#o[2], Math.min(l[2], a[2]));
    this.#o[3] = Math.max(this.#o[3], Math.min(l[3], a[3]));
    return this;
  }
  recordCharacterBBox(t, e, s, i = 1, n = 0, r = 0, a) {
    const s_bbox = s.bbox;
    let l;
    let h;
    if (s_bbox && (l = s_bbox[2] !== s_bbox[0] && s_bbox[3] !== s_bbox[1] && this.#d.get(s), l !== false && (h = [0, 0, 0, 0], Util.axialAlignedBoundingBox(s_bbox, s.fontMatrix, h), (i !== 1 || n !== 0 || r !== 0) && Util.scaleMinMax([i, 0, 0, -i, n, r], h), l))) {
      return this.recordBBox(t, e, h[0], h[2], h[1], h[3]);
    }
    if (!a) {
      return this.recordFullPageBBox(t);
    }
    const c = a();
    if (s_bbox && h && l === undefined && (l = h[0] <= n - c.actualBoundingBoxLeft && h[2] >= n + c.actualBoundingBoxRight && h[1] <= r - c.actualBoundingBoxAscent && h[3] >= r + c.actualBoundingBoxDescent, this.#d.set(s, l), l)) {
      return this.recordBBox(t, e, h[0], h[2], h[1], h[3]);
    }
    return this.recordBBox(t, e, n - c.actualBoundingBoxLeft, n + c.actualBoundingBoxRight, r - c.actualBoundingBoxAscent, r + c.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    this.#o[0] = Math.max(0, this.#r[0]);
    this.#o[1] = Math.max(0, this.#r[1]);
    this.#o[2] = Math.min(this.#f, this.#r[2]);
    this.#o[3] = Math.min(this.#m, this.#r[3]);
    return this;
  }
  getSimpleIndex(t) {
    return this.#t[t];
  }
  recordDependencies(t, e) {
    const s = this.#l;
    const i = this.#t;
    const n = this.#e;
    for (const r of e) {
      if (r in this.#t) {
        s.add(i[r]);
      } else if (r in n) {
        n[r].forEach(s.add, s);
      }
    }
    return this;
  }
  recordNamedDependency(t, e) {
    if (this.#i.has(e)) {
      this.#l.add(this.#i.get(e));
    }
    return this;
  }
  recordOperation(t, e = false) {
    this.recordDependencies(t, [Kt]);
    if (this.#g) {
      const s = Fe(this.#g, t);
      const {
        dependencies
      } = s;
      this.#l.forEach(dependencies.add, dependencies);
      this.#s.forEach(dependencies.add, dependencies);
      this.#a.forEach(dependencies.add, dependencies);
      dependencies.delete(t);
      s.isRenderingOperation = true;
    }
    if (this.#h === t) {
      const s = floor(this.#o[0] * 256 / this.#f);
      const i = floor(this.#o[1] * 256 / this.#m);
      const n = ceil(this.#o[2] * 256 / this.#f);
      const r = ceil(this.#o[3] * 256 / this.#m);
      Ie(this.#p, t, s, i, n, r);
      for (const a of this.#l) {
        if (a !== t) {
          Ie(this.#p, a, s, i, n, r);
        }
      }
      for (const a of this.#s) {
        if (a !== t) {
          Ie(this.#p, a, s, i, n, r);
        }
      }
      for (const a of this.#a) {
        if (a !== t) {
          Ie(this.#p, a, s, i, n, r);
        }
      }
      if (!e) {
        this.#l.clear();
        this.#h = -1;
      }
    }
    return this;
  }
  recordShowTextOperation(t, e = false) {
    const s = Array.from(this.#l);
    this.recordOperation(t, e);
    this.recordIncrementalData("sameLineText", t);
    for (const i of s) {
      this.recordIncrementalData("sameLineText", i);
    }
    return this;
  }
  bboxToClipBoxDropOperation(t, e = false) {
    if (this.#h === t) {
      this.#h = -1;
      this.#r[0] = Math.max(this.#r[0], this.#o[0]);
      this.#r[1] = Math.max(this.#r[1], this.#o[1]);
      this.#r[2] = Math.min(this.#r[2], this.#o[2]);
      this.#r[3] = Math.min(this.#r[3], this.#o[3]);
      if (!e) {
        this.#l.clear();
      }
    }
    return this;
  }
  _takePendingDependencies() {
    const t = this.#l;
    this.#l = new Set();
    return t;
  }
  _extractOperation(t) {
    const e = this.#u.get(t);
    this.#u.delete(t);
    return e;
  }
  _pushPendingDependencies(t) {
    for (const e of t) {
      this.#l.add(e);
    }
  }
  take() {
    this.#d.clear();
    return new On(this.#c, this.#p);
  }
  takeDebugMetadata() {
    return this.#g;
  }
}
class Ge {
  #t;
  #e;
  #i;
  #s = 0;
  #a = 0;
  constructor(t, e, s) {
    if (t instanceof Ge && t.#i === !!s) {
      return t;
    }
    this.#t = t;
    this.#e = e;
    this.#i = !!s;
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t) {
    this.#a++;
    this.#t.save(this.#e);
    return this;
  }
  restore(t) {
    if (this.#a > 0) {
      this.#t.restore(this.#e);
      this.#a--;
    }
    return this;
  }
  recordOpenMarker(t) {
    this.#s++;
    return this;
  }
  getOpenMarker() {
    if (this.#s > 0) {
      return this.#e;
    }
    return this.#t.getOpenMarker();
  }
  recordCloseMarker(t) {
    this.#s--;
    return this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    this.#t.pushBaseTransform(t);
    return this;
  }
  popBaseTransform() {
    this.#t.popBaseTransform();
    return this;
  }
  recordSimpleData(t, e) {
    this.#t.recordSimpleData(t, this.#e);
    return this;
  }
  recordIncrementalData(t, e) {
    this.#t.recordIncrementalData(t, this.#e);
    return this;
  }
  resetIncrementalData(t, e) {
    this.#t.resetIncrementalData(t, this.#e);
    return this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    this.#t.recordSimpleDataFromNamed(t, e, this.#e);
    return this;
  }
  recordFutureForcedDependency(t, e) {
    this.#t.recordFutureForcedDependency(t, this.#e);
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    this.#t.inheritSimpleDataAsFutureForcedDependencies(t);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    this.#t.inheritPendingDependenciesAsFutureForcedDependencies();
    return this;
  }
  resetBBox(t) {
    if (!this.#i) {
      this.#t.resetBBox(this.#e);
    }
    return this;
  }
  recordClipBox(t, e, s, i, n, r) {
    if (!this.#i) {
      this.#t.recordClipBox(this.#e, e, s, i, n, r);
    }
    return this;
  }
  recordBBox(t, e, s, i, n, r) {
    if (!this.#i) {
      this.#t.recordBBox(this.#e, e, s, i, n, r);
    }
    return this;
  }
  recordCharacterBBox(t, e, s, i, n, r, a) {
    if (!this.#i) {
      this.#t.recordCharacterBBox(this.#e, e, s, i, n, r, a);
    }
    return this;
  }
  recordFullPageBBox(t) {
    if (!this.#i) {
      this.#t.recordFullPageBBox(this.#e);
    }
    return this;
  }
  getSimpleIndex(t) {
    return this.#t.getSimpleIndex(t);
  }
  recordDependencies(t, e) {
    this.#t.recordDependencies(this.#e, e);
    return this;
  }
  recordNamedDependency(t, e) {
    this.#t.recordNamedDependency(this.#e, e);
    return this;
  }
  recordOperation(t) {
    this.#t.recordOperation(this.#e, true);
    return this;
  }
  recordShowTextOperation(t) {
    this.#t.recordShowTextOperation(this.#e, true);
    return this;
  }
  bboxToClipBoxDropOperation(t) {
    if (!this.#i) {
      this.#t.bboxToClipBoxDropOperation(this.#e, true);
    }
    return this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
}
const At = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
  transform: ["transform"],
  transformAndFill: ["transform", "fillColor"]
};
const at = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function As(d, _bbox) {
  if (!_bbox) {
    return;
  }
  const e = _bbox[2] - _bbox[0];
  const s = _bbox[3] - _bbox[1];
  const i = new Path2D();
  i.rect(_bbox[0], _bbox[1], e, s);
  d.clip(i);
}
class Rs {
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern() {
    G("Abstract method `getPattern` called.");
  }
}
class Hn extends Rs {
  constructor(t) {
    super();
    this._type = t[1];
    this._bbox = t[2];
    this._colorStops = t[3];
    this._p0 = t[4];
    this._p1 = t[5];
    this._r0 = t[6];
    this._r1 = t[7];
    this.matrix = null;
  }
  _createGradient(t) {
    let e;
    if (this._type === "axial") {
      e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
    } else if (this._type === "radial") {
      e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
    }
    for (const s of this._colorStops) {
      e.addColorStop(s[0], s[1]);
    }
    return e;
  }
  getPattern(t, e, s, i) {
    let n;
    if (i === at.STROKE || i === at.FILL) {
      const r = e.current.getClippedPathBoundingBox(i, Y(t)) || [0, 0, 0, 0];
      const a = Math.ceil(r[2] - r[0]) || 1;
      const o = Math.ceil(r[3] - r[1]) || 1;
      const l = e.cachedCanvases.getCanvas("pattern", a, o);
      const h = l.context;
      h.clearRect(0, 0, h.canvas.width, h.canvas.height);
      h.beginPath();
      h.rect(0, 0, h.canvas.width, h.canvas.height);
      h.translate(-r[0], -r[1]);
      s = Util.transform(s, [1, 0, 0, 1, r[0], r[1]]);
      h.transform(...e.baseTransform);
      if (this.matrix) {
        h.transform(...this.matrix);
      }
      As(h, this._bbox);
      h.fillStyle = this._createGradient(h);
      h.fill();
      n = t.createPattern(l.canvas, "no-repeat");
      const c = new DOMMatrix(s);
      n.setTransform(c);
    } else {
      As(t, this._bbox);
      n = this._createGradient(t);
    }
    return n;
  }
}
function os(d, t, e, s, i, n, r, a) {
  const {
    coords,
    colors
  } = t;
  const d_data = d.data;
  const c = d.width * 4;
  let u;
  if (coords[e + 1] > coords[s + 1]) {
    u = e;
    e = s;
    s = u;
    u = n;
    n = r;
    r = u;
  }
  if (coords[s + 1] > coords[i + 1]) {
    u = s;
    s = i;
    i = u;
    u = r;
    r = a;
    a = u;
  }
  if (coords[e + 1] > coords[s + 1]) {
    u = e;
    e = s;
    s = u;
    u = n;
    n = r;
    r = u;
  }
  const f = (coords[e] + t.offsetX) * t.scaleX;
  const g = (coords[e + 1] + t.offsetY) * t.scaleY;
  const p = (coords[s] + t.offsetX) * t.scaleX;
  const b = (coords[s + 1] + t.offsetY) * t.scaleY;
  const m = (coords[i] + t.offsetX) * t.scaleX;
  const y = (coords[i + 1] + t.offsetY) * t.scaleY;
  if (g >= y) {
    return;
  }
  const A = colors[n];
  const w = colors[n + 1];
  const v = colors[n + 2];
  const _ = colors[r];
  const S = colors[r + 1];
  const E = colors[r + 2];
  const C = colors[a];
  const k = colors[a + 1];
  const T = colors[a + 2];
  const U = Math.round(g);
  const $ = Math.round(y);
  let z;
  let V;
  let R;
  let L;
  let H;
  let lt;
  let Mt;
  let It;
  for (let st = U; st <= $; st++) {
    if (st < b) {
      const Z = st < g ? 0 : (g - st) / (g - b);
      z = f - (f - p) * Z;
      V = A - (A - _) * Z;
      R = w - (w - S) * Z;
      L = v - (v - E) * Z;
    } else {
      let Z;
      if (st > y) {
        Z = 1;
      } else if (b === y) {
        Z = 0;
      } else {
        Z = (b - st) / (b - y);
      }
      z = p - (p - m) * Z;
      V = _ - (_ - C) * Z;
      R = S - (S - k) * Z;
      L = E - (E - T) * Z;
    }
    let q;
    if (st < g) {
      q = 0;
    } else if (st > y) {
      q = 1;
    } else {
      q = (g - st) / (g - y);
    }
    H = f - (f - m) * q;
    lt = A - (A - C) * q;
    Mt = w - (w - k) * q;
    It = v - (v - T) * q;
    const $t = Math.round(Math.min(z, H));
    const Ft = Math.round(Math.max(z, H));
    let Nt = c * st + $t * 4;
    for (let Z = $t; Z <= Ft; Z++) {
      q = (z - Z) / (z - H);
      if (q < 0) {
        q = 0;
      } else if (q > 1) {
        q = 1;
      }
      d_data[Nt++] = V - (V - lt) * q | 0;
      d_data[Nt++] = R - (R - Mt) * q | 0;
      d_data[Nt++] = L - (L - It) * q | 0;
      d_data[Nt++] = 255;
    }
  }
}
function Un(d, t, e) {
  const {
    coords,
    colors
  } = t;
  let n;
  let r;
  switch (t.type) {
    case "lattice":
      const a = t.verticesPerRow;
      const o = Math.floor(coords.length / a) - 1;
      const l = a - 1;
      for (n = 0; n < o; n++) {
        let h = n * a;
        for (let c = 0; c < l; c++, h++) {
          os(d, e, coords[h], coords[h + 1], coords[h + a], colors[h], colors[h + 1], colors[h + a]);
          os(d, e, coords[h + a + 1], coords[h + 1], coords[h + a], colors[h + a + 1], colors[h + 1], colors[h + a]);
        }
      }
      break;
    case "triangles":
      n = 0;
      for (r = coords.length; n < r; n += 3) {
        os(d, e, coords[n], coords[n + 1], coords[n + 2], colors[n], colors[n + 1], colors[n + 2]);
      }
      break;
    default:
      throw new Error("illegal figure");
  }
}
class $n extends Rs {
  constructor(t) {
    super();
    this._coords = t[2];
    this._colors = t[3];
    this._figures = t[4];
    this._bounds = t[5];
    this._bbox = t[6];
    this._background = t[7];
    this.matrix = null;
  }
  _createMeshCanvas(t, e, s) {
    const a = Math.floor(this._bounds[0]);
    const o = Math.floor(this._bounds[1]);
    const l = Math.ceil(this._bounds[2]) - a;
    const h = Math.ceil(this._bounds[3]) - o;
    const c = Math.min(Math.ceil(Math.abs(l * t[0] * 1.1)), 3000);
    const u = Math.min(Math.ceil(Math.abs(h * t[1] * 1.1)), 3000);
    const scaleX = l / c;
    const scaleY = h / u;
    const p = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -a,
      offsetY: -o,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };
    const b = c + 4;
    const m = u + 4;
    const y = s.getCanvas("mesh", b, m);
    const y_context = y.context;
    const w = y_context.createImageData(c, u);
    if (e) {
      const _ = w.data;
      for (let S = 0, E = _.length; S < E; S += 4) {
        _[S] = e[0];
        _[S + 1] = e[1];
        _[S + 2] = e[2];
        _[S + 3] = 255;
      }
    }
    for (const _ of this._figures) {
      Un(w, _, p);
    }
    y_context.putImageData(w, 2, 2);
    return {
      canvas: y.canvas,
      offsetX: a - 2 * scaleX,
      offsetY: o - 2 * scaleY,
      scaleX,
      scaleY
    };
  }
  isModifyingCurrentTransform() {
    return true;
  }
  getPattern(t, e, s, i) {
    As(t, this._bbox);
    const n = new Float32Array(2);
    if (i === at.SHADING) {
      Util.singularValueDecompose2dScale(Y(t), n);
    } else if (this.matrix) {
      Util.singularValueDecompose2dScale(this.matrix, n);
      const [a, o] = n;
      Util.singularValueDecompose2dScale(e.baseTransform, n);
      n[0] *= a;
      n[1] *= o;
    } else {
      Util.singularValueDecompose2dScale(e.baseTransform, n);
    }
    const r = this._createMeshCanvas(n, i === at.SHADING ? null : this._background, e.cachedCanvases);
    if (i !== at.SHADING) {
      t.setTransform(...e.baseTransform);
      if (this.matrix) {
        t.transform(...this.matrix);
      }
    }
    t.translate(r.offsetX, r.offsetY);
    t.scale(r.scaleX, r.scaleY);
    return t.createPattern(r.canvas, "no-repeat");
  }
}
class zn extends Rs {
  getPattern() {
    return "hotpink";
  }
}
function jn(d) {
  switch (d[0]) {
    case "RadialAxial":
      return new Hn(d);
    case "Mesh":
      return new $n(d);
    case "Dummy":
      return new zn();
  }
  throw new Error(`Unknown IR type: ${d[0]}`);
}
const ii = {
  COLORED: 1,
  UNCOLORED: 2
};
class Ds {
  static MAX_PATTERN_SIZE = 3000;
  constructor(t, e, s, i) {
    this.color = t[1];
    this.operatorList = t[2];
    this.matrix = t[3];
    this.bbox = t[4];
    this.xstep = t[5];
    this.ystep = t[6];
    this.paintType = t[7];
    this.tilingType = t[8];
    this.ctx = e;
    this.canvasGraphicsFactory = s;
    this.baseTransform = i;
  }
  createPatternCanvas(t, e) {
    const {
      bbox,
      operatorList,
      paintType,
      tilingType,
      color,
      canvasGraphicsFactory
    } = this;
    let {
      xstep,
      ystep
    } = this;
    xstep = Math.abs(xstep);
    ystep = Math.abs(ystep);
    Ye(`TilingType: ${tilingType}`);
    const c = bbox[0];
    const u = bbox[1];
    const f = bbox[2];
    const g = bbox[3];
    const p = f - c;
    const b = g - u;
    const m = new Float32Array(2);
    Util.singularValueDecompose2dScale(this.matrix, m);
    const [y, A] = m;
    Util.singularValueDecompose2dScale(this.baseTransform, m);
    const w = y * m[0];
    const v = A * m[1];
    let _ = p;
    let S = b;
    let E = false;
    let C = false;
    const k = Math.ceil(xstep * w);
    const T = Math.ceil(ystep * v);
    const U = Math.ceil(p * w);
    const $ = Math.ceil(b * v);
    if (k >= U) {
      _ = xstep;
    } else {
      E = true;
    }
    if (T >= $) {
      S = ystep;
    } else {
      C = true;
    }
    const z = this.getSizeAndScale(_, this.ctx.canvas.width, w);
    const V = this.getSizeAndScale(S, this.ctx.canvas.height, v);
    const R = t.cachedCanvases.getCanvas("pattern", z.size, V.size);
    const R_context = R.context;
    const H = canvasGraphicsFactory.createCanvasGraphics(R_context, e);
    H.groupLevel = t.groupLevel;
    this.setFillAndStrokeStyleToContext(H, paintType, color);
    R_context.translate(-z.scale * c, -V.scale * u);
    H.transform(0, z.scale, 0, 0, V.scale, 0, 0);
    R_context.save();
    H.dependencyTracker?.save();
    this.clipBbox(H, c, u, f, g);
    H.baseTransform = Y(H.ctx);
    H.executeOperatorList(operatorList);
    H.endDrawing();
    H.dependencyTracker?.restore();
    R_context.restore();
    if (E || C) {
      const lt = R.canvas;
      if (E) {
        _ = xstep;
      }
      if (C) {
        S = ystep;
      }
      const Mt = this.getSizeAndScale(_, this.ctx.canvas.width, w);
      const It = this.getSizeAndScale(S, this.ctx.canvas.height, v);
      const st = Mt.size;
      const q = It.size;
      const $t = t.cachedCanvases.getCanvas("pattern-workaround", st, q);
      const Ft = $t.context;
      const Nt = E ? Math.floor(p / xstep) : 0;
      const Z = C ? Math.floor(b / ystep) : 0;
      for (let oe = 0; oe <= Nt; oe++) {
        for (let le = 0; le <= Z; le++) {
          Ft.drawImage(lt, st * oe, q * le, st, q, 0, 0, st, q);
        }
      }
      return {
        canvas: $t.canvas,
        scaleX: Mt.scale,
        scaleY: It.scale,
        offsetX: c,
        offsetY: u
      };
    }
    return {
      canvas: R.canvas,
      scaleX: z.scale,
      scaleY: V.scale,
      offsetX: c,
      offsetY: u
    };
  }
  getSizeAndScale(t, e, scale) {
    const i = Math.max(Ds.MAX_PATTERN_SIZE, e);
    let size = Math.ceil(t * scale);
    if (size >= i) {
      size = i;
    } else {
      scale = size / t;
    }
    return {
      scale,
      size
    };
  }
  clipBbox(t, e, s, i, n) {
    const r = i - e;
    const a = n - s;
    t.ctx.rect(e, s, r, a);
    Util.axialAlignedBoundingBox([e, s, i, n], Y(t.ctx), t.current.minMax);
    t.clip();
    t.endPath();
  }
  setFillAndStrokeStyleToContext({
    ctx,
    current
  }, e, s) {
    switch (e) {
      case ii.COLORED:
        const {
          fillStyle,
          strokeStyle
        } = this.ctx;
        ctx.fillStyle = current.fillColor = fillStyle;
        ctx.strokeStyle = current.strokeColor = strokeStyle;
        break;
      case ii.UNCOLORED:
        ctx.fillStyle = ctx.strokeStyle = s;
        current.fillColor = current.strokeColor = s;
        break;
      default:
        throw new en(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern(t, e, s, i, n) {
    let r = s;
    if (i !== at.SHADING) {
      r = Util.transform(r, e.baseTransform);
      if (this.matrix) {
        r = Util.transform(r, this.matrix);
      }
    }
    const a = this.createPatternCanvas(e, n);
    let o = new DOMMatrix(r);
    o = o.translate(a.offsetX, a.offsetY);
    o = o.scale(1 / a.scaleX, 1 / a.scaleY);
    const l = t.createPattern(a.canvas, "repeat");
    l.setTransform(o);
    return l;
  }
}
function Gn({
  src,
  srcPos = 0,
  dest,
  width,
  height,
  nonBlackColor = 4294967295,
  inverseDecode = false
}) {
  const a = FeatureTest.isLittleEndian ? 4278190080 : 255;
  const [o, l] = inverseDecode ? [nonBlackColor, a] : [a, nonBlackColor];
  const h = width >> 3;
  const c = width & 7;
  const src_length = src.length;
  dest = new Uint32Array(dest.buffer);
  let destPos = 0;
  for (let g = 0; g < height; g++) {
    for (const b = srcPos + h; srcPos < b; srcPos++) {
      const m = srcPos < src_length ? src[srcPos] : 255;
      dest[destPos++] = m & 128 ? l : o;
      dest[destPos++] = m & 64 ? l : o;
      dest[destPos++] = m & 32 ? l : o;
      dest[destPos++] = m & 16 ? l : o;
      dest[destPos++] = m & 8 ? l : o;
      dest[destPos++] = m & 4 ? l : o;
      dest[destPos++] = m & 2 ? l : o;
      dest[destPos++] = m & 1 ? l : o;
    }
    if (c === 0) {
      continue;
    }
    const p = srcPos < src_length ? src[srcPos++] : 255;
    for (let b = 0; b < c; b++) {
      dest[destPos++] = p & 1 << 7 - b ? l : o;
    }
  }
  return {
    srcPos,
    destPos
  };
}
const ni = 16;
const ri = 100;
const Vn = 15;
const ai = 10;
const gt = 16;
const ls = new DOMMatrix();
const bt = new Float32Array(2);
const te = new Float32Array([Infinity, Infinity, -Infinity, -Infinity]);
function Wn(d, suspendedCtx) {
  if (d._removeMirroring) {
    throw new Error("Context is already forwarding operations.");
  }
  d.__originalSave = d.save;
  d.__originalRestore = d.restore;
  d.__originalRotate = d.rotate;
  d.__originalScale = d.scale;
  d.__originalTranslate = d.translate;
  d.__originalTransform = d.transform;
  d.__originalSetTransform = d.setTransform;
  d.__originalResetTransform = d.resetTransform;
  d.__originalClip = d.clip;
  d.__originalMoveTo = d.moveTo;
  d.__originalLineTo = d.lineTo;
  d.__originalBezierCurveTo = d.bezierCurveTo;
  d.__originalRect = d.rect;
  d.__originalClosePath = d.closePath;
  d.__originalBeginPath = d.beginPath;
  d._removeMirroring = () => {
    d.save = d.__originalSave;
    d.restore = d.__originalRestore;
    d.rotate = d.__originalRotate;
    d.scale = d.__originalScale;
    d.translate = d.__originalTranslate;
    d.transform = d.__originalTransform;
    d.setTransform = d.__originalSetTransform;
    d.resetTransform = d.__originalResetTransform;
    d.clip = d.__originalClip;
    d.moveTo = d.__originalMoveTo;
    d.lineTo = d.__originalLineTo;
    d.bezierCurveTo = d.__originalBezierCurveTo;
    d.rect = d.__originalRect;
    d.closePath = d.__originalClosePath;
    d.beginPath = d.__originalBeginPath;
    delete d._removeMirroring;
  };
  d.save = function () {
    suspendedCtx.save();
    this.__originalSave();
  };
  d.restore = function () {
    suspendedCtx.restore();
    this.__originalRestore();
  };
  d.translate = function (e, s) {
    suspendedCtx.translate(e, s);
    this.__originalTranslate(e, s);
  };
  d.scale = function (e, s) {
    suspendedCtx.scale(e, s);
    this.__originalScale(e, s);
  };
  d.transform = function (e, s, i, n, r, a) {
    suspendedCtx.transform(e, s, i, n, r, a);
    this.__originalTransform(e, s, i, n, r, a);
  };
  d.setTransform = function (e, s, i, n, r, a) {
    suspendedCtx.setTransform(e, s, i, n, r, a);
    this.__originalSetTransform(e, s, i, n, r, a);
  };
  d.resetTransform = function () {
    suspendedCtx.resetTransform();
    this.__originalResetTransform();
  };
  d.rotate = function (e) {
    suspendedCtx.rotate(e);
    this.__originalRotate(e);
  };
  d.clip = function (e) {
    suspendedCtx.clip(e);
    this.__originalClip(e);
  };
  d.moveTo = function (e, s) {
    suspendedCtx.moveTo(e, s);
    this.__originalMoveTo(e, s);
  };
  d.lineTo = function (e, s) {
    suspendedCtx.lineTo(e, s);
    this.__originalLineTo(e, s);
  };
  d.bezierCurveTo = function (e, s, i, n, r, a) {
    suspendedCtx.bezierCurveTo(e, s, i, n, r, a);
    this.__originalBezierCurveTo(e, s, i, n, r, a);
  };
  d.rect = function (e, s, i, n) {
    suspendedCtx.rect(e, s, i, n);
    this.__originalRect(e, s, i, n);
  };
  d.closePath = function () {
    suspendedCtx.closePath();
    this.__originalClosePath();
  };
  d.beginPath = function () {
    suspendedCtx.beginPath();
    this.__originalBeginPath();
  };
}
class Xn {
  constructor(t) {
    this.canvasFactory = t;
    this.cache = Object.create(null);
  }
  getCanvas(t, e, s) {
    let i;
    if (this.cache[t] !== undefined) {
      i = this.cache[t];
      this.canvasFactory.reset(i, e, s);
    } else {
      i = this.canvasFactory.create(e, s);
      this.cache[t] = i;
    }
    return i;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e);
      delete this.cache[t];
    }
  }
}
function Ne(d, t, e, s, i, n, r, a, o, l) {
  const [h, c, u, f, g, p] = Y(d);
  if (c === 0 && u === 0) {
    const y = r * h + g;
    const A = Math.round(y);
    const w = a * f + p;
    const v = Math.round(w);
    const _ = (r + o) * h + g;
    const S = Math.abs(Math.round(_) - A) || 1;
    const E = (a + l) * f + p;
    const C = Math.abs(Math.round(E) - v) || 1;
    d.setTransform(Math.sign(h), 0, 0, Math.sign(f), A, v);
    d.drawImage(t, e, s, i, n, 0, 0, S, C);
    d.setTransform(h, c, u, f, g, p);
    return [S, C];
  }
  if (h === 0 && f === 0) {
    const y = a * u + g;
    const A = Math.round(y);
    const w = r * c + p;
    const v = Math.round(w);
    const _ = (a + l) * u + g;
    const S = Math.abs(Math.round(_) - A) || 1;
    const E = (r + o) * c + p;
    const C = Math.abs(Math.round(E) - v) || 1;
    d.setTransform(0, Math.sign(c), Math.sign(u), 0, A, v);
    d.drawImage(t, e, s, i, n, 0, 0, C, S);
    d.setTransform(h, c, u, f, g, p);
    return [C, S];
  }
  d.drawImage(t, e, s, i, n, r, a, o, l);
  const b = Math.hypot(h, c);
  const m = Math.hypot(u, f);
  return [b * o, m * l];
}
class oi {
  alphaIsShape = false;
  fontSize = 0;
  fontSizeScale = 1;
  textMatrix = null;
  textMatrixScale = 1;
  fontMatrix = ds;
  leading = 0;
  x = 0;
  y = 0;
  lineX = 0;
  lineY = 0;
  charSpacing = 0;
  wordSpacing = 0;
  textHScale = 1;
  textRenderingMode = nt.FILL;
  textRise = 0;
  fillColor = "#000000";
  strokeColor = "#000000";
  patternFill = false;
  patternStroke = false;
  fillAlpha = 1;
  strokeAlpha = 1;
  lineWidth = 1;
  activeSMask = null;
  transferMaps = "none";
  constructor(t, e, s) {
    s?.(this);
    this.clipBox = new Float32Array([0, 0, t, e]);
    this.minMax = te.slice();
  }
  clone() {
    const t = Object.create(this);
    t.clipBox = this.clipBox.slice();
    t.minMax = this.minMax.slice();
    return t;
  }
  getPathBoundingBox(t = at.FILL, e = null) {
    const s = this.minMax.slice();
    if (t === at.STROKE) {
      if (!e) {
        G("Stroke bounding box must include transform.");
      }
      Util.singularValueDecompose2dScale(e, bt);
      const i = bt[0] * this.lineWidth / 2;
      const n = bt[1] * this.lineWidth / 2;
      s[0] -= i;
      s[1] -= n;
      s[2] += i;
      s[3] += n;
    }
    return s;
  }
  updateClipFromPath() {
    const t = Util.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === Infinity;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0);
    this.minMax.set(te, 0);
  }
  getClippedPathBoundingBox(t = at.FILL, e = null) {
    return Util.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function li(d, t) {
  if (t instanceof ImageData) {
    d.putImageData(t, 0, 0);
    return;
  }
  const {
    height,
    width
  } = t;
  const i = height % gt;
  const n = (height - i) / gt;
  const r = i === 0 ? n : n + 1;
  const a = d.createImageData(width, gt);
  let o = 0;
  let l;
  const t_data = t.data;
  const a_data = a.data;
  let u;
  let f;
  let g;
  let p;
  if (t.kind === ImageKind.GRAYSCALE_1BPP) {
    const b = t_data.byteLength;
    const m = new Uint32Array(a_data.buffer, 0, a_data.byteLength >> 2);
    const y = m.length;
    const A = width + 7 >> 3;
    const w = 4294967295;
    const v = FeatureTest.isLittleEndian ? 4278190080 : 255;
    for (u = 0; u < r; u++) {
      g = u < n ? gt : i;
      l = 0;
      for (f = 0; f < g; f++) {
        const _ = b - o;
        let S = 0;
        const E = _ > A ? width : _ * 8 - 7;
        const C = E & -8;
        let k = 0;
        let T = 0;
        for (; S < C; S += 8) {
          T = t_data[o++];
          m[l++] = T & 128 ? w : v;
          m[l++] = T & 64 ? w : v;
          m[l++] = T & 32 ? w : v;
          m[l++] = T & 16 ? w : v;
          m[l++] = T & 8 ? w : v;
          m[l++] = T & 4 ? w : v;
          m[l++] = T & 2 ? w : v;
          m[l++] = T & 1 ? w : v;
        }
        for (; S < E; S++) {
          if (k === 0) {
            T = t_data[o++];
            k = 128;
          }
          m[l++] = T & k ? w : v;
          k >>= 1;
        }
      }
      while (l < y) {
        m[l++] = 0;
      }
      d.putImageData(a, 0, u * gt);
    }
  } else if (t.kind === ImageKind.RGBA_32BPP) {
    f = 0;
    p = width * gt * 4;
    for (u = 0; u < n; u++) {
      a_data.set(t_data.subarray(o, o + p));
      o += p;
      d.putImageData(a, 0, f);
      f += gt;
    }
    if (u < r) {
      p = width * i * 4;
      a_data.set(t_data.subarray(o, o + p));
      d.putImageData(a, 0, f);
    }
  } else if (t.kind === ImageKind.RGB_24BPP) {
    g = gt;
    p = width * g;
    for (u = 0; u < r; u++) {
      if (u >= n) {
        g = i;
        p = width * g;
      }
      l = 0;
      for (f = p; f--;) {
        a_data[l++] = t_data[o++];
        a_data[l++] = t_data[o++];
        a_data[l++] = t_data[o++];
        a_data[l++] = 255;
      }
      d.putImageData(a, 0, u * gt);
    }
  } else {
    throw new Error(`bad image kind: ${t.kind}`);
  }
}
function hi(d, t) {
  if (t.bitmap) {
    d.drawImage(t.bitmap, 0, 0);
    return;
  }
  const {
    height,
    width
  } = t;
  const i = height % gt;
  const n = (height - i) / gt;
  const r = i === 0 ? n : n + 1;
  const a = d.createImageData(width, gt);
  let srcPos = 0;
  const t_data = t.data;
  const a_data = a.data;
  for (let c = 0; c < r; c++) {
    const u = c < n ? gt : i;
    ({
      srcPos
    } = Gn({
      src: t_data,
      srcPos,
      dest: a_data,
      width,
      height: u,
      nonBlackColor: 0
    }));
    d.putImageData(a, 0, c * gt);
  }
}
function he(d, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e) {
    if (d[s] !== undefined) {
      t[s] = d[s];
    }
  }
  if (d.setLineDash !== undefined) {
    t.setLineDash(d.getLineDash());
    t.lineDashOffset = d.lineDashOffset;
  }
}
function Oe(ctx) {
  ctx.strokeStyle = ctx.fillStyle = "#000000";
  ctx.fillRule = "nonzero";
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
  ctx.miterLimit = 10;
  ctx.globalCompositeOperation = "source-over";
  ctx.font = "10px sans-serif";
  if (ctx.setLineDash !== undefined) {
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  }
  const {
    filter
  } = ctx;
  if (filter !== "none" && filter !== "") {
    ctx.filter = "none";
  }
}
function ci(d, interpolate) {
  if (interpolate) {
    return true;
  }
  Util.singularValueDecompose2dScale(d, bt);
  const e = Math.fround(OutputScale.pixelRatio * PixelsPerInch.PDF_TO_CSS_UNITS);
  return bt[0] <= e && bt[1] <= e;
}
const qn = ["butt", "round", "square"];
const Yn = ["miter", "round", "bevel"];
const Kn = {};
const di = {};
class se {
  constructor(t, e, s, i, n, {
    optionalContentConfig,
    markedContentStack = null
  }, o, l, h) {
    this.ctx = t;
    this.current = new oi(this.ctx.canvas.width, this.ctx.canvas.height);
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = e;
    this.objs = s;
    this.canvasFactory = i;
    this.filterFactory = n;
    this.groupStack = [];
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.suspendedCtx = null;
    this.contentVisible = true;
    this.markedContentStack = markedContentStack || [];
    this.optionalContentConfig = optionalContentConfig;
    this.cachedCanvases = new Xn(this.canvasFactory);
    this.cachedPatterns = new Map();
    this.annotationCanvasMap = o;
    this.viewportScale = 1;
    this.outputScaleX = 1;
    this.outputScaleY = 1;
    this.pageColors = l;
    this._cachedScaleForStroking = [-1, 0];
    this._cachedGetSinglePixelWidth = null;
    this._cachedBitmapsMap = new Map();
    this.dependencyTracker = h ?? null;
  }
  getObject(t, e, s = null) {
    if (typeof e === "string") {
      this.dependencyTracker?.recordNamedDependency(t, e);
      if (e.startsWith("g_")) {
        return this.commonObjs.get(e);
      }
      return this.objs.get(e);
    }
    return s;
  }
  beginDrawing({
    transform,
    viewport,
    transparency = false,
    background = null
  }) {
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    const fillStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = background || "#ffffff";
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.fillStyle = fillStyle;
    if (transparency) {
      const o = this.cachedCanvases.getCanvas("transparent", width, height);
      this.compositeCtx = this.ctx;
      this.transparentCanvas = o.canvas;
      this.ctx = o.context;
      this.ctx.save();
      this.ctx.transform(...Y(this.compositeCtx));
    }
    this.ctx.save();
    Oe(this.ctx);
    if (transform) {
      this.ctx.transform(...transform);
      this.outputScaleX = transform[0];
      this.outputScaleY = transform[0];
    }
    this.ctx.transform(...viewport.transform);
    this.viewportScale = viewport.scale;
    this.baseTransform = Y(this.ctx);
  }
  executeOperatorList({
    argsArray,
    fnArray
  }, e, s, i, n) {
    let o = e || 0;
    const argsArray_length = argsArray.length;
    if (argsArray_length === o) {
      return o;
    }
    const h = argsArray_length - o > ai && typeof s === "function";
    const c = h ? Date.now() + Vn : 0;
    let u = 0;
    const commonObjs = this.commonObjs;
    const objs = this.objs;
    let p;
    let b;
    while (true) {
      if (i !== undefined && o === i.nextBreakPoint) {
        i.breakIt(o, s);
        return o;
      }
      if (!n || n(o)) {
        p = fnArray[o];
        b = argsArray[o] ?? null;
        if (p !== OPS.dependency) {
          if (b === null) {
            this[p](o);
          } else {
            this[p](o, ...b);
          }
        } else {
          for (const m of b) {
            this.dependencyTracker?.recordNamedData(m, o);
            const y = m.startsWith("g_") ? commonObjs : objs;
            if (!y.has(m)) {
              y.get(m, s);
              return o;
            }
          }
        }
      }
      o++;
      if (o === argsArray_length) {
        return o;
      }
      if (h && ++u > ai) {
        if (Date.now() > c) {
          s();
          return o;
        }
        u = 0;
      }
    }
  }
  #t() {
    while (this.stateStack.length || this.inSMaskMode) {
      this.restore();
    }
    this.current.activeSMask = null;
    this.ctx.restore();
    if (this.transparentCanvas) {
      this.ctx = this.compositeCtx;
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.drawImage(this.transparentCanvas, 0, 0);
      this.ctx.restore();
      this.transparentCanvas = null;
    }
  }
  endDrawing() {
    this.#t();
    this.cachedCanvases.clear();
    this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values()) {
        if (typeof HTMLCanvasElement !== "undefined" && e instanceof HTMLCanvasElement) {
          e.width = e.height = 0;
        }
      }
      t.clear();
    }
    this._cachedBitmapsMap.clear();
    this.#e();
  }
  #e() {
    if (this.pageColors) {
      const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if (t !== "none") {
        const e = this.ctx.filter;
        this.ctx.filter = t;
        this.ctx.drawImage(this.ctx.canvas, 0, 0);
        this.ctx.filter = e;
      }
    }
  }
  _scaleImage(img, e) {
    const s = img.width ?? img.displayWidth;
    const i = img.height ?? img.displayHeight;
    let n = Math.max(Math.hypot(e[0], e[1]), 1);
    let r = Math.max(Math.hypot(e[2], e[3]), 1);
    let paintWidth = s;
    let paintHeight = i;
    let l = "prescale1";
    let h;
    let c;
    while (n > 2 && paintWidth > 1 || r > 2 && paintHeight > 1) {
      let u = paintWidth;
      let f = paintHeight;
      if (n > 2 && paintWidth > 1) {
        u = paintWidth >= 16384 ? Math.floor(paintWidth / 2) - 1 || 1 : Math.ceil(paintWidth / 2);
        n /= paintWidth / u;
      }
      if (r > 2 && paintHeight > 1) {
        f = paintHeight >= 16384 ? Math.floor(paintHeight / 2) - 1 || 1 : Math.ceil(paintHeight) / 2;
        r /= paintHeight / f;
      }
      h = this.cachedCanvases.getCanvas(l, u, f);
      c = h.context;
      c.clearRect(0, 0, u, f);
      c.drawImage(img, 0, 0, paintWidth, paintHeight, 0, 0, u, f);
      img = h.canvas;
      paintWidth = u;
      paintHeight = f;
      l = l === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img,
      paintWidth,
      paintHeight
    };
  }
  _createMaskCanvas(t, e) {
    const ctx = this.ctx;
    const {
      width,
      height
    } = e;
    const fillColor = this.current.fillColor;
    const patternFill = this.current.patternFill;
    const o = Y(ctx);
    let l;
    let h;
    let c;
    let u;
    if ((e.bitmap || e.data) && e.count > 1) {
      const k = e.bitmap || e.data.buffer;
      h = JSON.stringify(patternFill ? o : [o.slice(0, 4), fillColor]);
      l = this._cachedBitmapsMap.get(k);
      if (!l) {
        l = new Map();
        this._cachedBitmapsMap.set(k, l);
      }
      const T = l.get(h);
      if (T && !patternFill) {
        const U = Math.round(Math.min(o[0], o[2]) + o[4]);
        const $ = Math.round(Math.min(o[1], o[3]) + o[5]);
        this.dependencyTracker?.recordDependencies(t, At.transformAndFill);
        return {
          canvas: T,
          offsetX: U,
          offsetY: $
        };
      }
      c = T;
    }
    if (!c) {
      u = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      hi(u.context, e);
    }
    let f = Util.transform(o, [1 / width, 0, 0, -1 / height, 0, 0]);
    f = Util.transform(f, [1, 0, 0, 1, 0, -height]);
    const g = te.slice();
    Util.axialAlignedBoundingBox([0, 0, width, height], f, g);
    const [p, b, m, y] = g;
    const A = Math.round(m - p) || 1;
    const w = Math.round(y - b) || 1;
    const v = this.cachedCanvases.getCanvas("fillCanvas", A, w);
    const v_context = v.context;
    const S = p;
    const E = b;
    v_context.translate(-S, -E);
    v_context.transform(...f);
    if (!c) {
      c = this._scaleImage(u.canvas, Ct(v_context));
      c = c.img;
      if (l && patternFill) {
        l.set(h, c);
      }
    }
    v_context.imageSmoothingEnabled = ci(Y(v_context), e.interpolate);
    Ne(v_context, c, 0, 0, c.width, c.height, 0, 0, width, height);
    v_context.globalCompositeOperation = "source-in";
    const C = Util.transform(Ct(v_context), [1, 0, 0, 1, -S, -E]);
    v_context.fillStyle = patternFill ? fillColor.getPattern(ctx, this, C, at.FILL, t) : fillColor;
    v_context.fillRect(0, 0, width, height);
    if (l && !patternFill) {
      this.cachedCanvases.delete("fillCanvas");
      l.set(h, v.canvas);
    }
    this.dependencyTracker?.recordDependencies(t, At.transformAndFill);
    return {
      canvas: v.canvas,
      offsetX: Math.round(S),
      offsetY: Math.round(E)
    };
  }
  setLineWidth(t, e) {
    this.dependencyTracker?.recordSimpleData("lineWidth", t);
    if (e !== this.current.lineWidth) {
      this._cachedScaleForStroking[0] = -1;
    }
    this.current.lineWidth = e;
    this.ctx.lineWidth = e;
  }
  setLineCap(t, e) {
    this.dependencyTracker?.recordSimpleData("lineCap", t);
    this.ctx.lineCap = qn[e];
  }
  setLineJoin(t, e) {
    this.dependencyTracker?.recordSimpleData("lineJoin", t);
    this.ctx.lineJoin = Yn[e];
  }
  setMiterLimit(t, e) {
    this.dependencyTracker?.recordSimpleData("miterLimit", t);
    this.ctx.miterLimit = e;
  }
  setDash(t, e, s) {
    this.dependencyTracker?.recordSimpleData("dash", t);
    const ctx = this.ctx;
    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash(e);
      ctx.lineDashOffset = s;
    }
  }
  setRenderingIntent(t, e) {}
  setFlatness(t, e) {}
  setGState(t, e) {
    for (const [s, i] of e) {
      switch (s) {
        case "LW":
          this.setLineWidth(t, i);
          break;
        case "LC":
          this.setLineCap(t, i);
          break;
        case "LJ":
          this.setLineJoin(t, i);
          break;
        case "ML":
          this.setMiterLimit(t, i);
          break;
        case "D":
          this.setDash(t, i[0], i[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, i);
          break;
        case "FL":
          this.setFlatness(t, i);
          break;
        case "Font":
          this.setFont(t, i[0], i[1]);
          break;
        case "CA":
          this.dependencyTracker?.recordSimpleData("strokeAlpha", t);
          this.current.strokeAlpha = i;
          break;
        case "ca":
          this.dependencyTracker?.recordSimpleData("fillAlpha", t);
          this.ctx.globalAlpha = this.current.fillAlpha = i;
          break;
        case "BM":
          this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t);
          this.ctx.globalCompositeOperation = i;
          break;
        case "SMask":
          this.dependencyTracker?.recordSimpleData("SMask", t);
          this.current.activeSMask = i ? this.tempSMask : null;
          this.tempSMask = null;
          this.checkSMaskState();
          break;
        case "TR":
          this.dependencyTracker?.recordSimpleData("filter", t);
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(i);
          break;
      }
    }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const inSMaskMode = this.inSMaskMode;
    if (this.current.activeSMask && !inSMaskMode) {
      this.beginSMaskMode();
    } else if (!this.current.activeSMask && inSMaskMode) {
      this.endSMaskMode();
    }
  }
  beginSMaskMode(t) {
    if (this.inSMaskMode) {
      throw new Error("beginSMaskMode called while already in smask mode");
    }
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    const i = `smaskGroupAt${this.groupLevel}`;
    const n = this.cachedCanvases.getCanvas(i, width, height);
    this.suspendedCtx = this.ctx;
    const r = this.ctx = n.context;
    r.setTransform(this.suspendedCtx.getTransform());
    he(this.suspendedCtx, r);
    Wn(r, this.suspendedCtx);
    this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode) {
      throw new Error("endSMaskMode called while not in smask mode");
    }
    this.ctx._removeMirroring();
    he(this.ctx, this.suspendedCtx);
    this.ctx = this.suspendedCtx;
    this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask) {
      return;
    }
    if (t) {
      t[0] = Math.floor(t[0]);
      t[1] = Math.floor(t[1]);
      t[2] = Math.ceil(t[2]);
      t[3] = Math.ceil(t[3]);
    } else {
      t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    }
    const activeSMask = this.current.activeSMask;
    const suspendedCtx = this.suspendedCtx;
    this.composeSMask(suspendedCtx, activeSMask, this.ctx, t);
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.restore();
  }
  composeSMask(t, e, s, i) {
    const n = i[0];
    const r = i[1];
    const a = i[2] - n;
    const o = i[3] - r;
    if (!(a === 0 || o === 0)) {
      this.genericComposeSMask(e.context, s, a, o, e.subtype, e.backdrop, e.transferMap, n, r, e.offsetX, e.offsetY);
      t.save();
      t.globalAlpha = 1;
      t.globalCompositeOperation = "source-over";
      t.setTransform(1, 0, 0, 1, 0, 0);
      t.drawImage(s.canvas, 0, 0);
      t.restore();
    }
  }
  genericComposeSMask(t, e, s, i, n, r, a, o, l, h, c) {
    let t_canvas = t.canvas;
    let f = o - h;
    let g = l - c;
    if (r) {
      if (f < 0 || g < 0 || f + s > t_canvas.width || g + i > t_canvas.height) {
        const b = this.cachedCanvases.getCanvas("maskExtension", s, i);
        const m = b.context;
        m.drawImage(t_canvas, -f, -g);
        m.globalCompositeOperation = "destination-atop";
        m.fillStyle = r;
        m.fillRect(0, 0, s, i);
        m.globalCompositeOperation = "source-over";
        t_canvas = b.canvas;
        g = 0;
        f = 0;
      } else {
        t.save();
        t.globalAlpha = 1;
        t.setTransform(1, 0, 0, 1, 0, 0);
        const b = new Path2D();
        b.rect(f, g, s, i);
        t.clip(b);
        t.globalCompositeOperation = "destination-atop";
        t.fillStyle = r;
        t.fillRect(f, g, s, i);
        t.restore();
      }
    }
    e.save();
    e.globalAlpha = 1;
    e.setTransform(1, 0, 0, 1, 0, 0);
    if (n === "Alpha" && a) {
      e.filter = this.filterFactory.addAlphaFilter(a);
    } else if (n === "Luminosity") {
      e.filter = this.filterFactory.addLuminosityFilter(a);
    }
    const p = new Path2D();
    p.rect(o, l, s, i);
    e.clip(p);
    e.globalCompositeOperation = "destination-in";
    e.drawImage(t_canvas, f, g, s, i, o, l, s, i);
    e.restore();
  }
  save(t) {
    if (this.inSMaskMode) {
      he(this.ctx, this.suspendedCtx);
    }
    this.ctx.save();
    const current = this.current;
    this.stateStack.push(current);
    this.current = current.clone();
    this.dependencyTracker?.save(t);
  }
  restore(t) {
    this.dependencyTracker?.restore(t);
    if (this.stateStack.length === 0) {
      if (this.inSMaskMode) {
        this.endSMaskMode();
      }
      return;
    }
    this.current = this.stateStack.pop();
    this.ctx.restore();
    if (this.inSMaskMode) {
      he(this.suspendedCtx, this.ctx);
    }
    this.checkSMaskState();
    this.pendingClip = null;
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  transform(t, e, s, i, n, r, a) {
    this.dependencyTracker?.recordIncrementalData("transform", t);
    this.ctx.transform(e, s, i, n, r, a);
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, s, i) {
    let [n] = s;
    if (!i) {
      n ||= s[0] = new Path2D();
      this[e](t, n);
      return;
    }
    if (this.dependencyTracker !== null) {
      const r = e === OPS.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, i[0] - r, i[2] + r, i[1] - r, i[3] + r).recordDependencies(t, ["transform"]);
    }
    if (!(n instanceof Path2D)) {
      const r = s[0] = new Path2D();
      for (let a = 0, o = n.length; a < o;) {
        switch (n[a++]) {
          case Me.moveTo:
            r.moveTo(n[a++], n[a++]);
            break;
          case Me.lineTo:
            r.lineTo(n[a++], n[a++]);
            break;
          case Me.curveTo:
            r.bezierCurveTo(n[a++], n[a++], n[a++], n[a++], n[a++], n[a++]);
            break;
          case Me.closePath:
            r.closePath();
            break;
          default:
            I(`Unrecognized drawing path operator: ${n[a - 1]}`);
            break;
        }
      }
      n = r;
    }
    Util.axialAlignedBoundingBox(i, Y(this.ctx), this.current.minMax);
    this[e](t, n);
    this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, e, s = true) {
    const ctx = this.ctx;
    const strokeColor = this.current.strokeColor;
    ctx.globalAlpha = this.current.strokeAlpha;
    if (this.contentVisible) {
      if (typeof strokeColor === "object" && strokeColor?.getPattern) {
        const r = strokeColor.isModifyingCurrentTransform() ? ctx.getTransform() : null;
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this, Ct(ctx), at.STROKE, t);
        if (r) {
          const a = new Path2D();
          a.addPath(e, ctx.getTransform().invertSelf().multiplySelf(r));
          e = a;
        }
        this.rescaleAndStroke(e, false);
        ctx.restore();
      } else {
        this.rescaleAndStroke(e, true);
      }
    }
    this.dependencyTracker?.recordDependencies(t, At.stroke);
    if (s) {
      this.consumePath(t, e, this.current.getClippedPathBoundingBox(at.STROKE, Y(this.ctx)));
    }
    ctx.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t, e) {
    this.stroke(t, e);
  }
  fill(t, e, s = true) {
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const patternFill = this.current.patternFill;
    let a = false;
    if (patternFill) {
      const l = fillColor.isModifyingCurrentTransform() ? ctx.getTransform() : null;
      this.dependencyTracker?.save(t);
      ctx.save();
      ctx.fillStyle = fillColor.getPattern(ctx, this, Ct(ctx), at.FILL, t);
      if (l) {
        const h = new Path2D();
        h.addPath(e, ctx.getTransform().invertSelf().multiplySelf(l));
        e = h;
      }
      a = true;
    }
    const o = this.current.getClippedPathBoundingBox();
    this.contentVisible && o !== null && (this.pendingEOFill ? (ctx.fill(e, "evenodd"), this.pendingEOFill = false) : ctx.fill(e));
    this.dependencyTracker?.recordDependencies(t, At.fill);
    if (a) {
      ctx.restore();
      this.dependencyTracker?.restore(t);
    }
    if (s) {
      this.consumePath(t, e, o);
    }
  }
  eoFill(t, e) {
    this.pendingEOFill = true;
    this.fill(t, e);
  }
  fillStroke(t, e) {
    this.fill(t, e, false);
    this.stroke(t, e, false);
    this.consumePath(t, e);
  }
  eoFillStroke(t, e) {
    this.pendingEOFill = true;
    this.fillStroke(t, e);
  }
  closeFillStroke(t, e) {
    this.fillStroke(t, e);
  }
  closeEOFillStroke(t, e) {
    this.pendingEOFill = true;
    this.fillStroke(t, e);
  }
  endPath(t, e) {
    this.consumePath(t, e);
  }
  rawFillPath(t, e) {
    this.ctx.fill(e);
    this.dependencyTracker?.recordDependencies(t, At.rawFillPath).recordOperation(t);
  }
  clip(t) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t);
    this.pendingClip = Kn;
  }
  eoClip(t) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t);
    this.pendingClip = di;
  }
  beginText(t) {
    this.current.textMatrix = null;
    this.current.textMatrixScale = 1;
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
    this.dependencyTracker?.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t) {
    const pendingTextPaths = this.pendingTextPaths;
    const ctx = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker
      } = this;
      if (pendingTextPaths !== undefined) {
        dependencyTracker.recordFutureForcedDependency("textClip", dependencyTracker.getOpenMarker()).recordFutureForcedDependency("textClip", t);
      }
      dependencyTracker.recordCloseMarker(t);
    }
    if (pendingTextPaths !== undefined) {
      const i = new Path2D();
      const n = ctx.getTransform().invertSelf();
      for (const {
        transform,
        x,
        y,
        fontSize,
        path
      } of pendingTextPaths) {
        if (path) {
          i.addPath(path, new DOMMatrix(transform).preMultiplySelf(n).translate(x, y).scale(fontSize, -fontSize));
        }
      }
      ctx.clip(i);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t, e) {
    this.dependencyTracker?.recordSimpleData("charSpacing", t);
    this.current.charSpacing = e;
  }
  setWordSpacing(t, e) {
    this.dependencyTracker?.recordSimpleData("wordSpacing", t);
    this.current.wordSpacing = e;
  }
  setHScale(t, e) {
    this.dependencyTracker?.recordSimpleData("hScale", t);
    this.current.textHScale = e / 100;
  }
  setLeading(t, e) {
    this.dependencyTracker?.recordSimpleData("leading", t);
    this.current.leading = -e;
  }
  setFont(t, e, s) {
    this.dependencyTracker?.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
    const i = this.commonObjs.get(e);
    const current = this.current;
    if (!i) {
      throw new Error(`Can't find font for ${e}`);
    }
    current.fontMatrix = i.fontMatrix || ds;
    if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
      I(`Invalid font matrix for font ${e}`);
    }
    if (s < 0) {
      s = -s;
      current.fontDirection = -1;
    } else {
      current.fontDirection = 1;
    }
    this.current.font = i;
    this.current.fontSize = s;
    if (i.isType3Font) {
      return;
    }
    const r = i.loadedName || "sans-serif";
    const a = i.systemFontInfo?.css || `"${r}", ${i.fallbackName}`;
    let o = "normal";
    if (i.black) {
      o = "900";
    } else if (i.bold) {
      o = "bold";
    }
    const l = i.italic ? "italic" : "normal";
    let h = s;
    if (s < ni) {
      h = ni;
    } else if (s > ri) {
      h = ri;
    }
    this.current.fontSizeScale = s / h;
    this.ctx.font = `${l} ${o} ${h}px ${a}`;
  }
  setTextRenderingMode(t, e) {
    this.dependencyTracker?.recordSimpleData("textRenderingMode", t);
    this.current.textRenderingMode = e;
  }
  setTextRise(t, e) {
    this.dependencyTracker?.recordSimpleData("textRise", t);
    this.current.textRise = e;
  }
  moveText(t, e, s) {
    this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t);
    this.current.x = this.current.lineX += e;
    this.current.y = this.current.lineY += s;
  }
  setLeadingMoveText(t, e, s) {
    this.setLeading(t, -s);
    this.moveText(t, e, s);
  }
  setTextMatrix(t, e) {
    this.dependencyTracker?.recordSimpleData("textMatrix", t);
    const {
      current
    } = this;
    current.textMatrix = e;
    current.textMatrixScale = Math.hypot(e[0], e[1]);
    current.x = current.lineX = 0;
    current.y = current.lineY = 0;
  }
  nextLine(t) {
    this.moveText(t, 0, this.current.leading);
    this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
  }
  #i(t, e, s) {
    const i = new Path2D();
    i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e));
    return i;
  }
  paintChar(t, e, x_1, y, n, r) {
    const ctx = this.ctx;
    const current = this.current;
    const {
      font,
      textRenderingMode
    } = current;
    const fontSize = current.fontSize / current.fontSizeScale;
    const u = textRenderingMode & nt.FILL_STROKE_MASK;
    const f = !!(textRenderingMode & nt.ADD_TO_PATH_FLAG);
    const g = current.patternFill && !font.missingFile;
    const p = current.patternStroke && !font.missingFile;
    let path;
    if ((font.disableFontFace || f || g || p) && !font.missingFile) {
      path = font.getPathGenerator(this.commonObjs, e);
    }
    if (path && (font.disableFontFace || g || p)) {
      ctx.save();
      ctx.translate(x_1, y);
      ctx.scale(fontSize, -fontSize);
      this.dependencyTracker?.recordCharacterBBox(t, ctx, font);
      let m;
      if (u === nt.FILL || u === nt.FILL_STROKE) {
        if (n) {
          m = ctx.getTransform();
          ctx.setTransform(...n);
          const y = this.#i(path, m, n);
          ctx.fill(y);
        } else {
          ctx.fill(path);
        }
      }
      if (u === nt.STROKE || u === nt.FILL_STROKE) {
        if (r) {
          m ||= ctx.getTransform();
          ctx.setTransform(...r);
          const {
            a: a_1,
            b: b_1,
            c: c_1,
            d
          } = m;
          const _ = Util.inverseTransform(r);
          const S = Util.transform([a_1, b_1, c_1, d, 0, 0], _);
          Util.singularValueDecompose2dScale(S, bt);
          ctx.lineWidth *= Math.max(bt[0], bt[1]) / fontSize;
          ctx.stroke(this.#i(path, m, r));
        } else {
          ctx.lineWidth /= fontSize;
          ctx.stroke(path);
        }
      }
      ctx.restore();
    } else {
      if (u === nt.FILL || u === nt.FILL_STROKE) {
        ctx.fillText(e, x_1, y);
        this.dependencyTracker?.recordCharacterBBox(t, ctx, font, fontSize, x_1, y, () => ctx.measureText(e));
      }
      if (u === nt.STROKE || u === nt.FILL_STROKE) {
        this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t, ctx, font, fontSize, x_1, y, () => ctx.measureText(e)).recordDependencies(t, At.stroke);
        ctx.strokeText(e, x_1, y);
      }
    }
    if (f) {
      (this.pendingTextPaths ||= []).push({
        transform: Y(ctx),
        x: x_1,
        y,
        fontSize,
        path
      });
      this.dependencyTracker?.recordCharacterBBox(t, ctx, font, fontSize, x_1, y);
    }
  }
  get isFontSubpixelAAEnabled() {
    const {
      context
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    context.scale(1.5, 1);
    context.fillText("I", 0, 10);
    const data = context.getImageData(0, 0, 10, 10).data;
    let s = false;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 0 && data[i] < 255) {
        s = true;
        break;
      }
    }
    return shadow(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t, e) {
    if (this.dependencyTracker) {
      this.dependencyTracker.recordDependencies(t, At.showText).resetBBox(t);
      if (this.current.textRenderingMode & nt.ADD_TO_PATH_FLAG) {
        this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies();
      }
    }
    const current = this.current;
    const s_font = current.font;
    if (s_font.isType3Font) {
      this.showType3Text(t, e);
      this.dependencyTracker?.recordShowTextOperation(t);
      return;
    }
    const s_fontSize = current.fontSize;
    if (s_fontSize === 0) {
      this.dependencyTracker?.recordOperation(t);
      return;
    }
    const ctx = this.ctx;
    const {
      fontSizeScale,
      charSpacing,
      wordSpacing,
      fontDirection
    } = current;
    const c = current.textHScale * fontDirection;
    const e_length = e.length;
    const i_vertical = s_font.vertical;
    const g = i_vertical ? 1 : -1;
    const i_defaultVMetrics = s_font.defaultVMetrics;
    const b = s_fontSize * current.fontMatrix[0];
    const m = current.textRenderingMode === nt.FILL && !s_font.disableFontFace && !current.patternFill;
    ctx.save();
    if (current.textMatrix) {
      ctx.transform(...current.textMatrix);
    }
    ctx.translate(current.x, current.y + current.textRise);
    if (fontDirection > 0) {
      ctx.scale(c, -1);
    } else {
      ctx.scale(c, 1);
    }
    let y;
    let A;
    if (current.patternFill) {
      ctx.save();
      const E = current.fillColor.getPattern(ctx, this, Ct(ctx), at.FILL, t);
      y = Y(ctx);
      ctx.restore();
      ctx.fillStyle = E;
    }
    if (current.patternStroke) {
      ctx.save();
      const E = current.strokeColor.getPattern(ctx, this, Ct(ctx), at.STROKE, t);
      A = Y(ctx);
      ctx.restore();
      ctx.strokeStyle = E;
    }
    let s_lineWidth = current.lineWidth;
    const s_textMatrixScale = current.textMatrixScale;
    if (s_textMatrixScale === 0 || s_lineWidth === 0) {
      const E = current.textRenderingMode & nt.FILL_STROKE_MASK;
      if (E === nt.STROKE || E === nt.FILL_STROKE) {
        s_lineWidth = this.getSinglePixelWidth();
      }
    } else {
      s_lineWidth /= s_textMatrixScale;
    }
    if (fontSizeScale !== 1) {
      ctx.scale(fontSizeScale, fontSizeScale);
      s_lineWidth /= fontSizeScale;
    }
    ctx.lineWidth = s_lineWidth;
    if (s_font.isInvalidPDFjsFont) {
      const E = [];
      let C = 0;
      for (const T of e) {
        E.push(T.unicode);
        C += T.width;
      }
      const k = E.join("");
      ctx.fillText(k, 0, 0);
      if (this.dependencyTracker !== null) {
        const T = ctx.measureText(k);
        this.dependencyTracker.recordBBox(t, this.ctx, -T.actualBoundingBoxLeft, T.actualBoundingBoxRight, -T.actualBoundingBoxAscent, T.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      current.x += C * b * c;
      ctx.restore();
      this.compose();
      return;
    }
    let _ = 0;
    let S;
    for (S = 0; S < e_length; ++S) {
      const E = e[S];
      if (typeof E === "number") {
        _ += g * E * s_fontSize / 1000;
        continue;
      }
      let C = false;
      const k = (E.isSpace ? wordSpacing : 0) + charSpacing;
      const {
        fontChar,
        accent
      } = E;
      let $;
      let z;
      let V = E.width;
      if (i_vertical) {
        const H = E.vmetric || i_defaultVMetrics;
        const lt = -(E.vmetric ? H[1] : V * 0.5) * b;
        const Mt = H[2] * b;
        V = H ? -H[0] : V;
        $ = lt / fontSizeScale;
        z = (_ + Mt) / fontSizeScale;
      } else {
        $ = _ / fontSizeScale;
        z = 0;
      }
      let R;
      if (s_font.remeasure && V > 0) {
        R = ctx.measureText(fontChar);
        const H = R.width * 1000 / s_fontSize * fontSizeScale;
        if (V < H && this.isFontSubpixelAAEnabled) {
          const lt = V / H;
          C = true;
          ctx.save();
          ctx.scale(lt, 1);
          $ /= lt;
        } else {
          if (V !== H) {
            $ += (V - H) / 2000 * s_fontSize / fontSizeScale;
          }
        }
      }
      if (this.contentVisible && (E.isInFont || s_font.missingFile)) {
        if (m && !accent) {
          ctx.fillText(fontChar, $, z);
          this.dependencyTracker?.recordCharacterBBox(t, ctx, R ? {
            bbox: null
          } : s_font, s_fontSize / fontSizeScale, $, z, () => R ?? ctx.measureText(fontChar));
        } else {
          this.paintChar(t, fontChar, $, z, y, A);
          if (accent) {
            const H = $ + s_fontSize * accent.offset.x / fontSizeScale;
            const lt = z - s_fontSize * accent.offset.y / fontSizeScale;
            this.paintChar(t, accent.fontChar, H, lt, y, A);
          }
        }
      }
      const L = i_vertical ? V * b - k * fontDirection : V * b + k * fontDirection;
      _ += L;
      if (C) {
        ctx.restore();
      }
    }
    if (i_vertical) {
      current.y -= _;
    } else {
      current.x += _ * c;
    }
    ctx.restore();
    this.compose();
    this.dependencyTracker?.recordShowTextOperation(t);
  }
  showType3Text(t, e) {
    const ctx = this.ctx;
    const current = this.current;
    const {
      font,
      fontSize,
      fontDirection
    } = current;
    const o = font.vertical ? 1 : -1;
    const {
      charSpacing,
      wordSpacing
    } = current;
    const c = current.textHScale * fontDirection;
    const u = current.fontMatrix || ds;
    const e_length = e.length;
    const g = current.textRenderingMode === nt.INVISIBLE;
    let p;
    let b;
    let m;
    let y;
    if (g || fontSize === 0) {
      return;
    }
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
    ctx.save();
    if (current.textMatrix) {
      ctx.transform(...current.textMatrix);
    }
    ctx.translate(current.x, current.y + current.textRise);
    ctx.scale(c, fontDirection);
    const dependencyTracker = this.dependencyTracker;
    this.dependencyTracker = dependencyTracker ? new Ge(dependencyTracker, t) : null;
    for (p = 0; p < e_length; ++p) {
      b = e[p];
      if (typeof b === "number") {
        y = o * b * fontSize / 1000;
        this.ctx.translate(y, 0);
        current.x += y * c;
        continue;
      }
      const w = (b.isSpace ? wordSpacing : 0) + charSpacing;
      const v = font.charProcOperatorList[b.operatorListId];
      if (v) {
        if (this.contentVisible) {
          this.save();
          ctx.scale(fontSize, fontSize);
          ctx.transform(...u);
          this.executeOperatorList(v);
          this.restore();
        }
      } else {
        I(`Type3 character "${b.operatorListId}" is not available.`);
      }
      const _ = [b.width, 0];
      Util.applyTransform(_, u);
      m = _[0] * fontSize + w;
      ctx.translate(m, 0);
      current.x += m * c;
    }
    ctx.restore();
    if (dependencyTracker) {
      this.dependencyTracker = dependencyTracker;
    }
  }
  setCharWidth(t, e, s) {}
  setCharWidthAndBounds(t, e, s, i, n, r, a) {
    const o = new Path2D();
    o.rect(i, n, r - i, a - n);
    this.ctx.clip(o);
    this.dependencyTracker?.recordBBox(t, this.ctx, i, r, n, a).recordClipBox(t, this.ctx, i, r, n, a);
    this.endPath(t);
  }
  getColorN_Pattern(t, e) {
    let s;
    if (e[0] === "TilingPattern") {
      const i = this.baseTransform || Y(this.ctx);
      const n = {
        createCanvasGraphics: (r, a) => new se(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, undefined, undefined, this.dependencyTracker ? new Ge(this.dependencyTracker, a, true) : null)
      };
      s = new Ds(e, this.ctx, n, i);
    } else {
      s = this._getPattern(t, e[1], e[2]);
    }
    return s;
  }
  setStrokeColorN(t, ...e) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t);
    this.current.strokeColor = this.getColorN_Pattern(t, e);
    this.current.patternStroke = true;
  }
  setFillColorN(t, ...e) {
    this.dependencyTracker?.recordSimpleData("fillColor", t);
    this.current.fillColor = this.getColorN_Pattern(t, e);
    this.current.patternFill = true;
  }
  setStrokeRGBColor(t, e) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t);
    this.ctx.strokeStyle = this.current.strokeColor = e;
    this.current.patternStroke = false;
  }
  setStrokeTransparent(t) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t);
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
    this.current.patternStroke = false;
  }
  setFillRGBColor(t, e) {
    this.dependencyTracker?.recordSimpleData("fillColor", t);
    this.ctx.fillStyle = this.current.fillColor = e;
    this.current.patternFill = false;
  }
  setFillTransparent(t) {
    this.dependencyTracker?.recordSimpleData("fillColor", t);
    this.ctx.fillStyle = this.current.fillColor = "transparent";
    this.current.patternFill = false;
  }
  _getPattern(t, e, s = null) {
    let i;
    if (this.cachedPatterns.has(e)) {
      i = this.cachedPatterns.get(e);
    } else {
      i = jn(this.getObject(t, e));
      this.cachedPatterns.set(e, i);
    }
    if (s) {
      i.matrix = s;
    }
    return i;
  }
  shadingFill(t, e) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    this.save(t);
    const i = this._getPattern(t, e);
    ctx.fillStyle = i.getPattern(ctx, this, Ct(ctx), at.SHADING, t);
    const n = Ct(ctx);
    if (n) {
      const {
        width,
        height
      } = ctx.canvas;
      const o = te.slice();
      Util.axialAlignedBoundingBox([0, 0, width, height], n, o);
      const [l, h, c, u] = o;
      this.ctx.fillRect(l, h, c - l, u - h);
    } else {
      this.ctx.fillRect(-10000000000, -10000000000, 20000000000, 20000000000);
    }
    this.dependencyTracker?.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, At.transform).recordDependencies(t, At.fill).recordOperation(t);
    this.compose(this.current.getClippedPathBoundingBox());
    this.restore(t);
  }
  beginInlineImage() {
    G("Should not call beginInlineImage");
  }
  beginImageData() {
    G("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e, s) {
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = Y(this.ctx), s)) {
      Util.axialAlignedBoundingBox(s, this.baseTransform, this.current.minMax);
      const [i, n, r, a] = s;
      const o = new Path2D();
      o.rect(i, n, r - i, a - n);
      this.ctx.clip(o);
      this.dependencyTracker?.recordClipBox(t, this.ctx, i, r, n, a);
      this.endPath(t);
    }
  }
  paintFormXObjectEnd(t) {
    if (this.contentVisible) {
      this.restore(t);
      this.baseTransform = this.baseTransformStack.pop();
    }
  }
  beginGroup(t, e) {
    if (!this.contentVisible) {
      return;
    }
    this.save(t);
    if (this.inSMaskMode) {
      this.endSMaskMode();
      this.current.activeSMask = null;
    }
    const ctx = this.ctx;
    if (!e.isolated) {
      Ye("TODO: Support non-isolated groups.");
    }
    if (e.knockout) {
      I("Knockout groups not supported.");
    }
    const i = Y(ctx);
    if (e.matrix) {
      ctx.transform(...e.matrix);
    }
    if (!e.bbox) {
      throw new Error("Bounding box is required.");
    }
    let n = te.slice();
    Util.axialAlignedBoundingBox(e.bbox, Y(ctx), n);
    const r = [0, 0, ctx.canvas.width, ctx.canvas.height];
    n = Util.intersect(n, r) || [0, 0, 0, 0];
    const a = Math.floor(n[0]);
    const o = Math.floor(n[1]);
    const l = Math.max(Math.ceil(n[2]) - a, 1);
    const h = Math.max(Math.ceil(n[3]) - o, 1);
    this.current.startNewPathAndClipBox([0, 0, l, h]);
    let c = `groupAt${this.groupLevel}`;
    if (e.smask) {
      c += `_smask_${this.smaskCounter++ % 2}`;
    }
    const u = this.cachedCanvases.getCanvas(c, l, h);
    const u_context = u.context;
    u_context.translate(-a, -o);
    u_context.transform(...i);
    let g = new Path2D();
    const [p, b, m, y] = e.bbox;
    g.rect(p, b, m - p, y - b);
    if (e.matrix) {
      const A = new Path2D();
      A.addPath(g, new DOMMatrix(e.matrix));
      g = A;
    }
    u_context.clip(g);
    if (e.smask) {
      this.smaskStack.push({
        canvas: u.canvas,
        context: u_context,
        offsetX: a,
        offsetY: o,
        subtype: e.smask.subtype,
        backdrop: e.smask.backdrop,
        transferMap: e.smask.transferMap || null,
        startTransformInverse: null
      });
    }
    if (!e.smask || this.dependencyTracker) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(a, o);
      ctx.save();
    }
    he(ctx, u_context);
    this.ctx = u_context;
    this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(ctx);
    this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1]]);
    this.groupStack.push(ctx);
    this.groupLevel++;
  }
  endGroup(t, e) {
    if (!this.contentVisible) {
      return;
    }
    this.groupLevel--;
    const ctx = this.ctx;
    const i = this.groupStack.pop();
    this.ctx = i;
    this.ctx.imageSmoothingEnabled = false;
    this.dependencyTracker?.popBaseTransform();
    if (e.smask) {
      this.tempSMask = this.smaskStack.pop();
      this.restore(t);
      if (this.dependencyTracker) {
        this.ctx.restore();
      }
    } else {
      this.ctx.restore();
      const n = Y(this.ctx);
      this.restore(t);
      this.ctx.save();
      this.ctx.setTransform(...n);
      const r = te.slice();
      Util.axialAlignedBoundingBox([0, 0, ctx.canvas.width, ctx.canvas.height], n, r);
      this.ctx.drawImage(ctx.canvas, 0, 0);
      this.ctx.restore();
      this.compose(r);
    }
  }
  beginAnnotation(t, e, s, i, n, r) {
    this.#t();
    Oe(this.ctx);
    this.ctx.save();
    this.save(t);
    if (this.baseTransform) {
      this.ctx.setTransform(...this.baseTransform);
    }
    if (s) {
      const a = s[2] - s[0];
      const o = s[3] - s[1];
      if (r && this.annotationCanvasMap) {
        i = i.slice();
        i[4] -= s[0];
        i[5] -= s[1];
        s = s.slice();
        s[0] = s[1] = 0;
        s[2] = a;
        s[3] = o;
        Util.singularValueDecompose2dScale(Y(this.ctx), bt);
        const {
          viewportScale
        } = this;
        const h = Math.ceil(a * this.outputScaleX * viewportScale);
        const c = Math.ceil(o * this.outputScaleY * viewportScale);
        this.annotationCanvas = this.canvasFactory.create(h, c);
        const {
          canvas,
          context
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, canvas);
        this.annotationCanvas.savedCtx = this.ctx;
        this.ctx = context;
        this.ctx.save();
        this.ctx.setTransform(bt[0], 0, 0, -bt[1], 0, o * bt[1]);
        Oe(this.ctx);
      } else {
        Oe(this.ctx);
        this.endPath(t);
        const l = new Path2D();
        l.rect(s[0], s[1], a, o);
        this.ctx.clip(l);
      }
    }
    this.current = new oi(this.ctx.canvas.width, this.ctx.canvas.height);
    this.transform(t, ...i);
    this.transform(t, ...n);
  }
  endAnnotation(t) {
    if (this.annotationCanvas) {
      this.ctx.restore();
      this.#e();
      this.ctx = this.annotationCanvas.savedCtx;
      delete this.annotationCanvas.savedCtx;
      delete this.annotationCanvas;
    }
  }
  paintImageMaskXObject(t, e) {
    if (!this.contentVisible) {
      return;
    }
    const e_count = e.count;
    e = this.getObject(t, e.data, e);
    e.count = e_count;
    const ctx = this.ctx;
    const n = this._createMaskCanvas(t, e);
    const n_canvas = n.canvas;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(n_canvas, n.offsetX, n.offsetY);
    this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, n.offsetX, n.offsetX + n_canvas.width, n.offsetY, n.offsetY + n_canvas.height).recordOperation(t);
    ctx.restore();
    this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, s, i = 0, n = 0, r, a) {
    if (!this.contentVisible) {
      return;
    }
    e = this.getObject(t, e.data, e);
    const ctx = this.ctx;
    ctx.save();
    const l = Y(ctx);
    ctx.transform(s, i, n, r, 0, 0);
    const h = this._createMaskCanvas(t, e);
    ctx.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]);
    this.dependencyTracker?.resetBBox(t);
    for (let c = 0, u = a.length; c < u; c += 2) {
      const f = Util.transform(l, [s, i, n, r, a[c], a[c + 1]]);
      ctx.drawImage(h.canvas, f[4], f[5]);
      this.dependencyTracker?.recordBBox(t, this.ctx, f[4], f[4] + h.canvas.width, f[5], f[5] + h.canvas.height);
    }
    ctx.restore();
    this.compose();
    this.dependencyTracker?.recordOperation(t);
  }
  paintImageMaskXObjectGroup(t, e) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const patternFill = this.current.patternFill;
    this.dependencyTracker?.resetBBox(t).recordDependencies(t, At.transformAndFill);
    for (const r of e) {
      const {
        data,
        width,
        height,
        transform
      } = r;
      const c = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      const u = c.context;
      u.save();
      const f = this.getObject(t, data, r);
      hi(u, f);
      u.globalCompositeOperation = "source-in";
      u.fillStyle = patternFill ? fillColor.getPattern(u, this, Ct(ctx), at.FILL, t) : fillColor;
      u.fillRect(0, 0, width, height);
      u.restore();
      ctx.save();
      ctx.transform(...transform);
      ctx.scale(1, -1);
      Ne(ctx, c.canvas, 0, 0, width, height, 0, -1, 1, 1);
      this.dependencyTracker?.recordBBox(t, ctx, 0, width, 0, height);
      ctx.restore();
    }
    this.compose();
    this.dependencyTracker?.recordOperation(t);
  }
  paintImageXObject(t, e) {
    if (!this.contentVisible) {
      return;
    }
    const s = this.getObject(t, e);
    if (!s) {
      I("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, s);
  }
  paintImageXObjectRepeat(t, e, s, i, n) {
    if (!this.contentVisible) {
      return;
    }
    const r = this.getObject(t, e);
    if (!r) {
      I("Dependent image isn't ready yet");
      return;
    }
    const {
      width,
      height
    } = r;
    const l = [];
    for (let h = 0, c = n.length; h < c; h += 2) {
      l.push({
        transform: [s, 0, 0, i, n[h], n[h + 1]],
        x: 0,
        y: 0,
        w: width,
        h: height
      });
    }
    this.paintInlineImageXObjectGroup(t, r, l);
  }
  applyTransferMapsToCanvas(t) {
    if (this.current.transferMaps !== "none") {
      t.filter = this.current.transferMaps;
      t.drawImage(t.canvas, 0, 0);
      t.filter = "none";
    }
    return t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none") {
      return t.bitmap;
    }
    const {
      bitmap,
      width,
      height
    } = t;
    const n = this.cachedCanvases.getCanvas("inlineImage", width, height);
    const n_context = n.context;
    n_context.filter = this.current.transferMaps;
    n_context.drawImage(bitmap, 0, 0);
    n_context.filter = "none";
    return n.canvas;
  }
  paintInlineImageXObject(t, e) {
    if (!this.contentVisible) {
      return;
    }
    const {
      width,
      height
    } = e;
    const ctx = this.ctx;
    this.save(t);
    const {
      filter
    } = ctx;
    if (filter !== "none" && filter !== "") {
      ctx.filter = "none";
    }
    ctx.scale(1 / width, -1 / height);
    let a;
    if (e.bitmap) {
      a = this.applyTransferMapsToBitmap(e);
    } else if (typeof HTMLElement === "function" && e instanceof HTMLElement || !e.data) {
      a = e;
    } else {
      const h = this.cachedCanvases.getCanvas("inlineImage", width, height).context;
      li(h, e);
      a = this.applyTransferMapsToCanvas(h);
    }
    const o = this._scaleImage(a, Ct(ctx));
    ctx.imageSmoothingEnabled = ci(Y(ctx), e.interpolate);
    this.dependencyTracker?.resetBBox(t).recordBBox(t, ctx, 0, width, -height, 0).recordDependencies(t, At.imageXObject).recordOperation(t);
    Ne(ctx, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -height, width, height);
    this.compose();
    this.restore(t);
  }
  paintInlineImageXObjectGroup(t, e, s) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    let n;
    if (e.bitmap) {
      n = e.bitmap;
    } else {
      const {
        width,
        height
      } = e;
      const l = this.cachedCanvases.getCanvas("inlineImage", width, height).context;
      li(l, e);
      n = this.applyTransferMapsToCanvas(l);
    }
    this.dependencyTracker?.resetBBox(t);
    for (const r of s) {
      ctx.save();
      ctx.transform(...r.transform);
      ctx.scale(1, -1);
      Ne(ctx, n, r.x, r.y, r.w, r.h, 0, -1, 1, 1);
      this.dependencyTracker?.recordBBox(t, ctx, 0, 1, -1, 0);
      ctx.restore();
    }
    this.dependencyTracker?.recordOperation(t);
    this.compose();
  }
  paintSolidColorImageMask(t) {
    if (this.contentVisible) {
      this.dependencyTracker?.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, At.fill).recordOperation(t);
      this.ctx.fillRect(0, 0, 1, 1);
      this.compose();
    }
  }
  markPoint(t, e) {}
  markPointProps(t, e, s) {}
  beginMarkedContent(t, e) {
    this.dependencyTracker?.beginMarkedContent(t);
    this.markedContentStack.push({
      visible: true
    });
  }
  beginMarkedContentProps(t, e, s) {
    this.dependencyTracker?.beginMarkedContent(t);
    if (e === "OC") {
      this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(s)
      });
    } else {
      this.markedContentStack.push({
        visible: true
      });
    }
    this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t) {
    this.dependencyTracker?.endMarkedContent(t);
    this.markedContentStack.pop();
    this.contentVisible = this.isContentVisible();
  }
  beginCompat(t) {}
  endCompat(t) {}
  consumePath(t, e, s) {
    const i = this.current.isEmptyClip();
    if (this.pendingClip) {
      this.current.updateClipFromPath();
    }
    if (!this.pendingClip) {
      this.compose(s);
    }
    const ctx = this.ctx;
    if (this.pendingClip) {
      i || (this.pendingClip === di ? ctx.clip(e, "evenodd") : ctx.clip(e));
      this.pendingClip = null;
      this.dependencyTracker?.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t);
    } else {
      this.dependencyTracker?.recordOperation(t);
    }
    this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Y(this.ctx);
      if (t[1] === 0 && t[2] === 0) {
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      } else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]);
        const s = Math.hypot(t[0], t[2]);
        const i = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth
      } = this.current;
      const {
        a: a_1,
        b,
        c: c_1,
        d
      } = this.ctx.getTransform();
      let r;
      let a;
      if (b === 0 && c_1 === 0) {
        const o = Math.abs(a_1);
        const l = Math.abs(d);
        if (o === l) {
          if (lineWidth === 0) {
            r = a = 1 / o;
          } else {
            const h = o * lineWidth;
            r = a = h < 1 ? 1 / h : 1;
          }
        } else if (lineWidth === 0) {
          r = 1 / o;
          a = 1 / l;
        } else {
          const h = o * lineWidth;
          const c = l * lineWidth;
          r = h < 1 ? 1 / h : 1;
          a = c < 1 ? 1 / c : 1;
        }
      } else {
        const o = Math.abs(a_1 * d - b * c_1);
        const l = Math.hypot(a_1, b);
        const h = Math.hypot(c_1, d);
        if (lineWidth === 0) {
          r = h / o;
          a = l / o;
        } else {
          const c = lineWidth * o;
          r = h > c ? h / c : 1;
          a = l > c ? l / c : 1;
        }
      }
      this._cachedScaleForStroking[0] = r;
      this._cachedScaleForStroking[1] = a;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t, e) {
    const {
      ctx,
      current: {
        lineWidth
      }
    } = this;
    const [n, r] = this.getScaleForStroking();
    if (n === r) {
      ctx.lineWidth = (lineWidth || 1) * n;
      ctx.stroke(t);
      return;
    }
    const a = ctx.getLineDash();
    if (e) {
      ctx.save();
    }
    ctx.scale(n, r);
    ls.a = 1 / n;
    ls.d = 1 / r;
    const o = new Path2D();
    o.addPath(t, ls);
    if (a.length > 0) {
      const l = Math.max(n, r);
      ctx.setLineDash(a.map(h => h / l));
      ctx.lineDashOffset /= l;
    }
    ctx.lineWidth = lineWidth || 1;
    ctx.stroke(o);
    if (e) {
      ctx.restore();
    }
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--) {
      if (!this.markedContentStack[t].visible) {
        return false;
      }
    }
    return true;
  }
}
for (const d in OPS) {
  if (se.prototype[d] !== undefined) {
    se.prototype[OPS[d]] = se.prototype[d];
  }
}
class ie {
  #t;
  #e;
  #i;
  static strings = ["fontFamily", "fontWeight", "italicAngle"];
  static write(t) {
    const e = new TextEncoder();
    const s = {};
    let i = 0;
    for (const l of ie.strings) {
      const h = e.encode(t[l]);
      s[l] = h;
      i += 4 + h.length;
    }
    const n = new ArrayBuffer(i);
    const r = new Uint8Array(n);
    const a = new DataView(n);
    let o = 0;
    for (const l of ie.strings) {
      const h = s[l];
      const c = h.length;
      a.setUint32(o, c);
      r.set(h, o + 4);
      o += 4 + c;
    }
    B(o === n.byteLength, "CssFontInfo.write: Buffer overflow");
    return n;
  }
  constructor(t) {
    this.#t = t;
    this.#e = new DataView(this.#t);
    this.#i = new TextDecoder();
  }
  #s(t) {
    B(t < ie.strings.length, "Invalid string index");
    let e = 0;
    for (let i = 0; i < t; i++) {
      e += this.#e.getUint32(e) + 4;
    }
    const s = this.#e.getUint32(e);
    return this.#i.decode(new Uint8Array(this.#t, e + 4, s));
  }
  get fontFamily() {
    return this.#s(0);
  }
  get fontWeight() {
    return this.#s(1);
  }
  get italicAngle() {
    return this.#s(2);
  }
}
class ne {
  #t;
  #e;
  #i;
  static strings = ["css", "loadedName", "baseFontName", "src"];
  static write(t) {
    const e = new TextEncoder();
    const s = {};
    let i = 0;
    for (const u of ne.strings) {
      const f = e.encode(t[u]);
      s[u] = f;
      i += 4 + f.length;
    }
    i += 4;
    let n;
    let r;
    let a = 1 + i;
    if (t.style) {
      n = e.encode(t.style.style);
      r = e.encode(t.style.weight);
      a += 4 + n.length + 4 + r.length;
    }
    const o = new ArrayBuffer(a);
    const l = new Uint8Array(o);
    const h = new DataView(o);
    let c = 0;
    h.setUint8(c++, t.guessFallback ? 1 : 0);
    h.setUint32(c, 0);
    c += 4;
    i = 0;
    for (const u of ne.strings) {
      const f = s[u];
      const g = f.length;
      i += 4 + g;
      h.setUint32(c, g);
      l.set(f, c + 4);
      c += 4 + g;
    }
    h.setUint32(c - i - 4, i);
    if (t.style) {
      h.setUint32(c, n.length);
      l.set(n, c + 4);
      c += 4 + n.length;
      h.setUint32(c, r.length);
      l.set(r, c + 4);
      c += 4 + r.length;
    }
    B(c <= o.byteLength, "SubstitionInfo.write: Buffer overflow");
    return o.transferToFixedLength(c);
  }
  constructor(t) {
    this.#t = t;
    this.#e = new DataView(this.#t);
    this.#i = new TextDecoder();
  }
  get guessFallback() {
    return this.#e.getUint8(0) !== 0;
  }
  #s(t) {
    B(t < ne.strings.length, "Invalid string index");
    let e = 5;
    for (let i = 0; i < t; i++) {
      e += this.#e.getUint32(e) + 4;
    }
    const s = this.#e.getUint32(e);
    return this.#i.decode(new Uint8Array(this.#t, e + 4, s));
  }
  get css() {
    return this.#s(0);
  }
  get loadedName() {
    return this.#s(1);
  }
  get baseFontName() {
    return this.#s(2);
  }
  get src() {
    return this.#s(3);
  }
  get style() {
    let t = 1;
    t += 4 + this.#e.getUint32(t);
    const e = this.#e.getUint32(t);
    const style = this.#i.decode(new Uint8Array(this.#t, t + 4, e));
    t += 4 + e;
    const i = this.#e.getUint32(t);
    const weight = this.#i.decode(new Uint8Array(this.#t, t + 4, i));
    return {
      style,
      weight
    };
  }
}
class j {
  static bools = ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"];
  static numbers = ["ascent", "defaultWidth", "descent"];
  static strings = ["fallbackName", "loadedName", "mimetype", "name"];
  static #t = Math.ceil(this.bools.length * 2 / 8);
  static #e = this.#t + this.numbers.length * 8;
  static #i = this.#e + 1 + 8;
  static #s = this.#i + 1 + 48;
  static #a = this.#s + 1 + 6;
  #n;
  #r;
  #o;
  constructor({
    data,
    extra
  }) {
    this.#n = data;
    this.#r = new TextDecoder();
    this.#o = new DataView(this.#n);
    if (extra) {
      Object.assign(this, extra);
    }
  }
  #h(t) {
    B(t < j.bools.length, "Invalid boolean index");
    const e = Math.floor(t / 4);
    const s = t * 2 % 8;
    const i = this.#o.getUint8(e) >> s & 3;
    if (i === 0) {
      return undefined;
    }
    return i === 2;
  }
  get black() {
    return this.#h(0);
  }
  get bold() {
    return this.#h(1);
  }
  get disableFontFace() {
    return this.#h(2);
  }
  get fontExtraProperties() {
    return this.#h(3);
  }
  get isInvalidPDFjsFont() {
    return this.#h(4);
  }
  get isType3Font() {
    return this.#h(5);
  }
  get italic() {
    return this.#h(6);
  }
  get missingFile() {
    return this.#h(7);
  }
  get remeasure() {
    return this.#h(8);
  }
  get vertical() {
    return this.#h(9);
  }
  #l(t) {
    B(t < j.numbers.length, "Invalid number index");
    return this.#o.getFloat64(j.#t + t * 8);
  }
  get ascent() {
    return this.#l(0);
  }
  get defaultWidth() {
    return this.#l(1);
  }
  get descent() {
    return this.#l(2);
  }
  get bbox() {
    let t = j.#e;
    if (this.#o.getUint8(t) === 0) {
      return;
    }
    t += 1;
    const s = [];
    for (let i = 0; i < 4; i++) {
      s.push(this.#o.getInt16(t, true));
      t += 2;
    }
    return s;
  }
  get fontMatrix() {
    let t = j.#i;
    if (this.#o.getUint8(t) === 0) {
      return;
    }
    t += 1;
    const s = [];
    for (let i = 0; i < 6; i++) {
      s.push(this.#o.getFloat64(t, true));
      t += 8;
    }
    return s;
  }
  get defaultVMetrics() {
    let t = j.#s;
    if (this.#o.getUint8(t) === 0) {
      return;
    }
    t += 1;
    const s = [];
    for (let i = 0; i < 3; i++) {
      s.push(this.#o.getInt16(t, true));
      t += 2;
    }
    return s;
  }
  #u(t) {
    B(t < j.strings.length, "Invalid string index");
    let e = j.#a + 4;
    for (let n = 0; n < t; n++) {
      e += this.#o.getUint32(e) + 4;
    }
    const s = this.#o.getUint32(e);
    const i = new Uint8Array(s);
    i.set(new Uint8Array(this.#n, e + 4, s));
    return this.#r.decode(i);
  }
  get fallbackName() {
    return this.#u(0);
  }
  get loadedName() {
    return this.#u(1);
  }
  get mimetype() {
    return this.#u(2);
  }
  get name() {
    return this.#u(3);
  }
  get data() {
    let t = j.#a;
    const e = this.#o.getUint32(t);
    t += 4 + e;
    const s = this.#o.getUint32(t);
    t += 4 + s;
    const i = this.#o.getUint32(t);
    t += 4 + i;
    const n = this.#o.getUint32(t);
    if (n !== 0) {
      return new Uint8Array(this.#n, t + 4, n);
    }
  }
  clearData() {
    let t = j.#a;
    const e = this.#o.getUint32(t);
    t += 4 + e;
    const s = this.#o.getUint32(t);
    t += 4 + s;
    const i = this.#o.getUint32(t);
    t += 4 + i;
    const n = this.#o.getUint32(t);
    new Uint8Array(this.#n, t + 4, n).fill(0);
    this.#o.setUint32(t, 0);
  }
  get cssFontInfo() {
    let t = j.#a;
    const e = this.#o.getUint32(t);
    t += 4 + e;
    const s = this.#o.getUint32(t);
    t += 4 + s;
    const i = this.#o.getUint32(t);
    if (i === 0) {
      return null;
    }
    const n = new Uint8Array(i);
    n.set(new Uint8Array(this.#n, t + 4, i));
    return new ie(n.buffer);
  }
  get systemFontInfo() {
    let t = j.#a;
    const e = this.#o.getUint32(t);
    t += 4 + e;
    const s = this.#o.getUint32(t);
    if (s === 0) {
      return null;
    }
    const i = new Uint8Array(s);
    i.set(new Uint8Array(this.#n, t + 4, s));
    return new ne(i.buffer);
  }
  static write(t) {
    const e = t.systemFontInfo ? ne.write(t.systemFontInfo) : null;
    const s = t.cssFontInfo ? ie.write(t.cssFontInfo) : null;
    const i = new TextEncoder();
    const n = {};
    let r = 0;
    for (const p of j.strings) {
      n[p] = i.encode(t[p]);
      r += 4 + n[p].length;
    }
    const a = j.#a + 4 + r + 4 + (e ? e.byteLength : 0) + 4 + (s ? s.byteLength : 0) + 4 + (t.data ? t.data.length : 0);
    const o = new ArrayBuffer(a);
    const l = new Uint8Array(o);
    const h = new DataView(o);
    let c = 0;
    const length = j.bools.length;
    let f = 0;
    let g = 0;
    for (let p = 0; p < length; p++) {
      const b = t[j.bools[p]];
      f |= (b === undefined ? 0 : b ? 2 : 1) << g;
      g += 2;
      if (g === 8 || p === length - 1) {
        h.setUint8(c++, f);
        f = 0;
        g = 0;
      }
    }
    B(c === j.#t, "FontInfo.write: Boolean properties offset mismatch");
    for (const p of j.numbers) {
      h.setFloat64(c, t[p]);
      c += 8;
    }
    B(c === j.#e, "FontInfo.write: Number properties offset mismatch");
    if (t.bbox) {
      h.setUint8(c++, 4);
      for (const p of t.bbox) {
        h.setInt16(c, p, true);
        c += 2;
      }
    } else {
      h.setUint8(c++, 0);
      c += 8;
    }
    B(c === j.#i, "FontInfo.write: BBox properties offset mismatch");
    if (t.fontMatrix) {
      h.setUint8(c++, 6);
      for (const p of t.fontMatrix) {
        h.setFloat64(c, p, true);
        c += 8;
      }
    } else {
      h.setUint8(c++, 0);
      c += 48;
    }
    B(c === j.#s, "FontInfo.write: FontMatrix properties offset mismatch");
    if (t.defaultVMetrics) {
      h.setUint8(c++, 1);
      for (const p of t.defaultVMetrics) {
        h.setInt16(c, p, true);
        c += 2;
      }
    } else {
      h.setUint8(c++, 0);
      c += 6;
    }
    B(c === j.#a, "FontInfo.write: DefaultVMetrics properties offset mismatch");
    h.setUint32(j.#a, 0);
    c += 4;
    for (const p of j.strings) {
      const b = n[p];
      const m = b.length;
      h.setUint32(c, m);
      l.set(b, c + 4);
      c += 4 + m;
    }
    h.setUint32(j.#a, c - j.#a - 4);
    if (!e) {
      h.setUint32(c, 0);
      c += 4;
    } else {
      const p = e.byteLength;
      h.setUint32(c, p);
      B(c + 4 + p <= o.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo");
      l.set(new Uint8Array(e), c + 4);
      c += 4 + p;
    }
    if (!s) {
      h.setUint32(c, 0);
      c += 4;
    } else {
      const p = s.byteLength;
      h.setUint32(c, p);
      B(c + 4 + p <= o.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo");
      l.set(new Uint8Array(s), c + 4);
      c += 4 + p;
    }
    if (t.data === undefined) {
      h.setUint32(c, 0);
      c += 4;
    } else {
      h.setUint32(c, t.data.length);
      l.set(t.data, c + 4);
      c += 4 + t.data.length;
    }
    B(c <= o.byteLength, "FontInfo.write: Buffer overflow");
    return o.transferToFixedLength(c);
  }
}
export class GlobalWorkerOptions {
  static #t = null;
  static #e = "";
  static get workerPort() {
    return this.#t;
  }
  static set workerPort(t) {
    if (!(typeof Worker !== "undefined" && t instanceof Worker) && t !== null) {
      throw new Error("Invalid `workerPort` type.");
    }
    this.#t = t;
  }
  static get workerSrc() {
    return this.#e;
  }
  static set workerSrc(t) {
    if (typeof t !== "string") {
      throw new Error("Invalid `workerSrc` type.");
    }
    this.#e = t;
  }
}
class Qn {
  #t;
  #e;
  constructor({
    parsedData,
    rawData
  }) {
    this.#t = parsedData;
    this.#e = rawData;
  }
  getRaw() {
    return this.#e;
  }
  get(t) {
    return this.#t.get(t) ?? null;
  }
  [Symbol.iterator]() {
    return this.#t.entries();
  }
}
const Jt = Symbol("INTERNAL");
class Jn {
  #t = false;
  #e = false;
  #i = false;
  #s = true;
  constructor(t, {
    name,
    intent,
    usage,
    rbGroups
  }) {
    this.#t = !!(t & mt.DISPLAY);
    this.#e = !!(t & mt.PRINT);
    this.name = name;
    this.intent = intent;
    this.usage = usage;
    this.rbGroups = rbGroups;
  }
  get visible() {
    if (this.#i) {
      return this.#s;
    }
    if (!this.#s) {
      return false;
    }
    const {
      print,
      view
    } = this.usage;
    if (this.#t) {
      return view?.viewState !== "OFF";
    }
    if (this.#e) {
      return print?.printState !== "OFF";
    }
    return true;
  }
  _setVisible(t, e, s = false) {
    if (t !== Jt) {
      G("Internal method `_setVisible` called.");
    }
    this.#i = s;
    this.#s = e;
  }
}
class Zn {
  #t = null;
  #e = new Map();
  #i = null;
  #s = null;
  constructor(t, e = mt.DISPLAY) {
    this.renderingIntent = e;
    this.name = null;
    this.creator = null;
    if (t !== null) {
      this.name = t.name;
      this.creator = t.creator;
      this.#s = t.order;
      for (const s of t.groups) {
        this.#e.set(s.id, new Jn(e, s));
      }
      if (t.baseState === "OFF") {
        for (const s of this.#e.values()) {
          s._setVisible(Jt, false);
        }
      }
      for (const s of t.on) {
        this.#e.get(s)._setVisible(Jt, true);
      }
      for (const s of t.off) {
        this.#e.get(s)._setVisible(Jt, false);
      }
      this.#i = this.getHash();
    }
  }
  #a(t) {
    const t_length = t.length;
    if (t_length < 2) {
      return true;
    }
    const s = t[0];
    for (let i = 1; i < t_length; i++) {
      const n = t[i];
      let r;
      if (Array.isArray(n)) {
        r = this.#a(n);
      } else if (this.#e.has(n)) {
        r = this.#e.get(n).visible;
      } else {
        I(`Optional content group not found: ${n}`);
        return true;
      }
      switch (s) {
        case "And":
          if (!r) {
            return false;
          }
          break;
        case "Or":
          if (r) {
            return true;
          }
          break;
        case "Not":
          return !r;
        default:
          return true;
      }
    }
    return s === "And";
  }
  isVisible(t) {
    if (this.#e.size === 0) {
      return true;
    }
    if (!t) {
      Ye("Optional content group not defined.");
      return true;
    }
    if (t.type === "OCG") {
      if (this.#e.has(t.id)) {
        return this.#e.get(t.id).visible;
      }
      I(`Optional content group not found: ${t.id}`);
      return true;
    }
    if (t.type === "OCMD") {
      if (t.expression) {
        return this.#a(t.expression);
      }
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!this.#e.has(e)) {
            I(`Optional content group not found: ${e}`);
            return true;
          }
          if (this.#e.get(e).visible) {
            return true;
          }
        }
        return false;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!this.#e.has(e)) {
            I(`Optional content group not found: ${e}`);
            return true;
          }
          if (!this.#e.get(e).visible) {
            return false;
          }
        }
        return true;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!this.#e.has(e)) {
            I(`Optional content group not found: ${e}`);
            return true;
          }
          if (!this.#e.get(e).visible) {
            return true;
          }
        }
        return false;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!this.#e.has(e)) {
            I(`Optional content group not found: ${e}`);
            return true;
          }
          if (this.#e.get(e).visible) {
            return false;
          }
        }
        return true;
      }
      I(`Unknown optional content policy ${t.policy}.`);
      return true;
    }
    I(`Unknown group type ${t.type}.`);
    return true;
  }
  setVisibility(t, e = true, s = true) {
    const i = this.#e.get(t);
    if (!i) {
      I(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length) {
      for (const n of i.rbGroups) {
        for (const r of n) {
          r !== t && this.#e.get(r)?._setVisible(Jt, false, true);
        }
      }
    }
    i._setVisible(Jt, !!e, true);
    this.#t = null;
  }
  setOCGState({
    state,
    preserveRB
  }) {
    let s;
    for (const i of state) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const n = this.#e.get(i);
      if (n) {
        switch (s) {
          case "ON":
            this.setVisibility(i, true, preserveRB);
            break;
          case "OFF":
            this.setVisibility(i, false, preserveRB);
            break;
          case "Toggle":
            this.setVisibility(i, !n.visible, preserveRB);
            break;
        }
      }
    }
    this.#t = null;
  }
  get hasInitialVisibility() {
    return this.#i === null || this.getHash() === this.#i;
  }
  getOrder() {
    if (this.#e.size) {
      if (this.#s) {
        return this.#s.slice();
      }
      return [...this.#e.keys()];
    }
    return null;
  }
  getGroup(t) {
    return this.#e.get(t) || null;
  }
  getHash() {
    if (this.#t !== null) {
      return this.#t;
    }
    const t = new Ei();
    for (const [e, s] of this.#e) {
      t.update(`${e}:${s.visible}`);
    }
    return this.#t = t.hexdigest();
  }
  [Symbol.iterator]() {
    return this.#e.entries();
  }
}
class tr {
  constructor(t, {
    disableRange = false,
    disableStream = false
  }) {
    B(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length,
      initialData,
      progressiveDone,
      contentDispositionFilename
    } = t;
    this._queuedChunks = [];
    this._progressiveDone = progressiveDone;
    this._contentDispositionFilename = contentDispositionFilename;
    if (initialData?.length > 0) {
      const o = initialData instanceof Uint8Array && initialData.byteLength === initialData.buffer.byteLength ? initialData.buffer : new Uint8Array(initialData).buffer;
      this._queuedChunks.push(o);
    }
    this._pdfDataRangeTransport = t;
    this._isStreamingSupported = !disableStream;
    this._isRangeSupported = !disableRange;
    this._contentLength = length;
    this._fullRequestReader = null;
    this._rangeReaders = [];
    t.addRangeListener((o, l) => {
      this._onReceiveData({
        begin: o,
        chunk: l
      });
    });
    t.addProgressListener((loaded, total) => {
      this._onProgress({
        loaded,
        total
      });
    });
    t.addProgressiveReadListener(o => {
      this._onReceiveData({
        chunk: o
      });
    });
    t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    });
    t.transportReady();
  }
  _onReceiveData({
    begin,
    chunk
  }) {
    const s = chunk instanceof Uint8Array && chunk.byteLength === chunk.buffer.byteLength ? chunk.buffer : new Uint8Array(chunk).buffer;
    if (begin === undefined) {
      if (this._fullRequestReader) {
        this._fullRequestReader._enqueue(s);
      } else {
        this._queuedChunks.push(s);
      }
    } else {
      const i = this._rangeReaders.some(n => {
        if (n._begin !== begin) {
          return false;
        }
        n._enqueue(s);
        return true;
      });
      B(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  _onProgress(t) {
    t.total === undefined ? this._rangeReaders[0]?.onProgress?.({
      loaded: t.loaded
    }) : this._fullRequestReader?.onProgress?.({
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    this._fullRequestReader?.progressiveDone();
    this._progressiveDone = true;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    if (e >= 0) {
      this._rangeReaders.splice(e, 1);
    }
  }
  getFullReader() {
    B(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const _queuedChunks = this._queuedChunks;
    this._queuedChunks = null;
    return new er(this, _queuedChunks, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) {
      return null;
    }
    const s = new sr(this, t, e);
    this._pdfDataRangeTransport.requestDataRange(t, e);
    this._rangeReaders.push(s);
    return s;
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeReaders.slice(0)) {
      e.cancel(t);
    }
    this._pdfDataRangeTransport.abort();
  }
}
class er {
  constructor(t, e, s = false, i = null) {
    this._stream = t;
    this._done = s || false;
    this._filename = isPdfFile(i) ? i : null;
    this._queuedChunks = e || [];
    this._loaded = 0;
    for (const n of this._queuedChunks) {
      this._loaded += n.byteLength;
    }
    this._requests = [];
    this._headersReady = Promise.resolve();
    t._fullRequestReader = this;
    this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length > 0) {
        this._requests.shift().resolve({
          value: t,
          done: false
        });
      } else {
        this._queuedChunks.push(t);
      }
      this._loaded += t.byteLength;
    }
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0) {
      return {
        value: this._queuedChunks.shift(),
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const t = Promise.withResolvers();
    this._requests.push(t);
    return t.promise;
  }
  cancel(t) {
    this._done = true;
    for (const e of this._requests) {
      e.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
  }
  progressiveDone() {
    if (!this._done) {
      this._done = true;
    }
  }
}
class sr {
  constructor(t, e, s) {
    this._stream = t;
    this._begin = e;
    this._end = s;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0) {
        this._queuedChunk = t;
      } else {
        this._requests.shift().resolve({
          value: t,
          done: false
        });
        for (const s of this._requests) {
          s.resolve({
            value: undefined,
            done: true
          });
        }
        this._requests.length = 0;
      }
      this._done = true;
      this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: e,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const t = Promise.withResolvers();
    this._requests.push(t);
    return t.promise;
  }
  cancel(t) {
    this._done = true;
    for (const e of this._requests) {
      e.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
    this._stream._removeRangeReader(this);
  }
}
function ir(d) {
  let t = true;
  let e = s("filename\\*", "i").exec(d);
  if (e) {
    e = e[1];
    let h = a(e);
    h = unescape(h);
    h = o(h);
    h = l(h);
    return n(h);
  }
  e = r(d);
  if (e) {
    const h = l(e);
    return n(h);
  }
  e = s("filename", "i").exec(d);
  if (e) {
    e = e[1];
    let h = a(e);
    h = l(h);
    return n(h);
  }
  function s(h, c) {
    return new RegExp(`(?:^|;)\\s*${h}\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)`, c);
  }
  function i(h, c) {
    if (h) {
      if (!/^[\x00-\xFF]+$/.test(c)) {
        return c;
      }
      try {
        const u = new TextDecoder(h, {
          fatal: true
        });
        const f = Se(c);
        c = u.decode(f);
        t = false;
      } catch {}
    }
    return c;
  }
  function n(h) {
    if (t && /[\x80-\xff]/.test(h)) {
      h = i("utf-8", h);
      if (t) {
        h = i("iso-8859-1", h);
      }
    }
    return h;
  }
  function r(h) {
    const c = [];
    let u;
    const f = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    while ((u = f.exec(h)) !== null) {
      let [, p, b, m] = u;
      p = parseInt(p, 10);
      if (p in c) {
        if (p === 0) {
          break;
        }
        continue;
      }
      c[p] = [b, m];
    }
    const g = [];
    for (let p = 0; p < c.length && p in c; ++p) {
      let [b, m] = c[p];
      m = a(m);
      if (b) {
        m = unescape(m);
        if (p === 0) {
          m = o(m);
        }
      }
      g.push(m);
    }
    return g.join("");
  }
  function a(h) {
    if (h.startsWith('"')) {
      const c = h.slice(1).split('\\"');
      for (let u = 0; u < c.length; ++u) {
        const f = c[u].indexOf('"');
        if (f !== -1) {
          c[u] = c[u].slice(0, f);
          c.length = u + 1;
        }
        c[u] = c[u].replaceAll(/\\(.)/g, "$1");
      }
      h = c.join('"');
    }
    return h;
  }
  function o(h) {
    const c = h.indexOf("'");
    if (c === -1) {
      return h;
    }
    const u = h.slice(0, c);
    const g = h.slice(c + 1).replace(/^[^']*'/, "");
    return i(u, g);
  }
  function l(h) {
    if (!h.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(h)) {
      return h;
    }
    return h.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (c, u, f, g) => {
      if (f === "q" || f === "Q") {
        g = g.replaceAll("_", " ");
        g = g.replaceAll(/=([0-9a-fA-F]{2})/g, (p, b) => String.fromCharCode(parseInt(b, 16)));
        return i(u, g);
      }
      try {
        g = atob(g);
      } catch {}
      return i(u, g);
    });
  }
  return "";
}
function Ri(isHttp, httpHeaders) {
  const e = new Headers();
  if (!isHttp || !httpHeaders || typeof httpHeaders !== "object") {
    return e;
  }
  for (const s in httpHeaders) {
    const i = httpHeaders[s];
    if (i !== undefined) {
      e.append(s, i);
    }
  }
  return e;
}
function Je(d) {
  return URL.parse(d)?.origin ?? null;
}
function Di({
  responseHeaders,
  isHttp,
  rangeChunkSize,
  disableRange
}) {
  const i = {
    allowRangeRequests: false,
    suggestedLength: undefined
  };
  const n = parseInt(responseHeaders.get("Content-Length"), 10);
  if (!(!Number.isInteger(n) || (i.suggestedLength = n, n <= 2 * rangeChunkSize) || disableRange || !isHttp || responseHeaders.get("Accept-Ranges") !== "bytes" || (responseHeaders.get("Content-Encoding") || "identity") !== "identity")) {
    i.allowRangeRequests = true;
  }
  return i;
}
function Li(d) {
  const t = d.get("Content-Disposition");
  if (t) {
    let e = ir(t);
    if (e.includes("%")) {
      try {
        e = decodeURIComponent(e);
      } catch {}
    }
    if (isPdfFile(e)) {
      return e;
    }
  }
  return null;
}
function Pe(d, t) {
  return new ResponseException(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d, d === 404 || d === 0 && t.startsWith("file:"));
}
function Ii(status) {
  return status === 200 || status === 206;
}
function Fi(headers, _withCredentials, _abortController) {
  return {
    method: "GET",
    headers,
    signal: _abortController.signal,
    mode: "cors",
    credentials: _withCredentials ? "include" : "same-origin",
    redirect: "follow"
  };
}
function Ni(d) {
  if (d instanceof Uint8Array) {
    return d.buffer;
  }
  if (d instanceof ArrayBuffer) {
    return d;
  }
  I(`getArrayBuffer - unexpected data format: ${d}`);
  return new Uint8Array(d).buffer;
}
class nr {
  _responseOrigin = null;
  constructor(t) {
    this.source = t;
    this.isHttp = /^https?:/i.test(t.url);
    this.headers = Ri(this.isHttp, t.httpHeaders);
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    B(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
    this._fullRequestReader = new rr(this);
    return this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) {
      return null;
    }
    const s = new ar(this, t, e);
    this._rangeRequestReaders.push(s);
    return s;
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeRequestReaders.slice(0)) {
      e.cancel(t);
    }
  }
}
class rr {
  constructor(t) {
    this._stream = t;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || false;
    this._contentLength = e.length;
    this._headersCapability = Promise.withResolvers();
    this._disableRange = e.disableRange || false;
    this._rangeChunkSize = e.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._abortController = new AbortController();
    this._isStreamingSupported = !e.disableStream;
    this._isRangeSupported = !e.disableRange;
    const s = new Headers(t.headers);
    const i = e.url;
    fetch(i, Fi(s, this._withCredentials, this._abortController)).then(n => {
      t._responseOrigin = Je(n.url);
      if (!Ii(n.status)) {
        throw Pe(n.status, i);
      }
      this._reader = n.body.getReader();
      this._headersCapability.resolve();
      const n_headers = n.headers;
      const {
        allowRangeRequests,
        suggestedLength
      } = Di({
        responseHeaders: n_headers,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = allowRangeRequests;
      this._contentLength = suggestedLength || this._contentLength;
      this._filename = Li(n_headers);
      if (!this._isStreamingSupported && this._isRangeSupported) {
        this.cancel(new AbortException("Streaming is disabled."));
      }
    }).catch(this._headersCapability.reject);
    this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    });
    return {
      value: Ni(value),
      done: false
    };
  }
  cancel(t) {
    this._reader?.cancel(t);
    this._abortController.abort();
  }
}
class ar {
  constructor(t, e, s) {
    this._stream = t;
    this._reader = null;
    this._loaded = 0;
    const i = t.source;
    this._withCredentials = i.withCredentials || false;
    this._readCapability = Promise.withResolvers();
    this._isStreamingSupported = !i.disableStream;
    this._abortController = new AbortController();
    const n = new Headers(t.headers);
    n.append("Range", `bytes=${e}-${s - 1}`);
    const r = i.url;
    fetch(r, Fi(n, this._withCredentials, this._abortController)).then(a => {
      const o = Je(a.url);
      if (o !== t._responseOrigin) {
        throw new Error(`Expected range response-origin "${o}" to match "${t._responseOrigin}".`);
      }
      if (!Ii(a.status)) {
        throw Pe(a.status, r);
      }
      this._readCapability.resolve();
      this._reader = a.body.getReader();
    }).catch(this._readCapability.reject);
    this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    this.onProgress?.({
      loaded: this._loaded
    });
    return {
      value: Ni(value),
      done: false
    };
  }
  cancel(t) {
    this._reader?.cancel(t);
    this._abortController.abort();
  }
}
const hs = 200;
const cs = 206;
function or({
  response
}) {
  if (typeof response !== "string") {
    return response;
  }
  return Se(response).buffer;
}
class lr {
  _responseOrigin = null;
  constructor({
    url,
    httpHeaders,
    withCredentials
  }) {
    this.url = url;
    this.isHttp = /^https?:/i.test(url);
    this.headers = Ri(this.isHttp, httpHeaders);
    this.withCredentials = withCredentials || false;
    this.currXhrId = 0;
    this.pendingRequests = Object.create(null);
  }
  request(t) {
    const xhr = new XMLHttpRequest();
    const s = this.currXhrId++;
    const i = this.pendingRequests[s] = {
      xhr
    };
    xhr.open("GET", this.url);
    xhr.withCredentials = this.withCredentials;
    for (const [n, r] of this.headers) {
      xhr.setRequestHeader(n, r);
    }
    if (this.isHttp && "begin" in t && "end" in t) {
      xhr.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`);
      i.expectedStatus = cs;
    } else {
      i.expectedStatus = hs;
    }
    xhr.responseType = "arraybuffer";
    B(t.onError, "Expected `onError` callback to be provided.");
    xhr.onerror = () => {
      t.onError(xhr.status);
    };
    xhr.onreadystatechange = this.onStateChange.bind(this, s);
    xhr.onprogress = this.onProgress.bind(this, s);
    i.onHeadersReceived = t.onHeadersReceived;
    i.onDone = t.onDone;
    i.onError = t.onError;
    i.onProgress = t.onProgress;
    xhr.send(null);
    return s;
  }
  onProgress(t, e) {
    const s = this.pendingRequests[t];
    s && s.onProgress?.(e);
  }
  onStateChange(t, e) {
    const s = this.pendingRequests[t];
    if (!s) {
      return;
    }
    const s_xhr = s.xhr;
    if (s_xhr.readyState >= 2 && s.onHeadersReceived) {
      s.onHeadersReceived();
      delete s.onHeadersReceived;
    }
    if (s_xhr.readyState !== 4 || !(t in this.pendingRequests)) {
      return;
    }
    delete this.pendingRequests[t];
    if (s_xhr.status === 0 && this.isHttp) {
      s.onError(s_xhr.status);
      return;
    }
    const n = s_xhr.status || hs;
    if (!(n === hs && s.expectedStatus === cs) && n !== s.expectedStatus) {
      s.onError(s_xhr.status);
      return;
    }
    const a = or(s_xhr);
    if (n === cs) {
      const o = s_xhr.getResponseHeader("Content-Range");
      const l = /bytes (\d+)-(\d+)\/(\d+)/.exec(o);
      if (l) {
        s.onDone({
          begin: parseInt(l[1], 10),
          chunk: a
        });
      } else {
        I('Missing or invalid "Content-Range" header.');
        s.onError(0);
      }
    } else {
      if (a) {
        s.onDone({
          begin: 0,
          chunk: a
        });
      } else {
        s.onError(s_xhr.status);
      }
    }
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const xhr = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t];
    xhr.abort();
  }
}
class hr {
  constructor(t) {
    this._source = t;
    this._manager = new lr(t);
    this._rangeChunkSize = t.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    if (e >= 0) {
      this._rangeRequestReaders.splice(e, 1);
    }
  }
  getFullReader() {
    B(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
    this._fullRequestReader = new cr(this._manager, this._source);
    return this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const s = new dr(this._manager, t, e);
    s.onClosed = this._onRangeRequestReaderClosed.bind(this);
    this._rangeRequestReaders.push(s);
    return s;
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeRequestReaders.slice(0)) {
      e.cancel(t);
    }
  }
}
class cr {
  constructor(t, e) {
    this._manager = t;
    this._url = e.url;
    this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    });
    this._headersCapability = Promise.withResolvers();
    this._disableRange = e.disableRange || false;
    this._contentLength = e.length;
    this._rangeChunkSize = e.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    this._requests = [];
    this._done = false;
    this._storedError = undefined;
    this._filename = null;
    this.onProgress = null;
  }
  _onHeadersReceived() {
    const _fullRequestId = this._fullRequestId;
    const e = this._manager.getRequestXhr(_fullRequestId);
    this._manager._responseOrigin = Je(e.responseURL);
    const s = e.getAllResponseHeaders();
    const responseHeaders = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map(a => {
      const [o, ...l] = a.split(": ");
      return [o, l.join(": ")];
    }) : []);
    const {
      allowRangeRequests,
      suggestedLength
    } = Di({
      responseHeaders,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    if (allowRangeRequests) {
      this._isRangeSupported = true;
    }
    this._contentLength = suggestedLength || this._contentLength;
    this._filename = Li(responseHeaders);
    if (this._isRangeSupported) {
      this._manager.abortRequest(_fullRequestId);
    }
    this._headersCapability.resolve();
  }
  _onDone(t) {
    t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: false
    }) : this._cachedChunks.push(t.chunk));
    this._done = true;
    if (!(this._cachedChunks.length > 0)) {
      for (const e of this._requests) {
        e.resolve({
          value: undefined,
          done: true
        });
      }
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = Pe(t, this._url);
    this._headersCapability.reject(this._storedError);
    for (const e of this._requests) {
      e.reject(this._storedError);
    }
    this._requests.length = 0;
    this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    this.onProgress?.({
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    await this._headersCapability.promise;
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._cachedChunks.length > 0) {
      return {
        value: this._cachedChunks.shift(),
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const t = Promise.withResolvers();
    this._requests.push(t);
    return t.promise;
  }
  cancel(t) {
    this._done = true;
    this._headersCapability.reject(t);
    for (const e of this._requests) {
      e.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._fullRequestId)) {
      this._manager.abortRequest(this._fullRequestId);
    }
    this._fullRequestReader = null;
  }
}
class dr {
  constructor(t, e, end) {
    this._manager = t;
    this._url = t.url;
    this._requestId = t.request({
      begin: e,
      end,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    });
    this._requests = [];
    this._queuedChunk = null;
    this._done = false;
    this._storedError = undefined;
    this.onProgress = null;
    this.onClosed = null;
  }
  _onHeadersReceived() {
    const t = Je(this._manager.getRequestXhr(this._requestId)?.responseURL);
    if (t !== this._manager._responseOrigin) {
      this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`);
      this._onError(0);
    }
  }
  _close() {
    this.onClosed?.(this);
  }
  _onDone({
    chunk
  }) {
    if (this._requests.length > 0) {
      this._requests.shift().resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunk = chunk;
    }
    this._done = true;
    for (const s of this._requests) {
      s.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
    this._close();
  }
  _onError(t) {
    this._storedError ??= Pe(t, this._url);
    for (const e of this._requests) {
      e.reject(this._storedError);
    }
    this._requests.length = 0;
    this._queuedChunk = null;
  }
  _onProgress(t) {
    this.isStreamingSupported || this.onProgress?.({
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: e,
        done: false
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    const t = Promise.withResolvers();
    this._requests.push(t);
    return t.promise;
  }
  cancel(t) {
    this._done = true;
    for (const e of this._requests) {
      e.resolve({
        value: undefined,
        done: true
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._requestId)) {
      this._manager.abortRequest(this._requestId);
    }
    this._close();
  }
}
const ur = /^[a-z][a-z0-9\-+.]+:/i;
function fr(url) {
  if (ur.test(url)) {
    return new URL(url);
  }
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(url));
}
class pr {
  constructor(t) {
    this.source = t;
    this.url = fr(t.url);
    B(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs.");
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    B(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
    this._fullRequestReader = new gr(this);
    return this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) {
      return null;
    }
    const s = new mr(this, t, e);
    this._rangeRequestReaders.push(s);
    return s;
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeRequestReaders.slice(0)) {
      e.cancel(t);
    }
  }
}
class gr {
  constructor(t) {
    this._url = t.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = e.disableRange || false;
    this._rangeChunkSize = e.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = !e.disableStream;
    this._isRangeSupported = !e.disableRange;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    this._headersCapability = Promise.withResolvers();
    const s = process.getBuiltinModule("fs");
    s.promises.lstat(this._url).then(i => {
      this._contentLength = i.size;
      this._setReadableStream(s.createReadStream(this._url));
      this._headersCapability.resolve();
    }, i => {
      if (i.code === "ENOENT") {
        i = Pe(0, this._url.href);
      }
      this._storedError = i;
      this._headersCapability.reject(i);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    const t = this._readableStream.read();
    if (t === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += t.length;
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    });
    return {
      value: new Uint8Array(t).buffer,
      done: false
    };
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t;
    this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t;
    t.on("readable", () => {
      this._readCapability.resolve();
    });
    t.on("end", () => {
      t.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    t.on("error", e => {
      this._error(e);
    });
    if (!this._isStreamingSupported && this._isRangeSupported) {
      this._error(new AbortException("streaming is disabled"));
    }
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
}
class mr {
  constructor(t, start, s) {
    this._url = t.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    const i = t.source;
    this._isStreamingSupported = !i.disableStream;
    const n = process.getBuiltinModule("fs");
    this._setReadableStream(n.createReadStream(this._url, {
      start,
      end: s - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: undefined,
        done: true
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    const t = this._readableStream.read();
    if (t === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += t.length;
    this.onProgress?.({
      loaded: this._loaded
    });
    return {
      value: new Uint8Array(t).buffer,
      done: false
    };
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t;
    this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t;
    t.on("readable", () => {
      this._readCapability.resolve();
    });
    t.on("end", () => {
      t.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    t.on("error", e => {
      this._error(e);
    });
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
}
const ce = Symbol("INITIAL_DATA");
class Oi {
  #t = Object.create(null);
  #e(t) {
    return this.#t[t] ||= {
      ...Promise.withResolvers(),
      data: ce
    };
  }
  get(t, e = null) {
    if (e) {
      const i = this.#e(t);
      i.promise.then(() => e(i.data));
      return null;
    }
    const s = this.#t[t];
    if (!s || s.data === ce) {
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    }
    return s.data;
  }
  has(t) {
    const e = this.#t[t];
    return !!e && e.data !== ce;
  }
  delete(t) {
    const e = this.#t[t];
    if (!e || e.data === ce) {
      return false;
    }
    delete this.#t[t];
    return true;
  }
  resolve(t, e = null) {
    const s = this.#e(t);
    s.data = e;
    s.resolve();
  }
  clear() {
    for (const t in this.#t) {
      const {
        data
      } = this.#t[t];
      data?.bitmap?.close();
    }
    this.#t = Object.create(null);
  }
  *[Symbol.iterator]() {
    for (const t in this.#t) {
      const {
        data
      } = this.#t[t];
      if (data !== ce) {
        yield [t, data];
      }
    }
  }
}
const br = 100000;
const ui = 30;
export class TextLayer {
  #t = Promise.withResolvers();
  #e = null;
  #i = false;
  #s = !!globalThis.FontInspector?.enabled;
  #a = null;
  #n = null;
  #r = 0;
  #o = 0;
  #h = null;
  #l = null;
  #u = 0;
  #d = 0;
  #f = Object.create(null);
  #m = [];
  #p = null;
  #c = [];
  #g = new WeakMap();
  #b = null;
  static #A = new Map();
  static #y = new Map();
  static #C = new WeakMap();
  static #S = null;
  static #w = new Set();
  constructor({
    textContentSource,
    container,
    viewport
  }) {
    if (textContentSource instanceof ReadableStream) {
      this.#p = textContentSource;
    } else if (typeof textContentSource === "object") {
      this.#p = new ReadableStream({
        start(o) {
          o.enqueue(textContentSource);
          o.close();
        }
      });
    } else {
      throw new Error('No "textContentSource" parameter specified.');
    }
    this.#e = this.#l = container;
    this.#d = viewport.scale * OutputScale.pixelRatio;
    this.#u = viewport.rotation;
    this.#n = {
      div: null,
      properties: null,
      ctx: null
    };
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    this.#b = [1, 0, 0, -1, -pageX, pageY + pageHeight];
    this.#o = pageWidth;
    this.#r = pageHeight;
    TextLayer.#k();
    setLayerDimensions(container, viewport);
    this.#t.promise.finally(() => {
      TextLayer.#w.delete(this);
      this.#n = null;
      this.#f = null;
    }).catch(() => {});
  }
  static get fontFamilyMap() {
    const {
      isWindows,
      isFirefox
    } = FeatureTest.platform;
    return shadow(this, "fontFamilyMap", new Map([["sans-serif", `${isWindows && isFirefox ? "Calibri, " : ""}sans-serif`], ["monospace", `${isWindows && isFirefox ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      this.#h.read().then(({
        value,
        done
      }) => {
        if (done) {
          this.#t.resolve();
          return;
        }
        this.#a ??= value.lang;
        Object.assign(this.#f, value.styles);
        this.#T(value.items);
        t();
      }, this.#t.reject);
    };
    this.#h = this.#p.getReader();
    TextLayer.#w.add(this);
    t();
    return this.#t.promise;
  }
  update({
    viewport,
    onBefore = null
  }) {
    const s = viewport.scale * OutputScale.pixelRatio;
    const viewport_rotation = viewport.rotation;
    if (viewport_rotation !== this.#u) {
      onBefore?.();
      this.#u = viewport_rotation;
      setLayerDimensions(this.#l, {
        rotation: viewport_rotation
      });
    }
    if (s !== this.#d) {
      onBefore?.();
      this.#d = s;
      const n = {
        div: null,
        properties: null,
        ctx: TextLayer.#M(this.#a)
      };
      for (const r of this.#c) {
        n.properties = this.#g.get(r);
        n.div = r;
        this.#E(n);
      }
    }
  }
  cancel() {
    const t = new AbortException("TextLayer task cancelled.");
    this.#h?.cancel(t).catch(() => {});
    this.#h = null;
    this.#t.reject(t);
  }
  get textDivs() {
    return this.#c;
  }
  get textContentItemsStr() {
    return this.#m;
  }
  #T(t) {
    if (this.#i) {
      return;
    }
    this.#n.ctx ??= TextLayer.#M(this.#a);
    const e = this.#c;
    const s = this.#m;
    for (const i of t) {
      if (e.length > br) {
        I("Ignoring additional textDivs for performance reasons.");
        this.#i = true;
        return;
      }
      if (i.str === undefined) {
        if (i.type === "beginMarkedContentProps" || i.type === "beginMarkedContent") {
          const n = this.#e;
          this.#e = document.createElement("span");
          this.#e.classList.add("markedContent");
          if (i.id) {
            this.#e.setAttribute("id", `${i.id}`);
          }
          n.append(this.#e);
        } else {
          if (i.type === "endMarkedContent") {
            this.#e = this.#e.parentNode;
          }
        }
        continue;
      }
      s.push(i.str);
      this.#_(i);
    }
  }
  #_(t) {
    const e = document.createElement("span");
    const s = {
      angle: 0,
      canvasWidth: 0,
      hasText: t.str !== "",
      hasEOL: t.hasEOL,
      fontSize: 0
    };
    this.#c.push(e);
    const i = Util.transform(this.#b, t.transform);
    let n = Math.atan2(i[1], i[0]);
    const r = this.#f[t.fontName];
    if (r.vertical) {
      n += Math.PI / 2;
    }
    let a = this.#s && r.fontSubstitution || r.fontFamily;
    a = TextLayer.fontFamilyMap.get(a) || a;
    const o = Math.hypot(i[2], i[3]);
    const l = o * TextLayer.#O(a, r, this.#a);
    let h;
    let c;
    if (n === 0) {
      h = i[4];
      c = i[5] - l;
    } else {
      h = i[4] + l * Math.sin(n);
      c = i[5] - l * Math.cos(n);
    }
    const u = "calc(var(--total-scale-factor) *";
    const e_style = e.style;
    if (this.#e === this.#l) {
      e_style.left = `${(100 * h / this.#o).toFixed(2)}%`;
      e_style.top = `${(100 * c / this.#r).toFixed(2)}%`;
    } else {
      e_style.left = `${u}${h.toFixed(2)}px)`;
      e_style.top = `${u}${c.toFixed(2)}px)`;
    }
    e_style.fontSize = `${u}${(TextLayer.#S * o).toFixed(2)}px)`;
    e_style.fontFamily = a;
    s.fontSize = o;
    e.setAttribute("role", "presentation");
    e.textContent = t.str;
    e.dir = t.dir;
    if (this.#s) {
      e.dataset.fontName = r.fontSubstitutionLoadedName || t.fontName;
    }
    if (n !== 0) {
      s.angle = n * (180 / Math.PI);
    }
    let g = false;
    if (t.str.length > 1) {
      g = true;
    } else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
      const p = Math.abs(t.transform[0]);
      const b = Math.abs(t.transform[3]);
      if (p !== b && Math.max(p, b) / Math.min(p, b) > 1.5) {
        g = true;
      }
    }
    if (g) {
      s.canvasWidth = r.vertical ? t.height : t.width;
    }
    this.#g.set(e, s);
    this.#n.div = e;
    this.#n.properties = s;
    this.#E(this.#n);
    if (s.hasText) {
      this.#e.append(e);
    }
    if (s.hasEOL) {
      const p = document.createElement("br");
      p.setAttribute("role", "presentation");
      this.#e.append(p);
    }
  }
  #E({
    div,
    properties,
    ctx
  }) {
    const {
      style
    } = div;
    let r = "";
    if (TextLayer.#S > 1) {
      r = `scale(${1 / TextLayer.#S})`;
    }
    if (properties.canvasWidth !== 0 && properties.hasText) {
      const {
        fontFamily
      } = style;
      const {
        canvasWidth,
        fontSize
      } = properties;
      TextLayer.#P(ctx, fontSize * this.#d, fontFamily);
      const {
        width
      } = ctx.measureText(div.textContent);
      if (width > 0) {
        r = `scaleX(${canvasWidth * this.#d / width}) ${r}`;
      }
    }
    if (properties.angle !== 0) {
      r = `rotate(${properties.angle}deg) ${r}`;
    }
    if (r.length > 0) {
      style.transform = r;
    }
  }
  static cleanup() {
    if (!(this.#w.size > 0)) {
      this.#A.clear();
      for (const {
        canvas
      } of this.#y.values()) {
        canvas.remove();
      }
      this.#y.clear();
    }
  }
  static #M(t = null) {
    let e = this.#y.get(t ||= "");
    if (!e) {
      const s = document.createElement("canvas");
      s.className = "hiddenCanvasElement";
      s.lang = t;
      document.body.append(s);
      e = s.getContext("2d", {
        alpha: false,
        willReadFrequently: true
      });
      this.#y.set(t, e);
      this.#C.set(e, {
        size: 0,
        family: ""
      });
    }
    return e;
  }
  static #P(t, e, s) {
    const i = this.#C.get(t);
    if (!(e === i.size && s === i.family)) {
      t.font = `${e}px ${s}`;
      i.size = e;
      i.family = s;
    }
  }
  static #k() {
    if (this.#S !== null) {
      return;
    }
    const t = document.createElement("div");
    t.style.opacity = 0;
    t.style.lineHeight = 1;
    t.style.fontSize = "1px";
    t.style.position = "absolute";
    t.textContent = "X";
    document.body.append(t);
    this.#S = t.getBoundingClientRect().height;
    t.remove();
  }
  static #O(t, e, s) {
    const i = this.#A.get(t);
    if (i) {
      return i;
    }
    const n = this.#M(s);
    n.canvas.width = n.canvas.height = ui;
    this.#P(n, ui, t);
    const r = n.measureText("");
    const r_fontBoundingBoxAscent = r.fontBoundingBoxAscent;
    const o = Math.abs(r.fontBoundingBoxDescent);
    n.canvas.width = n.canvas.height = 0;
    let l = 0.8;
    if (r_fontBoundingBoxAscent) {
      l = r_fontBoundingBoxAscent / (r_fontBoundingBoxAscent + o);
    } else {
      if (FeatureTest.platform.isFirefox) {
        I("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.");
      }
      if (e.ascent) {
        l = e.ascent;
      } else if (e.descent) {
        l = 1 + e.descent;
      }
    }
    this.#A.set(t, l);
    return l;
  }
}
const yr = 100;
export function getDocument(d = {}) {
  if (typeof d === "string" || d instanceof URL) {
    d = {
      url: d
    };
  } else if (d instanceof ArrayBuffer || ArrayBuffer.isView(d)) {
    d = {
      data: d
    };
  }
  const t = new Ls();
  const {
    docId
  } = t;
  const url = d.url ? Cn(d.url) : null;
  const i = d.data ? xn(d.data) : null;
  const httpHeaders = d.httpHeaders || null;
  const withCredentials = d.withCredentials === true;
  const password = d.password ?? null;
  const o = d.range instanceof PDFDataRangeTransport ? d.range : null;
  const rangeChunkSize = Number.isInteger(d.rangeChunkSize) && d.rangeChunkSize > 0 ? d.rangeChunkSize : 2 ** 16;
  let h = d.worker instanceof PDFWorker ? d.worker : null;
  const d_verbosity = d.verbosity;
  const docBaseUrl = typeof d.docBaseUrl === "string" && !isDataScheme(d.docBaseUrl) ? d.docBaseUrl : null;
  const f = De(d.cMapUrl);
  const isCompressed = d.cMapPacked !== false;
  const p = d.CMapReaderFactory || (ct ? In : Js);
  const iccUrl = De(d.iccUrl);
  const m = De(d.standardFontDataUrl);
  const y = d.StandardFontDataFactory || (ct ? Fn : Zs);
  const A = De(d.wasmUrl);
  const w = d.WasmFactory || (ct ? Nn : ti);
  const ignoreErrors = d.stopAtErrors !== true;
  const maxImageSize = Number.isInteger(d.maxImageSize) && d.maxImageSize > -1 ? d.maxImageSize : -1;
  const isEvalSupported = d.isEvalSupported !== false;
  const isOffscreenCanvasSupported = typeof d.isOffscreenCanvasSupported === "boolean" ? d.isOffscreenCanvasSupported : !ct;
  const isImageDecoderSupported = typeof d.isImageDecoderSupported === "boolean" ? d.isImageDecoderSupported : !ct && (FeatureTest.platform.isFirefox || !globalThis.chrome);
  const canvasMaxAreaInBytes = Number.isInteger(d.canvasMaxAreaInBytes) ? d.canvasMaxAreaInBytes : -1;
  const disableFontFace = typeof d.disableFontFace === "boolean" ? d.disableFontFace : ct;
  const fontExtraProperties = d.fontExtraProperties === true;
  const enableXfa = d.enableXfa === true;
  const ownerDocument = d.ownerDocument || globalThis.document;
  const disableRange = d.disableRange === true;
  const disableStream = d.disableStream === true;
  const disableAutoFetch = d.disableAutoFetch === true;
  const pdfBug = d.pdfBug === true;
  const lt = d.CanvasFactory || (ct ? Ln : Mn);
  const Mt = d.FilterFactory || (ct ? Dn : Rn);
  const It = d.enableHWA === true;
  const useWasm = d.useWasm !== false;
  const length = o ? o.length : d.length ?? NaN;
  const useSystemFonts = typeof d.useSystemFonts === "boolean" ? d.useSystemFonts : !ct && !disableFontFace;
  const useWorkerFetch = typeof d.useWorkerFetch === "boolean" ? d.useWorkerFetch : !!(p === Js && y === Zs && w === ti && f && m && A && fe(f, document.baseURI) && fe(m, document.baseURI) && fe(A, document.baseURI));
  const styleElement = null;
  Ji(d_verbosity);
  const Z = {
    canvasFactory: new lt({
      ownerDocument,
      enableHWA: It
    }),
    filterFactory: new Mt({
      docId,
      ownerDocument
    }),
    cMapReaderFactory: useWorkerFetch ? null : new p({
      baseUrl: f,
      isCompressed
    }),
    standardFontDataFactory: useWorkerFetch ? null : new y({
      baseUrl: m
    }),
    wasmFactory: useWorkerFetch ? null : new w({
      baseUrl: A
    })
  };
  if (!h) {
    h = PDFWorker.create({
      verbosity: d_verbosity,
      port: GlobalWorkerOptions.workerPort
    });
    t._worker = h;
  }
  const oe = {
    docId,
    apiVersion: "5.4.296",
    data: i,
    password,
    disableAutoFetch,
    rangeChunkSize,
    length,
    docBaseUrl,
    enableXfa,
    evaluatorOptions: {
      maxImageSize,
      disableFontFace,
      ignoreErrors,
      isEvalSupported,
      isOffscreenCanvasSupported,
      isImageDecoderSupported,
      canvasMaxAreaInBytes,
      fontExtraProperties,
      useSystemFonts,
      useWasm,
      useWorkerFetch,
      cMapUrl: f,
      iccUrl,
      standardFontDataUrl: m,
      wasmUrl: A
    }
  };
  const le = {
    ownerDocument,
    pdfBug,
    styleElement,
    loadingParams: {
      disableAutoFetch,
      enableXfa
    }
  };
  h.promise.then(() => {
    if (t.destroyed) {
      throw new Error("Loading aborted");
    }
    if (h.destroyed) {
      throw new Error("Worker was destroyed");
    }
    const qi = h.messageHandler.sendWithPromise("GetDocRequest", oe, i ? [i.buffer] : null);
    let ts;
    if (o) {
      ts = new tr(o, {
        disableRange,
        disableStream
      });
    } else if (!i) {
      if (!url) {
        throw new Error("getDocument - no `url` parameter provided.");
      }
      const es = fe(url) ? nr : ct ? pr : hr;
      ts = new es({
        url,
        length,
        httpHeaders,
        withCredentials,
        rangeChunkSize,
        disableRange,
        disableStream
      });
    }
    return qi.then(es => {
      if (t.destroyed) {
        throw new Error("Loading aborted");
      }
      if (h.destroyed) {
        throw new Error("Worker was destroyed");
      }
      const Us = new pe(docId, es, h.port);
      const Yi = new _r(Us, t, ts, le, Z, It);
      t._transport = Yi;
      Us.send("Ready", null);
    });
  }).catch(t._capability.reject);
  return t;
}
class Ls {
  static #t = 0;
  _capability = Promise.withResolvers();
  _transport = null;
  _worker = null;
  docId = `d${Ls.#t++}`;
  destroyed = false;
  onPassword = null;
  onProgress = null;
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    this.destroyed = true;
    try {
      if (this._worker?.port) {
        this._worker._pendingDestroy = true;
      }
      await this._transport?.destroy();
    } catch (error) {
      this._worker?.port && delete this._worker._pendingDestroy;
      throw error;
    }
    this._transport = null;
    this._worker?.destroy();
    this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
}
export class PDFDataRangeTransport {
  #t = Promise.withResolvers();
  #e = [];
  #i = [];
  #s = [];
  #a = [];
  constructor(t, e, s = false, i = null) {
    this.length = t;
    this.initialData = e;
    this.progressiveDone = s;
    this.contentDispositionFilename = i;
  }
  addRangeListener(t) {
    this.#a.push(t);
  }
  addProgressListener(t) {
    this.#s.push(t);
  }
  addProgressiveReadListener(t) {
    this.#i.push(t);
  }
  addProgressiveDoneListener(t) {
    this.#e.push(t);
  }
  onDataRange(t, e) {
    for (const s of this.#a) {
      s(t, e);
    }
  }
  onDataProgress(t, e) {
    this.#t.promise.then(() => {
      for (const s of this.#s) {
        s(t, e);
      }
    });
  }
  onDataProgressiveRead(t) {
    this.#t.promise.then(() => {
      for (const e of this.#i) {
        e(t);
      }
    });
  }
  onDataProgressiveDone() {
    this.#t.promise.then(() => {
      for (const t of this.#e) {
        t();
      }
    });
  }
  transportReady() {
    this.#t.resolve();
  }
  requestDataRange(t, e) {
    G("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {}
}
class wr {
  constructor(t, e) {
    this._pdfInfo = t;
    this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAnnotationsByType(t, e) {
    return this._transport.getAnnotationsByType(t, e);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getOptionalContentConfig(renderingIntent);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = false) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
class vr {
  #t = false;
  constructor(t, e, s, i = false) {
    this._pageIndex = t;
    this._pageInfo = e;
    this._transport = s;
    this._stats = i ? new Vs() : null;
    this._pdfBug = i;
    this.commonObjs = s.commonObjs;
    this.objs = new Oi();
    this._intentStates = new Map();
    this.destroyed = false;
    this.recordedBBoxes = null;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale,
    rotation = this.rotate,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  } = {}) {
    return new Ce({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  getAnnotations({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getAnnotations(this._pageIndex, renderingIntent);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext,
    canvas = canvasContext.canvas,
    viewport,
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    transform = null,
    background = null,
    optionalContentConfigPromise = null,
    annotationCanvasMap = null,
    pageColors = null,
    printAnnotationStorage = null,
    isEditing = false,
    recordOperations = false,
    operationsFilter = null
  }) {
    this._stats?.time("Overall");
    const p = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing);
    const {
      renderingIntent,
      cacheKey
    } = p;
    this.#t = false;
    optionalContentConfigPromise ||= this._transport.getOptionalContentConfig(renderingIntent);
    let y = this._intentStates.get(cacheKey);
    if (!y) {
      y = Object.create(null);
      this._intentStates.set(cacheKey, y);
    }
    if (y.streamReaderCancelTimeout) {
      clearTimeout(y.streamReaderCancelTimeout);
      y.streamReaderCancelTimeout = null;
    }
    const A = !!(renderingIntent & mt.PRINT);
    if (!y.displayReadyCapability) {
      y.displayReadyCapability = Promise.withResolvers();
      y.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(p);
    }
    const w = !!(this._pdfBug && globalThis.StepperManager?.enabled);
    const v = !this.recordedBBoxes && (recordOperations || w);
    const _ = C => {
      y.renderTasks.delete(S);
      if (v) {
        const k = S.gfx?.dependencyTracker.take();
        k && (S.stepper && S.stepper.setOperatorBBoxes(k, S.gfx.dependencyTracker.takeDebugMetadata()), recordOperations && (this.recordedBBoxes = k));
      }
      if (A) {
        this.#t = true;
      }
      this.#e();
      if (C) {
        S.capability.reject(C);
        this._abortOperatorList({
          intentState: y,
          reason: C instanceof Error ? C : new Error(C)
        });
      } else {
        S.capability.resolve();
      }
      if (this._stats) {
        this._stats.timeEnd("Rendering");
        this._stats.timeEnd("Overall");
        if (globalThis.Stats?.enabled) {
          globalThis.Stats.add(this.pageNumber, this._stats);
        }
      }
    };
    const S = new ee({
      callback: _,
      params: {
        canvas,
        canvasContext,
        dependencyTracker: v ? new Bn(canvas, y.operatorList.length, w) : null,
        viewport,
        transform,
        background
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap,
      operatorList: y.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !A,
      pdfBug: this._pdfBug,
      pageColors,
      enableHWA: this._transport.enableHWA,
      operationsFilter
    });
    (y.renderTasks ||= new Set()).add(S);
    const S_task = S.task;
    Promise.all([y.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, k]) => {
      if (this.destroyed) {
        _();
        return;
      }
      this._stats?.time("Rendering");
      if (!(k.renderingIntent & renderingIntent)) {
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      }
      S.initializeGraphics({
        transparency,
        optionalContentConfig: k
      });
      S.operatorListChanged();
    }).catch(_);
    return S_task;
  }
  getOperatorList({
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    printAnnotationStorage = null,
    isEditing = false
  } = {}) {
    function n() {
      if (a.operatorList.lastChunk) {
        a.opListReadCapability.resolve(a.operatorList);
        a.renderTasks.delete(o);
      }
    }
    const r = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing, true);
    let a = this._intentStates.get(r.cacheKey);
    if (!a) {
      a = Object.create(null);
      this._intentStates.set(r.cacheKey, a);
    }
    let o;
    if (!a.opListReadCapability) {
      o = Object.create(null);
      o.operatorListChanged = n;
      a.opListReadCapability = Promise.withResolvers();
      (a.renderTasks ||= new Set()).add(o);
      a.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(r);
    }
    return a.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent = false,
    disableNormalization = false
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: includeMarkedContent === true,
      disableNormalization: disableNormalization === true
    }, {
      highWaterMark: 100,
      size(i) {
        return i.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa) {
      return this.getXfa().then(s => we.textContent(s));
    }
    const e = this.streamTextContent(t);
    return new Promise((resolve, reject) => {
      function n() {
        r.read().then(({
          value,
          done
        }) => {
          if (done) {
            resolve(a);
            return;
          }
          a.lang ??= value.lang;
          Object.assign(a.styles, value.styles);
          a.items.push(...value.items);
          n();
        }, reject);
      }
      const r = e.getReader();
      const a = {
        items: [],
        styles: Object.create(null),
        lang: null
      };
      n();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = true;
    const t = [];
    for (const e of this._intentStates.values()) {
      this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: true
      });
      if (!e.opListReadCapability) {
        for (const s of e.renderTasks) {
          t.push(s.completed);
          s.cancel();
        }
      }
    }
    this.objs.clear();
    this.#t = false;
    return Promise.all(t);
  }
  cleanup(t = false) {
    this.#t = true;
    const e = this.#e();
    if (t && e) {
      this._stats &&= new Vs();
    }
    return e;
  }
  #e() {
    if (!this.#t || this.destroyed) {
      return false;
    }
    for (const {
      renderTasks,
      operatorList
    } of this._intentStates.values()) {
      if (renderTasks.size > 0 || !operatorList.lastChunk) {
        return false;
      }
    }
    this._intentStates.clear();
    this.objs.clear();
    this.#t = false;
    return true;
  }
  _startRenderPage(t, e) {
    const s = this._intentStates.get(e);
    s && (this._stats?.timeEnd("Page Request"), s.displayReadyCapability?.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++) {
      e.operatorList.fnArray.push(t.fnArray[s]);
      e.operatorList.argsArray.push(t.argsArray[s]);
    }
    e.operatorList.lastChunk = t.lastChunk;
    e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks) {
      s.operatorListChanged();
    }
    if (t.lastChunk) {
      this.#e();
    }
  }
  _pumpOperatorList({
    renderingIntent,
    cacheKey,
    annotationStorageSerializable,
    modifiedIds
  }) {
    const {
      map,
      transfer
    } = annotationStorageSerializable;
    const o = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: renderingIntent,
      cacheKey,
      annotationStorage: map,
      modifiedIds
    }, transfer).getReader();
    const l = this._intentStates.get(cacheKey);
    l.streamReader = o;
    const h = () => {
      o.read().then(({
        value,
        done
      }) => {
        if (done) {
          l.streamReader = null;
          return;
        }
        if (!this._transport.destroyed) {
          this._renderPageChunk(value, l);
          h();
        }
      }, c => {
        l.streamReader = null;
        if (!this._transport.destroyed) {
          if (l.operatorList) {
            l.operatorList.lastChunk = true;
            for (const u of l.renderTasks) {
              u.operatorListChanged();
            }
            this.#e();
          }
          if (l.displayReadyCapability) {
            l.displayReadyCapability.reject(c);
          } else if (l.opListReadCapability) {
            l.opListReadCapability.reject(c);
          } else {
            throw c;
          }
        }
      });
    };
    h();
  }
  _abortOperatorList({
    intentState,
    reason,
    force = false
  }) {
    if (intentState.streamReader) {
      if (intentState.streamReaderCancelTimeout) {
        clearTimeout(intentState.streamReaderCancelTimeout);
        intentState.streamReaderCancelTimeout = null;
      }
      if (!force) {
        if (intentState.renderTasks.size > 0) {
          return;
        }
        if (reason instanceof RenderingCancelledException) {
          let i = yr;
          if (reason.extraDelay > 0 && reason.extraDelay < 1000) {
            i += reason.extraDelay;
          }
          intentState.streamReaderCancelTimeout = setTimeout(() => {
            intentState.streamReaderCancelTimeout = null;
            this._abortOperatorList({
              intentState,
              reason,
              force: true
            });
          }, i);
          return;
        }
      }
      intentState.streamReader.cancel(new AbortException(reason.message)).catch(() => {});
      intentState.streamReader = null;
      if (!this._transport.destroyed) {
        for (const [i, n] of this._intentStates) {
          if (n === intentState) {
            this._intentStates.delete(i);
            break;
          }
        }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
let Bt;
let _t;
let Lt;
let jt;
let We;
let Gt;
let Vt;
let ut;
let $e;
let Hi;
let Ui;
let ge;
let re;
let ze;
export const PDFWorker = class X {
  constructor({
    name = null,
    port = null,
    verbosity = Zi()
  } = {}) {
    St(this, ut);
    St(this, Bt, Promise.withResolvers());
    St(this, _t, null);
    St(this, Lt, null);
    St(this, jt, null);
    this.name = name;
    this.destroyed = false;
    this.verbosity = verbosity;
    if (port) {
      if (W(X, Vt).has(port)) {
        throw new Error("Cannot use more than one PDFWorker per port.");
      }
      W(X, Vt).set(port, this);
      Et(this, ut, Hi).call(this, port);
    } else {
      Et(this, ut, Ui).call(this);
    }
  }
  get promise() {
    return W(this, Bt).promise;
  }
  get port() {
    return W(this, Lt);
  }
  get messageHandler() {
    return W(this, _t);
  }
  destroy() {
    this.destroyed = true;
    W(this, jt)?.terminate();
    ft(this, jt, null);
    W(X, Vt).delete(W(this, Lt));
    ft(this, Lt, null);
    W(this, _t)?.destroy();
    ft(this, _t, null);
  }
  static create(t) {
    const e = W(this, Vt).get(t?.port);
    if (e) {
      if (e._pendingDestroy) {
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      }
      return e;
    }
    return new X(t);
  }
  static get workerSrc() {
    if (GlobalWorkerOptions.workerSrc) {
      return GlobalWorkerOptions.workerSrc;
    }
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return shadow(this, "_setupFakeWorkerGlobal", (async () => {
      if (W(this, re, ze)) {
        return W(this, re, ze);
      }
      return (await import(this.workerSrc)).WorkerMessageHandler;
    })());
  }
};
Bt = new WeakMap();
_t = new WeakMap();
Lt = new WeakMap();
jt = new WeakMap();
We = new WeakMap();
Gt = new WeakMap();
Vt = new WeakMap();
ut = new WeakSet();
$e = function () {
  W(this, Bt).resolve();
  W(this, _t).send("configure", {
    verbosity: this.verbosity
  });
};
Hi = function (t) {
  ft(this, Lt, t);
  ft(this, _t, new pe("main", "worker", t));
  W(this, _t).on("ready", () => {});
  Et(this, ut, $e).call(this);
};
Ui = function () {
  if (W(PDFWorker, Gt) || W(PDFWorker, re, ze)) {
    Et(this, ut, ge).call(this);
    return;
  }
  let {
    workerSrc
  } = PDFWorker;
  try {
    if (!PDFWorker._isSameOrigin(window.location, workerSrc)) {
      workerSrc = PDFWorker._createCDNWrapper(new URL(workerSrc, window.location).href);
    }
    const e = new Worker(workerSrc, {
      type: "module"
    });
    const s = new pe("main", "worker", e);
    const i = () => {
      n.abort();
      s.destroy();
      e.terminate();
      if (this.destroyed) {
        W(this, Bt).reject(new Error("Worker was destroyed"));
      } else {
        Et(this, ut, ge).call(this);
      }
    };
    const n = new AbortController();
    e.addEventListener("error", () => {
      if (!W(this, jt)) {
        i();
      }
    }, {
      signal: n.signal
    });
    s.on("test", a => {
      n.abort();
      if (this.destroyed || !a) {
        i();
        return;
      }
      ft(this, _t, s);
      ft(this, Lt, e);
      ft(this, jt, e);
      Et(this, ut, $e).call(this);
    });
    s.on("ready", a => {
      n.abort();
      if (this.destroyed) {
        i();
        return;
      }
      try {
        r();
      } catch {
        Et(this, ut, ge).call(this);
      }
    });
    const r = () => {
      const a = new Uint8Array();
      s.send("test", a, [a.buffer]);
    };
    r();
    return;
  } catch {
    Ye("The worker has been disabled.");
  }
  Et(this, ut, ge).call(this);
};
ge = function () {
  if (!W(PDFWorker, Gt)) {
    I("Setting up fake worker.");
    ft(PDFWorker, Gt, true);
  }
  PDFWorker._setupFakeWorkerGlobal.then(t => {
    if (this.destroyed) {
      W(this, Bt).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new kn();
    ft(this, Lt, e);
    const s = `fake${zs(PDFWorker, We)._++}`;
    const i = new pe(`${s}_worker`, s, e);
    t.setup(i, e);
    ft(this, _t, new pe(s, `${s}_worker`, e));
    Et(this, ut, $e).call(this);
  }).catch(t => {
    W(this, Bt).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
};
re = new WeakSet();
ze = () => {
  try {
    return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
  } catch {
    return null;
  }
};
St(PDFWorker, re);
St(PDFWorker, We, 0);
St(PDFWorker, Gt, false);
St(PDFWorker, Vt, new WeakMap());
if (ct) {
  ft(PDFWorker, Gt, true);
  GlobalWorkerOptions.workerSrc ||= "./pdf.worker.mjs";
}
PDFWorker._isSameOrigin = (t, e) => {
  const s = URL.parse(t);
  if (!s?.origin || s.origin === "null") {
    return false;
  }
  const i = new URL(e, s);
  return s.origin === i.origin;
};
PDFWorker._createCDNWrapper = t => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
PDFWorker.fromPort = t => {
  un("`PDFWorker.fromPort` - please use `PDFWorker.create` instead.");
  if (!t?.port) {
    throw new Error("PDFWorker.fromPort - invalid method signature.");
  }
  return PDFWorker.create(t);
};
class _r {
  #t = new Map();
  #e = new Map();
  #i = new Map();
  #s = new Map();
  #a = null;
  constructor(t, e, s, i, n, r) {
    this.messageHandler = t;
    this.loadingTask = e;
    this.commonObjs = new Oi();
    this.fontLoader = new Sn({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    });
    this.loadingParams = i.loadingParams;
    this._params = i;
    this.canvasFactory = n.canvasFactory;
    this.filterFactory = n.filterFactory;
    this.cMapReaderFactory = n.cMapReaderFactory;
    this.standardFontDataFactory = n.standardFontDataFactory;
    this.wasmFactory = n.wasmFactory;
    this.destroyed = false;
    this.destroyCapability = null;
    this._networkStream = s;
    this._fullReader = null;
    this._lastProgress = null;
    this.downloadInfoCapability = Promise.withResolvers();
    this.enableHWA = r;
    this.setupMessageHandler();
  }
  #n(t, e = null) {
    const s = this.#t.get(t);
    if (s) {
      return s;
    }
    const i = this.messageHandler.sendWithPromise(t, e);
    this.#t.set(t, i);
    return i;
  }
  get annotationStorage() {
    return shadow(this, "annotationStorage", new ks());
  }
  getRenderingIntent(t, e = AnnotationMode.ENABLE, s = null, i = false, n = false) {
    let mt_DISPLAY = mt.DISPLAY;
    let annotationStorageSerializable = ms;
    switch (t) {
      case "any":
        mt_DISPLAY = mt.ANY;
        break;
      case "display":
        break;
      case "print":
        mt_DISPLAY = mt.PRINT;
        break;
      default:
        I(`getRenderingIntent - invalid intent: ${t}`);
    }
    const o = mt_DISPLAY & mt.PRINT && s instanceof Ci ? s : this.annotationStorage;
    switch (e) {
      case AnnotationMode.DISABLE:
        mt_DISPLAY += mt.ANNOTATIONS_DISABLE;
        break;
      case AnnotationMode.ENABLE:
        break;
      case AnnotationMode.ENABLE_FORMS:
        mt_DISPLAY += mt.ANNOTATIONS_FORMS;
        break;
      case AnnotationMode.ENABLE_STORAGE:
        mt_DISPLAY += mt.ANNOTATIONS_STORAGE;
        annotationStorageSerializable = o.serializable;
        break;
      default:
        I(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    if (i) {
      mt_DISPLAY += mt.IS_EDITING;
    }
    if (n) {
      mt_DISPLAY += mt.OPLIST;
    }
    const {
      ids,
      hash
    } = o.modifiedIds;
    const c = [mt_DISPLAY, annotationStorageSerializable.hash, hash];
    return {
      renderingIntent: mt_DISPLAY,
      cacheKey: c.join("_"),
      annotationStorageSerializable,
      modifiedIds: ids
    };
  }
  destroy() {
    if (this.destroyCapability) {
      return this.destroyCapability.promise;
    }
    this.destroyed = true;
    this.destroyCapability = Promise.withResolvers();
    this.#a?.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const s of this.#e.values()) {
      t.push(s._destroy());
    }
    this.#e.clear();
    this.#i.clear();
    this.#s.clear();
    if (this.hasOwnProperty("annotationStorage")) {
      this.annotationStorage.resetModified();
    }
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    t.push(e);
    Promise.all(t).then(() => {
      this.commonObjs.clear();
      this.fontLoader.clear();
      this.#t.clear();
      this.filterFactory.destroy();
      TextLayer.cleanup();
      this._networkStream?.cancelAllRequests(new AbortException("Worker was terminated."));
      this.messageHandler?.destroy();
      this.messageHandler = null;
      this.destroyCapability.resolve();
    }, this.destroyCapability.reject);
    return this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler,
      loadingTask
    } = this;
    messageHandler.on("GetReader", (s, i) => {
      B(this._networkStream, "GetReader - no `IPDFStream` instance available.");
      this._fullReader = this._networkStream.getFullReader();
      this._fullReader.onProgress = n => {
        this._lastProgress = {
          loaded: n.loaded,
          total: n.total
        };
      };
      i.onPull = () => {
        this._fullReader.read().then(({
          value,
          done
        }) => {
          if (done) {
            i.close();
            return;
          }
          B(value instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
          i.enqueue(new Uint8Array(value), 1, [value]);
        }).catch(n => {
          i.error(n);
        });
      };
      i.onCancel = n => {
        this._fullReader.cancel(n);
        i.ready.catch(r => {
          if (!this.destroyed) {
            throw r;
          }
        });
      };
    });
    messageHandler.on("ReaderHeadersReady", async s => {
      await this._fullReader.headersReady;
      const {
        isStreamingSupported,
        isRangeSupported,
        contentLength
      } = this._fullReader;
      if (!isStreamingSupported || !isRangeSupported) {
        this._lastProgress && loadingTask.onProgress?.(this._lastProgress);
        this._fullReader.onProgress = a => {
          loadingTask.onProgress?.({
            loaded: a.loaded,
            total: a.total
          });
        };
      }
      return {
        isStreamingSupported,
        isRangeSupported,
        contentLength
      };
    });
    messageHandler.on("GetRangeReader", (s, i) => {
      B(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const n = this._networkStream.getRangeReader(s.begin, s.end);
      if (!n) {
        i.close();
        return;
      }
      i.onPull = () => {
        n.read().then(({
          value,
          done
        }) => {
          if (done) {
            i.close();
            return;
          }
          B(value instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
          i.enqueue(new Uint8Array(value), 1, [value]);
        }).catch(r => {
          i.error(r);
        });
      };
      i.onCancel = r => {
        n.cancel(r);
        i.ready.catch(a => {
          if (!this.destroyed) {
            throw a;
          }
        });
      };
    });
    messageHandler.on("GetDoc", ({
      pdfInfo
    }) => {
      this._numPages = pdfInfo.numPages;
      this._htmlForXfa = pdfInfo.htmlForXfa;
      delete pdfInfo.htmlForXfa;
      loadingTask._capability.resolve(new wr(pdfInfo, this));
    });
    messageHandler.on("DocException", s => {
      loadingTask._capability.reject(pt(s));
    });
    messageHandler.on("PasswordRequest", s => {
      this.#a = Promise.withResolvers();
      try {
        if (!loadingTask.onPassword) {
          throw pt(s);
        }
        const i = password => {
          if (password instanceof Error) {
            this.#a.reject(password);
          } else {
            this.#a.resolve({
              password
            });
          }
        };
        loadingTask.onPassword(i, s.code);
      } catch (error) {
        this.#a.reject(error);
      }
      return this.#a.promise;
    });
    messageHandler.on("DataLoaded", s => {
      loadingTask.onProgress?.({
        loaded: s.length,
        total: s.length
      });
      this.downloadInfoCapability.resolve(s);
    });
    messageHandler.on("StartRenderPage", s => {
      if (this.destroyed) {
        return;
      }
      this.#e.get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
    });
    messageHandler.on("commonobj", ([s, i, n]) => {
      if (this.destroyed || this.commonObjs.has(s)) {
        return null;
      }
      switch (i) {
        case "Font":
          if ("error" in n) {
            const h = n.error;
            I(`Error during font loading: ${h}`);
            this.commonObjs.resolve(s, h);
            break;
          }
          const r = new j(n);
          const a = this._params.pdfBug && globalThis.FontInspector?.enabled ? (h, c) => globalThis.FontInspector.fontAdded(h, c) : null;
          const o = new En(r, a, n.extra, n.charProcOperatorList);
          this.fontLoader.bind(o).catch(() => messageHandler.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            if (!o.fontExtraProperties && o.data) {
              o.clearData();
            }
            this.commonObjs.resolve(s, o);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef
          } = n;
          B(imageRef, "The imageRef must be defined.");
          for (const h of this.#e.values()) {
            for (const [, c] of h.objs) {
              if (c?.ref === imageRef) {
                if (c.dataLen) {
                  this.commonObjs.resolve(s, structuredClone(c));
                  return c.dataLen;
                }
                return null;
              }
            }
          }
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(s, n);
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    });
    messageHandler.on("obj", ([s, i, n, r]) => {
      if (this.destroyed) {
        return;
      }
      const a = this.#e.get(i);
      if (!a.objs.has(s)) {
        if (a._intentStates.size === 0) {
          r?.bitmap?.close();
          return;
        }
        switch (n) {
          case "Image":
          case "Pattern":
            a.objs.resolve(s, r);
            break;
          default:
            throw new Error(`Got unknown object type ${n}`);
        }
      }
    });
    messageHandler.on("DocProgress", s => {
      this.destroyed || loadingTask.onProgress?.({
        loaded: s.loaded,
        total: s.total
      });
    });
    messageHandler.on("FetchBinaryData", async s => {
      if (this.destroyed) {
        throw new Error("Worker was destroyed.");
      }
      const i = this[s.type];
      if (!i) {
        throw new Error(`${s.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      }
      return i.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    if (this.annotationStorage.size <= 0) {
      I("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    }
    const {
      map,
      transfer
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: map,
      filename: this._fullReader?.filename ?? null
    }, transfer).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages) {
      return Promise.reject(new Error("Invalid page request."));
    }
    const e = t - 1;
    const s = this.#i.get(e);
    if (s) {
      return s;
    }
    const i = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then(n => {
      if (this.destroyed) {
        throw new Error("Transport destroyed");
      }
      if (n.refStr) {
        this.#s.set(n.refStr, t);
      }
      const r = new vr(e, n, this, this._params.pdfBug);
      this.#e.set(e, r);
      return r;
    });
    this.#i.set(e, i);
    return i;
  }
  getPageIndex(t) {
    if (bs(t)) {
      return this.messageHandler.sendWithPromise("GetPageIndex", {
        num: t.num,
        gen: t.gen
      });
    }
    return Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, intent) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent
    });
  }
  getFieldObjects() {
    return this.#n("GetFieldObjects");
  }
  hasJSActions() {
    return this.#n("HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    if (typeof t !== "string") {
      return Promise.reject(new Error("Invalid destination request."));
    }
    return this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAnnotationsByType(types, pageIndexesToSkip) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
      types,
      pageIndexesToSkip
    });
  }
  getDocJSActions() {
    return this.#n("GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return this.#n("GetOptionalContentConfig").then(e => new Zn(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata";
    const e = this.#t.get(t);
    if (e) {
      return e;
    }
    const s = this.messageHandler.sendWithPromise(t, null).then(i => ({
      info: i[0],
      metadata: i[1] ? new Qn(i[1]) : null,
      contentDispositionFilename: this._fullReader?.filename ?? null,
      contentLength: this._fullReader?.contentLength ?? null
    }));
    this.#t.set(t, s);
    return s;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = false) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of this.#e.values()) {
        if (!e.cleanup()) {
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
        }
      }
      this.commonObjs.clear();
      if (!t) {
        this.fontLoader.clear();
      }
      this.#t.clear();
      this.filterFactory.destroy(true);
      TextLayer.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!bs(t)) {
      return null;
    }
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return this.#s.get(e) ?? null;
  }
}
class Sr {
  #t = null;
  onContinue = null;
  onError = null;
  constructor(t) {
    this.#t = t;
  }
  get promise() {
    return this.#t.capability.promise;
  }
  cancel(t = 0) {
    this.#t.cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots
    } = this.#t.operatorList;
    if (!separateAnnots) {
      return false;
    }
    const {
      annotationCanvasMap
    } = this.#t;
    return separateAnnots.form || separateAnnots.canvas && annotationCanvasMap?.size > 0;
  }
}
class ee {
  #t = null;
  static #e = new WeakSet();
  constructor({
    callback,
    params,
    objs,
    commonObjs,
    annotationCanvasMap,
    operatorList,
    pageIndex,
    canvasFactory,
    filterFactory,
    useRequestAnimationFrame = false,
    pdfBug = false,
    pageColors = null,
    enableHWA = false,
    operationsFilter = null
  }) {
    this.callback = callback;
    this.params = params;
    this.objs = objs;
    this.commonObjs = commonObjs;
    this.annotationCanvasMap = annotationCanvasMap;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this._pageIndex = pageIndex;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this._pdfBug = pdfBug;
    this.pageColors = pageColors;
    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
    this.cancelled = false;
    this.capability = Promise.withResolvers();
    this.task = new Sr(this);
    this._cancelBound = this.cancel.bind(this);
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = params.canvas;
    this._canvasContext = params.canvas ? null : params.canvasContext;
    this._enableHWA = enableHWA;
    this._dependencyTracker = params.dependencyTracker;
    this._operationsFilter = operationsFilter;
  }
  get completed() {
    return this.capability.promise.catch(() => {});
  }
  initializeGraphics({
    transparency = false,
    optionalContentConfig
  }) {
    if (this.cancelled) {
      return;
    }
    if (this._canvas) {
      if (ee.#e.has(this._canvas)) {
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      }
      ee.#e.add(this._canvas);
    }
    if (this._pdfBug && globalThis.StepperManager?.enabled) {
      this.stepper = globalThis.StepperManager.create(this._pageIndex);
      this.stepper.init(this.operatorList);
      this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
    }
    const {
      viewport,
      transform,
      background,
      dependencyTracker
    } = this.params;
    const a = this._canvasContext || this._canvas.getContext("2d", {
      alpha: false,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new se(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig
    }, this.annotationCanvasMap, this.pageColors, dependencyTracker);
    this.gfx.beginDrawing({
      transform,
      viewport,
      transparency,
      background
    });
    this.operatorListIdx = 0;
    this.graphicsReady = true;
    this.graphicsReadyCallback?.();
  }
  cancel(t = null, e = 0) {
    this.running = false;
    this.cancelled = true;
    this.gfx?.endDrawing();
    if (this.#t) {
      window.cancelAnimationFrame(this.#t);
      this.#t = null;
    }
    ee.#e.delete(this._canvas);
    t ||= new RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, e);
    this.callback(t);
    this.task.onError?.(t);
  }
  operatorListChanged() {
    if (!this.graphicsReady) {
      this.graphicsReadyCallback ||= this._continueBound;
      return;
    }
    this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length);
    this.stepper?.updateOperatorList(this.operatorList);
    if (!this.running) {
      this._continue();
    }
  }
  _continue() {
    this.running = true;
    !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    if (this._useRequestAnimationFrame) {
      this.#t = window.requestAnimationFrame(() => {
        this.#t = null;
        this._nextBound().catch(this._cancelBound);
      });
    } else {
      Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
  }
  async _next() {
    if (!this.cancelled) {
      this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter);
      if (this.operatorListIdx === this.operatorList.argsArray.length) {
        this.running = false;
        if (this.operatorList.lastChunk) {
          this.gfx.endDrawing();
          ee.#e.delete(this._canvas);
          this.callback();
        }
      }
    }
  }
}
export const version = "5.4.296";
export const build = "f56dc8601";
export class ColorPicker {
  #t = null;
  #e = null;
  #i;
  #s = null;
  #a = false;
  #n = false;
  #r = null;
  #o;
  #h = null;
  #l = null;
  static #u = null;
  static get _keyboardManager() {
    return shadow(this, "_keyboardManager", new Te([[["Escape", "mac+Escape"], ColorPicker.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ColorPicker.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ColorPicker.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ColorPicker.prototype._moveToPrevious], [["Home", "mac+Home"], ColorPicker.prototype._moveToBeginning], [["End", "mac+End"], ColorPicker.prototype._moveToEnd]]));
  }
  constructor({
    editor = null,
    uiManager = null
  }) {
    if (editor) {
      this.#n = false;
      this.#r = editor;
    } else {
      this.#n = true;
    }
    this.#l = editor?._uiManager || uiManager;
    this.#o = this.#l._eventBus;
    this.#i = editor?.color?.toUpperCase() || this.#l?.highlightColors.values().next().value || "#FFFF98";
    ColorPicker.#u ||= Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    });
  }
  renderButton() {
    const t = this.#t = document.createElement("button");
    t.className = "colorPicker";
    t.tabIndex = "0";
    t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
    t.ariaHasPopup = "true";
    if (this.#r) {
      t.ariaControls = `${this.#r.id}_colorpicker_dropdown`;
    }
    const _signal = this.#l._signal;
    t.addEventListener("click", this.#p.bind(this), {
      signal: _signal
    });
    t.addEventListener("keydown", this.#m.bind(this), {
      signal: _signal
    });
    const s = this.#e = document.createElement("span");
    s.className = "swatch";
    s.ariaHidden = "true";
    s.style.backgroundColor = this.#i;
    t.append(s);
    return t;
  }
  renderMainDropdown() {
    const t = this.#s = this.#d();
    t.ariaOrientation = "horizontal";
    t.ariaLabelledBy = "highlightColorPickerLabel";
    return t;
  }
  #d() {
    const t = document.createElement("div");
    const _signal = this.#l._signal;
    t.addEventListener("contextmenu", noContextMenu, {
      signal: _signal
    });
    t.className = "dropdown";
    t.role = "listbox";
    t.ariaMultiSelectable = "false";
    t.ariaOrientation = "vertical";
    t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
    if (this.#r) {
      t.id = `${this.#r.id}_colorpicker_dropdown`;
    }
    for (const [s, i] of this.#l.highlightColors) {
      const n = document.createElement("button");
      n.tabIndex = "0";
      n.role = "option";
      n.setAttribute("data-color", i);
      n.title = s;
      n.setAttribute("data-l10n-id", ColorPicker.#u[s]);
      const r = document.createElement("span");
      n.append(r);
      r.className = "swatch";
      r.style.backgroundColor = i;
      n.ariaSelected = i === this.#i;
      n.addEventListener("click", this.#f.bind(this, i), {
        signal: _signal
      });
      t.append(n);
    }
    t.addEventListener("keydown", this.#m.bind(this), {
      signal: _signal
    });
    return t;
  }
  #f(t, e) {
    e.stopPropagation();
    this.#o.dispatch("switchannotationeditorparams", {
      source: this,
      type: AnnotationEditorParamsType.HIGHLIGHT_COLOR,
      value: t
    });
    this.updateColor(t);
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === this.#t) {
      this.#p(t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    if (e) {
      this.#f(e, t);
    }
  }
  _moveToNext(t) {
    if (!this.#g) {
      this.#p(t);
      return;
    }
    if (t.target === this.#t) {
      this.#s.firstChild?.focus();
      return;
    }
    t.target.nextSibling?.focus();
  }
  _moveToPrevious(t) {
    if (t.target === this.#s?.firstChild || t.target === this.#t) {
      if (this.#g) {
        this._hideDropdownFromKeyboard();
      }
      return;
    }
    if (!this.#g) {
      this.#p(t);
    }
    t.target.previousSibling?.focus();
  }
  _moveToBeginning(t) {
    if (!this.#g) {
      this.#p(t);
      return;
    }
    this.#s.firstChild?.focus();
  }
  _moveToEnd(t) {
    if (!this.#g) {
      this.#p(t);
      return;
    }
    this.#s.lastChild?.focus();
  }
  #m(t) {
    ColorPicker._keyboardManager.exec(this, t);
  }
  #p(t) {
    if (this.#g) {
      this.hideDropdown();
      return;
    }
    this.#a = t.detail === 0;
    if (!this.#h) {
      this.#h = new AbortController();
      window.addEventListener("pointerdown", this.#c.bind(this), {
        signal: this.#l.combinedSignal(this.#h)
      });
    }
    this.#t.ariaExpanded = "true";
    if (this.#s) {
      this.#s.classList.remove("hidden");
      return;
    }
    const e = this.#s = this.#d();
    this.#t.append(e);
  }
  #c(t) {
    if (!this.#s?.contains(t.target)) {
      this.hideDropdown();
    }
  }
  hideDropdown() {
    this.#s?.classList.add("hidden");
    this.#t.ariaExpanded = "false";
    this.#h?.abort();
    this.#h = null;
  }
  get #g() {
    return this.#s && !this.#s.classList.contains("hidden");
  }
  _hideDropdownFromKeyboard() {
    if (!this.#n) {
      if (!this.#g) {
        this.#r?.unselect();
        return;
      }
      this.hideDropdown();
      this.#t.focus({
        preventScroll: true,
        focusVisible: this.#a
      });
    }
  }
  updateColor(t) {
    if (this.#e) {
      this.#e.style.backgroundColor = t;
    }
    if (!this.#s) {
      return;
    }
    const e = this.#l.highlightColors.values();
    for (const s of this.#s.children) {
      s.ariaSelected = e.next().value === t.toUpperCase();
    }
  }
  destroy() {
    this.#t?.remove();
    this.#t = null;
    this.#e = null;
    this.#s?.remove();
    this.#s = null;
  }
}
class _e {
  #t = null;
  #e = null;
  #i = null;
  static #s = null;
  constructor(t) {
    this.#e = t;
    this.#i = t._uiManager;
    _e.#s ||= Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    });
  }
  renderButton() {
    if (this.#t) {
      return this.#t;
    }
    const {
      editorType,
      colorType,
      colorValue
    } = this.#e;
    const i = this.#t = document.createElement("input");
    i.type = "color";
    i.value = colorValue || "#000000";
    i.className = "basicColorPicker";
    i.tabIndex = 0;
    i.setAttribute("data-l10n-id", _e.#s[editorType]);
    i.addEventListener("input", () => {
      this.#i.updateParams(colorType, i.value);
    }, {
      signal: this.#i._signal
    });
    return i;
  }
  update(t) {
    if (this.#t) {
      this.#t.value = t;
    }
  }
  destroy() {
    this.#t?.remove();
    this.#t = null;
  }
  hideDropdown() {}
}
function fi(d) {
  return Math.floor(Math.max(0, Math.min(1, d)) * 255).toString(16).padStart(2, "0");
}
function de(d) {
  return Math.max(0, Math.min(255, 255 * d));
}
class pi {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    t = de(t);
    return [t, t, t];
  }
  static G_HTML([t]) {
    const e = fi(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(de);
  }
  static RGB_HTML(t) {
    return `#${t.map(fi).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [de(1 - Math.min(1, t + i)), de(1 - Math.min(1, s + i)), de(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t;
    const n = 1 - e;
    const r = 1 - s;
    const a = Math.min(i, n, r);
    return ["CMYK", i, n, r, a];
  }
}
class xr {
  create(t, e, s = false) {
    if (t <= 0 || e <= 0) {
      throw new Error("Invalid SVG dimensions");
    }
    const i = this._createSVG("svg:svg");
    i.setAttribute("version", "1.1");
    if (!s) {
      i.setAttribute("width", `${t}px`);
      i.setAttribute("height", `${e}px`);
    }
    i.setAttribute("preserveAspectRatio", "none");
    i.setAttribute("viewBox", `0 0 ${t} ${e}`);
    return i;
  }
  createElement(t) {
    if (typeof t !== "string") {
      throw new Error("Invalid SVG element type");
    }
    return this._createSVG(t);
  }
  _createSVG(t) {
    G("Abstract method `_createSVG` called.");
  }
}
export class DOMSVGFactory extends xr {
  _createSVG(t) {
    return document.createElementNS(Rt, t);
  }
}
const Tr = 9;
const Xt = new WeakSet();
const Pr = new Date().getTimezoneOffset() * 60 * 1000;
class gi {
  static create(t) {
    switch (t.data.annotationType) {
      case AnnotationType.LINK:
        return new Is(t);
      case AnnotationType.TEXT:
        return new Mr(t);
      case AnnotationType.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new Rr(t);
          case "Btn":
            if (t.data.radioButton) {
              return new $i(t);
            }
            if (t.data.checkBox) {
              return new Lr(t);
            }
            return new Ir(t);
          case "Ch":
            return new Fr(t);
          case "Sig":
            return new Dr(t);
        }
        return new Yt(t);
      case AnnotationType.POPUP:
        return new ws(t);
      case AnnotationType.FREETEXT:
        return new zi(t);
      case AnnotationType.LINE:
        return new Or(t);
      case AnnotationType.SQUARE:
        return new Br(t);
      case AnnotationType.CIRCLE:
        return new Hr(t);
      case AnnotationType.POLYLINE:
        return new ji(t);
      case AnnotationType.CARET:
        return new $r(t);
      case AnnotationType.INK:
        return new Fs(t);
      case AnnotationType.POLYGON:
        return new Ur(t);
      case AnnotationType.HIGHLIGHT:
        return new Gi(t);
      case AnnotationType.UNDERLINE:
        return new zr(t);
      case AnnotationType.SQUIGGLY:
        return new jr(t);
      case AnnotationType.STRIKEOUT:
        return new Gr(t);
      case AnnotationType.STAMP:
        return new Vi(t);
      case AnnotationType.FILEATTACHMENT:
        return new Vr(t);
      default:
        return new K(t);
    }
  }
}
class K {
  #t = null;
  #e = false;
  #i = null;
  constructor(t, {
    isRenderable = false,
    ignoreBorder = false,
    createQuadrilaterals = false
  } = {}) {
    this.isRenderable = isRenderable;
    this.data = t.data;
    this.layer = t.layer;
    this.linkService = t.linkService;
    this.downloadManager = t.downloadManager;
    this.imageResourcesPath = t.imageResourcesPath;
    this.renderForms = t.renderForms;
    this.svgFactory = t.svgFactory;
    this.annotationStorage = t.annotationStorage;
    this.enableComment = t.enableComment;
    this.enableScripting = t.enableScripting;
    this.hasJSActions = t.hasJSActions;
    this._fieldObjects = t.fieldObjects;
    this.parent = t.parent;
    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
    if (createQuadrilaterals) {
      this._createQuadrilaterals();
    }
  }
  static _hasPopupData({
    contentsObj,
    richText
  }) {
    return !!(contentsObj?.str || richText?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return K._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    const {
      data
    } = this;
    const e = this.annotationStorage?.getEditor(data.id);
    if (e) {
      return e.getData();
    }
    return data;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    const t = this.annotationStorage?.getEditor(this.data.id);
    if (t) {
      return t.commentButtonPositionInPage;
    }
    const {
      quadPoints,
      inkLists,
      rect
    } = this.data;
    let n = -Infinity;
    let r = -Infinity;
    if (quadPoints?.length >= 8) {
      for (let a = 0; a < quadPoints.length; a += 8) {
        if (quadPoints[a + 1] > r) {
          r = quadPoints[a + 1];
          n = quadPoints[a + 2];
        } else if (quadPoints[a + 1] === r) {
          n = Math.max(n, quadPoints[a + 2]);
        }
      }
      return [n, r];
    }
    if (inkLists?.length >= 1) {
      for (const a of inkLists) {
        for (let o = 0, l = a.length; o < l; o += 2) {
          if (a[o + 1] > r) {
            r = a[o + 1];
            n = a[o];
          } else if (a[o + 1] === r) {
            n = Math.max(n, a[o]);
          }
        }
      }
      if (n !== Infinity) {
        return [n, r];
      }
    }
    if (rect) {
      return [rect[2], rect[3]];
    }
    return null;
  }
  _normalizePoint(t) {
    const {
      page: {
        view
      },
      viewport: {
        rawDims: {
          pageWidth,
          pageHeight,
          pageX,
          pageY
        }
      }
    } = this.parent;
    t[1] = view[3] - t[1] + view[1];
    t[0] = 100 * (t[0] - pageX) / pageWidth;
    t[1] = 100 * (t[1] - pageY) / pageHeight;
    return t;
  }
  get commentText() {
    const {
      data
    } = this;
    return this.annotationStorage.getRawValue(`${ye}${data.id}`)?.popup?.contents || data.contentsObj?.str || "";
  }
  set commentText(t) {
    const {
      data
    } = this;
    const popup = {
      deleted: !t,
      contents: t || ""
    };
    if (!this.annotationStorage.updateEditor(data.id, {
      popup
    })) {
      this.annotationStorage.setValue(`${ye}${data.id}`, {
        id: data.id,
        annotationType: data.annotationType,
        pageIndex: this.parent.page._pageIndex,
        popup,
        popupRef: data.popupRef,
        modificationDate: new Date()
      });
    }
    if (!t) {
      this.removePopup();
    }
  }
  removePopup() {
    (this.#i?.popup || this.popup)?.remove();
    this.#i = this.popup = null;
  }
  updateEdited(t) {
    if (!this.container) {
      return;
    }
    if (t.rect) {
      this.#t ||= {
        rect: this.data.rect.slice(0)
      };
    }
    const {
      rect,
      popup
    } = t;
    if (rect) {
      this.#s(rect);
    }
    let i = this.#i?.popup || this.popup;
    if (!i && popup?.text) {
      this._createPopup(popup);
      i = this.#i.popup;
    }
    if (i) {
      i.updateEdited(t);
      if (popup?.deleted) {
        i.remove();
        this.#i = null;
        this.popup = null;
      }
    }
  }
  resetEdited() {
    if (this.#t) {
      this.#s(this.#t.rect);
      this.#i?.popup.resetEdited();
      this.#t = null;
    }
  }
  #s(t) {
    const {
      container: {
        style
      },
      data: {
        rect,
        rotation
      },
      parent: {
        viewport: {
          rawDims: {
            pageWidth,
            pageHeight,
            pageX,
            pageY
          }
        }
      }
    } = this;
    rect?.splice(0, 4, ...t);
    style.left = `${100 * (t[0] - pageX) / pageWidth}%`;
    style.top = `${100 * (pageHeight - t[3] + pageY) / pageHeight}%`;
    if (rotation === 0) {
      style.width = `${100 * (t[2] - t[0]) / pageWidth}%`;
      style.height = `${100 * (t[3] - t[1]) / pageHeight}%`;
    } else {
      this.setRotation(rotation);
    }
  }
  _createContainer(t) {
    const {
      data,
      parent: {
        page,
        viewport
      }
    } = this;
    const n = document.createElement("section");
    n.setAttribute("data-annotation-id", data.id);
    if (!(this instanceof Yt) && !(this instanceof Is)) {
      n.tabIndex = 0;
    }
    const {
      style
    } = n;
    style.zIndex = this.parent.zIndex;
    this.parent.zIndex += 2;
    if (data.alternativeText) {
      n.title = data.alternativeText;
    }
    if (data.noRotate) {
      n.classList.add("norotate");
    }
    if (!data.rect || this instanceof ws) {
      const {
        rotation: rotation_1
      } = data;
      if (!data.hasOwnCanvas && rotation_1 !== 0) {
        this.setRotation(rotation_1, n);
      }
      return n;
    }
    const {
      width,
      height
    } = this;
    if (!t && data.borderStyle.width > 0) {
      style.borderWidth = `${data.borderStyle.width}px`;
      const p = data.borderStyle.horizontalCornerRadius;
      const b = data.borderStyle.verticalCornerRadius;
      if (p > 0 || b > 0) {
        const y = `calc(${p}px * var(--total-scale-factor)) / calc(${b}px * var(--total-scale-factor))`;
        style.borderRadius = y;
      } else if (this instanceof $i) {
        const y = `calc(${width}px * var(--total-scale-factor)) / calc(${height}px * var(--total-scale-factor))`;
        style.borderRadius = y;
      }
      switch (data.borderStyle.style) {
        case Qt.SOLID:
          style.borderStyle = "solid";
          break;
        case Qt.DASHED:
          style.borderStyle = "dashed";
          break;
        case Qt.BEVELED:
          I("Unimplemented border style: beveled");
          break;
        case Qt.INSET:
          I("Unimplemented border style: inset");
          break;
        case Qt.UNDERLINE:
          style.borderBottomStyle = "solid";
          break;
      }
      const m = data.borderColor || null;
      if (m) {
        this.#e = true;
        style.borderColor = Util.makeHexColor(m[0] | 0, m[1] | 0, m[2] | 0);
      } else {
        style.borderWidth = 0;
      }
    }
    const l = Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    style.left = `${100 * (l[0] - pageX) / pageWidth}%`;
    style.top = `${100 * (l[1] - pageY) / pageHeight}%`;
    const {
      rotation
    } = data;
    if (data.hasOwnCanvas || rotation === 0) {
      style.width = `${100 * width / pageWidth}%`;
      style.height = `${100 * height / pageHeight}%`;
    } else {
      this.setRotation(rotation, n);
    }
    return n;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect) {
      return;
    }
    const {
      pageWidth,
      pageHeight
    } = this.parent.viewport.rawDims;
    let {
      width,
      height
    } = this;
    if (t % 180 !== 0) {
      [width, height] = [height, width];
    }
    e.style.width = `${100 * width / pageWidth}%`;
    e.style.height = `${100 * height / pageHeight}%`;
    e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const [r, ...a] = i.detail[e];
      i.target.style[s] = pi[`${r}_HTML`](a);
      this.annotationStorage.setValue(this.data.id, {
        [s]: pi[`${r}_rgb`](a)
      });
    };
    return shadow(this, "_commonActions", {
      display: e => {
        const {
          display
        } = e.detail;
        const noView = display % 2 === 1;
        this.container.style.visibility = noView ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noView,
          noPrint: display === 1 || display === 2
        });
      },
      print: e => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: e => {
        const {
          hidden
        } = e.detail;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noPrint: hidden,
          noView: hidden
        });
      },
      focus: e => {
        setTimeout(() => e.target.focus({
          preventScroll: false
        }), 0);
      },
      userName: e => {
        e.target.title = e.detail.userName;
      },
      readonly: e => {
        e.target.disabled = e.detail.readonly;
      },
      required: e => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: e => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: e => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: e => {
        t("fgColor", "color", e);
      },
      textColor: e => {
        t("textColor", "color", e);
      },
      borderColor: e => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: e => {
        t("strokeColor", "borderColor", e);
      },
      rotation: e => {
        const rotation = e.detail.rotation;
        this.setRotation(rotation);
        this.annotationStorage.setValue(this.data.id, {
          rotation
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const _commonActions = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      (t[i] || _commonActions[i])?.(e);
    }
  }
  _setDefaultPropertiesFromJS(target) {
    if (!this.enableScripting) {
      return;
    }
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e) {
      return;
    }
    const _commonActions = this._commonActions;
    for (const [i, n] of Object.entries(e)) {
      const r = _commonActions[i];
      if (r) {
        const a = {
          detail: {
            [i]: n
          },
          target
        };
        r(a);
        delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container) {
      return;
    }
    const {
      quadPoints
    } = this.data;
    if (!quadPoints) {
      return;
    }
    const [e, s, i, n] = this.data.rect.map(p => Math.fround(p));
    if (quadPoints.length === 8) {
      const [p, b, m, y] = quadPoints.subarray(2, 6);
      if (i === p && n === b && e === m && s === y) {
        return;
      }
    }
    const {
      style
    } = this.container;
    let a;
    if (this.#e) {
      const {
        borderColor,
        borderWidth
      } = style;
      style.borderWidth = 0;
      a = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${borderColor}" stroke-width="${borderWidth}">`];
      this.container.classList.add("hasBorder");
    }
    const o = i - e;
    const l = n - s;
    const {
      svgFactory
    } = this;
    const c = svgFactory.createElement("svg");
    c.classList.add("quadrilateralsContainer");
    c.setAttribute("width", 0);
    c.setAttribute("height", 0);
    c.role = "none";
    const u = svgFactory.createElement("defs");
    c.append(u);
    const f = svgFactory.createElement("clipPath");
    const g = `clippath_${this.data.id}`;
    f.setAttribute("id", g);
    f.setAttribute("clipPathUnits", "objectBoundingBox");
    u.append(f);
    for (let p = 2, b = quadPoints.length; p < b; p += 8) {
      const quadPoint = quadPoints[p];
      const y = quadPoints[p + 1];
      const A = quadPoints[p + 2];
      const w = quadPoints[p + 3];
      const v = svgFactory.createElement("rect");
      const _ = (A - e) / o;
      const S = (n - y) / l;
      const E = (quadPoint - A) / o;
      const C = (y - w) / l;
      v.setAttribute("x", _);
      v.setAttribute("y", S);
      v.setAttribute("width", E);
      v.setAttribute("height", C);
      f.append(v);
      a?.push(`<rect vector-effect="non-scaling-stroke" x="${_}" y="${S}" width="${E}" height="${C}"/>`);
    }
    if (this.#e) {
      a.push("</g></svg>')");
      style.backgroundImage = a.join("");
    }
    this.container.append(c);
    this.container.style.clipPath = `url(#${g})`;
  }
  _createPopup(t = null) {
    const {
      data
    } = this;
    let contentsObj;
    let modificationDate;
    if (t) {
      contentsObj = {
        str: t.text
      };
      modificationDate = t.date;
    } else {
      contentsObj = data.contentsObj;
      modificationDate = data.modificationDate;
    }
    const n = this.#i = new ws({
      data: {
        color: data.color,
        titleObj: data.titleObj,
        modificationDate,
        contentsObj,
        richText: data.richText,
        parentRect: data.rect,
        borderStyle: 0,
        id: `popup_${data.id}`,
        rotation: data.rotation,
        noRotate: true
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this]
    });
    if (!this.parent._commentManager) {
      this.parent.div.append(n.render());
    }
  }
  get hasPopupElement() {
    return !!(this.#i || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return this.#i;
  }
  render() {
    G("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects[t];
      if (i) {
        for (const {
          page,
          id,
          exportValues
        } of i) {
          if (page === -1 || id === e) {
            continue;
          }
          const exportValue = typeof exportValues === "string" ? exportValues : null;
          const l = document.querySelector(`[data-element-id="${id}"]`);
          if (l && !Xt.has(l)) {
            I(`_getElementsByName - element not allowed: ${id}`);
            continue;
          }
          s.push({
            id,
            exportValue,
            domElement: l
          });
        }
      }
      return s;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue
      } = i;
      const r = i.getAttribute("data-element-id");
      if (r !== e && Xt.has(i)) {
        s.push({
          id: r,
          exportValue,
          domElement: i
        });
      }
    }
    return s;
  }
  show() {
    if (this.container) {
      this.container.hidden = false;
    }
    this.popup?.maybeShow();
  }
  hide() {
    if (this.container) {
      this.container.hidden = true;
    }
    this.popup?.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t)) {
      for (const e of t) {
        e.classList.add("highlightArea");
      }
    } else {
      t.classList.add("highlightArea");
    }
  }
  _editOnDoubleClick() {
    if (!this._isEditable) {
      return;
    }
    const {
      annotationEditorType,
      data: {
        id: editId
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", {
        source: this,
        mode: annotationEditorType,
        editId,
        mustEnterInEditMode: true
      });
    });
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
}
class kr extends K {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.editor = t.editor;
  }
  render() {
    this.container.className = "editorAnnotation";
    return this.container;
  }
  createOrUpdatePopup() {
    const {
      editor
    } = this;
    if (editor.hasComment) {
      this._createPopup(editor.comment);
      this.extraPopupElement.popup.renderCommentButton();
    }
  }
  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }
  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }
  get commentText() {
    return this.editor.comment.text;
  }
  set commentText(t) {
    this.editor.comment = t;
    if (!t) {
      this.removePopup();
    }
  }
  get commentData() {
    return this.editor.getData();
  }
  remove() {
    this.container.remove();
    this.container = null;
    this.removePopup();
  }
}
class Is extends K {
  constructor(t, e = null) {
    super(t, {
      isRenderable: true,
      ignoreBorder: !!e?.ignoreBorder,
      createQuadrilaterals: true
    });
    this.isTooltipOnly = t.data.isTooltipOnly;
  }
  render() {
    const {
      data,
      linkService
    } = this;
    const s = document.createElement("a");
    s.setAttribute("data-element-id", data.id);
    let i = false;
    if (data.url) {
      linkService.addLinkAttributes(s, data.url, data.newWindow);
      i = true;
    } else if (data.action) {
      this._bindNamedAction(s, data.action, data.overlaidText);
      i = true;
    } else if (data.attachment) {
      this.#e(s, data.attachment, data.overlaidText, data.attachmentDest);
      i = true;
    } else if (data.setOCGState) {
      this.#i(s, data.setOCGState, data.overlaidText);
      i = true;
    } else if (data.dest) {
      this._bindLink(s, data.dest, data.overlaidText);
      i = true;
    } else {
      if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
        this._bindJSAction(s, data);
        i = true;
      }
      if (data.resetForm) {
        this._bindResetFormAction(s, data.resetForm);
        i = true;
      } else if (this.isTooltipOnly && !i) {
        this._bindLink(s, "");
        i = true;
      }
    }
    this.container.classList.add("linkAnnotation");
    if (i) {
      this.container.append(s);
    }
    return this.container;
  }
  #t() {
    this.container.setAttribute("data-internal-link", "");
  }
  _bindLink(t, e, s = "") {
    t.href = this.linkService.getDestinationHash(e);
    t.onclick = () => {
      if (e) {
        this.linkService.goToDestination(e);
      }
      return false;
    };
    if (e || e === "") {
      this.#t();
    }
    if (s) {
      t.title = s;
    }
  }
  _bindNamedAction(t, e, s = "") {
    t.href = this.linkService.getAnchorUrl("");
    t.onclick = () => {
      this.linkService.executeNamedAction(e);
      return false;
    };
    if (s) {
      t.title = s;
    }
    this.#t();
  }
  #e(t, e, s = "", i = null) {
    t.href = this.linkService.getAnchorUrl("");
    if (e.description) {
      t.title = e.description;
    } else if (s) {
      t.title = s;
    }
    t.onclick = () => {
      this.downloadManager?.openOrDownloadData(e.content, e.filename, i);
      return false;
    };
    this.#t();
  }
  #i(t, e, s = "") {
    t.href = this.linkService.getAnchorUrl("");
    t.onclick = () => {
      this.linkService.executeSetOCGState(e);
      return false;
    };
    if (s) {
      t.title = s;
    }
    this.#t();
  }
  _bindJSAction(t, e) {
    t.href = this.linkService.getAnchorUrl("");
    const s = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const i of Object.keys(e.actions)) {
      const n = s.get(i);
      if (n) {
        t[n] = () => {
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e.id,
              name: i
            }
          });
          return false;
        };
      }
    }
    if (e.overlaidText) {
      t.title = e.overlaidText;
    }
    if (!t.onclick) {
      t.onclick = () => false;
    }
    this.#t();
  }
  _bindResetFormAction(t, e) {
    const t_onclick = t.onclick;
    if (!t_onclick) {
      t.href = this.linkService.getAnchorUrl("");
    }
    this.#t();
    if (!this._fieldObjects) {
      I('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.');
      if (!t_onclick) {
        t.onclick = () => false;
      }
      return;
    }
    t.onclick = () => {
      t_onclick?.();
      const {
        fields,
        refs,
        include
      } = e;
      const a = [];
      if (fields.length !== 0 || refs.length !== 0) {
        const h = new Set(refs);
        for (const c of fields) {
          const u = this._fieldObjects[c] || [];
          for (const {
            id
          } of u) {
            h.add(id);
          }
        }
        for (const c of Object.values(this._fieldObjects)) {
          for (const u of c) {
            if (h.has(u.id) === include) {
              a.push(u);
            }
          }
        }
      } else {
        for (const h of Object.values(this._fieldObjects)) {
          a.push(...h);
        }
      }
      const annotationStorage = this.annotationStorage;
      const ids = [];
      for (const h of a) {
        const {
          id
        } = h;
        ids.push(id);
        switch (h.type) {
          case "text":
            {
              const f = h.defaultValue || "";
              annotationStorage.setValue(id, {
                value: f
              });
              break;
            }
          case "checkbox":
          case "radiobutton":
            {
              const f = h.defaultValue === h.exportValues;
              annotationStorage.setValue(id, {
                value: f
              });
              break;
            }
          case "combobox":
          case "listbox":
            {
              const f = h.defaultValue || "";
              annotationStorage.setValue(id, {
                value: f
              });
              break;
            }
          default:
            continue;
        }
        const u = document.querySelector(`[data-element-id="${id}"]`);
        if (u) {
          if (!Xt.has(u)) {
            I(`_bindResetFormAction - element not allowed: ${id}`);
            continue;
          }
        } else {
          continue;
        }
        u.dispatchEvent(new Event("resetform"));
      }
      this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids,
          name: "ResetForm"
        }
      });
      return false;
    };
  }
}
class Mr extends K {
  constructor(t) {
    super(t, {
      isRenderable: true
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    t.src = `${this.imageResourcesPath}annotation-${this.data.name.toLowerCase()}.svg`;
    t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
    t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    }));
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.append(t);
    return this.container;
  }
}
class Yt extends K {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    if (this.data.hasOwnCanvas) {
      if (t.previousSibling?.nodeName === "CANVAS") {
        t.previousSibling.hidden = true;
      }
      t.hidden = false;
    }
  }
  _getKeyModifier(t) {
    if (FeatureTest.platform.isMac) {
      return t.metaKey;
    }
    return t.ctrlKey;
  }
  _setEventListener(t, e, s, i, n) {
    if (s.includes("mouse")) {
      t.addEventListener(s, r => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: i,
            value: n(r),
            shift: r.shiftKey,
            modifier: this._getKeyModifier(r)
          }
        });
      });
    } else {
      t.addEventListener(s, r => {
        if (s === "blur") {
          if (!e.focused || !r.relatedTarget) {
            return;
          }
          e.focused = false;
        } else if (s === "focus") {
          if (e.focused) {
            return;
          }
          e.focused = true;
        }
        n && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: i,
            value: n(r)
          }
        });
      });
    }
  }
  _setEventListeners(t, e, s, i) {
    for (const [n, r] of s) {
      if (r === "Action" || this.data.actions?.[r]) {
        if (r === "Focus" || r === "Blur") {
          e ||= {
            focused: false
          };
        }
        this._setEventListener(t, e, n, r, i);
        if (r === "Focus" && !this.data.actions?.Blur) {
          this._setEventListener(t, e, "blur", "Blur", null);
        } else if (r === "Blur" && !this.data.actions?.Focus) {
          this._setEventListener(t, e, "focus", "Focus", null);
        }
      }
    }
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : Util.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"];
    const {
      fontColor
    } = this.data.defaultAppearanceData;
    const i = this.data.defaultAppearanceData.fontSize || Tr;
    const t_style = t.style;
    let r;
    const a = 2;
    const o = l => Math.round(10 * l) / 10;
    if (this.data.multiLine) {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - a);
      const h = Math.round(l / (is * i)) || 1;
      const c = l / h;
      r = Math.min(i, o(c / is));
    } else {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - a);
      r = Math.min(i, o(l / is));
    }
    t_style.fontSize = `calc(${r}px * var(--total-scale-factor))`;
    t_style.color = Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
    if (this.data.textAlignment !== null) {
      t_style.textAlign = e[this.data.textAlignment];
    }
  }
  _setRequired(t, e) {
    if (e) {
      t.setAttribute("required", true);
    } else {
      t.removeAttribute("required");
    }
    t.setAttribute("aria-required", e);
  }
}
class Rr extends Yt {
  constructor(t) {
    const isRenderable = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const annotationStorage = this.annotationStorage;
    for (const r of this._getElementsByName(t.name, t.id)) {
      if (r.domElement) {
        r.domElement[e] = s;
      }
      annotationStorage.setValue(r.id, {
        [i]: s
      });
    }
  }
  render() {
    const annotationStorage = this.annotationStorage;
    const e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const i = annotationStorage.getValue(e, {
        value: this.data.fieldValue
      });
      let userValue = i.value || "";
      const r = annotationStorage.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      if (r && userValue.length > r) {
        userValue = userValue.slice(0, r);
      }
      let formattedValue = i.formattedValue || this.data.textContent?.join(`
`) || null;
      if (formattedValue && this.data.comb) {
        formattedValue = formattedValue.replaceAll(/\s+/g, "");
      }
      const o = {
        userValue,
        formattedValue,
        lastCommittedValue: null,
        commitKey: 1,
        focused: false
      };
      if (this.data.multiLine) {
        s = document.createElement("textarea");
        s.textContent = formattedValue ?? userValue;
        if (this.data.doNotScroll) {
          s.style.overflowY = "hidden";
        }
      } else {
        s = document.createElement("input");
        s.type = this.data.password ? "password" : "text";
        s.setAttribute("value", formattedValue ?? userValue);
        if (this.data.doNotScroll) {
          s.style.overflowX = "hidden";
        }
      }
      if (this.data.hasOwnCanvas) {
        s.hidden = true;
      }
      Xt.add(s);
      s.setAttribute("data-element-id", e);
      s.disabled = this.data.readOnly;
      s.name = this.data.fieldName;
      s.tabIndex = 0;
      const {
        datetimeFormat,
        datetimeType,
        timeStep
      } = this.data;
      const u = !!datetimeType && this.enableScripting;
      if (datetimeFormat) {
        s.title = datetimeFormat;
      }
      this._setRequired(s, this.data.required);
      if (r) {
        s.maxLength = r;
      }
      s.addEventListener("input", g => {
        annotationStorage.setValue(e, {
          value: g.target.value
        });
        this.setPropertyOnSiblings(s, "value", g.target.value, "value");
        o.formattedValue = null;
      });
      s.addEventListener("resetform", g => {
        const p = this.data.defaultFieldValue ?? "";
        s.value = o.userValue = p;
        o.formattedValue = null;
      });
      let f = g => {
        const {
          formattedValue
        } = o;
        if (formattedValue != null) {
          g.target.value = formattedValue;
        }
        g.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", p => {
          if (o.focused) {
            return;
          }
          const {
            target
          } = p;
          if (u) {
            target.type = datetimeType;
            if (timeStep) {
              target.step = timeStep;
            }
          }
          if (o.userValue) {
            const m = o.userValue;
            if (u) {
              if (datetimeType === "time") {
                const y = new Date(m);
                const A = [y.getHours(), y.getMinutes(), y.getSeconds()];
                target.value = A.map(w => w.toString().padStart(2, "0")).join(":");
              } else {
                target.value = new Date(m - Pr).toISOString().split(datetimeType === "date" ? "T" : ".", 1)[0];
              }
            } else {
              target.value = m;
            }
          }
          o.lastCommittedValue = target.value;
          o.commitKey = 1;
          if (!this.data.actions?.Focus) {
            o.focused = true;
          }
        });
        s.addEventListener("updatefromsandbox", p => {
          this.showElementAndHideCanvas(p.target);
          const b = {
            value(m) {
              o.userValue = m.detail.value ?? "";
              if (!u) {
                annotationStorage.setValue(e, {
                  value: o.userValue.toString()
                });
              }
              m.target.value = o.userValue;
            },
            formattedValue(m) {
              const {
                formattedValue
              } = m.detail;
              o.formattedValue = formattedValue;
              if (formattedValue != null && m.target !== document.activeElement) {
                m.target.value = formattedValue;
              }
              const A = {
                formattedValue
              };
              if (u) {
                A.value = formattedValue;
              }
              annotationStorage.setValue(e, A);
            },
            selRange(m) {
              m.target.setSelectionRange(...m.detail.selRange);
            },
            charLimit: m => {
              const {
                charLimit
              } = m.detail;
              const {
                target
              } = m;
              if (charLimit === 0) {
                target.removeAttribute("maxLength");
                return;
              }
              target.setAttribute("maxLength", charLimit);
              let o_userValue = o.userValue;
              if (!(!o_userValue || o_userValue.length <= charLimit)) {
                o_userValue = o_userValue.slice(0, charLimit);
                target.value = o.userValue = o_userValue;
                annotationStorage.setValue(e, {
                  value: o_userValue
                });
                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: e,
                    name: "Keystroke",
                    value: o_userValue,
                    willCommit: true,
                    commitKey: 1,
                    selStart: target.selectionStart,
                    selEnd: target.selectionEnd
                  }
                });
              }
            }
          };
          this._dispatchEventFromSandbox(b, p);
        });
        s.addEventListener("keydown", p => {
          o.commitKey = 1;
          let commitKey = -1;
          if (p.key === "Escape") {
            commitKey = 0;
          } else if (p.key === "Enter" && !this.data.multiLine) {
            commitKey = 2;
          } else if (p.key === "Tab") {
            o.commitKey = 3;
          }
          if (commitKey === -1) {
            return;
          }
          const {
            value
          } = p.target;
          if (o.lastCommittedValue !== value) {
            o.lastCommittedValue = value;
            o.userValue = value;
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value,
                willCommit: true,
                commitKey,
                selStart: p.target.selectionStart,
                selEnd: p.target.selectionEnd
              }
            });
          }
        });
        const g = f;
        f = null;
        s.addEventListener("blur", p => {
          if (!o.focused || !p.relatedTarget) {
            return;
          }
          if (!this.data.actions?.Blur) {
            o.focused = false;
          }
          const {
            target
          } = p;
          let {
            value
          } = target;
          if (u) {
            if (value && datetimeType === "time") {
              const y = value.split(":").map(A => parseInt(A, 10));
              value = new Date(2000, 0, 1, y[0], y[1], y[2] || 0).valueOf();
              target.step = "";
            } else {
              if (!value.includes("T")) {
                value = `${value}T00:00`;
              }
              value = new Date(value).valueOf();
            }
            target.type = "text";
          }
          o.userValue = value;
          o.lastCommittedValue !== value && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value,
              willCommit: true,
              commitKey: o.commitKey,
              selStart: p.target.selectionStart,
              selEnd: p.target.selectionEnd
            }
          });
          g(p);
        });
        if (this.data.actions?.Keystroke) {
          s.addEventListener("beforeinput", p => {
            o.lastCommittedValue = null;
            const {
              data,
              target
            } = p;
            const {
              value,
              selectionStart,
              selectionEnd
            } = target;
            let selStart = selectionStart;
            let selEnd = selectionEnd;
            switch (p.inputType) {
              case "deleteWordBackward":
                {
                  const S = value.substring(0, selectionStart).match(/\w*[^\w]*$/);
                  if (S) {
                    selStart -= S[0].length;
                  }
                  break;
                }
              case "deleteWordForward":
                {
                  const S = value.substring(selectionStart).match(/^[^\w]*\w*/);
                  if (S) {
                    selEnd += S[0].length;
                  }
                  break;
                }
              case "deleteContentBackward":
                if (selectionStart === selectionEnd) {
                  selStart -= 1;
                }
                break;
              case "deleteContentForward":
                if (selectionStart === selectionEnd) {
                  selEnd += 1;
                }
                break;
            }
            p.preventDefault();
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value,
                change: data || "",
                willCommit: false,
                selStart,
                selEnd
              }
            });
          });
        }
        this._setEventListeners(s, o, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], p => p.target.value);
      }
      if (f) {
        s.addEventListener("blur", f);
      }
      if (this.data.comb) {
        const p = (this.data.rect[2] - this.data.rect[0]) / r;
        s.classList.add("comb");
        s.style.letterSpacing = `calc(${p}px * var(--total-scale-factor) - 1ch)`;
      }
    } else {
      s = document.createElement("div");
      s.textContent = this.data.fieldValue;
      s.style.verticalAlign = "middle";
      s.style.display = "table-cell";
      if (this.data.hasOwnCanvas) {
        s.hidden = true;
      }
    }
    this._setTextStyle(s);
    this._setBackgroundColor(s);
    this._setDefaultPropertiesFromJS(s);
    this.container.append(s);
    return this.container;
  }
}
class Dr extends Yt {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class Lr extends Yt {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const annotationStorage = this.annotationStorage;
    const data = this.data;
    const data_id = data.id;
    let value = annotationStorage.getValue(data_id, {
      value: data.exportValue === data.fieldValue
    }).value;
    if (typeof value === "string") {
      value = value !== "Off";
      annotationStorage.setValue(data_id, {
        value
      });
    }
    this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const n = document.createElement("input");
    Xt.add(n);
    n.setAttribute("data-element-id", data_id);
    n.disabled = data.readOnly;
    this._setRequired(n, this.data.required);
    n.type = "checkbox";
    n.name = data.fieldName;
    if (value) {
      n.setAttribute("checked", true);
    }
    n.setAttribute("exportValue", data.exportValue);
    n.tabIndex = 0;
    n.addEventListener("change", r => {
      const {
        name,
        checked
      } = r.target;
      for (const l of this._getElementsByName(name, data_id)) {
        const h = checked && l.exportValue === data.exportValue;
        if (l.domElement) {
          l.domElement.checked = h;
        }
        annotationStorage.setValue(l.id, {
          value: h
        });
      }
      annotationStorage.setValue(data_id, {
        value: checked
      });
    });
    n.addEventListener("resetform", r => {
      const a = data.defaultFieldValue || "Off";
      r.target.checked = a === data.exportValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      n.addEventListener("updatefromsandbox", r => {
        const a = {
          value(o) {
            o.target.checked = o.detail.value !== "Off";
            annotationStorage.setValue(data_id, {
              value: o.target.checked
            });
          }
        };
        this._dispatchEventFromSandbox(a, r);
      });
      this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], r => r.target.checked);
    }
    this._setBackgroundColor(n);
    this._setDefaultPropertiesFromJS(n);
    this.container.append(n);
    return this.container;
  }
}
class $i extends Yt {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const annotationStorage = this.annotationStorage;
    const data = this.data;
    const data_id = data.id;
    let value = annotationStorage.getValue(data_id, {
      value: data.fieldValue === data.buttonValue
    }).value;
    if (typeof value === "string") {
      value = value !== data.buttonValue;
      annotationStorage.setValue(data_id, {
        value
      });
    }
    if (value) {
      for (const r of this._getElementsByName(data.fieldName, data_id)) {
        annotationStorage.setValue(r.id, {
          value: false
        });
      }
    }
    const n = document.createElement("input");
    Xt.add(n);
    n.setAttribute("data-element-id", data_id);
    n.disabled = data.readOnly;
    this._setRequired(n, this.data.required);
    n.type = "radio";
    n.name = data.fieldName;
    if (value) {
      n.setAttribute("checked", true);
    }
    n.tabIndex = 0;
    n.addEventListener("change", r => {
      const {
        name,
        checked
      } = r.target;
      for (const l of this._getElementsByName(name, data_id)) {
        annotationStorage.setValue(l.id, {
          value: false
        });
      }
      annotationStorage.setValue(data_id, {
        value: checked
      });
    });
    n.addEventListener("resetform", r => {
      const data_defaultFieldValue = data.defaultFieldValue;
      r.target.checked = data_defaultFieldValue != null && data_defaultFieldValue === data.buttonValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      const r = data.buttonValue;
      n.addEventListener("updatefromsandbox", a => {
        const o = {
          value: l => {
            const h = r === l.detail.value;
            for (const c of this._getElementsByName(l.target.name)) {
              const u = h && c.id === data_id;
              if (c.domElement) {
                c.domElement.checked = u;
              }
              annotationStorage.setValue(c.id, {
                value: u
              });
            }
          }
        };
        this._dispatchEventFromSandbox(o, a);
      });
      this._setEventListeners(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], a => a.target.checked);
    }
    this._setBackgroundColor(n);
    this._setDefaultPropertiesFromJS(n);
    this.container.append(n);
    return this.container;
  }
}
class Ir extends Is {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const t_lastChild = t.lastChild;
    if (this.enableScripting && this.hasJSActions && t_lastChild) {
      this._setDefaultPropertiesFromJS(t_lastChild);
      t_lastChild.addEventListener("updatefromsandbox", s => {
        this._dispatchEventFromSandbox({}, s);
      });
    }
    return t;
  }
}
class Fr extends Yt {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const annotationStorage = this.annotationStorage;
    const e = this.data.id;
    const s = annotationStorage.getValue(e, {
      value: this.data.fieldValue
    });
    const i = document.createElement("select");
    Xt.add(i);
    i.setAttribute("data-element-id", e);
    i.disabled = this.data.readOnly;
    this._setRequired(i, this.data.required);
    i.name = this.data.fieldName;
    i.tabIndex = 0;
    let n = this.data.combo && this.data.options.length > 0;
    if (!this.data.combo) {
      i.size = this.data.options.length;
      if (this.data.multiSelect) {
        i.multiple = true;
      }
    }
    i.addEventListener("resetform", h => {
      const defaultFieldValue = this.data.defaultFieldValue;
      for (const u of i.options) {
        u.selected = u.value === defaultFieldValue;
      }
    });
    for (const h of this.data.options) {
      const c = document.createElement("option");
      c.textContent = h.displayValue;
      c.value = h.exportValue;
      if (s.value.includes(h.exportValue)) {
        c.setAttribute("selected", true);
        n = false;
      }
      i.append(c);
    }
    let r = null;
    if (n) {
      const h = document.createElement("option");
      h.value = " ";
      h.setAttribute("hidden", true);
      h.setAttribute("selected", true);
      i.prepend(h);
      r = () => {
        h.remove();
        i.removeEventListener("input", r);
        r = null;
      };
      i.addEventListener("input", r);
    }
    const a = h => {
      const c = h ? "value" : "textContent";
      const {
        options,
        multiple
      } = i;
      if (multiple) {
        return Array.prototype.filter.call(options, g => g.selected).map(g => g[c]);
      }
      if (options.selectedIndex === -1) {
        return null;
      }
      return options[options.selectedIndex][c];
    };
    let o = a(false);
    const l = h => {
      const options = h.target.options;
      return Array.prototype.map.call(options, u => ({
        displayValue: u.textContent,
        exportValue: u.value
      }));
    };
    if (this.enableScripting && this.hasJSActions) {
      i.addEventListener("updatefromsandbox", h => {
        const c = {
          value(u) {
            r?.();
            const value = u.detail.value;
            const g = new Set(Array.isArray(value) ? value : [value]);
            for (const p of i.options) {
              p.selected = g.has(p.value);
            }
            annotationStorage.setValue(e, {
              value: a(true)
            });
            o = a(false);
          },
          multipleSelection(u) {
            i.multiple = true;
          },
          remove(u) {
            const i_options = i.options;
            const remove = u.detail.remove;
            i_options[remove].selected = false;
            i.remove(remove);
            if (i_options.length > 0 && Array.prototype.findIndex.call(i_options, b => b.selected) === -1) {
              i_options[0].selected = true;
            }
            annotationStorage.setValue(e, {
              value: a(true),
              items: l(u)
            });
            o = a(false);
          },
          clear(u) {
            while (i.length !== 0) {
              i.remove(0);
            }
            annotationStorage.setValue(e, {
              value: null,
              items: []
            });
            o = a(false);
          },
          insert(u) {
            const {
              index,
              displayValue,
              exportValue
            } = u.detail.insert;
            const b = i.children[index];
            const m = document.createElement("option");
            m.textContent = displayValue;
            m.value = exportValue;
            if (b) {
              b.before(m);
            } else {
              i.append(m);
            }
            annotationStorage.setValue(e, {
              value: a(true),
              items: l(u)
            });
            o = a(false);
          },
          items(u) {
            const {
              items
            } = u.detail;
            while (i.length !== 0) {
              i.remove(0);
            }
            for (const g of items) {
              const {
                displayValue,
                exportValue
              } = g;
              const m = document.createElement("option");
              m.textContent = displayValue;
              m.value = exportValue;
              i.append(m);
            }
            if (i.options.length > 0) {
              i.options[0].selected = true;
            }
            annotationStorage.setValue(e, {
              value: a(true),
              items: l(u)
            });
            o = a(false);
          },
          indices(u) {
            const f = new Set(u.detail.indices);
            for (const g of u.target.options) {
              g.selected = f.has(g.index);
            }
            annotationStorage.setValue(e, {
              value: a(true)
            });
            o = a(false);
          },
          editable(u) {
            u.target.disabled = !u.detail.editable;
          }
        };
        this._dispatchEventFromSandbox(c, h);
      });
      i.addEventListener("input", h => {
        const c = a(true);
        const change = a(false);
        annotationStorage.setValue(e, {
          value: c
        });
        h.preventDefault();
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: e,
            name: "Keystroke",
            value: o,
            change,
            changeEx: c,
            willCommit: false,
            commitKey: 1,
            keyDown: false
          }
        });
      });
      this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], h => h.target.value);
    } else {
      i.addEventListener("input", h => {
        annotationStorage.setValue(e, {
          value: a(true)
        });
      });
    }
    if (this.data.combo) {
      this._setTextStyle(i);
    }
    this._setBackgroundColor(i);
    this._setDefaultPropertiesFromJS(i);
    this.container.append(i);
    return this.container;
  }
}
class ws extends K {
  constructor(t) {
    const {
      data,
      elements,
      parent
    } = t;
    const n = !!parent._commentManager;
    super(t, {
      isRenderable: !n && K._hasPopupData(data)
    });
    this.elements = elements;
    if (n && K._hasPopupData(data)) {
      const r = this.popup = this.#t();
      for (const a of elements) {
        a.popup = r;
      }
    } else {
      this.popup = null;
    }
  }
  #t() {
    return new Nr({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate || this.data.creationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open,
      commentManager: this.parent._commentManager
    });
  }
  render() {
    const {
      container
    } = this;
    container.classList.add("popupAnnotation");
    container.role = "comment";
    const e = this.popup = this.#t();
    const s = [];
    for (const i of this.elements) {
      i.popup = e;
      i.container.ariaHasPopup = "dialog";
      s.push(i.data.id);
      i.addHighlightArea();
    }
    this.container.setAttribute("aria-controls", s.map(i => `${Es}${i}`).join(","));
    return this.container;
  }
}
class Nr {
  #t = null;
  #e = this.#G.bind(this);
  #i = this.#H.bind(this);
  #s = this.#L.bind(this);
  #a = this.#v.bind(this);
  #n = null;
  #r = null;
  #o = null;
  #h = null;
  #l = null;
  #u = null;
  #d = null;
  #f = false;
  #m = null;
  #p = null;
  #c = null;
  #g = null;
  #b = null;
  #A = null;
  #y = null;
  #C = null;
  #S = null;
  #w = null;
  #T = false;
  #_ = null;
  #E = null;
  constructor({
    container,
    color,
    elements,
    titleObj,
    modificationDate,
    contentsObj,
    richText,
    parent,
    rect,
    parentRect,
    open,
    commentManager = null
  }) {
    this.#r = container;
    this.#S = titleObj;
    this.#o = contentsObj;
    this.#C = richText;
    this.#u = parent;
    this.#n = color;
    this.#y = rect;
    this.#d = parentRect;
    this.#l = elements;
    this.#t = commentManager;
    this.#_ = elements[0];
    this.#h = PDFDateString.toDateObject(modificationDate);
    this.trigger = elements.flatMap(f => f.getElementsToTriggerPopup());
    if (commentManager) {
      this.renderCommentButton();
    } else {
      this.#M();
      this.#r.hidden = true;
      if (open) {
        this.#v();
      }
    }
  }
  #M() {
    if (this.#p) {
      return;
    }
    this.#p = new AbortController();
    const {
      signal
    } = this.#p;
    for (const e of this.trigger) {
      e.addEventListener("click", this.#a, {
        signal
      });
      e.addEventListener("pointerenter", this.#s, {
        signal
      });
      e.addEventListener("pointerleave", this.#i, {
        signal
      });
      e.classList.add("popupTriggerArea");
    }
    for (const e of this.#l) {
      e.container?.addEventListener("keydown", this.#e, {
        signal
      });
    }
  }
  #P() {
    const t = this.#l.find(e => e.hasCommentButton);
    if (t) {
      this.#b = t._normalizePoint(t.commentButtonPosition);
    }
  }
  renderCommentButton() {
    if (this.#g || (this.#b || this.#P(), !this.#b)) {
      return;
    }
    const {
      signal
    } = this.#p = new AbortController();
    const e = !!this.#_.extraPopupElement;
    const s = () => {
      this.#t.toggleCommentPopup(this, true, undefined, !e);
    };
    const i = () => {
      this.#t.toggleCommentPopup(this, false, true, !e);
    };
    const n = () => {
      this.#t.toggleCommentPopup(this, false, false);
    };
    if (e) {
      this.#g = this.#_.container;
      for (const r of this.trigger) {
        r.ariaHasPopup = "dialog";
        r.ariaControls = "commentPopup";
        r.addEventListener("keydown", this.#e, {
          signal
        });
        r.addEventListener("click", s, {
          signal
        });
        r.addEventListener("pointerenter", i, {
          signal
        });
        r.addEventListener("pointerleave", n, {
          signal
        });
        r.classList.add("popupTriggerArea");
      }
    } else {
      const r = this.#g = document.createElement("button");
      r.className = "annotationCommentButton";
      const a = this.#_.container;
      r.style.zIndex = a.style.zIndex + 1;
      r.tabIndex = 0;
      r.ariaHasPopup = "dialog";
      r.ariaControls = "commentPopup";
      r.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
      this.#O();
      this.#k();
      r.addEventListener("keydown", this.#e, {
        signal
      });
      r.addEventListener("click", s, {
        signal
      });
      r.addEventListener("pointerenter", i, {
        signal
      });
      r.addEventListener("pointerleave", n, {
        signal
      });
      a.after(r);
    }
  }
  #k() {
    if (this.#_.extraPopupElement && !this.#_.editor) {
      return;
    }
    this.renderCommentButton();
    const [t, e] = this.#b;
    const {
      style
    } = this.#g;
    style.left = `calc(${t}%)`;
    style.top = `calc(${e}% - var(--comment-button-dim))`;
  }
  #O() {
    if (!this.#_.extraPopupElement) {
      this.renderCommentButton();
      this.#g.style.backgroundColor = this.commentButtonColor || "";
    }
  }
  get commentButtonColor() {
    const {
      color,
      opacity
    } = this.#_.commentData;
    if (color) {
      return this.#u._commentManager.makeCommentColor(color, opacity);
    }
    return null;
  }
  focusCommentButton() {
    setTimeout(() => {
      this.#g?.focus();
    }, 0);
  }
  getData() {
    const {
      richText,
      color,
      opacity,
      creationDate,
      modificationDate
    } = this.#_.commentData;
    return {
      contentsObj: {
        str: this.comment
      },
      richText,
      color,
      opacity,
      creationDate,
      modificationDate
    };
  }
  get elementBeforePopup() {
    return this.#g;
  }
  get comment() {
    this.#E ||= this.#_.commentText;
    return this.#E;
  }
  set comment(t) {
    if (t !== this.comment) {
      this.#_.commentText = this.#E = t;
    }
  }
  get parentBoundingClientRect() {
    return this.#_.layer.getBoundingClientRect();
  }
  setCommentButtonStates({
    selected,
    hasPopup
  }) {
    if (this.#g) {
      this.#g.classList.toggle("selected", selected);
      this.#g.ariaExpanded = hasPopup;
    }
  }
  setSelectedCommentButton(t) {
    this.#g.classList.toggle("selected", t);
  }
  get commentPopupPosition() {
    if (this.#A) {
      return this.#A;
    }
    const {
      x,
      y,
      height
    } = this.#g.getBoundingClientRect();
    const {
      x: x_1,
      y: y_1,
      width,
      height: height_1
    } = this.#_.layer.getBoundingClientRect();
    return [(x - x_1) / width, (y + height - y_1) / height_1];
  }
  set commentPopupPosition(t) {
    this.#A = t;
  }
  hasDefaultPopupPosition() {
    return this.#A === null;
  }
  get commentButtonPosition() {
    return this.#b;
  }
  get commentButtonWidth() {
    return this.#g.getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t) {
    const [e, s] = this.#A || this.commentButtonPosition.map(l => l / 100);
    const parentBoundingClientRect = this.parentBoundingClientRect;
    const {
      x,
      y,
      width,
      height
    } = parentBoundingClientRect;
    this.#t.showDialog(null, this, x + e * width, y + s * height, {
      ...t,
      parentDimensions: parentBoundingClientRect
    });
  }
  render() {
    if (this.#m) {
      return;
    }
    const t = this.#m = document.createElement("div");
    t.className = "popup";
    if (this.#n) {
      const s = t.style.outlineColor = Util.makeHexColor(...this.#n);
      t.style.backgroundColor = `color-mix(in srgb, ${s} 30%, white)`;
    }
    const e = document.createElement("span");
    e.className = "header";
    if (this.#S?.str) {
      const s = document.createElement("span");
      s.className = "title";
      e.append(s);
      ({
        dir: s.dir,
        str: s.textContent
      } = this.#S);
    }
    t.append(e);
    if (this.#h) {
      const s = document.createElement("time");
      s.className = "popupDate";
      s.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string");
      s.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: this.#h.valueOf()
      }));
      s.dateTime = this.#h.toISOString();
      e.append(s);
    }
    renderRichText({
      html: this.#D || this.#o.str,
      dir: this.#o?.dir,
      className: "popupContent"
    }, t);
    this.#r.append(t);
  }
  get #D() {
    const t = this.#C;
    const e = this.#o;
    return t?.str && (!e?.str || e.str === t.str) && this.#C.html || null;
  }
  get #I() {
    return this.#D?.attributes?.style?.fontSize || 0;
  }
  get #B() {
    return this.#D?.attributes?.style?.color || null;
  }
  #F(t) {
    const children = [];
    const s = {
      str: t,
      html: {
        name: "div",
        attributes: {
          dir: "auto"
        },
        children: [{
          name: "p",
          children
        }]
      }
    };
    const attributes = {
      style: {
        color: this.#B,
        fontSize: this.#I ? `calc(${this.#I}px * var(--total-scale-factor))` : ""
      }
    };
    for (const n of t.split(`
`)) {
      children.push({
        name: "span",
        value: n,
        attributes
      });
    }
    return s;
  }
  #G(t) {
    t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && this.#f) && this.#v();
  }
  updateEdited({
    rect,
    popup,
    deleted
  }) {
    if (this.#t) {
      if (deleted) {
        this.remove();
        this.#E = null;
      } else {
        popup && (popup.deleted ? this.remove() : (this.#O(), this.#E = popup.text));
      }
      if (rect) {
        this.#b = null;
        this.#P();
        this.#k();
      }
      return;
    }
    if (deleted || popup?.deleted) {
      this.remove();
      return;
    }
    this.#M();
    this.#w ||= {
      contentsObj: this.#o,
      richText: this.#C
    };
    if (rect) {
      this.#c = null;
    }
    if (popup && popup.text) {
      this.#C = this.#F(popup.text);
      this.#h = PDFDateString.toDateObject(popup.date);
      this.#o = null;
    }
    this.#m?.remove();
    this.#m = null;
  }
  resetEdited() {
    if (this.#w) {
      ({
        contentsObj: this.#o,
        richText: this.#C
      } = this.#w);
      this.#w = null;
      this.#m?.remove();
      this.#m = null;
      this.#c = null;
    }
  }
  remove() {
    this.#p?.abort();
    this.#p = null;
    this.#m?.remove();
    this.#m = null;
    this.#T = false;
    this.#f = false;
    this.#g?.remove();
    this.#g = null;
    if (this.trigger) {
      for (const t of this.trigger) {
        t.classList.remove("popupTriggerArea");
      }
    }
  }
  #x() {
    if (this.#c !== null) {
      return;
    }
    const {
      page: {
        view
      },
      viewport: {
        rawDims: {
          pageWidth,
          pageHeight,
          pageX,
          pageY
        }
      }
    } = this.#u;
    let r = !!this.#d;
    let a = r ? this.#d : this.#y;
    for (const g of this.#l) {
      if (!a || Util.intersect(g.data.rect, a) !== null) {
        a = g.data.rect;
        r = true;
        break;
      }
    }
    const o = Util.normalizeRect([a[0], view[3] - a[1] + view[1], a[2], view[3] - a[3] + view[1]]);
    const h = r ? a[2] - a[0] + 5 : 0;
    const c = o[0] + h;
    const u = o[1];
    this.#c = [100 * (c - pageX) / pageWidth, 100 * (u - pageY) / pageHeight];
    const {
      style
    } = this.#r;
    style.left = `${this.#c[0]}%`;
    style.top = `${this.#c[1]}%`;
  }
  #v() {
    if (this.#t) {
      this.#t.toggleCommentPopup(this, false);
      return;
    }
    this.#f = !this.#f;
    if (this.#f) {
      this.#L();
      this.#r.addEventListener("click", this.#a);
      this.#r.addEventListener("keydown", this.#e);
    } else {
      this.#H();
      this.#r.removeEventListener("click", this.#a);
      this.#r.removeEventListener("keydown", this.#e);
    }
  }
  #L() {
    if (!this.#m) {
      this.render();
    }
    if (this.isVisible) {
      if (this.#f) {
        this.#r.classList.add("focused");
      }
    } else {
      this.#x();
      this.#r.hidden = false;
      this.#r.style.zIndex = parseInt(this.#r.style.zIndex) + 1000;
    }
  }
  #H() {
    this.#r.classList.remove("focused");
    if (!(this.#f || !this.isVisible)) {
      this.#r.hidden = true;
      this.#r.style.zIndex = parseInt(this.#r.style.zIndex) - 1000;
    }
  }
  forceHide() {
    this.#T = this.isVisible;
    if (this.#T) {
      this.#r.hidden = true;
    }
  }
  maybeShow() {
    if (!this.#t) {
      this.#M();
      if (this.#T) {
        if (!this.#m) {
          this.#L();
        }
        this.#T = false;
        this.#r.hidden = false;
      }
    }
  }
  get isVisible() {
    if (this.#t) {
      return false;
    }
    return this.#r.hidden === false;
  }
}
class zi extends K {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.textContent = t.data.textContent;
    this.textPosition = t.data.textPosition;
    this.annotationEditorType = AnnotationEditorType.FREETEXT;
  }
  render() {
    this.container.classList.add("freeTextAnnotation");
    if (this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent");
      t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e;
        t.append(s);
      }
      this.container.append(t);
    }
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this._editOnDoubleClick();
    return this.container;
  }
}
class Or extends K {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data,
      width,
      height
    } = this;
    const i = this.svgFactory.create(width, height, true);
    const n = this.#t = this.svgFactory.createElement("svg:line");
    n.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
    n.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
    n.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
    n.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
    n.setAttribute("stroke-width", data.borderStyle.width || 1);
    n.setAttribute("stroke", "transparent");
    n.setAttribute("fill", "transparent");
    i.append(n);
    this.container.append(i);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class Br extends K {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data,
      width,
      height
    } = this;
    const i = this.svgFactory.create(width, height, true);
    const width_1 = data.borderStyle.width;
    const r = this.#t = this.svgFactory.createElement("svg:rect");
    r.setAttribute("x", width_1 / 2);
    r.setAttribute("y", width_1 / 2);
    r.setAttribute("width", width - width_1);
    r.setAttribute("height", height - width_1);
    r.setAttribute("stroke-width", width_1 || 1);
    r.setAttribute("stroke", "transparent");
    r.setAttribute("fill", "transparent");
    i.append(r);
    this.container.append(i);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class Hr extends K {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data,
      width,
      height
    } = this;
    const i = this.svgFactory.create(width, height, true);
    const width_1 = data.borderStyle.width;
    const r = this.#t = this.svgFactory.createElement("svg:ellipse");
    r.setAttribute("cx", width / 2);
    r.setAttribute("cy", height / 2);
    r.setAttribute("rx", width / 2 - width_1 / 2);
    r.setAttribute("ry", height / 2 - width_1 / 2);
    r.setAttribute("stroke-width", width_1 || 1);
    r.setAttribute("stroke", "transparent");
    r.setAttribute("fill", "transparent");
    i.append(r);
    this.container.append(i);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class ji extends K {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.containerClassName = "polylineAnnotation";
    this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect,
        vertices,
        borderStyle,
        popupRef
      },
      width,
      height
    } = this;
    if (!vertices) {
      return this.container;
    }
    const a = this.svgFactory.create(width, height, true);
    let o = [];
    for (let h = 0, c = vertices.length; h < c; h += 2) {
      const u = vertices[h] - rect[0];
      const f = rect[3] - vertices[h + 1];
      o.push(`${u},${f}`);
    }
    o = o.join(" ");
    const l = this.#t = this.svgFactory.createElement(this.svgElementName);
    l.setAttribute("points", o);
    l.setAttribute("stroke-width", borderStyle.width || 1);
    l.setAttribute("stroke", "transparent");
    l.setAttribute("fill", "transparent");
    a.append(l);
    this.container.append(a);
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class Ur extends ji {
  constructor(t) {
    super(t);
    this.containerClassName = "polygonAnnotation";
    this.svgElementName = "svg:polygon";
  }
}
class $r extends K {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("caretAnnotation");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
}
class Fs extends K {
  #t = null;
  #e = [];
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.containerClassName = "inkAnnotation";
    this.svgElementName = "svg:polyline";
    this.annotationEditorType = this.data.it === "InkHighlight" ? AnnotationEditorType.HIGHLIGHT : AnnotationEditorType.INK;
  }
  #i(t, e) {
    switch (t) {
      case 90:
        return {
          transform: `rotate(90) translate(${-e[0]},${e[1]}) scale(1,-1)`,
          width: e[3] - e[1],
          height: e[2] - e[0]
        };
      case 180:
        return {
          transform: `rotate(180) translate(${-e[2]},${e[1]}) scale(1,-1)`,
          width: e[2] - e[0],
          height: e[3] - e[1]
        };
      case 270:
        return {
          transform: `rotate(270) translate(${-e[2]},${e[3]}) scale(1,-1)`,
          width: e[3] - e[1],
          height: e[2] - e[0]
        };
      default:
        return {
          transform: `translate(${-e[0]},${e[3]}) scale(1,-1)`,
          width: e[2] - e[0],
          height: e[3] - e[1]
        };
    }
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect,
        rotation,
        inkLists,
        borderStyle,
        popupRef
      }
    } = this;
    const {
      transform,
      width,
      height
    } = this.#i(rotation, rect);
    const l = this.svgFactory.create(width, height, true);
    const h = this.#t = this.svgFactory.createElement("svg:g");
    l.append(h);
    h.setAttribute("stroke-width", borderStyle.width || 1);
    h.setAttribute("stroke-linecap", "round");
    h.setAttribute("stroke-linejoin", "round");
    h.setAttribute("stroke-miterlimit", 10);
    h.setAttribute("stroke", "transparent");
    h.setAttribute("fill", "transparent");
    h.setAttribute("transform", transform);
    for (let c = 0, u = inkLists.length; c < u; c++) {
      const f = this.svgFactory.createElement(this.svgElementName);
      this.#e.push(f);
      f.setAttribute("points", inkLists[c].join(","));
      h.append(f);
    }
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.append(l);
    this._editOnDoubleClick();
    return this.container;
  }
  updateEdited(t) {
    super.updateEdited(t);
    const {
      thickness,
      points,
      rect
    } = t;
    const n = this.#t;
    if (thickness >= 0) {
      n.setAttribute("stroke-width", thickness || 1);
    }
    if (points) {
      for (let r = 0, a = this.#e.length; r < a; r++) {
        this.#e[r].setAttribute("points", points[r].join(","));
      }
    }
    if (rect) {
      const {
        transform,
        width,
        height
      } = this.#i(this.data.rotation, rect);
      n.parentElement.setAttribute("viewBox", `0 0 ${width} ${height}`);
      n.setAttribute("transform", transform);
    }
  }
  getElementsToTriggerPopup() {
    return this.#e;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class Gi extends K {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
    this.annotationEditorType = AnnotationEditorType.HIGHLIGHT;
  }
  render() {
    const {
      data: {
        overlaidText,
        popupRef
      }
    } = this;
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("highlightAnnotation");
    this._editOnDoubleClick();
    if (overlaidText) {
      const s = document.createElement("mark");
      s.classList.add("overlaidText");
      s.textContent = overlaidText;
      this.container.append(s);
    }
    return this.container;
  }
}
class zr extends K {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    const {
      data: {
        overlaidText,
        popupRef
      }
    } = this;
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("underlineAnnotation");
    if (overlaidText) {
      const s = document.createElement("u");
      s.classList.add("overlaidText");
      s.textContent = overlaidText;
      this.container.append(s);
    }
    return this.container;
  }
}
class jr extends K {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    const {
      data: {
        overlaidText,
        popupRef
      }
    } = this;
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("squigglyAnnotation");
    if (overlaidText) {
      const s = document.createElement("u");
      s.classList.add("overlaidText");
      s.textContent = overlaidText;
      this.container.append(s);
    }
    return this.container;
  }
}
class Gr extends K {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    const {
      data: {
        overlaidText,
        popupRef
      }
    } = this;
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("strikeoutAnnotation");
    if (overlaidText) {
      const s = document.createElement("s");
      s.classList.add("overlaidText");
      s.textContent = overlaidText;
      this.container.append(s);
    }
    return this.container;
  }
}
class Vi extends K {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.annotationEditorType = AnnotationEditorType.STAMP;
  }
  render() {
    this.container.classList.add("stampAnnotation");
    this.container.setAttribute("role", "img");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this._editOnDoubleClick();
    return this.container;
  }
}
class Vr extends K {
  #t = null;
  constructor(t) {
    super(t, {
      isRenderable: true
    });
    const {
      file
    } = this.data;
    this.filename = file.filename;
    this.content = file.content;
    this.linkService.eventBus?.dispatch("fileattachmentannotation", {
      source: this,
      ...file
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container,
      data
    } = this;
    let s;
    if (data.hasAppearance || data.fillAlpha === 0) {
      s = document.createElement("div");
    } else {
      s = document.createElement("img");
      s.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(data.name) ? "paperclip" : "pushpin"}.svg`;
      if (data.fillAlpha && data.fillAlpha < 1) {
        s.style = `filter: opacity(${Math.round(data.fillAlpha * 100)}%);`;
      }
    }
    s.addEventListener("dblclick", this.#e.bind(this));
    this.#t = s;
    const {
      isMac
    } = FeatureTest.platform;
    container.addEventListener("keydown", n => {
      if (n.key === "Enter" && (isMac ? n.metaKey : n.ctrlKey)) {
        this.#e();
      }
    });
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    } else {
      s.classList.add("popupTriggerArea");
    }
    container.append(s);
    return container;
  }
  getElementsToTriggerPopup() {
    return this.#t;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
  #e() {
    this.downloadManager?.openOrDownloadData(this.content, this.filename);
  }
}
export class AnnotationLayer {
  #t = null;
  #e = null;
  #i = null;
  #s = new Map();
  #a = null;
  #n = null;
  constructor({
    div,
    accessibilityManager,
    annotationCanvasMap,
    annotationEditorUIManager,
    page,
    viewport,
    structTreeLayer,
    commentManager,
    linkService,
    annotationStorage
  }) {
    this.div = div;
    this.#t = accessibilityManager;
    this.#e = annotationCanvasMap;
    this.#a = structTreeLayer || null;
    this.#n = linkService || null;
    this.#i = annotationStorage || new ks();
    this.page = page;
    this.viewport = viewport;
    this.zIndex = 0;
    this._annotationEditorUIManager = annotationEditorUIManager;
    this._commentManager = commentManager || null;
  }
  hasEditableAnnotations() {
    return this.#s.size > 0;
  }
  async #r(t, e, s) {
    const i = t.firstChild || t;
    const n = i.id = `${Es}${e}`;
    const r = await this.#a?.getAriaAttributes(n);
    if (r) {
      for (const [a, o] of r) {
        i.setAttribute(a, o);
      }
    }
    if (s) {
      s.at(-1).container.after(t);
    } else {
      this.div.append(t);
      this.#t?.moveElementInDOM(this.div, t, i, false);
    }
  }
  async render(t) {
    const {
      annotations
    } = t;
    const div = this.div;
    setLayerDimensions(div, this.viewport);
    const i = new Map();
    const n = {
      data: null,
      layer: div,
      linkService: this.#n,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== false,
      svgFactory: new DOMSVGFactory(),
      annotationStorage: this.#i,
      enableComment: t.enableComment === true,
      enableScripting: t.enableScripting === true,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const r of annotations) {
      if (r.noHTML) {
        continue;
      }
      const a = r.annotationType === AnnotationType.POPUP;
      if (a) {
        const h = i.get(r.id);
        if (!h) {
          continue;
        }
        n.elements = h;
      } else if (r.rect[2] === r.rect[0] || r.rect[3] === r.rect[1]) {
        continue;
      }
      n.data = r;
      const o = gi.create(n);
      if (!o.isRenderable) {
        continue;
      }
      if (!a && r.popupRef) {
        const h = i.get(r.popupRef);
        if (h) {
          h.push(o);
        } else {
          i.set(r.popupRef, [o]);
        }
      }
      const l = o.render();
      if (r.hidden) {
        l.style.visibility = "hidden";
      }
      await this.#r(l, r.id, n.elements);
      o.extraPopupElement?.popup?.renderCommentButton();
      if (o._isEditable) {
        this.#s.set(o.data.id, o);
        this._annotationEditorUIManager?.renderAnnotationElement(o);
      }
    }
    this.#o();
  }
  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: this.#n,
      svgFactory: new DOMSVGFactory(),
      parent: this
    };
    for (const s of t) {
      s.borderStyle ||= AnnotationLayer._defaultBorderStyle;
      e.data = s;
      const i = gi.create(e);
      if (!i.isRenderable) {
        continue;
      }
      const n = i.render();
      await this.#r(n, s.id, null);
    }
  }
  update({
    viewport
  }) {
    const div = this.div;
    this.viewport = viewport;
    setLayerDimensions(div, {
      rotation: viewport.rotation
    });
    this.#o();
    div.hidden = false;
  }
  #o() {
    if (!this.#e) {
      return;
    }
    const div = this.div;
    for (const [e, s] of this.#e) {
      const i = div.querySelector(`[data-annotation-id="${e}"]`);
      if (!i) {
        continue;
      }
      s.className = "annotationContent";
      const {
        firstChild
      } = i;
      if (firstChild) {
        if (firstChild.nodeName === "CANVAS") {
          firstChild.replaceWith(s);
        } else if (firstChild.classList.contains("annotationContent")) {
          firstChild.after(s);
        } else {
          firstChild.before(s);
        }
      } else {
        i.append(s);
      }
      const r = this.#s.get(e);
      r && (r._hasNoCanvas ? (this._annotationEditorUIManager?.setMissingCanvas(e, i.id, s), r._hasNoCanvas = false) : r.canvas = s);
    }
    this.#e.clear();
  }
  getEditableAnnotations() {
    return Array.from(this.#s.values());
  }
  getEditableAnnotation(t) {
    return this.#s.get(t);
  }
  addFakeAnnotation(editor) {
    const {
      div
    } = this;
    const {
      id,
      rotation
    } = editor;
    const n = new kr({
      data: {
        id,
        rect: editor.getPDFRect(),
        rotation
      },
      editor,
      layer: div,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: this.#n,
      annotationStorage: this.#i
    });
    const r = n.render();
    div.append(r);
    this.#t?.moveElementInDOM(div, r, r, false);
    n.createOrUpdatePopup();
    return n;
  }
  static get _defaultBorderStyle() {
    return shadow(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: Qt.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
}
const Be = /\r\n?|\n/g;
class it extends M {
  #t = "";
  #e = `${this.id}-editor`;
  #i = null;
  #s;
  _colorPicker = null;
  static _freeTextDefaultContent = "";
  static _internalPadding = 0;
  static _defaultColor = null;
  static _defaultFontSize = 10;
  static get _keyboardManager() {
    const it_prototype = it.prototype;
    const e = n => n.isEmpty();
    const {
      TRANSLATE_SMALL,
      TRANSLATE_BIG
    } = AnnotationEditorUIManager;
    return shadow(this, "_keyboardManager", new Te([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], it_prototype.commitOrRemove, {
      bubbles: true
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], it_prototype.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], it_prototype._translateEmpty, {
      args: [-TRANSLATE_SMALL, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], it_prototype._translateEmpty, {
      args: [-TRANSLATE_BIG, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], it_prototype._translateEmpty, {
      args: [TRANSLATE_SMALL, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], it_prototype._translateEmpty, {
      args: [TRANSLATE_BIG, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], it_prototype._translateEmpty, {
      args: [0, -TRANSLATE_SMALL],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], it_prototype._translateEmpty, {
      args: [0, -TRANSLATE_BIG],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], it_prototype._translateEmpty, {
      args: [0, TRANSLATE_SMALL],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], it_prototype._translateEmpty, {
      args: [0, TRANSLATE_BIG],
      checker: e
    }]]));
  }
  static _type = "freetext";
  static _editorType = AnnotationEditorType.FREETEXT;
  constructor(t) {
    super({
      ...t,
      name: "freeTextEditor"
    });
    this.color = t.color || it._defaultColor || M._defaultLineColor;
    this.#s = t.fontSize || it._defaultFontSize;
    if (!this.annotationElementId) {
      this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
    }
  }
  static initialize(t, e) {
    M.initialize(t, e);
    const s = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(s.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(t, e) {
    switch (t) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        it._defaultFontSize = e;
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        it._defaultColor = e;
        break;
    }
  }
  updateParams(t, e) {
    switch (t) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        this.#a(e);
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        this.#n(e);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, it._defaultFontSize], [AnnotationEditorParamsType.FREETEXT_COLOR, it._defaultColor || M._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, this.#s], [AnnotationEditorParamsType.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    this._colorPicker ||= new _e(this);
    return [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return AnnotationEditorParamsType.FREETEXT_COLOR;
  }
  #a(t) {
    const e = i => {
      this.editorDiv.style.fontSize = `calc(${i}px * var(--total-scale-factor))`;
      this.translate(0, -(i - this.#s) * this.parentScale);
      this.#s = i;
      this.#o();
    };
    const s = this.#s;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, s),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.FREETEXT_SIZE,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  onUpdatedColor() {
    this.editorDiv.style.color = this.color;
    this._colorPicker?.update(this.color);
    super.onUpdatedColor();
  }
  #n(t) {
    const e = i => {
      this.color = i;
      this.onUpdatedColor();
    };
    const color = this.color;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, color),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.FREETEXT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  _translateEmpty(t, e) {
    this._uiManager.translateSelectedEditors(t, e, true);
  }
  getInitialTranslation() {
    const parentScale = this.parentScale;
    return [-it._internalPadding * parentScale, -(it._internalPadding + this.#s) * parentScale];
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      this.div !== null && (this.isAttachedToDOM || this.parent.add(this));
    }
  }
  enableEditMode() {
    if (!super.enableEditMode()) {
      return false;
    }
    this.overlayDiv.classList.remove("enabled");
    this.editorDiv.contentEditable = true;
    this._isDraggable = false;
    this.div.removeAttribute("aria-activedescendant");
    this.#i = new AbortController();
    const t = this._uiManager.combinedSignal(this.#i);
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: t
    });
    this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: t
    });
    this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: t
    });
    this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: t
    });
    this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: t
    });
    return true;
  }
  disableEditMode() {
    if (super.disableEditMode()) {
      this.overlayDiv.classList.add("enabled");
      this.editorDiv.contentEditable = false;
      this.div.setAttribute("aria-activedescendant", this.#e);
      this._isDraggable = true;
      this.#i?.abort();
      this.#i = null;
      this.div.focus({
        preventScroll: true
      });
      this.isEditing = false;
      this.parent.div.classList.add("freetextEditing");
      return true;
    }
    return false;
  }
  focusin(t) {
    if (this._focusEventsAllowed) {
      super.focusin(t);
      if (t.target !== this.editorDiv) {
        this.editorDiv.focus();
      }
    }
  }
  onceAdded(t) {
    if (!this.width) {
      this.enableEditMode();
      if (t) {
        this.editorDiv.focus();
      }
      if (this._initialOptions?.isCentered) {
        this.center();
      }
      this._initialOptions = null;
    }
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = false;
    if (this.parent) {
      this.parent.setEditingState(true);
      this.parent.div.classList.add("freetextEditing");
    }
    super.remove();
  }
  #r() {
    const t = [];
    this.editorDiv.normalize();
    let e = null;
    for (const s of this.editorDiv.childNodes) {
      if (!(e?.nodeType === Node.TEXT_NODE && s.nodeName === "BR")) {
        t.push(it.#h(s));
        e = s;
      }
    }
    return t.join(`
`);
  }
  #o() {
    const [t, e] = this.parentDimensions;
    let s;
    if (this.isAttachedToDOM) {
      s = this.div.getBoundingClientRect();
    } else {
      const {
        currentLayer,
        div
      } = this;
      const r = div.style.display;
      const a = div.classList.contains("hidden");
      div.classList.remove("hidden");
      div.style.display = "hidden";
      currentLayer.div.append(this.div);
      s = div.getBoundingClientRect();
      div.remove();
      div.style.display = r;
      div.classList.toggle("hidden", a);
    }
    if (this.rotation % 180 === this.parentRotation % 180) {
      this.width = s.width / t;
      this.height = s.height / e;
    } else {
      this.width = s.height / t;
      this.height = s.width / e;
    }
    this.fixAndSetPosition();
  }
  commit() {
    if (!this.isInEditMode()) {
      return;
    }
    super.commit();
    this.disableEditMode();
    const t = this.#t;
    const e = this.#t = this.#r().trimEnd();
    if (t === e) {
      return;
    }
    const s = i => {
      this.#t = i;
      if (!i) {
        this.remove();
        return;
      }
      this.#l();
      this._uiManager.rebuild(this);
      this.#o();
    };
    this.addCommands({
      cmd: () => {
        s(e);
      },
      undo: () => {
        s(t);
      },
      mustExec: false
    });
    this.#o();
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode();
    this.editorDiv.focus();
  }
  keydown(t) {
    if (t.target === this.div && t.key === "Enter") {
      this.enterInEditMode();
      t.preventDefault();
    }
  }
  editorDivKeydown(t) {
    it._keyboardManager.exec(this, t);
  }
  editorDivFocus(t) {
    this.isEditing = true;
  }
  editorDivBlur(t) {
    this.isEditing = false;
  }
  editorDivInput(t) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment");
    this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox");
    this.editorDiv.setAttribute("aria-multiline", true);
  }
  get canChangeContent() {
    return true;
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let t;
    let e;
    if (this._isCopy || this.annotationElementId) {
      t = this.x;
      e = this.y;
    }
    super.render();
    this.editorDiv = document.createElement("div");
    this.editorDiv.className = "internal";
    this.editorDiv.setAttribute("id", this.#e);
    this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2");
    this.editorDiv.setAttribute("data-l10n-attrs", "default-content");
    this.enableEditing();
    this.editorDiv.contentEditable = true;
    const {
      style
    } = this.editorDiv;
    style.fontSize = `calc(${this.#s}px * var(--total-scale-factor))`;
    style.color = this.color;
    this.div.append(this.editorDiv);
    this.overlayDiv = document.createElement("div");
    this.overlayDiv.classList.add("overlay", "enabled");
    this.div.append(this.overlayDiv);
    if (this._isCopy || this.annotationElementId) {
      const [i, n] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position
        } = this._initialData;
        let [a, o] = this.getInitialTranslation();
        [a, o] = this.pageTranslationToScreen(a, o);
        const [l, h] = this.pageDimensions;
        const [c, u] = this.pageTranslation;
        let f;
        let g;
        switch (this.rotation) {
          case 0:
            f = t + (position[0] - c) / l;
            g = e + this.height - (position[1] - u) / h;
            break;
          case 90:
            f = t + (position[0] - c) / l;
            g = e - (position[1] - u) / h;
            [a, o] = [o, -a];
            break;
          case 180:
            f = t - this.width + (position[0] - c) / l;
            g = e - (position[1] - u) / h;
            [a, o] = [-a, -o];
            break;
          case 270:
            f = t + (position[0] - c - this.height * h) / l;
            g = e + (position[1] - u - this.width * l) / h;
            [a, o] = [-o, a];
            break;
        }
        this.setAt(f * i, g * n, a, o);
      } else {
        this._moveAfterPaste(t, e);
      }
      this.#l();
      this._isDraggable = true;
      this.editorDiv.contentEditable = false;
    } else {
      this._isDraggable = false;
      this.editorDiv.contentEditable = true;
    }
    return this.div;
  }
  static #h(t) {
    return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(Be, "");
  }
  editorDivPaste(t) {
    const e = t.clipboardData || window.clipboardData;
    const {
      types
    } = e;
    if (types.length === 1 && types[0] === "text/plain") {
      return;
    }
    t.preventDefault();
    const i = it.#d(e.getData("text") || "").replaceAll(Be, `
`);
    if (!i) {
      return;
    }
    const n = window.getSelection();
    if (!n.rangeCount) {
      return;
    }
    this.editorDiv.normalize();
    n.deleteFromDocument();
    const r = n.getRangeAt(0);
    if (!i.includes(`
`)) {
      r.insertNode(document.createTextNode(i));
      this.editorDiv.normalize();
      n.collapseToStart();
      return;
    }
    const {
      startContainer,
      startOffset
    } = r;
    const l = [];
    const h = [];
    if (startContainer.nodeType === Node.TEXT_NODE) {
      const f = startContainer.parentElement;
      h.push(startContainer.nodeValue.slice(startOffset).replaceAll(Be, ""));
      if (f !== this.editorDiv) {
        let g = l;
        for (const p of this.editorDiv.childNodes) {
          if (p === f) {
            g = h;
            continue;
          }
          g.push(it.#h(p));
        }
      }
      l.push(startContainer.nodeValue.slice(0, startOffset).replaceAll(Be, ""));
    } else if (startContainer === this.editorDiv) {
      let f = l;
      let g = 0;
      for (const p of this.editorDiv.childNodes) {
        if (g++ === startOffset) {
          f = h;
        }
        f.push(it.#h(p));
      }
    }
    this.#t = `${l.join(`
`)}${i}${h.join(`
`)}`;
    this.#l();
    const c = new Range();
    let u = Math.sumPrecise(l.map(f => f.length));
    for (const {
      firstChild
    } of this.editorDiv.childNodes) {
      if (firstChild.nodeType === Node.TEXT_NODE) {
        const g = firstChild.nodeValue.length;
        if (u <= g) {
          c.setStart(firstChild, u);
          c.setEnd(firstChild, u);
          break;
        }
        u -= g;
      }
    }
    n.removeAllRanges();
    n.addRange(c);
  }
  #l() {
    this.editorDiv.replaceChildren();
    if (this.#t) {
      for (const t of this.#t.split(`
`)) {
        const e = document.createElement("div");
        e.append(t ? document.createTextNode(t) : document.createElement("br"));
        this.editorDiv.append(e);
      }
    }
  }
  #u() {
    return this.#t.replaceAll(" ", " ");
  }
  static #d(t) {
    return t.replaceAll(" ", " ");
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const t = it._internalPadding * this.parentScale;
    return this.getRect(t, t);
  }
  static async deserialize(t, e, s) {
    let i = null;
    if (t instanceof zi) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize,
            fontColor
          },
          rect,
          rotation,
          id,
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        textContent,
        textPosition,
        parent: {
          page: {
            pageNumber
          }
        }
      } = t;
      if (!textContent || textContent.length === 0) {
        return null;
      }
      i = t = {
        annotationType: AnnotationEditorType.FREETEXT,
        color: Array.from(fontColor),
        fontSize,
        value: textContent.join(`
`),
        position: textPosition,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        popupRef,
        comment: contentsObj?.str || null,
        richText,
        creationDate,
        modificationDate
      };
    }
    const n = await super.deserialize(t, e, s);
    n.#s = t.fontSize;
    n.color = Util.makeHexColor(...t.color);
    n.#t = it.#d(t.value);
    n._initialData = i;
    if (t.comment) {
      n.setCommentData(t);
    }
    return n;
  }
  serialize(t = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const e = M._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color);
    const s = Object.assign(super.serialize(t), {
      color: e,
      fontSize: this.#s,
      value: this.#u()
    });
    this.addComment(s);
    if (t) {
      s.isCopy = true;
      return s;
    }
    if (this.annotationElementId && !this.#f(s)) {
      return null;
    }
    s.id = this.annotationElementId;
    return s;
  }
  #f(t) {
    const {
      value,
      fontSize,
      color,
      pageIndex
    } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || t.value !== value || t.fontSize !== fontSize || t.color.some((r, a) => r !== color[a]) || t.pageIndex !== pageIndex;
  }
  renderAnnotationElement(t) {
    const e = super.renderAnnotationElement(t);
    if (!e) {
      return null;
    }
    const {
      style
    } = e;
    style.fontSize = `calc(${this.#s}px * var(--total-scale-factor))`;
    style.color = this.color;
    e.replaceChildren();
    for (const i of this.#t.split(`
`)) {
      const n = document.createElement("div");
      n.append(i ? document.createTextNode(i) : document.createElement("br"));
      e.append(n);
    }
    t.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: this.#t
      }
    });
    return e;
  }
  resetAnnotationElement(t) {
    super.resetAnnotationElement(t);
    t.resetEdited();
  }
}
class x {
  static PRECISION = 0.0001;
  toSVGPath() {
    G("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    G("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    G("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, s, i, n, r) {
    r ||= new Float32Array(t.length);
    for (let a = 0, o = t.length; a < o; a += 2) {
      r[a] = e + t[a] * i;
      r[a + 1] = s + t[a + 1] * n;
    }
    return r;
  }
  static _rescaleAndSwap(t, e, s, i, n, r) {
    r ||= new Float32Array(t.length);
    for (let a = 0, o = t.length; a < o; a += 2) {
      r[a] = e + t[a + 1] * i;
      r[a + 1] = s + t[a] * n;
    }
    return r;
  }
  static _translate(t, e, s, i) {
    i ||= new Float32Array(t.length);
    for (let n = 0, r = t.length; n < r; n += 2) {
      i[n] = e + t[n];
      i[n + 1] = s + t[n + 1];
    }
    return i;
  }
  static svgRound(t) {
    return Math.round(t * 10000);
  }
  static _normalizePoint(t, e, s, i, n) {
    switch (n) {
      case 90:
        return [1 - e / s, t / i];
      case 180:
        return [1 - t / s, 1 - e / i];
      case 270:
        return [e / s, 1 - t / i];
      default:
        return [t / s, e / i];
    }
  }
  static _normalizePagePoint(t, e, s) {
    switch (s) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t, e, s, i, n, r) {
    return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + n) / 6, (5 * i + r) / 6, (s + n) / 2, (i + r) / 2];
  }
}
class zt {
  #t;
  #e = [];
  #i;
  #s;
  #a = [];
  #n = new Float32Array(18);
  #r;
  #o;
  #h;
  #l;
  #u;
  #d;
  #f = [];
  static #m = 8;
  static #p = 2;
  static #c = zt.#m + zt.#p;
  constructor({
    x,
    y
  }, s, i, n, r, a = 0) {
    this.#t = s;
    this.#d = n * i;
    this.#s = r;
    this.#n.set([NaN, NaN, NaN, NaN, x, y], 6);
    this.#i = a;
    this.#l = zt.#m * i;
    this.#h = zt.#c * i;
    this.#u = i;
    this.#f.push(x, y);
  }
  isEmpty() {
    return isNaN(this.#n[8]);
  }
  #g() {
    const t = this.#n.subarray(4, 6);
    const e = this.#n.subarray(16, 18);
    const [s, i, n, r] = this.#t;
    return [(this.#r + (t[0] - e[0]) / 2 - s) / n, (this.#o + (t[1] - e[1]) / 2 - i) / r, (this.#r + (e[0] - t[0]) / 2 - s) / n, (this.#o + (e[1] - t[1]) / 2 - i) / r];
  }
  add({
    x,
    y: y_1
  }) {
    this.#r = x;
    this.#o = y_1;
    const [s, i, n, r] = this.#t;
    let [a, o, l, h] = this.#n.subarray(8, 12);
    const c = x - l;
    const u = y_1 - h;
    const f = Math.hypot(c, u);
    if (f < this.#h) {
      return false;
    }
    const g = f - this.#l;
    const p = g / f;
    const b = p * c;
    const m = p * u;
    let y = a;
    let A = o;
    a = l;
    o = h;
    l += b;
    h += m;
    this.#f?.push(x, y_1);
    const w = -m / g;
    const v = b / g;
    const _ = w * this.#d;
    const S = v * this.#d;
    this.#n.set(this.#n.subarray(2, 8), 0);
    this.#n.set([l + _, h + S], 4);
    this.#n.set(this.#n.subarray(14, 18), 12);
    this.#n.set([l - _, h - S], 16);
    if (isNaN(this.#n[6])) {
      if (this.#a.length === 0) {
        this.#n.set([a + _, o + S], 2);
        this.#a.push(NaN, NaN, NaN, NaN, (a + _ - s) / n, (o + S - i) / r);
        this.#n.set([a - _, o - S], 14);
        this.#e.push(NaN, NaN, NaN, NaN, (a - _ - s) / n, (o - S - i) / r);
      }
      this.#n.set([y, A, a, o, l, h], 6);
      return !this.isEmpty();
    }
    this.#n.set([y, A, a, o, l, h], 6);
    if (Math.abs(Math.atan2(A - o, y - a) - Math.atan2(m, b)) < Math.PI / 2) {
      return [a, o, l, h] = this.#n.subarray(2, 6), this.#a.push(NaN, NaN, NaN, NaN, ((a + l) / 2 - s) / n, ((o + h) / 2 - i) / r), [a, o, y, A] = this.#n.subarray(14, 18), this.#e.push(NaN, NaN, NaN, NaN, ((y + a) / 2 - s) / n, ((A + o) / 2 - i) / r), true;
    }
    return [y, A, a, o, l, h] = this.#n.subarray(0, 6), this.#a.push(((y + 5 * a) / 6 - s) / n, ((A + 5 * o) / 6 - i) / r, ((5 * a + l) / 6 - s) / n, ((5 * o + h) / 6 - i) / r, ((a + l) / 2 - s) / n, ((o + h) / 2 - i) / r), [l, h, a, o, y, A] = this.#n.subarray(12, 18), this.#e.push(((y + 5 * a) / 6 - s) / n, ((A + 5 * o) / 6 - i) / r, ((5 * a + l) / 6 - s) / n, ((5 * o + h) / 6 - i) / r, ((a + l) / 2 - s) / n, ((o + h) / 2 - i) / r), true;
  }
  toSVGPath() {
    if (this.isEmpty()) {
      return "";
    }
    const t = this.#a;
    const e = this.#e;
    if (isNaN(this.#n[6]) && !this.isEmpty()) {
      return this.#b();
    }
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6) {
      if (isNaN(t[i])) {
        s.push(`L${t[i + 4]} ${t[i + 5]}`);
      } else {
        s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
      }
    }
    this.#y(s);
    for (let i = e.length - 6; i >= 6; i -= 6) {
      if (isNaN(e[i])) {
        s.push(`L${e[i + 4]} ${e[i + 5]}`);
      } else {
        s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
      }
    }
    this.#A(s);
    return s.join(" ");
  }
  #b() {
    const [t, e, s, i] = this.#t;
    const [n, r, a, o] = this.#g();
    return `M${(this.#n[2] - t) / s} ${(this.#n[3] - e) / i} L${(this.#n[4] - t) / s} ${(this.#n[5] - e) / i} L${n} ${r} L${a} ${o} L${(this.#n[16] - t) / s} ${(this.#n[17] - e) / i} L${(this.#n[14] - t) / s} ${(this.#n[15] - e) / i} Z`;
  }
  #A(t) {
    const e = this.#e;
    t.push(`L${e[4]} ${e[5]} Z`);
  }
  #y(t) {
    const [e, s, i, n] = this.#t;
    const r = this.#n.subarray(4, 6);
    const a = this.#n.subarray(16, 18);
    const [o, l, h, c] = this.#g();
    t.push(`L${(r[0] - e) / i} ${(r[1] - s) / n} L${o} ${l} L${h} ${c} L${(a[0] - e) / i} ${(a[1] - s) / n}`);
  }
  newFreeDrawOutline(t, e, s, i, n, r) {
    return new Wi(t, e, s, i, n, r);
  }
  getOutlines() {
    const t = this.#a;
    const e = this.#e;
    const s = this.#n;
    const [i, n, r, a] = this.#t;
    const o = new Float32Array((this.#f?.length ?? 0) + 2);
    for (let c = 0, u = o.length - 2; c < u; c += 2) {
      o[c] = (this.#f[c] - i) / r;
      o[c + 1] = (this.#f[c + 1] - n) / a;
    }
    o[o.length - 2] = (this.#r - i) / r;
    o[o.length - 1] = (this.#o - n) / a;
    if (isNaN(s[6]) && !this.isEmpty()) {
      return this.#C(o);
    }
    const l = new Float32Array(this.#a.length + 24 + this.#e.length);
    let t_length = t.length;
    for (let c = 0; c < t_length; c += 2) {
      if (isNaN(t[c])) {
        l[c] = l[c + 1] = NaN;
        continue;
      }
      l[c] = t[c];
      l[c + 1] = t[c + 1];
    }
    t_length = this.#w(l, t_length);
    for (let c = e.length - 6; c >= 6; c -= 6) {
      for (let u = 0; u < 6; u += 2) {
        if (isNaN(e[c + u])) {
          l[t_length] = l[t_length + 1] = NaN;
          t_length += 2;
          continue;
        }
        l[t_length] = e[c + u];
        l[t_length + 1] = e[c + u + 1];
        t_length += 2;
      }
    }
    this.#S(l, t_length);
    return this.newFreeDrawOutline(l, o, this.#t, this.#u, this.#i, this.#s);
  }
  #C(t) {
    const e = this.#n;
    const [s, i, n, r] = this.#t;
    const [a, o, l, h] = this.#g();
    const c = new Float32Array(36);
    c.set([NaN, NaN, NaN, NaN, (e[2] - s) / n, (e[3] - i) / r, NaN, NaN, NaN, NaN, (e[4] - s) / n, (e[5] - i) / r, NaN, NaN, NaN, NaN, a, o, NaN, NaN, NaN, NaN, l, h, NaN, NaN, NaN, NaN, (e[16] - s) / n, (e[17] - i) / r, NaN, NaN, NaN, NaN, (e[14] - s) / n, (e[15] - i) / r], 0);
    return this.newFreeDrawOutline(c, t, this.#t, this.#u, this.#i, this.#s);
  }
  #S(t, e) {
    const s = this.#e;
    t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e);
    return e += 6;
  }
  #w(t, e) {
    const s = this.#n.subarray(4, 6);
    const i = this.#n.subarray(16, 18);
    const [n, r, a, o] = this.#t;
    const [l, h, c, u] = this.#g();
    t.set([NaN, NaN, NaN, NaN, (s[0] - n) / a, (s[1] - r) / o, NaN, NaN, NaN, NaN, l, h, NaN, NaN, NaN, NaN, c, u, NaN, NaN, NaN, NaN, (i[0] - n) / a, (i[1] - r) / o], e);
    return e += 24;
  }
}
class Wi extends x {
  #t;
  #e = new Float32Array(4);
  #i;
  #s;
  #a;
  #n;
  #r;
  constructor(t, e, s, i, n, r) {
    super();
    this.#r = t;
    this.#a = e;
    this.#t = s;
    this.#n = i;
    this.#i = n;
    this.#s = r;
    this.firstPoint = [NaN, NaN];
    this.lastPoint = [NaN, NaN];
    this.#o(r);
    const [a, o, l, h] = this.#e;
    for (let c = 0, u = t.length; c < u; c += 2) {
      t[c] = (t[c] - a) / l;
      t[c + 1] = (t[c + 1] - o) / h;
    }
    for (let c = 0, u = e.length; c < u; c += 2) {
      e[c] = (e[c] - a) / l;
      e[c + 1] = (e[c + 1] - o) / h;
    }
  }
  toSVGPath() {
    const t = [`M${this.#r[4]} ${this.#r[5]}`];
    for (let e = 6, s = this.#r.length; e < s; e += 6) {
      if (isNaN(this.#r[e])) {
        t.push(`L${this.#r[e + 4]} ${this.#r[e + 5]}`);
        continue;
      }
      t.push(`C${this.#r[e]} ${this.#r[e + 1]} ${this.#r[e + 2]} ${this.#r[e + 3]} ${this.#r[e + 4]} ${this.#r[e + 5]}`);
    }
    t.push("Z");
    return t.join(" ");
  }
  serialize([t, e, s, i], n) {
    const r = s - t;
    const a = i - e;
    let o;
    let l;
    switch (n) {
      case 0:
        o = x._rescale(this.#r, t, i, r, -a);
        l = x._rescale(this.#a, t, i, r, -a);
        break;
      case 90:
        o = x._rescaleAndSwap(this.#r, t, e, r, a);
        l = x._rescaleAndSwap(this.#a, t, e, r, a);
        break;
      case 180:
        o = x._rescale(this.#r, s, e, -r, a);
        l = x._rescale(this.#a, s, e, -r, a);
        break;
      case 270:
        o = x._rescaleAndSwap(this.#r, s, i, -r, -a);
        l = x._rescaleAndSwap(this.#a, s, i, -r, -a);
        break;
    }
    return {
      outline: Array.from(o),
      points: [Array.from(l)]
    };
  }
  #o(t) {
    const e = this.#r;
    let s = e[4];
    let i = e[5];
    const n = [s, i, s, i];
    let r = s;
    let a = i;
    let o = s;
    let l = i;
    const h = t ? Math.max : Math.min;
    const c = new Float32Array(4);
    for (let f = 6, g = e.length; f < g; f += 6) {
      const p = e[f + 4];
      const b = e[f + 5];
      if (isNaN(e[f])) {
        Util.pointBoundingBox(p, b, n);
        if (a > b) {
          r = p;
          a = b;
        } else if (a === b) {
          r = h(r, p);
        }
        if (l < b) {
          o = p;
          l = b;
        } else if (l === b) {
          o = h(o, p);
        }
      } else {
        c[0] = c[1] = Infinity;
        c[2] = c[3] = -Infinity;
        Util.bezierBoundingBox(s, i, ...e.slice(f, f + 6), c);
        Util.rectBoundingBox(c[0], c[1], c[2], c[3], n);
        if (a > c[1]) {
          r = c[0];
          a = c[1];
        } else if (a === c[1]) {
          r = h(r, c[0]);
        }
        if (l < c[3]) {
          o = c[2];
          l = c[3];
        } else if (l === c[3]) {
          o = h(o, c[2]);
        }
      }
      s = p;
      i = b;
    }
    const u = this.#e;
    u[0] = n[0] - this.#i;
    u[1] = n[1] - this.#i;
    u[2] = n[2] - n[0] + 2 * this.#i;
    u[3] = n[3] - n[1] + 2 * this.#i;
    this.firstPoint = [r, a];
    this.lastPoint = [o, l];
  }
  get box() {
    return this.#e;
  }
  newOutliner(t, e, s, i, n, r = 0) {
    return new zt(t, e, s, i, n, r);
  }
  getNewOutline(t, e) {
    const [s, i, n, r] = this.#e;
    const [a, o, l, h] = this.#t;
    const c = n * l;
    const u = r * h;
    const f = s * l + a;
    const g = i * h + o;
    const p = this.newOutliner({
      x: this.#a[0] * c + f,
      y: this.#a[1] * u + g
    }, this.#t, this.#n, t, this.#s, e ?? this.#i);
    for (let b = 2; b < this.#a.length; b += 2) {
      p.add({
        x: this.#a[b] * c + f,
        y: this.#a[b + 1] * u + g
      });
    }
    return p.getOutlines();
  }
}
class vs {
  #t;
  #e;
  #i;
  #s = [];
  #a = [];
  constructor(t, e = 0, s = 0, i = true) {
    const n = [Infinity, Infinity, -Infinity, -Infinity];
    const r = 10 ** -4;
    for (const {
      x,
      y: y_1,
      width,
      height
    } of t) {
      const A = Math.floor((x - e) / r) * r;
      const w = Math.ceil((x + width + e) / r) * r;
      const v = Math.floor((y_1 - e) / r) * r;
      const _ = Math.ceil((y_1 + height + e) / r) * r;
      const S = [A, v, _, true];
      const E = [w, v, _, false];
      this.#s.push(S, E);
      Util.rectBoundingBox(A, v, w, _, n);
    }
    const a = n[2] - n[0] + 2 * s;
    const o = n[3] - n[1] + 2 * s;
    const l = n[0] - s;
    const h = n[1] - s;
    let c = i ? -Infinity : Infinity;
    let u = Infinity;
    const f = this.#s.at(i ? -1 : -2);
    const g = [f[0], f[2]];
    for (const p of this.#s) {
      const [b, m, y, A] = p;
      !A && i ? m < u ? (u = m, c = b) : m === u && (c = Math.max(c, b)) : A && !i && (m < u ? (u = m, c = b) : m === u && (c = Math.min(c, b)));
      p[0] = (b - l) / a;
      p[1] = (m - h) / o;
      p[2] = (y - h) / o;
    }
    this.#t = new Float32Array([l, h, a, o]);
    this.#e = [c, u];
    this.#i = g;
  }
  getOutlines() {
    this.#s.sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of this.#s) {
      if (e[3]) {
        t.push(...this.#l(e));
        this.#o(e);
      } else {
        this.#h(e);
        t.push(...this.#l(e));
      }
    }
    return this.#n(t);
  }
  #n(t) {
    const e = [];
    const s = new Set();
    for (const r of t) {
      const [a, o, l] = r;
      e.push([a, o, r], [a, l, r]);
    }
    e.sort((r, a) => r[1] - a[1] || r[0] - a[0]);
    for (let r = 0, a = e.length; r < a; r += 2) {
      const o = e[r][2];
      const l = e[r + 1][2];
      o.push(l);
      l.push(o);
      s.add(o);
      s.add(l);
    }
    const i = [];
    let n;
    while (s.size > 0) {
      const r = s.values().next().value;
      let [a, o, l, h, c] = r;
      s.delete(r);
      let u = a;
      let f = o;
      n = [a, l];
      i.push(n);
      while (true) {
        let g;
        if (s.has(h)) {
          g = h;
        } else if (s.has(c)) {
          g = c;
        } else {
          break;
        }
        s.delete(g);
        [a, o, l, h, c] = g;
        if (u !== a) {
          n.push(u, f, a, f === o ? o : l);
          u = a;
        }
        f = f === o ? l : o;
      }
      n.push(u, f);
    }
    return new Wr(i, this.#t, this.#e, this.#i);
  }
  #r(t) {
    const e = this.#a;
    let s = 0;
    let i = e.length - 1;
    while (s <= i) {
      const n = s + i >> 1;
      const r = e[n][0];
      if (r === t) {
        return n;
      }
      if (r < t) {
        s = n + 1;
      } else {
        i = n - 1;
      }
    }
    return i + 1;
  }
  #o([, t, e]) {
    const s = this.#r(t);
    this.#a.splice(s, 0, [t, e]);
  }
  #h([, t, e]) {
    const s = this.#r(t);
    for (let i = s; i < this.#a.length; i++) {
      const [n, r] = this.#a[i];
      if (n !== t) {
        break;
      }
      if (n === t && r === e) {
        this.#a.splice(i, 1);
        return;
      }
    }
    for (let i = s - 1; i >= 0; i--) {
      const [n, r] = this.#a[i];
      if (n !== t) {
        break;
      }
      if (n === t && r === e) {
        this.#a.splice(i, 1);
        return;
      }
    }
  }
  #l([e, s, i]) {
    const n = [[e, s, i]];
    const r = this.#r(i);
    for (let a = 0; a < r; a++) {
      const [o, l] = this.#a[a];
      for (let h = 0, c = n.length; h < c; h++) {
        const [, u, f] = n[h];
        if (!(l <= u || f <= o)) {
          if (u >= o) {
            if (f > l) {
              n[h][1] = l;
            } else {
              if (c === 1) {
                return [];
              }
              n.splice(h, 1);
              h--;
              c--;
            }
            continue;
          }
          n[h][2] = o;
          if (f > l) {
            n.push([e, l, f]);
          }
        }
      }
    }
    return n;
  }
}
class Wr extends x {
  #t;
  #e;
  constructor(t, e, s, i) {
    super();
    this.#e = t;
    this.#t = e;
    this.firstPoint = s;
    this.lastPoint = i;
  }
  toSVGPath() {
    const t = [];
    for (const e of this.#e) {
      let [s, i] = e;
      t.push(`M${s} ${i}`);
      for (let n = 2; n < e.length; n += 2) {
        const r = e[n];
        const a = e[n + 1];
        if (r === s) {
          t.push(`V${a}`);
          i = a;
        } else if (a === i) {
          t.push(`H${r}`);
          s = r;
        }
      }
      t.push("Z");
    }
    return t.join(" ");
  }
  serialize([t, e, s, i], n) {
    const r = [];
    const a = s - t;
    const o = i - e;
    for (const l of this.#e) {
      const h = new Array(l.length);
      for (let c = 0; c < l.length; c += 2) {
        h[c] = t + l[c] * a;
        h[c + 1] = i - l[c + 1] * o;
      }
      r.push(h);
    }
    return r;
  }
  get box() {
    return this.#t;
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
class _s extends zt {
  newFreeDrawOutline(t, e, s, i, n, r) {
    return new Xr(t, e, s, i, n, r);
  }
}
class Xr extends Wi {
  newOutliner(t, e, s, i, n, r = 0) {
    return new _s(t, e, s, i, n, r);
  }
}
class J extends M {
  #t = null;
  #e = 0;
  #i;
  #s = null;
  #a = null;
  #n = null;
  #r = null;
  #o = 0;
  #h = null;
  #l = null;
  #u = null;
  #d = false;
  #f = null;
  #m = null;
  #p = null;
  #c = "";
  #g;
  #b = "";
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 12;
  static _type = "highlight";
  static _editorType = AnnotationEditorType.HIGHLIGHT;
  static _freeHighlightId = -1;
  static _freeHighlight = null;
  static _freeHighlightClipId = "";
  static get _keyboardManager() {
    const J_prototype = J.prototype;
    return shadow(this, "_keyboardManager", new Te([[["ArrowLeft", "mac+ArrowLeft"], J_prototype._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], J_prototype._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], J_prototype._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], J_prototype._moveCaret, {
      args: [3]
    }]]));
  }
  constructor(t) {
    super({
      ...t,
      name: "highlightEditor"
    });
    this.color = t.color || J._defaultColor;
    this.#g = t.thickness || J._defaultThickness;
    this.opacity = t.opacity || J._defaultOpacity;
    this.#i = t.boxes || null;
    this.#b = t.methodOfCreation || "";
    this.#c = t.text || "";
    this._isDraggable = false;
    this.defaultL10nId = "pdfjs-editor-highlight-editor";
    if (t.highlightId > -1) {
      this.#d = true;
      this.#y(t);
      this.#_();
    } else if (this.#i) {
      this.#t = t.anchorNode;
      this.#e = t.anchorOffset;
      this.#r = t.focusNode;
      this.#o = t.focusOffset;
      this.#A();
      this.#_();
      this.rotate(this.rotation);
    }
    if (!this.annotationElementId) {
      this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
    }
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: this.#d ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: this.#g,
      methodOfCreation: this.#b
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.getNonHCMColorName(this.color)
    };
  }
  static computeTelemetryFinalData(t) {
    return {
      numberOfColors: t.get("color").size
    };
  }
  #A() {
    const t = new vs(this.#i, 0.001);
    this.#l = t.getOutlines();
    [this.x, this.y, this.width, this.height] = this.#l.box;
    const e = new vs(this.#i, 0.0025, 0.001, this._uiManager.direction === "ltr");
    this.#n = e.getOutlines();
    const {
      firstPoint
    } = this.#l;
    this.#f = [(firstPoint[0] - this.x) / this.width, (firstPoint[1] - this.y) / this.height];
    const {
      lastPoint
    } = this.#n;
    this.#m = [(lastPoint[0] - this.x) / this.width, (lastPoint[1] - this.y) / this.height];
  }
  #y({
    highlightOutlines,
    highlightId,
    clipPathId
  }) {
    this.#l = highlightOutlines;
    const i = 1.5;
    this.#n = highlightOutlines.getNewOutline(this.#g / 2 + i, 0.0025);
    if (highlightId >= 0) {
      this.#u = highlightId;
      this.#s = clipPathId;
      this.parent.drawLayer.finalizeDraw(highlightId, {
        bbox: highlightOutlines.box,
        path: {
          d: highlightOutlines.toSVGPath()
        }
      });
      this.#p = this.parent.drawLayer.drawOutline({
        rootClass: {
          highlightOutline: true,
          free: true
        },
        bbox: this.#n.box,
        path: {
          d: this.#n.toSVGPath()
        }
      }, true);
    } else if (this.parent) {
      const c = this.parent.viewport.rotation;
      this.parent.drawLayer.updateProperties(this.#u, {
        bbox: J.#E(this.#l.box, (c - this.rotation + 360) % 360),
        path: {
          d: highlightOutlines.toSVGPath()
        }
      });
      this.parent.drawLayer.updateProperties(this.#p, {
        bbox: J.#E(this.#n.box, c),
        path: {
          d: this.#n.toSVGPath()
        }
      });
    }
    const [n, r, a, o] = highlightOutlines.box;
    switch (this.rotation) {
      case 0:
        this.x = n;
        this.y = r;
        this.width = a;
        this.height = o;
        break;
      case 90:
        {
          const [c, u] = this.parentDimensions;
          this.x = r;
          this.y = 1 - n;
          this.width = a * u / c;
          this.height = o * c / u;
          break;
        }
      case 180:
        this.x = 1 - n;
        this.y = 1 - r;
        this.width = a;
        this.height = o;
        break;
      case 270:
        {
          const [c, u] = this.parentDimensions;
          this.x = 1 - r;
          this.y = n;
          this.width = a * u / c;
          this.height = o * c / u;
          break;
        }
    }
    const {
      firstPoint
    } = highlightOutlines;
    this.#f = [(firstPoint[0] - n) / a, (firstPoint[1] - r) / o];
    const {
      lastPoint
    } = this.#n;
    this.#m = [(lastPoint[0] - n) / a, (lastPoint[1] - r) / o];
  }
  static initialize(t, e) {
    M.initialize(t, e);
    J._defaultColor ||= e.highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(t, e) {
    switch (t) {
      case AnnotationEditorParamsType.HIGHLIGHT_COLOR:
        J._defaultColor = e;
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        J._defaultThickness = e;
        break;
    }
  }
  translateInPage(t, e) {}
  get toolbarPosition() {
    return this.#m;
  }
  get commentButtonPosition() {
    return this.#f;
  }
  updateParams(t, e) {
    switch (t) {
      case AnnotationEditorParamsType.HIGHLIGHT_COLOR:
        this.#C(e);
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        this.#S(e);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_COLOR, J._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, J._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_COLOR, this.color || J._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, this.#g || J._defaultThickness], [AnnotationEditorParamsType.HIGHLIGHT_FREE, this.#d]];
  }
  onUpdatedColor() {
    this.parent?.drawLayer.updateProperties(this.#u, {
      root: {
        fill: this.color,
        "fill-opacity": this.opacity
      }
    });
    this.#a?.updateColor(this.color);
    super.onUpdatedColor();
  }
  #C(t) {
    const e = (n, r) => {
      this.color = n;
      this.opacity = r;
      this.onUpdatedColor();
    };
    const color = this.color;
    const opacity = this.opacity;
    this.addCommands({
      cmd: e.bind(this, t, J._defaultOpacity),
      undo: e.bind(this, color, opacity),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.HIGHLIGHT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
    this._reportTelemetry({
      action: "color_changed",
      color: this._uiManager.getNonHCMColorName(t)
    }, true);
  }
  #S(t) {
    const e = this.#g;
    const s = i => {
      this.#g = i;
      this.#w(i);
    };
    this.addCommands({
      cmd: s.bind(this, t),
      undo: s.bind(this, e),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true
    });
    this._reportTelemetry({
      action: "thickness_changed",
      thickness: t
    }, true);
  }
  get toolbarButtons() {
    if (this._uiManager.highlightColors) {
      return [["colorPicker", this.#a = new ColorPicker({
        editor: this
      })]];
    }
    return super.toolbarButtons;
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(this.#k());
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(t, e) {
    return super.getRect(t, e, this.#k());
  }
  onceAdded(t) {
    if (!this.annotationElementId) {
      this.parent.addUndoableEditor(this);
    }
    if (t) {
      this.div.focus();
    }
  }
  remove() {
    this.#T();
    this._reportTelemetry({
      action: "deleted"
    });
    super.remove();
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      if (this.div !== null) {
        this.#_();
        if (!this.isAttachedToDOM) {
          this.parent.add(this);
        }
      }
    }
  }
  setParent(t) {
    let e = false;
    if (this.parent && !t) {
      this.#T();
    } else if (t) {
      this.#_(t);
      e = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(t);
    this.show(this._isVisible);
    if (e) {
      this.select();
    }
  }
  #w(t) {
    if (this.#d) {
      this.#y({
        highlightOutlines: this.#l.getNewOutline(t / 2)
      });
      this.fixAndSetPosition();
      this.setDims(this.width, this.height);
    }
  }
  #T() {
    if (!(this.#u === null || !this.parent)) {
      this.parent.drawLayer.remove(this.#u);
      this.#u = null;
      this.parent.drawLayer.remove(this.#p);
      this.#p = null;
    }
  }
  #_(t = this.parent) {
    if (this.#u === null) {
      ({
        id: this.#u,
        clipPathId: this.#s
      } = t.drawLayer.draw({
        bbox: this.#l.box,
        root: {
          viewBox: "0 0 1 1",
          fill: this.color,
          "fill-opacity": this.opacity
        },
        rootClass: {
          highlight: true,
          free: this.#d
        },
        path: {
          d: this.#l.toSVGPath()
        }
      }, false, true));
      this.#p = t.drawLayer.drawOutline({
        rootClass: {
          highlightOutline: true,
          free: this.#d
        },
        bbox: this.#n.box,
        path: {
          d: this.#n.toSVGPath()
        }
      }, this.#d);
      if (this.#h) {
        this.#h.style.clipPath = this.#s;
      }
    }
  }
  static #E([t, e, s, i], n) {
    switch (n) {
      case 90:
        return [1 - e - i, t, i, s];
      case 180:
        return [1 - t - s, 1 - e - i, s, i];
      case 270:
        return [e, 1 - t - s, i, s];
    }
    return [t, e, s, i];
  }
  rotate(t) {
    const {
      drawLayer
    } = this.parent;
    let s;
    if (this.#d) {
      t = (t - this.rotation + 360) % 360;
      s = J.#E(this.#l.box, t);
    } else {
      s = J.#E([this.x, this.y, this.width, this.height], t);
    }
    drawLayer.updateProperties(this.#u, {
      bbox: s,
      root: {
        "data-main-rotation": t
      }
    });
    drawLayer.updateProperties(this.#p, {
      bbox: J.#E(this.#n.box, t),
      root: {
        "data-main-rotation": t
      }
    });
  }
  render() {
    if (this.div) {
      return this.div;
    }
    const t = super.render();
    if (this.#c) {
      t.setAttribute("aria-label", this.#c);
      t.setAttribute("role", "mark");
    }
    if (this.#d) {
      t.classList.add("free");
    } else {
      this.div.addEventListener("keydown", this.#M.bind(this), {
        signal: this._uiManager._signal
      });
    }
    const e = this.#h = document.createElement("div");
    t.append(e);
    e.setAttribute("aria-hidden", "true");
    e.className = "internal";
    e.style.clipPath = this.#s;
    this.setDims(this.width, this.height);
    Si(this, this.#h, ["pointerover", "pointerleave"]);
    this.enableEditing();
    return t;
  }
  pointerover() {
    this.isSelected || this.parent?.drawLayer.updateProperties(this.#p, {
      rootClass: {
        hovered: true
      }
    });
  }
  pointerleave() {
    this.isSelected || this.parent?.drawLayer.updateProperties(this.#p, {
      rootClass: {
        hovered: false
      }
    });
  }
  #M(t) {
    J._keyboardManager.exec(this, t);
  }
  _moveCaret(t) {
    this.parent.unselect(this);
    switch (t) {
      case 0:
      case 2:
        this.#P(true);
        break;
      case 1:
      case 3:
        this.#P(false);
        break;
    }
  }
  #P(t) {
    if (!this.#t) {
      return;
    }
    const e = window.getSelection();
    if (t) {
      e.setPosition(this.#t, this.#e);
    } else {
      e.setPosition(this.#r, this.#o);
    }
  }
  select() {
    super.select();
    this.#p && this.parent?.drawLayer.updateProperties(this.#p, {
      rootClass: {
        hovered: false,
        selected: true
      }
    });
  }
  unselect() {
    super.unselect();
    this.#p && (this.parent?.drawLayer.updateProperties(this.#p, {
      rootClass: {
        selected: false
      }
    }), this.#d || this.#P(false));
  }
  get _mustFixPosition() {
    return !this.#d;
  }
  show(t = this._isVisible) {
    super.show(t);
    if (this.parent) {
      this.parent.drawLayer.updateProperties(this.#u, {
        rootClass: {
          hidden: !t
        }
      });
      this.parent.drawLayer.updateProperties(this.#p, {
        rootClass: {
          hidden: !t
        }
      });
    }
  }
  #k() {
    if (this.#d) {
      return this.rotation;
    }
    return 0;
  }
  #O() {
    if (this.#d) {
      return null;
    }
    const [t, e] = this.pageDimensions;
    const [s, i] = this.pageTranslation;
    const n = this.#i;
    const r = new Float32Array(n.length * 8);
    let a = 0;
    for (const {
      x,
      y,
      width,
      height
    } of n) {
      const u = x * t + s;
      const f = (1 - y) * e + i;
      r[a] = r[a + 4] = u;
      r[a + 1] = r[a + 3] = f;
      r[a + 2] = r[a + 6] = u + width * t;
      r[a + 5] = r[a + 7] = f - height * e;
      a += 8;
    }
    return r;
  }
  #D(t) {
    return this.#l.serialize(t, this.#k());
  }
  static startHighlighting(t, e, {
    target,
    x,
    y
  }) {
    const {
      x: x_1,
      y: y_1,
      width,
      height
    } = target.getBoundingClientRect();
    const h = new AbortController();
    const c = t.combinedSignal(h);
    const u = f => {
      h.abort();
      this.#B(t, f);
    };
    window.addEventListener("blur", u, {
      signal: c
    });
    window.addEventListener("pointerup", u, {
      signal: c
    });
    window.addEventListener("pointerdown", stopEvent, {
      capture: true,
      passive: false,
      signal: c
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal: c
    });
    target.addEventListener("pointermove", this.#I.bind(this, t), {
      signal: c
    });
    this._freeHighlight = new _s({
      x,
      y
    }, [x_1, y_1, width, height], t.scale, this._defaultThickness / 2, e, 0.001);
    ({
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = t.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: true,
        free: true
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, true, true));
  }
  static #I(t, e) {
    if (this._freeHighlight.add(e)) {
      t.drawLayer.updateProperties(this._freeHighlightId, {
        path: {
          d: this._freeHighlight.toSVGPath()
        }
      });
    }
  }
  static #B(t, e) {
    if (this._freeHighlight.isEmpty()) {
      t.drawLayer.remove(this._freeHighlightId);
    } else {
      t.createAndAddNewEditor(e, false, {
        highlightId: this._freeHighlightId,
        highlightOutlines: this._freeHighlight.getOutlines(),
        clipPathId: this._freeHighlightClipId,
        methodOfCreation: "main_toolbar"
      });
    }
    this._freeHighlightId = -1;
    this._freeHighlight = null;
    this._freeHighlightClipId = "";
  }
  static async deserialize(t, e, s) {
    let i = null;
    if (t instanceof Gi) {
      const {
        data: {
          quadPoints: quadPoints_1,
          rect,
          rotation,
          id,
          color: color_1,
          opacity: opacity_1,
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = t;
      i = t = {
        annotationType: AnnotationEditorType.HIGHLIGHT,
        color: Array.from(color_1),
        opacity: opacity_1,
        quadPoints: quadPoints_1,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        popupRef,
        richText,
        comment: contentsObj?.str || null,
        creationDate,
        modificationDate
      };
    } else if (t instanceof Fs) {
      const {
        data: {
          inkLists: inkLists_1,
          rect,
          rotation,
          id,
          color: color_1,
          borderStyle: {
            rawWidth
          },
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = t;
      i = t = {
        annotationType: AnnotationEditorType.HIGHLIGHT,
        color: Array.from(color_1),
        thickness: rawWidth,
        inkLists: inkLists_1,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        popupRef,
        richText,
        comment: contentsObj?.str || null,
        creationDate,
        modificationDate
      };
    }
    const {
      color,
      quadPoints,
      inkLists,
      opacity
    } = t;
    const l = await super.deserialize(t, e, s);
    l.color = Util.makeHexColor(...color);
    l.opacity = opacity || 1;
    if (inkLists) {
      l.#g = t.thickness;
    }
    l._initialData = i;
    if (t.comment) {
      l.setCommentData(t);
    }
    const [h, c] = l.pageDimensions;
    const [u, f] = l.pageTranslation;
    if (quadPoints) {
      const g = l.#i = [];
      for (let p = 0; p < quadPoints.length; p += 8) {
        g.push({
          x: (quadPoints[p] - u) / h,
          y: 1 - (quadPoints[p + 1] - f) / c,
          width: (quadPoints[p + 2] - quadPoints[p]) / h,
          height: (quadPoints[p + 1] - quadPoints[p + 5]) / c
        });
      }
      l.#A();
      l.#_();
      l.rotate(l.rotation);
    } else if (inkLists) {
      l.#d = true;
      const g = inkLists[0];
      const p = {
        x: g[0] - u,
        y: c - (g[1] - f)
      };
      const b = new _s(p, [0, 0, h, c], 1, l.#g / 2, true, 0.001);
      for (let A = 0, w = g.length; A < w; A += 2) {
        p.x = g[A] - u;
        p.y = c - (g[A + 1] - f);
        b.add(p);
      }
      const {
        id: highlightId,
        clipPathId
      } = e.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: l.color,
          "fill-opacity": l._defaultOpacity
        },
        rootClass: {
          highlight: true,
          free: true
        },
        path: {
          d: b.toSVGPath()
        }
      }, true, true);
      l.#y({
        highlightOutlines: b.getOutlines(),
        highlightId,
        clipPathId
      });
      l.#_();
      l.rotate(l.parentRotation);
    }
    return l;
  }
  serialize(t = false) {
    if (this.isEmpty() || t) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const e = M._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
    const s = super.serialize(t);
    Object.assign(s, {
      color: e,
      opacity: this.opacity,
      thickness: this.#g,
      quadPoints: this.#O(),
      outlines: this.#D(s.rect)
    });
    this.addComment(s);
    if (this.annotationElementId && !this.#F(s)) {
      return null;
    }
    s.id = this.annotationElementId;
    return s;
  }
  #F(t) {
    const {
      color
    } = this._initialData;
    return this.hasEditedComment || t.color.some((s, i) => s !== color[i]);
  }
  renderAnnotationElement(t) {
    if (this.deleted) {
      t.hide();
      return null;
    }
    t.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
}
class Xi {
  #t = Object.create(null);
  updateProperty(t, e) {
    this[t] = e;
    this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t) {
      for (const [e, s] of Object.entries(t)) {
        if (!e.startsWith("_")) {
          this.updateProperty(e, s);
        }
      }
    }
  }
  updateSVGProperty(t, e) {
    this.#t[t] = e;
  }
  toSVGProperties() {
    const root = this.#t;
    this.#t = Object.create(null);
    return {
      root
    };
  }
  reset() {
    this.#t = Object.create(null);
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    G("Not implemented");
  }
}
class D extends M {
  #t = null;
  #e;
  _colorPicker = null;
  _drawId = null;
  static _currentDrawId = -1;
  static _currentParent = null;
  static #i = null;
  static #s = null;
  static #a = null;
  static #n = NaN;
  static #r = null;
  static #o = null;
  static #h = NaN;
  static _INNER_MARGIN = 3;
  constructor(t) {
    super(t);
    this.#e = t.mustBeCommitted || false;
    this._addOutlines(t);
  }
  onUpdatedColor() {
    this._colorPicker?.update(this.color);
    super.onUpdatedColor();
  }
  _addOutlines(t) {
    if (t.drawOutlines) {
      this.#l(t);
      this.#f();
    }
  }
  #l({
    drawOutlines,
    drawId,
    drawingOptions
  }) {
    this.#t = drawOutlines;
    this._drawingOptions ||= drawingOptions;
    if (!this.annotationElementId) {
      this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`);
    }
    if (drawId >= 0) {
      this._drawId = drawId;
      this.parent.drawLayer.finalizeDraw(drawId, drawOutlines.defaultProperties);
    } else {
      this._drawId = this.#u(drawOutlines, this.parent);
    }
    this.#c(drawOutlines.box);
  }
  #u(t, e) {
    const {
      id
    } = e.drawLayer.draw(D._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t.defaultSVGProperties), false, false);
    return id;
  }
  static _mergeSVGProperties(t, e) {
    const s = new Set(Object.keys(t));
    for (const [i, n] of Object.entries(e)) {
      if (s.has(i)) {
        Object.assign(t[i], n);
      } else {
        t[i] = n;
      }
    }
    return t;
  }
  static getDefaultDrawingOptions(t) {
    G("Not implemented");
  }
  static get typesMap() {
    G("Not implemented");
  }
  static get isDrawer() {
    return true;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static updateDefaultParams(t, e) {
    const s = this.typesMap.get(t);
    if (s) {
      this._defaultDrawingOptions.updateProperty(s, e);
    }
    if (this._currentParent) {
      D.#i.updateProperty(s, e);
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
    }
  }
  updateParams(t, e) {
    const s = this.constructor.typesMap.get(t);
    if (s) {
      this._updateProperty(t, s, e);
    }
  }
  static get defaultPropertiesToUpdate() {
    const t = [];
    const _defaultDrawingOptions = this._defaultDrawingOptions;
    for (const [s, i] of this.typesMap) {
      t.push([s, _defaultDrawingOptions[i]]);
    }
    return t;
  }
  get propertiesToUpdate() {
    const t = [];
    const {
      _drawingOptions
    } = this;
    for (const [s, i] of this.constructor.typesMap) {
      t.push([s, _drawingOptions[i]]);
    }
    return t;
  }
  _updateProperty(t, e, s) {
    const _drawingOptions = this._drawingOptions;
    const n = _drawingOptions[e];
    const r = a => {
      _drawingOptions.updateProperty(e, a);
      const o = this.#t.updateProperty(e, a);
      if (o) {
        this.#c(o);
      }
      this.parent?.drawLayer.updateProperties(this._drawId, _drawingOptions.toSVGProperties());
      if (t === this.colorType) {
        this.onUpdatedColor();
      }
    };
    this.addCommands({
      cmd: r.bind(this, s),
      undo: r.bind(this, n),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: t,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  _onResizing() {
    this.parent?.drawLayer.updateProperties(this._drawId, D._mergeSVGProperties(this.#t.getPathResizingSVGProperties(this.#p()), {
      bbox: this.#g()
    }));
  }
  _onResized() {
    this.parent?.drawLayer.updateProperties(this._drawId, D._mergeSVGProperties(this.#t.getPathResizedSVGProperties(this.#p()), {
      bbox: this.#g()
    }));
  }
  _onTranslating(t, e) {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      bbox: this.#g()
    });
  }
  _onTranslated() {
    this.parent?.drawLayer.updateProperties(this._drawId, D._mergeSVGProperties(this.#t.getPathTranslatedSVGProperties(this.#p(), this.parentDimensions), {
      bbox: this.#g()
    }));
  }
  _onStartDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: true
      }
    });
  }
  _onStopDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: false
      }
    });
  }
  commit() {
    super.commit();
    this.disableEditMode();
    this.disableEditing();
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return true;
  }
  onceAdded(t) {
    if (!this.annotationElementId) {
      this.parent.addUndoableEditor(this);
    }
    this._isDraggable = true;
    if (this.#e) {
      this.#e = false;
      this.commit();
      this.parent.setSelected(this);
      if (t && this.isOnScreen) {
        this.div.focus();
      }
    }
  }
  remove() {
    this.#d();
    super.remove();
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      if (this.div !== null) {
        this.#f();
        this.#c(this.#t.box);
        if (!this.isAttachedToDOM) {
          this.parent.add(this);
        }
      }
    }
  }
  setParent(t) {
    let e = false;
    if (this.parent && !t) {
      this._uiManager.removeShouldRescale(this);
      this.#d();
    } else if (t) {
      this._uiManager.addShouldRescale(this);
      this.#f(t);
      e = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(t);
    if (e) {
      this.select();
    }
  }
  #d() {
    if (!(this._drawId === null || !this.parent)) {
      this.parent.drawLayer.remove(this._drawId);
      this._drawId = null;
      this._drawingOptions.reset();
    }
  }
  #f(t = this.parent) {
    if (!(this._drawId !== null && this.parent === t)) {
      if (this._drawId !== null) {
        this.parent.drawLayer.updateParent(this._drawId, t.drawLayer);
        return;
      }
      this._drawingOptions.updateAll();
      this._drawId = this.#u(this.#t, t);
    }
  }
  #m([t, e, s, i]) {
    const {
      parentDimensions: [n, r],
      rotation
    } = this;
    switch (rotation) {
      case 90:
        return [e, 1 - t, s * (r / n), i * (n / r)];
      case 180:
        return [1 - t, 1 - e, s, i];
      case 270:
        return [1 - e, t, s * (r / n), i * (n / r)];
      default:
        return [t, e, s, i];
    }
  }
  #p() {
    const {
      x,
      y,
      width,
      height,
      parentDimensions: [n, r],
      rotation
    } = this;
    switch (rotation) {
      case 90:
        return [1 - y, x, width * (n / r), height * (r / n)];
      case 180:
        return [1 - x, 1 - y, width, height];
      case 270:
        return [y, 1 - x, width * (n / r), height * (r / n)];
      default:
        return [x, y, width, height];
    }
  }
  #c(t) {
    [this.x, this.y, this.width, this.height] = this.#m(t);
    if (this.div) {
      this.fixAndSetPosition();
      this.setDims();
    }
    this._onResized();
  }
  #g() {
    const {
      x,
      y,
      width,
      height,
      rotation,
      parentRotation,
      parentDimensions: [a, o]
    } = this;
    switch ((rotation * 4 + parentRotation) / 90) {
      case 1:
        return [1 - y - height, x, height, width];
      case 2:
        return [1 - x - width, 1 - y - height, width, height];
      case 3:
        return [y, 1 - x - width, height, width];
      case 4:
        return [x, y - width * (a / o), height * (o / a), width * (a / o)];
      case 5:
        return [1 - y, x, width * (a / o), height * (o / a)];
      case 6:
        return [1 - x - height * (o / a), 1 - y, height * (o / a), width * (a / o)];
      case 7:
        return [y - width * (a / o), 1 - x - height * (o / a), width * (a / o), height * (o / a)];
      case 8:
        return [x - width, y - height, width, height];
      case 9:
        return [1 - y, x - width, height, width];
      case 10:
        return [1 - x, 1 - y, width, height];
      case 11:
        return [y - height, 1 - x, height, width];
      case 12:
        return [x - height * (o / a), y, height * (o / a), width * (a / o)];
      case 13:
        return [1 - y - width * (a / o), x - height * (o / a), width * (a / o), height * (o / a)];
      case 14:
        return [1 - x, 1 - y - width * (a / o), height * (o / a), width * (a / o)];
      case 15:
        return [y, 1 - x, width * (a / o), height * (o / a)];
      default:
        return [x, y, width, height];
    }
  }
  rotate() {
    if (this.parent) {
      this.parent.drawLayer.updateProperties(this._drawId, D._mergeSVGProperties({
        bbox: this.#g()
      }, this.#t.updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
  }
  onScaleChanging() {
    if (this.parent) {
      this.#c(this.#t.updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
  }
  static onScaleChangingWhenDrawing() {}
  render() {
    if (this.div) {
      return this.div;
    }
    let t;
    let e;
    if (this._isCopy) {
      t = this.x;
      e = this.y;
    }
    const s = super.render();
    s.classList.add("draw");
    const i = document.createElement("div");
    s.append(i);
    i.setAttribute("aria-hidden", "true");
    i.className = "internal";
    this.setDims();
    this._uiManager.addShouldRescale(this);
    this.disableEditing();
    if (this._isCopy) {
      this._moveAfterPaste(t, e);
    }
    return s;
  }
  static createDrawerInstance(t, e, s, i, n) {
    G("Not implemented");
  }
  static startDrawing(t, e, s, {
    target,
    offsetX,
    offsetY,
    pointerId,
    pointerType
  }) {
    if (D.#r && D.#r !== pointerType) {
      return;
    }
    const {
      viewport: {
        rotation
      }
    } = t;
    const {
      width,
      height
    } = target.getBoundingClientRect();
    const f = D.#s = new AbortController();
    const g = t.combinedSignal(f);
    D.#n ||= pointerId;
    D.#r ??= pointerType;
    window.addEventListener("pointerup", p => {
      if (D.#n === p.pointerId) {
        this._endDraw(p);
      } else {
        D.#o?.delete(p.pointerId);
      }
    }, {
      signal: g
    });
    window.addEventListener("pointercancel", p => {
      if (D.#n === p.pointerId) {
        this._currentParent.endDrawingSession();
      } else {
        D.#o?.delete(p.pointerId);
      }
    }, {
      signal: g
    });
    window.addEventListener("pointerdown", p => {
      if (D.#r === p.pointerType) {
        (D.#o ||= new Set()).add(p.pointerId);
        if (D.#i.isCancellable()) {
          D.#i.removeLastElement();
          if (D.#i.isEmpty()) {
            this._currentParent.endDrawingSession(true);
          } else {
            this._endDraw(null);
          }
        }
      }
    }, {
      capture: true,
      passive: false,
      signal: g
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal: g
    });
    target.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: g
    });
    target.addEventListener("touchmove", p => {
      if (p.timeStamp === D.#h) {
        stopEvent(p);
      }
    }, {
      signal: g
    });
    t.toggleDrawing();
    e._editorUndoBar?.hide();
    if (D.#i) {
      t.drawLayer.updateProperties(this._currentDrawId, D.#i.startNew(offsetX, offsetY, width, height, rotation));
      return;
    }
    e.updateUIForDefaultProperties(this);
    D.#i = this.createDrawerInstance(offsetX, offsetY, width, height, rotation);
    D.#a = this.getDefaultDrawingOptions();
    this._currentParent = t;
    ({
      id: this._currentDrawId
    } = t.drawLayer.draw(this._mergeSVGProperties(D.#a.toSVGProperties(), D.#i.defaultSVGProperties), true, false));
  }
  static _drawMove(t) {
    D.#h = -1;
    if (!D.#i) {
      return;
    }
    const {
      offsetX,
      offsetY,
      pointerId
    } = t;
    if (D.#n === pointerId) {
      if (D.#o?.size >= 1) {
        this._endDraw(t);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, D.#i.add(offsetX, offsetY));
      D.#h = t.timeStamp;
      stopEvent(t);
    }
  }
  static _cleanup(t) {
    if (t) {
      this._currentDrawId = -1;
      this._currentParent = null;
      D.#i = null;
      D.#a = null;
      D.#r = null;
      D.#h = NaN;
    }
    if (D.#s) {
      D.#s.abort();
      D.#s = null;
      D.#n = NaN;
      D.#o = null;
    }
  }
  static _endDraw(t) {
    const _currentParent = this._currentParent;
    if (_currentParent) {
      _currentParent.toggleDrawing(true);
      this._cleanup(false);
      if (t?.target === _currentParent.div) {
        _currentParent.drawLayer.updateProperties(this._currentDrawId, D.#i.end(t.offsetX, t.offsetY));
      }
      if (this.supportMultipleDrawings) {
        const s = D.#i;
        const i = this._currentDrawId;
        const n = s.getLastElement();
        _currentParent.addCommands({
          cmd: () => {
            _currentParent.drawLayer.updateProperties(i, s.setLastElement(n));
          },
          undo: () => {
            _currentParent.drawLayer.updateProperties(i, s.removeLastElement());
          },
          mustExec: false,
          type: AnnotationEditorParamsType.DRAW_STEP
        });
        return;
      }
      this.endDrawing(false);
    }
  }
  static endDrawing(t) {
    const _currentParent = this._currentParent;
    if (!_currentParent) {
      return null;
    }
    _currentParent.toggleDrawing(true);
    _currentParent.cleanUndoStack(AnnotationEditorParamsType.DRAW_STEP);
    if (!D.#i.isEmpty()) {
      const {
        pageDimensions: [s, i],
        scale
      } = _currentParent;
      const r = _currentParent.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, false, {
        drawId: this._currentDrawId,
        drawOutlines: D.#i.getOutlines(s * scale, i * scale, scale, this._INNER_MARGIN),
        drawingOptions: D.#a,
        mustBeCommitted: !t
      });
      this._cleanup(true);
      return r;
    }
    _currentParent.drawLayer.remove(this._currentDrawId);
    this._cleanup(true);
    return null;
  }
  createDrawingOptions(t) {}
  static deserializeDraw(t, e, s, i, n, r) {
    G("Not implemented");
  }
  static async deserialize(t, e, s) {
    const {
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = e.viewport;
    const drawOutlines = this.deserializeDraw(pageX, pageY, pageWidth, pageHeight, this._INNER_MARGIN, t);
    const l = await super.deserialize(t, e, s);
    l.createDrawingOptions(t);
    l.#l({
      drawOutlines
    });
    l.#f();
    l.onScaleChanging();
    l.rotate();
    return l;
  }
  serializeDraw(t) {
    const [e, s] = this.pageTranslation;
    const [i, n] = this.pageDimensions;
    return this.#t.serialize([e, s, i, n], t);
  }
  renderAnnotationElement(t) {
    t.updateEdited({
      rect: this.getPDFRect()
    });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
}
class qr {
  #t = new Float64Array(6);
  #e;
  #i;
  #s;
  #a;
  #n;
  #r = "";
  #o = 0;
  #h = new ke();
  #l;
  #u;
  constructor(t, e, s, i, n, r) {
    this.#l = s;
    this.#u = i;
    this.#s = n;
    this.#a = r;
    [t, e] = this.#d(t, e);
    const a = this.#e = [NaN, NaN, NaN, NaN, t, e];
    this.#n = [t, e];
    this.#i = [{
      line: a,
      points: this.#n
    }];
    this.#t.set(a, 0);
  }
  updateProperty(t, e) {
    if (t === "stroke-width") {
      this.#a = e;
    }
  }
  #d(t, e) {
    return x._normalizePoint(t, e, this.#l, this.#u, this.#s);
  }
  isEmpty() {
    return !this.#i || this.#i.length === 0;
  }
  isCancellable() {
    return this.#n.length <= 10;
  }
  add(t, e) {
    [t, e] = this.#d(t, e);
    const [s, i, n, r] = this.#t.subarray(2, 6);
    const a = t - n;
    const o = e - r;
    if (Math.hypot(this.#l * a, this.#u * o) <= 2) {
      return null;
    }
    this.#n.push(t, e);
    if (isNaN(s)) {
      return this.#t.set([n, r, t, e], 2), this.#e.push(NaN, NaN, NaN, NaN, t, e), {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    return isNaN(this.#t[0]) && this.#e.splice(6, 6), this.#t.set([s, i, n, r, t, e], 0), this.#e.push(...x.createBezierPoints(s, i, n, r, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  end(t, e) {
    const s = this.add(t, e);
    return s || (this.#n.length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, s, i, n) {
    this.#l = s;
    this.#u = i;
    this.#s = n;
    [t, e] = this.#d(t, e);
    const r = this.#e = [NaN, NaN, NaN, NaN, t, e];
    this.#n = [t, e];
    const a = this.#i.at(-1);
    if (a) {
      a.line = new Float32Array(a.line);
      a.points = new Float32Array(a.points);
    }
    this.#i.push({
      line: r,
      points: this.#n
    });
    this.#t.set(r, 0);
    this.#o = 0;
    this.toSVGPath();
    return null;
  }
  getLastElement() {
    return this.#i.at(-1);
  }
  setLastElement(t) {
    if (this.#i) {
      this.#i.push(t);
      this.#e = t.line;
      this.#n = t.points;
      this.#o = 0;
      return {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    return this.#h.setLastElement(t);
  }
  removeLastElement() {
    if (!this.#i) {
      return this.#h.removeLastElement();
    }
    this.#i.pop();
    this.#r = "";
    for (let t = 0, e = this.#i.length; t < e; t++) {
      const {
        line,
        points
      } = this.#i[t];
      this.#e = line;
      this.#n = points;
      this.#o = 0;
      this.toSVGPath();
    }
    return {
      path: {
        d: this.#r
      }
    };
  }
  toSVGPath() {
    const t = x.svgRound(this.#e[4]);
    const e = x.svgRound(this.#e[5]);
    if (this.#n.length === 2) {
      this.#r = `${this.#r} M ${t} ${e} Z`;
      return this.#r;
    }
    if (this.#n.length <= 6) {
      const i = this.#r.lastIndexOf("M");
      this.#r = `${this.#r.slice(0, i)} M ${t} ${e}`;
      this.#o = 6;
    }
    if (this.#n.length === 4) {
      const i = x.svgRound(this.#e[10]);
      const n = x.svgRound(this.#e[11]);
      this.#r = `${this.#r} L ${i} ${n}`;
      this.#o = 12;
      return this.#r;
    }
    const s = [];
    if (this.#o === 0) {
      s.push(`M ${t} ${e}`);
      this.#o = 6;
    }
    for (let i = this.#o, n = this.#e.length; i < n; i += 6) {
      const [r, a, o, l, h, c] = this.#e.slice(i, i + 6).map(x.svgRound);
      s.push(`C${r} ${a} ${o} ${l} ${h} ${c}`);
    }
    this.#r += s.join(" ");
    this.#o = this.#e.length;
    return this.#r;
  }
  getOutlines(t, e, s, i) {
    const n = this.#i.at(-1);
    n.line = new Float32Array(n.line);
    n.points = new Float32Array(n.points);
    this.#h.build(this.#i, t, e, s, this.#s, this.#a, i);
    this.#t = null;
    this.#e = null;
    this.#i = null;
    this.#r = null;
    return this.#h;
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: true
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
class ke extends x {
  #t;
  #e = 0;
  #i;
  #s;
  #a;
  #n;
  #r;
  #o;
  #h;
  build(t, e, s, i, n, r, a) {
    this.#a = e;
    this.#n = s;
    this.#r = i;
    this.#o = n;
    this.#h = r;
    this.#i = a ?? 0;
    this.#s = t;
    this.#d();
  }
  get thickness() {
    return this.#h;
  }
  setLastElement(t) {
    this.#s.push(t);
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    this.#s.pop();
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const t = [];
    for (const {
      line
    } of this.#s) {
      t.push(`M${x.svgRound(line[4])} ${x.svgRound(line[5])}`);
      if (line.length === 6) {
        t.push("Z");
        continue;
      }
      if (line.length === 12 && isNaN(line[6])) {
        t.push(`L${x.svgRound(line[10])} ${x.svgRound(line[11])}`);
        continue;
      }
      for (let s = 6, i = line.length; s < i; s += 6) {
        const [n, r, a, o, l, h] = line.subarray(s, s + 6).map(x.svgRound);
        t.push(`C${n} ${r} ${a} ${o} ${l} ${h}`);
      }
    }
    return t.join("");
  }
  serialize([t, e, s, i], n) {
    const lines = [];
    const a = [];
    const [o, l, h, c] = this.#u();
    let u;
    let f;
    let g;
    let p;
    let b;
    let m;
    let y;
    let A;
    let w;
    switch (this.#o) {
      case 0:
        w = x._rescale;
        u = t;
        f = e + i;
        g = s;
        p = -i;
        b = t + o * s;
        m = e + (1 - l - c) * i;
        y = t + (o + h) * s;
        A = e + (1 - l) * i;
        break;
      case 90:
        w = x._rescaleAndSwap;
        u = t;
        f = e;
        g = s;
        p = i;
        b = t + l * s;
        m = e + o * i;
        y = t + (l + c) * s;
        A = e + (o + h) * i;
        break;
      case 180:
        w = x._rescale;
        u = t + s;
        f = e;
        g = -s;
        p = i;
        b = t + (1 - o - h) * s;
        m = e + l * i;
        y = t + (1 - o) * s;
        A = e + (l + c) * i;
        break;
      case 270:
        w = x._rescaleAndSwap;
        u = t + s;
        f = e + i;
        g = -s;
        p = -i;
        b = t + (1 - l - c) * s;
        m = e + (1 - o - h) * i;
        y = t + (1 - l) * s;
        A = e + (1 - o) * i;
        break;
    }
    for (const {
      line,
      points
    } of this.#s) {
      lines.push(w(line, u, f, g, p, n ? new Array(line.length) : null));
      a.push(w(points, u, f, g, p, n ? new Array(points.length) : null));
    }
    return {
      lines,
      points: a,
      rect: [b, m, y, A]
    };
  }
  static deserialize(t, e, s, i, n, {
    paths: {
      lines,
      points
    },
    rotation,
    thickness
  }) {
    const h = [];
    let c;
    let u;
    let f;
    let g;
    let p;
    switch (rotation) {
      case 0:
        p = x._rescale;
        c = -t / s;
        u = e / i + 1;
        f = 1 / s;
        g = -1 / i;
        break;
      case 90:
        p = x._rescaleAndSwap;
        c = -e / i;
        u = -t / s;
        f = 1 / i;
        g = 1 / s;
        break;
      case 180:
        p = x._rescale;
        c = t / s + 1;
        u = -e / i;
        f = -1 / s;
        g = 1 / i;
        break;
      case 270:
        p = x._rescaleAndSwap;
        c = e / i + 1;
        u = t / s + 1;
        f = -1 / i;
        g = -1 / s;
        break;
    }
    if (!lines) {
      lines = [];
      for (const m of points) {
        const y = m.length;
        if (y === 2) {
          lines.push(new Float32Array([NaN, NaN, NaN, NaN, m[0], m[1]]));
          continue;
        }
        if (y === 4) {
          lines.push(new Float32Array([NaN, NaN, NaN, NaN, m[0], m[1], NaN, NaN, NaN, NaN, m[2], m[3]]));
          continue;
        }
        const A = new Float32Array(3 * (y - 2));
        lines.push(A);
        let [w, v, _, S] = m.subarray(0, 4);
        A.set([NaN, NaN, NaN, NaN, w, v], 0);
        for (let E = 4; E < y; E += 2) {
          const C = m[E];
          const k = m[E + 1];
          A.set(x.createBezierPoints(w, v, _, S, C, k), (E - 2) * 3);
          [w, v, _, S] = [_, S, C, k];
        }
      }
    }
    for (let m = 0, y = lines.length; m < y; m++) {
      h.push({
        line: p(lines[m].map(A => A ?? NaN), c, u, f, g),
        points: p(points[m].map(A => A ?? NaN), c, u, f, g)
      });
    }
    const b = new this.prototype.constructor();
    b.build(h, s, i, 1, rotation, thickness, n);
    return b;
  }
  #l(t = this.#h) {
    const e = this.#i + t / 2 * this.#r;
    if (this.#o % 180 === 0) {
      return [e / this.#a, e / this.#n];
    }
    return [e / this.#n, e / this.#a];
  }
  #u() {
    const [t, e, s, i] = this.#t;
    const [n, r] = this.#l(0);
    return [t + n, e + r, s - 2 * n, i - 2 * r];
  }
  #d() {
    const t = this.#t = new Float32Array([Infinity, Infinity, -Infinity, -Infinity]);
    for (const {
      line
    } of this.#s) {
      if (line.length <= 12) {
        for (let a = 4, o = line.length; a < o; a += 6) {
          Util.pointBoundingBox(line[a], line[a + 1], t);
        }
        continue;
      }
      let n = line[4];
      let r = line[5];
      for (let a = 6, o = line.length; a < o; a += 6) {
        const [l, h, c, u, f, g] = line.subarray(a, a + 6);
        Util.bezierBoundingBox(n, r, l, h, c, u, f, g, t);
        n = f;
        r = g;
      }
    }
    const [e, s] = this.#l();
    t[0] = MathClamp(t[0] - e, 0, 1);
    t[1] = MathClamp(t[1] - s, 0, 1);
    t[2] = MathClamp(t[2] + e, 0, 1);
    t[3] = MathClamp(t[3] + s, 0, 1);
    t[2] -= t[0];
    t[3] -= t[1];
  }
  get box() {
    return this.#t;
  }
  updateProperty(t, e) {
    if (t === "stroke-width") {
      return this.#f(e);
    }
    return null;
  }
  #f(t) {
    const [e, s] = this.#l();
    this.#h = t;
    const [i, n] = this.#l();
    const [r, a] = [i - e, n - s];
    const o = this.#t;
    o[0] -= r;
    o[1] -= a;
    o[2] += 2 * r;
    o[3] += 2 * a;
    return o;
  }
  updateParentDimensions([t, e], s) {
    const [i, n] = this.#l();
    this.#a = t;
    this.#n = e;
    this.#r = s;
    const [r, a] = this.#l();
    const o = r - i;
    const l = a - n;
    const h = this.#t;
    h[0] -= o;
    h[1] -= l;
    h[2] += 2 * o;
    h[3] += 2 * l;
    return h;
  }
  updateRotation(t) {
    this.#e = t;
    return {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return this.#t.map(x.svgRound).join(" ");
  }
  get defaultProperties() {
    const [t, e] = this.#t;
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${x.svgRound(t)} ${x.svgRound(e)}`
      }
    };
  }
  get rotationTransform() {
    const [,, t, e] = this.#t;
    let s = 0;
    let i = 0;
    let n = 0;
    let r = 0;
    let a = 0;
    let o = 0;
    switch (this.#e) {
      case 90:
        i = e / t;
        n = -t / e;
        a = t;
        break;
      case 180:
        s = -1;
        r = -1;
        a = t;
        o = e;
        break;
      case 270:
        i = -e / t;
        n = t / e;
        o = e;
        break;
      default:
        return "";
    }
    return `matrix(${s} ${i} ${n} ${r} ${x.svgRound(a)} ${x.svgRound(o)})`;
  }
  getPathResizingSVGProperties([t, e, s, i]) {
    const [n, r] = this.#l();
    const [a, o, l, h] = this.#t;
    if (Math.abs(l - n) <= x.PRECISION || Math.abs(h - r) <= x.PRECISION) {
      const p = t + s / 2 - (a + l / 2);
      const b = e + i / 2 - (o + h / 2);
      return {
        path: {
          "transform-origin": `${x.svgRound(t)} ${x.svgRound(e)}`,
          transform: `${this.rotationTransform} translate(${p} ${b})`
        }
      };
    }
    const c = (s - 2 * n) / (l - 2 * n);
    const u = (i - 2 * r) / (h - 2 * r);
    const f = l / s;
    const g = h / i;
    return {
      path: {
        "transform-origin": `${x.svgRound(a)} ${x.svgRound(o)}`,
        transform: `${this.rotationTransform} scale(${f} ${g}) translate(${x.svgRound(n)} ${x.svgRound(r)}) scale(${c} ${u}) translate(${x.svgRound(-n)} ${x.svgRound(-r)})`
      }
    };
  }
  getPathResizedSVGProperties([t, e, s, i]) {
    const [n, r] = this.#l();
    const a = this.#t;
    const [o, l, h, c] = a;
    a[0] = t;
    a[1] = e;
    a[2] = s;
    a[3] = i;
    if (Math.abs(h - n) <= x.PRECISION || Math.abs(c - r) <= x.PRECISION) {
      const b = t + s / 2 - (o + h / 2);
      const m = e + i / 2 - (l + c / 2);
      for (const {
        line,
        points
      } of this.#s) {
        x._translate(line, b, m, line);
        x._translate(points, b, m, points);
      }
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${x.svgRound(t)} ${x.svgRound(e)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const u = (s - 2 * n) / (h - 2 * n);
    const f = (i - 2 * r) / (c - 2 * r);
    const g = -u * (o + n) + t + n;
    const p = -f * (l + r) + e + r;
    if (u !== 1 || f !== 1 || g !== 0 || p !== 0) {
      for (const {
        line,
        points
      } of this.#s) {
        x._rescale(line, g, p, u, f, line);
        x._rescale(points, g, p, u, f, points);
      }
    }
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${x.svgRound(t)} ${x.svgRound(e)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([t, e], [i, n]) {
    const r = this.#t;
    const a = t - r[0];
    const o = e - r[1];
    if (this.#a === i && this.#n === n) {
      for (const {
        line,
        points
      } of this.#s) {
        x._translate(line, a, o, line);
        x._translate(points, a, o, points);
      }
    } else {
      const l = this.#a / i;
      const h = this.#n / n;
      this.#a = i;
      this.#n = n;
      for (const {
        line,
        points
      } of this.#s) {
        x._rescale(line, a, o, l, h, line);
        x._rescale(points, a, o, l, h, points);
      }
      r[2] *= l;
      r[3] *= h;
    }
    r[0] = t;
    r[1] = e;
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${x.svgRound(t)} ${x.svgRound(e)}`
      }
    };
  }
  get defaultSVGProperties() {
    const t = this.#t;
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: true
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${x.svgRound(t[0])} ${x.svgRound(t[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: t
    };
  }
}
class Ze extends Xi {
  constructor(t) {
    super();
    this._viewParameters = t;
    super.updateProperties({
      fill: "none",
      stroke: M._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t, e) {
    if (t === "stroke-width") {
      e ??= this["stroke-width"];
      e *= this._viewParameters.realScale;
    }
    super.updateSVGProperty(t, e);
  }
  clone() {
    const t = new Ze(this._viewParameters);
    t.updateAll(this);
    return t;
  }
}
class Os extends D {
  static _type = "ink";
  static _editorType = AnnotationEditorType.INK;
  static _defaultDrawingOptions = null;
  constructor(t) {
    super({
      ...t,
      name: "inkEditor"
    });
    this._willKeepAspectRatio = true;
    this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(t, e) {
    M.initialize(t, e);
    this._defaultDrawingOptions = new Ze(e.viewParameters);
  }
  static getDefaultDrawingOptions(t) {
    const e = this._defaultDrawingOptions.clone();
    e.updateProperties(t);
    return e;
  }
  static get supportMultipleDrawings() {
    return true;
  }
  static get typesMap() {
    return shadow(this, "typesMap", new Map([[AnnotationEditorParamsType.INK_THICKNESS, "stroke-width"], [AnnotationEditorParamsType.INK_COLOR, "stroke"], [AnnotationEditorParamsType.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(t, e, s, i, n) {
    return new qr(t, e, s, i, n, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(t, e, s, i, n, r) {
    return ke.deserialize(t, e, s, i, n, r);
  }
  static async deserialize(t, e, s) {
    let i = null;
    if (t instanceof Fs) {
      const {
        data: {
          inkLists,
          rect,
          rotation,
          id,
          color,
          opacity,
          borderStyle: {
            rawWidth
          },
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = t;
      i = t = {
        annotationType: AnnotationEditorType.INK,
        color: Array.from(color),
        thickness: rawWidth,
        opacity,
        paths: {
          points: inkLists
        },
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        popupRef,
        richText,
        comment: contentsObj?.str || null,
        creationDate,
        modificationDate
      };
    }
    const n = await super.deserialize(t, e, s);
    n._initialData = i;
    if (t.comment) {
      n.setCommentData(t);
    }
    return n;
  }
  get toolbarButtons() {
    this._colorPicker ||= new _e(this);
    return [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return AnnotationEditorParamsType.INK_COLOR;
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    super.onScaleChanging();
    const {
      _drawId,
      _drawingOptions,
      parent
    } = this;
    _drawingOptions.updateSVGProperty("stroke-width");
    parent.drawLayer.updateProperties(_drawId, _drawingOptions.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const _currentParent = this._currentParent;
    if (_currentParent) {
      super.onScaleChangingWhenDrawing();
      this._defaultDrawingOptions.updateSVGProperty("stroke-width");
      _currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
    }
  }
  createDrawingOptions({
    color,
    thickness,
    opacity
  }) {
    this._drawingOptions = Os.getDefaultDrawingOptions({
      stroke: Util.makeHexColor(...color),
      "stroke-width": thickness,
      "stroke-opacity": opacity
    });
  }
  serialize(t = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const {
      lines,
      points
    } = this.serializeDraw(t);
    const {
      _drawingOptions: {
        stroke,
        "stroke-opacity": stroke_opacity,
        "stroke-width": stroke_width
      }
    } = this;
    const a = Object.assign(super.serialize(t), {
      color: M._colorManager.convert(stroke),
      opacity: stroke_opacity,
      thickness: stroke_width,
      paths: {
        lines,
        points
      }
    });
    this.addComment(a);
    if (t) {
      a.isCopy = true;
      return a;
    }
    if (this.annotationElementId && !this.#t(a)) {
      return null;
    }
    a.id = this.annotationElementId;
    return a;
  }
  #t(t) {
    const {
      color,
      thickness,
      opacity,
      pageIndex
    } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t.color.some((r, a) => r !== color[a]) || t.thickness !== thickness || t.opacity !== opacity || t.pageIndex !== pageIndex;
  }
  renderAnnotationElement(t) {
    if (this.deleted) {
      t.hide();
      return null;
    }
    const {
      points,
      rect
    } = this.serializeDraw(false);
    t.updateEdited({
      rect,
      thickness: this._drawingOptions["stroke-width"],
      points,
      popup: this.comment
    });
    return null;
  }
}
class Ss extends ke {
  toSVGPath() {
    let t = super.toSVGPath();
    if (!t.endsWith("Z")) {
      t += "Z";
    }
    return t;
  }
}
const He = 8;
const ue = 3;
export class SignatureExtractor {
  static #t = {
    maxDim: 512,
    sigmaSFactor: 0.02,
    sigmaR: 25,
    kernelSize: 16
  };
  static #e(t, e, s, i) {
    s -= t;
    i -= e;
    switch (s) {
      case 0:
        if (i > 0) {
          return 0;
        }
        return 4;
      case 1:
        return i + 6;
      default:
        return 2 - i;
    }
  }
  static #i = new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]);
  static #s(t, e, s, i, n, r, a) {
    const o = this.#e(s, i, n, r);
    for (let l = 0; l < 8; l++) {
      const h = (-l + o - a + 16) % 8;
      const c = this.#i[2 * h];
      const u = this.#i[2 * h + 1];
      if (t[(s + c) * e + (i + u)] !== 0) {
        return h;
      }
    }
    return -1;
  }
  static #a(t, e, s, i, n, r, a) {
    const o = this.#e(s, i, n, r);
    for (let l = 0; l < 8; l++) {
      const h = (l + o + a + 16) % 8;
      const c = this.#i[2 * h];
      const u = this.#i[2 * h + 1];
      if (t[(s + c) * e + (i + u)] !== 0) {
        return h;
      }
    }
    return -1;
  }
  static #n(t, e, s, i) {
    const t_length = t.length;
    const r = new Int32Array(t_length);
    for (let h = 0; h < t_length; h++) {
      r[h] = t[h] <= i ? 1 : 0;
    }
    for (let h = 1; h < s - 1; h++) {
      r[h * e] = r[h * e + e - 1] = 0;
    }
    for (let h = 0; h < e; h++) {
      r[h] = r[e * s - 1 - h] = 0;
    }
    let a = 1;
    let o;
    const l = [];
    for (let h = 1; h < s - 1; h++) {
      o = 1;
      for (let c = 1; c < e - 1; c++) {
        const u = h * e + c;
        const f = r[u];
        if (f === 0) {
          continue;
        }
        let g = h;
        let p = c;
        if (f === 1 && r[u - 1] === 0) {
          a += 1;
          p -= 1;
        } else if (f >= 1 && r[u + 1] === 0) {
          a += 1;
          p += 1;
          if (f > 1) {
            o = f;
          }
        } else {
          if (f !== 1) {
            o = Math.abs(f);
          }
          continue;
        }
        const b = [c, h];
        const isHole = p === c + 1;
        const y = {
          isHole,
          points: b,
          id: a,
          parent: 0
        };
        l.push(y);
        let A;
        for (const T of l) {
          if (T.id === o) {
            A = T;
            break;
          }
        }
        if (A) {
          if (A.isHole) {
            y.parent = isHole ? A.parent : o;
          } else {
            y.parent = isHole ? o : A.parent;
          }
        } else {
          y.parent = isHole ? o : 0;
        }
        const w = this.#s(r, e, h, c, g, p, 0);
        if (w === -1) {
          r[u] = -a;
          if (r[u] !== 1) {
            o = Math.abs(r[u]);
          }
          continue;
        }
        let v = this.#i[2 * w];
        let _ = this.#i[2 * w + 1];
        const S = h + v;
        const E = c + _;
        g = S;
        p = E;
        let C = h;
        let k = c;
        while (true) {
          const T = this.#a(r, e, C, k, g, p, 1);
          v = this.#i[2 * T];
          _ = this.#i[2 * T + 1];
          const U = C + v;
          const $ = k + _;
          b.push($, U);
          const z = C * e + k;
          if (r[z + 1] === 0) {
            r[z] = -a;
          } else if (r[z] === 1) {
            r[z] = a;
          }
          if (U === h && $ === c && C === S && k === E) {
            if (r[u] !== 1) {
              o = Math.abs(r[u]);
            }
            break;
          } else {
            g = C;
            p = k;
            C = U;
            k = $;
          }
        }
      }
    }
    return l;
  }
  static #r(t, e, s, i) {
    if (s - e <= 4) {
      for (let S = e; S < s - 2; S += 2) {
        i.push(t[S], t[S + 1]);
      }
      return;
    }
    const n = t[e];
    const r = t[e + 1];
    const a = t[s - 4] - n;
    const o = t[s - 3] - r;
    const l = Math.hypot(a, o);
    const h = a / l;
    const c = o / l;
    const u = h * r - c * n;
    const f = o / a;
    const g = 1 / l;
    const p = Math.atan(f);
    const b = Math.cos(p);
    const m = Math.sin(p);
    const y = g * (Math.abs(b) + Math.abs(m));
    const A = g * (1 - y + y ** 2);
    const w = Math.max(Math.atan(Math.abs(m + b) * A), Math.atan(Math.abs(m - b) * A));
    let v = 0;
    let _ = e;
    for (let S = e + 2; S < s - 2; S += 2) {
      const E = Math.abs(u - h * t[S + 1] + c * t[S]);
      if (E > v) {
        _ = S;
        v = E;
      }
    }
    if (v > (l * w) ** 2) {
      this.#r(t, e, _ + 2, i);
      this.#r(t, _, s, i);
    } else {
      i.push(n, r);
    }
  }
  static #o(t) {
    const e = [];
    const t_length = t.length;
    this.#r(t, 0, t_length, e);
    e.push(t[t_length - 2], t[t_length - 1]);
    if (e.length <= 4) {
      return null;
    }
    return e;
  }
  static #h(t, e, s, i, n, r) {
    const a = new Float32Array(r ** 2);
    const o = -2 * i ** 2;
    const l = r >> 1;
    for (let p = 0; p < r; p++) {
      const b = (p - l) ** 2;
      for (let m = 0; m < r; m++) {
        a[p * r + m] = Math.exp((b + (m - l) ** 2) / o);
      }
    }
    const h = new Float32Array(256);
    const c = -2 * n ** 2;
    for (let p = 0; p < 256; p++) {
      h[p] = Math.exp(p ** 2 / c);
    }
    const t_length = t.length;
    const f = new Uint8Array(t_length);
    const g = new Uint32Array(256);
    for (let p = 0; p < s; p++) {
      for (let b = 0; b < e; b++) {
        const m = p * e + b;
        const y = t[m];
        let A = 0;
        let w = 0;
        for (let _ = 0; _ < r; _++) {
          const S = p + _ - l;
          if (!(S < 0 || S >= s)) {
            for (let E = 0; E < r; E++) {
              const C = b + E - l;
              if (C < 0 || C >= e) {
                continue;
              }
              const k = t[S * e + C];
              const T = a[_ * r + E] * h[Math.abs(k - y)];
              A += k * T;
              w += T;
            }
          }
        }
        const v = f[m] = Math.round(A / w);
        g[v]++;
      }
    }
    return [f, g];
  }
  static #l(t) {
    const e = new Uint32Array(256);
    for (const s of t) {
      e[s]++;
    }
    return e;
  }
  static #u(t) {
    const t_length = t.length;
    const s = new Uint8ClampedArray(t_length >> 2);
    let i = -Infinity;
    let n = Infinity;
    for (let a = 0, o = s.length; a < o; a++) {
      const l = s[a] = t[a << 2];
      i = Math.max(i, l);
      n = Math.min(n, l);
    }
    const r = 255 / (i - n);
    for (let a = 0, o = s.length; a < o; a++) {
      s[a] = (s[a] - n) * r;
    }
    return s;
  }
  static #d(t) {
    let e;
    let s = -Infinity;
    let i = -Infinity;
    const n = t.findIndex(o => o !== 0);
    let r = n;
    let a = n;
    for (e = n; e < 256; e++) {
      const o = t[e];
      if (o > s) {
        if (e - r > i) {
          i = e - r;
          a = e - 1;
        }
        s = o;
        r = e;
      }
    }
    for (e = a - 1; e >= 0 && !(t[e] > t[e + 1]); e--);
    return e;
  }
  static #f(t) {
    const e = t;
    const {
      width,
      height
    } = t;
    const {
      maxDim
    } = this.#t;
    let r = width;
    let a = height;
    if (width > maxDim || height > maxDim) {
      let u = width;
      let f = height;
      let g = Math.log2(Math.max(width, height) / maxDim);
      const p = Math.floor(g);
      g = g === p ? p - 1 : p;
      for (let m = 0; m < g; m++) {
        r = Math.ceil(u / 2);
        a = Math.ceil(f / 2);
        const y = new OffscreenCanvas(r, a);
        y.getContext("2d").drawImage(t, 0, 0, u, f, 0, 0, r, a);
        u = r;
        f = a;
        if (t !== e) {
          t.close();
        }
        t = y.transferToImageBitmap();
      }
      const b = Math.min(maxDim / r, maxDim / a);
      r = Math.round(r * b);
      a = Math.round(a * b);
    }
    const l = new OffscreenCanvas(r, a).getContext("2d", {
      willReadFrequently: true
    });
    l.fillStyle = "white";
    l.fillRect(0, 0, r, a);
    l.filter = "grayscale(1)";
    l.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, a);
    const data = l.getImageData(0, 0, r, a).data;
    return [this.#u(data), r, a];
  }
  static extractContoursFromText(t, {
    fontFamily,
    fontStyle,
    fontWeight
  }, n, r, a, o) {
    let l = new OffscreenCanvas(1, 1);
    let h = l.getContext("2d", {
      alpha: false
    });
    const c = 200;
    const u = h.font = `${fontStyle} ${fontWeight} ${c}px ${fontFamily}`;
    const {
      actualBoundingBoxLeft,
      actualBoundingBoxRight,
      actualBoundingBoxAscent,
      actualBoundingBoxDescent,
      fontBoundingBoxAscent,
      fontBoundingBoxDescent,
      width
    } = h.measureText(t);
    const w = 1.5;
    const v = Math.ceil(Math.max(Math.abs(actualBoundingBoxLeft) + Math.abs(actualBoundingBoxRight) || 0, width) * w);
    const _ = Math.ceil(Math.max(Math.abs(actualBoundingBoxAscent) + Math.abs(actualBoundingBoxDescent) || c, Math.abs(fontBoundingBoxAscent) + Math.abs(fontBoundingBoxDescent) || c) * w);
    l = new OffscreenCanvas(v, _);
    h = l.getContext("2d", {
      alpha: true,
      willReadFrequently: true
    });
    h.font = u;
    h.filter = "grayscale(1)";
    h.fillStyle = "white";
    h.fillRect(0, 0, v, _);
    h.fillStyle = "black";
    h.fillText(t, v * (w - 1) / 2, _ * (3 - w) / 2);
    const S = this.#u(h.getImageData(0, 0, v, _).data);
    const E = this.#l(S);
    const C = this.#d(E);
    const k = this.#n(S, v, _, C);
    return this.processDrawnLines({
      lines: {
        curves: k,
        width: v,
        height: _
      },
      pageWidth: n,
      pageHeight: r,
      rotation: a,
      innerMargin: o,
      mustSmooth: true,
      areContours: true
    });
  }
  static process(t, e, s, i, n) {
    const [r, a, o] = this.#f(t);
    const [l, h] = this.#h(r, a, o, Math.hypot(a, o) * this.#t.sigmaSFactor, this.#t.sigmaR, this.#t.kernelSize);
    const c = this.#d(h);
    const u = this.#n(l, a, o, c);
    return this.processDrawnLines({
      lines: {
        curves: u,
        width: a,
        height: o
      },
      pageWidth: e,
      pageHeight: s,
      rotation: i,
      innerMargin: n,
      mustSmooth: true,
      areContours: true
    });
  }
  static processDrawnLines({
    lines,
    pageWidth,
    pageHeight,
    rotation,
    innerMargin,
    mustSmooth,
    areContours
  }) {
    if (rotation % 180 !== 0) {
      [pageWidth, pageHeight] = [pageHeight, pageWidth];
    }
    const {
      curves,
      width,
      height
    } = lines;
    const c = lines.thickness ?? 0;
    const u = [];
    const f = Math.min(pageWidth / width, pageHeight / height);
    const g = f / pageWidth;
    const p = f / pageHeight;
    const newCurves = [];
    for (const {
      points
    } of curves) {
      const A = mustSmooth ? this.#o(points) : points;
      if (!A) {
        continue;
      }
      newCurves.push(A);
      const w = A.length;
      const v = new Float32Array(w);
      const _ = new Float32Array(3 * (w === 2 ? 2 : w - 2));
      u.push({
        line: _,
        points: v
      });
      if (w === 2) {
        v[0] = A[0] * g;
        v[1] = A[1] * p;
        _.set([NaN, NaN, NaN, NaN, v[0], v[1]], 0);
        continue;
      }
      let [S, E, C, k] = A;
      S *= g;
      E *= p;
      C *= g;
      k *= p;
      v.set([S, E, C, k], 0);
      _.set([NaN, NaN, NaN, NaN, S, E], 0);
      for (let T = 4; T < w; T += 2) {
        const U = v[T] = A[T] * g;
        const $ = v[T + 1] = A[T + 1] * p;
        _.set(x.createBezierPoints(S, E, C, k, U, $), (T - 2) * 3);
        [S, E, C, k] = [C, k, U, $];
      }
    }
    if (u.length === 0) {
      return null;
    }
    const outline = areContours ? new Ss() : new ke();
    outline.build(u, pageWidth, pageHeight, 1, rotation, areContours ? 0 : c, innerMargin);
    return {
      outline,
      newCurves,
      areContours,
      thickness: c,
      width,
      height
    };
  }
  static async compressSignature({
    outlines,
    areContours,
    thickness,
    width,
    height
  }) {
    let r = Infinity;
    let a = -Infinity;
    let o = 0;
    for (const A of outlines) {
      o += A.length;
      for (let w = 2, v = A.length; w < v; w++) {
        const _ = A[w] - A[w - 2];
        r = Math.min(r, _);
        a = Math.max(a, _);
      }
    }
    let l;
    if (r >= -128 && a <= 127) {
      l = Int8Array;
    } else if (r >= -32768 && a <= 32767) {
      l = Int16Array;
    } else {
      l = Int32Array;
    }
    const outlines_length = outlines.length;
    const c = He + ue * outlines_length;
    const u = new Uint32Array(c);
    let f = 0;
    u[f++] = c * Uint32Array.BYTES_PER_ELEMENT + (o - 2 * outlines_length) * l.BYTES_PER_ELEMENT;
    u[f++] = 0;
    u[f++] = width;
    u[f++] = height;
    u[f++] = areContours ? 0 : 1;
    u[f++] = Math.max(0, Math.floor(thickness ?? 0));
    u[f++] = outlines_length;
    u[f++] = l.BYTES_PER_ELEMENT;
    for (const A of outlines) {
      u[f++] = A.length - 2;
      u[f++] = A[0];
      u[f++] = A[1];
    }
    const g = new CompressionStream("deflate-raw");
    const p = g.writable.getWriter();
    await p.ready;
    p.write(u);
    const constructor = l.prototype.constructor;
    for (const A of outlines) {
      const w = new constructor(A.length - 2);
      for (let v = 2, _ = A.length; v < _; v++) {
        w[v - 2] = A[v] - A[v - 2];
      }
      p.write(w);
    }
    p.close();
    const m = await new Response(g.readable).arrayBuffer();
    const y = new Uint8Array(m);
    return wi(y);
  }
  static async decompressSignature(t) {
    try {
      const e = hn(t);
      const {
        readable,
        writable
      } = new DecompressionStream("deflate-raw");
      const n = writable.getWriter();
      await n.ready;
      n.write(e).then(async () => {
        await n.ready;
        await n.close();
      }).catch(() => {});
      let r = null;
      let a = 0;
      for await (const A of readable) {
        r ||= new Uint8Array(new Uint32Array(A.buffer, 0, 4)[0]);
        r.set(A, a);
        a += A.length;
      }
      const o = new Uint32Array(r.buffer, 0, r.length >> 2);
      const l = o[1];
      if (l !== 0) {
        throw new Error(`Invalid version: ${l}`);
      }
      const width = o[2];
      const c = o[3];
      const areContours = o[4] === 0;
      const thickness = o[5];
      const g = o[6];
      const p = o[7];
      const outlines = [];
      const m = (He + ue * g) * Uint32Array.BYTES_PER_ELEMENT;
      let y;
      switch (p) {
        case Int8Array.BYTES_PER_ELEMENT:
          y = new Int8Array(r.buffer, m);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          y = new Int16Array(r.buffer, m);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          y = new Int32Array(r.buffer, m);
          break;
      }
      a = 0;
      for (let A = 0; A < g; A++) {
        const w = o[ue * A + He];
        const v = new Float32Array(w + 2);
        outlines.push(v);
        for (let _ = 0; _ < ue - 1; _++) {
          v[_] = o[ue * A + He + _ + 1];
        }
        for (let _ = 0; _ < w; _++) {
          v[_ + 2] = v[_] + y[a++];
        }
      }
      return {
        areContours,
        thickness,
        outlines,
        width,
        height: c
      };
    } catch (error) {
      I(`decompressSignature: ${error}`);
      return null;
    }
  }
}
class Bs extends Xi {
  constructor() {
    super();
    super.updateProperties({
      fill: M._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new Bs();
    t.updateAll(this);
    return t;
  }
}
class Hs extends Ze {
  constructor(t) {
    super(t);
    super.updateProperties({
      stroke: M._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new Hs(this._viewParameters);
    t.updateAll(this);
    return t;
  }
}
class Tt extends D {
  #t = false;
  #e = null;
  #i = null;
  #s = null;
  static _type = "signature";
  static _editorType = AnnotationEditorType.SIGNATURE;
  static _defaultDrawingOptions = null;
  constructor(t) {
    super({
      ...t,
      mustBeCommitted: true,
      name: "signatureEditor"
    });
    this._willKeepAspectRatio = true;
    this.#i = t.signatureData || null;
    this.#e = null;
    this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(t, e) {
    M.initialize(t, e);
    this._defaultDrawingOptions = new Bs();
    this._defaultDrawnSignatureOptions = new Hs(e.viewParameters);
  }
  static getDefaultDrawingOptions(t) {
    const e = this._defaultDrawingOptions.clone();
    e.updateProperties(t);
    return e;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static get typesMap() {
    return shadow(this, "typesMap", new Map());
  }
  static get isDrawer() {
    return false;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!this.#e
    };
  }
  static computeTelemetryFinalData(t) {
    const e = t.get("hasDescription");
    return {
      hasAltText: e.get(true) ?? 0,
      hasNoAltText: e.get(false) ?? 0
    };
  }
  get isResizable() {
    return true;
  }
  onScaleChanging() {
    if (this._drawId !== null) {
      super.onScaleChanging();
    }
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let t;
    let e;
    const {
      _isCopy
    } = this;
    if (_isCopy) {
      this._isCopy = false;
      t = this.x;
      e = this.y;
    }
    super.render();
    if (this._drawId === null) {
      if (this.#i) {
        const {
          lines,
          mustSmooth,
          areContours,
          description,
          uuid,
          heightInPage
        } = this.#i;
        const {
          rawDims: {
            pageWidth,
            pageHeight
          },
          rotation
        } = this.parent.viewport;
        const f = SignatureExtractor.processDrawnLines({
          lines,
          pageWidth,
          pageHeight,
          rotation,
          innerMargin: Tt._INNER_MARGIN,
          mustSmooth,
          areContours
        });
        this.addSignature(f, heightInPage, description, uuid);
      } else {
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        }));
        this.div.hidden = true;
        this._uiManager.getSignature(this);
      }
    } else {
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: this.#e || ""
      }));
    }
    if (_isCopy) {
      this._isCopy = true;
      this._moveAfterPaste(t, e);
    }
    return this.div;
  }
  setUuid(t) {
    this.#s = t;
    this.addEditToolbar();
  }
  getUuid() {
    return this.#s;
  }
  get description() {
    return this.#e;
  }
  set description(description) {
    this.#e = description;
    if (this.div) {
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description
      }));
      super.addEditToolbar().then(e => {
        e?.updateEditSignatureButton(description);
      });
    }
  }
  getSignaturePreview() {
    const {
      newCurves,
      areContours,
      thickness,
      width,
      height
    } = this.#i;
    const r = Math.max(width, height);
    const a = SignatureExtractor.processDrawnLines({
      lines: {
        curves: newCurves.map(points => ({
          points
        })),
        thickness,
        width,
        height
      },
      pageWidth: r,
      pageHeight: r,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: false,
      areContours
    });
    return {
      areContours,
      outline: a.outline
    };
  }
  get toolbarButtons() {
    if (this._uiManager.signatureManager) {
      return [["editSignature", this._uiManager.signatureManager]];
    }
    return super.toolbarButtons;
  }
  addSignature(t, e, s, i) {
    const {
      x,
      y
    } = this;
    const {
      outline
    } = this.#i = t;
    this.#t = outline instanceof Ss;
    this.description = s;
    let drawingOptions;
    if (this.#t) {
      drawingOptions = Tt.getDefaultDrawingOptions();
    } else {
      drawingOptions = Tt._defaultDrawnSignatureOptions.clone();
      drawingOptions.updateProperties({
        "stroke-width": outline.thickness
      });
    }
    this._addOutlines({
      drawOutlines: outline,
      drawingOptions
    });
    const [, l] = this.pageDimensions;
    let h = e / l;
    h = h >= 1 ? 0.5 : h;
    this.width *= h / this.height;
    if (this.width >= 1) {
      h *= 0.9 / this.width;
      this.width = 0.9;
    }
    this.height = h;
    this.setDims();
    this.x = x;
    this.y = y;
    this.center();
    this._onResized();
    this.onScaleChanging();
    this.rotate();
    this._uiManager.addToAnnotationStorage(this);
    this.setUuid(i);
    this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!i,
        hasDescription: !!s
      }
    });
    this.div.hidden = false;
  }
  getFromImage(t) {
    const {
      rawDims: {
        pageWidth,
        pageHeight
      },
      rotation
    } = this.parent.viewport;
    return SignatureExtractor.process(t, pageWidth, pageHeight, rotation, Tt._INNER_MARGIN);
  }
  getFromText(t, e) {
    const {
      rawDims: {
        pageWidth,
        pageHeight
      },
      rotation
    } = this.parent.viewport;
    return SignatureExtractor.extractContoursFromText(t, e, pageWidth, pageHeight, rotation, Tt._INNER_MARGIN);
  }
  getDrawnSignature(lines) {
    const {
      rawDims: {
        pageWidth,
        pageHeight
      },
      rotation
    } = this.parent.viewport;
    return SignatureExtractor.processDrawnLines({
      lines,
      pageWidth,
      pageHeight,
      rotation,
      innerMargin: Tt._INNER_MARGIN,
      mustSmooth: false,
      areContours: false
    });
  }
  createDrawingOptions({
    areContours,
    thickness
  }) {
    if (areContours) {
      this._drawingOptions = Tt.getDefaultDrawingOptions();
    } else {
      this._drawingOptions = Tt._defaultDrawnSignatureOptions.clone();
      this._drawingOptions.updateProperties({
        "stroke-width": thickness
      });
    }
  }
  serialize(t = false) {
    if (this.isEmpty()) {
      return null;
    }
    const {
      lines,
      points
    } = this.serializeDraw(t);
    const {
      _drawingOptions: {
        "stroke-width": stroke_width
      }
    } = this;
    const n = Object.assign(super.serialize(t), {
      isSignature: true,
      areContours: this.#t,
      color: [0, 0, 0],
      thickness: this.#t ? 0 : stroke_width
    });
    this.addComment(n);
    if (t) {
      n.paths = {
        lines,
        points
      };
      n.uuid = this.#s;
      n.isCopy = true;
    } else {
      n.lines = lines;
    }
    if (this.#e) {
      n.accessibilityData = {
        type: "Figure",
        alt: this.#e
      };
    }
    return n;
  }
  static deserializeDraw(t, e, s, i, n, r) {
    if (r.areContours) {
      return Ss.deserialize(t, e, s, i, n, r);
    }
    return ke.deserialize(t, e, s, i, n, r);
  }
  static async deserialize(t, e, s) {
    const i = await super.deserialize(t, e, s);
    i.#t = t.areContours;
    i.description = t.accessibilityData?.alt || "";
    i.#s = t.uuid;
    return i;
  }
}
class Yr extends M {
  #t = null;
  #e = null;
  #i = null;
  #s = null;
  #a = null;
  #n = "";
  #r = null;
  #o = false;
  #h = null;
  #l = false;
  #u = false;
  static _type = "stamp";
  static _editorType = AnnotationEditorType.STAMP;
  constructor(t) {
    super({
      ...t,
      name: "stampEditor"
    });
    this.#s = t.bitmapUrl;
    this.#a = t.bitmapFile;
    this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(t, e) {
    M.initialize(t, e);
  }
  static isHandlingMimeForPasting(t) {
    return SupportedImageMimeTypes.includes(t);
  }
  static paste(t, e) {
    e.pasteEditor({
      mode: AnnotationEditorType.STAMP
    }, {
      bitmapFile: t.getAsFile()
    });
  }
  altTextFinish() {
    if (this._uiManager.useNewAltTextFlow) {
      this.div.hidden = false;
    }
    super.altTextFinish();
  }
  get telemetryFinalData() {
    return {
      type: "stamp",
      hasAltText: !!this.altTextData?.altText
    };
  }
  static computeTelemetryFinalData(t) {
    const e = t.get("hasAltText");
    return {
      hasAltText: e.get(true) ?? 0,
      hasNoAltText: e.get(false) ?? 0
    };
  }
  #d(t, e = false) {
    if (!t) {
      this.remove();
      return;
    }
    this.#t = t.bitmap;
    if (!e) {
      this.#e = t.id;
      this.#l = t.isSvg;
    }
    if (t.file) {
      this.#n = t.file.name;
    }
    this.#p();
  }
  #f() {
    this.#i = null;
    this._uiManager.enableWaiting(false);
    if (this.#r) {
      if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#t) {
        this.addEditToolbar().then(() => {
          this._editToolbar.hide();
          this._uiManager.editAltText(this, true);
        });
        return;
      }
      if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#t) {
        this._reportTelemetry({
          action: "pdfjs.image.image_added",
          data: {
            alt_text_modal: false,
            alt_text_type: "empty"
          }
        });
        try {
          this.mlGuessAltText();
        } catch {}
      }
      this.div.focus();
    }
  }
  async mlGuessAltText(t = null, e = true) {
    if (this.hasAltTextData()) {
      return null;
    }
    const {
      mlManager
    } = this._uiManager;
    if (!mlManager) {
      throw new Error("No ML.");
    }
    if (!(await mlManager.isEnabledFor("altText"))) {
      throw new Error("ML isn't enabled for alt text.");
    }
    const {
      data,
      width,
      height
    } = t || this.copyCanvas(null, null, true).imageData;
    const a = await mlManager.guess({
      name: "altText",
      request: {
        data,
        width,
        height,
        channels: data.length / (width * height)
      }
    });
    if (!a) {
      throw new Error("No response from the AI service.");
    }
    if (a.error) {
      throw new Error("Error from the AI service.");
    }
    if (a.cancel) {
      return null;
    }
    if (!a.output) {
      throw new Error("No valid response from the AI service.");
    }
    const a_output = a.output;
    await this.setGuessedAltText(a_output);
    if (e && !this.hasAltTextData()) {
      this.altTextData = {
        alt: a_output,
        decorative: false
      };
    }
    return a_output;
  }
  #m() {
    if (this.#e) {
      this._uiManager.enableWaiting(true);
      this._uiManager.imageManager.getFromId(this.#e).then(s => this.#d(s, true)).finally(() => this.#f());
      return;
    }
    if (this.#s) {
      const s = this.#s;
      this.#s = null;
      this._uiManager.enableWaiting(true);
      this.#i = this._uiManager.imageManager.getFromUrl(s).then(i => this.#d(i)).finally(() => this.#f());
      return;
    }
    if (this.#a) {
      const s = this.#a;
      this.#a = null;
      this._uiManager.enableWaiting(true);
      this.#i = this._uiManager.imageManager.getFromFile(s).then(i => this.#d(i)).finally(() => this.#f());
      return;
    }
    const t = document.createElement("input");
    t.type = "file";
    t.accept = SupportedImageMimeTypes.join(",");
    const _signal = this._uiManager._signal;
    this.#i = new Promise(resolve => {
      t.addEventListener("change", async () => {
        if (!t.files || t.files.length === 0) {
          this.remove();
        } else {
          this._uiManager.enableWaiting(true);
          const i = await this._uiManager.imageManager.getFromFile(t.files[0]);
          this._reportTelemetry({
            action: "pdfjs.image.image_selected",
            data: {
              alt_text_modal: this._uiManager.useNewAltTextFlow
            }
          });
          this.#d(i);
        }
        resolve();
      }, {
        signal: _signal
      });
      t.addEventListener("cancel", () => {
        this.remove();
        resolve();
      }, {
        signal: _signal
      });
    }).finally(() => this.#f());
    t.click();
  }
  remove() {
    if (this.#e) {
      this.#t = null;
      this._uiManager.imageManager.deleteId(this.#e);
      this.#r?.remove();
      this.#r = null;
      if (this.#h) {
        clearTimeout(this.#h);
        this.#h = null;
      }
    }
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      if (this.#e) {
        this.#m();
      }
      return;
    }
    super.rebuild();
    this.div !== null && (this.#e && this.#r === null && this.#m(), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(t) {
    this._isDraggable = true;
    if (t) {
      this.div.focus();
    }
  }
  isEmpty() {
    return !(this.#i || this.#t || this.#s || this.#a || this.#e || this.#o);
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return true;
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let t;
    let e;
    if (this._isCopy) {
      t = this.x;
      e = this.y;
    }
    super.render();
    this.div.hidden = true;
    this.createAltText();
    this.#o || (this.#t ? this.#p() : this.#m());
    if (this._isCopy) {
      this._moveAfterPaste(t, e);
    }
    this._uiManager.addShouldRescale(this);
    return this.div;
  }
  setCanvas(t, e) {
    const {
      id,
      bitmap
    } = this._uiManager.imageManager.getFromCanvas(t, e);
    e.remove();
    if (id && this._uiManager.imageManager.isValidId(id)) {
      this.#e = id;
      if (bitmap) {
        this.#t = bitmap;
      }
      this.#o = false;
      this.#p();
    }
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    if (this.#h !== null) {
      clearTimeout(this.#h);
    }
    const t = 200;
    this.#h = setTimeout(() => {
      this.#h = null;
      this.#g();
    }, t);
  }
  #p() {
    const {
      div
    } = this;
    let {
      width,
      height
    } = this.#t;
    const [i, n] = this.pageDimensions;
    const r = 0.75;
    if (this.width) {
      width = this.width * i;
      height = this.height * n;
    } else if (width > r * i || height > r * n) {
      const o = Math.min(r * i / width, r * n / height);
      width *= o;
      height *= o;
    }
    this._uiManager.enableWaiting(false);
    const a = this.#r = document.createElement("canvas");
    a.setAttribute("role", "img");
    this.addContainer(a);
    this.width = width / i;
    this.height = height / n;
    this.setDims();
    if (this._initialOptions?.isCentered) {
      this.center();
    } else {
      this.fixAndSetPosition();
    }
    this._initialOptions = null;
    if (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) {
      div.hidden = false;
    }
    this.#g();
    if (!this.#u) {
      this.parent.addUndoableEditor(this);
      this.#u = true;
    }
    this._reportTelemetry({
      action: "inserted_image"
    });
    if (this.#n) {
      this.div.setAttribute("aria-description", this.#n);
    }
    if (!this.annotationElementId) {
      this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
    }
  }
  copyCanvas(t, e, s = false) {
    if (!t) {
      t = 224;
    }
    const {
      width,
      height
    } = this.#t;
    const r = new OutputScale();
    let a = this.#t;
    let o = width;
    let l = height;
    let h = null;
    if (e) {
      if (width > e || height > e) {
        const _ = Math.min(e / width, e / height);
        o = Math.floor(width * _);
        l = Math.floor(height * _);
      }
      h = document.createElement("canvas");
      const u = h.width = Math.ceil(o * r.sx);
      const f = h.height = Math.ceil(l * r.sy);
      if (!this.#l) {
        a = this.#c(u, f);
      }
      const g = h.getContext("2d");
      g.filter = this._uiManager.hcmFilter;
      let p = "white";
      let b = "#cfcfd8";
      if (this._uiManager.hcmFilter !== "none") {
        b = "black";
      } else if (gn.isDarkMode) {
        p = "#8f8f9d";
        b = "#42414d";
      }
      const m = 15;
      const y = m * r.sx;
      const A = m * r.sy;
      const w = new OffscreenCanvas(y * 2, A * 2);
      const v = w.getContext("2d");
      v.fillStyle = p;
      v.fillRect(0, 0, y * 2, A * 2);
      v.fillStyle = b;
      v.fillRect(0, 0, y, A);
      v.fillRect(y, A, y, A);
      g.fillStyle = g.createPattern(w, "repeat");
      g.fillRect(0, 0, u, f);
      g.drawImage(a, 0, 0, a.width, a.height, 0, 0, u, f);
    }
    let imageData = null;
    if (s) {
      let u;
      let f;
      if (r.symmetric && a.width < t && a.height < t) {
        u = a.width;
        f = a.height;
      } else {
        a = this.#t;
        if (width > t || height > t) {
          const b = Math.min(t / width, t / height);
          u = Math.floor(width * b);
          f = Math.floor(height * b);
          if (!this.#l) {
            a = this.#c(u, f);
          }
        }
      }
      const p = new OffscreenCanvas(u, f).getContext("2d", {
        willReadFrequently: true
      });
      p.drawImage(a, 0, 0, a.width, a.height, 0, 0, u, f);
      imageData = {
        width: u,
        height: f,
        data: p.getImageData(0, 0, u, f).data
      };
    }
    return {
      canvas: h,
      width: o,
      height: l,
      imageData
    };
  }
  #c(t, e) {
    const {
      width,
      height
    } = this.#t;
    let n = width;
    let r = height;
    let a = this.#t;
    while (n > 2 * t || r > 2 * e) {
      const o = n;
      const l = r;
      if (n > 2 * t) {
        n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2);
      }
      if (r > 2 * e) {
        r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2);
      }
      const h = new OffscreenCanvas(n, r);
      h.getContext("2d").drawImage(a, 0, 0, o, l, 0, 0, n, r);
      a = h.transferToImageBitmap();
    }
    return a;
  }
  #g() {
    const [t, e] = this.parentDimensions;
    const {
      width,
      height
    } = this;
    const n = new OutputScale();
    const r = Math.ceil(width * t * n.sx);
    const a = Math.ceil(height * e * n.sy);
    const o = this.#r;
    if (!o || o.width === r && o.height === a) {
      return;
    }
    o.width = r;
    o.height = a;
    const l = this.#l ? this.#t : this.#c(r, a);
    const h = o.getContext("2d");
    h.filter = this._uiManager.hcmFilter;
    h.drawImage(l, 0, 0, l.width, l.height, 0, 0, r, a);
  }
  #b(t) {
    if (t) {
      if (this.#l) {
        const i = this._uiManager.imageManager.getSvgUrl(this.#e);
        if (i) {
          return i;
        }
      }
      const e = document.createElement("canvas");
      ({
        width: e.width,
        height: e.height
      } = this.#t);
      e.getContext("2d").drawImage(this.#t, 0, 0);
      return e.toDataURL();
    }
    if (this.#l) {
      const [e, s] = this.pageDimensions;
      const i = Math.round(this.width * e * PixelsPerInch.PDF_TO_CSS_UNITS);
      const n = Math.round(this.height * s * PixelsPerInch.PDF_TO_CSS_UNITS);
      const r = new OffscreenCanvas(i, n);
      r.getContext("2d").drawImage(this.#t, 0, 0, this.#t.width, this.#t.height, 0, 0, i, n);
      return r.transferToImageBitmap();
    }
    return structuredClone(this.#t);
  }
  static async deserialize(t, e, s) {
    let i = null;
    let n = false;
    if (t instanceof Vi) {
      const {
        data: {
          rect: rect_1,
          rotation,
          id,
          structParent,
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        container,
        parent: {
          page: {
            pageNumber
          }
        },
        canvas
      } = t;
      let bitmapId_1;
      let bitmap_1;
      if (canvas) {
        delete t.canvas;
        ({
          id: bitmapId_1,
          bitmap: bitmap_1
        } = s.imageManager.getFromCanvas(container.id, canvas));
        canvas.remove();
      } else {
        n = true;
        t._hasNoCanvas = true;
      }
      const altText = (await e._structTree.getAriaAttributes(`${Es}${id}`))?.get("aria-label") || "";
      i = t = {
        annotationType: AnnotationEditorType.STAMP,
        bitmapId: bitmapId_1,
        bitmap: bitmap_1,
        pageIndex: pageNumber - 1,
        rect: rect_1.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        accessibilityData: {
          decorative: false,
          altText
        },
        isSvg: false,
        structParent,
        popupRef,
        richText,
        comment: contentsObj?.str || null,
        creationDate,
        modificationDate
      };
    }
    const r = await super.deserialize(t, e, s);
    const {
      rect,
      bitmap,
      bitmapUrl,
      bitmapId,
      isSvg,
      accessibilityData
    } = t;
    if (n) {
      s.addMissingCanvas(t.id, r);
      r.#o = true;
    } else if (bitmapId && s.imageManager.isValidId(bitmapId)) {
      r.#e = bitmapId;
      if (bitmap) {
        r.#t = bitmap;
      }
    } else {
      r.#s = bitmapUrl;
    }
    r.#l = isSvg;
    const [f, g] = r.pageDimensions;
    r.width = (rect[2] - rect[0]) / f;
    r.height = (rect[3] - rect[1]) / g;
    if (accessibilityData) {
      r.altTextData = accessibilityData;
    }
    r._initialData = i;
    if (t.comment) {
      r.setCommentData(t);
    }
    r.#u = !!i;
    return r;
  }
  serialize(t = false, e = null) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const serialized = Object.assign(super.serialize(t), {
      bitmapId: this.#e,
      isSvg: this.#l
    });
    this.addComment(serialized);
    if (t) {
      serialized.bitmapUrl = this.#b(true);
      serialized.accessibilityData = this.serializeAltText(true);
      serialized.isCopy = true;
      return serialized;
    }
    const {
      decorative,
      altText
    } = this.serializeAltText(false);
    if (!decorative && altText) {
      serialized.accessibilityData = {
        type: "Figure",
        alt: altText
      };
    }
    if (this.annotationElementId) {
      const a = this.#A(serialized);
      if (a.isSame) {
        return null;
      }
      if (a.isSameAltText) {
        delete serialized.accessibilityData;
      } else {
        serialized.accessibilityData.structParent = this._initialData.structParent ?? -1;
      }
      serialized.id = this.annotationElementId;
      delete serialized.bitmapId;
      return serialized;
    }
    if (e === null) {
      return serialized;
    }
    e.stamps ||= new Map();
    const area = this.#l ? (serialized.rect[2] - serialized.rect[0]) * (serialized.rect[3] - serialized.rect[1]) : null;
    if (!e.stamps.has(this.#e)) {
      e.stamps.set(this.#e, {
        area,
        serialized
      });
      serialized.bitmap = this.#b(false);
    } else if (this.#l) {
      const a = e.stamps.get(this.#e);
      if (area > a.area) {
        a.area = area;
        a.serialized.bitmap.close();
        a.serialized.bitmap = this.#b(false);
      }
    }
    return serialized;
  }
  #A(t) {
    const {
      pageIndex,
      accessibilityData: {
        altText
      }
    } = this._initialData;
    const i = t.pageIndex === pageIndex;
    const isSameAltText = (t.accessibilityData?.alt || "") === altText;
    return {
      isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && i && isSameAltText,
      isSameAltText
    };
  }
  renderAnnotationElement(t) {
    if (this.deleted) {
      t.hide();
      return null;
    }
    t.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
    return null;
  }
}
export class AnnotationEditorLayer {
  #t;
  #e = false;
  #i = null;
  #s = null;
  #a = null;
  #n = new Map();
  #r = false;
  #o = false;
  #h = false;
  #l = null;
  #u = null;
  #d = null;
  #f = null;
  #m = null;
  #p = -1;
  #c;
  static _initialized = false;
  static #g = new Map([it, Os, Yr, J, Tt].map(t => [t._editorType, t]));
  constructor({
    uiManager,
    pageIndex,
    div,
    structTreeLayer,
    accessibilityManager,
    annotationLayer,
    drawLayer,
    textLayer,
    viewport,
    l10n
  }) {
    const c = [...AnnotationEditorLayer.#g.values()];
    if (!AnnotationEditorLayer._initialized) {
      AnnotationEditorLayer._initialized = true;
      for (const u of c) {
        u.initialize(l10n, uiManager);
      }
    }
    uiManager.registerEditorTypes(c);
    this.#c = uiManager;
    this.pageIndex = pageIndex;
    this.div = div;
    this.#t = accessibilityManager;
    this.#i = annotationLayer;
    this.viewport = viewport;
    this.#d = textLayer;
    this.drawLayer = drawLayer;
    this._structTree = structTreeLayer;
    this.#c.addLayer(this);
  }
  get isEmpty() {
    return this.#n.size === 0;
  }
  get isInvisible() {
    return this.isEmpty && this.#c.getMode() === AnnotationEditorType.NONE;
  }
  updateToolbar(t) {
    this.#c.updateToolbar(t);
  }
  updateMode(t = this.#c.getMode()) {
    this.#w();
    switch (t) {
      case AnnotationEditorType.NONE:
        this.div.classList.toggle("nonEditing", true);
        this.disableTextSelection();
        this.togglePointerEvents(false);
        this.toggleAnnotationLayerPointerEvents(true);
        this.disableClick();
        return;
      case AnnotationEditorType.INK:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
        break;
      case AnnotationEditorType.HIGHLIGHT:
        this.enableTextSelection();
        this.togglePointerEvents(false);
        this.disableClick();
        break;
      default:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(false);
    const {
      classList
    } = this.div;
    classList.toggle("nonEditing", false);
    if (t === AnnotationEditorType.POPUP) {
      classList.toggle("commentEditing", true);
    } else {
      classList.toggle("commentEditing", false);
      for (const s of AnnotationEditorLayer.#g.values()) {
        classList.toggle(`${s._type}Editing`, t === s._editorType);
      }
    }
    this.div.hidden = false;
  }
  hasTextLayer(t) {
    return t === this.#d?.div;
  }
  setEditingState(t) {
    this.#c.setEditingState(t);
  }
  addCommands(t) {
    this.#c.addCommands(t);
  }
  cleanUndoStack(t) {
    this.#c.cleanUndoStack(t);
  }
  toggleDrawing(t = false) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = false) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = false) {
    this.#i?.div.classList.toggle("disabled", !t);
  }
  get #b() {
    if (this.#n.size !== 0) {
      return this.#n.values();
    }
    return this.#c.getEditors(this.pageIndex);
  }
  async enable() {
    this.#h = true;
    this.div.tabIndex = 0;
    this.togglePointerEvents(true);
    this.div.classList.toggle("nonEditing", false);
    this.#m?.abort();
    this.#m = null;
    const t = new Set();
    for (const s of this.#b) {
      s.enableEditing();
      s.show(true);
      if (s.annotationElementId) {
        this.#c.removeChangedExistingAnnotation(s);
        t.add(s.annotationElementId);
      }
    }
    const e = this.#i;
    if (e) {
      for (const s of e.getEditableAnnotations()) {
        s.hide();
        if (this.#c.isDeletedAnnotationElement(s.data.id) || t.has(s.data.id)) {
          continue;
        }
        const i = await this.deserialize(s);
        if (i) {
          this.addOrRebuild(i);
          i.enableEditing();
        }
      }
    }
    this.#h = false;
    this.#c._eventBus.dispatch("editorsrendered", {
      source: this,
      pageNumber: this.pageIndex + 1
    });
  }
  disable() {
    this.#o = true;
    this.div.tabIndex = -1;
    this.togglePointerEvents(false);
    this.div.classList.toggle("nonEditing", true);
    if (this.#d && !this.#m) {
      this.#m = new AbortController();
      const s = this.#c.combinedSignal(this.#m);
      this.#d.div.addEventListener("pointerdown", i => {
        const {
          clientX,
          clientY,
          timeStamp
        } = i;
        const l = this.#p;
        if (timeStamp - l > 500) {
          this.#p = timeStamp;
          return;
        }
        this.#p = -1;
        const {
          classList
        } = this.div;
        classList.toggle("getElements", true);
        const c = document.elementsFromPoint(clientX, clientY);
        classList.toggle("getElements", false);
        if (!this.div.contains(c[0])) {
          return;
        }
        let u;
        const f = new RegExp(`^${ye}[0-9]+$`);
        for (const p of c) {
          if (f.test(p.id)) {
            u = p.id;
            break;
          }
        }
        if (!u) {
          return;
        }
        const g = this.#n.get(u);
        if (g?.annotationElementId === null) {
          i.stopPropagation();
          i.preventDefault();
          g.dblclick(i);
        }
      }, {
        signal: s,
        capture: true
      });
    }
    const t = this.#i;
    if (t) {
      const s = new Map();
      const i = new Map();
      for (const r of this.#b) {
        r.disableEditing();
        if (!r.annotationElementId) {
          r.updateFakeAnnotationElement(t);
          continue;
        }
        if (r.serialize() !== null) {
          s.set(r.annotationElementId, r);
          continue;
        } else {
          i.set(r.annotationElementId, r);
        }
        this.getEditableAnnotation(r.annotationElementId)?.show();
        r.remove();
      }
      const n = t.getEditableAnnotations();
      for (const r of n) {
        const {
          id
        } = r.data;
        if (this.#c.isDeletedAnnotationElement(id)) {
          r.updateEdited({
            deleted: true
          });
          continue;
        }
        let o = i.get(id);
        if (o) {
          o.resetAnnotationElement(r);
          o.show(false);
          r.show();
          continue;
        }
        o = s.get(id);
        if (o) {
          this.#c.addChangedExistingAnnotation(o);
          if (o.renderAnnotationElement(r)) {
            o.show(false);
          }
        }
        r.show();
      }
    }
    this.#w();
    if (this.isEmpty) {
      this.div.hidden = true;
    }
    const {
      classList
    } = this.div;
    for (const s of AnnotationEditorLayer.#g.values()) {
      classList.remove(`${s._type}Editing`);
    }
    this.disableTextSelection();
    this.toggleAnnotationLayerPointerEvents(true);
    this.#o = false;
  }
  getEditableAnnotation(t) {
    return this.#i?.getEditableAnnotation(t) || null;
  }
  setActiveEditor(t) {
    if (this.#c.getActive() !== t) {
      this.#c.setActiveEditor(t);
    }
  }
  enableTextSelection() {
    this.div.tabIndex = -1;
    if (this.#d?.div && !this.#f) {
      this.#f = new AbortController();
      const t = this.#c.combinedSignal(this.#f);
      this.#d.div.addEventListener("pointerdown", this.#A.bind(this), {
        signal: t
      });
      this.#d.div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0;
    if (this.#d?.div && this.#f) {
      this.#f.abort();
      this.#f = null;
      this.#d.div.classList.remove("highlighting");
    }
  }
  #A(t) {
    this.#c.unselectAll();
    const {
      target
    } = t;
    if (target === this.#d.div || (target.getAttribute("role") === "img" || target.classList.contains("endOfContent")) && this.#d.div.contains(target)) {
      const {
        isMac
      } = FeatureTest.platform;
      if (t.button !== 0 || t.ctrlKey && isMac) {
        return;
      }
      this.#c.showAllEditors("highlight", true, true);
      this.#d.div.classList.add("free");
      this.toggleDrawing();
      J.startHighlighting(this, this.#c.direction === "ltr", {
        target: this.#d.div,
        x: t.x,
        y: t.y
      });
      this.#d.div.addEventListener("pointerup", () => {
        this.#d.div.classList.remove("free");
        this.toggleDrawing(true);
      }, {
        once: true,
        signal: this.#c._signal
      });
      t.preventDefault();
    }
  }
  enableClick() {
    if (this.#s) {
      return;
    }
    this.#s = new AbortController();
    const t = this.#c.combinedSignal(this.#s);
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, {
      signal: t
    });
    this.div.addEventListener("pointercancel", e, {
      signal: t
    });
  }
  disableClick() {
    this.#s?.abort();
    this.#s = null;
  }
  attach(t) {
    this.#n.set(t.id, t);
    const {
      annotationElementId
    } = t;
    if (annotationElementId && this.#c.isDeletedAnnotationElement(annotationElementId)) {
      this.#c.removeDeletedAnnotationElement(t);
    }
  }
  detach(t) {
    this.#n.delete(t.id);
    this.#t?.removePointerInTextLayer(t.contentDiv);
    if (!this.#o && t.annotationElementId) {
      this.#c.addDeletedAnnotationElement(t);
    }
  }
  remove(t) {
    this.detach(t);
    this.#c.removeEditor(t);
    t.div.remove();
    t.isAttachedToDOM = false;
  }
  changeParent(t) {
    if (t.parent !== this) {
      if (t.parent && t.annotationElementId) {
        this.#c.addDeletedAnnotationElement(t.annotationElementId);
        M.deleteAnnotationElement(t);
        t.annotationElementId = null;
      }
      this.attach(t);
      t.parent?.detach(t);
      t.setParent(this);
      if (t.div && t.isAttachedToDOM) {
        t.div.remove();
        this.div.append(t.div);
      }
    }
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      this.changeParent(t);
      this.#c.addEditor(t);
      this.attach(t);
      if (!t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e);
        t.isAttachedToDOM = true;
      }
      t.fixAndSetPosition();
      t.onceAdded(!this.#h);
      this.#c.addToAnnotationStorage(t);
      t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    if (!t.isAttachedToDOM) {
      return;
    }
    const {
      activeElement
    } = document;
    if (t.div.contains(activeElement) && !this.#a) {
      t._focusEventsAllowed = false;
      this.#a = setTimeout(() => {
        this.#a = null;
        if (t.div.contains(document.activeElement)) {
          t._focusEventsAllowed = true;
        } else {
          t.div.addEventListener("focusin", () => {
            t._focusEventsAllowed = true;
          }, {
            once: true,
            signal: this.#c._signal
          });
          activeElement.focus();
        }
      }, 0);
    }
    t._structTreeParentId = this.#t?.moveElementInDOM(this.div, t.div, t.contentDiv, true);
  }
  addOrRebuild(t) {
    if (t.needsToBeRebuilt()) {
      t.parent ||= this;
      t.rebuild();
      t.show();
    } else {
      this.add(t);
    }
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t);
    const s = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: false
    });
  }
  getEditorByUID(t) {
    for (const e of this.#n.values()) {
      if (e.uid === t) {
        return e;
      }
    }
    return null;
  }
  getNextId() {
    return this.#c.getId();
  }
  get #y() {
    return AnnotationEditorLayer.#g.get(this.#c.getMode());
  }
  combinedSignal(t) {
    return this.#c.combinedSignal(t);
  }
  #C(t) {
    const e = this.#y;
    if (e) {
      return new e.prototype.constructor(t);
    }
    return null;
  }
  canCreateNewEmptyEditor() {
    return this.#y?.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t);
    await this.#c.updateMode(t.mode);
    const {
      offsetX,
      offsetY
    } = this.#S();
    const n = this.getNextId();
    const r = this.#C({
      parent: this,
      id: n,
      x: offsetX,
      y: offsetY,
      uiManager: this.#c,
      isCentered: true,
      ...e
    });
    if (r) {
      this.add(r);
    }
  }
  async deserialize(t) {
    return (await AnnotationEditorLayer.#g.get(t.annotationType ?? t.annotationEditorType)?.deserialize(t, this, this.#c)) || null;
  }
  createAndAddNewEditor(t, isCentered, s = {}) {
    const i = this.getNextId();
    const n = this.#C({
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: this.#c,
      isCentered,
      ...s
    });
    if (n) {
      this.add(n);
    }
    return n;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  #S() {
    const {
      x,
      y,
      width,
      height
    } = this.boundingClientRect;
    const n = Math.max(0, x);
    const r = Math.max(0, y);
    const a = Math.min(window.innerWidth, x + width);
    const o = Math.min(window.innerHeight, y + height);
    const l = (n + a) / 2 - x;
    const h = (r + o) / 2 - y;
    const [c, u] = this.viewport.rotation % 180 === 0 ? [l, h] : [h, l];
    return {
      offsetX: c,
      offsetY: u
    };
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(this.#S(), true, t);
  }
  setSelected(t) {
    this.#c.setSelected(t);
  }
  toggleSelected(t) {
    this.#c.toggleSelected(t);
  }
  unselect(t) {
    this.#c.unselect(t);
  }
  pointerup(t) {
    const {
      isMac
    } = FeatureTest.platform;
    if (t.button !== 0 || t.ctrlKey && isMac || t.target !== this.div || !this.#r || (this.#r = false, this.#y?.isDrawer && this.#y.supportMultipleDrawings)) {
      return;
    }
    if (!this.#e) {
      this.#e = true;
      return;
    }
    const s = this.#c.getMode();
    if (s === AnnotationEditorType.STAMP || s === AnnotationEditorType.SIGNATURE) {
      this.#c.unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, false);
  }
  pointerdown(t) {
    if (this.#c.getMode() === AnnotationEditorType.HIGHLIGHT) {
      this.enableTextSelection();
    }
    if (this.#r) {
      this.#r = false;
      return;
    }
    const {
      isMac
    } = FeatureTest.platform;
    if (t.button !== 0 || t.ctrlKey && isMac || t.target !== this.div) {
      return;
    }
    this.#r = true;
    if (this.#y?.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = this.#c.getActive();
    this.#e = !s || s.isEmpty();
  }
  startDrawingSession(t) {
    this.div.focus({
      preventScroll: true
    });
    if (this.#l) {
      this.#y.startDrawing(this, this.#c, false, t);
      return;
    }
    this.#c.setCurrentDrawingSession(this);
    this.#l = new AbortController();
    const e = this.#c.combinedSignal(this.#l);
    this.div.addEventListener("blur", ({
      relatedTarget
    }) => {
      if (relatedTarget && !this.div.contains(relatedTarget)) {
        this.#u = null;
        this.commitOrRemove();
      }
    }, {
      signal: e
    });
    this.#y.startDrawing(this, this.#c, false, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement
      } = document;
      if (this.div.contains(activeElement)) {
        this.#u = activeElement;
      }
      return;
    }
    if (this.#u) {
      setTimeout(() => {
        this.#u?.focus();
        this.#u = null;
      }, 0);
    }
  }
  endDrawingSession(t = false) {
    if (this.#l) {
      this.#c.setCurrentDrawingSession(null);
      this.#l.abort();
      this.#l = null;
      this.#u = null;
      return this.#y.endDrawing(t);
    }
    return null;
  }
  findNewParent(t, e, s) {
    const i = this.#c.findParent(e, s);
    if (i === null || i === this) {
      return false;
    }
    i.changeParent(t);
    return true;
  }
  commitOrRemove() {
    if (this.#l) {
      this.endDrawingSession();
      return true;
    }
    return false;
  }
  onScaleChanging() {
    if (this.#l) {
      this.#y.onScaleChangingWhenDrawing(this);
    }
  }
  destroy() {
    this.commitOrRemove();
    if (this.#c.getActive()?.parent === this) {
      this.#c.commitOrRemove();
      this.#c.setActiveEditor(null);
    }
    if (this.#a) {
      clearTimeout(this.#a);
      this.#a = null;
    }
    for (const t of this.#n.values()) {
      this.#t?.removePointerInTextLayer(t.contentDiv);
      t.setParent(null);
      t.isAttachedToDOM = false;
      t.div.remove();
    }
    this.div = null;
    this.#n.clear();
    this.#c.removeLayer(this);
  }
  #w() {
    for (const t of this.#n.values()) {
      if (t.isEmpty()) {
        t.remove();
      }
    }
  }
  render({
    viewport
  }) {
    this.viewport = viewport;
    setLayerDimensions(this.div, viewport);
    for (const e of this.#c.getEditors(this.pageIndex)) {
      this.add(e);
      e.rebuild();
    }
    this.updateMode();
  }
  update({
    viewport
  }) {
    this.#c.commitOrRemove();
    this.#w();
    const rotation = this.viewport.rotation;
    const viewport_rotation = viewport.rotation;
    this.viewport = viewport;
    setLayerDimensions(this.div, {
      rotation: viewport_rotation
    });
    if (rotation !== viewport_rotation) {
      for (const i of this.#n.values()) {
        i.rotate(viewport_rotation);
      }
    }
  }
  get pageDimensions() {
    const {
      pageWidth,
      pageHeight
    } = this.viewport.rawDims;
    return [pageWidth, pageHeight];
  }
  get scale() {
    return this.#c.viewParameters.realScale;
  }
}
export class DrawLayer {
  #t = null;
  #e = new Map();
  #i = new Map();
  static #s = 0;
  constructor({
    pageIndex
  }) {
    this.pageIndex = pageIndex;
  }
  setParent(t) {
    if (!this.#t) {
      this.#t = t;
      return;
    }
    if (this.#t !== t) {
      if (this.#e.size > 0) {
        for (const e of this.#e.values()) {
          e.remove();
          t.append(e);
        }
      }
      this.#t = t;
    }
  }
  static get _svgFactory() {
    return shadow(this, "_svgFactory", new DOMSVGFactory());
  }
  static #a({
    style
  }, [e, s, i, n]) {
    style.top = `${100 * s}%`;
    style.left = `${100 * e}%`;
    style.width = `${100 * i}%`;
    style.height = `${100 * n}%`;
  }
  #n() {
    const t = DrawLayer._svgFactory.create(1, 1, true);
    this.#t.append(t);
    t.setAttribute("aria-hidden", true);
    return t;
  }
  #r(t, e) {
    const s = DrawLayer._svgFactory.createElement("clipPath");
    t.append(s);
    const i = `clip_${e}`;
    s.setAttribute("id", i);
    s.setAttribute("clipPathUnits", "objectBoundingBox");
    const n = DrawLayer._svgFactory.createElement("use");
    s.append(n);
    n.setAttribute("href", `#${e}`);
    n.classList.add("clip");
    return i;
  }
  #o(t, e) {
    for (const [s, i] of Object.entries(e)) {
      if (i === null) {
        t.removeAttribute(s);
      } else {
        t.setAttribute(s, i);
      }
    }
  }
  draw(t, e = false, s = false) {
    const i = DrawLayer.#s++;
    const n = this.#n();
    const r = DrawLayer._svgFactory.createElement("defs");
    n.append(r);
    const a = DrawLayer._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${i}`;
    a.setAttribute("id", o);
    a.setAttribute("vector-effect", "non-scaling-stroke");
    if (e) {
      this.#i.set(i, a);
    }
    const l = s ? this.#r(r, o) : null;
    const h = DrawLayer._svgFactory.createElement("use");
    n.append(h);
    h.setAttribute("href", `#${o}`);
    this.updateProperties(n, t);
    this.#e.set(i, n);
    return {
      id: i,
      clipPathId: `url(#${l})`
    };
  }
  drawOutline(t, e) {
    const s = DrawLayer.#s++;
    const i = this.#n();
    const n = DrawLayer._svgFactory.createElement("defs");
    i.append(n);
    const r = DrawLayer._svgFactory.createElement("path");
    n.append(r);
    const a = `path_p${this.pageIndex}_${s}`;
    r.setAttribute("id", a);
    r.setAttribute("vector-effect", "non-scaling-stroke");
    let o;
    if (e) {
      const c = DrawLayer._svgFactory.createElement("mask");
      n.append(c);
      o = `mask_p${this.pageIndex}_${s}`;
      c.setAttribute("id", o);
      c.setAttribute("maskUnits", "objectBoundingBox");
      const u = DrawLayer._svgFactory.createElement("rect");
      c.append(u);
      u.setAttribute("width", "1");
      u.setAttribute("height", "1");
      u.setAttribute("fill", "white");
      const f = DrawLayer._svgFactory.createElement("use");
      c.append(f);
      f.setAttribute("href", `#${a}`);
      f.setAttribute("stroke", "none");
      f.setAttribute("fill", "black");
      f.setAttribute("fill-rule", "nonzero");
      f.classList.add("mask");
    }
    const l = DrawLayer._svgFactory.createElement("use");
    i.append(l);
    l.setAttribute("href", `#${a}`);
    if (o) {
      l.setAttribute("mask", `url(#${o})`);
    }
    const h = l.cloneNode();
    i.append(h);
    l.classList.add("mainOutline");
    h.classList.add("secondaryOutline");
    this.updateProperties(i, t);
    this.#e.set(s, i);
    return s;
  }
  finalizeDraw(t, e) {
    this.#i.delete(t);
    this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    if (!e) {
      return;
    }
    const {
      root,
      bbox,
      rootClass,
      path
    } = e;
    const a = typeof t === "number" ? this.#e.get(t) : t;
    if (a) {
      if (root) {
        this.#o(a, root);
      }
      if (bbox) {
        DrawLayer.#a(a, bbox);
      }
      if (rootClass) {
        const {
          classList
        } = a;
        for (const [l, h] of Object.entries(rootClass)) {
          classList.toggle(l, h);
        }
      }
      if (path) {
        const l = a.firstChild.firstChild;
        this.#o(l, path);
      }
    }
  }
  updateParent(t, e) {
    if (e === this) {
      return;
    }
    const s = this.#e.get(t);
    if (s) {
      e.#t.append(s);
      this.#e.delete(t);
      e.#e.set(t, s);
    }
  }
  remove(t) {
    this.#i.delete(t);
    if (this.#t !== null) {
      this.#e.get(t).remove();
      this.#e.delete(t);
    }
  }
  destroy() {
    this.#t = null;
    for (const t of this.#e.values()) {
      t.remove();
    }
    this.#e.clear();
    this.#i.clear();
  }
}
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: vs
};
globalThis.pdfjsLib = {
  AbortException,
  AnnotationEditorLayer,
  AnnotationEditorParamsType,
  AnnotationEditorType,
  AnnotationEditorUIManager,
  AnnotationLayer,
  AnnotationMode,
  AnnotationType,
  applyOpacity,
  build,
  ColorPicker,
  createValidAbsoluteUrl,
  CSSConstants,
  DOMSVGFactory,
  DrawLayer,
  FeatureTest,
  fetchData,
  findContrastColor,
  getDocument,
  getFilenameFromUrl,
  getPdfFilenameFromUrl,
  getRGB,
  getUuid,
  getXfaPageViewport,
  GlobalWorkerOptions,
  ImageKind,
  InvalidPDFException,
  isDataScheme,
  isPdfFile,
  isValidExplicitDest,
  MathClamp,
  noContextMenu,
  normalizeUnicode,
  OPS,
  OutputScale,
  PasswordResponses,
  PDFDataRangeTransport,
  PDFDateString,
  PDFWorker,
  PermissionFlag,
  PixelsPerInch,
  RenderingCancelledException,
  renderRichText,
  ResponseException,
  setLayerDimensions,
  shadow,
  SignatureExtractor,
  stopEvent,
  SupportedImageMimeTypes,
  TextLayer,
  TouchManager,
  updateUrlHash,
  Util,
  VerbosityLevel,
  version,
  XfaLayer
};
