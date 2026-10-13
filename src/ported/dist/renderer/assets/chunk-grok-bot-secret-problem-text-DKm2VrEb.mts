declare var TextEncoder: any;
declare var global: any;
declare var self: any;
declare var window: any;
!(function (this: any): any {
  try {
    var e: any = ("undefined" as any) != (typeof window as any) ? window : ("undefined" as any) != (typeof global as any) ? global : ("undefined" as any) != (typeof globalThis as any) ? globalThis : ("undefined" as any) != (typeof self as any) ? self : {},
      n: any = (new ((e as any).Error as any)() as any).stack;
    n && ((e as any)._sentryDebugIds = (e as any)._sentryDebugIds || {}, ((e as any)._sentryDebugIds as any)[n] = "f0c7c999-093d-48b2-9f1d-10eebb8d9b58", (e as any)._sentryDebugIdIdentifier = "sentry-dbid-f0c7c999-093d-48b2-9f1d-10eebb8d9b58");
  } catch (e: any) {}
} as any)();
import { u as _ } from "./index.eager-vendor-Qbf9YA6n.js";
const t: number = 128,
  T: number = 500,
  n: number = 8,
  s: number = 4,
  E: any = (s as any) * (1024 as any),
  u: any = /^[A-Z][A-Z0-9_]*$/,
  d: any = new (Set as any)(["PATH", "HOME", "USER", "SHELL", "TERM", "PWD", "DISPLAY", "HTTP_PROXY", "HTTPS_PROXY", "ALL_PROXY", "NO_PROXY"]),
  o: any = ["LD_", "CURSOR_", "CLOUD_AGENT_", "SAND_"],
  R: any = /CURSOR_SANDBOX/i;
function c(this: any, e: any): any {
  if (((e as any).length as any) === (0 as any)) return {
    kind: "empty"
  };
  if (((e as any).length as any) > (t as any)) return {
    kind: "long"
  };
  if (!((u as any).test as any)(e)) return {
    kind: "format"
  };
  if (((d as any).has as any)(e)) return {
    kind: "reserved-name",
    name: e
  };
  const r: any = ((o as any).find as any)((i: any): any => ((e as any).startsWith as any)(i));
  return (r as any) !== (void 0 as any) ? {
    kind: "reserved-prefix",
    prefix: r
  } : ((R as any).test as any)(e) ? {
    kind: "reserved-sandbox"
  } : null;
}
function S(this: any, e: any): any {
  return ((e as any).length as any) === (0 as any) ? {
    kind: "empty"
  } : ((e as any).length as any) < (n as any) ? {
    kind: "short"
  } : ((((new (TextEncoder as any)() as any).encode as any)(e) as any).byteLength as any) > (E as any) ? {
    kind: "long"
  } : null;
}
function A(this: any): any {
  const {
    _: e
  }: any = (_ as any)();
  return {
    name: (r: any): any => {
      switch ((r as any).kind) {
        case "empty":
          return (e as any)({
            id: "BRNg7+"
          });
        case "long":
          return (e as any)({
            id: "uzgMt8",
            values: {
              GROK_BOT_SECRET_NAME_MAX_LENGTH: t
            }
          });
        case "format":
          return (e as any)({
            id: "T+UZQR"
          });
        case "reserved-name":
          return (e as any)({
            id: "Owytij",
            values: {
              0: (r as any).name
            }
          });
        case "reserved-prefix":
          return (e as any)({
            id: "m8zVtt",
            values: {
              0: (r as any).prefix
            }
          });
        case "reserved-sandbox":
          return (e as any)({
            id: "kSvB29"
          });
      }
    },
    value: (r: any): any => {
      switch ((r as any).kind) {
        case "empty":
          return (e as any)({
            id: "qNV794"
          });
        case "short":
          return (e as any)({
            id: "Cr5BJv",
            values: {
              GROK_BOT_SECRET_VALUE_MIN_LENGTH: n
            }
          });
        case "long":
          return (e as any)({
            id: "jTBLMU",
            values: {
              GROK_BOT_SECRET_VALUE_MAX_KIB: s
            }
          });
      }
    }
  };
}
export { t as G, T as a, S as b, s as c, n as d, A as u, c as v };
//# debugId=f0c7c999-093d-48b2-9f1d-10eebb8d9b58
