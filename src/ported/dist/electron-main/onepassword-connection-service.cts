declare var AbortController: any;
declare var AbortSignal: any;
declare var Buffer: any;
declare var DOMException: any;
declare var Headers: any;
declare var OnePasswordConnectionService: any;
declare var URL: any;
declare var __dirname: any;
declare var __filename: any;
declare var console: any;
declare var createDefaultOnePasswordConnectionService: any;
declare var fetch: any;
declare var global: any;
declare var key: any;
declare var localPath: any;
declare var module: any;
declare var performance: any;
declare var process: any;
declare var require: any;
declare var self: any;
declare var setImmediate: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "6110c0aa-e441-400e-8b97-b78e4b1dc6dc", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-6110c0aa-e441-400e-8b97-b78e4b1dc6dc");
  } catch (e: any) {}
} as any)();
const __mod: any = (require as any)('node:module');
const __p: any = (require as any)('node:path');
const __depsDir: any = ((__p as any).join as any)(__dirname, '..', 'deps');
((process as any).env as any).NODE_PATH = (__depsDir as any) + ((((process as any).env as any).NODE_PATH ? ((__p as any).delimiter as any) + (((process as any).env as any).NODE_PATH as any) : '') as any);
(((__mod as any).Module as any)._initPaths as any)();
const __import_meta_url: any = ((((require as any)('node:url') as any).pathToFileURL as any)(__filename) as any).href;
"use strict";
var Nn: any = (Object as any).create;
var ce: any = (Object as any).defineProperty;
var Cn: any = (Object as any).getOwnPropertyDescriptor;
var Dn: any = (Object as any).getOwnPropertyNames;
var kn: any = (Object as any).getPrototypeOf,
  In: any = ((Object as any).prototype as any).hasOwnProperty;
var _: any = (r: any, e: any): any => (): any => (r && (e = (r as any)(r = 0)), e);
var G: any = (r: any, e: any): any => (): any => (e || (r as any)(((e = {
    exports: {}
  }) as any).exports, e), (e as any).exports),
  Ie: any = (r: any, e: any): any => {
    var n: any;
    for (n in e) (ce as any)(r, n, {
      get: (e as any)[n],
      enumerable: !0
    });
  },
  er: any = (r: any, e: any, n: any, t: any): any => {
    if (e && (typeof e as any) == ("object" as any) || (typeof e as any) == ("function" as any)) for (let o of (Dn as any)(e)) !((In as any).call as any)(r, o) && (o as any) !== (n as any) && (ce as any)(r, o, {
      get: (): any => (e as any)[o],
      enumerable: !(t = (Cn as any)(e, o)) || (t as any).enumerable
    });
    return r;
  };
var Pn: any = (r: any, e: any, n: any): any => (n = (r as any) != (null as any) ? (Nn as any)((kn as any)(r)) : {}, (er as any)(e || !r || !(r as any).__esModule ? (ce as any)(n, "default", {
    value: r,
    enumerable: !0
  }) : n, r)),
  Rn: any = (r: any): any => (er as any)((ce as any)({}, "__esModule", {
    value: !0
  }), r);
function xn(this: any, r: any): any {
  return (typeof r as any) == ("object" as any) && (r as any) !== (null as any) && "unref" in r && (typeof (r as any).unref as any) == ("function" as any);
}
function On(this: any, r: any): any {
  if (!((Number as any).isFinite as any)(r) || (r as any) < (0 as any)) throw new (RangeError as any)("delayMs must be a finite non-negative number");
}
var ne: any,
  Pe: any = (_ as any)((): any => {
    "use strict";

    ne = {
      now: (): any => ((Date as any).now as any)(),
      monotonicNow: (): any => ((performance as any).now as any)(),
      schedule(r: any, e: any, n: any): any {
        (On as any)(r);
        let t: any = !0,
          o: any = ((globalThis as any).setTimeout as any)((): any => {
            t && (t = !1, (e as any)());
          }, r);
        return (n?.keepEventLoopAlive as any) !== (!0 as any) && (xn as any)(o) && ((o as any).unref as any)(), {
          dispose(): any {
            t && (t = !1, ((globalThis as any).clearTimeout as any)(o));
          }
        };
      }
    };
  });
function fe(this: any, r: any): any {
  (Fn as any)((r as any).name), (Mn as any)((r as any).timeoutMs, "timeoutMs");
  let e: any = (r as any).clock ?? ne;
  return {
    name: (r as any).name,
    async run(n: any, t: any): Promise<any> {
      if (t?.aborted) throw (rr as any)(t, (r as any).name);
      let o: any = new (AbortController as any)(),
        i: any = (): any => {},
        c: any = new (Promise as any)((N: any, C: any): any => {
          i = C;
        }),
        h: any = (): any => {},
        g: any = new (Promise as any)((N: any, C: any): any => {
          h = C;
        }),
        E: any = (): any => {};
      if ((t as any) != (null as any)) {
        let N: any = (): any => {
          let C: any = (rr as any)(t, (r as any).name);
          (h as any)(C), ((o as any).abort as any)(C);
        };
        ((t as any).addEventListener as any)("abort", N, {
          once: !0
        }), E = (): any => ((t as any).removeEventListener as any)("abort", N);
      }
      let b: any = ((e as any).schedule as any)((r as any).timeoutMs, (): any => {
        let N: any = new (ue as any)((r as any).name);
        (i as any)(N), ((o as any).abort as any)(N);
      });
      try {
        return await ((Promise as any).race as any)([(n as any)((o as any).signal), c, g]);
      } finally {
        ((b as any).dispose as any)(), (E as any)();
      }
    }
  };
}
function rr(this: any, r: any, e: any): any {
  return (r as any).reason ?? (Tn as any)(e);
}
function Tn(this: any, r: any): any {
  let e: any = new (Error as any)(`Operation aborted for ${r}`);
  return (e as any).name = "AbortError", e;
}
function Fn(this: any, r: any): any {
  if (!((Ln as any).test as any)(r)) throw new (TypeError as any)(`name must be lowercase segments joined by "-" or ".", got ${((JSON as any).stringify as any)(r)}`);
}
function Mn(this: any, r: any, e: any): any {
  if (!((Number as any).isFinite as any)(r) || (r as any) < (0 as any)) throw new (RangeError as any)(`${e} must be a finite non-negative number`);
}
var ue: any,
  Yt: any,
  Ln: any,
  nr: any = (_ as any)((): any => {
    "use strict";

    (Pe as any)();
    ue = class extends (Error as any) {
      declare policyName: any;
      declare name: any;
      declare code: any;
      [key: string]: any;
      constructor(e: any) {
        super(`Deadline exceeded for ${e}`), (this as any).code = "deadline_exceeded", (this as any).name = "DeadlineExceededError", (this as any).policyName = e;
      }
    };
    Yt = {
      none: 0,
      equal: (1 as any) / (2 as any),
      full: 1
    };
    Ln = /^[a-z0-9]+([-.][a-z0-9]+)*$/;
  });
var tr: any = (_ as any)((): any => {
  "use strict";
});
var or: any = (_ as any)((): any => {
  "use strict";

  (Pe as any)();
  (nr as any)();
  (tr as any)();
});
var Re: any = (_ as any)((): any => {
  "use strict";

  (or as any)();
});
function te(this: any, r: any, e: any): any {
  let n: any = new (Set as any)(r);
  return (t: any): any => {
    if ((t as any) !== (void 0 as any)) return ((n as any).has as any)(t) ? t : e;
  };
}
var xe: any,
  Bn: any,
  wo: any,
  sr: any,
  Hn: any,
  So: any,
  ir: any,
  Gn: any,
  vo: any,
  Oe: any = (_ as any)((): any => {
    "use strict";

    xe = ["Canceled", "Unknown", "InvalidArgument", "DeadlineExceeded", "NotFound", "AlreadyExists", "PermissionDenied", "ResourceExhausted", "FailedPrecondition", "Aborted", "OutOfRange", "Unimplemented", "Internal", "Unavailable", "DataLoss", "Unauthenticated"], Bn = "Other", wo = (te as any)(xe, Bn), sr = ["ECONNREFUSED", "ECONNRESET", "ECONNABORTED", "ETIMEDOUT", "EPIPE", "ENETRESET", "ENETDOWN", "ENETUNREACH", "EHOSTUNREACH", "EHOSTDOWN", "EAI_AGAIN", "ENOTFOUND", "EADDRINUSE", "EACCES", "EPERM", "ENOENT", "ENOSPC", "EDQUOT", "EROFS", "EBUSY", "EMFILE", "EIO"], Hn = "E_OTHER", So = (te as any)(sr, Hn), ir = ["Error", "TypeError", "AbortError", "DeadlineExceededError", "ConnectError"], Gn = ["client-paused", "away-park", "present-park", "dev-induced-offline", "network-return", "unknown", "cold_create", "first_connect", "manual_update", "manual_reset", "auto_update", "remote_reset", "reconnect", ...ir, ...((ir as any).flatMap as any)((r: any): any => ((sr as any).map as any)((e: any): any => `${r}/${e}`))], vo = (te as any)(Gn, "unknown");
  });
function V(this: any, r: any): any {
  return (typeof r as any) == ("object" as any) && (r as any) !== (null as any) && !((Array as any).isArray as any)(r);
}
var me: any = (_ as any)((): any => {
  "use strict";
});
var q: any,
  pe: any = (_ as any)((): any => {
    (function (this: any, r: any): any {
      (r as any)[(r as any).Canceled = 1] = "Canceled", (r as any)[(r as any).Unknown = 2] = "Unknown", (r as any)[(r as any).InvalidArgument = 3] = "InvalidArgument", (r as any)[(r as any).DeadlineExceeded = 4] = "DeadlineExceeded", (r as any)[(r as any).NotFound = 5] = "NotFound", (r as any)[(r as any).AlreadyExists = 6] = "AlreadyExists", (r as any)[(r as any).PermissionDenied = 7] = "PermissionDenied", (r as any)[(r as any).ResourceExhausted = 8] = "ResourceExhausted", (r as any)[(r as any).FailedPrecondition = 9] = "FailedPrecondition", (r as any)[(r as any).Aborted = 10] = "Aborted", (r as any)[(r as any).OutOfRange = 11] = "OutOfRange", (r as any)[(r as any).Unimplemented = 12] = "Unimplemented", (r as any)[(r as any).Internal = 13] = "Internal", (r as any)[(r as any).Unavailable = 14] = "Unavailable", (r as any)[(r as any).DataLoss = 15] = "DataLoss", (r as any)[(r as any).Unauthenticated = 16] = "Unauthenticated";
    } as any)(q || (q = {}));
  });
function Te(this: any, r: any): any {
  let e: any = (q as any)[r];
  return (typeof e as any) != ("string" as any) ? ((r as any).toString as any)() : ((((e as any)[0] as any).toLowerCase as any)() as any) + (((((e as any).substring as any)(1) as any).replace as any)(/[A-Z]/g, (n: any): any => ("_" as any) + (((n as any).toLowerCase as any)() as any)) as any);
}
var lr: any = (_ as any)((): any => {
  (pe as any)();
});
function zn(this: any, r: any, e: any): any {
  return (r as any).length ? `[${(Te as any)(e)}] ${r}` : `[${(Te as any)(e)}]`;
}
var oe: any,
  cr: any = (_ as any)((): any => {
    (pe as any)();
    (lr as any)();
    oe = class r extends (Error as any) {
      declare cause: any;
      declare details: any;
      declare metadata: any;
      declare code: any;
      declare rawMessage: any;
      declare name: any;
      [key: string]: any;
      constructor(e: any, n: any = (q as any).Unknown, t: any, o: any, i: any) {
        super((zn as any)(e, n)), (this as any).name = "ConnectError", ((Object as any).setPrototypeOf as any)(this, (new.target as any).prototype), (this as any).rawMessage = e, (this as any).code = n, (this as any).metadata = new (Headers as any)(t ?? {}), (this as any).details = o ?? [], (this as any).cause = i;
      }
      static from(e: any, n: any = (q as any).Unknown): any {
        return e instanceof r ? e : e instanceof Error ? ((e as any).name as any) == ("AbortError" as any) ? new (r as any)((e as any).message, (q as any).Canceled) : new (r as any)((e as any).message, n, void 0, void 0, e) : new (r as any)((String as any)(e), n, void 0, void 0, e);
      }
      findDetails(e: any): any {
        let n: any = "typeName" in e ? {
            findMessage: (o: any): any => (o as any) === ((e as any).typeName as any) ? e : void 0
          } : e,
          t: any = [];
        for (let o of (this as any).details) {
          if ("getType" in o) {
            ((n as any).findMessage as any)((((o as any).getType as any)() as any).typeName) && ((t as any).push as any)(o);
            continue;
          }
          let i: any = ((n as any).findMessage as any)((o as any).type);
          if (i) try {
            ((t as any).push as any)(((i as any).fromBinary as any)((o as any).value));
          } catch {}
        }
        return t;
      }
    };
  });
var ur: any = (_ as any)((): any => {
  (cr as any)();
  (pe as any)();
});
var fr: any = (_ as any)((): any => {
  "use strict";
});
function qn(this: any, r: any, e: any): any {
  let n: any = new (Set as any)(),
    t: any = r;
  for (; (t as any) != (null as any) && (typeof t as any) == ("object" as any) && !((n as any).has as any)(t);) {
    ((n as any).add as any)(t);
    let o: any = (t as any).code;
    if ((typeof o as any) == ("string" as any) && ((e as any).test as any)(o)) return o;
    t = (t as any).cause;
  }
}
function mr(this: any, r: any): any {
  return (qn as any)(r, /^E[A-Z_]+$/);
}
function pr(this: any, r: any): any {
  let e: any = (mr as any)(r);
  return (e as any) === ("ENOENT" as any) || (e as any) === ("ENOTDIR" as any);
}
var Le: any = (_ as any)((): any => {
  "use strict";
});
function yr(this: any, r: any): any {
  return r instanceof Error ? (((r as any).name as any).length as any) > (0 as any) ? (r as any).name : "Error" : typeof r;
}
var X: any,
  ae: any = (_ as any)((): any => {
    "use strict";

    (Le as any)();
    X = class extends (Error as any) {
      [key: string]: any;
    };
  });
function hr(this: any, r: any): any {
  return r instanceof oe ? `ConnectError.${(q as any)[(r as any).code]}` : (yr as any)(r);
}
var qo: any,
  Er: any = (_ as any)((): any => {
    "use strict";

    (ur as any)();
    (fr as any)();
    (Oe as any)();
    (ae as any)();
    qo = (te as any)(((xe as any).map as any)((r: any): any => `ConnectError.${r}`), "ConnectError.Other");
  });
function Fe(this: any, r: any): any {
  let e: any,
    n: any = [],
    t: any = (o: any, i: any): any => {
      if (((r as any).onReplayFailure as any) === (void 0 as any)) {
        (o as any)(...i);
        return;
      }
      try {
        (o as any)(...i);
      } catch (c: any) {
        ((r as any).onReplayFailure as any)(c);
      }
    };
  return {
    install(o: any): any {
      e = o;
      let i: any = n;
      if (n = [], (o as any) !== (void 0 as any)) for (let c of i) (t as any)(o, c);
    },
    report(...o: any): any {
      if ((e as any) !== (void 0 as any)) {
        (e as any)(...o);
        return;
      }
      if (((n as any).length as any) >= ((r as any).capacity as any)) {
        if (((r as any).overflow as any) === ("drop-newest" as any)) return;
        ((n as any).shift as any)();
      }
      ((n as any).push as any)(o);
    }
  };
}
var gr: any = (_ as any)((): any => {
  "use strict";
});
function J(this: any, r: any, e: any, n: any): any {
  (Xn as any)(r, e, (hr as any)(n));
}
function Xn(this: any, r: any, e: any, n: any): any {
  let t: any = {
    area: r,
    leg: e,
    errorClass: n
  };
  (($n as any).report as any)(t);
}
var $n: any,
  Wo: any,
  Me: any = (_ as any)((): any => {
    "use strict";

    (Er as any)();
    (gr as any)();
    $n = (Fe as any)({
      capacity: 32,
      overflow: "drop-newest"
    });
    Wo = (Fe as any)({
      capacity: 8,
      overflow: "drop-newest"
    });
  });
var v: any,
  ye: any,
  ie: any = (_ as any)((): any => {
    "use strict";

    (ae as any)();
    v = class extends (X as any) {
      [key: string]: any;
      constructor(n: any, t: any) {
        super(t);
        (this as any).code = n;
      }
      code: any;
      name: any = "OnePasswordProvisioningError";
    }, ye = {
      availability: "unavailable",
      async accept(): Promise<any> {
        throw new (v as any)("sink-unavailable", "1Password provisioning is unavailable until a credential consumer is configured.");
      }
    };
  });
var Ue: any = (G as any)((ea: any, wr: any): any => {
  (wr as any).exports = {
    LOCHDR: 30,
    LOCSIG: 67324752,
    LOCVER: 4,
    LOCFLG: 6,
    LOCHOW: 8,
    LOCTIM: 10,
    LOCCRC: 14,
    LOCSIZ: 18,
    LOCLEN: 22,
    LOCNAM: 26,
    LOCEXT: 28,
    EXTSIG: 134695760,
    EXTHDR: 16,
    EXTCRC: 4,
    EXTSIZ: 8,
    EXTLEN: 12,
    CENHDR: 46,
    CENSIG: 33639248,
    CENVEM: 4,
    CENVER: 6,
    CENFLG: 8,
    CENHOW: 10,
    CENTIM: 12,
    CENCRC: 16,
    CENSIZ: 20,
    CENLEN: 24,
    CENNAM: 28,
    CENEXT: 30,
    CENCOM: 32,
    CENDSK: 34,
    CENATT: 36,
    CENATX: 38,
    CENOFF: 42,
    ENDHDR: 22,
    ENDSIG: 101010256,
    ENDSUB: 8,
    ENDTOT: 10,
    ENDSIZ: 12,
    ENDOFF: 16,
    ENDCOM: 20,
    END64HDR: 20,
    END64SIG: 117853008,
    END64START: 4,
    END64OFF: 8,
    END64NUMDISKS: 16,
    ZIP64SIG: 101075792,
    ZIP64HDR: 56,
    ZIP64LEAD: 12,
    ZIP64SIZE: 4,
    ZIP64VEM: 12,
    ZIP64VER: 14,
    ZIP64DSK: 16,
    ZIP64DSKDIR: 20,
    ZIP64SUB: 24,
    ZIP64TOT: 32,
    ZIP64SIZB: 40,
    ZIP64OFF: 48,
    ZIP64EXTRA: 56,
    STORED: 0,
    SHRUNK: 1,
    REDUCED1: 2,
    REDUCED2: 3,
    REDUCED3: 4,
    REDUCED4: 5,
    IMPLODED: 6,
    DEFLATED: 8,
    ENHANCED_DEFLATED: 9,
    PKWARE: 10,
    BZIP2: 12,
    LZMA: 14,
    IBM_TERSE: 18,
    IBM_LZ77: 19,
    AES_ENCRYPT: 99,
    FLG_ENC: 1,
    FLG_COMP1: 2,
    FLG_COMP2: 4,
    FLG_DESC: 8,
    FLG_ENH: 16,
    FLG_PATCH: 32,
    FLG_STR: 64,
    FLG_EFS: 2048,
    FLG_MSK: 4096,
    FILE: 2,
    BUFFER: 1,
    NONE: 0,
    EF_ID: 0,
    EF_SIZE: 2,
    ID_ZIP64: 1,
    ID_AVINFO: 7,
    ID_PFS: 8,
    ID_OS2: 9,
    ID_NTFS: 10,
    ID_OPENVMS: 12,
    ID_UNIX: 13,
    ID_FORK: 14,
    ID_PATCH: 15,
    ID_X509_PKCS7: 20,
    ID_X509_CERTID_F: 21,
    ID_X509_CERTID_C: 22,
    ID_STRONGENC: 23,
    ID_RECORD_MGT: 24,
    ID_X509_PKCS7_RL: 25,
    ID_IBM1: 101,
    ID_IBM2: 102,
    ID_POSZIP: 18064,
    EF_ZIP64_OR_32: 4294967295,
    EF_ZIP64_OR_16: 65535,
    EF_ZIP64_SUNCOMP: 0,
    EF_ZIP64_SCOMP: 8,
    EF_ZIP64_RHO: 16,
    EF_ZIP64_DSN: 24
  };
});
var he: any = (G as any)((vr: any): any => {
  var Sr: any = {
    INVALID_LOC: "Invalid LOC header (bad signature)",
    INVALID_CEN: "Invalid CEN header (bad signature)",
    INVALID_END: "Invalid END header (bad signature)",
    DESCRIPTOR_NOT_EXIST: "No descriptor present",
    DESCRIPTOR_UNKNOWN: "Unknown descriptor format",
    DESCRIPTOR_FAULTY: "Descriptor data is malformed",
    NO_DATA: "Nothing to decompress",
    BAD_CRC: "CRC32 checksum failed {0}",
    FILE_IN_THE_WAY: "There is a file in the way: {0}",
    UNKNOWN_METHOD: "Invalid/unsupported compression method",
    AVAIL_DATA: "inflate::Available inflate data did not terminate",
    INVALID_DISTANCE: "inflate::Invalid literal/length or distance code in fixed or dynamic block",
    TO_MANY_CODES: "inflate::Dynamic block code description: too many length or distance codes",
    INVALID_REPEAT_LEN: "inflate::Dynamic block code description: repeat more than specified lengths",
    INVALID_REPEAT_FIRST: "inflate::Dynamic block code description: repeat lengths with no first length",
    INCOMPLETE_CODES: "inflate::Dynamic block code description: code lengths codes incomplete",
    INVALID_DYN_DISTANCE: "inflate::Dynamic block code description: invalid distance code lengths",
    INVALID_CODES_LEN: "inflate::Dynamic block code description: invalid literal/length code lengths",
    INVALID_STORE_BLOCK: "inflate::Stored block length did not match one's complement",
    INVALID_BLOCK_TYPE: "inflate::Invalid block type (type == 3)",
    CANT_EXTRACT_FILE: "Could not extract the file",
    CANT_OVERRIDE: "Target file already exists",
    DISK_ENTRY_TOO_LARGE: "Number of disk entries is too large",
    NO_ZIP: "No zip file was loaded",
    NO_ENTRY: "Entry doesn't exist",
    DIRECTORY_CONTENT_ERROR: "A directory cannot have content",
    FILE_NOT_FOUND: 'File not found: "{0}"',
    NOT_IMPLEMENTED: "Not implemented",
    INVALID_FILENAME: "Invalid filename",
    INVALID_FORMAT: "Invalid or unsupported zip format. No END header found",
    INVALID_PASS_PARAM: "Incompatible password parameter",
    WRONG_PASSWORD: "Wrong Password",
    COMMENT_TOO_LONG: "Comment is too long",
    EXTRA_FIELD_PARSE_ERROR: "Extra field parsing error"
  };
  function Kn(this: any, r: any): any {
    return function (this: any, ...e: any): any {
      return (e as any).length && (r = ((r as any).replace as any)(/\{(\d)\}/g, (n: any, t: any): any => (e as any)[t] || "")), new (Error as any)(("ADM-ZIP: " as any) + (r as any));
    };
  }
  for (let r of ((Object as any).keys as any)(Sr)) (vr as any)[r] = (Kn as any)((Sr as any)[r]);
});
var Dr: any = (G as any)((na: any, Cr: any): any => {
  var Wn: any = (require as any)("fs"),
    M: any = (require as any)("path"),
    br: any = (Ue as any)(),
    Jn: any = (he as any)(),
    Yn: any = (typeof process as any) == ("object" as any) && ((process as any).platform as any) === ("win32" as any),
    Ar: any = (r: any): any => (typeof r as any) == ("object" as any) && (r as any) !== (null as any),
    Nr: any = ((new (Uint32Array as any)(256) as any).map as any)((r: any, e: any): any => {
      for (let n: any = 0; (n as any) < (8 as any); n++) (((e as any) & (1 as any)) as any) !== (0 as any) ? e = (3988292384 as any) ^ ((e as any) >>> (1 as any) as any) : e >>>= 1;
      return (e as any) >>> (0 as any);
    });
  function T(this: any, r: any): any {
    (this as any).sep = (M as any).sep, (this as any).fs = Wn, (Ar as any)(r) && (Ar as any)((r as any).fs) && (typeof ((r as any).fs as any).statSync as any) == ("function" as any) && ((this as any).fs = (r as any).fs);
  }
  (Cr as any).exports = T;
  ((T as any).prototype as any).makeDir = function (this: any, r: any): any {
    let e: any = this;
    function n(this: any, t: any): any {
      let o: any = (((t as any).split as any)((e as any).sep) as any)[0];
      ((((t as any).split as any)((e as any).sep) as any).forEach as any)(function (this: any, i: any): any {
        if (!(!i || (((i as any).substr as any)(-1, 1) as any) === (":" as any))) {
          o += ((e as any).sep as any) + (i as any);
          var c: any;
          try {
            c = (((e as any).fs as any).statSync as any)(o);
          } catch {
            (((e as any).fs as any).mkdirSync as any)(o);
          }
          if (c && ((c as any).isFile as any)()) throw ((Jn as any).FILE_IN_THE_WAY as any)(`"${o}"`);
        }
      });
    }
    (n as any)(r);
  };
  ((T as any).prototype as any).writeFileTo = function (this: any, r: any, e: any, n: any, t: any): any {
    let o: any = this;
    if ((((o as any).fs as any).existsSync as any)(r)) {
      if (!n) return !1;
      var i: any = (((o as any).fs as any).statSync as any)(r);
      if (((i as any).isDirectory as any)()) return !1;
    }
    var c: any = ((M as any).dirname as any)(r);
    (((o as any).fs as any).existsSync as any)(c) || ((o as any).makeDir as any)(c);
    var h: any;
    try {
      h = (((o as any).fs as any).openSync as any)(r, "w", 438);
    } catch {
      (((o as any).fs as any).chmodSync as any)(r, 438), h = (((o as any).fs as any).openSync as any)(r, "w", 438);
    }
    if (h) try {
      (((o as any).fs as any).writeSync as any)(h, e, 0, (e as any).length, 0);
    } finally {
      (((o as any).fs as any).closeSync as any)(h);
    }
    return (((o as any).fs as any).chmodSync as any)(r, t || 438), !0;
  };
  ((T as any).prototype as any).writeFileToAsync = function (this: any, r: any, e: any, n: any, t: any, o: any): any {
    (typeof t as any) == ("function" as any) && (o = t, t = void 0);
    let i: any = this;
    (((i as any).fs as any).exists as any)(r, function (this: any, c: any): any {
      if (c && !n) return (o as any)(!1);
      (((i as any).fs as any).stat as any)(r, function (this: any, h: any, g: any): any {
        if (c && ((g as any).isDirectory as any)()) return (o as any)(!1);
        var E: any = ((M as any).dirname as any)(r);
        (((i as any).fs as any).exists as any)(E, function (this: any, b: any): any {
          b || ((i as any).makeDir as any)(E), (((i as any).fs as any).open as any)(r, "w", 438, function (this: any, N: any, C: any): any {
            N ? (((i as any).fs as any).chmod as any)(r, 438, function (this: any): any {
              (((i as any).fs as any).open as any)(r, "w", 438, function (this: any, s: any, d: any): any {
                (((i as any).fs as any).write as any)(d, e, 0, (e as any).length, 0, function (this: any): any {
                  (((i as any).fs as any).close as any)(d, function (this: any): any {
                    (((i as any).fs as any).chmod as any)(r, t || 438, function (this: any): any {
                      (o as any)(!0);
                    });
                  });
                });
              });
            }) : C ? (((i as any).fs as any).write as any)(C, e, 0, (e as any).length, 0, function (this: any): any {
              (((i as any).fs as any).close as any)(C, function (this: any): any {
                (((i as any).fs as any).chmod as any)(r, t || 438, function (this: any): any {
                  (o as any)(!0);
                });
              });
            }) : (((i as any).fs as any).chmod as any)(r, t || 438, function (this: any): any {
              (o as any)(!0);
            });
          });
        });
      });
    });
  };
  ((T as any).prototype as any).findFiles = function (this: any, r: any): any {
    let e: any = this;
    function n(this: any, t: any, o: any, i: any): any {
      (typeof o as any) == ("boolean" as any) && (i = o, o = void 0);
      let c: any = [];
      return (((((e as any).fs as any).readdirSync as any)(t) as any).forEach as any)(function (this: any, h: any): any {
        let g: any = ((M as any).join as any)(t, h),
          E: any = (((e as any).fs as any).statSync as any)(g);
        (!o || ((o as any).test as any)(g)) && ((c as any).push as any)((((M as any).normalize as any)(g) as any) + ((((E as any).isDirectory as any)() ? (e as any).sep : "") as any)), ((E as any).isDirectory as any)() && i && (c = ((c as any).concat as any)((n as any)(g, o, i)));
      }), c;
    }
    return (n as any)(r, void 0, !0);
  };
  ((T as any).prototype as any).findFilesAsync = function (this: any, r: any, e: any): any {
    let n: any = this,
      t: any = [];
    (((n as any).fs as any).readdir as any)(r, function (this: any, o: any, i: any): any {
      if (o) return (e as any)(o);
      let c: any = (i as any).length;
      if (!c) return (e as any)(null, t);
      ((i as any).forEach as any)(function (this: any, h: any): any {
        h = ((M as any).join as any)(r, h), (((n as any).fs as any).stat as any)(h, function (this: any, g: any, E: any): any {
          if (g) return (e as any)(g);
          E && (((t as any).push as any)((((M as any).normalize as any)(h) as any) + ((((E as any).isDirectory as any)() ? (n as any).sep : "") as any)), ((E as any).isDirectory as any)() ? ((n as any).findFilesAsync as any)(h, function (this: any, b: any, N: any): any {
            if (b) return (e as any)(b);
            t = ((t as any).concat as any)(N), --c || (e as any)(null, t);
          }) : --c || (e as any)(null, t));
        });
      });
    });
  };
  ((T as any).prototype as any).getAttributes = function (this: any): any {};
  ((T as any).prototype as any).setAttributes = function (this: any): any {};
  (T as any).crc32update = function (this: any, r: any, e: any): any {
    return ((Nr as any)[(((r as any) ^ (e as any)) as any) & (255 as any)] as any) ^ ((r as any) >>> (8 as any) as any);
  };
  (T as any).crc32 = function (this: any, r: any): any {
    (typeof r as any) == ("string" as any) && (r = ((Buffer as any).from as any)(r, "utf8"));
    let e: any = (r as any).length,
      n: any = -1;
    for (let t: any = 0; (t as any) < (e as any);) n = ((T as any).crc32update as any)(n, (r as any)[t++]);
    return (~n as any) >>> (0 as any);
  };
  (T as any).methodToString = function (this: any, r: any): any {
    switch (r) {
      case (br as any).STORED:
        return (("STORED (" as any) + (r as any) as any) + (")" as any);
      case (br as any).DEFLATED:
        return (("DEFLATED (" as any) + (r as any) as any) + (")" as any);
      default:
        return (("UNSUPPORTED (" as any) + (r as any) as any) + (")" as any);
    }
  };
  (T as any).canonical = function (this: any, r: any): any {
    if (!r) return "";
    let e: any = (((M as any).posix as any).normalize as any)(("/" as any) + (((((r as any).split as any)("\\") as any).join as any)("/") as any));
    return ((M as any).join as any)(".", e);
  };
  (T as any).zipnamefix = function (this: any, r: any): any {
    if (!r) return "";
    let e: any = (((M as any).posix as any).normalize as any)(("/" as any) + (((((r as any).split as any)("\\") as any).join as any)("/") as any));
    return (((M as any).posix as any).join as any)(".", e);
  };
  (T as any).findLast = function (this: any, r: any, e: any): any {
    if (!((Array as any).isArray as any)(r)) throw new (TypeError as any)("arr is not array");
    let n: any = ((r as any).length as any) >>> (0 as any);
    for (let t: any = (n as any) - (1 as any); (t as any) >= (0 as any); t--) if ((e as any)((r as any)[t], t, r)) return (r as any)[t];
  };
  (T as any).sanitize = function (this: any, r: any, e: any): any {
    r = ((M as any).resolve as any)(((M as any).normalize as any)(r));
    for (var n: any = ((e as any).split as any)("/"), t: any = 0, o: any = (n as any).length; (t as any) < (o as any); t++) {
      var i: any = ((M as any).normalize as any)(((M as any).join as any)(r, ((((n as any).slice as any)(t, o) as any).join as any)((M as any).sep)));
      if ((((i as any).indexOf as any)(r) as any) === (0 as any)) return i;
    }
    return ((M as any).normalize as any)(((M as any).join as any)(r, ((M as any).basename as any)(e)));
  };
  (T as any).toBuffer = function (this: any, e: any, n: any): any {
    return ((Buffer as any).isBuffer as any)(e) ? e : e instanceof Uint8Array ? ((Buffer as any).from as any)(e) : (typeof e as any) == ("string" as any) ? (n as any)(e) : ((Buffer as any).alloc as any)(0);
  };
  (T as any).readBigUInt64LE = function (this: any, r: any, e: any): any {
    var n: any = ((Buffer as any).from as any)(((r as any).slice as any)(e, (e as any) + (8 as any)));
    return ((n as any).swap64 as any)(), (parseInt as any)(`0x${((n as any).toString as any)("hex")}`);
  };
  (T as any).fromDOS2Date = function (this: any, r: any): any {
    return new (Date as any)(((((r as any) >> (25 as any) as any) & (127 as any)) as any) + (1980 as any), ((Math as any).max as any)(((((r as any) >> (21 as any) as any) & (15 as any)) as any) - (1 as any), 0), ((Math as any).max as any)(((r as any) >> (16 as any) as any) & (31 as any), 1), ((r as any) >> (11 as any) as any) & (31 as any), ((r as any) >> (5 as any) as any) & (63 as any), (((r as any) & (31 as any)) as any) << (1 as any));
  };
  (T as any).fromDate2DOS = function (this: any, r: any): any {
    let e: any = 0,
      n: any = 0;
    return (((r as any).getFullYear as any)() as any) > (1979 as any) && (e = (((((((((r as any).getFullYear as any)() as any) - (1980 as any) as any) & (127 as any)) as any) << (9 as any) as any) | (((((r as any).getMonth as any)() as any) + (1 as any) as any) << (5 as any) as any)) as any) | (((r as any).getDate as any)() as any), n = ((((((r as any).getHours as any)() as any) << (11 as any) as any) | ((((r as any).getMinutes as any)() as any) << (5 as any) as any)) as any) | ((((r as any).getSeconds as any)() as any) >> (1 as any) as any)), ((e as any) << (16 as any) as any) | (n as any);
  };
  (T as any).isWin = Yn;
  (T as any).crcTable = Nr;
});
var Ir: any = (G as any)((ta: any, kr: any): any => {
  var Qn: any = (require as any)("path");
  (kr as any).exports = function (this: any, r: any, {
    fs: e
  }: any): any {
    var n: any = r || "",
      t: any = (i as any)(),
      o: any = null;
    function i(this: any): any {
      return {
        directory: !1,
        readonly: !1,
        hidden: !1,
        executable: !1,
        mtime: 0,
        atime: 0
      };
    }
    return n && ((e as any).existsSync as any)(n) ? (o = ((e as any).statSync as any)(n), (t as any).directory = ((o as any).isDirectory as any)(), (t as any).mtime = (o as any).mtime, (t as any).atime = (o as any).atime, (t as any).executable = (((73 as any) & ((o as any).mode as any)) as any) !== (0 as any), (t as any).readonly = (((128 as any) & ((o as any).mode as any)) as any) === (0 as any), (t as any).hidden = ((((Qn as any).basename as any)(n) as any)[0] as any) === ("." as any)) : ((console as any).warn as any)(("Invalid path: " as any) + (n as any)), {
      get directory(): any {
        return (t as any).directory;
      },
      get readOnly(): any {
        return (t as any).readonly;
      },
      get hidden(): any {
        return (t as any).hidden;
      },
      get mtime(): any {
        return (t as any).mtime;
      },
      get atime(): any {
        return (t as any).atime;
      },
      get executable(): any {
        return (t as any).executable;
      },
      decodeAttributes: function (this: any): any {},
      encodeAttributes: function (this: any): any {},
      toJSON: function (this: any): any {
        return {
          path: n,
          isDirectory: (t as any).directory,
          isReadOnly: (t as any).readonly,
          isHidden: (t as any).hidden,
          isExecutable: (t as any).executable,
          mTime: (t as any).mtime,
          aTime: (t as any).atime
        };
      },
      toString: function (this: any): any {
        return ((JSON as any).stringify as any)(((this as any).toJSON as any)(), null, "	");
      }
    };
  };
});
var Rr: any = (G as any)((oa: any, Pr: any): any => {
  (Pr as any).exports = {
    efs: !0,
    encode: (r: any): any => ((Buffer as any).from as any)(r, "utf8"),
    decode: (r: any): any => ((r as any).toString as any)("utf8")
  };
});
var ee: any = (G as any)((aa: any, Q: any): any => {
  (Q as any).exports = (Dr as any)();
  ((Q as any).exports as any).Constants = (Ue as any)();
  ((Q as any).exports as any).Errors = (he as any)();
  ((Q as any).exports as any).FileAttr = (Ir as any)();
  ((Q as any).exports as any).decoder = (Rr as any)();
});
var Or: any = (G as any)((ia: any, xr: any): any => {
  var K: any = (ee as any)(),
    w: any = (K as any).Constants;
  (xr as any).exports = function (this: any): any {
    var r: any = 20,
      e: any = 10,
      n: any = 0,
      t: any = 0,
      o: any = 0,
      i: any = 0,
      c: any = 0,
      h: any = 0,
      g: any = 0,
      E: any = 0,
      b: any = 0,
      N: any = 0,
      C: any = 0,
      s: any = 0,
      d: any = 0;
    r |= (K as any).isWin ? 2560 : 768, n |= (w as any).FLG_EFS;
    let p: any = {
        extraLen: 0
      },
      l: any = (a: any): any => (((Math as any).max as any)(0, a) as any) >>> (0 as any),
      f: any = (a: any): any => (((Math as any).max as any)(0, a) as any) & (65535 as any),
      y: any = (a: any): any => (((Math as any).max as any)(0, a) as any) & (255 as any);
    return o = ((K as any).fromDate2DOS as any)(new (Date as any)()), {
      get made(): any {
        return r;
      },
      set made(a: any) {
        r = a;
      },
      get version(): any {
        return e;
      },
      set version(a: any) {
        e = a;
      },
      get flags(): any {
        return n;
      },
      set flags(a: any) {
        n = a;
      },
      get flags_efs(): any {
        return (((n as any) & ((w as any).FLG_EFS as any)) as any) > (0 as any);
      },
      set flags_efs(a: any) {
        a ? n |= (w as any).FLG_EFS : n &= ~(w as any).FLG_EFS;
      },
      get flags_desc(): any {
        return (((n as any) & ((w as any).FLG_DESC as any)) as any) > (0 as any);
      },
      set flags_desc(a: any) {
        a ? n |= (w as any).FLG_DESC : n &= ~(w as any).FLG_DESC;
      },
      get method(): any {
        return t;
      },
      set method(a: any) {
        switch (a) {
          case (w as any).STORED:
            (this as any).version = 10;
          case (w as any).DEFLATED:
          default:
            (this as any).version = 20;
        }
        t = a;
      },
      get time(): any {
        return ((K as any).fromDOS2Date as any)((this as any).timeval);
      },
      set time(a: any) {
        (this as any).timeval = ((K as any).fromDate2DOS as any)(a);
      },
      get timeval(): any {
        return o;
      },
      set timeval(a: any) {
        o = (l as any)(a);
      },
      get timeHighByte(): any {
        return (y as any)((o as any) >>> (8 as any));
      },
      get crc(): any {
        return i;
      },
      set crc(a: any) {
        i = (l as any)(a);
      },
      get compressedSize(): any {
        return c;
      },
      set compressedSize(a: any) {
        c = (l as any)(a);
      },
      get size(): any {
        return h;
      },
      set size(a: any) {
        h = (l as any)(a);
      },
      get fileNameLength(): any {
        return g;
      },
      set fileNameLength(a: any) {
        g = a;
      },
      get extraLength(): any {
        return E;
      },
      set extraLength(a: any) {
        E = a;
      },
      get extraLocalLength(): any {
        return (p as any).extraLen;
      },
      set extraLocalLength(a: any) {
        (p as any).extraLen = a;
      },
      get commentLength(): any {
        return b;
      },
      set commentLength(a: any) {
        b = a;
      },
      get diskNumStart(): any {
        return N;
      },
      set diskNumStart(a: any) {
        N = (l as any)(a);
      },
      get inAttr(): any {
        return C;
      },
      set inAttr(a: any) {
        C = (l as any)(a);
      },
      get attr(): any {
        return s;
      },
      set attr(a: any) {
        s = (l as any)(a);
      },
      get fileAttr(): any {
        return (((s || 0) as any) >> (16 as any) as any) & (4095 as any);
      },
      get offset(): any {
        return d;
      },
      set offset(a: any) {
        d = (l as any)(a);
      },
      get encrypted(): any {
        return (((n as any) & ((w as any).FLG_ENC as any)) as any) === ((w as any).FLG_ENC as any);
      },
      get centralHeaderSize(): any {
        return ((((w as any).CENHDR as any) + (g as any) as any) + (E as any) as any) + (b as any);
      },
      get realDataOffset(): any {
        return (((d as any) + ((w as any).LOCHDR as any) as any) + ((p as any).fnameLen as any) as any) + ((p as any).extraLen as any);
      },
      get localHeader(): any {
        return p;
      },
      loadLocalHeaderFromBinary: function (this: any, a: any): any {
        var u: any = ((a as any).slice as any)(d, (d as any) + ((w as any).LOCHDR as any));
        if ((((u as any).readUInt32LE as any)(0) as any) !== ((w as any).LOCSIG as any)) throw (((K as any).Errors as any).INVALID_LOC as any)();
        (p as any).version = ((u as any).readUInt16LE as any)((w as any).LOCVER), (p as any).flags = ((u as any).readUInt16LE as any)((w as any).LOCFLG), (p as any).method = ((u as any).readUInt16LE as any)((w as any).LOCHOW), (p as any).time = ((u as any).readUInt32LE as any)((w as any).LOCTIM), (p as any).crc = ((u as any).readUInt32LE as any)((w as any).LOCCRC), (p as any).compressedSize = ((u as any).readUInt32LE as any)((w as any).LOCSIZ), (p as any).size = ((u as any).readUInt32LE as any)((w as any).LOCLEN), (p as any).fnameLen = ((u as any).readUInt16LE as any)((w as any).LOCNAM), (p as any).extraLen = ((u as any).readUInt16LE as any)((w as any).LOCEXT);
        let m: any = ((d as any) + ((w as any).LOCHDR as any) as any) + ((p as any).fnameLen as any),
          A: any = (m as any) + ((p as any).extraLen as any);
        return ((a as any).slice as any)(m, A);
      },
      loadFromBinary: function (this: any, a: any): any {
        if (((a as any).length as any) !== ((w as any).CENHDR as any) || (((a as any).readUInt32LE as any)(0) as any) !== ((w as any).CENSIG as any)) throw (((K as any).Errors as any).INVALID_CEN as any)();
        r = ((a as any).readUInt16LE as any)((w as any).CENVEM), e = ((a as any).readUInt16LE as any)((w as any).CENVER), n = ((a as any).readUInt16LE as any)((w as any).CENFLG), t = ((a as any).readUInt16LE as any)((w as any).CENHOW), o = ((a as any).readUInt32LE as any)((w as any).CENTIM), i = ((a as any).readUInt32LE as any)((w as any).CENCRC), c = ((a as any).readUInt32LE as any)((w as any).CENSIZ), h = ((a as any).readUInt32LE as any)((w as any).CENLEN), g = ((a as any).readUInt16LE as any)((w as any).CENNAM), E = ((a as any).readUInt16LE as any)((w as any).CENEXT), b = ((a as any).readUInt16LE as any)((w as any).CENCOM), N = ((a as any).readUInt16LE as any)((w as any).CENDSK), C = ((a as any).readUInt16LE as any)((w as any).CENATT), s = ((a as any).readUInt32LE as any)((w as any).CENATX), d = ((a as any).readUInt32LE as any)((w as any).CENOFF);
      },
      localHeaderToBinary: function (this: any): any {
        var a: any = ((Buffer as any).alloc as any)((w as any).LOCHDR);
        return ((a as any).writeUInt32LE as any)((w as any).LOCSIG, 0), ((a as any).writeUInt16LE as any)(e, (w as any).LOCVER), ((a as any).writeUInt16LE as any)(n, (w as any).LOCFLG), ((a as any).writeUInt16LE as any)(t, (w as any).LOCHOW), ((a as any).writeUInt32LE as any)(o, (w as any).LOCTIM), ((a as any).writeUInt32LE as any)(i, (w as any).LOCCRC), ((a as any).writeUInt32LE as any)(c, (w as any).LOCSIZ), ((a as any).writeUInt32LE as any)(h, (w as any).LOCLEN), ((a as any).writeUInt16LE as any)(g, (w as any).LOCNAM), ((a as any).writeUInt16LE as any)((p as any).extraLen, (w as any).LOCEXT), a;
      },
      centralHeaderToBinary: function (this: any): any {
        var a: any = ((Buffer as any).alloc as any)(((((w as any).CENHDR as any) + (g as any) as any) + (E as any) as any) + (b as any));
        return ((a as any).writeUInt32LE as any)((w as any).CENSIG, 0), ((a as any).writeUInt16LE as any)(r, (w as any).CENVEM), ((a as any).writeUInt16LE as any)(e, (w as any).CENVER), ((a as any).writeUInt16LE as any)(n, (w as any).CENFLG), ((a as any).writeUInt16LE as any)(t, (w as any).CENHOW), ((a as any).writeUInt32LE as any)(o, (w as any).CENTIM), ((a as any).writeUInt32LE as any)(i, (w as any).CENCRC), ((a as any).writeUInt32LE as any)(c, (w as any).CENSIZ), ((a as any).writeUInt32LE as any)(h, (w as any).CENLEN), ((a as any).writeUInt16LE as any)(g, (w as any).CENNAM), ((a as any).writeUInt16LE as any)(E, (w as any).CENEXT), ((a as any).writeUInt16LE as any)(b, (w as any).CENCOM), ((a as any).writeUInt16LE as any)(N, (w as any).CENDSK), ((a as any).writeUInt16LE as any)(C, (w as any).CENATT), ((a as any).writeUInt32LE as any)(s, (w as any).CENATX), ((a as any).writeUInt32LE as any)(d, (w as any).CENOFF), a;
      },
      toJSON: function (this: any): any {
        let a: any = function (this: any, u: any): any {
          return (u as any) + (" bytes" as any);
        };
        return {
          made: r,
          version: e,
          flags: n,
          method: ((K as any).methodToString as any)(t),
          time: (this as any).time,
          crc: ("0x" as any) + (((((i as any).toString as any)(16) as any).toUpperCase as any)() as any),
          compressedSize: (a as any)(c),
          size: (a as any)(h),
          fileNameLength: (a as any)(g),
          extraLength: (a as any)(E),
          commentLength: (a as any)(b),
          diskNumStart: N,
          inAttr: C,
          attr: s,
          offset: d,
          centralHeaderSize: (a as any)(((((w as any).CENHDR as any) + (g as any) as any) + (E as any) as any) + (b as any))
        };
      },
      toString: function (this: any): any {
        return ((JSON as any).stringify as any)(((this as any).toJSON as any)(), null, "	");
      }
    };
  };
});
var Tr: any = (G as any)((sa: any, _r: any): any => {
  var re: any = (ee as any)(),
    R: any = (re as any).Constants;
  (_r as any).exports = function (this: any): any {
    var r: any = 0,
      e: any = 0,
      n: any = 0,
      t: any = 0,
      o: any = 0;
    return {
      get diskEntries(): any {
        return r;
      },
      set diskEntries(i: any) {
        r = e = i;
      },
      get totalEntries(): any {
        return e;
      },
      set totalEntries(i: any) {
        e = r = i;
      },
      get size(): any {
        return n;
      },
      set size(i: any) {
        n = i;
      },
      get offset(): any {
        return t;
      },
      set offset(i: any) {
        t = i;
      },
      get commentLength(): any {
        return o;
      },
      set commentLength(i: any) {
        o = i;
      },
      get mainHeaderSize(): any {
        return ((R as any).ENDHDR as any) + (o as any);
      },
      loadFromBinary: function (this: any, i: any): any {
        if ((((i as any).length as any) !== ((R as any).ENDHDR as any) || (((i as any).readUInt32LE as any)(0) as any) !== ((R as any).ENDSIG as any)) && (((i as any).length as any) < ((R as any).ZIP64HDR as any) || (((i as any).readUInt32LE as any)(0) as any) !== ((R as any).ZIP64SIG as any))) throw (((re as any).Errors as any).INVALID_END as any)();
        (((i as any).readUInt32LE as any)(0) as any) === ((R as any).ENDSIG as any) ? (r = ((i as any).readUInt16LE as any)((R as any).ENDSUB), e = ((i as any).readUInt16LE as any)((R as any).ENDTOT), n = ((i as any).readUInt32LE as any)((R as any).ENDSIZ), t = ((i as any).readUInt32LE as any)((R as any).ENDOFF), o = ((i as any).readUInt16LE as any)((R as any).ENDCOM)) : (r = ((re as any).readBigUInt64LE as any)(i, (R as any).ZIP64SUB), e = ((re as any).readBigUInt64LE as any)(i, (R as any).ZIP64TOT), n = ((re as any).readBigUInt64LE as any)(i, (R as any).ZIP64SIZE), t = ((re as any).readBigUInt64LE as any)(i, (R as any).ZIP64OFF), o = 0);
      },
      toBinary: function (this: any): any {
        var i: any = ((Buffer as any).alloc as any)(((R as any).ENDHDR as any) + (o as any));
        return ((i as any).writeUInt32LE as any)((R as any).ENDSIG, 0), ((i as any).writeUInt32LE as any)(0, 4), ((i as any).writeUInt16LE as any)(r, (R as any).ENDSUB), ((i as any).writeUInt16LE as any)(e, (R as any).ENDTOT), ((i as any).writeUInt32LE as any)(n, (R as any).ENDSIZ), ((i as any).writeUInt32LE as any)(t, (R as any).ENDOFF), ((i as any).writeUInt16LE as any)(o, (R as any).ENDCOM), ((i as any).fill as any)(" ", (R as any).ENDHDR), i;
      },
      toJSON: function (this: any): any {
        let i: any = function (this: any, c: any, h: any): any {
          let g: any = ((((c as any).toString as any)(16) as any).toUpperCase as any)();
          for (; ((g as any).length as any) < (h as any);) g = ("0" as any) + (g as any);
          return ("0x" as any) + (g as any);
        };
        return {
          diskEntries: r,
          totalEntries: e,
          size: (n as any) + (" bytes" as any),
          offset: (i as any)(t, 4),
          commentLength: o
        };
      },
      toString: function (this: any): any {
        return ((JSON as any).stringify as any)(((this as any).toJSON as any)(), null, "	");
      }
    };
  };
});
var He: any = (G as any)((Be: any): any => {
  (Be as any).EntryHeader = (Or as any)();
  (Be as any).MainHeader = (Tr as any)();
});
var Fr: any = (G as any)((la: any, Lr: any): any => {
  (Lr as any).exports = function (this: any, r: any): any {
    var e: any = (require as any)("zlib"),
      n: any = {
        chunkSize: (((parseInt as any)(((r as any).length as any) / (1024 as any)) as any) + (1 as any) as any) * (1024 as any)
      };
    return {
      deflate: function (this: any): any {
        return ((e as any).deflateRawSync as any)(r, n);
      },
      deflateAsync: function (this: any, t: any): any {
        var o: any = ((e as any).createDeflateRaw as any)(n),
          i: any = [],
          c: any = 0;
        ((o as any).on as any)("data", function (this: any, h: any): any {
          ((i as any).push as any)(h), c += (h as any).length;
        }), ((o as any).on as any)("end", function (this: any): any {
          var h: any = ((Buffer as any).alloc as any)(c),
            g: any = 0;
          ((h as any).fill as any)(0);
          for (var E: any = 0; (E as any) < ((i as any).length as any); E++) {
            var b: any = (i as any)[E];
            ((b as any).copy as any)(h, g), g += (b as any).length;
          }
          t && (t as any)(h);
        }), ((o as any).end as any)(r);
      }
    };
  };
});
var Ur: any = (G as any)((ca: any, Mr: any): any => {
  var et: any = +(((((process as any).versions ? ((process as any).versions as any).node : "") as any).split as any)(".") as any)[0] || 0;
  (Mr as any).exports = function (this: any, r: any, e: any): any {
    var n: any = (require as any)("zlib");
    let t: any = (et as any) >= (15 as any) && (e as any) > (0 as any) ? {
      maxOutputLength: e
    } : {};
    return {
      inflate: function (this: any): any {
        return ((n as any).inflateRawSync as any)(r, t);
      },
      inflateAsync: function (this: any, o: any): any {
        var i: any = ((n as any).createInflateRaw as any)(t),
          c: any = [],
          h: any = 0;
        ((i as any).on as any)("data", function (this: any, g: any): any {
          ((c as any).push as any)(g), h += (g as any).length;
        }), ((i as any).on as any)("end", function (this: any): any {
          var g: any = ((Buffer as any).alloc as any)(h),
            E: any = 0;
          ((g as any).fill as any)(0);
          for (var b: any = 0; (b as any) < ((c as any).length as any); b++) {
            var N: any = (c as any)[b];
            ((N as any).copy as any)(g, E), E += (N as any).length;
          }
          o && (o as any)(g);
        }), ((i as any).end as any)(r);
      }
    };
  };
});
var Vr: any = (G as any)((ua: any, jr: any): any => {
  "use strict";

  var {
      randomFillSync: Br
    }: any = (require as any)("crypto"),
    rt: any = (he as any)(),
    nt: any = ((new (Uint32Array as any)(256) as any).map as any)((r: any, e: any): any => {
      for (let n: any = 0; (n as any) < (8 as any); n++) (((e as any) & (1 as any)) as any) !== (0 as any) ? e = ((e as any) >>> (1 as any) as any) ^ (3988292384 as any) : e >>>= 1;
      return (e as any) >>> (0 as any);
    }),
    Gr: any = (r: any, e: any): any => (((Math as any).imul as any)(r, e) as any) >>> (0 as any),
    Hr: any = (r: any, e: any): any => ((nt as any)[(((r as any) ^ (e as any)) as any) & (255 as any)] as any) ^ ((r as any) >>> (8 as any) as any),
    se: any = (): any => (typeof Br as any) == ("function" as any) ? (Br as any)(((Buffer as any).alloc as any)(12)) : ((se as any).node as any)();
  (se as any).node = (): any => {
    let r: any = ((Buffer as any).alloc as any)(12),
      e: any = (r as any).length;
    for (let n: any = 0; (n as any) < (e as any); n++) (r as any)[n] = ((((Math as any).random as any)() as any) * (256 as any) as any) & (255 as any);
    return r;
  };
  var Ee: any = {
    genSalt: se
  };
  function ge(this: any, r: any): any {
    let e: any = ((Buffer as any).isBuffer as any)(r) ? r : ((Buffer as any).from as any)(r);
    (this as any).keys = new (Uint32Array as any)([305419896, 591751049, 878082192]);
    for (let n: any = 0; (n as any) < ((e as any).length as any); n++) ((this as any).updateKeys as any)((e as any)[n]);
  }
  ((ge as any).prototype as any).updateKeys = function (this: any, r: any): any {
    let e: any = (this as any).keys;
    return (e as any)[0] = (Hr as any)((e as any)[0], r), (e as any)[1] += ((e as any)[0] as any) & (255 as any), (e as any)[1] = ((Gr as any)((e as any)[1], 134775813) as any) + (1 as any), (e as any)[2] = (Hr as any)((e as any)[2], ((e as any)[1] as any) >>> (24 as any)), r;
  };
  ((ge as any).prototype as any).next = function (this: any): any {
    let r: any = (((((this as any).keys as any)[2] as any) | (2 as any)) as any) >>> (0 as any);
    return (((Gr as any)(r, (r as any) ^ (1 as any)) as any) >> (8 as any) as any) & (255 as any);
  };
  function tt(this: any, r: any): any {
    let e: any = new (ge as any)(r);
    return function (this: any, n: any): any {
      let t: any = ((Buffer as any).alloc as any)((n as any).length),
        o: any = 0;
      for (let i of n) (t as any)[o++] = ((e as any).updateKeys as any)((i as any) ^ (((e as any).next as any)() as any));
      return t;
    };
  }
  function ot(this: any, r: any): any {
    let e: any = new (ge as any)(r);
    return function (this: any, n: any, t: any, o: any = 0): any {
      t || (t = ((Buffer as any).alloc as any)((n as any).length));
      for (let i of n) {
        let c: any = ((e as any).next as any)();
        (t as any)[o++] = (i as any) ^ (c as any), ((e as any).updateKeys as any)(i);
      }
      return t;
    };
  }
  function at(this: any, r: any, e: any, n: any): any {
    if (!r || !((Buffer as any).isBuffer as any)(r) || ((r as any).length as any) < (12 as any)) return ((Buffer as any).alloc as any)(0);
    let t: any = (tt as any)(n),
      o: any = (t as any)(((r as any).slice as any)(0, 12)),
      i: any = ((((e as any).flags as any) & (8 as any)) as any) === (8 as any) ? (e as any).timeHighByte : ((e as any).crc as any) >>> (24 as any);
    if (((o as any)[11] as any) !== (i as any)) throw ((rt as any).WRONG_PASSWORD as any)();
    return (t as any)(((r as any).slice as any)(12));
  }
  function it(this: any, r: any): any {
    ((Buffer as any).isBuffer as any)(r) && ((r as any).length as any) >= (12 as any) ? (Ee as any).genSalt = function (this: any): any {
      return ((r as any).slice as any)(0, 12);
    } : (r as any) === ("node" as any) ? (Ee as any).genSalt = (se as any).node : (Ee as any).genSalt = se;
  }
  function st(this: any, r: any, e: any, n: any, t: any = !1): any {
    (r as any) == (null as any) && (r = ((Buffer as any).alloc as any)(0)), ((Buffer as any).isBuffer as any)(r) || (r = ((Buffer as any).from as any)(((r as any).toString as any)()));
    let o: any = (ot as any)(n),
      i: any = ((Ee as any).genSalt as any)();
    (i as any)[11] = (((e as any).crc as any) >>> (24 as any) as any) & (255 as any), t && ((i as any)[10] = (((e as any).crc as any) >>> (16 as any) as any) & (255 as any));
    let c: any = ((Buffer as any).alloc as any)(((r as any).length as any) + (12 as any));
    return (o as any)(i, c), (o as any)(r, c, 12);
  }
  (jr as any).exports = {
    decrypt: at,
    encrypt: st,
    _salter: it
  };
});
var zr: any = (G as any)((we: any): any => {
  (we as any).Deflater = (Fr as any)();
  (we as any).Inflater = (Ur as any)();
  (we as any).ZipCrypto = (Vr as any)();
});
var je: any = (G as any)((ma: any, qr: any): any => {
  var k: any = (ee as any)(),
    dt: any = (He as any)(),
    L: any = (k as any).Constants,
    Ge: any = (zr as any)();
  (qr as any).exports = function (this: any, r: any, e: any): any {
    var n: any = new ((dt as any).EntryHeader as any)(),
      t: any = ((Buffer as any).alloc as any)(0),
      o: any = ((Buffer as any).alloc as any)(0),
      i: any = !1,
      c: any = null,
      h: any = ((Buffer as any).alloc as any)(0),
      g: any = ((Buffer as any).alloc as any)(0),
      E: any = !0;
    let b: any = r,
      N: any = (typeof (b as any).decoder as any) == ("object" as any) ? (b as any).decoder : (k as any).decoder;
    E = ((N as any).hasOwnProperty as any)("efs") ? (N as any).efs : !1;
    function C(this: any): any {
      return !e || !(e instanceof Uint8Array) ? ((Buffer as any).alloc as any)(0) : (g = ((n as any).loadLocalHeaderFromBinary as any)(e), ((e as any).slice as any)((n as any).realDataOffset, ((n as any).realDataOffset as any) + ((n as any).compressedSize as any)));
    }
    function s(this: any, a: any): any {
      if ((n as any).flags_desc) {
        let u: any = {},
          m: any = ((n as any).realDataOffset as any) + ((n as any).compressedSize as any);
        if ((((e as any).readUInt32LE as any)(m) as any) == ((L as any).LOCSIG as any) || (((e as any).readUInt32LE as any)(m) as any) == ((L as any).CENSIG as any)) throw (((k as any).Errors as any).DESCRIPTOR_NOT_EXIST as any)();
        if ((((e as any).readUInt32LE as any)(m) as any) == ((L as any).EXTSIG as any)) (u as any).crc = ((e as any).readUInt32LE as any)((m as any) + ((L as any).EXTCRC as any)), (u as any).compressedSize = ((e as any).readUInt32LE as any)((m as any) + ((L as any).EXTSIZ as any)), (u as any).size = ((e as any).readUInt32LE as any)((m as any) + ((L as any).EXTLEN as any));else if ((((e as any).readUInt16LE as any)((m as any) + (12 as any)) as any) === (19280 as any)) (u as any).crc = ((e as any).readUInt32LE as any)(((m as any) + ((L as any).EXTCRC as any) as any) - (4 as any)), (u as any).compressedSize = ((e as any).readUInt32LE as any)(((m as any) + ((L as any).EXTSIZ as any) as any) - (4 as any)), (u as any).size = ((e as any).readUInt32LE as any)(((m as any) + ((L as any).EXTLEN as any) as any) - (4 as any));else throw (((k as any).Errors as any).DESCRIPTOR_UNKNOWN as any)();
        if (((u as any).compressedSize as any) !== ((n as any).compressedSize as any) || ((u as any).size as any) !== ((n as any).size as any) || ((u as any).crc as any) !== ((n as any).crc as any)) throw (((k as any).Errors as any).DESCRIPTOR_FAULTY as any)();
        if ((((k as any).crc32 as any)(a) as any) !== ((u as any).crc as any)) return !1;
      } else if ((((k as any).crc32 as any)(a) as any) !== (((n as any).localHeader as any).crc as any)) return !1;
      return !0;
    }
    function d(this: any, a: any, u: any, m: any): any {
      if ((typeof u as any) > ("u" as any) && (typeof a as any) == ("string" as any) && (m = a, a = void 0), i) return a && u && (u as any)(((Buffer as any).alloc as any)(0), (((k as any).Errors as any).DIRECTORY_CONTENT_ERROR as any)()), ((Buffer as any).alloc as any)(0);
      var A: any = (C as any)();
      if (((A as any).length as any) === (0 as any)) return a && u && (u as any)(A), A;
      if ((n as any).encrypted) {
        if ((typeof m as any) != ("string" as any) && !((Buffer as any).isBuffer as any)(m)) throw (((k as any).Errors as any).INVALID_PASS_PARAM as any)();
        A = (((Ge as any).ZipCrypto as any).decrypt as any)(A, n, m);
      }
      var S: any = ((Buffer as any).alloc as any)((n as any).size);
      switch ((n as any).method) {
        case ((k as any).Constants as any).STORED:
          if (((A as any).copy as any)(S), (s as any)(S)) return a && u && (u as any)(S), S;
          throw a && u && (u as any)(S, (((k as any).Errors as any).BAD_CRC as any)()), (((k as any).Errors as any).BAD_CRC as any)();
        case ((k as any).Constants as any).DEFLATED:
          var I: any = new ((Ge as any).Inflater as any)(A, (n as any).size);
          if (a) ((I as any).inflateAsync as any)(function (this: any, D: any): any {
            ((D as any).copy as any)(D, 0), u && ((s as any)(D) ? (u as any)(D) : (u as any)(D, (((k as any).Errors as any).BAD_CRC as any)()));
          });else {
            if (((((I as any).inflate as any)(S) as any).copy as any)(S, 0), !(s as any)(S)) throw (((k as any).Errors as any).BAD_CRC as any)(`"${((N as any).decode as any)(t)}"`);
            return S;
          }
          break;
        default:
          throw a && u && (u as any)(((Buffer as any).alloc as any)(0), (((k as any).Errors as any).UNKNOWN_METHOD as any)()), (((k as any).Errors as any).UNKNOWN_METHOD as any)();
      }
    }
    function p(this: any, a: any, u: any): any {
      if ((!c || !(c as any).length) && ((Buffer as any).isBuffer as any)(e)) return a && u && (u as any)((C as any)()), (C as any)();
      if ((c as any).length && !i) {
        var m: any;
        switch ((n as any).method) {
          case ((k as any).Constants as any).STORED:
            return (n as any).compressedSize = (n as any).size, m = ((Buffer as any).alloc as any)((c as any).length), ((c as any).copy as any)(m), a && u && (u as any)(m), m;
          default:
          case ((k as any).Constants as any).DEFLATED:
            var A: any = new ((Ge as any).Deflater as any)(c);
            if (a) ((A as any).deflateAsync as any)(function (this: any, I: any): any {
              m = ((Buffer as any).alloc as any)((I as any).length), (n as any).compressedSize = (I as any).length, ((I as any).copy as any)(m), u && (u as any)(m);
            });else {
              var S: any = ((A as any).deflate as any)();
              return (n as any).compressedSize = (S as any).length, S;
            }
            A = null;
            break;
        }
      } else if (a && u) (u as any)(((Buffer as any).alloc as any)(0));else return ((Buffer as any).alloc as any)(0);
    }
    function l(this: any, a: any, u: any): any {
      return ((((a as any).readUInt32LE as any)((u as any) + (4 as any)) as any) << (4 as any) as any) + (((a as any).readUInt32LE as any)(u) as any);
    }
    function f(this: any, a: any): any {
      try {
        for (var u: any = 0, m: any, A: any, S: any; ((u as any) + (4 as any) as any) < ((a as any).length as any);) m = ((a as any).readUInt16LE as any)(u), u += 2, A = ((a as any).readUInt16LE as any)(u), u += 2, S = ((a as any).slice as any)(u, (u as any) + (A as any)), u += A, ((L as any).ID_ZIP64 as any) === (m as any) && (y as any)(S);
      } catch {
        throw (((k as any).Errors as any).EXTRA_FIELD_PARSE_ERROR as any)();
      }
    }
    function y(this: any, a: any): any {
      var u: any, m: any, A: any, S: any;
      ((a as any).length as any) >= ((L as any).EF_ZIP64_SCOMP as any) && (u = (l as any)(a, (L as any).EF_ZIP64_SUNCOMP), ((n as any).size as any) === ((L as any).EF_ZIP64_OR_32 as any) && ((n as any).size = u)), ((a as any).length as any) >= ((L as any).EF_ZIP64_RHO as any) && (m = (l as any)(a, (L as any).EF_ZIP64_SCOMP), ((n as any).compressedSize as any) === ((L as any).EF_ZIP64_OR_32 as any) && ((n as any).compressedSize = m)), ((a as any).length as any) >= ((L as any).EF_ZIP64_DSN as any) && (A = (l as any)(a, (L as any).EF_ZIP64_RHO), ((n as any).offset as any) === ((L as any).EF_ZIP64_OR_32 as any) && ((n as any).offset = A)), ((a as any).length as any) >= (((L as any).EF_ZIP64_DSN as any) + (4 as any) as any) && (S = ((a as any).readUInt32LE as any)((L as any).EF_ZIP64_DSN), ((n as any).diskNumStart as any) === ((L as any).EF_ZIP64_OR_16 as any) && ((n as any).diskNumStart = S));
    }
    return {
      get entryName(): any {
        return ((N as any).decode as any)(t);
      },
      get rawEntryName(): any {
        return t;
      },
      set entryName(a: any) {
        t = ((k as any).toBuffer as any)(a, (N as any).encode);
        var u: any = (t as any)[((t as any).length as any) - (1 as any)];
        i = (u as any) === (47 as any) || (u as any) === (92 as any), (n as any).fileNameLength = (t as any).length;
      },
      get efs(): any {
        return (typeof E as any) == ("function" as any) ? (E as any)((this as any).entryName) : E;
      },
      get extra(): any {
        return h;
      },
      set extra(a: any) {
        h = a, (n as any).extraLength = (a as any).length, (f as any)(a);
      },
      get comment(): any {
        return ((N as any).decode as any)(o);
      },
      set comment(a: any) {
        if (o = ((k as any).toBuffer as any)(a, (N as any).encode), (n as any).commentLength = (o as any).length, ((o as any).length as any) > (65535 as any)) throw (((k as any).Errors as any).COMMENT_TOO_LONG as any)();
      },
      get name(): any {
        var a: any = ((N as any).decode as any)(t);
        return i ? ((((((a as any).substr as any)(((a as any).length as any) - (1 as any)) as any).split as any)("/") as any).pop as any)() : ((((a as any).split as any)("/") as any).pop as any)();
      },
      get isDirectory(): any {
        return i;
      },
      getCompressedData: function (this: any): any {
        return (p as any)(!1, null);
      },
      getCompressedDataAsync: function (this: any, a: any): any {
        (p as any)(!0, a);
      },
      setData: function (this: any, a: any): any {
        c = ((k as any).toBuffer as any)(a, ((k as any).decoder as any).encode), !i && (c as any).length ? ((n as any).size = (c as any).length, (n as any).method = ((k as any).Constants as any).DEFLATED, (n as any).crc = ((k as any).crc32 as any)(a), (n as any).changed = !0) : (n as any).method = ((k as any).Constants as any).STORED;
      },
      getData: function (this: any, a: any): any {
        return (n as any).changed ? c : (d as any)(!1, null, a);
      },
      getDataAsync: function (this: any, a: any, u: any): any {
        (n as any).changed ? (a as any)(c) : (d as any)(!0, a, u);
      },
      set attr(a: any) {
        (n as any).attr = a;
      },
      get attr(): any {
        return (n as any).attr;
      },
      set header(a: any) {
        ((n as any).loadFromBinary as any)(a);
      },
      get header(): any {
        return n;
      },
      packCentralHeader: function (this: any): any {
        (n as any).flags_efs = (this as any).efs, (n as any).extraLength = (h as any).length;
        var a: any = ((n as any).centralHeaderToBinary as any)(),
          u: any = ((k as any).Constants as any).CENHDR;
        return ((t as any).copy as any)(a, u), u += (t as any).length, ((h as any).copy as any)(a, u), u += (n as any).extraLength, ((o as any).copy as any)(a, u), a;
      },
      packLocalHeader: function (this: any): any {
        let a: any = 0;
        (n as any).flags_efs = (this as any).efs, (n as any).extraLocalLength = (g as any).length;
        let u: any = ((n as any).localHeaderToBinary as any)(),
          m: any = ((Buffer as any).alloc as any)((((u as any).length as any) + ((t as any).length as any) as any) + ((n as any).extraLocalLength as any));
        return ((u as any).copy as any)(m, a), a += (u as any).length, ((t as any).copy as any)(m, a), a += (t as any).length, ((g as any).copy as any)(m, a), a += (g as any).length, m;
      },
      toJSON: function (this: any): any {
        let a: any = function (this: any, u: any): any {
          return (("<" as any) + ((u && ((u as any).length as any) + (" bytes buffer" as any) || "null") as any) as any) + (">" as any);
        };
        return {
          entryName: (this as any).entryName,
          name: (this as any).name,
          comment: (this as any).comment,
          isDirectory: (this as any).isDirectory,
          header: ((n as any).toJSON as any)(),
          compressedData: (a as any)(e),
          data: (a as any)(c)
        };
      },
      toString: function (this: any): any {
        return ((JSON as any).stringify as any)(((this as any).toJSON as any)(), null, "	");
      }
    };
  };
});
var Xr: any = (G as any)((pa: any, $r: any): any => {
  var Zr: any = (je as any)(),
    lt: any = (He as any)(),
    H: any = (ee as any)();
  ($r as any).exports = function (this: any, r: any, e: any): any {
    var n: any = [],
      t: any = {},
      o: any = ((Buffer as any).alloc as any)(0),
      i: any = new ((lt as any).MainHeader as any)(),
      c: any = !1,
      h: any = null;
    let g: any = new (Set as any)(),
      E: any = e,
      {
        noSort: b,
        decoder: N
      }: any = E;
    r ? (d as any)((E as any).readEntries) : c = !0;
    function C(this: any): any {
      let l: any = new (Set as any)();
      for (let f of ((Object as any).keys as any)(t)) {
        let y: any = ((f as any).split as any)("/");
        if (((y as any).pop as any)(), !!(y as any).length) for (let a: any = 0; (a as any) < ((y as any).length as any); a++) {
          let u: any = (((((y as any).slice as any)(0, (a as any) + (1 as any)) as any).join as any)("/") as any) + ("/" as any);
          ((l as any).add as any)(u);
        }
      }
      for (let f of l) if (!(f in t)) {
        let y: any = new (Zr as any)(E);
        (y as any).entryName = f, (y as any).attr = 16, (y as any).temporary = !0, ((n as any).push as any)(y), (t as any)[(y as any).entryName] = y, ((g as any).add as any)(y);
      }
    }
    function s(this: any): any {
      if (c = !0, t = {}, ((i as any).diskEntries as any) > ((((r as any).length as any) - ((i as any).offset as any) as any) / (((H as any).Constants as any).CENHDR as any) as any)) throw (((H as any).Errors as any).DISK_ENTRY_TOO_LARGE as any)();
      n = new (Array as any)((i as any).diskEntries);
      for (var l: any = (i as any).offset, f: any = 0; (f as any) < ((n as any).length as any); f++) {
        var y: any = l,
          a: any = new (Zr as any)(E, r);
        (a as any).header = ((r as any).slice as any)(y, y += ((H as any).Constants as any).CENHDR), (a as any).entryName = ((r as any).slice as any)(y, y += ((a as any).header as any).fileNameLength), ((a as any).header as any).extraLength && ((a as any).extra = ((r as any).slice as any)(y, y += ((a as any).header as any).extraLength)), ((a as any).header as any).commentLength && ((a as any).comment = ((r as any).slice as any)(y, (y as any) + (((a as any).header as any).commentLength as any))), l += ((a as any).header as any).centralHeaderSize, (n as any)[f] = a, (t as any)[(a as any).entryName] = a;
      }
      ((g as any).clear as any)(), (C as any)();
    }
    function d(this: any, l: any): any {
      var f: any = ((r as any).length as any) - (((H as any).Constants as any).ENDHDR as any),
        y: any = ((Math as any).max as any)(0, (f as any) - (65535 as any)),
        a: any = y,
        u: any = (r as any).length,
        m: any = -1,
        A: any = 0;
      for ((typeof (E as any).trailingSpace as any) == ("boolean" as any) && (E as any).trailingSpace && (y = 0), f; (f as any) >= (a as any); f--) if (((r as any)[f] as any) === (80 as any)) {
        if ((((r as any).readUInt32LE as any)(f) as any) === (((H as any).Constants as any).ENDSIG as any)) {
          m = f, A = f, u = (f as any) + (((H as any).Constants as any).ENDHDR as any), a = (f as any) - (((H as any).Constants as any).END64HDR as any);
          continue;
        }
        if ((((r as any).readUInt32LE as any)(f) as any) === (((H as any).Constants as any).END64SIG as any)) {
          a = y;
          continue;
        }
        if ((((r as any).readUInt32LE as any)(f) as any) === (((H as any).Constants as any).ZIP64SIG as any)) {
          m = f, u = ((f as any) + (((H as any).readBigUInt64LE as any)(r, (f as any) + (((H as any).Constants as any).ZIP64SIZE as any)) as any) as any) + (((H as any).Constants as any).ZIP64LEAD as any);
          break;
        }
      }
      if ((m as any) == (-1 as any)) throw (((H as any).Errors as any).INVALID_FORMAT as any)();
      ((i as any).loadFromBinary as any)(((r as any).slice as any)(m, u)), (i as any).commentLength && (o = ((r as any).slice as any)((A as any) + (((H as any).Constants as any).ENDHDR as any))), l && (s as any)();
    }
    function p(this: any): any {
      ((n as any).length as any) > (1 as any) && !b && ((n as any).sort as any)((l: any, f: any): any => (((((l as any).entryName as any).toLowerCase as any)() as any).localeCompare as any)((((f as any).entryName as any).toLowerCase as any)()));
    }
    return {
      get entries(): any {
        return c || (s as any)(), ((n as any).filter as any)((l: any): any => !((g as any).has as any)(l));
      },
      get comment(): any {
        return ((N as any).decode as any)(o);
      },
      set comment(l: any) {
        o = ((H as any).toBuffer as any)(l, (N as any).encode), (i as any).commentLength = (o as any).length;
      },
      getEntryCount: function (this: any): any {
        return c ? (n as any).length : (i as any).diskEntries;
      },
      forEach: function (this: any, l: any): any {
        (((this as any).entries as any).forEach as any)(l);
      },
      getEntry: function (this: any, l: any): any {
        return c || (s as any)(), (t as any)[l] || null;
      },
      setEntry: function (this: any, l: any): any {
        c || (s as any)(), ((n as any).push as any)(l), (t as any)[(l as any).entryName] = l, (i as any).totalEntries = (n as any).length;
      },
      deleteFile: function (this: any, l: any, f: any = !0): any {
        c || (s as any)();
        let y: any = (t as any)[l];
        ((((((this as any).getEntryChildren as any)(y, f) as any).map as any)((u: any): any => (u as any).entryName) as any).forEach as any)((this as any).deleteEntry);
      },
      deleteEntry: function (this: any, l: any): any {
        c || (s as any)();
        let f: any = (t as any)[l],
          y: any = ((n as any).indexOf as any)(f);
        (y as any) >= (0 as any) && (((n as any).splice as any)(y, 1), delete (t as any)[l], (i as any).totalEntries = (n as any).length);
      },
      getEntryChildren: function (this: any, l: any, f: any = !0): any {
        if (c || (s as any)(), (typeof l as any) == ("object" as any)) if ((l as any).isDirectory && f) {
          let y: any = [],
            a: any = (l as any).entryName;
          for (let u of n) (((u as any).entryName as any).startsWith as any)(a) && ((y as any).push as any)(u);
          return y;
        } else return [l];
        return [];
      },
      getChildCount: function (this: any, l: any): any {
        if (l && (l as any).isDirectory) {
          let f: any = ((this as any).getEntryChildren as any)(l);
          return ((f as any).includes as any)(l) ? ((f as any).length as any) - (1 as any) : (f as any).length;
        }
        return 0;
      },
      compressToBuffer: function (this: any): any {
        c || (s as any)(), (p as any)();
        let l: any = [],
          f: any = [],
          y: any = 0,
          a: any = 0;
        (i as any).size = 0, (i as any).offset = 0;
        let u: any = 0;
        for (let S of (this as any).entries) {
          let I: any = ((S as any).getCompressedData as any)();
          ((S as any).header as any).offset = a;
          let D: any = ((S as any).packLocalHeader as any)(),
            B: any = ((D as any).length as any) + ((I as any).length as any);
          a += B, ((l as any).push as any)(D), ((l as any).push as any)(I);
          let P: any = ((S as any).packCentralHeader as any)();
          ((f as any).push as any)(P), (i as any).size += (P as any).length, y += (B as any) + ((P as any).length as any), u++;
        }
        y += (i as any).mainHeaderSize, (i as any).offset = a, (i as any).totalEntries = u, a = 0;
        let m: any = ((Buffer as any).alloc as any)(y);
        for (let S of l) ((S as any).copy as any)(m, a), a += (S as any).length;
        for (let S of f) ((S as any).copy as any)(m, a), a += (S as any).length;
        let A: any = ((i as any).toBinary as any)();
        return o && ((o as any).copy as any)(A, ((H as any).Constants as any).ENDHDR), ((A as any).copy as any)(m, a), r = m, c = !1, m;
      },
      toAsyncBuffer: function (this: any, l: any, f: any, y: any, a: any): any {
        try {
          c || (s as any)(), (p as any)();
          let u: any = [],
            m: any = [],
            A: any = 0,
            S: any = 0,
            I: any = 0;
          (i as any).size = 0, (i as any).offset = 0;
          let D: any = function (this: any, B: any): any {
            if (((B as any).length as any) > (0 as any)) {
              let P: any = ((B as any).shift as any)(),
                $: any = ((P as any).entryName as any) + ((((P as any).extra as any).toString as any)() as any);
              y && (y as any)($), ((P as any).getCompressedDataAsync as any)(function (this: any, j: any): any {
                a && (a as any)($), ((P as any).header as any).offset = S;
                let le: any = ((P as any).packLocalHeader as any)(),
                  Qe: any = ((le as any).length as any) + ((j as any).length as any);
                S += Qe, ((u as any).push as any)(le), ((u as any).push as any)(j);
                let ke: any = ((P as any).packCentralHeader as any)();
                ((m as any).push as any)(ke), (i as any).size += (ke as any).length, A += (Qe as any) + ((ke as any).length as any), I++, (D as any)(B);
              });
            } else {
              A += (i as any).mainHeaderSize, (i as any).offset = S, (i as any).totalEntries = I, S = 0;
              let P: any = ((Buffer as any).alloc as any)(A);
              ((u as any).forEach as any)(function (this: any, j: any): any {
                ((j as any).copy as any)(P, S), S += (j as any).length;
              }), ((m as any).forEach as any)(function (this: any, j: any): any {
                ((j as any).copy as any)(P, S), S += (j as any).length;
              });
              let $: any = ((i as any).toBinary as any)();
              o && ((o as any).copy as any)($, ((H as any).Constants as any).ENDHDR), (($ as any).copy as any)(P, S), r = P, c = !1, (l as any)(P);
            }
          };
          (D as any)(((Array as any).from as any)((this as any).entries));
        } catch (u: any) {
          (f as any)(u);
        }
      }
    };
  };
});
var Jr: any = (G as any)((ya: any, Wr: any): any => {
  var x: any = (ee as any)(),
    F: any = (require as any)("path"),
    ct: any = (je as any)(),
    ut: any = (Xr as any)(),
    Y: any = (...r: any): any => ((x as any).findLast as any)(r, (e: any): any => (typeof e as any) == ("boolean" as any)),
    Kr: any = (...r: any): any => ((x as any).findLast as any)(r, (e: any): any => (typeof e as any) == ("string" as any)),
    ft: any = (...r: any): any => ((x as any).findLast as any)(r, (e: any): any => (typeof e as any) == ("function" as any)),
    mt: any = {
      noSort: !1,
      readEntries: !1,
      method: ((x as any).Constants as any).NONE,
      fs: null
    };
  (Wr as any).exports = function (this: any, r: any, e: any): any {
    let n: any = null,
      t: any = ((Object as any).assign as any)(((Object as any).create as any)(null), mt);
    r && (typeof r as any) == ("object" as any) && (r instanceof Uint8Array || (((Object as any).assign as any)(t, r), r = (t as any).input ? (t as any).input : void 0, (t as any).input && delete (t as any).input), ((Buffer as any).isBuffer as any)(r) && (n = r, (t as any).method = ((x as any).Constants as any).BUFFER, r = void 0)), ((Object as any).assign as any)(t, e);
    let o: any = new (x as any)(t);
    if (((typeof (t as any).decoder as any) != ("object" as any) || (typeof ((t as any).decoder as any).encode as any) != ("function" as any) || (typeof ((t as any).decoder as any).decode as any) != ("function" as any)) && ((t as any).decoder = (x as any).decoder), r && (typeof r as any) == ("string" as any)) if ((((o as any).fs as any).existsSync as any)(r)) (t as any).method = ((x as any).Constants as any).FILE, (t as any).filename = r, n = (((o as any).fs as any).readFileSync as any)(r);else throw (((x as any).Errors as any).INVALID_FILENAME as any)();
    let i: any = new (ut as any)(n, t),
      {
        canonical: c,
        sanitize: h,
        zipnamefix: g
      }: any = x;
    function E(this: any, s: any): any {
      if (s && i) {
        var d: any;
        if ((typeof s as any) == ("string" as any) && (d = ((i as any).getEntry as any)((((F as any).posix as any).normalize as any)(s))), (typeof s as any) == ("object" as any) && (typeof (s as any).entryName as any) < ("u" as any) && (typeof (s as any).header as any) < ("u" as any) && (d = ((i as any).getEntry as any)((s as any).entryName)), d) return d;
      }
      return null;
    }
    function b(this: any, s: any): any {
      let {
        join: d,
        normalize: p,
        sep: l
      }: any = (F as any).posix;
      return (d as any)(".", (p as any)(((l as any) + (((((s as any).split as any)("\\") as any).join as any)(l) as any) as any) + (l as any)));
    }
    function N(this: any, s: any): any {
      return s instanceof RegExp ? (function (this: any, d: any): any {
        return function (this: any, p: any): any {
          return ((d as any).test as any)(p);
        };
      } as any)(s) : (typeof s as any) != ("function" as any) ? (): any => !0 : s;
    }
    let C: any = (s: any, d: any): any => {
      let p: any = ((d as any).slice as any)(-1);
      return p = (p as any) === ((o as any).sep as any) ? (o as any).sep : "", (((F as any).relative as any)(s, d) as any) + (p as any);
    };
    return {
      readFile: function (this: any, s: any, d: any): any {
        var p: any = (E as any)(s);
        return p && ((p as any).getData as any)(d) || null;
      },
      childCount: function (this: any, s: any): any {
        let d: any = (E as any)(s);
        if (d) return ((i as any).getChildCount as any)(d);
      },
      readFileAsync: function (this: any, s: any, d: any): any {
        var p: any = (E as any)(s);
        p ? ((p as any).getDataAsync as any)(d) : (d as any)(null, ("getEntry failed for:" as any) + (s as any));
      },
      readAsText: function (this: any, s: any, d: any): any {
        var p: any = (E as any)(s);
        if (p) {
          var l: any = ((p as any).getData as any)();
          if (l && (l as any).length) return ((l as any).toString as any)(d || "utf8");
        }
        return "";
      },
      readAsTextAsync: function (this: any, s: any, d: any, p: any): any {
        var l: any = (E as any)(s);
        l ? ((l as any).getDataAsync as any)(function (this: any, f: any, y: any): any {
          if (y) {
            (d as any)(f, y);
            return;
          }
          f && (f as any).length ? (d as any)(((f as any).toString as any)(p || "utf8")) : (d as any)("");
        }) : (d as any)("");
      },
      deleteFile: function (this: any, s: any, d: any = !0): any {
        var p: any = (E as any)(s);
        p && ((i as any).deleteFile as any)((p as any).entryName, d);
      },
      deleteEntry: function (this: any, s: any): any {
        var d: any = (E as any)(s);
        d && ((i as any).deleteEntry as any)((d as any).entryName);
      },
      addZipComment: function (this: any, s: any): any {
        (i as any).comment = s;
      },
      getZipComment: function (this: any): any {
        return (i as any).comment || "";
      },
      addZipEntryComment: function (this: any, s: any, d: any): any {
        var p: any = (E as any)(s);
        p && ((p as any).comment = d);
      },
      getZipEntryComment: function (this: any, s: any): any {
        var d: any = (E as any)(s);
        return d && (d as any).comment || "";
      },
      updateFile: function (this: any, s: any, d: any): any {
        var p: any = (E as any)(s);
        p && ((p as any).setData as any)(d);
      },
      addLocalFile: function (this: any, s: any, d: any, p: any, l: any): any {
        if ((((o as any).fs as any).existsSync as any)(s)) {
          d = d ? (b as any)(d) : "";
          let f: any = (((F as any).win32 as any).basename as any)((((F as any).win32 as any).normalize as any)(s));
          d += p || f;
          let y: any = (((o as any).fs as any).statSync as any)(s),
            a: any = ((y as any).isFile as any)() ? (((o as any).fs as any).readFileSync as any)(s) : ((Buffer as any).alloc as any)(0);
          ((y as any).isDirectory as any)() && (d += (o as any).sep), ((this as any).addFile as any)(d, a, l, y);
        } else throw (((x as any).Errors as any).FILE_NOT_FOUND as any)(s);
      },
      addLocalFileAsync: function (this: any, s: any, d: any): any {
        s = (typeof s as any) == ("object" as any) ? s : {
          localPath: s
        };
        let p: any = ((F as any).resolve as any)((s as any).localPath),
          {
            comment: l
          }: any = s,
          {
            zipPath: f,
            zipName: y
          }: any = s,
          a: any = this;
        (((o as any).fs as any).stat as any)(p, function (this: any, u: any, m: any): any {
          if (u) return (d as any)(u, !1);
          f = f ? (b as any)(f) : "";
          let A: any = (((F as any).win32 as any).basename as any)((((F as any).win32 as any).normalize as any)(p));
          if (f += y || A, ((m as any).isFile as any)()) (((o as any).fs as any).readFile as any)(p, function (this: any, S: any, I: any): any {
            return S ? (d as any)(S, !1) : (((a as any).addFile as any)(f, I, l, m), (setImmediate as any)(d, void 0, !0));
          });else if (((m as any).isDirectory as any)()) return f += (o as any).sep, ((a as any).addFile as any)(f, ((Buffer as any).alloc as any)(0), l, m), (setImmediate as any)(d, void 0, !0);
        });
      },
      addLocalFolder: function (this: any, s: any, d: any, p: any): any {
        if (p = (N as any)(p), d = d ? (b as any)(d) : "", s = ((F as any).normalize as any)(s), (((o as any).fs as any).existsSync as any)(s)) {
          let l: any = ((o as any).findFiles as any)(s),
            f: any = this;
          if ((l as any).length) for (let y of l) {
            let a: any = ((F as any).join as any)(d, (C as any)(s, y));
            (p as any)(a) && ((f as any).addLocalFile as any)(y, ((F as any).dirname as any)(a));
          }
        } else throw (((x as any).Errors as any).FILE_NOT_FOUND as any)(s);
      },
      addLocalFolderAsync: function (this: any, s: any, d: any, p: any, l: any): any {
        l = (N as any)(l), p = p ? (b as any)(p) : "", s = ((F as any).normalize as any)(s);
        var f: any = this;
        (((o as any).fs as any).open as any)(s, "r", function (this: any, y: any): any {
          if (y && ((y as any).code as any) === ("ENOENT" as any)) (d as any)(void 0, (((x as any).Errors as any).FILE_NOT_FOUND as any)(s));else if (y) (d as any)(void 0, y);else {
            var a: any = ((o as any).findFiles as any)(s),
              u: any = -1,
              m: any = function (this: any): any {
                if (u += 1, (u as any) < ((a as any).length as any)) {
                  var A: any = (a as any)[u],
                    S: any = (((((C as any)(s, A) as any).split as any)("\\") as any).join as any)("/");
                  S = ((((((S as any).normalize as any)("NFD") as any).replace as any)(/[\u0300-\u036f]/g, "") as any).replace as any)(/[^\x20-\x7E]/g, ""), (l as any)(S) ? (((o as any).fs as any).stat as any)(A, function (this: any, I: any, D: any): any {
                    I && (d as any)(void 0, I), ((D as any).isFile as any)() ? (((o as any).fs as any).readFile as any)(A, function (this: any, B: any, P: any): any {
                      B ? (d as any)(void 0, B) : (((f as any).addFile as any)((p as any) + (S as any), P, "", D), (m as any)());
                    }) : (((f as any).addFile as any)(((p as any) + (S as any) as any) + ("/" as any), ((Buffer as any).alloc as any)(0), "", D), (m as any)());
                  }) : ((process as any).nextTick as any)((): any => {
                    (m as any)();
                  });
                } else (d as any)(!0, void 0);
              };
            (m as any)();
          }
        });
      },
      addLocalFolderAsync2: function (this: any, s: any, d: any): any {
        let p: any = this;
        s = (typeof s as any) == ("object" as any) ? s : {
          localPath: s
        }, localPath = ((F as any).resolve as any)((b as any)((s as any).localPath));
        let {
          zipPath: l,
          filter: f,
          namefix: y
        }: any = s;
        f instanceof RegExp ? f = (function (this: any, m: any): any {
          return function (this: any, A: any): any {
            return ((m as any).test as any)(A);
          };
        } as any)(f) : (typeof f as any) != ("function" as any) && (f = function (this: any): any {
          return !0;
        }), l = l ? (b as any)(l) : "", (y as any) == ("latin1" as any) && (y = (m: any): any => ((((((m as any).normalize as any)("NFD") as any).replace as any)(/[\u0300-\u036f]/g, "") as any).replace as any)(/[^\x20-\x7E]/g, "")), (typeof y as any) != ("function" as any) && (y = (m: any): any => m);
        let a: any = (m: any): any => ((F as any).join as any)(l, (y as any)((C as any)(localPath, m))),
          u: any = (m: any): any => (((F as any).win32 as any).basename as any)((((F as any).win32 as any).normalize as any)((y as any)(m)));
        (((o as any).fs as any).open as any)(localPath, "r", function (this: any, m: any): any {
          m && ((m as any).code as any) === ("ENOENT" as any) ? (d as any)(void 0, (((x as any).Errors as any).FILE_NOT_FOUND as any)(localPath)) : m ? (d as any)(void 0, m) : ((o as any).findFilesAsync as any)(localPath, function (this: any, A: any, S: any): any {
            if (A) return (d as any)(A);
            S = ((S as any).filter as any)((I: any): any => (f as any)((a as any)(I))), (S as any).length || (d as any)(void 0, !1), (setImmediate as any)(((((S as any).reverse as any)() as any).reduce as any)(function (this: any, I: any, D: any): any {
              return function (this: any, B: any, P: any): any {
                if (B || (P as any) === (!1 as any)) return (setImmediate as any)(I, B, !1);
                ((p as any).addLocalFileAsync as any)({
                  localPath: D,
                  zipPath: ((F as any).dirname as any)((a as any)(D)),
                  zipName: (u as any)(D)
                }, I);
              };
            }, d));
          });
        });
      },
      addLocalFolderPromise: function (this: any, s: any, d: any): any {
        return new (Promise as any)((p: any, l: any): any => {
          ((this as any).addLocalFolderAsync2 as any)(((Object as any).assign as any)({
            localPath: s
          }, d), (f: any, y: any): any => {
            f && (l as any)(f), y && (p as any)(this);
          });
        });
      },
      addFile: function (this: any, s: any, d: any, p: any, l: any): any {
        s = (g as any)(s);
        let f: any = (E as any)(s),
          y: any = (f as any) != (null as any);
        y || (f = new (ct as any)(t), (f as any).entryName = s), (f as any).comment = p || "";
        let a: any = (typeof l as any) == ("object" as any) && l instanceof ((o as any).fs as any).Stats;
        a && (((f as any).header as any).time = (l as any).mtime);
        var u: any = (f as any).isDirectory ? 16 : 0;
        let m: any = (f as any).isDirectory ? 16384 : 32768;
        return a ? m |= (4095 as any) & ((l as any).mode as any) : (typeof l as any) == ("number" as any) ? m |= (4095 as any) & (l as any) : m |= (f as any).isDirectory ? 493 : 420, u = (((u as any) | ((m as any) << (16 as any) as any)) as any) >>> (0 as any), (f as any).attr = u, ((f as any).setData as any)(d), y || ((i as any).setEntry as any)(f), f;
      },
      getEntries: function (this: any, s: any): any {
        return (i as any).password = s, i ? (i as any).entries : [];
      },
      getEntry: function (this: any, s: any): any {
        return (E as any)(s);
      },
      getEntryCount: function (this: any): any {
        return ((i as any).getEntryCount as any)();
      },
      forEach: function (this: any, s: any): any {
        return ((i as any).forEach as any)(s);
      },
      extractEntryTo: function (this: any, s: any, d: any, p: any, l: any, f: any, y: any): any {
        l = (Y as any)(!1, l), f = (Y as any)(!1, f), p = (Y as any)(!0, p), y = (Kr as any)(f, y);
        var a: any = (E as any)(s);
        if (!a) throw (((x as any).Errors as any).NO_ENTRY as any)();
        var u: any = (c as any)((a as any).entryName),
          m: any = (h as any)(d, y && !(a as any).isDirectory ? y : p ? u : ((F as any).basename as any)(u));
        if ((a as any).isDirectory) {
          var A: any = ((i as any).getEntryChildren as any)(a);
          return ((A as any).forEach as any)(function (this: any, D: any): any {
            if ((D as any).isDirectory) return;
            var B: any = ((D as any).getData as any)();
            if (!B) throw (((x as any).Errors as any).CANT_EXTRACT_FILE as any)();
            var P: any = (c as any)((D as any).entryName),
              $: any = (h as any)(d, p ? P : ((F as any).basename as any)(P));
            let j: any = f ? ((D as any).header as any).fileAttr : void 0;
            ((o as any).writeFileTo as any)($, B, l, j);
          }), !0;
        }
        var S: any = ((a as any).getData as any)((i as any).password);
        if (!S) throw (((x as any).Errors as any).CANT_EXTRACT_FILE as any)();
        if ((((o as any).fs as any).existsSync as any)(m) && !l) throw (((x as any).Errors as any).CANT_OVERRIDE as any)();
        let I: any = f ? ((s as any).header as any).fileAttr : void 0;
        return ((o as any).writeFileTo as any)(m, S, l, I), !0;
      },
      test: function (this: any, s: any): any {
        var d: any;
        if (!i) return !1;
        for (d in (i as any).entries) try {
          if ((d as any).isDirectory) continue;
          var p: any = ((((i as any).entries as any)[d] as any).getData as any)(s);
          if (!p) return !1;
        } catch {
          return !1;
        }
        return !0;
      },
      extractAllTo: function (this: any, s: any, d: any, p: any, l: any): any {
        if (p = (Y as any)(!1, p), l = (Kr as any)(p, l), d = (Y as any)(!1, d), !i) throw (((x as any).Errors as any).NO_ZIP as any)();
        (((i as any).entries as any).forEach as any)(function (this: any, f: any): any {
          var y: any = (h as any)(s, (c as any)((f as any).entryName));
          if ((f as any).isDirectory) {
            ((o as any).makeDir as any)(y);
            return;
          }
          var a: any = ((f as any).getData as any)(l);
          if (!a) throw (((x as any).Errors as any).CANT_EXTRACT_FILE as any)();
          let u: any = p ? ((f as any).header as any).fileAttr : void 0;
          ((o as any).writeFileTo as any)(y, a, d, u);
          try {
            (((o as any).fs as any).utimesSync as any)(y, ((f as any).header as any).time, ((f as any).header as any).time);
          } catch {
            throw (((x as any).Errors as any).CANT_EXTRACT_FILE as any)();
          }
        });
      },
      extractAllToAsync: function (this: any, s: any, d: any, p: any, l: any): any {
        if (l = (ft as any)(d, p, l), p = (Y as any)(!1, p), d = (Y as any)(!1, d), !l) return new (Promise as any)((m: any, A: any): any => {
          ((this as any).extractAllToAsync as any)(s, d, p, function (this: any, S: any): any {
            S ? (A as any)(S) : (m as any)(this);
          });
        });
        if (!i) {
          (l as any)((((x as any).Errors as any).NO_ZIP as any)());
          return;
        }
        s = ((F as any).resolve as any)(s);
        let f: any = (m: any): any => (h as any)(s, ((F as any).normalize as any)((c as any)((m as any).entryName))),
          y: any = (m: any, A: any): any => new (Error as any)((((m as any) + (': "' as any) as any) + (A as any) as any) + ('"' as any)),
          a: any = [],
          u: any = [];
        (((i as any).entries as any).forEach as any)((m: any): any => {
          (m as any).isDirectory ? ((a as any).push as any)(m) : ((u as any).push as any)(m);
        });
        for (let m of a) {
          let A: any = (f as any)(m),
            S: any = p ? ((m as any).header as any).fileAttr : void 0;
          try {
            ((o as any).makeDir as any)(A), S && (((o as any).fs as any).chmodSync as any)(A, S), (((o as any).fs as any).utimesSync as any)(A, ((m as any).header as any).time, ((m as any).header as any).time);
          } catch {
            (l as any)((y as any)("Unable to create folder", A));
          }
        }
        (((((u as any).reverse as any)() as any).reduce as any)(function (this: any, m: any, A: any): any {
          return function (this: any, S: any): any {
            if (S) (m as any)(S);else {
              let I: any = ((F as any).normalize as any)((c as any)((A as any).entryName)),
                D: any = (h as any)(s, I);
              ((A as any).getDataAsync as any)(function (this: any, B: any, P: any): any {
                if (P) (m as any)(P);else if (!B) (m as any)((((x as any).Errors as any).CANT_EXTRACT_FILE as any)());else {
                  let $: any = p ? ((A as any).header as any).fileAttr : void 0;
                  ((o as any).writeFileToAsync as any)(D, B, d, $, function (this: any, j: any): any {
                    j || (m as any)((y as any)("Unable to write file", D)), (((o as any).fs as any).utimes as any)(D, ((A as any).header as any).time, ((A as any).header as any).time, function (this: any, le: any): any {
                      le ? (m as any)((y as any)("Unable to set times", D)) : (m as any)();
                    });
                  });
                }
              });
            }
          };
        }, l) as any)();
      },
      writeZip: function (this: any, s: any, d: any): any {
        if (((arguments as any).length as any) === (1 as any) && (typeof s as any) == ("function" as any) && (d = s, s = ""), !s && (t as any).filename && (s = (t as any).filename), !!s) {
          var p: any = ((i as any).compressToBuffer as any)();
          if (p) {
            var l: any = ((o as any).writeFileTo as any)(s, p, !0);
            (typeof d as any) == ("function" as any) && (d as any)(l ? null : new (Error as any)("failed"), "");
          }
        }
      },
      writeZipPromise: function (this: any, s: any, d: any): any {
        let {
          overwrite: p,
          perm: l
        }: any = ((Object as any).assign as any)({
          overwrite: !0
        }, d);
        return new (Promise as any)((f: any, y: any): any => {
          !s && (t as any).filename && (s = (t as any).filename), s || (y as any)("ADM-ZIP: ZIP File Name Missing"), ((((this as any).toBufferPromise as any)() as any).then as any)((a: any): any => {
            let u: any = (m: any): any => m ? (f as any)(m) : (y as any)("ADM-ZIP: Wasn't able to write zip file");
            ((o as any).writeFileToAsync as any)(s, a, p, l, u);
          }, y);
        });
      },
      toBufferPromise: function (this: any): any {
        return new (Promise as any)((s: any, d: any): any => {
          ((i as any).toAsyncBuffer as any)(s, d);
        });
      },
      toBuffer: function (this: any, s: any, d: any, p: any, l: any): any {
        return (typeof s as any) == ("function" as any) ? (((i as any).toAsyncBuffer as any)(s, d, p, l), null) : ((i as any).compressToBuffer as any)();
      }
    };
  };
});
function Se(this: any, r: any, e: any): any {
  return (pt as any)(ne, r, e);
}
function pt(this: any, r: any, e: any, n: any): any {
  return new (Promise as any)((t: any): any => {
    if ((n?.aborted as any) === (!0 as any)) {
      (t as any)();
      return;
    }
    let o: any = (): any => {
        ((i as any).dispose as any)(), (t as any)();
      },
      i: any = ((r as any).schedule as any)(((Number as any).isFinite as any)(e) && (e as any) > (0 as any) ? e : 0, (): any => {
        n?.removeEventListener("abort", o), (t as any)();
      });
    n?.addEventListener("abort", o, {
      once: !0
    });
  });
}
var Ve: any = (_ as any)((): any => {
  "use strict";

  (Re as any)();
});
var dn: any = {};
(Ie as any)(dn, {
  MANAGED_ONEPASSWORD_CLI_VERSION: (): any => z,
  ONEPASSWORD_CODESIGN_REQUIREMENT: (): any => tn,
  ONEPASSWORD_SYSTEM_CLI_PATHS: (): any => an,
  SAND_OP_LAUNCHER_CODESIGN_REQUIREMENT: (): any => on,
  SAND_OP_LAUNCHER_IDENTIFIER_REQUIREMENT: (): any => $e,
  SandOnePasswordCliError: (): any => O,
  SandOnePasswordCliRuntime: (): any => Ze,
  downloadFromOnePassword: (): any => sn,
  scrubbedOnePasswordEnvironment: (): any => ve
});
function gt(this: any, r: any): any {
  return ((r as any).state as any) === ("ready" as any);
}
function wt(this: any, r: any, e: any, n: any): any {
  return new (Promise as any)((t: any, o: any): any => {
    ((void 0, (en as any).execFile) as any)(r, [...e], {
      signal: (n as any).signal,
      timeout: (n as any).timeoutMs,
      maxBuffer: (n as any).maxBufferBytes,
      windowsHide: !0,
      env: ((n as any).env as any) == (null as any) ? (process as any).env : {
        ...(n as any).env
      }
    }, (i: any, c: any, h: any): any => {
      if ((i as any) != (null as any)) {
        (o as any)(i);
        return;
      }
      (t as any)({
        stdout: ((c as any).toString as any)(),
        stderr: ((h as any).toString as any)()
      });
    });
  });
}
function St(this: any, r: any): any {
  if (((r as any).byteLength as any) === (0 as any) || ((r as any).byteLength as any) > (qe as any)) throw new (O as any)("The 1Password CLI archive size is invalid.");
  let e: any;
  try {
    e = new ((nn as any).default as any)(((Buffer as any).from as any)((r as any).buffer, (r as any).byteOffset, (r as any).byteLength));
  } catch {
    throw new (O as any)("The 1Password CLI archive is invalid.");
  }
  let n: any = ((e as any).getEntries as any)(),
    t: any = new (Set as any)(((n as any).map as any)((E: any): any => (E as any).entryName));
  if (((n as any).length as any) !== (2 as any) || !((t as any).has as any)("op") || !((t as any).has as any)("op.sig")) throw new (O as any)("The 1Password CLI archive has unexpected entries.");
  let o: any = ((n as any).find as any)((E: any): any => ((E as any).entryName as any) === ("op" as any)),
    i: any = ((n as any).find as any)((E: any): any => ((E as any).entryName as any) === ("op.sig" as any));
  if ((o as any) == (null as any) || (o as any).isDirectory || (((o as any).header as any).size as any) <= (0 as any) || (((o as any).header as any).size as any) > (Yr as any)) throw new (O as any)("The 1Password CLI archive does not contain a valid op.");
  if ((i as any) == (null as any) || (i as any).isDirectory || (((i as any).header as any).size as any) <= (0 as any) || (((i as any).header as any).size as any) > ((4 as any) * (1024 as any) as any)) throw new (O as any)("The 1Password CLI archive signature entry is invalid.");
  let c: any = (((o as any).attr as any) >>> (16 as any) as any) & (65535 as any),
    h: any = (((i as any).attr as any) >>> (16 as any) as any) & (65535 as any);
  if ((((c as any) & (61440 as any)) as any) === (40960 as any) || (((h as any) & (61440 as any)) as any) === (40960 as any)) throw new (O as any)("The 1Password CLI archive entry cannot be a symlink.");
  let g: any = ((o as any).getData as any)();
  if (((g as any).byteLength as any) !== (((o as any).header as any).size as any) || ((g as any).byteLength as any) > (Yr as any)) throw new (O as any)("The 1Password CLI executable size is invalid.");
  return g;
}
function vt(this: any, r: any): any {
  let e: any = ((r as any).trim as any)();
  return ((/^2\.\d{1,3}\.\d{1,3}(?:[-+][0-9A-Za-z.-]{1,64})?$/ as any).test as any)(e) ? e : null;
}
function ve(this: any, r: any): any {
  let e: any = {};
  for (let [n, t] of ((Object as any).entries as any)(r)) (t as any) != (null as any) && (((n as any).startsWith as any)("OP_") || ((e as any)[n] = t));
  return (e as any).OP_CACHE = "false", (e as any).OP_BIOMETRIC_UNLOCK_ENABLED = "true", (e as any).OP_LOAD_DESKTOP_APP_SETTINGS = "false", e;
}
async function sn(this: any, r: any, e: any): Promise<any> {
  let n: any = new (URL as any)(r),
    t: any = new (Set as any)([`/dist/1P/op2/pkg/v${z}/op_darwin_arm64_v${z}.zip`, `/dist/1P/op2/pkg/v${z}/op_darwin_amd64_v${z}.zip`]);
  if (((n as any).protocol as any) !== ("https:" as any) || ((n as any).hostname as any) !== ("cache.agilebits.com" as any) || ((n as any).port as any) !== ("" as any) || ((n as any).username as any) !== ("" as any) || ((n as any).password as any) !== ("" as any) || ((n as any).search as any) !== ("" as any) || ((n as any).hash as any) !== ("" as any) || !((t as any).has as any)((n as any).pathname)) throw new (O as any)("The 1Password CLI download URL is not vendor-owned.");
  let o: any = await (fetch as any)(n, {
    redirect: "error",
    signal: e
  });
  if (!(o as any).ok) throw ((o as any).body as any) != (null as any) && (await (((((o as any).body as any).cancel as any)() as any).catch as any)((N: any): any => (J as any)("onepassword", "body-cancel", N))), new (O as any)(`The 1Password CLI download failed with HTTP ${(o as any).status}.`);
  let i: any = (((o as any).headers as any).get as any)("content-type")?.split(";", 1)[0]?.trim().toLowerCase();
  if ((i as any) == (null as any) || !((Et as any).has as any)(i)) throw ((o as any).body as any) != (null as any) && (await (((((o as any).body as any).cancel as any)() as any).catch as any)((N: any): any => (J as any)("onepassword", "body-cancel", N))), new (O as any)("The 1Password CLI download type could not be verified.");
  let c: any = (((o as any).headers as any).get as any)("content-length"),
    h: any = (c as any) == (null as any) ? (Number as any).NaN : (Number as any)(c);
  if (!((Number as any).isSafeInteger as any)(h) || (h as any) <= (0 as any) || (h as any) > (qe as any)) throw ((o as any).body as any) != (null as any) && (await (((((o as any).body as any).cancel as any)() as any).catch as any)((N: any): any => (J as any)("onepassword", "body-cancel", N))), new (O as any)("The 1Password CLI download size could not be verified.");
  if (((o as any).body as any) == (null as any)) throw new (O as any)("The 1Password CLI download body was missing.");
  let g: any = (((o as any).body as any).getReader as any)(),
    E: any = new (Uint8Array as any)(h),
    b: any = 0;
  for (;;) {
    let N: any = await ((g as any).read as any)();
    if ((N as any).done) break;
    let C: any = (b as any) + (((N as any).value as any).byteLength as any);
    if ((C as any) > (qe as any) || (C as any) > (h as any)) throw await ((g as any).cancel as any)(), new (O as any)("The 1Password CLI download was unexpectedly large.");
    ((E as any).set as any)((N as any).value, b), b = C;
  }
  if ((b as any) !== (h as any)) throw new (O as any)("The 1Password CLI download size did not match.");
  return E;
}
var en: any,
  rn: any,
  U: any,
  de: any,
  nn: any,
  z: any,
  tn: any,
  $e: any,
  on: any,
  an: any,
  qe: any,
  Yr: any,
  ze: any,
  yt: any,
  Qr: any,
  ht: any,
  Et: any,
  O: any,
  Ze: any,
  Xe: any = (_ as any)((): any => {
    "use strict";

    en = (require as any)("node:child_process"), rn = (require as any)("node:crypto"), U = (require as any)("node:fs"), de = (require as any)("node:path"), nn = (Pn as any)((Jr as any)(), 1);
    (ae as any)();
    (Ve as any)();
    (Me as any)();
    (Le as any)();
    z = "2.35.0", tn = 'identifier "com.1password.op" and anchor apple generic and certificate leaf[subject.OU] = "2BUA8C4S2C"', $e = 'identifier "sand-op-launcher"', on = `${$e} and anchor apple generic and certificate leaf[subject.OU] = "DCNK4UB866"`, an = ["/opt/homebrew/bin/op", "/usr/local/bin/op", "/usr/bin/op"], qe = ((64 as any) * (1024 as any) as any) * (1024 as any), Yr = ((64 as any) * (1024 as any) as any) * (1024 as any), ze = (16 as any) * (1024 as any), yt = 6e4, Qr = 15e3, ht = 15e3, Et = new (Set as any)(["application/zip", "application/octet-stream", "binary/octet-stream"]);
    O = class extends (X as any) {
      [key: string]: any;
      name: any = "SandOnePasswordCliError";
    };
    Ze = class {
      [key: string]: any;
      constructor(e: any) {
        (this as any).options = e;
        (this as any).platform = (e as any).platform ?? (process as any).platform, (this as any).arch = (e as any).arch ?? (process as any).arch, (this as any).systemPaths = (e as any).systemPaths ?? an, (this as any).download = (e as any).download ?? sn, (this as any).runProcess = (e as any).runProcess ?? wt;
      }
      options: any;
      platform: any;
      arch: any;
      systemPaths: any;
      download: any;
      runProcess: any;
      async resolveVerifiedLauncherPath(e: any): Promise<any> {
        if (((this as any).platform as any) !== ("darwin" as any)) throw new (O as any)("The secure 1Password launcher is supported on macOS only.");
        await (((U as any).promises as any).access as any)(((this as any).options as any).launcherPath, ((U as any).constants as any).X_OK);
        let n: any = await (((U as any).promises as any).realpath as any)(((this as any).options as any).launcherPath),
          t: any = (((this as any).options as any).launcherVerification as any) === ("development" as any) ? $e : on;
        return await ((this as any).runProcess as any)("/usr/bin/codesign", ["--verify", "--strict", "--verbose=4", `-R=${t}`, n], {
          signal: e,
          timeoutMs: Qr,
          maxBufferBytes: ze
        }), n;
      }
      get managedPath(): any {
        return ((void 0, (de as any).join) as any)(((this as any).options as any).installRoot, `v${z}`, ((this as any).artifactArch as any)(), "op");
      }
      async inspect(e: any): Promise<any> {
        if (((this as any).platform as any) !== ("darwin" as any)) return {
          platformSupported: !1,
          selected: null,
          candidates: [],
          detail: "Managed 1Password CLI is supported on macOS only"
        };
        let n: any = await ((this as any).resolveVerifiedLauncherPath as any)(e),
          t: any = await ((Promise as any).all as any)((([...(((this as any).systemPaths as any).map as any)((c: any): any => [c, "system"]), [(this as any).managedPath, "managed"]] as any).map as any)(async ([c, h]: any): Promise<any> => await ((this as any).inspectCandidate as any)(c, h, n, e))),
          o: any = ((t as any).filter as any)(gt),
          i: any = ((o as any).find as any)((c: any): any => ((c as any).source as any) === ("system" as any)) ?? ((o as any).find as any)((c: any): any => ((c as any).source as any) === ("managed" as any)) ?? null;
        return {
          platformSupported: !0,
          selected: i,
          candidates: t,
          detail: (i as any) != (null as any) ? `${((i as any).source as any) === ("system" as any) ? "System" : "Managed"} CLI ready` : "No verified 1Password CLI is ready"
        };
      }
      async prepareManaged(e: any): Promise<any> {
        let n: any = await ((this as any).ensureManagedInstalled as any)(e);
        return await ((this as any).inspect as any)((n as any).committed ? (new (AbortController as any)() as any).signal : e);
      }
      async resolveVerifiedPath(e: any, n: any): Promise<any> {
        let t: any = await ((this as any).inspect as any)(e);
        if (((t as any).selected as any) != (null as any)) return ((t as any).selected as any).path;
        if (!(n as any).prepareManaged) throw new (O as any)("No verified 1Password CLI is ready.");
        return ((await ((this as any).ensureManagedInstalled as any)(e)) as any).path;
      }
      async verify(e: any, n: any): Promise<any> {
        if (((this as any).platform as any) !== ("darwin" as any)) throw new (O as any)("Managed 1Password CLI is supported on macOS only.");
        let t: any = await (((U as any).promises as any).realpath as any)(e);
        await ((this as any).runProcess as any)("/usr/bin/codesign", ["--verify", "--strict", "--verbose=4", `-R=${tn}`, t], {
          signal: n,
          timeoutMs: Qr,
          maxBufferBytes: ze
        });
      }
      async inspectCandidate(e: any, n: any, t: any, o: any): Promise<any> {
        try {
          await (((U as any).promises as any).access as any)(e, ((U as any).constants as any).X_OK);
        } catch (i: any) {
          return (pr as any)(i) || (J as any)("onepassword", "candidate-access", i), {
            source: n,
            path: e,
            state: "missing"
          };
        }
        try {
          let i: any = await ((this as any).readVersion as any)({
            path: e,
            launcherPath: t,
            signal: o
          });
          return (i as any) == (null as any) || (n as any) === ("managed" as any) && (i as any) !== (z as any) ? {
            source: n,
            path: e,
            state: "invalid"
          } : {
            source: n,
            path: e,
            state: "ready",
            version: i,
            signature: "verified"
          };
        } catch (i: any) {
          if ((o as any).aborted) throw i;
          return {
            source: n,
            path: e,
            state: "invalid"
          };
        }
      }
      async readVersion(e: any): Promise<any> {
        let n: any = await (((U as any).promises as any).realpath as any)((e as any).path),
          t: any = await ((this as any).runProcess as any)((e as any).launcherPath, [n, "--version"], {
            signal: (e as any).signal,
            timeoutMs: ht,
            maxBufferBytes: ze,
            env: (ve as any)(((this as any).options as any).childProcessEnvironment)
          });
        return (vt as any)((t as any).stdout);
      }
      async ensureManagedInstalled(e: any): Promise<any> {
        let n: any = (this as any).managedPath,
          t: any = await ((this as any).resolveVerifiedLauncherPath as any)(e);
        try {
          if (await (((U as any).promises as any).access as any)(n, ((U as any).constants as any).X_OK), await ((this as any).verify as any)(n, e), ((await ((this as any).readVersion as any)({
            path: n,
            launcherPath: t,
            signal: e
          })) as any) === (z as any)) return {
            path: n,
            committed: !1
          };
        } catch (d: any) {
          if ((e as any).aborted) throw d;
        }
        let o: any = ((void 0, (de as any).dirname) as any)(n);
        await (((U as any).promises as any).mkdir as any)(o, {
          recursive: !0,
          mode: 448
        }), await (((U as any).promises as any).chmod as any)(((this as any).options as any).installRoot, 448), await (((U as any).promises as any).chmod as any)(o, 448);
        let i: any = new (AbortController as any)(),
          c: any = new (AbortController as any)(),
          g: any = ((((this as any).download as any)(((this as any).artifactUrl as any)(((this as any).artifactArch as any)()), ((AbortSignal as any).any as any)([e, (i as any).signal])) as any).then as any)((d: any): any => ({
            kind: "download",
            archive: d
          }), (d: any): any => ({
            kind: "error",
            error: d
          })),
          E: any = (((Se as any)(yt, (c as any).signal) as any).then as any)((): any => ({
            kind: "timeout"
          })),
          b: any = await ((((Promise as any).race as any)([g, E]) as any).finally as any)((): any => {
            ((c as any).abort as any)();
          });
        if (((b as any).kind as any) === ("timeout" as any)) {
          let d: any = new (DOMException as any)("1Password CLI download timed out", "TimeoutError");
          throw ((i as any).abort as any)(d), d;
        }
        if (((b as any).kind as any) === ("error" as any)) throw (b as any).error;
        let N: any = (b as any).archive,
          C: any = (St as any)(N),
          s: any = ((void 0, (de as any).join) as any)(o, `.op-${(process as any).pid}-${((void 0, (rn as any).randomUUID) as any)()}`);
        try {
          let d: any = await (((U as any).promises as any).open as any)(s, "wx", 448);
          try {
            await ((d as any).writeFile as any)(C), await ((d as any).sync as any)();
          } finally {
            await ((d as any).close as any)();
          }
          if (await (((U as any).promises as any).chmod as any)(s, 448), await ((this as any).verify as any)(s, e), ((await ((this as any).readVersion as any)({
            path: s,
            launcherPath: t,
            signal: e
          })) as any) !== (z as any)) throw new (O as any)(`The managed 1Password CLI did not report version ${z}.`);
          ((e as any).throwIfAborted as any)(), await (((U as any).promises as any).rename as any)(s, n);
          let l: any = (new (AbortController as any)() as any).signal;
          return await (((U as any).promises as any).chmod as any)(n, 448), await ((this as any).verify as any)(n, l), {
            path: n,
            committed: !0
          };
        } finally {
          await (((U as any).promises as any).rm as any)(s, {
            force: !0
          });
        }
      }
      artifactArch(): any {
        if (((this as any).platform as any) !== ("darwin" as any)) throw new (O as any)("Managed 1Password CLI is supported on macOS only.");
        if (((this as any).arch as any) === ("arm64" as any)) return "arm64";
        if (((this as any).arch as any) === ("x64" as any)) return "amd64";
        throw new (O as any)("Unsupported macOS architecture.");
      }
      artifactUrl(e: any): any {
        return `https://cache.agilebits.com/dist/1P/op2/pkg/v${z}/op_darwin_${e}_v${z}.zip`;
      }
    };
  });
function cn(this: any, r: any): any {
  let e: any = ((r as any).toLowerCase as any)();
  return ((e as any).includes as any)("sand-op-launcher: unsupported invocation") ? "launcher-unsupported" : ((e as any).includes as any)("sand-op-launcher: untrusted 1password cli") ? "launcher-untrusted" : ((e as any).includes as any)("sand-op-launcher: could not restrict app data access") ? "launcher-security" : ((e as any).includes as any)("sand-op-launcher:") ? "launcher-runtime" : ((e as any).includes as any)("service account limit") || ((e as any).includes as any)("service-account limit") || ((e as any).includes as any)("maximum number of service accounts") || ((e as any).includes as any)("too many service accounts") ? "service-account-limit" : ((e as any).includes as any)("permission") || ((e as any).includes as any)("not allowed") || ((e as any).includes as any)("not authorized") || ((e as any).includes as any)("not permitted") || ((e as any).includes as any)("(403)") || ((e as any).includes as any)("forbidden") || ((e as any).includes as any)("can't create service accounts") || ((e as any).includes as any)("cannot create service accounts") || ((e as any).includes as any)("service accounts are not available") || ((e as any).includes as any)("service accounts aren't available") || ((e as any).includes as any)("service accounts are only available") || ((e as any).includes as any)("must be an owner") || ((e as any).includes as any)("must be an administrator") ? "permission" : ((e as any).includes as any)("authorization prompt dismissed") || ((e as any).includes as any)("request was denied") || ((e as any).includes as any)("authorization denied") || ((e as any).includes as any)("rejected") ? "denied" : ((e as any).includes as any)("couldn't connect to the 1password desktop app") || ((e as any).includes as any)("couldn't connect to the 1password app") ? "app-unreachable" : ((e as any).includes as any)("connecting to desktop app") || ((e as any).includes as any)("desktop app not running") || ((e as any).includes as any)("cli is not enabled") || ((e as any).includes as any)("no accounts configured") ? "integration-off" : ((e as any).includes as any)("already exists") || ((e as any).includes as any)("(409)") || ((e as any).includes as any)("conflict") ? "conflict" : ((e as any).includes as any)("etimedout") || ((e as any).includes as any)("timed out") ? "timeout" : "unknown";
}
function un(this: any): any {
  return async (r: any, e: any, n: any): Promise<any> => await new (Promise as any)((t: any, o: any): any => {
    ((void 0, (ln as any).execFile) as any)(r, [...e], {
      signal: (n as any).signal,
      timeout: (n as any).timeoutMs,
      maxBuffer: (n as any).maxBufferBytes,
      windowsHide: !0,
      env: {
        ...(n as any).env
      }
    }, (i: any, c: any, h: any): any => {
      if ((i as any) != (null as any)) {
        (o as any)(new (be as any)((i as any).code, ((i as any).killed as any) === (!0 as any), (cn as any)(`${(i as any).message}
${((h as any).toString as any)()}`)));
        return;
      }
      (t as any)({
        stdout: ((c as any).toString as any)(),
        stderr: ((h as any).toString as any)()
      });
    });
  });
}
function fn(this: any, r: any): any {
  if (r instanceof v) return r;
  if (r instanceof DOMException && (((r as any).name as any) === ("AbortError" as any) || ((r as any).name as any) === ("TimeoutError" as any))) return new (v as any)(((r as any).name as any) === ("AbortError" as any) ? "cancelled" : "timeout", ((r as any).name as any) === ("AbortError" as any) ? "The 1Password operation was canceled." : "The 1Password operation timed out.");
  let e: any = (V as any)(r) ? r : null,
    n: any = r instanceof be ? r : void 0,
    t: any = n?.processCode ?? e?.code,
    o: any = n?.killed ?? (e?.killed as any) === (!0 as any);
  if ((t as any) === ("ENOENT" as any)) return new (v as any)("missing-cli", "The secure 1Password CLI runtime is unavailable.");
  if ((t as any) === ("ABORT_ERR" as any)) return new (v as any)("cancelled", "The 1Password operation was canceled.");
  let i: any = r instanceof Error ? (r as any).message : "",
    c: any = n?.failureKind ?? (cn as any)(i);
  return (c as any) === ("launcher-unsupported" as any) ? new (v as any)("launcher-error", "Grok Bot's secure 1Password launcher rejected this operation. Update and restart Grok Bot, then try again.") : (c as any) === ("launcher-untrusted" as any) ? new (v as any)("launcher-error", "Grok Bot couldn't verify the installed 1Password CLI. Reinstall or update 1Password CLI, then try again.") : (c as any) === ("launcher-security" as any) ? new (v as any)("launcher-error", "Grok Bot couldn't start 1Password securely. Restart Grok Bot, then try again.") : (c as any) === ("launcher-runtime" as any) ? new (v as any)("launcher-error", "Grok Bot couldn't start the verified 1Password CLI. Restart Grok Bot, then try again.") : (c as any) === ("service-account-limit" as any) ? new (v as any)("service-account-limit", "This 1Password account has reached its service-account limit. Revoke an unused service account in 1Password.com, then try again.") : o || (c as any) === ("timeout" as any) ? new (v as any)("timeout", "The 1Password desktop app did not respond in time.") : (c as any) === ("denied" as any) ? new (v as any)("denied", "The request was not approved in the 1Password desktop app.") : (c as any) === ("app-unreachable" as any) ? new (v as any)("app-unreachable", "Grok Bot couldn't reach the 1Password app.") : (c as any) === ("integration-off" as any) ? new (v as any)("integration-off", "1Password desktop CLI integration is unavailable.") : (c as any) === ("permission" as any) ? new (v as any)("permission", "The selected 1Password account does not allow this operation.") : (c as any) === ("conflict" as any) ? new (v as any)("conflict", "The requested 1Password object already exists.") : new (v as any)("op-error", "The secure 1Password CLI operation failed.");
}
function Ae(this: any, r: any): any {
  if (r instanceof v) return r;
  if (r instanceof DOMException && (((r as any).name as any) === ("AbortError" as any) || ((r as any).name as any) === ("TimeoutError" as any))) return new (v as any)(((r as any).name as any) === ("AbortError" as any) ? "cancelled" : "timeout", ((r as any).name as any) === ("AbortError" as any) ? "The 1Password operation was canceled." : "The secure 1Password runtime verification timed out.");
  let e: any = (V as any)(r) ? (r as any).code : void 0;
  return (e as any) === ("ABORT_ERR" as any) ? new (v as any)("cancelled", "The 1Password operation was canceled.") : (e as any) === ("ENOENT" as any) ? new (v as any)("missing-cli", "The secure 1Password CLI runtime is unavailable.") : new (v as any)("op-error", "The secure 1Password runtime failed verification.");
}
var ln: any,
  be: any,
  mn: any = (_ as any)((): any => {
    "use strict";

    ln = (require as any)("node:child_process");
    (ae as any)();
    (me as any)();
    (ie as any)();
    be = class extends (X as any) {
      [key: string]: any;
      constructor(n: any, t: any, o: any) {
        super("The 1Password CLI command failed.");
        (this as any).processCode = n;
        (this as any).killed = t;
        (this as any).failureKind = o;
      }
      processCode: any;
      killed: any;
      failureKind: any;
      name: any = "OnePasswordProcessError";
    };
  });
var gn: any = {};
(Ie as any)(gn, {
  OnePasswordDesktopProvisioningBridge: (): any => We,
  OnePasswordProvisioningError: (): any => v,
  unavailableOnePasswordProvisioningSink: (): any => ye
});
function Ot(this: any, r: any): any {
  if (!((/^\d+\.\d+\.\d+$/ as any).test as any)(r)) return null;
  let e: any = ((((r as any).split as any)(".") as any).map as any)((n: any): any => ((Number as any).parseInt as any)(n, 10));
  return ((e as any).every as any)((n: any): any => ((Number as any).isSafeInteger as any)(n)) ? e : null;
}
function _t(this: any, r: any, e: any): any {
  for (let n: any = 0; (n as any) < ((e as any).length as any); n += 1) {
    let t: any = (r as any)[n] ?? 0,
      o: any = (e as any)[n] ?? 0;
    if ((t as any) > (o as any)) return !0;
    if ((t as any) < (o as any)) return !1;
  }
  return !0;
}
function hn(this: any, r: any): any {
  let e: any = (Ot as any)((r as any).version);
  return (e as any) != (null as any) && (_t as any)(e, bt);
}
function Tt(this: any, r: any): any {
  let e: any = (((r as any).candidates as any).filter as any)((n: any): any => ((n as any).state as any) === ("ready" as any));
  return ((r as any).selected as any) != (null as any) && !((e as any).some as any)((n: any): any => ((n as any).path as any) === ((r as any).selected?.path as any)) && ((e as any).unshift as any)((r as any).selected), ((e as any).find as any)((n: any): any => ((n as any).source as any) === ("system" as any) && (hn as any)(n)) ?? ((e as any).find as any)((n: any): any => ((n as any).source as any) === ("managed" as any) && (hn as any)(n)) ?? null;
}
function Ne(this: any, r: any, e: any): any {
  if ((typeof r as any) != ("string" as any) || !((/^[A-Za-z0-9_.-]+$/ as any).test as any)(r) || ((r as any).length as any) > (Ce as any)) throw new (v as any)("invalid-input", `The ${e} is invalid.`);
  return r;
}
function Ke(this: any, r: any, e: any): any {
  let n: any = (typeof r as any) == ("string" as any) ? ((r as any).trim as any)() : "";
  if (((n as any).length as any) === (0 as any) || ((n as any).length as any) > (Je as any) || ((n as any).startsWith as any)("-") || ((/[\u0000-\u001f\u007f]/ as any).test as any)(n)) throw new (v as any)("invalid-input", `The ${e} is invalid.`);
  return n;
}
function W(this: any, r: any, e: any): any {
  if ((typeof r as any) != ("string" as any)) return null;
  let n: any = ((r as any).trim as any)();
  return ((n as any).length as any) > (0 as any) && ((n as any).length as any) <= (e as any) ? n : null;
}
function Lt(this: any, r: any): any {
  let e: any = (W as any)(r, It);
  if ((e as any) == (null as any)) return null;
  try {
    let n: any = ((/^[A-Za-z][A-Za-z0-9+.-]*:/ as any).test as any)(e),
      t: any = new (URL as any)(n ? e : `https://${e}`);
    return ((t as any).protocol as any) === ("https:" as any) && ((t as any).hostname as any) !== ("" as any) && ((t as any).username as any) === ("" as any) && ((t as any).password as any) === ("" as any) ? ((t as any).toString as any)() : null;
  } catch {
    return null;
  }
}
function Ft(this: any, r: any): any {
  if (!((Array as any).isArray as any)(r) || ((r as any).length as any) > (Ct as any)) throw new (v as any)("invalid-output", "1Password returned an invalid account list.");
  let e: any = [],
    n: any = new (Set as any)();
  for (let t of r) {
    if (!(V as any)(t)) throw new (v as any)("invalid-output", "1Password returned an invalid account list.");
    let o: any = (W as any)((t as any).account_uuid, Ce),
      i: any = (W as any)((t as any).email, kt),
      c: any = (Lt as any)((t as any).url);
    if ((o as any) == (null as any) || !((/^[A-Za-z0-9_.-]+$/ as any).test as any)(o) || (i as any) == (null as any) || (c as any) == (null as any) || ((n as any).has as any)(o)) throw new (v as any)("invalid-output", "1Password returned an invalid account list.");
    ((n as any).add as any)(o), ((e as any).push as any)({
      accountUuid: o,
      email: i,
      url: c
    });
  }
  return e;
}
function Mt(this: any, r: any): any {
  if (!((Array as any).isArray as any)(r) || ((r as any).length as any) > (Dt as any)) throw new (v as any)("invalid-output", "1Password returned an invalid vault list.");
  let e: any = [],
    n: any = new (Set as any)();
  for (let t of r) {
    if (!(V as any)(t)) throw new (v as any)("invalid-output", "1Password returned an invalid vault list.");
    let o: any = (W as any)((t as any).id, Ce),
      i: any = (W as any)((t as any).name, Je);
    if ((o as any) == (null as any) || !((/^[A-Za-z0-9_.-]+$/ as any).test as any)(o) || (i as any) == (null as any) || ((n as any).has as any)(o)) throw new (v as any)("invalid-output", "1Password returned an invalid vault list.");
    ((n as any).add as any)(o), ((e as any).push as any)({
      vaultId: o,
      vaultName: i
    });
  }
  return e;
}
function Ut(this: any, r: any): any {
  if (!(V as any)(r)) throw new (v as any)("invalid-output", "1Password did not return the created vault.");
  let e: any = (W as any)((r as any).id, Ce),
    n: any = (W as any)((r as any).name, Je);
  if ((e as any) == (null as any) || !((/^[A-Za-z0-9_.-]+$/ as any).test as any)(e) || (n as any) == (null as any)) throw new (v as any)("invalid-output", "1Password did not return the created vault.");
  return {
    vaultId: e,
    vaultName: n
  };
}
function Bt(this: any, r: any): any {
  if ((typeof r as any) != ("number" as any) || !((Number as any).isSafeInteger as any)(r) || (r as any) < (xt as any) || (r as any) > (Rt as any)) throw new (v as any)("invalid-input", "The provisioning policy returned an invalid expiration duration.");
  return r;
}
function Ht(this: any, r: any): any {
  let e: any = ((r as any).trim as any)();
  if (((e as any).length as any) === (0 as any) || ((e as any).length as any) > (En as any) || !((/^ops_[A-Za-z0-9_-]+$/ as any).test as any)(e)) throw new (v as any)("invalid-output", "1Password did not return a valid service-account credential.");
  return e;
}
var bt: any,
  At: any,
  En: any,
  pn: any,
  yn: any,
  Nt: any,
  Ct: any,
  Dt: any,
  Ce: any,
  Je: any,
  kt: any,
  It: any,
  Pt: any,
  Rt: any,
  xt: any,
  We: any,
  wn: any = (_ as any)((): any => {
    "use strict";

    (Ve as any)();
    (me as any)();
    (Xe as any)();
    (mn as any)();
    (ie as any)();
    (ie as any)();
    bt = [2, 35, 0], At = (1024 as any) * (1024 as any), En = (16 as any) * (1024 as any), pn = 3e4, yn = 18e4, Nt = 3e4, Ct = 50, Dt = 1e3, Ce = 256, Je = 256, kt = 320, It = 2048, Pt = 256, Rt = (((365 as any) * (24 as any) as any) * (60 as any) as any) * (60 as any), xt = 60;
    We = class {
      [key: string]: any;
      runtime: any;
      childProcessEnvironment: any;
      sink: any;
      executor: any;
      prepareManagedCli: any;
      mutationInProgress: any = !1;
      deliveryIndeterminate: any = !1;
      constructor(e: any) {
        (this as any).runtime = (e as any).runtime, (this as any).childProcessEnvironment = (e as any).childProcessEnvironment, (this as any).sink = (e as any).sink ?? ye, (this as any).executor = (e as any).executor ?? (un as any)(), (this as any).prepareManagedCli = (e as any).prepareManagedCli ?? !0;
      }
      async inspectReadiness(e: any): Promise<any> {
        let n: any = await (((((this as any).runtime as any).inspect as any)(e) as any).catch as any)((i: any): any => {
          throw (Ae as any)(i);
        });
        if (!(n as any).platformSupported) return {
          state: "unsupported-platform"
        };
        let t: any = (Tt as any)(n);
        if ((t as any) != (null as any)) return {
          state: "ready",
          source: (t as any).source,
          path: (t as any).path,
          version: (t as any).version
        };
        let o: any = (n as any).selected;
        return (o as any) == (null as any) ? {
          state: "missing-cli"
        } : {
          state: "unsupported-version",
          version: (o as any).version
        };
      }
      async listAccounts(e: any): Promise<any> {
        return (Ft as any)(await ((this as any).runJson as any)(["account", "list", "--format=json"], pn, e));
      }
      async listVaults(e: any, n: any): Promise<any> {
        let t: any = (Ne as any)((e as any).accountUuid, "1Password account identifier");
        return (Mt as any)(await ((this as any).runJson as any)(["vault", "list", "--account", t, "--format=json"], pn, n));
      }
      async findVault(e: any, n: any): Promise<any> {
        let t: any = (Ke as any)((e as any).vaultName, "vault name"),
          o: any = (((await ((this as any).listVaults as any)(e, n)) as any).filter as any)((i: any): any => ((i as any).vaultName as any) === (t as any));
        if (((o as any).length as any) > (1 as any)) throw new (v as any)("conflict", "More than one 1Password vault has the requested name.");
        return (o as any)[0] ?? null;
      }
      async createVault(e: any, n: any): Promise<any> {
        ((this as any).assertSinkAvailable as any)();
        let t: any = (Ne as any)((e as any).accountUuid, "1Password account identifier"),
          o: any = (Ke as any)((e as any).vaultName, "vault name");
        return await ((this as any).runMutation as any)(n, async (i: any): Promise<any> => (Ut as any)(await ((this as any).runJson as any)(["vault", "create", o, "--account", t, "--format=json"], yn, i)));
      }
      async mintAndDeliver(e: any, n: any): Promise<any> {
        ((this as any).assertSinkAvailable as any)();
        let t: any = (Ne as any)((e as any).accountUuid, "1Password account identifier"),
          o: any = (Ne as any)((e as any).vaultId, "1Password vault identifier"),
          i: any = (Ke as any)((e as any).serviceAccountName, "service-account name"),
          c: any = ((e as any).expiresInSeconds as any) == (null as any) ? void 0 : (Bt as any)((e as any).expiresInSeconds);
        return await ((this as any).runMutation as any)(n, async (h: any): Promise<any> => {
          let g: any = (((await ((this as any).listAccounts as any)(h)) as any).find as any)((l: any): any => ((l as any).accountUuid as any) === (t as any));
          if ((g as any) == (null as any)) throw new (v as any)("invalid-input", "The selected 1Password account is unavailable.");
          let E: any = (((await ((this as any).listVaults as any)({
            accountUuid: t
          }, h)) as any).find as any)((l: any): any => ((l as any).vaultId as any) === (o as any));
          if ((E as any) == (null as any)) throw new (v as any)("permission", "The selected 1Password vault is unavailable to this account.");
          let b: any = await ((((this as any).runOp as any)(["service-account", "create", i, "--account", t, "--vault", `${o}:read_items`, ...((c as any) == (null as any) ? [] : ["--expires-in", `${c}s`]), "--raw"], yn, En, h) as any).catch as any)((l: any): any => {
              throw l instanceof v && ((l as any).code as any) === ("permission" as any) ? new (v as any)("permission", "This 1Password account can't create service accounts. Ask a 1Password administrator to enable service-account creation and grant Manage Vault access.") : l instanceof v && ((l as any).code as any) === ("op-error" as any) ? new (v as any)("op-error", "1Password couldn't create the service account. Check service-account permissions, vault eligibility, and account limits, then try again.") : l;
            }),
            N: any = (Ht as any)((b as any).stdout),
            C: any = new (AbortController as any)(),
            s: any = new (AbortController as any)(),
            d: any;
          try {
            let l: any = (((this as any).sink as any).accept as any)({
                accountUuid: t,
                accountUrl: (g as any).url,
                vaultId: o,
                vaultName: (E as any).vaultName,
                serviceAccountName: i,
                ...((c as any) == (null as any) ? {} : {
                  expiresInSeconds: c
                }),
                token: N
              }, (C as any).signal),
              f: any = (((Se as any)(Nt, (s as any).signal) as any).then as any)(async (): Promise<any> => {
                if (((s as any).signal as any).aborted) return await l;
                throw ((C as any).abort as any)(new (DOMException as any)("Provisioning sink timed out", "TimeoutError")), new (DOMException as any)("Provisioning sink timed out", "TimeoutError");
              });
            d = await ((Promise as any).race as any)([l, f]);
          } catch {
            throw (this as any).deliveryIndeterminate = !0, new (v as any)("delivery-indeterminate", "The credential delivery outcome is unknown and must be reconciled before provisioning again.");
          } finally {
            ((s as any).abort as any)();
          }
          let p: any = (V as any)(d) ? (W as any)((d as any).consumerReference, Pt) : null;
          if ((p as any) == (null as any)) throw (this as any).deliveryIndeterminate = !0, new (v as any)("delivery-indeterminate", "The credential delivery outcome is unknown and must be reconciled before provisioning again.");
          return {
            consumerReference: p,
            ...((c as any) == (null as any) ? {} : {
              expiresInSeconds: c
            })
          };
        });
      }
      assertSinkAvailable(): any {
        if ((((this as any).sink as any).availability as any) !== ("available" as any)) throw new (v as any)("sink-unavailable", "1Password provisioning is unavailable until a credential consumer is configured.");
      }
      async runMutation(e: any, n: any): Promise<any> {
        if ((this as any).deliveryIndeterminate) throw new (v as any)("delivery-indeterminate", "The previous credential delivery must be reconciled before provisioning again.");
        if ((this as any).mutationInProgress) throw new (v as any)("busy", "A 1Password provisioning operation is already running.");
        (this as any).mutationInProgress = !0;
        try {
          if ((e as any).aborted) throw new (v as any)("cancelled", "The 1Password operation was canceled.");
          return await (n as any)(e);
        } finally {
          (this as any).mutationInProgress = !1;
        }
      }
      async runJson(e: any, n: any, t: any): Promise<any> {
        let o: any = await ((this as any).runOp as any)(e, n, At, t);
        try {
          return ((JSON as any).parse as any)((o as any).stdout);
        } catch {
          throw new (v as any)("invalid-output", "1Password returned malformed JSON.");
        }
      }
      async runOp(e: any, n: any, t: any, o: any): Promise<any> {
        let i: any = await ((this as any).resolveSupportedPath as any)(o),
          c: any;
        try {
          c = await (((this as any).runtime as any).resolveVerifiedLauncherPath as any)(o);
        } catch (h: any) {
          throw (Ae as any)(h);
        }
        try {
          return await ((this as any).executor as any)(c, [i, ...e], {
            signal: o,
            timeoutMs: n,
            maxBufferBytes: t,
            env: (ve as any)((this as any).childProcessEnvironment)
          });
        } catch (h: any) {
          throw (fn as any)(h);
        }
      }
      async resolveSupportedPath(e: any): Promise<any> {
        let n: any = await ((this as any).inspectReadiness as any)(e);
        if (((n as any).state as any) === ("ready" as any)) return (n as any).path;
        if ((((n as any).state as any) === ("missing-cli" as any) || ((n as any).state as any) === ("unsupported-version" as any)) && (this as any).prepareManagedCli && !(e as any).aborted) {
          try {
            await (((this as any).runtime as any).prepareManaged as any)(e);
          } catch (t: any) {
            throw (Ae as any)(t);
          }
          if (n = await ((this as any).inspectReadiness as any)(e), ((n as any).state as any) === ("ready" as any)) return (n as any).path;
        }
        throw ((n as any).state as any) === ("unsupported-platform" as any) ? new (v as any)("unsupported-platform", "1Password desktop provisioning is supported on macOS only.") : ((n as any).state as any) === ("unsupported-version" as any) ? new (v as any)("unsupported-version", "The detected 1Password CLI does not support expiring service accounts.") : new (v as any)("missing-cli", "No verified 1Password CLI is ready.");
      }
    };
  });
var Xt: any = {};
(Ie as any)(Xt, {
  OnePasswordConnectionService: (): any => De,
  createDefaultOnePasswordConnectionService: (): any => $t
});
(module as any).exports = (Rn as any)(Xt);
var bn: any = (require as any)("node:crypto"),
  An: any = (require as any)("node:path");
(Re as any)();
var ar: string = "service-account-token";
var Un: any = ["integration-off", "turn-refused", "not-connected", "reconnect-required", "extension-unavailable", "invalid-request", "authentication-failed", "internal"],
  Eo: any = [...Un, "grant-not-found", "grant-revoked", "window-unknown", "tab-not-found", "tab-ambiguous", "invalid-tab", "fill-failed", "autosubmit-failed", "lease-busy"];
(Oe as any)();
var jn: any = {
  "SAND-E0001": {
    name: "unregistered",
    domain: "registry",
    retryable: !1,
    summary: "A value that is not a registered SandError reached the emit boundary and was reclassified; the original code and payload never ship.",
    payload: [],
    seededFrom: "sandErrorTags emit-boundary validation in registry.ts"
  },
  "SAND-E0101": {
    name: "gatewayRefused",
    domain: "transport",
    retryable: !0,
    summary: "Gateway connection refused: nothing accepted the desktop-to-box connect.",
    payload: ["errno"],
    seededFrom: "classifyGatewayFetchFailure `refused` in gateway-reachability.ts"
  },
  "SAND-E0102": {
    name: "gatewayTimeout",
    domain: "transport",
    retryable: !0,
    summary: "Gateway attempt timed out: the deadline fired with no reply.",
    payload: ["errno"],
    seededFrom: "classifyGatewayFetchFailure `timeout` in gateway-reachability.ts"
  },
  "SAND-E0103": {
    name: "gatewayHttp5xx",
    domain: "transport",
    retryable: !0,
    summary: "Gateway replied 5xx: the pod proxy routed but the gateway or host errored.",
    payload: ["httpStatus"],
    seededFrom: "classifyGatewayHttpResponse `http_5xx` in gateway-reachability.ts"
  },
  "SAND-E0104": {
    name: "gatewayDns",
    domain: "transport",
    retryable: !0,
    summary: "Gateway host name did not resolve.",
    payload: ["errno"],
    seededFrom: "classifyGatewayFetchFailure `dns` in gateway-reachability.ts"
  },
  "SAND-E0105": {
    name: "gatewayNetwork",
    domain: "transport",
    retryable: !0,
    summary: "Gateway transport failed on a live-but-broken route.",
    payload: ["errno"],
    seededFrom: "classifyGatewayFetchFailure `network` in gateway-reachability.ts"
  },
  "SAND-E0106": {
    name: "backendHttpStatus",
    domain: "transport",
    retryable: !0,
    summary: "Cursor backend replied with a non-ok HTTP status.",
    payload: ["httpStatus"],
    seededFrom: "classifyDeliveryError BackendStatusError in sand-automation-fire-consumer.ts"
  },
  "SAND-E0107": {
    name: "backendUnreachable",
    domain: "transport",
    retryable: !0,
    summary: "Cursor backend was unreachable over the transport.",
    payload: ["errno"],
    seededFrom: "classifyDeliveryError errno branch in sand-automation-fire-consumer.ts"
  },
  "SAND-E0108": {
    name: "backendDeliveryFailed",
    domain: "transport",
    retryable: !0,
    summary: "Backend delivery attempt failed outside the status and errno shapes; the caller retries with backoff.",
    payload: [],
    seededFrom: "classifyDeliveryError fallback in sand-automation-fire-consumer.ts"
  },
  "SAND-E0109": {
    name: "logShipTimeout",
    domain: "transport",
    retryable: !0,
    summary: "A structured-log submitLogs attempt hit the transport submit deadline; the batch requeues and redelivers.",
    payload: ["batchEntries"],
    seededFrom: "isDeadlineExpiry in structured-log-transport.ts shipLogs"
  },
  "SAND-E0110": {
    name: "streamStalled",
    domain: "transport",
    retryable: !0,
    summary: "Established gateway event stream went silent past the stall watchdog and was torn down; the loop reconnects.",
    payload: [],
    seededFrom: "stallWatchdog downReason `stall-timeout` in gateway-client.ts"
  },
  "SAND-E0111": {
    name: "localExecNoProviders",
    domain: "transport",
    retryable: !0,
    summary: "Local-machine action refused: no desktop is registered on the reverse local-exec channel.",
    payload: [],
    seededFrom: "requireProvider providers.size === 0 in local-exec-bridge.ts"
  },
  "SAND-E0112": {
    name: "localExecProvidersStale",
    domain: "transport",
    retryable: !0,
    summary: "Local-machine action refused: desktops are registered on the reverse local-exec channel but none heartbeated inside the liveness window.",
    payload: [],
    seededFrom: "requireProvider live-resolve miss in local-exec-bridge.ts"
  },
  "SAND-E0113": {
    name: "localExecComputerUnknown",
    domain: "transport",
    retryable: !0,
    summary: "Local-machine action refused: the addressed computer matches no registered desktop connection.",
    payload: [],
    seededFrom: "requireProvider unknown-computerId branch in local-exec-bridge.ts"
  },
  "SAND-E0114": {
    name: "localExecComputerAmbiguous",
    domain: "transport",
    retryable: !0,
    summary: "Local-machine action refused: multiple computers are registered and the caller omitted machineId.",
    payload: [],
    seededFrom: "requireProvider missing-computerId branch in local-exec-bridge.ts"
  },
  "SAND-E0115": {
    name: "localExecMessagesUnsupported",
    domain: "transport",
    retryable: !1,
    summary: "Messages op refused: the addressed computer is connected but its desktop app never declared the messagesOp capability.",
    payload: [],
    seededFrom: "requireProvider messages-op capability branch in local-exec-bridge.ts"
  },
  "SAND-E0116": {
    name: "gatewayPodHibernated",
    domain: "transport",
    retryable: !0,
    summary: "Gateway route answered that the box pod is hibernated or mid-transition on its node.",
    payload: ["httpStatus"],
    seededFrom: "classifyGatewayHttpResponse `pod_hibernated` in gateway-reachability.ts"
  },
  "SAND-E0201": {
    name: "boxAccessDenied",
    domain: "auth",
    retryable: !1,
    summary: "Backend refused box access for a NO_STORAGE (privacy-mode) account.",
    payload: [],
    seededFrom: "SandGatewayFailureMetadata `no-storage` in gateway-reachability.ts"
  },
  "SAND-E0202": {
    name: "gatewayAccessDenied",
    domain: "auth",
    retryable: !1,
    summary: "Gateway attempt was refused by an auth/entitlement gate (401/403); a retry cannot fix it.",
    payload: ["httpStatus"],
    seededFrom: "classifyGatewayHttpResponse `access_denied` in gateway-reachability.ts"
  },
  "SAND-E0203": {
    name: "connectorAuthStartRefused",
    domain: "auth",
    retryable: !1,
    summary: "Connector OAuth flow could not start: the connector cannot mint a sign-in link in its current state.",
    payload: ["reason"],
    seededFrom: "authenticateServer refusal branches in mcp-auth-watch-lifecycle.ts"
  },
  "SAND-E0204": {
    name: "connectorAuthStartFailed",
    domain: "auth",
    retryable: !0,
    summary: "Connector OAuth flow failed to start: the backend OAuth status probe failed.",
    payload: ["reason"],
    seededFrom: "checkAuthStatus throw in mcp-auth-watch-lifecycle.ts authenticateServer"
  },
  "SAND-E0205": {
    name: "connectorOauthCallbackFailed",
    domain: "auth",
    retryable: !0,
    summary: "Connector OAuth callback did not complete: the provider redirected an error or no code, or the backend rejected the exchange.",
    payload: ["reason"],
    seededFrom: "loopback handleRequest failure branches in mcp-oauth-loopback.ts"
  },
  "SAND-E0206": {
    name: "connectorAuthAbandoned",
    domain: "auth",
    retryable: !0,
    summary: "Connector OAuth flow expired: the started flow's token never landed within the watch window.",
    payload: [],
    seededFrom: "pollPendingAuthWatch expiry in mcp-auth-watch-lifecycle.ts"
  },
  "SAND-E0207": {
    name: "webauthnNoProvider",
    domain: "auth",
    retryable: !0,
    summary: "WebAuthn proxy ceremony refused: no desktop is registered on the reverse WebAuthn channel.",
    payload: [],
    seededFrom: "selectProvider empty registry in webauthn-proxy-bridge.ts"
  },
  "SAND-E0208": {
    name: "webauthnProviderStale",
    domain: "auth",
    retryable: !0,
    summary: "WebAuthn proxy ceremony refused: desktops are registered but none heartbeated inside the liveness window.",
    payload: [],
    seededFrom: "selectProvider live-resolve miss in webauthn-proxy-bridge.ts"
  },
  "SAND-E0209": {
    name: "webauthnCeremonyTimedOut",
    domain: "auth",
    retryable: !0,
    summary: "WebAuthn proxy ceremony timed out: the desktop never settled it inside the ceremony deadline.",
    payload: [],
    seededFrom: "DeadlineExceededError branch in webauthn-proxy-bridge.ts requestCeremony"
  },
  "SAND-E0210": {
    name: "webauthnConsentDeclined",
    domain: "auth",
    retryable: !1,
    summary: "WebAuthn proxy ceremony declined by the user at the desktop consent prompt.",
    payload: [],
    seededFrom: "consent decline branch in node-agent-coordinator/webauthn/provider.ts"
  },
  "SAND-E0211": {
    name: "webauthnSignFailed",
    domain: "auth",
    retryable: !0,
    summary: "WebAuthn proxy signing leg failed on the desktop: the signer reported a DOMException instead of an assertion.",
    payload: ["domError", "signErrorClass"],
    seededFrom: "signer error frames in node-agent-coordinator/webauthn/provider.ts"
  },
  "SAND-E0212": {
    name: "webauthnDesktopFailed",
    domain: "auth",
    retryable: !0,
    summary: "WebAuthn proxy ceremony failed on the desktop outside the declined and signing shapes, or an older desktop reported no stage attribution.",
    payload: ["domError", "signErrorClass"],
    seededFrom: "unattributed error settlement in webauthn-proxy-bridge.ts"
  },
  "SAND-E0213": {
    name: "webauthnDispatchFailed",
    domain: "auth",
    retryable: !0,
    summary: "WebAuthn proxy ceremony dispatch failed: the selected desktop's request stream refused the ceremony write.",
    payload: [],
    seededFrom: "provider.send throw in webauthn-proxy-bridge.ts requestCeremony"
  },
  "SAND-E0214": {
    name: "sessionRefreshHttpStatus",
    domain: "auth",
    retryable: !0,
    summary: "Cursor session token refresh got a non-ok HTTP status; the session is kept and a later refresh may succeed.",
    payload: ["httpStatus"],
    seededFrom: "non-ok /oauth/token response in cursor-auth.ts runRefreshAccessToken"
  },
  "SAND-E0215": {
    name: "sessionRefreshNetwork",
    domain: "auth",
    retryable: !0,
    summary: "Cursor session token refresh failed on the transport before any backend verdict; the session is kept.",
    payload: ["errno"],
    seededFrom: "fetch throw in cursor-auth.ts runRefreshAccessToken"
  },
  "SAND-E0216": {
    name: "sessionRefreshBadPayload",
    domain: "auth",
    retryable: !0,
    summary: "Cursor session token refresh returned an ok status without a usable token payload; the session is kept.",
    payload: [],
    seededFrom: "unreadable body / empty access_token branches in cursor-auth.ts runRefreshAccessToken"
  },
  "SAND-E0217": {
    name: "sessionRefreshRejected",
    domain: "auth",
    retryable: !1,
    summary: "Cursor session refresh was terminally rejected by the backend's shouldLogout verdict with no rotation-race rescue; the user was signed out.",
    payload: [],
    seededFrom: "shouldLogout sign-out in cursor-auth.ts runRefreshAccessToken"
  },
  "SAND-E0218": {
    name: "sessionPolicyRefused",
    domain: "auth",
    retryable: !1,
    summary: "Cursor session refresh was refused by the device's MDM sign-in policy; the user was signed out.",
    payload: [],
    seededFrom: "MDM policy verdict in cursor-auth.ts runRefreshAccessToken"
  },
  "SAND-E0219": {
    name: "sessionSecretsUnavailable",
    domain: "auth",
    retryable: !1,
    summary: "OS secure storage is unavailable, so the signed-in session's Cursor tokens are held in memory only and will not survive a restart.",
    payload: [],
    seededFrom: "noteSecretsUnavailableSession in cursor-auth.ts storeAuthentication callers"
  },
  "SAND-E0220": {
    name: "credentialSubmitFailed",
    domain: "auth",
    retryable: !1,
    summary: "Browser credential fill wrote the password but the sign-in form could not be submitted safely, so the filled values were cleared and the user has to sign in themselves.",
    payload: [],
    seededFrom: "submit-failed refusal in credential-fill-executor.ts execute, projected by reportCredentialFillOutcome in structured-log-telemetry.ts"
  },
  "SAND-E0221": {
    name: "credentialProviderSetupNotReady",
    domain: "auth",
    retryable: !0,
    summary: "1Password connect wizard probed the desktop and found no usable 1Password CLI or app (missing CLI, CLI integration off, app unreachable, or the probe itself failed), so the mint step could not be offered.",
    payload: ["reason"],
    seededFrom: "detectMint not-ready readiness states in onepassword-connection-service.ts"
  },
  "SAND-E0222": {
    name: "credentialProviderSetupFailed",
    domain: "auth",
    retryable: !0,
    summary: "1Password connect attempt ended without a stored credential: the CLI mint was denied, cancelled, timed out, or failed, or the backend refused to store the delivered token.",
    payload: ["reason"],
    seededFrom: "startMint failure mapping (mintError) in onepassword-connection-service.ts"
  },
  "SAND-E0301": {
    name: "bootStageStalled",
    domain: "rebuild",
    retryable: !0,
    summary: "Box rebuild stalled before completing a boot stage.",
    payload: ["stage"],
    seededFrom: "SAND_BOX_BOOT_STAGES in host/ports/telemetry.ts"
  },
  "SAND-E0302": {
    name: "hostLifecycleStalled",
    domain: "rebuild",
    retryable: !0,
    summary: "In-box host startup stalled inside a lifecycle phase.",
    payload: [],
    seededFrom: "HostLifecycleProgress watchdog in host-lifecycle-progress.ts"
  },
  "SAND-E0303": {
    name: "hostLifecycleFailed",
    domain: "rebuild",
    retryable: !0,
    summary: "In-box host startup failed inside a lifecycle phase.",
    payload: [],
    seededFrom: "HostLifecycleProgress.fail in host-lifecycle-progress.ts"
  },
  "SAND-E0304": {
    name: "boxImageCheckTimedOut",
    domain: "rebuild",
    retryable: !0,
    summary: "Box image-update check hit its deadline before the backend answered.",
    payload: [],
    seededFrom: "DeadlineExceededError branch in forever-box-service.ts"
  },
  "SAND-E0305": {
    name: "boxImageCheckFailed",
    domain: "rebuild",
    retryable: !0,
    summary: "Box image-update check failed before its deadline.",
    payload: ["errorClass"],
    seededFrom: "Image-check catch fallback in forever-box-service.ts"
  },
  "SAND-E0401": {
    name: "providerOverloaded",
    domain: "agent",
    retryable: !0,
    summary: "Model provider is overloaded (capacity or rate limit).",
    payload: ["connectCode"],
    seededFrom: "isProviderCapacityError in transient-stream-error.ts"
  },
  "SAND-E0402": {
    name: "firstTokenStall",
    domain: "agent",
    retryable: !0,
    summary: "Model provider streamed nothing within the first-token deadline.",
    payload: [],
    seededFrom: "isFirstTokenStallError in transient-stream-error.ts"
  },
  "SAND-E0403": {
    name: "streamReset",
    domain: "agent",
    retryable: !0,
    summary: "Turn stream dropped on a transient transport reset.",
    payload: ["connectCode", "errno"],
    seededFrom: "isTransientStreamError in transient-stream-error.ts"
  },
  "SAND-E0404": {
    name: "contextWindowOverflow",
    domain: "agent",
    retryable: !1,
    summary: "Turn hit a context-window overflow dead end a retry would repeat.",
    payload: [],
    seededFrom: "isContextOverflowDeadEnd in transient-stream-error.ts"
  },
  "SAND-E0405": {
    name: "backendRejected",
    domain: "agent",
    retryable: !1,
    summary: "Backend rejected the turn with a terminal structured error.",
    payload: ["connectCode"],
    seededFrom: "isRetryableProviderError false + findBackendConnectError in turn-runtime.ts"
  },
  "SAND-E0406": {
    name: "turnRetryable",
    domain: "agent",
    retryable: !0,
    summary: "Turn failed retryably outside every more specific shape.",
    payload: ["connectCode"],
    seededFrom: "isRetryableProviderError true in turn-runtime.ts"
  },
  "SAND-E0407": {
    name: "agentUnclassified",
    domain: "agent",
    retryable: !1,
    summary: "Agent-path operation failed outside every classified shape.",
    payload: [],
    seededFrom: "classifyAgentError fallback in turn-runtime.ts"
  },
  "SAND-E0408": {
    name: "backendCapacityDeferred",
    domain: "agent",
    retryable: !0,
    summary: "Backend deferred the turn at capacity with a server-paced retry-after; the runner sleeps the paced delay and retries.",
    payload: ["connectCode", "retryAfterMs"],
    seededFrom: "isProviderCapacityError + serverRetryAfterMsFromError in classifyAgentError (turn-runtime.ts)"
  },
  "SAND-E0409": {
    name: "memorySynthesisInvalidOutput",
    domain: "agent",
    retryable: !1,
    summary: "Memory synthesis produced an invalid proposal: unparseable output, an unknown evidence citation, or a change the memory state rejected.",
    payload: [],
    seededFrom: "MemorySynthesisAttemptError invalid-output + applySynthesis invalid in memory-synthesis-service.ts"
  },
  "SAND-E0410": {
    name: "memorySynthesisRejected",
    domain: "agent",
    retryable: !1,
    summary: "Memory synthesis verification did not approve the proposed changes.",
    payload: [],
    seededFrom: "MemorySynthesisAttemptError rejected in memory-synthesis-service.ts"
  },
  "SAND-E0411": {
    name: "memorySynthesisStale",
    domain: "agent",
    retryable: !0,
    summary: "Memory files changed under a synthesis run; the pending evidence re-queues against the fresh state.",
    payload: [],
    seededFrom: "applySynthesis stale in memory-synthesis-service.ts"
  },
  "SAND-E0412": {
    name: "memorySynthesisEvidenceDropped",
    domain: "agent",
    retryable: !1,
    summary: "Pending synthesis evidence was shed by a capacity cap before any run consumed it.",
    payload: [],
    seededFrom: "recordTurn overflow shedding in memory-synthesis-service.ts"
  },
  "SAND-E0413": {
    name: "memorySynthesisFailed",
    domain: "agent",
    retryable: !0,
    summary: "Memory synthesis run failed outside the classified shapes (inference transport or deadline).",
    payload: [],
    seededFrom: "runAgent catch fallback in memory-synthesis-service.ts"
  },
  "SAND-E0414": {
    name: "conversationTooLarge",
    domain: "agent",
    retryable: !1,
    summary: "Turn refused at the conversation-size hard cap: the live conversation tree is over the limit and GC could not shrink it, so the refusal repeats until GC succeeds or the user starts a new conversation.",
    payload: [],
    seededFrom: "SandConversationTooLargeError turn gate in conversation-size-limits.ts"
  },
  "SAND-E0415": {
    name: "streamIdleStall",
    domain: "agent",
    retryable: !0,
    summary: "A turn stream that had already produced output went silent past the mid-stream idle deadline; the attempt is cancelled so the step settles, and only re-entered from a resume checkpoint.",
    payload: [],
    seededFrom: "isStreamIdleError in transient-stream-error.ts"
  },
  "SAND-E0416": {
    name: "agentIdentitySyncFailed",
    domain: "agent",
    retryable: !0,
    summary: "Durable agent-identity sync against /sand/agents failed (boot GET after its bounded retries, or a write-through push/delete); the box keeps its durable profile.json / cache copy and the next reconcile retries.",
    payload: ["op", "httpStatus"],
    seededFrom: "SandAgentIdentityService reconcile/push/delete failure legs in agent-identity-service.ts"
  },
  "SAND-E0417": {
    name: "botBlock",
    domain: "agent",
    retryable: !1,
    summary: "Turn landed on a bot-detection or auth-challenge wall (google.com/sorry, Cloudflare challenge, Akamai, ...); classified from the page URL + title by withBotBlockDetection.",
    payload: ["family"],
    seededFrom: "SandError.botBlock constructor"
  },
  "SAND-E0418": {
    name: "turnBackendUnreachable",
    domain: "agent",
    retryable: !0,
    summary: "Turn never reached the Cursor backend: the transport failed on a Node system error (a refused connect or an unresolved host) with no server response.",
    payload: ["errno"],
    seededFrom: "isBackendUnreachableError in transient-stream-error.ts"
  },
  "SAND-E0501": {
    name: "updateFeedFetchFailed",
    domain: "update",
    retryable: !0,
    summary: "Update-feed fetch threw before any HTTP status arrived (network, DNS, or TLS transport) while the machine was online.",
    payload: ["errno"],
    seededFrom: "classifyUpdateCheckError `fetch_throw` in update-telemetry.ts"
  },
  "SAND-E0502": {
    name: "updateFeedHttpStatus",
    domain: "update",
    retryable: !0,
    summary: "Update server replied with a non-ok HTTP status.",
    payload: ["httpStatus"],
    seededFrom: "classifyUpdateCheckError `http_non_ok` in update-telemetry.ts"
  },
  "SAND-E0503": {
    name: "updateFeedMalformed",
    domain: "update",
    retryable: !1,
    summary: "Update server's response body failed the feed schema.",
    payload: [],
    seededFrom: "classifyUpdateCheckError `malformed_body` in update-telemetry.ts"
  },
  "SAND-E0504": {
    name: "updateCheckAborted",
    domain: "update",
    retryable: !0,
    summary: "Update check aborted before a result (dispose, track change, or gate change); the next scheduled check retries.",
    payload: [],
    seededFrom: "checkForUpdates abort closure in sand-update-service.ts"
  },
  "SAND-E0505": {
    name: "updateDisabledByEnv",
    domain: "update",
    retryable: !1,
    summary: "Updater is inert: updates disabled by environment override.",
    payload: [],
    seededFrom: "computeUpdateDisabledReason `disabled-by-env` in update-gate.ts"
  },
  "SAND-E0506": {
    name: "updateDisabledLabBuild",
    domain: "update",
    retryable: !1,
    summary: "Updater is inert: a Sand Lab one-off build outside every track never self-updates.",
    payload: [],
    seededFrom: "computeUpdateDisabledReason `lab-build` in update-gate.ts"
  },
  "SAND-E0507": {
    name: "updateDisabledNotPackaged",
    domain: "update",
    retryable: !1,
    summary: "Updater is inert: an unpackaged development run has nothing to update.",
    payload: [],
    seededFrom: "computeUpdateDisabledReason `not-packaged` in update-gate.ts"
  },
  "SAND-E0508": {
    name: "updateDisabledUnsupportedPlatform",
    domain: "update",
    retryable: !1,
    summary: "Updater is inert: the platform has no supported update path.",
    payload: [],
    seededFrom: "computeUpdateDisabledReason `unsupported-platform` in update-gate.ts"
  },
  "SAND-E0509": {
    name: "updateStagedNotAdopted",
    domain: "update",
    retryable: !0,
    summary: "A Squirrel-staged desktop build was not the one running on the next launch: ShipIt did not swap it in (an apply failure, or an unclean termination that skipped the swap). The updater re-stages on its next check.",
    payload: [],
    seededFrom: "decideUpdateApplySettlement staged/squirrel branch in apply-marker.ts"
  },
  "SAND-E0510": {
    name: "updateApplyIncomplete",
    domain: "update",
    retryable: !0,
    summary: "An explicit restart-to-update was requested but the next launch still ran the old build: the handoff (ShipIt swap, or the parked Windows installer) never completed.",
    payload: [],
    seededFrom: "decideUpdateApplySettlement requested/spawned branches in apply-marker.ts"
  },
  "SAND-E0511": {
    name: "updateInstallerSpawnFailed",
    domain: "update",
    retryable: !0,
    summary: "The parked Windows installer failed to spawn as the app quit for restart-to-update; the user relaunches into the old build.",
    payload: ["errno"],
    seededFrom: "installOnQuit spawn-error callback recorded by applyStagedOnQuit"
  },
  "SAND-E0512": {
    name: "updateAutoRelaunchFailed",
    domain: "update",
    retryable: !1,
    summary: "The update applied but the post-install auto-relaunch never brought Sand back; the confirm arrived late, from a manual launch (SAND-1269).",
    payload: [],
    seededFrom: "decideUpdateApplySettlement confirmed_late branch in apply-marker.ts"
  },
  "SAND-E0513": {
    name: "updateCheckTimedOut",
    domain: "update",
    retryable: !0,
    summary: "Update-feed fetch hit the check deadline with no response (black-holed network or captive portal); the in-flight guard clears and the next scheduled check retries.",
    payload: [],
    seededFrom: "classifyUpdateCheckError `timeout` in update-telemetry.ts"
  },
  "SAND-E0514": {
    name: "updateAppImageReplaceFailed",
    domain: "update",
    retryable: !0,
    summary: "The verified AppImage could not replace the running one at restart-to-update (the rename or the mode change failed, or the AppImage path was no longer a regular file); the old AppImage stays in place and the user relaunches into the old build.",
    payload: ["errno"],
    seededFrom: "installOnQuit failure callback recorded by applyStagedOnQuit for the appimage mechanism"
  },
  "SAND-E0515": {
    name: "updateApplyRejected",
    domain: "update",
    retryable: !0,
    summary: "Squirrel rejected a restart-to-update inside the running process (its error event fired while the build was ready, most often `Could not read update request`), so ShipIt never launched and the app stayed up on the old build; the client discards the staged build, re-stages the offered version, and re-runs an explicit restart once.",
    payload: [],
    seededFrom: "onSquirrelError while ready with a requested apply in sand-update-service.ts"
  },
  "SAND-E0516": {
    name: "updateCheckOffline",
    domain: "update",
    retryable: !0,
    summary: "Update-feed fetch threw while the machine had no network: Electron reported offline, or the transport failed with a code that only means no network. The next scheduled check retries.",
    payload: ["errno"],
    seededFrom: "classifyUpdateCheckError `offline` in update-telemetry.ts"
  },
  "SAND-E0601": {
    name: "desktopStartupFailed",
    domain: "desktop",
    retryable: !1,
    summary: "Desktop bootstrap threw before the app finished starting; the payload names the phase that was in progress.",
    payload: ["phase"],
    seededFrom: "app.whenReady bootstrap catch in electron-main/main.cts"
  },
  "SAND-E0602": {
    name: "desktopStartupStuck",
    domain: "desktop",
    retryable: !0,
    summary: "Desktop bootstrap sat in one phase past the stuck watchdog without finishing, failing, or quitting.",
    payload: ["phase"],
    seededFrom: "desktop-startup-telemetry.ts stuck watchdog"
  },
  "SAND-E0603": {
    name: "desktopUncaughtException",
    domain: "desktop",
    retryable: !1,
    summary: "Desktop main process uncaught exception, kept alive by the process crash guard.",
    payload: [],
    seededFrom: "installProcessCrashGuards reporter in electron-main/main.cts"
  },
  "SAND-E0604": {
    name: "desktopUnhandledRejection",
    domain: "desktop",
    retryable: !1,
    summary: "Desktop main process unhandled promise rejection, kept alive by the process crash guard.",
    payload: [],
    seededFrom: "installProcessCrashGuards reporter in electron-main/main.cts"
  },
  "SAND-E0605": {
    name: "desktopChildProcessGone",
    domain: "desktop",
    retryable: !0,
    summary: "An Electron child process (renderer, GPU, or utility) died abnormally under the desktop main process.",
    payload: ["process", "reason"],
    seededFrom: "render-process-gone / child-process-gone wiring in renderer-lifecycle-telemetry.ts"
  },
  "SAND-E0606": {
    name: "desktopCoordinatorHandoffFailed",
    domain: "desktop",
    retryable: !0,
    summary: "A coordinator port handoff leg threw while transferring a data port; the next request or relaunch re-serves.",
    payload: ["leg"],
    seededFrom: "coordinator port sinks in electron-main/main.cts"
  },
  "SAND-E0607": {
    name: "desktopCoordinatorExitTimeout",
    domain: "desktop",
    retryable: !0,
    summary: "A departing coordinator did not confirm exit within the account-handoff deadline; the handoff blocked on a zombie.",
    payload: ["timeoutMs"],
    seededFrom: "stop() deadline in coordinator-account-runtime.ts"
  },
  "SAND-E0608": {
    name: "desktopLocalExecSpawnFailed",
    domain: "desktop",
    retryable: !0,
    summary: "The detached local-exec daemon failed to spawn from the desktop bundle.",
    payload: ["errno"],
    seededFrom: "spawnLocalExecDaemon error observer in local-exec-native.ts"
  },
  "SAND-E0609": {
    name: "desktopVncLivenessStall",
    domain: "desktop",
    retryable: !0,
    summary: "The interactive box-desktop viewer forwarded repeated key/click input while the framebuffer drew nothing and the wire stayed silent for the rolling window: the connected-but-frozen fingerprint the RFB lifecycle cannot see.",
    payload: [],
    seededFrom: "createVncLivenessDetector emission in box-vnc-liveness.ts"
  },
  "SAND-E0610": {
    name: "desktopUncleanExit",
    domain: "desktop",
    retryable: !1,
    summary: "A prior desktop session's alive marker was never settled by a clean quit: the main process died out from under the app (native crash, OS OOM kill, force-quit, or power loss), observed and reported at the next boot.",
    payload: [],
    seededFrom: "decideUncleanExitSettlement in desktop-unclean-exit-telemetry.ts"
  },
  "SAND-E0611": {
    name: "clientRestoreFailed",
    domain: "desktop",
    retryable: !0,
    summary: "The renderer Client's restore threw before it published ready; the payload names the last restore stage that completed, and the shell offers Retry.",
    payload: ["stage"],
    seededFrom: "restore catch in electron-renderer/client/sand-client.ts"
  },
  "SAND-E0612": {
    name: "clientRestoreStuck",
    domain: "desktop",
    retryable: !0,
    summary: "The renderer Client's restore passed the stuck deadline without publishing ready or failed; the payload names the last restore stage that completed.",
    payload: ["stage"],
    seededFrom: "restore stuck deadline in electron-renderer/client/sand-client.ts"
  },
  "SAND-E0613": {
    name: "desktopPreloadError",
    domain: "desktop",
    retryable: !1,
    summary: "The main window's preload script threw before it exposed the desktop bridge, so the renderer that loads next has no capability and the app never runs.",
    payload: ["errorClass"],
    seededFrom: "preload-error listener in renderer-lifecycle-telemetry.ts"
  },
  "SAND-E0614": {
    name: "policyStopped",
    domain: "desktop",
    retryable: !1,
    summary: "A Dune polling tick or frame callback threw, so the named background loop stopped and never runs again until the process restarts.",
    payload: ["reason"],
    seededFrom: "policyStopped rows in desktop-structured-log-telemetry.ts and structured-log-telemetry.ts"
  },
  "SAND-E0700": {
    name: "clientSliceCorrupt",
    domain: "storage",
    retryable: !1,
    summary: "A persisted Client slice failed its envelope parse or its owner's value codec at load; the owner resets the slice.",
    payload: [],
    seededFrom: "parseEnvelope corrupt + noteValueRejected in client/persistence.ts"
  },
  "SAND-E0701": {
    name: "clientSliceIoError",
    domain: "storage",
    retryable: !0,
    summary: "A Client persistence port operation (read, write, remove, or list) threw.",
    payload: ["errno"],
    seededFrom: "PersistenceRegistry port-operation catch in client/persistence.ts"
  },
  "SAND-E0702": {
    name: "clientSliceQuotaExceeded",
    domain: "storage",
    retryable: !1,
    summary: "A Client slice write was refused for storage quota; retrying cannot free space.",
    payload: [],
    seededFrom: "isQuotaFailure branch of reportThrown in client/persistence.ts"
  },
  "SAND-E0703": {
    name: "clientQueuedFlushNonceMismatch",
    domain: "storage",
    retryable: !1,
    summary: "A queued send reached the Host with a nonce whose accepted digest did not match.",
    payload: [],
    seededFrom: "NONCE_DIGEST_MISMATCH in client/send/send-journal.ts queuedFlushFailureCause"
  },
  "SAND-E0704": {
    name: "clientQueuedFlushCapabilityUnavailable",
    domain: "storage",
    retryable: !1,
    summary: "A queued send could not flush because the Host lacks the required send capability.",
    payload: [],
    seededFrom: "SAND_SOURCE_CAPABILITY_UNAVAILABLE in client/send/send-journal.ts queuedFlushFailureCause"
  },
  "SAND-E0705": {
    name: "clientQueuedFlushHostRejected",
    domain: "storage",
    retryable: !1,
    summary: "Acceptance-status resolution proved that the Host rejected a queued send.",
    payload: [],
    seededFrom: "rejected acceptance status in client/send/send-journal.ts resolveRecord"
  },
  "SAND-E0706": {
    name: "clientQueuedSendSuperseded",
    domain: "storage",
    retryable: !1,
    summary: "An explicit recovery action retired an offline-queued send without delivery proof.",
    payload: [],
    seededFrom: "retireCanceled in client/send/send-journal.ts"
  },
  "SAND-E0707": {
    name: "clientQueuedSendAckExpired",
    domain: "storage",
    retryable: !1,
    summary: "A flushed queued send received no authoritative echo before its online ACK deadline.",
    payload: [],
    seededFrom: "markAckTimedOut in client/send/send-journal.ts"
  },
  "SAND-E0720": {
    name: "journalAppendFailed",
    domain: "storage",
    retryable: !0,
    summary: "Committing the prepared transcript WAL into the canonical journal failed; the checkpoint stays durable and the turn path surfaces the error.",
    payload: ["errno"],
    seededFrom: "commitCheckpoint in transcript-mirror.ts"
  },
  "SAND-E0721": {
    name: "journalCheckpointFailed",
    domain: "storage",
    retryable: !0,
    summary: "Deriving or writing the pending transcript WAL checkpoint failed before anything was committed.",
    payload: ["errno"],
    seededFrom: "prepareCheckpoint in transcript-mirror.ts"
  },
  "SAND-E0722": {
    name: "journalCorruptTail",
    domain: "storage",
    retryable: !1,
    summary: "The transcript journal was missing, truncated, or torn at open for a conversation with durable history; it was discarded and rebuilt from the checkpoint.",
    payload: ["tail", "errno"],
    seededFrom: "initialize rebuild branch in transcript-mirror.ts"
  },
  "SAND-E0723": {
    name: "journalReplayFailed",
    domain: "storage",
    retryable: !0,
    summary: "Reconciling the pending transcript WAL against the durable checkpoint at recover failed; the journal cannot advance until the mismatch resolves.",
    payload: ["errno"],
    seededFrom: "recover in transcript-mirror.ts"
  },
  "SAND-E0724": {
    name: "journalRebuildFailed",
    domain: "storage",
    retryable: !0,
    summary: "Re-deriving the transcript journal from the durable checkpoint failed after a corrupt or absent journal was discarded; the next recover retries the rebuild.",
    payload: ["tail", "errno"],
    seededFrom: "initialize rebuild branch in transcript-mirror.ts"
  },
  "SAND-E0725": {
    name: "checkpointPublicationFailed",
    domain: "storage",
    retryable: !0,
    summary: "Publishing the turn's checkpoint root pointer was not durably persisted; the prior checkpoint stays authoritative and the turn fails closed.",
    payload: [],
    seededFrom: "SandCheckpointPublicationError latestRootBlobId publish gate in agent-db.ts"
  },
  "SAND-E0801": {
    name: "cookieApprovalNoMachine",
    domain: "chrome-import",
    retryable: !0,
    summary: "Chrome cookie origin approval refused: no desktop coordinator is connected, so there is no machine to ask.",
    payload: [],
    seededFrom: "providers.size === 0 refusal in cookie-origin-approval-bridge.ts request, and hasUserComputer() false in grokBotCookieOriginApprovalPort.ts"
  },
  "SAND-E0802": {
    name: "cookieApprovalMachineStale",
    domain: "chrome-import",
    retryable: !0,
    summary: "Chrome cookie origin approval refused: desktops are registered but none heartbeated inside the liveness window.",
    payload: [],
    seededFrom: "selectProvider live-resolve miss in cookie-origin-approval-bridge.ts request"
  },
  "SAND-E0803": {
    name: "cookieApprovalNoWindow",
    domain: "chrome-import",
    retryable: !0,
    summary: "Chrome cookie origin approval refused: no Grok Bot window on the desktop carries the approval hook.",
    payload: [],
    seededFrom: "CookieOriginApprovalNoWindowError branches in cookie-origin-approval-executor.ts"
  },
  "SAND-E0804": {
    name: "cookieApprovalNoMatch",
    domain: "chrome-import",
    retryable: !1,
    summary: "Chrome cookie origin approval refused: no Chrome cookies match the requested origins.",
    payload: [],
    seededFrom: "matchCookieOriginApprovalItems empty branch in cookie-origin-approval-executor.ts"
  },
  "SAND-E0805": {
    name: "cookieApprovalExpired",
    domain: "chrome-import",
    retryable: !0,
    summary: "Chrome cookie origin approval refused: the ask TTL fired before the user answered.",
    payload: [],
    seededFrom: "askTtl expiry in cookie-origin-approval-bridge.ts request"
  },
  "SAND-E0806": {
    name: "cookieApprovalAborted",
    domain: "chrome-import",
    retryable: !1,
    summary: "Chrome cookie origin approval refused: the request was cancelled (turn abort) before the user answered.",
    payload: [],
    seededFrom: "abort refusals in cookie-origin-approval-bridge.ts and cancelAndRefuse/abortedReply in cookie-origin-approval-executor.ts"
  },
  "SAND-E0807": {
    name: "cookieApprovalUnavailable",
    domain: "chrome-import",
    retryable: !0,
    summary: "Chrome cookie origin approval refused: the desktop present leg failed outside every classified shape.",
    payload: [],
    seededFrom: "unclassified present-leg refusals in cookie-origin-approval-executor.ts and node-agent-coordinator/cookie-origin-approval/provider.ts"
  },
  "SAND-E0808": {
    name: "cookieApprovalEnumerateFailed",
    domain: "chrome-import",
    retryable: !0,
    summary: "Chrome cookie origin approval failed: desktop cookie enumeration threw.",
    payload: ["errorClass"],
    seededFrom: "listCookieAllowItems catch in cookie-origin-approval-executor.ts"
  },
  "SAND-E0809": {
    name: "cookieApprovalCollectFailed",
    domain: "chrome-import",
    retryable: !0,
    summary: "Chrome cookie origin approval failed: desktop cookie collection after a grant threw.",
    payload: ["errorClass"],
    seededFrom: "collectCookiesForGrants catch in cookie-origin-approval-executor.ts"
  },
  "SAND-E0810": {
    name: "cookieInjectFailed",
    domain: "chrome-import",
    retryable: !0,
    summary: "Chrome cookie inject failed in the box: the inject leg threw (script error, box Chrome CDP missing, or box unreachable).",
    payload: ["errorClass"],
    seededFrom: "inject catch in cookie-origin-approval-service.ts"
  },
  "SAND-E0811": {
    name: "cookieImportGateOff",
    domain: "chrome-import",
    retryable: !1,
    summary: "Chrome cookie inject refused: the sand_import_chrome_cookies gate is off, so a retry cannot succeed until the gate flips.",
    payload: [],
    seededFrom: "isEnabled() false branch in chrome-cookie-import-service.ts inject"
  },
  "SAND-E0812": {
    name: "chromeCookieImportFailed",
    domain: "chrome-import",
    retryable: !0,
    summary: "Manual Settings Chrome cookie import failed outside every classified shape.",
    payload: ["errorClass"],
    seededFrom: "importChromeCookies catch in main-edge.ts"
  }
};
function Vn(this: any): any {
  let r: any = {};
  for (let [e, n] of ((Object as any).entries as any)(jn)) (r as any)[(n as any).name] = (t: any): any => ({
    code: e,
    ...t
  });
  return r;
}
var _e: any = (Vn as any)();
var dr: any = {
  onepassword: "1password",
  email: "email"
};
(me as any)();
(Me as any)();
(ie as any)();
var Ye: any = (fe as any)({
    name: "sand-onepassword-backend",
    timeoutMs: 3e4
  }),
  Sn: any = (fe as any)({
    name: "sand-onepassword-mint",
    timeoutMs: 24e4
  }),
  Gt: any = /^ops_[A-Za-z0-9_-]+$/,
  jt: number = 4096,
  Vt: string = "Error";
function Z(this: any): any {
  return new (v as any)("invalid-input", "1Password setup failed");
}
function zt(this: any, r: any): any {
  if (!(r instanceof Error) || ((r as any).name as any) !== ("ConnectError" as any)) return;
  if ("details" in r && ((Array as any).isArray as any)((r as any).details)) for (let n of (r as any).details) {
    if (!(V as any)(n) || !(V as any)((n as any).debug)) continue;
    let t: any = ((n as any).debug as any).details;
    if (!(V as any)(t) || (typeof (t as any).detail as any) != ("string" as any)) continue;
    let o: any = (((t as any).detail as any).trim as any)();
    if (((o as any).length as any) > (0 as any)) return o;
  }
  let e: any = "rawMessage" in r && (typeof (r as any).rawMessage as any) == ("string" as any) ? (((r as any).rawMessage as any).trim as any)() : "";
  return ((e as any).length as any) === (0 as any) || (e as any) === (Vt as any) ? void 0 : e;
}
function qt(this: any, r: any): any {
  let e: any = ((r as any).trim as any)();
  if (((e as any).length as any) === (0 as any) || (((Buffer as any).byteLength as any)(e, "utf8") as any) > (jt as any) || !((Gt as any).test as any)(e)) throw new (v as any)("invalid-token", "That doesn't look like a 1Password service account token. Paste the whole token, which starts with \u201Cops_\u201D.");
  return e;
}
function Zt(this: any, r: any): any {
  return (r as any) === ("cancelled" as any) || (r as any) === ("denied" as any) ? "cancelled" : (r as any) === ("timeout" as any) ? "timeout" : "failed";
}
function vn(this: any, r: any): any {
  if (r instanceof v) {
    let n: any;
    switch ((r as any).code) {
      case "missing-cli":
      case "unsupported-platform":
        n = "missing-cli";
        break;
      case "integration-off":
      case "app-unreachable":
      case "denied":
      case "permission":
      case "cancelled":
      case "timeout":
      case "invalid-token":
        n = (r as any).code;
        break;
      case "conflict":
        n = "name-conflict";
        break;
      default:
        n = "op-error";
    }
    return {
      code: n,
      message: (r as any).message
    };
  }
  let e: any = (zt as any)(r);
  return (e as any) !== (void 0 as any) ? {
    code: "op-error",
    message: e
  } : {
    code: "op-error",
    message: r instanceof Error ? (r as any).message : "1Password setup failed"
  };
}
var De: any = class {
  [key: string]: any;
  constructor(e: any) {
    (this as any).options = e;
  }
  options: any;
  bridgePromise: any = null;
  state: any = {
    accounts: [],
    directory: null
  };
  activeMint: any = null;
  activeDelivery: any = null;
  getBridge(): any {
    return (this as any).bridgePromise ??= ((Promise as any).resolve as any)((((this as any).options as any).createBridge as any)({
      availability: "available",
      accept: async (e: any, n: any): Promise<any> => {
        if (((this as any).activeDelivery as any) == (null as any)) throw new (v as any)("sink-unavailable", "No 1Password delivery is active.");
        return await ((this as any).activeDelivery as any)(e, n);
      }
    })), (this as any).bridgePromise;
  }
  applyState(e: any): any {
    (this as any).state = e;
  }
  async refresh(): Promise<any> {
    ((this as any).applyState as any)(await ((Ye as any).run as any)((e: any): any => ((((this as any).options as any).backend as any).get as any)(e)));
  }
  projectStatus(): any {
    return {
      connected: ((((this as any).state as any).accounts as any).length as any) > (0 as any),
      accounts: ((this as any).state as any).accounts
    };
  }
  async getState(): Promise<any> {
    return await ((this as any).refresh as any)(), {
      status: ((this as any).projectStatus as any)(),
      directory: ((this as any).state as any).directory
    };
  }
  async sync(e: any = "manual"): Promise<any> {
    ((this as any).applyState as any)(await ((Ye as any).run as any)((n: any): any => ((((this as any).options as any).backend as any).sync as any)(e, n)));
  }
  async disconnect(e: any): Promise<any> {
    ((this as any).applyState as any)(await ((Ye as any).run as any)((n: any): any => ((((this as any).options as any).backend as any).disconnect as any)(e, n)));
  }
  async approve(e: any): Promise<any> {
    return await ((((this as any).options as any).backend as any).approve as any)(e);
  }
  async deny(e: any): Promise<any> {
    return await ((((this as any).options as any).backend as any).deny as any)(e);
  }
  report(e: any): any {
    let n: any = ((this as any).options as any).reportConnectorAuth;
    if ((n as any) !== (void 0 as any)) try {
      (n as any)({
        ...e,
        serverName: (dr as any).onepassword
      });
    } catch (t: any) {
      (J as any)("onepassword", "connector-auth-report", t);
    }
  }
  reportFlow(e: any, n: any): any {
    ((this as any).report as any)({
      ...n,
      reauth: (e as any).reauth,
      serverId: (e as any).serverId
    });
  }
  async detectMint(): Promise<any> {
    let e: any = await ((this as any).probeMintReadiness as any)();
    return ((this as any).report as any)(((e as any).state as any) === ("ready" as any) ? {
      phase: "clicked",
      outcome: "ok"
    } : {
      phase: "clicked",
      outcome: "failed",
      error: ((_e as any).credentialProviderSetupNotReady as any)({
        reason: (e as any).state
      })
    }), e;
  }
  async probeMintReadiness(): Promise<any> {
    try {
      let e: any = await ((this as any).getBridge as any)();
      return await ((Sn as any).run as any)(async (n: any): Promise<any> => {
        let t: any = await ((e as any).inspectReadiness as any)(n);
        if (((t as any).state as any) === ("unsupported-platform" as any)) return {
          state: "missing-cli"
        };
        let o: any;
        return (((t as any).state as any) === ("missing-cli" as any) || ((t as any).state as any) === ("unsupported-version" as any)) && (o = await ((e as any).listAccounts as any)(n), t = await ((e as any).inspectReadiness as any)(n)), ((t as any).state as any) === ("unsupported-platform" as any) || ((t as any).state as any) === ("missing-cli" as any) ? {
          state: "missing-cli"
        } : ((t as any).state as any) === ("unsupported-version" as any) ? {
          state: "error",
          detail: `1Password CLI ${(t as any).version} does not support expiring service accounts`
        } : {
          state: "ready",
          version: (t as any).version,
          accounts: o ?? (await ((e as any).listAccounts as any)(n))
        };
      });
    } catch (e: any) {
      let n: any = (vn as any)(e);
      return ((n as any).code as any) === ("missing-cli" as any) ? {
        state: "missing-cli"
      } : ((n as any).code as any) === ("integration-off" as any) ? {
        state: "integration-off"
      } : ((n as any).code as any) === ("app-unreachable" as any) ? {
        state: "app-unreachable"
      } : {
        state: "error",
        detail: (n as any).message
      };
    }
  }
  async startMint(e: any): Promise<any> {
    if (((this as any).activeMint as any) != (null as any)) return {
      ok: !1,
      code: "op-error",
      message: "1Password setup is already running"
    };
    let n: any = new (AbortController as any)();
    (this as any).activeMint = n;
    let t: any = {
      reauth: ((e as any).connectionId as any) == (null as any) ? void 0 : !0,
      serverId: (e as any).connectionId,
      delivered: !1
    };
    try {
      ((this as any).reportFlow as any)(t, {
        phase: "flow_started",
        outcome: "ok"
      });
      let o: any = await ((Sn as any).run as any)((i: any): any => {
        let c: any = ((AbortSignal as any).any as any)([(n as any).signal, i]);
        return "serviceAccountToken" in e ? ((this as any).connectWithToken as any)(e, t, c) : ((this as any).connect as any)(e, t, c);
      });
      return (t as any).serverId = (o as any).connectionId, ((this as any).reportFlow as any)(t, {
        phase: "token_stored",
        outcome: "ok"
      }), {
        ok: !0,
        result: o
      };
    } catch (o: any) {
      let i: any = (vn as any)(o);
      return ((this as any).reportFlow as any)(t, {
        phase: (t as any).delivered ? "token_stored" : "callback_received",
        outcome: (Zt as any)((i as any).code),
        error: ((_e as any).credentialProviderSetupFailed as any)({
          reason: (i as any).code
        })
      }), {
        ok: !1,
        ...i
      };
    } finally {
      ((this as any).activeMint as any) === (n as any) && ((this as any).activeMint = null), (this as any).activeDelivery = null;
    }
  }
  async connectWithToken(e: any, n: any, t: any): Promise<any> {
    let o: any = (qt as any)((e as any).serviceAccountToken);
    (n as any).delivered = !0, ((this as any).reportFlow as any)(n, {
      phase: "callback_received",
      outcome: "ok"
    });
    let i: any = ar,
      c: any,
      h: any,
      g: any;
    if (((e as any).connectionId as any) != (null as any)) {
      await ((this as any).refresh as any)();
      let s: any = ((((this as any).state as any).accounts as any).find as any)((d: any): any => ((d as any).connectionId as any) === ((e as any).connectionId as any));
      if ((s as any) == (null as any)) throw (Z as any)();
      i = (s as any).accountUuid, c = (s as any).accountEmail, h = (s as any).accountUrl, g = (s as any).vaultId;
    }
    let E: any = await ((((this as any).options as any).backend as any).begin as any)(((e as any).connectionId as any) == (null as any) ? {
      serviceAccountToken: o
    } : {
      connectionId: (e as any).connectionId
    }, t);
    if (((e as any).connectionId as any) != (null as any) && ((E as any).connectionId as any) !== ((e as any).connectionId as any)) throw (Z as any)();
    (n as any).reauth = ((E as any).expectedGeneration as any) > (0 as any), (n as any).serverId = (E as any).connectionId ?? (n as any).serverId;
    let b: any = (E as any).vaultId ?? g;
    if ((b as any) == (null as any)) throw (Z as any)();
    let N: any = await ((((this as any).options as any).backend as any).complete as any)({
      mintTicket: (E as any).mintTicket,
      token: o,
      accountUuid: i,
      ...((c as any) == (null as any) ? {} : {
        accountEmail: c
      }),
      ...((h as any) == (null as any) ? {} : {
        accountUrl: h
      })
    }, t);
    ((this as any).applyState as any)(N);
    let C: any = (((N as any).accounts as any).find as any)((s: any): any => ((s as any).vaultId as any) === (b as any) && ((s as any).credentialGeneration as any) === (((E as any).expectedGeneration as any) + (1 as any) as any));
    if ((C as any) == (null as any)) throw (Z as any)();
    return {
      status: ((this as any).projectStatus as any)(),
      vaultName: (C as any).vaultName,
      vaultCreated: !1,
      connectionId: (C as any).connectionId,
      credentialGeneration: (C as any).credentialGeneration
    };
  }
  async connect(e: any, n: any, t: any): Promise<any> {
    let o: any = await ((this as any).getBridge as any)(),
      i: any = (e as any).accountUuid,
      c: any = (e as any).accountEmail,
      h: any = (e as any).accountUrl,
      g: any,
      E: any = !1;
    if (((e as any).connectionId as any) != (null as any)) {
      await ((this as any).refresh as any)();
      let f: any = ((((this as any).state as any).accounts as any).find as any)((y: any): any => ((y as any).connectionId as any) === ((e as any).connectionId as any));
      if ((f as any) == (null as any)) throw (Z as any)();
      i = (f as any).accountUuid, c = (f as any).accountEmail, h = (f as any).accountUrl, g = {
        vaultId: (f as any).vaultId,
        vaultName: (f as any).vaultName
      };
    } else {
      let f: any = await ((o as any).findVault as any)({
        accountUuid: i,
        vaultName: (e as any).vaultName
      }, t);
      (f as any) == (null as any) ? (g = await ((o as any).createVault as any)({
        accountUuid: i,
        vaultName: (e as any).vaultName
      }, t), E = !0) : g = f;
    }
    let b: any = await ((((this as any).options as any).backend as any).begin as any)(((e as any).connectionId as any) == (null as any) ? {
      vaultId: (g as any).vaultId
    } : {
      connectionId: (e as any).connectionId
    }, t);
    if (((e as any).connectionId as any) != (null as any) && ((b as any).connectionId as any) !== ((e as any).connectionId as any)) throw (Z as any)();
    (n as any).reauth = ((b as any).expectedGeneration as any) > (0 as any), (n as any).serverId = (b as any).connectionId ?? (n as any).serverId;
    let N: any = (b as any).providerExpiresInSeconds;
    if (((b as any).expirationMode as any) === ("enforce" as any) && (N as any) == (null as any)) throw (Z as any)();
    let s: any = `Grok Bot agents ${((((new (Date as any)() as any).toISOString as any)() as any).slice as any)(0, 10)} ${((((void 0, (bn as any).randomUUID) as any)() as any).slice as any)(0, 4)}`,
      d: any = {};
    (this as any).activeDelivery = async (f: any, y: any): Promise<any> => {
      if (((f as any).accountUuid as any) !== (i as any) || ((f as any).vaultId as any) !== ((g as any).vaultId as any)) throw (Z as any)();
      (n as any).delivered = !0, ((this as any).reportFlow as any)(n, {
        phase: "callback_received",
        outcome: "ok"
      });
      let a: any = await ((((this as any).options as any).backend as any).complete as any)({
        mintTicket: (b as any).mintTicket,
        token: (f as any).token,
        accountUuid: i,
        ...((c as any) == (null as any) ? {} : {
          accountEmail: c
        }),
        accountUrl: h ?? (f as any).accountUrl
      }, ((AbortSignal as any).any as any)([t, y]));
      (d as any).state = a;
      let u: any = (((a as any).accounts as any).find as any)((m: any): any => ((m as any).vaultId as any) === ((g as any).vaultId as any) && ((m as any).credentialGeneration as any) === (((b as any).expectedGeneration as any) + (1 as any) as any));
      if ((u as any) == (null as any)) throw (Z as any)();
      return {
        consumerReference: (u as any).connectionId
      };
    }, await ((o as any).mintAndDeliver as any)({
      accountUuid: i,
      vaultId: (g as any).vaultId,
      serviceAccountName: s,
      ...((N as any) == (null as any) ? {} : {
        expiresInSeconds: N
      })
    }, t);
    let p: any = (d as any).state;
    if ((p as any) == (null as any)) throw (Z as any)();
    ((this as any).applyState as any)(p);
    let l: any = (((p as any).accounts as any).find as any)((f: any): any => ((f as any).vaultId as any) === ((g as any).vaultId as any) && ((f as any).credentialGeneration as any) === (((b as any).expectedGeneration as any) + (1 as any) as any));
    if ((l as any) == (null as any)) throw (Z as any)();
    return {
      status: ((this as any).projectStatus as any)(),
      vaultName: (l as any).vaultName,
      vaultCreated: E,
      serviceAccountName: s,
      connectionId: (l as any).connectionId,
      credentialGeneration: (l as any).credentialGeneration
    };
  }
};
function $t(this: any, r: any): any {
  return new (De as any)({
    backend: (r as any).backend,
    reportConnectorAuth: (r as any).reportConnectorAuth,
    createBridge: async (e: any): Promise<any> => {
      let [{
          SandOnePasswordCliRuntime: n
        }, {
          OnePasswordDesktopProvisioningBridge: t
        }]: any = await ((Promise as any).all as any)([((((Promise as any).resolve as any)() as any).then as any)((): any => ((Xe as any)(), dn)), ((((Promise as any).resolve as any)() as any).then as any)((): any => ((wn as any)(), gn))]),
        o: any = new (n as any)({
          installRoot: ((void 0, (An as any).join) as any)((r as any).dataDir, "onepassword-cli"),
          launcherPath: (r as any).launcherPath,
          childProcessEnvironment: (r as any).childProcessEnvironment,
          launcherVerification: (r as any).launcherVerification
        });
      return new (t as any)({
        runtime: o,
        childProcessEnvironment: (r as any).childProcessEnvironment,
        sink: e
      });
    }
  });
}
0 && ((module as any).exports = {
  OnePasswordConnectionService,
  createDefaultOnePasswordConnectionService
});
//# debugId=6110c0aa-e441-400e-8b97-b78e4b1dc6dc
