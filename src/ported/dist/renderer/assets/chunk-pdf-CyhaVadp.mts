declare var AbortController: any;
declare var AbortSignal: any;
declare var Blob: any;
declare var Buffer: any;
declare var CompressionStream: any;
declare var DOMMatrix: any;
declare var DecompressionStream: any;
declare var Event: any;
declare var File: any;
declare var FileReader: any;
declare var FontFace: any;
declare var HTMLAnchorElement: any;
declare var HTMLButtonElement: any;
declare var HTMLCanvasElement: any;
declare var HTMLElement: any;
declare var HTMLInputElement: any;
declare var Headers: any;
declare var Image: any;
declare var ImageData: any;
declare var ImageDecoder: any;
declare var Node: any;
declare var OffscreenCanvas: any;
declare var Path2D: any;
declare var Range: any;
declare var ReadableStream: any;
declare var Response: any;
declare var TextDecoder: any;
declare var TextEncoder: any;
declare var URL: any;
declare var Worker: any;
declare var XMLHttpRequest: any;
declare var atob: any;
declare var btoa: any;
declare var clearTimeout: any;
declare var console: any;
declare var createImageBitmap: any;
declare var crypto: any;
declare var document: any;
declare var fetch: any;
declare var getComputedStyle: any;
declare var global: any;
declare var key: any;
declare var navigator: any;
declare var process: any;
declare var self: any;
declare var setTimeout: any;
declare var structuredClone: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "8dd44938-254e-45c0-9b88-c594254b7e4b", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-8dd44938-254e-45c0-9b88-c594254b7e4b");
  } catch (e: any) {}
} as any)();
var $s: any = (d: any): any => {
  throw (TypeError as any)(d);
};
var ss: any = (d: any, t: any, e: any): any => ((t as any).has as any)(d) || ($s as any)(("Cannot " as any) + (e as any));
var W: any = (d: any, t: any, e: any): any => ((ss as any)(d, t, "read from private field"), e ? ((e as any).call as any)(d) : ((t as any).get as any)(d)),
  St: any = (d: any, t: any, e: any): any => ((t as any).has as any)(d) ? ($s as any)("Cannot add the same private member more than once") : t instanceof WeakSet ? ((t as any).add as any)(d) : ((t as any).set as any)(d, e),
  ft: any = (d: any, t: any, e: any, s: any): any => ((ss as any)(d, t, "write to private field"), s ? ((s as any).call as any)(d, e) : ((t as any).set as any)(d, e), e),
  Et: any = (d: any, t: any, e: any): any => ((ss as any)(d, t, "access private method"), e);
var zs: any = (d: any, t: any, e: any, s: any): any => ({
  set _(i: any) {
    (ft as any)(d, t, i, e);
  },
  get _(): any {
    return (W as any)(d, t, s);
  }
});
const ct: any = (typeof process as any) == ("object" as any) && ((process as any) + ("" as any) as any) == ("[object process]" as any) && !((process as any).versions as any).nw && !(((process as any).versions as any).electron && (process as any).type && ((process as any).type as any) !== ("browser" as any)),
  ds: any = [.001, 0, 0, .001, 0, 0],
  is: number = 1.35,
  mt: any = {
    ANY: 1,
    DISPLAY: 2,
    PRINT: 4,
    ANNOTATIONS_FORMS: 16,
    ANNOTATIONS_STORAGE: 32,
    ANNOTATIONS_DISABLE: 64,
    IS_EDITING: 128,
    OPLIST: 256
  },
  Ot: any = {
    DISABLE: 0,
    ENABLE: 1,
    ENABLE_FORMS: 2,
    ENABLE_STORAGE: 3
  },
  ye: string = "pdfjs_internal_editor_",
  F: any = {
    DISABLE: -1,
    NONE: 0,
    FREETEXT: 3,
    HIGHLIGHT: 9,
    STAMP: 13,
    INK: 15,
    POPUP: 16,
    SIGNATURE: 101,
    COMMENT: 102
  },
  O: any = {
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
  },
  Ki: any = {
    PRINT: 4,
    MODIFY_CONTENTS: 8,
    COPY: 16,
    MODIFY_ANNOTATIONS: 32,
    FILL_INTERACTIVE_FORMS: 256,
    COPY_FOR_ACCESSIBILITY: 512,
    ASSEMBLE: 1024,
    PRINT_HIGH_QUALITY: 2048
  },
  nt: any = {
    FILL: 0,
    STROKE: 1,
    FILL_STROKE: 2,
    INVISIBLE: 3,
    FILL_STROKE_MASK: 3,
    ADD_TO_PATH_FLAG: 4
  },
  Ue: any = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3
  },
  et: any = {
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
  },
  Qt: any = {
    SOLID: 1,
    DASHED: 2,
    BEVELED: 3,
    INSET: 4,
    UNDERLINE: 5
  },
  Xe: any = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5
  },
  Ae: any = {
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
  },
  Me: any = {
    moveTo: 0,
    lineTo: 1,
    curveTo: 2,
    closePath: 3
  },
  Qi: any = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };
let qe: any = (Xe as any).WARNINGS;
function Ji(this: any, d: any): any {
  ((Number as any).isInteger as any)(d) && (qe = d);
}
function Zi(this: any): any {
  return qe;
}
function Ye(this: any, d: any): any {
  (qe as any) >= ((Xe as any).INFOS as any) && ((console as any).info as any)(`Info: ${d}`);
}
function I(this: any, d: any): any {
  (qe as any) >= ((Xe as any).WARNINGS as any) && ((console as any).warn as any)(`Warning: ${d}`);
}
function G(this: any, d: any): any {
  throw new (Error as any)(d);
}
function B(this: any, d: any, t: any): any {
  d || (G as any)(t);
}
function tn(this: any, d: any): any {
  switch (d?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function mi(this: any, d: any, t: any = null, e: any = null): any {
  if (!d) return null;
  if (e && (typeof d as any) == ("string" as any) && ((e as any).addDefaultProtocol && ((d as any).startsWith as any)("www.") && (((d as any).match as any)(/\./g)?.length as any) >= (2 as any) && (d = `http://${d}`), (e as any).tryConvertEncoding)) try {
    d = (an as any)(d);
  } catch {}
  const s: any = t ? ((URL as any).parse as any)(d, t) : ((URL as any).parse as any)(d);
  return (tn as any)(s) ? s : null;
}
function bi(this: any, d: any, t: any, e: any = !1): any {
  const s: any = ((URL as any).parse as any)(d);
  return s ? ((s as any).hash = t, (s as any).href) : e && (mi as any)(d, "http://example.com") ? ((((d as any).split as any)("#", 1) as any)[0] as any) + (`${t ? `#${t}` : ""}` as any) : "";
}
function N(this: any, d: any, t: any, e: any, s: any = !1): any {
  return ((Object as any).defineProperty as any)(d, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const qt: any = (function (this: any): any {
  function t(this: any, e: any, s: any): any {
    (this as any).message = e, (this as any).name = s;
  }
  return (t as any).prototype = new (Error as any)(), (t as any).constructor = t, t;
} as any)();
class js extends (qt as any) {
  declare code: any;
  [key: string]: any;
  constructor(t: any, e: any) {
    super(t, "PasswordException"), (this as any).code = e;
  }
}
class ns extends (qt as any) {
  declare details: any;
  [key: string]: any;
  constructor(t: any, e: any) {
    super(t, "UnknownErrorException"), (this as any).details = e;
  }
}
class us extends (qt as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, "InvalidPDFException");
  }
}
class je extends (qt as any) {
  declare missing: any;
  declare status: any;
  [key: string]: any;
  constructor(t: any, e: any, s: any) {
    super(t, "ResponseException"), (this as any).status = e, (this as any).missing = s;
  }
}
class en extends (qt as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, "FormatError");
  }
}
class Ht extends (qt as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, "AbortException");
  }
}
function yi(this: any, d: any): any {
  ((typeof d as any) != ("object" as any) || (d?.length as any) === (void 0 as any)) && (G as any)("Invalid argument for bytesToString");
  const t: any = (d as any).length,
    e: number = 8192;
  if ((t as any) < (e as any)) return (((String as any).fromCharCode as any).apply as any)(null, d);
  const s: any = [];
  for (let i: any = 0; (i as any) < (t as any); i += e) {
    const n: any = ((Math as any).min as any)((i as any) + (e as any), t),
      r: any = ((d as any).subarray as any)(i, n);
    ((s as any).push as any)((((String as any).fromCharCode as any).apply as any)(null, r));
  }
  return ((s as any).join as any)("");
}
function Se(this: any, d: any): any {
  (typeof d as any) != ("string" as any) && (G as any)("Invalid argument for stringToBytes");
  const t: any = (d as any).length,
    e: any = new (Uint8Array as any)(t);
  for (let s: any = 0; (s as any) < (t as any); ++s) (e as any)[s] = (((d as any).charCodeAt as any)(s) as any) & (255 as any);
  return e;
}
function sn(this: any, d: any): any {
  return ((String as any).fromCharCode as any)(((d as any) >> (24 as any) as any) & (255 as any), ((d as any) >> (16 as any) as any) & (255 as any), ((d as any) >> (8 as any) as any) & (255 as any), (d as any) & (255 as any));
}
function nn(this: any): any {
  const d: any = new (Uint8Array as any)(4);
  return (d as any)[0] = 1, ((new (Uint32Array as any)((d as any).buffer, 0, 1) as any)[0] as any) === (1 as any);
}
function rn(this: any): any {
  try {
    return new (Function as any)(""), !0;
  } catch {
    return !1;
  }
}
class ot {
  [key: string]: any;
  static get isLittleEndian(): any {
    return (N as any)(this, "isLittleEndian", (nn as any)());
  }
  static get isEvalSupported(): any {
    return (N as any)(this, "isEvalSupported", (rn as any)());
  }
  static get isOffscreenCanvasSupported(): any {
    return (N as any)(this, "isOffscreenCanvasSupported", (typeof OffscreenCanvas as any) < ("u" as any));
  }
  static get isImageDecoderSupported(): any {
    return (N as any)(this, "isImageDecoderSupported", (typeof ImageDecoder as any) < ("u" as any));
  }
  static get platform(): any {
    const {
      platform: t,
      userAgent: e
    }: any = navigator;
    return (N as any)(this, "platform", {
      isAndroid: ((e as any).includes as any)("Android"),
      isLinux: ((t as any).includes as any)("Linux"),
      isMac: ((t as any).includes as any)("Mac"),
      isWindows: ((t as any).includes as any)("Win"),
      isFirefox: ((e as any).includes as any)("Firefox")
    });
  }
  static get isCSSRoundSupported(): any {
    return (N as any)(this, "isCSSRoundSupported", (globalThis as any).CSS?.supports?.("width: round(1.5px, 1px)"));
  }
}
const rs: any = ((Array as any).from as any)((((Array as any)(256) as any).keys as any)(), (d: any): any => ((((d as any).toString as any)(16) as any).padStart as any)(2, "0"));
class P {
  [key: string]: any;
  static makeHexColor(t: any, e: any, s: any): any {
    return `#${(rs as any)[t]}${(rs as any)[e]}${(rs as any)[s]}`;
  }
  static domMatrixToTransform(t: any): any {
    return [(t as any).a, (t as any).b, (t as any).c, (t as any).d, (t as any).e, (t as any).f];
  }
  static scaleMinMax(t: any, e: any): any {
    let s: any;
    (t as any)[0] ? (((t as any)[0] as any) < (0 as any) && (s = (e as any)[0], (e as any)[0] = (e as any)[2], (e as any)[2] = s), (e as any)[0] *= (t as any)[0], (e as any)[2] *= (t as any)[0], ((t as any)[3] as any) < (0 as any) && (s = (e as any)[1], (e as any)[1] = (e as any)[3], (e as any)[3] = s), (e as any)[1] *= (t as any)[3], (e as any)[3] *= (t as any)[3]) : (s = (e as any)[0], (e as any)[0] = (e as any)[1], (e as any)[1] = s, s = (e as any)[2], (e as any)[2] = (e as any)[3], (e as any)[3] = s, ((t as any)[1] as any) < (0 as any) && (s = (e as any)[1], (e as any)[1] = (e as any)[3], (e as any)[3] = s), (e as any)[1] *= (t as any)[1], (e as any)[3] *= (t as any)[1], ((t as any)[2] as any) < (0 as any) && (s = (e as any)[0], (e as any)[0] = (e as any)[2], (e as any)[2] = s), (e as any)[0] *= (t as any)[2], (e as any)[2] *= (t as any)[2]), (e as any)[0] += (t as any)[4], (e as any)[1] += (t as any)[5], (e as any)[2] += (t as any)[4], (e as any)[3] += (t as any)[5];
  }
  static transform(t: any, e: any): any {
    return [(((t as any)[0] as any) * ((e as any)[0] as any) as any) + (((t as any)[2] as any) * ((e as any)[1] as any) as any), (((t as any)[1] as any) * ((e as any)[0] as any) as any) + (((t as any)[3] as any) * ((e as any)[1] as any) as any), (((t as any)[0] as any) * ((e as any)[2] as any) as any) + (((t as any)[2] as any) * ((e as any)[3] as any) as any), (((t as any)[1] as any) * ((e as any)[2] as any) as any) + (((t as any)[3] as any) * ((e as any)[3] as any) as any), ((((t as any)[0] as any) * ((e as any)[4] as any) as any) + (((t as any)[2] as any) * ((e as any)[5] as any) as any) as any) + ((t as any)[4] as any), ((((t as any)[1] as any) * ((e as any)[4] as any) as any) + (((t as any)[3] as any) * ((e as any)[5] as any) as any) as any) + ((t as any)[5] as any)];
  }
  static multiplyByDOMMatrix(t: any, e: any): any {
    return [(((t as any)[0] as any) * ((e as any).a as any) as any) + (((t as any)[2] as any) * ((e as any).b as any) as any), (((t as any)[1] as any) * ((e as any).a as any) as any) + (((t as any)[3] as any) * ((e as any).b as any) as any), (((t as any)[0] as any) * ((e as any).c as any) as any) + (((t as any)[2] as any) * ((e as any).d as any) as any), (((t as any)[1] as any) * ((e as any).c as any) as any) + (((t as any)[3] as any) * ((e as any).d as any) as any), ((((t as any)[0] as any) * ((e as any).e as any) as any) + (((t as any)[2] as any) * ((e as any).f as any) as any) as any) + ((t as any)[4] as any), ((((t as any)[1] as any) * ((e as any).e as any) as any) + (((t as any)[3] as any) * ((e as any).f as any) as any) as any) + ((t as any)[5] as any)];
  }
  static applyTransform(t: any, e: any, s: any = 0): any {
    const i: any = (t as any)[s],
      n: any = (t as any)[(s as any) + (1 as any)];
    (t as any)[s] = (((i as any) * ((e as any)[0] as any) as any) + ((n as any) * ((e as any)[2] as any) as any) as any) + ((e as any)[4] as any), (t as any)[(s as any) + (1 as any)] = (((i as any) * ((e as any)[1] as any) as any) + ((n as any) * ((e as any)[3] as any) as any) as any) + ((e as any)[5] as any);
  }
  static applyTransformToBezier(t: any, e: any, s: any = 0): any {
    const i: any = (e as any)[0],
      n: any = (e as any)[1],
      r: any = (e as any)[2],
      a: any = (e as any)[3],
      o: any = (e as any)[4],
      l: any = (e as any)[5];
    for (let h: any = 0; (h as any) < (6 as any); h += 2) {
      const c: any = (t as any)[(s as any) + (h as any)],
        u: any = (t as any)[((s as any) + (h as any) as any) + (1 as any)];
      (t as any)[(s as any) + (h as any)] = (((c as any) * (i as any) as any) + ((u as any) * (r as any) as any) as any) + (o as any), (t as any)[((s as any) + (h as any) as any) + (1 as any)] = (((c as any) * (n as any) as any) + ((u as any) * (a as any) as any) as any) + (l as any);
    }
  }
  static applyInverseTransform(t: any, e: any): any {
    const s: any = (t as any)[0],
      i: any = (t as any)[1],
      n: any = (((e as any)[0] as any) * ((e as any)[3] as any) as any) - (((e as any)[1] as any) * ((e as any)[2] as any) as any);
    (t as any)[0] = (((((s as any) * ((e as any)[3] as any) as any) - ((i as any) * ((e as any)[2] as any) as any) as any) + (((e as any)[2] as any) * ((e as any)[5] as any) as any) as any) - (((e as any)[4] as any) * ((e as any)[3] as any) as any) as any) / (n as any), (t as any)[1] = (((((-s as any) * ((e as any)[1] as any) as any) + ((i as any) * ((e as any)[0] as any) as any) as any) + (((e as any)[4] as any) * ((e as any)[1] as any) as any) as any) - (((e as any)[5] as any) * ((e as any)[0] as any) as any) as any) / (n as any);
  }
  static axialAlignedBoundingBox(t: any, e: any, s: any): any {
    const i: any = (e as any)[0],
      n: any = (e as any)[1],
      r: any = (e as any)[2],
      a: any = (e as any)[3],
      o: any = (e as any)[4],
      l: any = (e as any)[5],
      h: any = (t as any)[0],
      c: any = (t as any)[1],
      u: any = (t as any)[2],
      f: any = (t as any)[3];
    let g: any = ((i as any) * (h as any) as any) + (o as any),
      p: any = g,
      b: any = ((i as any) * (u as any) as any) + (o as any),
      m: any = b,
      y: any = ((a as any) * (c as any) as any) + (l as any),
      A: any = y,
      w: any = ((a as any) * (f as any) as any) + (l as any),
      v: any = w;
    if ((n as any) !== (0 as any) || (r as any) !== (0 as any)) {
      const _: any = (n as any) * (h as any),
        S: any = (n as any) * (u as any),
        E: any = (r as any) * (c as any),
        C: any = (r as any) * (f as any);
      g += E, m += E, b += C, p += C, y += _, v += _, w += S, A += S;
    }
    (s as any)[0] = ((Math as any).min as any)((s as any)[0], g, b, p, m), (s as any)[1] = ((Math as any).min as any)((s as any)[1], y, w, A, v), (s as any)[2] = ((Math as any).max as any)((s as any)[2], g, b, p, m), (s as any)[3] = ((Math as any).max as any)((s as any)[3], y, w, A, v);
  }
  static inverseTransform(t: any): any {
    const e: any = (((t as any)[0] as any) * ((t as any)[3] as any) as any) - (((t as any)[1] as any) * ((t as any)[2] as any) as any);
    return [((t as any)[3] as any) / (e as any), (-(t as any)[1] as any) / (e as any), (-(t as any)[2] as any) / (e as any), ((t as any)[0] as any) / (e as any), ((((t as any)[2] as any) * ((t as any)[5] as any) as any) - (((t as any)[4] as any) * ((t as any)[3] as any) as any) as any) / (e as any), ((((t as any)[4] as any) * ((t as any)[1] as any) as any) - (((t as any)[5] as any) * ((t as any)[0] as any) as any) as any) / (e as any)];
  }
  static singularValueDecompose2dScale(t: any, e: any): any {
    const s: any = (t as any)[0],
      i: any = (t as any)[1],
      n: any = (t as any)[2],
      r: any = (t as any)[3],
      a: any = ((s as any) ** (2 as any) as any) + ((i as any) ** (2 as any) as any),
      o: any = ((s as any) * (n as any) as any) + ((i as any) * (r as any) as any),
      l: any = ((n as any) ** (2 as any) as any) + ((r as any) ** (2 as any) as any),
      h: any = ((a as any) + (l as any) as any) / (2 as any),
      c: any = ((Math as any).sqrt as any)(((h as any) ** (2 as any) as any) - (((a as any) * (l as any) as any) - ((o as any) ** (2 as any) as any) as any));
    (e as any)[0] = ((Math as any).sqrt as any)((h as any) + (c as any) || 1), (e as any)[1] = ((Math as any).sqrt as any)((h as any) - (c as any) || 1);
  }
  static normalizeRect(t: any): any {
    const e: any = ((t as any).slice as any)(0);
    return ((t as any)[0] as any) > ((t as any)[2] as any) && ((e as any)[0] = (t as any)[2], (e as any)[2] = (t as any)[0]), ((t as any)[1] as any) > ((t as any)[3] as any) && ((e as any)[1] = (t as any)[3], (e as any)[3] = (t as any)[1]), e;
  }
  static intersect(t: any, e: any): any {
    const s: any = ((Math as any).max as any)(((Math as any).min as any)((t as any)[0], (t as any)[2]), ((Math as any).min as any)((e as any)[0], (e as any)[2])),
      i: any = ((Math as any).min as any)(((Math as any).max as any)((t as any)[0], (t as any)[2]), ((Math as any).max as any)((e as any)[0], (e as any)[2]));
    if ((s as any) > (i as any)) return null;
    const n: any = ((Math as any).max as any)(((Math as any).min as any)((t as any)[1], (t as any)[3]), ((Math as any).min as any)((e as any)[1], (e as any)[3])),
      r: any = ((Math as any).min as any)(((Math as any).max as any)((t as any)[1], (t as any)[3]), ((Math as any).max as any)((e as any)[1], (e as any)[3]));
    return (n as any) > (r as any) ? null : [s, n, i, r];
  }
  static pointBoundingBox(t: any, e: any, s: any): any {
    (s as any)[0] = ((Math as any).min as any)((s as any)[0], t), (s as any)[1] = ((Math as any).min as any)((s as any)[1], e), (s as any)[2] = ((Math as any).max as any)((s as any)[2], t), (s as any)[3] = ((Math as any).max as any)((s as any)[3], e);
  }
  static rectBoundingBox(t: any, e: any, s: any, i: any, n: any): any {
    (n as any)[0] = ((Math as any).min as any)((n as any)[0], t, s), (n as any)[1] = ((Math as any).min as any)((n as any)[1], e, i), (n as any)[2] = ((Math as any).max as any)((n as any)[2], t, s), (n as any)[3] = ((Math as any).max as any)((n as any)[3], e, i);
  }
  static #t(t: any, e: any, s: any, i: any, n: any, r: any, a: any, o: any, l: any, h: any): any {
    if ((l as any) <= (0 as any) || (l as any) >= (1 as any)) return;
    const c: any = (1 as any) - (l as any),
      u: any = (l as any) * (l as any),
      f: any = (u as any) * (l as any),
      g: any = ((c as any) * (((c as any) * (((c as any) * (t as any) as any) + (((3 as any) * (l as any) as any) * (e as any) as any) as any) as any) + (((3 as any) * (u as any) as any) * (s as any) as any) as any) as any) + ((f as any) * (i as any) as any),
      p: any = ((c as any) * (((c as any) * (((c as any) * (n as any) as any) + (((3 as any) * (l as any) as any) * (r as any) as any) as any) as any) + (((3 as any) * (u as any) as any) * (a as any) as any) as any) as any) + ((f as any) * (o as any) as any);
    (h as any)[0] = ((Math as any).min as any)((h as any)[0], g), (h as any)[1] = ((Math as any).min as any)((h as any)[1], p), (h as any)[2] = ((Math as any).max as any)((h as any)[2], g), (h as any)[3] = ((Math as any).max as any)((h as any)[3], p);
  }
  static #e(t: any, e: any, s: any, i: any, n: any, r: any, a: any, o: any, l: any, h: any, c: any, u: any): any {
    if ((((Math as any).abs as any)(l) as any) < (1e-12 as any)) {
      (((Math as any).abs as any)(h) as any) >= (1e-12 as any) && (this.#t as any)(t, e, s, i, n, r, a, o, (-c as any) / (h as any), u);
      return;
    }
    const f: any = ((h as any) ** (2 as any) as any) - (((4 as any) * (c as any) as any) * (l as any) as any);
    if ((f as any) < (0 as any)) return;
    const g: any = ((Math as any).sqrt as any)(f),
      p: any = (2 as any) * (l as any);
    (this.#t as any)(t, e, s, i, n, r, a, o, ((-h as any) + (g as any) as any) / (p as any), u), (this.#t as any)(t, e, s, i, n, r, a, o, ((-h as any) - (g as any) as any) / (p as any), u);
  }
  static bezierBoundingBox(t: any, e: any, s: any, i: any, n: any, r: any, a: any, o: any, l: any): any {
    (l as any)[0] = ((Math as any).min as any)((l as any)[0], t, a), (l as any)[1] = ((Math as any).min as any)((l as any)[1], e, o), (l as any)[2] = ((Math as any).max as any)((l as any)[2], t, a), (l as any)[3] = ((Math as any).max as any)((l as any)[3], e, o), (this.#e as any)(t, s, n, a, e, i, r, o, (3 as any) * (((-t as any) + ((3 as any) * ((s as any) - (n as any) as any) as any) as any) + (a as any) as any), (6 as any) * (((t as any) - ((2 as any) * (s as any) as any) as any) + (n as any) as any), (3 as any) * ((s as any) - (t as any) as any), l), (this.#e as any)(t, s, n, a, e, i, r, o, (3 as any) * (((-e as any) + ((3 as any) * ((i as any) - (r as any) as any) as any) as any) + (o as any) as any), (6 as any) * (((e as any) - ((2 as any) * (i as any) as any) as any) + (r as any) as any), (3 as any) * ((i as any) - (e as any) as any), l);
  }
}
function an(this: any, d: any): any {
  return (decodeURIComponent as any)((escape as any)(d));
}
let as: any = null,
  Gs: any = null;
function on(this: any, d: any): any {
  return as || (as = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Gs = new (Map as any)([["\uFB05", "\u017Ft"]])), ((d as any).replaceAll as any)(as, (t: any, e: any, s: any): any => e ? ((e as any).normalize as any)("NFKC") : ((Gs as any).get as any)(s));
}
function Ai(this: any): any {
  if ((typeof (crypto as any).randomUUID as any) == ("function" as any)) return ((crypto as any).randomUUID as any)();
  const d: any = new (Uint8Array as any)(32);
  return ((crypto as any).getRandomValues as any)(d), (yi as any)(d);
}
const Es: string = "pdfjs_internal_id_";
function ln(this: any, d: any, t: any, e: any): any {
  if (!((Array as any).isArray as any)(e) || ((e as any).length as any) < (2 as any)) return !1;
  const [s, i, ...n]: any = e;
  if (!(d as any)(s) && !((Number as any).isInteger as any)(s) || !(t as any)(i)) return !1;
  const r: any = (n as any).length;
  let a: any = !0;
  switch ((i as any).name) {
    case "XYZ":
      if ((r as any) < (2 as any) || (r as any) > (3 as any)) return !1;
      break;
    case "Fit":
    case "FitB":
      return (r as any) === (0 as any);
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if ((r as any) > (1 as any)) return !1;
      break;
    case "FitR":
      if ((r as any) !== (4 as any)) return !1;
      a = !1;
      break;
    default:
      return !1;
  }
  for (const o of n) if (!((typeof o as any) == ("number" as any) || a && (o as any) === (null as any))) return !1;
  return !0;
}
function dt(this: any, d: any, t: any, e: any): any {
  return ((Math as any).min as any)(((Math as any).max as any)(d, t), e);
}
function wi(this: any, d: any): any {
  return ((Uint8Array as any).prototype as any).toBase64 ? ((d as any).toBase64 as any)() : (btoa as any)((yi as any)(d));
}
function hn(this: any, d: any): any {
  return (Uint8Array as any).fromBase64 ? ((Uint8Array as any).fromBase64 as any)(d) : (Se as any)((atob as any)(d));
}
(typeof (Promise as any).try as any) != ("function" as any) && ((Promise as any).try = function (this: any, d: any, ...t: any): any {
  return new (Promise as any)((e: any): any => {
    (e as any)((d as any)(...t));
  });
});
(typeof (Math as any).sumPrecise as any) != ("function" as any) && ((Math as any).sumPrecise = function (this: any, d: any): any {
  return ((d as any).reduce as any)((t: any, e: any): any => (t as any) + (e as any), 0);
});
class we {
  [key: string]: any;
  static textContent(t: any): any {
    const e: any = [],
      s: any = {
        items: e,
        styles: ((Object as any).create as any)(null)
      };
    function i(this: any, n: any): any {
      if (!n) return;
      let r: any = null;
      const a: any = (n as any).name;
      if ((a as any) === ("#text" as any)) r = (n as any).value;else if (((we as any).shouldBuildText as any)(a)) n?.attributes?.textContent ? r = ((n as any).attributes as any).textContent : (n as any).value && (r = (n as any).value);else return;
      if ((r as any) !== (null as any) && ((e as any).push as any)({
        str: r
      }), !!(n as any).children) for (const o of (n as any).children) (i as any)(o);
    }
    return (i as any)(t), s;
  }
  static shouldBuildText(t: any): any {
    return !((t as any) === ("textarea" as any) || (t as any) === ("input" as any) || (t as any) === ("option" as any) || (t as any) === ("select" as any));
  }
}
class vi {
  [key: string]: any;
  static setupStorage(t: any, e: any, s: any, i: any, n: any): any {
    const r: any = ((i as any).getValue as any)(e, {
      value: null
    });
    switch ((s as any).name) {
      case "textarea":
        if (((r as any).value as any) !== (null as any) && ((t as any).textContent = (r as any).value), (n as any) === ("print" as any)) break;
        ((t as any).addEventListener as any)("input", (a: any): any => {
          ((i as any).setValue as any)(e, {
            value: ((a as any).target as any).value
          });
        });
        break;
      case "input":
        if ((((s as any).attributes as any).type as any) === ("radio" as any) || (((s as any).attributes as any).type as any) === ("checkbox" as any)) {
          if (((r as any).value as any) === (((s as any).attributes as any).xfaOn as any) ? ((t as any).setAttribute as any)("checked", !0) : ((r as any).value as any) === (((s as any).attributes as any).xfaOff as any) && ((t as any).removeAttribute as any)("checked"), (n as any) === ("print" as any)) break;
          ((t as any).addEventListener as any)("change", (a: any): any => {
            ((i as any).setValue as any)(e, {
              value: ((a as any).target as any).checked ? (((a as any).target as any).getAttribute as any)("xfaOn") : (((a as any).target as any).getAttribute as any)("xfaOff")
            });
          });
        } else {
          if (((r as any).value as any) !== (null as any) && ((t as any).setAttribute as any)("value", (r as any).value), (n as any) === ("print" as any)) break;
          ((t as any).addEventListener as any)("input", (a: any): any => {
            ((i as any).setValue as any)(e, {
              value: ((a as any).target as any).value
            });
          });
        }
        break;
      case "select":
        if (((r as any).value as any) !== (null as any)) {
          ((t as any).setAttribute as any)("value", (r as any).value);
          for (const a of (s as any).children) (((a as any).attributes as any).value as any) === ((r as any).value as any) ? ((a as any).attributes as any).selected = !0 : (((a as any).attributes as any).hasOwnProperty as any)("selected") && delete ((a as any).attributes as any).selected;
        }
        ((t as any).addEventListener as any)("input", (a: any): any => {
          const o: any = ((a as any).target as any).options,
            l: any = ((o as any).selectedIndex as any) === (-1 as any) ? "" : ((o as any)[(o as any).selectedIndex] as any).value;
          ((i as any).setValue as any)(e, {
            value: l
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: s = null,
    intent: i,
    linkService: n
  }: any): any {
    const {
        attributes: r
      }: any = e,
      a: any = t instanceof HTMLAnchorElement;
    ((r as any).type as any) === ("radio" as any) && ((r as any).name = `${(r as any).name}-${i}`);
    for (const [o, l] of ((Object as any).entries as any)(r)) if ((l as any) != (null as any)) switch (o) {
      case "class":
        (l as any).length && ((t as any).setAttribute as any)(o, ((l as any).join as any)(" "));
        break;
      case "dataId":
        break;
      case "id":
        ((t as any).setAttribute as any)("data-element-id", l);
        break;
      case "style":
        ((Object as any).assign as any)((t as any).style, l);
        break;
      case "textContent":
        (t as any).textContent = l;
        break;
      default:
        (!a || (o as any) !== ("href" as any) && (o as any) !== ("newWindow" as any)) && ((t as any).setAttribute as any)(o, l);
    }
    a && ((n as any).addLinkAttributes as any)(t, (r as any).href, (r as any).newWindow), s && (r as any).dataId && ((this as any).setupStorage as any)(t, (r as any).dataId, e, s);
  }
  static render(t: any): any {
    const e: any = (t as any).annotationStorage,
      s: any = (t as any).linkService,
      i: any = (t as any).xfaHtml,
      n: any = (t as any).intent || "display",
      r: any = ((document as any).createElement as any)((i as any).name);
    (i as any).attributes && ((this as any).setAttributes as any)({
      html: r,
      element: i,
      intent: n,
      linkService: s
    });
    const a: any = (n as any) !== ("richText" as any),
      o: any = (t as any).div;
    if (((o as any).append as any)(r), (t as any).viewport) {
      const c: any = `matrix(${((((t as any).viewport as any).transform as any).join as any)(",")})`;
      ((o as any).style as any).transform = c;
    }
    a && ((o as any).setAttribute as any)("class", "xfaLayer xfaFont");
    const l: any = [];
    if ((((i as any).children as any).length as any) === (0 as any)) {
      if ((i as any).value) {
        const c: any = ((document as any).createTextNode as any)((i as any).value);
        ((r as any).append as any)(c), a && ((we as any).shouldBuildText as any)((i as any).name) && ((l as any).push as any)(c);
      }
      return {
        textDivs: l
      };
    }
    const h: any = [[i, -1, r]];
    for (; ((h as any).length as any) > (0 as any);) {
      const [c, u, f]: any = ((h as any).at as any)(-1);
      if (((u as any) + (1 as any) as any) === (((c as any).children as any).length as any)) {
        ((h as any).pop as any)();
        continue;
      }
      const g: any = ((c as any).children as any)[++(((h as any).at as any)(-1) as any)[1]];
      if ((g as any) === (null as any)) continue;
      const {
        name: p
      }: any = g;
      if ((p as any) === ("#text" as any)) {
        const m: any = ((document as any).createTextNode as any)((g as any).value);
        ((l as any).push as any)(m), ((f as any).append as any)(m);
        continue;
      }
      const b: any = g?.attributes?.xmlns ? ((document as any).createElementNS as any)(((g as any).attributes as any).xmlns, p) : ((document as any).createElement as any)(p);
      if (((f as any).append as any)(b), (g as any).attributes && ((this as any).setAttributes as any)({
        html: b,
        element: g,
        storage: e,
        intent: n,
        linkService: s
      }), ((g as any).children?.length as any) > (0 as any)) ((h as any).push as any)([g, -1, b]);else if ((g as any).value) {
        const m: any = ((document as any).createTextNode as any)((g as any).value);
        a && ((we as any).shouldBuildText as any)(p) && ((l as any).push as any)(m), ((b as any).append as any)(m);
      }
    }
    for (const c of ((o as any).querySelectorAll as any)(".xfaNonInteractive input, .xfaNonInteractive textarea")) ((c as any).setAttribute as any)("readOnly", !0);
    return {
      textDivs: l
    };
  }
  static update(t: any): any {
    const e: any = `matrix(${((((t as any).viewport as any).transform as any).join as any)(",")})`;
    (((t as any).div as any).style as any).transform = e, ((t as any).div as any).hidden = !1;
  }
}
const Rt: string = "http://www.w3.org/2000/svg";
class ae {
  [key: string]: any;
  static CSS: any = 96;
  static PDF: any = 72;
  static PDF_TO_CSS_UNITS: any = ((this as any).CSS as any) / ((this as any).PDF as any);
}
async function Ee(this: any, d: any, t: any = "text"): Promise<any> {
  if ((fe as any)(d, (document as any).baseURI)) {
    const e: any = await (fetch as any)(d);
    if (!(e as any).ok) throw new (Error as any)((e as any).statusText);
    switch (t) {
      case "arraybuffer":
        return ((e as any).arrayBuffer as any)();
      case "blob":
        return ((e as any).blob as any)();
      case "json":
        return ((e as any).json as any)();
    }
    return ((e as any).text as any)();
  }
  return new (Promise as any)((e: any, s: any): any => {
    const i: any = new (XMLHttpRequest as any)();
    ((i as any).open as any)("GET", d, !0), (i as any).responseType = t, (i as any).onreadystatechange = (): any => {
      if (((i as any).readyState as any) === ((XMLHttpRequest as any).DONE as any)) {
        if (((i as any).status as any) === (200 as any) || ((i as any).status as any) === (0 as any)) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              (e as any)((i as any).response);
              return;
          }
          (e as any)((i as any).responseText);
          return;
        }
        (s as any)(new (Error as any)((i as any).statusText));
      }
    }, ((i as any).send as any)(null);
  });
}
class Ce {
  declare height: any;
  declare width: any;
  declare transform: any;
  declare offsetY: any;
  declare offsetX: any;
  declare rotation: any;
  declare scale: any;
  declare userUnit: any;
  declare viewBox: any;
  [key: string]: any;
  constructor({
    viewBox: t,
    userUnit: e,
    scale: s,
    rotation: i,
    offsetX: n = 0,
    offsetY: r = 0,
    dontFlip: a = !1
  }: any) {
    (this as any).viewBox = t, (this as any).userUnit = e, (this as any).scale = s, (this as any).rotation = i, (this as any).offsetX = n, (this as any).offsetY = r, s *= e;
    const o: any = (((t as any)[2] as any) + ((t as any)[0] as any) as any) / (2 as any),
      l: any = (((t as any)[3] as any) + ((t as any)[1] as any) as any) / (2 as any);
    let h: any, c: any, u: any, f: any;
    switch (i %= 360, (i as any) < (0 as any) && (i += 360), i) {
      case 180:
        h = -1, c = 0, u = 0, f = 1;
        break;
      case 90:
        h = 0, c = 1, u = 1, f = 0;
        break;
      case 270:
        h = 0, c = -1, u = -1, f = 0;
        break;
      case 0:
        h = 1, c = 0, u = 0, f = -1;
        break;
      default:
        throw new (Error as any)("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    a && (u = -u, f = -f);
    let g: any, p: any, b: any, m: any;
    (h as any) === (0 as any) ? (g = ((((Math as any).abs as any)((l as any) - ((t as any)[1] as any)) as any) * (s as any) as any) + (n as any), p = ((((Math as any).abs as any)((o as any) - ((t as any)[0] as any)) as any) * (s as any) as any) + (r as any), b = (((t as any)[3] as any) - ((t as any)[1] as any) as any) * (s as any), m = (((t as any)[2] as any) - ((t as any)[0] as any) as any) * (s as any)) : (g = ((((Math as any).abs as any)((o as any) - ((t as any)[0] as any)) as any) * (s as any) as any) + (n as any), p = ((((Math as any).abs as any)((l as any) - ((t as any)[1] as any)) as any) * (s as any) as any) + (r as any), b = (((t as any)[2] as any) - ((t as any)[0] as any) as any) * (s as any), m = (((t as any)[3] as any) - ((t as any)[1] as any) as any) * (s as any)), (this as any).transform = [(h as any) * (s as any), (c as any) * (s as any), (u as any) * (s as any), (f as any) * (s as any), ((g as any) - (((h as any) * (s as any) as any) * (o as any) as any) as any) - (((u as any) * (s as any) as any) * (l as any) as any), ((p as any) - (((c as any) * (s as any) as any) * (o as any) as any) as any) - (((f as any) * (s as any) as any) * (l as any) as any)], (this as any).width = b, (this as any).height = m;
  }
  get rawDims(): any {
    const t: any = (this as any).viewBox;
    return (N as any)(this, "rawDims", {
      pageWidth: ((t as any)[2] as any) - ((t as any)[0] as any),
      pageHeight: ((t as any)[3] as any) - ((t as any)[1] as any),
      pageX: (t as any)[0],
      pageY: (t as any)[1]
    });
  }
  clone({
    scale: t = (this as any).scale,
    rotation: e = (this as any).rotation,
    offsetX: s = (this as any).offsetX,
    offsetY: i = (this as any).offsetY,
    dontFlip: n = !1
  }: any = {}): any {
    return new (Ce as any)({
      viewBox: (((this as any).viewBox as any).slice as any)(),
      userUnit: (this as any).userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  convertToViewportPoint(t: any, e: any): any {
    const s: any = [t, e];
    return ((P as any).applyTransform as any)(s, (this as any).transform), s;
  }
  convertToViewportRectangle(t: any): any {
    const e: any = [(t as any)[0], (t as any)[1]];
    ((P as any).applyTransform as any)(e, (this as any).transform);
    const s: any = [(t as any)[2], (t as any)[3]];
    return ((P as any).applyTransform as any)(s, (this as any).transform), [(e as any)[0], (e as any)[1], (s as any)[0], (s as any)[1]];
  }
  convertToPdfPoint(t: any, e: any): any {
    const s: any = [t, e];
    return ((P as any).applyInverseTransform as any)(s, (this as any).transform), s;
  }
}
class Cs extends (qt as any) {
  declare extraDelay: any;
  [key: string]: any;
  constructor(t: any, e: any = 0) {
    super(t, "RenderingCancelledException"), (this as any).extraDelay = e;
  }
}
function Ke(this: any, d: any): any {
  const t: any = (d as any).length;
  let e: any = 0;
  for (; (e as any) < (t as any) && ((((d as any)[e] as any).trim as any)() as any) === ("" as any);) e++;
  return (((((d as any).substring as any)(e, (e as any) + (5 as any)) as any).toLowerCase as any)() as any) === ("data:" as any);
}
function xs(this: any, d: any): any {
  return (typeof d as any) == ("string" as any) && ((/\.pdf$/i as any).test as any)(d);
}
function cn(this: any, d: any): any {
  return [d] = ((d as any).split as any)(/[#?]/, 1), ((d as any).substring as any)((((d as any).lastIndexOf as any)("/") as any) + (1 as any));
}
function dn(this: any, d: any, t: any = "document.pdf"): any {
  if ((typeof d as any) != ("string" as any)) return t;
  if ((Ke as any)(d)) return (I as any)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const s: any = (((a: any): any => {
    try {
      return new (URL as any)(a);
    } catch {
      try {
        return new (URL as any)((decodeURIComponent as any)(a));
      } catch {
        try {
          return new (URL as any)(a, "https://foo.bar");
        } catch {
          try {
            return new (URL as any)((decodeURIComponent as any)(a), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  }) as any)(d);
  if (!s) return t;
  const i: any = (a: any): any => {
      try {
        let o: any = (decodeURIComponent as any)(a);
        return ((o as any).includes as any)("/") ? (o = ((((o as any).split as any)("/") as any).at as any)(-1), ((o as any).test as any)(/^\.pdf$/i) ? o : a) : o;
      } catch {
        return a;
      }
    },
    n: any = /\.pdf$/i,
    r: any = (((((s as any).pathname as any).split as any)("/") as any).at as any)(-1);
  if (((n as any).test as any)(r)) return (i as any)(r);
  if ((((s as any).searchParams as any).size as any) > (0 as any)) {
    const a: any = ((((Array as any).from as any)((((s as any).searchParams as any).values as any)()) as any).reverse as any)();
    for (const l of a) if (((n as any).test as any)(l)) return (i as any)(l);
    const o: any = ((((Array as any).from as any)((((s as any).searchParams as any).keys as any)()) as any).reverse as any)();
    for (const l of o) if (((n as any).test as any)(l)) return (i as any)(l);
  }
  if ((s as any).hash) {
    const o: any = ((/[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i as any).exec as any)((s as any).hash);
    if (o) return (i as any)((o as any)[0]);
  }
  return t;
}
class Vs {
  [key: string]: any;
  started: any = ((Object as any).create as any)(null);
  times: any = [];
  time(t: any): any {
    t in (this as any).started && (I as any)(`Timer is already running for ${t}`), ((this as any).started as any)[t] = ((Date as any).now as any)();
  }
  timeEnd(t: any): any {
    t in (this as any).started || (I as any)(`Timer has not been started for ${t}`), (((this as any).times as any).push as any)({
      name: t,
      start: ((this as any).started as any)[t],
      end: ((Date as any).now as any)()
    }), delete ((this as any).started as any)[t];
  }
  toString(): any {
    const t: any = [];
    let e: any = 0;
    for (const {
      name: s
    } of (this as any).times) e = ((Math as any).max as any)((s as any).length, e);
    for (const {
      name: s,
      start: i,
      end: n
    } of (this as any).times) ((t as any).push as any)(`${((s as any).padEnd as any)(e)} ${(n as any) - (i as any)}ms
`);
    return ((t as any).join as any)("");
  }
}
function fe(this: any, d: any, t: any): any {
  const e: any = t ? ((URL as any).parse as any)(d, t) : ((URL as any).parse as any)(d);
  return (e?.protocol as any) === ("http:" as any) || (e?.protocol as any) === ("https:" as any);
}
function vt(this: any, d: any): any {
  ((d as any).preventDefault as any)();
}
function Q(this: any, d: any): any {
  ((d as any).preventDefault as any)(), ((d as any).stopPropagation as any)();
}
function un(this: any, d: any): any {
  ((console as any).log as any)(("Deprecated API usage: " as any) + (d as any));
}
class fs {
  [key: string]: any;
  static #t: any;
  static toDateObject(t: any): any {
    if (t instanceof Date) return t;
    if (!t || (typeof t as any) != ("string" as any)) return null;
    this.#t ||= new (RegExp as any)("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
    const e: any = ((this.#t as any).exec as any)(t);
    if (!e) return null;
    const s: any = (parseInt as any)((e as any)[1], 10);
    let i: any = (parseInt as any)((e as any)[2], 10);
    i = (i as any) >= (1 as any) && (i as any) <= (12 as any) ? (i as any) - (1 as any) : 0;
    let n: any = (parseInt as any)((e as any)[3], 10);
    n = (n as any) >= (1 as any) && (n as any) <= (31 as any) ? n : 1;
    let r: any = (parseInt as any)((e as any)[4], 10);
    r = (r as any) >= (0 as any) && (r as any) <= (23 as any) ? r : 0;
    let a: any = (parseInt as any)((e as any)[5], 10);
    a = (a as any) >= (0 as any) && (a as any) <= (59 as any) ? a : 0;
    let o: any = (parseInt as any)((e as any)[6], 10);
    o = (o as any) >= (0 as any) && (o as any) <= (59 as any) ? o : 0;
    const l: any = (e as any)[7] || "Z";
    let h: any = (parseInt as any)((e as any)[8], 10);
    h = (h as any) >= (0 as any) && (h as any) <= (23 as any) ? h : 0;
    let c: any = (parseInt as any)((e as any)[9], 10) || 0;
    return c = (c as any) >= (0 as any) && (c as any) <= (59 as any) ? c : 0, (l as any) === ("-" as any) ? (r += h, a += c) : (l as any) === ("+" as any) && (r -= h, a -= c), new (Date as any)(((Date as any).UTC as any)(s, i, n, r, a, o));
  }
}
function fn(this: any, d: any, {
  scale: t = 1,
  rotation: e = 0
}: any): any {
  const {
      width: s,
      height: i
    }: any = ((d as any).attributes as any).style,
    n: any = [0, 0, (parseInt as any)(s), (parseInt as any)(i)];
  return new (Ce as any)({
    viewBox: n,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function xe(this: any, d: any): any {
  if (((d as any).startsWith as any)("#")) {
    const t: any = (parseInt as any)(((d as any).slice as any)(1), 16);
    return [(((t as any) & (16711680 as any)) as any) >> (16 as any), (((t as any) & (65280 as any)) as any) >> (8 as any), (t as any) & (255 as any)];
  }
  return ((d as any).startsWith as any)("rgb(") ? ((((((d as any).slice as any)(4, -1) as any).split as any)(",") as any).map as any)((t: any): any => (parseInt as any)(t)) : ((d as any).startsWith as any)("rgba(") ? ((((((((d as any).slice as any)(5, -1) as any).split as any)(",") as any).map as any)((t: any): any => (parseInt as any)(t)) as any).slice as any)(0, 3) : ((I as any)(`Not a valid color format: "${d}"`), [0, 0, 0]);
}
function pn(this: any, d: any): any {
  const t: any = ((document as any).createElement as any)("span");
  ((t as any).style as any).visibility = "hidden", ((t as any).style as any).colorScheme = "only light", (((document as any).body as any).append as any)(t);
  for (const e of ((d as any).keys as any)()) {
    ((t as any).style as any).color = e;
    const s: any = (((window as any).getComputedStyle as any)(t) as any).color;
    ((d as any).set as any)(e, (xe as any)(s));
  }
  ((t as any).remove as any)();
}
function Y(this: any, d: any): any {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: r
  }: any = ((d as any).getTransform as any)();
  return [t, e, s, i, n, r];
}
function Ct(this: any, d: any): any {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: n,
    f: r
  }: any = ((((d as any).getTransform as any)() as any).invertSelf as any)();
  return [t, e, s, i, n, r];
}
function Wt(this: any, d: any, t: any, e: any = !1, s: any = !0): any {
  if (t instanceof Ce) {
    const {
        pageWidth: i,
        pageHeight: n
      }: any = (t as any).rawDims,
      {
        style: r
      }: any = d,
      a: any = (ot as any).isCSSRoundSupported,
      o: any = `var(--total-scale-factor) * ${i}px`,
      l: any = `var(--total-scale-factor) * ${n}px`,
      h: any = a ? `round(down, ${o}, var(--scale-round-x))` : `calc(${o})`,
      c: any = a ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
    !e || (((t as any).rotation as any) % (180 as any) as any) === (0 as any) ? ((r as any).width = h, (r as any).height = c) : ((r as any).width = c, (r as any).height = h);
  }
  s && ((d as any).setAttribute as any)("data-main-rotation", (t as any).rotation);
}
class kt {
  declare sy: any;
  declare sx: any;
  [key: string]: any;
  constructor() {
    const {
      pixelRatio: t
    }: any = kt;
    (this as any).sx = t, (this as any).sy = t;
  }
  get scaled(): any {
    return ((this as any).sx as any) !== (1 as any) || ((this as any).sy as any) !== (1 as any);
  }
  get symmetric(): any {
    return ((this as any).sx as any) === ((this as any).sy as any);
  }
  limitCanvas(t: any, e: any, s: any, i: any, n: any = -1): any {
    let r: any = (1 as any) / (0 as any),
      a: any = (1 as any) / (0 as any),
      o: any = (1 as any) / (0 as any);
    s = ((kt as any).capPixels as any)(s, n), (s as any) > (0 as any) && (r = ((Math as any).sqrt as any)((s as any) / ((t as any) * (e as any) as any))), (i as any) !== (-1 as any) && (a = (i as any) / (t as any), o = (i as any) / (e as any));
    const l: any = ((Math as any).min as any)(r, a, o);
    return ((this as any).sx as any) > (l as any) || ((this as any).sy as any) > (l as any) ? ((this as any).sx = l, (this as any).sy = l, !0) : !1;
  }
  static get pixelRatio(): any {
    return (globalThis as any).devicePixelRatio || 1;
  }
  static capPixels(t: any, e: any): any {
    if ((e as any) >= (0 as any)) {
      const s: any = ((Math as any).ceil as any)((((((window as any).screen as any).availWidth as any) * (((window as any).screen as any).availHeight as any) as any) * (((this as any).pixelRatio as any) ** (2 as any) as any) as any) * ((1 as any) + ((e as any) / (100 as any) as any) as any));
      return (t as any) > (0 as any) ? ((Math as any).min as any)(t, s) : s;
    }
    return t;
  }
}
const ps: any = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class gn {
  [key: string]: any;
  static get isDarkMode(): any {
    return (N as any)(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
  }
}
class mn {
  [key: string]: any;
  static get commentForegroundColor(): any {
    const t: any = ((document as any).createElement as any)("span");
    (((t as any).classList as any).add as any)("comment", "sidebar");
    const {
      style: e
    }: any = t;
    (e as any).width = (e as any).height = "0", (e as any).display = "none", (e as any).color = "var(--comment-fg-color)", (((document as any).body as any).append as any)(t);
    const {
      color: s
    }: any = ((window as any).getComputedStyle as any)(t);
    return ((t as any).remove as any)(), (N as any)(this, "commentForegroundColor", (xe as any)(s));
  }
}
function bn(this: any, d: any, t: any, e: any, s: any): any {
  s = ((Math as any).min as any)(((Math as any).max as any)(s ?? 1, 0), 1);
  const i: any = (255 as any) * ((1 as any) - (s as any) as any);
  return d = ((Math as any).round as any)(((d as any) * (s as any) as any) + (i as any)), t = ((Math as any).round as any)(((t as any) * (s as any) as any) + (i as any)), e = ((Math as any).round as any)(((e as any) * (s as any) as any) + (i as any)), [d, t, e];
}
function Ws(this: any, d: any, t: any): any {
  const e: any = ((d as any)[0] as any) / (255 as any),
    s: any = ((d as any)[1] as any) / (255 as any),
    i: any = ((d as any)[2] as any) / (255 as any),
    n: any = ((Math as any).max as any)(e, s, i),
    r: any = ((Math as any).min as any)(e, s, i),
    a: any = ((n as any) + (r as any) as any) / (2 as any);
  if ((n as any) === (r as any)) (t as any)[0] = (t as any)[1] = 0;else {
    const o: any = (n as any) - (r as any);
    switch ((t as any)[1] = (a as any) < (.5 as any) ? (o as any) / ((n as any) + (r as any) as any) : (o as any) / (((2 as any) - (n as any) as any) - (r as any) as any), n) {
      case e:
        (t as any)[0] = ((((s as any) - (i as any) as any) / (o as any) as any) + (((s as any) < (i as any) ? 6 : 0) as any) as any) * (60 as any);
        break;
      case s:
        (t as any)[0] = ((((i as any) - (e as any) as any) / (o as any) as any) + (2 as any) as any) * (60 as any);
        break;
      case i:
        (t as any)[0] = ((((e as any) - (s as any) as any) / (o as any) as any) + (4 as any) as any) * (60 as any);
        break;
    }
  }
  (t as any)[2] = a;
}
function gs(this: any, d: any, t: any): any {
  const e: any = (d as any)[0],
    s: any = (d as any)[1],
    i: any = (d as any)[2],
    n: any = ((1 as any) - (((Math as any).abs as any)(((2 as any) * (i as any) as any) - (1 as any)) as any) as any) * (s as any),
    r: any = (n as any) * ((1 as any) - (((Math as any).abs as any)((((e as any) / (60 as any) as any) % (2 as any) as any) - (1 as any)) as any) as any),
    a: any = (i as any) - ((n as any) / (2 as any) as any);
  switch (((Math as any).floor as any)((e as any) / (60 as any))) {
    case 0:
      (t as any)[0] = (n as any) + (a as any), (t as any)[1] = (r as any) + (a as any), (t as any)[2] = a;
      break;
    case 1:
      (t as any)[0] = (r as any) + (a as any), (t as any)[1] = (n as any) + (a as any), (t as any)[2] = a;
      break;
    case 2:
      (t as any)[0] = a, (t as any)[1] = (n as any) + (a as any), (t as any)[2] = (r as any) + (a as any);
      break;
    case 3:
      (t as any)[0] = a, (t as any)[1] = (r as any) + (a as any), (t as any)[2] = (n as any) + (a as any);
      break;
    case 4:
      (t as any)[0] = (r as any) + (a as any), (t as any)[1] = a, (t as any)[2] = (n as any) + (a as any);
      break;
    case 5:
    case 6:
      (t as any)[0] = (n as any) + (a as any), (t as any)[1] = a, (t as any)[2] = (r as any) + (a as any);
      break;
  }
}
function Xs(this: any, d: any): any {
  return (d as any) <= (.03928 as any) ? (d as any) / (12.92 as any) : (((d as any) + (.055 as any) as any) / (1.055 as any) as any) ** (2.4 as any);
}
function qs(this: any, d: any, t: any, e: any): any {
  (gs as any)(d, e), ((e as any).map as any)(Xs);
  const s: any = (((.2126 as any) * ((e as any)[0] as any) as any) + ((.7152 as any) * ((e as any)[1] as any) as any) as any) + ((.0722 as any) * ((e as any)[2] as any) as any);
  (gs as any)(t, e), ((e as any).map as any)(Xs);
  const i: any = (((.2126 as any) * ((e as any)[0] as any) as any) + ((.7152 as any) * ((e as any)[1] as any) as any) as any) + ((.0722 as any) * ((e as any)[2] as any) as any);
  return (s as any) > (i as any) ? ((s as any) + (.05 as any) as any) / ((i as any) + (.05 as any) as any) : ((i as any) + (.05 as any) as any) / ((s as any) + (.05 as any) as any);
}
const Ys: any = new (Map as any)();
function yn(this: any, d: any, t: any): any {
  const e: any = ((((((d as any)[0] as any) + (((d as any)[1] as any) * (256 as any) as any) as any) + (((d as any)[2] as any) * (65536 as any) as any) as any) + (((t as any)[0] as any) * (16777216 as any) as any) as any) + (((t as any)[1] as any) * (4294967296 as any) as any) as any) + (((t as any)[2] as any) * (1099511627776 as any) as any);
  let s: any = ((Ys as any).get as any)(e);
  if (s) return s;
  const i: any = new (Float32Array as any)(9),
    n: any = ((i as any).subarray as any)(0, 3),
    r: any = ((i as any).subarray as any)(3, 6);
  (Ws as any)(d, r);
  const a: any = ((i as any).subarray as any)(6, 9);
  (Ws as any)(t, a);
  const o: any = ((a as any)[2] as any) < (.5 as any),
    l: any = o ? 12 : 4.5;
  if ((r as any)[2] = o ? ((Math as any).sqrt as any)((r as any)[2]) : (1 as any) - (((Math as any).sqrt as any)((1 as any) - ((r as any)[2] as any)) as any), ((qs as any)(r, a, n) as any) < (l as any)) {
    let h: any, c: any;
    o ? (h = (r as any)[2], c = 1) : (h = 0, c = (r as any)[2]);
    const u: number = .005;
    for (; ((c as any) - (h as any) as any) > (u as any);) {
      const f: any = (r as any)[2] = ((h as any) + (c as any) as any) / (2 as any);
      (o as any) === (((qs as any)(r, a, n) as any) < (l as any) as any) ? h = f : c = f;
    }
    (r as any)[2] = o ? c : h;
  }
  return (gs as any)(r, n), s = ((P as any).makeHexColor as any)(((Math as any).round as any)(((n as any)[0] as any) * (255 as any)), ((Math as any).round as any)(((n as any)[1] as any) * (255 as any)), ((Math as any).round as any)(((n as any)[2] as any) * (255 as any))), ((Ys as any).set as any)(e, s), s;
}
function _i(this: any, {
  html: d,
  dir: t,
  className: e
}: any, s: any): any {
  const i: any = ((document as any).createDocumentFragment as any)();
  if ((typeof d as any) == ("string" as any)) {
    const n: any = ((document as any).createElement as any)("p");
    (n as any).dir = t || "auto";
    const r: any = ((d as any).split as any)(/(?:\r\n?|\n)/);
    for (let a: any = 0, o: any = (r as any).length; (a as any) < (o as any); ++a) {
      const l: any = (r as any)[a];
      ((n as any).append as any)(((document as any).createTextNode as any)(l)), (a as any) < ((o as any) - (1 as any) as any) && ((n as any).append as any)(((document as any).createElement as any)("br"));
    }
    ((i as any).append as any)(n);
  } else ((vi as any).render as any)({
    xfaHtml: d,
    div: i,
    intent: "richText"
  });
  ((((i as any).firstChild as any).classList as any).add as any)("richText", e), ((s as any).append as any)(i);
}
class me {
  [key: string]: any;
  #t: any = null;
  #e: any = null;
  #i: any;
  #s: any = null;
  #a: any = null;
  #n: any = null;
  #r: any = null;
  #o: any = null;
  static #h: any = null;
  constructor(t: any) {
    this.#i = t, me.#h ||= ((Object as any).freeze as any)({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    });
  }
  render(): any {
    const t: any = this.#t = ((document as any).createElement as any)("div");
    (((t as any).classList as any).add as any)("editToolbar", "hidden"), ((t as any).setAttribute as any)("role", "toolbar");
    const e: any = ((this.#i as any)._uiManager as any)._signal;
    e instanceof AbortSignal && !(e as any).aborted && (((t as any).addEventListener as any)("contextmenu", vt, {
      signal: e
    }), ((t as any).addEventListener as any)("pointerdown", me.#l, {
      signal: e
    }));
    const s: any = this.#s = ((document as any).createElement as any)("div");
    (s as any).className = "buttons", ((t as any).append as any)(s);
    const i: any = (this.#i as any).toolbarPosition;
    if (i) {
      const {
          style: n
        }: any = t,
        r: any = (((this.#i as any)._uiManager as any).direction as any) === ("ltr" as any) ? (1 as any) - ((i as any)[0] as any) : (i as any)[0];
      (n as any).insetInlineEnd = `${(100 as any) * (r as any)}%`, (n as any).top = `calc(${(100 as any) * ((i as any)[1] as any)}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div(): any {
    return this.#t;
  }
  static #l(t: any): any {
    ((t as any).stopPropagation as any)();
  }
  #u(t: any): any {
    (this.#i as any)._focusEventsAllowed = !1, (Q as any)(t);
  }
  #d(t: any): any {
    (this.#i as any)._focusEventsAllowed = !0, (Q as any)(t);
  }
  #f(t: any): any {
    const e: any = ((this.#i as any)._uiManager as any)._signal;
    return !(e instanceof AbortSignal) || (e as any).aborted ? !1 : (((t as any).addEventListener as any)("focusin", ((this.#u as any).bind as any)(this), {
      capture: !0,
      signal: e
    }), ((t as any).addEventListener as any)("focusout", ((this.#d as any).bind as any)(this), {
      capture: !0,
      signal: e
    }), ((t as any).addEventListener as any)("contextmenu", vt, {
      signal: e
    }), !0);
  }
  hide(): any {
    (((this.#t as any).classList as any).add as any)("hidden"), this.#e?.hideDropdown();
  }
  show(): any {
    (((this.#t as any).classList as any).remove as any)("hidden"), this.#a?.shown(), this.#n?.shown();
  }
  addDeleteButton(): any {
    const {
        editorType: t,
        _uiManager: e
      }: any = this.#i,
      s: any = ((document as any).createElement as any)("button");
    (((s as any).classList as any).add as any)("basic", "deleteButton"), (s as any).tabIndex = 0, ((s as any).setAttribute as any)("data-l10n-id", (me.#h as any)[t]), (this.#f as any)(s) && ((s as any).addEventListener as any)("click", (i: any): any => {
      ((e as any).delete as any)();
    }, {
      signal: (e as any)._signal
    }), ((this.#s as any).append as any)(s);
  }
  get #m(): any {
    const t: any = ((document as any).createElement as any)("div");
    return (t as any).className = "divider", t;
  }
  async addAltText(t: any): Promise<any> {
    const e: any = await ((t as any).render as any)();
    (this.#f as any)(e), ((this.#s as any).append as any)(e, this.#m), this.#a = t;
  }
  addComment(t: any, e: any = null): any {
    if (this.#n) return;
    const s: any = ((t as any).renderForToolbar as any)();
    if (!s) return;
    (this.#f as any)(s);
    const i: any = this.#r = this.#m;
    e ? (((this.#s as any).insertBefore as any)(s, e), ((this.#s as any).insertBefore as any)(i, e)) : ((this.#s as any).append as any)(s, i), this.#n = t, (t as any).toolbar = this;
  }
  addColorPicker(t: any): any {
    if (this.#e) return;
    this.#e = t;
    const e: any = ((t as any).renderButton as any)();
    (this.#f as any)(e), ((this.#s as any).append as any)(e, this.#m);
  }
  async addEditSignatureButton(t: any): Promise<any> {
    const e: any = this.#o = await ((t as any).renderEditButton as any)(this.#i);
    (this.#f as any)(e), ((this.#s as any).append as any)(e, this.#m);
  }
  removeButton(t: any): any {
    (t as any) === ("comment" as any) && (this.#n?.removeToolbarCommentButton(), this.#n = null, this.#r?.remove(), this.#r = null);
  }
  async addButton(t: any, e: any): Promise<any> {
    switch (t) {
      case "colorPicker":
        ((this as any).addColorPicker as any)(e);
        break;
      case "altText":
        await ((this as any).addAltText as any)(e);
        break;
      case "editSignature":
        await ((this as any).addEditSignatureButton as any)(e);
        break;
      case "delete":
        ((this as any).addDeleteButton as any)();
        break;
      case "comment":
        ((this as any).addComment as any)(e);
        break;
    }
  }
  async addButtonBefore(t: any, e: any, s: any): Promise<any> {
    const i: any = ((this.#s as any).querySelector as any)(s);
    i && (t as any) === ("comment" as any) && ((this as any).addComment as any)(e, i);
  }
  updateEditSignatureButton(t: any): any {
    this.#o && ((this.#o as any).title = t);
  }
  remove(): any {
    ((this.#t as any).remove as any)(), this.#e?.destroy(), this.#e = null;
  }
}
class An {
  [key: string]: any;
  #t: any = null;
  #e: any = null;
  #i: any;
  constructor(t: any) {
    this.#i = t;
  }
  #s(): any {
    const t: any = this.#e = ((document as any).createElement as any)("div");
    (t as any).className = "editToolbar", ((t as any).setAttribute as any)("role", "toolbar");
    const e: any = (this.#i as any)._signal;
    e instanceof AbortSignal && !(e as any).aborted && ((t as any).addEventListener as any)("contextmenu", vt, {
      signal: e
    });
    const s: any = this.#t = ((document as any).createElement as any)("div");
    return (s as any).className = "buttons", ((t as any).append as any)(s), ((this.#i as any).hasCommentManager as any)() && (this.#n as any)("commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", (): any => {
      ((this.#i as any).commentSelection as any)("floating_button");
    }), (this.#n as any)("highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", (): any => {
      ((this.#i as any).highlightSelection as any)("floating_button");
    }), t;
  }
  #a(t: any, e: any): any {
    let s: any = 0,
      i: any = 0;
    for (const n of t) {
      const r: any = ((n as any).y as any) + ((n as any).height as any);
      if ((r as any) < (s as any)) continue;
      const a: any = ((n as any).x as any) + ((e ? (n as any).width : 0) as any);
      if ((r as any) > (s as any)) {
        i = a, s = r;
        continue;
      }
      e ? (a as any) > (i as any) && (i = a) : (a as any) < (i as any) && (i = a);
    }
    return [e ? (1 as any) - (i as any) : i, s];
  }
  show(t: any, e: any, s: any): any {
    const [i, n]: any = (this.#a as any)(e, s),
      {
        style: r
      }: any = this.#e ||= (this.#s as any)();
    ((t as any).append as any)(this.#e), (r as any).insetInlineEnd = `${(100 as any) * (i as any)}%`, (r as any).top = `calc(${(100 as any) * (n as any)}% + var(--editor-toolbar-vert-offset))`;
  }
  hide(): any {
    ((this.#e as any).remove as any)();
  }
  #n(t: any, e: any, s: any, i: any): any {
    const n: any = ((document as any).createElement as any)("button");
    (((n as any).classList as any).add as any)("basic", t), (n as any).tabIndex = 0, ((n as any).setAttribute as any)("data-l10n-id", e);
    const r: any = ((document as any).createElement as any)("span");
    ((n as any).append as any)(r), (r as any).className = "visuallyHidden", ((r as any).setAttribute as any)("data-l10n-id", s);
    const a: any = (this.#i as any)._signal;
    a instanceof AbortSignal && !(a as any).aborted && (((n as any).addEventListener as any)("contextmenu", vt, {
      signal: a
    }), ((n as any).addEventListener as any)("click", i, {
      signal: a
    })), ((this.#t as any).append as any)(n);
  }
}
function Si(this: any, d: any, t: any, e: any): any {
  for (const s of e) ((t as any).addEventListener as any)(s, (((d as any)[s] as any).bind as any)(d));
}
class wn {
  [key: string]: any;
  #t: any = 0;
  get id(): any {
    return `${ye}${this.#t++}`;
  }
}
class Ts {
  [key: string]: any;
  #t: any = (Ai as any)();
  #e: any = 0;
  #i: any = null;
  static get _isSVGFittingCanvas(): any {
    const t: string = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>',
      s: any = ((new (OffscreenCanvas as any)(1, 3) as any).getContext as any)("2d", {
        willReadFrequently: !0
      }),
      i: any = new (Image as any)();
    (i as any).src = t;
    const n: any = ((((i as any).decode as any)() as any).then as any)((): any => (((s as any).drawImage as any)(i, 0, 0, 1, 1, 0, 0, 1, 3), ((new (Uint32Array as any)(((((s as any).getImageData as any)(0, 0, 1, 1) as any).data as any).buffer) as any)[0] as any) === (0 as any)));
    return (N as any)(this, "_isSVGFittingCanvas", n);
  }
  async #s(t: any, e: any): Promise<any> {
    this.#i ||= new (Map as any)();
    let s: any = ((this.#i as any).get as any)(t);
    if ((s as any) === (null as any)) return null;
    if (s?.bitmap) return (s as any).refCounter += 1, s;
    try {
      s ||= {
        bitmap: null,
        id: `image_${this.#t}_${this.#e++}`,
        refCounter: 0,
        isSvg: !1
      };
      let i: any;
      if ((typeof e as any) == ("string" as any) ? ((s as any).url = e, i = await (Ee as any)(e, "blob")) : e instanceof File ? i = (s as any).file = e : e instanceof Blob && (i = e), ((i as any).type as any) === ("image/svg+xml" as any)) {
        const n: any = (Ts as any)._isSVGFittingCanvas,
          r: any = new (FileReader as any)(),
          a: any = new (Image as any)(),
          o: any = new (Promise as any)((l: any, h: any): any => {
            (a as any).onload = (): any => {
              (s as any).bitmap = a, (s as any).isSvg = !0, (l as any)();
            }, (r as any).onload = async (): Promise<any> => {
              const c: any = (s as any).svgUrl = (r as any).result;
              (a as any).src = (await n) ? `${c}#svgView(preserveAspectRatio(none))` : c;
            }, (a as any).onerror = (r as any).onerror = h;
          });
        ((r as any).readAsDataURL as any)(i), await o;
      } else (s as any).bitmap = await (createImageBitmap as any)(i);
      (s as any).refCounter = 1;
    } catch (i: any) {
      (I as any)(i), s = null;
    }
    return ((this.#i as any).set as any)(t, s), s && ((this.#i as any).set as any)((s as any).id, s), s;
  }
  async getFromFile(t: any): Promise<any> {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: n
    }: any = t;
    return (this.#s as any)(`${e}_${s}_${i}_${n}`, t);
  }
  async getFromUrl(t: any): Promise<any> {
    return (this.#s as any)(t, t);
  }
  async getFromBlob(t: any, e: any): Promise<any> {
    const s: any = await e;
    return (this.#s as any)(t, s);
  }
  async getFromId(t: any): Promise<any> {
    this.#i ||= new (Map as any)();
    const e: any = ((this.#i as any).get as any)(t);
    if (!e) return null;
    if ((e as any).bitmap) return (e as any).refCounter += 1, e;
    if ((e as any).file) return ((this as any).getFromFile as any)((e as any).file);
    if ((e as any).blobPromise) {
      const {
        blobPromise: s
      }: any = e;
      return delete (e as any).blobPromise, ((this as any).getFromBlob as any)((e as any).id, s);
    }
    return ((this as any).getFromUrl as any)((e as any).url);
  }
  getFromCanvas(t: any, e: any): any {
    this.#i ||= new (Map as any)();
    let s: any = ((this.#i as any).get as any)(t);
    if (s?.bitmap) return (s as any).refCounter += 1, s;
    const i: any = new (OffscreenCanvas as any)((e as any).width, (e as any).height);
    return ((((i as any).getContext as any)("2d") as any).drawImage as any)(e, 0, 0), s = {
      bitmap: ((i as any).transferToImageBitmap as any)(),
      id: `image_${this.#t}_${this.#e++}`,
      refCounter: 1,
      isSvg: !1
    }, ((this.#i as any).set as any)(t, s), ((this.#i as any).set as any)((s as any).id, s), s;
  }
  getSvgUrl(t: any): any {
    const e: any = ((this.#i as any).get as any)(t);
    return e?.isSvg ? (e as any).svgUrl : null;
  }
  deleteId(t: any): any {
    this.#i ||= new (Map as any)();
    const e: any = ((this.#i as any).get as any)(t);
    if (!e || ((e as any).refCounter -= 1, ((e as any).refCounter as any) !== (0 as any))) return;
    const {
      bitmap: s
    }: any = e;
    if (!(e as any).url && !(e as any).file) {
      const i: any = new (OffscreenCanvas as any)((s as any).width, (s as any).height);
      ((((i as any).getContext as any)("bitmaprenderer") as any).transferFromImageBitmap as any)(s), (e as any).blobPromise = ((i as any).convertToBlob as any)();
    }
    (s as any).close?.(), (e as any).bitmap = null;
  }
  isValidId(t: any): any {
    return ((t as any).startsWith as any)(`image_${this.#t}_`);
  }
}
class vn {
  [key: string]: any;
  #t: any = [];
  #e: any = !1;
  #i: any;
  #s: any = -1;
  constructor(t: any = 128) {
    this.#i = t;
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: n = NaN,
    overwriteIfSameType: r = !1,
    keepUndo: a = !1
  }: any): any {
    if (i && (t as any)(), this.#e) return;
    const o: any = {
      cmd: t,
      undo: e,
      post: s,
      type: n
    };
    if ((this.#s as any) === (-1 as any)) {
      ((this.#t as any).length as any) > (0 as any) && ((this.#t as any).length = 0), this.#s = 0, ((this.#t as any).push as any)(o);
      return;
    }
    if (r && (((this.#t as any)[this.#s] as any).type as any) === (n as any)) {
      a && ((o as any).undo = ((this.#t as any)[this.#s] as any).undo), (this.#t as any)[this.#s] = o;
      return;
    }
    const l: any = (this.#s as any) + (1 as any);
    (l as any) === (this.#i as any) ? ((this.#t as any).splice as any)(0, 1) : (this.#s = l, (l as any) < ((this.#t as any).length as any) && ((this.#t as any).splice as any)(l)), ((this.#t as any).push as any)(o);
  }
  undo(): any {
    if ((this.#s as any) === (-1 as any)) return;
    this.#e = !0;
    const {
      undo: t,
      post: e
    }: any = (this.#t as any)[this.#s];
    (t as any)(), e?.(), this.#e = !1, this.#s -= 1;
  }
  redo(): any {
    if ((this.#s as any) < (((this.#t as any).length as any) - (1 as any) as any)) {
      this.#s += 1, this.#e = !0;
      const {
        cmd: t,
        post: e
      }: any = (this.#t as any)[this.#s];
      (t as any)(), e?.(), this.#e = !1;
    }
  }
  hasSomethingToUndo(): any {
    return (this.#s as any) !== (-1 as any);
  }
  hasSomethingToRedo(): any {
    return (this.#s as any) < (((this.#t as any).length as any) - (1 as any) as any);
  }
  cleanType(t: any): any {
    if ((this.#s as any) !== (-1 as any)) {
      for (let e: any = this.#s; (e as any) >= (0 as any); e--) if ((((this.#t as any)[e] as any).type as any) !== (t as any)) {
        ((this.#t as any).splice as any)((e as any) + (1 as any), (this.#s as any) - (e as any)), this.#s = e;
        return;
      }
      (this.#t as any).length = 0, this.#s = -1;
    }
  }
  destroy(): any {
    this.#t = null;
  }
}
class Te {
  declare allKeys: any;
  declare callbacks: any;
  declare buffer: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any).buffer = [], (this as any).callbacks = new (Map as any)(), (this as any).allKeys = new (Set as any)();
    const {
      isMac: e
    }: any = (ot as any).platform;
    for (const [s, i, n = {}] of t) for (const r of s) {
      const a: any = ((r as any).startsWith as any)("mac+");
      e && a ? ((((this as any).callbacks as any).set as any)(((r as any).slice as any)(4), {
        callback: i,
        options: n
      }), (((this as any).allKeys as any).add as any)(((((r as any).split as any)("+") as any).at as any)(-1))) : !e && !a && ((((this as any).callbacks as any).set as any)(r, {
        callback: i,
        options: n
      }), (((this as any).allKeys as any).add as any)(((((r as any).split as any)("+") as any).at as any)(-1)));
    }
  }
  #t(t: any): any {
    (t as any).altKey && (((this as any).buffer as any).push as any)("alt"), (t as any).ctrlKey && (((this as any).buffer as any).push as any)("ctrl"), (t as any).metaKey && (((this as any).buffer as any).push as any)("meta"), (t as any).shiftKey && (((this as any).buffer as any).push as any)("shift"), (((this as any).buffer as any).push as any)((t as any).key);
    const e: any = (((this as any).buffer as any).join as any)("+");
    return ((this as any).buffer as any).length = 0, e;
  }
  exec(t: any, e: any): any {
    if (!(((this as any).allKeys as any).has as any)((e as any).key)) return;
    const s: any = (((this as any).callbacks as any).get as any)((this.#t as any)(e));
    if (!s) return;
    const {
      callback: i,
      options: {
        bubbles: n = !1,
        args: r = [],
        checker: a = null
      }
    }: any = s;
    a && !(a as any)(t, e) || ((((i as any).bind as any)(t, ...r, e) as any)(), n || (Q as any)(e));
  }
}
class Ps {
  [key: string]: any;
  static _colorsMapping: any = new (Map as any)([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
  get _colors(): any {
    const t: any = new (Map as any)([["CanvasText", null], ["Canvas", null]]);
    return (pn as any)(t), (N as any)(this, "_colors", t);
  }
  convert(t: any): any {
    const e: any = (xe as any)(t);
    if (!(((window as any).matchMedia as any)("(forced-colors: active)") as any).matches) return e;
    for (const [s, i] of (this as any)._colors) if (((i as any).every as any)((n: any, r: any): any => (n as any) === ((e as any)[r] as any))) return (((Ps as any)._colorsMapping as any).get as any)(s);
    return e;
  }
  getHexCode(t: any): any {
    const e: any = (((this as any)._colors as any).get as any)(t);
    return e ? ((P as any).makeHexColor as any)(...e) : t;
  }
}
class Ut {
  declare _supportsPinchToZoom: any;
  declare isShiftKeyDown: any;
  declare viewParameters: any;
  declare _eventBus: any;
  declare _signal: any;
  [key: string]: any;
  #t: any = new (AbortController as any)();
  #e: any = null;
  #i: any = null;
  #s: any = new (Map as any)();
  #a: any = new (Map as any)();
  #n: any = null;
  #r: any = null;
  #o: any = null;
  #h: any = new (vn as any)();
  #l: any = null;
  #u: any = null;
  #d: any = null;
  #f: any = 0;
  #m: any = new (Set as any)();
  #p: any = null;
  #c: any = null;
  #g: any = new (Set as any)();
  _editorUndoBar: any = null;
  #b: any = !1;
  #A: any = !1;
  #y: any = !1;
  #C: any = null;
  #S: any = null;
  #w: any = null;
  #T: any = null;
  #_: any = !1;
  #E: any = null;
  #M: any = new (wn as any)();
  #P: any = !1;
  #k: any = !1;
  #O: any = !1;
  #D: any = null;
  #I: any = null;
  #B: any = null;
  #F: any = null;
  #G: any = null;
  #x: any = (F as any).NONE;
  #v: any = new (Set as any)();
  #L: any = null;
  #H: any = null;
  #$: any = null;
  #X: any = null;
  #W: any = null;
  #q: any = {
    isEditing: !1,
    isEmpty: !0,
    hasSomethingToUndo: !1,
    hasSomethingToRedo: !1,
    hasSelectedEditor: !1,
    hasSelectedText: !1
  };
  #z: any = [0, 0];
  #N: any = null;
  #V: any = null;
  #J: any = null;
  #Z: any = null;
  #U: any = null;
  static TRANSLATE_SMALL: any = 1;
  static TRANSLATE_BIG: any = 10;
  static get _keyboardManager(): any {
    const t: any = (Ut as any).prototype,
      e: any = (r: any): any => ((r.#V as any).contains as any)((document as any).activeElement) && (((document as any).activeElement as any).tagName as any) !== ("BUTTON" as any) && ((r as any).hasSomethingToControl as any)(),
      s: any = (r: any, {
        target: a
      }: any): any => {
        if (a instanceof HTMLInputElement) {
          const {
            type: o
          }: any = a;
          return (o as any) !== ("text" as any) && (o as any) !== ("number" as any);
        }
        return !0;
      },
      i: any = (this as any).TRANSLATE_SMALL,
      n: any = (this as any).TRANSLATE_BIG;
    return (N as any)(this, "_keyboardManager", new (Te as any)([[["ctrl+a", "mac+meta+a"], (t as any).selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], (t as any).undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], (t as any).redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], (t as any).delete, {
      checker: s
    }], [["Enter", "mac+Enter"], (t as any).addNewEditorFromKeyboard, {
      checker: (r: any, {
        target: a
      }: any): any => !(a instanceof HTMLButtonElement) && ((r.#V as any).contains as any)(a) && !(r as any).isEnterHandled
    }], [[" ", "mac+ "], (t as any).addNewEditorFromKeyboard, {
      checker: (r: any, {
        target: a
      }: any): any => !(a instanceof HTMLButtonElement) && ((r.#V as any).contains as any)((document as any).activeElement)
    }], [["Escape", "mac+Escape"], (t as any).unselectAll], [["ArrowLeft", "mac+ArrowLeft"], (t as any).translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], (t as any).translateSelectedEditors, {
      args: [-n, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], (t as any).translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], (t as any).translateSelectedEditors, {
      args: [n, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], (t as any).translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], (t as any).translateSelectedEditors, {
      args: [0, -n],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], (t as any).translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], (t as any).translateSelectedEditors, {
      args: [0, n],
      checker: e
    }]]));
  }
  constructor(t: any, e: any, s: any, i: any, n: any, r: any, a: any, o: any, l: any, h: any, c: any, u: any, f: any, g: any, p: any, b: any) {
    const m: any = (this as any)._signal = (this.#t as any).signal;
    this.#V = t, this.#J = e, this.#Z = s, this.#n = i, this.#l = n, this.#H = r, this.#W = o, (this as any)._eventBus = a, ((a as any)._on as any)("editingaction", (((this as any).onEditingAction as any).bind as any)(this), {
      signal: m
    }), ((a as any)._on as any)("pagechanging", (((this as any).onPageChanging as any).bind as any)(this), {
      signal: m
    }), ((a as any)._on as any)("scalechanging", (((this as any).onScaleChanging as any).bind as any)(this), {
      signal: m
    }), ((a as any)._on as any)("rotationchanging", (((this as any).onRotationChanging as any).bind as any)(this), {
      signal: m
    }), ((a as any)._on as any)("setpreference", (((this as any).onSetPreference as any).bind as any)(this), {
      signal: m
    }), ((a as any)._on as any)("switchannotationeditorparams", (y: any): any => ((this as any).updateParams as any)((y as any).type, (y as any).value), {
      signal: m
    }), ((window as any).addEventListener as any)("pointerdown", (): any => {
      this.#k = !0;
    }, {
      capture: !0,
      signal: m
    }), ((window as any).addEventListener as any)("pointerup", (): any => {
      this.#k = !1;
    }, {
      capture: !0,
      signal: m
    }), (this.#lt as any)(), (this.#ut as any)(), (this.#et as any)(), this.#r = (o as any).annotationStorage, this.#C = (o as any).filterFactory, this.#$ = l, this.#T = h || null, this.#b = c, this.#A = u, this.#y = f, this.#G = g || null, (this as any).viewParameters = {
      realScale: (ae as any).PDF_TO_CSS_UNITS,
      rotation: 0
    }, (this as any).isShiftKeyDown = !1, (this as any)._editorUndoBar = p || null, (this as any)._supportsPinchToZoom = (b as any) !== (!1 as any), n?.setSidebarUiManager(this);
  }
  destroy(): any {
    this.#U?.resolve(), this.#U = null, this.#t?.abort(), this.#t = null, (this as any)._signal = null;
    for (const t of ((this.#a as any).values as any)()) ((t as any).destroy as any)();
    ((this.#a as any).clear as any)(), ((this.#s as any).clear as any)(), ((this.#g as any).clear as any)(), this.#F?.clear(), this.#e = null, ((this.#v as any).clear as any)(), ((this.#h as any).destroy as any)(), this.#n?.destroy(), this.#l?.destroy(), this.#H?.destroy(), this.#E?.hide(), this.#E = null, this.#B?.destroy(), this.#B = null, this.#i = null, this.#S && ((clearTimeout as any)(this.#S), this.#S = null), this.#N && ((clearTimeout as any)(this.#N), this.#N = null), (this as any)._editorUndoBar?.destroy(), this.#W = null;
  }
  combinedSignal(t: any): any {
    return ((AbortSignal as any).any as any)([(this as any)._signal, (t as any).signal]);
  }
  get mlManager(): any {
    return this.#G;
  }
  get useNewAltTextFlow(): any {
    return this.#A;
  }
  get useNewAltTextWhenAddingImage(): any {
    return this.#y;
  }
  get hcmFilter(): any {
    return (N as any)(this, "hcmFilter", this.#$ ? ((this.#C as any).addHCMFilter as any)((this.#$ as any).foreground, (this.#$ as any).background) : "none");
  }
  get direction(): any {
    return (N as any)(this, "direction", ((getComputedStyle as any)(this.#V) as any).direction);
  }
  get _highlightColors(): any {
    return (N as any)(this, "_highlightColors", this.#T ? new (Map as any)(((((this.#T as any).split as any)(",") as any).map as any)((t: any): any => (t = ((((t as any).split as any)("=") as any).map as any)((e: any): any => ((e as any).trim as any)()), (t as any)[1] = (((t as any)[1] as any).toUpperCase as any)(), t))) : null);
  }
  get highlightColors(): any {
    const {
      _highlightColors: t
    }: any = this;
    if (!t) return (N as any)(this, "highlightColors", null);
    const e: any = new (Map as any)(),
      s: any = !!this.#$;
    for (const [i, n] of t) {
      const r: any = ((i as any).endsWith as any)("_HCM");
      if (s && r) {
        ((e as any).set as any)(((i as any).replace as any)("_HCM", ""), n);
        continue;
      }
      !s && !r && ((e as any).set as any)(i, n);
    }
    return (N as any)(this, "highlightColors", e);
  }
  get highlightColorNames(): any {
    return (N as any)(this, "highlightColorNames", (this as any).highlightColors ? new (Map as any)(((Array as any).from as any)((this as any).highlightColors, (t: any): any => ((t as any).reverse as any)())) : null);
  }
  getNonHCMColor(t: any): any {
    if (!(this as any)._highlightColors) return t;
    const e: any = (((this as any).highlightColorNames as any).get as any)(t);
    return (((this as any)._highlightColors as any).get as any)(e) || t;
  }
  getNonHCMColorName(t: any): any {
    return (((this as any).highlightColorNames as any).get as any)(t) || t;
  }
  setCurrentDrawingSession(t: any): any {
    t ? (((this as any).unselectAll as any)(), ((this as any).disableUserSelect as any)(!0)) : ((this as any).disableUserSelect as any)(!1), this.#d = t;
  }
  setMainHighlightColorPicker(t: any): any {
    this.#B = t;
  }
  editAltText(t: any, e: any = !1): any {
    this.#n?.editAltText(this, t, e);
  }
  hasCommentManager(): any {
    return !!this.#l;
  }
  editComment(t: any, e: any, s: any, i: any): any {
    this.#l?.showDialog(this, t, e, s, i);
  }
  selectComment(t: any, e: any): any {
    ((this.#a as any).get as any)(t)?.getEditorByUID(e)?.toggleComment(!0, !0);
  }
  updateComment(t: any): any {
    this.#l?.updateComment(((t as any).getData as any)());
  }
  updatePopupColor(t: any): any {
    this.#l?.updatePopupColor(t);
  }
  removeComment(t: any): any {
    this.#l?.removeComments([(t as any).uid]);
  }
  toggleComment(t: any, e: any, s: any = void 0): any {
    this.#l?.toggleCommentPopup(t, e, s);
  }
  makeCommentColor(t: any, e: any): any {
    return t && this.#l?.makeCommentColor(t, e) || null;
  }
  getCommentDialogElement(): any {
    return this.#l?.dialogElement || null;
  }
  async waitForEditorsRendered(t: any): Promise<any> {
    if (((this.#a as any).has as any)((t as any) - (1 as any))) return;
    const {
        resolve: e,
        promise: s
      }: any = ((Promise as any).withResolvers as any)(),
      i: any = (n: any): any => {
        ((n as any).pageNumber as any) === (t as any) && ((((this as any)._eventBus as any)._off as any)("editorsrendered", i), (e as any)());
      };
    (((this as any)._eventBus as any).on as any)("editorsrendered", i), await s;
  }
  getSignature(t: any): any {
    this.#H?.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager(): any {
    return this.#H;
  }
  switchToMode(t: any, e: any): any {
    (((this as any)._eventBus as any).on as any)("annotationeditormodechanged", e, {
      once: !0,
      signal: (this as any)._signal
    }), (((this as any)._eventBus as any).dispatch as any)("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t: any, e: any): any {
    (((this as any)._eventBus as any).dispatch as any)("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }: any): any {
    (t as any) === ("enableNewAltTextWhenAddingImage" as any) && (this.#y = e);
  }
  onPageChanging({
    pageNumber: t
  }: any): any {
    this.#f = (t as any) - (1 as any);
  }
  focusMainContainer(): any {
    ((this.#V as any).focus as any)();
  }
  findParent(t: any, e: any): any {
    for (const s of ((this.#a as any).values as any)()) {
      const {
        x: i,
        y: n,
        width: r,
        height: a
      }: any = (((s as any).div as any).getBoundingClientRect as any)();
      if ((t as any) >= (i as any) && (t as any) <= ((i as any) + (r as any) as any) && (e as any) >= (n as any) && (e as any) <= ((n as any) + (a as any) as any)) return s;
    }
    return null;
  }
  disableUserSelect(t: any = !1): any {
    (((this.#J as any).classList as any).toggle as any)("noUserSelect", t);
  }
  addShouldRescale(t: any): any {
    ((this.#g as any).add as any)(t);
  }
  removeShouldRescale(t: any): any {
    ((this.#g as any).delete as any)(t);
  }
  onScaleChanging({
    scale: t
  }: any): any {
    ((this as any).commitOrRemove as any)(), ((this as any).viewParameters as any).realScale = (t as any) * ((ae as any).PDF_TO_CSS_UNITS as any);
    for (const e of this.#g) ((e as any).onScaleChanging as any)();
    this.#d?.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }: any): any {
    ((this as any).commitOrRemove as any)(), ((this as any).viewParameters as any).rotation = t;
  }
  #Q({
    anchorNode: t
  }: any): any {
    return ((t as any).nodeType as any) === ((Node as any).TEXT_NODE as any) ? (t as any).parentElement : t;
  }
  #tt(t: any): any {
    const {
      currentLayer: e
    }: any = this;
    if (((e as any).hasTextLayer as any)(t)) return e;
    for (const s of ((this.#a as any).values as any)()) if (((s as any).hasTextLayer as any)(t)) return s;
    return null;
  }
  highlightSelection(t: any = "", e: any = !1): any {
    const s: any = ((document as any).getSelection as any)();
    if (!s || (s as any).isCollapsed) return;
    const {
        anchorNode: i,
        anchorOffset: n,
        focusNode: r,
        focusOffset: a
      }: any = s,
      o: any = ((s as any).toString as any)(),
      h: any = (((this.#Q as any)(s) as any).closest as any)(".textLayer"),
      c: any = ((this as any).getSelectionBoxes as any)(h);
    if (!c) return;
    ((s as any).empty as any)();
    const u: any = (this.#tt as any)(h),
      f: any = (this.#x as any) === ((F as any).NONE as any),
      g: any = (): any => {
        const p: any = u?.createAndAddNewEditor({
          x: 0,
          y: 0
        }, !1, {
          methodOfCreation: t,
          boxes: c,
          anchorNode: i,
          anchorOffset: n,
          focusNode: r,
          focusOffset: a,
          text: o
        });
        f && ((this as any).showAllEditors as any)("highlight", !0, !0), e && p?.editComment();
      };
    if (f) {
      ((this as any).switchToMode as any)((F as any).HIGHLIGHT, g);
      return;
    }
    (g as any)();
  }
  commentSelection(t: any = ""): any {
    ((this as any).highlightSelection as any)(t, !0);
  }
  #at(): any {
    const t: any = ((document as any).getSelection as any)();
    if (!t || (t as any).isCollapsed) return;
    const s: any = (((this.#Q as any)(t) as any).closest as any)(".textLayer"),
      i: any = ((this as any).getSelectionBoxes as any)(s);
    i && (this.#E ||= new (An as any)(this), ((this.#E as any).show as any)(s, i, ((this as any).direction as any) === ("ltr" as any)));
  }
  getAndRemoveDataFromAnnotationStorage(t: any): any {
    if (!this.#r) return null;
    const e: any = `${ye}${t}`,
      s: any = ((this.#r as any).getRawValue as any)(e);
    return s && ((this.#r as any).remove as any)(e), s;
  }
  addToAnnotationStorage(t: any): any {
    !((t as any).isEmpty as any)() && this.#r && !((this.#r as any).has as any)((t as any).id) && ((this.#r as any).setValue as any)((t as any).id, t);
  }
  a11yAlert(t: any, e: any = null): any {
    const s: any = this.#Z;
    s && (((s as any).setAttribute as any)("data-l10n-id", t), e ? ((s as any).setAttribute as any)("data-l10n-args", ((JSON as any).stringify as any)(e)) : ((s as any).removeAttribute as any)("data-l10n-args"));
  }
  #ot(): any {
    const t: any = ((document as any).getSelection as any)();
    if (!t || (t as any).isCollapsed) {
      this.#L && (this.#E?.hide(), this.#L = null, (this.#R as any)({
        hasSelectedText: !1
      }));
      return;
    }
    const {
      anchorNode: e
    }: any = t;
    if ((e as any) === (this.#L as any)) return;
    const i: any = (((this.#Q as any)(t) as any).closest as any)(".textLayer");
    if (!i) {
      this.#L && (this.#E?.hide(), this.#L = null, (this.#R as any)({
        hasSelectedText: !1
      }));
      return;
    }
    if (this.#E?.hide(), this.#L = e, (this.#R as any)({
      hasSelectedText: !0
    }), !((this.#x as any) !== ((F as any).HIGHLIGHT as any) && (this.#x as any) !== ((F as any).NONE as any)) && ((this.#x as any) === ((F as any).HIGHLIGHT as any) && ((this as any).showAllEditors as any)("highlight", !0, !0), this.#_ = (this as any).isShiftKeyDown, !(this as any).isShiftKeyDown)) {
      const n: any = (this.#x as any) === ((F as any).HIGHLIGHT as any) ? (this.#tt as any)(i) : null;
      if (n?.toggleDrawing(), this.#k) {
        const r: any = new (AbortController as any)(),
          a: any = ((this as any).combinedSignal as any)(r),
          o: any = (l: any): any => {
            ((l as any).type as any) === ("pointerup" as any) && ((l as any).button as any) !== (0 as any) || (((r as any).abort as any)(), n?.toggleDrawing(!0), ((l as any).type as any) === ("pointerup" as any) && (this.#Y as any)("main_toolbar"));
          };
        ((window as any).addEventListener as any)("pointerup", o, {
          signal: a
        }), ((window as any).addEventListener as any)("blur", o, {
          signal: a
        });
      } else n?.toggleDrawing(!0), (this.#Y as any)("main_toolbar");
    }
  }
  #Y(t: any = ""): any {
    (this.#x as any) === ((F as any).HIGHLIGHT as any) ? ((this as any).highlightSelection as any)(t) : this.#b && (this.#at as any)();
  }
  #lt(): any {
    ((document as any).addEventListener as any)("selectionchange", ((this.#ot as any).bind as any)(this), {
      signal: (this as any)._signal
    });
  }
  #ht(): any {
    if (this.#w) return;
    this.#w = new (AbortController as any)();
    const t: any = ((this as any).combinedSignal as any)(this.#w);
    ((window as any).addEventListener as any)("focus", (((this as any).focus as any).bind as any)(this), {
      signal: t
    }), ((window as any).addEventListener as any)("blur", (((this as any).blur as any).bind as any)(this), {
      signal: t
    });
  }
  #ct(): any {
    this.#w?.abort(), this.#w = null;
  }
  blur(): any {
    if ((this as any).isShiftKeyDown = !1, this.#_ && (this.#_ = !1, (this.#Y as any)("main_toolbar")), !(this as any).hasSelection) return;
    const {
      activeElement: t
    }: any = document;
    for (const e of this.#v) if ((((e as any).div as any).contains as any)(t)) {
      this.#I = [e, t], (e as any)._focusEventsAllowed = !1;
      break;
    }
  }
  focus(): any {
    if (!this.#I) return;
    const [t, e]: any = this.#I;
    this.#I = null, ((e as any).addEventListener as any)("focusin", (): any => {
      (t as any)._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: (this as any)._signal
    }), ((e as any).focus as any)();
  }
  #et(): any {
    if (this.#D) return;
    this.#D = new (AbortController as any)();
    const t: any = ((this as any).combinedSignal as any)(this.#D);
    ((window as any).addEventListener as any)("keydown", (((this as any).keydown as any).bind as any)(this), {
      signal: t
    }), ((window as any).addEventListener as any)("keyup", (((this as any).keyup as any).bind as any)(this), {
      signal: t
    });
  }
  #dt(): any {
    this.#D?.abort(), this.#D = null;
  }
  #st(): any {
    if (this.#u) return;
    this.#u = new (AbortController as any)();
    const t: any = ((this as any).combinedSignal as any)(this.#u);
    ((document as any).addEventListener as any)("copy", (((this as any).copy as any).bind as any)(this), {
      signal: t
    }), ((document as any).addEventListener as any)("cut", (((this as any).cut as any).bind as any)(this), {
      signal: t
    }), ((document as any).addEventListener as any)("paste", (((this as any).paste as any).bind as any)(this), {
      signal: t
    });
  }
  #it(): any {
    this.#u?.abort(), this.#u = null;
  }
  #ut(): any {
    const t: any = (this as any)._signal;
    ((document as any).addEventListener as any)("dragover", (((this as any).dragOver as any).bind as any)(this), {
      signal: t
    }), ((document as any).addEventListener as any)("drop", (((this as any).drop as any).bind as any)(this), {
      signal: t
    });
  }
  addEditListeners(): any {
    (this.#et as any)(), (this.#st as any)();
  }
  removeEditListeners(): any {
    (this.#dt as any)(), (this.#it as any)();
  }
  dragOver(t: any): any {
    for (const {
      type: e
    } of ((t as any).dataTransfer as any).items) for (const s of this.#c) if (((s as any).isHandlingMimeForPasting as any)(e)) {
      ((t as any).dataTransfer as any).dropEffect = "copy", ((t as any).preventDefault as any)();
      return;
    }
  }
  drop(t: any): any {
    for (const e of ((t as any).dataTransfer as any).items) for (const s of this.#c) if (((s as any).isHandlingMimeForPasting as any)((e as any).type)) {
      ((s as any).paste as any)(e, (this as any).currentLayer), ((t as any).preventDefault as any)();
      return;
    }
  }
  copy(t: any): any {
    if (((t as any).preventDefault as any)(), this.#e?.commitOrRemove(), !(this as any).hasSelection) return;
    const e: any = [];
    for (const s of this.#v) {
      const i: any = ((s as any).serialize as any)(!0);
      i && ((e as any).push as any)(i);
    }
    ((e as any).length as any) !== (0 as any) && (((t as any).clipboardData as any).setData as any)("application/pdfjs", ((JSON as any).stringify as any)(e));
  }
  cut(t: any): any {
    ((this as any).copy as any)(t), ((this as any).delete as any)();
  }
  async paste(t: any): Promise<any> {
    ((t as any).preventDefault as any)();
    const {
      clipboardData: e
    }: any = t;
    for (const n of (e as any).items) for (const r of this.#c) if (((r as any).isHandlingMimeForPasting as any)((n as any).type)) {
      ((r as any).paste as any)(n, (this as any).currentLayer);
      return;
    }
    let s: any = ((e as any).getData as any)("application/pdfjs");
    if (!s) return;
    try {
      s = ((JSON as any).parse as any)(s);
    } catch (n: any) {
      (I as any)(`paste: "${(n as any).message}".`);
      return;
    }
    if (!((Array as any).isArray as any)(s)) return;
    ((this as any).unselectAll as any)();
    const i: any = (this as any).currentLayer;
    try {
      const n: any = [];
      for (const o of s) {
        const l: any = await ((i as any).deserialize as any)(o);
        if (!l) return;
        ((n as any).push as any)(l);
      }
      const r: any = (): any => {
          for (const o of n) (this.#nt as any)(o);
          (this.#rt as any)(n);
        },
        a: any = (): any => {
          for (const o of n) ((o as any).remove as any)();
        };
      ((this as any).addCommands as any)({
        cmd: r,
        undo: a,
        mustExec: !0
      });
    } catch (n: any) {
      (I as any)(`paste: "${(n as any).message}".`);
    }
  }
  keydown(t: any): any {
    !(this as any).isShiftKeyDown && ((t as any).key as any) === ("Shift" as any) && ((this as any).isShiftKeyDown = !0), (this.#x as any) !== ((F as any).NONE as any) && !(this as any).isEditorHandlingKeyboard && (((Ut as any)._keyboardManager as any).exec as any)(this, t);
  }
  keyup(t: any): any {
    (this as any).isShiftKeyDown && ((t as any).key as any) === ("Shift" as any) && ((this as any).isShiftKeyDown = !1, this.#_ && (this.#_ = !1, (this.#Y as any)("main_toolbar")));
  }
  onEditingAction({
    name: t
  }: any): any {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        ((this as any)[t] as any)();
        break;
      case "highlightSelection":
        ((this as any).highlightSelection as any)("context_menu");
        break;
      case "commentSelection":
        ((this as any).commentSelection as any)("context_menu");
        break;
    }
  }
  #R(t: any): any {
    ((((Object as any).entries as any)(t) as any).some as any)(([s, i]: any): any => ((this.#q as any)[s] as any) !== (i as any)) && ((((this as any)._eventBus as any).dispatch as any)("annotationeditorstateschanged", {
      source: this,
      details: ((Object as any).assign as any)(this.#q, t)
    }), (this.#x as any) === ((F as any).HIGHLIGHT as any) && ((t as any).hasSelectedEditor as any) === (!1 as any) && (this.#j as any)([[(O as any).HIGHLIGHT_FREE, !0]]));
  }
  #j(t: any): any {
    (((this as any)._eventBus as any).dispatch as any)("annotationeditorparamschanged", {
      source: this,
      details: t
    });
  }
  setEditingState(t: any): any {
    t ? ((this.#ht as any)(), (this.#st as any)(), (this.#R as any)({
      isEditing: (this.#x as any) !== ((F as any).NONE as any),
      isEmpty: (this.#K as any)(),
      hasSomethingToUndo: ((this.#h as any).hasSomethingToUndo as any)(),
      hasSomethingToRedo: ((this.#h as any).hasSomethingToRedo as any)(),
      hasSelectedEditor: !1
    })) : ((this.#ct as any)(), (this.#it as any)(), (this.#R as any)({
      isEditing: !1
    }), ((this as any).disableUserSelect as any)(!1));
  }
  registerEditorTypes(t: any): any {
    if (!this.#c) {
      this.#c = t;
      for (const e of this.#c) (this.#j as any)((e as any).defaultPropertiesToUpdate);
    }
  }
  getId(): any {
    return (this.#M as any).id;
  }
  get currentLayer(): any {
    return ((this.#a as any).get as any)(this.#f);
  }
  getLayer(t: any): any {
    return ((this.#a as any).get as any)(t);
  }
  get currentPageIndex(): any {
    return this.#f;
  }
  addLayer(t: any): any {
    ((this.#a as any).set as any)((t as any).pageIndex, t), this.#P ? ((t as any).enable as any)() : ((t as any).disable as any)();
  }
  removeLayer(t: any): any {
    ((this.#a as any).delete as any)((t as any).pageIndex);
  }
  async updateMode(t: any, e: any = null, s: any = !1, i: any = !1, n: any = !1): Promise<any> {
    if ((this.#x as any) !== (t as any) && !(this.#U && (await (this.#U as any).promise, !this.#U))) {
      if (this.#U = ((Promise as any).withResolvers as any)(), this.#d?.commitOrRemove(), (this.#x as any) === ((F as any).POPUP as any) && this.#l?.hideSidebar(), this.#l?.destroyPopup(), this.#x = t, (t as any) === ((F as any).NONE as any)) {
        ((this as any).setEditingState as any)(!1), (this.#pt as any)();
        for (const r of ((this.#s as any).values as any)()) ((r as any).hideStandaloneCommentButton as any)();
        (this as any)._editorUndoBar?.hide(), ((this as any).toggleComment as any)(null), ((this.#U as any).resolve as any)();
        return;
      }
      for (const r of ((this.#s as any).values as any)()) ((r as any).addStandaloneCommentButton as any)();
      (t as any) === ((F as any).SIGNATURE as any) && (await this.#H?.loadSignatures()), ((this as any).setEditingState as any)(!0), await (this.#ft as any)(), ((this as any).unselectAll as any)();
      for (const r of ((this.#a as any).values as any)()) ((r as any).updateMode as any)(t);
      if ((t as any) === ((F as any).POPUP as any)) {
        this.#i ||= await ((this.#W as any).getAnnotationsByType as any)(new (Set as any)(((this.#c as any).map as any)((o: any): any => (o as any)._editorType)));
        const r: any = new (Set as any)(),
          a: any = [];
        for (const o of ((this.#s as any).values as any)()) {
          const {
            annotationElementId: l,
            hasComment: h,
            deleted: c
          }: any = o;
          l && ((r as any).add as any)(l), h && !c && ((a as any).push as any)(((o as any).getData as any)());
        }
        for (const o of this.#i) {
          const {
            id: l,
            popupRef: h,
            contentsObj: c
          }: any = o;
          h && c?.str && !((r as any).has as any)(l) && !((this.#m as any).has as any)(l) && ((a as any).push as any)(o);
        }
        this.#l?.showSidebar(a);
      }
      if (!e) {
        s && ((this as any).addNewEditorFromKeyboard as any)(), ((this.#U as any).resolve as any)();
        return;
      }
      for (const r of ((this.#s as any).values as any)()) ((r as any).uid as any) === (e as any) ? (((this as any).setSelected as any)(r), n ? ((r as any).editComment as any)() : i ? ((r as any).enterInEditMode as any)() : ((r as any).focus as any)()) : ((r as any).unselect as any)();
      ((this.#U as any).resolve as any)();
    }
  }
  addNewEditorFromKeyboard(): any {
    (((this as any).currentLayer as any).canCreateNewEmptyEditor as any)() && (((this as any).currentLayer as any).addNewEditor as any)();
  }
  updateToolbar(t: any): any {
    ((t as any).mode as any) !== (this.#x as any) && (((this as any)._eventBus as any).dispatch as any)("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t: any, e: any): any {
    if (this.#c) {
      switch (t) {
        case (O as any).CREATE:
          (((this as any).currentLayer as any).addNewEditor as any)(e);
          return;
        case (O as any).HIGHLIGHT_SHOW_ALL:
          (((this as any)._eventBus as any).dispatch as any)("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (((this.#X ||= new (Map as any)()) as any).set as any)(t, e), ((this as any).showAllEditors as any)("highlight", e);
          break;
      }
      if ((this as any).hasSelection) for (const s of this.#v) ((s as any).updateParams as any)(t, e);else for (const s of this.#c) ((s as any).updateDefaultParams as any)(t, e);
    }
  }
  showAllEditors(t: any, e: any, s: any = !1): any {
    for (const n of ((this.#s as any).values as any)()) ((n as any).editorType as any) === (t as any) && ((n as any).show as any)(e);
    ((this.#X?.get((O as any).HIGHLIGHT_SHOW_ALL) ?? !0) as any) !== (e as any) && (this.#j as any)([[(O as any).HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t: any = !1): any {
    if ((this.#O as any) !== (t as any)) {
      this.#O = t;
      for (const e of ((this.#a as any).values as any)()) t ? ((e as any).disableClick as any)() : ((e as any).enableClick as any)(), ((((e as any).div as any).classList as any).toggle as any)("waiting", t);
    }
  }
  async #ft(): Promise<any> {
    if (!this.#P) {
      this.#P = !0;
      const t: any = [];
      for (const e of ((this.#a as any).values as any)()) ((t as any).push as any)(((e as any).enable as any)());
      await ((Promise as any).all as any)(t);
      for (const e of ((this.#s as any).values as any)()) ((e as any).enable as any)();
    }
  }
  #pt(): any {
    if (((this as any).unselectAll as any)(), this.#P) {
      this.#P = !1;
      for (const t of ((this.#a as any).values as any)()) ((t as any).disable as any)();
      for (const t of ((this.#s as any).values as any)()) ((t as any).disable as any)();
    }
  }
  *getEditors(t: any): Generator<any, any, any> {
    for (const e of ((this.#s as any).values as any)()) ((e as any).pageIndex as any) === (t as any) && (yield e);
  }
  getEditor(t: any): any {
    return ((this.#s as any).get as any)(t);
  }
  addEditor(t: any): any {
    ((this.#s as any).set as any)((t as any).id, t);
  }
  removeEditor(t: any): any {
    (((t as any).div as any).contains as any)((document as any).activeElement) && (this.#S && (clearTimeout as any)(this.#S), this.#S = (setTimeout as any)((): any => {
      ((this as any).focusMainContainer as any)(), this.#S = null;
    }, 0)), ((this.#s as any).delete as any)((t as any).id), (t as any).annotationElementId && this.#F?.delete((t as any).annotationElementId), ((this as any).unselect as any)(t), (!(t as any).annotationElementId || !((this.#m as any).has as any)((t as any).annotationElementId)) && this.#r?.remove((t as any).id);
  }
  addDeletedAnnotationElement(t: any): any {
    ((this.#m as any).add as any)((t as any).annotationElementId), ((this as any).addChangedExistingAnnotation as any)(t), (t as any).deleted = !0;
  }
  isDeletedAnnotationElement(t: any): any {
    return ((this.#m as any).has as any)(t);
  }
  removeDeletedAnnotationElement(t: any): any {
    ((this.#m as any).delete as any)((t as any).annotationElementId), ((this as any).removeChangedExistingAnnotation as any)(t), (t as any).deleted = !1;
  }
  #nt(t: any): any {
    const e: any = ((this.#a as any).get as any)((t as any).pageIndex);
    e ? ((e as any).addOrRebuild as any)(t) : (((this as any).addEditor as any)(t), ((this as any).addToAnnotationStorage as any)(t));
  }
  setActiveEditor(t: any): any {
    (this.#e as any) !== (t as any) && (this.#e = t, t && (this.#j as any)((t as any).propertiesToUpdate));
  }
  get #gt(): any {
    let t: any = null;
    for (t of this.#v);
    return t;
  }
  updateUI(t: any): any {
    (this.#gt as any) === (t as any) && (this.#j as any)((t as any).propertiesToUpdate);
  }
  updateUIForDefaultProperties(t: any): any {
    (this.#j as any)((t as any).defaultPropertiesToUpdate);
  }
  toggleSelected(t: any): any {
    if (((this.#v as any).has as any)(t)) {
      ((this.#v as any).delete as any)(t), ((t as any).unselect as any)(), (this.#R as any)({
        hasSelectedEditor: (this as any).hasSelection
      });
      return;
    }
    ((this.#v as any).add as any)(t), ((t as any).select as any)(), (this.#j as any)((t as any).propertiesToUpdate), (this.#R as any)({
      hasSelectedEditor: !0
    });
  }
  setSelected(t: any): any {
    ((this as any).updateToolbar as any)({
      mode: (t as any).mode,
      editId: (t as any).id
    }), this.#d?.commitOrRemove();
    for (const e of this.#v) (e as any) !== (t as any) && ((e as any).unselect as any)();
    ((this.#v as any).clear as any)(), ((this.#v as any).add as any)(t), ((t as any).select as any)(), (this.#j as any)((t as any).propertiesToUpdate), (this.#R as any)({
      hasSelectedEditor: !0
    });
  }
  isSelected(t: any): any {
    return ((this.#v as any).has as any)(t);
  }
  get firstSelectedEditor(): any {
    return (((((this.#v as any).values as any)() as any).next as any)() as any).value;
  }
  unselect(t: any): any {
    ((t as any).unselect as any)(), ((this.#v as any).delete as any)(t), (this.#R as any)({
      hasSelectedEditor: (this as any).hasSelection
    });
  }
  get hasSelection(): any {
    return ((this.#v as any).size as any) !== (0 as any);
  }
  get isEnterHandled(): any {
    return ((this.#v as any).size as any) === (1 as any) && ((this as any).firstSelectedEditor as any).isEnterHandled;
  }
  undo(): any {
    ((this.#h as any).undo as any)(), (this.#R as any)({
      hasSomethingToUndo: ((this.#h as any).hasSomethingToUndo as any)(),
      hasSomethingToRedo: !0,
      isEmpty: (this.#K as any)()
    }), (this as any)._editorUndoBar?.hide();
  }
  redo(): any {
    ((this.#h as any).redo as any)(), (this.#R as any)({
      hasSomethingToUndo: !0,
      hasSomethingToRedo: ((this.#h as any).hasSomethingToRedo as any)(),
      isEmpty: (this.#K as any)()
    });
  }
  addCommands(t: any): any {
    ((this.#h as any).add as any)(t), (this.#R as any)({
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: (this.#K as any)()
    });
  }
  cleanUndoStack(t: any): any {
    ((this.#h as any).cleanType as any)(t);
  }
  #K(): any {
    if (((this.#s as any).size as any) === (0 as any)) return !0;
    if (((this.#s as any).size as any) === (1 as any)) for (const t of ((this.#s as any).values as any)()) return ((t as any).isEmpty as any)();
    return !1;
  }
  delete(): any {
    ((this as any).commitOrRemove as any)();
    const t: any = (this as any).currentLayer?.endDrawingSession(!0);
    if (!(this as any).hasSelection && !t) return;
    const e: any = t ? [t] : [...this.#v],
      s: any = (): any => {
        (this as any)._editorUndoBar?.show(i, ((e as any).length as any) === (1 as any) ? ((e as any)[0] as any).editorType : (e as any).length);
        for (const n of e) ((n as any).remove as any)();
      },
      i: any = (): any => {
        for (const n of e) (this.#nt as any)(n);
      };
    ((this as any).addCommands as any)({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove(): any {
    this.#e?.commitOrRemove();
  }
  hasSomethingToControl(): any {
    return this.#e || (this as any).hasSelection;
  }
  #rt(t: any): any {
    for (const e of this.#v) ((e as any).unselect as any)();
    ((this.#v as any).clear as any)();
    for (const e of t) ((e as any).isEmpty as any)() || (((this.#v as any).add as any)(e), ((e as any).select as any)());
    (this.#R as any)({
      hasSelectedEditor: (this as any).hasSelection
    });
  }
  selectAll(): any {
    for (const t of this.#v) ((t as any).commit as any)();
    (this.#rt as any)(((this.#s as any).values as any)());
  }
  unselectAll(): any {
    if (!(this.#e && (((this.#e as any).commitOrRemove as any)(), (this.#x as any) !== ((F as any).NONE as any))) && !this.#d?.commitOrRemove() && (this as any).hasSelection) {
      for (const t of this.#v) ((t as any).unselect as any)();
      ((this.#v as any).clear as any)(), (this.#R as any)({
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t: any, e: any, s: any = !1): any {
    if (s || ((this as any).commitOrRemove as any)(), !(this as any).hasSelection) return;
    (this.#z as any)[0] += t, (this.#z as any)[1] += e;
    const [i, n]: any = this.#z,
      r: any = [...this.#v],
      a: number = 1e3;
    this.#N && (clearTimeout as any)(this.#N), this.#N = (setTimeout as any)((): any => {
      this.#N = null, (this.#z as any)[0] = (this.#z as any)[1] = 0, ((this as any).addCommands as any)({
        cmd: (): any => {
          for (const o of r) ((this.#s as any).has as any)((o as any).id) && (((o as any).translateInPage as any)(i, n), ((o as any).translationDone as any)());
        },
        undo: (): any => {
          for (const o of r) ((this.#s as any).has as any)((o as any).id) && (((o as any).translateInPage as any)(-i, -n), ((o as any).translationDone as any)());
        },
        mustExec: !1
      });
    }, a);
    for (const o of r) ((o as any).translateInPage as any)(t, e), ((o as any).translationDone as any)();
  }
  setUpDragSession(): any {
    if ((this as any).hasSelection) {
      ((this as any).disableUserSelect as any)(!0), this.#p = new (Map as any)();
      for (const t of this.#v) ((this.#p as any).set as any)(t, {
        savedX: (t as any).x,
        savedY: (t as any).y,
        savedPageIndex: (t as any).pageIndex,
        newX: 0,
        newY: 0,
        newPageIndex: -1
      });
    }
  }
  endDragSession(): any {
    if (!this.#p) return !1;
    ((this as any).disableUserSelect as any)(!1);
    const t: any = this.#p;
    this.#p = null;
    let e: any = !1;
    for (const [{
      x: i,
      y: n,
      pageIndex: r
    }, a] of t) (a as any).newX = i, (a as any).newY = n, (a as any).newPageIndex = r, e ||= (i as any) !== ((a as any).savedX as any) || (n as any) !== ((a as any).savedY as any) || (r as any) !== ((a as any).savedPageIndex as any);
    if (!e) return !1;
    const s: any = (i: any, n: any, r: any, a: any): any => {
      if (((this.#s as any).has as any)((i as any).id)) {
        const o: any = ((this.#a as any).get as any)(a);
        o ? ((i as any)._setParentAndPosition as any)(o, n, r) : ((i as any).pageIndex = a, (i as any).x = n, (i as any).y = r);
      }
    };
    return ((this as any).addCommands as any)({
      cmd: (): any => {
        for (const [i, {
          newX: n,
          newY: r,
          newPageIndex: a
        }] of t) (s as any)(i, n, r, a);
      },
      undo: (): any => {
        for (const [i, {
          savedX: n,
          savedY: r,
          savedPageIndex: a
        }] of t) (s as any)(i, n, r, a);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t: any, e: any): any {
    if (this.#p) for (const s of ((this.#p as any).keys as any)()) ((s as any).drag as any)(t, e);
  }
  rebuild(t: any): any {
    if (((t as any).parent as any) === (null as any)) {
      const e: any = ((this as any).getLayer as any)((t as any).pageIndex);
      e ? (((e as any).changeParent as any)(t), ((e as any).addOrRebuild as any)(t)) : (((this as any).addEditor as any)(t), ((this as any).addToAnnotationStorage as any)(t), ((t as any).rebuild as any)());
    } else (((t as any).parent as any).addOrRebuild as any)(t);
  }
  get isEditorHandlingKeyboard(): any {
    return ((this as any).getActive as any)()?.shouldGetKeyboardEvents() || ((this.#v as any).size as any) === (1 as any) && (((this as any).firstSelectedEditor as any).shouldGetKeyboardEvents as any)();
  }
  isActive(t: any): any {
    return (this.#e as any) === (t as any);
  }
  getActive(): any {
    return this.#e;
  }
  getMode(): any {
    return this.#x;
  }
  isEditingMode(): any {
    return (this.#x as any) !== ((F as any).NONE as any);
  }
  get imageManager(): any {
    return (N as any)(this, "imageManager", new (Ts as any)());
  }
  getSelectionBoxes(t: any): any {
    if (!t) return null;
    const e: any = ((document as any).getSelection as any)();
    for (let l: any = 0, h: any = (e as any).rangeCount; (l as any) < (h as any); l++) if (!((t as any).contains as any)((((e as any).getRangeAt as any)(l) as any).commonAncestorContainer)) return null;
    const {
      x: s,
      y: i,
      width: n,
      height: r
    }: any = ((t as any).getBoundingClientRect as any)();
    let a: any;
    switch (((t as any).getAttribute as any)("data-main-rotation")) {
      case "90":
        a = (l: any, h: any, c: any, u: any): any => ({
          x: ((h as any) - (i as any) as any) / (r as any),
          y: (1 as any) - ((((l as any) + (c as any) as any) - (s as any) as any) / (n as any) as any),
          width: (u as any) / (r as any),
          height: (c as any) / (n as any)
        });
        break;
      case "180":
        a = (l: any, h: any, c: any, u: any): any => ({
          x: (1 as any) - ((((l as any) + (c as any) as any) - (s as any) as any) / (n as any) as any),
          y: (1 as any) - ((((h as any) + (u as any) as any) - (i as any) as any) / (r as any) as any),
          width: (c as any) / (n as any),
          height: (u as any) / (r as any)
        });
        break;
      case "270":
        a = (l: any, h: any, c: any, u: any): any => ({
          x: (1 as any) - ((((h as any) + (u as any) as any) - (i as any) as any) / (r as any) as any),
          y: ((l as any) - (s as any) as any) / (n as any),
          width: (u as any) / (r as any),
          height: (c as any) / (n as any)
        });
        break;
      default:
        a = (l: any, h: any, c: any, u: any): any => ({
          x: ((l as any) - (s as any) as any) / (n as any),
          y: ((h as any) - (i as any) as any) / (r as any),
          width: (c as any) / (n as any),
          height: (u as any) / (r as any)
        });
        break;
    }
    const o: any = [];
    for (let l: any = 0, h: any = (e as any).rangeCount; (l as any) < (h as any); l++) {
      const c: any = ((e as any).getRangeAt as any)(l);
      if (!(c as any).collapsed) for (const {
        x: u,
        y: f,
        width: g,
        height: p
      } of ((c as any).getClientRects as any)()) (g as any) === (0 as any) || (p as any) === (0 as any) || ((o as any).push as any)((a as any)(u, f, g, p));
    }
    return ((o as any).length as any) === (0 as any) ? null : o;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }: any): any {
    (((this.#o ||= new (Map as any)()) as any).set as any)(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }: any): any {
    this.#o?.delete(t);
  }
  renderAnnotationElement(t: any): any {
    const e: any = this.#o?.get(((t as any).data as any).id);
    if (!e) return;
    const s: any = ((this.#r as any).getRawValue as any)(e);
    s && ((this.#x as any) === ((F as any).NONE as any) && !(s as any).hasBeenModified || ((s as any).renderAnnotationElement as any)(t));
  }
  setMissingCanvas(t: any, e: any, s: any): any {
    const i: any = this.#F?.get(t);
    i && (((i as any).setCanvas as any)(e, s), ((this.#F as any).delete as any)(t));
  }
  addMissingCanvas(t: any, e: any): any {
    (((this.#F ||= new (Map as any)()) as any).set as any)(t, e);
  }
}
class Pt {
  [key: string]: any;
  #t: any = null;
  #e: any = !1;
  #i: any = null;
  #s: any = null;
  #a: any = null;
  #n: any = null;
  #r: any = !1;
  #o: any = null;
  #h: any = null;
  #l: any = null;
  #u: any = null;
  #d: any = !1;
  static #f: any = null;
  static _l10n: any = null;
  constructor(t: any) {
    this.#h = t, this.#d = ((t as any)._uiManager as any).useNewAltTextFlow, Pt.#f ||= ((Object as any).freeze as any)({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    });
  }
  static initialize(t: any): any {
    (Pt as any)._l10n ??= t;
  }
  async render(): Promise<any> {
    const t: any = this.#i = ((document as any).createElement as any)("button");
    (t as any).className = "altText", (t as any).tabIndex = "0";
    const e: any = this.#s = ((document as any).createElement as any)("span");
    ((t as any).append as any)(e), this.#d ? ((((t as any).classList as any).add as any)("new"), ((t as any).setAttribute as any)("data-l10n-id", (Pt.#f as any).missing), ((e as any).setAttribute as any)("data-l10n-id", (Pt.#f as any)["missing-label"])) : (((t as any).setAttribute as any)("data-l10n-id", "pdfjs-editor-alt-text-button"), ((e as any).setAttribute as any)("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s: any = ((this.#h as any)._uiManager as any)._signal;
    ((t as any).addEventListener as any)("contextmenu", vt, {
      signal: s
    }), ((t as any).addEventListener as any)("pointerdown", (n: any): any => ((n as any).stopPropagation as any)(), {
      signal: s
    });
    const i: any = (n: any): any => {
      ((n as any).preventDefault as any)(), (((this.#h as any)._uiManager as any).editAltText as any)(this.#h), this.#d && ((this.#h as any)._reportTelemetry as any)({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: this.#m
        }
      });
    };
    return ((t as any).addEventListener as any)("click", i, {
      capture: !0,
      signal: s
    }), ((t as any).addEventListener as any)("keydown", (n: any): any => {
      ((n as any).target as any) === (t as any) && ((n as any).key as any) === ("Enter" as any) && (this.#r = !0, (i as any)(n));
    }, {
      signal: s
    }), await (this.#p as any)(), t;
  }
  get #m(): any {
    return this.#t && "added" || (this.#t as any) === (null as any) && (this as any).guessedText && "review" || "missing";
  }
  finish(): any {
    this.#i && (((this.#i as any).focus as any)({
      focusVisible: this.#r
    }), this.#r = !1);
  }
  isEmpty(): any {
    return this.#d ? (this.#t as any) === (null as any) : !this.#t && !this.#e;
  }
  hasData(): any {
    return this.#d ? (this.#t as any) !== (null as any) || !!this.#l : ((this as any).isEmpty as any)();
  }
  get guessedText(): any {
    return this.#l;
  }
  async setGuessedText(t: any): Promise<any> {
    (this.#t as any) === (null as any) && (this.#l = t, this.#u = await (((Pt as any)._l10n as any).get as any)("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    }), (this.#p as any)());
  }
  toggleAltTextBadge(t: any = !1): any {
    if (!this.#d || this.#t) {
      this.#o?.remove(), this.#o = null;
      return;
    }
    if (!this.#o) {
      const e: any = this.#o = ((document as any).createElement as any)("div");
      (e as any).className = "noAltTextBadge", (((this.#h as any).div as any).append as any)(e);
    }
    (((this.#o as any).classList as any).toggle as any)("hidden", !t);
  }
  serialize(t: any): any {
    let e: any = this.#t;
    return !t && (this.#l as any) === (e as any) && (e = this.#u), {
      altText: e,
      decorative: this.#e,
      guessedText: this.#l,
      textWithDisclaimer: this.#u
    };
  }
  get data(): any {
    return {
      altText: this.#t,
      decorative: this.#e
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: n = !1
  }: any) {
    s && (this.#l = s, this.#u = i), !((this.#t as any) === (t as any) && (this.#e as any) === (e as any)) && (n || (this.#t = t, this.#e = e), (this.#p as any)());
  }
  toggle(t: any = !1): any {
    this.#i && (!t && this.#n && ((clearTimeout as any)(this.#n), this.#n = null), (this.#i as any).disabled = !t);
  }
  shown(): any {
    ((this.#h as any)._reportTelemetry as any)({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: this.#m
      }
    });
  }
  destroy(): any {
    this.#i?.remove(), this.#i = null, this.#s = null, this.#a = null, this.#o?.remove(), this.#o = null;
  }
  async #p(): Promise<any> {
    const t: any = this.#i;
    if (!t) return;
    if (this.#d) {
      if ((((t as any).classList as any).toggle as any)("done", !!this.#t), ((t as any).setAttribute as any)("data-l10n-id", (Pt.#f as any)[this.#m]), this.#s?.setAttribute("data-l10n-id", (Pt.#f as any)[`${this.#m}-label`]), !this.#t) {
        this.#a?.remove();
        return;
      }
    } else {
      if (!this.#t && !this.#e) {
        (((t as any).classList as any).remove as any)("done"), this.#a?.remove();
        return;
      }
      (((t as any).classList as any).add as any)("done"), ((t as any).setAttribute as any)("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let e: any = this.#a;
    if (!e) {
      this.#a = e = ((document as any).createElement as any)("span"), (e as any).className = "tooltip", ((e as any).setAttribute as any)("role", "tooltip"), (e as any).id = `alt-text-tooltip-${(this.#h as any).id}`;
      const i: number = 100,
        n: any = ((this.#h as any)._uiManager as any)._signal;
      ((n as any).addEventListener as any)("abort", (): any => {
        (clearTimeout as any)(this.#n), this.#n = null;
      }, {
        once: !0
      }), ((t as any).addEventListener as any)("mouseenter", (): any => {
        this.#n = (setTimeout as any)((): any => {
          this.#n = null, (((this.#a as any).classList as any).add as any)("show"), ((this.#h as any)._reportTelemetry as any)({
            action: "alt_text_tooltip"
          });
        }, i);
      }, {
        signal: n
      }), ((t as any).addEventListener as any)("mouseleave", (): any => {
        this.#n && ((clearTimeout as any)(this.#n), this.#n = null), this.#a?.classList.remove("show");
      }, {
        signal: n
      });
    }
    this.#e ? ((e as any).setAttribute as any)("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (((e as any).removeAttribute as any)("data-l10n-id"), (e as any).textContent = this.#t), (e as any).parentNode || ((t as any).append as any)(e), ((this.#h as any).getElementForAltText as any)()?.setAttribute("aria-describedby", (e as any).id);
  }
}
class Re {
  [key: string]: any;
  #t: any = null;
  #e: any = null;
  #i: any = !1;
  #s: any = null;
  #a: any = null;
  #n: any = null;
  #r: any = null;
  #o: any = null;
  #h: any = !1;
  #l: any = null;
  constructor(t: any) {
    this.#s = t;
  }
  renderForToolbar(): any {
    const t: any = this.#e = ((document as any).createElement as any)("button");
    return (t as any).className = "comment", (this.#u as any)(t, !1);
  }
  renderForStandalone(): any {
    const t: any = this.#t = ((document as any).createElement as any)("button");
    (t as any).className = "annotationCommentButton";
    const e: any = (this.#s as any).commentButtonPosition;
    if (e) {
      const {
        style: s
      }: any = t;
      (s as any).insetInlineEnd = `calc(${(100 as any) * (((((this.#s as any)._uiManager as any).direction as any) === ("ltr" as any) ? (1 as any) - ((e as any)[0] as any) : (e as any)[0]) as any)}% - var(--comment-button-dim))`, (s as any).top = `calc(${(100 as any) * ((e as any)[1] as any)}% - var(--comment-button-dim))`;
      const i: any = (this.#s as any).commentButtonColor;
      i && ((s as any).backgroundColor = i);
    }
    return (this.#u as any)(t, !0);
  }
  focusButton(): any {
    (setTimeout as any)((): any => {
      (this.#t ?? this.#e)?.focus();
    }, 0);
  }
  onUpdatedColor(): any {
    if (!this.#t) return;
    const t: any = (this.#s as any).commentButtonColor;
    t && (((this.#t as any).style as any).backgroundColor = t), (((this.#s as any)._uiManager as any).updatePopupColor as any)(this.#s);
  }
  get commentButtonWidth(): any {
    return ((this.#t?.getBoundingClientRect().width ?? 0) as any) / ((((this.#s as any).parent as any).boundingClientRect as any).width as any);
  }
  get commentPopupPositionInLayer(): any {
    if (this.#l) return this.#l;
    if (!this.#t) return null;
    const {
        x: t,
        y: e,
        height: s
      }: any = ((this.#t as any).getBoundingClientRect as any)(),
      {
        x: i,
        y: n,
        width: r,
        height: a
      }: any = ((this.#s as any).parent as any).boundingClientRect;
    return [((t as any) - (i as any) as any) / (r as any), (((e as any) + (s as any) as any) - (n as any) as any) / (a as any)];
  }
  set commentPopupPositionInLayer(t: any) {
    this.#l = t;
  }
  hasDefaultPopupPosition(): any {
    return (this.#l as any) === (null as any);
  }
  removeStandaloneCommentButton(): any {
    this.#t?.remove(), this.#t = null;
  }
  removeToolbarCommentButton(): any {
    this.#e?.remove(), this.#e = null;
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }: any): any {
    this.#t && ((((this.#t as any).classList as any).toggle as any)("selected", t), (this.#t as any).ariaExpanded = e);
  }
  #u(t: any, e: any): any {
    if (!(((this.#s as any)._uiManager as any).hasCommentManager as any)()) return null;
    (t as any).tabIndex = "0", (t as any).ariaHasPopup = "dialog", e ? ((t as any).ariaControls = "commentPopup", ((t as any).setAttribute as any)("data-l10n-id", "pdfjs-show-comment-button")) : ((t as any).ariaControlsElements = [(((this.#s as any)._uiManager as any).getCommentDialogElement as any)()], ((t as any).setAttribute as any)("data-l10n-id", "pdfjs-editor-edit-comment-button"));
    const s: any = ((this.#s as any)._uiManager as any)._signal;
    if (!(s instanceof AbortSignal) || (s as any).aborted) return t;
    ((t as any).addEventListener as any)("contextmenu", vt, {
      signal: s
    }), e && (((t as any).addEventListener as any)("focusin", (n: any): any => {
      (this.#s as any)._focusEventsAllowed = !1, (Q as any)(n);
    }, {
      capture: !0,
      signal: s
    }), ((t as any).addEventListener as any)("focusout", (n: any): any => {
      (this.#s as any)._focusEventsAllowed = !0, (Q as any)(n);
    }, {
      capture: !0,
      signal: s
    })), ((t as any).addEventListener as any)("pointerdown", (n: any): any => ((n as any).stopPropagation as any)(), {
      signal: s
    });
    const i: any = (n: any): any => {
      ((n as any).preventDefault as any)(), (t as any) === (this.#e as any) ? ((this as any).edit as any)() : ((this.#s as any).toggleComment as any)(!0);
    };
    return ((t as any).addEventListener as any)("click", i, {
      capture: !0,
      signal: s
    }), ((t as any).addEventListener as any)("keydown", (n: any): any => {
      ((n as any).target as any) === (t as any) && ((n as any).key as any) === ("Enter" as any) && (this.#i = !0, (i as any)(n));
    }, {
      signal: s
    }), ((t as any).addEventListener as any)("pointerenter", (): any => {
      ((this.#s as any).toggleComment as any)(!1, !0);
    }, {
      signal: s
    }), ((t as any).addEventListener as any)("pointerleave", (): any => {
      ((this.#s as any).toggleComment as any)(!1, !1);
    }, {
      signal: s
    }), t;
  }
  edit(t: any): any {
    const e: any = (this as any).commentPopupPositionInLayer;
    let s: any, i: any;
    if (e) [s, i] = e;else {
      [s, i] = (this.#s as any).commentButtonPosition;
      const {
        width: h,
        height: c,
        x: u,
        y: f
      }: any = this.#s;
      s = (u as any) + ((s as any) * (h as any) as any), i = (f as any) + ((i as any) * (c as any) as any);
    }
    const n: any = ((this.#s as any).parent as any).boundingClientRect,
      {
        x: r,
        y: a,
        width: o,
        height: l
      }: any = n;
    (((this.#s as any)._uiManager as any).editComment as any)(this.#s, (r as any) + ((s as any) * (o as any) as any), (a as any) + ((i as any) * (l as any) as any), {
      ...t,
      parentDimensions: n
    });
  }
  finish(): any {
    this.#e && (((this.#e as any).focus as any)({
      focusVisible: this.#i
    }), this.#i = !1);
  }
  isDeleted(): any {
    return this.#h || (this.#r as any) === ("" as any);
  }
  isEmpty(): any {
    return (this.#r as any) === (null as any);
  }
  hasBeenEdited(): any {
    return ((this as any).isDeleted as any)() || (this.#r as any) !== (this.#a as any);
  }
  serialize(): any {
    return (this as any).data;
  }
  get data(): any {
    return {
      text: this.#r,
      richText: this.#n,
      date: this.#o,
      deleted: ((this as any).isDeleted as any)()
    };
  }
  set data(t: any) {
    if ((t as any) !== (this.#r as any) && (this.#n = null), (t as any) === (null as any)) {
      this.#r = "", this.#h = !0;
      return;
    }
    this.#r = t, this.#o = new (Date as any)(), this.#h = !1;
  }
  setInitialText(t: any, e: any = null): any {
    this.#a = t, (this as any).data = t, this.#o = null, this.#n = e;
  }
  shown(): any {}
  destroy(): any {
    this.#e?.remove(), this.#e = null, this.#t?.remove(), this.#t = null, this.#r = "", this.#n = null, this.#o = null, this.#s = null, this.#i = !1, this.#h = !1;
  }
}
class Qe {
  [key: string]: any;
  #t: any;
  #e: any = !1;
  #i: any = null;
  #s: any;
  #a: any;
  #n: any;
  #r: any;
  #o: any = null;
  #h: any;
  #l: any = null;
  #u: any;
  #d: any = null;
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: n = null,
    onPinchEnd: r = null,
    signal: a
  }: any) {
    this.#t = t, this.#i = s, this.#s = e, this.#a = i, this.#n = n, this.#r = r, this.#u = new (AbortController as any)(), this.#h = ((AbortSignal as any).any as any)([a, (this.#u as any).signal]), ((t as any).addEventListener as any)("touchstart", ((this.#f as any).bind as any)(this), {
      passive: !1,
      signal: this.#h
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH(): any {
    return (35 as any) / ((kt as any).pixelRatio as any);
  }
  #f(t: any): any {
    if (this.#s?.()) return;
    if ((((t as any).touches as any).length as any) === (1 as any)) {
      if (this.#o) return;
      const i: any = this.#o = new (AbortController as any)(),
        n: any = ((AbortSignal as any).any as any)([this.#h, (i as any).signal]),
        r: any = this.#t,
        a: any = {
          capture: !0,
          signal: n,
          passive: !1
        },
        o: any = (l: any): any => {
          ((l as any).pointerType as any) === ("touch" as any) && (this.#o?.abort(), this.#o = null);
        };
      ((r as any).addEventListener as any)("pointerdown", (l: any): any => {
        ((l as any).pointerType as any) === ("touch" as any) && ((Q as any)(l), (o as any)(l));
      }, a), ((r as any).addEventListener as any)("pointerup", o, a), ((r as any).addEventListener as any)("pointercancel", o, a);
      return;
    }
    if (!this.#d) {
      this.#d = new (AbortController as any)();
      const i: any = ((AbortSignal as any).any as any)([this.#h, (this.#d as any).signal]),
        n: any = this.#t,
        r: any = {
          signal: i,
          capture: !1,
          passive: !1
        };
      ((n as any).addEventListener as any)("touchmove", ((this.#m as any).bind as any)(this), r);
      const a: any = ((this.#p as any).bind as any)(this);
      ((n as any).addEventListener as any)("touchend", a, r), ((n as any).addEventListener as any)("touchcancel", a, r), (r as any).capture = !0, ((n as any).addEventListener as any)("pointerdown", Q, r), ((n as any).addEventListener as any)("pointermove", Q, r), ((n as any).addEventListener as any)("pointercancel", Q, r), ((n as any).addEventListener as any)("pointerup", Q, r), this.#a?.();
    }
    if ((Q as any)(t), (((t as any).touches as any).length as any) !== (2 as any) || this.#i?.()) {
      this.#l = null;
      return;
    }
    let [e, s]: any = (t as any).touches;
    ((e as any).identifier as any) > ((s as any).identifier as any) && ([e, s] = [s, e]), this.#l = {
      touch0X: (e as any).screenX,
      touch0Y: (e as any).screenY,
      touch1X: (s as any).screenX,
      touch1Y: (s as any).screenY
    };
  }
  #m(t: any): any {
    if (!this.#l || (((t as any).touches as any).length as any) !== (2 as any)) return;
    (Q as any)(t);
    let [e, s]: any = (t as any).touches;
    ((e as any).identifier as any) > ((s as any).identifier as any) && ([e, s] = [s, e]);
    const {
        screenX: i,
        screenY: n
      }: any = e,
      {
        screenX: r,
        screenY: a
      }: any = s,
      o: any = this.#l,
      {
        touch0X: l,
        touch0Y: h,
        touch1X: c,
        touch1Y: u
      }: any = o,
      f: any = (c as any) - (l as any),
      g: any = (u as any) - (h as any),
      p: any = (r as any) - (i as any),
      b: any = (a as any) - (n as any),
      m: any = ((Math as any).hypot as any)(p, b) || 1,
      y: any = ((Math as any).hypot as any)(f, g) || 1;
    if (!this.#e && (((Math as any).abs as any)((y as any) - (m as any)) as any) <= ((Qe as any).MIN_TOUCH_DISTANCE_TO_PINCH as any)) return;
    if ((o as any).touch0X = i, (o as any).touch0Y = n, (o as any).touch1X = r, (o as any).touch1Y = a, !this.#e) {
      this.#e = !0;
      return;
    }
    const A: any = [((i as any) + (r as any) as any) / (2 as any), ((n as any) + (a as any) as any) / (2 as any)];
    this.#n?.(A, y, m);
  }
  #p(t: any): any {
    (((t as any).touches as any).length as any) >= (2 as any) || (this.#d && (((this.#d as any).abort as any)(), this.#d = null, this.#r?.()), this.#l && ((Q as any)(t), this.#l = null, this.#e = !1));
  }
  destroy(): any {
    this.#u?.abort(), this.#u = null, this.#o?.abort(), this.#o = null;
  }
}
class M {
  declare deleted: any;
  declare isAttachedToDOM: any;
  declare y: any;
  declare x: any;
  declare pageTranslation: any;
  declare pageDimensions: any;
  declare pageRotation: any;
  declare rotation: any;
  declare modificationDate: any;
  declare creationDate: any;
  declare _structTreeParentId: any;
  declare _willKeepAspectRatio: any;
  declare annotationElementId: any;
  declare div: any;
  declare name: any;
  declare pageIndex: any;
  declare height: any;
  declare width: any;
  declare id: any;
  declare parent: any;
  [key: string]: any;
  #t: any = null;
  #e: any = null;
  #i: any = null;
  #s: any = null;
  #a: any = null;
  #n: any = !1;
  #r: any = null;
  #o: any = "";
  #h: any = null;
  #l: any = null;
  #u: any = null;
  #d: any = null;
  #f: any = null;
  #m: any = "";
  #p: any = !1;
  #c: any = null;
  #g: any = !1;
  #b: any = !1;
  #A: any = !1;
  #y: any = null;
  #C: any = 0;
  #S: any = 0;
  #w: any = null;
  #T: any = null;
  isSelected: any = !1;
  _isCopy: any = !1;
  _editToolbar: any = null;
  _initialOptions: any = ((Object as any).create as any)(null);
  _initialData: any = null;
  _isVisible: any = !0;
  _uiManager: any = null;
  _focusEventsAllowed: any = !0;
  static _l10n: any = null;
  static _l10nResizer: any = null;
  #_: any = !1;
  #E: any = (M as any)._zIndex++;
  static _borderLineWidth: any = -1;
  static _colorManager: any = new (Ps as any)();
  static _zIndex: any = 1;
  static _telemetryTimeout: any = 1e3;
  static get _resizerKeyboardManager(): any {
    const t: any = ((M as any).prototype as any)._resizeWithKeyboard,
      e: any = (Ut as any).TRANSLATE_SMALL,
      s: any = (Ut as any).TRANSLATE_BIG;
    return (N as any)(this, "_resizerKeyboardManager", new (Te as any)([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape", "mac+Escape"], ((M as any).prototype as any)._stopResizingWithKeyboard]]));
  }
  constructor(t: any) {
    (this as any).parent = (t as any).parent, (this as any).id = (t as any).id, (this as any).width = (this as any).height = null, (this as any).pageIndex = ((t as any).parent as any).pageIndex, (this as any).name = (t as any).name, (this as any).div = null, (this as any)._uiManager = (t as any).uiManager, (this as any).annotationElementId = null, (this as any)._willKeepAspectRatio = !1, ((this as any)._initialOptions as any).isCentered = (t as any).isCentered, (this as any)._structTreeParentId = null, (this as any).annotationElementId = (t as any).annotationElementId || null, (this as any).creationDate = (t as any).creationDate || new (Date as any)(), (this as any).modificationDate = (t as any).modificationDate || null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: n,
        pageY: r
      }
    }: any = ((this as any).parent as any).viewport;
    (this as any).rotation = e, (this as any).pageRotation = (((360 as any) + (e as any) as any) - ((((this as any)._uiManager as any).viewParameters as any).rotation as any) as any) % (360 as any), (this as any).pageDimensions = [s, i], (this as any).pageTranslation = [n, r];
    const [a, o]: any = (this as any).parentDimensions;
    (this as any).x = ((t as any).x as any) / (a as any), (this as any).y = ((t as any).y as any) / (o as any), (this as any).isAttachedToDOM = !1, (this as any).deleted = !1;
  }
  get editorType(): any {
    return ((((Object as any).getPrototypeOf as any)(this) as any).constructor as any)._type;
  }
  get mode(): any {
    return ((((Object as any).getPrototypeOf as any)(this) as any).constructor as any)._editorType;
  }
  static get isDrawer(): any {
    return !1;
  }
  static get _defaultLineColor(): any {
    return (N as any)(this, "_defaultLineColor", (((this as any)._colorManager as any).getHexCode as any)("CanvasText"));
  }
  static deleteAnnotationElement(t: any): any {
    const e: any = new (_n as any)({
      id: (((t as any).parent as any).getNextId as any)(),
      parent: (t as any).parent,
      uiManager: (t as any)._uiManager
    });
    (e as any).annotationElementId = (t as any).annotationElementId, (e as any).deleted = !0, (((e as any)._uiManager as any).addToAnnotationStorage as any)(e);
  }
  static initialize(t: any, e: any): any {
    if ((M as any)._l10n ??= t, (M as any)._l10nResizer ||= ((Object as any).freeze as any)({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    }), ((M as any)._borderLineWidth as any) !== (-1 as any)) return;
    const s: any = (getComputedStyle as any)((document as any).documentElement);
    (M as any)._borderLineWidth = (parseFloat as any)(((s as any).getPropertyValue as any)("--outline-width")) || 0;
  }
  static updateDefaultParams(t: any, e: any): any {}
  static get defaultPropertiesToUpdate(): any {
    return [];
  }
  static isHandlingMimeForPasting(t: any): any {
    return !1;
  }
  static paste(t: any, e: any): any {
    (G as any)("Not implemented");
  }
  get propertiesToUpdate(): any {
    return [];
  }
  get _isDraggable(): any {
    return this.#_;
  }
  set _isDraggable(t: any) {
    this.#_ = t, (this as any).div?.classList.toggle("draggable", t);
  }
  get uid(): any {
    return (this as any).annotationElementId || (this as any).id;
  }
  get isEnterHandled(): any {
    return !0;
  }
  center(): any {
    const [t, e]: any = (this as any).pageDimensions;
    switch ((this as any).parentRotation) {
      case 90:
        (this as any).x -= (((this as any).height as any) * (e as any) as any) / ((t as any) * (2 as any) as any), (this as any).y += (((this as any).width as any) * (t as any) as any) / ((e as any) * (2 as any) as any);
        break;
      case 180:
        (this as any).x += ((this as any).width as any) / (2 as any), (this as any).y += ((this as any).height as any) / (2 as any);
        break;
      case 270:
        (this as any).x += (((this as any).height as any) * (e as any) as any) / ((t as any) * (2 as any) as any), (this as any).y -= (((this as any).width as any) * (t as any) as any) / ((e as any) * (2 as any) as any);
        break;
      default:
        (this as any).x -= ((this as any).width as any) / (2 as any), (this as any).y -= ((this as any).height as any) / (2 as any);
        break;
    }
    ((this as any).fixAndSetPosition as any)();
  }
  addCommands(t: any): any {
    (((this as any)._uiManager as any).addCommands as any)(t);
  }
  get currentLayer(): any {
    return ((this as any)._uiManager as any).currentLayer;
  }
  setInBackground(): any {
    (((this as any).div as any).style as any).zIndex = 0;
  }
  setInForeground(): any {
    (((this as any).div as any).style as any).zIndex = this.#E;
  }
  setParent(t: any): any {
    (t as any) !== (null as any) ? ((this as any).pageIndex = (t as any).pageIndex, (this as any).pageDimensions = (t as any).pageDimensions) : ((this.#N as any)(), this.#d?.remove(), this.#d = null), (this as any).parent = t;
  }
  focusin(t: any): any {
    (this as any)._focusEventsAllowed && (this.#p ? this.#p = !1 : (((this as any).parent as any).setSelected as any)(this));
  }
  focusout(t: any): any {
    !(this as any)._focusEventsAllowed || !(this as any).isAttachedToDOM || (t as any).relatedTarget?.closest(`#${(this as any).id}`) || (((t as any).preventDefault as any)(), (this as any).parent?.isMultipleSelection || ((this as any).commitOrRemove as any)());
  }
  commitOrRemove(): any {
    ((this as any).isEmpty as any)() ? ((this as any).remove as any)() : ((this as any).commit as any)();
  }
  commit(): any {
    ((this as any).isInEditMode as any)() && ((this as any).addToAnnotationStorage as any)();
  }
  addToAnnotationStorage(): any {
    (((this as any)._uiManager as any).addToAnnotationStorage as any)(this);
  }
  setAt(t: any, e: any, s: any, i: any): any {
    const [n, r]: any = (this as any).parentDimensions;
    [s, i] = ((this as any).screenToPageTranslation as any)(s, i), (this as any).x = ((t as any) + (s as any) as any) / (n as any), (this as any).y = ((e as any) + (i as any) as any) / (r as any), ((this as any).fixAndSetPosition as any)();
  }
  _moveAfterPaste(t: any, e: any): any {
    const [s, i]: any = (this as any).parentDimensions;
    ((this as any).setAt as any)((t as any) * (s as any), (e as any) * (i as any), ((this as any).width as any) * (s as any), ((this as any).height as any) * (i as any)), ((this as any)._onTranslated as any)();
  }
  #M([t, e]: any, s: any, i: any): any {
    [s, i] = ((this as any).screenToPageTranslation as any)(s, i), (this as any).x += (s as any) / (t as any), (this as any).y += (i as any) / (e as any), ((this as any)._onTranslating as any)((this as any).x, (this as any).y), ((this as any).fixAndSetPosition as any)();
  }
  translate(t: any, e: any): any {
    (this.#M as any)((this as any).parentDimensions, t, e);
  }
  translateInPage(t: any, e: any): any {
    this.#c ||= [(this as any).x, (this as any).y, (this as any).width, (this as any).height], (this.#M as any)((this as any).pageDimensions, t, e), (((this as any).div as any).scrollIntoView as any)({
      block: "nearest"
    });
  }
  translationDone(): any {
    ((this as any)._onTranslated as any)((this as any).x, (this as any).y);
  }
  drag(t: any, e: any): any {
    this.#c ||= [(this as any).x, (this as any).y, (this as any).width, (this as any).height];
    const {
      div: s,
      parentDimensions: [i, n]
    }: any = this;
    if ((this as any).x += (t as any) / (i as any), (this as any).y += (e as any) / (n as any), (this as any).parent && (((this as any).x as any) < (0 as any) || ((this as any).x as any) > (1 as any) || ((this as any).y as any) < (0 as any) || ((this as any).y as any) > (1 as any))) {
      const {
        x: c,
        y: u
      }: any = (((this as any).div as any).getBoundingClientRect as any)();
      (((this as any).parent as any).findNewParent as any)(this, c, u) && ((this as any).x -= ((Math as any).floor as any)((this as any).x), (this as any).y -= ((Math as any).floor as any)((this as any).y));
    }
    let {
      x: r,
      y: a
    }: any = this;
    const [o, l]: any = ((this as any).getBaseTranslation as any)();
    r += o, a += l;
    const {
      style: h
    }: any = s;
    (h as any).left = `${(((100 as any) * (r as any) as any).toFixed as any)(2)}%`, (h as any).top = `${(((100 as any) * (a as any) as any).toFixed as any)(2)}%`, ((this as any)._onTranslating as any)(r, a), ((s as any).scrollIntoView as any)({
      block: "nearest"
    });
  }
  _onTranslating(t: any, e: any): any {}
  _onTranslated(t: any, e: any): any {}
  get _hasBeenMoved(): any {
    return !!this.#c && (((this.#c as any)[0] as any) !== ((this as any).x as any) || ((this.#c as any)[1] as any) !== ((this as any).y as any));
  }
  get _hasBeenResized(): any {
    return !!this.#c && (((this.#c as any)[2] as any) !== ((this as any).width as any) || ((this.#c as any)[3] as any) !== ((this as any).height as any));
  }
  getBaseTranslation(): any {
    const [t, e]: any = (this as any).parentDimensions,
      {
        _borderLineWidth: s
      }: any = M,
      i: any = (s as any) / (t as any),
      n: any = (s as any) / (e as any);
    switch ((this as any).rotation) {
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
  get _mustFixPosition(): any {
    return !0;
  }
  fixAndSetPosition(t: any = (this as any).rotation): any {
    const {
      div: {
        style: e
      },
      pageDimensions: [s, i]
    }: any = this;
    let {
      x: n,
      y: r,
      width: a,
      height: o
    }: any = this;
    if (a *= s, o *= i, n *= s, r *= i, (this as any)._mustFixPosition) switch (t) {
      case 0:
        n = (dt as any)(n, 0, (s as any) - (a as any)), r = (dt as any)(r, 0, (i as any) - (o as any));
        break;
      case 90:
        n = (dt as any)(n, 0, (s as any) - (o as any)), r = (dt as any)(r, a, i);
        break;
      case 180:
        n = (dt as any)(n, a, s), r = (dt as any)(r, o, i);
        break;
      case 270:
        n = (dt as any)(n, o, s), r = (dt as any)(r, 0, (i as any) - (a as any));
        break;
    }
    (this as any).x = n /= s, (this as any).y = r /= i;
    const [l, h]: any = ((this as any).getBaseTranslation as any)();
    n += l, r += h, (e as any).left = `${(((100 as any) * (n as any) as any).toFixed as any)(2)}%`, (e as any).top = `${(((100 as any) * (r as any) as any).toFixed as any)(2)}%`, ((this as any).moveInDOM as any)();
  }
  static #P(t: any, e: any, s: any): any {
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
  screenToPageTranslation(t: any, e: any): any {
    return (M.#P as any)(t, e, (this as any).parentRotation);
  }
  pageTranslationToScreen(t: any, e: any): any {
    return (M.#P as any)(t, e, (360 as any) - ((this as any).parentRotation as any));
  }
  #k(t: any): any {
    switch (t) {
      case 90:
        {
          const [e, s]: any = (this as any).pageDimensions;
          return [0, (-e as any) / (s as any), (s as any) / (e as any), 0];
        }
      case 180:
        return [-1, 0, 0, -1];
      case 270:
        {
          const [e, s]: any = (this as any).pageDimensions;
          return [0, (e as any) / (s as any), (-s as any) / (e as any), 0];
        }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale(): any {
    return (((this as any)._uiManager as any).viewParameters as any).realScale;
  }
  get parentRotation(): any {
    return (((((this as any)._uiManager as any).viewParameters as any).rotation as any) + ((this as any).pageRotation as any) as any) % (360 as any);
  }
  get parentDimensions(): any {
    const {
      parentScale: t,
      pageDimensions: [e, s]
    }: any = this;
    return [(e as any) * (t as any), (s as any) * (t as any)];
  }
  setDims(): any {
    const {
      div: {
        style: t
      },
      width: e,
      height: s
    }: any = this;
    (t as any).width = `${(((100 as any) * (e as any) as any).toFixed as any)(2)}%`, (t as any).height = `${(((100 as any) * (s as any) as any).toFixed as any)(2)}%`;
  }
  getInitialTranslation(): any {
    return [0, 0];
  }
  #O(): any {
    if (this.#h) return;
    this.#h = ((document as any).createElement as any)("div"), (((this.#h as any).classList as any).add as any)("resizers");
    const t: any = (this as any)._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"],
      e: any = ((this as any)._uiManager as any)._signal;
    for (const s of t) {
      const i: any = ((document as any).createElement as any)("div");
      ((this.#h as any).append as any)(i), (((i as any).classList as any).add as any)("resizer", s), ((i as any).setAttribute as any)("data-resizer-name", s), ((i as any).addEventListener as any)("pointerdown", ((this.#D as any).bind as any)(this, s), {
        signal: e
      }), ((i as any).addEventListener as any)("contextmenu", vt, {
        signal: e
      }), (i as any).tabIndex = -1;
    }
    (((this as any).div as any).prepend as any)(this.#h);
  }
  #D(t: any, e: any): any {
    ((e as any).preventDefault as any)();
    const {
      isMac: s
    }: any = (ot as any).platform;
    if (((e as any).button as any) !== (0 as any) || (e as any).ctrlKey && s) return;
    this.#i?.toggle(!1);
    const i: any = (this as any)._isDraggable;
    (this as any)._isDraggable = !1, this.#l = [(e as any).screenX, (e as any).screenY];
    const n: any = new (AbortController as any)(),
      r: any = (((this as any)._uiManager as any).combinedSignal as any)(n);
    (((this as any).parent as any).togglePointerEvents as any)(!1), ((window as any).addEventListener as any)("pointermove", ((this.#F as any).bind as any)(this, t), {
      passive: !0,
      capture: !0,
      signal: r
    }), ((window as any).addEventListener as any)("touchmove", Q, {
      passive: !1,
      signal: r
    }), ((window as any).addEventListener as any)("contextmenu", vt, {
      signal: r
    }), this.#u = {
      savedX: (this as any).x,
      savedY: (this as any).y,
      savedWidth: (this as any).width,
      savedHeight: (this as any).height
    };
    const a: any = ((((this as any).parent as any).div as any).style as any).cursor,
      o: any = (((this as any).div as any).style as any).cursor;
    (((this as any).div as any).style as any).cursor = ((((this as any).parent as any).div as any).style as any).cursor = (((window as any).getComputedStyle as any)((e as any).target) as any).cursor;
    const l: any = (): any => {
      ((n as any).abort as any)(), (((this as any).parent as any).togglePointerEvents as any)(!0), this.#i?.toggle(!0), (this as any)._isDraggable = i, ((((this as any).parent as any).div as any).style as any).cursor = a, (((this as any).div as any).style as any).cursor = o, (this.#B as any)();
    };
    ((window as any).addEventListener as any)("pointerup", l, {
      signal: r
    }), ((window as any).addEventListener as any)("blur", l, {
      signal: r
    });
  }
  #I(t: any, e: any, s: any, i: any): any {
    (this as any).width = s, (this as any).height = i, (this as any).x = t, (this as any).y = e, ((this as any).setDims as any)(), ((this as any).fixAndSetPosition as any)(), ((this as any)._onResized as any)();
  }
  _onResized(): any {}
  #B(): any {
    if (!this.#u) return;
    const {
      savedX: t,
      savedY: e,
      savedWidth: s,
      savedHeight: i
    }: any = this.#u;
    this.#u = null;
    const n: any = (this as any).x,
      r: any = (this as any).y,
      a: any = (this as any).width,
      o: any = (this as any).height;
    (n as any) === (t as any) && (r as any) === (e as any) && (a as any) === (s as any) && (o as any) === (i as any) || ((this as any).addCommands as any)({
      cmd: ((this.#I as any).bind as any)(this, n, r, a, o),
      undo: ((this.#I as any).bind as any)(this, t, e, s, i),
      mustExec: !0
    });
  }
  static _round(t: any): any {
    return (((Math as any).round as any)((t as any) * (1e4 as any)) as any) / (1e4 as any);
  }
  #F(t: any, e: any): any {
    const [s, i]: any = (this as any).parentDimensions,
      n: any = (this as any).x,
      r: any = (this as any).y,
      a: any = (this as any).width,
      o: any = (this as any).height,
      l: any = ((M as any).MIN_SIZE as any) / (s as any),
      h: any = ((M as any).MIN_SIZE as any) / (i as any),
      c: any = (this.#k as any)((this as any).rotation),
      u: any = (R: any, L: any): any => [(((c as any)[0] as any) * (R as any) as any) + (((c as any)[2] as any) * (L as any) as any), (((c as any)[1] as any) * (R as any) as any) + (((c as any)[3] as any) * (L as any) as any)],
      f: any = (this.#k as any)((360 as any) - ((this as any).rotation as any)),
      g: any = (R: any, L: any): any => [(((f as any)[0] as any) * (R as any) as any) + (((f as any)[2] as any) * (L as any) as any), (((f as any)[1] as any) * (R as any) as any) + (((f as any)[3] as any) * (L as any) as any)];
    let p: any,
      b: any,
      m: any = !1,
      y: any = !1;
    switch (t) {
      case "topLeft":
        m = !0, p = (R: any, L: any): any => [0, 0], b = (R: any, L: any): any => [R, L];
        break;
      case "topMiddle":
        p = (R: any, L: any): any => [(R as any) / (2 as any), 0], b = (R: any, L: any): any => [(R as any) / (2 as any), L];
        break;
      case "topRight":
        m = !0, p = (R: any, L: any): any => [R, 0], b = (R: any, L: any): any => [0, L];
        break;
      case "middleRight":
        y = !0, p = (R: any, L: any): any => [R, (L as any) / (2 as any)], b = (R: any, L: any): any => [0, (L as any) / (2 as any)];
        break;
      case "bottomRight":
        m = !0, p = (R: any, L: any): any => [R, L], b = (R: any, L: any): any => [0, 0];
        break;
      case "bottomMiddle":
        p = (R: any, L: any): any => [(R as any) / (2 as any), L], b = (R: any, L: any): any => [(R as any) / (2 as any), 0];
        break;
      case "bottomLeft":
        m = !0, p = (R: any, L: any): any => [0, L], b = (R: any, L: any): any => [R, 0];
        break;
      case "middleLeft":
        y = !0, p = (R: any, L: any): any => [0, (L as any) / (2 as any)], b = (R: any, L: any): any => [R, (L as any) / (2 as any)];
        break;
    }
    const A: any = (p as any)(a, o),
      w: any = (b as any)(a, o);
    let v: any = (u as any)(...w);
    const _: any = ((M as any)._round as any)((n as any) + ((v as any)[0] as any)),
      S: any = ((M as any)._round as any)((r as any) + ((v as any)[1] as any));
    let E: any = 1,
      C: any = 1,
      k: any,
      T: any;
    if ((e as any).fromKeyboard) ({
      deltaX: k,
      deltaY: T
    } = e);else {
      const {
          screenX: R,
          screenY: L
        }: any = e,
        [H, lt]: any = this.#l;
      [k, T] = ((this as any).screenToPageTranslation as any)((R as any) - (H as any), (L as any) - (lt as any)), (this.#l as any)[0] = R, (this.#l as any)[1] = L;
    }
    if ([k, T] = (g as any)((k as any) / (s as any), (T as any) / (i as any)), m) {
      const R: any = ((Math as any).hypot as any)(a, o);
      E = C = ((Math as any).max as any)(((Math as any).min as any)((((Math as any).hypot as any)((((w as any)[0] as any) - ((A as any)[0] as any) as any) - (k as any), (((w as any)[1] as any) - ((A as any)[1] as any) as any) - (T as any)) as any) / (R as any), (1 as any) / (a as any), (1 as any) / (o as any)), (l as any) / (a as any), (h as any) / (o as any));
    } else y ? E = ((dt as any)(((Math as any).abs as any)((((w as any)[0] as any) - ((A as any)[0] as any) as any) - (k as any)), l, 1) as any) / (a as any) : C = ((dt as any)(((Math as any).abs as any)((((w as any)[1] as any) - ((A as any)[1] as any) as any) - (T as any)), h, 1) as any) / (o as any);
    const U: any = ((M as any)._round as any)((a as any) * (E as any)),
      $: any = ((M as any)._round as any)((o as any) * (C as any));
    v = (u as any)(...(b as any)(U, $));
    const z: any = (_ as any) - ((v as any)[0] as any),
      V: any = (S as any) - ((v as any)[1] as any);
    this.#c ||= [(this as any).x, (this as any).y, (this as any).width, (this as any).height], (this as any).width = U, (this as any).height = $, (this as any).x = z, (this as any).y = V, ((this as any).setDims as any)(), ((this as any).fixAndSetPosition as any)(), ((this as any)._onResizing as any)();
  }
  _onResizing(): any {}
  altTextFinish(): any {
    this.#i?.finish();
  }
  get toolbarButtons(): any {
    return null;
  }
  async addEditToolbar(): Promise<any> {
    if ((this as any)._editToolbar || this.#b) return (this as any)._editToolbar;
    (this as any)._editToolbar = new (me as any)(this), (((this as any).div as any).append as any)((((this as any)._editToolbar as any).render as any)());
    const {
      toolbarButtons: t
    }: any = this;
    if (t) for (const [e, s] of t) await (((this as any)._editToolbar as any).addButton as any)(e, s);
    return (this as any).hasComment || (((this as any)._editToolbar as any).addButton as any)("comment", ((this as any).addCommentButton as any)()), (((this as any)._editToolbar as any).addButton as any)("delete"), (this as any)._editToolbar;
  }
  addCommentButtonInToolbar(): any {
    (this as any)._editToolbar?.addButtonBefore("comment", ((this as any).addCommentButton as any)(), ".deleteButton");
  }
  removeCommentButtonFromToolbar(): any {
    (this as any)._editToolbar?.removeButton("comment");
  }
  removeEditToolbar(): any {
    (this as any)._editToolbar?.remove(), (this as any)._editToolbar = null, this.#i?.destroy();
  }
  addContainer(t: any): any {
    const e: any = (this as any)._editToolbar?.div;
    e ? ((e as any).before as any)(t) : (((this as any).div as any).append as any)(t);
  }
  getClientDimensions(): any {
    return (((this as any).div as any).getBoundingClientRect as any)();
  }
  createAltText(): any {
    return this.#i || (((Pt as any).initialize as any)((M as any)._l10n), this.#i = new (Pt as any)(this), this.#t && ((this.#i as any).data = this.#t, this.#t = null)), this.#i;
  }
  get altTextData(): any {
    return this.#i?.data;
  }
  set altTextData(t: any) {
    this.#i && ((this.#i as any).data = t);
  }
  get guessedAltText(): any {
    return this.#i?.guessedText;
  }
  async setGuessedAltText(t: any): Promise<any> {
    await this.#i?.setGuessedText(t);
  }
  serializeAltText(t: any): any {
    return this.#i?.serialize(t);
  }
  hasAltText(): any {
    return !!this.#i && !((this.#i as any).isEmpty as any)();
  }
  hasAltTextData(): any {
    return this.#i?.hasData() ?? !1;
  }
  focusCommentButton(): any {
    this.#s?.focusButton();
  }
  addCommentButton(): any {
    return this.#s ||= new (Re as any)(this);
  }
  addStandaloneCommentButton(): any {
    if (this.#a) {
      (((this as any)._uiManager as any).isEditingMode as any)() && (((this.#a as any).classList as any).remove as any)("hidden");
      return;
    }
    (this as any).hasComment && (this.#a = ((this.#s as any).renderForStandalone as any)(), (((this as any).div as any).append as any)(this.#a));
  }
  removeStandaloneCommentButton(): any {
    ((this.#s as any).removeStandaloneCommentButton as any)(), this.#a = null;
  }
  hideStandaloneCommentButton(): any {
    this.#a?.classList.add("hidden");
  }
  get comment(): any {
    const {
      data: {
        richText: t,
        text: e,
        date: s,
        deleted: i
      }
    }: any = this.#s;
    return {
      text: e,
      richText: t,
      date: s,
      deleted: i,
      color: ((this as any).getNonHCMColor as any)(),
      opacity: (this as any).opacity ?? 1
    };
  }
  set comment(t: any) {
    this.#s ||= new (Re as any)(this), (this.#s as any).data = t, (this as any).hasComment ? (((this as any).removeCommentButtonFromToolbar as any)(), ((this as any).addStandaloneCommentButton as any)(), (((this as any)._uiManager as any).updateComment as any)(this)) : (((this as any).addCommentButtonInToolbar as any)(), ((this as any).removeStandaloneCommentButton as any)(), (((this as any)._uiManager as any).removeComment as any)(this));
  }
  setCommentData({
    comment: t,
    popupRef: e,
    richText: s
  }: any): any {
    if (!e || (this.#s ||= new (Re as any)(this), ((this.#s as any).setInitialText as any)(t, s), !(this as any).annotationElementId)) return;
    const i: any = (((this as any)._uiManager as any).getAndRemoveDataFromAnnotationStorage as any)((this as any).annotationElementId);
    i && ((this as any).updateFromAnnotationLayer as any)(i);
  }
  get hasEditedComment(): any {
    return this.#s?.hasBeenEdited();
  }
  get hasDeletedComment(): any {
    return this.#s?.isDeleted();
  }
  get hasComment(): any {
    return !!this.#s && !((this.#s as any).isEmpty as any)() && !((this.#s as any).isDeleted as any)();
  }
  async editComment(t: any): Promise<any> {
    this.#s ||= new (Re as any)(this), ((this.#s as any).edit as any)(t);
  }
  toggleComment(t: any, e: any = void 0): any {
    (this as any).hasComment && (((this as any)._uiManager as any).toggleComment as any)(this, t, e);
  }
  setSelectedCommentButton(t: any): any {
    ((this.#s as any).setSelectedButton as any)(t);
  }
  addComment(t: any): any {
    if ((this as any).hasEditedComment) {
      const [,,, i]: any = (t as any).rect,
        [n]: any = (this as any).pageDimensions,
        [r]: any = (this as any).pageTranslation,
        a: any = ((r as any) + (n as any) as any) + (1 as any),
        o: any = (i as any) - (100 as any),
        l: any = (a as any) + (180 as any);
      (t as any).popup = {
        contents: ((this as any).comment as any).text,
        deleted: ((this as any).comment as any).deleted,
        rect: [a, o, l, i]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e
    }
  }: any): any {
    (this.#s as any).data = e ? null : t;
  }
  get parentBoundingClientRect(): any {
    return ((this as any).parent as any).boundingClientRect;
  }
  render(): any {
    const t: any = (this as any).div = ((document as any).createElement as any)("div");
    ((t as any).setAttribute as any)("data-editor-rotation", ((360 as any) - ((this as any).rotation as any) as any) % (360 as any)), (t as any).className = (this as any).name, ((t as any).setAttribute as any)("id", (this as any).id), (t as any).tabIndex = this.#n ? -1 : 0, ((t as any).setAttribute as any)("role", "application"), (this as any).defaultL10nId && ((t as any).setAttribute as any)("data-l10n-id", (this as any).defaultL10nId), (this as any)._isVisible || (((t as any).classList as any).add as any)("hidden"), ((this as any).setInForeground as any)(), (this.#$ as any)();
    const [e, s]: any = (this as any).parentDimensions;
    (((this as any).parentRotation as any) % (180 as any) as any) !== (0 as any) && (((t as any).style as any).maxWidth = `${((((100 as any) * (s as any) as any) / (e as any) as any).toFixed as any)(2)}%`, ((t as any).style as any).maxHeight = `${((((100 as any) * (e as any) as any) / (s as any) as any).toFixed as any)(2)}%`);
    const [i, n]: any = ((this as any).getInitialTranslation as any)();
    return ((this as any).translate as any)(i, n), (Si as any)(this, t, ["keydown", "pointerdown", "dblclick"]), (this as any).isResizable && ((this as any)._uiManager as any)._supportsPinchToZoom && (this.#T ||= new (Qe as any)({
      container: t,
      isPinchingDisabled: (): any => !(this as any).isSelected,
      onPinchStart: ((this.#G as any).bind as any)(this),
      onPinching: ((this.#x as any).bind as any)(this),
      onPinchEnd: ((this.#v as any).bind as any)(this),
      signal: ((this as any)._uiManager as any)._signal
    })), ((this as any).addStandaloneCommentButton as any)(), ((this as any)._uiManager as any)._editorUndoBar?.hide(), t;
  }
  #G(): any {
    this.#u = {
      savedX: (this as any).x,
      savedY: (this as any).y,
      savedWidth: (this as any).width,
      savedHeight: (this as any).height
    }, this.#i?.toggle(!1), (((this as any).parent as any).togglePointerEvents as any)(!1);
  }
  #x(t: any, e: any, s: any): any {
    let n: any = (((.7 as any) * ((s as any) / (e as any) as any) as any) + (1 as any) as any) - (.7 as any);
    if ((n as any) === (1 as any)) return;
    const r: any = (this.#k as any)((this as any).rotation),
      a: any = (_: any, S: any): any => [(((r as any)[0] as any) * (_ as any) as any) + (((r as any)[2] as any) * (S as any) as any), (((r as any)[1] as any) * (_ as any) as any) + (((r as any)[3] as any) * (S as any) as any)],
      [o, l]: any = (this as any).parentDimensions,
      h: any = (this as any).x,
      c: any = (this as any).y,
      u: any = (this as any).width,
      f: any = (this as any).height,
      g: any = ((M as any).MIN_SIZE as any) / (o as any),
      p: any = ((M as any).MIN_SIZE as any) / (l as any);
    n = ((Math as any).max as any)(((Math as any).min as any)(n, (1 as any) / (u as any), (1 as any) / (f as any)), (g as any) / (u as any), (p as any) / (f as any));
    const b: any = ((M as any)._round as any)((u as any) * (n as any)),
      m: any = ((M as any)._round as any)((f as any) * (n as any));
    if ((b as any) === (u as any) && (m as any) === (f as any)) return;
    this.#c ||= [h, c, u, f];
    const y: any = (a as any)((u as any) / (2 as any), (f as any) / (2 as any)),
      A: any = ((M as any)._round as any)((h as any) + ((y as any)[0] as any)),
      w: any = ((M as any)._round as any)((c as any) + ((y as any)[1] as any)),
      v: any = (a as any)((b as any) / (2 as any), (m as any) / (2 as any));
    (this as any).x = (A as any) - ((v as any)[0] as any), (this as any).y = (w as any) - ((v as any)[1] as any), (this as any).width = b, (this as any).height = m, ((this as any).setDims as any)(), ((this as any).fixAndSetPosition as any)(), ((this as any)._onResizing as any)();
  }
  #v(): any {
    this.#i?.toggle(!0), (((this as any).parent as any).togglePointerEvents as any)(!0), (this.#B as any)();
  }
  pointerdown(t: any): any {
    const {
      isMac: e
    }: any = (ot as any).platform;
    if (((t as any).button as any) !== (0 as any) || (t as any).ctrlKey && e) {
      ((t as any).preventDefault as any)();
      return;
    }
    if (this.#p = !0, (this as any)._isDraggable) {
      (this.#H as any)(t);
      return;
    }
    (this.#L as any)(t);
  }
  #L(t: any): any {
    const {
      isMac: e
    }: any = (ot as any).platform;
    (t as any).ctrlKey && !e || (t as any).shiftKey || (t as any).metaKey && e ? (((this as any).parent as any).toggleSelected as any)(this) : (((this as any).parent as any).setSelected as any)(this);
  }
  #H(t: any): any {
    const {
      isSelected: e
    }: any = this;
    (((this as any)._uiManager as any).setUpDragSession as any)();
    let s: any = !1;
    const i: any = new (AbortController as any)(),
      n: any = (((this as any)._uiManager as any).combinedSignal as any)(i),
      r: any = {
        capture: !0,
        passive: !1,
        signal: n
      },
      a: any = (l: any): any => {
        ((i as any).abort as any)(), this.#r = null, this.#p = !1, (((this as any)._uiManager as any).endDragSession as any)() || (this.#L as any)(l), s && ((this as any)._onStopDragging as any)();
      };
    e && (this.#C = (t as any).clientX, this.#S = (t as any).clientY, this.#r = (t as any).pointerId, this.#o = (t as any).pointerType, ((window as any).addEventListener as any)("pointermove", (l: any): any => {
      s || (s = !0, (((this as any)._uiManager as any).toggleComment as any)(this, !0, !1), ((this as any)._onStartDragging as any)());
      const {
        clientX: h,
        clientY: c,
        pointerId: u
      }: any = l;
      if ((u as any) !== (this.#r as any)) {
        (Q as any)(l);
        return;
      }
      const [f, g]: any = ((this as any).screenToPageTranslation as any)((h as any) - (this.#C as any), (c as any) - (this.#S as any));
      this.#C = h, this.#S = c, (((this as any)._uiManager as any).dragSelectedEditors as any)(f, g);
    }, r), ((window as any).addEventListener as any)("touchmove", Q, r), ((window as any).addEventListener as any)("pointerdown", (l: any): any => {
      ((l as any).pointerType as any) === (this.#o as any) && (this.#T || (l as any).isPrimary) && (a as any)(l), (Q as any)(l);
    }, r));
    const o: any = (l: any): any => {
      if (!this.#r || (this.#r as any) === ((l as any).pointerId as any)) {
        (a as any)(l);
        return;
      }
      (Q as any)(l);
    };
    ((window as any).addEventListener as any)("pointerup", o, {
      signal: n
    }), ((window as any).addEventListener as any)("blur", o, {
      signal: n
    });
  }
  _onStartDragging(): any {}
  _onStopDragging(): any {}
  moveInDOM(): any {
    this.#y && (clearTimeout as any)(this.#y), this.#y = (setTimeout as any)((): any => {
      this.#y = null, (this as any).parent?.moveEditorInDOM(this);
    }, 0);
  }
  _setParentAndPosition(t: any, e: any, s: any): any {
    ((t as any).changeParent as any)(this), (this as any).x = e, (this as any).y = s, ((this as any).fixAndSetPosition as any)(), ((this as any)._onTranslated as any)();
  }
  getRect(t: any, e: any, s: any = (this as any).rotation): any {
    const i: any = (this as any).parentScale,
      [n, r]: any = (this as any).pageDimensions,
      [a, o]: any = (this as any).pageTranslation,
      l: any = (t as any) / (i as any),
      h: any = (e as any) / (i as any),
      c: any = ((this as any).x as any) * (n as any),
      u: any = ((this as any).y as any) * (r as any),
      f: any = ((this as any).width as any) * (n as any),
      g: any = ((this as any).height as any) * (r as any);
    switch (s) {
      case 0:
        return [((c as any) + (l as any) as any) + (a as any), ((((r as any) - (u as any) as any) - (h as any) as any) - (g as any) as any) + (o as any), (((c as any) + (l as any) as any) + (f as any) as any) + (a as any), (((r as any) - (u as any) as any) - (h as any) as any) + (o as any)];
      case 90:
        return [((c as any) + (h as any) as any) + (a as any), (((r as any) - (u as any) as any) + (l as any) as any) + (o as any), (((c as any) + (h as any) as any) + (g as any) as any) + (a as any), ((((r as any) - (u as any) as any) + (l as any) as any) + (f as any) as any) + (o as any)];
      case 180:
        return [(((c as any) - (l as any) as any) - (f as any) as any) + (a as any), (((r as any) - (u as any) as any) + (h as any) as any) + (o as any), ((c as any) - (l as any) as any) + (a as any), ((((r as any) - (u as any) as any) + (h as any) as any) + (g as any) as any) + (o as any)];
      case 270:
        return [(((c as any) - (h as any) as any) - (g as any) as any) + (a as any), ((((r as any) - (u as any) as any) - (l as any) as any) - (f as any) as any) + (o as any), ((c as any) - (h as any) as any) + (a as any), (((r as any) - (u as any) as any) - (l as any) as any) + (o as any)];
      default:
        throw new (Error as any)("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t: any, e: any): any {
    const [s, i, n, r]: any = t,
      a: any = (n as any) - (s as any),
      o: any = (r as any) - (i as any);
    switch ((this as any).rotation) {
      case 0:
        return [s, (e as any) - (r as any), a, o];
      case 90:
        return [s, (e as any) - (i as any), o, a];
      case 180:
        return [n, (e as any) - (i as any), a, o];
      case 270:
        return [n, (e as any) - (r as any), o, a];
      default:
        throw new (Error as any)("Invalid rotation");
    }
  }
  getPDFRect(): any {
    return ((this as any).getRect as any)(0, 0);
  }
  getNonHCMColor(): any {
    return (this as any).color && (((M as any)._colorManager as any).convert as any)((((this as any)._uiManager as any).getNonHCMColor as any)((this as any).color));
  }
  onUpdatedColor(): any {
    this.#s?.onUpdatedColor();
  }
  getData(): any {
    const {
      comment: {
        text: t,
        color: e,
        date: s,
        opacity: i,
        deleted: n,
        richText: r
      },
      uid: a,
      pageIndex: o,
      creationDate: l,
      modificationDate: h
    }: any = this;
    return {
      id: a,
      pageIndex: o,
      rect: ((this as any).getPDFRect as any)(),
      richText: r,
      contentsObj: {
        str: t
      },
      creationDate: l,
      modificationDate: s || h,
      popupRef: !n,
      color: e,
      opacity: i
    };
  }
  onceAdded(t: any): any {}
  isEmpty(): any {
    return !1;
  }
  enableEditMode(): any {
    return ((this as any).isInEditMode as any)() ? !1 : ((((this as any).parent as any).setEditingState as any)(!1), this.#b = !0, !0);
  }
  disableEditMode(): any {
    return ((this as any).isInEditMode as any)() ? ((((this as any).parent as any).setEditingState as any)(!0), this.#b = !1, !0) : !1;
  }
  isInEditMode(): any {
    return this.#b;
  }
  shouldGetKeyboardEvents(): any {
    return this.#A;
  }
  needsToBeRebuilt(): any {
    return (this as any).div && !(this as any).isAttachedToDOM;
  }
  get isOnScreen(): any {
    const {
        top: t,
        left: e,
        bottom: s,
        right: i
      }: any = ((this as any).getClientDimensions as any)(),
      {
        innerHeight: n,
        innerWidth: r
      }: any = window;
    return (e as any) < (r as any) && (i as any) > (0 as any) && (t as any) < (n as any) && (s as any) > (0 as any);
  }
  #$(): any {
    if (this.#f || !(this as any).div) return;
    this.#f = new (AbortController as any)();
    const t: any = (((this as any)._uiManager as any).combinedSignal as any)(this.#f);
    (((this as any).div as any).addEventListener as any)("focusin", (((this as any).focusin as any).bind as any)(this), {
      signal: t
    }), (((this as any).div as any).addEventListener as any)("focusout", (((this as any).focusout as any).bind as any)(this), {
      signal: t
    });
  }
  rebuild(): any {
    (this.#$ as any)();
  }
  rotate(t: any): any {}
  resize(): any {}
  serializeDeleted(): any {
    return {
      id: (this as any).annotationElementId,
      deleted: !0,
      pageIndex: (this as any).pageIndex,
      popupRef: (this as any)._initialData?.popupRef || ""
    };
  }
  serialize(t: any = !1, e: any = null): any {
    return {
      annotationType: (this as any).mode,
      pageIndex: (this as any).pageIndex,
      rect: ((this as any).getPDFRect as any)(),
      rotation: (this as any).rotation,
      structTreeParentId: (this as any)._structTreeParentId,
      popupRef: (this as any)._initialData?.popupRef || ""
    };
  }
  static async deserialize(t: any, e: any, s: any): Promise<any> {
    const i: any = new (((this as any).prototype as any).constructor as any)({
      parent: e,
      id: ((e as any).getNextId as any)(),
      uiManager: s,
      annotationElementId: (t as any).annotationElementId,
      creationDate: (t as any).creationDate,
      modificationDate: (t as any).modificationDate
    });
    (i as any).rotation = (t as any).rotation, i.#t = (t as any).accessibilityData, (i as any)._isCopy = (t as any).isCopy || !1;
    const [n, r]: any = (i as any).pageDimensions,
      [a, o, l, h]: any = ((i as any).getRectInCurrentCoords as any)((t as any).rect, r);
    return (i as any).x = (a as any) / (n as any), (i as any).y = (o as any) / (r as any), (i as any).width = (l as any) / (n as any), (i as any).height = (h as any) / (r as any), i;
  }
  get hasBeenModified(): any {
    return !!(this as any).annotationElementId && ((this as any).deleted || (((this as any).serialize as any)() as any) !== (null as any));
  }
  remove(): any {
    if (this.#f?.abort(), this.#f = null, ((this as any).isEmpty as any)() || ((this as any).commit as any)(), (this as any).parent ? (((this as any).parent as any).remove as any)(this) : (((this as any)._uiManager as any).removeEditor as any)(this), this.#y && ((clearTimeout as any)(this.#y), this.#y = null), (this.#N as any)(), ((this as any).removeEditToolbar as any)(), this.#w) {
      for (const t of ((this.#w as any).values as any)()) (clearTimeout as any)(t);
      this.#w = null;
    }
    (this as any).parent = null, this.#T?.destroy(), this.#T = null;
  }
  get isResizable(): any {
    return !1;
  }
  makeResizable(): any {
    (this as any).isResizable && ((this.#O as any)(), (((this.#h as any).classList as any).remove as any)("hidden"));
  }
  get toolbarPosition(): any {
    return null;
  }
  get commentButtonPosition(): any {
    return (((this as any)._uiManager as any).direction as any) === ("ltr" as any) ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage(): any {
    const {
        commentButtonPosition: [t, e]
      }: any = this,
      [s, i, n, r]: any = ((this as any).getPDFRect as any)();
    return [((M as any)._round as any)((s as any) + (((n as any) - (s as any) as any) * (t as any) as any)), ((M as any)._round as any)((i as any) + (((r as any) - (i as any) as any) * ((1 as any) - (e as any) as any) as any))];
  }
  get commentButtonColor(): any {
    return (((this as any)._uiManager as any).makeCommentColor as any)(((this as any).getNonHCMColor as any)(), (this as any).opacity);
  }
  get commentPopupPosition(): any {
    return (this.#s as any).commentPopupPositionInLayer;
  }
  set commentPopupPosition(t: any) {
    (this.#s as any).commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition(): any {
    return ((this.#s as any).hasDefaultPopupPosition as any)();
  }
  get commentButtonWidth(): any {
    return (this.#s as any).commentButtonWidth;
  }
  get elementBeforePopup(): any {
    return (this as any).div;
  }
  setCommentButtonStates(t: any): any {
    ((this.#s as any).setCommentButtonStates as any)(t);
  }
  keydown(t: any): any {
    if (!(this as any).isResizable || ((t as any).target as any) !== ((this as any).div as any) || ((t as any).key as any) !== ("Enter" as any)) return;
    (((this as any)._uiManager as any).setSelected as any)(this), this.#u = {
      savedX: (this as any).x,
      savedY: (this as any).y,
      savedWidth: (this as any).width,
      savedHeight: (this as any).height
    };
    const e: any = (this.#h as any).children;
    if (!this.#e) {
      this.#e = ((Array as any).from as any)(e);
      const r: any = ((this.#X as any).bind as any)(this),
        a: any = ((this.#W as any).bind as any)(this),
        o: any = ((this as any)._uiManager as any)._signal;
      for (const l of this.#e) {
        const h: any = ((l as any).getAttribute as any)("data-resizer-name");
        ((l as any).setAttribute as any)("role", "spinbutton"), ((l as any).addEventListener as any)("keydown", r, {
          signal: o
        }), ((l as any).addEventListener as any)("blur", a, {
          signal: o
        }), ((l as any).addEventListener as any)("focus", ((this.#q as any).bind as any)(this, h), {
          signal: o
        }), ((l as any).setAttribute as any)("data-l10n-id", ((M as any)._l10nResizer as any)[h]);
      }
    }
    const s: any = (this.#e as any)[0];
    let i: any = 0;
    for (const r of e) {
      if ((r as any) === (s as any)) break;
      i++;
    }
    const n: any = (((((360 as any) - ((this as any).rotation as any) as any) + ((this as any).parentRotation as any) as any) % (360 as any) as any) / (90 as any) as any) * (((this.#e as any).length as any) / (4 as any) as any);
    if ((n as any) !== (i as any)) {
      if ((n as any) < (i as any)) for (let a: any = 0; (a as any) < ((i as any) - (n as any) as any); a++) ((this.#h as any).append as any)((this.#h as any).firstChild);else if ((n as any) > (i as any)) for (let a: any = 0; (a as any) < ((n as any) - (i as any) as any); a++) (((this.#h as any).firstChild as any).before as any)((this.#h as any).lastChild);
      let r: any = 0;
      for (const a of e) {
        const l: any = (((this.#e as any)[r++] as any).getAttribute as any)("data-resizer-name");
        ((a as any).setAttribute as any)("data-l10n-id", ((M as any)._l10nResizer as any)[l]);
      }
    }
    (this.#z as any)(0), this.#A = !0, (((this.#h as any).firstChild as any).focus as any)({
      focusVisible: !0
    }), ((t as any).preventDefault as any)(), ((t as any).stopImmediatePropagation as any)();
  }
  #X(t: any): any {
    (((M as any)._resizerKeyboardManager as any).exec as any)(this, t);
  }
  #W(t: any): any {
    this.#A && ((t as any).relatedTarget?.parentNode as any) !== (this.#h as any) && (this.#N as any)();
  }
  #q(t: any): any {
    this.#m = this.#A ? t : "";
  }
  #z(t: any): any {
    if (this.#e) for (const e of this.#e) (e as any).tabIndex = t;
  }
  _resizeWithKeyboard(t: any, e: any): any {
    this.#A && (this.#F as any)(this.#m, {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  #N(): any {
    this.#A = !1, (this.#z as any)(-1), (this.#B as any)();
  }
  _stopResizingWithKeyboard(): any {
    (this.#N as any)(), (((this as any).div as any).focus as any)();
  }
  select(): any {
    if ((this as any).isSelected && (this as any)._editToolbar) {
      (((this as any)._editToolbar as any).show as any)();
      return;
    }
    if ((this as any).isSelected = !0, ((this as any).makeResizable as any)(), (this as any).div?.classList.add("selectedEditor"), !(this as any)._editToolbar) {
      ((((this as any).addEditToolbar as any)() as any).then as any)((): any => {
        (this as any).div?.classList.contains("selectedEditor") && (this as any)._editToolbar?.show();
      });
      return;
    }
    (this as any)._editToolbar?.show(), this.#i?.toggleAltTextBadge(!1);
  }
  focus(): any {
    (this as any).div && !(((this as any).div as any).contains as any)((document as any).activeElement) && (setTimeout as any)((): any => (this as any).div?.focus({
      preventScroll: !0
    }), 0);
  }
  unselect(): any {
    (this as any).isSelected && ((this as any).isSelected = !1, this.#h?.classList.add("hidden"), (this as any).div?.classList.remove("selectedEditor"), (this as any).div?.contains((document as any).activeElement) && (((((this as any)._uiManager as any).currentLayer as any).div as any).focus as any)({
      preventScroll: !0
    }), (this as any)._editToolbar?.hide(), this.#i?.toggleAltTextBadge(!0), (this as any).hasComment && (((this as any)._uiManager as any).toggleComment as any)(this, !1, !1));
  }
  updateParams(t: any, e: any): any {}
  disableEditing(): any {}
  enableEditing(): any {}
  get canChangeContent(): any {
    return !1;
  }
  enterInEditMode(): any {
    (this as any).canChangeContent && (((this as any).enableEditMode as any)(), (((this as any).div as any).focus as any)());
  }
  dblclick(t: any): any {
    (((t as any).target as any).nodeName as any) !== ("BUTTON" as any) && (((this as any).enterInEditMode as any)(), (((this as any).parent as any).updateToolbar as any)({
      mode: ((this as any).constructor as any)._editorType,
      editId: (this as any).id
    }));
  }
  getElementForAltText(): any {
    return (this as any).div;
  }
  get contentDiv(): any {
    return (this as any).div;
  }
  get isEditing(): any {
    return this.#g;
  }
  set isEditing(t: any) {
    this.#g = t, (this as any).parent && (t ? ((((this as any).parent as any).setSelected as any)(this), (((this as any).parent as any).setActiveEditor as any)(this)) : (((this as any).parent as any).setActiveEditor as any)(null));
  }
  static get MIN_SIZE(): any {
    return 16;
  }
  static canCreateNewEmptyEditor(): any {
    return !0;
  }
  get telemetryInitialData(): any {
    return {
      action: "added"
    };
  }
  get telemetryFinalData(): any {
    return null;
  }
  _reportTelemetry(t: any, e: any = !1): any {
    if (e) {
      this.#w ||= new (Map as any)();
      const {
        action: s
      }: any = t;
      let i: any = ((this.#w as any).get as any)(s);
      i && (clearTimeout as any)(i), i = (setTimeout as any)((): any => {
        ((this as any)._reportTelemetry as any)(t), ((this.#w as any).delete as any)(s), ((this.#w as any).size as any) === (0 as any) && (this.#w = null);
      }, (M as any)._telemetryTimeout), ((this.#w as any).set as any)(s, i);
      return;
    }
    (t as any).type ||= (this as any).editorType, ((((this as any)._uiManager as any)._eventBus as any).dispatch as any)("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t: any = (this as any)._isVisible): any {
    ((((this as any).div as any).classList as any).toggle as any)("hidden", !t), (this as any)._isVisible = t;
  }
  enable(): any {
    (this as any).div && (((this as any).div as any).tabIndex = 0), this.#n = !1;
  }
  disable(): any {
    (this as any).div && (((this as any).div as any).tabIndex = -1), this.#n = !0;
  }
  updateFakeAnnotationElement(t: any): any {
    if (!this.#d && !(this as any).deleted) {
      this.#d = ((t as any).addFakeAnnotation as any)(this);
      return;
    }
    if ((this as any).deleted) {
      ((this.#d as any).remove as any)(), this.#d = null;
      return;
    }
    ((this as any).hasEditedComment || (this as any)._hasBeenMoved || (this as any)._hasBeenResized) && ((this.#d as any).updateEdited as any)({
      rect: ((this as any).getPDFRect as any)(),
      popup: (this as any).comment
    });
  }
  renderAnnotationElement(t: any): any {
    if ((this as any).deleted) return ((t as any).hide as any)(), null;
    let e: any = (((t as any).container as any).querySelector as any)(".annotationContent");
    if (!e) e = ((document as any).createElement as any)("div"), (((e as any).classList as any).add as any)("annotationContent", (this as any).editorType), (((t as any).container as any).prepend as any)(e);else if (((e as any).nodeName as any) === ("CANVAS" as any)) {
      const s: any = e;
      e = ((document as any).createElement as any)("div"), (((e as any).classList as any).add as any)("annotationContent", (this as any).editorType), ((s as any).before as any)(e);
    }
    return e;
  }
  resetAnnotationElement(t: any): any {
    const {
      firstChild: e
    }: any = (t as any).container;
    (e?.nodeName as any) === ("DIV" as any) && (((e as any).classList as any).contains as any)("annotationContent") && ((e as any).remove as any)();
  }
}
class _n extends (M as any) {
  declare deleted: any;
  declare annotationElementId: any;
  [key: string]: any;
  constructor(t: any) {
    super(t), (this as any).annotationElementId = (t as any).annotationElementId, (this as any).deleted = !0;
  }
  serialize(): any {
    return ((this as any).serializeDeleted as any)();
  }
}
const Ks: number = 3285377520,
  yt: number = 4294901760,
  xt: number = 65535;
class Ei {
  declare h2: any;
  declare h1: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any).h1 = t ? (t as any) & (4294967295 as any) : Ks, (this as any).h2 = t ? (t as any) & (4294967295 as any) : Ks;
  }
  update(t: any): any {
    let e: any, s: any;
    if ((typeof t as any) == ("string" as any)) {
      e = new (Uint8Array as any)(((t as any).length as any) * (2 as any)), s = 0;
      for (let p: any = 0, b: any = (t as any).length; (p as any) < (b as any); p++) {
        const m: any = ((t as any).charCodeAt as any)(p);
        (m as any) <= (255 as any) ? (e as any)[s++] = m : ((e as any)[s++] = (m as any) >>> (8 as any), (e as any)[s++] = (m as any) & (255 as any));
      }
    } else if (((ArrayBuffer as any).isView as any)(t)) e = ((t as any).slice as any)(), s = (e as any).byteLength;else throw new (Error as any)("Invalid data format, must be a string or TypedArray.");
    const i: any = (s as any) >> (2 as any),
      n: any = (s as any) - ((i as any) * (4 as any) as any),
      r: any = new (Uint32Array as any)((e as any).buffer, 0, i);
    let a: any = 0,
      o: any = 0,
      l: any = (this as any).h1,
      h: any = (this as any).h2;
    const c: number = 3432918353,
      u: number = 461845907,
      f: any = (c as any) & (xt as any),
      g: any = (u as any) & (xt as any);
    for (let p: any = 0; (p as any) < (i as any); p++) (p as any) & (1 as any) ? (a = (r as any)[p], a = ((((a as any) * (c as any) as any) & (yt as any)) as any) | ((((a as any) * (f as any) as any) & (xt as any)) as any), a = ((a as any) << (15 as any) as any) | ((a as any) >>> (17 as any) as any), a = ((((a as any) * (u as any) as any) & (yt as any)) as any) | ((((a as any) * (g as any) as any) & (xt as any)) as any), l ^= a, l = ((l as any) << (13 as any) as any) | ((l as any) >>> (19 as any) as any), l = ((l as any) * (5 as any) as any) + (3864292196 as any)) : (o = (r as any)[p], o = ((((o as any) * (c as any) as any) & (yt as any)) as any) | ((((o as any) * (f as any) as any) & (xt as any)) as any), o = ((o as any) << (15 as any) as any) | ((o as any) >>> (17 as any) as any), o = ((((o as any) * (u as any) as any) & (yt as any)) as any) | ((((o as any) * (g as any) as any) & (xt as any)) as any), h ^= o, h = ((h as any) << (13 as any) as any) | ((h as any) >>> (19 as any) as any), h = ((h as any) * (5 as any) as any) + (3864292196 as any));
    switch (a = 0, n) {
      case 3:
        a ^= ((e as any)[((i as any) * (4 as any) as any) + (2 as any)] as any) << (16 as any);
      case 2:
        a ^= ((e as any)[((i as any) * (4 as any) as any) + (1 as any)] as any) << (8 as any);
      case 1:
        a ^= (e as any)[(i as any) * (4 as any)], a = ((((a as any) * (c as any) as any) & (yt as any)) as any) | ((((a as any) * (f as any) as any) & (xt as any)) as any), a = ((a as any) << (15 as any) as any) | ((a as any) >>> (17 as any) as any), a = ((((a as any) * (u as any) as any) & (yt as any)) as any) | ((((a as any) * (g as any) as any) & (xt as any)) as any), (i as any) & (1 as any) ? l ^= a : h ^= a;
    }
    (this as any).h1 = l, (this as any).h2 = h;
  }
  hexdigest(): any {
    let t: any = (this as any).h1,
      e: any = (this as any).h2;
    return t ^= (e as any) >>> (1 as any), t = ((((t as any) * (3981806797 as any) as any) & (yt as any)) as any) | ((((t as any) * (36045 as any) as any) & (xt as any)) as any), e = ((((e as any) * (4283543511 as any) as any) & (yt as any)) as any) | ((((((((e as any) << (16 as any) as any) | ((t as any) >>> (16 as any) as any)) as any) * (2950163797 as any) as any) & (yt as any)) as any) >>> (16 as any) as any), t ^= (e as any) >>> (1 as any), t = ((((t as any) * (444984403 as any) as any) & (yt as any)) as any) | ((((t as any) * (60499 as any) as any) & (xt as any)) as any), e = ((((e as any) * (3301882366 as any) as any) & (yt as any)) as any) | ((((((((e as any) << (16 as any) as any) | ((t as any) >>> (16 as any) as any)) as any) * (3120437893 as any) as any) & (yt as any)) as any) >>> (16 as any) as any), t ^= (e as any) >>> (1 as any), ((((((t as any) >>> (0 as any) as any).toString as any)(16) as any).padStart as any)(8, "0") as any) + ((((((e as any) >>> (0 as any) as any).toString as any)(16) as any).padStart as any)(8, "0") as any);
  }
}
const ms: any = ((Object as any).freeze as any)({
  map: null,
  hash: "",
  transfer: void 0
});
class ks {
  declare onAnnotationEditor: any;
  declare onResetModified: any;
  declare onSetModified: any;
  [key: string]: any;
  #t: any = !1;
  #e: any = null;
  #i: any = null;
  #s: any = new (Map as any)();
  constructor() {
    (this as any).onSetModified = null, (this as any).onResetModified = null, (this as any).onAnnotationEditor = null;
  }
  getValue(t: any, e: any): any {
    const s: any = ((this.#s as any).get as any)(t);
    return (s as any) === (void 0 as any) ? e : ((Object as any).assign as any)(e, s);
  }
  getRawValue(t: any): any {
    return ((this.#s as any).get as any)(t);
  }
  remove(t: any): any {
    const e: any = ((this.#s as any).get as any)(t);
    if ((e as any) !== (void 0 as any) && (e instanceof M && ((this.#i as any).delete as any)((e as any).annotationElementId), ((this.#s as any).delete as any)(t), ((this.#s as any).size as any) === (0 as any) && ((this as any).resetModified as any)(), (typeof (this as any).onAnnotationEditor as any) == ("function" as any))) {
      for (const s of ((this.#s as any).values as any)()) if (s instanceof M) return;
      ((this as any).onAnnotationEditor as any)(null);
    }
  }
  setValue(t: any, e: any): any {
    const s: any = ((this.#s as any).get as any)(t);
    let i: any = !1;
    if ((s as any) !== (void 0 as any)) for (const [n, r] of ((Object as any).entries as any)(e)) ((s as any)[n] as any) !== (r as any) && (i = !0, (s as any)[n] = r);else i = !0, ((this.#s as any).set as any)(t, e);
    i && (this.#a as any)(), e instanceof M && ((((this.#i ||= new (Map as any)()) as any).set as any)((e as any).annotationElementId, e), (typeof (this as any).onAnnotationEditor as any) == ("function" as any) && ((this as any).onAnnotationEditor as any)(((e as any).constructor as any)._type));
  }
  has(t: any): any {
    return ((this.#s as any).has as any)(t);
  }
  get size(): any {
    return (this.#s as any).size;
  }
  #a(): any {
    this.#t || (this.#t = !0, (typeof (this as any).onSetModified as any) == ("function" as any) && ((this as any).onSetModified as any)());
  }
  resetModified(): any {
    this.#t && (this.#t = !1, (typeof (this as any).onResetModified as any) == ("function" as any) && ((this as any).onResetModified as any)());
  }
  get print(): any {
    return new (Ci as any)(this);
  }
  get serializable(): any {
    if (((this.#s as any).size as any) === (0 as any)) return ms;
    const t: any = new (Map as any)(),
      e: any = new (Ei as any)(),
      s: any = [],
      i: any = ((Object as any).create as any)(null);
    let n: any = !1;
    for (const [r, a] of this.#s) {
      const o: any = a instanceof M ? ((a as any).serialize as any)(!1, i) : a;
      o && (((t as any).set as any)(r, o), ((e as any).update as any)(`${r}:${((JSON as any).stringify as any)(o)}`), n ||= !!(o as any).bitmap);
    }
    if (n) for (const r of ((t as any).values as any)()) (r as any).bitmap && ((s as any).push as any)((r as any).bitmap);
    return ((t as any).size as any) > (0 as any) ? {
      map: t,
      hash: ((e as any).hexdigest as any)(),
      transfer: s
    } : ms;
  }
  get editorStats(): any {
    let t: any = null;
    const e: any = new (Map as any)();
    let s: any = 0,
      i: any = 0;
    for (const n of ((this.#s as any).values as any)()) {
      if (!(n instanceof M)) {
        (n as any).popup && (((n as any).popup as any).deleted ? i += 1 : s += 1);
        continue;
      }
      (n as any).isCommentDeleted ? i += 1 : (n as any).hasEditedComment && (s += 1);
      const r: any = (n as any).telemetryFinalData;
      if (!r) continue;
      const {
        type: a
      }: any = r;
      ((e as any).has as any)(a) || ((e as any).set as any)(a, (((Object as any).getPrototypeOf as any)(n) as any).constructor), t ||= ((Object as any).create as any)(null);
      const o: any = (t as any)[a] ||= new (Map as any)();
      for (const [l, h] of ((Object as any).entries as any)(r)) {
        if ((l as any) === ("type" as any)) continue;
        let c: any = ((o as any).get as any)(l);
        c || (c = new (Map as any)(), ((o as any).set as any)(l, c));
        const u: any = ((c as any).get as any)(h) ?? 0;
        ((c as any).set as any)(h, (u as any) + (1 as any));
      }
    }
    if (((i as any) > (0 as any) || (s as any) > (0 as any)) && (t ||= ((Object as any).create as any)(null), (t as any).comments = {
      deleted: i,
      edited: s
    }), !t) return null;
    for (const [n, r] of e) (t as any)[n] = ((r as any).computeTelemetryFinalData as any)((t as any)[n]);
    return t;
  }
  resetModifiedIds(): any {
    this.#e = null;
  }
  updateEditor(t: any, e: any): any {
    const s: any = this.#i?.get(t);
    return s ? (((s as any).updateFromAnnotationLayer as any)(e), !0) : !1;
  }
  getEditor(t: any): any {
    return this.#i?.get(t) || null;
  }
  get modifiedIds(): any {
    if (this.#e) return this.#e;
    const t: any = [];
    if (this.#i) for (const e of ((this.#i as any).values as any)()) ((e as any).serialize as any)() && ((t as any).push as any)((e as any).annotationElementId);
    return this.#e = {
      ids: new (Set as any)(t),
      hash: ((t as any).join as any)(",")
    };
  }
  [Symbol.iterator](): any {
    return ((this.#s as any).entries as any)();
  }
}
class Ci extends (ks as any) {
  [key: string]: any;
  #t: any;
  constructor(t: any) {
    super();
    const {
        map: e,
        hash: s,
        transfer: i
      }: any = (t as any).serializable,
      n: any = (structuredClone as any)(e, i ? {
        transfer: i
      } : null);
    this.#t = {
      map: n,
      hash: s,
      transfer: i
    };
  }
  get print(): any {
    (G as any)("Should not call PrintAnnotationStorage.print");
    return void 0;
  }
  get serializable(): any {
    return this.#t;
  }
  get modifiedIds(): any {
    return (N as any)(this, "modifiedIds", {
      ids: new (Set as any)(),
      hash: ""
    });
  }
}
class Sn {
  declare loadTestFontId: any;
  declare loadingRequests: any;
  declare styleElement: any;
  declare nativeFontFaces: any;
  declare _document: any;
  [key: string]: any;
  #t: any = new (Set as any)();
  constructor({
    ownerDocument: t = (globalThis as any).document,
    styleElement: e = null
  }: any) {
    (this as any)._document = t, (this as any).nativeFontFaces = new (Set as any)(), (this as any).styleElement = null, (this as any).loadingRequests = [], (this as any).loadTestFontId = 0;
  }
  addNativeFontFace(t: any): any {
    (((this as any).nativeFontFaces as any).add as any)(t), ((((this as any)._document as any).fonts as any).add as any)(t);
  }
  removeNativeFontFace(t: any): any {
    (((this as any).nativeFontFaces as any).delete as any)(t), ((((this as any)._document as any).fonts as any).delete as any)(t);
  }
  insertRule(t: any): any {
    (this as any).styleElement || ((this as any).styleElement = (((this as any)._document as any).createElement as any)("style"), (((((((this as any)._document as any).documentElement as any).getElementsByTagName as any)("head") as any)[0] as any).append as any)((this as any).styleElement));
    const e: any = ((this as any).styleElement as any).sheet;
    ((e as any).insertRule as any)(t, ((e as any).cssRules as any).length);
  }
  clear(): any {
    for (const t of (this as any).nativeFontFaces) ((((this as any)._document as any).fonts as any).delete as any)(t);
    (((this as any).nativeFontFaces as any).clear as any)(), ((this.#t as any).clear as any)(), (this as any).styleElement && ((((this as any).styleElement as any).remove as any)(), (this as any).styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: s
  }: any): Promise<any> {
    if (!(!t || ((this.#t as any).has as any)((t as any).loadedName))) {
      if ((B as any)(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), (this as any).isFontLoadingAPISupported) {
        const {
            loadedName: i,
            src: n,
            style: r
          }: any = t,
          a: any = new (FontFace as any)(i, n, r);
        ((this as any).addNativeFontFace as any)(a);
        try {
          await ((a as any).load as any)(), ((this.#t as any).add as any)(i), s?.(t);
        } catch {
          (I as any)(`Cannot load system font: ${(t as any).baseFontName}, installing it could help to improve PDF rendering.`), ((this as any).removeNativeFontFace as any)(a);
        }
        return;
      }
      (G as any)("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t: any): Promise<any> {
    if ((t as any).attached || (t as any).missingFile && !(t as any).systemFontInfo) return;
    if ((t as any).attached = !0, (t as any).systemFontInfo) {
      await ((this as any).loadSystemFont as any)(t);
      return;
    }
    if ((this as any).isFontLoadingAPISupported) {
      const s: any = ((t as any).createNativeFontFace as any)();
      if (s) {
        ((this as any).addNativeFontFace as any)(s);
        try {
          await (s as any).loaded;
        } catch (i: any) {
          throw (I as any)(`Failed to load font '${(s as any).family}': '${i}'.`), (t as any).disableFontFace = !0, i;
        }
      }
      return;
    }
    const e: any = ((t as any).createFontFaceRule as any)();
    if (e) {
      if (((this as any).insertRule as any)(e), (this as any).isSyncFontLoadingSupported) return;
      await new (Promise as any)((s: any): any => {
        const i: any = ((this as any)._queueLoadingCallback as any)(s);
        ((this as any)._prepareFontLoadEvent as any)(t, i);
      });
    }
  }
  get isFontLoadingAPISupported(): any {
    const t: any = !!(this as any)._document?.fonts;
    return (N as any)(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported(): any {
    return (N as any)(this, "isSyncFontLoadingSupported", ct || ((ot as any).platform as any).isFirefox);
  }
  _queueLoadingCallback(t: any): any {
    function e(this: any): any {
      for ((B as any)(!(i as any).done, "completeRequest() cannot be called twice."), (i as any).done = !0; ((s as any).length as any) > (0 as any) && ((s as any)[0] as any).done;) {
        const n: any = ((s as any).shift as any)();
        (setTimeout as any)((n as any).callback, 0);
      }
    }
    const {
        loadingRequests: s
      }: any = this,
      i: any = {
        done: !1,
        complete: e,
        callback: t
      };
    return ((s as any).push as any)(i), i;
  }
  get _loadTestFont(): any {
    const t: any = (atob as any)("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return (N as any)(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t: any, e: any): any {
    function s(this: any, w: any, v: any): any {
      return ((((((((w as any).charCodeAt as any)(v) as any) << (24 as any) as any) | ((((w as any).charCodeAt as any)((v as any) + (1 as any)) as any) << (16 as any) as any)) as any) | ((((w as any).charCodeAt as any)((v as any) + (2 as any)) as any) << (8 as any) as any)) as any) | (((((w as any).charCodeAt as any)((v as any) + (3 as any)) as any) & (255 as any)) as any);
    }
    function i(this: any, w: any, v: any, _: any, S: any): any {
      const E: any = ((w as any).substring as any)(0, v),
        C: any = ((w as any).substring as any)((v as any) + (_ as any));
      return ((E as any) + (S as any) as any) + (C as any);
    }
    let n: any, r: any;
    const a: any = (((this as any)._document as any).createElement as any)("canvas");
    (a as any).width = 1, (a as any).height = 1;
    const o: any = ((a as any).getContext as any)("2d");
    let l: any = 0;
    function h(this: any, w: any, v: any): any {
      if ((++l as any) > (30 as any)) {
        (I as any)("Load test font never loaded."), (v as any)();
        return;
      }
      if ((o as any).font = ("30px " as any) + (w as any), ((o as any).fillText as any)(".", 0, 20), (((((o as any).getImageData as any)(0, 0, 1, 1) as any).data as any)[3] as any) > (0 as any)) {
        (v as any)();
        return;
      }
      (setTimeout as any)(((h as any).bind as any)(null, w, v));
    }
    const c: any = `lt${((Date as any).now as any)()}${(this as any).loadTestFontId++}`;
    let u: any = (this as any)._loadTestFont;
    u = (i as any)(u, 976, (c as any).length, c);
    const g: number = 16,
      p: number = 1482184792;
    let b: any = (s as any)(u, g);
    for (n = 0, r = ((c as any).length as any) - (3 as any); (n as any) < (r as any); n += 4) b = (((b as any) - (p as any) as any) + ((s as any)(c, n) as any) as any) | (0 as any);
    (n as any) < ((c as any).length as any) && (b = (((b as any) - (p as any) as any) + ((s as any)((c as any) + ("XXX" as any), n) as any) as any) | (0 as any)), u = (i as any)(u, g, 4, (sn as any)(b));
    const m: any = `url(data:font/opentype;base64,${(btoa as any)(u)});`,
      y: any = `@font-face {font-family:"${c}";src:${m}}`;
    ((this as any).insertRule as any)(y);
    const A: any = (((this as any)._document as any).createElement as any)("div");
    ((A as any).style as any).visibility = "hidden", ((A as any).style as any).width = ((A as any).style as any).height = "10px", ((A as any).style as any).position = "absolute", ((A as any).style as any).top = ((A as any).style as any).left = "0px";
    for (const w of [(t as any).loadedName, c]) {
      const v: any = (((this as any)._document as any).createElement as any)("span");
      (v as any).textContent = "Hi", ((v as any).style as any).fontFamily = w, ((A as any).append as any)(v);
    }
    ((((this as any)._document as any).body as any).append as any)(A), (h as any)(c, (): any => {
      ((A as any).remove as any)(), ((e as any).complete as any)();
    });
  }
}
class En {
  declare charProcOperatorList: any;
  declare _inspectFont: any;
  declare compiledGlyphs: any;
  [key: string]: any;
  #t: any;
  constructor(t: any, e: any = null, s: any, i: any) {
    (this as any).compiledGlyphs = ((Object as any).create as any)(null), this.#t = t, (this as any)._inspectFont = e, s && ((Object as any).assign as any)(this, s), i && ((this as any).charProcOperatorList = i);
  }
  createNativeFontFace(): any {
    if (!(this as any).data || (this as any).disableFontFace) return null;
    let t: any;
    if (!(this as any).cssFontInfo) t = new (FontFace as any)((this as any).loadedName, (this as any).data, {});else {
      const e: any = {
        weight: ((this as any).cssFontInfo as any).fontWeight
      };
      ((this as any).cssFontInfo as any).italicAngle && ((e as any).style = `oblique ${((this as any).cssFontInfo as any).italicAngle}deg`), t = new (FontFace as any)(((this as any).cssFontInfo as any).fontFamily, (this as any).data, e);
    }
    return (this as any)._inspectFont?.(this), t;
  }
  createFontFaceRule(): any {
    if (!(this as any).data || (this as any).disableFontFace) return null;
    const t: any = `url(data:${(this as any).mimetype};base64,${(wi as any)((this as any).data)});`;
    let e: any;
    if (!(this as any).cssFontInfo) e = `@font-face {font-family:"${(this as any).loadedName}";src:${t}}`;else {
      let s: any = `font-weight: ${((this as any).cssFontInfo as any).fontWeight};`;
      ((this as any).cssFontInfo as any).italicAngle && (s += `font-style: oblique ${((this as any).cssFontInfo as any).italicAngle}deg;`), e = `@font-face {font-family:"${((this as any).cssFontInfo as any).fontFamily}";${s}src:${t}}`;
    }
    return (this as any)._inspectFont?.(this, t), e;
  }
  getPathGenerator(t: any, e: any): any {
    if ((((this as any).compiledGlyphs as any)[e] as any) !== (void 0 as any)) return ((this as any).compiledGlyphs as any)[e];
    const s: any = (((this as any).loadedName as any) + ("_path_" as any) as any) + (e as any);
    let i: any;
    try {
      i = ((t as any).get as any)(s);
    } catch (r: any) {
      (I as any)(`getPathGenerator - ignoring character: "${r}".`);
    }
    const n: any = new (Path2D as any)(i || "");
    return (this as any).fontExtraProperties || ((t as any).delete as any)(s), ((this as any).compiledGlyphs as any)[e] = n;
  }
  get black(): any {
    return (this.#t as any).black;
  }
  get bold(): any {
    return (this.#t as any).bold;
  }
  get disableFontFace(): any {
    return (this.#t as any).disableFontFace ?? !1;
  }
  get fontExtraProperties(): any {
    return (this.#t as any).fontExtraProperties ?? !1;
  }
  get isInvalidPDFjsFont(): any {
    return (this.#t as any).isInvalidPDFjsFont;
  }
  get isType3Font(): any {
    return (this.#t as any).isType3Font;
  }
  get italic(): any {
    return (this.#t as any).italic;
  }
  get missingFile(): any {
    return (this.#t as any).missingFile;
  }
  get remeasure(): any {
    return (this.#t as any).remeasure;
  }
  get vertical(): any {
    return (this.#t as any).vertical;
  }
  get ascent(): any {
    return (this.#t as any).ascent;
  }
  get defaultWidth(): any {
    return (this.#t as any).defaultWidth;
  }
  get descent(): any {
    return (this.#t as any).descent;
  }
  get bbox(): any {
    return (this.#t as any).bbox;
  }
  get fontMatrix(): any {
    return (this.#t as any).fontMatrix;
  }
  get fallbackName(): any {
    return (this.#t as any).fallbackName;
  }
  get loadedName(): any {
    return (this.#t as any).loadedName;
  }
  get mimetype(): any {
    return (this.#t as any).mimetype;
  }
  get name(): any {
    return (this.#t as any).name;
  }
  get data(): any {
    return (this.#t as any).data;
  }
  clearData(): any {
    ((this.#t as any).clearData as any)();
  }
  get cssFontInfo(): any {
    return (this.#t as any).cssFontInfo;
  }
  get systemFontInfo(): any {
    return (this.#t as any).systemFontInfo;
  }
  get defaultVMetrics(): any {
    return (this.#t as any).defaultVMetrics;
  }
}
function Cn(this: any, d: any): any {
  if (d instanceof URL) return (d as any).href;
  if ((typeof d as any) == ("string" as any)) {
    if (ct) return d;
    const t: any = ((URL as any).parse as any)(d, (window as any).location);
    if (t) return (t as any).href;
  }
  throw new (Error as any)("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function xn(this: any, d: any): any {
  if (ct && (typeof Buffer as any) < ("u" as any) && d instanceof Buffer) throw new (Error as any)("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (d instanceof Uint8Array && ((d as any).byteLength as any) === (((d as any).buffer as any).byteLength as any)) return d;
  if ((typeof d as any) == ("string" as any)) return (Se as any)(d);
  if (d instanceof ArrayBuffer || ((ArrayBuffer as any).isView as any)(d) || (typeof d as any) == ("object" as any) && !(isNaN as any)(d?.length)) return new (Uint8Array as any)(d);
  throw new (Error as any)("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function De(this: any, d: any): any {
  if ((typeof d as any) != ("string" as any)) return null;
  if (((d as any).endsWith as any)("/")) return d;
  throw new (Error as any)(`Invalid factory url: "${d}" must include trailing slash.`);
}
const bs: any = (d: any): any => (typeof d as any) == ("object" as any) && ((Number as any).isInteger as any)(d?.num) && ((d as any).num as any) >= (0 as any) && ((Number as any).isInteger as any)(d?.gen) && ((d as any).gen as any) >= (0 as any),
  Tn: any = (d: any): any => (typeof d as any) == ("object" as any) && (typeof d?.name as any) == ("string" as any),
  Pn: any = ((ln as any).bind as any)(null, bs, Tn);
class kn {
  [key: string]: any;
  #t: any = new (Map as any)();
  #e: any = ((Promise as any).resolve as any)();
  postMessage(t: any, e: any): any {
    const s: any = {
      data: (structuredClone as any)(t, e ? {
        transfer: e
      } : null)
    };
    ((this.#e as any).then as any)((): any => {
      for (const [i] of this.#t) ((i as any).call as any)(this, s);
    });
  }
  addEventListener(t: any, e: any, s: any = null): any {
    let i: any = null;
    if (s?.signal instanceof AbortSignal) {
      const {
        signal: n
      }: any = s;
      if ((n as any).aborted) {
        (I as any)("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const r: any = (): any => ((this as any).removeEventListener as any)(t, e);
      i = (): any => ((n as any).removeEventListener as any)("abort", r), ((n as any).addEventListener as any)("abort", r);
    }
    ((this.#t as any).set as any)(e, i);
  }
  removeEventListener(t: any, e: any): any {
    ((this.#t as any).get as any)(e)?.(), ((this.#t as any).delete as any)(e);
  }
  terminate(): any {
    for (const [, t] of this.#t) t?.();
    ((this.#t as any).clear as any)();
  }
}
const Le: any = {
    DATA: 1,
    ERROR: 2
  },
  tt: any = {
    CANCEL: 1,
    CANCEL_COMPLETE: 2,
    CLOSE: 3,
    ENQUEUE: 4,
    ERROR: 5,
    PULL: 6,
    PULL_COMPLETE: 7,
    START_COMPLETE: 8
  };
function Qs(this: any): any {}
function pt(this: any, d: any): any {
  if (d instanceof Ht || d instanceof us || d instanceof js || d instanceof je || d instanceof ns) return d;
  switch (d instanceof Error || (typeof d as any) == ("object" as any) && (d as any) !== (null as any) || (G as any)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), (d as any).name) {
    case "AbortException":
      return new (Ht as any)((d as any).message);
    case "InvalidPDFException":
      return new (us as any)((d as any).message);
    case "PasswordException":
      return new (js as any)((d as any).message, (d as any).code);
    case "ResponseException":
      return new (je as any)((d as any).message, (d as any).status, (d as any).missing);
    case "UnknownErrorException":
      return new (ns as any)((d as any).message, (d as any).details);
  }
  return new (ns as any)((d as any).message, ((d as any).toString as any)());
}
class pe {
  declare isCancelled: any;
  declare ready: any;
  declare sinkCapability: any;
  declare desiredSize: any;
  declare actionHandler: any;
  declare callbackCapabilities: any;
  declare streamControllers: any;
  declare streamSinks: any;
  declare streamId: any;
  declare callbackId: any;
  declare comObj: any;
  declare targetName: any;
  declare sourceName: any;
  [key: string]: any;
  #t: any = new (AbortController as any)();
  constructor(t: any, e: any, s: any) {
    (this as any).sourceName = t, (this as any).targetName = e, (this as any).comObj = s, (this as any).callbackId = 1, (this as any).streamId = 1, (this as any).streamSinks = ((Object as any).create as any)(null), (this as any).streamControllers = ((Object as any).create as any)(null), (this as any).callbackCapabilities = ((Object as any).create as any)(null), (this as any).actionHandler = ((Object as any).create as any)(null), ((s as any).addEventListener as any)("message", ((this.#e as any).bind as any)(this), {
      signal: (this.#t as any).signal
    });
  }
  #e({
    data: t
  }: any): any {
    if (((t as any).targetName as any) !== ((this as any).sourceName as any)) return;
    if ((t as any).stream) {
      (this.#s as any)(t);
      return;
    }
    if ((t as any).callback) {
      const s: any = (t as any).callbackId,
        i: any = ((this as any).callbackCapabilities as any)[s];
      if (!i) throw new (Error as any)(`Cannot resolve callback ${s}`);
      if (delete ((this as any).callbackCapabilities as any)[s], ((t as any).callback as any) === ((Le as any).DATA as any)) ((i as any).resolve as any)((t as any).data);else if (((t as any).callback as any) === ((Le as any).ERROR as any)) ((i as any).reject as any)((pt as any)((t as any).reason));else throw new (Error as any)("Unexpected callback case");
      return;
    }
    const e: any = ((this as any).actionHandler as any)[(t as any).action];
    if (!e) throw new (Error as any)(`Unknown action from worker: ${(t as any).action}`);
    if ((t as any).callbackId) {
      const s: any = (this as any).sourceName,
        i: any = (t as any).sourceName,
        n: any = (this as any).comObj;
      ((((Promise as any).try as any)(e, (t as any).data) as any).then as any)(function (this: any, r: any): any {
        ((n as any).postMessage as any)({
          sourceName: s,
          targetName: i,
          callback: (Le as any).DATA,
          callbackId: (t as any).callbackId,
          data: r
        });
      }, function (this: any, r: any): any {
        ((n as any).postMessage as any)({
          sourceName: s,
          targetName: i,
          callback: (Le as any).ERROR,
          callbackId: (t as any).callbackId,
          reason: (pt as any)(r)
        });
      });
      return;
    }
    if ((t as any).streamId) {
      (this.#i as any)(t);
      return;
    }
    (e as any)((t as any).data);
  }
  on(t: any, e: any): any {
    const s: any = (this as any).actionHandler;
    if ((s as any)[t]) throw new (Error as any)(`There is already an actionName called "${t}"`);
    (s as any)[t] = e;
  }
  send(t: any, e: any, s: any): any {
    (((this as any).comObj as any).postMessage as any)({
      sourceName: (this as any).sourceName,
      targetName: (this as any).targetName,
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t: any, e: any, s: any): any {
    const i: any = (this as any).callbackId++,
      n: any = ((Promise as any).withResolvers as any)();
    ((this as any).callbackCapabilities as any)[i] = n;
    try {
      (((this as any).comObj as any).postMessage as any)({
        sourceName: (this as any).sourceName,
        targetName: (this as any).targetName,
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (r: any) {
      ((n as any).reject as any)(r);
    }
    return (n as any).promise;
  }
  sendWithStream(t: any, e: any, s: any, i: any): any {
    const n: any = (this as any).streamId++,
      r: any = (this as any).sourceName,
      a: any = (this as any).targetName,
      o: any = (this as any).comObj;
    return new (ReadableStream as any)({
      start: (l: any): any => {
        const h: any = ((Promise as any).withResolvers as any)();
        return ((this as any).streamControllers as any)[n] = {
          controller: l,
          startCall: h,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, ((o as any).postMessage as any)({
          sourceName: r,
          targetName: a,
          action: t,
          streamId: n,
          data: e,
          desiredSize: (l as any).desiredSize
        }, i), (h as any).promise;
      },
      pull: (l: any): any => {
        const h: any = ((Promise as any).withResolvers as any)();
        return (((this as any).streamControllers as any)[n] as any).pullCall = h, ((o as any).postMessage as any)({
          sourceName: r,
          targetName: a,
          stream: (tt as any).PULL,
          streamId: n,
          desiredSize: (l as any).desiredSize
        }), (h as any).promise;
      },
      cancel: (l: any): any => {
        (B as any)(l instanceof Error, "cancel must have a valid reason");
        const h: any = ((Promise as any).withResolvers as any)();
        return (((this as any).streamControllers as any)[n] as any).cancelCall = h, (((this as any).streamControllers as any)[n] as any).isClosed = !0, ((o as any).postMessage as any)({
          sourceName: r,
          targetName: a,
          stream: (tt as any).CANCEL,
          streamId: n,
          reason: (pt as any)(l)
        }), (h as any).promise;
      }
    }, s);
  }
  #i(t: any): any {
    const e: any = (t as any).streamId,
      s: any = (this as any).sourceName,
      i: any = (t as any).sourceName,
      n: any = (this as any).comObj,
      r: any = this,
      a: any = ((this as any).actionHandler as any)[(t as any).action],
      o: any = {
        enqueue(l: any, h: any = 1, c: any): any {
          if ((this as any).isCancelled) return;
          const u: any = (this as any).desiredSize;
          (this as any).desiredSize -= h, (u as any) > (0 as any) && ((this as any).desiredSize as any) <= (0 as any) && ((this as any).sinkCapability = ((Promise as any).withResolvers as any)(), (this as any).ready = ((this as any).sinkCapability as any).promise), ((n as any).postMessage as any)({
            sourceName: s,
            targetName: i,
            stream: (tt as any).ENQUEUE,
            streamId: e,
            chunk: l
          }, c);
        },
        close(): any {
          (this as any).isCancelled || ((this as any).isCancelled = !0, ((n as any).postMessage as any)({
            sourceName: s,
            targetName: i,
            stream: (tt as any).CLOSE,
            streamId: e
          }), delete ((r as any).streamSinks as any)[e]);
        },
        error(l: any): any {
          (B as any)(l instanceof Error, "error must have a valid reason"), !(this as any).isCancelled && ((this as any).isCancelled = !0, ((n as any).postMessage as any)({
            sourceName: s,
            targetName: i,
            stream: (tt as any).ERROR,
            streamId: e,
            reason: (pt as any)(l)
          }));
        },
        sinkCapability: ((Promise as any).withResolvers as any)(),
        onPull: null,
        onCancel: null,
        isCancelled: !1,
        desiredSize: (t as any).desiredSize,
        ready: null
      };
    (((o as any).sinkCapability as any).resolve as any)(), (o as any).ready = ((o as any).sinkCapability as any).promise, ((this as any).streamSinks as any)[e] = o, ((((Promise as any).try as any)(a, (t as any).data, o) as any).then as any)(function (this: any): any {
      ((n as any).postMessage as any)({
        sourceName: s,
        targetName: i,
        stream: (tt as any).START_COMPLETE,
        streamId: e,
        success: !0
      });
    }, function (this: any, l: any): any {
      ((n as any).postMessage as any)({
        sourceName: s,
        targetName: i,
        stream: (tt as any).START_COMPLETE,
        streamId: e,
        reason: (pt as any)(l)
      });
    });
  }
  #s(t: any): any {
    const e: any = (t as any).streamId,
      s: any = (this as any).sourceName,
      i: any = (t as any).sourceName,
      n: any = (this as any).comObj,
      r: any = ((this as any).streamControllers as any)[e],
      a: any = ((this as any).streamSinks as any)[e];
    switch ((t as any).stream) {
      case (tt as any).START_COMPLETE:
        (t as any).success ? (((r as any).startCall as any).resolve as any)() : (((r as any).startCall as any).reject as any)((pt as any)((t as any).reason));
        break;
      case (tt as any).PULL_COMPLETE:
        (t as any).success ? (((r as any).pullCall as any).resolve as any)() : (((r as any).pullCall as any).reject as any)((pt as any)((t as any).reason));
        break;
      case (tt as any).PULL:
        if (!a) {
          ((n as any).postMessage as any)({
            sourceName: s,
            targetName: i,
            stream: (tt as any).PULL_COMPLETE,
            streamId: e,
            success: !0
          });
          break;
        }
        ((a as any).desiredSize as any) <= (0 as any) && ((t as any).desiredSize as any) > (0 as any) && (((a as any).sinkCapability as any).resolve as any)(), (a as any).desiredSize = (t as any).desiredSize, ((((Promise as any).try as any)((a as any).onPull || Qs) as any).then as any)(function (this: any): any {
          ((n as any).postMessage as any)({
            sourceName: s,
            targetName: i,
            stream: (tt as any).PULL_COMPLETE,
            streamId: e,
            success: !0
          });
        }, function (this: any, l: any): any {
          ((n as any).postMessage as any)({
            sourceName: s,
            targetName: i,
            stream: (tt as any).PULL_COMPLETE,
            streamId: e,
            reason: (pt as any)(l)
          });
        });
        break;
      case (tt as any).ENQUEUE:
        if ((B as any)(r, "enqueue should have stream controller"), (r as any).isClosed) break;
        (((r as any).controller as any).enqueue as any)((t as any).chunk);
        break;
      case (tt as any).CLOSE:
        if ((B as any)(r, "close should have stream controller"), (r as any).isClosed) break;
        (r as any).isClosed = !0, (((r as any).controller as any).close as any)(), (this.#a as any)(r, e);
        break;
      case (tt as any).ERROR:
        (B as any)(r, "error should have stream controller"), (((r as any).controller as any).error as any)((pt as any)((t as any).reason)), (this.#a as any)(r, e);
        break;
      case (tt as any).CANCEL_COMPLETE:
        (t as any).success ? (((r as any).cancelCall as any).resolve as any)() : (((r as any).cancelCall as any).reject as any)((pt as any)((t as any).reason)), (this.#a as any)(r, e);
        break;
      case (tt as any).CANCEL:
        if (!a) break;
        const o: any = (pt as any)((t as any).reason);
        ((((Promise as any).try as any)((a as any).onCancel || Qs, o) as any).then as any)(function (this: any): any {
          ((n as any).postMessage as any)({
            sourceName: s,
            targetName: i,
            stream: (tt as any).CANCEL_COMPLETE,
            streamId: e,
            success: !0
          });
        }, function (this: any, l: any): any {
          ((n as any).postMessage as any)({
            sourceName: s,
            targetName: i,
            stream: (tt as any).CANCEL_COMPLETE,
            streamId: e,
            reason: (pt as any)(l)
          });
        }), (((a as any).sinkCapability as any).reject as any)(o), (a as any).isCancelled = !0, delete ((this as any).streamSinks as any)[e];
        break;
      default:
        throw new (Error as any)("Unexpected stream case");
    }
  }
  async #a(t: any, e: any): Promise<any> {
    await ((Promise as any).allSettled as any)([(t as any).startCall?.promise, (t as any).pullCall?.promise, (t as any).cancelCall?.promise]), delete ((this as any).streamControllers as any)[e];
  }
  destroy(): any {
    this.#t?.abort(), this.#t = null;
  }
}
class xi {
  [key: string]: any;
  #t: any = !1;
  constructor({
    enableHWA: t = !1
  }: any) {
    this.#t = t;
  }
  create(t: any, e: any): any {
    if ((t as any) <= (0 as any) || (e as any) <= (0 as any)) throw new (Error as any)("Invalid canvas size");
    const s: any = ((this as any)._createCanvas as any)(t, e);
    return {
      canvas: s,
      context: ((s as any).getContext as any)("2d", {
        willReadFrequently: !this.#t
      })
    };
  }
  reset(t: any, e: any, s: any): any {
    if (!(t as any).canvas) throw new (Error as any)("Canvas is not specified");
    if ((e as any) <= (0 as any) || (s as any) <= (0 as any)) throw new (Error as any)("Invalid canvas size");
    ((t as any).canvas as any).width = e, ((t as any).canvas as any).height = s;
  }
  destroy(t: any): any {
    if (!(t as any).canvas) throw new (Error as any)("Canvas is not specified");
    ((t as any).canvas as any).width = 0, ((t as any).canvas as any).height = 0, (t as any).canvas = null, (t as any).context = null;
  }
  _createCanvas(t: any, e: any): any {
    (G as any)("Abstract method `_createCanvas` called.");
  }
}
class Mn extends (xi as any) {
  declare _document: any;
  [key: string]: any;
  constructor({
    ownerDocument: t = (globalThis as any).document,
    enableHWA: e = !1
  }: any) {
    super({
      enableHWA: e
    }), (this as any)._document = t;
  }
  _createCanvas(t: any, e: any): any {
    const s: any = (((this as any)._document as any).createElement as any)("canvas");
    return (s as any).width = t, (s as any).height = e, s;
  }
}
class Ti {
  declare isCompressed: any;
  declare baseUrl: any;
  [key: string]: any;
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }: any) {
    (this as any).baseUrl = t, (this as any).isCompressed = e;
  }
  async fetch({
    name: t
  }: any): Promise<any> {
    if (!(this as any).baseUrl) throw new (Error as any)("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t) throw new (Error as any)("CMap name must be specified.");
    const e: any = (((this as any).baseUrl as any) + (t as any) as any) + (((this as any).isCompressed ? ".bcmap" : "") as any);
    return ((((((this as any)._fetch as any)(e) as any).then as any)((s: any): any => ({
      cMapData: s,
      isCompressed: (this as any).isCompressed
    })) as any).catch as any)((s: any): any => {
      throw new (Error as any)(`Unable to load ${(this as any).isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t: any): Promise<any> {
    (G as any)("Abstract method `_fetch` called.");
  }
}
class Js extends (Ti as any) {
  [key: string]: any;
  async _fetch(t: any): Promise<any> {
    const e: any = await (Ee as any)(t, (this as any).isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new (Uint8Array as any)(e) : (Se as any)(e);
  }
}
class Pi {
  [key: string]: any;
  addFilter(t: any): any {
    return "none";
  }
  addHCMFilter(t: any, e: any): any {
    return "none";
  }
  addAlphaFilter(t: any): any {
    return "none";
  }
  addLuminosityFilter(t: any): any {
    return "none";
  }
  addHighlightHCMFilter(t: any, e: any, s: any, i: any, n: any): any {
    return "none";
  }
  destroy(t: any = !1): any {}
}
class Rn extends (Pi as any) {
  [key: string]: any;
  #t: any;
  #e: any;
  #i: any;
  #s: any;
  #a: any;
  #n: any;
  #r: any = 0;
  constructor({
    docId: t,
    ownerDocument: e = (globalThis as any).document
  }: any) {
    super(), this.#s = t, this.#a = e;
  }
  get #o(): any {
    return this.#e ||= new (Map as any)();
  }
  get #h(): any {
    return this.#n ||= new (Map as any)();
  }
  get #l(): any {
    if (!this.#i) {
      const t: any = ((this.#a as any).createElement as any)("div"),
        {
          style: e
        }: any = t;
      (e as any).visibility = "hidden", (e as any).contain = "strict", (e as any).width = (e as any).height = 0, (e as any).position = "absolute", (e as any).top = (e as any).left = 0, (e as any).zIndex = -1;
      const s: any = ((this.#a as any).createElementNS as any)(Rt, "svg");
      ((s as any).setAttribute as any)("width", 0), ((s as any).setAttribute as any)("height", 0), this.#i = ((this.#a as any).createElementNS as any)(Rt, "defs"), ((t as any).append as any)(s), ((s as any).append as any)(this.#i), (((this.#a as any).body as any).append as any)(t);
    }
    return this.#i;
  }
  #u(t: any): any {
    if (((t as any).length as any) === (1 as any)) {
      const o: any = (t as any)[0],
        l: any = new (Array as any)(256);
      for (let c: any = 0; (c as any) < (256 as any); c++) (l as any)[c] = ((o as any)[c] as any) / (255 as any);
      const h: any = ((l as any).join as any)(",");
      return [h, h, h];
    }
    const [e, s, i]: any = t,
      n: any = new (Array as any)(256),
      r: any = new (Array as any)(256),
      a: any = new (Array as any)(256);
    for (let o: any = 0; (o as any) < (256 as any); o++) (n as any)[o] = ((e as any)[o] as any) / (255 as any), (r as any)[o] = ((s as any)[o] as any) / (255 as any), (a as any)[o] = ((i as any)[o] as any) / (255 as any);
    return [((n as any).join as any)(","), ((r as any).join as any)(","), ((a as any).join as any)(",")];
  }
  #d(t: any): any {
    if ((this.#t as any) === (void 0 as any)) {
      this.#t = "";
      const e: any = (this.#a as any).URL;
      (e as any) !== ((this.#a as any).baseURI as any) && ((Ke as any)(e) ? (I as any)('#createUrl: ignore "data:"-URL for performance reasons.') : this.#t = (bi as any)(e, ""));
    }
    return `url(${this.#t}#${t})`;
  }
  addFilter(t: any): any {
    if (!t) return "none";
    let e: any = ((this.#o as any).get as any)(t);
    if (e) return e;
    const [s, i, n]: any = (this.#u as any)(t),
      r: any = ((t as any).length as any) === (1 as any) ? s : `${s}${i}${n}`;
    if (e = ((this.#o as any).get as any)(r), e) return ((this.#o as any).set as any)(t, e), e;
    const a: any = `g_${this.#s}_transfer_map_${this.#r++}`,
      o: any = (this.#d as any)(a);
    ((this.#o as any).set as any)(t, o), ((this.#o as any).set as any)(r, o);
    const l: any = (this.#p as any)(a);
    return (this.#g as any)(s, i, n, l), o;
  }
  addHCMFilter(t: any, e: any): any {
    const s: any = `${t}-${e}`,
      i: string = "base";
    let n: any = ((this.#h as any).get as any)(i);
    if ((n?.key as any) === (s as any) || (n ? ((n as any).filter?.remove(), (n as any).key = s, (n as any).url = "none", (n as any).filter = null) : (n = {
      key: s,
      url: "none",
      filter: null
    }, ((this.#h as any).set as any)(i, n)), !t || !e)) return (n as any).url;
    const r: any = (this.#A as any)(t);
    t = ((P as any).makeHexColor as any)(...r);
    const a: any = (this.#A as any)(e);
    if (e = ((P as any).makeHexColor as any)(...a), ((this.#l as any).style as any).color = "", (t as any) === ("#000000" as any) && (e as any) === ("#ffffff" as any) || (t as any) === (e as any)) return (n as any).url;
    const o: any = new (Array as any)(256);
    for (let f: any = 0; (f as any) <= (255 as any); f++) {
      const g: any = (f as any) / (255 as any);
      (o as any)[f] = (g as any) <= (.03928 as any) ? (g as any) / (12.92 as any) : (((g as any) + (.055 as any) as any) / (1.055 as any) as any) ** (2.4 as any);
    }
    const l: any = ((o as any).join as any)(","),
      h: any = `g_${this.#s}_hcm_filter`,
      c: any = (n as any).filter = (this.#p as any)(h);
    (this.#g as any)(l, l, l, c), (this.#m as any)(c);
    const u: any = (f: any, g: any): any => {
      const p: any = ((r as any)[f] as any) / (255 as any),
        b: any = ((a as any)[f] as any) / (255 as any),
        m: any = new (Array as any)((g as any) + (1 as any));
      for (let y: any = 0; (y as any) <= (g as any); y++) (m as any)[y] = (p as any) + (((y as any) / (g as any) as any) * ((b as any) - (p as any) as any) as any);
      return ((m as any).join as any)(",");
    };
    return (this.#g as any)((u as any)(0, 5), (u as any)(1, 5), (u as any)(2, 5), c), (n as any).url = (this.#d as any)(h), (n as any).url;
  }
  addAlphaFilter(t: any): any {
    let e: any = ((this.#o as any).get as any)(t);
    if (e) return e;
    const [s]: any = (this.#u as any)([t]),
      i: any = `alpha_${s}`;
    if (e = ((this.#o as any).get as any)(i), e) return ((this.#o as any).set as any)(t, e), e;
    const n: any = `g_${this.#s}_alpha_map_${this.#r++}`,
      r: any = (this.#d as any)(n);
    ((this.#o as any).set as any)(t, r), ((this.#o as any).set as any)(i, r);
    const a: any = (this.#p as any)(n);
    return (this.#b as any)(s, a), r;
  }
  addLuminosityFilter(t: any): any {
    let e: any = ((this.#o as any).get as any)(t || "luminosity");
    if (e) return e;
    let s: any, i: any;
    if (t ? ([s] = (this.#u as any)([t]), i = `luminosity_${s}`) : i = "luminosity", e = ((this.#o as any).get as any)(i), e) return ((this.#o as any).set as any)(t, e), e;
    const n: any = `g_${this.#s}_luminosity_map_${this.#r++}`,
      r: any = (this.#d as any)(n);
    ((this.#o as any).set as any)(t, r), ((this.#o as any).set as any)(i, r);
    const a: any = (this.#p as any)(n);
    return (this.#f as any)(a), t && (this.#b as any)(s, a), r;
  }
  addHighlightHCMFilter(t: any, e: any, s: any, i: any, n: any): any {
    const r: any = `${e}-${s}-${i}-${n}`;
    let a: any = ((this.#h as any).get as any)(t);
    if ((a?.key as any) === (r as any) || (a ? ((a as any).filter?.remove(), (a as any).key = r, (a as any).url = "none", (a as any).filter = null) : (a = {
      key: r,
      url: "none",
      filter: null
    }, ((this.#h as any).set as any)(t, a)), !e || !s)) return (a as any).url;
    const [o, l]: any = (([e, s] as any).map as any)(((this.#A as any).bind as any)(this));
    let h: any = ((Math as any).round as any)((((.2126 as any) * ((o as any)[0] as any) as any) + ((.7152 as any) * ((o as any)[1] as any) as any) as any) + ((.0722 as any) * ((o as any)[2] as any) as any)),
      c: any = ((Math as any).round as any)((((.2126 as any) * ((l as any)[0] as any) as any) + ((.7152 as any) * ((l as any)[1] as any) as any) as any) + ((.0722 as any) * ((l as any)[2] as any) as any)),
      [u, f]: any = (([i, n] as any).map as any)(((this.#A as any).bind as any)(this));
    (c as any) < (h as any) && ([h, c, u, f] = [c, h, f, u]), ((this.#l as any).style as any).color = "";
    const g: any = (m: any, y: any, A: any): any => {
        const w: any = new (Array as any)(256),
          v: any = ((c as any) - (h as any) as any) / (A as any),
          _: any = (m as any) / (255 as any),
          S: any = ((y as any) - (m as any) as any) / ((255 as any) * (A as any) as any);
        let E: any = 0;
        for (let C: any = 0; (C as any) <= (A as any); C++) {
          const k: any = ((Math as any).round as any)((h as any) + ((C as any) * (v as any) as any)),
            T: any = (_ as any) + ((C as any) * (S as any) as any);
          for (let U: any = E; (U as any) <= (k as any); U++) (w as any)[U] = T;
          E = (k as any) + (1 as any);
        }
        for (let C: any = E; (C as any) < (256 as any); C++) (w as any)[C] = (w as any)[(E as any) - (1 as any)];
        return ((w as any).join as any)(",");
      },
      p: any = `g_${this.#s}_hcm_${t}_filter`,
      b: any = (a as any).filter = (this.#p as any)(p);
    return (this.#m as any)(b), (this.#g as any)((g as any)((u as any)[0], (f as any)[0], 5), (g as any)((u as any)[1], (f as any)[1], 5), (g as any)((u as any)[2], (f as any)[2], 5), b), (a as any).url = (this.#d as any)(p), (a as any).url;
  }
  destroy(t: any = !1): any {
    t && this.#n?.size || (this.#i?.parentNode.parentNode.remove(), this.#i = null, this.#e?.clear(), this.#e = null, this.#n?.clear(), this.#n = null, this.#r = 0);
  }
  #f(t: any): any {
    const e: any = ((this.#a as any).createElementNS as any)(Rt, "feColorMatrix");
    ((e as any).setAttribute as any)("type", "matrix"), ((e as any).setAttribute as any)("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), ((t as any).append as any)(e);
  }
  #m(t: any): any {
    const e: any = ((this.#a as any).createElementNS as any)(Rt, "feColorMatrix");
    ((e as any).setAttribute as any)("type", "matrix"), ((e as any).setAttribute as any)("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), ((t as any).append as any)(e);
  }
  #p(t: any): any {
    const e: any = ((this.#a as any).createElementNS as any)(Rt, "filter");
    return ((e as any).setAttribute as any)("color-interpolation-filters", "sRGB"), ((e as any).setAttribute as any)("id", t), ((this.#l as any).append as any)(e), e;
  }
  #c(t: any, e: any, s: any): any {
    const i: any = ((this.#a as any).createElementNS as any)(Rt, e);
    ((i as any).setAttribute as any)("type", "discrete"), ((i as any).setAttribute as any)("tableValues", s), ((t as any).append as any)(i);
  }
  #g(t: any, e: any, s: any, i: any): any {
    const n: any = ((this.#a as any).createElementNS as any)(Rt, "feComponentTransfer");
    ((i as any).append as any)(n), (this.#c as any)(n, "feFuncR", t), (this.#c as any)(n, "feFuncG", e), (this.#c as any)(n, "feFuncB", s);
  }
  #b(t: any, e: any): any {
    const s: any = ((this.#a as any).createElementNS as any)(Rt, "feComponentTransfer");
    ((e as any).append as any)(s), (this.#c as any)(s, "feFuncA", t);
  }
  #A(t: any): any {
    return ((this.#l as any).style as any).color = t, (xe as any)((((getComputedStyle as any)(this.#l) as any).getPropertyValue as any)("color"));
  }
}
class ki {
  declare baseUrl: any;
  [key: string]: any;
  constructor({
    baseUrl: t = null
  }: any) {
    (this as any).baseUrl = t;
  }
  async fetch({
    filename: t
  }: any): Promise<any> {
    if (!(this as any).baseUrl) throw new (Error as any)("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t) throw new (Error as any)("Font filename must be specified.");
    const e: any = `${(this as any).baseUrl}${t}`;
    return ((((this as any)._fetch as any)(e) as any).catch as any)((s: any): any => {
      throw new (Error as any)(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t: any): Promise<any> {
    (G as any)("Abstract method `_fetch` called.");
  }
}
class Zs extends (ki as any) {
  [key: string]: any;
  async _fetch(t: any): Promise<any> {
    const e: any = await (Ee as any)(t, "arraybuffer");
    return new (Uint8Array as any)(e);
  }
}
class Mi {
  declare baseUrl: any;
  [key: string]: any;
  constructor({
    baseUrl: t = null
  }: any) {
    (this as any).baseUrl = t;
  }
  async fetch({
    filename: t
  }: any): Promise<any> {
    if (!(this as any).baseUrl) throw new (Error as any)("Ensure that the `wasmUrl` API parameter is provided.");
    if (!t) throw new (Error as any)("Wasm filename must be specified.");
    const e: any = `${(this as any).baseUrl}${t}`;
    return ((((this as any)._fetch as any)(e) as any).catch as any)((s: any): any => {
      throw new (Error as any)(`Unable to load wasm data at: ${e}`);
    });
  }
  async _fetch(t: any): Promise<any> {
    (G as any)("Abstract method `_fetch` called.");
  }
}
class ti extends (Mi as any) {
  [key: string]: any;
  async _fetch(t: any): Promise<any> {
    const e: any = await (Ee as any)(t, "arraybuffer");
    return new (Uint8Array as any)(e);
  }
}
ct && (I as any)("Please use the `legacy` build in Node.js environments.");
async function Ms(this: any, d: any): Promise<any> {
  const e: any = await (((((process as any).getBuiltinModule as any)("fs") as any).promises as any).readFile as any)(d);
  return new (Uint8Array as any)(e);
}
class Dn extends (Pi as any) {
  [key: string]: any;
}
class Ln extends (xi as any) {
  [key: string]: any;
  _createCanvas(t: any, e: any): any {
    return (((((((process as any).getBuiltinModule as any)("module") as any).createRequire as any)((import.meta as any).url) as any)("@napi-rs/canvas") as any).createCanvas as any)(t, e);
  }
}
class In extends (Ti as any) {
  [key: string]: any;
  async _fetch(t: any): Promise<any> {
    return (Ms as any)(t);
  }
}
class Fn extends (ki as any) {
  [key: string]: any;
  async _fetch(t: any): Promise<any> {
    return (Ms as any)(t);
  }
}
class Nn extends (Mi as any) {
  [key: string]: any;
  async _fetch(t: any): Promise<any> {
    return (Ms as any)(t);
  }
}
const Kt: string = "__forcedDependency",
  {
    floor: ei,
    ceil: si
  }: any = Math;
function Ie(this: any, d: any, t: any, e: any, s: any, i: any, n: any): any {
  (d as any)[((t as any) * (4 as any) as any) + (0 as any)] = ((Math as any).min as any)((d as any)[((t as any) * (4 as any) as any) + (0 as any)], e), (d as any)[((t as any) * (4 as any) as any) + (1 as any)] = ((Math as any).min as any)((d as any)[((t as any) * (4 as any) as any) + (1 as any)], s), (d as any)[((t as any) * (4 as any) as any) + (2 as any)] = ((Math as any).max as any)((d as any)[((t as any) * (4 as any) as any) + (2 as any)], i), (d as any)[((t as any) * (4 as any) as any) + (3 as any)] = ((Math as any).max as any)((d as any)[((t as any) * (4 as any) as any) + (3 as any)], n);
}
const ys: any = (new (Uint32Array as any)((new (Uint8Array as any)([255, 255, 0, 0]) as any).buffer) as any)[0];
class On {
  [key: string]: any;
  #t: any;
  #e: any;
  constructor(t: any, e: any) {
    this.#t = t, this.#e = e;
  }
  get length(): any {
    return (this.#t as any).length;
  }
  isEmpty(t: any): any {
    return ((this.#t as any)[t] as any) === (ys as any);
  }
  minX(t: any): any {
    return ((this.#e as any)[((t as any) * (4 as any) as any) + (0 as any)] as any) / (256 as any);
  }
  minY(t: any): any {
    return ((this.#e as any)[((t as any) * (4 as any) as any) + (1 as any)] as any) / (256 as any);
  }
  maxX(t: any): any {
    return (((this.#e as any)[((t as any) * (4 as any) as any) + (2 as any)] as any) + (1 as any) as any) / (256 as any);
  }
  maxY(t: any): any {
    return (((this.#e as any)[((t as any) * (4 as any) as any) + (3 as any)] as any) + (1 as any) as any) / (256 as any);
  }
}
const Fe: any = (d: any, t: any): any => {
  if (!d) return;
  let e: any = ((d as any).get as any)(t);
  return e || (e = {
    dependencies: new (Set as any)(),
    isRenderingOperation: !1
  }, ((d as any).set as any)(t, e)), e;
};
class Bn {
  [key: string]: any;
  #t: any = {
    __proto__: null
  };
  #e: any = {
    __proto__: null,
    transform: [],
    moveText: [],
    sameLineText: [],
    [Kt]: []
  };
  #i: any = new (Map as any)();
  #s: any = [];
  #a: any = [];
  #n: any = [[1, 0, 0, 1, 0, 0]];
  #r: any = [(-1 as any) / (0 as any), (-1 as any) / (0 as any), (1 as any) / (0 as any), (1 as any) / (0 as any)];
  #o: any = new (Float64Array as any)([(1 as any) / (0 as any), (1 as any) / (0 as any), (-1 as any) / (0 as any), (-1 as any) / (0 as any)]);
  #h: any = -1;
  #l: any = new (Set as any)();
  #u: any = new (Map as any)();
  #d: any = new (Map as any)();
  #f: any;
  #m: any;
  #p: any;
  #c: any;
  #g: any;
  constructor(t: any, e: any, s: any = !1) {
    this.#f = (t as any).width, this.#m = (t as any).height, (this.#b as any)(e), s && (this.#g = new (Map as any)());
  }
  growOperationsCount(t: any): any {
    (t as any) >= ((this.#c as any).length as any) && (this.#b as any)(t, this.#c);
  }
  #b(t: any, e: any): any {
    const s: any = new (ArrayBuffer as any)((t as any) * (4 as any));
    this.#p = new (Uint8ClampedArray as any)(s), this.#c = new (Uint32Array as any)(s), e && ((e as any).length as any) > (0 as any) ? (((this.#c as any).set as any)(e), ((this.#c as any).fill as any)(ys, (e as any).length)) : ((this.#c as any).fill as any)(ys);
  }
  save(t: any): any {
    return this.#t = {
      __proto__: this.#t
    }, this.#e = {
      __proto__: this.#e,
      transform: {
        __proto__: (this.#e as any).transform
      },
      moveText: {
        __proto__: (this.#e as any).moveText
      },
      sameLineText: {
        __proto__: (this.#e as any).sameLineText
      },
      [Kt]: {
        __proto__: (this.#e as any)[Kt]
      }
    }, this.#r = {
      __proto__: this.#r
    }, ((this.#s as any).push as any)(t), this;
  }
  restore(t: any): any {
    const e: any = ((Object as any).getPrototypeOf as any)(this.#t);
    if ((e as any) === (null as any)) return this;
    this.#t = e, this.#e = ((Object as any).getPrototypeOf as any)(this.#e), this.#r = ((Object as any).getPrototypeOf as any)(this.#r);
    const s: any = ((this.#s as any).pop as any)();
    return (s as any) !== (void 0 as any) && ((Fe as any)(this.#g, t)?.dependencies.add(s), (this.#c as any)[t] = (this.#c as any)[s]), this;
  }
  recordOpenMarker(t: any): any {
    return ((this.#s as any).push as any)(t), this;
  }
  getOpenMarker(): any {
    return ((this.#s as any).length as any) === (0 as any) ? null : ((this.#s as any).at as any)(-1);
  }
  recordCloseMarker(t: any): any {
    const e: any = ((this.#s as any).pop as any)();
    return (e as any) !== (void 0 as any) && ((Fe as any)(this.#g, t)?.dependencies.add(e), (this.#c as any)[t] = (this.#c as any)[e]), this;
  }
  beginMarkedContent(t: any): any {
    return ((this.#a as any).push as any)(t), this;
  }
  endMarkedContent(t: any): any {
    const e: any = ((this.#a as any).pop as any)();
    return (e as any) !== (void 0 as any) && ((Fe as any)(this.#g, t)?.dependencies.add(e), (this.#c as any)[t] = (this.#c as any)[e]), this;
  }
  pushBaseTransform(t: any): any {
    return ((this.#n as any).push as any)(((P as any).multiplyByDOMMatrix as any)(((this.#n as any).at as any)(-1), ((t as any).getTransform as any)())), this;
  }
  popBaseTransform(): any {
    return ((this.#n as any).length as any) > (1 as any) && ((this.#n as any).pop as any)(), this;
  }
  recordSimpleData(t: any, e: any): any {
    return (this.#t as any)[t] = e, this;
  }
  recordIncrementalData(t: any, e: any): any {
    return (((this.#e as any)[t] as any).push as any)(e), this;
  }
  resetIncrementalData(t: any, e: any): any {
    return ((this.#e as any)[t] as any).length = 0, this;
  }
  recordNamedData(t: any, e: any): any {
    return ((this.#i as any).set as any)(t, e), this;
  }
  recordSimpleDataFromNamed(t: any, e: any, s: any): any {
    (this.#t as any)[t] = ((this.#i as any).get as any)(e) ?? s;
  }
  recordFutureForcedDependency(t: any, e: any): any {
    return ((this as any).recordIncrementalData as any)(Kt, e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t: any): any {
    for (const e of t) e in this.#t && ((this as any).recordFutureForcedDependency as any)(e, (this.#t as any)[e]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies(): any {
    for (const t of this.#l) ((this as any).recordFutureForcedDependency as any)(Kt, t);
    return this;
  }
  resetBBox(t: any): any {
    return (this.#h as any) !== (t as any) && (this.#h = t, (this.#o as any)[0] = (1 as any) / (0 as any), (this.#o as any)[1] = (1 as any) / (0 as any), (this.#o as any)[2] = (-1 as any) / (0 as any), (this.#o as any)[3] = (-1 as any) / (0 as any)), this;
  }
  recordClipBox(t: any, e: any, s: any, i: any, n: any, r: any): any {
    const a: any = ((P as any).multiplyByDOMMatrix as any)(((this.#n as any).at as any)(-1), ((e as any).getTransform as any)()),
      o: any = [(1 as any) / (0 as any), (1 as any) / (0 as any), (-1 as any) / (0 as any), (-1 as any) / (0 as any)];
    ((P as any).axialAlignedBoundingBox as any)([s, n, i, r], a, o);
    const l: any = ((P as any).intersect as any)(this.#r, o);
    return l ? ((this.#r as any)[0] = (l as any)[0], (this.#r as any)[1] = (l as any)[1], (this.#r as any)[2] = (l as any)[2], (this.#r as any)[3] = (l as any)[3]) : ((this.#r as any)[0] = (this.#r as any)[1] = (1 as any) / (0 as any), (this.#r as any)[2] = (this.#r as any)[3] = (-1 as any) / (0 as any)), this;
  }
  recordBBox(t: any, e: any, s: any, i: any, n: any, r: any): any {
    const a: any = this.#r;
    if (((a as any)[0] as any) === ((1 as any) / (0 as any) as any)) return this;
    const o: any = ((P as any).multiplyByDOMMatrix as any)(((this.#n as any).at as any)(-1), ((e as any).getTransform as any)());
    if (((a as any)[0] as any) === ((-1 as any) / (0 as any) as any)) return ((P as any).axialAlignedBoundingBox as any)([s, n, i, r], o, this.#o), this;
    const l: any = [(1 as any) / (0 as any), (1 as any) / (0 as any), (-1 as any) / (0 as any), (-1 as any) / (0 as any)];
    return ((P as any).axialAlignedBoundingBox as any)([s, n, i, r], o, l), (this.#o as any)[0] = ((Math as any).min as any)((this.#o as any)[0], ((Math as any).max as any)((l as any)[0], (a as any)[0])), (this.#o as any)[1] = ((Math as any).min as any)((this.#o as any)[1], ((Math as any).max as any)((l as any)[1], (a as any)[1])), (this.#o as any)[2] = ((Math as any).max as any)((this.#o as any)[2], ((Math as any).min as any)((l as any)[2], (a as any)[2])), (this.#o as any)[3] = ((Math as any).max as any)((this.#o as any)[3], ((Math as any).min as any)((l as any)[3], (a as any)[3])), this;
  }
  recordCharacterBBox(t: any, e: any, s: any, i: any = 1, n: any = 0, r: any = 0, a: any): any {
    const o: any = (s as any).bbox;
    let l: any, h: any;
    if (o && (l = ((o as any)[2] as any) !== ((o as any)[0] as any) && ((o as any)[3] as any) !== ((o as any)[1] as any) && ((this.#d as any).get as any)(s), (l as any) !== (!1 as any) && (h = [0, 0, 0, 0], ((P as any).axialAlignedBoundingBox as any)(o, (s as any).fontMatrix, h), ((i as any) !== (1 as any) || (n as any) !== (0 as any) || (r as any) !== (0 as any)) && ((P as any).scaleMinMax as any)([i, 0, 0, -i, n, r], h), l))) return ((this as any).recordBBox as any)(t, e, (h as any)[0], (h as any)[2], (h as any)[1], (h as any)[3]);
    if (!a) return ((this as any).recordFullPageBBox as any)(t);
    const c: any = (a as any)();
    return o && h && (l as any) === (void 0 as any) && (l = ((h as any)[0] as any) <= ((n as any) - ((c as any).actualBoundingBoxLeft as any) as any) && ((h as any)[2] as any) >= ((n as any) + ((c as any).actualBoundingBoxRight as any) as any) && ((h as any)[1] as any) <= ((r as any) - ((c as any).actualBoundingBoxAscent as any) as any) && ((h as any)[3] as any) >= ((r as any) + ((c as any).actualBoundingBoxDescent as any) as any), ((this.#d as any).set as any)(s, l), l) ? ((this as any).recordBBox as any)(t, e, (h as any)[0], (h as any)[2], (h as any)[1], (h as any)[3]) : ((this as any).recordBBox as any)(t, e, (n as any) - ((c as any).actualBoundingBoxLeft as any), (n as any) + ((c as any).actualBoundingBoxRight as any), (r as any) - ((c as any).actualBoundingBoxAscent as any), (r as any) + ((c as any).actualBoundingBoxDescent as any));
  }
  recordFullPageBBox(t: any): any {
    return (this.#o as any)[0] = ((Math as any).max as any)(0, (this.#r as any)[0]), (this.#o as any)[1] = ((Math as any).max as any)(0, (this.#r as any)[1]), (this.#o as any)[2] = ((Math as any).min as any)(this.#f, (this.#r as any)[2]), (this.#o as any)[3] = ((Math as any).min as any)(this.#m, (this.#r as any)[3]), this;
  }
  getSimpleIndex(t: any): any {
    return (this.#t as any)[t];
  }
  recordDependencies(t: any, e: any): any {
    const s: any = this.#l,
      i: any = this.#t,
      n: any = this.#e;
    for (const r of e) r in this.#t ? ((s as any).add as any)((i as any)[r]) : r in n && (((n as any)[r] as any).forEach as any)((s as any).add, s);
    return this;
  }
  recordNamedDependency(t: any, e: any): any {
    return ((this.#i as any).has as any)(e) && ((this.#l as any).add as any)(((this.#i as any).get as any)(e)), this;
  }
  recordOperation(t: any, e: any = !1): any {
    if (((this as any).recordDependencies as any)(t, [Kt]), this.#g) {
      const s: any = (Fe as any)(this.#g, t),
        {
          dependencies: i
        }: any = s;
      ((this.#l as any).forEach as any)((i as any).add, i), ((this.#s as any).forEach as any)((i as any).add, i), ((this.#a as any).forEach as any)((i as any).add, i), ((i as any).delete as any)(t), (s as any).isRenderingOperation = !0;
    }
    if ((this.#h as any) === (t as any)) {
      const s: any = (ei as any)((((this.#o as any)[0] as any) * (256 as any) as any) / (this.#f as any)),
        i: any = (ei as any)((((this.#o as any)[1] as any) * (256 as any) as any) / (this.#m as any)),
        n: any = (si as any)((((this.#o as any)[2] as any) * (256 as any) as any) / (this.#f as any)),
        r: any = (si as any)((((this.#o as any)[3] as any) * (256 as any) as any) / (this.#m as any));
      (Ie as any)(this.#p, t, s, i, n, r);
      for (const a of this.#l) (a as any) !== (t as any) && (Ie as any)(this.#p, a, s, i, n, r);
      for (const a of this.#s) (a as any) !== (t as any) && (Ie as any)(this.#p, a, s, i, n, r);
      for (const a of this.#a) (a as any) !== (t as any) && (Ie as any)(this.#p, a, s, i, n, r);
      e || (((this.#l as any).clear as any)(), this.#h = -1);
    }
    return this;
  }
  recordShowTextOperation(t: any, e: any = !1): any {
    const s: any = ((Array as any).from as any)(this.#l);
    ((this as any).recordOperation as any)(t, e), ((this as any).recordIncrementalData as any)("sameLineText", t);
    for (const i of s) ((this as any).recordIncrementalData as any)("sameLineText", i);
    return this;
  }
  bboxToClipBoxDropOperation(t: any, e: any = !1): any {
    return (this.#h as any) === (t as any) && (this.#h = -1, (this.#r as any)[0] = ((Math as any).max as any)((this.#r as any)[0], (this.#o as any)[0]), (this.#r as any)[1] = ((Math as any).max as any)((this.#r as any)[1], (this.#o as any)[1]), (this.#r as any)[2] = ((Math as any).min as any)((this.#r as any)[2], (this.#o as any)[2]), (this.#r as any)[3] = ((Math as any).min as any)((this.#r as any)[3], (this.#o as any)[3]), e || ((this.#l as any).clear as any)()), this;
  }
  _takePendingDependencies(): any {
    const t: any = this.#l;
    return this.#l = new (Set as any)(), t;
  }
  _extractOperation(t: any): any {
    const e: any = ((this.#u as any).get as any)(t);
    return ((this.#u as any).delete as any)(t), e;
  }
  _pushPendingDependencies(t: any): any {
    for (const e of t) ((this.#l as any).add as any)(e);
  }
  take(): any {
    return ((this.#d as any).clear as any)(), new (On as any)(this.#c, this.#p);
  }
  takeDebugMetadata(): any {
    return this.#g;
  }
}
class Ge {
  [key: string]: any;
  #t: any;
  #e: any;
  #i: any;
  #s: any = 0;
  #a: any = 0;
  constructor(t: any, e: any, s: any) {
    if (t instanceof Ge && (t.#i as any) === (!!s as any)) return t;
    this.#t = t, this.#e = e, this.#i = !!s;
  }
  growOperationsCount(): any {
    throw new (Error as any)("Unreachable");
  }
  save(t: any): any {
    return this.#a++, ((this.#t as any).save as any)(this.#e), this;
  }
  restore(t: any): any {
    return (this.#a as any) > (0 as any) && (((this.#t as any).restore as any)(this.#e), this.#a--), this;
  }
  recordOpenMarker(t: any): any {
    return this.#s++, this;
  }
  getOpenMarker(): any {
    return (this.#s as any) > (0 as any) ? this.#e : ((this.#t as any).getOpenMarker as any)();
  }
  recordCloseMarker(t: any): any {
    return this.#s--, this;
  }
  beginMarkedContent(t: any): any {
    return this;
  }
  endMarkedContent(t: any): any {
    return this;
  }
  pushBaseTransform(t: any): any {
    return ((this.#t as any).pushBaseTransform as any)(t), this;
  }
  popBaseTransform(): any {
    return ((this.#t as any).popBaseTransform as any)(), this;
  }
  recordSimpleData(t: any, e: any): any {
    return ((this.#t as any).recordSimpleData as any)(t, this.#e), this;
  }
  recordIncrementalData(t: any, e: any): any {
    return ((this.#t as any).recordIncrementalData as any)(t, this.#e), this;
  }
  resetIncrementalData(t: any, e: any): any {
    return ((this.#t as any).resetIncrementalData as any)(t, this.#e), this;
  }
  recordNamedData(t: any, e: any): any {
    return this;
  }
  recordSimpleDataFromNamed(t: any, e: any, s: any): any {
    return ((this.#t as any).recordSimpleDataFromNamed as any)(t, e, this.#e), this;
  }
  recordFutureForcedDependency(t: any, e: any): any {
    return ((this.#t as any).recordFutureForcedDependency as any)(t, this.#e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t: any): any {
    return ((this.#t as any).inheritSimpleDataAsFutureForcedDependencies as any)(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies(): any {
    return ((this.#t as any).inheritPendingDependenciesAsFutureForcedDependencies as any)(), this;
  }
  resetBBox(t: any): any {
    return this.#i || ((this.#t as any).resetBBox as any)(this.#e), this;
  }
  recordClipBox(t: any, e: any, s: any, i: any, n: any, r: any): any {
    return this.#i || ((this.#t as any).recordClipBox as any)(this.#e, e, s, i, n, r), this;
  }
  recordBBox(t: any, e: any, s: any, i: any, n: any, r: any): any {
    return this.#i || ((this.#t as any).recordBBox as any)(this.#e, e, s, i, n, r), this;
  }
  recordCharacterBBox(t: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
    return this.#i || ((this.#t as any).recordCharacterBBox as any)(this.#e, e, s, i, n, r, a), this;
  }
  recordFullPageBBox(t: any): any {
    return this.#i || ((this.#t as any).recordFullPageBBox as any)(this.#e), this;
  }
  getSimpleIndex(t: any): any {
    return ((this.#t as any).getSimpleIndex as any)(t);
  }
  recordDependencies(t: any, e: any): any {
    return ((this.#t as any).recordDependencies as any)(this.#e, e), this;
  }
  recordNamedDependency(t: any, e: any): any {
    return ((this.#t as any).recordNamedDependency as any)(this.#e, e), this;
  }
  recordOperation(t: any): any {
    return ((this.#t as any).recordOperation as any)(this.#e, !0), this;
  }
  recordShowTextOperation(t: any): any {
    return ((this.#t as any).recordShowTextOperation as any)(this.#e, !0), this;
  }
  bboxToClipBoxDropOperation(t: any): any {
    return this.#i || ((this.#t as any).bboxToClipBoxDropOperation as any)(this.#e, !0), this;
  }
  take(): any {
    throw new (Error as any)("Unreachable");
  }
  takeDebugMetadata(): any {
    throw new (Error as any)("Unreachable");
  }
}
const At: any = {
    stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
    fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
    imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
    rawFillPath: ["filter", "fillColor", "fillAlpha"],
    showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
    transform: ["transform"],
    transformAndFill: ["transform", "fillColor"]
  },
  at: any = {
    FILL: "Fill",
    STROKE: "Stroke",
    SHADING: "Shading"
  };
function As(this: any, d: any, t: any): any {
  if (!t) return;
  const e: any = ((t as any)[2] as any) - ((t as any)[0] as any),
    s: any = ((t as any)[3] as any) - ((t as any)[1] as any),
    i: any = new (Path2D as any)();
  ((i as any).rect as any)((t as any)[0], (t as any)[1], e, s), ((d as any).clip as any)(i);
}
class Rs {
  [key: string]: any;
  isModifyingCurrentTransform(): any {
    return !1;
  }
  getPattern(): any {
    (G as any)("Abstract method `getPattern` called.");
  }
}
class Hn extends (Rs as any) {
  declare matrix: any;
  declare _r1: any;
  declare _r0: any;
  declare _p1: any;
  declare _p0: any;
  declare _colorStops: any;
  declare _bbox: any;
  declare _type: any;
  [key: string]: any;
  constructor(t: any) {
    super(), (this as any)._type = (t as any)[1], (this as any)._bbox = (t as any)[2], (this as any)._colorStops = (t as any)[3], (this as any)._p0 = (t as any)[4], (this as any)._p1 = (t as any)[5], (this as any)._r0 = (t as any)[6], (this as any)._r1 = (t as any)[7], (this as any).matrix = null;
  }
  _createGradient(t: any): any {
    let e: any;
    ((this as any)._type as any) === ("axial" as any) ? e = ((t as any).createLinearGradient as any)(((this as any)._p0 as any)[0], ((this as any)._p0 as any)[1], ((this as any)._p1 as any)[0], ((this as any)._p1 as any)[1]) : ((this as any)._type as any) === ("radial" as any) && (e = ((t as any).createRadialGradient as any)(((this as any)._p0 as any)[0], ((this as any)._p0 as any)[1], (this as any)._r0, ((this as any)._p1 as any)[0], ((this as any)._p1 as any)[1], (this as any)._r1));
    for (const s of (this as any)._colorStops) ((e as any).addColorStop as any)((s as any)[0], (s as any)[1]);
    return e;
  }
  getPattern(t: any, e: any, s: any, i: any): any {
    let n: any;
    if ((i as any) === ((at as any).STROKE as any) || (i as any) === ((at as any).FILL as any)) {
      const r: any = (((e as any).current as any).getClippedPathBoundingBox as any)(i, (Y as any)(t)) || [0, 0, 0, 0],
        a: any = ((Math as any).ceil as any)(((r as any)[2] as any) - ((r as any)[0] as any)) || 1,
        o: any = ((Math as any).ceil as any)(((r as any)[3] as any) - ((r as any)[1] as any)) || 1,
        l: any = (((e as any).cachedCanvases as any).getCanvas as any)("pattern", a, o),
        h: any = (l as any).context;
      ((h as any).clearRect as any)(0, 0, ((h as any).canvas as any).width, ((h as any).canvas as any).height), ((h as any).beginPath as any)(), ((h as any).rect as any)(0, 0, ((h as any).canvas as any).width, ((h as any).canvas as any).height), ((h as any).translate as any)(-(r as any)[0], -(r as any)[1]), s = ((P as any).transform as any)(s, [1, 0, 0, 1, (r as any)[0], (r as any)[1]]), ((h as any).transform as any)(...(e as any).baseTransform), (this as any).matrix && ((h as any).transform as any)(...(this as any).matrix), (As as any)(h, (this as any)._bbox), (h as any).fillStyle = ((this as any)._createGradient as any)(h), ((h as any).fill as any)(), n = ((t as any).createPattern as any)((l as any).canvas, "no-repeat");
      const c: any = new (DOMMatrix as any)(s);
      ((n as any).setTransform as any)(c);
    } else (As as any)(t, (this as any)._bbox), n = ((this as any)._createGradient as any)(t);
    return n;
  }
}
function os(this: any, d: any, t: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
  const o: any = (t as any).coords,
    l: any = (t as any).colors,
    h: any = (d as any).data,
    c: any = ((d as any).width as any) * (4 as any);
  let u: any;
  ((o as any)[(e as any) + (1 as any)] as any) > ((o as any)[(s as any) + (1 as any)] as any) && (u = e, e = s, s = u, u = n, n = r, r = u), ((o as any)[(s as any) + (1 as any)] as any) > ((o as any)[(i as any) + (1 as any)] as any) && (u = s, s = i, i = u, u = r, r = a, a = u), ((o as any)[(e as any) + (1 as any)] as any) > ((o as any)[(s as any) + (1 as any)] as any) && (u = e, e = s, s = u, u = n, n = r, r = u);
  const f: any = (((o as any)[e] as any) + ((t as any).offsetX as any) as any) * ((t as any).scaleX as any),
    g: any = (((o as any)[(e as any) + (1 as any)] as any) + ((t as any).offsetY as any) as any) * ((t as any).scaleY as any),
    p: any = (((o as any)[s] as any) + ((t as any).offsetX as any) as any) * ((t as any).scaleX as any),
    b: any = (((o as any)[(s as any) + (1 as any)] as any) + ((t as any).offsetY as any) as any) * ((t as any).scaleY as any),
    m: any = (((o as any)[i] as any) + ((t as any).offsetX as any) as any) * ((t as any).scaleX as any),
    y: any = (((o as any)[(i as any) + (1 as any)] as any) + ((t as any).offsetY as any) as any) * ((t as any).scaleY as any);
  if ((g as any) >= (y as any)) return;
  const A: any = (l as any)[n],
    w: any = (l as any)[(n as any) + (1 as any)],
    v: any = (l as any)[(n as any) + (2 as any)],
    _: any = (l as any)[r],
    S: any = (l as any)[(r as any) + (1 as any)],
    E: any = (l as any)[(r as any) + (2 as any)],
    C: any = (l as any)[a],
    k: any = (l as any)[(a as any) + (1 as any)],
    T: any = (l as any)[(a as any) + (2 as any)],
    U: any = ((Math as any).round as any)(g),
    $: any = ((Math as any).round as any)(y);
  let z: any, V: any, R: any, L: any, H: any, lt: any, Mt: any, It: any;
  for (let st: any = U; (st as any) <= ($ as any); st++) {
    if ((st as any) < (b as any)) {
      const Z: any = (st as any) < (g as any) ? 0 : ((g as any) - (st as any) as any) / ((g as any) - (b as any) as any);
      z = (f as any) - (((f as any) - (p as any) as any) * (Z as any) as any), V = (A as any) - (((A as any) - (_ as any) as any) * (Z as any) as any), R = (w as any) - (((w as any) - (S as any) as any) * (Z as any) as any), L = (v as any) - (((v as any) - (E as any) as any) * (Z as any) as any);
    } else {
      let Z: any;
      (st as any) > (y as any) ? Z = 1 : (b as any) === (y as any) ? Z = 0 : Z = ((b as any) - (st as any) as any) / ((b as any) - (y as any) as any), z = (p as any) - (((p as any) - (m as any) as any) * (Z as any) as any), V = (_ as any) - (((_ as any) - (C as any) as any) * (Z as any) as any), R = (S as any) - (((S as any) - (k as any) as any) * (Z as any) as any), L = (E as any) - (((E as any) - (T as any) as any) * (Z as any) as any);
    }
    let q: any;
    (st as any) < (g as any) ? q = 0 : (st as any) > (y as any) ? q = 1 : q = ((g as any) - (st as any) as any) / ((g as any) - (y as any) as any), H = (f as any) - (((f as any) - (m as any) as any) * (q as any) as any), lt = (A as any) - (((A as any) - (C as any) as any) * (q as any) as any), Mt = (w as any) - (((w as any) - (k as any) as any) * (q as any) as any), It = (v as any) - (((v as any) - (T as any) as any) * (q as any) as any);
    const $t: any = ((Math as any).round as any)(((Math as any).min as any)(z, H)),
      Ft: any = ((Math as any).round as any)(((Math as any).max as any)(z, H));
    let Nt: any = ((c as any) * (st as any) as any) + (($t as any) * (4 as any) as any);
    for (let Z: any = $t; (Z as any) <= (Ft as any); Z++) q = ((z as any) - (Z as any) as any) / ((z as any) - (H as any) as any), (q as any) < (0 as any) ? q = 0 : (q as any) > (1 as any) && (q = 1), (h as any)[Nt++] = ((V as any) - (((V as any) - (lt as any) as any) * (q as any) as any) as any) | (0 as any), (h as any)[Nt++] = ((R as any) - (((R as any) - (Mt as any) as any) * (q as any) as any) as any) | (0 as any), (h as any)[Nt++] = ((L as any) - (((L as any) - (It as any) as any) * (q as any) as any) as any) | (0 as any), (h as any)[Nt++] = 255;
  }
}
function Un(this: any, d: any, t: any, e: any): any {
  const s: any = (t as any).coords,
    i: any = (t as any).colors;
  let n: any, r: any;
  switch ((t as any).type) {
    case "lattice":
      const a: any = (t as any).verticesPerRow,
        o: any = (((Math as any).floor as any)(((s as any).length as any) / (a as any)) as any) - (1 as any),
        l: any = (a as any) - (1 as any);
      for (n = 0; (n as any) < (o as any); n++) {
        let h: any = (n as any) * (a as any);
        for (let c: any = 0; (c as any) < (l as any); c++, h++) (os as any)(d, e, (s as any)[h], (s as any)[(h as any) + (1 as any)], (s as any)[(h as any) + (a as any)], (i as any)[h], (i as any)[(h as any) + (1 as any)], (i as any)[(h as any) + (a as any)]), (os as any)(d, e, (s as any)[((h as any) + (a as any) as any) + (1 as any)], (s as any)[(h as any) + (1 as any)], (s as any)[(h as any) + (a as any)], (i as any)[((h as any) + (a as any) as any) + (1 as any)], (i as any)[(h as any) + (1 as any)], (i as any)[(h as any) + (a as any)]);
      }
      break;
    case "triangles":
      for (n = 0, r = (s as any).length; (n as any) < (r as any); n += 3) (os as any)(d, e, (s as any)[n], (s as any)[(n as any) + (1 as any)], (s as any)[(n as any) + (2 as any)], (i as any)[n], (i as any)[(n as any) + (1 as any)], (i as any)[(n as any) + (2 as any)]);
      break;
    default:
      throw new (Error as any)("illegal figure");
  }
}
class $n extends (Rs as any) {
  declare matrix: any;
  declare _background: any;
  declare _bbox: any;
  declare _bounds: any;
  declare _figures: any;
  declare _colors: any;
  declare _coords: any;
  [key: string]: any;
  constructor(t: any) {
    super(), (this as any)._coords = (t as any)[2], (this as any)._colors = (t as any)[3], (this as any)._figures = (t as any)[4], (this as any)._bounds = (t as any)[5], (this as any)._bbox = (t as any)[6], (this as any)._background = (t as any)[7], (this as any).matrix = null;
  }
  _createMeshCanvas(t: any, e: any, s: any): any {
    const a: any = ((Math as any).floor as any)(((this as any)._bounds as any)[0]),
      o: any = ((Math as any).floor as any)(((this as any)._bounds as any)[1]),
      l: any = (((Math as any).ceil as any)(((this as any)._bounds as any)[2]) as any) - (a as any),
      h: any = (((Math as any).ceil as any)(((this as any)._bounds as any)[3]) as any) - (o as any),
      c: any = ((Math as any).min as any)(((Math as any).ceil as any)(((Math as any).abs as any)(((l as any) * ((t as any)[0] as any) as any) * (1.1 as any))), 3e3),
      u: any = ((Math as any).min as any)(((Math as any).ceil as any)(((Math as any).abs as any)(((h as any) * ((t as any)[1] as any) as any) * (1.1 as any))), 3e3),
      f: any = (l as any) / (c as any),
      g: any = (h as any) / (u as any),
      p: any = {
        coords: (this as any)._coords,
        colors: (this as any)._colors,
        offsetX: -a,
        offsetY: -o,
        scaleX: (1 as any) / (f as any),
        scaleY: (1 as any) / (g as any)
      },
      b: any = (c as any) + (4 as any),
      m: any = (u as any) + (4 as any),
      y: any = ((s as any).getCanvas as any)("mesh", b, m),
      A: any = (y as any).context,
      w: any = ((A as any).createImageData as any)(c, u);
    if (e) {
      const _: any = (w as any).data;
      for (let S: any = 0, E: any = (_ as any).length; (S as any) < (E as any); S += 4) (_ as any)[S] = (e as any)[0], (_ as any)[(S as any) + (1 as any)] = (e as any)[1], (_ as any)[(S as any) + (2 as any)] = (e as any)[2], (_ as any)[(S as any) + (3 as any)] = 255;
    }
    for (const _ of (this as any)._figures) (Un as any)(w, _, p);
    return ((A as any).putImageData as any)(w, 2, 2), {
      canvas: (y as any).canvas,
      offsetX: (a as any) - ((2 as any) * (f as any) as any),
      offsetY: (o as any) - ((2 as any) * (g as any) as any),
      scaleX: f,
      scaleY: g
    };
  }
  isModifyingCurrentTransform(): any {
    return !0;
  }
  getPattern(t: any, e: any, s: any, i: any): any {
    (As as any)(t, (this as any)._bbox);
    const n: any = new (Float32Array as any)(2);
    if ((i as any) === ((at as any).SHADING as any)) ((P as any).singularValueDecompose2dScale as any)((Y as any)(t), n);else if ((this as any).matrix) {
      ((P as any).singularValueDecompose2dScale as any)((this as any).matrix, n);
      const [a, o]: any = n;
      ((P as any).singularValueDecompose2dScale as any)((e as any).baseTransform, n), (n as any)[0] *= a, (n as any)[1] *= o;
    } else ((P as any).singularValueDecompose2dScale as any)((e as any).baseTransform, n);
    const r: any = ((this as any)._createMeshCanvas as any)(n, (i as any) === ((at as any).SHADING as any) ? null : (this as any)._background, (e as any).cachedCanvases);
    return (i as any) !== ((at as any).SHADING as any) && (((t as any).setTransform as any)(...(e as any).baseTransform), (this as any).matrix && ((t as any).transform as any)(...(this as any).matrix)), ((t as any).translate as any)((r as any).offsetX, (r as any).offsetY), ((t as any).scale as any)((r as any).scaleX, (r as any).scaleY), ((t as any).createPattern as any)((r as any).canvas, "no-repeat");
  }
}
class zn extends (Rs as any) {
  [key: string]: any;
  getPattern(): any {
    return "hotpink";
  }
}
function jn(this: any, d: any): any {
  switch ((d as any)[0]) {
    case "RadialAxial":
      return new (Hn as any)(d);
    case "Mesh":
      return new ($n as any)(d);
    case "Dummy":
      return new (zn as any)();
  }
  throw new (Error as any)(`Unknown IR type: ${(d as any)[0]}`);
}
const ii: any = {
  COLORED: 1,
  UNCOLORED: 2
};
class Ds {
  declare baseTransform: any;
  declare canvasGraphicsFactory: any;
  declare ctx: any;
  declare tilingType: any;
  declare paintType: any;
  declare ystep: any;
  declare xstep: any;
  declare bbox: any;
  declare matrix: any;
  declare operatorList: any;
  declare color: any;
  [key: string]: any;
  static MAX_PATTERN_SIZE: any = 3e3;
  constructor(t: any, e: any, s: any, i: any) {
    (this as any).color = (t as any)[1], (this as any).operatorList = (t as any)[2], (this as any).matrix = (t as any)[3], (this as any).bbox = (t as any)[4], (this as any).xstep = (t as any)[5], (this as any).ystep = (t as any)[6], (this as any).paintType = (t as any)[7], (this as any).tilingType = (t as any)[8], (this as any).ctx = e, (this as any).canvasGraphicsFactory = s, (this as any).baseTransform = i;
  }
  createPatternCanvas(t: any, e: any): any {
    const {
      bbox: s,
      operatorList: i,
      paintType: n,
      tilingType: r,
      color: a,
      canvasGraphicsFactory: o
    }: any = this;
    let {
      xstep: l,
      ystep: h
    }: any = this;
    l = ((Math as any).abs as any)(l), h = ((Math as any).abs as any)(h), (Ye as any)(("TilingType: " as any) + (r as any));
    const c: any = (s as any)[0],
      u: any = (s as any)[1],
      f: any = (s as any)[2],
      g: any = (s as any)[3],
      p: any = (f as any) - (c as any),
      b: any = (g as any) - (u as any),
      m: any = new (Float32Array as any)(2);
    ((P as any).singularValueDecompose2dScale as any)((this as any).matrix, m);
    const [y, A]: any = m;
    ((P as any).singularValueDecompose2dScale as any)((this as any).baseTransform, m);
    const w: any = (y as any) * ((m as any)[0] as any),
      v: any = (A as any) * ((m as any)[1] as any);
    let _: any = p,
      S: any = b,
      E: any = !1,
      C: any = !1;
    const k: any = ((Math as any).ceil as any)((l as any) * (w as any)),
      T: any = ((Math as any).ceil as any)((h as any) * (v as any)),
      U: any = ((Math as any).ceil as any)((p as any) * (w as any)),
      $: any = ((Math as any).ceil as any)((b as any) * (v as any));
    (k as any) >= (U as any) ? _ = l : E = !0, (T as any) >= ($ as any) ? S = h : C = !0;
    const z: any = ((this as any).getSizeAndScale as any)(_, (((this as any).ctx as any).canvas as any).width, w),
      V: any = ((this as any).getSizeAndScale as any)(S, (((this as any).ctx as any).canvas as any).height, v),
      R: any = (((t as any).cachedCanvases as any).getCanvas as any)("pattern", (z as any).size, (V as any).size),
      L: any = (R as any).context,
      H: any = ((o as any).createCanvasGraphics as any)(L, e);
    if ((H as any).groupLevel = (t as any).groupLevel, ((this as any).setFillAndStrokeStyleToContext as any)(H, n, a), ((L as any).translate as any)((-(z as any).scale as any) * (c as any), (-(V as any).scale as any) * (u as any)), ((H as any).transform as any)(0, (z as any).scale, 0, 0, (V as any).scale, 0, 0), ((L as any).save as any)(), (H as any).dependencyTracker?.save(), ((this as any).clipBbox as any)(H, c, u, f, g), (H as any).baseTransform = (Y as any)((H as any).ctx), ((H as any).executeOperatorList as any)(i), ((H as any).endDrawing as any)(), (H as any).dependencyTracker?.restore(), ((L as any).restore as any)(), E || C) {
      const lt: any = (R as any).canvas;
      E && (_ = l), C && (S = h);
      const Mt: any = ((this as any).getSizeAndScale as any)(_, (((this as any).ctx as any).canvas as any).width, w),
        It: any = ((this as any).getSizeAndScale as any)(S, (((this as any).ctx as any).canvas as any).height, v),
        st: any = (Mt as any).size,
        q: any = (It as any).size,
        $t: any = (((t as any).cachedCanvases as any).getCanvas as any)("pattern-workaround", st, q),
        Ft: any = ($t as any).context,
        Nt: any = E ? ((Math as any).floor as any)((p as any) / (l as any)) : 0,
        Z: any = C ? ((Math as any).floor as any)((b as any) / (h as any)) : 0;
      for (let oe: any = 0; (oe as any) <= (Nt as any); oe++) for (let le: any = 0; (le as any) <= (Z as any); le++) ((Ft as any).drawImage as any)(lt, (st as any) * (oe as any), (q as any) * (le as any), st, q, 0, 0, st, q);
      return {
        canvas: ($t as any).canvas,
        scaleX: (Mt as any).scale,
        scaleY: (It as any).scale,
        offsetX: c,
        offsetY: u
      };
    }
    return {
      canvas: (R as any).canvas,
      scaleX: (z as any).scale,
      scaleY: (V as any).scale,
      offsetX: c,
      offsetY: u
    };
  }
  getSizeAndScale(t: any, e: any, s: any): any {
    const i: any = ((Math as any).max as any)((Ds as any).MAX_PATTERN_SIZE, e);
    let n: any = ((Math as any).ceil as any)((t as any) * (s as any));
    return (n as any) >= (i as any) ? n = i : s = (n as any) / (t as any), {
      scale: s,
      size: n
    };
  }
  clipBbox(t: any, e: any, s: any, i: any, n: any): any {
    const r: any = (i as any) - (e as any),
      a: any = (n as any) - (s as any);
    (((t as any).ctx as any).rect as any)(e, s, r, a), ((P as any).axialAlignedBoundingBox as any)([e, s, i, n], (Y as any)((t as any).ctx), ((t as any).current as any).minMax), ((t as any).clip as any)(), ((t as any).endPath as any)();
  }
  setFillAndStrokeStyleToContext(t: any, e: any, s: any): any {
    const i: any = (t as any).ctx,
      n: any = (t as any).current;
    switch (e) {
      case (ii as any).COLORED:
        const {
          fillStyle: r,
          strokeStyle: a
        }: any = (this as any).ctx;
        (i as any).fillStyle = (n as any).fillColor = r, (i as any).strokeStyle = (n as any).strokeColor = a;
        break;
      case (ii as any).UNCOLORED:
        (i as any).fillStyle = (i as any).strokeStyle = s, (n as any).fillColor = (n as any).strokeColor = s;
        break;
      default:
        throw new (en as any)(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform(): any {
    return !1;
  }
  getPattern(t: any, e: any, s: any, i: any, n: any): any {
    let r: any = s;
    (i as any) !== ((at as any).SHADING as any) && (r = ((P as any).transform as any)(r, (e as any).baseTransform), (this as any).matrix && (r = ((P as any).transform as any)(r, (this as any).matrix)));
    const a: any = ((this as any).createPatternCanvas as any)(e, n);
    let o: any = new (DOMMatrix as any)(r);
    o = ((o as any).translate as any)((a as any).offsetX, (a as any).offsetY), o = ((o as any).scale as any)((1 as any) / ((a as any).scaleX as any), (1 as any) / ((a as any).scaleY as any));
    const l: any = ((t as any).createPattern as any)((a as any).canvas, "repeat");
    return ((l as any).setTransform as any)(o), l;
  }
}
function Gn(this: any, {
  src: d,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: n = 4294967295,
  inverseDecode: r = !1
}: any): any {
  const a: any = (ot as any).isLittleEndian ? 4278190080 : 255,
    [o, l]: any = r ? [n, a] : [a, n],
    h: any = (s as any) >> (3 as any),
    c: any = (s as any) & (7 as any),
    u: any = (d as any).length;
  e = new (Uint32Array as any)((e as any).buffer);
  let f: any = 0;
  for (let g: any = 0; (g as any) < (i as any); g++) {
    for (const b: any = (t as any) + (h as any); (t as any) < (b as any); t++) {
      const m: any = (t as any) < (u as any) ? (d as any)[t] : 255;
      (e as any)[f++] = (m as any) & (128 as any) ? l : o, (e as any)[f++] = (m as any) & (64 as any) ? l : o, (e as any)[f++] = (m as any) & (32 as any) ? l : o, (e as any)[f++] = (m as any) & (16 as any) ? l : o, (e as any)[f++] = (m as any) & (8 as any) ? l : o, (e as any)[f++] = (m as any) & (4 as any) ? l : o, (e as any)[f++] = (m as any) & (2 as any) ? l : o, (e as any)[f++] = (m as any) & (1 as any) ? l : o;
    }
    if ((c as any) === (0 as any)) continue;
    const p: any = (t as any) < (u as any) ? (d as any)[t++] : 255;
    for (let b: any = 0; (b as any) < (c as any); b++) (e as any)[f++] = (p as any) & ((1 as any) << ((7 as any) - (b as any) as any) as any) ? l : o;
  }
  return {
    srcPos: t,
    destPos: f
  };
}
const ni: number = 16,
  ri: number = 100,
  Vn: number = 15,
  ai: number = 10,
  gt: number = 16,
  ls: any = new (DOMMatrix as any)(),
  bt: any = new (Float32Array as any)(2),
  te: any = new (Float32Array as any)([(1 as any) / (0 as any), (1 as any) / (0 as any), (-1 as any) / (0 as any), (-1 as any) / (0 as any)]);
function Wn(this: any, d: any, t: any): any {
  if ((d as any)._removeMirroring) throw new (Error as any)("Context is already forwarding operations.");
  (d as any).__originalSave = (d as any).save, (d as any).__originalRestore = (d as any).restore, (d as any).__originalRotate = (d as any).rotate, (d as any).__originalScale = (d as any).scale, (d as any).__originalTranslate = (d as any).translate, (d as any).__originalTransform = (d as any).transform, (d as any).__originalSetTransform = (d as any).setTransform, (d as any).__originalResetTransform = (d as any).resetTransform, (d as any).__originalClip = (d as any).clip, (d as any).__originalMoveTo = (d as any).moveTo, (d as any).__originalLineTo = (d as any).lineTo, (d as any).__originalBezierCurveTo = (d as any).bezierCurveTo, (d as any).__originalRect = (d as any).rect, (d as any).__originalClosePath = (d as any).closePath, (d as any).__originalBeginPath = (d as any).beginPath, (d as any)._removeMirroring = (): any => {
    (d as any).save = (d as any).__originalSave, (d as any).restore = (d as any).__originalRestore, (d as any).rotate = (d as any).__originalRotate, (d as any).scale = (d as any).__originalScale, (d as any).translate = (d as any).__originalTranslate, (d as any).transform = (d as any).__originalTransform, (d as any).setTransform = (d as any).__originalSetTransform, (d as any).resetTransform = (d as any).__originalResetTransform, (d as any).clip = (d as any).__originalClip, (d as any).moveTo = (d as any).__originalMoveTo, (d as any).lineTo = (d as any).__originalLineTo, (d as any).bezierCurveTo = (d as any).__originalBezierCurveTo, (d as any).rect = (d as any).__originalRect, (d as any).closePath = (d as any).__originalClosePath, (d as any).beginPath = (d as any).__originalBeginPath, delete (d as any)._removeMirroring;
  }, (d as any).save = function (this: any): any {
    ((t as any).save as any)(), ((this as any).__originalSave as any)();
  }, (d as any).restore = function (this: any): any {
    ((t as any).restore as any)(), ((this as any).__originalRestore as any)();
  }, (d as any).translate = function (this: any, e: any, s: any): any {
    ((t as any).translate as any)(e, s), ((this as any).__originalTranslate as any)(e, s);
  }, (d as any).scale = function (this: any, e: any, s: any): any {
    ((t as any).scale as any)(e, s), ((this as any).__originalScale as any)(e, s);
  }, (d as any).transform = function (this: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
    ((t as any).transform as any)(e, s, i, n, r, a), ((this as any).__originalTransform as any)(e, s, i, n, r, a);
  }, (d as any).setTransform = function (this: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
    ((t as any).setTransform as any)(e, s, i, n, r, a), ((this as any).__originalSetTransform as any)(e, s, i, n, r, a);
  }, (d as any).resetTransform = function (this: any): any {
    ((t as any).resetTransform as any)(), ((this as any).__originalResetTransform as any)();
  }, (d as any).rotate = function (this: any, e: any): any {
    ((t as any).rotate as any)(e), ((this as any).__originalRotate as any)(e);
  }, (d as any).clip = function (this: any, e: any): any {
    ((t as any).clip as any)(e), ((this as any).__originalClip as any)(e);
  }, (d as any).moveTo = function (this: any, e: any, s: any): any {
    ((t as any).moveTo as any)(e, s), ((this as any).__originalMoveTo as any)(e, s);
  }, (d as any).lineTo = function (this: any, e: any, s: any): any {
    ((t as any).lineTo as any)(e, s), ((this as any).__originalLineTo as any)(e, s);
  }, (d as any).bezierCurveTo = function (this: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
    ((t as any).bezierCurveTo as any)(e, s, i, n, r, a), ((this as any).__originalBezierCurveTo as any)(e, s, i, n, r, a);
  }, (d as any).rect = function (this: any, e: any, s: any, i: any, n: any): any {
    ((t as any).rect as any)(e, s, i, n), ((this as any).__originalRect as any)(e, s, i, n);
  }, (d as any).closePath = function (this: any): any {
    ((t as any).closePath as any)(), ((this as any).__originalClosePath as any)();
  }, (d as any).beginPath = function (this: any): any {
    ((t as any).beginPath as any)(), ((this as any).__originalBeginPath as any)();
  };
}
class Xn {
  declare cache: any;
  declare canvasFactory: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any).canvasFactory = t, (this as any).cache = ((Object as any).create as any)(null);
  }
  getCanvas(t: any, e: any, s: any): any {
    let i: any;
    return (((this as any).cache as any)[t] as any) !== (void 0 as any) ? (i = ((this as any).cache as any)[t], (((this as any).canvasFactory as any).reset as any)(i, e, s)) : (i = (((this as any).canvasFactory as any).create as any)(e, s), ((this as any).cache as any)[t] = i), i;
  }
  delete(t: any): any {
    delete ((this as any).cache as any)[t];
  }
  clear(): any {
    for (const t in (this as any).cache) {
      const e: any = ((this as any).cache as any)[t];
      (((this as any).canvasFactory as any).destroy as any)(e), delete ((this as any).cache as any)[t];
    }
  }
}
function Ne(this: any, d: any, t: any, e: any, s: any, i: any, n: any, r: any, a: any, o: any, l: any): any {
  const [h, c, u, f, g, p]: any = (Y as any)(d);
  if ((c as any) === (0 as any) && (u as any) === (0 as any)) {
    const y: any = ((r as any) * (h as any) as any) + (g as any),
      A: any = ((Math as any).round as any)(y),
      w: any = ((a as any) * (f as any) as any) + (p as any),
      v: any = ((Math as any).round as any)(w),
      _: any = (((r as any) + (o as any) as any) * (h as any) as any) + (g as any),
      S: any = ((Math as any).abs as any)((((Math as any).round as any)(_) as any) - (A as any)) || 1,
      E: any = (((a as any) + (l as any) as any) * (f as any) as any) + (p as any),
      C: any = ((Math as any).abs as any)((((Math as any).round as any)(E) as any) - (v as any)) || 1;
    return ((d as any).setTransform as any)(((Math as any).sign as any)(h), 0, 0, ((Math as any).sign as any)(f), A, v), ((d as any).drawImage as any)(t, e, s, i, n, 0, 0, S, C), ((d as any).setTransform as any)(h, c, u, f, g, p), [S, C];
  }
  if ((h as any) === (0 as any) && (f as any) === (0 as any)) {
    const y: any = ((a as any) * (u as any) as any) + (g as any),
      A: any = ((Math as any).round as any)(y),
      w: any = ((r as any) * (c as any) as any) + (p as any),
      v: any = ((Math as any).round as any)(w),
      _: any = (((a as any) + (l as any) as any) * (u as any) as any) + (g as any),
      S: any = ((Math as any).abs as any)((((Math as any).round as any)(_) as any) - (A as any)) || 1,
      E: any = (((r as any) + (o as any) as any) * (c as any) as any) + (p as any),
      C: any = ((Math as any).abs as any)((((Math as any).round as any)(E) as any) - (v as any)) || 1;
    return ((d as any).setTransform as any)(0, ((Math as any).sign as any)(c), ((Math as any).sign as any)(u), 0, A, v), ((d as any).drawImage as any)(t, e, s, i, n, 0, 0, C, S), ((d as any).setTransform as any)(h, c, u, f, g, p), [C, S];
  }
  ((d as any).drawImage as any)(t, e, s, i, n, r, a, o, l);
  const b: any = ((Math as any).hypot as any)(h, c),
    m: any = ((Math as any).hypot as any)(u, f);
  return [(b as any) * (o as any), (m as any) * (l as any)];
}
class oi {
  declare minMax: any;
  declare clipBox: any;
  [key: string]: any;
  alphaIsShape: any = !1;
  fontSize: any = 0;
  fontSizeScale: any = 1;
  textMatrix: any = null;
  textMatrixScale: any = 1;
  fontMatrix: any = ds;
  leading: any = 0;
  x: any = 0;
  y: any = 0;
  lineX: any = 0;
  lineY: any = 0;
  charSpacing: any = 0;
  wordSpacing: any = 0;
  textHScale: any = 1;
  textRenderingMode: any = (nt as any).FILL;
  textRise: any = 0;
  fillColor: any = "#000000";
  strokeColor: any = "#000000";
  patternFill: any = !1;
  patternStroke: any = !1;
  fillAlpha: any = 1;
  strokeAlpha: any = 1;
  lineWidth: any = 1;
  activeSMask: any = null;
  transferMaps: any = "none";
  constructor(t: any, e: any, s: any) {
    s?.(this), (this as any).clipBox = new (Float32Array as any)([0, 0, t, e]), (this as any).minMax = ((te as any).slice as any)();
  }
  clone(): any {
    const t: any = ((Object as any).create as any)(this);
    return (t as any).clipBox = (((this as any).clipBox as any).slice as any)(), (t as any).minMax = (((this as any).minMax as any).slice as any)(), t;
  }
  getPathBoundingBox(t: any = (at as any).FILL, e: any = null): any {
    const s: any = (((this as any).minMax as any).slice as any)();
    if ((t as any) === ((at as any).STROKE as any)) {
      e || (G as any)("Stroke bounding box must include transform."), ((P as any).singularValueDecompose2dScale as any)(e, bt);
      const i: any = (((bt as any)[0] as any) * ((this as any).lineWidth as any) as any) / (2 as any),
        n: any = (((bt as any)[1] as any) * ((this as any).lineWidth as any) as any) / (2 as any);
      (s as any)[0] -= i, (s as any)[1] -= n, (s as any)[2] += i, (s as any)[3] += n;
    }
    return s;
  }
  updateClipFromPath(): any {
    const t: any = ((P as any).intersect as any)((this as any).clipBox, ((this as any).getPathBoundingBox as any)());
    ((this as any).startNewPathAndClipBox as any)(t || [0, 0, 0, 0]);
  }
  isEmptyClip(): any {
    return (((this as any).minMax as any)[0] as any) === ((1 as any) / (0 as any) as any);
  }
  startNewPathAndClipBox(t: any): any {
    (((this as any).clipBox as any).set as any)(t, 0), (((this as any).minMax as any).set as any)(te, 0);
  }
  getClippedPathBoundingBox(t: any = (at as any).FILL, e: any = null): any {
    return ((P as any).intersect as any)((this as any).clipBox, ((this as any).getPathBoundingBox as any)(t, e));
  }
}
function li(this: any, d: any, t: any): any {
  if (t instanceof ImageData) {
    ((d as any).putImageData as any)(t, 0, 0);
    return;
  }
  const e: any = (t as any).height,
    s: any = (t as any).width,
    i: any = (e as any) % (gt as any),
    n: any = ((e as any) - (i as any) as any) / (gt as any),
    r: any = (i as any) === (0 as any) ? n : (n as any) + (1 as any),
    a: any = ((d as any).createImageData as any)(s, gt);
  let o: any = 0,
    l: any;
  const h: any = (t as any).data,
    c: any = (a as any).data;
  let u: any, f: any, g: any, p: any;
  if (((t as any).kind as any) === ((Ue as any).GRAYSCALE_1BPP as any)) {
    const b: any = (h as any).byteLength,
      m: any = new (Uint32Array as any)((c as any).buffer, 0, ((c as any).byteLength as any) >> (2 as any)),
      y: any = (m as any).length,
      A: any = ((s as any) + (7 as any) as any) >> (3 as any),
      w: number = 4294967295,
      v: any = (ot as any).isLittleEndian ? 4278190080 : 255;
    for (u = 0; (u as any) < (r as any); u++) {
      for (g = (u as any) < (n as any) ? gt : i, l = 0, f = 0; (f as any) < (g as any); f++) {
        const _: any = (b as any) - (o as any);
        let S: any = 0;
        const E: any = (_ as any) > (A as any) ? s : ((_ as any) * (8 as any) as any) - (7 as any),
          C: any = (E as any) & (-8 as any);
        let k: any = 0,
          T: any = 0;
        for (; (S as any) < (C as any); S += 8) T = (h as any)[o++], (m as any)[l++] = (T as any) & (128 as any) ? w : v, (m as any)[l++] = (T as any) & (64 as any) ? w : v, (m as any)[l++] = (T as any) & (32 as any) ? w : v, (m as any)[l++] = (T as any) & (16 as any) ? w : v, (m as any)[l++] = (T as any) & (8 as any) ? w : v, (m as any)[l++] = (T as any) & (4 as any) ? w : v, (m as any)[l++] = (T as any) & (2 as any) ? w : v, (m as any)[l++] = (T as any) & (1 as any) ? w : v;
        for (; (S as any) < (E as any); S++) (k as any) === (0 as any) && (T = (h as any)[o++], k = 128), (m as any)[l++] = (T as any) & (k as any) ? w : v, k >>= 1;
      }
      for (; (l as any) < (y as any);) (m as any)[l++] = 0;
      ((d as any).putImageData as any)(a, 0, (u as any) * (gt as any));
    }
  } else if (((t as any).kind as any) === ((Ue as any).RGBA_32BPP as any)) {
    for (f = 0, p = ((s as any) * (gt as any) as any) * (4 as any), u = 0; (u as any) < (n as any); u++) ((c as any).set as any)(((h as any).subarray as any)(o, (o as any) + (p as any))), o += p, ((d as any).putImageData as any)(a, 0, f), f += gt;
    (u as any) < (r as any) && (p = ((s as any) * (i as any) as any) * (4 as any), ((c as any).set as any)(((h as any).subarray as any)(o, (o as any) + (p as any))), ((d as any).putImageData as any)(a, 0, f));
  } else if (((t as any).kind as any) === ((Ue as any).RGB_24BPP as any)) for (g = gt, p = (s as any) * (g as any), u = 0; (u as any) < (r as any); u++) {
    for ((u as any) >= (n as any) && (g = i, p = (s as any) * (g as any)), l = 0, f = p; f--;) (c as any)[l++] = (h as any)[o++], (c as any)[l++] = (h as any)[o++], (c as any)[l++] = (h as any)[o++], (c as any)[l++] = 255;
    ((d as any).putImageData as any)(a, 0, (u as any) * (gt as any));
  } else throw new (Error as any)(`bad image kind: ${(t as any).kind}`);
}
function hi(this: any, d: any, t: any): any {
  if ((t as any).bitmap) {
    ((d as any).drawImage as any)((t as any).bitmap, 0, 0);
    return;
  }
  const e: any = (t as any).height,
    s: any = (t as any).width,
    i: any = (e as any) % (gt as any),
    n: any = ((e as any) - (i as any) as any) / (gt as any),
    r: any = (i as any) === (0 as any) ? n : (n as any) + (1 as any),
    a: any = ((d as any).createImageData as any)(s, gt);
  let o: any = 0;
  const l: any = (t as any).data,
    h: any = (a as any).data;
  for (let c: any = 0; (c as any) < (r as any); c++) {
    const u: any = (c as any) < (n as any) ? gt : i;
    ({
      srcPos: o
    } = (Gn as any)({
      src: l,
      srcPos: o,
      dest: h,
      width: s,
      height: u,
      nonBlackColor: 0
    })), ((d as any).putImageData as any)(a, 0, (c as any) * (gt as any));
  }
}
function he(this: any, d: any, t: any): any {
  const e: any = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e) ((d as any)[s] as any) !== (void 0 as any) && ((t as any)[s] = (d as any)[s]);
  ((d as any).setLineDash as any) !== (void 0 as any) && (((t as any).setLineDash as any)(((d as any).getLineDash as any)()), (t as any).lineDashOffset = (d as any).lineDashOffset);
}
function Oe(this: any, d: any): any {
  (d as any).strokeStyle = (d as any).fillStyle = "#000000", (d as any).fillRule = "nonzero", (d as any).globalAlpha = 1, (d as any).lineWidth = 1, (d as any).lineCap = "butt", (d as any).lineJoin = "miter", (d as any).miterLimit = 10, (d as any).globalCompositeOperation = "source-over", (d as any).font = "10px sans-serif", ((d as any).setLineDash as any) !== (void 0 as any) && (((d as any).setLineDash as any)([]), (d as any).lineDashOffset = 0);
  const {
    filter: t
  }: any = d;
  (t as any) !== ("none" as any) && (t as any) !== ("" as any) && ((d as any).filter = "none");
}
function ci(this: any, d: any, t: any): any {
  if (t) return !0;
  ((P as any).singularValueDecompose2dScale as any)(d, bt);
  const e: any = ((Math as any).fround as any)(((kt as any).pixelRatio as any) * ((ae as any).PDF_TO_CSS_UNITS as any));
  return ((bt as any)[0] as any) <= (e as any) && ((bt as any)[1] as any) <= (e as any);
}
const qn: any = ["butt", "round", "square"],
  Yn: any = ["miter", "round", "bevel"],
  Kn: any = {},
  di: any = {};
class se {
  declare annotationCanvas: any;
  declare pendingTextPaths: any;
  declare _pathStartIdx: any;
  declare transparentCanvas: any;
  declare compositeCtx: any;
  declare dependencyTracker: any;
  declare _cachedBitmapsMap: any;
  declare _cachedGetSinglePixelWidth: any;
  declare _cachedScaleForStroking: any;
  declare pageColors: any;
  declare outputScaleY: any;
  declare outputScaleX: any;
  declare viewportScale: any;
  declare annotationCanvasMap: any;
  declare cachedPatterns: any;
  declare cachedCanvases: any;
  declare optionalContentConfig: any;
  declare markedContentStack: any;
  declare contentVisible: any;
  declare suspendedCtx: any;
  declare tempSMask: any;
  declare smaskCounter: any;
  declare smaskStack: any;
  declare groupLevel: any;
  declare baseTransformStack: any;
  declare baseTransform: any;
  declare groupStack: any;
  declare filterFactory: any;
  declare canvasFactory: any;
  declare objs: any;
  declare commonObjs: any;
  declare xobjs: any;
  declare res: any;
  declare pendingEOFill: any;
  declare pendingClip: any;
  declare stateStack: any;
  declare current: any;
  declare ctx: any;
  [key: string]: any;
  constructor(t: any, e: any, s: any, i: any, n: any, {
    optionalContentConfig: r,
    markedContentStack: a = null
  }: any, o: any, l: any, h: any) {
    (this as any).ctx = t, (this as any).current = new (oi as any)((((this as any).ctx as any).canvas as any).width, (((this as any).ctx as any).canvas as any).height), (this as any).stateStack = [], (this as any).pendingClip = null, (this as any).pendingEOFill = !1, (this as any).res = null, (this as any).xobjs = null, (this as any).commonObjs = e, (this as any).objs = s, (this as any).canvasFactory = i, (this as any).filterFactory = n, (this as any).groupStack = [], (this as any).baseTransform = null, (this as any).baseTransformStack = [], (this as any).groupLevel = 0, (this as any).smaskStack = [], (this as any).smaskCounter = 0, (this as any).tempSMask = null, (this as any).suspendedCtx = null, (this as any).contentVisible = !0, (this as any).markedContentStack = a || [], (this as any).optionalContentConfig = r, (this as any).cachedCanvases = new (Xn as any)((this as any).canvasFactory), (this as any).cachedPatterns = new (Map as any)(), (this as any).annotationCanvasMap = o, (this as any).viewportScale = 1, (this as any).outputScaleX = 1, (this as any).outputScaleY = 1, (this as any).pageColors = l, (this as any)._cachedScaleForStroking = [-1, 0], (this as any)._cachedGetSinglePixelWidth = null, (this as any)._cachedBitmapsMap = new (Map as any)(), (this as any).dependencyTracker = h ?? null;
  }
  getObject(t: any, e: any, s: any = null): any {
    return (typeof e as any) == ("string" as any) ? ((this as any).dependencyTracker?.recordNamedDependency(t, e), ((e as any).startsWith as any)("g_") ? (((this as any).commonObjs as any).get as any)(e) : (((this as any).objs as any).get as any)(e)) : s;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: i = null
  }: any): any {
    const n: any = (((this as any).ctx as any).canvas as any).width,
      r: any = (((this as any).ctx as any).canvas as any).height,
      a: any = ((this as any).ctx as any).fillStyle;
    if (((this as any).ctx as any).fillStyle = i || "#ffffff", (((this as any).ctx as any).fillRect as any)(0, 0, n, r), ((this as any).ctx as any).fillStyle = a, s) {
      const o: any = (((this as any).cachedCanvases as any).getCanvas as any)("transparent", n, r);
      (this as any).compositeCtx = (this as any).ctx, (this as any).transparentCanvas = (o as any).canvas, (this as any).ctx = (o as any).context, (((this as any).ctx as any).save as any)(), (((this as any).ctx as any).transform as any)(...(Y as any)((this as any).compositeCtx));
    }
    (((this as any).ctx as any).save as any)(), (Oe as any)((this as any).ctx), t && ((((this as any).ctx as any).transform as any)(...t), (this as any).outputScaleX = (t as any)[0], (this as any).outputScaleY = (t as any)[0]), (((this as any).ctx as any).transform as any)(...(e as any).transform), (this as any).viewportScale = (e as any).scale, (this as any).baseTransform = (Y as any)((this as any).ctx);
  }
  executeOperatorList(t: any, e: any, s: any, i: any, n: any): any {
    const r: any = (t as any).argsArray,
      a: any = (t as any).fnArray;
    let o: any = e || 0;
    const l: any = (r as any).length;
    if ((l as any) === (o as any)) return o;
    const h: any = ((l as any) - (o as any) as any) > (ai as any) && (typeof s as any) == ("function" as any),
      c: any = h ? (((Date as any).now as any)() as any) + (Vn as any) : 0;
    let u: any = 0;
    const f: any = (this as any).commonObjs,
      g: any = (this as any).objs;
    let p: any, b: any;
    for (;;) {
      if ((i as any) !== (void 0 as any) && (o as any) === ((i as any).nextBreakPoint as any)) return ((i as any).breakIt as any)(o, s), o;
      if (!n || (n as any)(o)) if (p = (a as any)[o], b = (r as any)[o] ?? null, (p as any) !== ((Ae as any).dependency as any)) (b as any) === (null as any) ? ((this as any)[p] as any)(o) : ((this as any)[p] as any)(o, ...b);else for (const m of b) {
        (this as any).dependencyTracker?.recordNamedData(m, o);
        const y: any = ((m as any).startsWith as any)("g_") ? f : g;
        if (!((y as any).has as any)(m)) return ((y as any).get as any)(m, s), o;
      }
      if (o++, (o as any) === (l as any)) return o;
      if (h && (++u as any) > (ai as any)) {
        if ((((Date as any).now as any)() as any) > (c as any)) return (s as any)(), o;
        u = 0;
      }
    }
  }
  #t(): any {
    for (; ((this as any).stateStack as any).length || (this as any).inSMaskMode;) ((this as any).restore as any)();
    ((this as any).current as any).activeSMask = null, (((this as any).ctx as any).restore as any)(), (this as any).transparentCanvas && ((this as any).ctx = (this as any).compositeCtx, (((this as any).ctx as any).save as any)(), (((this as any).ctx as any).setTransform as any)(1, 0, 0, 1, 0, 0), (((this as any).ctx as any).drawImage as any)((this as any).transparentCanvas, 0, 0), (((this as any).ctx as any).restore as any)(), (this as any).transparentCanvas = null);
  }
  endDrawing(): any {
    (this.#t as any)(), (((this as any).cachedCanvases as any).clear as any)(), (((this as any).cachedPatterns as any).clear as any)();
    for (const t of (((this as any)._cachedBitmapsMap as any).values as any)()) {
      for (const e of ((t as any).values as any)()) (typeof HTMLCanvasElement as any) < ("u" as any) && e instanceof HTMLCanvasElement && ((e as any).width = (e as any).height = 0);
      ((t as any).clear as any)();
    }
    (((this as any)._cachedBitmapsMap as any).clear as any)(), (this.#e as any)();
  }
  #e(): any {
    if ((this as any).pageColors) {
      const t: any = (((this as any).filterFactory as any).addHCMFilter as any)(((this as any).pageColors as any).foreground, ((this as any).pageColors as any).background);
      if ((t as any) !== ("none" as any)) {
        const e: any = ((this as any).ctx as any).filter;
        ((this as any).ctx as any).filter = t, (((this as any).ctx as any).drawImage as any)(((this as any).ctx as any).canvas, 0, 0), ((this as any).ctx as any).filter = e;
      }
    }
  }
  _scaleImage(t: any, e: any): any {
    const s: any = (t as any).width ?? (t as any).displayWidth,
      i: any = (t as any).height ?? (t as any).displayHeight;
    let n: any = ((Math as any).max as any)(((Math as any).hypot as any)((e as any)[0], (e as any)[1]), 1),
      r: any = ((Math as any).max as any)(((Math as any).hypot as any)((e as any)[2], (e as any)[3]), 1),
      a: any = s,
      o: any = i,
      l: any = "prescale1",
      h: any,
      c: any;
    for (; (n as any) > (2 as any) && (a as any) > (1 as any) || (r as any) > (2 as any) && (o as any) > (1 as any);) {
      let u: any = a,
        f: any = o;
      (n as any) > (2 as any) && (a as any) > (1 as any) && (u = (a as any) >= (16384 as any) ? (((Math as any).floor as any)((a as any) / (2 as any)) as any) - (1 as any) || 1 : ((Math as any).ceil as any)((a as any) / (2 as any)), n /= (a as any) / (u as any)), (r as any) > (2 as any) && (o as any) > (1 as any) && (f = (o as any) >= (16384 as any) ? (((Math as any).floor as any)((o as any) / (2 as any)) as any) - (1 as any) || 1 : (((Math as any).ceil as any)(o) as any) / (2 as any), r /= (o as any) / (f as any)), h = (((this as any).cachedCanvases as any).getCanvas as any)(l, u, f), c = (h as any).context, ((c as any).clearRect as any)(0, 0, u, f), ((c as any).drawImage as any)(t, 0, 0, a, o, 0, 0, u, f), t = (h as any).canvas, a = u, o = f, l = (l as any) === ("prescale1" as any) ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: a,
      paintHeight: o
    };
  }
  _createMaskCanvas(t: any, e: any): any {
    const s: any = (this as any).ctx,
      {
        width: i,
        height: n
      }: any = e,
      r: any = ((this as any).current as any).fillColor,
      a: any = ((this as any).current as any).patternFill,
      o: any = (Y as any)(s);
    let l: any, h: any, c: any, u: any;
    if (((e as any).bitmap || (e as any).data) && ((e as any).count as any) > (1 as any)) {
      const k: any = (e as any).bitmap || ((e as any).data as any).buffer;
      h = ((JSON as any).stringify as any)(a ? o : [((o as any).slice as any)(0, 4), r]), l = (((this as any)._cachedBitmapsMap as any).get as any)(k), l || (l = new (Map as any)(), (((this as any)._cachedBitmapsMap as any).set as any)(k, l));
      const T: any = ((l as any).get as any)(h);
      if (T && !a) {
        const U: any = ((Math as any).round as any)((((Math as any).min as any)((o as any)[0], (o as any)[2]) as any) + ((o as any)[4] as any)),
          $: any = ((Math as any).round as any)((((Math as any).min as any)((o as any)[1], (o as any)[3]) as any) + ((o as any)[5] as any));
        return (this as any).dependencyTracker?.recordDependencies(t, (At as any).transformAndFill), {
          canvas: T,
          offsetX: U,
          offsetY: $
        };
      }
      c = T;
    }
    c || (u = (((this as any).cachedCanvases as any).getCanvas as any)("maskCanvas", i, n), (hi as any)((u as any).context, e));
    let f: any = ((P as any).transform as any)(o, [(1 as any) / (i as any), 0, 0, (-1 as any) / (n as any), 0, 0]);
    f = ((P as any).transform as any)(f, [1, 0, 0, 1, 0, -n]);
    const g: any = ((te as any).slice as any)();
    ((P as any).axialAlignedBoundingBox as any)([0, 0, i, n], f, g);
    const [p, b, m, y]: any = g,
      A: any = ((Math as any).round as any)((m as any) - (p as any)) || 1,
      w: any = ((Math as any).round as any)((y as any) - (b as any)) || 1,
      v: any = (((this as any).cachedCanvases as any).getCanvas as any)("fillCanvas", A, w),
      _: any = (v as any).context,
      S: any = p,
      E: any = b;
    ((_ as any).translate as any)(-S, -E), ((_ as any).transform as any)(...f), c || (c = ((this as any)._scaleImage as any)((u as any).canvas, (Ct as any)(_)), c = (c as any).img, l && a && ((l as any).set as any)(h, c)), (_ as any).imageSmoothingEnabled = (ci as any)((Y as any)(_), (e as any).interpolate), (Ne as any)(_, c, 0, 0, (c as any).width, (c as any).height, 0, 0, i, n), (_ as any).globalCompositeOperation = "source-in";
    const C: any = ((P as any).transform as any)((Ct as any)(_), [1, 0, 0, 1, -S, -E]);
    return (_ as any).fillStyle = a ? ((r as any).getPattern as any)(s, this, C, (at as any).FILL, t) : r, ((_ as any).fillRect as any)(0, 0, i, n), l && !a && ((((this as any).cachedCanvases as any).delete as any)("fillCanvas"), ((l as any).set as any)(h, (v as any).canvas)), (this as any).dependencyTracker?.recordDependencies(t, (At as any).transformAndFill), {
      canvas: (v as any).canvas,
      offsetX: ((Math as any).round as any)(S),
      offsetY: ((Math as any).round as any)(E)
    };
  }
  setLineWidth(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("lineWidth", t), (e as any) !== (((this as any).current as any).lineWidth as any) && (((this as any)._cachedScaleForStroking as any)[0] = -1), ((this as any).current as any).lineWidth = e, ((this as any).ctx as any).lineWidth = e;
  }
  setLineCap(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("lineCap", t), ((this as any).ctx as any).lineCap = (qn as any)[e];
  }
  setLineJoin(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("lineJoin", t), ((this as any).ctx as any).lineJoin = (Yn as any)[e];
  }
  setMiterLimit(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("miterLimit", t), ((this as any).ctx as any).miterLimit = e;
  }
  setDash(t: any, e: any, s: any): any {
    (this as any).dependencyTracker?.recordSimpleData("dash", t);
    const i: any = (this as any).ctx;
    ((i as any).setLineDash as any) !== (void 0 as any) && (((i as any).setLineDash as any)(e), (i as any).lineDashOffset = s);
  }
  setRenderingIntent(t: any, e: any): any {}
  setFlatness(t: any, e: any): any {}
  setGState(t: any, e: any): any {
    for (const [s, i] of e) switch (s) {
      case "LW":
        ((this as any).setLineWidth as any)(t, i);
        break;
      case "LC":
        ((this as any).setLineCap as any)(t, i);
        break;
      case "LJ":
        ((this as any).setLineJoin as any)(t, i);
        break;
      case "ML":
        ((this as any).setMiterLimit as any)(t, i);
        break;
      case "D":
        ((this as any).setDash as any)(t, (i as any)[0], (i as any)[1]);
        break;
      case "RI":
        ((this as any).setRenderingIntent as any)(t, i);
        break;
      case "FL":
        ((this as any).setFlatness as any)(t, i);
        break;
      case "Font":
        ((this as any).setFont as any)(t, (i as any)[0], (i as any)[1]);
        break;
      case "CA":
        (this as any).dependencyTracker?.recordSimpleData("strokeAlpha", t), ((this as any).current as any).strokeAlpha = i;
        break;
      case "ca":
        (this as any).dependencyTracker?.recordSimpleData("fillAlpha", t), ((this as any).ctx as any).globalAlpha = ((this as any).current as any).fillAlpha = i;
        break;
      case "BM":
        (this as any).dependencyTracker?.recordSimpleData("globalCompositeOperation", t), ((this as any).ctx as any).globalCompositeOperation = i;
        break;
      case "SMask":
        (this as any).dependencyTracker?.recordSimpleData("SMask", t), ((this as any).current as any).activeSMask = i ? (this as any).tempSMask : null, (this as any).tempSMask = null, ((this as any).checkSMaskState as any)();
        break;
      case "TR":
        (this as any).dependencyTracker?.recordSimpleData("filter", t), ((this as any).ctx as any).filter = ((this as any).current as any).transferMaps = (((this as any).filterFactory as any).addFilter as any)(i);
        break;
    }
  }
  get inSMaskMode(): any {
    return !!(this as any).suspendedCtx;
  }
  checkSMaskState(): any {
    const t: any = (this as any).inSMaskMode;
    ((this as any).current as any).activeSMask && !t ? ((this as any).beginSMaskMode as any)() : !((this as any).current as any).activeSMask && t && ((this as any).endSMaskMode as any)();
  }
  beginSMaskMode(t: any): any {
    if ((this as any).inSMaskMode) throw new (Error as any)("beginSMaskMode called while already in smask mode");
    const e: any = (((this as any).ctx as any).canvas as any).width,
      s: any = (((this as any).ctx as any).canvas as any).height,
      i: any = ("smaskGroupAt" as any) + ((this as any).groupLevel as any),
      n: any = (((this as any).cachedCanvases as any).getCanvas as any)(i, e, s);
    (this as any).suspendedCtx = (this as any).ctx;
    const r: any = (this as any).ctx = (n as any).context;
    ((r as any).setTransform as any)((((this as any).suspendedCtx as any).getTransform as any)()), (he as any)((this as any).suspendedCtx, r), (Wn as any)(r, (this as any).suspendedCtx), ((this as any).setGState as any)(t, [["BM", "source-over"]]);
  }
  endSMaskMode(): any {
    if (!(this as any).inSMaskMode) throw new (Error as any)("endSMaskMode called while not in smask mode");
    (((this as any).ctx as any)._removeMirroring as any)(), (he as any)((this as any).ctx, (this as any).suspendedCtx), (this as any).ctx = (this as any).suspendedCtx, (this as any).suspendedCtx = null;
  }
  compose(t: any): any {
    if (!((this as any).current as any).activeSMask) return;
    t ? ((t as any)[0] = ((Math as any).floor as any)((t as any)[0]), (t as any)[1] = ((Math as any).floor as any)((t as any)[1]), (t as any)[2] = ((Math as any).ceil as any)((t as any)[2]), (t as any)[3] = ((Math as any).ceil as any)((t as any)[3])) : t = [0, 0, (((this as any).ctx as any).canvas as any).width, (((this as any).ctx as any).canvas as any).height];
    const e: any = ((this as any).current as any).activeSMask,
      s: any = (this as any).suspendedCtx;
    ((this as any).composeSMask as any)(s, e, (this as any).ctx, t), (((this as any).ctx as any).save as any)(), (((this as any).ctx as any).setTransform as any)(1, 0, 0, 1, 0, 0), (((this as any).ctx as any).clearRect as any)(0, 0, (((this as any).ctx as any).canvas as any).width, (((this as any).ctx as any).canvas as any).height), (((this as any).ctx as any).restore as any)();
  }
  composeSMask(t: any, e: any, s: any, i: any): any {
    const n: any = (i as any)[0],
      r: any = (i as any)[1],
      a: any = ((i as any)[2] as any) - (n as any),
      o: any = ((i as any)[3] as any) - (r as any);
    (a as any) === (0 as any) || (o as any) === (0 as any) || (((this as any).genericComposeSMask as any)((e as any).context, s, a, o, (e as any).subtype, (e as any).backdrop, (e as any).transferMap, n, r, (e as any).offsetX, (e as any).offsetY), ((t as any).save as any)(), (t as any).globalAlpha = 1, (t as any).globalCompositeOperation = "source-over", ((t as any).setTransform as any)(1, 0, 0, 1, 0, 0), ((t as any).drawImage as any)((s as any).canvas, 0, 0), ((t as any).restore as any)());
  }
  genericComposeSMask(t: any, e: any, s: any, i: any, n: any, r: any, a: any, o: any, l: any, h: any, c: any): any {
    let u: any = (t as any).canvas,
      f: any = (o as any) - (h as any),
      g: any = (l as any) - (c as any);
    if (r) if ((f as any) < (0 as any) || (g as any) < (0 as any) || ((f as any) + (s as any) as any) > ((u as any).width as any) || ((g as any) + (i as any) as any) > ((u as any).height as any)) {
      const b: any = (((this as any).cachedCanvases as any).getCanvas as any)("maskExtension", s, i),
        m: any = (b as any).context;
      ((m as any).drawImage as any)(u, -f, -g), (m as any).globalCompositeOperation = "destination-atop", (m as any).fillStyle = r, ((m as any).fillRect as any)(0, 0, s, i), (m as any).globalCompositeOperation = "source-over", u = (b as any).canvas, f = g = 0;
    } else {
      ((t as any).save as any)(), (t as any).globalAlpha = 1, ((t as any).setTransform as any)(1, 0, 0, 1, 0, 0);
      const b: any = new (Path2D as any)();
      ((b as any).rect as any)(f, g, s, i), ((t as any).clip as any)(b), (t as any).globalCompositeOperation = "destination-atop", (t as any).fillStyle = r, ((t as any).fillRect as any)(f, g, s, i), ((t as any).restore as any)();
    }
    ((e as any).save as any)(), (e as any).globalAlpha = 1, ((e as any).setTransform as any)(1, 0, 0, 1, 0, 0), (n as any) === ("Alpha" as any) && a ? (e as any).filter = (((this as any).filterFactory as any).addAlphaFilter as any)(a) : (n as any) === ("Luminosity" as any) && ((e as any).filter = (((this as any).filterFactory as any).addLuminosityFilter as any)(a));
    const p: any = new (Path2D as any)();
    ((p as any).rect as any)(o, l, s, i), ((e as any).clip as any)(p), (e as any).globalCompositeOperation = "destination-in", ((e as any).drawImage as any)(u, f, g, s, i, o, l, s, i), ((e as any).restore as any)();
  }
  save(t: any): any {
    (this as any).inSMaskMode && (he as any)((this as any).ctx, (this as any).suspendedCtx), (((this as any).ctx as any).save as any)();
    const e: any = (this as any).current;
    (((this as any).stateStack as any).push as any)(e), (this as any).current = ((e as any).clone as any)(), (this as any).dependencyTracker?.save(t);
  }
  restore(t: any): any {
    if ((this as any).dependencyTracker?.restore(t), (((this as any).stateStack as any).length as any) === (0 as any)) {
      (this as any).inSMaskMode && ((this as any).endSMaskMode as any)();
      return;
    }
    (this as any).current = (((this as any).stateStack as any).pop as any)(), (((this as any).ctx as any).restore as any)(), (this as any).inSMaskMode && (he as any)((this as any).suspendedCtx, (this as any).ctx), ((this as any).checkSMaskState as any)(), (this as any).pendingClip = null, ((this as any)._cachedScaleForStroking as any)[0] = -1, (this as any)._cachedGetSinglePixelWidth = null;
  }
  transform(t: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
    (this as any).dependencyTracker?.recordIncrementalData("transform", t), (((this as any).ctx as any).transform as any)(e, s, i, n, r, a), ((this as any)._cachedScaleForStroking as any)[0] = -1, (this as any)._cachedGetSinglePixelWidth = null;
  }
  constructPath(t: any, e: any, s: any, i: any): any {
    let [n]: any = s;
    if (!i) {
      n ||= (s as any)[0] = new (Path2D as any)(), ((this as any)[e] as any)(t, n);
      return;
    }
    if (((this as any).dependencyTracker as any) !== (null as any)) {
      const r: any = (e as any) === ((Ae as any).stroke as any) ? (((this as any).current as any).lineWidth as any) / (2 as any) : 0;
      (((((((this as any).dependencyTracker as any).resetBBox as any)(t) as any).recordBBox as any)(t, (this as any).ctx, ((i as any)[0] as any) - (r as any), ((i as any)[2] as any) + (r as any), ((i as any)[1] as any) - (r as any), ((i as any)[3] as any) + (r as any)) as any).recordDependencies as any)(t, ["transform"]);
    }
    if (!(n instanceof Path2D)) {
      const r: any = (s as any)[0] = new (Path2D as any)();
      for (let a: any = 0, o: any = (n as any).length; (a as any) < (o as any);) switch ((n as any)[a++]) {
        case (Me as any).moveTo:
          ((r as any).moveTo as any)((n as any)[a++], (n as any)[a++]);
          break;
        case (Me as any).lineTo:
          ((r as any).lineTo as any)((n as any)[a++], (n as any)[a++]);
          break;
        case (Me as any).curveTo:
          ((r as any).bezierCurveTo as any)((n as any)[a++], (n as any)[a++], (n as any)[a++], (n as any)[a++], (n as any)[a++], (n as any)[a++]);
          break;
        case (Me as any).closePath:
          ((r as any).closePath as any)();
          break;
        default:
          (I as any)(`Unrecognized drawing path operator: ${(n as any)[(a as any) - (1 as any)]}`);
          break;
      }
      n = r;
    }
    ((P as any).axialAlignedBoundingBox as any)(i, (Y as any)((this as any).ctx), ((this as any).current as any).minMax), ((this as any)[e] as any)(t, n), (this as any)._pathStartIdx = t;
  }
  closePath(t: any): any {
    (((this as any).ctx as any).closePath as any)();
  }
  stroke(t: any, e: any, s: any = !0): any {
    const i: any = (this as any).ctx,
      n: any = ((this as any).current as any).strokeColor;
    if ((i as any).globalAlpha = ((this as any).current as any).strokeAlpha, (this as any).contentVisible) if ((typeof n as any) == ("object" as any) && n?.getPattern) {
      const r: any = ((n as any).isModifyingCurrentTransform as any)() ? ((i as any).getTransform as any)() : null;
      if (((i as any).save as any)(), (i as any).strokeStyle = ((n as any).getPattern as any)(i, this, (Ct as any)(i), (at as any).STROKE, t), r) {
        const a: any = new (Path2D as any)();
        ((a as any).addPath as any)(e, ((((((i as any).getTransform as any)() as any).invertSelf as any)() as any).multiplySelf as any)(r)), e = a;
      }
      ((this as any).rescaleAndStroke as any)(e, !1), ((i as any).restore as any)();
    } else ((this as any).rescaleAndStroke as any)(e, !0);
    (this as any).dependencyTracker?.recordDependencies(t, (At as any).stroke), s && ((this as any).consumePath as any)(t, e, (((this as any).current as any).getClippedPathBoundingBox as any)((at as any).STROKE, (Y as any)((this as any).ctx))), (i as any).globalAlpha = ((this as any).current as any).fillAlpha;
  }
  closeStroke(t: any, e: any): any {
    ((this as any).stroke as any)(t, e);
  }
  fill(t: any, e: any, s: any = !0): any {
    const i: any = (this as any).ctx,
      n: any = ((this as any).current as any).fillColor,
      r: any = ((this as any).current as any).patternFill;
    let a: any = !1;
    if (r) {
      const l: any = ((n as any).isModifyingCurrentTransform as any)() ? ((i as any).getTransform as any)() : null;
      if ((this as any).dependencyTracker?.save(t), ((i as any).save as any)(), (i as any).fillStyle = ((n as any).getPattern as any)(i, this, (Ct as any)(i), (at as any).FILL, t), l) {
        const h: any = new (Path2D as any)();
        ((h as any).addPath as any)(e, ((((((i as any).getTransform as any)() as any).invertSelf as any)() as any).multiplySelf as any)(l)), e = h;
      }
      a = !0;
    }
    const o: any = (((this as any).current as any).getClippedPathBoundingBox as any)();
    (this as any).contentVisible && (o as any) !== (null as any) && ((this as any).pendingEOFill ? (((i as any).fill as any)(e, "evenodd"), (this as any).pendingEOFill = !1) : ((i as any).fill as any)(e)), (this as any).dependencyTracker?.recordDependencies(t, (At as any).fill), a && (((i as any).restore as any)(), (this as any).dependencyTracker?.restore(t)), s && ((this as any).consumePath as any)(t, e, o);
  }
  eoFill(t: any, e: any): any {
    (this as any).pendingEOFill = !0, ((this as any).fill as any)(t, e);
  }
  fillStroke(t: any, e: any): any {
    ((this as any).fill as any)(t, e, !1), ((this as any).stroke as any)(t, e, !1), ((this as any).consumePath as any)(t, e);
  }
  eoFillStroke(t: any, e: any): any {
    (this as any).pendingEOFill = !0, ((this as any).fillStroke as any)(t, e);
  }
  closeFillStroke(t: any, e: any): any {
    ((this as any).fillStroke as any)(t, e);
  }
  closeEOFillStroke(t: any, e: any): any {
    (this as any).pendingEOFill = !0, ((this as any).fillStroke as any)(t, e);
  }
  endPath(t: any, e: any): any {
    ((this as any).consumePath as any)(t, e);
  }
  rawFillPath(t: any, e: any): any {
    (((this as any).ctx as any).fill as any)(e), (this as any).dependencyTracker?.recordDependencies(t, (At as any).rawFillPath).recordOperation(t);
  }
  clip(t: any): any {
    (this as any).dependencyTracker?.recordFutureForcedDependency("clipMode", t), (this as any).pendingClip = Kn;
  }
  eoClip(t: any): any {
    (this as any).dependencyTracker?.recordFutureForcedDependency("clipMode", t), (this as any).pendingClip = di;
  }
  beginText(t: any): any {
    ((this as any).current as any).textMatrix = null, ((this as any).current as any).textMatrixScale = 1, ((this as any).current as any).x = ((this as any).current as any).lineX = 0, ((this as any).current as any).y = ((this as any).current as any).lineY = 0, (this as any).dependencyTracker?.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t: any): any {
    const e: any = (this as any).pendingTextPaths,
      s: any = (this as any).ctx;
    if ((this as any).dependencyTracker) {
      const {
        dependencyTracker: i
      }: any = this;
      (e as any) !== (void 0 as any) && ((((i as any).recordFutureForcedDependency as any)("textClip", ((i as any).getOpenMarker as any)()) as any).recordFutureForcedDependency as any)("textClip", t), ((i as any).recordCloseMarker as any)(t);
    }
    if ((e as any) !== (void 0 as any)) {
      const i: any = new (Path2D as any)(),
        n: any = ((((s as any).getTransform as any)() as any).invertSelf as any)();
      for (const {
        transform: r,
        x: a,
        y: o,
        fontSize: l,
        path: h
      } of e) h && ((i as any).addPath as any)(h, ((((((new (DOMMatrix as any)(r) as any).preMultiplySelf as any)(n) as any).translate as any)(a, o) as any).scale as any)(l, -l));
      ((s as any).clip as any)(i);
    }
    delete (this as any).pendingTextPaths;
  }
  setCharSpacing(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("charSpacing", t), ((this as any).current as any).charSpacing = e;
  }
  setWordSpacing(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("wordSpacing", t), ((this as any).current as any).wordSpacing = e;
  }
  setHScale(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("hScale", t), ((this as any).current as any).textHScale = (e as any) / (100 as any);
  }
  setLeading(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("leading", t), ((this as any).current as any).leading = -e;
  }
  setFont(t: any, e: any, s: any): any {
    (this as any).dependencyTracker?.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
    const i: any = (((this as any).commonObjs as any).get as any)(e),
      n: any = (this as any).current;
    if (!i) throw new (Error as any)(`Can't find font for ${e}`);
    if ((n as any).fontMatrix = (i as any).fontMatrix || ds, ((((n as any).fontMatrix as any)[0] as any) === (0 as any) || (((n as any).fontMatrix as any)[3] as any) === (0 as any)) && (I as any)(("Invalid font matrix for font " as any) + (e as any)), (s as any) < (0 as any) ? (s = -s, (n as any).fontDirection = -1) : (n as any).fontDirection = 1, ((this as any).current as any).font = i, ((this as any).current as any).fontSize = s, (i as any).isType3Font) return;
    const r: any = (i as any).loadedName || "sans-serif",
      a: any = (i as any).systemFontInfo?.css || `"${r}", ${(i as any).fallbackName}`;
    let o: any = "normal";
    (i as any).black ? o = "900" : (i as any).bold && (o = "bold");
    const l: any = (i as any).italic ? "italic" : "normal";
    let h: any = s;
    (s as any) < (ni as any) ? h = ni : (s as any) > (ri as any) && (h = ri), ((this as any).current as any).fontSizeScale = (s as any) / (h as any), ((this as any).ctx as any).font = `${l} ${o} ${h}px ${a}`;
  }
  setTextRenderingMode(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("textRenderingMode", t), ((this as any).current as any).textRenderingMode = e;
  }
  setTextRise(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("textRise", t), ((this as any).current as any).textRise = e;
  }
  moveText(t: any, e: any, s: any): any {
    (this as any).dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), ((this as any).current as any).x = ((this as any).current as any).lineX += e, ((this as any).current as any).y = ((this as any).current as any).lineY += s;
  }
  setLeadingMoveText(t: any, e: any, s: any): any {
    ((this as any).setLeading as any)(t, -s), ((this as any).moveText as any)(t, e, s);
  }
  setTextMatrix(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("textMatrix", t);
    const {
      current: s
    }: any = this;
    (s as any).textMatrix = e, (s as any).textMatrixScale = ((Math as any).hypot as any)((e as any)[0], (e as any)[1]), (s as any).x = (s as any).lineX = 0, (s as any).y = (s as any).lineY = 0;
  }
  nextLine(t: any): any {
    ((this as any).moveText as any)(t, 0, ((this as any).current as any).leading), (this as any).dependencyTracker?.recordIncrementalData("moveText", (((this as any).dependencyTracker as any).getSimpleIndex as any)("leading") ?? t);
  }
  #i(t: any, e: any, s: any): any {
    const i: any = new (Path2D as any)();
    return ((i as any).addPath as any)(t, ((((new (DOMMatrix as any)(s) as any).invertSelf as any)() as any).multiplySelf as any)(e)), i;
  }
  paintChar(t: any, e: any, s: any, i: any, n: any, r: any): any {
    const a: any = (this as any).ctx,
      o: any = (this as any).current,
      l: any = (o as any).font,
      h: any = (o as any).textRenderingMode,
      c: any = ((o as any).fontSize as any) / ((o as any).fontSizeScale as any),
      u: any = (h as any) & ((nt as any).FILL_STROKE_MASK as any),
      f: any = !!((h as any) & ((nt as any).ADD_TO_PATH_FLAG as any)),
      g: any = (o as any).patternFill && !(l as any).missingFile,
      p: any = (o as any).patternStroke && !(l as any).missingFile;
    let b: any;
    if (((l as any).disableFontFace || f || g || p) && !(l as any).missingFile && (b = ((l as any).getPathGenerator as any)((this as any).commonObjs, e)), b && ((l as any).disableFontFace || g || p)) {
      ((a as any).save as any)(), ((a as any).translate as any)(s, i), ((a as any).scale as any)(c, -c), (this as any).dependencyTracker?.recordCharacterBBox(t, a, l);
      let m: any;
      if ((u as any) === ((nt as any).FILL as any) || (u as any) === ((nt as any).FILL_STROKE as any)) if (n) {
        m = ((a as any).getTransform as any)(), ((a as any).setTransform as any)(...n);
        const y: any = (this.#i as any)(b, m, n);
        ((a as any).fill as any)(y);
      } else ((a as any).fill as any)(b);
      if ((u as any) === ((nt as any).STROKE as any) || (u as any) === ((nt as any).FILL_STROKE as any)) if (r) {
        m ||= ((a as any).getTransform as any)(), ((a as any).setTransform as any)(...r);
        const {
            a: y,
            b: A,
            c: w,
            d: v
          }: any = m,
          _: any = ((P as any).inverseTransform as any)(r),
          S: any = ((P as any).transform as any)([y, A, w, v, 0, 0], _);
        ((P as any).singularValueDecompose2dScale as any)(S, bt), (a as any).lineWidth *= (((Math as any).max as any)((bt as any)[0], (bt as any)[1]) as any) / (c as any), ((a as any).stroke as any)((this.#i as any)(b, m, r));
      } else (a as any).lineWidth /= c, ((a as any).stroke as any)(b);
      ((a as any).restore as any)();
    } else ((u as any) === ((nt as any).FILL as any) || (u as any) === ((nt as any).FILL_STROKE as any)) && (((a as any).fillText as any)(e, s, i), (this as any).dependencyTracker?.recordCharacterBBox(t, a, l, c, s, i, (): any => ((a as any).measureText as any)(e))), ((u as any) === ((nt as any).STROKE as any) || (u as any) === ((nt as any).FILL_STROKE as any)) && ((this as any).dependencyTracker && (this as any).dependencyTracker?.recordCharacterBBox(t, a, l, c, s, i, (): any => ((a as any).measureText as any)(e)).recordDependencies(t, (At as any).stroke), ((a as any).strokeText as any)(e, s, i));
    f && (((((this as any).pendingTextPaths ||= []) as any).push as any)({
      transform: (Y as any)(a),
      x: s,
      y: i,
      fontSize: c,
      path: b
    }), (this as any).dependencyTracker?.recordCharacterBBox(t, a, l, c, s, i));
  }
  get isFontSubpixelAAEnabled(): any {
    const {
      context: t
    }: any = (((this as any).cachedCanvases as any).getCanvas as any)("isFontSubpixelAAEnabled", 10, 10);
    ((t as any).scale as any)(1.5, 1), ((t as any).fillText as any)("I", 0, 10);
    const e: any = (((t as any).getImageData as any)(0, 0, 10, 10) as any).data;
    let s: any = !1;
    for (let i: any = 3; (i as any) < ((e as any).length as any); i += 4) if (((e as any)[i] as any) > (0 as any) && ((e as any)[i] as any) < (255 as any)) {
      s = !0;
      break;
    }
    return (N as any)(this, "isFontSubpixelAAEnabled", s);
  }
  showText(t: any, e: any): any {
    (this as any).dependencyTracker && ((((((this as any).dependencyTracker as any).recordDependencies as any)(t, (At as any).showText) as any).resetBBox as any)(t), (((this as any).current as any).textRenderingMode as any) & ((nt as any).ADD_TO_PATH_FLAG as any) && (((((this as any).dependencyTracker as any).recordFutureForcedDependency as any)("textClip", t) as any).inheritPendingDependenciesAsFutureForcedDependencies as any)());
    const s: any = (this as any).current,
      i: any = (s as any).font;
    if ((i as any).isType3Font) {
      ((this as any).showType3Text as any)(t, e), (this as any).dependencyTracker?.recordShowTextOperation(t);
      return;
    }
    const n: any = (s as any).fontSize;
    if ((n as any) === (0 as any)) {
      (this as any).dependencyTracker?.recordOperation(t);
      return;
    }
    const r: any = (this as any).ctx,
      a: any = (s as any).fontSizeScale,
      o: any = (s as any).charSpacing,
      l: any = (s as any).wordSpacing,
      h: any = (s as any).fontDirection,
      c: any = ((s as any).textHScale as any) * (h as any),
      u: any = (e as any).length,
      f: any = (i as any).vertical,
      g: any = f ? 1 : -1,
      p: any = (i as any).defaultVMetrics,
      b: any = (n as any) * (((s as any).fontMatrix as any)[0] as any),
      m: any = ((s as any).textRenderingMode as any) === ((nt as any).FILL as any) && !(i as any).disableFontFace && !(s as any).patternFill;
    ((r as any).save as any)(), (s as any).textMatrix && ((r as any).transform as any)(...(s as any).textMatrix), ((r as any).translate as any)((s as any).x, ((s as any).y as any) + ((s as any).textRise as any)), (h as any) > (0 as any) ? ((r as any).scale as any)(c, -1) : ((r as any).scale as any)(c, 1);
    let y: any, A: any;
    if ((s as any).patternFill) {
      ((r as any).save as any)();
      const E: any = (((s as any).fillColor as any).getPattern as any)(r, this, (Ct as any)(r), (at as any).FILL, t);
      y = (Y as any)(r), ((r as any).restore as any)(), (r as any).fillStyle = E;
    }
    if ((s as any).patternStroke) {
      ((r as any).save as any)();
      const E: any = (((s as any).strokeColor as any).getPattern as any)(r, this, (Ct as any)(r), (at as any).STROKE, t);
      A = (Y as any)(r), ((r as any).restore as any)(), (r as any).strokeStyle = E;
    }
    let w: any = (s as any).lineWidth;
    const v: any = (s as any).textMatrixScale;
    if ((v as any) === (0 as any) || (w as any) === (0 as any)) {
      const E: any = ((s as any).textRenderingMode as any) & ((nt as any).FILL_STROKE_MASK as any);
      ((E as any) === ((nt as any).STROKE as any) || (E as any) === ((nt as any).FILL_STROKE as any)) && (w = ((this as any).getSinglePixelWidth as any)());
    } else w /= v;
    if ((a as any) !== (1 as any) && (((r as any).scale as any)(a, a), w /= a), (r as any).lineWidth = w, (i as any).isInvalidPDFjsFont) {
      const E: any = [];
      let C: any = 0;
      for (const T of e) ((E as any).push as any)((T as any).unicode), C += (T as any).width;
      const k: any = ((E as any).join as any)("");
      if (((r as any).fillText as any)(k, 0, 0), ((this as any).dependencyTracker as any) !== (null as any)) {
        const T: any = ((r as any).measureText as any)(k);
        (((((this as any).dependencyTracker as any).recordBBox as any)(t, (this as any).ctx, -(T as any).actualBoundingBoxLeft, (T as any).actualBoundingBoxRight, -(T as any).actualBoundingBoxAscent, (T as any).actualBoundingBoxDescent) as any).recordShowTextOperation as any)(t);
      }
      (s as any).x += ((C as any) * (b as any) as any) * (c as any), ((r as any).restore as any)(), ((this as any).compose as any)();
      return;
    }
    let _: any = 0,
      S: any;
    for (S = 0; (S as any) < (u as any); ++S) {
      const E: any = (e as any)[S];
      if ((typeof E as any) == ("number" as any)) {
        _ += (((g as any) * (E as any) as any) * (n as any) as any) / (1e3 as any);
        continue;
      }
      let C: any = !1;
      const k: any = (((E as any).isSpace ? l : 0) as any) + (o as any),
        T: any = (E as any).fontChar,
        U: any = (E as any).accent;
      let $: any,
        z: any,
        V: any = (E as any).width;
      if (f) {
        const H: any = (E as any).vmetric || p,
          lt: any = (-((E as any).vmetric ? (H as any)[1] : (V as any) * (.5 as any)) as any) * (b as any),
          Mt: any = ((H as any)[2] as any) * (b as any);
        V = H ? -(H as any)[0] : V, $ = (lt as any) / (a as any), z = ((_ as any) + (Mt as any) as any) / (a as any);
      } else $ = (_ as any) / (a as any), z = 0;
      let R: any;
      if ((i as any).remeasure && (V as any) > (0 as any)) {
        R = ((r as any).measureText as any)(T);
        const H: any = ((((R as any).width as any) * (1e3 as any) as any) / (n as any) as any) * (a as any);
        if ((V as any) < (H as any) && (this as any).isFontSubpixelAAEnabled) {
          const lt: any = (V as any) / (H as any);
          C = !0, ((r as any).save as any)(), ((r as any).scale as any)(lt, 1), $ /= lt;
        } else (V as any) !== (H as any) && ($ += ((((V as any) - (H as any) as any) / (2e3 as any) as any) * (n as any) as any) / (a as any));
      }
      if ((this as any).contentVisible && ((E as any).isInFont || (i as any).missingFile)) {
        if (m && !U) ((r as any).fillText as any)(T, $, z), (this as any).dependencyTracker?.recordCharacterBBox(t, r, R ? {
          bbox: null
        } : i, (n as any) / (a as any), $, z, (): any => R ?? ((r as any).measureText as any)(T));else if (((this as any).paintChar as any)(t, T, $, z, y, A), U) {
          const H: any = ($ as any) + (((n as any) * (((U as any).offset as any).x as any) as any) / (a as any) as any),
            lt: any = (z as any) - (((n as any) * (((U as any).offset as any).y as any) as any) / (a as any) as any);
          ((this as any).paintChar as any)(t, (U as any).fontChar, H, lt, y, A);
        }
      }
      const L: any = f ? ((V as any) * (b as any) as any) - ((k as any) * (h as any) as any) : ((V as any) * (b as any) as any) + ((k as any) * (h as any) as any);
      _ += L, C && ((r as any).restore as any)();
    }
    f ? (s as any).y -= _ : (s as any).x += (_ as any) * (c as any), ((r as any).restore as any)(), ((this as any).compose as any)(), (this as any).dependencyTracker?.recordShowTextOperation(t);
  }
  showType3Text(t: any, e: any): any {
    const s: any = (this as any).ctx,
      i: any = (this as any).current,
      n: any = (i as any).font,
      r: any = (i as any).fontSize,
      a: any = (i as any).fontDirection,
      o: any = (n as any).vertical ? 1 : -1,
      l: any = (i as any).charSpacing,
      h: any = (i as any).wordSpacing,
      c: any = ((i as any).textHScale as any) * (a as any),
      u: any = (i as any).fontMatrix || ds,
      f: any = (e as any).length,
      g: any = ((i as any).textRenderingMode as any) === ((nt as any).INVISIBLE as any);
    let p: any, b: any, m: any, y: any;
    if (g || (r as any) === (0 as any)) return;
    ((this as any)._cachedScaleForStroking as any)[0] = -1, (this as any)._cachedGetSinglePixelWidth = null, ((s as any).save as any)(), (i as any).textMatrix && ((s as any).transform as any)(...(i as any).textMatrix), ((s as any).translate as any)((i as any).x, ((i as any).y as any) + ((i as any).textRise as any)), ((s as any).scale as any)(c, a);
    const A: any = (this as any).dependencyTracker;
    for ((this as any).dependencyTracker = A ? new (Ge as any)(A, t) : null, p = 0; (p as any) < (f as any); ++p) {
      if (b = (e as any)[p], (typeof b as any) == ("number" as any)) {
        y = (((o as any) * (b as any) as any) * (r as any) as any) / (1e3 as any), (((this as any).ctx as any).translate as any)(y, 0), (i as any).x += (y as any) * (c as any);
        continue;
      }
      const w: any = (((b as any).isSpace ? h : 0) as any) + (l as any),
        v: any = ((n as any).charProcOperatorList as any)[(b as any).operatorListId];
      v ? (this as any).contentVisible && (((this as any).save as any)(), ((s as any).scale as any)(r, r), ((s as any).transform as any)(...u), ((this as any).executeOperatorList as any)(v), ((this as any).restore as any)()) : (I as any)(`Type3 character "${(b as any).operatorListId}" is not available.`);
      const _: any = [(b as any).width, 0];
      ((P as any).applyTransform as any)(_, u), m = (((_ as any)[0] as any) * (r as any) as any) + (w as any), ((s as any).translate as any)(m, 0), (i as any).x += (m as any) * (c as any);
    }
    ((s as any).restore as any)(), A && ((this as any).dependencyTracker = A);
  }
  setCharWidth(t: any, e: any, s: any): any {}
  setCharWidthAndBounds(t: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
    const o: any = new (Path2D as any)();
    ((o as any).rect as any)(i, n, (r as any) - (i as any), (a as any) - (n as any)), (((this as any).ctx as any).clip as any)(o), (this as any).dependencyTracker?.recordBBox(t, (this as any).ctx, i, r, n, a).recordClipBox(t, (this as any).ctx, i, r, n, a), ((this as any).endPath as any)(t);
  }
  getColorN_Pattern(t: any, e: any): any {
    let s: any;
    if (((e as any)[0] as any) === ("TilingPattern" as any)) {
      const i: any = (this as any).baseTransform || (Y as any)((this as any).ctx),
        n: any = {
          createCanvasGraphics: (r: any, a: any): any => new (se as any)(r, (this as any).commonObjs, (this as any).objs, (this as any).canvasFactory, (this as any).filterFactory, {
            optionalContentConfig: (this as any).optionalContentConfig,
            markedContentStack: (this as any).markedContentStack
          }, void 0, void 0, (this as any).dependencyTracker ? new (Ge as any)((this as any).dependencyTracker, a, !0) : null)
        };
      s = new (Ds as any)(e, (this as any).ctx, n, i);
    } else s = ((this as any)._getPattern as any)(t, (e as any)[1], (e as any)[2]);
    return s;
  }
  setStrokeColorN(t: any, ...e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("strokeColor", t), ((this as any).current as any).strokeColor = ((this as any).getColorN_Pattern as any)(t, e), ((this as any).current as any).patternStroke = !0;
  }
  setFillColorN(t: any, ...e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("fillColor", t), ((this as any).current as any).fillColor = ((this as any).getColorN_Pattern as any)(t, e), ((this as any).current as any).patternFill = !0;
  }
  setStrokeRGBColor(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("strokeColor", t), ((this as any).ctx as any).strokeStyle = ((this as any).current as any).strokeColor = e, ((this as any).current as any).patternStroke = !1;
  }
  setStrokeTransparent(t: any): any {
    (this as any).dependencyTracker?.recordSimpleData("strokeColor", t), ((this as any).ctx as any).strokeStyle = ((this as any).current as any).strokeColor = "transparent", ((this as any).current as any).patternStroke = !1;
  }
  setFillRGBColor(t: any, e: any): any {
    (this as any).dependencyTracker?.recordSimpleData("fillColor", t), ((this as any).ctx as any).fillStyle = ((this as any).current as any).fillColor = e, ((this as any).current as any).patternFill = !1;
  }
  setFillTransparent(t: any): any {
    (this as any).dependencyTracker?.recordSimpleData("fillColor", t), ((this as any).ctx as any).fillStyle = ((this as any).current as any).fillColor = "transparent", ((this as any).current as any).patternFill = !1;
  }
  _getPattern(t: any, e: any, s: any = null): any {
    let i: any;
    return (((this as any).cachedPatterns as any).has as any)(e) ? i = (((this as any).cachedPatterns as any).get as any)(e) : (i = (jn as any)(((this as any).getObject as any)(t, e)), (((this as any).cachedPatterns as any).set as any)(e, i)), s && ((i as any).matrix = s), i;
  }
  shadingFill(t: any, e: any): any {
    if (!(this as any).contentVisible) return;
    const s: any = (this as any).ctx;
    ((this as any).save as any)(t);
    const i: any = ((this as any)._getPattern as any)(t, e);
    (s as any).fillStyle = ((i as any).getPattern as any)(s, this, (Ct as any)(s), (at as any).SHADING, t);
    const n: any = (Ct as any)(s);
    if (n) {
      const {
          width: r,
          height: a
        }: any = (s as any).canvas,
        o: any = ((te as any).slice as any)();
      ((P as any).axialAlignedBoundingBox as any)([0, 0, r, a], n, o);
      const [l, h, c, u]: any = o;
      (((this as any).ctx as any).fillRect as any)(l, h, (c as any) - (l as any), (u as any) - (h as any));
    } else (((this as any).ctx as any).fillRect as any)(-1e10, -1e10, 2e10, 2e10);
    (this as any).dependencyTracker?.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, (At as any).transform).recordDependencies(t, (At as any).fill).recordOperation(t), ((this as any).compose as any)((((this as any).current as any).getClippedPathBoundingBox as any)()), ((this as any).restore as any)(t);
  }
  beginInlineImage(): any {
    (G as any)("Should not call beginInlineImage");
  }
  beginImageData(): any {
    (G as any)("Should not call beginImageData");
  }
  paintFormXObjectBegin(t: any, e: any, s: any): any {
    if ((this as any).contentVisible && (((this as any).save as any)(t), (((this as any).baseTransformStack as any).push as any)((this as any).baseTransform), e && ((this as any).transform as any)(t, ...e), (this as any).baseTransform = (Y as any)((this as any).ctx), s)) {
      ((P as any).axialAlignedBoundingBox as any)(s, (this as any).baseTransform, ((this as any).current as any).minMax);
      const [i, n, r, a]: any = s,
        o: any = new (Path2D as any)();
      ((o as any).rect as any)(i, n, (r as any) - (i as any), (a as any) - (n as any)), (((this as any).ctx as any).clip as any)(o), (this as any).dependencyTracker?.recordClipBox(t, (this as any).ctx, i, r, n, a), ((this as any).endPath as any)(t);
    }
  }
  paintFormXObjectEnd(t: any): any {
    (this as any).contentVisible && (((this as any).restore as any)(t), (this as any).baseTransform = (((this as any).baseTransformStack as any).pop as any)());
  }
  beginGroup(t: any, e: any): any {
    if (!(this as any).contentVisible) return;
    ((this as any).save as any)(t), (this as any).inSMaskMode && (((this as any).endSMaskMode as any)(), ((this as any).current as any).activeSMask = null);
    const s: any = (this as any).ctx;
    (e as any).isolated || (Ye as any)("TODO: Support non-isolated groups."), (e as any).knockout && (I as any)("Knockout groups not supported.");
    const i: any = (Y as any)(s);
    if ((e as any).matrix && ((s as any).transform as any)(...(e as any).matrix), !(e as any).bbox) throw new (Error as any)("Bounding box is required.");
    let n: any = ((te as any).slice as any)();
    ((P as any).axialAlignedBoundingBox as any)((e as any).bbox, (Y as any)(s), n);
    const r: any = [0, 0, ((s as any).canvas as any).width, ((s as any).canvas as any).height];
    n = ((P as any).intersect as any)(n, r) || [0, 0, 0, 0];
    const a: any = ((Math as any).floor as any)((n as any)[0]),
      o: any = ((Math as any).floor as any)((n as any)[1]),
      l: any = ((Math as any).max as any)((((Math as any).ceil as any)((n as any)[2]) as any) - (a as any), 1),
      h: any = ((Math as any).max as any)((((Math as any).ceil as any)((n as any)[3]) as any) - (o as any), 1);
    (((this as any).current as any).startNewPathAndClipBox as any)([0, 0, l, h]);
    let c: any = ("groupAt" as any) + ((this as any).groupLevel as any);
    (e as any).smask && (c += ("_smask_" as any) + (((this as any).smaskCounter++ as any) % (2 as any) as any));
    const u: any = (((this as any).cachedCanvases as any).getCanvas as any)(c, l, h),
      f: any = (u as any).context;
    ((f as any).translate as any)(-a, -o), ((f as any).transform as any)(...i);
    let g: any = new (Path2D as any)();
    const [p, b, m, y]: any = (e as any).bbox;
    if (((g as any).rect as any)(p, b, (m as any) - (p as any), (y as any) - (b as any)), (e as any).matrix) {
      const A: any = new (Path2D as any)();
      ((A as any).addPath as any)(g, new (DOMMatrix as any)((e as any).matrix)), g = A;
    }
    ((f as any).clip as any)(g), (e as any).smask && (((this as any).smaskStack as any).push as any)({
      canvas: (u as any).canvas,
      context: f,
      offsetX: a,
      offsetY: o,
      subtype: ((e as any).smask as any).subtype,
      backdrop: ((e as any).smask as any).backdrop,
      transferMap: ((e as any).smask as any).transferMap || null,
      startTransformInverse: null
    }), (!(e as any).smask || (this as any).dependencyTracker) && (((s as any).setTransform as any)(1, 0, 0, 1, 0, 0), ((s as any).translate as any)(a, o), ((s as any).save as any)()), (he as any)(s, f), (this as any).ctx = f, (this as any).dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(s), ((this as any).setGState as any)(t, [["BM", "source-over"], ["ca", 1], ["CA", 1]]), (((this as any).groupStack as any).push as any)(s), (this as any).groupLevel++;
  }
  endGroup(t: any, e: any): any {
    if (!(this as any).contentVisible) return;
    (this as any).groupLevel--;
    const s: any = (this as any).ctx,
      i: any = (((this as any).groupStack as any).pop as any)();
    if ((this as any).ctx = i, ((this as any).ctx as any).imageSmoothingEnabled = !1, (this as any).dependencyTracker?.popBaseTransform(), (e as any).smask) (this as any).tempSMask = (((this as any).smaskStack as any).pop as any)(), ((this as any).restore as any)(t), (this as any).dependencyTracker && (((this as any).ctx as any).restore as any)();else {
      (((this as any).ctx as any).restore as any)();
      const n: any = (Y as any)((this as any).ctx);
      ((this as any).restore as any)(t), (((this as any).ctx as any).save as any)(), (((this as any).ctx as any).setTransform as any)(...n);
      const r: any = ((te as any).slice as any)();
      ((P as any).axialAlignedBoundingBox as any)([0, 0, ((s as any).canvas as any).width, ((s as any).canvas as any).height], n, r), (((this as any).ctx as any).drawImage as any)((s as any).canvas, 0, 0), (((this as any).ctx as any).restore as any)(), ((this as any).compose as any)(r);
    }
  }
  beginAnnotation(t: any, e: any, s: any, i: any, n: any, r: any): any {
    if ((this.#t as any)(), (Oe as any)((this as any).ctx), (((this as any).ctx as any).save as any)(), ((this as any).save as any)(t), (this as any).baseTransform && (((this as any).ctx as any).setTransform as any)(...(this as any).baseTransform), s) {
      const a: any = ((s as any)[2] as any) - ((s as any)[0] as any),
        o: any = ((s as any)[3] as any) - ((s as any)[1] as any);
      if (r && (this as any).annotationCanvasMap) {
        i = ((i as any).slice as any)(), (i as any)[4] -= (s as any)[0], (i as any)[5] -= (s as any)[1], s = ((s as any).slice as any)(), (s as any)[0] = (s as any)[1] = 0, (s as any)[2] = a, (s as any)[3] = o, ((P as any).singularValueDecompose2dScale as any)((Y as any)((this as any).ctx), bt);
        const {
            viewportScale: l
          }: any = this,
          h: any = ((Math as any).ceil as any)(((a as any) * ((this as any).outputScaleX as any) as any) * (l as any)),
          c: any = ((Math as any).ceil as any)(((o as any) * ((this as any).outputScaleY as any) as any) * (l as any));
        (this as any).annotationCanvas = (((this as any).canvasFactory as any).create as any)(h, c);
        const {
          canvas: u,
          context: f
        }: any = (this as any).annotationCanvas;
        (((this as any).annotationCanvasMap as any).set as any)(e, u), ((this as any).annotationCanvas as any).savedCtx = (this as any).ctx, (this as any).ctx = f, (((this as any).ctx as any).save as any)(), (((this as any).ctx as any).setTransform as any)((bt as any)[0], 0, 0, -(bt as any)[1], 0, (o as any) * ((bt as any)[1] as any)), (Oe as any)((this as any).ctx);
      } else {
        (Oe as any)((this as any).ctx), ((this as any).endPath as any)(t);
        const l: any = new (Path2D as any)();
        ((l as any).rect as any)((s as any)[0], (s as any)[1], a, o), (((this as any).ctx as any).clip as any)(l);
      }
    }
    (this as any).current = new (oi as any)((((this as any).ctx as any).canvas as any).width, (((this as any).ctx as any).canvas as any).height), ((this as any).transform as any)(t, ...i), ((this as any).transform as any)(t, ...n);
  }
  endAnnotation(t: any): any {
    (this as any).annotationCanvas && ((((this as any).ctx as any).restore as any)(), (this.#e as any)(), (this as any).ctx = ((this as any).annotationCanvas as any).savedCtx, delete ((this as any).annotationCanvas as any).savedCtx, delete (this as any).annotationCanvas);
  }
  paintImageMaskXObject(t: any, e: any): any {
    if (!(this as any).contentVisible) return;
    const s: any = (e as any).count;
    e = ((this as any).getObject as any)(t, (e as any).data, e), (e as any).count = s;
    const i: any = (this as any).ctx,
      n: any = ((this as any)._createMaskCanvas as any)(t, e),
      r: any = (n as any).canvas;
    ((i as any).save as any)(), ((i as any).setTransform as any)(1, 0, 0, 1, 0, 0), ((i as any).drawImage as any)(r, (n as any).offsetX, (n as any).offsetY), (this as any).dependencyTracker?.resetBBox(t).recordBBox(t, (this as any).ctx, (n as any).offsetX, ((n as any).offsetX as any) + ((r as any).width as any), (n as any).offsetY, ((n as any).offsetY as any) + ((r as any).height as any)).recordOperation(t), ((i as any).restore as any)(), ((this as any).compose as any)();
  }
  paintImageMaskXObjectRepeat(t: any, e: any, s: any, i: any = 0, n: any = 0, r: any, a: any): any {
    if (!(this as any).contentVisible) return;
    e = ((this as any).getObject as any)(t, (e as any).data, e);
    const o: any = (this as any).ctx;
    ((o as any).save as any)();
    const l: any = (Y as any)(o);
    ((o as any).transform as any)(s, i, n, r, 0, 0);
    const h: any = ((this as any)._createMaskCanvas as any)(t, e);
    ((o as any).setTransform as any)(1, 0, 0, 1, ((h as any).offsetX as any) - ((l as any)[4] as any), ((h as any).offsetY as any) - ((l as any)[5] as any)), (this as any).dependencyTracker?.resetBBox(t);
    for (let c: any = 0, u: any = (a as any).length; (c as any) < (u as any); c += 2) {
      const f: any = ((P as any).transform as any)(l, [s, i, n, r, (a as any)[c], (a as any)[(c as any) + (1 as any)]]);
      ((o as any).drawImage as any)((h as any).canvas, (f as any)[4], (f as any)[5]), (this as any).dependencyTracker?.recordBBox(t, (this as any).ctx, (f as any)[4], ((f as any)[4] as any) + (((h as any).canvas as any).width as any), (f as any)[5], ((f as any)[5] as any) + (((h as any).canvas as any).height as any));
    }
    ((o as any).restore as any)(), ((this as any).compose as any)(), (this as any).dependencyTracker?.recordOperation(t);
  }
  paintImageMaskXObjectGroup(t: any, e: any): any {
    if (!(this as any).contentVisible) return;
    const s: any = (this as any).ctx,
      i: any = ((this as any).current as any).fillColor,
      n: any = ((this as any).current as any).patternFill;
    (this as any).dependencyTracker?.resetBBox(t).recordDependencies(t, (At as any).transformAndFill);
    for (const r of e) {
      const {
          data: a,
          width: o,
          height: l,
          transform: h
        }: any = r,
        c: any = (((this as any).cachedCanvases as any).getCanvas as any)("maskCanvas", o, l),
        u: any = (c as any).context;
      ((u as any).save as any)();
      const f: any = ((this as any).getObject as any)(t, a, r);
      (hi as any)(u, f), (u as any).globalCompositeOperation = "source-in", (u as any).fillStyle = n ? ((i as any).getPattern as any)(u, this, (Ct as any)(s), (at as any).FILL, t) : i, ((u as any).fillRect as any)(0, 0, o, l), ((u as any).restore as any)(), ((s as any).save as any)(), ((s as any).transform as any)(...h), ((s as any).scale as any)(1, -1), (Ne as any)(s, (c as any).canvas, 0, 0, o, l, 0, -1, 1, 1), (this as any).dependencyTracker?.recordBBox(t, s, 0, o, 0, l), ((s as any).restore as any)();
    }
    ((this as any).compose as any)(), (this as any).dependencyTracker?.recordOperation(t);
  }
  paintImageXObject(t: any, e: any): any {
    if (!(this as any).contentVisible) return;
    const s: any = ((this as any).getObject as any)(t, e);
    if (!s) {
      (I as any)("Dependent image isn't ready yet");
      return;
    }
    ((this as any).paintInlineImageXObject as any)(t, s);
  }
  paintImageXObjectRepeat(t: any, e: any, s: any, i: any, n: any): any {
    if (!(this as any).contentVisible) return;
    const r: any = ((this as any).getObject as any)(t, e);
    if (!r) {
      (I as any)("Dependent image isn't ready yet");
      return;
    }
    const a: any = (r as any).width,
      o: any = (r as any).height,
      l: any = [];
    for (let h: any = 0, c: any = (n as any).length; (h as any) < (c as any); h += 2) ((l as any).push as any)({
      transform: [s, 0, 0, i, (n as any)[h], (n as any)[(h as any) + (1 as any)]],
      x: 0,
      y: 0,
      w: a,
      h: o
    });
    ((this as any).paintInlineImageXObjectGroup as any)(t, r, l);
  }
  applyTransferMapsToCanvas(t: any): any {
    return (((this as any).current as any).transferMaps as any) !== ("none" as any) && ((t as any).filter = ((this as any).current as any).transferMaps, ((t as any).drawImage as any)((t as any).canvas, 0, 0), (t as any).filter = "none"), (t as any).canvas;
  }
  applyTransferMapsToBitmap(t: any): any {
    if ((((this as any).current as any).transferMaps as any) === ("none" as any)) return (t as any).bitmap;
    const {
        bitmap: e,
        width: s,
        height: i
      }: any = t,
      n: any = (((this as any).cachedCanvases as any).getCanvas as any)("inlineImage", s, i),
      r: any = (n as any).context;
    return (r as any).filter = ((this as any).current as any).transferMaps, ((r as any).drawImage as any)(e, 0, 0), (r as any).filter = "none", (n as any).canvas;
  }
  paintInlineImageXObject(t: any, e: any): any {
    if (!(this as any).contentVisible) return;
    const s: any = (e as any).width,
      i: any = (e as any).height,
      n: any = (this as any).ctx;
    ((this as any).save as any)(t);
    const {
      filter: r
    }: any = n;
    (r as any) !== ("none" as any) && (r as any) !== ("" as any) && ((n as any).filter = "none"), ((n as any).scale as any)((1 as any) / (s as any), (-1 as any) / (i as any));
    let a: any;
    if ((e as any).bitmap) a = ((this as any).applyTransferMapsToBitmap as any)(e);else if ((typeof HTMLElement as any) == ("function" as any) && e instanceof HTMLElement || !(e as any).data) a = e;else {
      const h: any = ((((this as any).cachedCanvases as any).getCanvas as any)("inlineImage", s, i) as any).context;
      (li as any)(h, e), a = ((this as any).applyTransferMapsToCanvas as any)(h);
    }
    const o: any = ((this as any)._scaleImage as any)(a, (Ct as any)(n));
    (n as any).imageSmoothingEnabled = (ci as any)((Y as any)(n), (e as any).interpolate), (this as any).dependencyTracker?.resetBBox(t).recordBBox(t, n, 0, s, -i, 0).recordDependencies(t, (At as any).imageXObject).recordOperation(t), (Ne as any)(n, (o as any).img, 0, 0, (o as any).paintWidth, (o as any).paintHeight, 0, -i, s, i), ((this as any).compose as any)(), ((this as any).restore as any)(t);
  }
  paintInlineImageXObjectGroup(t: any, e: any, s: any): any {
    if (!(this as any).contentVisible) return;
    const i: any = (this as any).ctx;
    let n: any;
    if ((e as any).bitmap) n = (e as any).bitmap;else {
      const r: any = (e as any).width,
        a: any = (e as any).height,
        l: any = ((((this as any).cachedCanvases as any).getCanvas as any)("inlineImage", r, a) as any).context;
      (li as any)(l, e), n = ((this as any).applyTransferMapsToCanvas as any)(l);
    }
    (this as any).dependencyTracker?.resetBBox(t);
    for (const r of s) ((i as any).save as any)(), ((i as any).transform as any)(...(r as any).transform), ((i as any).scale as any)(1, -1), (Ne as any)(i, n, (r as any).x, (r as any).y, (r as any).w, (r as any).h, 0, -1, 1, 1), (this as any).dependencyTracker?.recordBBox(t, i, 0, 1, -1, 0), ((i as any).restore as any)();
    (this as any).dependencyTracker?.recordOperation(t), ((this as any).compose as any)();
  }
  paintSolidColorImageMask(t: any): any {
    (this as any).contentVisible && ((this as any).dependencyTracker?.resetBBox(t).recordBBox(t, (this as any).ctx, 0, 1, 0, 1).recordDependencies(t, (At as any).fill).recordOperation(t), (((this as any).ctx as any).fillRect as any)(0, 0, 1, 1), ((this as any).compose as any)());
  }
  markPoint(t: any, e: any): any {}
  markPointProps(t: any, e: any, s: any): any {}
  beginMarkedContent(t: any, e: any): any {
    (this as any).dependencyTracker?.beginMarkedContent(t), (((this as any).markedContentStack as any).push as any)({
      visible: !0
    });
  }
  beginMarkedContentProps(t: any, e: any, s: any): any {
    (this as any).dependencyTracker?.beginMarkedContent(t), (e as any) === ("OC" as any) ? (((this as any).markedContentStack as any).push as any)({
      visible: (((this as any).optionalContentConfig as any).isVisible as any)(s)
    }) : (((this as any).markedContentStack as any).push as any)({
      visible: !0
    }), (this as any).contentVisible = ((this as any).isContentVisible as any)();
  }
  endMarkedContent(t: any): any {
    (this as any).dependencyTracker?.endMarkedContent(t), (((this as any).markedContentStack as any).pop as any)(), (this as any).contentVisible = ((this as any).isContentVisible as any)();
  }
  beginCompat(t: any): any {}
  endCompat(t: any): any {}
  consumePath(t: any, e: any, s: any): any {
    const i: any = (((this as any).current as any).isEmptyClip as any)();
    (this as any).pendingClip && (((this as any).current as any).updateClipFromPath as any)(), (this as any).pendingClip || ((this as any).compose as any)(s);
    const n: any = (this as any).ctx;
    (this as any).pendingClip ? (i || (((this as any).pendingClip as any) === (di as any) ? ((n as any).clip as any)(e, "evenodd") : ((n as any).clip as any)(e)), (this as any).pendingClip = null, (this as any).dependencyTracker?.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : (this as any).dependencyTracker?.recordOperation(t), (((this as any).current as any).startNewPathAndClipBox as any)(((this as any).current as any).clipBox);
  }
  getSinglePixelWidth(): any {
    if (!(this as any)._cachedGetSinglePixelWidth) {
      const t: any = (Y as any)((this as any).ctx);
      if (((t as any)[1] as any) === (0 as any) && ((t as any)[2] as any) === (0 as any)) (this as any)._cachedGetSinglePixelWidth = (1 as any) / (((Math as any).min as any)(((Math as any).abs as any)((t as any)[0]), ((Math as any).abs as any)((t as any)[3])) as any);else {
        const e: any = ((Math as any).abs as any)((((t as any)[0] as any) * ((t as any)[3] as any) as any) - (((t as any)[2] as any) * ((t as any)[1] as any) as any)),
          s: any = ((Math as any).hypot as any)((t as any)[0], (t as any)[2]),
          i: any = ((Math as any).hypot as any)((t as any)[1], (t as any)[3]);
        (this as any)._cachedGetSinglePixelWidth = (((Math as any).max as any)(s, i) as any) / (e as any);
      }
    }
    return (this as any)._cachedGetSinglePixelWidth;
  }
  getScaleForStroking(): any {
    if ((((this as any)._cachedScaleForStroking as any)[0] as any) === (-1 as any)) {
      const {
          lineWidth: t
        }: any = (this as any).current,
        {
          a: e,
          b: s,
          c: i,
          d: n
        }: any = (((this as any).ctx as any).getTransform as any)();
      let r: any, a: any;
      if ((s as any) === (0 as any) && (i as any) === (0 as any)) {
        const o: any = ((Math as any).abs as any)(e),
          l: any = ((Math as any).abs as any)(n);
        if ((o as any) === (l as any)) {
          if ((t as any) === (0 as any)) r = a = (1 as any) / (o as any);else {
            const h: any = (o as any) * (t as any);
            r = a = (h as any) < (1 as any) ? (1 as any) / (h as any) : 1;
          }
        } else if ((t as any) === (0 as any)) r = (1 as any) / (o as any), a = (1 as any) / (l as any);else {
          const h: any = (o as any) * (t as any),
            c: any = (l as any) * (t as any);
          r = (h as any) < (1 as any) ? (1 as any) / (h as any) : 1, a = (c as any) < (1 as any) ? (1 as any) / (c as any) : 1;
        }
      } else {
        const o: any = ((Math as any).abs as any)(((e as any) * (n as any) as any) - ((s as any) * (i as any) as any)),
          l: any = ((Math as any).hypot as any)(e, s),
          h: any = ((Math as any).hypot as any)(i, n);
        if ((t as any) === (0 as any)) r = (h as any) / (o as any), a = (l as any) / (o as any);else {
          const c: any = (t as any) * (o as any);
          r = (h as any) > (c as any) ? (h as any) / (c as any) : 1, a = (l as any) > (c as any) ? (l as any) / (c as any) : 1;
        }
      }
      ((this as any)._cachedScaleForStroking as any)[0] = r, ((this as any)._cachedScaleForStroking as any)[1] = a;
    }
    return (this as any)._cachedScaleForStroking;
  }
  rescaleAndStroke(t: any, e: any): any {
    const {
        ctx: s,
        current: {
          lineWidth: i
        }
      }: any = this,
      [n, r]: any = ((this as any).getScaleForStroking as any)();
    if ((n as any) === (r as any)) {
      (s as any).lineWidth = ((i || 1) as any) * (n as any), ((s as any).stroke as any)(t);
      return;
    }
    const a: any = ((s as any).getLineDash as any)();
    e && ((s as any).save as any)(), ((s as any).scale as any)(n, r), (ls as any).a = (1 as any) / (n as any), (ls as any).d = (1 as any) / (r as any);
    const o: any = new (Path2D as any)();
    if (((o as any).addPath as any)(t, ls), ((a as any).length as any) > (0 as any)) {
      const l: any = ((Math as any).max as any)(n, r);
      ((s as any).setLineDash as any)(((a as any).map as any)((h: any): any => (h as any) / (l as any))), (s as any).lineDashOffset /= l;
    }
    (s as any).lineWidth = i || 1, ((s as any).stroke as any)(o), e && ((s as any).restore as any)();
  }
  isContentVisible(): any {
    for (let t: any = (((this as any).markedContentStack as any).length as any) - (1 as any); (t as any) >= (0 as any); t--) if (!(((this as any).markedContentStack as any)[t] as any).visible) return !1;
    return !0;
  }
}
for (const d in Ae) (((se as any).prototype as any)[d] as any) !== (void 0 as any) && (((se as any).prototype as any)[(Ae as any)[d]] = ((se as any).prototype as any)[d]);
class ie {
  [key: string]: any;
  #t: any;
  #e: any;
  #i: any;
  static strings: any = ["fontFamily", "fontWeight", "italicAngle"];
  static write(t: any): any {
    const e: any = new (TextEncoder as any)(),
      s: any = {};
    let i: any = 0;
    for (const l of (ie as any).strings) {
      const h: any = ((e as any).encode as any)((t as any)[l]);
      (s as any)[l] = h, i += (4 as any) + ((h as any).length as any);
    }
    const n: any = new (ArrayBuffer as any)(i),
      r: any = new (Uint8Array as any)(n),
      a: any = new (DataView as any)(n);
    let o: any = 0;
    for (const l of (ie as any).strings) {
      const h: any = (s as any)[l],
        c: any = (h as any).length;
      ((a as any).setUint32 as any)(o, c), ((r as any).set as any)(h, (o as any) + (4 as any)), o += (4 as any) + (c as any);
    }
    return (B as any)((o as any) === ((n as any).byteLength as any), "CssFontInfo.write: Buffer overflow"), n;
  }
  constructor(t: any) {
    this.#t = t, this.#e = new (DataView as any)(this.#t), this.#i = new (TextDecoder as any)();
  }
  #s(t: any): any {
    (B as any)((t as any) < (((ie as any).strings as any).length as any), "Invalid string index");
    let e: any = 0;
    for (let i: any = 0; (i as any) < (t as any); i++) e += (((this.#e as any).getUint32 as any)(e) as any) + (4 as any);
    const s: any = ((this.#e as any).getUint32 as any)(e);
    return ((this.#i as any).decode as any)(new (Uint8Array as any)(this.#t, (e as any) + (4 as any), s));
  }
  get fontFamily(): any {
    return (this.#s as any)(0);
  }
  get fontWeight(): any {
    return (this.#s as any)(1);
  }
  get italicAngle(): any {
    return (this.#s as any)(2);
  }
}
class ne {
  [key: string]: any;
  #t: any;
  #e: any;
  #i: any;
  static strings: any = ["css", "loadedName", "baseFontName", "src"];
  static write(t: any): any {
    const e: any = new (TextEncoder as any)(),
      s: any = {};
    let i: any = 0;
    for (const u of (ne as any).strings) {
      const f: any = ((e as any).encode as any)((t as any)[u]);
      (s as any)[u] = f, i += (4 as any) + ((f as any).length as any);
    }
    i += 4;
    let n: any,
      r: any,
      a: any = (1 as any) + (i as any);
    (t as any).style && (n = ((e as any).encode as any)(((t as any).style as any).style), r = ((e as any).encode as any)(((t as any).style as any).weight), a += (((4 as any) + ((n as any).length as any) as any) + (4 as any) as any) + ((r as any).length as any));
    const o: any = new (ArrayBuffer as any)(a),
      l: any = new (Uint8Array as any)(o),
      h: any = new (DataView as any)(o);
    let c: any = 0;
    ((h as any).setUint8 as any)(c++, (t as any).guessFallback ? 1 : 0), ((h as any).setUint32 as any)(c, 0), c += 4, i = 0;
    for (const u of (ne as any).strings) {
      const f: any = (s as any)[u],
        g: any = (f as any).length;
      i += (4 as any) + (g as any), ((h as any).setUint32 as any)(c, g), ((l as any).set as any)(f, (c as any) + (4 as any)), c += (4 as any) + (g as any);
    }
    return ((h as any).setUint32 as any)(((c as any) - (i as any) as any) - (4 as any), i), (t as any).style && (((h as any).setUint32 as any)(c, (n as any).length), ((l as any).set as any)(n, (c as any) + (4 as any)), c += (4 as any) + ((n as any).length as any), ((h as any).setUint32 as any)(c, (r as any).length), ((l as any).set as any)(r, (c as any) + (4 as any)), c += (4 as any) + ((r as any).length as any)), (B as any)((c as any) <= ((o as any).byteLength as any), "SubstitionInfo.write: Buffer overflow"), ((o as any).transferToFixedLength as any)(c);
  }
  constructor(t: any) {
    this.#t = t, this.#e = new (DataView as any)(this.#t), this.#i = new (TextDecoder as any)();
  }
  get guessFallback(): any {
    return (((this.#e as any).getUint8 as any)(0) as any) !== (0 as any);
  }
  #s(t: any): any {
    (B as any)((t as any) < (((ne as any).strings as any).length as any), "Invalid string index");
    let e: any = 5;
    for (let i: any = 0; (i as any) < (t as any); i++) e += (((this.#e as any).getUint32 as any)(e) as any) + (4 as any);
    const s: any = ((this.#e as any).getUint32 as any)(e);
    return ((this.#i as any).decode as any)(new (Uint8Array as any)(this.#t, (e as any) + (4 as any), s));
  }
  get css(): any {
    return (this.#s as any)(0);
  }
  get loadedName(): any {
    return (this.#s as any)(1);
  }
  get baseFontName(): any {
    return (this.#s as any)(2);
  }
  get src(): any {
    return (this.#s as any)(3);
  }
  get style(): any {
    let t: any = 1;
    t += (4 as any) + (((this.#e as any).getUint32 as any)(t) as any);
    const e: any = ((this.#e as any).getUint32 as any)(t),
      s: any = ((this.#i as any).decode as any)(new (Uint8Array as any)(this.#t, (t as any) + (4 as any), e));
    t += (4 as any) + (e as any);
    const i: any = ((this.#e as any).getUint32 as any)(t),
      n: any = ((this.#i as any).decode as any)(new (Uint8Array as any)(this.#t, (t as any) + (4 as any), i));
    return {
      style: s,
      weight: n
    };
  }
}
class j {
  [key: string]: any;
  static bools: any = ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"];
  static numbers: any = ["ascent", "defaultWidth", "descent"];
  static strings: any = ["fallbackName", "loadedName", "mimetype", "name"];
  static #t: any = ((Math as any).ceil as any)(((((this as any).bools as any).length as any) * (2 as any) as any) / (8 as any));
  static #e: any = (this.#t as any) + ((((this as any).numbers as any).length as any) * (8 as any) as any);
  static #i: any = ((this.#e as any) + (1 as any) as any) + (8 as any);
  static #s: any = ((this.#i as any) + (1 as any) as any) + (48 as any);
  static #a: any = ((this.#s as any) + (1 as any) as any) + (6 as any);
  #n: any;
  #r: any;
  #o: any;
  constructor({
    data: t,
    extra: e
  }: any) {
    this.#n = t, this.#r = new (TextDecoder as any)(), this.#o = new (DataView as any)(this.#n), e && ((Object as any).assign as any)(this, e);
  }
  #h(t: any): any {
    (B as any)((t as any) < (((j as any).bools as any).length as any), "Invalid boolean index");
    const e: any = ((Math as any).floor as any)((t as any) / (4 as any)),
      s: any = ((t as any) * (2 as any) as any) % (8 as any),
      i: any = ((((this.#o as any).getUint8 as any)(e) as any) >> (s as any) as any) & (3 as any);
    return (i as any) === (0 as any) ? void 0 : (i as any) === (2 as any);
  }
  get black(): any {
    return (this.#h as any)(0);
  }
  get bold(): any {
    return (this.#h as any)(1);
  }
  get disableFontFace(): any {
    return (this.#h as any)(2);
  }
  get fontExtraProperties(): any {
    return (this.#h as any)(3);
  }
  get isInvalidPDFjsFont(): any {
    return (this.#h as any)(4);
  }
  get isType3Font(): any {
    return (this.#h as any)(5);
  }
  get italic(): any {
    return (this.#h as any)(6);
  }
  get missingFile(): any {
    return (this.#h as any)(7);
  }
  get remeasure(): any {
    return (this.#h as any)(8);
  }
  get vertical(): any {
    return (this.#h as any)(9);
  }
  #l(t: any): any {
    return (B as any)((t as any) < (((j as any).numbers as any).length as any), "Invalid number index"), ((this.#o as any).getFloat64 as any)((j.#t as any) + ((t as any) * (8 as any) as any));
  }
  get ascent(): any {
    return (this.#l as any)(0);
  }
  get defaultWidth(): any {
    return (this.#l as any)(1);
  }
  get descent(): any {
    return (this.#l as any)(2);
  }
  get bbox(): any {
    let t: any = j.#e;
    if ((((this.#o as any).getUint8 as any)(t) as any) === (0 as any)) return;
    t += 1;
    const s: any = [];
    for (let i: any = 0; (i as any) < (4 as any); i++) ((s as any).push as any)(((this.#o as any).getInt16 as any)(t, !0)), t += 2;
    return s;
  }
  get fontMatrix(): any {
    let t: any = j.#i;
    if ((((this.#o as any).getUint8 as any)(t) as any) === (0 as any)) return;
    t += 1;
    const s: any = [];
    for (let i: any = 0; (i as any) < (6 as any); i++) ((s as any).push as any)(((this.#o as any).getFloat64 as any)(t, !0)), t += 8;
    return s;
  }
  get defaultVMetrics(): any {
    let t: any = j.#s;
    if ((((this.#o as any).getUint8 as any)(t) as any) === (0 as any)) return;
    t += 1;
    const s: any = [];
    for (let i: any = 0; (i as any) < (3 as any); i++) ((s as any).push as any)(((this.#o as any).getInt16 as any)(t, !0)), t += 2;
    return s;
  }
  #u(t: any): any {
    (B as any)((t as any) < (((j as any).strings as any).length as any), "Invalid string index");
    let e: any = (j.#a as any) + (4 as any);
    for (let n: any = 0; (n as any) < (t as any); n++) e += (((this.#o as any).getUint32 as any)(e) as any) + (4 as any);
    const s: any = ((this.#o as any).getUint32 as any)(e),
      i: any = new (Uint8Array as any)(s);
    return ((i as any).set as any)(new (Uint8Array as any)(this.#n, (e as any) + (4 as any), s)), ((this.#r as any).decode as any)(i);
  }
  get fallbackName(): any {
    return (this.#u as any)(0);
  }
  get loadedName(): any {
    return (this.#u as any)(1);
  }
  get mimetype(): any {
    return (this.#u as any)(2);
  }
  get name(): any {
    return (this.#u as any)(3);
  }
  get data(): any {
    let t: any = j.#a;
    const e: any = ((this.#o as any).getUint32 as any)(t);
    t += (4 as any) + (e as any);
    const s: any = ((this.#o as any).getUint32 as any)(t);
    t += (4 as any) + (s as any);
    const i: any = ((this.#o as any).getUint32 as any)(t);
    t += (4 as any) + (i as any);
    const n: any = ((this.#o as any).getUint32 as any)(t);
    if ((n as any) !== (0 as any)) return new (Uint8Array as any)(this.#n, (t as any) + (4 as any), n);
  }
  clearData(): any {
    let t: any = j.#a;
    const e: any = ((this.#o as any).getUint32 as any)(t);
    t += (4 as any) + (e as any);
    const s: any = ((this.#o as any).getUint32 as any)(t);
    t += (4 as any) + (s as any);
    const i: any = ((this.#o as any).getUint32 as any)(t);
    t += (4 as any) + (i as any);
    const n: any = ((this.#o as any).getUint32 as any)(t);
    ((new (Uint8Array as any)(this.#n, (t as any) + (4 as any), n) as any).fill as any)(0), ((this.#o as any).setUint32 as any)(t, 0);
  }
  get cssFontInfo(): any {
    let t: any = j.#a;
    const e: any = ((this.#o as any).getUint32 as any)(t);
    t += (4 as any) + (e as any);
    const s: any = ((this.#o as any).getUint32 as any)(t);
    t += (4 as any) + (s as any);
    const i: any = ((this.#o as any).getUint32 as any)(t);
    if ((i as any) === (0 as any)) return null;
    const n: any = new (Uint8Array as any)(i);
    return ((n as any).set as any)(new (Uint8Array as any)(this.#n, (t as any) + (4 as any), i)), new (ie as any)((n as any).buffer);
  }
  get systemFontInfo(): any {
    let t: any = j.#a;
    const e: any = ((this.#o as any).getUint32 as any)(t);
    t += (4 as any) + (e as any);
    const s: any = ((this.#o as any).getUint32 as any)(t);
    if ((s as any) === (0 as any)) return null;
    const i: any = new (Uint8Array as any)(s);
    return ((i as any).set as any)(new (Uint8Array as any)(this.#n, (t as any) + (4 as any), s)), new (ne as any)((i as any).buffer);
  }
  static write(t: any): any {
    const e: any = (t as any).systemFontInfo ? ((ne as any).write as any)((t as any).systemFontInfo) : null,
      s: any = (t as any).cssFontInfo ? ((ie as any).write as any)((t as any).cssFontInfo) : null,
      i: any = new (TextEncoder as any)(),
      n: any = {};
    let r: any = 0;
    for (const p of (j as any).strings) (n as any)[p] = ((i as any).encode as any)((t as any)[p]), r += (4 as any) + (((n as any)[p] as any).length as any);
    const a: any = ((((((((j.#a as any) + (4 as any) as any) + (r as any) as any) + (4 as any) as any) + ((e ? (e as any).byteLength : 0) as any) as any) + (4 as any) as any) + ((s ? (s as any).byteLength : 0) as any) as any) + (4 as any) as any) + (((t as any).data ? ((t as any).data as any).length : 0) as any),
      o: any = new (ArrayBuffer as any)(a),
      l: any = new (Uint8Array as any)(o),
      h: any = new (DataView as any)(o);
    let c: any = 0;
    const u: any = ((j as any).bools as any).length;
    let f: any = 0,
      g: any = 0;
    for (let p: any = 0; (p as any) < (u as any); p++) {
      const b: any = (t as any)[((j as any).bools as any)[p]];
      f |= (((b as any) === (void 0 as any) ? 0 : b ? 2 : 1) as any) << (g as any), g += 2, ((g as any) === (8 as any) || (p as any) === ((u as any) - (1 as any) as any)) && (((h as any).setUint8 as any)(c++, f), f = 0, g = 0);
    }
    (B as any)((c as any) === (j.#t as any), "FontInfo.write: Boolean properties offset mismatch");
    for (const p of (j as any).numbers) ((h as any).setFloat64 as any)(c, (t as any)[p]), c += 8;
    if ((B as any)((c as any) === (j.#e as any), "FontInfo.write: Number properties offset mismatch"), (t as any).bbox) {
      ((h as any).setUint8 as any)(c++, 4);
      for (const p of (t as any).bbox) ((h as any).setInt16 as any)(c, p, !0), c += 2;
    } else ((h as any).setUint8 as any)(c++, 0), c += 8;
    if ((B as any)((c as any) === (j.#i as any), "FontInfo.write: BBox properties offset mismatch"), (t as any).fontMatrix) {
      ((h as any).setUint8 as any)(c++, 6);
      for (const p of (t as any).fontMatrix) ((h as any).setFloat64 as any)(c, p, !0), c += 8;
    } else ((h as any).setUint8 as any)(c++, 0), c += 48;
    if ((B as any)((c as any) === (j.#s as any), "FontInfo.write: FontMatrix properties offset mismatch"), (t as any).defaultVMetrics) {
      ((h as any).setUint8 as any)(c++, 1);
      for (const p of (t as any).defaultVMetrics) ((h as any).setInt16 as any)(c, p, !0), c += 2;
    } else ((h as any).setUint8 as any)(c++, 0), c += 6;
    (B as any)((c as any) === (j.#a as any), "FontInfo.write: DefaultVMetrics properties offset mismatch"), ((h as any).setUint32 as any)(j.#a, 0), c += 4;
    for (const p of (j as any).strings) {
      const b: any = (n as any)[p],
        m: any = (b as any).length;
      ((h as any).setUint32 as any)(c, m), ((l as any).set as any)(b, (c as any) + (4 as any)), c += (4 as any) + (m as any);
    }
    if (((h as any).setUint32 as any)(j.#a, ((c as any) - (j.#a as any) as any) - (4 as any)), !e) ((h as any).setUint32 as any)(c, 0), c += 4;else {
      const p: any = (e as any).byteLength;
      ((h as any).setUint32 as any)(c, p), (B as any)((((c as any) + (4 as any) as any) + (p as any) as any) <= ((o as any).byteLength as any), "FontInfo.write: Buffer overflow at systemFontInfo"), ((l as any).set as any)(new (Uint8Array as any)(e), (c as any) + (4 as any)), c += (4 as any) + (p as any);
    }
    if (!s) ((h as any).setUint32 as any)(c, 0), c += 4;else {
      const p: any = (s as any).byteLength;
      ((h as any).setUint32 as any)(c, p), (B as any)((((c as any) + (4 as any) as any) + (p as any) as any) <= ((o as any).byteLength as any), "FontInfo.write: Buffer overflow at cssFontInfo"), ((l as any).set as any)(new (Uint8Array as any)(s), (c as any) + (4 as any)), c += (4 as any) + (p as any);
    }
    return ((t as any).data as any) === (void 0 as any) ? (((h as any).setUint32 as any)(c, 0), c += 4) : (((h as any).setUint32 as any)(c, ((t as any).data as any).length), ((l as any).set as any)((t as any).data, (c as any) + (4 as any)), c += (4 as any) + (((t as any).data as any).length as any)), (B as any)((c as any) <= ((o as any).byteLength as any), "FontInfo.write: Buffer overflow"), ((o as any).transferToFixedLength as any)(c);
  }
}
class be {
  [key: string]: any;
  static #t: any = null;
  static #e: any = "";
  static get workerPort(): any {
    return this.#t;
  }
  static set workerPort(t: any) {
    if (!((typeof Worker as any) < ("u" as any) && t instanceof Worker) && (t as any) !== (null as any)) throw new (Error as any)("Invalid `workerPort` type.");
    this.#t = t;
  }
  static get workerSrc(): any {
    return this.#e;
  }
  static set workerSrc(t: any) {
    if ((typeof t as any) != ("string" as any)) throw new (Error as any)("Invalid `workerSrc` type.");
    this.#e = t;
  }
}
class Qn {
  [key: string]: any;
  #t: any;
  #e: any;
  constructor({
    parsedData: t,
    rawData: e
  }: any) {
    this.#t = t, this.#e = e;
  }
  getRaw(): any {
    return this.#e;
  }
  get(t: any): any {
    return ((this.#t as any).get as any)(t) ?? null;
  }
  [Symbol.iterator](): any {
    return ((this.#t as any).entries as any)();
  }
}
const Jt: any = (Symbol as any)("INTERNAL");
class Jn {
  declare rbGroups: any;
  declare usage: any;
  declare intent: any;
  declare name: any;
  [key: string]: any;
  #t: any = !1;
  #e: any = !1;
  #i: any = !1;
  #s: any = !0;
  constructor(t: any, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: n
  }: any) {
    this.#t = !!((t as any) & ((mt as any).DISPLAY as any)), this.#e = !!((t as any) & ((mt as any).PRINT as any)), (this as any).name = e, (this as any).intent = s, (this as any).usage = i, (this as any).rbGroups = n;
  }
  get visible(): any {
    if (this.#i) return this.#s;
    if (!this.#s) return !1;
    const {
      print: t,
      view: e
    }: any = (this as any).usage;
    return this.#t ? (e?.viewState as any) !== ("OFF" as any) : this.#e ? (t?.printState as any) !== ("OFF" as any) : !0;
  }
  _setVisible(t: any, e: any, s: any = !1): any {
    (t as any) !== (Jt as any) && (G as any)("Internal method `_setVisible` called."), this.#i = s, this.#s = e;
  }
}
class Zn {
  declare creator: any;
  declare name: any;
  declare renderingIntent: any;
  [key: string]: any;
  #t: any = null;
  #e: any = new (Map as any)();
  #i: any = null;
  #s: any = null;
  constructor(t: any, e: any = (mt as any).DISPLAY) {
    if ((this as any).renderingIntent = e, (this as any).name = null, (this as any).creator = null, (t as any) !== (null as any)) {
      (this as any).name = (t as any).name, (this as any).creator = (t as any).creator, this.#s = (t as any).order;
      for (const s of (t as any).groups) ((this.#e as any).set as any)((s as any).id, new (Jn as any)(e, s));
      if (((t as any).baseState as any) === ("OFF" as any)) for (const s of ((this.#e as any).values as any)()) ((s as any)._setVisible as any)(Jt, !1);
      for (const s of (t as any).on) ((((this.#e as any).get as any)(s) as any)._setVisible as any)(Jt, !0);
      for (const s of (t as any).off) ((((this.#e as any).get as any)(s) as any)._setVisible as any)(Jt, !1);
      this.#i = ((this as any).getHash as any)();
    }
  }
  #a(t: any): any {
    const e: any = (t as any).length;
    if ((e as any) < (2 as any)) return !0;
    const s: any = (t as any)[0];
    for (let i: any = 1; (i as any) < (e as any); i++) {
      const n: any = (t as any)[i];
      let r: any;
      if (((Array as any).isArray as any)(n)) r = (this.#a as any)(n);else if (((this.#e as any).has as any)(n)) r = (((this.#e as any).get as any)(n) as any).visible;else return (I as any)(`Optional content group not found: ${n}`), !0;
      switch (s) {
        case "And":
          if (!r) return !1;
          break;
        case "Or":
          if (r) return !0;
          break;
        case "Not":
          return !r;
        default:
          return !0;
      }
    }
    return (s as any) === ("And" as any);
  }
  isVisible(t: any): any {
    if (((this.#e as any).size as any) === (0 as any)) return !0;
    if (!t) return (Ye as any)("Optional content group not defined."), !0;
    if (((t as any).type as any) === ("OCG" as any)) return ((this.#e as any).has as any)((t as any).id) ? (((this.#e as any).get as any)((t as any).id) as any).visible : ((I as any)(`Optional content group not found: ${(t as any).id}`), !0);
    if (((t as any).type as any) === ("OCMD" as any)) {
      if ((t as any).expression) return (this.#a as any)((t as any).expression);
      if (!(t as any).policy || ((t as any).policy as any) === ("AnyOn" as any)) {
        for (const e of (t as any).ids) {
          if (!((this.#e as any).has as any)(e)) return (I as any)(`Optional content group not found: ${e}`), !0;
          if ((((this.#e as any).get as any)(e) as any).visible) return !0;
        }
        return !1;
      } else if (((t as any).policy as any) === ("AllOn" as any)) {
        for (const e of (t as any).ids) {
          if (!((this.#e as any).has as any)(e)) return (I as any)(`Optional content group not found: ${e}`), !0;
          if (!(((this.#e as any).get as any)(e) as any).visible) return !1;
        }
        return !0;
      } else if (((t as any).policy as any) === ("AnyOff" as any)) {
        for (const e of (t as any).ids) {
          if (!((this.#e as any).has as any)(e)) return (I as any)(`Optional content group not found: ${e}`), !0;
          if (!(((this.#e as any).get as any)(e) as any).visible) return !0;
        }
        return !1;
      } else if (((t as any).policy as any) === ("AllOff" as any)) {
        for (const e of (t as any).ids) {
          if (!((this.#e as any).has as any)(e)) return (I as any)(`Optional content group not found: ${e}`), !0;
          if ((((this.#e as any).get as any)(e) as any).visible) return !1;
        }
        return !0;
      }
      return (I as any)(`Unknown optional content policy ${(t as any).policy}.`), !0;
    }
    return (I as any)(`Unknown group type ${(t as any).type}.`), !0;
  }
  setVisibility(t: any, e: any = !0, s: any = !0): any {
    const i: any = ((this.#e as any).get as any)(t);
    if (!i) {
      (I as any)(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && ((i as any).rbGroups as any).length) for (const n of (i as any).rbGroups) for (const r of n) (r as any) !== (t as any) && ((this.#e as any).get as any)(r)?._setVisible(Jt, !1, !0);
    ((i as any)._setVisible as any)(Jt, !!e, !0), this.#t = null;
  }
  setOCGState({
    state: t,
    preserveRB: e
  }: any): any {
    let s: any;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const n: any = ((this.#e as any).get as any)(i);
      if (n) switch (s) {
        case "ON":
          ((this as any).setVisibility as any)(i, !0, e);
          break;
        case "OFF":
          ((this as any).setVisibility as any)(i, !1, e);
          break;
        case "Toggle":
          ((this as any).setVisibility as any)(i, !(n as any).visible, e);
          break;
      }
    }
    this.#t = null;
  }
  get hasInitialVisibility(): any {
    return (this.#i as any) === (null as any) || (((this as any).getHash as any)() as any) === (this.#i as any);
  }
  getOrder(): any {
    return (this.#e as any).size ? this.#s ? ((this.#s as any).slice as any)() : [...((this.#e as any).keys as any)()] : null;
  }
  getGroup(t: any): any {
    return ((this.#e as any).get as any)(t) || null;
  }
  getHash(): any {
    if ((this.#t as any) !== (null as any)) return this.#t;
    const t: any = new (Ei as any)();
    for (const [e, s] of this.#e) ((t as any).update as any)(`${e}:${(s as any).visible}`);
    return this.#t = ((t as any).hexdigest as any)();
  }
  [Symbol.iterator](): any {
    return ((this.#e as any).entries as any)();
  }
}
class tr {
  declare _rangeReaders: any;
  declare _fullRequestReader: any;
  declare _contentLength: any;
  declare _isRangeSupported: any;
  declare _isStreamingSupported: any;
  declare _pdfDataRangeTransport: any;
  declare _contentDispositionFilename: any;
  declare _progressiveDone: any;
  declare _queuedChunks: any;
  [key: string]: any;
  constructor(t: any, {
    disableRange: e = !1,
    disableStream: s = !1
  }: any) {
    (B as any)(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: i,
      initialData: n,
      progressiveDone: r,
      contentDispositionFilename: a
    }: any = t;
    if ((this as any)._queuedChunks = [], (this as any)._progressiveDone = r, (this as any)._contentDispositionFilename = a, (n?.length as any) > (0 as any)) {
      const o: any = n instanceof Uint8Array && ((n as any).byteLength as any) === (((n as any).buffer as any).byteLength as any) ? (n as any).buffer : (new (Uint8Array as any)(n) as any).buffer;
      (((this as any)._queuedChunks as any).push as any)(o);
    }
    (this as any)._pdfDataRangeTransport = t, (this as any)._isStreamingSupported = !s, (this as any)._isRangeSupported = !e, (this as any)._contentLength = i, (this as any)._fullRequestReader = null, (this as any)._rangeReaders = [], ((t as any).addRangeListener as any)((o: any, l: any): any => {
      ((this as any)._onReceiveData as any)({
        begin: o,
        chunk: l
      });
    }), ((t as any).addProgressListener as any)((o: any, l: any): any => {
      ((this as any)._onProgress as any)({
        loaded: o,
        total: l
      });
    }), ((t as any).addProgressiveReadListener as any)((o: any): any => {
      ((this as any)._onReceiveData as any)({
        chunk: o
      });
    }), ((t as any).addProgressiveDoneListener as any)((): any => {
      ((this as any)._onProgressiveDone as any)();
    }), ((t as any).transportReady as any)();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }: any): any {
    const s: any = e instanceof Uint8Array && ((e as any).byteLength as any) === (((e as any).buffer as any).byteLength as any) ? (e as any).buffer : (new (Uint8Array as any)(e) as any).buffer;
    if ((t as any) === (void 0 as any)) (this as any)._fullRequestReader ? (((this as any)._fullRequestReader as any)._enqueue as any)(s) : (((this as any)._queuedChunks as any).push as any)(s);else {
      const i: any = (((this as any)._rangeReaders as any).some as any)(function (this: any, n: any): any {
        return ((n as any)._begin as any) !== (t as any) ? !1 : (((n as any)._enqueue as any)(s), !0);
      });
      (B as any)(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength(): any {
    return (this as any)._fullRequestReader?._loaded ?? 0;
  }
  _onProgress(t: any): any {
    ((t as any).total as any) === (void 0 as any) ? ((this as any)._rangeReaders as any)[0]?.onProgress?.({
      loaded: (t as any).loaded
    }) : (this as any)._fullRequestReader?.onProgress?.({
      loaded: (t as any).loaded,
      total: (t as any).total
    });
  }
  _onProgressiveDone(): any {
    (this as any)._fullRequestReader?.progressiveDone(), (this as any)._progressiveDone = !0;
  }
  _removeRangeReader(t: any): any {
    const e: any = (((this as any)._rangeReaders as any).indexOf as any)(t);
    (e as any) >= (0 as any) && (((this as any)._rangeReaders as any).splice as any)(e, 1);
  }
  getFullReader(): any {
    (B as any)(!(this as any)._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t: any = (this as any)._queuedChunks;
    return (this as any)._queuedChunks = null, new (er as any)(this, t, (this as any)._progressiveDone, (this as any)._contentDispositionFilename);
  }
  getRangeReader(t: any, e: any): any {
    if ((e as any) <= ((this as any)._progressiveDataLength as any)) return null;
    const s: any = new (sr as any)(this, t, e);
    return (((this as any)._pdfDataRangeTransport as any).requestDataRange as any)(t, e), (((this as any)._rangeReaders as any).push as any)(s), s;
  }
  cancelAllRequests(t: any): any {
    (this as any)._fullRequestReader?.cancel(t);
    for (const e of (((this as any)._rangeReaders as any).slice as any)(0)) ((e as any).cancel as any)(t);
    (((this as any)._pdfDataRangeTransport as any).abort as any)();
  }
}
class er {
  declare onProgress: any;
  declare _headersReady: any;
  declare _requests: any;
  declare _loaded: any;
  declare _queuedChunks: any;
  declare _filename: any;
  declare _done: any;
  declare _stream: any;
  [key: string]: any;
  constructor(t: any, e: any, s: any = !1, i: any = null) {
    (this as any)._stream = t, (this as any)._done = s || !1, (this as any)._filename = (xs as any)(i) ? i : null, (this as any)._queuedChunks = e || [], (this as any)._loaded = 0;
    for (const n of (this as any)._queuedChunks) (this as any)._loaded += (n as any).byteLength;
    (this as any)._requests = [], (this as any)._headersReady = ((Promise as any).resolve as any)(), (t as any)._fullRequestReader = this, (this as any).onProgress = null;
  }
  _enqueue(t: any): any {
    (this as any)._done || ((((this as any)._requests as any).length as any) > (0 as any) ? (((((this as any)._requests as any).shift as any)() as any).resolve as any)({
      value: t,
      done: !1
    }) : (((this as any)._queuedChunks as any).push as any)(t), (this as any)._loaded += (t as any).byteLength);
  }
  get headersReady(): any {
    return (this as any)._headersReady;
  }
  get filename(): any {
    return (this as any)._filename;
  }
  get isRangeSupported(): any {
    return ((this as any)._stream as any)._isRangeSupported;
  }
  get isStreamingSupported(): any {
    return ((this as any)._stream as any)._isStreamingSupported;
  }
  get contentLength(): any {
    return ((this as any)._stream as any)._contentLength;
  }
  async read(): Promise<any> {
    if ((((this as any)._queuedChunks as any).length as any) > (0 as any)) return {
      value: (((this as any)._queuedChunks as any).shift as any)(),
      done: !1
    };
    if ((this as any)._done) return {
      value: void 0,
      done: !0
    };
    const t: any = ((Promise as any).withResolvers as any)();
    return (((this as any)._requests as any).push as any)(t), (t as any).promise;
  }
  cancel(t: any): any {
    (this as any)._done = !0;
    for (const e of (this as any)._requests) ((e as any).resolve as any)({
      value: void 0,
      done: !0
    });
    ((this as any)._requests as any).length = 0;
  }
  progressiveDone(): any {
    (this as any)._done || ((this as any)._done = !0);
  }
}
class sr {
  declare onProgress: any;
  declare _done: any;
  declare _requests: any;
  declare _queuedChunk: any;
  declare _end: any;
  declare _begin: any;
  declare _stream: any;
  [key: string]: any;
  constructor(t: any, e: any, s: any) {
    (this as any)._stream = t, (this as any)._begin = e, (this as any)._end = s, (this as any)._queuedChunk = null, (this as any)._requests = [], (this as any)._done = !1, (this as any).onProgress = null;
  }
  _enqueue(t: any): any {
    if (!(this as any)._done) {
      if ((((this as any)._requests as any).length as any) === (0 as any)) (this as any)._queuedChunk = t;else {
        (((((this as any)._requests as any).shift as any)() as any).resolve as any)({
          value: t,
          done: !1
        });
        for (const s of (this as any)._requests) ((s as any).resolve as any)({
          value: void 0,
          done: !0
        });
        ((this as any)._requests as any).length = 0;
      }
      (this as any)._done = !0, (((this as any)._stream as any)._removeRangeReader as any)(this);
    }
  }
  get isStreamingSupported(): any {
    return !1;
  }
  async read(): Promise<any> {
    if ((this as any)._queuedChunk) {
      const e: any = (this as any)._queuedChunk;
      return (this as any)._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if ((this as any)._done) return {
      value: void 0,
      done: !0
    };
    const t: any = ((Promise as any).withResolvers as any)();
    return (((this as any)._requests as any).push as any)(t), (t as any).promise;
  }
  cancel(t: any): any {
    (this as any)._done = !0;
    for (const e of (this as any)._requests) ((e as any).resolve as any)({
      value: void 0,
      done: !0
    });
    ((this as any)._requests as any).length = 0, (((this as any)._stream as any)._removeRangeReader as any)(this);
  }
}
function ir(this: any, d: any): any {
  let t: any = !0,
    e: any = (((s as any)("filename\\*", "i") as any).exec as any)(d);
  if (e) {
    e = (e as any)[1];
    let h: any = (a as any)(e);
    return h = (unescape as any)(h), h = (o as any)(h), h = (l as any)(h), (n as any)(h);
  }
  if (e = (r as any)(d), e) {
    const h: any = (l as any)(e);
    return (n as any)(h);
  }
  if (e = (((s as any)("filename", "i") as any).exec as any)(d), e) {
    e = (e as any)[1];
    let h: any = (a as any)(e);
    return h = (l as any)(h), (n as any)(h);
  }
  function s(this: any, h: any, c: any): any {
    return new (RegExp as any)((("(?:^|;)\\s*" as any) + (h as any) as any) + ('\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)' as any), c);
  }
  function i(this: any, h: any, c: any): any {
    if (h) {
      if (!((/^[\x00-\xFF]+$/ as any).test as any)(c)) return c;
      try {
        const u: any = new (TextDecoder as any)(h, {
            fatal: !0
          }),
          f: any = (Se as any)(c);
        c = ((u as any).decode as any)(f), t = !1;
      } catch {}
    }
    return c;
  }
  function n(this: any, h: any): any {
    return t && ((/[\x80-\xff]/ as any).test as any)(h) && (h = (i as any)("utf-8", h), t && (h = (i as any)("iso-8859-1", h))), h;
  }
  function r(this: any, h: any): any {
    const c: any = [];
    let u: any;
    const f: any = (s as any)("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; ((u = ((f as any).exec as any)(h)) as any) !== (null as any);) {
      let [, p, b, m]: any = u;
      if (p = (parseInt as any)(p, 10), p in c) {
        if ((p as any) === (0 as any)) break;
        continue;
      }
      (c as any)[p] = [b, m];
    }
    const g: any = [];
    for (let p: any = 0; (p as any) < ((c as any).length as any) && p in c; ++p) {
      let [b, m]: any = (c as any)[p];
      m = (a as any)(m), b && (m = (unescape as any)(m), (p as any) === (0 as any) && (m = (o as any)(m))), ((g as any).push as any)(m);
    }
    return ((g as any).join as any)("");
  }
  function a(this: any, h: any): any {
    if (((h as any).startsWith as any)('"')) {
      const c: any = ((((h as any).slice as any)(1) as any).split as any)('\\"');
      for (let u: any = 0; (u as any) < ((c as any).length as any); ++u) {
        const f: any = (((c as any)[u] as any).indexOf as any)('"');
        (f as any) !== (-1 as any) && ((c as any)[u] = (((c as any)[u] as any).slice as any)(0, f), (c as any).length = (u as any) + (1 as any)), (c as any)[u] = (((c as any)[u] as any).replaceAll as any)(/\\(.)/g, "$1");
      }
      h = ((c as any).join as any)('"');
    }
    return h;
  }
  function o(this: any, h: any): any {
    const c: any = ((h as any).indexOf as any)("'");
    if ((c as any) === (-1 as any)) return h;
    const u: any = ((h as any).slice as any)(0, c),
      g: any = ((((h as any).slice as any)((c as any) + (1 as any)) as any).replace as any)(/^[^']*'/, "");
    return (i as any)(u, g);
  }
  function l(this: any, h: any): any {
    return !((h as any).startsWith as any)("=?") || ((/[\x00-\x19\x80-\xff]/ as any).test as any)(h) ? h : ((h as any).replaceAll as any)(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (this: any, c: any, u: any, f: any, g: any): any {
      if ((f as any) === ("q" as any) || (f as any) === ("Q" as any)) return g = ((g as any).replaceAll as any)("_", " "), g = ((g as any).replaceAll as any)(/=([0-9a-fA-F]{2})/g, function (this: any, p: any, b: any): any {
        return ((String as any).fromCharCode as any)((parseInt as any)(b, 16));
      }), (i as any)(u, g);
      try {
        g = (atob as any)(g);
      } catch {}
      return (i as any)(u, g);
    });
  }
  return "";
}
function Ri(this: any, d: any, t: any): any {
  const e: any = new (Headers as any)();
  if (!d || !t || (typeof t as any) != ("object" as any)) return e;
  for (const s in t) {
    const i: any = (t as any)[s];
    (i as any) !== (void 0 as any) && ((e as any).append as any)(s, i);
  }
  return e;
}
function Je(this: any, d: any): any {
  return ((URL as any).parse as any)(d)?.origin ?? null;
}
function Di(this: any, {
  responseHeaders: d,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}: any): any {
  const i: any = {
      allowRangeRequests: !1,
      suggestedLength: void 0
    },
    n: any = (parseInt as any)(((d as any).get as any)("Content-Length"), 10);
  return !((Number as any).isInteger as any)(n) || ((i as any).suggestedLength = n, (n as any) <= ((2 as any) * (e as any) as any)) || s || !t || (((d as any).get as any)("Accept-Ranges") as any) !== ("bytes" as any) || ((((d as any).get as any)("Content-Encoding") || "identity") as any) !== ("identity" as any) || ((i as any).allowRangeRequests = !0), i;
}
function Li(this: any, d: any): any {
  const t: any = ((d as any).get as any)("Content-Disposition");
  if (t) {
    let e: any = (ir as any)(t);
    if (((e as any).includes as any)("%")) try {
      e = (decodeURIComponent as any)(e);
    } catch {}
    if ((xs as any)(e)) return e;
  }
  return null;
}
function Pe(this: any, d: any, t: any): any {
  return new (je as any)(`Unexpected server response (${d}) while retrieving PDF "${t}".`, d, (d as any) === (404 as any) || (d as any) === (0 as any) && ((t as any).startsWith as any)("file:"));
}
function Ii(this: any, d: any): any {
  return (d as any) === (200 as any) || (d as any) === (206 as any);
}
function Fi(this: any, d: any, t: any, e: any): any {
  return {
    method: "GET",
    headers: d,
    signal: (e as any).signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function Ni(this: any, d: any): any {
  return d instanceof Uint8Array ? (d as any).buffer : d instanceof ArrayBuffer ? d : ((I as any)(`getArrayBuffer - unexpected data format: ${d}`), (new (Uint8Array as any)(d) as any).buffer);
}
class nr {
  declare _rangeRequestReaders: any;
  declare _fullRequestReader: any;
  declare headers: any;
  declare isHttp: any;
  declare source: any;
  [key: string]: any;
  _responseOrigin: any = null;
  constructor(t: any) {
    (this as any).source = t, (this as any).isHttp = ((/^https?:/i as any).test as any)((t as any).url), (this as any).headers = (Ri as any)((this as any).isHttp, (t as any).httpHeaders), (this as any)._fullRequestReader = null, (this as any)._rangeRequestReaders = [];
  }
  get _progressiveDataLength(): any {
    return (this as any)._fullRequestReader?._loaded ?? 0;
  }
  getFullReader(): any {
    return (B as any)(!(this as any)._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), (this as any)._fullRequestReader = new (rr as any)(this), (this as any)._fullRequestReader;
  }
  getRangeReader(t: any, e: any): any {
    if ((e as any) <= ((this as any)._progressiveDataLength as any)) return null;
    const s: any = new (ar as any)(this, t, e);
    return (((this as any)._rangeRequestReaders as any).push as any)(s), s;
  }
  cancelAllRequests(t: any): any {
    (this as any)._fullRequestReader?.cancel(t);
    for (const e of (((this as any)._rangeRequestReaders as any).slice as any)(0)) ((e as any).cancel as any)(t);
  }
}
class rr {
  declare onProgress: any;
  declare _isRangeSupported: any;
  declare _isStreamingSupported: any;
  declare _abortController: any;
  declare _rangeChunkSize: any;
  declare _disableRange: any;
  declare _headersCapability: any;
  declare _contentLength: any;
  declare _withCredentials: any;
  declare _filename: any;
  declare _loaded: any;
  declare _reader: any;
  declare _stream: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any)._stream = t, (this as any)._reader = null, (this as any)._loaded = 0, (this as any)._filename = null;
    const e: any = (t as any).source;
    (this as any)._withCredentials = (e as any).withCredentials || !1, (this as any)._contentLength = (e as any).length, (this as any)._headersCapability = ((Promise as any).withResolvers as any)(), (this as any)._disableRange = (e as any).disableRange || !1, (this as any)._rangeChunkSize = (e as any).rangeChunkSize, !(this as any)._rangeChunkSize && !(this as any)._disableRange && ((this as any)._disableRange = !0), (this as any)._abortController = new (AbortController as any)(), (this as any)._isStreamingSupported = !(e as any).disableStream, (this as any)._isRangeSupported = !(e as any).disableRange;
    const s: any = new (Headers as any)((t as any).headers),
      i: any = (e as any).url;
    (((((fetch as any)(i, (Fi as any)(s, (this as any)._withCredentials, (this as any)._abortController)) as any).then as any)((n: any): any => {
      if ((t as any)._responseOrigin = (Je as any)((n as any).url), !(Ii as any)((n as any).status)) throw (Pe as any)((n as any).status, i);
      (this as any)._reader = (((n as any).body as any).getReader as any)(), (((this as any)._headersCapability as any).resolve as any)();
      const r: any = (n as any).headers,
        {
          allowRangeRequests: a,
          suggestedLength: o
        }: any = (Di as any)({
          responseHeaders: r,
          isHttp: (t as any).isHttp,
          rangeChunkSize: (this as any)._rangeChunkSize,
          disableRange: (this as any)._disableRange
        });
      (this as any)._isRangeSupported = a, (this as any)._contentLength = o || (this as any)._contentLength, (this as any)._filename = (Li as any)(r), !(this as any)._isStreamingSupported && (this as any)._isRangeSupported && ((this as any).cancel as any)(new (Ht as any)("Streaming is disabled."));
    }) as any).catch as any)(((this as any)._headersCapability as any).reject), (this as any).onProgress = null;
  }
  get headersReady(): any {
    return ((this as any)._headersCapability as any).promise;
  }
  get filename(): any {
    return (this as any)._filename;
  }
  get contentLength(): any {
    return (this as any)._contentLength;
  }
  get isRangeSupported(): any {
    return (this as any)._isRangeSupported;
  }
  get isStreamingSupported(): any {
    return (this as any)._isStreamingSupported;
  }
  async read(): Promise<any> {
    await ((this as any)._headersCapability as any).promise;
    const {
      value: t,
      done: e
    }: any = await (((this as any)._reader as any).read as any)();
    return e ? {
      value: t,
      done: e
    } : ((this as any)._loaded += (t as any).byteLength, (this as any).onProgress?.({
      loaded: (this as any)._loaded,
      total: (this as any)._contentLength
    }), {
      value: (Ni as any)(t),
      done: !1
    });
  }
  cancel(t: any): any {
    (this as any)._reader?.cancel(t), (((this as any)._abortController as any).abort as any)();
  }
}
class ar {
  declare onProgress: any;
  declare _abortController: any;
  declare _isStreamingSupported: any;
  declare _readCapability: any;
  declare _withCredentials: any;
  declare _loaded: any;
  declare _reader: any;
  declare _stream: any;
  [key: string]: any;
  constructor(t: any, e: any, s: any) {
    (this as any)._stream = t, (this as any)._reader = null, (this as any)._loaded = 0;
    const i: any = (t as any).source;
    (this as any)._withCredentials = (i as any).withCredentials || !1, (this as any)._readCapability = ((Promise as any).withResolvers as any)(), (this as any)._isStreamingSupported = !(i as any).disableStream, (this as any)._abortController = new (AbortController as any)();
    const n: any = new (Headers as any)((t as any).headers);
    ((n as any).append as any)("Range", `bytes=${e}-${(s as any) - (1 as any)}`);
    const r: any = (i as any).url;
    (((((fetch as any)(r, (Fi as any)(n, (this as any)._withCredentials, (this as any)._abortController)) as any).then as any)((a: any): any => {
      const o: any = (Je as any)((a as any).url);
      if ((o as any) !== ((t as any)._responseOrigin as any)) throw new (Error as any)(`Expected range response-origin "${o}" to match "${(t as any)._responseOrigin}".`);
      if (!(Ii as any)((a as any).status)) throw (Pe as any)((a as any).status, r);
      (((this as any)._readCapability as any).resolve as any)(), (this as any)._reader = (((a as any).body as any).getReader as any)();
    }) as any).catch as any)(((this as any)._readCapability as any).reject), (this as any).onProgress = null;
  }
  get isStreamingSupported(): any {
    return (this as any)._isStreamingSupported;
  }
  async read(): Promise<any> {
    await ((this as any)._readCapability as any).promise;
    const {
      value: t,
      done: e
    }: any = await (((this as any)._reader as any).read as any)();
    return e ? {
      value: t,
      done: e
    } : ((this as any)._loaded += (t as any).byteLength, (this as any).onProgress?.({
      loaded: (this as any)._loaded
    }), {
      value: (Ni as any)(t),
      done: !1
    });
  }
  cancel(t: any): any {
    (this as any)._reader?.cancel(t), (((this as any)._abortController as any).abort as any)();
  }
}
const hs: number = 200,
  cs: number = 206;
function or(this: any, d: any): any {
  const t: any = (d as any).response;
  return (typeof t as any) != ("string" as any) ? t : ((Se as any)(t) as any).buffer;
}
class lr {
  declare pendingRequests: any;
  declare currXhrId: any;
  declare withCredentials: any;
  declare headers: any;
  declare isHttp: any;
  declare url: any;
  [key: string]: any;
  _responseOrigin: any = null;
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: s
  }: any) {
    (this as any).url = t, (this as any).isHttp = ((/^https?:/i as any).test as any)(t), (this as any).headers = (Ri as any)((this as any).isHttp, e), (this as any).withCredentials = s || !1, (this as any).currXhrId = 0, (this as any).pendingRequests = ((Object as any).create as any)(null);
  }
  request(t: any): any {
    const e: any = new (XMLHttpRequest as any)(),
      s: any = (this as any).currXhrId++,
      i: any = ((this as any).pendingRequests as any)[s] = {
        xhr: e
      };
    ((e as any).open as any)("GET", (this as any).url), (e as any).withCredentials = (this as any).withCredentials;
    for (const [n, r] of (this as any).headers) ((e as any).setRequestHeader as any)(n, r);
    return (this as any).isHttp && "begin" in t && "end" in t ? (((e as any).setRequestHeader as any)("Range", `bytes=${(t as any).begin}-${((t as any).end as any) - (1 as any)}`), (i as any).expectedStatus = cs) : (i as any).expectedStatus = hs, (e as any).responseType = "arraybuffer", (B as any)((t as any).onError, "Expected `onError` callback to be provided."), (e as any).onerror = (): any => {
      ((t as any).onError as any)((e as any).status);
    }, (e as any).onreadystatechange = (((this as any).onStateChange as any).bind as any)(this, s), (e as any).onprogress = (((this as any).onProgress as any).bind as any)(this, s), (i as any).onHeadersReceived = (t as any).onHeadersReceived, (i as any).onDone = (t as any).onDone, (i as any).onError = (t as any).onError, (i as any).onProgress = (t as any).onProgress, ((e as any).send as any)(null), s;
  }
  onProgress(t: any, e: any): any {
    const s: any = ((this as any).pendingRequests as any)[t];
    s && (s as any).onProgress?.(e);
  }
  onStateChange(t: any, e: any): any {
    const s: any = ((this as any).pendingRequests as any)[t];
    if (!s) return;
    const i: any = (s as any).xhr;
    if (((i as any).readyState as any) >= (2 as any) && (s as any).onHeadersReceived && (((s as any).onHeadersReceived as any)(), delete (s as any).onHeadersReceived), ((i as any).readyState as any) !== (4 as any) || !(t in (this as any).pendingRequests)) return;
    if (delete ((this as any).pendingRequests as any)[t], ((i as any).status as any) === (0 as any) && (this as any).isHttp) {
      ((s as any).onError as any)((i as any).status);
      return;
    }
    const n: any = (i as any).status || hs;
    if (!((n as any) === (hs as any) && ((s as any).expectedStatus as any) === (cs as any)) && (n as any) !== ((s as any).expectedStatus as any)) {
      ((s as any).onError as any)((i as any).status);
      return;
    }
    const a: any = (or as any)(i);
    if ((n as any) === (cs as any)) {
      const o: any = ((i as any).getResponseHeader as any)("Content-Range"),
        l: any = ((/bytes (\d+)-(\d+)\/(\d+)/ as any).exec as any)(o);
      l ? ((s as any).onDone as any)({
        begin: (parseInt as any)((l as any)[1], 10),
        chunk: a
      }) : ((I as any)('Missing or invalid "Content-Range" header.'), ((s as any).onError as any)(0));
    } else a ? ((s as any).onDone as any)({
      begin: 0,
      chunk: a
    }) : ((s as any).onError as any)((i as any).status);
  }
  getRequestXhr(t: any): any {
    return (((this as any).pendingRequests as any)[t] as any).xhr;
  }
  isPendingRequest(t: any): any {
    return t in (this as any).pendingRequests;
  }
  abortRequest(t: any): any {
    const e: any = (((this as any).pendingRequests as any)[t] as any).xhr;
    delete ((this as any).pendingRequests as any)[t], ((e as any).abort as any)();
  }
}
class hr {
  declare _rangeRequestReaders: any;
  declare _fullRequestReader: any;
  declare _rangeChunkSize: any;
  declare _manager: any;
  declare _source: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any)._source = t, (this as any)._manager = new (lr as any)(t), (this as any)._rangeChunkSize = (t as any).rangeChunkSize, (this as any)._fullRequestReader = null, (this as any)._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t: any): any {
    const e: any = (((this as any)._rangeRequestReaders as any).indexOf as any)(t);
    (e as any) >= (0 as any) && (((this as any)._rangeRequestReaders as any).splice as any)(e, 1);
  }
  getFullReader(): any {
    return (B as any)(!(this as any)._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), (this as any)._fullRequestReader = new (cr as any)((this as any)._manager, (this as any)._source), (this as any)._fullRequestReader;
  }
  getRangeReader(t: any, e: any): any {
    const s: any = new (dr as any)((this as any)._manager, t, e);
    return (s as any).onClosed = (((this as any)._onRangeRequestReaderClosed as any).bind as any)(this), (((this as any)._rangeRequestReaders as any).push as any)(s), s;
  }
  cancelAllRequests(t: any): any {
    (this as any)._fullRequestReader?.cancel(t);
    for (const e of (((this as any)._rangeRequestReaders as any).slice as any)(0)) ((e as any).cancel as any)(t);
  }
}
class cr {
  declare _fullRequestReader: any;
  declare onProgress: any;
  declare _filename: any;
  declare _storedError: any;
  declare _done: any;
  declare _requests: any;
  declare _cachedChunks: any;
  declare _isRangeSupported: any;
  declare _isStreamingSupported: any;
  declare _rangeChunkSize: any;
  declare _contentLength: any;
  declare _disableRange: any;
  declare _headersCapability: any;
  declare _fullRequestId: any;
  declare _url: any;
  declare _manager: any;
  [key: string]: any;
  constructor(t: any, e: any) {
    (this as any)._manager = t, (this as any)._url = (e as any).url, (this as any)._fullRequestId = ((t as any).request as any)({
      onHeadersReceived: (((this as any)._onHeadersReceived as any).bind as any)(this),
      onDone: (((this as any)._onDone as any).bind as any)(this),
      onError: (((this as any)._onError as any).bind as any)(this),
      onProgress: (((this as any)._onProgress as any).bind as any)(this)
    }), (this as any)._headersCapability = ((Promise as any).withResolvers as any)(), (this as any)._disableRange = (e as any).disableRange || !1, (this as any)._contentLength = (e as any).length, (this as any)._rangeChunkSize = (e as any).rangeChunkSize, !(this as any)._rangeChunkSize && !(this as any)._disableRange && ((this as any)._disableRange = !0), (this as any)._isStreamingSupported = !1, (this as any)._isRangeSupported = !1, (this as any)._cachedChunks = [], (this as any)._requests = [], (this as any)._done = !1, (this as any)._storedError = void 0, (this as any)._filename = null, (this as any).onProgress = null;
  }
  _onHeadersReceived(): any {
    const t: any = (this as any)._fullRequestId,
      e: any = (((this as any)._manager as any).getRequestXhr as any)(t);
    ((this as any)._manager as any)._responseOrigin = (Je as any)((e as any).responseURL);
    const s: any = ((e as any).getAllResponseHeaders as any)(),
      i: any = new (Headers as any)(s ? ((((((((s as any).trimStart as any)() as any).replace as any)(/[^\S ]+$/, "") as any).split as any)(/[\r\n]+/) as any).map as any)((a: any): any => {
        const [o, ...l]: any = ((a as any).split as any)(": ");
        return [o, ((l as any).join as any)(": ")];
      }) : []),
      {
        allowRangeRequests: n,
        suggestedLength: r
      }: any = (Di as any)({
        responseHeaders: i,
        isHttp: ((this as any)._manager as any).isHttp,
        rangeChunkSize: (this as any)._rangeChunkSize,
        disableRange: (this as any)._disableRange
      });
    n && ((this as any)._isRangeSupported = !0), (this as any)._contentLength = r || (this as any)._contentLength, (this as any)._filename = (Li as any)(i), (this as any)._isRangeSupported && (((this as any)._manager as any).abortRequest as any)(t), (((this as any)._headersCapability as any).resolve as any)();
  }
  _onDone(t: any): any {
    if (t && ((((this as any)._requests as any).length as any) > (0 as any) ? (((((this as any)._requests as any).shift as any)() as any).resolve as any)({
      value: (t as any).chunk,
      done: !1
    }) : (((this as any)._cachedChunks as any).push as any)((t as any).chunk)), (this as any)._done = !0, !((((this as any)._cachedChunks as any).length as any) > (0 as any))) {
      for (const e of (this as any)._requests) ((e as any).resolve as any)({
        value: void 0,
        done: !0
      });
      ((this as any)._requests as any).length = 0;
    }
  }
  _onError(t: any): any {
    (this as any)._storedError = (Pe as any)(t, (this as any)._url), (((this as any)._headersCapability as any).reject as any)((this as any)._storedError);
    for (const e of (this as any)._requests) ((e as any).reject as any)((this as any)._storedError);
    ((this as any)._requests as any).length = 0, ((this as any)._cachedChunks as any).length = 0;
  }
  _onProgress(t: any): any {
    (this as any).onProgress?.({
      loaded: (t as any).loaded,
      total: (t as any).lengthComputable ? (t as any).total : (this as any)._contentLength
    });
  }
  get filename(): any {
    return (this as any)._filename;
  }
  get isRangeSupported(): any {
    return (this as any)._isRangeSupported;
  }
  get isStreamingSupported(): any {
    return (this as any)._isStreamingSupported;
  }
  get contentLength(): any {
    return (this as any)._contentLength;
  }
  get headersReady(): any {
    return ((this as any)._headersCapability as any).promise;
  }
  async read(): Promise<any> {
    if (await ((this as any)._headersCapability as any).promise, (this as any)._storedError) throw (this as any)._storedError;
    if ((((this as any)._cachedChunks as any).length as any) > (0 as any)) return {
      value: (((this as any)._cachedChunks as any).shift as any)(),
      done: !1
    };
    if ((this as any)._done) return {
      value: void 0,
      done: !0
    };
    const t: any = ((Promise as any).withResolvers as any)();
    return (((this as any)._requests as any).push as any)(t), (t as any).promise;
  }
  cancel(t: any): any {
    (this as any)._done = !0, (((this as any)._headersCapability as any).reject as any)(t);
    for (const e of (this as any)._requests) ((e as any).resolve as any)({
      value: void 0,
      done: !0
    });
    ((this as any)._requests as any).length = 0, (((this as any)._manager as any).isPendingRequest as any)((this as any)._fullRequestId) && (((this as any)._manager as any).abortRequest as any)((this as any)._fullRequestId), (this as any)._fullRequestReader = null;
  }
}
class dr {
  declare onClosed: any;
  declare onProgress: any;
  declare _storedError: any;
  declare _done: any;
  declare _queuedChunk: any;
  declare _requests: any;
  declare _requestId: any;
  declare _url: any;
  declare _manager: any;
  [key: string]: any;
  constructor(t: any, e: any, s: any) {
    (this as any)._manager = t, (this as any)._url = (t as any).url, (this as any)._requestId = ((t as any).request as any)({
      begin: e,
      end: s,
      onHeadersReceived: (((this as any)._onHeadersReceived as any).bind as any)(this),
      onDone: (((this as any)._onDone as any).bind as any)(this),
      onError: (((this as any)._onError as any).bind as any)(this),
      onProgress: (((this as any)._onProgress as any).bind as any)(this)
    }), (this as any)._requests = [], (this as any)._queuedChunk = null, (this as any)._done = !1, (this as any)._storedError = void 0, (this as any).onProgress = null, (this as any).onClosed = null;
  }
  _onHeadersReceived(): any {
    const t: any = (Je as any)((((this as any)._manager as any).getRequestXhr as any)((this as any)._requestId)?.responseURL);
    (t as any) !== (((this as any)._manager as any)._responseOrigin as any) && ((this as any)._storedError = new (Error as any)(`Expected range response-origin "${t}" to match "${((this as any)._manager as any)._responseOrigin}".`), ((this as any)._onError as any)(0));
  }
  _close(): any {
    (this as any).onClosed?.(this);
  }
  _onDone(t: any): any {
    const e: any = (t as any).chunk;
    (((this as any)._requests as any).length as any) > (0 as any) ? (((((this as any)._requests as any).shift as any)() as any).resolve as any)({
      value: e,
      done: !1
    }) : (this as any)._queuedChunk = e, (this as any)._done = !0;
    for (const s of (this as any)._requests) ((s as any).resolve as any)({
      value: void 0,
      done: !0
    });
    ((this as any)._requests as any).length = 0, ((this as any)._close as any)();
  }
  _onError(t: any): any {
    (this as any)._storedError ??= (Pe as any)(t, (this as any)._url);
    for (const e of (this as any)._requests) ((e as any).reject as any)((this as any)._storedError);
    ((this as any)._requests as any).length = 0, (this as any)._queuedChunk = null;
  }
  _onProgress(t: any): any {
    (this as any).isStreamingSupported || (this as any).onProgress?.({
      loaded: (t as any).loaded
    });
  }
  get isStreamingSupported(): any {
    return !1;
  }
  async read(): Promise<any> {
    if ((this as any)._storedError) throw (this as any)._storedError;
    if (((this as any)._queuedChunk as any) !== (null as any)) {
      const e: any = (this as any)._queuedChunk;
      return (this as any)._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if ((this as any)._done) return {
      value: void 0,
      done: !0
    };
    const t: any = ((Promise as any).withResolvers as any)();
    return (((this as any)._requests as any).push as any)(t), (t as any).promise;
  }
  cancel(t: any): any {
    (this as any)._done = !0;
    for (const e of (this as any)._requests) ((e as any).resolve as any)({
      value: void 0,
      done: !0
    });
    ((this as any)._requests as any).length = 0, (((this as any)._manager as any).isPendingRequest as any)((this as any)._requestId) && (((this as any)._manager as any).abortRequest as any)((this as any)._requestId), ((this as any)._close as any)();
  }
}
const ur: any = /^[a-z][a-z0-9\-+.]+:/i;
function fr(this: any, d: any): any {
  if (((ur as any).test as any)(d)) return new (URL as any)(d);
  const t: any = ((process as any).getBuiltinModule as any)("url");
  return new (URL as any)(((t as any).pathToFileURL as any)(d));
}
class pr {
  declare _rangeRequestReaders: any;
  declare _fullRequestReader: any;
  declare url: any;
  declare source: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any).source = t, (this as any).url = (fr as any)((t as any).url), (B as any)((((this as any).url as any).protocol as any) === ("file:" as any), "PDFNodeStream only supports file:// URLs."), (this as any)._fullRequestReader = null, (this as any)._rangeRequestReaders = [];
  }
  get _progressiveDataLength(): any {
    return (this as any)._fullRequestReader?._loaded ?? 0;
  }
  getFullReader(): any {
    return (B as any)(!(this as any)._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), (this as any)._fullRequestReader = new (gr as any)(this), (this as any)._fullRequestReader;
  }
  getRangeReader(t: any, e: any): any {
    if ((e as any) <= ((this as any)._progressiveDataLength as any)) return null;
    const s: any = new (mr as any)(this, t, e);
    return (((this as any)._rangeRequestReaders as any).push as any)(s), s;
  }
  cancelAllRequests(t: any): any {
    (this as any)._fullRequestReader?.cancel(t);
    for (const e of (((this as any)._rangeRequestReaders as any).slice as any)(0)) ((e as any).cancel as any)(t);
  }
}
class gr {
  declare _headersCapability: any;
  declare _readCapability: any;
  declare _readableStream: any;
  declare _isRangeSupported: any;
  declare _isStreamingSupported: any;
  declare _rangeChunkSize: any;
  declare _disableRange: any;
  declare _filename: any;
  declare _loaded: any;
  declare _contentLength: any;
  declare onProgress: any;
  declare _storedError: any;
  declare _done: any;
  declare _url: any;
  [key: string]: any;
  constructor(t: any) {
    (this as any)._url = (t as any).url, (this as any)._done = !1, (this as any)._storedError = null, (this as any).onProgress = null;
    const e: any = (t as any).source;
    (this as any)._contentLength = (e as any).length, (this as any)._loaded = 0, (this as any)._filename = null, (this as any)._disableRange = (e as any).disableRange || !1, (this as any)._rangeChunkSize = (e as any).rangeChunkSize, !(this as any)._rangeChunkSize && !(this as any)._disableRange && ((this as any)._disableRange = !0), (this as any)._isStreamingSupported = !(e as any).disableStream, (this as any)._isRangeSupported = !(e as any).disableRange, (this as any)._readableStream = null, (this as any)._readCapability = ((Promise as any).withResolvers as any)(), (this as any)._headersCapability = ((Promise as any).withResolvers as any)();
    const s: any = ((process as any).getBuiltinModule as any)("fs");
    (((((s as any).promises as any).lstat as any)((this as any)._url) as any).then as any)((i: any): any => {
      (this as any)._contentLength = (i as any).size, ((this as any)._setReadableStream as any)(((s as any).createReadStream as any)((this as any)._url)), (((this as any)._headersCapability as any).resolve as any)();
    }, (i: any): any => {
      ((i as any).code as any) === ("ENOENT" as any) && (i = (Pe as any)(0, ((this as any)._url as any).href)), (this as any)._storedError = i, (((this as any)._headersCapability as any).reject as any)(i);
    });
  }
  get headersReady(): any {
    return ((this as any)._headersCapability as any).promise;
  }
  get filename(): any {
    return (this as any)._filename;
  }
  get contentLength(): any {
    return (this as any)._contentLength;
  }
  get isRangeSupported(): any {
    return (this as any)._isRangeSupported;
  }
  get isStreamingSupported(): any {
    return (this as any)._isStreamingSupported;
  }
  async read(): Promise<any> {
    if (await ((this as any)._readCapability as any).promise, (this as any)._done) return {
      value: void 0,
      done: !0
    };
    if ((this as any)._storedError) throw (this as any)._storedError;
    const t: any = (((this as any)._readableStream as any).read as any)();
    return (t as any) === (null as any) ? ((this as any)._readCapability = ((Promise as any).withResolvers as any)(), ((this as any).read as any)()) : ((this as any)._loaded += (t as any).length, (this as any).onProgress?.({
      loaded: (this as any)._loaded,
      total: (this as any)._contentLength
    }), {
      value: (new (Uint8Array as any)(t) as any).buffer,
      done: !1
    });
  }
  cancel(t: any): any {
    if (!(this as any)._readableStream) {
      ((this as any)._error as any)(t);
      return;
    }
    (((this as any)._readableStream as any).destroy as any)(t);
  }
  _error(t: any): any {
    (this as any)._storedError = t, (((this as any)._readCapability as any).resolve as any)();
  }
  _setReadableStream(t: any): any {
    (this as any)._readableStream = t, ((t as any).on as any)("readable", (): any => {
      (((this as any)._readCapability as any).resolve as any)();
    }), ((t as any).on as any)("end", (): any => {
      ((t as any).destroy as any)(), (this as any)._done = !0, (((this as any)._readCapability as any).resolve as any)();
    }), ((t as any).on as any)("error", (e: any): any => {
      ((this as any)._error as any)(e);
    }), !(this as any)._isStreamingSupported && (this as any)._isRangeSupported && ((this as any)._error as any)(new (Ht as any)("streaming is disabled")), (this as any)._storedError && (((this as any)._readableStream as any).destroy as any)((this as any)._storedError);
  }
}
class mr {
  declare _isStreamingSupported: any;
  declare _readCapability: any;
  declare _readableStream: any;
  declare _loaded: any;
  declare onProgress: any;
  declare _storedError: any;
  declare _done: any;
  declare _url: any;
  [key: string]: any;
  constructor(t: any, e: any, s: any) {
    (this as any)._url = (t as any).url, (this as any)._done = !1, (this as any)._storedError = null, (this as any).onProgress = null, (this as any)._loaded = 0, (this as any)._readableStream = null, (this as any)._readCapability = ((Promise as any).withResolvers as any)();
    const i: any = (t as any).source;
    (this as any)._isStreamingSupported = !(i as any).disableStream;
    const n: any = ((process as any).getBuiltinModule as any)("fs");
    ((this as any)._setReadableStream as any)(((n as any).createReadStream as any)((this as any)._url, {
      start: e,
      end: (s as any) - (1 as any)
    }));
  }
  get isStreamingSupported(): any {
    return (this as any)._isStreamingSupported;
  }
  async read(): Promise<any> {
    if (await ((this as any)._readCapability as any).promise, (this as any)._done) return {
      value: void 0,
      done: !0
    };
    if ((this as any)._storedError) throw (this as any)._storedError;
    const t: any = (((this as any)._readableStream as any).read as any)();
    return (t as any) === (null as any) ? ((this as any)._readCapability = ((Promise as any).withResolvers as any)(), ((this as any).read as any)()) : ((this as any)._loaded += (t as any).length, (this as any).onProgress?.({
      loaded: (this as any)._loaded
    }), {
      value: (new (Uint8Array as any)(t) as any).buffer,
      done: !1
    });
  }
  cancel(t: any): any {
    if (!(this as any)._readableStream) {
      ((this as any)._error as any)(t);
      return;
    }
    (((this as any)._readableStream as any).destroy as any)(t);
  }
  _error(t: any): any {
    (this as any)._storedError = t, (((this as any)._readCapability as any).resolve as any)();
  }
  _setReadableStream(t: any): any {
    (this as any)._readableStream = t, ((t as any).on as any)("readable", (): any => {
      (((this as any)._readCapability as any).resolve as any)();
    }), ((t as any).on as any)("end", (): any => {
      ((t as any).destroy as any)(), (this as any)._done = !0, (((this as any)._readCapability as any).resolve as any)();
    }), ((t as any).on as any)("error", (e: any): any => {
      ((this as any)._error as any)(e);
    }), (this as any)._storedError && (((this as any)._readableStream as any).destroy as any)((this as any)._storedError);
  }
}
const ce: any = (Symbol as any)("INITIAL_DATA");
class Oi {
  [key: string]: any;
  #t: any = ((Object as any).create as any)(null);
  #e(t: any): any {
    return (this.#t as any)[t] ||= {
      ...((Promise as any).withResolvers as any)(),
      data: ce
    };
  }
  get(t: any, e: any = null): any {
    if (e) {
      const i: any = (this.#e as any)(t);
      return (((i as any).promise as any).then as any)((): any => (e as any)((i as any).data)), null;
    }
    const s: any = (this.#t as any)[t];
    if (!s || ((s as any).data as any) === (ce as any)) throw new (Error as any)(`Requesting object that isn't resolved yet ${t}.`);
    return (s as any).data;
  }
  has(t: any): any {
    const e: any = (this.#t as any)[t];
    return !!e && ((e as any).data as any) !== (ce as any);
  }
  delete(t: any): any {
    const e: any = (this.#t as any)[t];
    return !e || ((e as any).data as any) === (ce as any) ? !1 : (delete (this.#t as any)[t], !0);
  }
  resolve(t: any, e: any = null): any {
    const s: any = (this.#e as any)(t);
    (s as any).data = e, ((s as any).resolve as any)();
  }
  clear(): any {
    for (const t in this.#t) {
      const {
        data: e
      }: any = (this.#t as any)[t];
      e?.bitmap?.close();
    }
    this.#t = ((Object as any).create as any)(null);
  }
  *[Symbol.iterator](): Generator<any, any, any> {
    for (const t in this.#t) {
      const {
        data: e
      }: any = (this.#t as any)[t];
      (e as any) !== (ce as any) && (yield [t, e]);
    }
  }
}
const br: number = 1e5,
  ui: number = 30;
class ht {
  [key: string]: any;
  #t: any = ((Promise as any).withResolvers as any)();
  #e: any = null;
  #i: any = !1;
  #s: any = !!(globalThis as any).FontInspector?.enabled;
  #a: any = null;
  #n: any = null;
  #r: any = 0;
  #o: any = 0;
  #h: any = null;
  #l: any = null;
  #u: any = 0;
  #d: any = 0;
  #f: any = ((Object as any).create as any)(null);
  #m: any = [];
  #p: any = null;
  #c: any = [];
  #g: any = new (WeakMap as any)();
  #b: any = null;
  static #A: any = new (Map as any)();
  static #y: any = new (Map as any)();
  static #C: any = new (WeakMap as any)();
  static #S: any = null;
  static #w: any = new (Set as any)();
  constructor({
    textContentSource: t,
    container: e,
    viewport: s
  }: any) {
    if (t instanceof ReadableStream) this.#p = t;else if ((typeof t as any) == ("object" as any)) this.#p = new (ReadableStream as any)({
      start(o: any): any {
        ((o as any).enqueue as any)(t), ((o as any).close as any)();
      }
    });else throw new (Error as any)('No "textContentSource" parameter specified.');
    this.#e = this.#l = e, this.#d = ((s as any).scale as any) * ((kt as any).pixelRatio as any), this.#u = (s as any).rotation, this.#n = {
      div: null,
      properties: null,
      ctx: null
    };
    const {
      pageWidth: i,
      pageHeight: n,
      pageX: r,
      pageY: a
    }: any = (s as any).rawDims;
    this.#b = [1, 0, 0, -1, -r, (a as any) + (n as any)], this.#o = i, this.#r = n, (ht.#k as any)(), (Wt as any)(e, s), (((((this.#t as any).promise as any).finally as any)((): any => {
      ((ht.#w as any).delete as any)(this), this.#n = null, this.#f = null;
    }) as any).catch as any)((): any => {});
  }
  static get fontFamilyMap(): any {
    const {
      isWindows: t,
      isFirefox: e
    }: any = (ot as any).platform;
    return (N as any)(this, "fontFamilyMap", new (Map as any)([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render(): any {
    const t: any = (): any => {
      ((((this.#h as any).read as any)() as any).then as any)(({
        value: e,
        done: s
      }: any): any => {
        if (s) {
          ((this.#t as any).resolve as any)();
          return;
        }
        this.#a ??= (e as any).lang, ((Object as any).assign as any)(this.#f, (e as any).styles), (this.#T as any)((e as any).items), (t as any)();
      }, (this.#t as any).reject);
    };
    return this.#h = ((this.#p as any).getReader as any)(), ((ht.#w as any).add as any)(this), (t as any)(), (this.#t as any).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }: any): any {
    const s: any = ((t as any).scale as any) * ((kt as any).pixelRatio as any),
      i: any = (t as any).rotation;
    if ((i as any) !== (this.#u as any) && (e?.(), this.#u = i, (Wt as any)(this.#l, {
      rotation: i
    })), (s as any) !== (this.#d as any)) {
      e?.(), this.#d = s;
      const n: any = {
        div: null,
        properties: null,
        ctx: (ht.#M as any)(this.#a)
      };
      for (const r of this.#c) (n as any).properties = ((this.#g as any).get as any)(r), (n as any).div = r, (this.#E as any)(n);
    }
  }
  cancel(): any {
    const t: any = new (Ht as any)("TextLayer task cancelled.");
    this.#h?.cancel(t).catch((): any => {}), this.#h = null, ((this.#t as any).reject as any)(t);
  }
  get textDivs(): any {
    return this.#c;
  }
  get textContentItemsStr(): any {
    return this.#m;
  }
  #T(t: any): any {
    if (this.#i) return;
    (this.#n as any).ctx ??= (ht.#M as any)(this.#a);
    const e: any = this.#c,
      s: any = this.#m;
    for (const i of t) {
      if (((e as any).length as any) > (br as any)) {
        (I as any)("Ignoring additional textDivs for performance reasons."), this.#i = !0;
        return;
      }
      if (((i as any).str as any) === (void 0 as any)) {
        if (((i as any).type as any) === ("beginMarkedContentProps" as any) || ((i as any).type as any) === ("beginMarkedContent" as any)) {
          const n: any = this.#e;
          this.#e = ((document as any).createElement as any)("span"), (((this.#e as any).classList as any).add as any)("markedContent"), (i as any).id && ((this.#e as any).setAttribute as any)("id", `${(i as any).id}`), ((n as any).append as any)(this.#e);
        } else ((i as any).type as any) === ("endMarkedContent" as any) && (this.#e = (this.#e as any).parentNode);
        continue;
      }
      ((s as any).push as any)((i as any).str), (this.#_ as any)(i);
    }
  }
  #_(t: any): any {
    const e: any = ((document as any).createElement as any)("span"),
      s: any = {
        angle: 0,
        canvasWidth: 0,
        hasText: ((t as any).str as any) !== ("" as any),
        hasEOL: (t as any).hasEOL,
        fontSize: 0
      };
    ((this.#c as any).push as any)(e);
    const i: any = ((P as any).transform as any)(this.#b, (t as any).transform);
    let n: any = ((Math as any).atan2 as any)((i as any)[1], (i as any)[0]);
    const r: any = (this.#f as any)[(t as any).fontName];
    (r as any).vertical && (n += ((Math as any).PI as any) / (2 as any));
    let a: any = this.#s && (r as any).fontSubstitution || (r as any).fontFamily;
    a = (((ht as any).fontFamilyMap as any).get as any)(a) || a;
    const o: any = ((Math as any).hypot as any)((i as any)[2], (i as any)[3]),
      l: any = (o as any) * ((ht.#O as any)(a, r, this.#a) as any);
    let h: any, c: any;
    (n as any) === (0 as any) ? (h = (i as any)[4], c = ((i as any)[5] as any) - (l as any)) : (h = ((i as any)[4] as any) + ((l as any) * (((Math as any).sin as any)(n) as any) as any), c = ((i as any)[5] as any) - ((l as any) * (((Math as any).cos as any)(n) as any) as any));
    const u: string = "calc(var(--total-scale-factor) *",
      f: any = (e as any).style;
    (this.#e as any) === (this.#l as any) ? ((f as any).left = `${((((100 as any) * (h as any) as any) / (this.#o as any) as any).toFixed as any)(2)}%`, (f as any).top = `${((((100 as any) * (c as any) as any) / (this.#r as any) as any).toFixed as any)(2)}%`) : ((f as any).left = `${u}${((h as any).toFixed as any)(2)}px)`, (f as any).top = `${u}${((c as any).toFixed as any)(2)}px)`), (f as any).fontSize = `${u}${(((ht.#S as any) * (o as any) as any).toFixed as any)(2)}px)`, (f as any).fontFamily = a, (s as any).fontSize = o, ((e as any).setAttribute as any)("role", "presentation"), (e as any).textContent = (t as any).str, (e as any).dir = (t as any).dir, this.#s && (((e as any).dataset as any).fontName = (r as any).fontSubstitutionLoadedName || (t as any).fontName), (n as any) !== (0 as any) && ((s as any).angle = (n as any) * ((180 as any) / ((Math as any).PI as any) as any));
    let g: any = !1;
    if ((((t as any).str as any).length as any) > (1 as any)) g = !0;else if (((t as any).str as any) !== (" " as any) && (((t as any).transform as any)[0] as any) !== (((t as any).transform as any)[3] as any)) {
      const p: any = ((Math as any).abs as any)(((t as any).transform as any)[0]),
        b: any = ((Math as any).abs as any)(((t as any).transform as any)[3]);
      (p as any) !== (b as any) && ((((Math as any).max as any)(p, b) as any) / (((Math as any).min as any)(p, b) as any) as any) > (1.5 as any) && (g = !0);
    }
    if (g && ((s as any).canvasWidth = (r as any).vertical ? (t as any).height : (t as any).width), ((this.#g as any).set as any)(e, s), (this.#n as any).div = e, (this.#n as any).properties = s, (this.#E as any)(this.#n), (s as any).hasText && ((this.#e as any).append as any)(e), (s as any).hasEOL) {
      const p: any = ((document as any).createElement as any)("br");
      ((p as any).setAttribute as any)("role", "presentation"), ((this.#e as any).append as any)(p);
    }
  }
  #E(t: any): any {
    const {
        div: e,
        properties: s,
        ctx: i
      }: any = t,
      {
        style: n
      }: any = e;
    let r: any = "";
    if ((ht.#S as any) > (1 as any) && (r = `scale(${(1 as any) / (ht.#S as any)})`), ((s as any).canvasWidth as any) !== (0 as any) && (s as any).hasText) {
      const {
          fontFamily: a
        }: any = n,
        {
          canvasWidth: o,
          fontSize: l
        }: any = s;
      (ht.#P as any)(i, (l as any) * (this.#d as any), a);
      const {
        width: h
      }: any = ((i as any).measureText as any)((e as any).textContent);
      (h as any) > (0 as any) && (r = `scaleX(${((o as any) * (this.#d as any) as any) / (h as any)}) ${r}`);
    }
    ((s as any).angle as any) !== (0 as any) && (r = `rotate(${(s as any).angle}deg) ${r}`), ((r as any).length as any) > (0 as any) && ((n as any).transform = r);
  }
  static cleanup(): any {
    if (!(((this.#w as any).size as any) > (0 as any))) {
      ((this.#A as any).clear as any)();
      for (const {
        canvas: t
      } of ((this.#y as any).values as any)()) ((t as any).remove as any)();
      ((this.#y as any).clear as any)();
    }
  }
  static #M(t: any = null): any {
    let e: any = ((this.#y as any).get as any)(t ||= "");
    if (!e) {
      const s: any = ((document as any).createElement as any)("canvas");
      (s as any).className = "hiddenCanvasElement", (s as any).lang = t, (((document as any).body as any).append as any)(s), e = ((s as any).getContext as any)("2d", {
        alpha: !1,
        willReadFrequently: !0
      }), ((this.#y as any).set as any)(t, e), ((this.#C as any).set as any)(e, {
        size: 0,
        family: ""
      });
    }
    return e;
  }
  static #P(t: any, e: any, s: any): any {
    const i: any = ((this.#C as any).get as any)(t);
    (e as any) === ((i as any).size as any) && (s as any) === ((i as any).family as any) || ((t as any).font = `${e}px ${s}`, (i as any).size = e, (i as any).family = s);
  }
  static #k(): any {
    if ((this.#S as any) !== (null as any)) return;
    const t: any = ((document as any).createElement as any)("div");
    ((t as any).style as any).opacity = 0, ((t as any).style as any).lineHeight = 1, ((t as any).style as any).fontSize = "1px", ((t as any).style as any).position = "absolute", (t as any).textContent = "X", (((document as any).body as any).append as any)(t), this.#S = (((t as any).getBoundingClientRect as any)() as any).height, ((t as any).remove as any)();
  }
  static #O(t: any, e: any, s: any): any {
    const i: any = ((this.#A as any).get as any)(t);
    if (i) return i;
    const n: any = (this.#M as any)(s);
    ((n as any).canvas as any).width = ((n as any).canvas as any).height = ui, (this.#P as any)(n, ui, t);
    const r: any = ((n as any).measureText as any)(""),
      a: any = (r as any).fontBoundingBoxAscent,
      o: any = ((Math as any).abs as any)((r as any).fontBoundingBoxDescent);
    ((n as any).canvas as any).width = ((n as any).canvas as any).height = 0;
    let l: any = .8;
    return a ? l = (a as any) / ((a as any) + (o as any) as any) : (((ot as any).platform as any).isFirefox && (I as any)("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), (e as any).ascent ? l = (e as any).ascent : (e as any).descent && (l = (1 as any) + ((e as any).descent as any))), ((this.#A as any).set as any)(t, l), l;
  }
}
const yr: number = 100;
function Ar(this: any, d: any = {}): any {
  (typeof d as any) == ("string" as any) || d instanceof URL ? d = {
    url: d
  } : (d instanceof ArrayBuffer || ((ArrayBuffer as any).isView as any)(d)) && (d = {
    data: d
  });
  const t: any = new (Ls as any)(),
    {
      docId: e
    }: any = t,
    s: any = (d as any).url ? (Cn as any)((d as any).url) : null,
    i: any = (d as any).data ? (xn as any)((d as any).data) : null,
    n: any = (d as any).httpHeaders || null,
    r: any = ((d as any).withCredentials as any) === (!0 as any),
    a: any = (d as any).password ?? null,
    o: any = (d as any).range instanceof Bi ? (d as any).range : null,
    l: any = ((Number as any).isInteger as any)((d as any).rangeChunkSize) && ((d as any).rangeChunkSize as any) > (0 as any) ? (d as any).rangeChunkSize : (2 as any) ** (16 as any);
  let h: any = (d as any).worker instanceof ve ? (d as any).worker : null;
  const c: any = (d as any).verbosity,
    u: any = (typeof (d as any).docBaseUrl as any) == ("string" as any) && !(Ke as any)((d as any).docBaseUrl) ? (d as any).docBaseUrl : null,
    f: any = (De as any)((d as any).cMapUrl),
    g: any = ((d as any).cMapPacked as any) !== (!1 as any),
    p: any = (d as any).CMapReaderFactory || (ct ? In : Js),
    b: any = (De as any)((d as any).iccUrl),
    m: any = (De as any)((d as any).standardFontDataUrl),
    y: any = (d as any).StandardFontDataFactory || (ct ? Fn : Zs),
    A: any = (De as any)((d as any).wasmUrl),
    w: any = (d as any).WasmFactory || (ct ? Nn : ti),
    v: any = ((d as any).stopAtErrors as any) !== (!0 as any),
    _: any = ((Number as any).isInteger as any)((d as any).maxImageSize) && ((d as any).maxImageSize as any) > (-1 as any) ? (d as any).maxImageSize : -1,
    S: any = ((d as any).isEvalSupported as any) !== (!1 as any),
    E: any = (typeof (d as any).isOffscreenCanvasSupported as any) == ("boolean" as any) ? (d as any).isOffscreenCanvasSupported : !ct,
    C: any = (typeof (d as any).isImageDecoderSupported as any) == ("boolean" as any) ? (d as any).isImageDecoderSupported : !ct && (((ot as any).platform as any).isFirefox || !(globalThis as any).chrome),
    k: any = ((Number as any).isInteger as any)((d as any).canvasMaxAreaInBytes) ? (d as any).canvasMaxAreaInBytes : -1,
    T: any = (typeof (d as any).disableFontFace as any) == ("boolean" as any) ? (d as any).disableFontFace : ct,
    U: any = ((d as any).fontExtraProperties as any) === (!0 as any),
    $: any = ((d as any).enableXfa as any) === (!0 as any),
    z: any = (d as any).ownerDocument || (globalThis as any).document,
    V: any = ((d as any).disableRange as any) === (!0 as any),
    R: any = ((d as any).disableStream as any) === (!0 as any),
    L: any = ((d as any).disableAutoFetch as any) === (!0 as any),
    H: any = ((d as any).pdfBug as any) === (!0 as any),
    lt: any = (d as any).CanvasFactory || (ct ? Ln : Mn),
    Mt: any = (d as any).FilterFactory || (ct ? Dn : Rn),
    It: any = ((d as any).enableHWA as any) === (!0 as any),
    st: any = ((d as any).useWasm as any) !== (!1 as any),
    q: any = o ? (o as any).length : (d as any).length ?? NaN,
    $t: any = (typeof (d as any).useSystemFonts as any) == ("boolean" as any) ? (d as any).useSystemFonts : !ct && !T,
    Ft: any = (typeof (d as any).useWorkerFetch as any) == ("boolean" as any) ? (d as any).useWorkerFetch : !!((p as any) === (Js as any) && (y as any) === (Zs as any) && (w as any) === (ti as any) && f && m && A && (fe as any)(f, (document as any).baseURI) && (fe as any)(m, (document as any).baseURI) && (fe as any)(A, (document as any).baseURI)),
    Nt: any = null;
  (Ji as any)(c);
  const Z: any = {
    canvasFactory: new (lt as any)({
      ownerDocument: z,
      enableHWA: It
    }),
    filterFactory: new (Mt as any)({
      docId: e,
      ownerDocument: z
    }),
    cMapReaderFactory: Ft ? null : new (p as any)({
      baseUrl: f,
      isCompressed: g
    }),
    standardFontDataFactory: Ft ? null : new (y as any)({
      baseUrl: m
    }),
    wasmFactory: Ft ? null : new (w as any)({
      baseUrl: A
    })
  };
  h || (h = ((ve as any).create as any)({
    verbosity: c,
    port: (be as any).workerPort
  }), (t as any)._worker = h);
  const oe: any = {
      docId: e,
      apiVersion: "5.4.296",
      data: i,
      password: a,
      disableAutoFetch: L,
      rangeChunkSize: l,
      length: q,
      docBaseUrl: u,
      enableXfa: $,
      evaluatorOptions: {
        maxImageSize: _,
        disableFontFace: T,
        ignoreErrors: v,
        isEvalSupported: S,
        isOffscreenCanvasSupported: E,
        isImageDecoderSupported: C,
        canvasMaxAreaInBytes: k,
        fontExtraProperties: U,
        useSystemFonts: $t,
        useWasm: st,
        useWorkerFetch: Ft,
        cMapUrl: f,
        iccUrl: b,
        standardFontDataUrl: m,
        wasmUrl: A
      }
    },
    le: any = {
      ownerDocument: z,
      pdfBug: H,
      styleElement: Nt,
      loadingParams: {
        disableAutoFetch: L,
        enableXfa: $
      }
    };
  return (((((h as any).promise as any).then as any)(function (this: any): any {
    if ((t as any).destroyed) throw new (Error as any)("Loading aborted");
    if ((h as any).destroyed) throw new (Error as any)("Worker was destroyed");
    const qi: any = (((h as any).messageHandler as any).sendWithPromise as any)("GetDocRequest", oe, i ? [(i as any).buffer] : null);
    let ts: any;
    if (o) ts = new (tr as any)(o, {
      disableRange: V,
      disableStream: R
    });else if (!i) {
      if (!s) throw new (Error as any)("getDocument - no `url` parameter provided.");
      const es: any = (fe as any)(s) ? nr : ct ? pr : hr;
      ts = new (es as any)({
        url: s,
        length: q,
        httpHeaders: n,
        withCredentials: r,
        rangeChunkSize: l,
        disableRange: V,
        disableStream: R
      });
    }
    return ((qi as any).then as any)((es: any): any => {
      if ((t as any).destroyed) throw new (Error as any)("Loading aborted");
      if ((h as any).destroyed) throw new (Error as any)("Worker was destroyed");
      const Us: any = new (pe as any)(e, es, (h as any).port),
        Yi: any = new (_r as any)(Us, t, ts, le, Z, It);
      (t as any)._transport = Yi, ((Us as any).send as any)("Ready", null);
    });
  }) as any).catch as any)(((t as any)._capability as any).reject), t;
}
class Ls {
  [key: string]: any;
  static #t: any = 0;
  _capability: any = ((Promise as any).withResolvers as any)();
  _transport: any = null;
  _worker: any = null;
  docId: any = `d${Ls.#t++}`;
  destroyed: any = !1;
  onPassword: any = null;
  onProgress: any = null;
  get promise(): any {
    return ((this as any)._capability as any).promise;
  }
  async destroy(): Promise<any> {
    (this as any).destroyed = !0;
    try {
      (this as any)._worker?.port && (((this as any)._worker as any)._pendingDestroy = !0), await (this as any)._transport?.destroy();
    } catch (t: any) {
      throw (this as any)._worker?.port && delete ((this as any)._worker as any)._pendingDestroy, t;
    }
    (this as any)._transport = null, (this as any)._worker?.destroy(), (this as any)._worker = null;
  }
  async getData(): Promise<any> {
    return (((this as any)._transport as any).getData as any)();
  }
}
class Bi {
  declare contentDispositionFilename: any;
  declare progressiveDone: any;
  declare initialData: any;
  declare length: any;
  [key: string]: any;
  #t: any = ((Promise as any).withResolvers as any)();
  #e: any = [];
  #i: any = [];
  #s: any = [];
  #a: any = [];
  constructor(t: any, e: any, s: any = !1, i: any = null) {
    (this as any).length = t, (this as any).initialData = e, (this as any).progressiveDone = s, (this as any).contentDispositionFilename = i;
  }
  addRangeListener(t: any): any {
    ((this.#a as any).push as any)(t);
  }
  addProgressListener(t: any): any {
    ((this.#s as any).push as any)(t);
  }
  addProgressiveReadListener(t: any): any {
    ((this.#i as any).push as any)(t);
  }
  addProgressiveDoneListener(t: any): any {
    ((this.#e as any).push as any)(t);
  }
  onDataRange(t: any, e: any): any {
    for (const s of this.#a) (s as any)(t, e);
  }
  onDataProgress(t: any, e: any): any {
    (((this.#t as any).promise as any).then as any)((): any => {
      for (const s of this.#s) (s as any)(t, e);
    });
  }
  onDataProgressiveRead(t: any): any {
    (((this.#t as any).promise as any).then as any)((): any => {
      for (const e of this.#i) (e as any)(t);
    });
  }
  onDataProgressiveDone(): any {
    (((this.#t as any).promise as any).then as any)((): any => {
      for (const t of this.#e) (t as any)();
    });
  }
  transportReady(): any {
    ((this.#t as any).resolve as any)();
  }
  requestDataRange(t: any, e: any): any {
    (G as any)("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort(): any {}
}
class wr {
  declare _transport: any;
  declare _pdfInfo: any;
  [key: string]: any;
  constructor(t: any, e: any) {
    (this as any)._pdfInfo = t, (this as any)._transport = e;
  }
  get annotationStorage(): any {
    return ((this as any)._transport as any).annotationStorage;
  }
  get canvasFactory(): any {
    return ((this as any)._transport as any).canvasFactory;
  }
  get filterFactory(): any {
    return ((this as any)._transport as any).filterFactory;
  }
  get numPages(): any {
    return ((this as any)._pdfInfo as any).numPages;
  }
  get fingerprints(): any {
    return ((this as any)._pdfInfo as any).fingerprints;
  }
  get isPureXfa(): any {
    return (N as any)(this, "isPureXfa", !!((this as any)._transport as any)._htmlForXfa);
  }
  get allXfaHtml(): any {
    return ((this as any)._transport as any)._htmlForXfa;
  }
  getPage(t: any): any {
    return (((this as any)._transport as any).getPage as any)(t);
  }
  getPageIndex(t: any): any {
    return (((this as any)._transport as any).getPageIndex as any)(t);
  }
  getDestinations(): any {
    return (((this as any)._transport as any).getDestinations as any)();
  }
  getDestination(t: any): any {
    return (((this as any)._transport as any).getDestination as any)(t);
  }
  getPageLabels(): any {
    return (((this as any)._transport as any).getPageLabels as any)();
  }
  getPageLayout(): any {
    return (((this as any)._transport as any).getPageLayout as any)();
  }
  getPageMode(): any {
    return (((this as any)._transport as any).getPageMode as any)();
  }
  getViewerPreferences(): any {
    return (((this as any)._transport as any).getViewerPreferences as any)();
  }
  getOpenAction(): any {
    return (((this as any)._transport as any).getOpenAction as any)();
  }
  getAttachments(): any {
    return (((this as any)._transport as any).getAttachments as any)();
  }
  getAnnotationsByType(t: any, e: any): any {
    return (((this as any)._transport as any).getAnnotationsByType as any)(t, e);
  }
  getJSActions(): any {
    return (((this as any)._transport as any).getDocJSActions as any)();
  }
  getOutline(): any {
    return (((this as any)._transport as any).getOutline as any)();
  }
  getOptionalContentConfig({
    intent: t = "display"
  }: any = {}): any {
    const {
      renderingIntent: e
    }: any = (((this as any)._transport as any).getRenderingIntent as any)(t);
    return (((this as any)._transport as any).getOptionalContentConfig as any)(e);
  }
  getPermissions(): any {
    return (((this as any)._transport as any).getPermissions as any)();
  }
  getMetadata(): any {
    return (((this as any)._transport as any).getMetadata as any)();
  }
  getMarkInfo(): any {
    return (((this as any)._transport as any).getMarkInfo as any)();
  }
  getData(): any {
    return (((this as any)._transport as any).getData as any)();
  }
  saveDocument(): any {
    return (((this as any)._transport as any).saveDocument as any)();
  }
  getDownloadInfo(): any {
    return (((this as any)._transport as any).downloadInfoCapability as any).promise;
  }
  cleanup(t: any = !1): any {
    return (((this as any)._transport as any).startCleanup as any)(t || (this as any).isPureXfa);
  }
  destroy(): any {
    return (((this as any).loadingTask as any).destroy as any)();
  }
  cachedPageNumber(t: any): any {
    return (((this as any)._transport as any).cachedPageNumber as any)(t);
  }
  get loadingParams(): any {
    return ((this as any)._transport as any).loadingParams;
  }
  get loadingTask(): any {
    return ((this as any)._transport as any).loadingTask;
  }
  getFieldObjects(): any {
    return (((this as any)._transport as any).getFieldObjects as any)();
  }
  hasJSActions(): any {
    return (((this as any)._transport as any).hasJSActions as any)();
  }
  getCalculationOrderIds(): any {
    return (((this as any)._transport as any).getCalculationOrderIds as any)();
  }
}
class vr {
  declare recordedBBoxes: any;
  declare destroyed: any;
  declare _intentStates: any;
  declare objs: any;
  declare commonObjs: any;
  declare _pdfBug: any;
  declare _stats: any;
  declare _transport: any;
  declare _pageInfo: any;
  declare _pageIndex: any;
  [key: string]: any;
  #t: any = !1;
  constructor(t: any, e: any, s: any, i: any = !1) {
    (this as any)._pageIndex = t, (this as any)._pageInfo = e, (this as any)._transport = s, (this as any)._stats = i ? new (Vs as any)() : null, (this as any)._pdfBug = i, (this as any).commonObjs = (s as any).commonObjs, (this as any).objs = new (Oi as any)(), (this as any)._intentStates = new (Map as any)(), (this as any).destroyed = !1, (this as any).recordedBBoxes = null;
  }
  get pageNumber(): any {
    return ((this as any)._pageIndex as any) + (1 as any);
  }
  get rotate(): any {
    return ((this as any)._pageInfo as any).rotate;
  }
  get ref(): any {
    return ((this as any)._pageInfo as any).ref;
  }
  get userUnit(): any {
    return ((this as any)._pageInfo as any).userUnit;
  }
  get view(): any {
    return ((this as any)._pageInfo as any).view;
  }
  getViewport({
    scale: t,
    rotation: e = (this as any).rotate,
    offsetX: s = 0,
    offsetY: i = 0,
    dontFlip: n = !1
  }: any = {}): any {
    return new (Ce as any)({
      viewBox: (this as any).view,
      userUnit: (this as any).userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: n
    });
  }
  getAnnotations({
    intent: t = "display"
  }: any = {}): any {
    const {
      renderingIntent: e
    }: any = (((this as any)._transport as any).getRenderingIntent as any)(t);
    return (((this as any)._transport as any).getAnnotations as any)((this as any)._pageIndex, e);
  }
  getJSActions(): any {
    return (((this as any)._transport as any).getPageJSActions as any)((this as any)._pageIndex);
  }
  get filterFactory(): any {
    return ((this as any)._transport as any).filterFactory;
  }
  get isPureXfa(): any {
    return (N as any)(this, "isPureXfa", !!((this as any)._transport as any)._htmlForXfa);
  }
  async getXfa(): Promise<any> {
    return ((this as any)._transport as any)._htmlForXfa?.children[(this as any)._pageIndex] || null;
  }
  render({
    canvasContext: t,
    canvas: e = (t as any).canvas,
    viewport: s,
    intent: i = "display",
    annotationMode: n = (Ot as any).ENABLE,
    transform: r = null,
    background: a = null,
    optionalContentConfigPromise: o = null,
    annotationCanvasMap: l = null,
    pageColors: h = null,
    printAnnotationStorage: c = null,
    isEditing: u = !1,
    recordOperations: f = !1,
    operationsFilter: g = null
  }: any): any {
    (this as any)._stats?.time("Overall");
    const p: any = (((this as any)._transport as any).getRenderingIntent as any)(i, n, c, u),
      {
        renderingIntent: b,
        cacheKey: m
      }: any = p;
    this.#t = !1, o ||= (((this as any)._transport as any).getOptionalContentConfig as any)(b);
    let y: any = (((this as any)._intentStates as any).get as any)(m);
    y || (y = ((Object as any).create as any)(null), (((this as any)._intentStates as any).set as any)(m, y)), (y as any).streamReaderCancelTimeout && ((clearTimeout as any)((y as any).streamReaderCancelTimeout), (y as any).streamReaderCancelTimeout = null);
    const A: any = !!((b as any) & ((mt as any).PRINT as any));
    (y as any).displayReadyCapability || ((y as any).displayReadyCapability = ((Promise as any).withResolvers as any)(), (y as any).operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (this as any)._stats?.time("Page Request"), ((this as any)._pumpOperatorList as any)(p));
    const w: any = !!((this as any)._pdfBug && (globalThis as any).StepperManager?.enabled),
      v: any = !(this as any).recordedBBoxes && (f || w),
      _: any = (C: any): any => {
        if ((((y as any).renderTasks as any).delete as any)(S), v) {
          const k: any = (S as any).gfx?.dependencyTracker.take();
          k && ((S as any).stepper && (((S as any).stepper as any).setOperatorBBoxes as any)(k, ((((S as any).gfx as any).dependencyTracker as any).takeDebugMetadata as any)()), f && ((this as any).recordedBBoxes = k));
        }
        A && (this.#t = !0), (this.#e as any)(), C ? ((((S as any).capability as any).reject as any)(C), ((this as any)._abortOperatorList as any)({
          intentState: y,
          reason: C instanceof Error ? C : new (Error as any)(C)
        })) : (((S as any).capability as any).resolve as any)(), (this as any)._stats && ((((this as any)._stats as any).timeEnd as any)("Rendering"), (((this as any)._stats as any).timeEnd as any)("Overall"), (globalThis as any).Stats?.enabled && (((globalThis as any).Stats as any).add as any)((this as any).pageNumber, (this as any)._stats));
      },
      S: any = new (ee as any)({
        callback: _,
        params: {
          canvas: e,
          canvasContext: t,
          dependencyTracker: v ? new (Bn as any)(e, ((y as any).operatorList as any).length, w) : null,
          viewport: s,
          transform: r,
          background: a
        },
        objs: (this as any).objs,
        commonObjs: (this as any).commonObjs,
        annotationCanvasMap: l,
        operatorList: (y as any).operatorList,
        pageIndex: (this as any)._pageIndex,
        canvasFactory: ((this as any)._transport as any).canvasFactory,
        filterFactory: ((this as any)._transport as any).filterFactory,
        useRequestAnimationFrame: !A,
        pdfBug: (this as any)._pdfBug,
        pageColors: h,
        enableHWA: ((this as any)._transport as any).enableHWA,
        operationsFilter: g
      });
    ((((y as any).renderTasks ||= new (Set as any)()) as any).add as any)(S);
    const E: any = (S as any).task;
    return ((((((Promise as any).all as any)([((y as any).displayReadyCapability as any).promise, o]) as any).then as any)(([C, k]: any): any => {
      if ((this as any).destroyed) {
        (_ as any)();
        return;
      }
      if ((this as any)._stats?.time("Rendering"), !(((k as any).renderingIntent as any) & (b as any))) throw new (Error as any)("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      ((S as any).initializeGraphics as any)({
        transparency: C,
        optionalContentConfig: k
      }), ((S as any).operatorListChanged as any)();
    }) as any).catch as any)(_), E;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = (Ot as any).ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  }: any = {}): any {
    function n(this: any): any {
      ((a as any).operatorList as any).lastChunk && ((((a as any).opListReadCapability as any).resolve as any)((a as any).operatorList), (((a as any).renderTasks as any).delete as any)(o));
    }
    const r: any = (((this as any)._transport as any).getRenderingIntent as any)(t, e, s, i, !0);
    let a: any = (((this as any)._intentStates as any).get as any)((r as any).cacheKey);
    a || (a = ((Object as any).create as any)(null), (((this as any)._intentStates as any).set as any)((r as any).cacheKey, a));
    let o: any;
    return (a as any).opListReadCapability || (o = ((Object as any).create as any)(null), (o as any).operatorListChanged = n, (a as any).opListReadCapability = ((Promise as any).withResolvers as any)(), ((((a as any).renderTasks ||= new (Set as any)()) as any).add as any)(o), (a as any).operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (this as any)._stats?.time("Page Request"), ((this as any)._pumpOperatorList as any)(r)), ((a as any).opListReadCapability as any).promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  }: any = {}): any {
    return ((((this as any)._transport as any).messageHandler as any).sendWithStream as any)("GetTextContent", {
      pageIndex: (this as any)._pageIndex,
      includeMarkedContent: (t as any) === (!0 as any),
      disableNormalization: (e as any) === (!0 as any)
    }, {
      highWaterMark: 100,
      size(i: any): any {
        return ((i as any).items as any).length;
      }
    });
  }
  getTextContent(t: any = {}): any {
    if (((this as any)._transport as any)._htmlForXfa) return ((((this as any).getXfa as any)() as any).then as any)((s: any): any => ((we as any).textContent as any)(s));
    const e: any = ((this as any).streamTextContent as any)(t);
    return new (Promise as any)(function (this: any, s: any, i: any): any {
      function n(this: any): any {
        ((((r as any).read as any)() as any).then as any)(function (this: any, {
          value: o,
          done: l
        }: any): any {
          if (l) {
            (s as any)(a);
            return;
          }
          (a as any).lang ??= (o as any).lang, ((Object as any).assign as any)((a as any).styles, (o as any).styles), (((a as any).items as any).push as any)(...(o as any).items), (n as any)();
        }, i);
      }
      const r: any = ((e as any).getReader as any)(),
        a: any = {
          items: [],
          styles: ((Object as any).create as any)(null),
          lang: null
        };
      (n as any)();
    });
  }
  getStructTree(): any {
    return (((this as any)._transport as any).getStructTree as any)((this as any)._pageIndex);
  }
  _destroy(): any {
    (this as any).destroyed = !0;
    const t: any = [];
    for (const e of (((this as any)._intentStates as any).values as any)()) if (((this as any)._abortOperatorList as any)({
      intentState: e,
      reason: new (Error as any)("Page was destroyed."),
      force: !0
    }), !(e as any).opListReadCapability) for (const s of (e as any).renderTasks) ((t as any).push as any)((s as any).completed), ((s as any).cancel as any)();
    return (((this as any).objs as any).clear as any)(), this.#t = !1, ((Promise as any).all as any)(t);
  }
  cleanup(t: any = !1): any {
    this.#t = !0;
    const e: any = (this.#e as any)();
    return t && e && ((this as any)._stats &&= new (Vs as any)()), e;
  }
  #e(): any {
    if (!this.#t || (this as any).destroyed) return !1;
    for (const {
      renderTasks: t,
      operatorList: e
    } of (((this as any)._intentStates as any).values as any)()) if (((t as any).size as any) > (0 as any) || !(e as any).lastChunk) return !1;
    return (((this as any)._intentStates as any).clear as any)(), (((this as any).objs as any).clear as any)(), this.#t = !1, !0;
  }
  _startRenderPage(t: any, e: any): any {
    const s: any = (((this as any)._intentStates as any).get as any)(e);
    s && ((this as any)._stats?.timeEnd("Page Request"), (s as any).displayReadyCapability?.resolve(t));
  }
  _renderPageChunk(t: any, e: any): any {
    for (let s: any = 0, i: any = (t as any).length; (s as any) < (i as any); s++) ((((e as any).operatorList as any).fnArray as any).push as any)(((t as any).fnArray as any)[s]), ((((e as any).operatorList as any).argsArray as any).push as any)(((t as any).argsArray as any)[s]);
    ((e as any).operatorList as any).lastChunk = (t as any).lastChunk, ((e as any).operatorList as any).separateAnnots = (t as any).separateAnnots;
    for (const s of (e as any).renderTasks) ((s as any).operatorListChanged as any)();
    (t as any).lastChunk && (this.#e as any)();
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }: any): any {
    const {
        map: n,
        transfer: r
      }: any = s,
      o: any = ((((((this as any)._transport as any).messageHandler as any).sendWithStream as any)("GetOperatorList", {
        pageIndex: (this as any)._pageIndex,
        intent: t,
        cacheKey: e,
        annotationStorage: n,
        modifiedIds: i
      }, r) as any).getReader as any)(),
      l: any = (((this as any)._intentStates as any).get as any)(e);
    (l as any).streamReader = o;
    const h: any = (): any => {
      ((((o as any).read as any)() as any).then as any)(({
        value: c,
        done: u
      }: any): any => {
        if (u) {
          (l as any).streamReader = null;
          return;
        }
        ((this as any)._transport as any).destroyed || (((this as any)._renderPageChunk as any)(c, l), (h as any)());
      }, (c: any): any => {
        if ((l as any).streamReader = null, !((this as any)._transport as any).destroyed) {
          if ((l as any).operatorList) {
            ((l as any).operatorList as any).lastChunk = !0;
            for (const u of (l as any).renderTasks) ((u as any).operatorListChanged as any)();
            (this.#e as any)();
          }
          if ((l as any).displayReadyCapability) (((l as any).displayReadyCapability as any).reject as any)(c);else if ((l as any).opListReadCapability) (((l as any).opListReadCapability as any).reject as any)(c);else throw c;
        }
      });
    };
    (h as any)();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: s = !1
  }: any): any {
    if ((t as any).streamReader) {
      if ((t as any).streamReaderCancelTimeout && ((clearTimeout as any)((t as any).streamReaderCancelTimeout), (t as any).streamReaderCancelTimeout = null), !s) {
        if ((((t as any).renderTasks as any).size as any) > (0 as any)) return;
        if (e instanceof Cs) {
          let i: any = yr;
          ((e as any).extraDelay as any) > (0 as any) && ((e as any).extraDelay as any) < (1e3 as any) && (i += (e as any).extraDelay), (t as any).streamReaderCancelTimeout = (setTimeout as any)((): any => {
            (t as any).streamReaderCancelTimeout = null, ((this as any)._abortOperatorList as any)({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if ((((((t as any).streamReader as any).cancel as any)(new (Ht as any)((e as any).message)) as any).catch as any)((): any => {}), (t as any).streamReader = null, !((this as any)._transport as any).destroyed) {
        for (const [i, n] of (this as any)._intentStates) if ((n as any) === (t as any)) {
          (((this as any)._intentStates as any).delete as any)(i);
          break;
        }
        ((this as any).cleanup as any)();
      }
    }
  }
  get stats(): any {
    return (this as any)._stats;
  }
}
var Bt: any, _t: any, Lt: any, jt: any, We: any, Gt: any, Vt: any, ut: any, $e: any, Hi: any, Ui: any, ge: any, re: any, ze: any;
const X: any = class X {
  declare verbosity: any;
  declare destroyed: any;
  declare name: any;
  [key: string]: any;
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = (Zi as any)()
  }: any = {}) {
    (St as any)(this, ut);
    (St as any)(this, Bt, ((Promise as any).withResolvers as any)());
    (St as any)(this, _t, null);
    (St as any)(this, Lt, null);
    (St as any)(this, jt, null);
    if ((this as any).name = t, (this as any).destroyed = !1, (this as any).verbosity = s, e) {
      if ((((W as any)(X, Vt) as any).has as any)(e)) throw new (Error as any)("Cannot use more than one PDFWorker per port.");
      (((W as any)(X, Vt) as any).set as any)(e, this), (((Et as any)(this, ut, Hi) as any).call as any)(this, e);
    } else (((Et as any)(this, ut, Ui) as any).call as any)(this);
  }
  get promise(): any {
    return ((W as any)(this, Bt) as any).promise;
  }
  get port(): any {
    return (W as any)(this, Lt);
  }
  get messageHandler(): any {
    return (W as any)(this, _t);
  }
  destroy(): any {
    (this as any).destroyed = !0, (W as any)(this, jt)?.terminate(), (ft as any)(this, jt, null), (((W as any)(X, Vt) as any).delete as any)((W as any)(this, Lt)), (ft as any)(this, Lt, null), (W as any)(this, _t)?.destroy(), (ft as any)(this, _t, null);
  }
  static create(t: any): any {
    const e: any = (((W as any)(this, Vt) as any).get as any)(t?.port);
    if (e) {
      if ((e as any)._pendingDestroy) throw new (Error as any)("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new (X as any)(t);
  }
  static get workerSrc(): any {
    if ((be as any).workerSrc) return (be as any).workerSrc;
    throw new (Error as any)('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal(): any {
    return (N as any)(this, "_setupFakeWorkerGlobal", ((async (): Promise<any> => (W as any)(this, re, ze) ? (W as any)(this, re, ze) : ((await import((this as any).workerSrc)) as any).WorkerMessageHandler) as any)());
  }
};
Bt = new (WeakMap as any)(), _t = new (WeakMap as any)(), Lt = new (WeakMap as any)(), jt = new (WeakMap as any)(), We = new (WeakMap as any)(), Gt = new (WeakMap as any)(), Vt = new (WeakMap as any)(), ut = new (WeakSet as any)(), $e = function (this: any): any {
  (((W as any)(this, Bt) as any).resolve as any)(), (((W as any)(this, _t) as any).send as any)("configure", {
    verbosity: (this as any).verbosity
  });
}, Hi = function (this: any, t: any): any {
  (ft as any)(this, Lt, t), (ft as any)(this, _t, new (pe as any)("main", "worker", t)), (((W as any)(this, _t) as any).on as any)("ready", (): any => {}), (((Et as any)(this, ut, $e) as any).call as any)(this);
}, Ui = function (this: any): any {
  if ((W as any)(X, Gt) || (W as any)(X, re, ze)) {
    (((Et as any)(this, ut, ge) as any).call as any)(this);
    return;
  }
  let {
    workerSrc: t
  }: any = X;
  try {
    ((X as any)._isSameOrigin as any)((window as any).location, t) || (t = ((X as any)._createCDNWrapper as any)((new (URL as any)(t, (window as any).location) as any).href));
    const e: any = new (Worker as any)(t, {
        type: "module"
      }),
      s: any = new (pe as any)("main", "worker", e),
      i: any = (): any => {
        ((n as any).abort as any)(), ((s as any).destroy as any)(), ((e as any).terminate as any)(), (this as any).destroyed ? (((W as any)(this, Bt) as any).reject as any)(new (Error as any)("Worker was destroyed")) : (((Et as any)(this, ut, ge) as any).call as any)(this);
      },
      n: any = new (AbortController as any)();
    ((e as any).addEventListener as any)("error", (): any => {
      (W as any)(this, jt) || (i as any)();
    }, {
      signal: (n as any).signal
    }), ((s as any).on as any)("test", (a: any): any => {
      if (((n as any).abort as any)(), (this as any).destroyed || !a) {
        (i as any)();
        return;
      }
      (ft as any)(this, _t, s), (ft as any)(this, Lt, e), (ft as any)(this, jt, e), (((Et as any)(this, ut, $e) as any).call as any)(this);
    }), ((s as any).on as any)("ready", (a: any): any => {
      if (((n as any).abort as any)(), (this as any).destroyed) {
        (i as any)();
        return;
      }
      try {
        (r as any)();
      } catch {
        (((Et as any)(this, ut, ge) as any).call as any)(this);
      }
    });
    const r: any = (): any => {
      const a: any = new (Uint8Array as any)();
      ((s as any).send as any)("test", a, [(a as any).buffer]);
    };
    (r as any)();
    return;
  } catch {
    (Ye as any)("The worker has been disabled.");
  }
  (((Et as any)(this, ut, ge) as any).call as any)(this);
}, ge = function (this: any): any {
  (W as any)(X, Gt) || ((I as any)("Setting up fake worker."), (ft as any)(X, Gt, !0)), (((((X as any)._setupFakeWorkerGlobal as any).then as any)((t: any): any => {
    if ((this as any).destroyed) {
      (((W as any)(this, Bt) as any).reject as any)(new (Error as any)("Worker was destroyed"));
      return;
    }
    const e: any = new (kn as any)();
    (ft as any)(this, Lt, e);
    const s: any = `fake${((zs as any)(X, We) as any)._++}`,
      i: any = new (pe as any)((s as any) + ("_worker" as any), s, e);
    ((t as any).setup as any)(i, e), (ft as any)(this, _t, new (pe as any)(s, (s as any) + ("_worker" as any), e)), (((Et as any)(this, ut, $e) as any).call as any)(this);
  }) as any).catch as any)((t: any): any => {
    (((W as any)(this, Bt) as any).reject as any)(new (Error as any)(`Setting up fake worker failed: "${(t as any).message}".`));
  });
}, re = new (WeakSet as any)(), ze = function (this: any): any {
  try {
    return (globalThis as any).pdfjsWorker?.WorkerMessageHandler || null;
  } catch {
    return null;
  }
}, (St as any)(X, re), (St as any)(X, We, 0), (St as any)(X, Gt, !1), (St as any)(X, Vt, new (WeakMap as any)()), ct && ((ft as any)(X, Gt, !0), (be as any).workerSrc ||= "./pdf.worker.mjs"), (X as any)._isSameOrigin = (t: any, e: any): any => {
  const s: any = ((URL as any).parse as any)(t);
  if (!s?.origin || ((s as any).origin as any) === ("null" as any)) return !1;
  const i: any = new (URL as any)(e, s);
  return ((s as any).origin as any) === ((i as any).origin as any);
}, (X as any)._createCDNWrapper = (t: any): any => {
  const e: any = `await import("${t}");`;
  return ((URL as any).createObjectURL as any)(new (Blob as any)([e], {
    type: "text/javascript"
  }));
}, (X as any).fromPort = (t: any): any => {
  if ((un as any)("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !t?.port) throw new (Error as any)("PDFWorker.fromPort - invalid method signature.");
  return ((X as any).create as any)(t);
};
let ve: any = X;
class _r {
  declare _htmlForXfa: any;
  declare _numPages: any;
  declare enableHWA: any;
  declare downloadInfoCapability: any;
  declare _lastProgress: any;
  declare _fullReader: any;
  declare _networkStream: any;
  declare destroyCapability: any;
  declare destroyed: any;
  declare wasmFactory: any;
  declare standardFontDataFactory: any;
  declare cMapReaderFactory: any;
  declare filterFactory: any;
  declare canvasFactory: any;
  declare _params: any;
  declare loadingParams: any;
  declare fontLoader: any;
  declare commonObjs: any;
  declare loadingTask: any;
  declare messageHandler: any;
  [key: string]: any;
  #t: any = new (Map as any)();
  #e: any = new (Map as any)();
  #i: any = new (Map as any)();
  #s: any = new (Map as any)();
  #a: any = null;
  constructor(t: any, e: any, s: any, i: any, n: any, r: any) {
    (this as any).messageHandler = t, (this as any).loadingTask = e, (this as any).commonObjs = new (Oi as any)(), (this as any).fontLoader = new (Sn as any)({
      ownerDocument: (i as any).ownerDocument,
      styleElement: (i as any).styleElement
    }), (this as any).loadingParams = (i as any).loadingParams, (this as any)._params = i, (this as any).canvasFactory = (n as any).canvasFactory, (this as any).filterFactory = (n as any).filterFactory, (this as any).cMapReaderFactory = (n as any).cMapReaderFactory, (this as any).standardFontDataFactory = (n as any).standardFontDataFactory, (this as any).wasmFactory = (n as any).wasmFactory, (this as any).destroyed = !1, (this as any).destroyCapability = null, (this as any)._networkStream = s, (this as any)._fullReader = null, (this as any)._lastProgress = null, (this as any).downloadInfoCapability = ((Promise as any).withResolvers as any)(), (this as any).enableHWA = r, ((this as any).setupMessageHandler as any)();
  }
  #n(t: any, e: any = null): any {
    const s: any = ((this.#t as any).get as any)(t);
    if (s) return s;
    const i: any = (((this as any).messageHandler as any).sendWithPromise as any)(t, e);
    return ((this.#t as any).set as any)(t, i), i;
  }
  get annotationStorage(): any {
    return (N as any)(this, "annotationStorage", new (ks as any)());
  }
  getRenderingIntent(t: any, e: any = (Ot as any).ENABLE, s: any = null, i: any = !1, n: any = !1): any {
    let r: any = (mt as any).DISPLAY,
      a: any = ms;
    switch (t) {
      case "any":
        r = (mt as any).ANY;
        break;
      case "display":
        break;
      case "print":
        r = (mt as any).PRINT;
        break;
      default:
        (I as any)(`getRenderingIntent - invalid intent: ${t}`);
    }
    const o: any = (r as any) & ((mt as any).PRINT as any) && s instanceof Ci ? s : (this as any).annotationStorage;
    switch (e) {
      case (Ot as any).DISABLE:
        r += (mt as any).ANNOTATIONS_DISABLE;
        break;
      case (Ot as any).ENABLE:
        break;
      case (Ot as any).ENABLE_FORMS:
        r += (mt as any).ANNOTATIONS_FORMS;
        break;
      case (Ot as any).ENABLE_STORAGE:
        r += (mt as any).ANNOTATIONS_STORAGE, a = (o as any).serializable;
        break;
      default:
        (I as any)(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (r += (mt as any).IS_EDITING), n && (r += (mt as any).OPLIST);
    const {
        ids: l,
        hash: h
      }: any = (o as any).modifiedIds,
      c: any = [r, (a as any).hash, h];
    return {
      renderingIntent: r,
      cacheKey: ((c as any).join as any)("_"),
      annotationStorageSerializable: a,
      modifiedIds: l
    };
  }
  destroy(): any {
    if ((this as any).destroyCapability) return ((this as any).destroyCapability as any).promise;
    (this as any).destroyed = !0, (this as any).destroyCapability = ((Promise as any).withResolvers as any)(), this.#a?.reject(new (Error as any)("Worker was destroyed during onPassword callback"));
    const t: any = [];
    for (const s of ((this.#e as any).values as any)()) ((t as any).push as any)(((s as any)._destroy as any)());
    ((this.#e as any).clear as any)(), ((this.#i as any).clear as any)(), ((this.#s as any).clear as any)(), ((this as any).hasOwnProperty as any)("annotationStorage") && (((this as any).annotationStorage as any).resetModified as any)();
    const e: any = (((this as any).messageHandler as any).sendWithPromise as any)("Terminate", null);
    return ((t as any).push as any)(e), ((((Promise as any).all as any)(t) as any).then as any)((): any => {
      (((this as any).commonObjs as any).clear as any)(), (((this as any).fontLoader as any).clear as any)(), ((this.#t as any).clear as any)(), (((this as any).filterFactory as any).destroy as any)(), ((ht as any).cleanup as any)(), (this as any)._networkStream?.cancelAllRequests(new (Ht as any)("Worker was terminated.")), (this as any).messageHandler?.destroy(), (this as any).messageHandler = null, (((this as any).destroyCapability as any).resolve as any)();
    }, ((this as any).destroyCapability as any).reject), ((this as any).destroyCapability as any).promise;
  }
  setupMessageHandler(): any {
    const {
      messageHandler: t,
      loadingTask: e
    }: any = this;
    ((t as any).on as any)("GetReader", (s: any, i: any): any => {
      (B as any)((this as any)._networkStream, "GetReader - no `IPDFStream` instance available."), (this as any)._fullReader = (((this as any)._networkStream as any).getFullReader as any)(), ((this as any)._fullReader as any).onProgress = (n: any): any => {
        (this as any)._lastProgress = {
          loaded: (n as any).loaded,
          total: (n as any).total
        };
      }, (i as any).onPull = (): any => {
        (((((((this as any)._fullReader as any).read as any)() as any).then as any)(function (this: any, {
          value: n,
          done: r
        }: any): any {
          if (r) {
            ((i as any).close as any)();
            return;
          }
          (B as any)(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), ((i as any).enqueue as any)(new (Uint8Array as any)(n), 1, [n]);
        }) as any).catch as any)((n: any): any => {
          ((i as any).error as any)(n);
        });
      }, (i as any).onCancel = (n: any): any => {
        (((this as any)._fullReader as any).cancel as any)(n), (((i as any).ready as any).catch as any)((r: any): any => {
          if (!(this as any).destroyed) throw r;
        });
      };
    }), ((t as any).on as any)("ReaderHeadersReady", async (s: any): Promise<any> => {
      await ((this as any)._fullReader as any).headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: r
      }: any = (this as any)._fullReader;
      return (!i || !n) && ((this as any)._lastProgress && (e as any).onProgress?.((this as any)._lastProgress), ((this as any)._fullReader as any).onProgress = (a: any): any => {
        (e as any).onProgress?.({
          loaded: (a as any).loaded,
          total: (a as any).total
        });
      }), {
        isStreamingSupported: i,
        isRangeSupported: n,
        contentLength: r
      };
    }), ((t as any).on as any)("GetRangeReader", (s: any, i: any): any => {
      (B as any)((this as any)._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const n: any = (((this as any)._networkStream as any).getRangeReader as any)((s as any).begin, (s as any).end);
      if (!n) {
        ((i as any).close as any)();
        return;
      }
      (i as any).onPull = (): any => {
        ((((((n as any).read as any)() as any).then as any)(function (this: any, {
          value: r,
          done: a
        }: any): any {
          if (a) {
            ((i as any).close as any)();
            return;
          }
          (B as any)(r instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), ((i as any).enqueue as any)(new (Uint8Array as any)(r), 1, [r]);
        }) as any).catch as any)((r: any): any => {
          ((i as any).error as any)(r);
        });
      }, (i as any).onCancel = (r: any): any => {
        ((n as any).cancel as any)(r), (((i as any).ready as any).catch as any)((a: any): any => {
          if (!(this as any).destroyed) throw a;
        });
      };
    }), ((t as any).on as any)("GetDoc", ({
      pdfInfo: s
    }: any): any => {
      (this as any)._numPages = (s as any).numPages, (this as any)._htmlForXfa = (s as any).htmlForXfa, delete (s as any).htmlForXfa, (((e as any)._capability as any).resolve as any)(new (wr as any)(s, this));
    }), ((t as any).on as any)("DocException", (s: any): any => {
      (((e as any)._capability as any).reject as any)((pt as any)(s));
    }), ((t as any).on as any)("PasswordRequest", (s: any): any => {
      this.#a = ((Promise as any).withResolvers as any)();
      try {
        if (!(e as any).onPassword) throw (pt as any)(s);
        const i: any = (n: any): any => {
          n instanceof Error ? ((this.#a as any).reject as any)(n) : ((this.#a as any).resolve as any)({
            password: n
          });
        };
        ((e as any).onPassword as any)(i, (s as any).code);
      } catch (i: any) {
        ((this.#a as any).reject as any)(i);
      }
      return (this.#a as any).promise;
    }), ((t as any).on as any)("DataLoaded", (s: any): any => {
      (e as any).onProgress?.({
        loaded: (s as any).length,
        total: (s as any).length
      }), (((this as any).downloadInfoCapability as any).resolve as any)(s);
    }), ((t as any).on as any)("StartRenderPage", (s: any): any => {
      if ((this as any).destroyed) return;
      ((((this.#e as any).get as any)((s as any).pageIndex) as any)._startRenderPage as any)((s as any).transparency, (s as any).cacheKey);
    }), ((t as any).on as any)("commonobj", ([s, i, n]: any): any => {
      if ((this as any).destroyed || (((this as any).commonObjs as any).has as any)(s)) return null;
      switch (i) {
        case "Font":
          if ("error" in n) {
            const h: any = (n as any).error;
            (I as any)(`Error during font loading: ${h}`), (((this as any).commonObjs as any).resolve as any)(s, h);
            break;
          }
          const r: any = new (j as any)(n),
            a: any = ((this as any)._params as any).pdfBug && (globalThis as any).FontInspector?.enabled ? (h: any, c: any): any => (((globalThis as any).FontInspector as any).fontAdded as any)(h, c) : null,
            o: any = new (En as any)(r, a, (n as any).extra, (n as any).charProcOperatorList);
          (((((((this as any).fontLoader as any).bind as any)(o) as any).catch as any)((): any => ((t as any).sendWithPromise as any)("FontFallback", {
            id: s
          })) as any).finally as any)((): any => {
            !(o as any).fontExtraProperties && (o as any).data && ((o as any).clearData as any)(), (((this as any).commonObjs as any).resolve as any)(s, o);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: l
          }: any = n;
          (B as any)(l, "The imageRef must be defined.");
          for (const h of ((this.#e as any).values as any)()) for (const [, c] of (h as any).objs) if ((c?.ref as any) === (l as any)) return (c as any).dataLen ? ((((this as any).commonObjs as any).resolve as any)(s, (structuredClone as any)(c)), (c as any).dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          (((this as any).commonObjs as any).resolve as any)(s, n);
          break;
        default:
          throw new (Error as any)(`Got unknown common object type ${i}`);
      }
      return null;
    }), ((t as any).on as any)("obj", ([s, i, n, r]: any): any => {
      if ((this as any).destroyed) return;
      const a: any = ((this.#e as any).get as any)(i);
      if (!(((a as any).objs as any).has as any)(s)) {
        if ((((a as any)._intentStates as any).size as any) === (0 as any)) {
          r?.bitmap?.close();
          return;
        }
        switch (n) {
          case "Image":
          case "Pattern":
            (((a as any).objs as any).resolve as any)(s, r);
            break;
          default:
            throw new (Error as any)(`Got unknown object type ${n}`);
        }
      }
    }), ((t as any).on as any)("DocProgress", (s: any): any => {
      (this as any).destroyed || (e as any).onProgress?.({
        loaded: (s as any).loaded,
        total: (s as any).total
      });
    }), ((t as any).on as any)("FetchBinaryData", async (s: any): Promise<any> => {
      if ((this as any).destroyed) throw new (Error as any)("Worker was destroyed.");
      const i: any = (this as any)[(s as any).type];
      if (!i) throw new (Error as any)(`${(s as any).type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return ((i as any).fetch as any)(s);
    });
  }
  getData(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetData", null);
  }
  saveDocument(): any {
    (((this as any).annotationStorage as any).size as any) <= (0 as any) && (I as any)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    }: any = ((this as any).annotationStorage as any).serializable;
    return (((((this as any).messageHandler as any).sendWithPromise as any)("SaveDocument", {
      isPureXfa: !!(this as any)._htmlForXfa,
      numPages: (this as any)._numPages,
      annotationStorage: t,
      filename: (this as any)._fullReader?.filename ?? null
    }, e) as any).finally as any)((): any => {
      (((this as any).annotationStorage as any).resetModified as any)();
    });
  }
  getPage(t: any): any {
    if (!((Number as any).isInteger as any)(t) || (t as any) <= (0 as any) || (t as any) > ((this as any)._numPages as any)) return ((Promise as any).reject as any)(new (Error as any)("Invalid page request."));
    const e: any = (t as any) - (1 as any),
      s: any = ((this.#i as any).get as any)(e);
    if (s) return s;
    const i: any = (((((this as any).messageHandler as any).sendWithPromise as any)("GetPage", {
      pageIndex: e
    }) as any).then as any)((n: any): any => {
      if ((this as any).destroyed) throw new (Error as any)("Transport destroyed");
      (n as any).refStr && ((this.#s as any).set as any)((n as any).refStr, t);
      const r: any = new (vr as any)(e, n, this, ((this as any)._params as any).pdfBug);
      return ((this.#e as any).set as any)(e, r), r;
    });
    return ((this.#i as any).set as any)(e, i), i;
  }
  getPageIndex(t: any): any {
    return (bs as any)(t) ? (((this as any).messageHandler as any).sendWithPromise as any)("GetPageIndex", {
      num: (t as any).num,
      gen: (t as any).gen
    }) : ((Promise as any).reject as any)(new (Error as any)("Invalid pageIndex request."));
  }
  getAnnotations(t: any, e: any): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects(): any {
    return (this.#n as any)("GetFieldObjects");
  }
  hasJSActions(): any {
    return (this.#n as any)("HasJSActions");
  }
  getCalculationOrderIds(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetCalculationOrderIds", null);
  }
  getDestinations(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetDestinations", null);
  }
  getDestination(t: any): any {
    return (typeof t as any) != ("string" as any) ? ((Promise as any).reject as any)(new (Error as any)("Invalid destination request.")) : (((this as any).messageHandler as any).sendWithPromise as any)("GetDestination", {
      id: t
    });
  }
  getPageLabels(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetPageLabels", null);
  }
  getPageLayout(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetPageLayout", null);
  }
  getPageMode(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetPageMode", null);
  }
  getViewerPreferences(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetViewerPreferences", null);
  }
  getOpenAction(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetOpenAction", null);
  }
  getAttachments(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetAttachments", null);
  }
  getAnnotationsByType(t: any, e: any): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetAnnotationsByType", {
      types: t,
      pageIndexesToSkip: e
    });
  }
  getDocJSActions(): any {
    return (this.#n as any)("GetDocJSActions");
  }
  getPageJSActions(t: any): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t: any): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetOutline", null);
  }
  getOptionalContentConfig(t: any): any {
    return (((this.#n as any)("GetOptionalContentConfig") as any).then as any)((e: any): any => new (Zn as any)(e, t));
  }
  getPermissions(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetPermissions", null);
  }
  getMetadata(): any {
    const t: string = "GetMetadata",
      e: any = ((this.#t as any).get as any)(t);
    if (e) return e;
    const s: any = (((((this as any).messageHandler as any).sendWithPromise as any)(t, null) as any).then as any)((i: any): any => ({
      info: (i as any)[0],
      metadata: (i as any)[1] ? new (Qn as any)((i as any)[1]) : null,
      contentDispositionFilename: (this as any)._fullReader?.filename ?? null,
      contentLength: (this as any)._fullReader?.contentLength ?? null
    }));
    return ((this.#t as any).set as any)(t, s), s;
  }
  getMarkInfo(): any {
    return (((this as any).messageHandler as any).sendWithPromise as any)("GetMarkInfo", null);
  }
  async startCleanup(t: any = !1): Promise<any> {
    if (!(this as any).destroyed) {
      await (((this as any).messageHandler as any).sendWithPromise as any)("Cleanup", null);
      for (const e of ((this.#e as any).values as any)()) if (!((e as any).cleanup as any)()) throw new (Error as any)(`startCleanup: Page ${(e as any).pageNumber} is currently rendering.`);
      (((this as any).commonObjs as any).clear as any)(), t || (((this as any).fontLoader as any).clear as any)(), ((this.#t as any).clear as any)(), (((this as any).filterFactory as any).destroy as any)(!0), ((ht as any).cleanup as any)();
    }
  }
  cachedPageNumber(t: any): any {
    if (!(bs as any)(t)) return null;
    const e: any = ((t as any).gen as any) === (0 as any) ? `${(t as any).num}R` : `${(t as any).num}R${(t as any).gen}`;
    return ((this.#s as any).get as any)(e) ?? null;
  }
}
class Sr {
  [key: string]: any;
  #t: any = null;
  onContinue: any = null;
  onError: any = null;
  constructor(t: any) {
    this.#t = t;
  }
  get promise(): any {
    return ((this.#t as any).capability as any).promise;
  }
  cancel(t: any = 0): any {
    ((this.#t as any).cancel as any)(null, t);
  }
  get separateAnnots(): any {
    const {
      separateAnnots: t
    }: any = (this.#t as any).operatorList;
    if (!t) return !1;
    const {
      annotationCanvasMap: e
    }: any = this.#t;
    return (t as any).form || (t as any).canvas && (e?.size as any) > (0 as any);
  }
}
class ee {
  declare gfx: any;
  declare stepper: any;
  declare _operationsFilter: any;
  declare _dependencyTracker: any;
  declare _enableHWA: any;
  declare _canvasContext: any;
  declare _canvas: any;
  declare _nextBound: any;
  declare _scheduleNextBound: any;
  declare _continueBound: any;
  declare _cancelBound: any;
  declare task: any;
  declare capability: any;
  declare cancelled: any;
  declare _useRequestAnimationFrame: any;
  declare graphicsReady: any;
  declare graphicsReadyCallback: any;
  declare running: any;
  declare pageColors: any;
  declare _pdfBug: any;
  declare filterFactory: any;
  declare canvasFactory: any;
  declare _pageIndex: any;
  declare operatorList: any;
  declare operatorListIdx: any;
  declare annotationCanvasMap: any;
  declare commonObjs: any;
  declare objs: any;
  declare params: any;
  declare callback: any;
  [key: string]: any;
  #t: any = null;
  static #e: any = new (WeakSet as any)();
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: n,
    operatorList: r,
    pageIndex: a,
    canvasFactory: o,
    filterFactory: l,
    useRequestAnimationFrame: h = !1,
    pdfBug: c = !1,
    pageColors: u = null,
    enableHWA: f = !1,
    operationsFilter: g = null
  }: any) {
    (this as any).callback = t, (this as any).params = e, (this as any).objs = s, (this as any).commonObjs = i, (this as any).annotationCanvasMap = n, (this as any).operatorListIdx = null, (this as any).operatorList = r, (this as any)._pageIndex = a, (this as any).canvasFactory = o, (this as any).filterFactory = l, (this as any)._pdfBug = c, (this as any).pageColors = u, (this as any).running = !1, (this as any).graphicsReadyCallback = null, (this as any).graphicsReady = !1, (this as any)._useRequestAnimationFrame = (h as any) === (!0 as any) && (typeof window as any) < ("u" as any), (this as any).cancelled = !1, (this as any).capability = ((Promise as any).withResolvers as any)(), (this as any).task = new (Sr as any)(this), (this as any)._cancelBound = (((this as any).cancel as any).bind as any)(this), (this as any)._continueBound = (((this as any)._continue as any).bind as any)(this), (this as any)._scheduleNextBound = (((this as any)._scheduleNext as any).bind as any)(this), (this as any)._nextBound = (((this as any)._next as any).bind as any)(this), (this as any)._canvas = (e as any).canvas, (this as any)._canvasContext = (e as any).canvas ? null : (e as any).canvasContext, (this as any)._enableHWA = f, (this as any)._dependencyTracker = (e as any).dependencyTracker, (this as any)._operationsFilter = g;
  }
  get completed(): any {
    return ((((this as any).capability as any).promise as any).catch as any)(function (this: any): any {});
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }: any): any {
    if ((this as any).cancelled) return;
    if ((this as any)._canvas) {
      if (((ee.#e as any).has as any)((this as any)._canvas)) throw new (Error as any)("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      ((ee.#e as any).add as any)((this as any)._canvas);
    }
    (this as any)._pdfBug && (globalThis as any).StepperManager?.enabled && ((this as any).stepper = (((globalThis as any).StepperManager as any).create as any)((this as any)._pageIndex), (((this as any).stepper as any).init as any)((this as any).operatorList), ((this as any).stepper as any).nextBreakPoint = (((this as any).stepper as any).getNextBreakPoint as any)());
    const {
        viewport: s,
        transform: i,
        background: n,
        dependencyTracker: r
      }: any = (this as any).params,
      a: any = (this as any)._canvasContext || (((this as any)._canvas as any).getContext as any)("2d", {
        alpha: !1,
        willReadFrequently: !(this as any)._enableHWA
      });
    (this as any).gfx = new (se as any)(a, (this as any).commonObjs, (this as any).objs, (this as any).canvasFactory, (this as any).filterFactory, {
      optionalContentConfig: e
    }, (this as any).annotationCanvasMap, (this as any).pageColors, r), (((this as any).gfx as any).beginDrawing as any)({
      transform: i,
      viewport: s,
      transparency: t,
      background: n
    }), (this as any).operatorListIdx = 0, (this as any).graphicsReady = !0, (this as any).graphicsReadyCallback?.();
  }
  cancel(t: any = null, e: any = 0): any {
    (this as any).running = !1, (this as any).cancelled = !0, (this as any).gfx?.endDrawing(), this.#t && (((window as any).cancelAnimationFrame as any)(this.#t), this.#t = null), ((ee.#e as any).delete as any)((this as any)._canvas), t ||= new (Cs as any)(`Rendering cancelled, page ${((this as any)._pageIndex as any) + (1 as any)}`, e), ((this as any).callback as any)(t), ((this as any).task as any).onError?.(t);
  }
  operatorListChanged(): any {
    if (!(this as any).graphicsReady) {
      (this as any).graphicsReadyCallback ||= (this as any)._continueBound;
      return;
    }
    ((this as any).gfx as any).dependencyTracker?.growOperationsCount((((this as any).operatorList as any).fnArray as any).length), (this as any).stepper?.updateOperatorList((this as any).operatorList), !(this as any).running && ((this as any)._continue as any)();
  }
  _continue(): any {
    (this as any).running = !0, !(this as any).cancelled && (((this as any).task as any).onContinue ? (((this as any).task as any).onContinue as any)((this as any)._scheduleNextBound) : ((this as any)._scheduleNext as any)());
  }
  _scheduleNext(): any {
    (this as any)._useRequestAnimationFrame ? this.#t = ((window as any).requestAnimationFrame as any)((): any => {
      this.#t = null, ((((this as any)._nextBound as any)() as any).catch as any)((this as any)._cancelBound);
    }) : ((((((Promise as any).resolve as any)() as any).then as any)((this as any)._nextBound) as any).catch as any)((this as any)._cancelBound);
  }
  async _next(): Promise<any> {
    (this as any).cancelled || ((this as any).operatorListIdx = (((this as any).gfx as any).executeOperatorList as any)((this as any).operatorList, (this as any).operatorListIdx, (this as any)._continueBound, (this as any).stepper, (this as any)._operationsFilter), ((this as any).operatorListIdx as any) === ((((this as any).operatorList as any).argsArray as any).length as any) && ((this as any).running = !1, ((this as any).operatorList as any).lastChunk && ((((this as any).gfx as any).endDrawing as any)(), ((ee.#e as any).delete as any)((this as any)._canvas), ((this as any).callback as any)())));
  }
}
const Er: string = "5.4.296",
  Cr: string = "f56dc8601";
class wt {
  [key: string]: any;
  #t: any = null;
  #e: any = null;
  #i: any;
  #s: any = null;
  #a: any = !1;
  #n: any = !1;
  #r: any = null;
  #o: any;
  #h: any = null;
  #l: any = null;
  static #u: any = null;
  static get _keyboardManager(): any {
    return (N as any)(this, "_keyboardManager", new (Te as any)([[["Escape", "mac+Escape"], ((wt as any).prototype as any)._hideDropdownFromKeyboard], [[" ", "mac+ "], ((wt as any).prototype as any)._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ((wt as any).prototype as any)._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ((wt as any).prototype as any)._moveToPrevious], [["Home", "mac+Home"], ((wt as any).prototype as any)._moveToBeginning], [["End", "mac+End"], ((wt as any).prototype as any)._moveToEnd]]));
  }
  constructor({
    editor: t = null,
    uiManager: e = null
  }: any) {
    t ? (this.#n = !1, this.#r = t) : this.#n = !0, this.#l = t?._uiManager || e, this.#o = (this.#l as any)._eventBus, this.#i = t?.color?.toUpperCase() || this.#l?.highlightColors.values().next().value || "#FFFF98", wt.#u ||= ((Object as any).freeze as any)({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    });
  }
  renderButton(): any {
    const t: any = this.#t = ((document as any).createElement as any)("button");
    (t as any).className = "colorPicker", (t as any).tabIndex = "0", ((t as any).setAttribute as any)("data-l10n-id", "pdfjs-editor-colorpicker-button"), (t as any).ariaHasPopup = "true", this.#r && ((t as any).ariaControls = `${(this.#r as any).id}_colorpicker_dropdown`);
    const e: any = (this.#l as any)._signal;
    ((t as any).addEventListener as any)("click", ((this.#p as any).bind as any)(this), {
      signal: e
    }), ((t as any).addEventListener as any)("keydown", ((this.#m as any).bind as any)(this), {
      signal: e
    });
    const s: any = this.#e = ((document as any).createElement as any)("span");
    return (s as any).className = "swatch", (s as any).ariaHidden = "true", ((s as any).style as any).backgroundColor = this.#i, ((t as any).append as any)(s), t;
  }
  renderMainDropdown(): any {
    const t: any = this.#s = (this.#d as any)();
    return (t as any).ariaOrientation = "horizontal", (t as any).ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  #d(): any {
    const t: any = ((document as any).createElement as any)("div"),
      e: any = (this.#l as any)._signal;
    ((t as any).addEventListener as any)("contextmenu", vt, {
      signal: e
    }), (t as any).className = "dropdown", (t as any).role = "listbox", (t as any).ariaMultiSelectable = "false", (t as any).ariaOrientation = "vertical", ((t as any).setAttribute as any)("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), this.#r && ((t as any).id = `${(this.#r as any).id}_colorpicker_dropdown`);
    for (const [s, i] of (this.#l as any).highlightColors) {
      const n: any = ((document as any).createElement as any)("button");
      (n as any).tabIndex = "0", (n as any).role = "option", ((n as any).setAttribute as any)("data-color", i), (n as any).title = s, ((n as any).setAttribute as any)("data-l10n-id", (wt.#u as any)[s]);
      const r: any = ((document as any).createElement as any)("span");
      ((n as any).append as any)(r), (r as any).className = "swatch", ((r as any).style as any).backgroundColor = i, (n as any).ariaSelected = (i as any) === (this.#i as any), ((n as any).addEventListener as any)("click", ((this.#f as any).bind as any)(this, i), {
        signal: e
      }), ((t as any).append as any)(n);
    }
    return ((t as any).addEventListener as any)("keydown", ((this.#m as any).bind as any)(this), {
      signal: e
    }), t;
  }
  #f(t: any, e: any): any {
    ((e as any).stopPropagation as any)(), ((this.#o as any).dispatch as any)("switchannotationeditorparams", {
      source: this,
      type: (O as any).HIGHLIGHT_COLOR,
      value: t
    }), ((this as any).updateColor as any)(t);
  }
  _colorSelectFromKeyboard(t: any): any {
    if (((t as any).target as any) === (this.#t as any)) {
      (this.#p as any)(t);
      return;
    }
    const e: any = (((t as any).target as any).getAttribute as any)("data-color");
    e && (this.#f as any)(e, t);
  }
  _moveToNext(t: any): any {
    if (!this.#g) {
      (this.#p as any)(t);
      return;
    }
    if (((t as any).target as any) === (this.#t as any)) {
      (this.#s as any).firstChild?.focus();
      return;
    }
    ((t as any).target as any).nextSibling?.focus();
  }
  _moveToPrevious(t: any): any {
    if (((t as any).target as any) === (this.#s?.firstChild as any) || ((t as any).target as any) === (this.#t as any)) {
      this.#g && ((this as any)._hideDropdownFromKeyboard as any)();
      return;
    }
    this.#g || (this.#p as any)(t), ((t as any).target as any).previousSibling?.focus();
  }
  _moveToBeginning(t: any): any {
    if (!this.#g) {
      (this.#p as any)(t);
      return;
    }
    (this.#s as any).firstChild?.focus();
  }
  _moveToEnd(t: any): any {
    if (!this.#g) {
      (this.#p as any)(t);
      return;
    }
    (this.#s as any).lastChild?.focus();
  }
  #m(t: any): any {
    (((wt as any)._keyboardManager as any).exec as any)(this, t);
  }
  #p(t: any): any {
    if (this.#g) {
      ((this as any).hideDropdown as any)();
      return;
    }
    if (this.#a = ((t as any).detail as any) === (0 as any), this.#h || (this.#h = new (AbortController as any)(), ((window as any).addEventListener as any)("pointerdown", ((this.#c as any).bind as any)(this), {
      signal: ((this.#l as any).combinedSignal as any)(this.#h)
    })), (this.#t as any).ariaExpanded = "true", this.#s) {
      (((this.#s as any).classList as any).remove as any)("hidden");
      return;
    }
    const e: any = this.#s = (this.#d as any)();
    ((this.#t as any).append as any)(e);
  }
  #c(t: any): any {
    this.#s?.contains((t as any).target) || ((this as any).hideDropdown as any)();
  }
  hideDropdown(): any {
    this.#s?.classList.add("hidden"), (this.#t as any).ariaExpanded = "false", this.#h?.abort(), this.#h = null;
  }
  get #g(): any {
    return this.#s && !(((this.#s as any).classList as any).contains as any)("hidden");
  }
  _hideDropdownFromKeyboard(): any {
    if (!this.#n) {
      if (!this.#g) {
        this.#r?.unselect();
        return;
      }
      ((this as any).hideDropdown as any)(), ((this.#t as any).focus as any)({
        preventScroll: !0,
        focusVisible: this.#a
      });
    }
  }
  updateColor(t: any): any {
    if (this.#e && (((this.#e as any).style as any).backgroundColor = t), !this.#s) return;
    const e: any = (((this.#l as any).highlightColors as any).values as any)();
    for (const s of (this.#s as any).children) (s as any).ariaSelected = ((((e as any).next as any)() as any).value as any) === (((t as any).toUpperCase as any)() as any);
  }
  destroy(): any {
    this.#t?.remove(), this.#t = null, this.#e = null, this.#s?.remove(), this.#s = null;
  }
}
class _e {
  [key: string]: any;
  #t: any = null;
  #e: any = null;
  #i: any = null;
  static #s: any = null;
  constructor(t: any) {
    this.#e = t, this.#i = (t as any)._uiManager, _e.#s ||= ((Object as any).freeze as any)({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    });
  }
  renderButton(): any {
    if (this.#t) return this.#t;
    const {
        editorType: t,
        colorType: e,
        colorValue: s
      }: any = this.#e,
      i: any = this.#t = ((document as any).createElement as any)("input");
    return (i as any).type = "color", (i as any).value = s || "#000000", (i as any).className = "basicColorPicker", (i as any).tabIndex = 0, ((i as any).setAttribute as any)("data-l10n-id", (_e.#s as any)[t]), ((i as any).addEventListener as any)("input", (): any => {
      ((this.#i as any).updateParams as any)(e, (i as any).value);
    }, {
      signal: (this.#i as any)._signal
    }), i;
  }
  update(t: any): any {
    this.#t && ((this.#t as any).value = t);
  }
  destroy(): any {
    this.#t?.remove(), this.#t = null;
  }
  hideDropdown(): any {}
}
function fi(this: any, d: any): any {
  return ((((((Math as any).floor as any)((((Math as any).max as any)(0, ((Math as any).min as any)(1, d)) as any) * (255 as any)) as any).toString as any)(16) as any).padStart as any)(2, "0");
}
function de(this: any, d: any): any {
  return ((Math as any).max as any)(0, ((Math as any).min as any)(255, (255 as any) * (d as any)));
}
class pi {
  [key: string]: any;
  static CMYK_G([t, e, s, i]: any): any {
    return ["G", (1 as any) - (((Math as any).min as any)(1, ((((.3 as any) * (t as any) as any) + ((.59 as any) * (s as any) as any) as any) + ((.11 as any) * (e as any) as any) as any) + (i as any)) as any)];
  }
  static G_CMYK([t]: any): any {
    return ["CMYK", 0, 0, 0, (1 as any) - (t as any)];
  }
  static G_RGB([t]: any): any {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]: any): any {
    return t = (de as any)(t), [t, t, t];
  }
  static G_HTML([t]: any): any {
    const e: any = (fi as any)(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]: any): any {
    return ["G", (((.3 as any) * (t as any) as any) + ((.59 as any) * (e as any) as any) as any) + ((.11 as any) * (s as any) as any)];
  }
  static RGB_rgb(t: any): any {
    return ((t as any).map as any)(de);
  }
  static RGB_HTML(t: any): any {
    return `#${((((t as any).map as any)(fi) as any).join as any)("")}`;
  }
  static T_HTML(): any {
    return "#00000000";
  }
  static T_rgb(): any {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]: any): any {
    return ["RGB", (1 as any) - (((Math as any).min as any)(1, (t as any) + (i as any)) as any), (1 as any) - (((Math as any).min as any)(1, (s as any) + (i as any)) as any), (1 as any) - (((Math as any).min as any)(1, (e as any) + (i as any)) as any)];
  }
  static CMYK_rgb([t, e, s, i]: any): any {
    return [(de as any)((1 as any) - (((Math as any).min as any)(1, (t as any) + (i as any)) as any)), (de as any)((1 as any) - (((Math as any).min as any)(1, (s as any) + (i as any)) as any)), (de as any)((1 as any) - (((Math as any).min as any)(1, (e as any) + (i as any)) as any))];
  }
  static CMYK_HTML(t: any): any {
    const e: any = ((((this as any).CMYK_RGB as any)(t) as any).slice as any)(1);
    return ((this as any).RGB_HTML as any)(e);
  }
  static RGB_CMYK([t, e, s]: any): any {
    const i: any = (1 as any) - (t as any),
      n: any = (1 as any) - (e as any),
      r: any = (1 as any) - (s as any),
      a: any = ((Math as any).min as any)(i, n, r);
    return ["CMYK", i, n, r, a];
  }
}
class xr {
  [key: string]: any;
  create(t: any, e: any, s: any = !1): any {
    if ((t as any) <= (0 as any) || (e as any) <= (0 as any)) throw new (Error as any)("Invalid SVG dimensions");
    const i: any = ((this as any)._createSVG as any)("svg:svg");
    return ((i as any).setAttribute as any)("version", "1.1"), s || (((i as any).setAttribute as any)("width", `${t}px`), ((i as any).setAttribute as any)("height", `${e}px`)), ((i as any).setAttribute as any)("preserveAspectRatio", "none"), ((i as any).setAttribute as any)("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t: any): any {
    if ((typeof t as any) != ("string" as any)) throw new (Error as any)("Invalid SVG element type");
    return ((this as any)._createSVG as any)(t);
  }
  _createSVG(t: any): any {
    (G as any)("Abstract method `_createSVG` called.");
  }
}
class Ve extends (xr as any) {
  [key: string]: any;
  _createSVG(t: any): any {
    return ((document as any).createElementNS as any)(Rt, t);
  }
}
const Tr: number = 9,
  Xt: any = new (WeakSet as any)(),
  Pr: any = ((((new (Date as any)() as any).getTimezoneOffset as any)() as any) * (60 as any) as any) * (1e3 as any);
class gi {
  [key: string]: any;
  static create(t: any): any {
    switch (((t as any).data as any).annotationType) {
      case (et as any).LINK:
        return new (Is as any)(t);
      case (et as any).TEXT:
        return new (Mr as any)(t);
      case (et as any).WIDGET:
        switch (((t as any).data as any).fieldType) {
          case "Tx":
            return new (Rr as any)(t);
          case "Btn":
            return ((t as any).data as any).radioButton ? new ($i as any)(t) : ((t as any).data as any).checkBox ? new (Lr as any)(t) : new (Ir as any)(t);
          case "Ch":
            return new (Fr as any)(t);
          case "Sig":
            return new (Dr as any)(t);
        }
        return new (Yt as any)(t);
      case (et as any).POPUP:
        return new (ws as any)(t);
      case (et as any).FREETEXT:
        return new (zi as any)(t);
      case (et as any).LINE:
        return new (Or as any)(t);
      case (et as any).SQUARE:
        return new (Br as any)(t);
      case (et as any).CIRCLE:
        return new (Hr as any)(t);
      case (et as any).POLYLINE:
        return new (ji as any)(t);
      case (et as any).CARET:
        return new ($r as any)(t);
      case (et as any).INK:
        return new (Fs as any)(t);
      case (et as any).POLYGON:
        return new (Ur as any)(t);
      case (et as any).HIGHLIGHT:
        return new (Gi as any)(t);
      case (et as any).UNDERLINE:
        return new (zr as any)(t);
      case (et as any).SQUIGGLY:
        return new (jr as any)(t);
      case (et as any).STRIKEOUT:
        return new (Gr as any)(t);
      case (et as any).STAMP:
        return new (Vi as any)(t);
      case (et as any).FILEATTACHMENT:
        return new (Vr as any)(t);
      default:
        return new (K as any)(t);
    }
  }
}
class K {
  declare popup: any;
  declare container: any;
  declare parent: any;
  declare _fieldObjects: any;
  declare hasJSActions: any;
  declare enableScripting: any;
  declare enableComment: any;
  declare annotationStorage: any;
  declare svgFactory: any;
  declare renderForms: any;
  declare imageResourcesPath: any;
  declare downloadManager: any;
  declare linkService: any;
  declare layer: any;
  declare data: any;
  declare isRenderable: any;
  [key: string]: any;
  #t: any = null;
  #e: any = !1;
  #i: any = null;
  constructor(t: any, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  }: any = {}) {
    (this as any).isRenderable = e, (this as any).data = (t as any).data, (this as any).layer = (t as any).layer, (this as any).linkService = (t as any).linkService, (this as any).downloadManager = (t as any).downloadManager, (this as any).imageResourcesPath = (t as any).imageResourcesPath, (this as any).renderForms = (t as any).renderForms, (this as any).svgFactory = (t as any).svgFactory, (this as any).annotationStorage = (t as any).annotationStorage, (this as any).enableComment = (t as any).enableComment, (this as any).enableScripting = (t as any).enableScripting, (this as any).hasJSActions = (t as any).hasJSActions, (this as any)._fieldObjects = (t as any).fieldObjects, (this as any).parent = (t as any).parent, e && ((this as any).container = ((this as any)._createContainer as any)(s)), i && ((this as any)._createQuadrilaterals as any)();
  }
  static _hasPopupData({
    contentsObj: t,
    richText: e
  }: any): any {
    return !!(t?.str || e?.str);
  }
  get _isEditable(): any {
    return ((this as any).data as any).isEditable;
  }
  get hasPopupData(): any {
    return ((K as any)._hasPopupData as any)((this as any).data) || (this as any).enableComment && !!(this as any).commentText;
  }
  get commentData(): any {
    const {
        data: t
      }: any = this,
      e: any = (this as any).annotationStorage?.getEditor((t as any).id);
    return e ? ((e as any).getData as any)() : t;
  }
  get hasCommentButton(): any {
    return (this as any).enableComment && (this as any).hasPopupElement;
  }
  get commentButtonPosition(): any {
    const t: any = (this as any).annotationStorage?.getEditor(((this as any).data as any).id);
    if (t) return (t as any).commentButtonPositionInPage;
    const {
      quadPoints: e,
      inkLists: s,
      rect: i
    }: any = (this as any).data;
    let n: any = (-1 as any) / (0 as any),
      r: any = (-1 as any) / (0 as any);
    if ((e?.length as any) >= (8 as any)) {
      for (let a: any = 0; (a as any) < ((e as any).length as any); a += 8) ((e as any)[(a as any) + (1 as any)] as any) > (r as any) ? (r = (e as any)[(a as any) + (1 as any)], n = (e as any)[(a as any) + (2 as any)]) : ((e as any)[(a as any) + (1 as any)] as any) === (r as any) && (n = ((Math as any).max as any)(n, (e as any)[(a as any) + (2 as any)]));
      return [n, r];
    }
    if ((s?.length as any) >= (1 as any)) {
      for (const a of s) for (let o: any = 0, l: any = (a as any).length; (o as any) < (l as any); o += 2) ((a as any)[(o as any) + (1 as any)] as any) > (r as any) ? (r = (a as any)[(o as any) + (1 as any)], n = (a as any)[o]) : ((a as any)[(o as any) + (1 as any)] as any) === (r as any) && (n = ((Math as any).max as any)(n, (a as any)[o]));
      if ((n as any) !== ((1 as any) / (0 as any) as any)) return [n, r];
    }
    return i ? [(i as any)[2], (i as any)[3]] : null;
  }
  _normalizePoint(t: any): any {
    const {
      page: {
        view: e
      },
      viewport: {
        rawDims: {
          pageWidth: s,
          pageHeight: i,
          pageX: n,
          pageY: r
        }
      }
    }: any = (this as any).parent;
    return (t as any)[1] = (((e as any)[3] as any) - ((t as any)[1] as any) as any) + ((e as any)[1] as any), (t as any)[0] = ((100 as any) * (((t as any)[0] as any) - (n as any) as any) as any) / (s as any), (t as any)[1] = ((100 as any) * (((t as any)[1] as any) - (r as any) as any) as any) / (i as any), t;
  }
  get commentText(): any {
    const {
      data: t
    }: any = this;
    return (((this as any).annotationStorage as any).getRawValue as any)(`${ye}${(t as any).id}`)?.popup?.contents || (t as any).contentsObj?.str || "";
  }
  set commentText(t: any) {
    const {
        data: e
      }: any = this,
      s: any = {
        deleted: !t,
        contents: t || ""
      };
    (((this as any).annotationStorage as any).updateEditor as any)((e as any).id, {
      popup: s
    }) || (((this as any).annotationStorage as any).setValue as any)(`${ye}${(e as any).id}`, {
      id: (e as any).id,
      annotationType: (e as any).annotationType,
      pageIndex: (((this as any).parent as any).page as any)._pageIndex,
      popup: s,
      popupRef: (e as any).popupRef,
      modificationDate: new (Date as any)()
    }), t || ((this as any).removePopup as any)();
  }
  removePopup(): any {
    (this.#i?.popup || (this as any).popup)?.remove(), this.#i = (this as any).popup = null;
  }
  updateEdited(t: any): any {
    if (!(this as any).container) return;
    (t as any).rect && (this.#t ||= {
      rect: ((((this as any).data as any).rect as any).slice as any)(0)
    });
    const {
      rect: e,
      popup: s
    }: any = t;
    e && (this.#s as any)(e);
    let i: any = this.#i?.popup || (this as any).popup;
    !i && s?.text && (((this as any)._createPopup as any)(s), i = (this.#i as any).popup), i && (((i as any).updateEdited as any)(t), s?.deleted && (((i as any).remove as any)(), this.#i = null, (this as any).popup = null));
  }
  resetEdited(): any {
    this.#t && ((this.#s as any)((this.#t as any).rect), this.#i?.popup.resetEdited(), this.#t = null);
  }
  #s(t: any): any {
    const {
      container: {
        style: e
      },
      data: {
        rect: s,
        rotation: i
      },
      parent: {
        viewport: {
          rawDims: {
            pageWidth: n,
            pageHeight: r,
            pageX: a,
            pageY: o
          }
        }
      }
    }: any = this;
    s?.splice(0, 4, ...t), (e as any).left = `${((100 as any) * (((t as any)[0] as any) - (a as any) as any) as any) / (n as any)}%`, (e as any).top = `${((100 as any) * (((r as any) - ((t as any)[3] as any) as any) + (o as any) as any) as any) / (r as any)}%`, (i as any) === (0 as any) ? ((e as any).width = `${((100 as any) * (((t as any)[2] as any) - ((t as any)[0] as any) as any) as any) / (n as any)}%`, (e as any).height = `${((100 as any) * (((t as any)[3] as any) - ((t as any)[1] as any) as any) as any) / (r as any)}%`) : ((this as any).setRotation as any)(i);
  }
  _createContainer(t: any): any {
    const {
        data: e,
        parent: {
          page: s,
          viewport: i
        }
      }: any = this,
      n: any = ((document as any).createElement as any)("section");
    ((n as any).setAttribute as any)("data-annotation-id", (e as any).id), !(this instanceof Yt) && !(this instanceof Is) && ((n as any).tabIndex = 0);
    const {
      style: r
    }: any = n;
    if ((r as any).zIndex = ((this as any).parent as any).zIndex, ((this as any).parent as any).zIndex += 2, (e as any).alternativeText && ((n as any).title = (e as any).alternativeText), (e as any).noRotate && (((n as any).classList as any).add as any)("norotate"), !(e as any).rect || this instanceof ws) {
      const {
        rotation: p
      }: any = e;
      return !(e as any).hasOwnCanvas && (p as any) !== (0 as any) && ((this as any).setRotation as any)(p, n), n;
    }
    const {
      width: a,
      height: o
    }: any = this;
    if (!t && (((e as any).borderStyle as any).width as any) > (0 as any)) {
      (r as any).borderWidth = `${((e as any).borderStyle as any).width}px`;
      const p: any = ((e as any).borderStyle as any).horizontalCornerRadius,
        b: any = ((e as any).borderStyle as any).verticalCornerRadius;
      if ((p as any) > (0 as any) || (b as any) > (0 as any)) {
        const y: any = `calc(${p}px * var(--total-scale-factor)) / calc(${b}px * var(--total-scale-factor))`;
        (r as any).borderRadius = y;
      } else if (this instanceof $i) {
        const y: any = `calc(${a}px * var(--total-scale-factor)) / calc(${o}px * var(--total-scale-factor))`;
        (r as any).borderRadius = y;
      }
      switch (((e as any).borderStyle as any).style) {
        case (Qt as any).SOLID:
          (r as any).borderStyle = "solid";
          break;
        case (Qt as any).DASHED:
          (r as any).borderStyle = "dashed";
          break;
        case (Qt as any).BEVELED:
          (I as any)("Unimplemented border style: beveled");
          break;
        case (Qt as any).INSET:
          (I as any)("Unimplemented border style: inset");
          break;
        case (Qt as any).UNDERLINE:
          (r as any).borderBottomStyle = "solid";
          break;
      }
      const m: any = (e as any).borderColor || null;
      m ? (this.#e = !0, (r as any).borderColor = ((P as any).makeHexColor as any)(((m as any)[0] as any) | (0 as any), ((m as any)[1] as any) | (0 as any), ((m as any)[2] as any) | (0 as any))) : (r as any).borderWidth = 0;
    }
    const l: any = ((P as any).normalizeRect as any)([((e as any).rect as any)[0], ((((s as any).view as any)[3] as any) - (((e as any).rect as any)[1] as any) as any) + (((s as any).view as any)[1] as any), ((e as any).rect as any)[2], ((((s as any).view as any)[3] as any) - (((e as any).rect as any)[3] as any) as any) + (((s as any).view as any)[1] as any)]),
      {
        pageWidth: h,
        pageHeight: c,
        pageX: u,
        pageY: f
      }: any = (i as any).rawDims;
    (r as any).left = `${((100 as any) * (((l as any)[0] as any) - (u as any) as any) as any) / (h as any)}%`, (r as any).top = `${((100 as any) * (((l as any)[1] as any) - (f as any) as any) as any) / (c as any)}%`;
    const {
      rotation: g
    }: any = e;
    return (e as any).hasOwnCanvas || (g as any) === (0 as any) ? ((r as any).width = `${((100 as any) * (a as any) as any) / (h as any)}%`, (r as any).height = `${((100 as any) * (o as any) as any) / (c as any)}%`) : ((this as any).setRotation as any)(g, n), n;
  }
  setRotation(t: any, e: any = (this as any).container): any {
    if (!((this as any).data as any).rect) return;
    const {
      pageWidth: s,
      pageHeight: i
    }: any = (((this as any).parent as any).viewport as any).rawDims;
    let {
      width: n,
      height: r
    }: any = this;
    ((t as any) % (180 as any) as any) !== (0 as any) && ([n, r] = [r, n]), ((e as any).style as any).width = `${((100 as any) * (n as any) as any) / (s as any)}%`, ((e as any).style as any).height = `${((100 as any) * (r as any) as any) / (i as any)}%`, ((e as any).setAttribute as any)("data-main-rotation", ((360 as any) - (t as any) as any) % (360 as any));
  }
  get _commonActions(): any {
    const t: any = (e: any, s: any, i: any): any => {
      const n: any = ((i as any).detail as any)[e],
        r: any = (n as any)[0],
        a: any = ((n as any).slice as any)(1);
      (((i as any).target as any).style as any)[s] = ((pi as any)[`${r}_HTML`] as any)(a), (((this as any).annotationStorage as any).setValue as any)(((this as any).data as any).id, {
        [s]: ((pi as any)[`${r}_rgb`] as any)(a)
      });
    };
    return (N as any)(this, "_commonActions", {
      display: (e: any): any => {
        const {
            display: s
          }: any = (e as any).detail,
          i: any = ((s as any) % (2 as any) as any) === (1 as any);
        (((this as any).container as any).style as any).visibility = i ? "hidden" : "visible", (((this as any).annotationStorage as any).setValue as any)(((this as any).data as any).id, {
          noView: i,
          noPrint: (s as any) === (1 as any) || (s as any) === (2 as any)
        });
      },
      print: (e: any): any => {
        (((this as any).annotationStorage as any).setValue as any)(((this as any).data as any).id, {
          noPrint: !((e as any).detail as any).print
        });
      },
      hidden: (e: any): any => {
        const {
          hidden: s
        }: any = (e as any).detail;
        (((this as any).container as any).style as any).visibility = s ? "hidden" : "visible", (((this as any).annotationStorage as any).setValue as any)(((this as any).data as any).id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (e: any): any => {
        (setTimeout as any)((): any => (((e as any).target as any).focus as any)({
          preventScroll: !1
        }), 0);
      },
      userName: (e: any): any => {
        ((e as any).target as any).title = ((e as any).detail as any).userName;
      },
      readonly: (e: any): any => {
        ((e as any).target as any).disabled = ((e as any).detail as any).readonly;
      },
      required: (e: any): any => {
        ((this as any)._setRequired as any)((e as any).target, ((e as any).detail as any).required);
      },
      bgColor: (e: any): any => {
        (t as any)("bgColor", "backgroundColor", e);
      },
      fillColor: (e: any): any => {
        (t as any)("fillColor", "backgroundColor", e);
      },
      fgColor: (e: any): any => {
        (t as any)("fgColor", "color", e);
      },
      textColor: (e: any): any => {
        (t as any)("textColor", "color", e);
      },
      borderColor: (e: any): any => {
        (t as any)("borderColor", "borderColor", e);
      },
      strokeColor: (e: any): any => {
        (t as any)("strokeColor", "borderColor", e);
      },
      rotation: (e: any): any => {
        const s: any = ((e as any).detail as any).rotation;
        ((this as any).setRotation as any)(s), (((this as any).annotationStorage as any).setValue as any)(((this as any).data as any).id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(t: any, e: any): any {
    const s: any = (this as any)._commonActions;
    for (const i of ((Object as any).keys as any)((e as any).detail)) ((t as any)[i] || (s as any)[i])?.(e);
  }
  _setDefaultPropertiesFromJS(t: any): any {
    if (!(this as any).enableScripting) return;
    const e: any = (((this as any).annotationStorage as any).getRawValue as any)(((this as any).data as any).id);
    if (!e) return;
    const s: any = (this as any)._commonActions;
    for (const [i, n] of ((Object as any).entries as any)(e)) {
      const r: any = (s as any)[i];
      if (r) {
        const a: any = {
          detail: {
            [i]: n
          },
          target: t
        };
        (r as any)(a), delete (e as any)[i];
      }
    }
  }
  _createQuadrilaterals(): any {
    if (!(this as any).container) return;
    const {
      quadPoints: t
    }: any = (this as any).data;
    if (!t) return;
    const [e, s, i, n]: any = ((((this as any).data as any).rect as any).map as any)((p: any): any => ((Math as any).fround as any)(p));
    if (((t as any).length as any) === (8 as any)) {
      const [p, b, m, y]: any = ((t as any).subarray as any)(2, 6);
      if ((i as any) === (p as any) && (n as any) === (b as any) && (e as any) === (m as any) && (s as any) === (y as any)) return;
    }
    const {
      style: r
    }: any = (this as any).container;
    let a: any;
    if (this.#e) {
      const {
        borderColor: p,
        borderWidth: b
      }: any = r;
      (r as any).borderWidth = 0, a = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${p}" stroke-width="${b}">`], ((((this as any).container as any).classList as any).add as any)("hasBorder");
    }
    const o: any = (i as any) - (e as any),
      l: any = (n as any) - (s as any),
      {
        svgFactory: h
      }: any = this,
      c: any = ((h as any).createElement as any)("svg");
    (((c as any).classList as any).add as any)("quadrilateralsContainer"), ((c as any).setAttribute as any)("width", 0), ((c as any).setAttribute as any)("height", 0), (c as any).role = "none";
    const u: any = ((h as any).createElement as any)("defs");
    ((c as any).append as any)(u);
    const f: any = ((h as any).createElement as any)("clipPath"),
      g: any = `clippath_${((this as any).data as any).id}`;
    ((f as any).setAttribute as any)("id", g), ((f as any).setAttribute as any)("clipPathUnits", "objectBoundingBox"), ((u as any).append as any)(f);
    for (let p: any = 2, b: any = (t as any).length; (p as any) < (b as any); p += 8) {
      const m: any = (t as any)[p],
        y: any = (t as any)[(p as any) + (1 as any)],
        A: any = (t as any)[(p as any) + (2 as any)],
        w: any = (t as any)[(p as any) + (3 as any)],
        v: any = ((h as any).createElement as any)("rect"),
        _: any = ((A as any) - (e as any) as any) / (o as any),
        S: any = ((n as any) - (y as any) as any) / (l as any),
        E: any = ((m as any) - (A as any) as any) / (o as any),
        C: any = ((y as any) - (w as any) as any) / (l as any);
      ((v as any).setAttribute as any)("x", _), ((v as any).setAttribute as any)("y", S), ((v as any).setAttribute as any)("width", E), ((v as any).setAttribute as any)("height", C), ((f as any).append as any)(v), a?.push(`<rect vector-effect="non-scaling-stroke" x="${_}" y="${S}" width="${E}" height="${C}"/>`);
    }
    this.#e && (((a as any).push as any)("</g></svg>')"), (r as any).backgroundImage = ((a as any).join as any)("")), (((this as any).container as any).append as any)(c), (((this as any).container as any).style as any).clipPath = `url(#${g})`;
  }
  _createPopup(t: any = null): any {
    const {
      data: e
    }: any = this;
    let s: any, i: any;
    t ? (s = {
      str: (t as any).text
    }, i = (t as any).date) : (s = (e as any).contentsObj, i = (e as any).modificationDate);
    const n: any = this.#i = new (ws as any)({
      data: {
        color: (e as any).color,
        titleObj: (e as any).titleObj,
        modificationDate: i,
        contentsObj: s,
        richText: (e as any).richText,
        parentRect: (e as any).rect,
        borderStyle: 0,
        id: `popup_${(e as any).id}`,
        rotation: (e as any).rotation,
        noRotate: !0
      },
      linkService: (this as any).linkService,
      parent: (this as any).parent,
      elements: [this]
    });
    ((this as any).parent as any)._commentManager || ((((this as any).parent as any).div as any).append as any)(((n as any).render as any)());
  }
  get hasPopupElement(): any {
    return !!(this.#i || (this as any).popup || ((this as any).data as any).popupRef);
  }
  get extraPopupElement(): any {
    return this.#i;
  }
  render(): any {
    (G as any)("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t: any, e: any = null): any {
    const s: any = [];
    if ((this as any)._fieldObjects) {
      const i: any = ((this as any)._fieldObjects as any)[t];
      if (i) for (const {
        page: n,
        id: r,
        exportValues: a
      } of i) {
        if ((n as any) === (-1 as any) || (r as any) === (e as any)) continue;
        const o: any = (typeof a as any) == ("string" as any) ? a : null,
          l: any = ((document as any).querySelector as any)(`[data-element-id="${r}"]`);
        if (l && !((Xt as any).has as any)(l)) {
          (I as any)(`_getElementsByName - element not allowed: ${r}`);
          continue;
        }
        ((s as any).push as any)({
          id: r,
          exportValue: o,
          domElement: l
        });
      }
      return s;
    }
    for (const i of ((document as any).getElementsByName as any)(t)) {
      const {
          exportValue: n
        }: any = i,
        r: any = ((i as any).getAttribute as any)("data-element-id");
      (r as any) !== (e as any) && ((Xt as any).has as any)(i) && ((s as any).push as any)({
        id: r,
        exportValue: n,
        domElement: i
      });
    }
    return s;
  }
  show(): any {
    (this as any).container && (((this as any).container as any).hidden = !1), (this as any).popup?.maybeShow();
  }
  hide(): any {
    (this as any).container && (((this as any).container as any).hidden = !0), (this as any).popup?.forceHide();
  }
  getElementsToTriggerPopup(): any {
    return (this as any).container;
  }
  addHighlightArea(): any {
    const t: any = ((this as any).getElementsToTriggerPopup as any)();
    if (((Array as any).isArray as any)(t)) for (const e of t) (((e as any).classList as any).add as any)("highlightArea");else (((t as any).classList as any).add as any)("highlightArea");
  }
  _editOnDoubleClick(): any {
    if (!(this as any)._isEditable) return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    }: any = this;
    (((this as any).container as any).addEventListener as any)("dblclick", (): any => {
      ((this as any).linkService as any).eventBus?.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e,
        mustEnterInEditMode: !0
      });
    });
  }
  get width(): any {
    return ((((this as any).data as any).rect as any)[2] as any) - ((((this as any).data as any).rect as any)[0] as any);
  }
  get height(): any {
    return ((((this as any).data as any).rect as any)[3] as any) - ((((this as any).data as any).rect as any)[1] as any);
  }
}
class kr extends (K as any) {
  declare container: any;
  declare editor: any;
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), (this as any).editor = (t as any).editor;
  }
  render(): any {
    return ((this as any).container as any).className = "editorAnnotation", (this as any).container;
  }
  createOrUpdatePopup(): any {
    const {
      editor: t
    }: any = this;
    (t as any).hasComment && (((this as any)._createPopup as any)((t as any).comment), ((((this as any).extraPopupElement as any).popup as any).renderCommentButton as any)());
  }
  get hasCommentButton(): any {
    return (this as any).enableComment && ((this as any).editor as any).hasComment;
  }
  get commentButtonPosition(): any {
    return ((this as any).editor as any).commentButtonPositionInPage;
  }
  get commentText(): any {
    return (((this as any).editor as any).comment as any).text;
  }
  set commentText(t: any) {
    ((this as any).editor as any).comment = t, t || ((this as any).removePopup as any)();
  }
  get commentData(): any {
    return (((this as any).editor as any).getData as any)();
  }
  remove(): any {
    (((this as any).container as any).remove as any)(), (this as any).container = null, ((this as any).removePopup as any)();
  }
}
class Is extends (K as any) {
  declare isTooltipOnly: any;
  [key: string]: any;
  constructor(t: any, e: any = null) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !!e?.ignoreBorder,
      createQuadrilaterals: !0
    }), (this as any).isTooltipOnly = ((t as any).data as any).isTooltipOnly;
  }
  render(): any {
    const {
        data: t,
        linkService: e
      }: any = this,
      s: any = ((document as any).createElement as any)("a");
    ((s as any).setAttribute as any)("data-element-id", (t as any).id);
    let i: any = !1;
    return (t as any).url ? (((e as any).addLinkAttributes as any)(s, (t as any).url, (t as any).newWindow), i = !0) : (t as any).action ? (((this as any)._bindNamedAction as any)(s, (t as any).action, (t as any).overlaidText), i = !0) : (t as any).attachment ? ((this.#e as any)(s, (t as any).attachment, (t as any).overlaidText, (t as any).attachmentDest), i = !0) : (t as any).setOCGState ? ((this.#i as any)(s, (t as any).setOCGState, (t as any).overlaidText), i = !0) : (t as any).dest ? (((this as any)._bindLink as any)(s, (t as any).dest, (t as any).overlaidText), i = !0) : ((t as any).actions && (((t as any).actions as any).Action || ((t as any).actions as any)["Mouse Up"] || ((t as any).actions as any)["Mouse Down"]) && (this as any).enableScripting && (this as any).hasJSActions && (((this as any)._bindJSAction as any)(s, t), i = !0), (t as any).resetForm ? (((this as any)._bindResetFormAction as any)(s, (t as any).resetForm), i = !0) : (this as any).isTooltipOnly && !i && (((this as any)._bindLink as any)(s, ""), i = !0)), ((((this as any).container as any).classList as any).add as any)("linkAnnotation"), i && (((this as any).container as any).append as any)(s), (this as any).container;
  }
  #t(): any {
    (((this as any).container as any).setAttribute as any)("data-internal-link", "");
  }
  _bindLink(t: any, e: any, s: any = ""): any {
    (t as any).href = (((this as any).linkService as any).getDestinationHash as any)(e), (t as any).onclick = (): any => (e && (((this as any).linkService as any).goToDestination as any)(e), !1), (e || (e as any) === ("" as any)) && (this.#t as any)(), s && ((t as any).title = s);
  }
  _bindNamedAction(t: any, e: any, s: any = ""): any {
    (t as any).href = (((this as any).linkService as any).getAnchorUrl as any)(""), (t as any).onclick = (): any => ((((this as any).linkService as any).executeNamedAction as any)(e), !1), s && ((t as any).title = s), (this.#t as any)();
  }
  #e(t: any, e: any, s: any = "", i: any = null): any {
    (t as any).href = (((this as any).linkService as any).getAnchorUrl as any)(""), (e as any).description ? (t as any).title = (e as any).description : s && ((t as any).title = s), (t as any).onclick = (): any => ((this as any).downloadManager?.openOrDownloadData((e as any).content, (e as any).filename, i), !1), (this.#t as any)();
  }
  #i(t: any, e: any, s: any = ""): any {
    (t as any).href = (((this as any).linkService as any).getAnchorUrl as any)(""), (t as any).onclick = (): any => ((((this as any).linkService as any).executeSetOCGState as any)(e), !1), s && ((t as any).title = s), (this.#t as any)();
  }
  _bindJSAction(t: any, e: any): any {
    (t as any).href = (((this as any).linkService as any).getAnchorUrl as any)("");
    const s: any = new (Map as any)([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const i of ((Object as any).keys as any)((e as any).actions)) {
      const n: any = ((s as any).get as any)(i);
      n && ((t as any)[n] = (): any => (((this as any).linkService as any).eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: (e as any).id,
          name: i
        }
      }), !1));
    }
    (e as any).overlaidText && ((t as any).title = (e as any).overlaidText), (t as any).onclick || ((t as any).onclick = (): any => !1), (this.#t as any)();
  }
  _bindResetFormAction(t: any, e: any): any {
    const s: any = (t as any).onclick;
    if (s || ((t as any).href = (((this as any).linkService as any).getAnchorUrl as any)("")), (this.#t as any)(), !(this as any)._fieldObjects) {
      (I as any)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), s || ((t as any).onclick = (): any => !1);
      return;
    }
    (t as any).onclick = (): any => {
      s?.();
      const {
          fields: i,
          refs: n,
          include: r
        }: any = e,
        a: any = [];
      if (((i as any).length as any) !== (0 as any) || ((n as any).length as any) !== (0 as any)) {
        const h: any = new (Set as any)(n);
        for (const c of i) {
          const u: any = ((this as any)._fieldObjects as any)[c] || [];
          for (const {
            id: f
          } of u) ((h as any).add as any)(f);
        }
        for (const c of ((Object as any).values as any)((this as any)._fieldObjects)) for (const u of c) (((h as any).has as any)((u as any).id) as any) === (r as any) && ((a as any).push as any)(u);
      } else for (const h of ((Object as any).values as any)((this as any)._fieldObjects)) ((a as any).push as any)(...h);
      const o: any = (this as any).annotationStorage,
        l: any = [];
      for (const h of a) {
        const {
          id: c
        }: any = h;
        switch (((l as any).push as any)(c), (h as any).type) {
          case "text":
            {
              const f: any = (h as any).defaultValue || "";
              ((o as any).setValue as any)(c, {
                value: f
              });
              break;
            }
          case "checkbox":
          case "radiobutton":
            {
              const f: any = ((h as any).defaultValue as any) === ((h as any).exportValues as any);
              ((o as any).setValue as any)(c, {
                value: f
              });
              break;
            }
          case "combobox":
          case "listbox":
            {
              const f: any = (h as any).defaultValue || "";
              ((o as any).setValue as any)(c, {
                value: f
              });
              break;
            }
          default:
            continue;
        }
        const u: any = ((document as any).querySelector as any)(`[data-element-id="${c}"]`);
        if (u) {
          if (!((Xt as any).has as any)(u)) {
            (I as any)(`_bindResetFormAction - element not allowed: ${c}`);
            continue;
          }
        } else continue;
        ((u as any).dispatchEvent as any)(new (Event as any)("resetform"));
      }
      return (this as any).enableScripting && ((this as any).linkService as any).eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: l,
          name: "ResetForm"
        }
      }), !1;
    };
  }
}
class Mr extends (K as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !0
    });
  }
  render(): any {
    ((((this as any).container as any).classList as any).add as any)("textAnnotation");
    const t: any = ((document as any).createElement as any)("img");
    return (t as any).src = ((((this as any).imageResourcesPath as any) + ("annotation-" as any) as any) + (((((this as any).data as any).name as any).toLowerCase as any)() as any) as any) + (".svg" as any), ((t as any).setAttribute as any)("data-l10n-id", "pdfjs-text-annotation-type"), ((t as any).setAttribute as any)("data-l10n-args", ((JSON as any).stringify as any)({
      type: ((this as any).data as any).name
    })), !((this as any).data as any).popupRef && (this as any).hasPopupData && ((this as any)._createPopup as any)(), (((this as any).container as any).append as any)(t), (this as any).container;
  }
}
class Yt extends (K as any) {
  [key: string]: any;
  render(): any {
    return (this as any).container;
  }
  showElementAndHideCanvas(t: any): any {
    ((this as any).data as any).hasOwnCanvas && (((t as any).previousSibling?.nodeName as any) === ("CANVAS" as any) && (((t as any).previousSibling as any).hidden = !0), (t as any).hidden = !1);
  }
  _getKeyModifier(t: any): any {
    return ((ot as any).platform as any).isMac ? (t as any).metaKey : (t as any).ctrlKey;
  }
  _setEventListener(t: any, e: any, s: any, i: any, n: any): any {
    ((s as any).includes as any)("mouse") ? ((t as any).addEventListener as any)(s, (r: any): any => {
      ((this as any).linkService as any).eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: ((this as any).data as any).id,
          name: i,
          value: (n as any)(r),
          shift: (r as any).shiftKey,
          modifier: ((this as any)._getKeyModifier as any)(r)
        }
      });
    }) : ((t as any).addEventListener as any)(s, (r: any): any => {
      if ((s as any) === ("blur" as any)) {
        if (!(e as any).focused || !(r as any).relatedTarget) return;
        (e as any).focused = !1;
      } else if ((s as any) === ("focus" as any)) {
        if ((e as any).focused) return;
        (e as any).focused = !0;
      }
      n && ((this as any).linkService as any).eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: ((this as any).data as any).id,
          name: i,
          value: (n as any)(r)
        }
      });
    });
  }
  _setEventListeners(t: any, e: any, s: any, i: any): any {
    for (const [n, r] of s) ((r as any) === ("Action" as any) || ((this as any).data as any).actions?.[r]) && (((r as any) === ("Focus" as any) || (r as any) === ("Blur" as any)) && (e ||= {
      focused: !1
    }), ((this as any)._setEventListener as any)(t, e, n, r, i), (r as any) === ("Focus" as any) && !((this as any).data as any).actions?.Blur ? ((this as any)._setEventListener as any)(t, e, "blur", "Blur", null) : (r as any) === ("Blur" as any) && !((this as any).data as any).actions?.Focus && ((this as any)._setEventListener as any)(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t: any): any {
    const e: any = ((this as any).data as any).backgroundColor || null;
    ((t as any).style as any).backgroundColor = (e as any) === (null as any) ? "transparent" : ((P as any).makeHexColor as any)((e as any)[0], (e as any)[1], (e as any)[2]);
  }
  _setTextStyle(t: any): any {
    const e: any = ["left", "center", "right"],
      {
        fontColor: s
      }: any = ((this as any).data as any).defaultAppearanceData,
      i: any = (((this as any).data as any).defaultAppearanceData as any).fontSize || Tr,
      n: any = (t as any).style;
    let r: any;
    const a: number = 2,
      o: any = (l: any): any => (((Math as any).round as any)((10 as any) * (l as any)) as any) / (10 as any);
    if (((this as any).data as any).multiLine) {
      const l: any = ((Math as any).abs as any)((((((this as any).data as any).rect as any)[3] as any) - ((((this as any).data as any).rect as any)[1] as any) as any) - (a as any)),
        h: any = ((Math as any).round as any)((l as any) / ((is as any) * (i as any) as any)) || 1,
        c: any = (l as any) / (h as any);
      r = ((Math as any).min as any)(i, (o as any)((c as any) / (is as any)));
    } else {
      const l: any = ((Math as any).abs as any)((((((this as any).data as any).rect as any)[3] as any) - ((((this as any).data as any).rect as any)[1] as any) as any) - (a as any));
      r = ((Math as any).min as any)(i, (o as any)((l as any) / (is as any)));
    }
    (n as any).fontSize = `calc(${r}px * var(--total-scale-factor))`, (n as any).color = ((P as any).makeHexColor as any)((s as any)[0], (s as any)[1], (s as any)[2]), (((this as any).data as any).textAlignment as any) !== (null as any) && ((n as any).textAlign = (e as any)[((this as any).data as any).textAlignment]);
  }
  _setRequired(t: any, e: any): any {
    e ? ((t as any).setAttribute as any)("required", !0) : ((t as any).removeAttribute as any)("required"), ((t as any).setAttribute as any)("aria-required", e);
  }
}
class Rr extends (Yt as any) {
  [key: string]: any;
  constructor(t: any) {
    const e: any = (t as any).renderForms || ((t as any).data as any).hasOwnCanvas || !((t as any).data as any).hasAppearance && !!((t as any).data as any).fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t: any, e: any, s: any, i: any): any {
    const n: any = (this as any).annotationStorage;
    for (const r of ((this as any)._getElementsByName as any)((t as any).name, (t as any).id)) (r as any).domElement && (((r as any).domElement as any)[e] = s), ((n as any).setValue as any)((r as any).id, {
      [i]: s
    });
  }
  render(): any {
    const t: any = (this as any).annotationStorage,
      e: any = ((this as any).data as any).id;
    ((((this as any).container as any).classList as any).add as any)("textWidgetAnnotation");
    let s: any = null;
    if ((this as any).renderForms) {
      const i: any = ((t as any).getValue as any)(e, {
        value: ((this as any).data as any).fieldValue
      });
      let n: any = (i as any).value || "";
      const r: any = (((t as any).getValue as any)(e, {
        charLimit: ((this as any).data as any).maxLen
      }) as any).charLimit;
      r && ((n as any).length as any) > (r as any) && (n = ((n as any).slice as any)(0, r));
      let a: any = (i as any).formattedValue || ((this as any).data as any).textContent?.join(`
`) || null;
      a && ((this as any).data as any).comb && (a = ((a as any).replaceAll as any)(/\s+/g, ""));
      const o: any = {
        userValue: n,
        formattedValue: a,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      ((this as any).data as any).multiLine ? (s = ((document as any).createElement as any)("textarea"), (s as any).textContent = a ?? n, ((this as any).data as any).doNotScroll && (((s as any).style as any).overflowY = "hidden")) : (s = ((document as any).createElement as any)("input"), (s as any).type = ((this as any).data as any).password ? "password" : "text", ((s as any).setAttribute as any)("value", a ?? n), ((this as any).data as any).doNotScroll && (((s as any).style as any).overflowX = "hidden")), ((this as any).data as any).hasOwnCanvas && ((s as any).hidden = !0), ((Xt as any).add as any)(s), ((s as any).setAttribute as any)("data-element-id", e), (s as any).disabled = ((this as any).data as any).readOnly, (s as any).name = ((this as any).data as any).fieldName, (s as any).tabIndex = 0;
      const {
          datetimeFormat: l,
          datetimeType: h,
          timeStep: c
        }: any = (this as any).data,
        u: any = !!h && (this as any).enableScripting;
      l && ((s as any).title = l), ((this as any)._setRequired as any)(s, ((this as any).data as any).required), r && ((s as any).maxLength = r), ((s as any).addEventListener as any)("input", (g: any): any => {
        ((t as any).setValue as any)(e, {
          value: ((g as any).target as any).value
        }), ((this as any).setPropertyOnSiblings as any)(s, "value", ((g as any).target as any).value, "value"), (o as any).formattedValue = null;
      }), ((s as any).addEventListener as any)("resetform", (g: any): any => {
        const p: any = ((this as any).data as any).defaultFieldValue ?? "";
        (s as any).value = (o as any).userValue = p, (o as any).formattedValue = null;
      });
      let f: any = (g: any): any => {
        const {
          formattedValue: p
        }: any = o;
        (p as any) != (null as any) && (((g as any).target as any).value = p), ((g as any).target as any).scrollLeft = 0;
      };
      if ((this as any).enableScripting && (this as any).hasJSActions) {
        ((s as any).addEventListener as any)("focus", (p: any): any => {
          if ((o as any).focused) return;
          const {
            target: b
          }: any = p;
          if (u && ((b as any).type = h, c && ((b as any).step = c)), (o as any).userValue) {
            const m: any = (o as any).userValue;
            if (u) {
              if ((h as any) === ("time" as any)) {
                const y: any = new (Date as any)(m),
                  A: any = [((y as any).getHours as any)(), ((y as any).getMinutes as any)(), ((y as any).getSeconds as any)()];
                (b as any).value = ((((A as any).map as any)((w: any): any => ((((w as any).toString as any)() as any).padStart as any)(2, "0")) as any).join as any)(":");
              } else (b as any).value = (((((new (Date as any)((m as any) - (Pr as any)) as any).toISOString as any)() as any).split as any)((h as any) === ("date" as any) ? "T" : ".", 1) as any)[0];
            } else (b as any).value = m;
          }
          (o as any).lastCommittedValue = (b as any).value, (o as any).commitKey = 1, ((this as any).data as any).actions?.Focus || ((o as any).focused = !0);
        }), ((s as any).addEventListener as any)("updatefromsandbox", (p: any): any => {
          ((this as any).showElementAndHideCanvas as any)((p as any).target);
          const b: any = {
            value(m: any): any {
              (o as any).userValue = ((m as any).detail as any).value ?? "", u || ((t as any).setValue as any)(e, {
                value: (((o as any).userValue as any).toString as any)()
              }), ((m as any).target as any).value = (o as any).userValue;
            },
            formattedValue(m: any): any {
              const {
                formattedValue: y
              }: any = (m as any).detail;
              (o as any).formattedValue = y, (y as any) != (null as any) && ((m as any).target as any) !== ((document as any).activeElement as any) && (((m as any).target as any).value = y);
              const A: any = {
                formattedValue: y
              };
              u && ((A as any).value = y), ((t as any).setValue as any)(e, A);
            },
            selRange(m: any): any {
              (((m as any).target as any).setSelectionRange as any)(...((m as any).detail as any).selRange);
            },
            charLimit: (m: any): any => {
              const {
                  charLimit: y
                }: any = (m as any).detail,
                {
                  target: A
                }: any = m;
              if ((y as any) === (0 as any)) {
                ((A as any).removeAttribute as any)("maxLength");
                return;
              }
              ((A as any).setAttribute as any)("maxLength", y);
              let w: any = (o as any).userValue;
              !w || ((w as any).length as any) <= (y as any) || (w = ((w as any).slice as any)(0, y), (A as any).value = (o as any).userValue = w, ((t as any).setValue as any)(e, {
                value: w
              }), ((this as any).linkService as any).eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: w,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: (A as any).selectionStart,
                  selEnd: (A as any).selectionEnd
                }
              }));
            }
          };
          ((this as any)._dispatchEventFromSandbox as any)(b, p);
        }), ((s as any).addEventListener as any)("keydown", (p: any): any => {
          (o as any).commitKey = 1;
          let b: any = -1;
          if (((p as any).key as any) === ("Escape" as any) ? b = 0 : ((p as any).key as any) === ("Enter" as any) && !((this as any).data as any).multiLine ? b = 2 : ((p as any).key as any) === ("Tab" as any) && ((o as any).commitKey = 3), (b as any) === (-1 as any)) return;
          const {
            value: m
          }: any = (p as any).target;
          ((o as any).lastCommittedValue as any) !== (m as any) && ((o as any).lastCommittedValue = m, (o as any).userValue = m, ((this as any).linkService as any).eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: m,
              willCommit: !0,
              commitKey: b,
              selStart: ((p as any).target as any).selectionStart,
              selEnd: ((p as any).target as any).selectionEnd
            }
          }));
        });
        const g: any = f;
        f = null, ((s as any).addEventListener as any)("blur", (p: any): any => {
          if (!(o as any).focused || !(p as any).relatedTarget) return;
          ((this as any).data as any).actions?.Blur || ((o as any).focused = !1);
          const {
            target: b
          }: any = p;
          let {
            value: m
          }: any = b;
          if (u) {
            if (m && (h as any) === ("time" as any)) {
              const y: any = ((((m as any).split as any)(":") as any).map as any)((A: any): any => (parseInt as any)(A, 10));
              m = ((new (Date as any)(2e3, 0, 1, (y as any)[0], (y as any)[1], (y as any)[2] || 0) as any).valueOf as any)(), (b as any).step = "";
            } else ((m as any).includes as any)("T") || (m = `${m}T00:00`), m = ((new (Date as any)(m) as any).valueOf as any)();
            (b as any).type = "text";
          }
          (o as any).userValue = m, ((o as any).lastCommittedValue as any) !== (m as any) && ((this as any).linkService as any).eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: m,
              willCommit: !0,
              commitKey: (o as any).commitKey,
              selStart: ((p as any).target as any).selectionStart,
              selEnd: ((p as any).target as any).selectionEnd
            }
          }), (g as any)(p);
        }), ((this as any).data as any).actions?.Keystroke && ((s as any).addEventListener as any)("beforeinput", (p: any): any => {
          (o as any).lastCommittedValue = null;
          const {
              data: b,
              target: m
            }: any = p,
            {
              value: y,
              selectionStart: A,
              selectionEnd: w
            }: any = m;
          let v: any = A,
            _: any = w;
          switch ((p as any).inputType) {
            case "deleteWordBackward":
              {
                const S: any = ((((y as any).substring as any)(0, A) as any).match as any)(/\w*[^\w]*$/);
                S && (v -= ((S as any)[0] as any).length);
                break;
              }
            case "deleteWordForward":
              {
                const S: any = ((((y as any).substring as any)(A) as any).match as any)(/^[^\w]*\w*/);
                S && (_ += ((S as any)[0] as any).length);
                break;
              }
            case "deleteContentBackward":
              (A as any) === (w as any) && (v -= 1);
              break;
            case "deleteContentForward":
              (A as any) === (w as any) && (_ += 1);
              break;
          }
          ((p as any).preventDefault as any)(), ((this as any).linkService as any).eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: y,
              change: b || "",
              willCommit: !1,
              selStart: v,
              selEnd: _
            }
          });
        }), ((this as any)._setEventListeners as any)(s, o, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (p: any): any => ((p as any).target as any).value);
      }
      if (f && ((s as any).addEventListener as any)("blur", f), ((this as any).data as any).comb) {
        const p: any = (((((this as any).data as any).rect as any)[2] as any) - ((((this as any).data as any).rect as any)[0] as any) as any) / (r as any);
        (((s as any).classList as any).add as any)("comb"), ((s as any).style as any).letterSpacing = `calc(${p}px * var(--total-scale-factor) - 1ch)`;
      }
    } else s = ((document as any).createElement as any)("div"), (s as any).textContent = ((this as any).data as any).fieldValue, ((s as any).style as any).verticalAlign = "middle", ((s as any).style as any).display = "table-cell", ((this as any).data as any).hasOwnCanvas && ((s as any).hidden = !0);
    return ((this as any)._setTextStyle as any)(s), ((this as any)._setBackgroundColor as any)(s), ((this as any)._setDefaultPropertiesFromJS as any)(s), (((this as any).container as any).append as any)(s), (this as any).container;
  }
}
class Dr extends (Yt as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !!((t as any).data as any).hasOwnCanvas
    });
  }
}
class Lr extends (Yt as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: (t as any).renderForms
    });
  }
  render(): any {
    const t: any = (this as any).annotationStorage,
      e: any = (this as any).data,
      s: any = (e as any).id;
    let i: any = (((t as any).getValue as any)(s, {
      value: ((e as any).exportValue as any) === ((e as any).fieldValue as any)
    }) as any).value;
    (typeof i as any) == ("string" as any) && (i = (i as any) !== ("Off" as any), ((t as any).setValue as any)(s, {
      value: i
    })), ((((this as any).container as any).classList as any).add as any)("buttonWidgetAnnotation", "checkBox");
    const n: any = ((document as any).createElement as any)("input");
    return ((Xt as any).add as any)(n), ((n as any).setAttribute as any)("data-element-id", s), (n as any).disabled = (e as any).readOnly, ((this as any)._setRequired as any)(n, ((this as any).data as any).required), (n as any).type = "checkbox", (n as any).name = (e as any).fieldName, i && ((n as any).setAttribute as any)("checked", !0), ((n as any).setAttribute as any)("exportValue", (e as any).exportValue), (n as any).tabIndex = 0, ((n as any).addEventListener as any)("change", (r: any): any => {
      const {
        name: a,
        checked: o
      }: any = (r as any).target;
      for (const l of ((this as any)._getElementsByName as any)(a, s)) {
        const h: any = o && ((l as any).exportValue as any) === ((e as any).exportValue as any);
        (l as any).domElement && (((l as any).domElement as any).checked = h), ((t as any).setValue as any)((l as any).id, {
          value: h
        });
      }
      ((t as any).setValue as any)(s, {
        value: o
      });
    }), ((n as any).addEventListener as any)("resetform", (r: any): any => {
      const a: any = (e as any).defaultFieldValue || "Off";
      ((r as any).target as any).checked = (a as any) === ((e as any).exportValue as any);
    }), (this as any).enableScripting && (this as any).hasJSActions && (((n as any).addEventListener as any)("updatefromsandbox", (r: any): any => {
      const a: any = {
        value(o: any): any {
          ((o as any).target as any).checked = (((o as any).detail as any).value as any) !== ("Off" as any), ((t as any).setValue as any)(s, {
            value: ((o as any).target as any).checked
          });
        }
      };
      ((this as any)._dispatchEventFromSandbox as any)(a, r);
    }), ((this as any)._setEventListeners as any)(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (r: any): any => ((r as any).target as any).checked)), ((this as any)._setBackgroundColor as any)(n), ((this as any)._setDefaultPropertiesFromJS as any)(n), (((this as any).container as any).append as any)(n), (this as any).container;
  }
}
class $i extends (Yt as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: (t as any).renderForms
    });
  }
  render(): any {
    ((((this as any).container as any).classList as any).add as any)("buttonWidgetAnnotation", "radioButton");
    const t: any = (this as any).annotationStorage,
      e: any = (this as any).data,
      s: any = (e as any).id;
    let i: any = (((t as any).getValue as any)(s, {
      value: ((e as any).fieldValue as any) === ((e as any).buttonValue as any)
    }) as any).value;
    if ((typeof i as any) == ("string" as any) && (i = (i as any) !== ((e as any).buttonValue as any), ((t as any).setValue as any)(s, {
      value: i
    })), i) for (const r of ((this as any)._getElementsByName as any)((e as any).fieldName, s)) ((t as any).setValue as any)((r as any).id, {
      value: !1
    });
    const n: any = ((document as any).createElement as any)("input");
    if (((Xt as any).add as any)(n), ((n as any).setAttribute as any)("data-element-id", s), (n as any).disabled = (e as any).readOnly, ((this as any)._setRequired as any)(n, ((this as any).data as any).required), (n as any).type = "radio", (n as any).name = (e as any).fieldName, i && ((n as any).setAttribute as any)("checked", !0), (n as any).tabIndex = 0, ((n as any).addEventListener as any)("change", (r: any): any => {
      const {
        name: a,
        checked: o
      }: any = (r as any).target;
      for (const l of ((this as any)._getElementsByName as any)(a, s)) ((t as any).setValue as any)((l as any).id, {
        value: !1
      });
      ((t as any).setValue as any)(s, {
        value: o
      });
    }), ((n as any).addEventListener as any)("resetform", (r: any): any => {
      const a: any = (e as any).defaultFieldValue;
      ((r as any).target as any).checked = (a as any) != (null as any) && (a as any) === ((e as any).buttonValue as any);
    }), (this as any).enableScripting && (this as any).hasJSActions) {
      const r: any = (e as any).buttonValue;
      ((n as any).addEventListener as any)("updatefromsandbox", (a: any): any => {
        const o: any = {
          value: (l: any): any => {
            const h: any = (r as any) === (((l as any).detail as any).value as any);
            for (const c of ((this as any)._getElementsByName as any)(((l as any).target as any).name)) {
              const u: any = h && ((c as any).id as any) === (s as any);
              (c as any).domElement && (((c as any).domElement as any).checked = u), ((t as any).setValue as any)((c as any).id, {
                value: u
              });
            }
          }
        };
        ((this as any)._dispatchEventFromSandbox as any)(o, a);
      }), ((this as any)._setEventListeners as any)(n, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a: any): any => ((a as any).target as any).checked);
    }
    return ((this as any)._setBackgroundColor as any)(n), ((this as any)._setDefaultPropertiesFromJS as any)(n), (((this as any).container as any).append as any)(n), (this as any).container;
  }
}
class Ir extends (Is as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      ignoreBorder: ((t as any).data as any).hasAppearance
    });
  }
  render(): any {
    const t: any = (super.render as any)();
    (((t as any).classList as any).add as any)("buttonWidgetAnnotation", "pushButton");
    const e: any = (t as any).lastChild;
    return (this as any).enableScripting && (this as any).hasJSActions && e && (((this as any)._setDefaultPropertiesFromJS as any)(e), ((e as any).addEventListener as any)("updatefromsandbox", (s: any): any => {
      ((this as any)._dispatchEventFromSandbox as any)({}, s);
    })), t;
  }
}
class Fr extends (Yt as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: (t as any).renderForms
    });
  }
  render(): any {
    ((((this as any).container as any).classList as any).add as any)("choiceWidgetAnnotation");
    const t: any = (this as any).annotationStorage,
      e: any = ((this as any).data as any).id,
      s: any = ((t as any).getValue as any)(e, {
        value: ((this as any).data as any).fieldValue
      }),
      i: any = ((document as any).createElement as any)("select");
    ((Xt as any).add as any)(i), ((i as any).setAttribute as any)("data-element-id", e), (i as any).disabled = ((this as any).data as any).readOnly, ((this as any)._setRequired as any)(i, ((this as any).data as any).required), (i as any).name = ((this as any).data as any).fieldName, (i as any).tabIndex = 0;
    let n: any = ((this as any).data as any).combo && ((((this as any).data as any).options as any).length as any) > (0 as any);
    ((this as any).data as any).combo || ((i as any).size = (((this as any).data as any).options as any).length, ((this as any).data as any).multiSelect && ((i as any).multiple = !0)), ((i as any).addEventListener as any)("resetform", (h: any): any => {
      const c: any = ((this as any).data as any).defaultFieldValue;
      for (const u of (i as any).options) (u as any).selected = ((u as any).value as any) === (c as any);
    });
    for (const h of ((this as any).data as any).options) {
      const c: any = ((document as any).createElement as any)("option");
      (c as any).textContent = (h as any).displayValue, (c as any).value = (h as any).exportValue, (((s as any).value as any).includes as any)((h as any).exportValue) && (((c as any).setAttribute as any)("selected", !0), n = !1), ((i as any).append as any)(c);
    }
    let r: any = null;
    if (n) {
      const h: any = ((document as any).createElement as any)("option");
      (h as any).value = " ", ((h as any).setAttribute as any)("hidden", !0), ((h as any).setAttribute as any)("selected", !0), ((i as any).prepend as any)(h), r = (): any => {
        ((h as any).remove as any)(), ((i as any).removeEventListener as any)("input", r), r = null;
      }, ((i as any).addEventListener as any)("input", r);
    }
    const a: any = (h: any): any => {
      const c: any = h ? "value" : "textContent",
        {
          options: u,
          multiple: f
        }: any = i;
      return f ? ((((((Array as any).prototype as any).filter as any).call as any)(u, (g: any): any => (g as any).selected) as any).map as any)((g: any): any => (g as any)[c]) : ((u as any).selectedIndex as any) === (-1 as any) ? null : ((u as any)[(u as any).selectedIndex] as any)[c];
    };
    let o: any = (a as any)(!1);
    const l: any = (h: any): any => {
      const c: any = ((h as any).target as any).options;
      return ((((Array as any).prototype as any).map as any).call as any)(c, (u: any): any => ({
        displayValue: (u as any).textContent,
        exportValue: (u as any).value
      }));
    };
    return (this as any).enableScripting && (this as any).hasJSActions ? (((i as any).addEventListener as any)("updatefromsandbox", (h: any): any => {
      const c: any = {
        value(u: any): any {
          r?.();
          const f: any = ((u as any).detail as any).value,
            g: any = new (Set as any)(((Array as any).isArray as any)(f) ? f : [f]);
          for (const p of (i as any).options) (p as any).selected = ((g as any).has as any)((p as any).value);
          ((t as any).setValue as any)(e, {
            value: (a as any)(!0)
          }), o = (a as any)(!1);
        },
        multipleSelection(u: any): any {
          (i as any).multiple = !0;
        },
        remove(u: any): any {
          const f: any = (i as any).options,
            g: any = ((u as any).detail as any).remove;
          ((f as any)[g] as any).selected = !1, ((i as any).remove as any)(g), ((f as any).length as any) > (0 as any) && (((((Array as any).prototype as any).findIndex as any).call as any)(f, (b: any): any => (b as any).selected) as any) === (-1 as any) && (((f as any)[0] as any).selected = !0), ((t as any).setValue as any)(e, {
            value: (a as any)(!0),
            items: (l as any)(u)
          }), o = (a as any)(!1);
        },
        clear(u: any): any {
          for (; ((i as any).length as any) !== (0 as any);) ((i as any).remove as any)(0);
          ((t as any).setValue as any)(e, {
            value: null,
            items: []
          }), o = (a as any)(!1);
        },
        insert(u: any): any {
          const {
              index: f,
              displayValue: g,
              exportValue: p
            }: any = ((u as any).detail as any).insert,
            b: any = ((i as any).children as any)[f],
            m: any = ((document as any).createElement as any)("option");
          (m as any).textContent = g, (m as any).value = p, b ? ((b as any).before as any)(m) : ((i as any).append as any)(m), ((t as any).setValue as any)(e, {
            value: (a as any)(!0),
            items: (l as any)(u)
          }), o = (a as any)(!1);
        },
        items(u: any): any {
          const {
            items: f
          }: any = (u as any).detail;
          for (; ((i as any).length as any) !== (0 as any);) ((i as any).remove as any)(0);
          for (const g of f) {
            const {
                displayValue: p,
                exportValue: b
              }: any = g,
              m: any = ((document as any).createElement as any)("option");
            (m as any).textContent = p, (m as any).value = b, ((i as any).append as any)(m);
          }
          (((i as any).options as any).length as any) > (0 as any) && ((((i as any).options as any)[0] as any).selected = !0), ((t as any).setValue as any)(e, {
            value: (a as any)(!0),
            items: (l as any)(u)
          }), o = (a as any)(!1);
        },
        indices(u: any): any {
          const f: any = new (Set as any)(((u as any).detail as any).indices);
          for (const g of ((u as any).target as any).options) (g as any).selected = ((f as any).has as any)((g as any).index);
          ((t as any).setValue as any)(e, {
            value: (a as any)(!0)
          }), o = (a as any)(!1);
        },
        editable(u: any): any {
          ((u as any).target as any).disabled = !((u as any).detail as any).editable;
        }
      };
      ((this as any)._dispatchEventFromSandbox as any)(c, h);
    }), ((i as any).addEventListener as any)("input", (h: any): any => {
      const c: any = (a as any)(!0),
        u: any = (a as any)(!1);
      ((t as any).setValue as any)(e, {
        value: c
      }), ((h as any).preventDefault as any)(), ((this as any).linkService as any).eventBus?.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: o,
          change: u,
          changeEx: c,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), ((this as any)._setEventListeners as any)(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (h: any): any => ((h as any).target as any).value)) : ((i as any).addEventListener as any)("input", function (this: any, h: any): any {
      ((t as any).setValue as any)(e, {
        value: (a as any)(!0)
      });
    }), ((this as any).data as any).combo && ((this as any)._setTextStyle as any)(i), ((this as any)._setBackgroundColor as any)(i), ((this as any)._setDefaultPropertiesFromJS as any)(i), (((this as any).container as any).append as any)(i), (this as any).container;
  }
}
class ws extends (K as any) {
  declare popup: any;
  declare elements: any;
  [key: string]: any;
  constructor(t: any) {
    const {
        data: e,
        elements: s,
        parent: i
      }: any = t,
      n: any = !!(i as any)._commentManager;
    if (super(t, {
      isRenderable: !n && ((K as any)._hasPopupData as any)(e)
    }), (this as any).elements = s, n && ((K as any)._hasPopupData as any)(e)) {
      const r: any = (this as any).popup = (this.#t as any)();
      for (const a of s) (a as any).popup = r;
    } else (this as any).popup = null;
  }
  #t(): any {
    return new (Nr as any)({
      container: (this as any).container,
      color: ((this as any).data as any).color,
      titleObj: ((this as any).data as any).titleObj,
      modificationDate: ((this as any).data as any).modificationDate || ((this as any).data as any).creationDate,
      contentsObj: ((this as any).data as any).contentsObj,
      richText: ((this as any).data as any).richText,
      rect: ((this as any).data as any).rect,
      parentRect: ((this as any).data as any).parentRect || null,
      parent: (this as any).parent,
      elements: (this as any).elements,
      open: ((this as any).data as any).open,
      commentManager: ((this as any).parent as any)._commentManager
    });
  }
  render(): any {
    const {
      container: t
    }: any = this;
    (((t as any).classList as any).add as any)("popupAnnotation"), (t as any).role = "comment";
    const e: any = (this as any).popup = (this.#t as any)(),
      s: any = [];
    for (const i of (this as any).elements) (i as any).popup = e, ((i as any).container as any).ariaHasPopup = "dialog", ((s as any).push as any)(((i as any).data as any).id), ((i as any).addHighlightArea as any)();
    return (((this as any).container as any).setAttribute as any)("aria-controls", ((((s as any).map as any)((i: any): any => `${Es}${i}`) as any).join as any)(",")), (this as any).container;
  }
}
class Nr {
  declare trigger: any;
  [key: string]: any;
  #t: any = null;
  #e: any = ((this.#G as any).bind as any)(this);
  #i: any = ((this.#H as any).bind as any)(this);
  #s: any = ((this.#L as any).bind as any)(this);
  #a: any = ((this.#v as any).bind as any)(this);
  #n: any = null;
  #r: any = null;
  #o: any = null;
  #h: any = null;
  #l: any = null;
  #u: any = null;
  #d: any = null;
  #f: any = !1;
  #m: any = null;
  #p: any = null;
  #c: any = null;
  #g: any = null;
  #b: any = null;
  #A: any = null;
  #y: any = null;
  #C: any = null;
  #S: any = null;
  #w: any = null;
  #T: any = !1;
  #_: any = null;
  #E: any = null;
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: n,
    contentsObj: r,
    richText: a,
    parent: o,
    rect: l,
    parentRect: h,
    open: c,
    commentManager: u = null
  }: any) {
    this.#r = t, this.#S = i, this.#o = r, this.#C = a, this.#u = o, this.#n = e, this.#y = l, this.#d = h, this.#l = s, this.#t = u, this.#_ = (s as any)[0], this.#h = ((fs as any).toDateObject as any)(n), (this as any).trigger = ((s as any).flatMap as any)((f: any): any => ((f as any).getElementsToTriggerPopup as any)()), u ? ((this as any).renderCommentButton as any)() : ((this.#M as any)(), (this.#r as any).hidden = !0, c && (this.#v as any)());
  }
  #M(): any {
    if (this.#p) return;
    this.#p = new (AbortController as any)();
    const {
      signal: t
    }: any = this.#p;
    for (const e of (this as any).trigger) ((e as any).addEventListener as any)("click", this.#a, {
      signal: t
    }), ((e as any).addEventListener as any)("pointerenter", this.#s, {
      signal: t
    }), ((e as any).addEventListener as any)("pointerleave", this.#i, {
      signal: t
    }), (((e as any).classList as any).add as any)("popupTriggerArea");
    for (const e of this.#l) (e as any).container?.addEventListener("keydown", this.#e, {
      signal: t
    });
  }
  #P(): any {
    const t: any = ((this.#l as any).find as any)((e: any): any => (e as any).hasCommentButton);
    t && (this.#b = ((t as any)._normalizePoint as any)((t as any).commentButtonPosition));
  }
  renderCommentButton(): any {
    if (this.#g || (this.#b || (this.#P as any)(), !this.#b)) return;
    const {
        signal: t
      }: any = this.#p = new (AbortController as any)(),
      e: any = !!(this.#_ as any).extraPopupElement,
      s: any = (): any => {
        ((this.#t as any).toggleCommentPopup as any)(this, !0, void 0, !e);
      },
      i: any = (): any => {
        ((this.#t as any).toggleCommentPopup as any)(this, !1, !0, !e);
      },
      n: any = (): any => {
        ((this.#t as any).toggleCommentPopup as any)(this, !1, !1);
      };
    if (e) {
      this.#g = (this.#_ as any).container;
      for (const r of (this as any).trigger) (r as any).ariaHasPopup = "dialog", (r as any).ariaControls = "commentPopup", ((r as any).addEventListener as any)("keydown", this.#e, {
        signal: t
      }), ((r as any).addEventListener as any)("click", s, {
        signal: t
      }), ((r as any).addEventListener as any)("pointerenter", i, {
        signal: t
      }), ((r as any).addEventListener as any)("pointerleave", n, {
        signal: t
      }), (((r as any).classList as any).add as any)("popupTriggerArea");
    } else {
      const r: any = this.#g = ((document as any).createElement as any)("button");
      (r as any).className = "annotationCommentButton";
      const a: any = (this.#_ as any).container;
      ((r as any).style as any).zIndex = (((a as any).style as any).zIndex as any) + (1 as any), (r as any).tabIndex = 0, (r as any).ariaHasPopup = "dialog", (r as any).ariaControls = "commentPopup", ((r as any).setAttribute as any)("data-l10n-id", "pdfjs-show-comment-button"), (this.#O as any)(), (this.#k as any)(), ((r as any).addEventListener as any)("keydown", this.#e, {
        signal: t
      }), ((r as any).addEventListener as any)("click", s, {
        signal: t
      }), ((r as any).addEventListener as any)("pointerenter", i, {
        signal: t
      }), ((r as any).addEventListener as any)("pointerleave", n, {
        signal: t
      }), ((a as any).after as any)(r);
    }
  }
  #k(): any {
    if ((this.#_ as any).extraPopupElement && !(this.#_ as any).editor) return;
    ((this as any).renderCommentButton as any)();
    const [t, e]: any = this.#b,
      {
        style: s
      }: any = this.#g;
    (s as any).left = `calc(${t}%)`, (s as any).top = `calc(${e}% - var(--comment-button-dim))`;
  }
  #O(): any {
    (this.#_ as any).extraPopupElement || (((this as any).renderCommentButton as any)(), ((this.#g as any).style as any).backgroundColor = (this as any).commentButtonColor || "");
  }
  get commentButtonColor(): any {
    const {
      color: t,
      opacity: e
    }: any = (this.#_ as any).commentData;
    return t ? (((this.#u as any)._commentManager as any).makeCommentColor as any)(t, e) : null;
  }
  focusCommentButton(): any {
    (setTimeout as any)((): any => {
      this.#g?.focus();
    }, 0);
  }
  getData(): any {
    const {
      richText: t,
      color: e,
      opacity: s,
      creationDate: i,
      modificationDate: n
    }: any = (this.#_ as any).commentData;
    return {
      contentsObj: {
        str: (this as any).comment
      },
      richText: t,
      color: e,
      opacity: s,
      creationDate: i,
      modificationDate: n
    };
  }
  get elementBeforePopup(): any {
    return this.#g;
  }
  get comment(): any {
    return this.#E ||= (this.#_ as any).commentText, this.#E;
  }
  set comment(t: any) {
    (t as any) !== ((this as any).comment as any) && ((this.#_ as any).commentText = this.#E = t);
  }
  get parentBoundingClientRect(): any {
    return (((this.#_ as any).layer as any).getBoundingClientRect as any)();
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }: any): any {
    this.#g && ((((this.#g as any).classList as any).toggle as any)("selected", t), (this.#g as any).ariaExpanded = e);
  }
  setSelectedCommentButton(t: any): any {
    (((this.#g as any).classList as any).toggle as any)("selected", t);
  }
  get commentPopupPosition(): any {
    if (this.#A) return this.#A;
    const {
        x: t,
        y: e,
        height: s
      }: any = ((this.#g as any).getBoundingClientRect as any)(),
      {
        x: i,
        y: n,
        width: r,
        height: a
      }: any = (((this.#_ as any).layer as any).getBoundingClientRect as any)();
    return [((t as any) - (i as any) as any) / (r as any), (((e as any) + (s as any) as any) - (n as any) as any) / (a as any)];
  }
  set commentPopupPosition(t: any) {
    this.#A = t;
  }
  hasDefaultPopupPosition(): any {
    return (this.#A as any) === (null as any);
  }
  get commentButtonPosition(): any {
    return this.#b;
  }
  get commentButtonWidth(): any {
    return ((((this.#g as any).getBoundingClientRect as any)() as any).width as any) / (((this as any).parentBoundingClientRect as any).width as any);
  }
  editComment(t: any): any {
    const [e, s]: any = this.#A || (((this as any).commentButtonPosition as any).map as any)((l: any): any => (l as any) / (100 as any)),
      i: any = (this as any).parentBoundingClientRect,
      {
        x: n,
        y: r,
        width: a,
        height: o
      }: any = i;
    ((this.#t as any).showDialog as any)(null, this, (n as any) + ((e as any) * (a as any) as any), (r as any) + ((s as any) * (o as any) as any), {
      ...t,
      parentDimensions: i
    });
  }
  render(): any {
    if (this.#m) return;
    const t: any = this.#m = ((document as any).createElement as any)("div");
    if ((t as any).className = "popup", this.#n) {
      const s: any = ((t as any).style as any).outlineColor = ((P as any).makeHexColor as any)(...this.#n);
      ((t as any).style as any).backgroundColor = `color-mix(in srgb, ${s} 30%, white)`;
    }
    const e: any = ((document as any).createElement as any)("span");
    if ((e as any).className = "header", this.#S?.str) {
      const s: any = ((document as any).createElement as any)("span");
      (s as any).className = "title", ((e as any).append as any)(s), {
        dir: (s as any).dir,
        str: (s as any).textContent
      } = this.#S;
    }
    if (((t as any).append as any)(e), this.#h) {
      const s: any = ((document as any).createElement as any)("time");
      (s as any).className = "popupDate", ((s as any).setAttribute as any)("data-l10n-id", "pdfjs-annotation-date-time-string"), ((s as any).setAttribute as any)("data-l10n-args", ((JSON as any).stringify as any)({
        dateObj: ((this.#h as any).valueOf as any)()
      })), (s as any).dateTime = ((this.#h as any).toISOString as any)(), ((e as any).append as any)(s);
    }
    (_i as any)({
      html: this.#D || (this.#o as any).str,
      dir: this.#o?.dir,
      className: "popupContent"
    }, t), ((this.#r as any).append as any)(t);
  }
  get #D(): any {
    const t: any = this.#C,
      e: any = this.#o;
    return t?.str && (!e?.str || ((e as any).str as any) === ((t as any).str as any)) && (this.#C as any).html || null;
  }
  get #I(): any {
    return this.#D?.attributes?.style?.fontSize || 0;
  }
  get #B(): any {
    return this.#D?.attributes?.style?.color || null;
  }
  #F(t: any): any {
    const e: any = [],
      s: any = {
        str: t,
        html: {
          name: "div",
          attributes: {
            dir: "auto"
          },
          children: [{
            name: "p",
            children: e
          }]
        }
      },
      i: any = {
        style: {
          color: this.#B,
          fontSize: this.#I ? `calc(${this.#I}px * var(--total-scale-factor))` : ""
        }
      };
    for (const n of ((t as any).split as any)(`
`)) ((e as any).push as any)({
      name: "span",
      value: n,
      attributes: i
    });
    return s;
  }
  #G(t: any): any {
    (t as any).altKey || (t as any).shiftKey || (t as any).ctrlKey || (t as any).metaKey || (((t as any).key as any) === ("Enter" as any) || ((t as any).key as any) === ("Escape" as any) && this.#f) && (this.#v as any)();
  }
  updateEdited({
    rect: t,
    popup: e,
    deleted: s
  }: any): any {
    if (this.#t) {
      s ? (((this as any).remove as any)(), this.#E = null) : e && ((e as any).deleted ? ((this as any).remove as any)() : ((this.#O as any)(), this.#E = (e as any).text)), t && (this.#b = null, (this.#P as any)(), (this.#k as any)());
      return;
    }
    if (s || e?.deleted) {
      ((this as any).remove as any)();
      return;
    }
    (this.#M as any)(), this.#w ||= {
      contentsObj: this.#o,
      richText: this.#C
    }, t && (this.#c = null), e && (e as any).text && (this.#C = (this.#F as any)((e as any).text), this.#h = ((fs as any).toDateObject as any)((e as any).date), this.#o = null), this.#m?.remove(), this.#m = null;
  }
  resetEdited(): any {
    this.#w && ({
      contentsObj: this.#o,
      richText: this.#C
    } = this.#w, this.#w = null, this.#m?.remove(), this.#m = null, this.#c = null);
  }
  remove(): any {
    if (this.#p?.abort(), this.#p = null, this.#m?.remove(), this.#m = null, this.#T = !1, this.#f = !1, this.#g?.remove(), this.#g = null, (this as any).trigger) for (const t of (this as any).trigger) (((t as any).classList as any).remove as any)("popupTriggerArea");
  }
  #x(): any {
    if ((this.#c as any) !== (null as any)) return;
    const {
      page: {
        view: t
      },
      viewport: {
        rawDims: {
          pageWidth: e,
          pageHeight: s,
          pageX: i,
          pageY: n
        }
      }
    }: any = this.#u;
    let r: any = !!this.#d,
      a: any = r ? this.#d : this.#y;
    for (const g of this.#l) if (!a || (((P as any).intersect as any)(((g as any).data as any).rect, a) as any) !== (null as any)) {
      a = ((g as any).data as any).rect, r = !0;
      break;
    }
    const o: any = ((P as any).normalizeRect as any)([(a as any)[0], (((t as any)[3] as any) - ((a as any)[1] as any) as any) + ((t as any)[1] as any), (a as any)[2], (((t as any)[3] as any) - ((a as any)[3] as any) as any) + ((t as any)[1] as any)]),
      h: any = r ? (((a as any)[2] as any) - ((a as any)[0] as any) as any) + (5 as any) : 0,
      c: any = ((o as any)[0] as any) + (h as any),
      u: any = (o as any)[1];
    this.#c = [((100 as any) * ((c as any) - (i as any) as any) as any) / (e as any), ((100 as any) * ((u as any) - (n as any) as any) as any) / (s as any)];
    const {
      style: f
    }: any = this.#r;
    (f as any).left = `${(this.#c as any)[0]}%`, (f as any).top = `${(this.#c as any)[1]}%`;
  }
  #v(): any {
    if (this.#t) {
      ((this.#t as any).toggleCommentPopup as any)(this, !1);
      return;
    }
    this.#f = !this.#f, this.#f ? ((this.#L as any)(), ((this.#r as any).addEventListener as any)("click", this.#a), ((this.#r as any).addEventListener as any)("keydown", this.#e)) : ((this.#H as any)(), ((this.#r as any).removeEventListener as any)("click", this.#a), ((this.#r as any).removeEventListener as any)("keydown", this.#e));
  }
  #L(): any {
    this.#m || ((this as any).render as any)(), (this as any).isVisible ? this.#f && (((this.#r as any).classList as any).add as any)("focused") : ((this.#x as any)(), (this.#r as any).hidden = !1, ((this.#r as any).style as any).zIndex = ((parseInt as any)(((this.#r as any).style as any).zIndex) as any) + (1e3 as any));
  }
  #H(): any {
    (((this.#r as any).classList as any).remove as any)("focused"), !(this.#f || !(this as any).isVisible) && ((this.#r as any).hidden = !0, ((this.#r as any).style as any).zIndex = ((parseInt as any)(((this.#r as any).style as any).zIndex) as any) - (1e3 as any));
  }
  forceHide(): any {
    this.#T = (this as any).isVisible, this.#T && ((this.#r as any).hidden = !0);
  }
  maybeShow(): any {
    this.#t || ((this.#M as any)(), this.#T && (this.#m || (this.#L as any)(), this.#T = !1, (this.#r as any).hidden = !1));
  }
  get isVisible(): any {
    return this.#t ? !1 : ((this.#r as any).hidden as any) === (!1 as any);
  }
}
class zi extends (K as any) {
  declare annotationEditorType: any;
  declare textPosition: any;
  declare textContent: any;
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), (this as any).textContent = ((t as any).data as any).textContent, (this as any).textPosition = ((t as any).data as any).textPosition, (this as any).annotationEditorType = (F as any).FREETEXT;
  }
  render(): any {
    if (((((this as any).container as any).classList as any).add as any)("freeTextAnnotation"), (this as any).textContent) {
      const t: any = ((document as any).createElement as any)("div");
      (((t as any).classList as any).add as any)("annotationTextContent"), ((t as any).setAttribute as any)("role", "comment");
      for (const e of (this as any).textContent) {
        const s: any = ((document as any).createElement as any)("span");
        (s as any).textContent = e, ((t as any).append as any)(s);
      }
      (((this as any).container as any).append as any)(t);
    }
    return !((this as any).data as any).popupRef && (this as any).hasPopupData && ((this as any)._createPopup as any)(), ((this as any)._editOnDoubleClick as any)(), (this as any).container;
  }
}
class Or extends (K as any) {
  [key: string]: any;
  #t: any = null;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render(): any {
    ((((this as any).container as any).classList as any).add as any)("lineAnnotation");
    const {
        data: t,
        width: e,
        height: s
      }: any = this,
      i: any = (((this as any).svgFactory as any).create as any)(e, s, !0),
      n: any = this.#t = (((this as any).svgFactory as any).createElement as any)("svg:line");
    return ((n as any).setAttribute as any)("x1", (((t as any).rect as any)[2] as any) - (((t as any).lineCoordinates as any)[0] as any)), ((n as any).setAttribute as any)("y1", (((t as any).rect as any)[3] as any) - (((t as any).lineCoordinates as any)[1] as any)), ((n as any).setAttribute as any)("x2", (((t as any).rect as any)[2] as any) - (((t as any).lineCoordinates as any)[2] as any)), ((n as any).setAttribute as any)("y2", (((t as any).rect as any)[3] as any) - (((t as any).lineCoordinates as any)[3] as any)), ((n as any).setAttribute as any)("stroke-width", ((t as any).borderStyle as any).width || 1), ((n as any).setAttribute as any)("stroke", "transparent"), ((n as any).setAttribute as any)("fill", "transparent"), ((i as any).append as any)(n), (((this as any).container as any).append as any)(i), !(t as any).popupRef && (this as any).hasPopupData && ((this as any)._createPopup as any)(), (this as any).container;
  }
  getElementsToTriggerPopup(): any {
    return this.#t;
  }
  addHighlightArea(): any {
    ((((this as any).container as any).classList as any).add as any)("highlightArea");
  }
}
class Br extends (K as any) {
  [key: string]: any;
  #t: any = null;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render(): any {
    ((((this as any).container as any).classList as any).add as any)("squareAnnotation");
    const {
        data: t,
        width: e,
        height: s
      }: any = this,
      i: any = (((this as any).svgFactory as any).create as any)(e, s, !0),
      n: any = ((t as any).borderStyle as any).width,
      r: any = this.#t = (((this as any).svgFactory as any).createElement as any)("svg:rect");
    return ((r as any).setAttribute as any)("x", (n as any) / (2 as any)), ((r as any).setAttribute as any)("y", (n as any) / (2 as any)), ((r as any).setAttribute as any)("width", (e as any) - (n as any)), ((r as any).setAttribute as any)("height", (s as any) - (n as any)), ((r as any).setAttribute as any)("stroke-width", n || 1), ((r as any).setAttribute as any)("stroke", "transparent"), ((r as any).setAttribute as any)("fill", "transparent"), ((i as any).append as any)(r), (((this as any).container as any).append as any)(i), !(t as any).popupRef && (this as any).hasPopupData && ((this as any)._createPopup as any)(), (this as any).container;
  }
  getElementsToTriggerPopup(): any {
    return this.#t;
  }
  addHighlightArea(): any {
    ((((this as any).container as any).classList as any).add as any)("highlightArea");
  }
}
class Hr extends (K as any) {
  [key: string]: any;
  #t: any = null;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render(): any {
    ((((this as any).container as any).classList as any).add as any)("circleAnnotation");
    const {
        data: t,
        width: e,
        height: s
      }: any = this,
      i: any = (((this as any).svgFactory as any).create as any)(e, s, !0),
      n: any = ((t as any).borderStyle as any).width,
      r: any = this.#t = (((this as any).svgFactory as any).createElement as any)("svg:ellipse");
    return ((r as any).setAttribute as any)("cx", (e as any) / (2 as any)), ((r as any).setAttribute as any)("cy", (s as any) / (2 as any)), ((r as any).setAttribute as any)("rx", ((e as any) / (2 as any) as any) - ((n as any) / (2 as any) as any)), ((r as any).setAttribute as any)("ry", ((s as any) / (2 as any) as any) - ((n as any) / (2 as any) as any)), ((r as any).setAttribute as any)("stroke-width", n || 1), ((r as any).setAttribute as any)("stroke", "transparent"), ((r as any).setAttribute as any)("fill", "transparent"), ((i as any).append as any)(r), (((this as any).container as any).append as any)(i), !(t as any).popupRef && (this as any).hasPopupData && ((this as any)._createPopup as any)(), (this as any).container;
  }
  getElementsToTriggerPopup(): any {
    return this.#t;
  }
  addHighlightArea(): any {
    ((((this as any).container as any).classList as any).add as any)("highlightArea");
  }
}
class ji extends (K as any) {
  declare svgElementName: any;
  declare containerClassName: any;
  [key: string]: any;
  #t: any = null;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), (this as any).containerClassName = "polylineAnnotation", (this as any).svgElementName = "svg:polyline";
  }
  render(): any {
    ((((this as any).container as any).classList as any).add as any)((this as any).containerClassName);
    const {
      data: {
        rect: t,
        vertices: e,
        borderStyle: s,
        popupRef: i
      },
      width: n,
      height: r
    }: any = this;
    if (!e) return (this as any).container;
    const a: any = (((this as any).svgFactory as any).create as any)(n, r, !0);
    let o: any = [];
    for (let h: any = 0, c: any = (e as any).length; (h as any) < (c as any); h += 2) {
      const u: any = ((e as any)[h] as any) - ((t as any)[0] as any),
        f: any = ((t as any)[3] as any) - ((e as any)[(h as any) + (1 as any)] as any);
      ((o as any).push as any)(`${u},${f}`);
    }
    o = ((o as any).join as any)(" ");
    const l: any = this.#t = (((this as any).svgFactory as any).createElement as any)((this as any).svgElementName);
    return ((l as any).setAttribute as any)("points", o), ((l as any).setAttribute as any)("stroke-width", (s as any).width || 1), ((l as any).setAttribute as any)("stroke", "transparent"), ((l as any).setAttribute as any)("fill", "transparent"), ((a as any).append as any)(l), (((this as any).container as any).append as any)(a), !i && (this as any).hasPopupData && ((this as any)._createPopup as any)(), (this as any).container;
  }
  getElementsToTriggerPopup(): any {
    return this.#t;
  }
  addHighlightArea(): any {
    ((((this as any).container as any).classList as any).add as any)("highlightArea");
  }
}
class Ur extends (ji as any) {
  declare svgElementName: any;
  declare containerClassName: any;
  [key: string]: any;
  constructor(t: any) {
    super(t), (this as any).containerClassName = "polygonAnnotation", (this as any).svgElementName = "svg:polygon";
  }
}
class $r extends (K as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render(): any {
    return ((((this as any).container as any).classList as any).add as any)("caretAnnotation"), !((this as any).data as any).popupRef && (this as any).hasPopupData && ((this as any)._createPopup as any)(), (this as any).container;
  }
}
class Fs extends (K as any) {
  declare annotationEditorType: any;
  declare svgElementName: any;
  declare containerClassName: any;
  [key: string]: any;
  #t: any = null;
  #e: any = [];
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), (this as any).containerClassName = "inkAnnotation", (this as any).svgElementName = "svg:polyline", (this as any).annotationEditorType = (((this as any).data as any).it as any) === ("InkHighlight" as any) ? (F as any).HIGHLIGHT : (F as any).INK;
  }
  #i(t: any, e: any): any {
    switch (t) {
      case 90:
        return {
          transform: `rotate(90) translate(${-(e as any)[0]},${(e as any)[1]}) scale(1,-1)`,
          width: ((e as any)[3] as any) - ((e as any)[1] as any),
          height: ((e as any)[2] as any) - ((e as any)[0] as any)
        };
      case 180:
        return {
          transform: `rotate(180) translate(${-(e as any)[2]},${(e as any)[1]}) scale(1,-1)`,
          width: ((e as any)[2] as any) - ((e as any)[0] as any),
          height: ((e as any)[3] as any) - ((e as any)[1] as any)
        };
      case 270:
        return {
          transform: `rotate(270) translate(${-(e as any)[2]},${(e as any)[3]}) scale(1,-1)`,
          width: ((e as any)[3] as any) - ((e as any)[1] as any),
          height: ((e as any)[2] as any) - ((e as any)[0] as any)
        };
      default:
        return {
          transform: `translate(${-(e as any)[0]},${(e as any)[3]}) scale(1,-1)`,
          width: ((e as any)[2] as any) - ((e as any)[0] as any),
          height: ((e as any)[3] as any) - ((e as any)[1] as any)
        };
    }
  }
  render(): any {
    ((((this as any).container as any).classList as any).add as any)((this as any).containerClassName);
    const {
        data: {
          rect: t,
          rotation: e,
          inkLists: s,
          borderStyle: i,
          popupRef: n
        }
      }: any = this,
      {
        transform: r,
        width: a,
        height: o
      }: any = (this.#i as any)(e, t),
      l: any = (((this as any).svgFactory as any).create as any)(a, o, !0),
      h: any = this.#t = (((this as any).svgFactory as any).createElement as any)("svg:g");
    ((l as any).append as any)(h), ((h as any).setAttribute as any)("stroke-width", (i as any).width || 1), ((h as any).setAttribute as any)("stroke-linecap", "round"), ((h as any).setAttribute as any)("stroke-linejoin", "round"), ((h as any).setAttribute as any)("stroke-miterlimit", 10), ((h as any).setAttribute as any)("stroke", "transparent"), ((h as any).setAttribute as any)("fill", "transparent"), ((h as any).setAttribute as any)("transform", r);
    for (let c: any = 0, u: any = (s as any).length; (c as any) < (u as any); c++) {
      const f: any = (((this as any).svgFactory as any).createElement as any)((this as any).svgElementName);
      ((this.#e as any).push as any)(f), ((f as any).setAttribute as any)("points", (((s as any)[c] as any).join as any)(",")), ((h as any).append as any)(f);
    }
    return !n && (this as any).hasPopupData && ((this as any)._createPopup as any)(), (((this as any).container as any).append as any)(l), ((this as any)._editOnDoubleClick as any)(), (this as any).container;
  }
  updateEdited(t: any): any {
    (super.updateEdited as any)(t);
    const {
        thickness: e,
        points: s,
        rect: i
      }: any = t,
      n: any = this.#t;
    if ((e as any) >= (0 as any) && ((n as any).setAttribute as any)("stroke-width", e || 1), s) for (let r: any = 0, a: any = (this.#e as any).length; (r as any) < (a as any); r++) (((this.#e as any)[r] as any).setAttribute as any)("points", (((s as any)[r] as any).join as any)(","));
    if (i) {
      const {
        transform: r,
        width: a,
        height: o
      }: any = (this.#i as any)(((this as any).data as any).rotation, i);
      (((n as any).parentElement as any).setAttribute as any)("viewBox", `0 0 ${a} ${o}`), ((n as any).setAttribute as any)("transform", r);
    }
  }
  getElementsToTriggerPopup(): any {
    return this.#e;
  }
  addHighlightArea(): any {
    ((((this as any).container as any).classList as any).add as any)("highlightArea");
  }
}
class Gi extends (K as any) {
  declare annotationEditorType: any;
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), (this as any).annotationEditorType = (F as any).HIGHLIGHT;
  }
  render(): any {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    }: any = this;
    if (!e && (this as any).hasPopupData && ((this as any)._createPopup as any)(), ((((this as any).container as any).classList as any).add as any)("highlightAnnotation"), ((this as any)._editOnDoubleClick as any)(), t) {
      const s: any = ((document as any).createElement as any)("mark");
      (((s as any).classList as any).add as any)("overlaidText"), (s as any).textContent = t, (((this as any).container as any).append as any)(s);
    }
    return (this as any).container;
  }
}
class zr extends (K as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render(): any {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    }: any = this;
    if (!e && (this as any).hasPopupData && ((this as any)._createPopup as any)(), ((((this as any).container as any).classList as any).add as any)("underlineAnnotation"), t) {
      const s: any = ((document as any).createElement as any)("u");
      (((s as any).classList as any).add as any)("overlaidText"), (s as any).textContent = t, (((this as any).container as any).append as any)(s);
    }
    return (this as any).container;
  }
}
class jr extends (K as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render(): any {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    }: any = this;
    if (!e && (this as any).hasPopupData && ((this as any)._createPopup as any)(), ((((this as any).container as any).classList as any).add as any)("squigglyAnnotation"), t) {
      const s: any = ((document as any).createElement as any)("u");
      (((s as any).classList as any).add as any)("overlaidText"), (s as any).textContent = t, (((this as any).container as any).append as any)(s);
    }
    return (this as any).container;
  }
}
class Gr extends (K as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render(): any {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    }: any = this;
    if (!e && (this as any).hasPopupData && ((this as any)._createPopup as any)(), ((((this as any).container as any).classList as any).add as any)("strikeoutAnnotation"), t) {
      const s: any = ((document as any).createElement as any)("s");
      (((s as any).classList as any).add as any)("overlaidText"), (s as any).textContent = t, (((this as any).container as any).append as any)(s);
    }
    return (this as any).container;
  }
}
class Vi extends (K as any) {
  declare annotationEditorType: any;
  [key: string]: any;
  constructor(t: any) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), (this as any).annotationEditorType = (F as any).STAMP;
  }
  render(): any {
    return ((((this as any).container as any).classList as any).add as any)("stampAnnotation"), (((this as any).container as any).setAttribute as any)("role", "img"), !((this as any).data as any).popupRef && (this as any).hasPopupData && ((this as any)._createPopup as any)(), ((this as any)._editOnDoubleClick as any)(), (this as any).container;
  }
}
class Vr extends (K as any) {
  declare content: any;
  declare filename: any;
  [key: string]: any;
  #t: any = null;
  constructor(t: any) {
    super(t, {
      isRenderable: !0
    });
    const {
      file: e
    }: any = (this as any).data;
    (this as any).filename = (e as any).filename, (this as any).content = (e as any).content, ((this as any).linkService as any).eventBus?.dispatch("fileattachmentannotation", {
      source: this,
      ...e
    });
  }
  render(): any {
    ((((this as any).container as any).classList as any).add as any)("fileAttachmentAnnotation");
    const {
      container: t,
      data: e
    }: any = this;
    let s: any;
    (e as any).hasAppearance || ((e as any).fillAlpha as any) === (0 as any) ? s = ((document as any).createElement as any)("div") : (s = ((document as any).createElement as any)("img"), (s as any).src = `${(this as any).imageResourcesPath}annotation-${((/paperclip/i as any).test as any)((e as any).name) ? "paperclip" : "pushpin"}.svg`, (e as any).fillAlpha && ((e as any).fillAlpha as any) < (1 as any) && ((s as any).style = `filter: opacity(${((Math as any).round as any)(((e as any).fillAlpha as any) * (100 as any))}%);`)), ((s as any).addEventListener as any)("dblclick", ((this.#e as any).bind as any)(this)), this.#t = s;
    const {
      isMac: i
    }: any = (ot as any).platform;
    return ((t as any).addEventListener as any)("keydown", (n: any): any => {
      ((n as any).key as any) === ("Enter" as any) && (i ? (n as any).metaKey : (n as any).ctrlKey) && (this.#e as any)();
    }), !(e as any).popupRef && (this as any).hasPopupData ? ((this as any)._createPopup as any)() : (((s as any).classList as any).add as any)("popupTriggerArea"), ((t as any).append as any)(s), t;
  }
  getElementsToTriggerPopup(): any {
    return this.#t;
  }
  addHighlightArea(): any {
    ((((this as any).container as any).classList as any).add as any)("highlightArea");
  }
  #e(): any {
    (this as any).downloadManager?.openOrDownloadData((this as any).content, (this as any).filename);
  }
}
class Ns {
  declare _commentManager: any;
  declare _annotationEditorUIManager: any;
  declare zIndex: any;
  declare viewport: any;
  declare page: any;
  declare div: any;
  [key: string]: any;
  #t: any = null;
  #e: any = null;
  #i: any = null;
  #s: any = new (Map as any)();
  #a: any = null;
  #n: any = null;
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: n,
    viewport: r,
    structTreeLayer: a,
    commentManager: o,
    linkService: l,
    annotationStorage: h
  }: any) {
    (this as any).div = t, this.#t = e, this.#e = s, this.#a = a || null, this.#n = l || null, this.#i = h || new (ks as any)(), (this as any).page = n, (this as any).viewport = r, (this as any).zIndex = 0, (this as any)._annotationEditorUIManager = i, (this as any)._commentManager = o || null;
  }
  hasEditableAnnotations(): any {
    return ((this.#s as any).size as any) > (0 as any);
  }
  async #r(t: any, e: any, s: any): Promise<any> {
    const i: any = (t as any).firstChild || t,
      n: any = (i as any).id = `${Es}${e}`,
      r: any = await this.#a?.getAriaAttributes(n);
    if (r) for (const [a, o] of r) ((i as any).setAttribute as any)(a, o);
    s ? (((((s as any).at as any)(-1) as any).container as any).after as any)(t) : ((((this as any).div as any).append as any)(t), this.#t?.moveElementInDOM((this as any).div, t, i, !1));
  }
  async render(t: any): Promise<any> {
    const {
        annotations: e
      }: any = t,
      s: any = (this as any).div;
    (Wt as any)(s, (this as any).viewport);
    const i: any = new (Map as any)(),
      n: any = {
        data: null,
        layer: s,
        linkService: this.#n,
        downloadManager: (t as any).downloadManager,
        imageResourcesPath: (t as any).imageResourcesPath || "",
        renderForms: ((t as any).renderForms as any) !== (!1 as any),
        svgFactory: new (Ve as any)(),
        annotationStorage: this.#i,
        enableComment: ((t as any).enableComment as any) === (!0 as any),
        enableScripting: ((t as any).enableScripting as any) === (!0 as any),
        hasJSActions: (t as any).hasJSActions,
        fieldObjects: (t as any).fieldObjects,
        parent: this,
        elements: null
      };
    for (const r of e) {
      if ((r as any).noHTML) continue;
      const a: any = ((r as any).annotationType as any) === ((et as any).POPUP as any);
      if (a) {
        const h: any = ((i as any).get as any)((r as any).id);
        if (!h) continue;
        (n as any).elements = h;
      } else if ((((r as any).rect as any)[2] as any) === (((r as any).rect as any)[0] as any) || (((r as any).rect as any)[3] as any) === (((r as any).rect as any)[1] as any)) continue;
      (n as any).data = r;
      const o: any = ((gi as any).create as any)(n);
      if (!(o as any).isRenderable) continue;
      if (!a && (r as any).popupRef) {
        const h: any = ((i as any).get as any)((r as any).popupRef);
        h ? ((h as any).push as any)(o) : ((i as any).set as any)((r as any).popupRef, [o]);
      }
      const l: any = ((o as any).render as any)();
      (r as any).hidden && (((l as any).style as any).visibility = "hidden"), await (this.#r as any)(l, (r as any).id, (n as any).elements), (o as any).extraPopupElement?.popup?.renderCommentButton(), (o as any)._isEditable && (((this.#s as any).set as any)(((o as any).data as any).id, o), (this as any)._annotationEditorUIManager?.renderAnnotationElement(o));
    }
    (this.#o as any)();
  }
  async addLinkAnnotations(t: any): Promise<any> {
    const e: any = {
      data: null,
      layer: (this as any).div,
      linkService: this.#n,
      svgFactory: new (Ve as any)(),
      parent: this
    };
    for (const s of t) {
      (s as any).borderStyle ||= (Ns as any)._defaultBorderStyle, (e as any).data = s;
      const i: any = ((gi as any).create as any)(e);
      if (!(i as any).isRenderable) continue;
      const n: any = ((i as any).render as any)();
      await (this.#r as any)(n, (s as any).id, null);
    }
  }
  update({
    viewport: t
  }: any): any {
    const e: any = (this as any).div;
    (this as any).viewport = t, (Wt as any)(e, {
      rotation: (t as any).rotation
    }), (this.#o as any)(), (e as any).hidden = !1;
  }
  #o(): any {
    if (!this.#e) return;
    const t: any = (this as any).div;
    for (const [e, s] of this.#e) {
      const i: any = ((t as any).querySelector as any)(`[data-annotation-id="${e}"]`);
      if (!i) continue;
      (s as any).className = "annotationContent";
      const {
        firstChild: n
      }: any = i;
      n ? ((n as any).nodeName as any) === ("CANVAS" as any) ? ((n as any).replaceWith as any)(s) : (((n as any).classList as any).contains as any)("annotationContent") ? ((n as any).after as any)(s) : ((n as any).before as any)(s) : ((i as any).append as any)(s);
      const r: any = ((this.#s as any).get as any)(e);
      r && ((r as any)._hasNoCanvas ? ((this as any)._annotationEditorUIManager?.setMissingCanvas(e, (i as any).id, s), (r as any)._hasNoCanvas = !1) : (r as any).canvas = s);
    }
    ((this.#e as any).clear as any)();
  }
  getEditableAnnotations(): any {
    return ((Array as any).from as any)(((this.#s as any).values as any)());
  }
  getEditableAnnotation(t: any): any {
    return ((this.#s as any).get as any)(t);
  }
  addFakeAnnotation(t: any): any {
    const {
        div: e
      }: any = this,
      {
        id: s,
        rotation: i
      }: any = t,
      n: any = new (kr as any)({
        data: {
          id: s,
          rect: ((t as any).getPDFRect as any)(),
          rotation: i
        },
        editor: t,
        layer: e,
        parent: this,
        enableComment: !!(this as any)._commentManager,
        linkService: this.#n,
        annotationStorage: this.#i
      }),
      r: any = ((n as any).render as any)();
    return ((e as any).append as any)(r), this.#t?.moveElementInDOM(e, r, r, !1), ((n as any).createOrUpdatePopup as any)(), n;
  }
  static get _defaultBorderStyle(): any {
    return (N as any)(this, "_defaultBorderStyle", ((Object as any).freeze as any)({
      width: 1,
      rawWidth: 1,
      style: (Qt as any).SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
}
const Be: any = /\r\n?|\n/g;
class it extends (M as any) {
  declare overlayDiv: any;
  declare editorDiv: any;
  declare height: any;
  declare width: any;
  declare _initialOptions: any;
  declare isEditing: any;
  declare _isDraggable: any;
  declare color: any;
  [key: string]: any;
  #t: any = "";
  #e: any = `${(this as any).id}-editor`;
  #i: any = null;
  #s: any;
  _colorPicker: any = null;
  static _freeTextDefaultContent: any = "";
  static _internalPadding: any = 0;
  static _defaultColor: any = null;
  static _defaultFontSize: any = 10;
  static get _keyboardManager(): any {
    const t: any = (it as any).prototype,
      e: any = (n: any): any => ((n as any).isEmpty as any)(),
      s: any = (Ut as any).TRANSLATE_SMALL,
      i: any = (Ut as any).TRANSLATE_BIG;
    return (N as any)(this, "_keyboardManager", new (Te as any)([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], (t as any).commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], (t as any).commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], (t as any)._translateEmpty, {
      args: [-s, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], (t as any)._translateEmpty, {
      args: [-i, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], (t as any)._translateEmpty, {
      args: [s, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], (t as any)._translateEmpty, {
      args: [i, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], (t as any)._translateEmpty, {
      args: [0, -s],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], (t as any)._translateEmpty, {
      args: [0, -i],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], (t as any)._translateEmpty, {
      args: [0, s],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], (t as any)._translateEmpty, {
      args: [0, i],
      checker: e
    }]]));
  }
  static _type: any = "freetext";
  static _editorType: any = (F as any).FREETEXT;
  constructor(t: any) {
    super({
      ...t,
      name: "freeTextEditor"
    }), (this as any).color = (t as any).color || (it as any)._defaultColor || (M as any)._defaultLineColor, this.#s = (t as any).fontSize || (it as any)._defaultFontSize, (this as any).annotationElementId || (((this as any)._uiManager as any).a11yAlert as any)("pdfjs-editor-freetext-added-alert");
  }
  static initialize(t: any, e: any): any {
    ((M as any).initialize as any)(t, e);
    const s: any = (getComputedStyle as any)((document as any).documentElement);
    (this as any)._internalPadding = (parseFloat as any)(((s as any).getPropertyValue as any)("--freetext-padding"));
  }
  static updateDefaultParams(t: any, e: any): any {
    switch (t) {
      case (O as any).FREETEXT_SIZE:
        (it as any)._defaultFontSize = e;
        break;
      case (O as any).FREETEXT_COLOR:
        (it as any)._defaultColor = e;
        break;
    }
  }
  updateParams(t: any, e: any): any {
    switch (t) {
      case (O as any).FREETEXT_SIZE:
        (this.#a as any)(e);
        break;
      case (O as any).FREETEXT_COLOR:
        (this.#n as any)(e);
        break;
    }
  }
  static get defaultPropertiesToUpdate(): any {
    return [[(O as any).FREETEXT_SIZE, (it as any)._defaultFontSize], [(O as any).FREETEXT_COLOR, (it as any)._defaultColor || (M as any)._defaultLineColor]];
  }
  get propertiesToUpdate(): any {
    return [[(O as any).FREETEXT_SIZE, this.#s], [(O as any).FREETEXT_COLOR, (this as any).color]];
  }
  get toolbarButtons(): any {
    return (this as any)._colorPicker ||= new (_e as any)(this), [["colorPicker", (this as any)._colorPicker]];
  }
  get colorType(): any {
    return (O as any).FREETEXT_COLOR;
  }
  #a(t: any): any {
    const e: any = (i: any): any => {
        (((this as any).editorDiv as any).style as any).fontSize = `calc(${i}px * var(--total-scale-factor))`, ((this as any).translate as any)(0, (-((i as any) - (this.#s as any)) as any) * ((this as any).parentScale as any)), this.#s = i, (this.#o as any)();
      },
      s: any = this.#s;
    ((this as any).addCommands as any)({
      cmd: ((e as any).bind as any)(this, t),
      undo: ((e as any).bind as any)(this, s),
      post: ((((this as any)._uiManager as any).updateUI as any).bind as any)((this as any)._uiManager, this),
      mustExec: !0,
      type: (O as any).FREETEXT_SIZE,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  onUpdatedColor(): any {
    (((this as any).editorDiv as any).style as any).color = (this as any).color, (this as any)._colorPicker?.update((this as any).color), (super.onUpdatedColor as any)();
  }
  #n(t: any): any {
    const e: any = (i: any): any => {
        (this as any).color = i, ((this as any).onUpdatedColor as any)();
      },
      s: any = (this as any).color;
    ((this as any).addCommands as any)({
      cmd: ((e as any).bind as any)(this, t),
      undo: ((e as any).bind as any)(this, s),
      post: ((((this as any)._uiManager as any).updateUI as any).bind as any)((this as any)._uiManager, this),
      mustExec: !0,
      type: (O as any).FREETEXT_COLOR,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _translateEmpty(t: any, e: any): any {
    (((this as any)._uiManager as any).translateSelectedEditors as any)(t, e, !0);
  }
  getInitialTranslation(): any {
    const t: any = (this as any).parentScale;
    return [(-(it as any)._internalPadding as any) * (t as any), (-(((it as any)._internalPadding as any) + (this.#s as any)) as any) * (t as any)];
  }
  rebuild(): any {
    (this as any).parent && ((super.rebuild as any)(), ((this as any).div as any) !== (null as any) && ((this as any).isAttachedToDOM || (((this as any).parent as any).add as any)(this)));
  }
  enableEditMode(): any {
    if (!(super.enableEditMode as any)()) return !1;
    ((((this as any).overlayDiv as any).classList as any).remove as any)("enabled"), ((this as any).editorDiv as any).contentEditable = !0, (this as any)._isDraggable = !1, (((this as any).div as any).removeAttribute as any)("aria-activedescendant"), this.#i = new (AbortController as any)();
    const t: any = (((this as any)._uiManager as any).combinedSignal as any)(this.#i);
    return (((this as any).editorDiv as any).addEventListener as any)("keydown", (((this as any).editorDivKeydown as any).bind as any)(this), {
      signal: t
    }), (((this as any).editorDiv as any).addEventListener as any)("focus", (((this as any).editorDivFocus as any).bind as any)(this), {
      signal: t
    }), (((this as any).editorDiv as any).addEventListener as any)("blur", (((this as any).editorDivBlur as any).bind as any)(this), {
      signal: t
    }), (((this as any).editorDiv as any).addEventListener as any)("input", (((this as any).editorDivInput as any).bind as any)(this), {
      signal: t
    }), (((this as any).editorDiv as any).addEventListener as any)("paste", (((this as any).editorDivPaste as any).bind as any)(this), {
      signal: t
    }), !0;
  }
  disableEditMode(): any {
    return (super.disableEditMode as any)() ? (((((this as any).overlayDiv as any).classList as any).add as any)("enabled"), ((this as any).editorDiv as any).contentEditable = !1, (((this as any).div as any).setAttribute as any)("aria-activedescendant", this.#e), (this as any)._isDraggable = !0, this.#i?.abort(), this.#i = null, (((this as any).div as any).focus as any)({
      preventScroll: !0
    }), (this as any).isEditing = !1, (((((this as any).parent as any).div as any).classList as any).add as any)("freetextEditing"), !0) : !1;
  }
  focusin(t: any): any {
    (this as any)._focusEventsAllowed && ((super.focusin as any)(t), ((t as any).target as any) !== ((this as any).editorDiv as any) && (((this as any).editorDiv as any).focus as any)());
  }
  onceAdded(t: any): any {
    (this as any).width || (((this as any).enableEditMode as any)(), t && (((this as any).editorDiv as any).focus as any)(), (this as any)._initialOptions?.isCentered && ((this as any).center as any)(), (this as any)._initialOptions = null);
  }
  isEmpty(): any {
    return !(this as any).editorDiv || (((((this as any).editorDiv as any).innerText as any).trim as any)() as any) === ("" as any);
  }
  remove(): any {
    (this as any).isEditing = !1, (this as any).parent && ((((this as any).parent as any).setEditingState as any)(!0), (((((this as any).parent as any).div as any).classList as any).add as any)("freetextEditing")), (super.remove as any)();
  }
  #r(): any {
    const t: any = [];
    (((this as any).editorDiv as any).normalize as any)();
    let e: any = null;
    for (const s of ((this as any).editorDiv as any).childNodes) (e?.nodeType as any) === ((Node as any).TEXT_NODE as any) && ((s as any).nodeName as any) === ("BR" as any) || (((t as any).push as any)((it.#h as any)(s)), e = s);
    return ((t as any).join as any)(`
`);
  }
  #o(): any {
    const [t, e]: any = (this as any).parentDimensions;
    let s: any;
    if ((this as any).isAttachedToDOM) s = (((this as any).div as any).getBoundingClientRect as any)();else {
      const {
          currentLayer: i,
          div: n
        }: any = this,
        r: any = ((n as any).style as any).display,
        a: any = (((n as any).classList as any).contains as any)("hidden");
      (((n as any).classList as any).remove as any)("hidden"), ((n as any).style as any).display = "hidden", (((i as any).div as any).append as any)((this as any).div), s = ((n as any).getBoundingClientRect as any)(), ((n as any).remove as any)(), ((n as any).style as any).display = r, (((n as any).classList as any).toggle as any)("hidden", a);
    }
    (((this as any).rotation as any) % (180 as any) as any) === (((this as any).parentRotation as any) % (180 as any) as any) ? ((this as any).width = ((s as any).width as any) / (t as any), (this as any).height = ((s as any).height as any) / (e as any)) : ((this as any).width = ((s as any).height as any) / (t as any), (this as any).height = ((s as any).width as any) / (e as any)), ((this as any).fixAndSetPosition as any)();
  }
  commit(): any {
    if (!((this as any).isInEditMode as any)()) return;
    (super.commit as any)(), ((this as any).disableEditMode as any)();
    const t: any = this.#t,
      e: any = this.#t = (((this.#r as any)() as any).trimEnd as any)();
    if ((t as any) === (e as any)) return;
    const s: any = (i: any): any => {
      if (this.#t = i, !i) {
        ((this as any).remove as any)();
        return;
      }
      (this.#l as any)(), (((this as any)._uiManager as any).rebuild as any)(this), (this.#o as any)();
    };
    ((this as any).addCommands as any)({
      cmd: (): any => {
        (s as any)(e);
      },
      undo: (): any => {
        (s as any)(t);
      },
      mustExec: !1
    }), (this.#o as any)();
  }
  shouldGetKeyboardEvents(): any {
    return ((this as any).isInEditMode as any)();
  }
  enterInEditMode(): any {
    ((this as any).enableEditMode as any)(), (((this as any).editorDiv as any).focus as any)();
  }
  keydown(t: any): any {
    ((t as any).target as any) === ((this as any).div as any) && ((t as any).key as any) === ("Enter" as any) && (((this as any).enterInEditMode as any)(), ((t as any).preventDefault as any)());
  }
  editorDivKeydown(t: any): any {
    (((it as any)._keyboardManager as any).exec as any)(this, t);
  }
  editorDivFocus(t: any): any {
    (this as any).isEditing = !0;
  }
  editorDivBlur(t: any): any {
    (this as any).isEditing = !1;
  }
  editorDivInput(t: any): any {
    (((((this as any).parent as any).div as any).classList as any).toggle as any)("freetextEditing", ((this as any).isEmpty as any)());
  }
  disableEditing(): any {
    (((this as any).editorDiv as any).setAttribute as any)("role", "comment"), (((this as any).editorDiv as any).removeAttribute as any)("aria-multiline");
  }
  enableEditing(): any {
    (((this as any).editorDiv as any).setAttribute as any)("role", "textbox"), (((this as any).editorDiv as any).setAttribute as any)("aria-multiline", !0);
  }
  get canChangeContent(): any {
    return !0;
  }
  render(): any {
    if ((this as any).div) return (this as any).div;
    let t: any, e: any;
    ((this as any)._isCopy || (this as any).annotationElementId) && (t = (this as any).x, e = (this as any).y), (super.render as any)(), (this as any).editorDiv = ((document as any).createElement as any)("div"), ((this as any).editorDiv as any).className = "internal", (((this as any).editorDiv as any).setAttribute as any)("id", this.#e), (((this as any).editorDiv as any).setAttribute as any)("data-l10n-id", "pdfjs-free-text2"), (((this as any).editorDiv as any).setAttribute as any)("data-l10n-attrs", "default-content"), ((this as any).enableEditing as any)(), ((this as any).editorDiv as any).contentEditable = !0;
    const {
      style: s
    }: any = (this as any).editorDiv;
    if ((s as any).fontSize = `calc(${this.#s}px * var(--total-scale-factor))`, (s as any).color = (this as any).color, (((this as any).div as any).append as any)((this as any).editorDiv), (this as any).overlayDiv = ((document as any).createElement as any)("div"), ((((this as any).overlayDiv as any).classList as any).add as any)("overlay", "enabled"), (((this as any).div as any).append as any)((this as any).overlayDiv), (this as any)._isCopy || (this as any).annotationElementId) {
      const [i, n]: any = (this as any).parentDimensions;
      if ((this as any).annotationElementId) {
        const {
          position: r
        }: any = (this as any)._initialData;
        let [a, o]: any = ((this as any).getInitialTranslation as any)();
        [a, o] = ((this as any).pageTranslationToScreen as any)(a, o);
        const [l, h]: any = (this as any).pageDimensions,
          [c, u]: any = (this as any).pageTranslation;
        let f: any, g: any;
        switch ((this as any).rotation) {
          case 0:
            f = (t as any) + ((((r as any)[0] as any) - (c as any) as any) / (l as any) as any), g = ((e as any) + ((this as any).height as any) as any) - ((((r as any)[1] as any) - (u as any) as any) / (h as any) as any);
            break;
          case 90:
            f = (t as any) + ((((r as any)[0] as any) - (c as any) as any) / (l as any) as any), g = (e as any) - ((((r as any)[1] as any) - (u as any) as any) / (h as any) as any), [a, o] = [o, -a];
            break;
          case 180:
            f = ((t as any) - ((this as any).width as any) as any) + ((((r as any)[0] as any) - (c as any) as any) / (l as any) as any), g = (e as any) - ((((r as any)[1] as any) - (u as any) as any) / (h as any) as any), [a, o] = [-a, -o];
            break;
          case 270:
            f = (t as any) + (((((r as any)[0] as any) - (c as any) as any) - (((this as any).height as any) * (h as any) as any) as any) / (l as any) as any), g = (e as any) + (((((r as any)[1] as any) - (u as any) as any) - (((this as any).width as any) * (l as any) as any) as any) / (h as any) as any), [a, o] = [-o, a];
            break;
        }
        ((this as any).setAt as any)((f as any) * (i as any), (g as any) * (n as any), a, o);
      } else ((this as any)._moveAfterPaste as any)(t, e);
      (this.#l as any)(), (this as any)._isDraggable = !0, ((this as any).editorDiv as any).contentEditable = !1;
    } else (this as any)._isDraggable = !1, ((this as any).editorDiv as any).contentEditable = !0;
    return (this as any).div;
  }
  static #h(t: any): any {
    return (((((t as any).nodeType as any) === ((Node as any).TEXT_NODE as any) ? (t as any).nodeValue : (t as any).innerText) as any).replaceAll as any)(Be, "");
  }
  editorDivPaste(t: any): any {
    const e: any = (t as any).clipboardData || (window as any).clipboardData,
      {
        types: s
      }: any = e;
    if (((s as any).length as any) === (1 as any) && ((s as any)[0] as any) === ("text/plain" as any)) return;
    ((t as any).preventDefault as any)();
    const i: any = (((it.#d as any)(((e as any).getData as any)("text") || "") as any).replaceAll as any)(Be, `
`);
    if (!i) return;
    const n: any = ((window as any).getSelection as any)();
    if (!(n as any).rangeCount) return;
    (((this as any).editorDiv as any).normalize as any)(), ((n as any).deleteFromDocument as any)();
    const r: any = ((n as any).getRangeAt as any)(0);
    if (!((i as any).includes as any)(`
`)) {
      ((r as any).insertNode as any)(((document as any).createTextNode as any)(i)), (((this as any).editorDiv as any).normalize as any)(), ((n as any).collapseToStart as any)();
      return;
    }
    const {
        startContainer: a,
        startOffset: o
      }: any = r,
      l: any = [],
      h: any = [];
    if (((a as any).nodeType as any) === ((Node as any).TEXT_NODE as any)) {
      const f: any = (a as any).parentElement;
      if (((h as any).push as any)((((((a as any).nodeValue as any).slice as any)(o) as any).replaceAll as any)(Be, "")), (f as any) !== ((this as any).editorDiv as any)) {
        let g: any = l;
        for (const p of ((this as any).editorDiv as any).childNodes) {
          if ((p as any) === (f as any)) {
            g = h;
            continue;
          }
          ((g as any).push as any)((it.#h as any)(p));
        }
      }
      ((l as any).push as any)((((((a as any).nodeValue as any).slice as any)(0, o) as any).replaceAll as any)(Be, ""));
    } else if ((a as any) === ((this as any).editorDiv as any)) {
      let f: any = l,
        g: any = 0;
      for (const p of ((this as any).editorDiv as any).childNodes) (g++ as any) === (o as any) && (f = h), ((f as any).push as any)((it.#h as any)(p));
    }
    this.#t = `${((l as any).join as any)(`
`)}${i}${((h as any).join as any)(`
`)}`, (this.#l as any)();
    const c: any = new (Range as any)();
    let u: any = ((Math as any).sumPrecise as any)(((l as any).map as any)((f: any): any => (f as any).length));
    for (const {
      firstChild: f
    } of ((this as any).editorDiv as any).childNodes) if (((f as any).nodeType as any) === ((Node as any).TEXT_NODE as any)) {
      const g: any = ((f as any).nodeValue as any).length;
      if ((u as any) <= (g as any)) {
        ((c as any).setStart as any)(f, u), ((c as any).setEnd as any)(f, u);
        break;
      }
      u -= g;
    }
    ((n as any).removeAllRanges as any)(), ((n as any).addRange as any)(c);
  }
  #l(): any {
    if ((((this as any).editorDiv as any).replaceChildren as any)(), !!this.#t) for (const t of ((this.#t as any).split as any)(`
`)) {
      const e: any = ((document as any).createElement as any)("div");
      ((e as any).append as any)(t ? ((document as any).createTextNode as any)(t) : ((document as any).createElement as any)("br")), (((this as any).editorDiv as any).append as any)(e);
    }
  }
  #u(): any {
    return ((this.#t as any).replaceAll as any)(" ", " ");
  }
  static #d(t: any): any {
    return ((t as any).replaceAll as any)(" ", " ");
  }
  get contentDiv(): any {
    return (this as any).editorDiv;
  }
  getPDFRect(): any {
    const t: any = ((it as any)._internalPadding as any) * ((this as any).parentScale as any);
    return ((this as any).getRect as any)(t, t);
  }
  static async deserialize(t: any, e: any, s: any): Promise<any> {
    let i: any = null;
    if (t instanceof zi) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: r,
            fontColor: a
          },
          rect: o,
          rotation: l,
          id: h,
          popupRef: c,
          richText: u,
          contentsObj: f,
          creationDate: g,
          modificationDate: p
        },
        textContent: b,
        textPosition: m,
        parent: {
          page: {
            pageNumber: y
          }
        }
      }: any = t;
      if (!b || ((b as any).length as any) === (0 as any)) return null;
      i = t = {
        annotationType: (F as any).FREETEXT,
        color: ((Array as any).from as any)(a),
        fontSize: r,
        value: ((b as any).join as any)(`
`),
        position: m,
        pageIndex: (y as any) - (1 as any),
        rect: ((o as any).slice as any)(0),
        rotation: l,
        annotationElementId: h,
        id: h,
        deleted: !1,
        popupRef: c,
        comment: f?.str || null,
        richText: u,
        creationDate: g,
        modificationDate: p
      };
    }
    const n: any = await (super.deserialize as any)(t, e, s);
    return n.#s = (t as any).fontSize, (n as any).color = ((P as any).makeHexColor as any)(...(t as any).color), n.#t = (it.#d as any)((t as any).value), (n as any)._initialData = i, (t as any).comment && ((n as any).setCommentData as any)(t), n;
  }
  serialize(t: any = !1): any {
    if (((this as any).isEmpty as any)()) return null;
    if ((this as any).deleted) return ((this as any).serializeDeleted as any)();
    const e: any = (((M as any)._colorManager as any).convert as any)((this as any).isAttachedToDOM ? ((getComputedStyle as any)((this as any).editorDiv) as any).color : (this as any).color),
      s: any = ((Object as any).assign as any)((super.serialize as any)(t), {
        color: e,
        fontSize: this.#s,
        value: (this.#u as any)()
      });
    return ((this as any).addComment as any)(s), t ? ((s as any).isCopy = !0, s) : (this as any).annotationElementId && !(this.#f as any)(s) ? null : ((s as any).id = (this as any).annotationElementId, s);
  }
  #f(t: any): any {
    const {
      value: e,
      fontSize: s,
      color: i,
      pageIndex: n
    }: any = (this as any)._initialData;
    return (this as any).hasEditedComment || (this as any)._hasBeenMoved || ((t as any).value as any) !== (e as any) || ((t as any).fontSize as any) !== (s as any) || (((t as any).color as any).some as any)((r: any, a: any): any => (r as any) !== ((i as any)[a] as any)) || ((t as any).pageIndex as any) !== (n as any);
  }
  renderAnnotationElement(t: any): any {
    const e: any = (super.renderAnnotationElement as any)(t);
    if (!e) return null;
    const {
      style: s
    }: any = e;
    (s as any).fontSize = `calc(${this.#s}px * var(--total-scale-factor))`, (s as any).color = (this as any).color, ((e as any).replaceChildren as any)();
    for (const i of ((this.#t as any).split as any)(`
`)) {
      const n: any = ((document as any).createElement as any)("div");
      ((n as any).append as any)(i ? ((document as any).createTextNode as any)(i) : ((document as any).createElement as any)("br")), ((e as any).append as any)(n);
    }
    return ((t as any).updateEdited as any)({
      rect: ((this as any).getPDFRect as any)(),
      popup: (((this as any)._uiManager as any).hasCommentManager as any)() || (this as any).hasEditedComment ? (this as any).comment : {
        text: this.#t
      }
    }), e;
  }
  resetAnnotationElement(t: any): any {
    (super.resetAnnotationElement as any)(t), ((t as any).resetEdited as any)();
  }
}
class x {
  [key: string]: any;
  static PRECISION: any = 1e-4;
  toSVGPath(): any {
    (G as any)("Abstract method `toSVGPath` must be implemented.");
  }
  get box(): any {
    (G as any)("Abstract getter `box` must be implemented.");
    return void 0;
  }
  serialize(t: any, e: any): any {
    (G as any)("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t: any, e: any, s: any, i: any, n: any, r: any): any {
    r ||= new (Float32Array as any)((t as any).length);
    for (let a: any = 0, o: any = (t as any).length; (a as any) < (o as any); a += 2) (r as any)[a] = (e as any) + (((t as any)[a] as any) * (i as any) as any), (r as any)[(a as any) + (1 as any)] = (s as any) + (((t as any)[(a as any) + (1 as any)] as any) * (n as any) as any);
    return r;
  }
  static _rescaleAndSwap(t: any, e: any, s: any, i: any, n: any, r: any): any {
    r ||= new (Float32Array as any)((t as any).length);
    for (let a: any = 0, o: any = (t as any).length; (a as any) < (o as any); a += 2) (r as any)[a] = (e as any) + (((t as any)[(a as any) + (1 as any)] as any) * (i as any) as any), (r as any)[(a as any) + (1 as any)] = (s as any) + (((t as any)[a] as any) * (n as any) as any);
    return r;
  }
  static _translate(t: any, e: any, s: any, i: any): any {
    i ||= new (Float32Array as any)((t as any).length);
    for (let n: any = 0, r: any = (t as any).length; (n as any) < (r as any); n += 2) (i as any)[n] = (e as any) + ((t as any)[n] as any), (i as any)[(n as any) + (1 as any)] = (s as any) + ((t as any)[(n as any) + (1 as any)] as any);
    return i;
  }
  static svgRound(t: any): any {
    return ((Math as any).round as any)((t as any) * (1e4 as any));
  }
  static _normalizePoint(t: any, e: any, s: any, i: any, n: any): any {
    switch (n) {
      case 90:
        return [(1 as any) - ((e as any) / (s as any) as any), (t as any) / (i as any)];
      case 180:
        return [(1 as any) - ((t as any) / (s as any) as any), (1 as any) - ((e as any) / (i as any) as any)];
      case 270:
        return [(e as any) / (s as any), (1 as any) - ((t as any) / (i as any) as any)];
      default:
        return [(t as any) / (s as any), (e as any) / (i as any)];
    }
  }
  static _normalizePagePoint(t: any, e: any, s: any): any {
    switch (s) {
      case 90:
        return [(1 as any) - (e as any), t];
      case 180:
        return [(1 as any) - (t as any), (1 as any) - (e as any)];
      case 270:
        return [e, (1 as any) - (t as any)];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t: any, e: any, s: any, i: any, n: any, r: any): any {
    return [((t as any) + ((5 as any) * (s as any) as any) as any) / (6 as any), ((e as any) + ((5 as any) * (i as any) as any) as any) / (6 as any), (((5 as any) * (s as any) as any) + (n as any) as any) / (6 as any), (((5 as any) * (i as any) as any) + (r as any) as any) / (6 as any), ((s as any) + (n as any) as any) / (2 as any), ((i as any) + (r as any) as any) / (2 as any)];
  }
}
class zt {
  [key: string]: any;
  #t: any;
  #e: any = [];
  #i: any;
  #s: any;
  #a: any = [];
  #n: any = new (Float32Array as any)(18);
  #r: any;
  #o: any;
  #h: any;
  #l: any;
  #u: any;
  #d: any;
  #f: any = [];
  static #m: any = 8;
  static #p: any = 2;
  static #c: any = (zt.#m as any) + (zt.#p as any);
  constructor({
    x: t,
    y: e
  }: any, s: any, i: any, n: any, r: any, a: any = 0) {
    this.#t = s, this.#d = (n as any) * (i as any), this.#s = r, ((this.#n as any).set as any)([NaN, NaN, NaN, NaN, t, e], 6), this.#i = a, this.#l = (zt.#m as any) * (i as any), this.#h = (zt.#c as any) * (i as any), this.#u = i, ((this.#f as any).push as any)(t, e);
  }
  isEmpty(): any {
    return (isNaN as any)((this.#n as any)[8]);
  }
  #g(): any {
    const t: any = ((this.#n as any).subarray as any)(4, 6),
      e: any = ((this.#n as any).subarray as any)(16, 18),
      [s, i, n, r]: any = this.#t;
    return [(((this.#r as any) + ((((t as any)[0] as any) - ((e as any)[0] as any) as any) / (2 as any) as any) as any) - (s as any) as any) / (n as any), (((this.#o as any) + ((((t as any)[1] as any) - ((e as any)[1] as any) as any) / (2 as any) as any) as any) - (i as any) as any) / (r as any), (((this.#r as any) + ((((e as any)[0] as any) - ((t as any)[0] as any) as any) / (2 as any) as any) as any) - (s as any) as any) / (n as any), (((this.#o as any) + ((((e as any)[1] as any) - ((t as any)[1] as any) as any) / (2 as any) as any) as any) - (i as any) as any) / (r as any)];
  }
  add({
    x: t,
    y: e
  }: any): any {
    this.#r = t, this.#o = e;
    const [s, i, n, r]: any = this.#t;
    let [a, o, l, h]: any = ((this.#n as any).subarray as any)(8, 12);
    const c: any = (t as any) - (l as any),
      u: any = (e as any) - (h as any),
      f: any = ((Math as any).hypot as any)(c, u);
    if ((f as any) < (this.#h as any)) return !1;
    const g: any = (f as any) - (this.#l as any),
      p: any = (g as any) / (f as any),
      b: any = (p as any) * (c as any),
      m: any = (p as any) * (u as any);
    let y: any = a,
      A: any = o;
    a = l, o = h, l += b, h += m, this.#f?.push(t, e);
    const w: any = (-m as any) / (g as any),
      v: any = (b as any) / (g as any),
      _: any = (w as any) * (this.#d as any),
      S: any = (v as any) * (this.#d as any);
    return ((this.#n as any).set as any)(((this.#n as any).subarray as any)(2, 8), 0), ((this.#n as any).set as any)([(l as any) + (_ as any), (h as any) + (S as any)], 4), ((this.#n as any).set as any)(((this.#n as any).subarray as any)(14, 18), 12), ((this.#n as any).set as any)([(l as any) - (_ as any), (h as any) - (S as any)], 16), (isNaN as any)((this.#n as any)[6]) ? (((this.#a as any).length as any) === (0 as any) && (((this.#n as any).set as any)([(a as any) + (_ as any), (o as any) + (S as any)], 2), ((this.#a as any).push as any)(NaN, NaN, NaN, NaN, (((a as any) + (_ as any) as any) - (s as any) as any) / (n as any), (((o as any) + (S as any) as any) - (i as any) as any) / (r as any)), ((this.#n as any).set as any)([(a as any) - (_ as any), (o as any) - (S as any)], 14), ((this.#e as any).push as any)(NaN, NaN, NaN, NaN, (((a as any) - (_ as any) as any) - (s as any) as any) / (n as any), (((o as any) - (S as any) as any) - (i as any) as any) / (r as any))), ((this.#n as any).set as any)([y, A, a, o, l, h], 6), !((this as any).isEmpty as any)()) : (((this.#n as any).set as any)([y, A, a, o, l, h], 6), (((Math as any).abs as any)((((Math as any).atan2 as any)((A as any) - (o as any), (y as any) - (a as any)) as any) - (((Math as any).atan2 as any)(m, b) as any)) as any) < (((Math as any).PI as any) / (2 as any) as any) ? ([a, o, l, h] = ((this.#n as any).subarray as any)(2, 6), ((this.#a as any).push as any)(NaN, NaN, NaN, NaN, ((((a as any) + (l as any) as any) / (2 as any) as any) - (s as any) as any) / (n as any), ((((o as any) + (h as any) as any) / (2 as any) as any) - (i as any) as any) / (r as any)), [a, o, y, A] = ((this.#n as any).subarray as any)(14, 18), ((this.#e as any).push as any)(NaN, NaN, NaN, NaN, ((((y as any) + (a as any) as any) / (2 as any) as any) - (s as any) as any) / (n as any), ((((A as any) + (o as any) as any) / (2 as any) as any) - (i as any) as any) / (r as any)), !0) : ([y, A, a, o, l, h] = ((this.#n as any).subarray as any)(0, 6), ((this.#a as any).push as any)(((((y as any) + ((5 as any) * (a as any) as any) as any) / (6 as any) as any) - (s as any) as any) / (n as any), ((((A as any) + ((5 as any) * (o as any) as any) as any) / (6 as any) as any) - (i as any) as any) / (r as any), (((((5 as any) * (a as any) as any) + (l as any) as any) / (6 as any) as any) - (s as any) as any) / (n as any), (((((5 as any) * (o as any) as any) + (h as any) as any) / (6 as any) as any) - (i as any) as any) / (r as any), ((((a as any) + (l as any) as any) / (2 as any) as any) - (s as any) as any) / (n as any), ((((o as any) + (h as any) as any) / (2 as any) as any) - (i as any) as any) / (r as any)), [l, h, a, o, y, A] = ((this.#n as any).subarray as any)(12, 18), ((this.#e as any).push as any)(((((y as any) + ((5 as any) * (a as any) as any) as any) / (6 as any) as any) - (s as any) as any) / (n as any), ((((A as any) + ((5 as any) * (o as any) as any) as any) / (6 as any) as any) - (i as any) as any) / (r as any), (((((5 as any) * (a as any) as any) + (l as any) as any) / (6 as any) as any) - (s as any) as any) / (n as any), (((((5 as any) * (o as any) as any) + (h as any) as any) / (6 as any) as any) - (i as any) as any) / (r as any), ((((a as any) + (l as any) as any) / (2 as any) as any) - (s as any) as any) / (n as any), ((((o as any) + (h as any) as any) / (2 as any) as any) - (i as any) as any) / (r as any)), !0));
  }
  toSVGPath(): any {
    if (((this as any).isEmpty as any)()) return "";
    const t: any = this.#a,
      e: any = this.#e;
    if ((isNaN as any)((this.#n as any)[6]) && !((this as any).isEmpty as any)()) return (this.#b as any)();
    const s: any = [];
    ((s as any).push as any)(`M${(t as any)[4]} ${(t as any)[5]}`);
    for (let i: any = 6; (i as any) < ((t as any).length as any); i += 6) (isNaN as any)((t as any)[i]) ? ((s as any).push as any)(`L${(t as any)[(i as any) + (4 as any)]} ${(t as any)[(i as any) + (5 as any)]}`) : ((s as any).push as any)(`C${(t as any)[i]} ${(t as any)[(i as any) + (1 as any)]} ${(t as any)[(i as any) + (2 as any)]} ${(t as any)[(i as any) + (3 as any)]} ${(t as any)[(i as any) + (4 as any)]} ${(t as any)[(i as any) + (5 as any)]}`);
    (this.#y as any)(s);
    for (let i: any = ((e as any).length as any) - (6 as any); (i as any) >= (6 as any); i -= 6) (isNaN as any)((e as any)[i]) ? ((s as any).push as any)(`L${(e as any)[(i as any) + (4 as any)]} ${(e as any)[(i as any) + (5 as any)]}`) : ((s as any).push as any)(`C${(e as any)[i]} ${(e as any)[(i as any) + (1 as any)]} ${(e as any)[(i as any) + (2 as any)]} ${(e as any)[(i as any) + (3 as any)]} ${(e as any)[(i as any) + (4 as any)]} ${(e as any)[(i as any) + (5 as any)]}`);
    return (this.#A as any)(s), ((s as any).join as any)(" ");
  }
  #b(): any {
    const [t, e, s, i]: any = this.#t,
      [n, r, a, o]: any = (this.#g as any)();
    return `M${(((this.#n as any)[2] as any) - (t as any) as any) / (s as any)} ${(((this.#n as any)[3] as any) - (e as any) as any) / (i as any)} L${(((this.#n as any)[4] as any) - (t as any) as any) / (s as any)} ${(((this.#n as any)[5] as any) - (e as any) as any) / (i as any)} L${n} ${r} L${a} ${o} L${(((this.#n as any)[16] as any) - (t as any) as any) / (s as any)} ${(((this.#n as any)[17] as any) - (e as any) as any) / (i as any)} L${(((this.#n as any)[14] as any) - (t as any) as any) / (s as any)} ${(((this.#n as any)[15] as any) - (e as any) as any) / (i as any)} Z`;
  }
  #A(t: any): any {
    const e: any = this.#e;
    ((t as any).push as any)(`L${(e as any)[4]} ${(e as any)[5]} Z`);
  }
  #y(t: any): any {
    const [e, s, i, n]: any = this.#t,
      r: any = ((this.#n as any).subarray as any)(4, 6),
      a: any = ((this.#n as any).subarray as any)(16, 18),
      [o, l, h, c]: any = (this.#g as any)();
    ((t as any).push as any)(`L${(((r as any)[0] as any) - (e as any) as any) / (i as any)} ${(((r as any)[1] as any) - (s as any) as any) / (n as any)} L${o} ${l} L${h} ${c} L${(((a as any)[0] as any) - (e as any) as any) / (i as any)} ${(((a as any)[1] as any) - (s as any) as any) / (n as any)}`);
  }
  newFreeDrawOutline(t: any, e: any, s: any, i: any, n: any, r: any): any {
    return new (Wi as any)(t, e, s, i, n, r);
  }
  getOutlines(): any {
    const t: any = this.#a,
      e: any = this.#e,
      s: any = this.#n,
      [i, n, r, a]: any = this.#t,
      o: any = new (Float32Array as any)(((this.#f?.length ?? 0) as any) + (2 as any));
    for (let c: any = 0, u: any = ((o as any).length as any) - (2 as any); (c as any) < (u as any); c += 2) (o as any)[c] = (((this.#f as any)[c] as any) - (i as any) as any) / (r as any), (o as any)[(c as any) + (1 as any)] = (((this.#f as any)[(c as any) + (1 as any)] as any) - (n as any) as any) / (a as any);
    if ((o as any)[((o as any).length as any) - (2 as any)] = ((this.#r as any) - (i as any) as any) / (r as any), (o as any)[((o as any).length as any) - (1 as any)] = ((this.#o as any) - (n as any) as any) / (a as any), (isNaN as any)((s as any)[6]) && !((this as any).isEmpty as any)()) return (this.#C as any)(o);
    const l: any = new (Float32Array as any)((((this.#a as any).length as any) + (24 as any) as any) + ((this.#e as any).length as any));
    let h: any = (t as any).length;
    for (let c: any = 0; (c as any) < (h as any); c += 2) {
      if ((isNaN as any)((t as any)[c])) {
        (l as any)[c] = (l as any)[(c as any) + (1 as any)] = NaN;
        continue;
      }
      (l as any)[c] = (t as any)[c], (l as any)[(c as any) + (1 as any)] = (t as any)[(c as any) + (1 as any)];
    }
    h = (this.#w as any)(l, h);
    for (let c: any = ((e as any).length as any) - (6 as any); (c as any) >= (6 as any); c -= 6) for (let u: any = 0; (u as any) < (6 as any); u += 2) {
      if ((isNaN as any)((e as any)[(c as any) + (u as any)])) {
        (l as any)[h] = (l as any)[(h as any) + (1 as any)] = NaN, h += 2;
        continue;
      }
      (l as any)[h] = (e as any)[(c as any) + (u as any)], (l as any)[(h as any) + (1 as any)] = (e as any)[((c as any) + (u as any) as any) + (1 as any)], h += 2;
    }
    return (this.#S as any)(l, h), ((this as any).newFreeDrawOutline as any)(l, o, this.#t, this.#u, this.#i, this.#s);
  }
  #C(t: any): any {
    const e: any = this.#n,
      [s, i, n, r]: any = this.#t,
      [a, o, l, h]: any = (this.#g as any)(),
      c: any = new (Float32Array as any)(36);
    return ((c as any).set as any)([NaN, NaN, NaN, NaN, (((e as any)[2] as any) - (s as any) as any) / (n as any), (((e as any)[3] as any) - (i as any) as any) / (r as any), NaN, NaN, NaN, NaN, (((e as any)[4] as any) - (s as any) as any) / (n as any), (((e as any)[5] as any) - (i as any) as any) / (r as any), NaN, NaN, NaN, NaN, a, o, NaN, NaN, NaN, NaN, l, h, NaN, NaN, NaN, NaN, (((e as any)[16] as any) - (s as any) as any) / (n as any), (((e as any)[17] as any) - (i as any) as any) / (r as any), NaN, NaN, NaN, NaN, (((e as any)[14] as any) - (s as any) as any) / (n as any), (((e as any)[15] as any) - (i as any) as any) / (r as any)], 0), ((this as any).newFreeDrawOutline as any)(c, t, this.#t, this.#u, this.#i, this.#s);
  }
  #S(t: any, e: any): any {
    const s: any = this.#e;
    return ((t as any).set as any)([NaN, NaN, NaN, NaN, (s as any)[4], (s as any)[5]], e), e += 6;
  }
  #w(t: any, e: any): any {
    const s: any = ((this.#n as any).subarray as any)(4, 6),
      i: any = ((this.#n as any).subarray as any)(16, 18),
      [n, r, a, o]: any = this.#t,
      [l, h, c, u]: any = (this.#g as any)();
    return ((t as any).set as any)([NaN, NaN, NaN, NaN, (((s as any)[0] as any) - (n as any) as any) / (a as any), (((s as any)[1] as any) - (r as any) as any) / (o as any), NaN, NaN, NaN, NaN, l, h, NaN, NaN, NaN, NaN, c, u, NaN, NaN, NaN, NaN, (((i as any)[0] as any) - (n as any) as any) / (a as any), (((i as any)[1] as any) - (r as any) as any) / (o as any)], e), e += 24;
  }
}
class Wi extends (x as any) {
  declare lastPoint: any;
  declare firstPoint: any;
  [key: string]: any;
  #t: any;
  #e: any = new (Float32Array as any)(4);
  #i: any;
  #s: any;
  #a: any;
  #n: any;
  #r: any;
  constructor(t: any, e: any, s: any, i: any, n: any, r: any) {
    super(), this.#r = t, this.#a = e, this.#t = s, this.#n = i, this.#i = n, this.#s = r, (this as any).firstPoint = [NaN, NaN], (this as any).lastPoint = [NaN, NaN], (this.#o as any)(r);
    const [a, o, l, h]: any = this.#e;
    for (let c: any = 0, u: any = (t as any).length; (c as any) < (u as any); c += 2) (t as any)[c] = (((t as any)[c] as any) - (a as any) as any) / (l as any), (t as any)[(c as any) + (1 as any)] = (((t as any)[(c as any) + (1 as any)] as any) - (o as any) as any) / (h as any);
    for (let c: any = 0, u: any = (e as any).length; (c as any) < (u as any); c += 2) (e as any)[c] = (((e as any)[c] as any) - (a as any) as any) / (l as any), (e as any)[(c as any) + (1 as any)] = (((e as any)[(c as any) + (1 as any)] as any) - (o as any) as any) / (h as any);
  }
  toSVGPath(): any {
    const t: any = [`M${(this.#r as any)[4]} ${(this.#r as any)[5]}`];
    for (let e: any = 6, s: any = (this.#r as any).length; (e as any) < (s as any); e += 6) {
      if ((isNaN as any)((this.#r as any)[e])) {
        ((t as any).push as any)(`L${(this.#r as any)[(e as any) + (4 as any)]} ${(this.#r as any)[(e as any) + (5 as any)]}`);
        continue;
      }
      ((t as any).push as any)(`C${(this.#r as any)[e]} ${(this.#r as any)[(e as any) + (1 as any)]} ${(this.#r as any)[(e as any) + (2 as any)]} ${(this.#r as any)[(e as any) + (3 as any)]} ${(this.#r as any)[(e as any) + (4 as any)]} ${(this.#r as any)[(e as any) + (5 as any)]}`);
    }
    return ((t as any).push as any)("Z"), ((t as any).join as any)(" ");
  }
  serialize([t, e, s, i]: any, n: any): any {
    const r: any = (s as any) - (t as any),
      a: any = (i as any) - (e as any);
    let o: any, l: any;
    switch (n) {
      case 0:
        o = ((x as any)._rescale as any)(this.#r, t, i, r, -a), l = ((x as any)._rescale as any)(this.#a, t, i, r, -a);
        break;
      case 90:
        o = ((x as any)._rescaleAndSwap as any)(this.#r, t, e, r, a), l = ((x as any)._rescaleAndSwap as any)(this.#a, t, e, r, a);
        break;
      case 180:
        o = ((x as any)._rescale as any)(this.#r, s, e, -r, a), l = ((x as any)._rescale as any)(this.#a, s, e, -r, a);
        break;
      case 270:
        o = ((x as any)._rescaleAndSwap as any)(this.#r, s, i, -r, -a), l = ((x as any)._rescaleAndSwap as any)(this.#a, s, i, -r, -a);
        break;
    }
    return {
      outline: ((Array as any).from as any)(o),
      points: [((Array as any).from as any)(l)]
    };
  }
  #o(t: any): any {
    const e: any = this.#r;
    let s: any = (e as any)[4],
      i: any = (e as any)[5];
    const n: any = [s, i, s, i];
    let r: any = s,
      a: any = i,
      o: any = s,
      l: any = i;
    const h: any = t ? (Math as any).max : (Math as any).min,
      c: any = new (Float32Array as any)(4);
    for (let f: any = 6, g: any = (e as any).length; (f as any) < (g as any); f += 6) {
      const p: any = (e as any)[(f as any) + (4 as any)],
        b: any = (e as any)[(f as any) + (5 as any)];
      (isNaN as any)((e as any)[f]) ? (((P as any).pointBoundingBox as any)(p, b, n), (a as any) > (b as any) ? (r = p, a = b) : (a as any) === (b as any) && (r = (h as any)(r, p)), (l as any) < (b as any) ? (o = p, l = b) : (l as any) === (b as any) && (o = (h as any)(o, p))) : ((c as any)[0] = (c as any)[1] = (1 as any) / (0 as any), (c as any)[2] = (c as any)[3] = (-1 as any) / (0 as any), ((P as any).bezierBoundingBox as any)(s, i, ...((e as any).slice as any)(f, (f as any) + (6 as any)), c), ((P as any).rectBoundingBox as any)((c as any)[0], (c as any)[1], (c as any)[2], (c as any)[3], n), (a as any) > ((c as any)[1] as any) ? (r = (c as any)[0], a = (c as any)[1]) : (a as any) === ((c as any)[1] as any) && (r = (h as any)(r, (c as any)[0])), (l as any) < ((c as any)[3] as any) ? (o = (c as any)[2], l = (c as any)[3]) : (l as any) === ((c as any)[3] as any) && (o = (h as any)(o, (c as any)[2]))), s = p, i = b;
    }
    const u: any = this.#e;
    (u as any)[0] = ((n as any)[0] as any) - (this.#i as any), (u as any)[1] = ((n as any)[1] as any) - (this.#i as any), (u as any)[2] = (((n as any)[2] as any) - ((n as any)[0] as any) as any) + ((2 as any) * (this.#i as any) as any), (u as any)[3] = (((n as any)[3] as any) - ((n as any)[1] as any) as any) + ((2 as any) * (this.#i as any) as any), (this as any).firstPoint = [r, a], (this as any).lastPoint = [o, l];
  }
  get box(): any {
    return this.#e;
  }
  newOutliner(t: any, e: any, s: any, i: any, n: any, r: any = 0): any {
    return new (zt as any)(t, e, s, i, n, r);
  }
  getNewOutline(t: any, e: any): any {
    const [s, i, n, r]: any = this.#e,
      [a, o, l, h]: any = this.#t,
      c: any = (n as any) * (l as any),
      u: any = (r as any) * (h as any),
      f: any = ((s as any) * (l as any) as any) + (a as any),
      g: any = ((i as any) * (h as any) as any) + (o as any),
      p: any = ((this as any).newOutliner as any)({
        x: (((this.#a as any)[0] as any) * (c as any) as any) + (f as any),
        y: (((this.#a as any)[1] as any) * (u as any) as any) + (g as any)
      }, this.#t, this.#n, t, this.#s, e ?? this.#i);
    for (let b: any = 2; (b as any) < ((this.#a as any).length as any); b += 2) ((p as any).add as any)({
      x: (((this.#a as any)[b] as any) * (c as any) as any) + (f as any),
      y: (((this.#a as any)[(b as any) + (1 as any)] as any) * (u as any) as any) + (g as any)
    });
    return ((p as any).getOutlines as any)();
  }
}
class vs {
  [key: string]: any;
  #t: any;
  #e: any;
  #i: any;
  #s: any = [];
  #a: any = [];
  constructor(t: any, e: any = 0, s: any = 0, i: any = !0) {
    const n: any = [(1 as any) / (0 as any), (1 as any) / (0 as any), (-1 as any) / (0 as any), (-1 as any) / (0 as any)],
      r: any = (10 as any) ** (-4 as any);
    for (const {
      x: p,
      y: b,
      width: m,
      height: y
    } of t) {
      const A: any = (((Math as any).floor as any)(((p as any) - (e as any) as any) / (r as any)) as any) * (r as any),
        w: any = (((Math as any).ceil as any)((((p as any) + (m as any) as any) + (e as any) as any) / (r as any)) as any) * (r as any),
        v: any = (((Math as any).floor as any)(((b as any) - (e as any) as any) / (r as any)) as any) * (r as any),
        _: any = (((Math as any).ceil as any)((((b as any) + (y as any) as any) + (e as any) as any) / (r as any)) as any) * (r as any),
        S: any = [A, v, _, !0],
        E: any = [w, v, _, !1];
      ((this.#s as any).push as any)(S, E), ((P as any).rectBoundingBox as any)(A, v, w, _, n);
    }
    const a: any = (((n as any)[2] as any) - ((n as any)[0] as any) as any) + ((2 as any) * (s as any) as any),
      o: any = (((n as any)[3] as any) - ((n as any)[1] as any) as any) + ((2 as any) * (s as any) as any),
      l: any = ((n as any)[0] as any) - (s as any),
      h: any = ((n as any)[1] as any) - (s as any);
    let c: any = i ? (-1 as any) / (0 as any) : (1 as any) / (0 as any),
      u: any = (1 as any) / (0 as any);
    const f: any = ((this.#s as any).at as any)(i ? -1 : -2),
      g: any = [(f as any)[0], (f as any)[2]];
    for (const p of this.#s) {
      const [b, m, y, A]: any = p;
      !A && i ? (m as any) < (u as any) ? (u = m, c = b) : (m as any) === (u as any) && (c = ((Math as any).max as any)(c, b)) : A && !i && ((m as any) < (u as any) ? (u = m, c = b) : (m as any) === (u as any) && (c = ((Math as any).min as any)(c, b))), (p as any)[0] = ((b as any) - (l as any) as any) / (a as any), (p as any)[1] = ((m as any) - (h as any) as any) / (o as any), (p as any)[2] = ((y as any) - (h as any) as any) / (o as any);
    }
    this.#t = new (Float32Array as any)([l, h, a, o]), this.#e = [c, u], this.#i = g;
  }
  getOutlines(): any {
    ((this.#s as any).sort as any)((e: any, s: any): any => ((e as any)[0] as any) - ((s as any)[0] as any) || ((e as any)[1] as any) - ((s as any)[1] as any) || ((e as any)[2] as any) - ((s as any)[2] as any));
    const t: any = [];
    for (const e of this.#s) (e as any)[3] ? (((t as any).push as any)(...(this.#l as any)(e)), (this.#o as any)(e)) : ((this.#h as any)(e), ((t as any).push as any)(...(this.#l as any)(e)));
    return (this.#n as any)(t);
  }
  #n(t: any): any {
    const e: any = [],
      s: any = new (Set as any)();
    for (const r of t) {
      const [a, o, l]: any = r;
      ((e as any).push as any)([a, o, r], [a, l, r]);
    }
    ((e as any).sort as any)((r: any, a: any): any => ((r as any)[1] as any) - ((a as any)[1] as any) || ((r as any)[0] as any) - ((a as any)[0] as any));
    for (let r: any = 0, a: any = (e as any).length; (r as any) < (a as any); r += 2) {
      const o: any = ((e as any)[r] as any)[2],
        l: any = ((e as any)[(r as any) + (1 as any)] as any)[2];
      ((o as any).push as any)(l), ((l as any).push as any)(o), ((s as any).add as any)(o), ((s as any).add as any)(l);
    }
    const i: any = [];
    let n: any;
    for (; ((s as any).size as any) > (0 as any);) {
      const r: any = (((((s as any).values as any)() as any).next as any)() as any).value;
      let [a, o, l, h, c]: any = r;
      ((s as any).delete as any)(r);
      let u: any = a,
        f: any = o;
      for (n = [a, l], ((i as any).push as any)(n);;) {
        let g: any;
        if (((s as any).has as any)(h)) g = h;else if (((s as any).has as any)(c)) g = c;else break;
        ((s as any).delete as any)(g), [a, o, l, h, c] = g, (u as any) !== (a as any) && (((n as any).push as any)(u, f, a, (f as any) === (o as any) ? o : l), u = a), f = (f as any) === (o as any) ? l : o;
      }
      ((n as any).push as any)(u, f);
    }
    return new (Wr as any)(i, this.#t, this.#e, this.#i);
  }
  #r(t: any): any {
    const e: any = this.#a;
    let s: any = 0,
      i: any = ((e as any).length as any) - (1 as any);
    for (; (s as any) <= (i as any);) {
      const n: any = ((s as any) + (i as any) as any) >> (1 as any),
        r: any = ((e as any)[n] as any)[0];
      if ((r as any) === (t as any)) return n;
      (r as any) < (t as any) ? s = (n as any) + (1 as any) : i = (n as any) - (1 as any);
    }
    return (i as any) + (1 as any);
  }
  #o([, t, e]: any): any {
    const s: any = (this.#r as any)(t);
    ((this.#a as any).splice as any)(s, 0, [t, e]);
  }
  #h([, t, e]: any): any {
    const s: any = (this.#r as any)(t);
    for (let i: any = s; (i as any) < ((this.#a as any).length as any); i++) {
      const [n, r]: any = (this.#a as any)[i];
      if ((n as any) !== (t as any)) break;
      if ((n as any) === (t as any) && (r as any) === (e as any)) {
        ((this.#a as any).splice as any)(i, 1);
        return;
      }
    }
    for (let i: any = (s as any) - (1 as any); (i as any) >= (0 as any); i--) {
      const [n, r]: any = (this.#a as any)[i];
      if ((n as any) !== (t as any)) break;
      if ((n as any) === (t as any) && (r as any) === (e as any)) {
        ((this.#a as any).splice as any)(i, 1);
        return;
      }
    }
  }
  #l(t: any): any {
    const [e, s, i]: any = t,
      n: any = [[e, s, i]],
      r: any = (this.#r as any)(i);
    for (let a: any = 0; (a as any) < (r as any); a++) {
      const [o, l]: any = (this.#a as any)[a];
      for (let h: any = 0, c: any = (n as any).length; (h as any) < (c as any); h++) {
        const [, u, f]: any = (n as any)[h];
        if (!((l as any) <= (u as any) || (f as any) <= (o as any))) {
          if ((u as any) >= (o as any)) {
            if ((f as any) > (l as any)) ((n as any)[h] as any)[1] = l;else {
              if ((c as any) === (1 as any)) return [];
              ((n as any).splice as any)(h, 1), h--, c--;
            }
            continue;
          }
          ((n as any)[h] as any)[2] = o, (f as any) > (l as any) && ((n as any).push as any)([e, l, f]);
        }
      }
    }
    return n;
  }
}
class Wr extends (x as any) {
  declare lastPoint: any;
  declare firstPoint: any;
  [key: string]: any;
  #t: any;
  #e: any;
  constructor(t: any, e: any, s: any, i: any) {
    super(), this.#e = t, this.#t = e, (this as any).firstPoint = s, (this as any).lastPoint = i;
  }
  toSVGPath(): any {
    const t: any = [];
    for (const e of this.#e) {
      let [s, i]: any = e;
      ((t as any).push as any)(`M${s} ${i}`);
      for (let n: any = 2; (n as any) < ((e as any).length as any); n += 2) {
        const r: any = (e as any)[n],
          a: any = (e as any)[(n as any) + (1 as any)];
        (r as any) === (s as any) ? (((t as any).push as any)(`V${a}`), i = a) : (a as any) === (i as any) && (((t as any).push as any)(`H${r}`), s = r);
      }
      ((t as any).push as any)("Z");
    }
    return ((t as any).join as any)(" ");
  }
  serialize([t, e, s, i]: any, n: any): any {
    const r: any = [],
      a: any = (s as any) - (t as any),
      o: any = (i as any) - (e as any);
    for (const l of this.#e) {
      const h: any = new (Array as any)((l as any).length);
      for (let c: any = 0; (c as any) < ((l as any).length as any); c += 2) (h as any)[c] = (t as any) + (((l as any)[c] as any) * (a as any) as any), (h as any)[(c as any) + (1 as any)] = (i as any) - (((l as any)[(c as any) + (1 as any)] as any) * (o as any) as any);
      ((r as any).push as any)(h);
    }
    return r;
  }
  get box(): any {
    return this.#t;
  }
  get classNamesForOutlining(): any {
    return ["highlightOutline"];
  }
}
class _s extends (zt as any) {
  [key: string]: any;
  newFreeDrawOutline(t: any, e: any, s: any, i: any, n: any, r: any): any {
    return new (Xr as any)(t, e, s, i, n, r);
  }
}
class Xr extends (Wi as any) {
  [key: string]: any;
  newOutliner(t: any, e: any, s: any, i: any, n: any, r: any = 0): any {
    return new (_s as any)(t, e, s, i, n, r);
  }
}
class J extends (M as any) {
  declare height: any;
  declare width: any;
  declare y: any;
  declare x: any;
  declare defaultL10nId: any;
  declare _isDraggable: any;
  declare opacity: any;
  declare color: any;
  [key: string]: any;
  #t: any = null;
  #e: any = 0;
  #i: any;
  #s: any = null;
  #a: any = null;
  #n: any = null;
  #r: any = null;
  #o: any = 0;
  #h: any = null;
  #l: any = null;
  #u: any = null;
  #d: any = !1;
  #f: any = null;
  #m: any = null;
  #p: any = null;
  #c: any = "";
  #g: any;
  #b: any = "";
  static _defaultColor: any = null;
  static _defaultOpacity: any = 1;
  static _defaultThickness: any = 12;
  static _type: any = "highlight";
  static _editorType: any = (F as any).HIGHLIGHT;
  static _freeHighlightId: any = -1;
  static _freeHighlight: any = null;
  static _freeHighlightClipId: any = "";
  static get _keyboardManager(): any {
    const t: any = (J as any).prototype;
    return (N as any)(this, "_keyboardManager", new (Te as any)([[["ArrowLeft", "mac+ArrowLeft"], (t as any)._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], (t as any)._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], (t as any)._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], (t as any)._moveCaret, {
      args: [3]
    }]]));
  }
  constructor(t: any) {
    super({
      ...t,
      name: "highlightEditor"
    }), (this as any).color = (t as any).color || (J as any)._defaultColor, this.#g = (t as any).thickness || (J as any)._defaultThickness, (this as any).opacity = (t as any).opacity || (J as any)._defaultOpacity, this.#i = (t as any).boxes || null, this.#b = (t as any).methodOfCreation || "", this.#c = (t as any).text || "", (this as any)._isDraggable = !1, (this as any).defaultL10nId = "pdfjs-editor-highlight-editor", ((t as any).highlightId as any) > (-1 as any) ? (this.#d = !0, (this.#y as any)(t), (this.#_ as any)()) : this.#i && (this.#t = (t as any).anchorNode, this.#e = (t as any).anchorOffset, this.#r = (t as any).focusNode, this.#o = (t as any).focusOffset, (this.#A as any)(), (this.#_ as any)(), ((this as any).rotate as any)((this as any).rotation)), (this as any).annotationElementId || (((this as any)._uiManager as any).a11yAlert as any)("pdfjs-editor-highlight-added-alert");
  }
  get telemetryInitialData(): any {
    return {
      action: "added",
      type: this.#d ? "free_highlight" : "highlight",
      color: (((this as any)._uiManager as any).getNonHCMColorName as any)((this as any).color),
      thickness: this.#g,
      methodOfCreation: this.#b
    };
  }
  get telemetryFinalData(): any {
    return {
      type: "highlight",
      color: (((this as any)._uiManager as any).getNonHCMColorName as any)((this as any).color)
    };
  }
  static computeTelemetryFinalData(t: any): any {
    return {
      numberOfColors: (((t as any).get as any)("color") as any).size
    };
  }
  #A(): any {
    const t: any = new (vs as any)(this.#i, .001);
    this.#l = ((t as any).getOutlines as any)(), [(this as any).x, (this as any).y, (this as any).width, (this as any).height] = (this.#l as any).box;
    const e: any = new (vs as any)(this.#i, .0025, .001, (((this as any)._uiManager as any).direction as any) === ("ltr" as any));
    this.#n = ((e as any).getOutlines as any)();
    const {
      firstPoint: s
    }: any = this.#l;
    this.#f = [(((s as any)[0] as any) - ((this as any).x as any) as any) / ((this as any).width as any), (((s as any)[1] as any) - ((this as any).y as any) as any) / ((this as any).height as any)];
    const {
      lastPoint: i
    }: any = this.#n;
    this.#m = [(((i as any)[0] as any) - ((this as any).x as any) as any) / ((this as any).width as any), (((i as any)[1] as any) - ((this as any).y as any) as any) / ((this as any).height as any)];
  }
  #y({
    highlightOutlines: t,
    highlightId: e,
    clipPathId: s
  }: any): any {
    this.#l = t;
    const i: number = 1.5;
    if (this.#n = ((t as any).getNewOutline as any)(((this.#g as any) / (2 as any) as any) + (i as any), .0025), (e as any) >= (0 as any)) this.#u = e, this.#s = s, ((((this as any).parent as any).drawLayer as any).finalizeDraw as any)(e, {
      bbox: (t as any).box,
      path: {
        d: ((t as any).toSVGPath as any)()
      }
    }), this.#p = ((((this as any).parent as any).drawLayer as any).drawOutline as any)({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: (this.#n as any).box,
      path: {
        d: ((this.#n as any).toSVGPath as any)()
      }
    }, !0);else if ((this as any).parent) {
      const c: any = (((this as any).parent as any).viewport as any).rotation;
      ((((this as any).parent as any).drawLayer as any).updateProperties as any)(this.#u, {
        bbox: (J.#E as any)((this.#l as any).box, (((c as any) - ((this as any).rotation as any) as any) + (360 as any) as any) % (360 as any)),
        path: {
          d: ((t as any).toSVGPath as any)()
        }
      }), ((((this as any).parent as any).drawLayer as any).updateProperties as any)(this.#p, {
        bbox: (J.#E as any)((this.#n as any).box, c),
        path: {
          d: ((this.#n as any).toSVGPath as any)()
        }
      });
    }
    const [n, r, a, o]: any = (t as any).box;
    switch ((this as any).rotation) {
      case 0:
        (this as any).x = n, (this as any).y = r, (this as any).width = a, (this as any).height = o;
        break;
      case 90:
        {
          const [c, u]: any = (this as any).parentDimensions;
          (this as any).x = r, (this as any).y = (1 as any) - (n as any), (this as any).width = ((a as any) * (u as any) as any) / (c as any), (this as any).height = ((o as any) * (c as any) as any) / (u as any);
          break;
        }
      case 180:
        (this as any).x = (1 as any) - (n as any), (this as any).y = (1 as any) - (r as any), (this as any).width = a, (this as any).height = o;
        break;
      case 270:
        {
          const [c, u]: any = (this as any).parentDimensions;
          (this as any).x = (1 as any) - (r as any), (this as any).y = n, (this as any).width = ((a as any) * (u as any) as any) / (c as any), (this as any).height = ((o as any) * (c as any) as any) / (u as any);
          break;
        }
    }
    const {
      firstPoint: l
    }: any = t;
    this.#f = [(((l as any)[0] as any) - (n as any) as any) / (a as any), (((l as any)[1] as any) - (r as any) as any) / (o as any)];
    const {
      lastPoint: h
    }: any = this.#n;
    this.#m = [(((h as any)[0] as any) - (n as any) as any) / (a as any), (((h as any)[1] as any) - (r as any) as any) / (o as any)];
  }
  static initialize(t: any, e: any): any {
    ((M as any).initialize as any)(t, e), (J as any)._defaultColor ||= (e as any).highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(t: any, e: any): any {
    switch (t) {
      case (O as any).HIGHLIGHT_COLOR:
        (J as any)._defaultColor = e;
        break;
      case (O as any).HIGHLIGHT_THICKNESS:
        (J as any)._defaultThickness = e;
        break;
    }
  }
  translateInPage(t: any, e: any): any {}
  get toolbarPosition(): any {
    return this.#m;
  }
  get commentButtonPosition(): any {
    return this.#f;
  }
  updateParams(t: any, e: any): any {
    switch (t) {
      case (O as any).HIGHLIGHT_COLOR:
        (this.#C as any)(e);
        break;
      case (O as any).HIGHLIGHT_THICKNESS:
        (this.#S as any)(e);
        break;
    }
  }
  static get defaultPropertiesToUpdate(): any {
    return [[(O as any).HIGHLIGHT_COLOR, (J as any)._defaultColor], [(O as any).HIGHLIGHT_THICKNESS, (J as any)._defaultThickness]];
  }
  get propertiesToUpdate(): any {
    return [[(O as any).HIGHLIGHT_COLOR, (this as any).color || (J as any)._defaultColor], [(O as any).HIGHLIGHT_THICKNESS, this.#g || (J as any)._defaultThickness], [(O as any).HIGHLIGHT_FREE, this.#d]];
  }
  onUpdatedColor(): any {
    (this as any).parent?.drawLayer.updateProperties(this.#u, {
      root: {
        fill: (this as any).color,
        "fill-opacity": (this as any).opacity
      }
    }), this.#a?.updateColor((this as any).color), (super.onUpdatedColor as any)();
  }
  #C(t: any): any {
    const e: any = (n: any, r: any): any => {
        (this as any).color = n, (this as any).opacity = r, ((this as any).onUpdatedColor as any)();
      },
      s: any = (this as any).color,
      i: any = (this as any).opacity;
    ((this as any).addCommands as any)({
      cmd: ((e as any).bind as any)(this, t, (J as any)._defaultOpacity),
      undo: ((e as any).bind as any)(this, s, i),
      post: ((((this as any)._uiManager as any).updateUI as any).bind as any)((this as any)._uiManager, this),
      mustExec: !0,
      type: (O as any).HIGHLIGHT_COLOR,
      overwriteIfSameType: !0,
      keepUndo: !0
    }), ((this as any)._reportTelemetry as any)({
      action: "color_changed",
      color: (((this as any)._uiManager as any).getNonHCMColorName as any)(t)
    }, !0);
  }
  #S(t: any): any {
    const e: any = this.#g,
      s: any = (i: any): any => {
        this.#g = i, (this.#w as any)(i);
      };
    ((this as any).addCommands as any)({
      cmd: ((s as any).bind as any)(this, t),
      undo: ((s as any).bind as any)(this, e),
      post: ((((this as any)._uiManager as any).updateUI as any).bind as any)((this as any)._uiManager, this),
      mustExec: !0,
      type: (O as any).INK_THICKNESS,
      overwriteIfSameType: !0,
      keepUndo: !0
    }), ((this as any)._reportTelemetry as any)({
      action: "thickness_changed",
      thickness: t
    }, !0);
  }
  get toolbarButtons(): any {
    return ((this as any)._uiManager as any).highlightColors ? [["colorPicker", this.#a = new (wt as any)({
      editor: this
    })]] : super.toolbarButtons;
  }
  disableEditing(): any {
    (super.disableEditing as any)(), ((((this as any).div as any).classList as any).toggle as any)("disabled", !0);
  }
  enableEditing(): any {
    (super.enableEditing as any)(), ((((this as any).div as any).classList as any).toggle as any)("disabled", !1);
  }
  fixAndSetPosition(): any {
    return (super.fixAndSetPosition as any)((this.#k as any)());
  }
  getBaseTranslation(): any {
    return [0, 0];
  }
  getRect(t: any, e: any): any {
    return (super.getRect as any)(t, e, (this.#k as any)());
  }
  onceAdded(t: any): any {
    (this as any).annotationElementId || (((this as any).parent as any).addUndoableEditor as any)(this), t && (((this as any).div as any).focus as any)();
  }
  remove(): any {
    (this.#T as any)(), ((this as any)._reportTelemetry as any)({
      action: "deleted"
    }), (super.remove as any)();
  }
  rebuild(): any {
    (this as any).parent && ((super.rebuild as any)(), ((this as any).div as any) !== (null as any) && ((this.#_ as any)(), (this as any).isAttachedToDOM || (((this as any).parent as any).add as any)(this)));
  }
  setParent(t: any): any {
    let e: any = !1;
    (this as any).parent && !t ? (this.#T as any)() : t && ((this.#_ as any)(t), e = !(this as any).parent && (this as any).div?.classList.contains("selectedEditor")), (super.setParent as any)(t), ((this as any).show as any)((this as any)._isVisible), e && ((this as any).select as any)();
  }
  #w(t: any): any {
    this.#d && ((this.#y as any)({
      highlightOutlines: ((this.#l as any).getNewOutline as any)((t as any) / (2 as any))
    }), ((this as any).fixAndSetPosition as any)(), ((this as any).setDims as any)((this as any).width, (this as any).height));
  }
  #T(): any {
    (this.#u as any) === (null as any) || !(this as any).parent || (((((this as any).parent as any).drawLayer as any).remove as any)(this.#u), this.#u = null, ((((this as any).parent as any).drawLayer as any).remove as any)(this.#p), this.#p = null);
  }
  #_(t: any = (this as any).parent): any {
    (this.#u as any) === (null as any) && ({
      id: this.#u,
      clipPathId: this.#s
    } = (((t as any).drawLayer as any).draw as any)({
      bbox: (this.#l as any).box,
      root: {
        viewBox: "0 0 1 1",
        fill: (this as any).color,
        "fill-opacity": (this as any).opacity
      },
      rootClass: {
        highlight: !0,
        free: this.#d
      },
      path: {
        d: ((this.#l as any).toSVGPath as any)()
      }
    }, !1, !0), this.#p = (((t as any).drawLayer as any).drawOutline as any)({
      rootClass: {
        highlightOutline: !0,
        free: this.#d
      },
      bbox: (this.#n as any).box,
      path: {
        d: ((this.#n as any).toSVGPath as any)()
      }
    }, this.#d), this.#h && (((this.#h as any).style as any).clipPath = this.#s));
  }
  static #E([t, e, s, i]: any, n: any): any {
    switch (n) {
      case 90:
        return [((1 as any) - (e as any) as any) - (i as any), t, i, s];
      case 180:
        return [((1 as any) - (t as any) as any) - (s as any), ((1 as any) - (e as any) as any) - (i as any), s, i];
      case 270:
        return [e, ((1 as any) - (t as any) as any) - (s as any), i, s];
    }
    return [t, e, s, i];
  }
  rotate(t: any): any {
    const {
      drawLayer: e
    }: any = (this as any).parent;
    let s: any;
    this.#d ? (t = (((t as any) - ((this as any).rotation as any) as any) + (360 as any) as any) % (360 as any), s = (J.#E as any)((this.#l as any).box, t)) : s = (J.#E as any)([(this as any).x, (this as any).y, (this as any).width, (this as any).height], t), ((e as any).updateProperties as any)(this.#u, {
      bbox: s,
      root: {
        "data-main-rotation": t
      }
    }), ((e as any).updateProperties as any)(this.#p, {
      bbox: (J.#E as any)((this.#n as any).box, t),
      root: {
        "data-main-rotation": t
      }
    });
  }
  render(): any {
    if ((this as any).div) return (this as any).div;
    const t: any = (super.render as any)();
    this.#c && (((t as any).setAttribute as any)("aria-label", this.#c), ((t as any).setAttribute as any)("role", "mark")), this.#d ? (((t as any).classList as any).add as any)("free") : (((this as any).div as any).addEventListener as any)("keydown", ((this.#M as any).bind as any)(this), {
      signal: ((this as any)._uiManager as any)._signal
    });
    const e: any = this.#h = ((document as any).createElement as any)("div");
    return ((t as any).append as any)(e), ((e as any).setAttribute as any)("aria-hidden", "true"), (e as any).className = "internal", ((e as any).style as any).clipPath = this.#s, ((this as any).setDims as any)((this as any).width, (this as any).height), (Si as any)(this, this.#h, ["pointerover", "pointerleave"]), ((this as any).enableEditing as any)(), t;
  }
  pointerover(): any {
    (this as any).isSelected || (this as any).parent?.drawLayer.updateProperties(this.#p, {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave(): any {
    (this as any).isSelected || (this as any).parent?.drawLayer.updateProperties(this.#p, {
      rootClass: {
        hovered: !1
      }
    });
  }
  #M(t: any): any {
    (((J as any)._keyboardManager as any).exec as any)(this, t);
  }
  _moveCaret(t: any): any {
    switch ((((this as any).parent as any).unselect as any)(this), t) {
      case 0:
      case 2:
        (this.#P as any)(!0);
        break;
      case 1:
      case 3:
        (this.#P as any)(!1);
        break;
    }
  }
  #P(t: any): any {
    if (!this.#t) return;
    const e: any = ((window as any).getSelection as any)();
    t ? ((e as any).setPosition as any)(this.#t, this.#e) : ((e as any).setPosition as any)(this.#r, this.#o);
  }
  select(): any {
    (super.select as any)(), this.#p && (this as any).parent?.drawLayer.updateProperties(this.#p, {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    });
  }
  unselect(): any {
    (super.unselect as any)(), this.#p && ((this as any).parent?.drawLayer.updateProperties(this.#p, {
      rootClass: {
        selected: !1
      }
    }), this.#d || (this.#P as any)(!1));
  }
  get _mustFixPosition(): any {
    return !this.#d;
  }
  show(t: any = (this as any)._isVisible): any {
    (super.show as any)(t), (this as any).parent && (((((this as any).parent as any).drawLayer as any).updateProperties as any)(this.#u, {
      rootClass: {
        hidden: !t
      }
    }), ((((this as any).parent as any).drawLayer as any).updateProperties as any)(this.#p, {
      rootClass: {
        hidden: !t
      }
    }));
  }
  #k(): any {
    return this.#d ? (this as any).rotation : 0;
  }
  #O(): any {
    if (this.#d) return null;
    const [t, e]: any = (this as any).pageDimensions,
      [s, i]: any = (this as any).pageTranslation,
      n: any = this.#i,
      r: any = new (Float32Array as any)(((n as any).length as any) * (8 as any));
    let a: any = 0;
    for (const {
      x: o,
      y: l,
      width: h,
      height: c
    } of n) {
      const u: any = ((o as any) * (t as any) as any) + (s as any),
        f: any = (((1 as any) - (l as any) as any) * (e as any) as any) + (i as any);
      (r as any)[a] = (r as any)[(a as any) + (4 as any)] = u, (r as any)[(a as any) + (1 as any)] = (r as any)[(a as any) + (3 as any)] = f, (r as any)[(a as any) + (2 as any)] = (r as any)[(a as any) + (6 as any)] = (u as any) + ((h as any) * (t as any) as any), (r as any)[(a as any) + (5 as any)] = (r as any)[(a as any) + (7 as any)] = (f as any) - ((c as any) * (e as any) as any), a += 8;
    }
    return r;
  }
  #D(t: any): any {
    return ((this.#l as any).serialize as any)(t, (this.#k as any)());
  }
  static startHighlighting(t: any, e: any, {
    target: s,
    x: i,
    y: n
  }: any): any {
    const {
        x: r,
        y: a,
        width: o,
        height: l
      }: any = ((s as any).getBoundingClientRect as any)(),
      h: any = new (AbortController as any)(),
      c: any = ((t as any).combinedSignal as any)(h),
      u: any = (f: any): any => {
        ((h as any).abort as any)(), (this.#B as any)(t, f);
      };
    ((window as any).addEventListener as any)("blur", u, {
      signal: c
    }), ((window as any).addEventListener as any)("pointerup", u, {
      signal: c
    }), ((window as any).addEventListener as any)("pointerdown", Q, {
      capture: !0,
      passive: !1,
      signal: c
    }), ((window as any).addEventListener as any)("contextmenu", vt, {
      signal: c
    }), ((s as any).addEventListener as any)("pointermove", ((this.#I as any).bind as any)(this, t), {
      signal: c
    }), (this as any)._freeHighlight = new (_s as any)({
      x: i,
      y: n
    }, [r, a, o, l], (t as any).scale, ((this as any)._defaultThickness as any) / (2 as any), e, .001), {
      id: (this as any)._freeHighlightId,
      clipPathId: (this as any)._freeHighlightClipId
    } = (((t as any).drawLayer as any).draw as any)({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: (this as any)._defaultColor,
        "fill-opacity": (this as any)._defaultOpacity
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: (((this as any)._freeHighlight as any).toSVGPath as any)()
      }
    }, !0, !0);
  }
  static #I(t: any, e: any): any {
    (((this as any)._freeHighlight as any).add as any)(e) && (((t as any).drawLayer as any).updateProperties as any)((this as any)._freeHighlightId, {
      path: {
        d: (((this as any)._freeHighlight as any).toSVGPath as any)()
      }
    });
  }
  static #B(t: any, e: any): any {
    (((this as any)._freeHighlight as any).isEmpty as any)() ? (((t as any).drawLayer as any).remove as any)((this as any)._freeHighlightId) : ((t as any).createAndAddNewEditor as any)(e, !1, {
      highlightId: (this as any)._freeHighlightId,
      highlightOutlines: (((this as any)._freeHighlight as any).getOutlines as any)(),
      clipPathId: (this as any)._freeHighlightClipId,
      methodOfCreation: "main_toolbar"
    }), (this as any)._freeHighlightId = -1, (this as any)._freeHighlight = null, (this as any)._freeHighlightClipId = "";
  }
  static async deserialize(t: any, e: any, s: any): Promise<any> {
    let i: any = null;
    if (t instanceof Gi) {
      const {
        data: {
          quadPoints: g,
          rect: p,
          rotation: b,
          id: m,
          color: y,
          opacity: A,
          popupRef: w,
          richText: v,
          contentsObj: _,
          creationDate: S,
          modificationDate: E
        },
        parent: {
          page: {
            pageNumber: C
          }
        }
      }: any = t;
      i = t = {
        annotationType: (F as any).HIGHLIGHT,
        color: ((Array as any).from as any)(y),
        opacity: A,
        quadPoints: g,
        boxes: null,
        pageIndex: (C as any) - (1 as any),
        rect: ((p as any).slice as any)(0),
        rotation: b,
        annotationElementId: m,
        id: m,
        deleted: !1,
        popupRef: w,
        richText: v,
        comment: _?.str || null,
        creationDate: S,
        modificationDate: E
      };
    } else if (t instanceof Fs) {
      const {
        data: {
          inkLists: g,
          rect: p,
          rotation: b,
          id: m,
          color: y,
          borderStyle: {
            rawWidth: A
          },
          popupRef: w,
          richText: v,
          contentsObj: _,
          creationDate: S,
          modificationDate: E
        },
        parent: {
          page: {
            pageNumber: C
          }
        }
      }: any = t;
      i = t = {
        annotationType: (F as any).HIGHLIGHT,
        color: ((Array as any).from as any)(y),
        thickness: A,
        inkLists: g,
        boxes: null,
        pageIndex: (C as any) - (1 as any),
        rect: ((p as any).slice as any)(0),
        rotation: b,
        annotationElementId: m,
        id: m,
        deleted: !1,
        popupRef: w,
        richText: v,
        comment: _?.str || null,
        creationDate: S,
        modificationDate: E
      };
    }
    const {
        color: n,
        quadPoints: r,
        inkLists: a,
        opacity: o
      }: any = t,
      l: any = await (super.deserialize as any)(t, e, s);
    (l as any).color = ((P as any).makeHexColor as any)(...n), (l as any).opacity = o || 1, a && (l.#g = (t as any).thickness), (l as any)._initialData = i, (t as any).comment && ((l as any).setCommentData as any)(t);
    const [h, c]: any = (l as any).pageDimensions,
      [u, f]: any = (l as any).pageTranslation;
    if (r) {
      const g: any = l.#i = [];
      for (let p: any = 0; (p as any) < ((r as any).length as any); p += 8) ((g as any).push as any)({
        x: (((r as any)[p] as any) - (u as any) as any) / (h as any),
        y: (1 as any) - ((((r as any)[(p as any) + (1 as any)] as any) - (f as any) as any) / (c as any) as any),
        width: (((r as any)[(p as any) + (2 as any)] as any) - ((r as any)[p] as any) as any) / (h as any),
        height: (((r as any)[(p as any) + (1 as any)] as any) - ((r as any)[(p as any) + (5 as any)] as any) as any) / (c as any)
      });
      (l.#A as any)(), (l.#_ as any)(), ((l as any).rotate as any)((l as any).rotation);
    } else if (a) {
      l.#d = !0;
      const g: any = (a as any)[0],
        p: any = {
          x: ((g as any)[0] as any) - (u as any),
          y: (c as any) - (((g as any)[1] as any) - (f as any) as any)
        },
        b: any = new (_s as any)(p, [0, 0, h, c], 1, (l.#g as any) / (2 as any), !0, .001);
      for (let A: any = 0, w: any = (g as any).length; (A as any) < (w as any); A += 2) (p as any).x = ((g as any)[A] as any) - (u as any), (p as any).y = (c as any) - (((g as any)[(A as any) + (1 as any)] as any) - (f as any) as any), ((b as any).add as any)(p);
      const {
        id: m,
        clipPathId: y
      }: any = (((e as any).drawLayer as any).draw as any)({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: (l as any).color,
          "fill-opacity": (l as any)._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: ((b as any).toSVGPath as any)()
        }
      }, !0, !0);
      (l.#y as any)({
        highlightOutlines: ((b as any).getOutlines as any)(),
        highlightId: m,
        clipPathId: y
      }), (l.#_ as any)(), ((l as any).rotate as any)((l as any).parentRotation);
    }
    return l;
  }
  serialize(t: any = !1): any {
    if (((this as any).isEmpty as any)() || t) return null;
    if ((this as any).deleted) return ((this as any).serializeDeleted as any)();
    const e: any = (((M as any)._colorManager as any).convert as any)((((this as any)._uiManager as any).getNonHCMColor as any)((this as any).color)),
      s: any = (super.serialize as any)(t);
    return ((Object as any).assign as any)(s, {
      color: e,
      opacity: (this as any).opacity,
      thickness: this.#g,
      quadPoints: (this.#O as any)(),
      outlines: (this.#D as any)((s as any).rect)
    }), ((this as any).addComment as any)(s), (this as any).annotationElementId && !(this.#F as any)(s) ? null : ((s as any).id = (this as any).annotationElementId, s);
  }
  #F(t: any): any {
    const {
      color: e
    }: any = (this as any)._initialData;
    return (this as any).hasEditedComment || (((t as any).color as any).some as any)((s: any, i: any): any => (s as any) !== ((e as any)[i] as any));
  }
  renderAnnotationElement(t: any): any {
    return (this as any).deleted ? (((t as any).hide as any)(), null) : (((t as any).updateEdited as any)({
      rect: ((this as any).getPDFRect as any)(),
      popup: (this as any).comment
    }), null);
  }
  static canCreateNewEmptyEditor(): any {
    return !1;
  }
}
class Xi {
  [key: string]: any;
  #t: any = ((Object as any).create as any)(null);
  updateProperty(t: any, e: any): any {
    (this as any)[t] = e, ((this as any).updateSVGProperty as any)(t, e);
  }
  updateProperties(t: any): any {
    if (t) for (const [e, s] of ((Object as any).entries as any)(t)) ((e as any).startsWith as any)("_") || ((this as any).updateProperty as any)(e, s);
  }
  updateSVGProperty(t: any, e: any): any {
    (this.#t as any)[t] = e;
  }
  toSVGProperties(): any {
    const t: any = this.#t;
    return this.#t = ((Object as any).create as any)(null), {
      root: t
    };
  }
  reset(): any {
    this.#t = ((Object as any).create as any)(null);
  }
  updateAll(t: any = this): any {
    ((this as any).updateProperties as any)(t);
  }
  clone(): any {
    (G as any)("Not implemented");
  }
}
class D extends (M as any) {
  declare _isDraggable: any;
  declare _drawingOptions: any;
  [key: string]: any;
  #t: any = null;
  #e: any;
  _colorPicker: any = null;
  _drawId: any = null;
  static _currentDrawId: any = -1;
  static _currentParent: any = null;
  static #i: any = null;
  static #s: any = null;
  static #a: any = null;
  static #n: any = NaN;
  static #r: any = null;
  static #o: any = null;
  static #h: any = NaN;
  static _INNER_MARGIN: any = 3;
  constructor(t: any) {
    super(t), this.#e = (t as any).mustBeCommitted || !1, ((this as any)._addOutlines as any)(t);
  }
  onUpdatedColor(): any {
    (this as any)._colorPicker?.update((this as any).color), (super.onUpdatedColor as any)();
  }
  _addOutlines(t: any): any {
    (t as any).drawOutlines && ((this.#l as any)(t), (this.#f as any)());
  }
  #l({
    drawOutlines: t,
    drawId: e,
    drawingOptions: s
  }: any): any {
    this.#t = t, (this as any)._drawingOptions ||= s, (this as any).annotationElementId || (((this as any)._uiManager as any).a11yAlert as any)(`pdfjs-editor-${(this as any).editorType}-added-alert`), (e as any) >= (0 as any) ? ((this as any)._drawId = e, ((((this as any).parent as any).drawLayer as any).finalizeDraw as any)(e, (t as any).defaultProperties)) : (this as any)._drawId = (this.#u as any)(t, (this as any).parent), (this.#c as any)((t as any).box);
  }
  #u(t: any, e: any): any {
    const {
      id: s
    }: any = (((e as any).drawLayer as any).draw as any)(((D as any)._mergeSVGProperties as any)((((this as any)._drawingOptions as any).toSVGProperties as any)(), (t as any).defaultSVGProperties), !1, !1);
    return s;
  }
  static _mergeSVGProperties(t: any, e: any): any {
    const s: any = new (Set as any)(((Object as any).keys as any)(t));
    for (const [i, n] of ((Object as any).entries as any)(e)) ((s as any).has as any)(i) ? ((Object as any).assign as any)((t as any)[i], n) : (t as any)[i] = n;
    return t;
  }
  static getDefaultDrawingOptions(t: any): any {
    (G as any)("Not implemented");
  }
  static get typesMap(): any {
    (G as any)("Not implemented");
    return void 0;
  }
  static get isDrawer(): any {
    return !0;
  }
  static get supportMultipleDrawings(): any {
    return !1;
  }
  static updateDefaultParams(t: any, e: any): any {
    const s: any = (((this as any).typesMap as any).get as any)(t);
    s && (((this as any)._defaultDrawingOptions as any).updateProperty as any)(s, e), (this as any)._currentParent && (((D.#i as any).updateProperty as any)(s, e), ((((this as any)._currentParent as any).drawLayer as any).updateProperties as any)((this as any)._currentDrawId, (((this as any)._defaultDrawingOptions as any).toSVGProperties as any)()));
  }
  updateParams(t: any, e: any): any {
    const s: any = ((((this as any).constructor as any).typesMap as any).get as any)(t);
    s && ((this as any)._updateProperty as any)(t, s, e);
  }
  static get defaultPropertiesToUpdate(): any {
    const t: any = [],
      e: any = (this as any)._defaultDrawingOptions;
    for (const [s, i] of (this as any).typesMap) ((t as any).push as any)([s, (e as any)[i]]);
    return t;
  }
  get propertiesToUpdate(): any {
    const t: any = [],
      {
        _drawingOptions: e
      }: any = this;
    for (const [s, i] of ((this as any).constructor as any).typesMap) ((t as any).push as any)([s, (e as any)[i]]);
    return t;
  }
  _updateProperty(t: any, e: any, s: any): any {
    const i: any = (this as any)._drawingOptions,
      n: any = (i as any)[e],
      r: any = (a: any): any => {
        ((i as any).updateProperty as any)(e, a);
        const o: any = ((this.#t as any).updateProperty as any)(e, a);
        o && (this.#c as any)(o), (this as any).parent?.drawLayer.updateProperties((this as any)._drawId, ((i as any).toSVGProperties as any)()), (t as any) === ((this as any).colorType as any) && ((this as any).onUpdatedColor as any)();
      };
    ((this as any).addCommands as any)({
      cmd: ((r as any).bind as any)(this, s),
      undo: ((r as any).bind as any)(this, n),
      post: ((((this as any)._uiManager as any).updateUI as any).bind as any)((this as any)._uiManager, this),
      mustExec: !0,
      type: t,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing(): any {
    (this as any).parent?.drawLayer.updateProperties((this as any)._drawId, ((D as any)._mergeSVGProperties as any)(((this.#t as any).getPathResizingSVGProperties as any)((this.#p as any)()), {
      bbox: (this.#g as any)()
    }));
  }
  _onResized(): any {
    (this as any).parent?.drawLayer.updateProperties((this as any)._drawId, ((D as any)._mergeSVGProperties as any)(((this.#t as any).getPathResizedSVGProperties as any)((this.#p as any)()), {
      bbox: (this.#g as any)()
    }));
  }
  _onTranslating(t: any, e: any): any {
    (this as any).parent?.drawLayer.updateProperties((this as any)._drawId, {
      bbox: (this.#g as any)()
    });
  }
  _onTranslated(): any {
    (this as any).parent?.drawLayer.updateProperties((this as any)._drawId, ((D as any)._mergeSVGProperties as any)(((this.#t as any).getPathTranslatedSVGProperties as any)((this.#p as any)(), (this as any).parentDimensions), {
      bbox: (this.#g as any)()
    }));
  }
  _onStartDragging(): any {
    (this as any).parent?.drawLayer.updateProperties((this as any)._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging(): any {
    (this as any).parent?.drawLayer.updateProperties((this as any)._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  commit(): any {
    (super.commit as any)(), ((this as any).disableEditMode as any)(), ((this as any).disableEditing as any)();
  }
  disableEditing(): any {
    (super.disableEditing as any)(), ((((this as any).div as any).classList as any).toggle as any)("disabled", !0);
  }
  enableEditing(): any {
    (super.enableEditing as any)(), ((((this as any).div as any).classList as any).toggle as any)("disabled", !1);
  }
  getBaseTranslation(): any {
    return [0, 0];
  }
  get isResizable(): any {
    return !0;
  }
  onceAdded(t: any): any {
    (this as any).annotationElementId || (((this as any).parent as any).addUndoableEditor as any)(this), (this as any)._isDraggable = !0, this.#e && (this.#e = !1, ((this as any).commit as any)(), (((this as any).parent as any).setSelected as any)(this), t && (this as any).isOnScreen && (((this as any).div as any).focus as any)());
  }
  remove(): any {
    (this.#d as any)(), (super.remove as any)();
  }
  rebuild(): any {
    (this as any).parent && ((super.rebuild as any)(), ((this as any).div as any) !== (null as any) && ((this.#f as any)(), (this.#c as any)((this.#t as any).box), (this as any).isAttachedToDOM || (((this as any).parent as any).add as any)(this)));
  }
  setParent(t: any): any {
    let e: any = !1;
    (this as any).parent && !t ? ((((this as any)._uiManager as any).removeShouldRescale as any)(this), (this.#d as any)()) : t && ((((this as any)._uiManager as any).addShouldRescale as any)(this), (this.#f as any)(t), e = !(this as any).parent && (this as any).div?.classList.contains("selectedEditor")), (super.setParent as any)(t), e && ((this as any).select as any)();
  }
  #d(): any {
    ((this as any)._drawId as any) === (null as any) || !(this as any).parent || (((((this as any).parent as any).drawLayer as any).remove as any)((this as any)._drawId), (this as any)._drawId = null, (((this as any)._drawingOptions as any).reset as any)());
  }
  #f(t: any = (this as any).parent): any {
    if (!(((this as any)._drawId as any) !== (null as any) && ((this as any).parent as any) === (t as any))) {
      if (((this as any)._drawId as any) !== (null as any)) {
        ((((this as any).parent as any).drawLayer as any).updateParent as any)((this as any)._drawId, (t as any).drawLayer);
        return;
      }
      (((this as any)._drawingOptions as any).updateAll as any)(), (this as any)._drawId = (this.#u as any)(this.#t, t);
    }
  }
  #m([t, e, s, i]: any): any {
    const {
      parentDimensions: [n, r],
      rotation: a
    }: any = this;
    switch (a) {
      case 90:
        return [e, (1 as any) - (t as any), (s as any) * ((r as any) / (n as any) as any), (i as any) * ((n as any) / (r as any) as any)];
      case 180:
        return [(1 as any) - (t as any), (1 as any) - (e as any), s, i];
      case 270:
        return [(1 as any) - (e as any), t, (s as any) * ((r as any) / (n as any) as any), (i as any) * ((n as any) / (r as any) as any)];
      default:
        return [t, e, s, i];
    }
  }
  #p(): any {
    const {
      x: t,
      y: e,
      width: s,
      height: i,
      parentDimensions: [n, r],
      rotation: a
    }: any = this;
    switch (a) {
      case 90:
        return [(1 as any) - (e as any), t, (s as any) * ((n as any) / (r as any) as any), (i as any) * ((r as any) / (n as any) as any)];
      case 180:
        return [(1 as any) - (t as any), (1 as any) - (e as any), s, i];
      case 270:
        return [e, (1 as any) - (t as any), (s as any) * ((n as any) / (r as any) as any), (i as any) * ((r as any) / (n as any) as any)];
      default:
        return [t, e, s, i];
    }
  }
  #c(t: any): any {
    [(this as any).x, (this as any).y, (this as any).width, (this as any).height] = (this.#m as any)(t), (this as any).div && (((this as any).fixAndSetPosition as any)(), ((this as any).setDims as any)()), ((this as any)._onResized as any)();
  }
  #g(): any {
    const {
      x: t,
      y: e,
      width: s,
      height: i,
      rotation: n,
      parentRotation: r,
      parentDimensions: [a, o]
    }: any = this;
    switch ((((n as any) * (4 as any) as any) + (r as any) as any) / (90 as any)) {
      case 1:
        return [((1 as any) - (e as any) as any) - (i as any), t, i, s];
      case 2:
        return [((1 as any) - (t as any) as any) - (s as any), ((1 as any) - (e as any) as any) - (i as any), s, i];
      case 3:
        return [e, ((1 as any) - (t as any) as any) - (s as any), i, s];
      case 4:
        return [t, (e as any) - ((s as any) * ((a as any) / (o as any) as any) as any), (i as any) * ((o as any) / (a as any) as any), (s as any) * ((a as any) / (o as any) as any)];
      case 5:
        return [(1 as any) - (e as any), t, (s as any) * ((a as any) / (o as any) as any), (i as any) * ((o as any) / (a as any) as any)];
      case 6:
        return [((1 as any) - (t as any) as any) - ((i as any) * ((o as any) / (a as any) as any) as any), (1 as any) - (e as any), (i as any) * ((o as any) / (a as any) as any), (s as any) * ((a as any) / (o as any) as any)];
      case 7:
        return [(e as any) - ((s as any) * ((a as any) / (o as any) as any) as any), ((1 as any) - (t as any) as any) - ((i as any) * ((o as any) / (a as any) as any) as any), (s as any) * ((a as any) / (o as any) as any), (i as any) * ((o as any) / (a as any) as any)];
      case 8:
        return [(t as any) - (s as any), (e as any) - (i as any), s, i];
      case 9:
        return [(1 as any) - (e as any), (t as any) - (s as any), i, s];
      case 10:
        return [(1 as any) - (t as any), (1 as any) - (e as any), s, i];
      case 11:
        return [(e as any) - (i as any), (1 as any) - (t as any), i, s];
      case 12:
        return [(t as any) - ((i as any) * ((o as any) / (a as any) as any) as any), e, (i as any) * ((o as any) / (a as any) as any), (s as any) * ((a as any) / (o as any) as any)];
      case 13:
        return [((1 as any) - (e as any) as any) - ((s as any) * ((a as any) / (o as any) as any) as any), (t as any) - ((i as any) * ((o as any) / (a as any) as any) as any), (s as any) * ((a as any) / (o as any) as any), (i as any) * ((o as any) / (a as any) as any)];
      case 14:
        return [(1 as any) - (t as any), ((1 as any) - (e as any) as any) - ((s as any) * ((a as any) / (o as any) as any) as any), (i as any) * ((o as any) / (a as any) as any), (s as any) * ((a as any) / (o as any) as any)];
      case 15:
        return [e, (1 as any) - (t as any), (s as any) * ((a as any) / (o as any) as any), (i as any) * ((o as any) / (a as any) as any)];
      default:
        return [t, e, s, i];
    }
  }
  rotate(): any {
    (this as any).parent && ((((this as any).parent as any).drawLayer as any).updateProperties as any)((this as any)._drawId, ((D as any)._mergeSVGProperties as any)({
      bbox: (this.#g as any)()
    }, ((this.#t as any).updateRotation as any)(((((this as any).parentRotation as any) - ((this as any).rotation as any) as any) + (360 as any) as any) % (360 as any))));
  }
  onScaleChanging(): any {
    (this as any).parent && (this.#c as any)(((this.#t as any).updateParentDimensions as any)((this as any).parentDimensions, ((this as any).parent as any).scale));
  }
  static onScaleChangingWhenDrawing(): any {}
  render(): any {
    if ((this as any).div) return (this as any).div;
    let t: any, e: any;
    (this as any)._isCopy && (t = (this as any).x, e = (this as any).y);
    const s: any = (super.render as any)();
    (((s as any).classList as any).add as any)("draw");
    const i: any = ((document as any).createElement as any)("div");
    return ((s as any).append as any)(i), ((i as any).setAttribute as any)("aria-hidden", "true"), (i as any).className = "internal", ((this as any).setDims as any)(), (((this as any)._uiManager as any).addShouldRescale as any)(this), ((this as any).disableEditing as any)(), (this as any)._isCopy && ((this as any)._moveAfterPaste as any)(t, e), s;
  }
  static createDrawerInstance(t: any, e: any, s: any, i: any, n: any): any {
    (G as any)("Not implemented");
  }
  static startDrawing(t: any, e: any, s: any, i: any): any {
    const {
      target: n,
      offsetX: r,
      offsetY: a,
      pointerId: o,
      pointerType: l
    }: any = i;
    if (D.#r && (D.#r as any) !== (l as any)) return;
    const {
        viewport: {
          rotation: h
        }
      }: any = t,
      {
        width: c,
        height: u
      }: any = ((n as any).getBoundingClientRect as any)(),
      f: any = D.#s = new (AbortController as any)(),
      g: any = ((t as any).combinedSignal as any)(f);
    if (D.#n ||= o, D.#r ??= l, ((window as any).addEventListener as any)("pointerup", (p: any): any => {
      (D.#n as any) === ((p as any).pointerId as any) ? ((this as any)._endDraw as any)(p) : D.#o?.delete((p as any).pointerId);
    }, {
      signal: g
    }), ((window as any).addEventListener as any)("pointercancel", (p: any): any => {
      (D.#n as any) === ((p as any).pointerId as any) ? (((this as any)._currentParent as any).endDrawingSession as any)() : D.#o?.delete((p as any).pointerId);
    }, {
      signal: g
    }), ((window as any).addEventListener as any)("pointerdown", (p: any): any => {
      (D.#r as any) === ((p as any).pointerType as any) && ((((D.#o ||= new (Set as any)()) as any).add as any)((p as any).pointerId), ((D.#i as any).isCancellable as any)() && (((D.#i as any).removeLastElement as any)(), ((D.#i as any).isEmpty as any)() ? (((this as any)._currentParent as any).endDrawingSession as any)(!0) : ((this as any)._endDraw as any)(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: g
    }), ((window as any).addEventListener as any)("contextmenu", vt, {
      signal: g
    }), ((n as any).addEventListener as any)("pointermove", (((this as any)._drawMove as any).bind as any)(this), {
      signal: g
    }), ((n as any).addEventListener as any)("touchmove", (p: any): any => {
      ((p as any).timeStamp as any) === (D.#h as any) && (Q as any)(p);
    }, {
      signal: g
    }), ((t as any).toggleDrawing as any)(), (e as any)._editorUndoBar?.hide(), D.#i) {
      (((t as any).drawLayer as any).updateProperties as any)((this as any)._currentDrawId, ((D.#i as any).startNew as any)(r, a, c, u, h));
      return;
    }
    ((e as any).updateUIForDefaultProperties as any)(this), D.#i = ((this as any).createDrawerInstance as any)(r, a, c, u, h), D.#a = ((this as any).getDefaultDrawingOptions as any)(), (this as any)._currentParent = t, {
      id: (this as any)._currentDrawId
    } = (((t as any).drawLayer as any).draw as any)(((this as any)._mergeSVGProperties as any)(((D.#a as any).toSVGProperties as any)(), (D.#i as any).defaultSVGProperties), !0, !1);
  }
  static _drawMove(t: any): any {
    if (D.#h = -1, !D.#i) return;
    const {
      offsetX: e,
      offsetY: s,
      pointerId: i
    }: any = t;
    if ((D.#n as any) === (i as any)) {
      if ((D.#o?.size as any) >= (1 as any)) {
        ((this as any)._endDraw as any)(t);
        return;
      }
      ((((this as any)._currentParent as any).drawLayer as any).updateProperties as any)((this as any)._currentDrawId, ((D.#i as any).add as any)(e, s)), D.#h = (t as any).timeStamp, (Q as any)(t);
    }
  }
  static _cleanup(t: any): any {
    t && ((this as any)._currentDrawId = -1, (this as any)._currentParent = null, D.#i = null, D.#a = null, D.#r = null, D.#h = NaN), D.#s && (((D.#s as any).abort as any)(), D.#s = null, D.#n = NaN, D.#o = null);
  }
  static _endDraw(t: any): any {
    const e: any = (this as any)._currentParent;
    if (e) {
      if (((e as any).toggleDrawing as any)(!0), ((this as any)._cleanup as any)(!1), (t?.target as any) === ((e as any).div as any) && (((e as any).drawLayer as any).updateProperties as any)((this as any)._currentDrawId, ((D.#i as any).end as any)((t as any).offsetX, (t as any).offsetY)), (this as any).supportMultipleDrawings) {
        const s: any = D.#i,
          i: any = (this as any)._currentDrawId,
          n: any = ((s as any).getLastElement as any)();
        ((e as any).addCommands as any)({
          cmd: (): any => {
            (((e as any).drawLayer as any).updateProperties as any)(i, ((s as any).setLastElement as any)(n));
          },
          undo: (): any => {
            (((e as any).drawLayer as any).updateProperties as any)(i, ((s as any).removeLastElement as any)());
          },
          mustExec: !1,
          type: (O as any).DRAW_STEP
        });
        return;
      }
      ((this as any).endDrawing as any)(!1);
    }
  }
  static endDrawing(t: any): any {
    const e: any = (this as any)._currentParent;
    if (!e) return null;
    if (((e as any).toggleDrawing as any)(!0), ((e as any).cleanUndoStack as any)((O as any).DRAW_STEP), !((D.#i as any).isEmpty as any)()) {
      const {
          pageDimensions: [s, i],
          scale: n
        }: any = e,
        r: any = ((e as any).createAndAddNewEditor as any)({
          offsetX: 0,
          offsetY: 0
        }, !1, {
          drawId: (this as any)._currentDrawId,
          drawOutlines: ((D.#i as any).getOutlines as any)((s as any) * (n as any), (i as any) * (n as any), n, (this as any)._INNER_MARGIN),
          drawingOptions: D.#a,
          mustBeCommitted: !t
        });
      return ((this as any)._cleanup as any)(!0), r;
    }
    return (((e as any).drawLayer as any).remove as any)((this as any)._currentDrawId), ((this as any)._cleanup as any)(!0), null;
  }
  createDrawingOptions(t: any): any {}
  static deserializeDraw(t: any, e: any, s: any, i: any, n: any, r: any): any {
    (G as any)("Not implemented");
  }
  static async deserialize(t: any, e: any, s: any): Promise<any> {
    const {
        rawDims: {
          pageWidth: i,
          pageHeight: n,
          pageX: r,
          pageY: a
        }
      }: any = (e as any).viewport,
      o: any = ((this as any).deserializeDraw as any)(r, a, i, n, (this as any)._INNER_MARGIN, t),
      l: any = await (super.deserialize as any)(t, e, s);
    return ((l as any).createDrawingOptions as any)(t), (l.#l as any)({
      drawOutlines: o
    }), (l.#f as any)(), ((l as any).onScaleChanging as any)(), ((l as any).rotate as any)(), l;
  }
  serializeDraw(t: any): any {
    const [e, s]: any = (this as any).pageTranslation,
      [i, n]: any = (this as any).pageDimensions;
    return ((this.#t as any).serialize as any)([e, s, i, n], t);
  }
  renderAnnotationElement(t: any): any {
    return ((t as any).updateEdited as any)({
      rect: ((this as any).getPDFRect as any)()
    }), null;
  }
  static canCreateNewEmptyEditor(): any {
    return !1;
  }
}
class qr {
  [key: string]: any;
  #t: any = new (Float64Array as any)(6);
  #e: any;
  #i: any;
  #s: any;
  #a: any;
  #n: any;
  #r: any = "";
  #o: any = 0;
  #h: any = new (ke as any)();
  #l: any;
  #u: any;
  constructor(t: any, e: any, s: any, i: any, n: any, r: any) {
    this.#l = s, this.#u = i, this.#s = n, this.#a = r, [t, e] = (this.#d as any)(t, e);
    const a: any = this.#e = [NaN, NaN, NaN, NaN, t, e];
    this.#n = [t, e], this.#i = [{
      line: a,
      points: this.#n
    }], ((this.#t as any).set as any)(a, 0);
  }
  updateProperty(t: any, e: any): any {
    (t as any) === ("stroke-width" as any) && (this.#a = e);
  }
  #d(t: any, e: any): any {
    return ((x as any)._normalizePoint as any)(t, e, this.#l, this.#u, this.#s);
  }
  isEmpty(): any {
    return !this.#i || ((this.#i as any).length as any) === (0 as any);
  }
  isCancellable(): any {
    return ((this.#n as any).length as any) <= (10 as any);
  }
  add(t: any, e: any): any {
    [t, e] = (this.#d as any)(t, e);
    const [s, i, n, r]: any = ((this.#t as any).subarray as any)(2, 6),
      a: any = (t as any) - (n as any),
      o: any = (e as any) - (r as any);
    return (((Math as any).hypot as any)((this.#l as any) * (a as any), (this.#u as any) * (o as any)) as any) <= (2 as any) ? null : (((this.#n as any).push as any)(t, e), (isNaN as any)(s) ? (((this.#t as any).set as any)([n, r, t, e], 2), ((this.#e as any).push as any)(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: ((this as any).toSVGPath as any)()
      }
    }) : ((isNaN as any)((this.#t as any)[0]) && ((this.#e as any).splice as any)(6, 6), ((this.#t as any).set as any)([s, i, n, r, t, e], 0), ((this.#e as any).push as any)(...((x as any).createBezierPoints as any)(s, i, n, r, t, e)), {
      path: {
        d: ((this as any).toSVGPath as any)()
      }
    }));
  }
  end(t: any, e: any): any {
    const s: any = ((this as any).add as any)(t, e);
    return s || (((this.#n as any).length as any) === (2 as any) ? {
      path: {
        d: ((this as any).toSVGPath as any)()
      }
    } : null);
  }
  startNew(t: any, e: any, s: any, i: any, n: any): any {
    this.#l = s, this.#u = i, this.#s = n, [t, e] = (this.#d as any)(t, e);
    const r: any = this.#e = [NaN, NaN, NaN, NaN, t, e];
    this.#n = [t, e];
    const a: any = ((this.#i as any).at as any)(-1);
    return a && ((a as any).line = new (Float32Array as any)((a as any).line), (a as any).points = new (Float32Array as any)((a as any).points)), ((this.#i as any).push as any)({
      line: r,
      points: this.#n
    }), ((this.#t as any).set as any)(r, 0), this.#o = 0, ((this as any).toSVGPath as any)(), null;
  }
  getLastElement(): any {
    return ((this.#i as any).at as any)(-1);
  }
  setLastElement(t: any): any {
    return this.#i ? (((this.#i as any).push as any)(t), this.#e = (t as any).line, this.#n = (t as any).points, this.#o = 0, {
      path: {
        d: ((this as any).toSVGPath as any)()
      }
    }) : ((this.#h as any).setLastElement as any)(t);
  }
  removeLastElement(): any {
    if (!this.#i) return ((this.#h as any).removeLastElement as any)();
    ((this.#i as any).pop as any)(), this.#r = "";
    for (let t: any = 0, e: any = (this.#i as any).length; (t as any) < (e as any); t++) {
      const {
        line: s,
        points: i
      }: any = (this.#i as any)[t];
      this.#e = s, this.#n = i, this.#o = 0, ((this as any).toSVGPath as any)();
    }
    return {
      path: {
        d: this.#r
      }
    };
  }
  toSVGPath(): any {
    const t: any = ((x as any).svgRound as any)((this.#e as any)[4]),
      e: any = ((x as any).svgRound as any)((this.#e as any)[5]);
    if (((this.#n as any).length as any) === (2 as any)) return this.#r = `${this.#r} M ${t} ${e} Z`, this.#r;
    if (((this.#n as any).length as any) <= (6 as any)) {
      const i: any = ((this.#r as any).lastIndexOf as any)("M");
      this.#r = `${((this.#r as any).slice as any)(0, i)} M ${t} ${e}`, this.#o = 6;
    }
    if (((this.#n as any).length as any) === (4 as any)) {
      const i: any = ((x as any).svgRound as any)((this.#e as any)[10]),
        n: any = ((x as any).svgRound as any)((this.#e as any)[11]);
      return this.#r = `${this.#r} L ${i} ${n}`, this.#o = 12, this.#r;
    }
    const s: any = [];
    (this.#o as any) === (0 as any) && (((s as any).push as any)(`M ${t} ${e}`), this.#o = 6);
    for (let i: any = this.#o, n: any = (this.#e as any).length; (i as any) < (n as any); i += 6) {
      const [r, a, o, l, h, c]: any = ((((this.#e as any).slice as any)(i, (i as any) + (6 as any)) as any).map as any)((x as any).svgRound);
      ((s as any).push as any)(`C${r} ${a} ${o} ${l} ${h} ${c}`);
    }
    return this.#r += ((s as any).join as any)(" "), this.#o = (this.#e as any).length, this.#r;
  }
  getOutlines(t: any, e: any, s: any, i: any): any {
    const n: any = ((this.#i as any).at as any)(-1);
    return (n as any).line = new (Float32Array as any)((n as any).line), (n as any).points = new (Float32Array as any)((n as any).points), ((this.#h as any).build as any)(this.#i, t, e, s, this.#s, this.#a, i), this.#t = null, this.#e = null, this.#i = null, this.#r = null, this.#h;
  }
  get defaultSVGProperties(): any {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
class ke extends (x as any) {
  [key: string]: any;
  #t: any;
  #e: any = 0;
  #i: any;
  #s: any;
  #a: any;
  #n: any;
  #r: any;
  #o: any;
  #h: any;
  build(t: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
    this.#a = e, this.#n = s, this.#r = i, this.#o = n, this.#h = r, this.#i = a ?? 0, this.#s = t, (this.#d as any)();
  }
  get thickness(): any {
    return this.#h;
  }
  setLastElement(t: any): any {
    return ((this.#s as any).push as any)(t), {
      path: {
        d: ((this as any).toSVGPath as any)()
      }
    };
  }
  removeLastElement(): any {
    return ((this.#s as any).pop as any)(), {
      path: {
        d: ((this as any).toSVGPath as any)()
      }
    };
  }
  toSVGPath(): any {
    const t: any = [];
    for (const {
      line: e
    } of this.#s) {
      if (((t as any).push as any)(`M${((x as any).svgRound as any)((e as any)[4])} ${((x as any).svgRound as any)((e as any)[5])}`), ((e as any).length as any) === (6 as any)) {
        ((t as any).push as any)("Z");
        continue;
      }
      if (((e as any).length as any) === (12 as any) && (isNaN as any)((e as any)[6])) {
        ((t as any).push as any)(`L${((x as any).svgRound as any)((e as any)[10])} ${((x as any).svgRound as any)((e as any)[11])}`);
        continue;
      }
      for (let s: any = 6, i: any = (e as any).length; (s as any) < (i as any); s += 6) {
        const [n, r, a, o, l, h]: any = ((((e as any).subarray as any)(s, (s as any) + (6 as any)) as any).map as any)((x as any).svgRound);
        ((t as any).push as any)(`C${n} ${r} ${a} ${o} ${l} ${h}`);
      }
    }
    return ((t as any).join as any)("");
  }
  serialize([t, e, s, i]: any, n: any): any {
    const r: any = [],
      a: any = [],
      [o, l, h, c]: any = (this.#u as any)();
    let u: any, f: any, g: any, p: any, b: any, m: any, y: any, A: any, w: any;
    switch (this.#o) {
      case 0:
        w = (x as any)._rescale, u = t, f = (e as any) + (i as any), g = s, p = -i, b = (t as any) + ((o as any) * (s as any) as any), m = (e as any) + ((((1 as any) - (l as any) as any) - (c as any) as any) * (i as any) as any), y = (t as any) + (((o as any) + (h as any) as any) * (s as any) as any), A = (e as any) + (((1 as any) - (l as any) as any) * (i as any) as any);
        break;
      case 90:
        w = (x as any)._rescaleAndSwap, u = t, f = e, g = s, p = i, b = (t as any) + ((l as any) * (s as any) as any), m = (e as any) + ((o as any) * (i as any) as any), y = (t as any) + (((l as any) + (c as any) as any) * (s as any) as any), A = (e as any) + (((o as any) + (h as any) as any) * (i as any) as any);
        break;
      case 180:
        w = (x as any)._rescale, u = (t as any) + (s as any), f = e, g = -s, p = i, b = (t as any) + ((((1 as any) - (o as any) as any) - (h as any) as any) * (s as any) as any), m = (e as any) + ((l as any) * (i as any) as any), y = (t as any) + (((1 as any) - (o as any) as any) * (s as any) as any), A = (e as any) + (((l as any) + (c as any) as any) * (i as any) as any);
        break;
      case 270:
        w = (x as any)._rescaleAndSwap, u = (t as any) + (s as any), f = (e as any) + (i as any), g = -s, p = -i, b = (t as any) + ((((1 as any) - (l as any) as any) - (c as any) as any) * (s as any) as any), m = (e as any) + ((((1 as any) - (o as any) as any) - (h as any) as any) * (i as any) as any), y = (t as any) + (((1 as any) - (l as any) as any) * (s as any) as any), A = (e as any) + (((1 as any) - (o as any) as any) * (i as any) as any);
        break;
    }
    for (const {
      line: v,
      points: _
    } of this.#s) ((r as any).push as any)((w as any)(v, u, f, g, p, n ? new (Array as any)((v as any).length) : null)), ((a as any).push as any)((w as any)(_, u, f, g, p, n ? new (Array as any)((_ as any).length) : null));
    return {
      lines: r,
      points: a,
      rect: [b, m, y, A]
    };
  }
  static deserialize(t: any, e: any, s: any, i: any, n: any, {
    paths: {
      lines: r,
      points: a
    },
    rotation: o,
    thickness: l
  }: any): any {
    const h: any = [];
    let c: any, u: any, f: any, g: any, p: any;
    switch (o) {
      case 0:
        p = (x as any)._rescale, c = (-t as any) / (s as any), u = ((e as any) / (i as any) as any) + (1 as any), f = (1 as any) / (s as any), g = (-1 as any) / (i as any);
        break;
      case 90:
        p = (x as any)._rescaleAndSwap, c = (-e as any) / (i as any), u = (-t as any) / (s as any), f = (1 as any) / (i as any), g = (1 as any) / (s as any);
        break;
      case 180:
        p = (x as any)._rescale, c = ((t as any) / (s as any) as any) + (1 as any), u = (-e as any) / (i as any), f = (-1 as any) / (s as any), g = (1 as any) / (i as any);
        break;
      case 270:
        p = (x as any)._rescaleAndSwap, c = ((e as any) / (i as any) as any) + (1 as any), u = ((t as any) / (s as any) as any) + (1 as any), f = (-1 as any) / (i as any), g = (-1 as any) / (s as any);
        break;
    }
    if (!r) {
      r = [];
      for (const m of a) {
        const y: any = (m as any).length;
        if ((y as any) === (2 as any)) {
          ((r as any).push as any)(new (Float32Array as any)([NaN, NaN, NaN, NaN, (m as any)[0], (m as any)[1]]));
          continue;
        }
        if ((y as any) === (4 as any)) {
          ((r as any).push as any)(new (Float32Array as any)([NaN, NaN, NaN, NaN, (m as any)[0], (m as any)[1], NaN, NaN, NaN, NaN, (m as any)[2], (m as any)[3]]));
          continue;
        }
        const A: any = new (Float32Array as any)((3 as any) * ((y as any) - (2 as any) as any));
        ((r as any).push as any)(A);
        let [w, v, _, S]: any = ((m as any).subarray as any)(0, 4);
        ((A as any).set as any)([NaN, NaN, NaN, NaN, w, v], 0);
        for (let E: any = 4; (E as any) < (y as any); E += 2) {
          const C: any = (m as any)[E],
            k: any = (m as any)[(E as any) + (1 as any)];
          ((A as any).set as any)(((x as any).createBezierPoints as any)(w, v, _, S, C, k), ((E as any) - (2 as any) as any) * (3 as any)), [w, v, _, S] = [_, S, C, k];
        }
      }
    }
    for (let m: any = 0, y: any = (r as any).length; (m as any) < (y as any); m++) ((h as any).push as any)({
      line: (p as any)((((r as any)[m] as any).map as any)((A: any): any => A ?? NaN), c, u, f, g),
      points: (p as any)((((a as any)[m] as any).map as any)((A: any): any => A ?? NaN), c, u, f, g)
    });
    const b: any = new (((this as any).prototype as any).constructor as any)();
    return ((b as any).build as any)(h, s, i, 1, o, l, n), b;
  }
  #l(t: any = this.#h): any {
    const e: any = (this.#i as any) + (((t as any) / (2 as any) as any) * (this.#r as any) as any);
    return ((this.#o as any) % (180 as any) as any) === (0 as any) ? [(e as any) / (this.#a as any), (e as any) / (this.#n as any)] : [(e as any) / (this.#n as any), (e as any) / (this.#a as any)];
  }
  #u(): any {
    const [t, e, s, i]: any = this.#t,
      [n, r]: any = (this.#l as any)(0);
    return [(t as any) + (n as any), (e as any) + (r as any), (s as any) - ((2 as any) * (n as any) as any), (i as any) - ((2 as any) * (r as any) as any)];
  }
  #d(): any {
    const t: any = this.#t = new (Float32Array as any)([(1 as any) / (0 as any), (1 as any) / (0 as any), (-1 as any) / (0 as any), (-1 as any) / (0 as any)]);
    for (const {
      line: i
    } of this.#s) {
      if (((i as any).length as any) <= (12 as any)) {
        for (let a: any = 4, o: any = (i as any).length; (a as any) < (o as any); a += 6) ((P as any).pointBoundingBox as any)((i as any)[a], (i as any)[(a as any) + (1 as any)], t);
        continue;
      }
      let n: any = (i as any)[4],
        r: any = (i as any)[5];
      for (let a: any = 6, o: any = (i as any).length; (a as any) < (o as any); a += 6) {
        const [l, h, c, u, f, g]: any = ((i as any).subarray as any)(a, (a as any) + (6 as any));
        ((P as any).bezierBoundingBox as any)(n, r, l, h, c, u, f, g, t), n = f, r = g;
      }
    }
    const [e, s]: any = (this.#l as any)();
    (t as any)[0] = (dt as any)(((t as any)[0] as any) - (e as any), 0, 1), (t as any)[1] = (dt as any)(((t as any)[1] as any) - (s as any), 0, 1), (t as any)[2] = (dt as any)(((t as any)[2] as any) + (e as any), 0, 1), (t as any)[3] = (dt as any)(((t as any)[3] as any) + (s as any), 0, 1), (t as any)[2] -= (t as any)[0], (t as any)[3] -= (t as any)[1];
  }
  get box(): any {
    return this.#t;
  }
  updateProperty(t: any, e: any): any {
    return (t as any) === ("stroke-width" as any) ? (this.#f as any)(e) : null;
  }
  #f(t: any): any {
    const [e, s]: any = (this.#l as any)();
    this.#h = t;
    const [i, n]: any = (this.#l as any)(),
      [r, a]: any = [(i as any) - (e as any), (n as any) - (s as any)],
      o: any = this.#t;
    return (o as any)[0] -= r, (o as any)[1] -= a, (o as any)[2] += (2 as any) * (r as any), (o as any)[3] += (2 as any) * (a as any), o;
  }
  updateParentDimensions([t, e]: any, s: any): any {
    const [i, n]: any = (this.#l as any)();
    this.#a = t, this.#n = e, this.#r = s;
    const [r, a]: any = (this.#l as any)(),
      o: any = (r as any) - (i as any),
      l: any = (a as any) - (n as any),
      h: any = this.#t;
    return (h as any)[0] -= o, (h as any)[1] -= l, (h as any)[2] += (2 as any) * (o as any), (h as any)[3] += (2 as any) * (l as any), h;
  }
  updateRotation(t: any): any {
    return this.#e = t, {
      path: {
        transform: (this as any).rotationTransform
      }
    };
  }
  get viewBox(): any {
    return ((((this.#t as any).map as any)((x as any).svgRound) as any).join as any)(" ");
  }
  get defaultProperties(): any {
    const [t, e]: any = this.#t;
    return {
      root: {
        viewBox: (this as any).viewBox
      },
      path: {
        "transform-origin": `${((x as any).svgRound as any)(t)} ${((x as any).svgRound as any)(e)}`
      }
    };
  }
  get rotationTransform(): any {
    const [,, t, e]: any = this.#t;
    let s: any = 0,
      i: any = 0,
      n: any = 0,
      r: any = 0,
      a: any = 0,
      o: any = 0;
    switch (this.#e) {
      case 90:
        i = (e as any) / (t as any), n = (-t as any) / (e as any), a = t;
        break;
      case 180:
        s = -1, r = -1, a = t, o = e;
        break;
      case 270:
        i = (-e as any) / (t as any), n = (t as any) / (e as any), o = e;
        break;
      default:
        return "";
    }
    return `matrix(${s} ${i} ${n} ${r} ${((x as any).svgRound as any)(a)} ${((x as any).svgRound as any)(o)})`;
  }
  getPathResizingSVGProperties([t, e, s, i]: any): any {
    const [n, r]: any = (this.#l as any)(),
      [a, o, l, h]: any = this.#t;
    if ((((Math as any).abs as any)((l as any) - (n as any)) as any) <= ((x as any).PRECISION as any) || (((Math as any).abs as any)((h as any) - (r as any)) as any) <= ((x as any).PRECISION as any)) {
      const p: any = ((t as any) + ((s as any) / (2 as any) as any) as any) - ((a as any) + ((l as any) / (2 as any) as any) as any),
        b: any = ((e as any) + ((i as any) / (2 as any) as any) as any) - ((o as any) + ((h as any) / (2 as any) as any) as any);
      return {
        path: {
          "transform-origin": `${((x as any).svgRound as any)(t)} ${((x as any).svgRound as any)(e)}`,
          transform: `${(this as any).rotationTransform} translate(${p} ${b})`
        }
      };
    }
    const c: any = ((s as any) - ((2 as any) * (n as any) as any) as any) / ((l as any) - ((2 as any) * (n as any) as any) as any),
      u: any = ((i as any) - ((2 as any) * (r as any) as any) as any) / ((h as any) - ((2 as any) * (r as any) as any) as any),
      f: any = (l as any) / (s as any),
      g: any = (h as any) / (i as any);
    return {
      path: {
        "transform-origin": `${((x as any).svgRound as any)(a)} ${((x as any).svgRound as any)(o)}`,
        transform: `${(this as any).rotationTransform} scale(${f} ${g}) translate(${((x as any).svgRound as any)(n)} ${((x as any).svgRound as any)(r)}) scale(${c} ${u}) translate(${((x as any).svgRound as any)(-n)} ${((x as any).svgRound as any)(-r)})`
      }
    };
  }
  getPathResizedSVGProperties([t, e, s, i]: any): any {
    const [n, r]: any = (this.#l as any)(),
      a: any = this.#t,
      [o, l, h, c]: any = a;
    if ((a as any)[0] = t, (a as any)[1] = e, (a as any)[2] = s, (a as any)[3] = i, (((Math as any).abs as any)((h as any) - (n as any)) as any) <= ((x as any).PRECISION as any) || (((Math as any).abs as any)((c as any) - (r as any)) as any) <= ((x as any).PRECISION as any)) {
      const b: any = ((t as any) + ((s as any) / (2 as any) as any) as any) - ((o as any) + ((h as any) / (2 as any) as any) as any),
        m: any = ((e as any) + ((i as any) / (2 as any) as any) as any) - ((l as any) + ((c as any) / (2 as any) as any) as any);
      for (const {
        line: y,
        points: A
      } of this.#s) ((x as any)._translate as any)(y, b, m, y), ((x as any)._translate as any)(A, b, m, A);
      return {
        root: {
          viewBox: (this as any).viewBox
        },
        path: {
          "transform-origin": `${((x as any).svgRound as any)(t)} ${((x as any).svgRound as any)(e)}`,
          transform: (this as any).rotationTransform || null,
          d: ((this as any).toSVGPath as any)()
        }
      };
    }
    const u: any = ((s as any) - ((2 as any) * (n as any) as any) as any) / ((h as any) - ((2 as any) * (n as any) as any) as any),
      f: any = ((i as any) - ((2 as any) * (r as any) as any) as any) / ((c as any) - ((2 as any) * (r as any) as any) as any),
      g: any = (((-u as any) * ((o as any) + (n as any) as any) as any) + (t as any) as any) + (n as any),
      p: any = (((-f as any) * ((l as any) + (r as any) as any) as any) + (e as any) as any) + (r as any);
    if ((u as any) !== (1 as any) || (f as any) !== (1 as any) || (g as any) !== (0 as any) || (p as any) !== (0 as any)) for (const {
      line: b,
      points: m
    } of this.#s) ((x as any)._rescale as any)(b, g, p, u, f, b), ((x as any)._rescale as any)(m, g, p, u, f, m);
    return {
      root: {
        viewBox: (this as any).viewBox
      },
      path: {
        "transform-origin": `${((x as any).svgRound as any)(t)} ${((x as any).svgRound as any)(e)}`,
        transform: (this as any).rotationTransform || null,
        d: ((this as any).toSVGPath as any)()
      }
    };
  }
  getPathTranslatedSVGProperties([t, e]: any, s: any): any {
    const [i, n]: any = s,
      r: any = this.#t,
      a: any = (t as any) - ((r as any)[0] as any),
      o: any = (e as any) - ((r as any)[1] as any);
    if ((this.#a as any) === (i as any) && (this.#n as any) === (n as any)) for (const {
      line: l,
      points: h
    } of this.#s) ((x as any)._translate as any)(l, a, o, l), ((x as any)._translate as any)(h, a, o, h);else {
      const l: any = (this.#a as any) / (i as any),
        h: any = (this.#n as any) / (n as any);
      this.#a = i, this.#n = n;
      for (const {
        line: c,
        points: u
      } of this.#s) ((x as any)._rescale as any)(c, a, o, l, h, c), ((x as any)._rescale as any)(u, a, o, l, h, u);
      (r as any)[2] *= l, (r as any)[3] *= h;
    }
    return (r as any)[0] = t, (r as any)[1] = e, {
      root: {
        viewBox: (this as any).viewBox
      },
      path: {
        d: ((this as any).toSVGPath as any)(),
        "transform-origin": `${((x as any).svgRound as any)(t)} ${((x as any).svgRound as any)(e)}`
      }
    };
  }
  get defaultSVGProperties(): any {
    const t: any = this.#t;
    return {
      root: {
        viewBox: (this as any).viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: ((this as any).toSVGPath as any)(),
        "transform-origin": `${((x as any).svgRound as any)((t as any)[0])} ${((x as any).svgRound as any)((t as any)[1])}`,
        transform: (this as any).rotationTransform || null
      },
      bbox: t
    };
  }
}
class Ze extends (Xi as any) {
  declare _viewParameters: any;
  [key: string]: any;
  constructor(t: any) {
    super(), (this as any)._viewParameters = t, (super.updateProperties as any)({
      fill: "none",
      stroke: (M as any)._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t: any, e: any): any {
    (t as any) === ("stroke-width" as any) && (e ??= (this as any)["stroke-width"], e *= ((this as any)._viewParameters as any).realScale), (super.updateSVGProperty as any)(t, e);
  }
  clone(): any {
    const t: any = new (Ze as any)((this as any)._viewParameters);
    return ((t as any).updateAll as any)(this), t;
  }
}
class Os extends (D as any) {
  declare _drawingOptions: any;
  declare _colorPicker: any;
  declare defaultL10nId: any;
  declare _willKeepAspectRatio: any;
  [key: string]: any;
  static _type: any = "ink";
  static _editorType: any = (F as any).INK;
  static _defaultDrawingOptions: any = null;
  constructor(t: any) {
    super({
      ...t,
      name: "inkEditor"
    }), (this as any)._willKeepAspectRatio = !0, (this as any).defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(t: any, e: any): any {
    ((M as any).initialize as any)(t, e), (this as any)._defaultDrawingOptions = new (Ze as any)((e as any).viewParameters);
  }
  static getDefaultDrawingOptions(t: any): any {
    const e: any = (((this as any)._defaultDrawingOptions as any).clone as any)();
    return ((e as any).updateProperties as any)(t), e;
  }
  static get supportMultipleDrawings(): any {
    return !0;
  }
  static get typesMap(): any {
    return (N as any)(this, "typesMap", new (Map as any)([[(O as any).INK_THICKNESS, "stroke-width"], [(O as any).INK_COLOR, "stroke"], [(O as any).INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(t: any, e: any, s: any, i: any, n: any): any {
    return new (qr as any)(t, e, s, i, n, ((this as any)._defaultDrawingOptions as any)["stroke-width"]);
  }
  static deserializeDraw(t: any, e: any, s: any, i: any, n: any, r: any): any {
    return ((ke as any).deserialize as any)(t, e, s, i, n, r);
  }
  static async deserialize(t: any, e: any, s: any): Promise<any> {
    let i: any = null;
    if (t instanceof Fs) {
      const {
        data: {
          inkLists: r,
          rect: a,
          rotation: o,
          id: l,
          color: h,
          opacity: c,
          borderStyle: {
            rawWidth: u
          },
          popupRef: f,
          richText: g,
          contentsObj: p,
          creationDate: b,
          modificationDate: m
        },
        parent: {
          page: {
            pageNumber: y
          }
        }
      }: any = t;
      i = t = {
        annotationType: (F as any).INK,
        color: ((Array as any).from as any)(h),
        thickness: u,
        opacity: c,
        paths: {
          points: r
        },
        boxes: null,
        pageIndex: (y as any) - (1 as any),
        rect: ((a as any).slice as any)(0),
        rotation: o,
        annotationElementId: l,
        id: l,
        deleted: !1,
        popupRef: f,
        richText: g,
        comment: p?.str || null,
        creationDate: b,
        modificationDate: m
      };
    }
    const n: any = await (super.deserialize as any)(t, e, s);
    return (n as any)._initialData = i, (t as any).comment && ((n as any).setCommentData as any)(t), n;
  }
  get toolbarButtons(): any {
    return (this as any)._colorPicker ||= new (_e as any)(this), [["colorPicker", (this as any)._colorPicker]];
  }
  get colorType(): any {
    return (O as any).INK_COLOR;
  }
  get color(): any {
    return ((this as any)._drawingOptions as any).stroke;
  }
  get opacity(): any {
    return ((this as any)._drawingOptions as any)["stroke-opacity"];
  }
  onScaleChanging(): any {
    if (!(this as any).parent) return;
    (super.onScaleChanging as any)();
    const {
      _drawId: t,
      _drawingOptions: e,
      parent: s
    }: any = this;
    ((e as any).updateSVGProperty as any)("stroke-width"), (((s as any).drawLayer as any).updateProperties as any)(t, ((e as any).toSVGProperties as any)());
  }
  static onScaleChangingWhenDrawing(): any {
    const t: any = (this as any)._currentParent;
    t && ((super.onScaleChangingWhenDrawing as any)(), (((this as any)._defaultDrawingOptions as any).updateSVGProperty as any)("stroke-width"), (((t as any).drawLayer as any).updateProperties as any)((this as any)._currentDrawId, (((this as any)._defaultDrawingOptions as any).toSVGProperties as any)()));
  }
  createDrawingOptions({
    color: t,
    thickness: e,
    opacity: s
  }: any): any {
    (this as any)._drawingOptions = ((Os as any).getDefaultDrawingOptions as any)({
      stroke: ((P as any).makeHexColor as any)(...t),
      "stroke-width": e,
      "stroke-opacity": s
    });
  }
  serialize(t: any = !1): any {
    if (((this as any).isEmpty as any)()) return null;
    if ((this as any).deleted) return ((this as any).serializeDeleted as any)();
    const {
        lines: e,
        points: s
      }: any = ((this as any).serializeDraw as any)(t),
      {
        _drawingOptions: {
          stroke: i,
          "stroke-opacity": n,
          "stroke-width": r
        }
      }: any = this,
      a: any = ((Object as any).assign as any)((super.serialize as any)(t), {
        color: (((M as any)._colorManager as any).convert as any)(i),
        opacity: n,
        thickness: r,
        paths: {
          lines: e,
          points: s
        }
      });
    return ((this as any).addComment as any)(a), t ? ((a as any).isCopy = !0, a) : (this as any).annotationElementId && !(this.#t as any)(a) ? null : ((a as any).id = (this as any).annotationElementId, a);
  }
  #t(t: any): any {
    const {
      color: e,
      thickness: s,
      opacity: i,
      pageIndex: n
    }: any = (this as any)._initialData;
    return (this as any).hasEditedComment || (this as any)._hasBeenMoved || (this as any)._hasBeenResized || (((t as any).color as any).some as any)((r: any, a: any): any => (r as any) !== ((e as any)[a] as any)) || ((t as any).thickness as any) !== (s as any) || ((t as any).opacity as any) !== (i as any) || ((t as any).pageIndex as any) !== (n as any);
  }
  renderAnnotationElement(t: any): any {
    if ((this as any).deleted) return ((t as any).hide as any)(), null;
    const {
      points: e,
      rect: s
    }: any = ((this as any).serializeDraw as any)(!1);
    return ((t as any).updateEdited as any)({
      rect: s,
      thickness: ((this as any)._drawingOptions as any)["stroke-width"],
      points: e,
      popup: (this as any).comment
    }), null;
  }
}
class Ss extends (ke as any) {
  [key: string]: any;
  toSVGPath(): any {
    let t: any = (super.toSVGPath as any)();
    return ((t as any).endsWith as any)("Z") || (t += "Z"), t;
  }
}
const He: number = 8,
  ue: number = 3;
class Zt {
  [key: string]: any;
  static #t: any = {
    maxDim: 512,
    sigmaSFactor: .02,
    sigmaR: 25,
    kernelSize: 16
  };
  static #e(t: any, e: any, s: any, i: any): any {
    return s -= t, i -= e, (s as any) === (0 as any) ? (i as any) > (0 as any) ? 0 : 4 : (s as any) === (1 as any) ? (i as any) + (6 as any) : (2 as any) - (i as any);
  }
  static #i: any = new (Int32Array as any)([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]);
  static #s(t: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
    const o: any = (this.#e as any)(s, i, n, r);
    for (let l: any = 0; (l as any) < (8 as any); l++) {
      const h: any = ((((-l as any) + (o as any) as any) - (a as any) as any) + (16 as any) as any) % (8 as any),
        c: any = (this.#i as any)[(2 as any) * (h as any)],
        u: any = (this.#i as any)[((2 as any) * (h as any) as any) + (1 as any)];
      if (((t as any)[(((s as any) + (c as any) as any) * (e as any) as any) + ((i as any) + (u as any) as any)] as any) !== (0 as any)) return h;
    }
    return -1;
  }
  static #a(t: any, e: any, s: any, i: any, n: any, r: any, a: any): any {
    const o: any = (this.#e as any)(s, i, n, r);
    for (let l: any = 0; (l as any) < (8 as any); l++) {
      const h: any = ((((l as any) + (o as any) as any) + (a as any) as any) + (16 as any) as any) % (8 as any),
        c: any = (this.#i as any)[(2 as any) * (h as any)],
        u: any = (this.#i as any)[((2 as any) * (h as any) as any) + (1 as any)];
      if (((t as any)[(((s as any) + (c as any) as any) * (e as any) as any) + ((i as any) + (u as any) as any)] as any) !== (0 as any)) return h;
    }
    return -1;
  }
  static #n(t: any, e: any, s: any, i: any): any {
    const n: any = (t as any).length,
      r: any = new (Int32Array as any)(n);
    for (let h: any = 0; (h as any) < (n as any); h++) (r as any)[h] = ((t as any)[h] as any) <= (i as any) ? 1 : 0;
    for (let h: any = 1; (h as any) < ((s as any) - (1 as any) as any); h++) (r as any)[(h as any) * (e as any)] = (r as any)[(((h as any) * (e as any) as any) + (e as any) as any) - (1 as any)] = 0;
    for (let h: any = 0; (h as any) < (e as any); h++) (r as any)[h] = (r as any)[(((e as any) * (s as any) as any) - (1 as any) as any) - (h as any)] = 0;
    let a: any = 1,
      o: any;
    const l: any = [];
    for (let h: any = 1; (h as any) < ((s as any) - (1 as any) as any); h++) {
      o = 1;
      for (let c: any = 1; (c as any) < ((e as any) - (1 as any) as any); c++) {
        const u: any = ((h as any) * (e as any) as any) + (c as any),
          f: any = (r as any)[u];
        if ((f as any) === (0 as any)) continue;
        let g: any = h,
          p: any = c;
        if ((f as any) === (1 as any) && ((r as any)[(u as any) - (1 as any)] as any) === (0 as any)) a += 1, p -= 1;else if ((f as any) >= (1 as any) && ((r as any)[(u as any) + (1 as any)] as any) === (0 as any)) a += 1, p += 1, (f as any) > (1 as any) && (o = f);else {
          (f as any) !== (1 as any) && (o = ((Math as any).abs as any)(f));
          continue;
        }
        const b: any = [c, h],
          m: any = (p as any) === ((c as any) + (1 as any) as any),
          y: any = {
            isHole: m,
            points: b,
            id: a,
            parent: 0
          };
        ((l as any).push as any)(y);
        let A: any;
        for (const T of l) if (((T as any).id as any) === (o as any)) {
          A = T;
          break;
        }
        A ? (A as any).isHole ? (y as any).parent = m ? (A as any).parent : o : (y as any).parent = m ? o : (A as any).parent : (y as any).parent = m ? o : 0;
        const w: any = (this.#s as any)(r, e, h, c, g, p, 0);
        if ((w as any) === (-1 as any)) {
          (r as any)[u] = -a, ((r as any)[u] as any) !== (1 as any) && (o = ((Math as any).abs as any)((r as any)[u]));
          continue;
        }
        let v: any = (this.#i as any)[(2 as any) * (w as any)],
          _: any = (this.#i as any)[((2 as any) * (w as any) as any) + (1 as any)];
        const S: any = (h as any) + (v as any),
          E: any = (c as any) + (_ as any);
        g = S, p = E;
        let C: any = h,
          k: any = c;
        for (;;) {
          const T: any = (this.#a as any)(r, e, C, k, g, p, 1);
          v = (this.#i as any)[(2 as any) * (T as any)], _ = (this.#i as any)[((2 as any) * (T as any) as any) + (1 as any)];
          const U: any = (C as any) + (v as any),
            $: any = (k as any) + (_ as any);
          ((b as any).push as any)($, U);
          const z: any = ((C as any) * (e as any) as any) + (k as any);
          if (((r as any)[(z as any) + (1 as any)] as any) === (0 as any) ? (r as any)[z] = -a : ((r as any)[z] as any) === (1 as any) && ((r as any)[z] = a), (U as any) === (h as any) && ($ as any) === (c as any) && (C as any) === (S as any) && (k as any) === (E as any)) {
            ((r as any)[u] as any) !== (1 as any) && (o = ((Math as any).abs as any)((r as any)[u]));
            break;
          } else g = C, p = k, C = U, k = $;
        }
      }
    }
    return l;
  }
  static #r(t: any, e: any, s: any, i: any): any {
    if (((s as any) - (e as any) as any) <= (4 as any)) {
      for (let S: any = e; (S as any) < ((s as any) - (2 as any) as any); S += 2) ((i as any).push as any)((t as any)[S], (t as any)[(S as any) + (1 as any)]);
      return;
    }
    const n: any = (t as any)[e],
      r: any = (t as any)[(e as any) + (1 as any)],
      a: any = ((t as any)[(s as any) - (4 as any)] as any) - (n as any),
      o: any = ((t as any)[(s as any) - (3 as any)] as any) - (r as any),
      l: any = ((Math as any).hypot as any)(a, o),
      h: any = (a as any) / (l as any),
      c: any = (o as any) / (l as any),
      u: any = ((h as any) * (r as any) as any) - ((c as any) * (n as any) as any),
      f: any = (o as any) / (a as any),
      g: any = (1 as any) / (l as any),
      p: any = ((Math as any).atan as any)(f),
      b: any = ((Math as any).cos as any)(p),
      m: any = ((Math as any).sin as any)(p),
      y: any = (g as any) * ((((Math as any).abs as any)(b) as any) + (((Math as any).abs as any)(m) as any) as any),
      A: any = (g as any) * (((1 as any) - (y as any) as any) + ((y as any) ** (2 as any) as any) as any),
      w: any = ((Math as any).max as any)(((Math as any).atan as any)((((Math as any).abs as any)((m as any) + (b as any)) as any) * (A as any)), ((Math as any).atan as any)((((Math as any).abs as any)((m as any) - (b as any)) as any) * (A as any)));
    let v: any = 0,
      _: any = e;
    for (let S: any = (e as any) + (2 as any); (S as any) < ((s as any) - (2 as any) as any); S += 2) {
      const E: any = ((Math as any).abs as any)(((u as any) - ((h as any) * ((t as any)[(S as any) + (1 as any)] as any) as any) as any) + ((c as any) * ((t as any)[S] as any) as any));
      (E as any) > (v as any) && (_ = S, v = E);
    }
    (v as any) > (((l as any) * (w as any) as any) ** (2 as any) as any) ? ((this.#r as any)(t, e, (_ as any) + (2 as any), i), (this.#r as any)(t, _, s, i)) : ((i as any).push as any)(n, r);
  }
  static #o(t: any): any {
    const e: any = [],
      s: any = (t as any).length;
    return (this.#r as any)(t, 0, s, e), ((e as any).push as any)((t as any)[(s as any) - (2 as any)], (t as any)[(s as any) - (1 as any)]), ((e as any).length as any) <= (4 as any) ? null : e;
  }
  static #h(t: any, e: any, s: any, i: any, n: any, r: any): any {
    const a: any = new (Float32Array as any)((r as any) ** (2 as any)),
      o: any = (-2 as any) * ((i as any) ** (2 as any) as any),
      l: any = (r as any) >> (1 as any);
    for (let p: any = 0; (p as any) < (r as any); p++) {
      const b: any = ((p as any) - (l as any) as any) ** (2 as any);
      for (let m: any = 0; (m as any) < (r as any); m++) (a as any)[((p as any) * (r as any) as any) + (m as any)] = ((Math as any).exp as any)(((b as any) + (((m as any) - (l as any) as any) ** (2 as any) as any) as any) / (o as any));
    }
    const h: any = new (Float32Array as any)(256),
      c: any = (-2 as any) * ((n as any) ** (2 as any) as any);
    for (let p: any = 0; (p as any) < (256 as any); p++) (h as any)[p] = ((Math as any).exp as any)(((p as any) ** (2 as any) as any) / (c as any));
    const u: any = (t as any).length,
      f: any = new (Uint8Array as any)(u),
      g: any = new (Uint32Array as any)(256);
    for (let p: any = 0; (p as any) < (s as any); p++) for (let b: any = 0; (b as any) < (e as any); b++) {
      const m: any = ((p as any) * (e as any) as any) + (b as any),
        y: any = (t as any)[m];
      let A: any = 0,
        w: any = 0;
      for (let _: any = 0; (_ as any) < (r as any); _++) {
        const S: any = ((p as any) + (_ as any) as any) - (l as any);
        if (!((S as any) < (0 as any) || (S as any) >= (s as any))) for (let E: any = 0; (E as any) < (r as any); E++) {
          const C: any = ((b as any) + (E as any) as any) - (l as any);
          if ((C as any) < (0 as any) || (C as any) >= (e as any)) continue;
          const k: any = (t as any)[((S as any) * (e as any) as any) + (C as any)],
            T: any = ((a as any)[((_ as any) * (r as any) as any) + (E as any)] as any) * ((h as any)[((Math as any).abs as any)((k as any) - (y as any))] as any);
          A += (k as any) * (T as any), w += T;
        }
      }
      const v: any = (f as any)[m] = ((Math as any).round as any)((A as any) / (w as any));
      (g as any)[v]++;
    }
    return [f, g];
  }
  static #l(t: any): any {
    const e: any = new (Uint32Array as any)(256);
    for (const s of t) (e as any)[s]++;
    return e;
  }
  static #u(t: any): any {
    const e: any = (t as any).length,
      s: any = new (Uint8ClampedArray as any)((e as any) >> (2 as any));
    let i: any = (-1 as any) / (0 as any),
      n: any = (1 as any) / (0 as any);
    for (let a: any = 0, o: any = (s as any).length; (a as any) < (o as any); a++) {
      const l: any = (s as any)[a] = (t as any)[(a as any) << (2 as any)];
      i = ((Math as any).max as any)(i, l), n = ((Math as any).min as any)(n, l);
    }
    const r: any = (255 as any) / ((i as any) - (n as any) as any);
    for (let a: any = 0, o: any = (s as any).length; (a as any) < (o as any); a++) (s as any)[a] = (((s as any)[a] as any) - (n as any) as any) * (r as any);
    return s;
  }
  static #d(t: any): any {
    let e: any,
      s: any = (-1 as any) / (0 as any),
      i: any = (-1 as any) / (0 as any);
    const n: any = ((t as any).findIndex as any)((o: any): any => (o as any) !== (0 as any));
    let r: any = n,
      a: any = n;
    for (e = n; (e as any) < (256 as any); e++) {
      const o: any = (t as any)[e];
      (o as any) > (s as any) && (((e as any) - (r as any) as any) > (i as any) && (i = (e as any) - (r as any), a = (e as any) - (1 as any)), s = o, r = e);
    }
    for (e = (a as any) - (1 as any); (e as any) >= (0 as any) && !(((t as any)[e] as any) > ((t as any)[(e as any) + (1 as any)] as any)); e--);
    return e;
  }
  static #f(t: any): any {
    const e: any = t,
      {
        width: s,
        height: i
      }: any = t,
      {
        maxDim: n
      }: any = this.#t;
    let r: any = s,
      a: any = i;
    if ((s as any) > (n as any) || (i as any) > (n as any)) {
      let u: any = s,
        f: any = i,
        g: any = ((Math as any).log2 as any)((((Math as any).max as any)(s, i) as any) / (n as any));
      const p: any = ((Math as any).floor as any)(g);
      g = (g as any) === (p as any) ? (p as any) - (1 as any) : p;
      for (let m: any = 0; (m as any) < (g as any); m++) {
        r = ((Math as any).ceil as any)((u as any) / (2 as any)), a = ((Math as any).ceil as any)((f as any) / (2 as any));
        const y: any = new (OffscreenCanvas as any)(r, a);
        ((((y as any).getContext as any)("2d") as any).drawImage as any)(t, 0, 0, u, f, 0, 0, r, a), u = r, f = a, (t as any) !== (e as any) && ((t as any).close as any)(), t = ((y as any).transferToImageBitmap as any)();
      }
      const b: any = ((Math as any).min as any)((n as any) / (r as any), (n as any) / (a as any));
      r = ((Math as any).round as any)((r as any) * (b as any)), a = ((Math as any).round as any)((a as any) * (b as any));
    }
    const l: any = ((new (OffscreenCanvas as any)(r, a) as any).getContext as any)("2d", {
      willReadFrequently: !0
    });
    (l as any).fillStyle = "white", ((l as any).fillRect as any)(0, 0, r, a), (l as any).filter = "grayscale(1)", ((l as any).drawImage as any)(t, 0, 0, (t as any).width, (t as any).height, 0, 0, r, a);
    const h: any = (((l as any).getImageData as any)(0, 0, r, a) as any).data;
    return [(this.#u as any)(h), r, a];
  }
  static extractContoursFromText(t: any, {
    fontFamily: e,
    fontStyle: s,
    fontWeight: i
  }: any, n: any, r: any, a: any, o: any): any {
    let l: any = new (OffscreenCanvas as any)(1, 1),
      h: any = ((l as any).getContext as any)("2d", {
        alpha: !1
      });
    const c: number = 200,
      u: any = (h as any).font = `${s} ${i} ${c}px ${e}`,
      {
        actualBoundingBoxLeft: f,
        actualBoundingBoxRight: g,
        actualBoundingBoxAscent: p,
        actualBoundingBoxDescent: b,
        fontBoundingBoxAscent: m,
        fontBoundingBoxDescent: y,
        width: A
      }: any = ((h as any).measureText as any)(t),
      w: number = 1.5,
      v: any = ((Math as any).ceil as any)((((Math as any).max as any)((((Math as any).abs as any)(f) as any) + (((Math as any).abs as any)(g) as any) || 0, A) as any) * (w as any)),
      _: any = ((Math as any).ceil as any)((((Math as any).max as any)((((Math as any).abs as any)(p) as any) + (((Math as any).abs as any)(b) as any) || c, (((Math as any).abs as any)(m) as any) + (((Math as any).abs as any)(y) as any) || c) as any) * (w as any));
    l = new (OffscreenCanvas as any)(v, _), h = ((l as any).getContext as any)("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), (h as any).font = u, (h as any).filter = "grayscale(1)", (h as any).fillStyle = "white", ((h as any).fillRect as any)(0, 0, v, _), (h as any).fillStyle = "black", ((h as any).fillText as any)(t, ((v as any) * ((w as any) - (1 as any) as any) as any) / (2 as any), ((_ as any) * ((3 as any) - (w as any) as any) as any) / (2 as any));
    const S: any = (this.#u as any)((((h as any).getImageData as any)(0, 0, v, _) as any).data),
      E: any = (this.#l as any)(S),
      C: any = (this.#d as any)(E),
      k: any = (this.#n as any)(S, v, _, C);
    return ((this as any).processDrawnLines as any)({
      lines: {
        curves: k,
        width: v,
        height: _
      },
      pageWidth: n,
      pageHeight: r,
      rotation: a,
      innerMargin: o,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static process(t: any, e: any, s: any, i: any, n: any): any {
    const [r, a, o]: any = (this.#f as any)(t),
      [l, h]: any = (this.#h as any)(r, a, o, (((Math as any).hypot as any)(a, o) as any) * ((this.#t as any).sigmaSFactor as any), (this.#t as any).sigmaR, (this.#t as any).kernelSize),
      c: any = (this.#d as any)(h),
      u: any = (this.#n as any)(l, a, o, c);
    return ((this as any).processDrawnLines as any)({
      lines: {
        curves: u,
        width: a,
        height: o
      },
      pageWidth: e,
      pageHeight: s,
      rotation: i,
      innerMargin: n,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: s,
    rotation: i,
    innerMargin: n,
    mustSmooth: r,
    areContours: a
  }: any): any {
    ((i as any) % (180 as any) as any) !== (0 as any) && ([e, s] = [s, e]);
    const {
        curves: o,
        width: l,
        height: h
      }: any = t,
      c: any = (t as any).thickness ?? 0,
      u: any = [],
      f: any = ((Math as any).min as any)((e as any) / (l as any), (s as any) / (h as any)),
      g: any = (f as any) / (e as any),
      p: any = (f as any) / (s as any),
      b: any = [];
    for (const {
      points: y
    } of o) {
      const A: any = r ? (this.#o as any)(y) : y;
      if (!A) continue;
      ((b as any).push as any)(A);
      const w: any = (A as any).length,
        v: any = new (Float32Array as any)(w),
        _: any = new (Float32Array as any)((3 as any) * (((w as any) === (2 as any) ? 2 : (w as any) - (2 as any)) as any));
      if (((u as any).push as any)({
        line: _,
        points: v
      }), (w as any) === (2 as any)) {
        (v as any)[0] = ((A as any)[0] as any) * (g as any), (v as any)[1] = ((A as any)[1] as any) * (p as any), ((_ as any).set as any)([NaN, NaN, NaN, NaN, (v as any)[0], (v as any)[1]], 0);
        continue;
      }
      let [S, E, C, k]: any = A;
      S *= g, E *= p, C *= g, k *= p, ((v as any).set as any)([S, E, C, k], 0), ((_ as any).set as any)([NaN, NaN, NaN, NaN, S, E], 0);
      for (let T: any = 4; (T as any) < (w as any); T += 2) {
        const U: any = (v as any)[T] = ((A as any)[T] as any) * (g as any),
          $: any = (v as any)[(T as any) + (1 as any)] = ((A as any)[(T as any) + (1 as any)] as any) * (p as any);
        ((_ as any).set as any)(((x as any).createBezierPoints as any)(S, E, C, k, U, $), ((T as any) - (2 as any) as any) * (3 as any)), [S, E, C, k] = [C, k, U, $];
      }
    }
    if (((u as any).length as any) === (0 as any)) return null;
    const m: any = a ? new (Ss as any)() : new (ke as any)();
    return ((m as any).build as any)(u, e, s, 1, i, a ? 0 : c, n), {
      outline: m,
      newCurves: b,
      areContours: a,
      thickness: c,
      width: l,
      height: h
    };
  }
  static async compressSignature({
    outlines: t,
    areContours: e,
    thickness: s,
    width: i,
    height: n
  }: any): Promise<any> {
    let r: any = (1 as any) / (0 as any),
      a: any = (-1 as any) / (0 as any),
      o: any = 0;
    for (const A of t) {
      o += (A as any).length;
      for (let w: any = 2, v: any = (A as any).length; (w as any) < (v as any); w++) {
        const _: any = ((A as any)[w] as any) - ((A as any)[(w as any) - (2 as any)] as any);
        r = ((Math as any).min as any)(r, _), a = ((Math as any).max as any)(a, _);
      }
    }
    let l: any;
    (r as any) >= (-128 as any) && (a as any) <= (127 as any) ? l = Int8Array : (r as any) >= (-32768 as any) && (a as any) <= (32767 as any) ? l = Int16Array : l = Int32Array;
    const h: any = (t as any).length,
      c: any = (He as any) + ((ue as any) * (h as any) as any),
      u: any = new (Uint32Array as any)(c);
    let f: any = 0;
    (u as any)[f++] = ((c as any) * ((Uint32Array as any).BYTES_PER_ELEMENT as any) as any) + (((o as any) - ((2 as any) * (h as any) as any) as any) * ((l as any).BYTES_PER_ELEMENT as any) as any), (u as any)[f++] = 0, (u as any)[f++] = i, (u as any)[f++] = n, (u as any)[f++] = e ? 0 : 1, (u as any)[f++] = ((Math as any).max as any)(0, ((Math as any).floor as any)(s ?? 0)), (u as any)[f++] = h, (u as any)[f++] = (l as any).BYTES_PER_ELEMENT;
    for (const A of t) (u as any)[f++] = ((A as any).length as any) - (2 as any), (u as any)[f++] = (A as any)[0], (u as any)[f++] = (A as any)[1];
    const g: any = new (CompressionStream as any)("deflate-raw"),
      p: any = (((g as any).writable as any).getWriter as any)();
    await (p as any).ready, ((p as any).write as any)(u);
    const b: any = ((l as any).prototype as any).constructor;
    for (const A of t) {
      const w: any = new (b as any)(((A as any).length as any) - (2 as any));
      for (let v: any = 2, _: any = (A as any).length; (v as any) < (_ as any); v++) (w as any)[(v as any) - (2 as any)] = ((A as any)[v] as any) - ((A as any)[(v as any) - (2 as any)] as any);
      ((p as any).write as any)(w);
    }
    ((p as any).close as any)();
    const m: any = await ((new (Response as any)((g as any).readable) as any).arrayBuffer as any)(),
      y: any = new (Uint8Array as any)(m);
    return (wi as any)(y);
  }
  static async decompressSignature(t: any): Promise<any> {
    try {
      const e: any = (hn as any)(t),
        {
          readable: s,
          writable: i
        }: any = new (DecompressionStream as any)("deflate-raw"),
        n: any = ((i as any).getWriter as any)();
      await (n as any).ready, ((((((n as any).write as any)(e) as any).then as any)(async (): Promise<any> => {
        await (n as any).ready, await ((n as any).close as any)();
      }) as any).catch as any)((): any => {});
      let r: any = null,
        a: any = 0;
      for await (const A of s) r ||= new (Uint8Array as any)((new (Uint32Array as any)((A as any).buffer, 0, 4) as any)[0]), ((r as any).set as any)(A, a), a += (A as any).length;
      const o: any = new (Uint32Array as any)((r as any).buffer, 0, ((r as any).length as any) >> (2 as any)),
        l: any = (o as any)[1];
      if ((l as any) !== (0 as any)) throw new (Error as any)(`Invalid version: ${l}`);
      const h: any = (o as any)[2],
        c: any = (o as any)[3],
        u: any = ((o as any)[4] as any) === (0 as any),
        f: any = (o as any)[5],
        g: any = (o as any)[6],
        p: any = (o as any)[7],
        b: any = [],
        m: any = ((He as any) + ((ue as any) * (g as any) as any) as any) * ((Uint32Array as any).BYTES_PER_ELEMENT as any);
      let y: any;
      switch (p) {
        case (Int8Array as any).BYTES_PER_ELEMENT:
          y = new (Int8Array as any)((r as any).buffer, m);
          break;
        case (Int16Array as any).BYTES_PER_ELEMENT:
          y = new (Int16Array as any)((r as any).buffer, m);
          break;
        case (Int32Array as any).BYTES_PER_ELEMENT:
          y = new (Int32Array as any)((r as any).buffer, m);
          break;
      }
      a = 0;
      for (let A: any = 0; (A as any) < (g as any); A++) {
        const w: any = (o as any)[((ue as any) * (A as any) as any) + (He as any)],
          v: any = new (Float32Array as any)((w as any) + (2 as any));
        ((b as any).push as any)(v);
        for (let _: any = 0; (_ as any) < ((ue as any) - (1 as any) as any); _++) (v as any)[_] = (o as any)[((((ue as any) * (A as any) as any) + (He as any) as any) + (_ as any) as any) + (1 as any)];
        for (let _: any = 0; (_ as any) < (w as any); _++) (v as any)[(_ as any) + (2 as any)] = ((v as any)[_] as any) + ((y as any)[a++] as any);
      }
      return {
        areContours: u,
        thickness: f,
        outlines: b,
        width: h,
        height: c
      };
    } catch (e: any) {
      return (I as any)(`decompressSignature: ${e}`), null;
    }
  }
}
class Bs extends (Xi as any) {
  [key: string]: any;
  constructor() {
    super(), (super.updateProperties as any)({
      fill: (M as any)._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone(): any {
    const t: any = new (Bs as any)();
    return ((t as any).updateAll as any)(this), t;
  }
}
class Hs extends (Ze as any) {
  [key: string]: any;
  constructor(t: any) {
    super(t), (super.updateProperties as any)({
      stroke: (M as any)._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone(): any {
    const t: any = new (Hs as any)((this as any)._viewParameters);
    return ((t as any).updateAll as any)(this), t;
  }
}
class Tt extends (D as any) {
  declare _drawingOptions: any;
  declare y: any;
  declare x: any;
  declare height: any;
  declare width: any;
  declare _isCopy: any;
  declare _defaultDrawnSignatureOptions: any;
  declare defaultL10nId: any;
  declare _willKeepAspectRatio: any;
  [key: string]: any;
  #t: any = !1;
  #e: any = null;
  #i: any = null;
  #s: any = null;
  static _type: any = "signature";
  static _editorType: any = (F as any).SIGNATURE;
  static _defaultDrawingOptions: any = null;
  constructor(t: any) {
    super({
      ...t,
      mustBeCommitted: !0,
      name: "signatureEditor"
    }), (this as any)._willKeepAspectRatio = !0, this.#i = (t as any).signatureData || null, this.#e = null, (this as any).defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(t: any, e: any): any {
    ((M as any).initialize as any)(t, e), (this as any)._defaultDrawingOptions = new (Bs as any)(), (this as any)._defaultDrawnSignatureOptions = new (Hs as any)((e as any).viewParameters);
  }
  static getDefaultDrawingOptions(t: any): any {
    const e: any = (((this as any)._defaultDrawingOptions as any).clone as any)();
    return ((e as any).updateProperties as any)(t), e;
  }
  static get supportMultipleDrawings(): any {
    return !1;
  }
  static get typesMap(): any {
    return (N as any)(this, "typesMap", new (Map as any)());
  }
  static get isDrawer(): any {
    return !1;
  }
  get telemetryFinalData(): any {
    return {
      type: "signature",
      hasDescription: !!this.#e
    };
  }
  static computeTelemetryFinalData(t: any): any {
    const e: any = ((t as any).get as any)("hasDescription");
    return {
      hasAltText: ((e as any).get as any)(!0) ?? 0,
      hasNoAltText: ((e as any).get as any)(!1) ?? 0
    };
  }
  get isResizable(): any {
    return !0;
  }
  onScaleChanging(): any {
    ((this as any)._drawId as any) !== (null as any) && (super.onScaleChanging as any)();
  }
  render(): any {
    if ((this as any).div) return (this as any).div;
    let t: any, e: any;
    const {
      _isCopy: s
    }: any = this;
    if (s && ((this as any)._isCopy = !1, t = (this as any).x, e = (this as any).y), (super.render as any)(), ((this as any)._drawId as any) === (null as any)) {
      if (this.#i) {
        const {
            lines: i,
            mustSmooth: n,
            areContours: r,
            description: a,
            uuid: o,
            heightInPage: l
          }: any = this.#i,
          {
            rawDims: {
              pageWidth: h,
              pageHeight: c
            },
            rotation: u
          }: any = ((this as any).parent as any).viewport,
          f: any = ((Zt as any).processDrawnLines as any)({
            lines: i,
            pageWidth: h,
            pageHeight: c,
            rotation: u,
            innerMargin: (Tt as any)._INNER_MARGIN,
            mustSmooth: n,
            areContours: r
          });
        ((this as any).addSignature as any)(f, l, a, o);
      } else (((this as any).div as any).setAttribute as any)("data-l10n-args", ((JSON as any).stringify as any)({
        description: ""
      })), ((this as any).div as any).hidden = !0, (((this as any)._uiManager as any).getSignature as any)(this);
    } else (((this as any).div as any).setAttribute as any)("data-l10n-args", ((JSON as any).stringify as any)({
      description: this.#e || ""
    }));
    return s && ((this as any)._isCopy = !0, ((this as any)._moveAfterPaste as any)(t, e)), (this as any).div;
  }
  setUuid(t: any): any {
    this.#s = t, ((this as any).addEditToolbar as any)();
  }
  getUuid(): any {
    return this.#s;
  }
  get description(): any {
    return this.#e;
  }
  set description(t: any) {
    this.#e = t, (this as any).div && ((((this as any).div as any).setAttribute as any)("data-l10n-args", ((JSON as any).stringify as any)({
      description: t
    })), (((super.addEditToolbar as any)() as any).then as any)((e: any): any => {
      e?.updateEditSignatureButton(t);
    }));
  }
  getSignaturePreview(): any {
    const {
        newCurves: t,
        areContours: e,
        thickness: s,
        width: i,
        height: n
      }: any = this.#i,
      r: any = ((Math as any).max as any)(i, n),
      a: any = ((Zt as any).processDrawnLines as any)({
        lines: {
          curves: ((t as any).map as any)((o: any): any => ({
            points: o
          })),
          thickness: s,
          width: i,
          height: n
        },
        pageWidth: r,
        pageHeight: r,
        rotation: 0,
        innerMargin: 0,
        mustSmooth: !1,
        areContours: e
      });
    return {
      areContours: e,
      outline: (a as any).outline
    };
  }
  get toolbarButtons(): any {
    return ((this as any)._uiManager as any).signatureManager ? [["editSignature", ((this as any)._uiManager as any).signatureManager]] : super.toolbarButtons;
  }
  addSignature(t: any, e: any, s: any, i: any): any {
    const {
        x: n,
        y: r
      }: any = this,
      {
        outline: a
      }: any = this.#i = t;
    this.#t = a instanceof Ss, (this as any).description = s;
    let o: any;
    this.#t ? o = ((Tt as any).getDefaultDrawingOptions as any)() : (o = (((Tt as any)._defaultDrawnSignatureOptions as any).clone as any)(), ((o as any).updateProperties as any)({
      "stroke-width": (a as any).thickness
    })), ((this as any)._addOutlines as any)({
      drawOutlines: a,
      drawingOptions: o
    });
    const [, l]: any = (this as any).pageDimensions;
    let h: any = (e as any) / (l as any);
    h = (h as any) >= (1 as any) ? .5 : h, (this as any).width *= (h as any) / ((this as any).height as any), ((this as any).width as any) >= (1 as any) && (h *= (.9 as any) / ((this as any).width as any), (this as any).width = .9), (this as any).height = h, ((this as any).setDims as any)(), (this as any).x = n, (this as any).y = r, ((this as any).center as any)(), ((this as any)._onResized as any)(), ((this as any).onScaleChanging as any)(), ((this as any).rotate as any)(), (((this as any)._uiManager as any).addToAnnotationStorage as any)(this), ((this as any).setUuid as any)(i), ((this as any)._reportTelemetry as any)({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!i,
        hasDescription: !!s
      }
    }), ((this as any).div as any).hidden = !1;
  }
  getFromImage(t: any): any {
    const {
      rawDims: {
        pageWidth: e,
        pageHeight: s
      },
      rotation: i
    }: any = ((this as any).parent as any).viewport;
    return ((Zt as any).process as any)(t, e, s, i, (Tt as any)._INNER_MARGIN);
  }
  getFromText(t: any, e: any): any {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: i
      },
      rotation: n
    }: any = ((this as any).parent as any).viewport;
    return ((Zt as any).extractContoursFromText as any)(t, e, s, i, n, (Tt as any)._INNER_MARGIN);
  }
  getDrawnSignature(t: any): any {
    const {
      rawDims: {
        pageWidth: e,
        pageHeight: s
      },
      rotation: i
    }: any = ((this as any).parent as any).viewport;
    return ((Zt as any).processDrawnLines as any)({
      lines: t,
      pageWidth: e,
      pageHeight: s,
      rotation: i,
      innerMargin: (Tt as any)._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: t,
    thickness: e
  }: any): any {
    t ? (this as any)._drawingOptions = ((Tt as any).getDefaultDrawingOptions as any)() : ((this as any)._drawingOptions = (((Tt as any)._defaultDrawnSignatureOptions as any).clone as any)(), (((this as any)._drawingOptions as any).updateProperties as any)({
      "stroke-width": e
    }));
  }
  serialize(t: any = !1): any {
    if (((this as any).isEmpty as any)()) return null;
    const {
        lines: e,
        points: s
      }: any = ((this as any).serializeDraw as any)(t),
      {
        _drawingOptions: {
          "stroke-width": i
        }
      }: any = this,
      n: any = ((Object as any).assign as any)((super.serialize as any)(t), {
        isSignature: !0,
        areContours: this.#t,
        color: [0, 0, 0],
        thickness: this.#t ? 0 : i
      });
    return ((this as any).addComment as any)(n), t ? ((n as any).paths = {
      lines: e,
      points: s
    }, (n as any).uuid = this.#s, (n as any).isCopy = !0) : (n as any).lines = e, this.#e && ((n as any).accessibilityData = {
      type: "Figure",
      alt: this.#e
    }), n;
  }
  static deserializeDraw(t: any, e: any, s: any, i: any, n: any, r: any): any {
    return (r as any).areContours ? ((Ss as any).deserialize as any)(t, e, s, i, n, r) : ((ke as any).deserialize as any)(t, e, s, i, n, r);
  }
  static async deserialize(t: any, e: any, s: any): Promise<any> {
    const i: any = await (super.deserialize as any)(t, e, s);
    return i.#t = (t as any).areContours, (i as any).description = (t as any).accessibilityData?.alt || "", i.#s = (t as any).uuid, i;
  }
}
class Yr extends (M as any) {
  declare _initialOptions: any;
  declare height: any;
  declare width: any;
  declare _isDraggable: any;
  declare altTextData: any;
  declare defaultL10nId: any;
  [key: string]: any;
  #t: any = null;
  #e: any = null;
  #i: any = null;
  #s: any = null;
  #a: any = null;
  #n: any = "";
  #r: any = null;
  #o: any = !1;
  #h: any = null;
  #l: any = !1;
  #u: any = !1;
  static _type: any = "stamp";
  static _editorType: any = (F as any).STAMP;
  constructor(t: any) {
    super({
      ...t,
      name: "stampEditor"
    }), this.#s = (t as any).bitmapUrl, this.#a = (t as any).bitmapFile, (this as any).defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(t: any, e: any): any {
    ((M as any).initialize as any)(t, e);
  }
  static isHandlingMimeForPasting(t: any): any {
    return ((ps as any).includes as any)(t);
  }
  static paste(t: any, e: any): any {
    ((e as any).pasteEditor as any)({
      mode: (F as any).STAMP
    }, {
      bitmapFile: ((t as any).getAsFile as any)()
    });
  }
  altTextFinish(): any {
    ((this as any)._uiManager as any).useNewAltTextFlow && (((this as any).div as any).hidden = !1), (super.altTextFinish as any)();
  }
  get telemetryFinalData(): any {
    return {
      type: "stamp",
      hasAltText: !!(this as any).altTextData?.altText
    };
  }
  static computeTelemetryFinalData(t: any): any {
    const e: any = ((t as any).get as any)("hasAltText");
    return {
      hasAltText: ((e as any).get as any)(!0) ?? 0,
      hasNoAltText: ((e as any).get as any)(!1) ?? 0
    };
  }
  #d(t: any, e: any = !1): any {
    if (!t) {
      ((this as any).remove as any)();
      return;
    }
    this.#t = (t as any).bitmap, e || (this.#e = (t as any).id, this.#l = (t as any).isSvg), (t as any).file && (this.#n = ((t as any).file as any).name), (this.#p as any)();
  }
  #f(): any {
    if (this.#i = null, (((this as any)._uiManager as any).enableWaiting as any)(!1), !!this.#r) {
      if (((this as any)._uiManager as any).useNewAltTextWhenAddingImage && ((this as any)._uiManager as any).useNewAltTextFlow && this.#t) {
        ((((this as any).addEditToolbar as any)() as any).then as any)((): any => {
          (((this as any)._editToolbar as any).hide as any)(), (((this as any)._uiManager as any).editAltText as any)(this, !0);
        });
        return;
      }
      if (!((this as any)._uiManager as any).useNewAltTextWhenAddingImage && ((this as any)._uiManager as any).useNewAltTextFlow && this.#t) {
        ((this as any)._reportTelemetry as any)({
          action: "pdfjs.image.image_added",
          data: {
            alt_text_modal: !1,
            alt_text_type: "empty"
          }
        });
        try {
          ((this as any).mlGuessAltText as any)();
        } catch {}
      }
      (((this as any).div as any).focus as any)();
    }
  }
  async mlGuessAltText(t: any = null, e: any = !0): Promise<any> {
    if (((this as any).hasAltTextData as any)()) return null;
    const {
      mlManager: s
    }: any = (this as any)._uiManager;
    if (!s) throw new (Error as any)("No ML.");
    if (!(await ((s as any).isEnabledFor as any)("altText"))) throw new (Error as any)("ML isn't enabled for alt text.");
    const {
        data: i,
        width: n,
        height: r
      }: any = t || (((this as any).copyCanvas as any)(null, null, !0) as any).imageData,
      a: any = await ((s as any).guess as any)({
        name: "altText",
        request: {
          data: i,
          width: n,
          height: r,
          channels: ((i as any).length as any) / ((n as any) * (r as any) as any)
        }
      });
    if (!a) throw new (Error as any)("No response from the AI service.");
    if ((a as any).error) throw new (Error as any)("Error from the AI service.");
    if ((a as any).cancel) return null;
    if (!(a as any).output) throw new (Error as any)("No valid response from the AI service.");
    const o: any = (a as any).output;
    return await ((this as any).setGuessedAltText as any)(o), e && !((this as any).hasAltTextData as any)() && ((this as any).altTextData = {
      alt: o,
      decorative: !1
    }), o;
  }
  #m(): any {
    if (this.#e) {
      (((this as any)._uiManager as any).enableWaiting as any)(!0), ((((((((this as any)._uiManager as any).imageManager as any).getFromId as any)(this.#e) as any).then as any)((s: any): any => (this.#d as any)(s, !0)) as any).finally as any)((): any => (this.#f as any)());
      return;
    }
    if (this.#s) {
      const s: any = this.#s;
      this.#s = null, (((this as any)._uiManager as any).enableWaiting as any)(!0), this.#i = ((((((((this as any)._uiManager as any).imageManager as any).getFromUrl as any)(s) as any).then as any)((i: any): any => (this.#d as any)(i)) as any).finally as any)((): any => (this.#f as any)());
      return;
    }
    if (this.#a) {
      const s: any = this.#a;
      this.#a = null, (((this as any)._uiManager as any).enableWaiting as any)(!0), this.#i = ((((((((this as any)._uiManager as any).imageManager as any).getFromFile as any)(s) as any).then as any)((i: any): any => (this.#d as any)(i)) as any).finally as any)((): any => (this.#f as any)());
      return;
    }
    const t: any = ((document as any).createElement as any)("input");
    (t as any).type = "file", (t as any).accept = ((ps as any).join as any)(",");
    const e: any = ((this as any)._uiManager as any)._signal;
    this.#i = ((new (Promise as any)((s: any): any => {
      ((t as any).addEventListener as any)("change", async (): Promise<any> => {
        if (!(t as any).files || (((t as any).files as any).length as any) === (0 as any)) ((this as any).remove as any)();else {
          (((this as any)._uiManager as any).enableWaiting as any)(!0);
          const i: any = await ((((this as any)._uiManager as any).imageManager as any).getFromFile as any)(((t as any).files as any)[0]);
          ((this as any)._reportTelemetry as any)({
            action: "pdfjs.image.image_selected",
            data: {
              alt_text_modal: ((this as any)._uiManager as any).useNewAltTextFlow
            }
          }), (this.#d as any)(i);
        }
        (s as any)();
      }, {
        signal: e
      }), ((t as any).addEventListener as any)("cancel", (): any => {
        ((this as any).remove as any)(), (s as any)();
      }, {
        signal: e
      });
    }) as any).finally as any)((): any => (this.#f as any)()), ((t as any).click as any)();
  }
  remove(): any {
    this.#e && (this.#t = null, ((((this as any)._uiManager as any).imageManager as any).deleteId as any)(this.#e), this.#r?.remove(), this.#r = null, this.#h && ((clearTimeout as any)(this.#h), this.#h = null)), (super.remove as any)();
  }
  rebuild(): any {
    if (!(this as any).parent) {
      this.#e && (this.#m as any)();
      return;
    }
    (super.rebuild as any)(), ((this as any).div as any) !== (null as any) && (this.#e && (this.#r as any) === (null as any) && (this.#m as any)(), (this as any).isAttachedToDOM || (((this as any).parent as any).add as any)(this));
  }
  onceAdded(t: any): any {
    (this as any)._isDraggable = !0, t && (((this as any).div as any).focus as any)();
  }
  isEmpty(): any {
    return !(this.#i || this.#t || this.#s || this.#a || this.#e || this.#o);
  }
  get toolbarButtons(): any {
    return [["altText", ((this as any).createAltText as any)()]];
  }
  get isResizable(): any {
    return !0;
  }
  render(): any {
    if ((this as any).div) return (this as any).div;
    let t: any, e: any;
    return (this as any)._isCopy && (t = (this as any).x, e = (this as any).y), (super.render as any)(), ((this as any).div as any).hidden = !0, ((this as any).createAltText as any)(), this.#o || (this.#t ? (this.#p as any)() : (this.#m as any)()), (this as any)._isCopy && ((this as any)._moveAfterPaste as any)(t, e), (((this as any)._uiManager as any).addShouldRescale as any)(this), (this as any).div;
  }
  setCanvas(t: any, e: any): any {
    const {
      id: s,
      bitmap: i
    }: any = ((((this as any)._uiManager as any).imageManager as any).getFromCanvas as any)(t, e);
    ((e as any).remove as any)(), s && ((((this as any)._uiManager as any).imageManager as any).isValidId as any)(s) && (this.#e = s, i && (this.#t = i), this.#o = !1, (this.#p as any)());
  }
  _onResized(): any {
    ((this as any).onScaleChanging as any)();
  }
  onScaleChanging(): any {
    if (!(this as any).parent) return;
    (this.#h as any) !== (null as any) && (clearTimeout as any)(this.#h);
    const t: number = 200;
    this.#h = (setTimeout as any)((): any => {
      this.#h = null, (this.#g as any)();
    }, t);
  }
  #p(): any {
    const {
      div: t
    }: any = this;
    let {
      width: e,
      height: s
    }: any = this.#t;
    const [i, n]: any = (this as any).pageDimensions,
      r: number = .75;
    if ((this as any).width) e = ((this as any).width as any) * (i as any), s = ((this as any).height as any) * (n as any);else if ((e as any) > ((r as any) * (i as any) as any) || (s as any) > ((r as any) * (n as any) as any)) {
      const o: any = ((Math as any).min as any)(((r as any) * (i as any) as any) / (e as any), ((r as any) * (n as any) as any) / (s as any));
      e *= o, s *= o;
    }
    (((this as any)._uiManager as any).enableWaiting as any)(!1);
    const a: any = this.#r = ((document as any).createElement as any)("canvas");
    ((a as any).setAttribute as any)("role", "img"), ((this as any).addContainer as any)(a), (this as any).width = (e as any) / (i as any), (this as any).height = (s as any) / (n as any), ((this as any).setDims as any)(), (this as any)._initialOptions?.isCentered ? ((this as any).center as any)() : ((this as any).fixAndSetPosition as any)(), (this as any)._initialOptions = null, (!((this as any)._uiManager as any).useNewAltTextWhenAddingImage || !((this as any)._uiManager as any).useNewAltTextFlow || (this as any).annotationElementId) && ((t as any).hidden = !1), (this.#g as any)(), this.#u || ((((this as any).parent as any).addUndoableEditor as any)(this), this.#u = !0), ((this as any)._reportTelemetry as any)({
      action: "inserted_image"
    }), this.#n && (((this as any).div as any).setAttribute as any)("aria-description", this.#n), (this as any).annotationElementId || (((this as any)._uiManager as any).a11yAlert as any)("pdfjs-editor-stamp-added-alert");
  }
  copyCanvas(t: any, e: any, s: any = !1): any {
    t || (t = 224);
    const {
        width: i,
        height: n
      }: any = this.#t,
      r: any = new (kt as any)();
    let a: any = this.#t,
      o: any = i,
      l: any = n,
      h: any = null;
    if (e) {
      if ((i as any) > (e as any) || (n as any) > (e as any)) {
        const _: any = ((Math as any).min as any)((e as any) / (i as any), (e as any) / (n as any));
        o = ((Math as any).floor as any)((i as any) * (_ as any)), l = ((Math as any).floor as any)((n as any) * (_ as any));
      }
      h = ((document as any).createElement as any)("canvas");
      const u: any = (h as any).width = ((Math as any).ceil as any)((o as any) * ((r as any).sx as any)),
        f: any = (h as any).height = ((Math as any).ceil as any)((l as any) * ((r as any).sy as any));
      this.#l || (a = (this.#c as any)(u, f));
      const g: any = ((h as any).getContext as any)("2d");
      (g as any).filter = ((this as any)._uiManager as any).hcmFilter;
      let p: any = "white",
        b: any = "#cfcfd8";
      (((this as any)._uiManager as any).hcmFilter as any) !== ("none" as any) ? b = "black" : (gn as any).isDarkMode && (p = "#8f8f9d", b = "#42414d");
      const m: number = 15,
        y: any = (m as any) * ((r as any).sx as any),
        A: any = (m as any) * ((r as any).sy as any),
        w: any = new (OffscreenCanvas as any)((y as any) * (2 as any), (A as any) * (2 as any)),
        v: any = ((w as any).getContext as any)("2d");
      (v as any).fillStyle = p, ((v as any).fillRect as any)(0, 0, (y as any) * (2 as any), (A as any) * (2 as any)), (v as any).fillStyle = b, ((v as any).fillRect as any)(0, 0, y, A), ((v as any).fillRect as any)(y, A, y, A), (g as any).fillStyle = ((g as any).createPattern as any)(w, "repeat"), ((g as any).fillRect as any)(0, 0, u, f), ((g as any).drawImage as any)(a, 0, 0, (a as any).width, (a as any).height, 0, 0, u, f);
    }
    let c: any = null;
    if (s) {
      let u: any, f: any;
      if ((r as any).symmetric && ((a as any).width as any) < (t as any) && ((a as any).height as any) < (t as any)) u = (a as any).width, f = (a as any).height;else if (a = this.#t, (i as any) > (t as any) || (n as any) > (t as any)) {
        const b: any = ((Math as any).min as any)((t as any) / (i as any), (t as any) / (n as any));
        u = ((Math as any).floor as any)((i as any) * (b as any)), f = ((Math as any).floor as any)((n as any) * (b as any)), this.#l || (a = (this.#c as any)(u, f));
      }
      const p: any = ((new (OffscreenCanvas as any)(u, f) as any).getContext as any)("2d", {
        willReadFrequently: !0
      });
      ((p as any).drawImage as any)(a, 0, 0, (a as any).width, (a as any).height, 0, 0, u, f), c = {
        width: u,
        height: f,
        data: (((p as any).getImageData as any)(0, 0, u, f) as any).data
      };
    }
    return {
      canvas: h,
      width: o,
      height: l,
      imageData: c
    };
  }
  #c(t: any, e: any): any {
    const {
      width: s,
      height: i
    }: any = this.#t;
    let n: any = s,
      r: any = i,
      a: any = this.#t;
    for (; (n as any) > ((2 as any) * (t as any) as any) || (r as any) > ((2 as any) * (e as any) as any);) {
      const o: any = n,
        l: any = r;
      (n as any) > ((2 as any) * (t as any) as any) && (n = (n as any) >= (16384 as any) ? (((Math as any).floor as any)((n as any) / (2 as any)) as any) - (1 as any) : ((Math as any).ceil as any)((n as any) / (2 as any))), (r as any) > ((2 as any) * (e as any) as any) && (r = (r as any) >= (16384 as any) ? (((Math as any).floor as any)((r as any) / (2 as any)) as any) - (1 as any) : ((Math as any).ceil as any)((r as any) / (2 as any)));
      const h: any = new (OffscreenCanvas as any)(n, r);
      ((((h as any).getContext as any)("2d") as any).drawImage as any)(a, 0, 0, o, l, 0, 0, n, r), a = ((h as any).transferToImageBitmap as any)();
    }
    return a;
  }
  #g(): any {
    const [t, e]: any = (this as any).parentDimensions,
      {
        width: s,
        height: i
      }: any = this,
      n: any = new (kt as any)(),
      r: any = ((Math as any).ceil as any)(((s as any) * (t as any) as any) * ((n as any).sx as any)),
      a: any = ((Math as any).ceil as any)(((i as any) * (e as any) as any) * ((n as any).sy as any)),
      o: any = this.#r;
    if (!o || ((o as any).width as any) === (r as any) && ((o as any).height as any) === (a as any)) return;
    (o as any).width = r, (o as any).height = a;
    const l: any = this.#l ? this.#t : (this.#c as any)(r, a),
      h: any = ((o as any).getContext as any)("2d");
    (h as any).filter = ((this as any)._uiManager as any).hcmFilter, ((h as any).drawImage as any)(l, 0, 0, (l as any).width, (l as any).height, 0, 0, r, a);
  }
  #b(t: any): any {
    if (t) {
      if (this.#l) {
        const i: any = ((((this as any)._uiManager as any).imageManager as any).getSvgUrl as any)(this.#e);
        if (i) return i;
      }
      const e: any = ((document as any).createElement as any)("canvas");
      return {
        width: (e as any).width,
        height: (e as any).height
      } = this.#t, ((((e as any).getContext as any)("2d") as any).drawImage as any)(this.#t, 0, 0), ((e as any).toDataURL as any)();
    }
    if (this.#l) {
      const [e, s]: any = (this as any).pageDimensions,
        i: any = ((Math as any).round as any)((((this as any).width as any) * (e as any) as any) * ((ae as any).PDF_TO_CSS_UNITS as any)),
        n: any = ((Math as any).round as any)((((this as any).height as any) * (s as any) as any) * ((ae as any).PDF_TO_CSS_UNITS as any)),
        r: any = new (OffscreenCanvas as any)(i, n);
      return ((((r as any).getContext as any)("2d") as any).drawImage as any)(this.#t, 0, 0, (this.#t as any).width, (this.#t as any).height, 0, 0, i, n), ((r as any).transferToImageBitmap as any)();
    }
    return (structuredClone as any)(this.#t);
  }
  static async deserialize(t: any, e: any, s: any): Promise<any> {
    let i: any = null,
      n: any = !1;
    if (t instanceof Vi) {
      const {
        data: {
          rect: p,
          rotation: b,
          id: m,
          structParent: y,
          popupRef: A,
          richText: w,
          contentsObj: v,
          creationDate: _,
          modificationDate: S
        },
        container: E,
        parent: {
          page: {
            pageNumber: C
          }
        },
        canvas: k
      }: any = t;
      let T: any, U: any;
      k ? (delete (t as any).canvas, {
        id: T,
        bitmap: U
      } = (((s as any).imageManager as any).getFromCanvas as any)((E as any).id, k), ((k as any).remove as any)()) : (n = !0, (t as any)._hasNoCanvas = !0);
      const $: any = (await (((e as any)._structTree as any).getAriaAttributes as any)(`${Es}${m}`))?.get("aria-label") || "";
      i = t = {
        annotationType: (F as any).STAMP,
        bitmapId: T,
        bitmap: U,
        pageIndex: (C as any) - (1 as any),
        rect: ((p as any).slice as any)(0),
        rotation: b,
        annotationElementId: m,
        id: m,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: $
        },
        isSvg: !1,
        structParent: y,
        popupRef: A,
        richText: w,
        comment: v?.str || null,
        creationDate: _,
        modificationDate: S
      };
    }
    const r: any = await (super.deserialize as any)(t, e, s),
      {
        rect: a,
        bitmap: o,
        bitmapUrl: l,
        bitmapId: h,
        isSvg: c,
        accessibilityData: u
      }: any = t;
    n ? (((s as any).addMissingCanvas as any)((t as any).id, r), r.#o = !0) : h && (((s as any).imageManager as any).isValidId as any)(h) ? (r.#e = h, o && (r.#t = o)) : r.#s = l, r.#l = c;
    const [f, g]: any = (r as any).pageDimensions;
    return (r as any).width = (((a as any)[2] as any) - ((a as any)[0] as any) as any) / (f as any), (r as any).height = (((a as any)[3] as any) - ((a as any)[1] as any) as any) / (g as any), u && ((r as any).altTextData = u), (r as any)._initialData = i, (t as any).comment && ((r as any).setCommentData as any)(t), r.#u = !!i, r;
  }
  serialize(t: any = !1, e: any = null): any {
    if (((this as any).isEmpty as any)()) return null;
    if ((this as any).deleted) return ((this as any).serializeDeleted as any)();
    const s: any = ((Object as any).assign as any)((super.serialize as any)(t), {
      bitmapId: this.#e,
      isSvg: this.#l
    });
    if (((this as any).addComment as any)(s), t) return (s as any).bitmapUrl = (this.#b as any)(!0), (s as any).accessibilityData = ((this as any).serializeAltText as any)(!0), (s as any).isCopy = !0, s;
    const {
      decorative: i,
      altText: n
    }: any = ((this as any).serializeAltText as any)(!1);
    if (!i && n && ((s as any).accessibilityData = {
      type: "Figure",
      alt: n
    }), (this as any).annotationElementId) {
      const a: any = (this.#A as any)(s);
      return (a as any).isSame ? null : ((a as any).isSameAltText ? delete (s as any).accessibilityData : ((s as any).accessibilityData as any).structParent = ((this as any)._initialData as any).structParent ?? -1, (s as any).id = (this as any).annotationElementId, delete (s as any).bitmapId, s);
    }
    if ((e as any) === (null as any)) return s;
    (e as any).stamps ||= new (Map as any)();
    const r: any = this.#l ? ((((s as any).rect as any)[2] as any) - (((s as any).rect as any)[0] as any) as any) * ((((s as any).rect as any)[3] as any) - (((s as any).rect as any)[1] as any) as any) : null;
    if (!(((e as any).stamps as any).has as any)(this.#e)) (((e as any).stamps as any).set as any)(this.#e, {
      area: r,
      serialized: s
    }), (s as any).bitmap = (this.#b as any)(!1);else if (this.#l) {
      const a: any = (((e as any).stamps as any).get as any)(this.#e);
      (r as any) > ((a as any).area as any) && ((a as any).area = r, ((((a as any).serialized as any).bitmap as any).close as any)(), ((a as any).serialized as any).bitmap = (this.#b as any)(!1));
    }
    return s;
  }
  #A(t: any): any {
    const {
        pageIndex: e,
        accessibilityData: {
          altText: s
        }
      }: any = (this as any)._initialData,
      i: any = ((t as any).pageIndex as any) === (e as any),
      n: any = (((t as any).accessibilityData?.alt || "") as any) === (s as any);
    return {
      isSame: !(this as any).hasEditedComment && !(this as any)._hasBeenMoved && !(this as any)._hasBeenResized && i && n,
      isSameAltText: n
    };
  }
  renderAnnotationElement(t: any): any {
    return (this as any).deleted ? (((t as any).hide as any)(), null) : (((t as any).updateEdited as any)({
      rect: ((this as any).getPDFRect as any)(),
      popup: (this as any).comment
    }), null);
  }
}
class Dt {
  declare _structTree: any;
  declare drawLayer: any;
  declare viewport: any;
  declare div: any;
  declare pageIndex: any;
  [key: string]: any;
  #t: any;
  #e: any = !1;
  #i: any = null;
  #s: any = null;
  #a: any = null;
  #n: any = new (Map as any)();
  #r: any = !1;
  #o: any = !1;
  #h: any = !1;
  #l: any = null;
  #u: any = null;
  #d: any = null;
  #f: any = null;
  #m: any = null;
  #p: any = -1;
  #c: any;
  static _initialized: any = !1;
  static #g: any = new (Map as any)((([it, Os, Yr, J, Tt] as any).map as any)((t: any): any => [(t as any)._editorType, t]));
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: n,
    annotationLayer: r,
    drawLayer: a,
    textLayer: o,
    viewport: l,
    l10n: h
  }: any) {
    const c: any = [...((Dt.#g as any).values as any)()];
    if (!(Dt as any)._initialized) {
      (Dt as any)._initialized = !0;
      for (const u of c) ((u as any).initialize as any)(h, t);
    }
    ((t as any).registerEditorTypes as any)(c), this.#c = t, (this as any).pageIndex = e, (this as any).div = s, this.#t = n, this.#i = r, (this as any).viewport = l, this.#d = o, (this as any).drawLayer = a, (this as any)._structTree = i, ((this.#c as any).addLayer as any)(this);
  }
  get isEmpty(): any {
    return ((this.#n as any).size as any) === (0 as any);
  }
  get isInvisible(): any {
    return (this as any).isEmpty && (((this.#c as any).getMode as any)() as any) === ((F as any).NONE as any);
  }
  updateToolbar(t: any): any {
    ((this.#c as any).updateToolbar as any)(t);
  }
  updateMode(t: any = ((this.#c as any).getMode as any)()): any {
    switch ((this.#w as any)(), t) {
      case (F as any).NONE:
        ((((this as any).div as any).classList as any).toggle as any)("nonEditing", !0), ((this as any).disableTextSelection as any)(), ((this as any).togglePointerEvents as any)(!1), ((this as any).toggleAnnotationLayerPointerEvents as any)(!0), ((this as any).disableClick as any)();
        return;
      case (F as any).INK:
        ((this as any).disableTextSelection as any)(), ((this as any).togglePointerEvents as any)(!0), ((this as any).enableClick as any)();
        break;
      case (F as any).HIGHLIGHT:
        ((this as any).enableTextSelection as any)(), ((this as any).togglePointerEvents as any)(!1), ((this as any).disableClick as any)();
        break;
      default:
        ((this as any).disableTextSelection as any)(), ((this as any).togglePointerEvents as any)(!0), ((this as any).enableClick as any)();
    }
    ((this as any).toggleAnnotationLayerPointerEvents as any)(!1);
    const {
      classList: e
    }: any = (this as any).div;
    if (((e as any).toggle as any)("nonEditing", !1), (t as any) === ((F as any).POPUP as any)) ((e as any).toggle as any)("commentEditing", !0);else {
      ((e as any).toggle as any)("commentEditing", !1);
      for (const s of ((Dt.#g as any).values as any)()) ((e as any).toggle as any)(`${(s as any)._type}Editing`, (t as any) === ((s as any)._editorType as any));
    }
    ((this as any).div as any).hidden = !1;
  }
  hasTextLayer(t: any): any {
    return (t as any) === (this.#d?.div as any);
  }
  setEditingState(t: any): any {
    ((this.#c as any).setEditingState as any)(t);
  }
  addCommands(t: any): any {
    ((this.#c as any).addCommands as any)(t);
  }
  cleanUndoStack(t: any): any {
    ((this.#c as any).cleanUndoStack as any)(t);
  }
  toggleDrawing(t: any = !1): any {
    ((((this as any).div as any).classList as any).toggle as any)("drawing", !t);
  }
  togglePointerEvents(t: any = !1): any {
    ((((this as any).div as any).classList as any).toggle as any)("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t: any = !1): any {
    this.#i?.div.classList.toggle("disabled", !t);
  }
  get #b(): any {
    return ((this.#n as any).size as any) !== (0 as any) ? ((this.#n as any).values as any)() : ((this.#c as any).getEditors as any)((this as any).pageIndex);
  }
  async enable(): Promise<any> {
    this.#h = !0, ((this as any).div as any).tabIndex = 0, ((this as any).togglePointerEvents as any)(!0), ((((this as any).div as any).classList as any).toggle as any)("nonEditing", !1), this.#m?.abort(), this.#m = null;
    const t: any = new (Set as any)();
    for (const s of this.#b) ((s as any).enableEditing as any)(), ((s as any).show as any)(!0), (s as any).annotationElementId && (((this.#c as any).removeChangedExistingAnnotation as any)(s), ((t as any).add as any)((s as any).annotationElementId));
    const e: any = this.#i;
    if (e) for (const s of ((e as any).getEditableAnnotations as any)()) {
      if (((s as any).hide as any)(), ((this.#c as any).isDeletedAnnotationElement as any)(((s as any).data as any).id) || ((t as any).has as any)(((s as any).data as any).id)) continue;
      const i: any = await ((this as any).deserialize as any)(s);
      i && (((this as any).addOrRebuild as any)(i), ((i as any).enableEditing as any)());
    }
    this.#h = !1, (((this.#c as any)._eventBus as any).dispatch as any)("editorsrendered", {
      source: this,
      pageNumber: ((this as any).pageIndex as any) + (1 as any)
    });
  }
  disable(): any {
    if (this.#o = !0, ((this as any).div as any).tabIndex = -1, ((this as any).togglePointerEvents as any)(!1), ((((this as any).div as any).classList as any).toggle as any)("nonEditing", !0), this.#d && !this.#m) {
      this.#m = new (AbortController as any)();
      const s: any = ((this.#c as any).combinedSignal as any)(this.#m);
      (((this.#d as any).div as any).addEventListener as any)("pointerdown", (i: any): any => {
        const {
            clientX: r,
            clientY: a,
            timeStamp: o
          }: any = i,
          l: any = this.#p;
        if (((o as any) - (l as any) as any) > (500 as any)) {
          this.#p = o;
          return;
        }
        this.#p = -1;
        const {
          classList: h
        }: any = (this as any).div;
        ((h as any).toggle as any)("getElements", !0);
        const c: any = ((document as any).elementsFromPoint as any)(r, a);
        if (((h as any).toggle as any)("getElements", !1), !(((this as any).div as any).contains as any)((c as any)[0])) return;
        let u: any;
        const f: any = new (RegExp as any)(`^${ye}[0-9]+$`);
        for (const p of c) if (((f as any).test as any)((p as any).id)) {
          u = (p as any).id;
          break;
        }
        if (!u) return;
        const g: any = ((this.#n as any).get as any)(u);
        (g?.annotationElementId as any) === (null as any) && (((i as any).stopPropagation as any)(), ((i as any).preventDefault as any)(), ((g as any).dblclick as any)(i));
      }, {
        signal: s,
        capture: !0
      });
    }
    const t: any = this.#i;
    if (t) {
      const s: any = new (Map as any)(),
        i: any = new (Map as any)();
      for (const r of this.#b) {
        if (((r as any).disableEditing as any)(), !(r as any).annotationElementId) {
          ((r as any).updateFakeAnnotationElement as any)(t);
          continue;
        }
        if ((((r as any).serialize as any)() as any) !== (null as any)) {
          ((s as any).set as any)((r as any).annotationElementId, r);
          continue;
        } else ((i as any).set as any)((r as any).annotationElementId, r);
        ((this as any).getEditableAnnotation as any)((r as any).annotationElementId)?.show(), ((r as any).remove as any)();
      }
      const n: any = ((t as any).getEditableAnnotations as any)();
      for (const r of n) {
        const {
          id: a
        }: any = (r as any).data;
        if (((this.#c as any).isDeletedAnnotationElement as any)(a)) {
          ((r as any).updateEdited as any)({
            deleted: !0
          });
          continue;
        }
        let o: any = ((i as any).get as any)(a);
        if (o) {
          ((o as any).resetAnnotationElement as any)(r), ((o as any).show as any)(!1), ((r as any).show as any)();
          continue;
        }
        o = ((s as any).get as any)(a), o && (((this.#c as any).addChangedExistingAnnotation as any)(o), ((o as any).renderAnnotationElement as any)(r) && ((o as any).show as any)(!1)), ((r as any).show as any)();
      }
    }
    (this.#w as any)(), (this as any).isEmpty && (((this as any).div as any).hidden = !0);
    const {
      classList: e
    }: any = (this as any).div;
    for (const s of ((Dt.#g as any).values as any)()) ((e as any).remove as any)(`${(s as any)._type}Editing`);
    ((this as any).disableTextSelection as any)(), ((this as any).toggleAnnotationLayerPointerEvents as any)(!0), this.#o = !1;
  }
  getEditableAnnotation(t: any): any {
    return this.#i?.getEditableAnnotation(t) || null;
  }
  setActiveEditor(t: any): any {
    (((this.#c as any).getActive as any)() as any) !== (t as any) && ((this.#c as any).setActiveEditor as any)(t);
  }
  enableTextSelection(): any {
    if (((this as any).div as any).tabIndex = -1, this.#d?.div && !this.#f) {
      this.#f = new (AbortController as any)();
      const t: any = ((this.#c as any).combinedSignal as any)(this.#f);
      (((this.#d as any).div as any).addEventListener as any)("pointerdown", ((this.#A as any).bind as any)(this), {
        signal: t
      }), ((((this.#d as any).div as any).classList as any).add as any)("highlighting");
    }
  }
  disableTextSelection(): any {
    ((this as any).div as any).tabIndex = 0, this.#d?.div && this.#f && (((this.#f as any).abort as any)(), this.#f = null, ((((this.#d as any).div as any).classList as any).remove as any)("highlighting"));
  }
  #A(t: any): any {
    ((this.#c as any).unselectAll as any)();
    const {
      target: e
    }: any = t;
    if ((e as any) === ((this.#d as any).div as any) || ((((e as any).getAttribute as any)("role") as any) === ("img" as any) || (((e as any).classList as any).contains as any)("endOfContent")) && (((this.#d as any).div as any).contains as any)(e)) {
      const {
        isMac: s
      }: any = (ot as any).platform;
      if (((t as any).button as any) !== (0 as any) || (t as any).ctrlKey && s) return;
      ((this.#c as any).showAllEditors as any)("highlight", !0, !0), ((((this.#d as any).div as any).classList as any).add as any)("free"), ((this as any).toggleDrawing as any)(), ((J as any).startHighlighting as any)(this, ((this.#c as any).direction as any) === ("ltr" as any), {
        target: (this.#d as any).div,
        x: (t as any).x,
        y: (t as any).y
      }), (((this.#d as any).div as any).addEventListener as any)("pointerup", (): any => {
        ((((this.#d as any).div as any).classList as any).remove as any)("free"), ((this as any).toggleDrawing as any)(!0);
      }, {
        once: !0,
        signal: (this.#c as any)._signal
      }), ((t as any).preventDefault as any)();
    }
  }
  enableClick(): any {
    if (this.#s) return;
    this.#s = new (AbortController as any)();
    const t: any = ((this.#c as any).combinedSignal as any)(this.#s);
    (((this as any).div as any).addEventListener as any)("pointerdown", (((this as any).pointerdown as any).bind as any)(this), {
      signal: t
    });
    const e: any = (((this as any).pointerup as any).bind as any)(this);
    (((this as any).div as any).addEventListener as any)("pointerup", e, {
      signal: t
    }), (((this as any).div as any).addEventListener as any)("pointercancel", e, {
      signal: t
    });
  }
  disableClick(): any {
    this.#s?.abort(), this.#s = null;
  }
  attach(t: any): any {
    ((this.#n as any).set as any)((t as any).id, t);
    const {
      annotationElementId: e
    }: any = t;
    e && ((this.#c as any).isDeletedAnnotationElement as any)(e) && ((this.#c as any).removeDeletedAnnotationElement as any)(t);
  }
  detach(t: any): any {
    ((this.#n as any).delete as any)((t as any).id), this.#t?.removePointerInTextLayer((t as any).contentDiv), !this.#o && (t as any).annotationElementId && ((this.#c as any).addDeletedAnnotationElement as any)(t);
  }
  remove(t: any): any {
    ((this as any).detach as any)(t), ((this.#c as any).removeEditor as any)(t), (((t as any).div as any).remove as any)(), (t as any).isAttachedToDOM = !1;
  }
  changeParent(t: any): any {
    ((t as any).parent as any) !== (this as any) && ((t as any).parent && (t as any).annotationElementId && (((this.#c as any).addDeletedAnnotationElement as any)((t as any).annotationElementId), ((M as any).deleteAnnotationElement as any)(t), (t as any).annotationElementId = null), ((this as any).attach as any)(t), (t as any).parent?.detach(t), ((t as any).setParent as any)(this), (t as any).div && (t as any).isAttachedToDOM && ((((t as any).div as any).remove as any)(), (((this as any).div as any).append as any)((t as any).div)));
  }
  add(t: any): any {
    if (!(((t as any).parent as any) === (this as any) && (t as any).isAttachedToDOM)) {
      if (((this as any).changeParent as any)(t), ((this.#c as any).addEditor as any)(t), ((this as any).attach as any)(t), !(t as any).isAttachedToDOM) {
        const e: any = ((t as any).render as any)();
        (((this as any).div as any).append as any)(e), (t as any).isAttachedToDOM = !0;
      }
      ((t as any).fixAndSetPosition as any)(), ((t as any).onceAdded as any)(!this.#h), ((this.#c as any).addToAnnotationStorage as any)(t), ((t as any)._reportTelemetry as any)((t as any).telemetryInitialData);
    }
  }
  moveEditorInDOM(t: any): any {
    if (!(t as any).isAttachedToDOM) return;
    const {
      activeElement: e
    }: any = document;
    (((t as any).div as any).contains as any)(e) && !this.#a && ((t as any)._focusEventsAllowed = !1, this.#a = (setTimeout as any)((): any => {
      this.#a = null, (((t as any).div as any).contains as any)((document as any).activeElement) ? (t as any)._focusEventsAllowed = !0 : ((((t as any).div as any).addEventListener as any)("focusin", (): any => {
        (t as any)._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: (this.#c as any)._signal
      }), ((e as any).focus as any)());
    }, 0)), (t as any)._structTreeParentId = this.#t?.moveElementInDOM((this as any).div, (t as any).div, (t as any).contentDiv, !0);
  }
  addOrRebuild(t: any): any {
    ((t as any).needsToBeRebuilt as any)() ? ((t as any).parent ||= this, ((t as any).rebuild as any)(), ((t as any).show as any)()) : ((this as any).add as any)(t);
  }
  addUndoableEditor(t: any): any {
    const e: any = (): any => (((t as any)._uiManager as any).rebuild as any)(t),
      s: any = (): any => {
        ((t as any).remove as any)();
      };
    ((this as any).addCommands as any)({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getEditorByUID(t: any): any {
    for (const e of ((this.#n as any).values as any)()) if (((e as any).uid as any) === (t as any)) return e;
    return null;
  }
  getNextId(): any {
    return ((this.#c as any).getId as any)();
  }
  get #y(): any {
    return ((Dt.#g as any).get as any)(((this.#c as any).getMode as any)());
  }
  combinedSignal(t: any): any {
    return ((this.#c as any).combinedSignal as any)(t);
  }
  #C(t: any): any {
    const e: any = this.#y;
    return e ? new (((e as any).prototype as any).constructor as any)(t) : null;
  }
  canCreateNewEmptyEditor(): any {
    return this.#y?.canCreateNewEmptyEditor();
  }
  async pasteEditor(t: any, e: any): Promise<any> {
    ((this as any).updateToolbar as any)(t), await ((this.#c as any).updateMode as any)((t as any).mode);
    const {
        offsetX: s,
        offsetY: i
      }: any = (this.#S as any)(),
      n: any = ((this as any).getNextId as any)(),
      r: any = (this.#C as any)({
        parent: this,
        id: n,
        x: s,
        y: i,
        uiManager: this.#c,
        isCentered: !0,
        ...e
      });
    r && ((this as any).add as any)(r);
  }
  async deserialize(t: any): Promise<any> {
    return (await ((Dt.#g as any).get as any)((t as any).annotationType ?? (t as any).annotationEditorType)?.deserialize(t, this, this.#c)) || null;
  }
  createAndAddNewEditor(t: any, e: any, s: any = {}): any {
    const i: any = ((this as any).getNextId as any)(),
      n: any = (this.#C as any)({
        parent: this,
        id: i,
        x: (t as any).offsetX,
        y: (t as any).offsetY,
        uiManager: this.#c,
        isCentered: e,
        ...s
      });
    return n && ((this as any).add as any)(n), n;
  }
  get boundingClientRect(): any {
    return (((this as any).div as any).getBoundingClientRect as any)();
  }
  #S(): any {
    const {
        x: t,
        y: e,
        width: s,
        height: i
      }: any = (this as any).boundingClientRect,
      n: any = ((Math as any).max as any)(0, t),
      r: any = ((Math as any).max as any)(0, e),
      a: any = ((Math as any).min as any)((window as any).innerWidth, (t as any) + (s as any)),
      o: any = ((Math as any).min as any)((window as any).innerHeight, (e as any) + (i as any)),
      l: any = (((n as any) + (a as any) as any) / (2 as any) as any) - (t as any),
      h: any = (((r as any) + (o as any) as any) / (2 as any) as any) - (e as any),
      [c, u]: any = ((((this as any).viewport as any).rotation as any) % (180 as any) as any) === (0 as any) ? [l, h] : [h, l];
    return {
      offsetX: c,
      offsetY: u
    };
  }
  addNewEditor(t: any = {}): any {
    ((this as any).createAndAddNewEditor as any)((this.#S as any)(), !0, t);
  }
  setSelected(t: any): any {
    ((this.#c as any).setSelected as any)(t);
  }
  toggleSelected(t: any): any {
    ((this.#c as any).toggleSelected as any)(t);
  }
  unselect(t: any): any {
    ((this.#c as any).unselect as any)(t);
  }
  pointerup(t: any): any {
    const {
      isMac: e
    }: any = (ot as any).platform;
    if (((t as any).button as any) !== (0 as any) || (t as any).ctrlKey && e || ((t as any).target as any) !== ((this as any).div as any) || !this.#r || (this.#r = !1, this.#y?.isDrawer && (this.#y as any).supportMultipleDrawings)) return;
    if (!this.#e) {
      this.#e = !0;
      return;
    }
    const s: any = ((this.#c as any).getMode as any)();
    if ((s as any) === ((F as any).STAMP as any) || (s as any) === ((F as any).SIGNATURE as any)) {
      ((this.#c as any).unselectAll as any)();
      return;
    }
    ((this as any).createAndAddNewEditor as any)(t, !1);
  }
  pointerdown(t: any): any {
    if ((((this.#c as any).getMode as any)() as any) === ((F as any).HIGHLIGHT as any) && ((this as any).enableTextSelection as any)(), this.#r) {
      this.#r = !1;
      return;
    }
    const {
      isMac: e
    }: any = (ot as any).platform;
    if (((t as any).button as any) !== (0 as any) || (t as any).ctrlKey && e || ((t as any).target as any) !== ((this as any).div as any)) return;
    if (this.#r = !0, this.#y?.isDrawer) {
      ((this as any).startDrawingSession as any)(t);
      return;
    }
    const s: any = ((this.#c as any).getActive as any)();
    this.#e = !s || ((s as any).isEmpty as any)();
  }
  startDrawingSession(t: any): any {
    if ((((this as any).div as any).focus as any)({
      preventScroll: !0
    }), this.#l) {
      ((this.#y as any).startDrawing as any)(this, this.#c, !1, t);
      return;
    }
    ((this.#c as any).setCurrentDrawingSession as any)(this), this.#l = new (AbortController as any)();
    const e: any = ((this.#c as any).combinedSignal as any)(this.#l);
    (((this as any).div as any).addEventListener as any)("blur", ({
      relatedTarget: s
    }: any): any => {
      s && !(((this as any).div as any).contains as any)(s) && (this.#u = null, ((this as any).commitOrRemove as any)());
    }, {
      signal: e
    }), ((this.#y as any).startDrawing as any)(this, this.#c, !1, t);
  }
  pause(t: any): any {
    if (t) {
      const {
        activeElement: e
      }: any = document;
      (((this as any).div as any).contains as any)(e) && (this.#u = e);
      return;
    }
    this.#u && (setTimeout as any)((): any => {
      this.#u?.focus(), this.#u = null;
    }, 0);
  }
  endDrawingSession(t: any = !1): any {
    return this.#l ? (((this.#c as any).setCurrentDrawingSession as any)(null), ((this.#l as any).abort as any)(), this.#l = null, this.#u = null, ((this.#y as any).endDrawing as any)(t)) : null;
  }
  findNewParent(t: any, e: any, s: any): any {
    const i: any = ((this.#c as any).findParent as any)(e, s);
    return (i as any) === (null as any) || (i as any) === (this as any) ? !1 : (((i as any).changeParent as any)(t), !0);
  }
  commitOrRemove(): any {
    return this.#l ? (((this as any).endDrawingSession as any)(), !0) : !1;
  }
  onScaleChanging(): any {
    this.#l && ((this.#y as any).onScaleChangingWhenDrawing as any)(this);
  }
  destroy(): any {
    ((this as any).commitOrRemove as any)(), (((this.#c as any).getActive as any)()?.parent as any) === (this as any) && (((this.#c as any).commitOrRemove as any)(), ((this.#c as any).setActiveEditor as any)(null)), this.#a && ((clearTimeout as any)(this.#a), this.#a = null);
    for (const t of ((this.#n as any).values as any)()) this.#t?.removePointerInTextLayer((t as any).contentDiv), ((t as any).setParent as any)(null), (t as any).isAttachedToDOM = !1, (((t as any).div as any).remove as any)();
    (this as any).div = null, ((this.#n as any).clear as any)(), ((this.#c as any).removeLayer as any)(this);
  }
  #w(): any {
    for (const t of ((this.#n as any).values as any)()) ((t as any).isEmpty as any)() && ((t as any).remove as any)();
  }
  render({
    viewport: t
  }: any): any {
    (this as any).viewport = t, (Wt as any)((this as any).div, t);
    for (const e of ((this.#c as any).getEditors as any)((this as any).pageIndex)) ((this as any).add as any)(e), ((e as any).rebuild as any)();
    ((this as any).updateMode as any)();
  }
  update({
    viewport: t
  }: any): any {
    ((this.#c as any).commitOrRemove as any)(), (this.#w as any)();
    const e: any = ((this as any).viewport as any).rotation,
      s: any = (t as any).rotation;
    if ((this as any).viewport = t, (Wt as any)((this as any).div, {
      rotation: s
    }), (e as any) !== (s as any)) for (const i of ((this.#n as any).values as any)()) ((i as any).rotate as any)(s);
  }
  get pageDimensions(): any {
    const {
      pageWidth: t,
      pageHeight: e
    }: any = ((this as any).viewport as any).rawDims;
    return [t, e];
  }
  get scale(): any {
    return ((this.#c as any).viewParameters as any).realScale;
  }
}
class rt {
  declare pageIndex: any;
  [key: string]: any;
  #t: any = null;
  #e: any = new (Map as any)();
  #i: any = new (Map as any)();
  static #s: any = 0;
  constructor({
    pageIndex: t
  }: any) {
    (this as any).pageIndex = t;
  }
  setParent(t: any): any {
    if (!this.#t) {
      this.#t = t;
      return;
    }
    if ((this.#t as any) !== (t as any)) {
      if (((this.#e as any).size as any) > (0 as any)) for (const e of ((this.#e as any).values as any)()) ((e as any).remove as any)(), ((t as any).append as any)(e);
      this.#t = t;
    }
  }
  static get _svgFactory(): any {
    return (N as any)(this, "_svgFactory", new (Ve as any)());
  }
  static #a(t: any, [e, s, i, n]: any): any {
    const {
      style: r
    }: any = t;
    (r as any).top = `${(100 as any) * (s as any)}%`, (r as any).left = `${(100 as any) * (e as any)}%`, (r as any).width = `${(100 as any) * (i as any)}%`, (r as any).height = `${(100 as any) * (n as any)}%`;
  }
  #n(): any {
    const t: any = (((rt as any)._svgFactory as any).create as any)(1, 1, !0);
    return ((this.#t as any).append as any)(t), ((t as any).setAttribute as any)("aria-hidden", !0), t;
  }
  #r(t: any, e: any): any {
    const s: any = (((rt as any)._svgFactory as any).createElement as any)("clipPath");
    ((t as any).append as any)(s);
    const i: any = `clip_${e}`;
    ((s as any).setAttribute as any)("id", i), ((s as any).setAttribute as any)("clipPathUnits", "objectBoundingBox");
    const n: any = (((rt as any)._svgFactory as any).createElement as any)("use");
    return ((s as any).append as any)(n), ((n as any).setAttribute as any)("href", `#${e}`), (((n as any).classList as any).add as any)("clip"), i;
  }
  #o(t: any, e: any): any {
    for (const [s, i] of ((Object as any).entries as any)(e)) (i as any) === (null as any) ? ((t as any).removeAttribute as any)(s) : ((t as any).setAttribute as any)(s, i);
  }
  draw(t: any, e: any = !1, s: any = !1): any {
    const i: any = rt.#s++,
      n: any = (this.#n as any)(),
      r: any = (((rt as any)._svgFactory as any).createElement as any)("defs");
    ((n as any).append as any)(r);
    const a: any = (((rt as any)._svgFactory as any).createElement as any)("path");
    ((r as any).append as any)(a);
    const o: any = `path_p${(this as any).pageIndex}_${i}`;
    ((a as any).setAttribute as any)("id", o), ((a as any).setAttribute as any)("vector-effect", "non-scaling-stroke"), e && ((this.#i as any).set as any)(i, a);
    const l: any = s ? (this.#r as any)(r, o) : null,
      h: any = (((rt as any)._svgFactory as any).createElement as any)("use");
    return ((n as any).append as any)(h), ((h as any).setAttribute as any)("href", `#${o}`), ((this as any).updateProperties as any)(n, t), ((this.#e as any).set as any)(i, n), {
      id: i,
      clipPathId: `url(#${l})`
    };
  }
  drawOutline(t: any, e: any): any {
    const s: any = rt.#s++,
      i: any = (this.#n as any)(),
      n: any = (((rt as any)._svgFactory as any).createElement as any)("defs");
    ((i as any).append as any)(n);
    const r: any = (((rt as any)._svgFactory as any).createElement as any)("path");
    ((n as any).append as any)(r);
    const a: any = `path_p${(this as any).pageIndex}_${s}`;
    ((r as any).setAttribute as any)("id", a), ((r as any).setAttribute as any)("vector-effect", "non-scaling-stroke");
    let o: any;
    if (e) {
      const c: any = (((rt as any)._svgFactory as any).createElement as any)("mask");
      ((n as any).append as any)(c), o = `mask_p${(this as any).pageIndex}_${s}`, ((c as any).setAttribute as any)("id", o), ((c as any).setAttribute as any)("maskUnits", "objectBoundingBox");
      const u: any = (((rt as any)._svgFactory as any).createElement as any)("rect");
      ((c as any).append as any)(u), ((u as any).setAttribute as any)("width", "1"), ((u as any).setAttribute as any)("height", "1"), ((u as any).setAttribute as any)("fill", "white");
      const f: any = (((rt as any)._svgFactory as any).createElement as any)("use");
      ((c as any).append as any)(f), ((f as any).setAttribute as any)("href", `#${a}`), ((f as any).setAttribute as any)("stroke", "none"), ((f as any).setAttribute as any)("fill", "black"), ((f as any).setAttribute as any)("fill-rule", "nonzero"), (((f as any).classList as any).add as any)("mask");
    }
    const l: any = (((rt as any)._svgFactory as any).createElement as any)("use");
    ((i as any).append as any)(l), ((l as any).setAttribute as any)("href", `#${a}`), o && ((l as any).setAttribute as any)("mask", `url(#${o})`);
    const h: any = ((l as any).cloneNode as any)();
    return ((i as any).append as any)(h), (((l as any).classList as any).add as any)("mainOutline"), (((h as any).classList as any).add as any)("secondaryOutline"), ((this as any).updateProperties as any)(i, t), ((this.#e as any).set as any)(s, i), s;
  }
  finalizeDraw(t: any, e: any): any {
    ((this.#i as any).delete as any)(t), ((this as any).updateProperties as any)(t, e);
  }
  updateProperties(t: any, e: any): any {
    if (!e) return;
    const {
        root: s,
        bbox: i,
        rootClass: n,
        path: r
      }: any = e,
      a: any = (typeof t as any) == ("number" as any) ? ((this.#e as any).get as any)(t) : t;
    if (a) {
      if (s && (this.#o as any)(a, s), i && (rt.#a as any)(a, i), n) {
        const {
          classList: o
        }: any = a;
        for (const [l, h] of ((Object as any).entries as any)(n)) ((o as any).toggle as any)(l, h);
      }
      if (r) {
        const l: any = ((a as any).firstChild as any).firstChild;
        (this.#o as any)(l, r);
      }
    }
  }
  updateParent(t: any, e: any): any {
    if ((e as any) === (this as any)) return;
    const s: any = ((this.#e as any).get as any)(t);
    s && (((e.#t as any).append as any)(s), ((this.#e as any).delete as any)(t), ((e.#e as any).set as any)(t, s));
  }
  remove(t: any): any {
    ((this.#i as any).delete as any)(t), (this.#t as any) !== (null as any) && (((((this.#e as any).get as any)(t) as any).remove as any)(), ((this.#e as any).delete as any)(t));
  }
  destroy(): any {
    this.#t = null;
    for (const t of ((this.#e as any).values as any)()) ((t as any).remove as any)();
    ((this.#e as any).clear as any)(), ((this.#i as any).clear as any)();
  }
}
(globalThis as any)._pdfjsTestingUtils = {
  HighlightOutliner: vs
};
(globalThis as any).pdfjsLib = {
  AbortException: Ht,
  AnnotationEditorLayer: Dt,
  AnnotationEditorParamsType: O,
  AnnotationEditorType: F,
  AnnotationEditorUIManager: Ut,
  AnnotationLayer: Ns,
  AnnotationMode: Ot,
  AnnotationType: et,
  applyOpacity: bn,
  build: Cr,
  ColorPicker: wt,
  createValidAbsoluteUrl: mi,
  CSSConstants: mn,
  DOMSVGFactory: Ve,
  DrawLayer: rt,
  FeatureTest: ot,
  fetchData: Ee,
  findContrastColor: yn,
  getDocument: Ar,
  getFilenameFromUrl: cn,
  getPdfFilenameFromUrl: dn,
  getRGB: xe,
  getUuid: Ai,
  getXfaPageViewport: fn,
  GlobalWorkerOptions: be,
  ImageKind: Ue,
  InvalidPDFException: us,
  isDataScheme: Ke,
  isPdfFile: xs,
  isValidExplicitDest: Pn,
  MathClamp: dt,
  noContextMenu: vt,
  normalizeUnicode: on,
  OPS: Ae,
  OutputScale: kt,
  PasswordResponses: Qi,
  PDFDataRangeTransport: Bi,
  PDFDateString: fs,
  PDFWorker: ve,
  PermissionFlag: Ki,
  PixelsPerInch: ae,
  RenderingCancelledException: Cs,
  renderRichText: _i,
  ResponseException: je,
  setLayerDimensions: Wt,
  shadow: N,
  SignatureExtractor: Zt,
  stopEvent: Q,
  SupportedImageMimeTypes: ps,
  TextLayer: ht,
  TouchManager: Qe,
  updateUrlHash: bi,
  Util: P,
  VerbosityLevel: Xe,
  version: Er,
  XfaLayer: vi
};
export { Ht as AbortException, Dt as AnnotationEditorLayer, O as AnnotationEditorParamsType, F as AnnotationEditorType, Ut as AnnotationEditorUIManager, Ns as AnnotationLayer, Ot as AnnotationMode, et as AnnotationType, mn as CSSConstants, wt as ColorPicker, Ve as DOMSVGFactory, rt as DrawLayer, ot as FeatureTest, be as GlobalWorkerOptions, Ue as ImageKind, us as InvalidPDFException, dt as MathClamp, Ae as OPS, kt as OutputScale, Bi as PDFDataRangeTransport, fs as PDFDateString, ve as PDFWorker, Qi as PasswordResponses, Ki as PermissionFlag, ae as PixelsPerInch, Cs as RenderingCancelledException, je as ResponseException, Zt as SignatureExtractor, ps as SupportedImageMimeTypes, ht as TextLayer, Qe as TouchManager, P as Util, Xe as VerbosityLevel, vi as XfaLayer, bn as applyOpacity, Cr as build, mi as createValidAbsoluteUrl, Ee as fetchData, yn as findContrastColor, Ar as getDocument, cn as getFilenameFromUrl, dn as getPdfFilenameFromUrl, xe as getRGB, Ai as getUuid, fn as getXfaPageViewport, Ke as isDataScheme, xs as isPdfFile, Pn as isValidExplicitDest, vt as noContextMenu, on as normalizeUnicode, _i as renderRichText, Wt as setLayerDimensions, N as shadow, Q as stopEvent, bi as updateUrlHash, Er as version };
//# debugId=8dd44938-254e-45c0-9b88-c594254b7e4b
